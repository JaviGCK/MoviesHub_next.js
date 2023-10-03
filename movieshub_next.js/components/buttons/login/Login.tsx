import Link from 'next/link';
import styles from './login.module.css'
import React from 'react'

const Login = () => {
    return (
        <div className={styles.button}>
            <Link href='/home' className={styles.login}>Log In</Link>
        </div>
    )
}

export default Login;