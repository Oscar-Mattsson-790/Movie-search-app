import React from "react";
import "./MovieCard.css";

export default function MovieCard() {
  return (
    <div className="display-movies">
      <article>Picture</article>
      <div className="moive-box">
        <h2>Title</h2>
        <h3>Year</h3>
        <p>imdbID</p>
      </div>
    </div>
  );
}
