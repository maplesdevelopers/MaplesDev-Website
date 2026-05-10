import { useEffect, useRef, useState } from 'react';

import { Announcements, Speed }
from '../../../data/Announcements';

import Left from '../../../assets/Pixel-Button-Image/left.svg';
import Center from '../../../assets/Pixel-Button-Image/center.svg';
import Right from '../../../assets/Pixel-Button-Image/right.svg';

const items = Announcements;
const speed = Speed;

const CENTER_STEP = 28;
const MIN_CENTERS = 1;

const fontSize: number = 13;
const fontFamily: string = "Brick";

const TEXT_WIDTH_PER_CENTER = 28;

let canvas: HTMLCanvasElement | null = null;

function getTextWidth(text: string, fontFamily: string, fontSize: number) {
    const el = document.createElement("canvas");
    
    const context = el.getContext("2d");
    
    if (!context) return 0;
    
    context.font = `${fontSize}px ${fontFamily}`;
    
    return context.measureText(text).width;
};

function getCentersNeeded(textWidth: number) {
    let padding;

    if (textWidth < 125) {
        padding = 0;
    } else if (textWidth < 250) {
        padding = 16;
    } else if (textWidth < 500) {
        padding = 28;
    } else {
        padding = 100;
    }
    
    padding = 0;

    return Math.max(
        MIN_CENTERS,
        Math.ceil(
            (textWidth + padding) /
            TEXT_WIDTH_PER_CENTER
        )
    );
};

function PixelItem({ text }: { text: string }) {

    const [textWidth, setTextWidth] =
        useState(0);
        
    useEffect(() => {
        
        async function measure() {
            await document.fonts.ready;
            
            const width = getTextWidth(
                text,
                fontFamily,
                fontSize
            );
            
            setTextWidth(width);
        }
        
        measure();
    
    }, [text]);
    
    const centersNeeded =
        getCentersNeeded(textWidth);
        
    const totalWidth =
        ((centersNeeded - 1) * CENTER_STEP)
        + (48 * 2);

    return (
        <div
            className="relative flex h-12 mr-4"
            style={{
                width: `${totalWidth}px`,
            }}
        >

            {/* LEFT */}
            <img
                className="
                    absolute
                    left-0
                    top-0
                    h-12
                    w-12
                    pointer-events-none
                    select-none
                "
                src={Left}
                alt=""
                draggable={false}
            />

            {/* CENTERS */}
            {Array.from({
                length: centersNeeded,
            }).map((_, i) => (
                <img
                    key={i}
                    className="
                        absolute
                        top-0
                        h-12
                        w-12
                        pointer-events-none
                        select-none
                        "
                    style={{
                        left: `${(i + 1) * CENTER_STEP}px`,
                    }}
                    src={Center}
                    alt=""
                    draggable={false}
                />
            ))}

            {/* RIGHT */}
            <img
                className="absolute top-0 h-12 w-12 pointer-events-none select-none"
                style={{
                    left: `${totalWidth - 48}px`,
                }}
                src={Right}
                alt=""
                draggable={false}
            />

            {/* TEXT */}
            <div
                className="
                    absolute
                    top-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                    leading-none
                    whitespace-nowrap
                    overflow-hidden
                    h-full
                "
                style={{
                    left: `28px`,
                    width: `${centersNeeded * CENTER_STEP}px`,
                    fontSize: `${fontSize}px`,
                    fontFamily: fontFamily,
                }}
            >
                {text}
            </div>
        </div>
    );
};

function ScrollingText() {

    const trackRef = useRef<HTMLDivElement>(null);

    const groupRef = useRef<HTMLDivElement>(null);
    
    const velocityRef = useRef(speed);
    
    const positionRef = useRef(0);
    
    const animationRef =
        useRef<number>(0);

    useEffect(() => {

        const track = trackRef.current;
        const group = groupRef.current;

        if (!track || !group) return;

        let groupWidth = 0;
        
        const initialize = async () => {
            
            await document.fonts.ready;
            
            requestAnimationFrame(() => {
                
                requestAnimationFrame(() => {
                    
                    groupWidth = 
                        group.offsetWidth;
                    
                    animationRef.current =
                        requestAnimationFrame(animate);
                });
            });
        };
        
        initialize();
        
        let targetVelocity = speed;
        
        let lastTime = performance.now();
        
        const animate = (time: number) => {
        
            const deltaTime =
                (time - lastTime) / 1000;
                
            lastTime = time;
            
            const STOP_EPSILON = 6;
            
            const ACCELERATION = 3;
            const DECELERATION = 12;
            
            const easing =
                targetVelocity === 0
                    ? DECELERATION
                    : ACCELERATION;
            
            velocityRef.current +=
                (targetVelocity -
                 velocityRef.current)
                * Math.min(1, deltaTime * easing);
                
            if (
                targetVelocity === 0 &&
                Math.abs(velocityRef.current)
                < STOP_EPSILON
            ) {
                velocityRef.current = 0;
            };
            
            positionRef.current -=
                velocityRef.current * deltaTime;
            
            if (positionRef.current <= -groupWidth) {
                positionRef.current += groupWidth;
            }
            
            track.style.transform = 
                `translate3d(${positionRef.current}px, 0px, 0px)`;
                
            animationRef.current =
                requestAnimationFrame(animate);
        };
        
        animationRef.current = 
            requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            targetVelocity = 0;
        };

        const handleMouseLeave = () => {
            targetVelocity = speed;
        };

        track.addEventListener(
            'mouseenter',
            handleMouseEnter
        );

        track.addEventListener(
            'mouseleave',
            handleMouseLeave
        );

        return () => {
        
            cancelAnimationFrame(
                animationRef.current
            );

            track.removeEventListener(
                'mouseenter',
                handleMouseEnter
            );

            track.removeEventListener(
                'mouseleave',
                handleMouseLeave
            );
        };

    }, []);

    return (
        <div className="w-full overflow-hidden bg-transparent">

            <div
                ref={trackRef}
                className="
                    flex
                    w-max
                    will-change-transform
                    translate-none
                    rotate-none
                    scale-none
                    scroll-track
                    visible
                "
            >

                {/* ORIGINAL GROUP */}
                <div
                    ref={groupRef}
                    className="flex"
                >
                    {items.map((text, index) => (
                        <PixelItem
                            key={`original-${index}`}
                            text={text}
                        />
                    ))}
                </div>

                {/* DUPLICATE GROUP */}
                <div className="flex">
                    {items.map((text, index) => (
                        <PixelItem
                            key={`duplicate-${index}`}
                            text={text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollingText;