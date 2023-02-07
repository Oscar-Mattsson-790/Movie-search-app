import React from "react";
import "./MovieCard.css";

export default function MovieCard({ title, poster, imdbID, year }) {
  const fallBackPicture =
    "https://www.altavod.com/assets/images/poster-placeholder.png";

  console.log(poster);
  return (
    <div className="display-movies">
      {poster.length > 3 ? (
        <img className="picture" src={poster} alt="error" />
      ) : (
        <img
          className="picture placeholder"
          src={fallBackPicture}
          alt="error"
        />
      )}

      <div className="moive-box">
        <h2>{title}</h2>
        <h3>{year}</h3>
        <p>{imdbID}</p>
      </div>
    </div>
  );
}
