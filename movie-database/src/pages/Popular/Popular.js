import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function Popular() {
  // Membuat state
  const [movies, setMovies] = useState([]);

  // Menyimpan API KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  useEffect(() => {
    getPopularMovies();
  }, []);

  // membuat fungsi getPopular
  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(URL);

    // menyimpan data ke state movie
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <div>
      <Hero />
      <Movies movies={movies}/>
    </div>
  );
}
export default Popular;
