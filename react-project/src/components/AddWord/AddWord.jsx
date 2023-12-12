import React from 'react';
import AddWordForm from '../AddWordForm/AddWordForm';
import styles from './AddWord.module.css';

const AddWord = ({ clickPopup }) => {
    return (
        <div className={styles.addWordPopup} >
            <div className={styles.addWordPopupContent}>
                <AddWordForm clickPopup={clickPopup} />
                <img onClick={clickPopup} className={styles.addWordPopupCloseIcon} src='../img/icons/popup_close_icon-48.png' alt='Close picture' />
            </div>
        </div>
    )
}

export default AddWord;