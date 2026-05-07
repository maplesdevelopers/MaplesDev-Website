import { useEffect, useRef } from 'react';
import { Announcements, Speed } from '../../../data/Announcements';

const items = Announcements
const speed = Speed

function generateRepeated(items: string[]) {
    let result = [...items];

    while (result.length < 20) {
        result = [...result, ...items];
    }

    return [...result, ...result];
}

function ScrollingText() {
    const trackRef = useRef<HTMLDivElement>(null);

    const repeated = generateRepeated(items);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const width = track.scrollWidth / 2;
        const duration = width / speed;

        track.style.animationDuration = `${duration}s`;

        const handleMouseEnter = () => {
            const computedStyle = window.getComputedStyle(track);
            const matrix = new DOMMatrixReadOnly(computedStyle.transform);
            
            // current X position
            const currentX = matrix.m41;

            // freeze current position
            track.style.transform = `translateX(${currentX}px)`;
            
            // stop animation & apply smooth transition
            track.classList.add('slowing');
            
        };
        }, []);

    return (
        <div className="flex bg-transparent w-full rounded-none overflow-hidden">
            <div className="flex gap-4 will-change-transform scroll-animate" ref={trackRef}>
                {repeated.map((text, i) => (
                    <div key={i} className="flex-initial px-3 py-2 text-base rounded-none whitespace-nowrap">{text}</div>
                ))}
            </div>
        </div>
    );
}

export default ScrollingText;