import dotenv from 'dotenv';
import { revalidateTag } from 'next/cache'; // Asegúrate de importar revalidateTag

dotenv.config();

const deleteMovie = async (movieId: number) => {

    const apiUrl = process.env.API_URL_BACKEND;

    try {
        const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });

        if (response.status === 204) {
            return true;
        } else if (response.status === 404) {
            return false;
        } else {
            throw new Error(`Error deleting movie. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting movie:', error);
        return null;
    }
};

export default deleteMovie;
