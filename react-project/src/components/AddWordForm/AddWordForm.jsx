import React, {useState, useContext} from 'react';
import Context from '../../context/context';
import styles from './AddWordForm.module.css';

const AddWordForm = ({clickPopup}) => {
    const {addWord} = useContext(Context);
    const [add, setAdd] = useState({});
    //функция для передачи состояния в addWord()
    const handleAdd = (e) => {
        const value = (e.target.value);
        setAdd({
            ...add,
            [e.target.name]: value
        })
    }

const isFormFilled = add.english && add.transcription && add.russian && add.tags_json;
//функция проверки формы на пустые строки (валидация формы / событие submit) при отправке/после клика на кнопку
function onSubmit() {
    if (!isFormFilled) {
        alert('Error: Please fill in all the fields');
    } else {
        console.log('Form parameters:', add);
        addWord(add);
        clickPopup();
    }
}
    //TODO: переименовать стили на более короткие и емкие
    //!!!!!!!!!!!!!!!!!!!! 12.12.2023 поменять стили кнопки в стартовом состоянии (когда инпуты пусты и она не срабатывает)
    return (
        // 1/ написать инпут
        <div className={styles.popupFormContainer}>
            <input name='english' type='text' value={add.english || ''} onChange={handleAdd} placeholder='Введите новое слово на английском языке' />
            <input name='transcription' type='text' value={add.transcription || ''} onChange={handleAdd} placeholder='Введите транскрипцию нового слова' />
            <input name='russian' type='text' value={add.russian || ''} onChange={handleAdd} placeholder='Введите перевод нового слова на русском языке' />
            <input name='tags_json' type='text' value={add.tags_json || ''} onChange={handleAdd} placeholder='Введите тег к новому слову' />
            <button className={styles.btnSave} onClick={onSubmit} disabled={!isFormFilled}>Сохранить</button>
        </div>
    )
}

export default AddWordForm;