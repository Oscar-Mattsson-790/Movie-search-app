import SearchMovies from "./components/SearchMovies/SearchMovies";
import DisplayMovies from "./components/DisplayMovies.jsx/DisplayMovies";
import MovieCard from "./components/MovieCard/MovieCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Movie search app</h1>
      <SearchMovies />
      <DisplayMovies />
    </div>
  );
}

export default App;
