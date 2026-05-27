import { LeadershipData } from '../../../data/Leadership';

export const NetworkContent = () => {
    return (
        <div className="pt-10 w-screen">
            {/* Header */}
            <header className="sticky top-0 z-20">
                <div className="flex-grow h-[0.1rem] bg-(--spacer-color)"></div>
                <h2 className="text-2xl p-[10px]">Network</h2>
                <div className="flex-grow h-[0.15rem] bg-(--spacer-color)"></div>
            </header>
            
            <div>
                { LeadershipData.map((person) => (
                    <div
                        key={person.name}
                        className="
                            relative
                            flex-row
                            p-[10px]
                            w-full
                            h-[300px]
                            items-center
                            justify-center
                        "
                    >
                        <div
                            className="text-[22px] items-center justify-center flex"
                        >{person.name}</div>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    );
}