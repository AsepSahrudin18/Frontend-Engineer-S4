// import styled movie.styled.js
import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

// Menangkap props
function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster ||
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          }
          alt={movie.title}
        />

        <h3>{movie.title}</h3>
        <p>{movie.year || movie.release_date}</p>
        <h4>{movie.type}</h4>
      </Link>
    </StyledMovie>
  );
}

export default Movie;
