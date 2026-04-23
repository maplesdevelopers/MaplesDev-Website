import "./TestApp.css"
import Announcements from "./data/Announcements"

function TestApp() {
    const announcements: string[] = Announcements
    
    return (
            <div className="carousel">
                <div className="group">
                    <div className="card">hello World how are you</div>
                    <div className="card">test0</div>
                </div>
                <div aria-hidden className="group">
                    <div className="card">hello World how are you</div>
                    <div className="card">test0</div>

                </div>
                
            </div>
            
    );
}

export default TestApp;
