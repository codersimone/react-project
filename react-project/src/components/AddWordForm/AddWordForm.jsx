import React, {useState, useContext} from 'react';
import Context from '../../context/context';
import styles from './AddWordForm.module.css';

//форма добавления нового слова. Аргументом передается функция clickPopup, объявленная в компоненте App.js
const AddWordForm = ({clickPopup}) => {
//контекст для добавления нового слова - устанавливаем хук useContext(Context) и указываем, что из Context берем значение addWord
    const {addWord} = useContext(Context);
//хук add с начальным состоянием {}/пустой объект и методом setAdd, позволяющим менять это состояние в функции handleAdd
    const [add, setAdd] = useState({});
//функция для передачи состояния в addWord()
    const handleAdd = (e) => {
        const value = (e.target.value);
        setAdd({
            ...add,
            [e.target.name]: value,
        })
    }
//получение формы
const isFormFilled = add.english && add.transcription && add.russian && add.tags;
//функция проверки формы на пустые строки (валидация формы / событие submit) при отправке/после клика на кнопку
function onSubmit() {
    if (!isFormFilled) {
        console.log('Error: Please fill in all the fields');
    } else {
        console.log('Form parameters:', add);
        addWord(add);
        clickPopup();
    }
}
//TODO: переименовать стили на более короткие и емкие
//TODO: поменять стили кнопки в стартовом состоянии (инпуты пусты и она не срабатывает) !!!!!- не стили, а блок кнопки или ее отсутсвие пока поля не будут заполнены!!!!!
    return (
// форма с инпутами под выведение всех значений ключей json файла со словами с сервера и кнопкой Сохранить
        <form className={styles.formContainer}>
            <div className={styles.formFields}>
                <input className={styles.formInput} id='engWord' type='text' name='english' value={add.english || ''} onChange={handleAdd} placeholder='' required />
                <label className={styles.formLabel} htmlFor='engWord'>Введите новое слово</label>
            </div>

            <div className={styles.formFields}>
                <input className={styles.formInput} id='wordTranscription' type='text' name='transcription' value={add.transcription || ''} onChange={handleAdd} placeholder='' required />
                <label className={styles.formLabel} htmlFor='wordTranscription'>Введите транскрипцию</label>
            </div>

            <div className={styles.formFields}>
                <input className={styles.formInput} id='rusTranslation' type='text' name='russian' value={add.russian || ''} onChange={handleAdd} placeholder='' required />
                <label className={styles.formLabel} htmlFor='rusTranslation'>Введите перевод</label>
            </div>

            <div className={styles.formFields}>
                <input className={styles.formInput} id='wordTag' type='text' name='tags' value={add.tags || ''} onChange={handleAdd} placeholder='' required />
                <label className={styles.formLabel} htmlFor='wordTag'>Введите подходящий тег</label>
            </div>

            <div className={styles.formBtnContainer}>
                <button className={styles.formBtnSubmit} type='submit' onClick={onSubmit} disabled={!isFormFilled}>save</button>
            </div>
        </form>
    )
}

export default AddWordForm;