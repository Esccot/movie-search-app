import "../components/MovieDetail.css";
import useMovies from "../Hooks/useMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const { fetchMovies, loading } = useMovies();

  const trailerVideo = trailer?.find((v) => v.type === "Trailer");

  useEffect(() => {
    fetchMovies(`http://localhost:3000/app/movies/${id}`, setDetails);
    fetchMovies(`http://localhost:3000/app/movies/trailers/${id}`, setTrailer);
  }, [id]);
  console.log("trailerVideo:", trailerVideo);
  console.log("trailer data:", trailer);
  if (loading) return <p> loading...</p>;
  return (
    <div className="detail-wrapper">
      <div className="poster-section">
        <img
          className="movie-detail-card"
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title}
        />
      </div>

      <div className="detail-content">
        <h1 className="movie-detail-heading">
          Movie <span>Details</span>
        </h1>
        <h2 className="movie-detail-title">{details.title}</h2>

        <div className="movie-meta">
          <p>⭐ Ratings: {details.vote_average? details.vote_average.toFixed(1): "nill"}/10</p>
          <p>⏱️ Runtime: {details.runtime} mins</p>
        </div>

        <p className="movie-genres">
          {(details.genres || []).map((g) => g.name).join(" , ")}
        </p>

        <p className="movie-overview">
          {" "}
          <span>overview:</span> {details.overview}
        </p>

        <div className="trailer-container">
          <iframe
            src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
            allowFullScreen
            title="movie-trailer"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
