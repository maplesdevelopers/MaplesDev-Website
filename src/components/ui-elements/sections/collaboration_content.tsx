import { ProjectsData } from '../../../data/Projects';

export const CollaborationContent = () => {
    return (
        <div className="pt-10 w-screen">
            {/* Header */}
           <div
                className="
                    text-[clamp(2rem,3vw,6rem)]
                    font-medium
                    text-center
                    leading-none
                "
            >
                Projects
            </div>
            
            <div className="relative flex place-content-center grid grid-cols-1 md:grid-cols-1 p-[100px]">
                { ProjectsData.map((project, index) => (
                    <div
                        key={project.title}
                        className="
                            relative
                            flex
                            flex-row
                            place-content-center
                            p-0
                            mb-[100px]
                        "
                    >
                        <div className="text-[30px] px-[10px] border-1 items-center justify">{index}</div>
                        <div className="flex flex-col px-[15px] border-1">
                            <div className="text-[30px] items-center justify-center">{project.title}</div>
                            <div className="text-[30px]">{project.status}</div>
                            <div className="text-[30px] invisible md:visible">{project.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}