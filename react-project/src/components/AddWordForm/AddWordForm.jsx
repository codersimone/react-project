import React, {useState, useContext} from 'react';
import Context from '../../context/context';
import styles from './AddWordForm.module.css';

const AddWordForm = (props) => {
    const {addWord} = useContext(Context);
    const [add, setAdd] = useState(props);
    //сделать 4 инпута (по ключам) - DONE
    //создать состояние для хранения значений полей - DONE
    //создать функцию на подобие handleChange, чтобы передавать состояние в ф-ю addWord
    const handleAdd = (e) => {
        //читаем значение из инпута 
        const value = (e.target.value);
        setAdd({
            ...add,
            [e.target.name]: value
        })
    }

    // 2/ прочитать слово из инпута
    // const getValue = () => {
    //     console.log(document.getElementById('addNewEngWord').value);
    // }

    //TODO: 3/ прокинуть в функцию список слов
    //TODO: переименовать стили на более короткие и емкие
    return (
        // 1/ написать инпут
        <div className={styles.popupFormContainer}>
            <input name='englishWord' type='text' value={add.english} onChange={handleAdd} placeholder='Введите новое слово на английском языке' />
            <input name='transcription' type='text' value={add.transcription} onChange={handleAdd} placeholder='Введите перевод нового слова на русском языке' />
            <input name='translationRussian' type='text' value={add.russian} onChange={handleAdd} placeholder='Введите транскрипцию нового слова' />
            <input name='tag' type='text' value={add.tags_json} onChange={handleAdd} placeholder='Введите тег к новому слову' />
            <button className={styles.btnSave} onClick={handleAdd}>Сохранить</button>
        </div>

    )
}

export default AddWordForm;