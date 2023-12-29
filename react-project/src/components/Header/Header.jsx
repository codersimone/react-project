import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.css';

//аргументами в Хедер передаются состояние tema, функции toggleTema и clickPopup, объявленные в компоненте App.js
//Для меню выводятся ссылки NavLink/роутинг
const Header = ({ theme, toggleTheme, clickPopup }) => {
    return (
        <div className={styles.navMenu}>
            <header className={styles.headerContainer}>
                <NavLink className={styles.headerLogoLink} to='/' onClick={clickPopup}><strong>English words</strong> by cards</NavLink>
                <NavLink className={styles.headerMenuLinks} to='/game' onClick={clickPopup}>Card game</NavLink>
                <NavLink className={styles.headerMenuLinks} to='/new' onClick={clickPopup}>Add word</NavLink>
                <NavLink className={styles.headerMenuLinks} to='/' onClick={toggleTheme} >Change theme</NavLink>
            </header>
        </div>
    )

}

export default Header;