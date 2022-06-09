import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constanst/endpoints";

function Popular() {
  // Membuat state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  // membuat fungsi getPopular
  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(ENDPOINTS.POPULAR);

    // menyimpan data ke state movie
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </div>
  );
}
export default Popular;
