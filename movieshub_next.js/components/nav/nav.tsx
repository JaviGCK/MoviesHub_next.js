import Link from 'next/link';
import styles from './nav.module.css';
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import getUserById from '@/services/users.services';

const Nav = async () => {
    const user = await getUserById(1);

    // Convert the user object to a JSON string
    const userJson = JSON.stringify(user);

    return (
        <div className={styles.nav}>
            <div className={styles.button}>
                <Link href="home/profile" className={styles.button_text}>
                    Profile
                </Link>
            </div>
            <div className={styles.button}>
                <Link href="home/movie" className={styles.button_text}>
                    Add Movie
                </Link>
            </div>
            <div className={styles.button}>
                <Link href="home/genre" className={styles.button_text}>
                    Genres
                </Link>
            </div>
            <div className={`${styles.button} ${styles.logout}`}>
                <Link href="/" className={styles.button_text}>
                    <FaSignOutAlt />
                </Link>
            </div>
        </div>
    );
};

export default Nav;
