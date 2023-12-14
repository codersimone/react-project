import React, {useContext} from 'react';
import Context from '../../context/context';
import styles from './Btn.module.css';

const Btn = (props) => {
    const {deleteWord, editWord} = useContext(Context);
    const { type, wordList, wordId } = props;

    // const deleteWord = () => {
    //     const wordIndex = wordList.findIndex((word) => word.id === wordId);
    //     wordList.splice(wordIndex, 1);
    // }

    // const changeWord = () => {
    //     console.log(1);
    // }

    const clickToDelete = () => deleteWord(wordId);
    const clickToChange = () => editWord(wordId);

    return (
        <button
            onClick={type === 'delete' ? clickToDelete : clickToChange}
            className={styles.btnComponent}>{props.children}
        </button>
    )
}

export default Btn;