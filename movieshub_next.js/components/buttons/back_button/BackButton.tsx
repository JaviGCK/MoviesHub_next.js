import styles from './backButton.module.css'
import React from 'react'
import { TiArrowBack } from 'react-icons/ti'
const BackButton = () => {
    return (
        <div className={styles.button}>
            <a href='/home' className={styles.login}>
                <TiArrowBack className={styles.icon} />
            </a>
        </div>
    )
}

export default BackButton