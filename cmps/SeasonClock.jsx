const { useState, useEffect } = React
import "../assets/style/SeasonClock.css"

export function SeasonClock(){
    const [time,setTime] = useState(new Date());
    const[isDark , setIsDark] = useState(false);

    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date())
        } , 1000)
        return () => clearInterval(interval)
    },[])

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    const getSeason = (month) => {
        if (month >= 2 && month <= 4) return "Spring";
        if (month >= 5 && month <= 7) return "Summer";
        if (month >= 8 && month <= 10) return "Autumn";
        return "Winter";
    };

    const season = getSeason(time.getMonth()).toLowerCase();
    const seasonImages = {
        winter: "/season-imgs/winter.png",
        spring: "/season-imgs/spring.png",
        summer: "/season-imgs/summer.png",
        autumn: "/season-imgs/autumn.png"
    };

    return(
        <div className="season-clock-container">
            <div className={`season-clock ${isDark ? "dark" : "light"}`} onClick={toggleTheme}>
                <h2>{getSeason(time.getMonth())}</h2>
                <h2>{time.toLocaleString("en-US", { month: "long" })} ({season.charAt(0).toUpperCase() + season.slice(1)})</h2>
                <img src={seasonImages[season]} />
                <h3>{time.toLocaleString("en-US", { weekday: "long" })}</h3>
                <h1>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    );
}