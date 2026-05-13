// common
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    DisplayDevLogo,
    HamburgerButton,
    MenuLinks,
    MobileMenu,
} from '../ui-elements';

// components
import { navigationLinks } from './navigation-links';
import { Memo } from '../../data/Announcements';
import ScrollingText from '../animations/scroll-text';

import type { Clouds } from './interfaces';

// graphics
import NeptunePlanet from '../../assets/Pixel-Planets/neptune.svg';
import CloudIcon from '../../assets/Icons/cloud.svg';

export const Navbar = ({top, size, left}: Clouds) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // spread the clouds over the screen respective to the logo
    const clouds: Clouds[] = [
        {
          top: '0%',
          size: '220px',
          left: '-10%',
        },
        {
          top: '60%',
          size: '250px',
          left:'55%',
        },
        {
          top: '40%',
          size: '200px',
          left: '85%',
        },
        {
          top: '30%',
          size: '260px',
          left: '-10%',
        },
        {
          top: '67%',
          size: '200px',
          left: '5%',
        },
    ];
    
    // Animation refs
    
    const animationRef = useRef(0);
    
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav className="relative overflow-hidden flex flex-col grid-flow-col-dense grid grid-cols-6 gap-15 bg-sky-300/80 items-center mt-10">
                {clouds.map((cloud, index) => (
                    <div
                        key={index}
                        className="absolute aspect-square z-0 pointer-events-none"
                        style={{
                            top: cloud.top,
                            width: cloud.size,
                            left: cloud.left,
                        }}
                    >
                        <img src={CloudIcon} className="w-full h-full object-contain" alt=""/>
                    </div>                
                ))}
                <div className="relative z-10 items-center col-start-1 col-end-7 justify-between w-full">
                        <div className="flex justify-center w-full">
                            <div className="grow w-18"></div>
                            <div className="grow items-center order-center justify-center">
                                <DisplayDevLogo />
                            </div>
                            <div className="flex-none items-center justify-center order-last pr-5">
                                <HamburgerButton
                                    isOpen={isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            </div>
                        </div>
                </div>
                <div className="relative z-10 col-start-1 col-end-7 bg-transparent">
                    <ScrollingText />
                </div>
                <div className="relative z-10 flex justify-between w-full col-start-1 col-end-7 mt-35 mb-35">
                    <div className="grow w-18"></div>
                    <div className="flex text-justify font-bold text-1xl items-center order-center justify-center">
                        {Memo}
                    </div>
                    <div className="grow w-18"></div>
                </div>
                
                {isMobileMenuOpen && <div className="relative z-10 col-start-1 col-end-7">
                    {isMobileMenuOpen && <MobileMenu menuLinks={navigationLinks} />}
                </div>}
                
            </nav>
        </>
    );
};