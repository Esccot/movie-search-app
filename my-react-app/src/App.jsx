import SearchBar from "./components/SearchBar";
import useMovies from "./Hooks/useMovies";
import "./index.css";
import MovieGrid from "./components/MovieGrid";

function App() {
  const { movies, loading, fetchMovies } = useMovies();
  return (
    <div>
      <h1 className="heading">
        Cine <span className="heading-search-text">Search</span>
      </h1>

      <h4 className="sub-heading">Find your favourite movie instantly</h4>

      <SearchBar fetchSearch={fetchMovies} />
      {loading ? (
        <p className="loading">Loading movies…</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </div>
  );
}

export default App;
