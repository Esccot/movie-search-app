import "./MovieGrid.css";

function MovieGrid({ movies, alt }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img className="card-img" src={movie.Poster} alt={alt} />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieGrid;
