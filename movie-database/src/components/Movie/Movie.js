// import styled movie.styled.js
import StyledMovie from "./Movie.styled";

// Menangkap props
function Movie(props) {
  const { movie } = props;
  return (
    <StyledMovie>
      <img
        src={
          movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.year || movie.release_date}</p>
      <h4>{movie.type}</h4>
    </StyledMovie>
  );
}

export default Movie;
