import SearchBar from "../components/SearchBar";
import useMovies from "../Hooks/useMovies";
import "../index.css";
import MovieGrid from "../components/MovieGrid";
import MovieCard from "../components/MovieCard";
import AppIcon from "../assets/search.png";
import SignIn from "../components/Form";
import Navbar from "../components/Navbar";

function Home() {
  const {
    movies,
    loading,
    fetchMovies,
    setMovies,
    trendingMovies,
    movieName,
    setMovieName, 
    lastSearch,
    setLastSearch,
  } = useMovies();
  return (
    <div>
      <div className="app-icon-wrapper">
        <h1 className="heading">
          Cine <span className="heading-search-text">Search</span>
        </h1>

        <img src={AppIcon} alt="AppIcon" height="50px" width="50px" />
      </div>

      <h4 className="sub-heading">Find your favourite movie instantly</h4>

      <SearchBar
        fetchSearch={fetchMovies}
        setMovies={setMovies}
        movieName={movieName}
        setMovieName={setMovieName}
        setLastSearch={setLastSearch}
      />

      <Navbar />

      {loading ? (
        <p className="loading">Loading movies…</p>
      ) : (
        <MovieGrid movies={movies} lastSearch={lastSearch} />
      )}

      <MovieCard trendingMovies={trendingMovies} />
    </div>
  );
}

export default Home;
