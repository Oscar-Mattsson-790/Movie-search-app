import React from "react";
import "./DisplayMovies.css";
import MovieCard from "../MovieCard/MovieCard";

export default function DisplayMovies({ movies }) {
  console.log(movies);

  return (
    <div className="display-movies-container">
      {movies?.length &&
        movies.map((movie, key) => (
          <MovieCard
            key={key}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
    </div>
  );
}
