import { Genre } from '@/types/genre'
import styles from './listGeres.module.css'
import React from 'react'

type Props = {
    genres: Genre[]
}
const ListGenres = ({ genres }: Props) => {
    console.log(genres + 'hola');
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Genres</h1>
                <ul className={styles.ul}>
                    {genres.map((genre, index) => (
                        <li key={index}>{genre.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListGenres