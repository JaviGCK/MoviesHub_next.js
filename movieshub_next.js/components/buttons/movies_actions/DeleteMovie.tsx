import styles from './buttons_movies.module.css'
import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs';

export const DeleteMovie = () => {
    return (
        <>
            <button className={styles.button}>
                <BsTrash3Fill className={styles.icon} />
            </button>
        </>
    )
}
