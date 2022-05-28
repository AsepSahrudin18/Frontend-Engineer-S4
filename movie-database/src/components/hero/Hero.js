import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
// import Hero.styled.js
import StyledHero from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    // Melakukan side effect: fetch data movie (api)
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    // set movie dengan data movie hasil fetch
    setMovie(data);
  }

  useEffect(fetchMovie, []);

  console.log(movie);
  return (
    <StyledHero>
      <section>
        <div className="heroleft">
          <Heading>{movie.Title}</Heading>
          <h3>Genre: {movie.Genre}</h3>
          <Paragraph>{movie.Plot}</Paragraph>
          <Button variant="primary">Watch Movie</Button>
        </div>

        <div className="heroright">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
