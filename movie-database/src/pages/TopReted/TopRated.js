import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";

function TopRatedMovie() {
  // Membuat state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRatedMovies();
  }, []);

  // Membuat fungsi getRated
  async function getRatedMovies() {
    // fetch data dari axios
    const response = await axios(ENDPOINTS.TOPRATED);

    setMovies(response.data.results);
  }
  return (
    <div>
      <Hero />
      <Movies title="Top Rated" movies={movies} />
    </div>
  );
}
export default TopRatedMovie;
