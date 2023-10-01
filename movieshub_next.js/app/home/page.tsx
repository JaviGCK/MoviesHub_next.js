import styles from './page.module.css';
import React from 'react';
import Nav from '../../components/nav/nav'
const Home = () => {
    return (
        <main className={styles.main}>
            <p className={styles.logo}>H</p>
            <Nav />
        </main>
    );
};

export default Home;

