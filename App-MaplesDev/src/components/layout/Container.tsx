import { Navbar } from './Navbar.tsx';
import { Outlet } from 'react-router-dom';

// links
import { navigationLinks } from './navigation-links';

export const Container = () => {
    return (
        <>
            <Outlet />
            <Navbar navLinks={navigationLinks}/>
        </>
    );
};