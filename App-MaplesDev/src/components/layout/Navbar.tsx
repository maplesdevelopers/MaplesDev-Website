import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    MDevLogo,
    HamburgerButton,
    MenuLinks,
    MobileMenu,
} from '../ui-elements';
import { navigationLinks } from './navigation-links';
import ScrollingText from '../animations/scroll-text';

export const Navbar = () => {
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav className="flex flex-col grid-flow-col-dense grid grid-cols-6 gap-4 items-center h-70 m-0 bg-transparent">
                <div className="flex flex-row items-center col-start-1 col-end-7 justify-center overflow-hidden w-full">
                        <div className="justify-between flex items-center w-full">
                            <div className="flex-1 flex justify-center">
                                <MDevLogo />
                            </div>
                            <div className="w-12 px-2">
                                <HamburgerButton
                                    isOpen={isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            </div>
                        </div>
                </div>
                <div className="col-start-1 col-end-7 bg-transparent">
                    <ScrollingText />
                </div>
                <div className="col-start-1 col-end-7">
                    {isMobileMenuOpen && <MobileMenu menuLinks={navigationLinks} />}
                </div>
            </nav>
            
        </>
    );
};