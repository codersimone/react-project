import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.css';

const Header = ({ tema, toggleTema, clickPopup }) => {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>English words by cards</h1>
                <NavLink className={styles.headerLinks} to='/' onClick={clickPopup}>Home</NavLink>
                <NavLink className={styles.headerLinks} to='/game' onClick={clickPopup}>Card game</NavLink>
                <NavLink className={styles.headerLinks} to='/new' onClick={clickPopup}>Add word</NavLink>
                <NavLink className={styles.headerLinks} to='/' onClick={toggleTema} >Change theme</NavLink>
            </header>
        </div>
    )

}

export default Header;