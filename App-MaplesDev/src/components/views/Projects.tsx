export const Projects = () => {
    return (
        <nav>
            <main 
                className="
                    relative
                    top-[var(--top-views)]
                    w-full
                    h-[calc(100vh-var(--header-height))] 
                    overflow-hidden 
                    bg-sky-100 
                    z-0
                "
            >
                <div className="flex-grow h-[0.1rem] bg-(--spacer-color)"></div>
                <div
                    className="
                        relative 
                        top-[15px]
                        ml-[var(--header-margin)]
                        transparent-text-with-border
                    "
                >
                    We Are Working On
                </div>
                <div className="relative top-[30px] flex-grow h-[0.15rem] bg-(--spacer-color)"></div>
            </main>
        </nav>   
    );
};