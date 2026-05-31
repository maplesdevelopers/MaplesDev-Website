export const Footer = () => {
    return (
        <div className="relative flex place-content-center w-full">
            <ul className="flex gap-5">
                <li className="flex">
                    <a
                        className="flex"
                        href="https://github.com/maplesdevelopers?tab=repositories"
                        target="_blank"
                    >
                        <svg
                            className="h-[42px] w-[42px] aspect-square"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="./icons.svg#github-icon"></use>
                        </svg>
                    </a>
                </li>
                <li className="flex">
                    <a
                        href="https://x.com/MaplesDev"
                        target="_blank"
                    >
                        <svg
                            className="h-[36px] w-[36px]"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href="./icons.svg#x-icon"></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};