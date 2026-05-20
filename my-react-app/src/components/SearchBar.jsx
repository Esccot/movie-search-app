import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ fetchSearch, setMovies }) {
  const [movieName, setMovieName] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setMovieName(value); 
  }

  function handleSearch() {
    console.log("handleSearch called with movieName:", movieName);
    if (!movieName.trim()) {
      console.log("Empty search, not fetching");
      return;
    }
    fetchSearch(`http://localhost:3000/app/movies?query=${movieName}`, setMovies);
    setMovieName("");
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-bar">
      <input
        className="search-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="search"
        value={movieName}
        type="search"
        placeholder="Search for a movie..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
