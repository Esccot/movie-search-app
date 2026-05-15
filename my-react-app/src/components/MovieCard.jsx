import "./movieCard.css";

function MovieCard({ trendingMovies }) {
  return (
    <div>
      <h1 className="trend-card-heading"> Trending <span>Movies</span></h1>
      <div className="trend-grid">
        {trendingMovies.map((movie) => (
          <div className="trend-card" key={movie.id}>
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
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
