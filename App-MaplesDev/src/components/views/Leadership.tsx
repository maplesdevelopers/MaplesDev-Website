import { LeadershipData } from '../../data/Leadership';

export const Leadership = () => {
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
                    Meet Our 2025-2026 Leadership Team
                </div>
                <div className="relative top-[30px] flex-grow h-[0.15rem] bg-[var(--spacer-color)]"></div>
                
                {/* container for leadership profiles */}
                <div 
                    className="
                        relative
                        flex
                        top-[var(--top-views)]
                        mx-[56px]
                        gap-[30px]
                        place-content-stretch
                    "
                >
                    {LeadershipData.map((person) => (
                        <div
                            key={person.name}
                            className="
                               relative
                               flex-row
                               p-[10px]
                               w-full
                               h-[300px]
                               bg-white/0
                               border-1
                               border-solid
                               rounded-[0.25rem]
                               items-center
                              justify-center
                            "
                        >
                            <div className="text-black text-[22px] items-center justify-center flex">{person.name}</div>
                            <div className="h-40 flex-col"></div>
                            <div className="text-[12px] text-[var(--primary-color)]/60 items-center justify-center flex">{person.position}</div>
                            <div className="text-[12px] text-[var(--primary-color)]/60 items-center justify-center flex">{person.project}</div>
                            <div className="text-[12px] text-[var(--primary-color)]/60 items-center justify-center flex">{person.project_role}</div>
                            <div className="text-[12px] text-[var(--primary-color)]/60 items-center justify-center flex">Grade {person.grade}</div>
                            <div className="text-[12px] text-[var(--primary-color)]/60 items-center justify-center flex md:hidden">{person.description}</div>
                        </div>
                    ))}
                </div>
            </main>
        </nav>   
    );
};