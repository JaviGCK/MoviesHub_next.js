'use client'
import styles from './form.module.css';
import React, { useRef, useState } from 'react';
import { createMovie } from '@/actions/movie.action';

const AddForm = () => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const urlRef = useRef<HTMLInputElement | null>(null);
    const scoreRef = useRef<HTMLInputElement | null>(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const name = nameRef.current?.value;
        const url = urlRef.current?.files ? urlRef.current.files[0] : null;
        const score = scoreRef.current?.value;

        if (!name || !url || !score) {
            setError('All fields are required.');
            return;
        }

        setError('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('url', url as File);
        formData.append('score', score);



        const userId = 1



        try {

            await createMovie(formData, userId);

            console.log('Movie created succefully');
        } catch (error) {
            console.error('Movie was not create:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" ref={nameRef} required />
            </div>
            <div>
                <label htmlFor="url">Poster</label>
                <input type="file" id="url" name="url" ref={urlRef} required />
            </div>
            <div>
                <label htmlFor="score">Score</label>
                <input type="text" id="score" name="score" ref={scoreRef} required />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default AddForm;
