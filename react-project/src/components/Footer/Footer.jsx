import React from 'react';
import styles from '../Footer/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <footer className={styles.footer}>
                <p className={styles.footerText}>©2023 english words by cards app | all rights reserved</p>
            </footer>
        </div>
    )
}

export default Footer;