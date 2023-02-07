import { useState, useEffect } from "react";
import "./SearchMovies.css";

export default function SearchMovies({ setMoives }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    async function getMoives() {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=37fe945a&s=${title}&y=${year}`
      );
      const data = await response.json();

      setMoives(data.Search);
    }

    getMoives();
  }, [title, year]);

  return (
    <div className="search-movies">
      <h2>Search Movies</h2>
      <form className="input-box">
        <label>
          <span>Title: </span>
          <input
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>
        <label>
          <span>Year: </span>
          <input
            type="text"
            placeholder={title.length < 1 ? "enter title first" : "enter year"}
            value={year}
            disabled={title.length < 1 ? true : false}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
