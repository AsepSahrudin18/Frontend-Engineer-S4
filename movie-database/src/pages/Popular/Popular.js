import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";
import { updateMovies } from "../../Features/MoviesSlice";

function Popular() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  // membuat fungsi getPopular
  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
}
export default Popular;
