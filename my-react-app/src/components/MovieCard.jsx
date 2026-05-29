import "./movieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ trendingMovies }) {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="trend-card-heading"> Trending <span>Movies</span></h1>
      <div className="trend-grid">
        {trendingMovies.map((movie) => (
          <div className="trend-card" key={movie.id} onClick={ () => navigate(`/movie/${movie.id}`)}>
            {movie.poster_path ? (
              <img
                className="trend-card-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className="trend-no-poster">No Image</div>
            )}
            <p>{movie.title}</p>
            <p>⭐ Ratings: {movie.vote_average.toFixed(1)}/10</p>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
