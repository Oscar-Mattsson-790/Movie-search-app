import SearchMovies from "./components/SearchMovies/SearchMovies";
import DisplayMovies from "./components/DisplayMovies.jsx/DisplayMovies";
import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMoives] = useState([]);

  return (
    <div className="App">
      <h1>Movie search app</h1>
      <SearchMovies setMoives={setMoives} />
      <DisplayMovies movies={movies} />
    </div>
  );
}

export default App;
