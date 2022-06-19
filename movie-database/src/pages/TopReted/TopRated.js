import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import { updateMovies } from "../../Features/MoviesSlice";
import ENDPOINTS from "../../utils/constanst/endpoints";

function TopRatedMovie() {
  const dispatch = useDispatch();
  useEffect(() => {
    getRatedMovies();
  }, []);

  // Membuat fungsi getRated
  async function getRatedMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);

    dispatch(updateMovies(response.data.results));
  }
  return (
    <div>
      <Hero />
      <Movies title="Top Rated" />
    </div>
  );
}
export default TopRatedMovie;
