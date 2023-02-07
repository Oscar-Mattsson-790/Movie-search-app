import SearchMovies from "./components/SearchMovies/SearchMovies";
import DisplayMovies from "./components/DisplayMovies.jsx/DisplayMovies";
import MovieCard from "./components/MovieCard/MovieCard";
import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

function App() {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    async function getMoives() {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=37fe945a&s=Bond"
      );
      const data = await response.json();

      setMoives(data.movies);
      console.log(data);
    }
    getMoives();
  }, []);

  return (
    <div className="App">
      <h1>Movie search app</h1>
      <SearchMovies />
      <DisplayMovies />
      <MovieCard />
    </div>
  );
}

export default App;
