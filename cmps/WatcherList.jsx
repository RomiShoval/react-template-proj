const { useState, useEffect } = React
import { watchersService } from "../services/watchersService.service.js";
import "../assets/style/WatcherList.css"
//import watcherImg from "../assets/img/watcher.png"

export function WatcherList(){
    const[watchers , setWatchers] = useState([]);
    const[selectedWatcher, setSelectedWatcher] = useState(null);

    useEffect(() => {
        const fetchWatchers = async () => {
          let storedWatchers = await watchersService.loadFromStorage("watchers");
          if(!storedWatchers || storedWatchers.length ===0){
            storedWatchers = [
                { id: "w101", name: "Puki Ba", movies: ["Rambo", "Rocky"] },
                { id: "w102", name: "Muki Da", movies: ["Avengers", "Inception"] },
                { id: "w103", name: "Shuki Sa", movies: ["Matrix", "Gladiator"] },
              ];
              watchersService.saveToStorage("watchers",storedWatchers)
          }
          setWatchers(storedWatchers);
        };
        fetchWatchers();
      }, []);

    useEffect(() => {
        watchersService.saveToStorage("watchers",watchers);
        console.log("Watchers state updated:", watchers);
      }, [watchers]); 


    function addWatcher(){
        const name = prompt("Enter watcher name")
        // console.log(name)
        if(!name || name.trim() === "") return;

        const movieInput = prompt("Enter your favorite movies")
        const movies = movieInput ? movieInput.split(",").map(movie => movie.trim()) : [];

        
         {
            const newWatcher ={
                id:`w${Date.now()}`,
                name :name,
                movies
            }
            console.log("Before update:", watchers); // Check current state

            setWatchers((prevWatchers) => [...prevWatchers, { ...newWatcher }]);
        }
    }

    

    function removeWatcher(id){
        setWatchers(watchers.filter((watcher) => watcher.id !== id));
    };

    const backgroundClasses = ["bg-gray", "bg-green", "bg-red"];

    return(
      <div className="container">
          <h2 className="title">Watcher App</h2>
          <button onClick={addWatcher} className="add-button">Add Watcher</button>

          <div className="watchers-container">
              {watchers.map((watcher, index) => (
                  <div key={watcher.id} className="watcher-card">
                      <div className={`avatar-container ${backgroundClasses[index % backgroundClasses.length]}`}>
                          <img src={"/react-template-proj/assets/img/watcher.png"} alt="Watcher Avatar" className="avatar-img" />
                      </div>
                      <h3 className="watcher-name">{watcher.name || "Unnamed Watcher"}</h3>
                      <div className="buttons-container">
                          <button onClick={() => removeWatcher(watcher.id)} className="remove-button">🗑</button>
                          <button onClick={() => setSelectedWatcher(watcher)} className="select-button">Select</button>
                      </div>
                  </div>
              ))}
          </div>

          {selectedWatcher && (
              <div className="modal">
                  <h3>{selectedWatcher.name}</h3>
                  <ul>
                      {selectedWatcher.movies.map((movie, index) => (
                          <li key={index}>{movie}</li>
                      ))}
                  </ul>
                  <button onClick={() => setSelectedWatcher(null)} className="close-button">Close</button>
              </div>
          )}
      </div>
  );
}