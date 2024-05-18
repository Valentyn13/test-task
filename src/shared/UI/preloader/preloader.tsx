
import styles from './preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
        <span className={styles.preloader__spiner}></span>
        </div>
    );
}