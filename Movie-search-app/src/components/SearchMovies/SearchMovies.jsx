import { useState, useEffect } from "react";
import "./SearchMovies.css";

export default function SearchMovies({ setMoives, setError }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const API_KEY = "37fe945a";

  useEffect(() => {
    async function getMoives() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&y=${year}`
        );
        const data = await response.json();

        setMoives(data.Search);
        setError(null);
      } catch (err) {
        setError("Could not fetch the data");
        console.log(err.message);
      }
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
