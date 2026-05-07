import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ fetchSearch }) {
  const [movieName, setMovieName] = useState("");
  function handleChange(e) {
    const value = e.target.value;
    setMovieName(value);
  }

  function handleSearch(){
    fetchSearch(movieName)
    setMovieName("")
  }
  return (
    <div className="search-bar">
      <input
        className="search-input"
        onChange={handleChange}
        name="search"
        value={movieName}
        type="search"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
