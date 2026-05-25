export const Hero = () => {
    return (
        <div className="relative w-full">
            <div
                className="
                    text-[clamp(2rem,6vw,10rem)]
                    font-medium
                    text-center
                    leading-none
                "
            >
                <span className="invisible">
                    maples{`{dev}`}
                </span>
                <span>
                    is about network, collaboration, and fun
                </span>
            </div>
            <div
                className="
                    absolute
                    top-0
                    left-[62%]
                    text-[clamp(2rem,6vw,10rem)]
                    font-medium
                    leading-none
                    hero-text-animation
                    will-change-transform
                "
                
            >
                maples{`{dev}`}
            </div>
        </div>
    );
};