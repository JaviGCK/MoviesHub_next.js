import dotenv from 'dotenv';
import { revalidateTag } from 'next/cache';
import { useRouter } from 'next/navigation';

dotenv.config();

const getUserById = async (userId: number): Promise<any> => {
    const apiUrl = process.env.API_URL_BACKEND;

    try {
        const response = await fetch(`${apiUrl}/users/${userId}`, {

            headers: {
                'Content-Type': 'application/json',

            },
            cache: 'no-store'


        });


        if (!response.ok) {

            throw new Error(`Error fetching user data by ID: ${response.status}`);
        }

        const data = await response.json();
        if (response.ok) {
            revalidateTag('userData');
        }

        return data;
    } catch (error) {
        console.error('Error fetching user data by ID:', error);
        return null;
    }

};


export default getUserById;