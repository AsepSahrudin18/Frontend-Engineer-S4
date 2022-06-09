import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
// import Hero.styled.js
import StyledHero from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(getDetailMovie, []);
  // Mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const response = await axios(URL);

    return response.data.results[0];
  }

  async function getDetailMovie() {
    // ambil id dari getTrendingMovies
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <section>
        <div className="heroleft">
          <Heading>{movie.title}</Heading>
          <h3>Genre: {genres}</h3>
          <Paragraph>{movie.overview}</Paragraph>
          <Button variant="primary" as="a" href={trailer} target="_blank">
            Watch Movie
          </Button>
        </div>

        <div className="heroright">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
