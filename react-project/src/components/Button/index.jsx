import React from 'react';
import './style.css';

const Button = (props) => {
    const { type, wordList, wordId } = props;

    const deleteWord = () => {
        const wordIndex = wordList.findIndex((word) => word.id === wordId);
        wordList.splice(wordIndex, 1);
    }

    const changeWord = () => {

    }

    const clickToDelete = () => deleteWord();
    const clickToChange = () => changeWord();

    return (
        <button
            onClick={type === "delete" ? clickToDelete : clickToChange}
            className='btn-component'>{props.children}</button>
    )
}

export default Button;