import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    MDevLogo,
    HamburgerButton,
    MenuLinks,
    MobileMenu,
} from '../ui-elements';
import { navigationLinks } from './navigation-links';
// import ScrollingText from '../animations/scroll-text';

export const Navbar = () => {
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav className="flex items-center h-16 px-3 m-0 md:px-4 bg-transparent">
                <div className="flex items-center justify-center w-full md:mx-4 lg:mx-8 2xl:w-[80em] 2xl:mx-auto">
                        <div className="md:hidden flex items-center">
                            <div className="flex absolute inset-s-4">
                                <HamburgerButton
                                    isOpen={isMobileMenuOpen}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <MDevLogo />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <MenuLinks menuLinks={navigationLinks} logo={<MDevLogo />} />
                        </div>
                    </div>
                <div className="md:hidden">
                    {isMobileMenuOpen && <MobileMenu menuLinks={navigationLinks} />}
                </div>
            </nav>
        </>
    );
};