import { useEffect, useState } from "react";

export const Hero = () => {
    const text: string = "is about network, collaboration, and fun";
    const mdev: string = "maples{dev}"
    
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);        
        };
        
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    
    }, []);  
      
    // breakpoints
    const LG = 1920;
    const MD = 480;
    
    const k = Math.min(
        1,
        Math.max(
            0,
            (LG - width) / (LG - MD)
        )
    );
    
    const indent = 630 - (455 * k);
    const left = 100 - (90 * k);
    
    return(
        <div className="relative">
            <div
                className="
                    relative
                    text-[clamp(2rem,6vw,10rem)] 
                    text-center
                    text-pretty
                    font-medium 
                    flex-col 
                    items-center 
                    justify-center
                "
                style={{
                    textIndent: `${indent}px`,
                }}
            >{ text }</div>
            
            <div className="
                    absolute
                    top-[0px]
                    text-[clamp(2rem,6vw,10rem)]
                    font-medium
                "
                style={{
                    left: `${left}px`,
                }}
            >{ mdev }</div>
        </div>
    );
};