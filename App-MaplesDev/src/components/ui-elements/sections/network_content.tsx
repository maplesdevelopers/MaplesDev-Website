import { TeacherAdvisorData, LeadershipData, MembersData } from '../../../data/Leadership';

export const NetworkContent = () => {
    return (
        <div className="pt-5 w-screen">
            {/* Header */}
            <header className="top-0">
                <div className="flex-grow h-[0.05rem] bg-(--spacer-color)"></div>
                <h2 className="text-[clamp(1rem,5.9vw,12rem)] text-nowrap text-center mt-[clamp(1rem,12vw,20rem)] leading-none font-light">MEET OUR 2025-26 LEADERSHIP TEAM</h2>
                <div className="flex-grow h-[0.05rem] bg-(--spacer-color)"></div>
            </header>
            
            <div className="relative flex flex-rol p-[10px]">
                <div className="text-[16px]">Teachers and Advisors</div>
                <div className="flex-grow min-w-[50px]"></div>
                <div className="flex flex-col">
                    { TeacherAdvisorData.map((person) => (
                        <div
                            key={person.name}
                            className="
                                relative
                                m-w-full
                                w-[clamp(10rem,130dvh,200dvh)]
                                items-center
                                justify-center
                            "
                        >
                            <div
                                className="text-[22px] text-start items-center justify-center"
                            >{person.name}</div>
                            <div className="flex-grow h-[0.05rem] bg-(--spacer-color)"></div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative flex flex-rol p-[10px]">
                <div className="">Developers</div>
                <div className="flex-grow min-w-[50px]"></div>
                <div className="flex flex-col">
                    { LeadershipData.map((person) => (
                        <div
                            key={person.name}
                            className="
                                relative
                                m-w-full
                                w-[clamp(10rem,130dvh,200dvh)]
                                items-center
                                justify-center
                            "
                        >
                            <div
                                className="text-[22px] text-start items-center justify-center"
                            >{person.name}</div>
                            <div className="flex-grow h-[0.05rem] bg-(--spacer-color)"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}