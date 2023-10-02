import styles from './buttons_movies.module.css'
import React from 'react'
import { GiCardExchange } from 'react-icons/gi';

export const UpdateMovie = () => {
    return (
        <>
            <button className={styles.button}>
                <GiCardExchange className={styles.icon} />
            </button>
        </>
    )
}
