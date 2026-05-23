// common
import { Link } from 'react-router-dom';

// interfaces
import type { LinksProps } from './interfaces';

export const Navbar = ({ navLinks }: LinksProps) => {
    return (
        <div
            className="
                fixed
                items-center
                justify-center
                w-screen
                h-[50px]
                z-10
                bg-[var(--primary-color)]
                place-content-center
            "
        >
            <ul
                className="
                    flex
                    w-full
                    items-center
                    justify-start
                    p-0
                    ml-[var(--header-margin)]
                "
            >
                {navLinks.map((link, index) => (
                    <li
                        key={link.name}
                        className="
                            relative
                            flex-1
                            items-center
                            justify-center
                        "
                    >
                        <Link
                            to={link.link}
                            className={`cursor-pointer w-full h-full
                                ${link.name === "JOIN_US"
                                    ?"rounded-[0.2vw] p-[0.25rem] border-2 border-solid border-b outline-1 outline-solid outline-white outline-offset-[-0.2vw]"
                                    :""
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};