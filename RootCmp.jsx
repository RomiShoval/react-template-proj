const { useState, useEffect } = React
import { AnimalList } from "./cmps/AnimalList.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { CountDown } from "./cmps/CountDown.jsx";
import { Home } from "./cmps/Home.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx";
import {SeasonClock} from "./cmps/SeasonClock.jsx"
import {WatcherList} from "./cmps/WatcherList.jsx"
import "./assets/style/RootCmp.css"

export function RootCmp() {
    const [activeTab, setActiveTab] = useState("Home");

    useEffect(() => {
        console.log("Mounted: ", activeTab);
    }, [activeTab]);

    const animalProps = [
        { type: "Malayan Tiger", count: 787 },
        { type: "Mountain Gorilla", count: 212 },
        { type: "Fin Whale", count: 28 },
      ];

    const handelCountDownEnd = () =>{
    alert("Time is up!");
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "Animals":
                return <AnimalList animalProps={animalProps} />;
            case "Season Clock":
                return <SeasonClock />;
            case "Countdown":
                return <CountDown startFrom={10} onDone={handelCountDownEnd} />;
            case "Watchers":
                return <WatcherList />;
            case "Mouse Monitor":
                return <MouseMonitor />;
            default:
                return <Home />;
        }
    };



    return (
        <section className="app main-layout">
        <AppHeader />
        <nav className="tabs">
            {["Animals", "Season Clock", "Countdown", "Watchers", "Mouse Monitor"].map((tab) => (
                <button 
                    key={tab} 
                    className={`tab-button ${activeTab === tab ? "active" : ""}`} 
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </nav>
        <main className="tab-content">
            {renderTabContent()}
        </main>
    </section>
    );
}