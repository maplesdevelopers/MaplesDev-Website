import React, { useState, useRef, useEffect } from 'react';
import "./ScrollingText.css";

interface ScrollingTextProps {
    items: string[];
    speed?: number; // depends on the input width of text
    direction?: 'scroll-left' | 'scroll-right'; // default set to scroll-left
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
    items,
    speed = 50,
    direction = 'scroll-left'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const groupRef = useRef<HTMLDivElement>(null);
    
    const loopItems = [...items, ...items];
        
    useEffect(() => {
        if (!containerRef.current || !contentRef.current || !groupRef.current) return;
        
        const pixelsPerSecond = speed ?? 100;
        const distance = groupRef.current.scrollWidth;
          
        let duration = distance / pixelsPerSecond;
        
        const fps = 60;
        duration = Math.round(duration * fps) / fps;
        
        containerRef.current.style.setProperty('--marquee-speed', `${duration}s`);
        containerRef.current.style.setProperty('--scroll-distance', `${distance}px`);
        containerRef.current.style.setProperty('--direction', direction);
        
    }, [items, direction, speed]);
    
       return (
        <div className="scrolling-text-container">
            <div className="scrolling-group">
                {items.map((item, index) => (
                    <div className="scrolling-text-item" key={index}>
                        {item}
                    </div>
                ))}
            </div>
            
            <div aria-hidden className="scrolling-group">
                {items.map((item, index) => (
                    <div className="scrolling-text-item" key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
      );
    };

export default ScrollingText;
