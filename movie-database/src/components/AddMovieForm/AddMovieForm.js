import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <section className={styles.form}>

                <div className={styles.form__left}>
                <img className={styles.form__image} src="https://picsum.photos/600/400" alt="" />
                </div>


                <div className={styles.form__right}>
                <h2 className={styles.form__title}>Add Movie</h2>
                <form className={styles.form__action} action="/handlelogin" method="post">
                <label className={styles.form__label} for="title">Title</label><br />
                <input type="text" id="title"  /><br />
                <label className={styles.form__label} for="text">Year</label><br />
                <input type="text" id="text" /><br /><br />
                <input className={styles.form__submit} type="submit" value="Submit" />
                </form>
                </div>

            </section>
        </div>
    )
}

export default AddMovieForm;