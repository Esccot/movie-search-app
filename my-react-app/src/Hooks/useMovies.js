import { useEffect, useState } from "react";
const api_key = import.meta.env.VITE_TMBD_API_KEY;
console.log("API Key value:", import.meta.env.VITE_TMBD_API_KEY);
console.log("All env vars:", import.meta.env);

function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  async function fetchMovies(search, setState) {
    console.log("fetchMovies called with search:", search);
    if (!search.trim()) {
      console.log("Empty search, skipping fetch");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(search);
      console.log("Response status:", res.status, res.statusText);
      const data = await res.json();
      console.log("Data received:", data);
      if (!res.ok) {
        console.error("API error:", data);
        return;
      }
      setState(data.results || data);
      console.log("Movies set, length:", data.results?.length || 0);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMovies(`http://localhost:3000/app/trending`, setTrendingMovies);
  }, []);

  return { movies, loading, fetchMovies, setMovies, trendingMovies, loading };
}

export default useMovies;
