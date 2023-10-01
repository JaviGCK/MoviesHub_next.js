import styles from './page.module.css';
import React from 'react';
import Nav from '../../components/nav/nav'
import Card from '@/components/card/card';
const Home = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section_header}>
                <p className={styles.logo}>H</p>
                <Nav />
            </section>
            <section className={styles.section_movies}>
                <Card />
            </section>
        </main>
    );
};

export default Home;

