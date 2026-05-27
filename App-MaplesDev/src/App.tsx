import { Hero } from './components/ui-elements/Hero';
import { NetworkContent, CollaborationContent, FunContent } from './components/ui-elements/sections';

function App() {
    return (
        <>
            <nav
                className="m-0 p-0 box-border"
            >
                <section
                    className="relative py-[10vw] px-[20vw] min-w-full min-h-[100dvh] flex place-content-center items-center justify-center" 
                    id="intro"
                >
                    <Hero />
                </section>
                
                <section className="relative min-h-dvh min-w-screen" id="network">
                    <NetworkContent />
                </section>
                
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