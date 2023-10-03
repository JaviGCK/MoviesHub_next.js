'use client'
import styles from './buttons_movies.module.css';
import deleteMovie from '@/services/movies.services';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsTrash3Fill } from 'react-icons/bs';

type Props = {
    movieId: number;
};

const DeleteMovie = ({ movieId }: Props) => {
    const router = useRouter();

    const handleDeleteClick = async () => {
        try {
            await deleteMovie(movieId);
            router.refresh();
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    }

    return (
        <button className={styles.button} onClick={handleDeleteClick}>
            <BsTrash3Fill className={styles.icon} />
        </button>
    );
};

export default DeleteMovie;
