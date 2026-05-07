import { useState } from "react";
const api_key = import.meta.env.VITE_OMBDI_API_KEY;

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMovies(search) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${api_key}&s=${search}`,
      );
      const data = await res.json();
      setMovies(data.Search || []);
    } finally {
      setLoading(false);
    }
  }
  return { movies, loading, fetchMovies };
}

export default useMovies;
