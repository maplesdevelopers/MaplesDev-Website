import { TeacherAdvisorData, LeadershipData, MembersData } from '../../../data/Leadership';

export const NetworkContent = () => {
    return (
        <div className="pt-5 w-screen">
            {/* Header */}
           <div
                className="
                    text-[clamp(2rem,3vw,6rem)]
                    font-medium
                    text-center
                    leading-none
                "
            >
                Meet Our 2025-26 Leadership Team
            </div>
            
            {/* Teachers and Advisors */}
            <div className="relative flex place-content-center mt-[100px] grid grid-cols-1 md:grid-cols-2">
                { TeacherAdvisorData.map((person) => (
                    <div
                        key={person.name}
                        className="
                            relative
                            flex
                            flex-col
                            place-content-center
                            w-full
                            p-[100px]
                        "
                    >
                        <div className="text-[clamp(1.5rem,1.6vw,4rem)] text-center">{person.name}</div>
                        <div className="text-[clamp(1.05rem,1.1vw,4rem)] text-center">{person.position}</div>
                    </div>
                ))}
            </div>
            
            {/* Developers */}
            <div className="relative grid grid-cols-1 md:grid-cols-2">
                { LeadershipData.map((person) => (
                    <div
                        key={person.name}
                        className="
                            relative
                            flex
                            flex-col
                            place-content-center
                            w-full
                            p-[100px]
                        "
                    >
                        <div className="text-[clamp(1.5rem,1.6vw,4rem)] text-center">{person.name}</div>
                        <div className="text-[clamp(1.05rem,1.1vw,4rem)] text-center">{person.position}</div>
                        <div className="text-[clamp(1.05rem,1.1vw,4rem)] text-center">{person.project}</div>
                        <div className="text-[clamp(1.05rem,1.1vw,4rem)] text-center">{person.grade}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}