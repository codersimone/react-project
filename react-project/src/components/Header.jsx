import React, {useState} from 'react';
import {ReactComponent as MenuIcon} from '../assets/icons/burger_menu_navigation_icon.svg';
import Switcher from './Switcher';
// import Card from '../Card/Card';
// import Add from '../AddWord/AddWord';

const Header = () => {
    const [isOpen, setOpen] = useState();
    return (
        <header className='header'>
            <p className='headerLogo'><strong>english words</strong> by cards</p>
            <nav className={`headerNav ${isOpen ? 'active' : ''}`}>
                <ul className='headerNavList'>
                    <li className='headerNavItem'>home page</li>
                    <li className='headerNavItem'>card game</li>
                    <li className='headerNavItem'>add word</li>
                    <li className='headerNavItem'><Switcher /></li>
                </ul>
            </nav>
            <button className='headerMenuBtn' onClick={() => setOpen(!isOpen)}><MenuIcon /></button>
        </header>



        // <header className='header'>
        //     <div className="nav">
        //         <p className='headerLogoLink'><strong>english words</strong> by cards</p>
        //     </div>
        //     <div className="nav">
        //         <a className='headerMenuLinks'>карточная игра</a>
        //         {/* <Card /> */}
        //         {/* <Add /> */}
        //         <a className='headerMenuLinks'>добавить слово</a>
        //         <Switcher />
        //     </div>
        // </header>
    );
}

export default Header;





// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from '../Header/Header.module.css';

// const Header = ({ tema, toggleTema, clickPopup }) => {
//     return (
//         <div className={styles.headerContainer}>
//             <header className={styles.header}>
//                 <h1 className={styles.headerTitle}>English words by cards</h1>
//                 <NavLink className={styles.headerLinks} to='/' onClick={clickPopup}>Home</NavLink>
//                 <NavLink className={styles.headerLinks} to='/game' onClick={clickPopup}>Card game</NavLink>
//                 <NavLink className={styles.headerLinks} to='/new' onClick={clickPopup}>Add word</NavLink>
//                 <NavLink className={styles.headerLinks} to='/' onClick={toggleTema} >Change theme</NavLink>
//             </header>
//         </div>
//     )

// }

// export default Header;