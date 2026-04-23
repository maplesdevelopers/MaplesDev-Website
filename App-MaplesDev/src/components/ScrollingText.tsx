import { useRef, useEffect } from "react";
import "./ScrollingText.css";
import Announcements from "../data/Announcements";

const items = Announcements

function generateRepeated(items: string[]) {
    let result = [...items];
    
    while (result.length < 20) {
        result = [...result, ...items];
    }
    
    return [...result, ...result];
}

function TestApp() {
    const trackRef = useRef<HTMLDivElement>(null);

    const repeated = generateRepeated(items);
    
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        
        const width = track.scrollWidth /2;
        
        const speed = 100;
        const duration = width / speed;
        
        track.style.animationDuration = `${duration}s`;
        
    }, []);
    
    return (
            <div className="carousel">
                <div className="track" ref={trackRef}>
                    {repeated.map((text, i) => (
                        <div key={i} className="card">{text}</div>
                  ))}
                </div>
            </div>
    );
}

export default TestApp;