import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";

function Movies(props) {
  // Melakukan destructing props
  const { movies, setMovies } = props;

  // Menambahkan fungsi untuk handleClick
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Spiderman",
      year: 2021,
      type: "movie",
      poster: "https://picsum.photos/400/600",
    };

    // Jalanin fungsi setMovies
    // Tambahkan movie, kedalam movies
    // Spread: copy data array
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Lates Movies</h2>
        <div className={styles.movie__container}>
          {/*
           * looping: map
           * render component movie
           * kirim props movie
           */}
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>

        {/* Menambahkan button */}
        {/* Menambahkan event onClick */}
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
