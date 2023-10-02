import styles from './home.module.css';
import React from 'react';
import Nav from '../../components/nav/nav'
import Card from '@/components/card/Card';
import getUserById from '@/services/users.services';

const Home = async () => {
    const user = await getUserById(1)
    const movies = user ? user.movies || [] : []

    return (
        <main className={styles.main}>
            <section className={styles.section_header}>
                <p className={styles.logo}>H</p>
                <Nav />
            </section>
            <section className={styles.section_movies}>
                <Card movie={movies} />
            </section>
        </main>
    );
};

export default Home;

