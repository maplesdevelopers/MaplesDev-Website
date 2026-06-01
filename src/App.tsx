import { Hero } from './components/ui-elements/Hero';
import { Footer } from './components/ui-elements/Footer';
import { NetworkContent, CollaborationContent, FunContent } from './components/ui-elements/sections';

import { Link, Element } from 'react-scroll';

function App() {
    return (
        <>
            <div className="m-0 p-0 box-border !scroll-smooth">
                <section
                    className="relative py-[10vw] px-[30vw] min-w-full min-h-dvh m-0 flex flex-col place-content-center box-border wrap-break-word items-center justify-center" 
                    id="intro"
                >
                    <Hero />
                    <p className="text-[clamp(1rem,1vw,1.6rem)] absolute bottom-10">[scroll]</p>
                </section>
                
                <nav
                    className="min-h-[100dvh] min-w-full items-center justify-center flex place-content-center gap-[1rem] text-[clamp(1rem,1vw,1.6rem)]"
                >
                    <Link to="network" smooth={true} duration={500} className="border-[0.1rem] p-[0.5rem] select-none hover:cursor-pointer">
                        network
                    </Link>
                    <Link to="collaboration" smooth={true} duration={500} className="border-[0.1rem] p-[0.5rem] select-none hover:cursor-pointer">
                        collaboration
                    </Link>
                    <Link to="fun" smooth={true} duration={500} className="border-[0.1rem] px-[1rem] py-[0.5rem] select-none hover:cursor-pointer">
                        fun
                    </Link>
                </nav>
                
                <Element className="relative min-h-dvh min-w-screen flex flex-col box-border items-center justify-center" name="network">
                    <NetworkContent />
                    {/* Spacer */}
                    <div className="min-w-screen min-h-[50dvh]"></div>
                </Element>
                
                <Element className="min-h-dvh min-w-screen" name="collaboration">
                    <CollaborationContent />
                </Element>
                
                <Element className="relative py-[10vw] px-[30vw] min-w-full min-h-dvh m-0 flex flex-col place-content-center box-border wrap-break-word items-center justify-center" name="fun">
                    <FunContent />
                </Element>
                
                {/* Footer */}
                <section className="relative flex place-content-center h-[10px] w-full mb-30">
                    <Footer />
                </section>
            </div>
        </>
    );
};

export default App;