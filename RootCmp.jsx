import { AnimalList } from "./cmps/AnimalList.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { CountDown } from "./cmps/CountDown.jsx";
import { Home } from "./cmps/Home.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx";
import {SeasonClock} from "./cmps/SeasonClock.jsx"
import {WatcherList} from "./cmps/WatcherList.jsx"

export function RootCmp() {
    const animalProps = [
        { type: "Malayan Tiger", count: 787 },
        { type: "Mountain Gorilla", count: 212 },
        { type: "Fin Whale", count: 28 },
      ];

      const handelCountDownEnd = () =>{
        alert("Time is up!");
      }
    return (
        <section className="app main-layout">
            {/* <AppHeader /> */}
            <main>
                {/* <Home /> */}
                {/* <AnimalList animalProps={animalProps} />  */}
                {/* <SeasonClock/> */}
                {/* <CountDown startFrom={10} onDone={handelCountDownEnd}/> */}
                <WatcherList />
                {/* <MouseMonitor/> */}
            </main>
        </section>
    )
}