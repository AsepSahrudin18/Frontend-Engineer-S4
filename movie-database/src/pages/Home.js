import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import data from "../utils/constanst/data";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;
