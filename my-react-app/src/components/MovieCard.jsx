function MovieCard({ title, Image, alt, year }) {
  return (
    <div>
      <img className="movie-card" src={Image} alt={alt} />
      <p>{title}</p>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
