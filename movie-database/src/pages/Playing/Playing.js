import { useEffect } from "react";
import axios from "axios";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Features/MoviesSlice";

function Playing() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPlayingMovies();
  }, []);

  // Fungsi playing movies
  async function getPlayingMovies() {
    const response = await axios(ENDPOINTS.NOWPLAYING);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" />
    </div>
  );
}
export default Playing;
