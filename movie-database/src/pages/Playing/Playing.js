import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";

function Playing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPlayingMovies();
  }, []);

  // Fungsi playing movies
  async function getPlayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);

    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" movies={movies} />
    </div>
  );
}
export default Playing;
