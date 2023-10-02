import { Genre, Movie } from '@/types/movie';
import styles from './cardMovie.module.css';
import React from 'react';
import { UpdateMovie } from '../buttons/movies_actions/UpdateMovie';
import { DeleteMovie } from '../buttons/movies_actions/DeleteMovie';

type Props = {
    movie: Movie;
};

const CardMovie = ({ movie }: Props) => {
    return (
        <>
            {Array.isArray(movie) ? (
                movie.map((movie) => (
                    <div key={movie.id} className={styles.div_container}>
                        <div className={styles.left_content}>
                            <img src={movie.url} alt={movie.name} className={styles.movie_image} />
                        </div>
                        <div className={styles.right_content}>
                            <h2 className={styles.movie_name}>{movie.name}</h2>
                            <p className={styles.description}>A young man dies in a hit-and-run accident. The guilty driver has left no traces and there are no evidences against him. But the young man’s father, with the support of the media, demands that person.{movie.description}</p>
                            <div className={styles.genre_score}>
                                <div className={styles.genres}>
                                    {movie.genres?.slice(0, 2).map((genre: Genre, index: number, array: Genre[]) => (
                                        <span key={genre.name} className={styles.genre}>
                                            {genre.name}
                                            {index < array.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.score}>
                                    {movie.score !== undefined ? `${movie.score} / 10` : 'N/A'}
                                </div>
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <UpdateMovie />
                            <DeleteMovie />
                        </div>
                    </div>
                ))
            ) : (
                <p>No movies available.</p>
            )}
        </>
    );
};

export default CardMovie;
