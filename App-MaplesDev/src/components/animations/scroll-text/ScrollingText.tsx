import { useEffect, useMemo, useRef } from 'react';


import { Announcements, Speed } from '../../../data/Announcements';


import Left from '../../../assets/Pixel-Button-Image/left.svg';
import Center from '../../../assets/Pixel-Button-Image/center.svg';
import Right from '../../../assets/Pixel-Button-Image/right.svg';


const items = Announcements
const speed = Speed


// Calculate the numbers of center images needed to fit the text item

const CENTER_STEP = 28;

const MIN_CENTERS = 1;

const FONT = '10px Brick, sans-serif';

function getCentersNeeded(textWidth: number) {
    const TEXT_WIDTH_PER_CENTER = 24;
    
    let padding;
    let match;
    
    if (textWidth > 0 && textWidth < 90) {
        padding = 0;
        match = 0.6;
        
    } else if (textWidth > 101 && textWidth < 250) {
        padding = 16;
        match = 1;
    } else {
        padding = 32;
        match = 1;
    }
    
    return Math.max(    
        MIN_CENTERS,
        Math.ceil(((textWidth + padding) / TEXT_WIDTH_PER_CENTER) * match)
    );
}


// Calculate the rendered text width

function getTextWidth(text: string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (!context) return 0;
    
    context.font = FONT;
    
    return context.measureText(text).width;
}


function generateRepeated(items: string[]) {
    let result = [...items];
    
    while (result.length < 20) {
        result = [...result, ...result];
    }
    
    return [...result, ...result];
}


function ScrollingText() {
    const trackRef = useRef<HTMLDivElement>(null);
    
    const repeated = useMemo(
        () => generateRepeated(items),
        []
    );

    useEffect(() => {
        const track = trackRef.current;
        
        if (!track) return;

        const width = track.scrollWidth / 2;
        
        const duration = width / speed;

        track.style.animationDuration = `${duration}s`;

        const handleMouseEnter = () => {
            const computedStyle = window.getComputedStyle(track);
            
            const transform =
                computedStyle.transform === "none"
                    ? 'matrix(1, 0, 0, 1, 0, 0)'
                    : computedStyle.transform;
            
            const matrix = new DOMMatrixReadOnly(transform);
            
            // current X position
            const currentX = matrix.m41;

            // freeze current position
            track.style.transform = `translateX(${currentX}px)`;
            
            // stop animation & apply smooth transition
            track.classList.add('slowing');
            
        };
        
        track.addEventListener(
            'mouseenter',
            handleMouseEnter
        );
        
        return () => {
            track.removeEventListener (
                'mouseenter',
                handleMouseEnter
            );
        };
    }, []);

    return (
        <div className="bg-transparent w-full overflow-hidden">
            <div 
                className="flex gap-4 will-change-transform scroll-animate" 
                ref={trackRef}
            >
                {repeated.map((text, index) => {
                    const textWidth = getTextWidth(text);
                    
                    const centersNeeded = 
                        getCentersNeeded(textWidth);
                        
                    const totalWidth =
                        (centersNeeded * CENTER_STEP) + 56;
                        
                    return (
                        <div
                            key={`${text}-${index}`}
                            className="relative flex h-12 shrink-0"
                            style={{
                                width: `${totalWidth}px`,
                            }}
                        >
                            {/* LEFT */}
                            <img 
                                className="absolute left-0 top-0 h-12 w-12"
                                src={Left}
                                alt=""
                            />
                            
                            {/* CENTERS */}
                            {Array.from({
                                length: (centersNeeded),
                            }).map((_, i) => (
                                <img
                                    key={i}
                                    className="absolute top-0 h-12 w-12"
                                    style={{
                                        left: `${(i + 1) * CENTER_STEP}px`,
                                    }}
                                    src={Center}
                                    alt=""
                                />
                            ))}
                            
                            {/* RIGHT */}
                            <img
                                className="absolute top-0 h-12 w-12"
                                style={{
                                    left: `${
                                        (centersNeeded + 1) *
                                        CENTER_STEP
                                    }px`,
                                }}
                                src={Right}
                                alt=""
                            />
                            
                            {/* TEXT */}
                            <div
                                className="absolute top-4 left-5 whitespace-nowrap text-[10px]"
                                style={{
                                    width: `${
                                        centersNeeded *
                                        24
                                    }px`,
                                }}
                            >
                              {text}  
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ScrollingText;