import React from 'react';
import Table from '../Table/Table';
// import HeartIcon from '../../assets/icons/heart_icon.svg';
import styles from '../Home/Home.module.css'

const Home = () => {
    return (
        <div className={styles.mainPageContainer}>
            <div className={styles.mainPageContent}>
                <h1 className={styles.mainTitle}>click <strong>сard game</strong> in menu and start learning<br />all those english words by cards</h1>
                <Table />
            </div>
        </div>
    )
}

export default Home;