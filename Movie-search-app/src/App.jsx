import SearchMovies from "./components/SearchMovies/SearchMovies";
import DisplayMovies from "./components/DisplayMovies.jsx/DisplayMovies";
import MovieCard from "./components/MovieCard/MovieCard";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=37fe945a&s=Bond"
      );
      const data = await response.json();

      console.log(data);
      setMovies(data.movies);
    }

    getMovies();
  }, [movies]);

  console.log(movies);

  return (
    <div className="App">
      <h1>Movie search app</h1>
      <SearchMovies />
      <DisplayMovies />
    </div>
  );
}

export default App;
