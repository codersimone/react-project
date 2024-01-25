import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SwitchIcon } from '../assets/icons/sun_moon_icon.svg';
// import {ReactComponent as MenuIcon} from '../assets/icons/burger_menu_navigation_icon.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState();
    return (
        <header className='header'>
            <NavLink className='headerLogo' to='/'><p><strong>english words</strong> by cards</p></NavLink>
            <nav className={`headerNav ${isOpen ? 'active' : ''}`}>
                <div className='headerNavList'>
                    <NavLink className='headerNavItem' to='/game'>card game</NavLink>
                    <NavLink className='headerNavItem' to='/new'>add word</NavLink>
                    <NavLink className='headerNavItem' to='/'><SwitchIcon /></NavLink>
                </div>
            </nav>

            {/* иконка бургер-меню для мобильной версии */}
            {/* <button className='headerMenuBtn' onClick={() => setOpen(!isOpen)}><MenuIcon /></button> */}
        </header>

    );
}

export default Header;