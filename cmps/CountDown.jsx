const { useState, useEffect } = React
import "../assets/style/CountDown.css"

export function CountDown({startFrom ,onDone})
{
    const[time , setTime] = useState(startFrom);

    useEffect(() =>{
        if(time===0){
            onDone();
            return;
        }

        const timer = setTimeout(() =>{
            setTime(prev => prev-1)
        },1000);

        return () => clearTimeout(timer);
    },[time,onDone])

    

    return(
        <div className = {`countDown ${time <= 5 ? "red" : ""}`}>
            <div className="inner-box">{time}</div>
        </div>
    );
}