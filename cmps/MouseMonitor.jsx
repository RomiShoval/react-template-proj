const { useState, useEffect } = React
import "../assets/style/MouseMonitor.css"

export function MouseMonitor(){
    const [isOn, setIsOn] = useState(true);
    const [pos,setPos] = useState({x:0,y:0});

    useEffect(() =>{
        const updatePos = (e) => setPos({x:e.clientX , y: e.clientY});

        if(isOn){
            document.addEventListener("mousemove",updatePos)
        }

        return () => document.removeEventListener("mousemove",updatePos)
    },[isOn])
    return( 
        <div className="tracker-container">
            <h3>Mouse Position</h3>
            <p>{isOn ? `x: ${pos.x}, y: ${pos.y}` : "Tracking Paused"}</p>
            
            <div className="button-container">
            <button className="pause-btn" onClick={() => setIsOn(false)}>Pause</button>
            <button className="resume-btn" onClick={() => setIsOn(true)}>Resume</button>
            </div>
        </div>);
}