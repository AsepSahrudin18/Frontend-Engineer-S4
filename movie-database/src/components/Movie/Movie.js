// import styled movie.styled.js
import StyledMovie from "./Movie.styled";

// Menangkap props
function Movie(props) {
  const { movie } = props;

  return (
    <StyledMovie>
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <h4>{movie.type}</h4>
    </StyledMovie>
  );
}

export default Movie;
