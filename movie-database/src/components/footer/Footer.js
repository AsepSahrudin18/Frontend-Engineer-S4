/** Import CSS Module */
import styles from "./Footer.module.css";
function Footer() {
    return(
        <div className={styles.container}>
            <footer>
                <h2 className={styles.footer__title}>Add Movie</h2>
                <p className={styles.footer__author}>Created by Aufa</p>
            </footer>
        </div>
    )
}

export default Footer;