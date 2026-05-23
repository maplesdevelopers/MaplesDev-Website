import { Header } from './components/ui-elements/Header';
import { Navigation } from './navigation';

function App() {
    return (
        <>
            <nav className="relative m-0">
                <section className="fixed w-screen h-[var(--header-height)] z-10 bg-[var(--primary-color)]">
                    <div className="m-0">
                        <Header />
                    </div>
                </section>
                
                {/* Navigation */}
                <section className="relative bottom-0 w-screen h-[var(--header-height)]">
                    <Navigation />
                </section>
            </nav>
        </>
    );
};

export default App;