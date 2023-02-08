import SearchMovies from "./components/SearchMovies/SearchMovies";
import DisplayMovies from "./components/DisplayMovies.jsx/DisplayMovies";
import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMoives] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Movie search app</h1>
      <SearchMovies setMoives={setMoives} setError={setError} />
      <DisplayMovies movies={movies} error={error} />
    </div>
  );
}

export default App;
