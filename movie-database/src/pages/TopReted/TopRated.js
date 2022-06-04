import axios from "axios";
import {useEffect, useState} from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function TopRatedMovie() {
  // Membuat state
  const [movies, setMovies] = useState([]);

  // API KEY dan URL
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;


  useEffect(() => {
    getRatedMovies();
  }, []);

  // Membuat fungsi getRated
  async function getRatedMovies(){
    // fetch data dari axios
    const response = await axios(URL);
    
    setMovies(response.data.results);
  }
  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
}
export default TopRatedMovie;
