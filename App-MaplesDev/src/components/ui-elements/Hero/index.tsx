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
                maples{`{dev}`} is about network, collaboration, and fun
            </div>
            
            <div className="flex flex-row place-content-center gap-[1rem] mt-20 text-[clamp(0.8rem,1vw,1.6rem)]">
                <a href="#network" className="border-[0.1rem] p-[0.5rem]">network</a>
                <a href="#collaboration" className="border-[0.1rem] p-[0.5rem]">collaboration</a>
                <a href="#fun" className="border-[0.1rem] px-[1rem] py-[0.5rem]">fun</a>
            </div>
        </div>
    );
};