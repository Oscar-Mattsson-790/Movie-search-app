import React from "react";
import { useState, useEffect } from "react";
import "./SearchMovies.css";

export default function SearchMovies() {
  return (
    <div className="search-movies">
      <h2>Search Movies</h2>
      <form className="input-box">
        <label>
          <span>Title: </span>
          <input type="text" placeholder="enter title" />
        </label>
        <label>
          <span>Year: </span>
          <input type="text" placeholder="enter year" />
        </label>
      </form>
      <button className="search-btn">Search</button>
    </div>
  );
}
