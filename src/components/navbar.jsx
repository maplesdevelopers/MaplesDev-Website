import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon } from 'lucide-react'

const navLinks = [
    { name: 'Project', path: '/project' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' }
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className='fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center'>
            <nav className='flex justify-between items-center w-full'>
                <NavLink to='/' className='font-bold'>
                    maplesdev
                </NavLink>
                <ul className='flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink to={link.path} className='text-secondary'>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <a
                        href='https://www2.7oaks.org/school/maples/Pages/default.aspx'
                        className='rounded-lg py-2 px-4 bg-[#1FABEB]'
                    >
                        Explore Further
                    </a>
                </ul>
                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <XIcon /> : <MenuIcon />}</button>
            </nav>
        </header>
    )
}