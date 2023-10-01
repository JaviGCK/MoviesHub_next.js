import styles from './nav.module.css';
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';


const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.button}>
                <a href='home/profile' className={styles.button_text}>Profile</a>
            </div>
            <div className={styles.button}>
                <a href='home/movie' className={styles.button_text}>Add Movie</a>
            </div>
            <div className={styles.button}>
                <a href='home/genre' className={styles.button_text}>Genres</a>
            </div>
            <div className={`${styles.button} ${styles.logout}`}>
                <a href='/' className={styles.button_text}>
                    <FaSignOutAlt />
                </a>
            </div>
        </div>
    )
}

export default Nav