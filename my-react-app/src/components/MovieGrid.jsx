import "./MovieGrid.css";
import { useNavigate } from "react-router-dom";

function MovieGrid({ movies, movieName, lastSearch }) {
  const navigate = useNavigate();
  console.log("MovieGrid rendering with movies:", movies);

  if (!movies || movies.length === 0) {
    return <p>No movies found. Try a different search.</p>;
  }

  return ( 
    <div>
      <h3 className="results">
        search results for movie: <span>{lastSearch}</span>
      </h3>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            {movie.poster_path ? (
              <img
                className="card-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className="no-poster">No Image</div>
            )}
            <p>{movie.title}</p>
            <p>
              ⭐ Ratings:{" "}
              {movie.vote_average ? movie.vote_average.toFixed(1) : "nill"}/10
            </p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
