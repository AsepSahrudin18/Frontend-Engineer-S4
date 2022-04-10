import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  // Destructing props
  const { movies, setMovies } = props;

  const [genre, setGenre] = useState("");

  // Membuat state title
  const [title, setTitle] = useState("");
  // Membuat state date
  const [date, setDate] = useState("");

  // Membuat state handle gambar
  const [gbr, setGbr] = useState("");

  // Membuat state error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isGbrError, setIsGbrError] = useState(false);

  // fungsi handle title
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  // fungsi handle date
  function handleDate(e) {
    setDate(e.target.value);
  }

  // Handle gambar
  function handleGbr(e) {
    setGbr(e.target.value);
  }

  // Membuat handle genre
  function handleGenre(e) {
    setGenre(e.target.value);
  }

  // Membuat hadle form untuk submit
  // disimpan di form, karena yang dikirim adalah data keseluruhan yang ada di form
  function handleSubmit(e) {
    // Mencegah perilaku default: refresh
    e.preventDefault();

    // Jika title kosong, maka set title error true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika date kosong, maka set date erroe true
    else if (date === "") {
      setIsDateError(true);
    } else if (gbr === "") {
      setIsGbrError(true);
      setIsDateError(false);
    } else {
      // Siapkan movie yang ingin diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: gbr,
      };
      setIsTitleError(false);
      setIsDateError(false);
      setIsGbrError(false);
      setMovies([...movies, movie]);
    }
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
              onChange={handleTitle}
              className={styles.form__input}
              type="text"
              id="title"
              value={title}
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
              onChange={handleDate}
              className={styles.form__input}
              type="number"
              id="date"
              value={date}
            />

            {isDateError && <Alert>*Date wajib diisi</Alert>}

            <label className={styles.form__year} htmlFor="">
              Link gambar
            </label>
            <input
              className={styles.form__input}
              onChange={handleGbr}
              value={gbr}
              type="text"
            />
            <select
              onChange={handleGenre}
              className={styles.form__genre}
              name="link"
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
            {isGbrError && <Alert></Alert>}

            <button className={styles.form__submit}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
