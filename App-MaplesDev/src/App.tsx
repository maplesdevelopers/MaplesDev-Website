import { Hero } from './components/ui-elements/Hero';
import { NetworkContent, CollaborationContent, FunContent } from './components/ui-elements/sections';

function App() {
    return (
        <>
            <nav
                className="m-0 p-0 box-border"
            >
                <section
                    className="relative py-[10vw] px-[20vw] min-w-full min-h-dvh flex place-content-center items-center justify-center" 
                    id="intro"
                >
                    <Hero />
                </section>
                
                {/* Navigation */}                
                <section
                    className="min-h-[80dvh] min-w-full items-center justify-center"
                >
                    <div className="flex place-content-center mt-[40dvh] gap-[1rem] text-[clamp(1rem,1vw,1.6rem)]">
                        <a href="#network" className="border-[0.1rem] p-[0.5rem]">network</a>
                        <a href="#collaboration" className="border-[0.1rem] p-[0.5rem]">collaboration</a>
                        <a href="#fun" className="border-[0.1rem] px-[1rem] py-[0.5rem]">fun</a>
                    </div>
                </section>
                
                <section className="relative min-h-dvh min-w-screen" id="network">
                    <NetworkContent />
                </section>
                
                {/* Spacer */}
                <div className="min-w-screen min-h-[50dvh]"></div>
                
                <section className="min-h-dvh min-w-screen" id="collaboration">
                    <CollaborationContent />
                </section>
                
                <section className="min-h-dvh min-w-screen" id="fun">
                    <FunContent />
                </section>
            </nav>
        </>
    );
};

export default App;