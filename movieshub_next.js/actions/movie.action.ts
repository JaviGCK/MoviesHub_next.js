import { Movie } from "@/types/movie";
import dotenv from 'dotenv';
dotenv.config();

export const createMovie = async (formData: FormData, userId: number): Promise<void> => {
    const apiUrl = process.env.API_URL_BACKEND;
    const response = await fetch(`http://localhost:8080/movies/${userId}`, {
        method: 'POST',
        body: formData,
    })

    return await response.json()
}
