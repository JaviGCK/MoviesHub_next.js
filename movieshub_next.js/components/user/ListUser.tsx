"use client"
import styles from './listUser.module.css';
import React from 'react';
import BackButton from '../buttons/back_button/BackButton';
import getUserById from '@/services/users.services';

const ListUser = async () => {
    const user = await getUserById(1)
    const movies = user ? user.movies || [] : []

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Profile</h1>
                <ul className={styles.ul}>
                    <li className={styles.li}>Name</li>
                    <li className={styles.data}>{user.name}</li>
                    <li className={styles.li}>Email</li>
                    <li className={styles.data}>{user.email}</li>
                </ul>
                <div className={styles.back}>
                    <BackButton />
                </div>
            </div>
        </>
    );
};

export default ListUser;
