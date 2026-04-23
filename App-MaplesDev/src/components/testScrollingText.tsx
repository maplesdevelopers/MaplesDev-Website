import { useRef, useEffect, useState } from 'react';
import './TestScrollingText.css';
import Announcements from "../data/Announcements";


function TestScrollingText() {
    const trackRef = useRef<HTMLDivElement>(null);
    const groupRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const update = () => {
            if (!groupRef.current || !trackRef.current) return;
            
            const width = groupRef.current.scrollWidth;
            const speed = 100;
            const duration = width / speed;
            
            trackRef.current.style.setProperty("--duration", `${duration}s`);
            trackRef.current.style.setProperty("--distance", `${width}px`);
        };
        
        update();
        window.addEventListener("resize", update);
        
        return () => window.removeEventListener("resize", update);
    }, []);
  
    return (
        <div className="carousel">
            <div className="track" ref={trackRef}>
            
                <div className="group" ref={groupRef}>
                    {Announcements.map((text, i) => (
                        <div key={i} className="card">{text}</div> 
                    ))}
                </div>
            
                <div className="group">
                    {Announcements.map((text, i) => (
                        <div key={i + "-clone"} className="card">{text}</div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default TestScrollingText;  
      