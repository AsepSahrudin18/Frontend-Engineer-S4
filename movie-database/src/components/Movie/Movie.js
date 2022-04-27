import styles from "./Movie.module.css";

// Menangkap props
function Movie(props) {
  // Destructing object
  const { movie } = props;

  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={movie.poster} alt="" />
      <h3 className={styles.movie__title}>{movie.title}</h3>
      <p className={styles.movie__date}>{movie.year}</p>
      <h3 className={styles.movie__genre}>{movie.type}</h3>
    </div>
  );
}

export default Movie;
