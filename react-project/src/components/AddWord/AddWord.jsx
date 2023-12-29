// import React, {useState, useContext} from 'react';
// import Context from '../../context/context';
// import {ReactComponent as CloseIcon} from '../../assets/icons/close_icon.svg';
// import styles from './AddWord.module.css';


// const AddWord = ({ clickPopup }) => {
//     const {addWord} = useContext(Context);
//     const [add, setAdd] = useState({});
//     const handleAdd = (e) => {
//         const value = (e.target.value);
//         setAdd({
//             ...add,
//             [e.target.name]: value,
//         })
//     }
//     const isFormFilled = add.english && add.transcription && add.russian && add.tags;

//     function onSubmit() {
//         if (!isFormFilled) {
//             console.log('Error: Please fill in all the fields');
//         } else {
//             console.log('Form parameters:', add);
//             addWord(add);
//             clickPopup();
//         }
//     }

//     return (
//         <div className={styles.addWordPopupContainer} >
//             <div className={styles.addWordPopupContent}>
//                 <CloseIcon onClick={clickPopup} className={styles.addWordPopupCloseIcon} alt='Close picture' />
//                 <form className={styles.formContainer}>

//                     <div className={styles.formFields}>
//                         <input className={styles.formInput} id='engWord' type='text' name='english' value={add.english || ''} onChange={handleAdd} placeholder='' required />
//                         <label className={styles.formLabel}>Слово</label>
//                     </div>

//                     <div className={styles.formFields}>
//                         <input className={styles.formInput} id='wordTranscription' type='text' name='transcription' value={add.transcription || ''} onChange={handleAdd} placeholder='' required />
//                         <label className={styles.formLabel} htmlFor='wordTranscription'>Транскрипция</label>
//                     </div>

//                     <div className={styles.formBtnContainer}>
//                         <button className={styles.formBtnSubmit} type='submit' onClick={onSubmit} disabled={!isFormFilled}>save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AddWord;


import React from 'react';
import AddWordForm from '../AddWordForm/AddWordForm';
import {ReactComponent as CloseIcon} from '../../assets/icons/close_icon.svg';
import styles from './AddWord.module.css';

//попап с иконкой Закрыть и рендером компонента формы добавления нового слова. Аргументом передается функция clickPopup, объявленная в компоненте App.js
const AddWord = ({ clickPopup }) => {
    return (
        <div className={styles.addWordPopupContainer} >
            <div className={styles.addWordPopupContent}>
                <CloseIcon onClick={clickPopup} className={styles.addWordPopupCloseIcon} alt='Close picture' />
                <AddWordForm clickPopup={clickPopup} />
            </div>
        </div>
    )
}

export default AddWord;