import { 
    useRef, 
    useState, 
    useEffect, 
    type CSSProperties 
} from 'react';

import SunIcon from '../../../assets/Icons/sun.svg';
import CloudIcon from '../../../assets/Icons/cloud.svg';

type Cloud = {
    id: number;
    top: number;
    size: number;
    side: 'left' | 'right' | 'center';
    offset: number;
};

export const TextWindow = () => {
    
  // variables for blink animation
  const lowestOpacity : number = 0.6;
  const blinkSpeed : string = "2s";
    
 // Scence state
 
 const [clouds, setClouds] = useState<Cloud[]>([]);
 const progressRef = useRef(0);
 const currentProgressRef = useRef(0);
 const animationRef = useRef(0);
 
 // Generate responsive clouds
 
 useEffect(() => {
    const generateClouds = () => {
        const width = window.innerWidth;
        
        // Number of clouds based on screen width
        const numberOfClouds = Math.max(
            6,
            Math.ceil(width / 260)
        );
        
        const generated: Cloud[] = [];
        
        for (let i = 0; i < numberOfClouds; i++) {
            let side:
                | 'left'
                | 'right'
                | 'center';
                            
            // Distribute clouds
            if (i % 3 === 0) {
                side = 'left';
            } else if (i % 3 === 1) {
                side = 'right';
            } else {
                side = 'center';
            }
            
            generated.push({
                id: i,
                top:
                    10 +
                    (
                        i /
                        numberOfClouds
                    ) * 60,
                size:
                    220 +
                    Math.random() * 180,
                side,
                offset:
                    window.innerWidth *
                    (0.4 + Math.random() * 0.3),
            });
        }
        
        setClouds(generated);
    };
    
    generateClouds();
    
    // Regenerate on resize
    window.addEventListener(
        'resize',
        generateClouds,
    );
    
    return () => {
        window.removeEventListener(
            'resize',
            generateClouds,
        );
    };
 }, []);
 
 // Scroll tracking
 
 useEffect(() => {
    const handleScroll = () => {
        const maxScroll = window.innerHeight; // fix this based on the hight of the navbar
        
        const scrollY = window.scrollY;
        
        // Clamp between 0 -> 1
        progressRef.current =
            Math.min(
                1,
                scrollY / maxScroll
            );
    };
    
    window.addEventListener(
        'scroll',
        handleScroll
    );
    
    return () => {
        window.removeEventListener(
            'scroll',
            handleScroll
        );
    };
 },[]);
 
 // Smooth scene animation
 
 useEffect(() => {
    const animate = () => {
        // Smooth interpolation
        currentProgressRef.current +=
            (
                progressRef.current
                -
                currentProgressRef.current
            ) * 0.08;
            
        // Update cloud transforms
        clouds.forEach((cloud) => {
            const element =
                document.getElementById(
                    `cloud-${cloud.id}`
                );
                
                if (!element) return;
                
                const progress =
                    currentProgressRef.current;
                    
                let translateX = 0;
                
                if (cloud.side === 'left') {
                    translateX =
                        -cloud.offset
                        * progress;
                } else if (
                    cloud.side === 'right'
                ) {
                    translateX =
                        cloud.offset
                        * progress;
                } else {
                    // center clouds split apart
                    translateX =
                        (
                            cloud.id % 2 === 0
                        )
                            ? -cloud.offset * progress
                            : cloud.offset * progress;
                }
                
                element.style.transform = `
                    translate3d(
                        ${translateX}px,
                        0px,
                        0px                    
                    )
                `;
        });
        
        // Sun movement
        
        const sun =
            document.getElementById(
                'hero-sun'
            );
        
        if (sun) {
            const p =
                currentProgressRef.current;
                
                // Projectile arc
                
                const startX = 500;
                const endX = -300;
                
                const startY = 500;
                const endY = -200;
                
                const x =
                    startX +
                    (
                        endX - startX
                    ) * p;
                
                // Arc
                const y =
                    startY +
                    (
                        endY - startY
                    ) * p
                    -
                    Math.sin(
                        p * Math.PI
                    ) * 180;
                
                sun.style.transform = `
                    translate3d(
                        ${x}px,
                        ${y}px,
                        0px
                    )
                `;
        }
        
        animationRef.current =
            requestAnimationFrame(
                animate
            );
    };
    
    animationRef.current =
        requestAnimationFrame(
            animate
        );
    
    return () => {
        cancelAnimationFrame(
            animationRef.current
        );
    };
 }, [clouds]);
 
 return (
    <div 
        className="
            relative
            h-[180dvh]
            overflow-hidden 
            pointer-events-none 
            select-none
        "
    >
    
        {/* STICKY HERO */}
        <div 
            className="
                top-0
                
                h-screen
                overflow-hidden 
            "
        >
            {/* Sun */}
            <div
                id="hero-sun"
                className="
                    absolute
                    left-[100%]
                    top-[100%]
                    aspect-square
                    w-[clamp(220px, 30vw, 520px)]
                    will-change-transform
                "
            >
                <img 
                    src={SunIcon}
                    alt=""
                    className="
                        h-full
                        w-full
                        object-contain
                    "
                    draggable={false}
                />
            </div>
            
            {/* CLOUDS */}
        
            {clouds.map((cloud) => {
            let initialLeft = '50%';
          
            if (
                cloud.side === 'left'
            ) {
                initialLeft = '-10%';
            } else if (
                cloud.side === 'right'
            ) {
                initialLeft = '70%';
            }
          
            return (
                <div
                    id={`cloud-${cloud.id}`}
                    key={cloud.id}
                    className="absolute will-change-transform"
                    style={{
                        top: `${cloud.top}%`,
                    
                        left: initialLeft,
                
                        width: `${cloud.size}px`,
                
                        opacity: 0.9,
                    
                    }}
                >
                    <img
                        src={CloudIcon}
                        alt=""
                        className="h-full w-full object-contain"
                        draggable={false}
                    />
            
                </div>
            );
            })}
        
            {/* SCROLL INDICATOR*/}
            <div 
                className="
                    absolute
                    bottom-8
                    left-1/2
                    flex
                    -translate-x-1/2
                    items-center
                    gap-2
                    blink
                    text-sm
                    tracking-[0.3em]
                "
                style={
                {
                    '--lowestOpacity': lowestOpacity,
                    '--blinkSpeed' : blinkSpeed,
                } as CSSProperties
                }
            >
                <div className="grow w-12"></div>
                <div className="grow flex gap-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>
                    <div className="pt-0">SCROLL</div>
                </div>
                <div className="w-12"></div>
            </div>
        </div>
    </div>
 );
};