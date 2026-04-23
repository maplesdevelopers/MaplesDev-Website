import "./testScrollingText.css"

interface testScrollingPromps {
    speed?: number;
    direction?: 'scroll-left' | 'scroll-right';
}

const textScrollingText: React.FC<testScrollingPromps> = ({
    speed: 50,
    direction: 'scroll-left'
    }) => {
    return (
        <div className="carousel">
            <div className="group">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
                <div className="card">5</div>
                <div className="card">6</div>
            </div> 
        </div>
  );
};

export default textScrollingText;