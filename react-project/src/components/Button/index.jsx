import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <button className='btn-component'>{props.children}</button>
    )
}

export default Button;