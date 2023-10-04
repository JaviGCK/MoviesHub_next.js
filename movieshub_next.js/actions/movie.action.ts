import dotenv from 'dotenv';
dotenv.config();

export const createMovie = async (formData: FormData, userId: number): Promise<void> => {
    const apiUrl = process.env.API_URL_BACKEND;
    const response = await fetch(`http://localhost:8080/movies/${userId}`, {
        method: 'POST',
        body: formData,
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error(`Error creating movie: ${response.statusText}`);
    }

    return await response.json();
};

export const upDateMovie = async (formData: FormData, movieId: number): Promise<void> => {
    const apiUrl = process.env.API_URL_BACKEND;
    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: 'PUT',
        body: formData,
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error(`Error updating movie: ${response.statusText}`);
    }

    return await response.json();
};

