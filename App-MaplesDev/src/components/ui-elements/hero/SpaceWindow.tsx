// common
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

// animation
import MovingStars from '../../animations/MoveStars';

// data
import { planets } from './Planets';

const BASE_EARTH_SIZE = 90;

const WORLD_WIDTH = 1600;
const WORLD_HEIGHT = 900;

const SpaceWindow = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    const [systemScale, setSystemScale] =
        useState(1);
        
    useEffect(() => {
        const updateScene = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Scale based on BOTH width + height
            const scaleX =
                width / WORLD_WIDTH;
            
            const scaleY =
                height / WORLD_HEIGHT;
                
            // Use smaller scale to preserve layout
            const scale = Math.min(
                scaleX,
                scaleY
            );
            
            // Prevent too tiny / huge
            const clampedScale = Math.min(
                Math.max(scale, 0.45),
                1
            );
            
            setSystemScale(clampedScale);
        };
        updateScene();
        
        window.addEventListener('resize', updateScene);
        
        return () => {
            window.removeEventListener('resize', updateScene);
        };
    }, []);
    
    return (
        <div 
            ref={containerRef}
            className="relative h-[100dvh] w-full overflow-hidden bg-black"
        >
            {/* Stars Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <MovingStars />
                </Canvas>
            </div>
            
            {/* Solar System World */}
            <motion.section 
                className="
                    absolute 
                    inset-0 
                    z-10
                "
            >
                {/* Planets */}
                <div 
                    className="absolute top-0 left-0"
                    style={{
                        width: WORLD_WIDTH,
                        height: WORLD_HEIGHT,
                        
                        left: '50%',
                        
                        top: '50%',
                        
                        transform: 
                            `translate(-50%, -50%) scale(${systemScale})`,
                        
                        transformOrigin:
                            'center',
                            
                        willChange: 'transform',
                     }}
                >
                    {planets.map((planet) => {
                        const size =
                            BASE_EARTH_SIZE *
                            planet.sizeRatio;
                        
                        const x = 
                            WORLD_WIDTH *
                            planet.xPercent;
                        
                        const y =
                            WORLD_HEIGHT *
                            planet.yPercent;
                        
                        return (
                            <div
                                key={planet.name}
                                className="
                                    absolute
                                    flex
                                    items-center
                                    justify-center
                                    pointer-events-none
                                "
                                style={{
                                    width: size,
                                    height: size,
                                    
                                    left: 
                                        x -
                                        size / 2,
                                        
                                    top:
                                        y -
                                        size / 2,
                                    
                                    zIndex:
                                        planet.zIndex ??
                                        1,
                                }}
                            >
                                <img 
                                    src={planet.image}
                                    alt={
                                        planet.name
                                    }
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                        select-none
                                    "
                                    draggable={
                                        false
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
                
            </motion.section>
        </div>
    );
}

export default SpaceWindow;