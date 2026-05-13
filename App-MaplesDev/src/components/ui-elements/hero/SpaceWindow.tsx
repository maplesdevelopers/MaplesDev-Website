// common
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

// animation
import MovingStars from '../../animations/MoveStars';
import ZoomingParallax from '../../animations/ZoomParallax';

// data
import { planets } from './Planets';

const BASE_EARTH_SIZE = 90;

const WORLD_WIDTH = 1600;
const WORLD_HEIGHT = 900;

const SpaceWindow = () => {
    const [systemScale, setSystemScale] =
        useState(1);

    // blink animation attributes
    const blinkSpeed = '2s';
    const lowestOpacity = 0.6;

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
            className="relative w-full bg-black"
        >
            {/* Stars Background */}
            <div className="fixed inset-0 z-0">
                <Canvas>
                    <MovingStars />
                </Canvas>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute z-20 flex top-8 left-1/2 -translate-x-1/2 gap-1 tracking-[0.3em] text-sm text-white items-center blink"
                style={
                    {
                        '--lowestOpacity':
                            lowestOpacity,
                        '--blinkSpeed':
                            blinkSpeed,
                    } as CSSProperties
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="
                            M8.25 15
                            L12 18.75
                            L15.75 15
                            
                            m-7.5-6
                            L12 5.25
                            L15.75 9
                        "
                    />
                </svg>
                <div>
                    SCROLL TO EXPLORE
                </div>
            </div>

            {/* Solar System World */}
            <ZoomingParallax
                className="
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
                    {planets.map((planet, index) => {
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
                            <motion.div
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
                            </motion.div>
                        );
                    })}
                </div>

            </ZoomingParallax>
        </div>
    );
}

export default SpaceWindow;