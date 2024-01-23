import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
// import {ReactComponent as MenuIcon} from '../assets/icons/burger_menu_navigation_icon.svg';
import { ReactComponent as SwitchIcon } from '../assets/icons/edit_icon.svg';
// import Card from '../Card/Card';
// import Add from '../AddWord/AddWord';

const Header = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <header className='header'>
            <NavLink className='headerLogo' to='/'><p><strong>english words</strong> by cards</p></NavLink>
            <nav className={`headerNav ${isOpen ? 'active' : ''}`}>
                <div className='headerNavList'>
                    <NavLink className='headerNavItem' to='/game'>card game</NavLink>
                    <NavLink className='headerNavItem' to='/new'>add word</NavLink>
                    <NavLink className='headerNavItem' to='/' > <SwitchIcon /> </NavLink>
                </div>
            </nav>

            {/* иконка бургер-меню для мобильной версии */}
            {/* <button className='headerMenuBtn' onClick={() => setOpen(!isOpen)}><MenuIcon /></button> */}
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