import "./MovieGrid.css";

function MovieGrid({ movies }) {
  console.log("MovieGrid rendering with movies:", movies);
  if(!movies){
    if (movies.length === 0) {
    return <p>No movies found. Try a different search.</p>;
  }
  }
  
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
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
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
