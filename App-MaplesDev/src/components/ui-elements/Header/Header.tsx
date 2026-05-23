import { Link } from 'react-router-dom';

export const Header = () => {
    const MaplesDev: string = "Maples {dev}"
    return (
        <div className="relative mt-3">
            <nav className="flex ml-[var(--header-margin)] items-center justify-center">
                {/* Logo */}
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="
                                flex
                                whitespace-nowrap 
                                items-center 
                                justify-center 
                                text-[30px] 
                                tracking-[.25em]
                            "
                        >
                            { MaplesDev }
                        </Link>
                    </li>
                </ul>
                
                {/* Spacer */}
                <div className="relative flex-grow min-w-[300px]"></div>
                
                {/* Links to social profiles*/}
                <div className="flex-col items-center justify-center mr-[26px]" id="social">
                    <ul className="list-none p-0 gap-[8px] flex">
                        <li className="">
                            <a 
                                className="
                                    text-[16px]
                                    flex
                                    px-[12px]
                                    py-[6px]
                                    content-center
                                    gap-[8px]
                                    no-underline
                                "
                                href="https://github.com/maplesdevelopers?tab=repositories" target="_blank"
                            >
                                <svg
                                    className="h-[24px] w-[24px]"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="./icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li className="">
                            <a 
                                className="
                                    text-[16px]
                                    flex
                                    px-[12px]
                                    py-[6px]
                                    content-center
                                    gap-[8px]
                                    no-underline
                                "
                                href="https://x.com/MaplesDev" target="_blank"
                            >
                                <svg
                                    className="h-[22px] w-[22px]"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="./icons.svg#x-icon"></use>
                                </svg>
                                X.com
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <div className="flex-grow h-[0.1rem] bg-(--spacer-color) mt-[23px]"></div>
        </div>
    );
};