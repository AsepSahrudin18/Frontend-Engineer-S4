import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function Playing() {
  const [movies, setMovies] = useState([]);
  // Menyimpan API KEY dan URL ke variable
  const APP_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}`;

  useEffect(() => {
    getPlayingMovies();
  }, []);
  
  // Fungsi playing movies
  async function getPlayingMovies(){
    const response = await axios(URL);

    setMovies(response.data.results);
  }

  console.log(movies);

  
  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
}
export default Playing;
