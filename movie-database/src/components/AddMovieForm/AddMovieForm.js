import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../Features/MoviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  // buat dispatch
  const dispatch = useDispatch();
  // membuat navigasi
  const navigation = useNavigate();

  // handle input
  // ------------
  // state object
  const [formData, setFormData] = useState({
    genre: "",
    title: "",
    date: "",
    gbr: "",
  });

  // destructing object
  const { genre, title, date, gbr } = formData;

  // handleChange menghandle
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Membuat fungsi handle

  // ------------------------------------------
  // refactor state handle error kedalam object
  // ------------------------------------------
  const [handError, sethandError] = useState({
    isTitleError: false,
    isDateError: false,
    isGbrError: false,
    isGenreError: false,
  });

  // destructing object
  const { isTitleError, isDateError, isGbrError, isGenreError } = handError;

  // fungsi validasi
  function validated() {
    if (title === "") {
      sethandError({
        ...handError,
        isTitleError: true,
      });
      return false;
    } else if (date === "") {
      sethandError({
        ...handError,
        isDateError: true,
        isTitleError: false,
      });
      return false;
    } else if (gbr === "") {
      sethandError({
        ...handError,
        isGbrError: true,
        isDateError: false,
      });
      return false;
    } else if (genre === "") {
      sethandError({
        ...handError,
        isGenreError: true,
        isGbrError: false,
      });
      return false;
    } else {
      sethandError({
        ...handError,
        isTitleError: false,
        isDateError: false,
        isGbrError: false,
        isGenreError: false,
      });
      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: genre,
      poster: gbr,
    };

    sethandError(false);

    dispatch(addMovie(movie));

    navigation("/");
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();

    validated() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/600/400"
            alt=""
          />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form
            onSubmit={handleSubmit}
            className={styles.form__action}
            action="/handlelogin"
            method="post"
          >
            <label className={styles.form__label} htmlFor="title">
              Title
            </label>

            <input
              onChange={handleChange}
              className={styles.form__input}
              type="text"
              id="title"
              value={title}
              name="title"
            />
            {/*
             * Jika error title true: munculkan error
             * Jika tidak munculkan string kosong
             */}

            {isTitleError && <Alert>*Title wajib diisi</Alert>}

            <label className={styles.form__year} htmlFor="date">
              Date
            </label>
            <input
              onChange={handleChange}
              className={styles.form__input}
              type="number"
              id="date"
              value={date}
              name="date"
            />

            {isDateError && <Alert>*Date wajib diisi</Alert>}

            <label className={styles.form__year} htmlFor="">
              Link gambar
            </label>
            <input
              className={styles.form__input}
              onChange={handleChange}
              value={gbr}
              type="text"
              name="gbr"
            />
            {isGbrError && <Alert>Link gambar wajib diisi</Alert>}
            <select
              onChange={handleChange}
              className={styles.form__genre}
              name="genre"
              id="add link"
            >
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Mistery">Mistery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>
            {isGenreError && <Alert>Pilih genre</Alert>}

            <Button variant="secondary" full>
              Add Movie
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
