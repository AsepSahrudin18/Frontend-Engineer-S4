import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";
import data from "../utils/constanst/data";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Navbar />
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
      <Footer />
    </div>
  );
}

export default Home;
