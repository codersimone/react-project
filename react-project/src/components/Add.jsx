import React, {useState} from 'react';
import { observer, inject } from 'mobx-react';
import {ReactComponent as CloseIcon} from '../assets/icons/close_icon.svg';

const Add = ({wordStore}) => {
    // хук useState - состояние pressed/Нажато с начальным состоянием false и функция изменения состояния setPressed 
    const [pressed, setPressed] = useState(false);
    const [add, setAdd] = useState();

    // функция изменения состояния кнопки закрытия/иконки Крестик
    const handleChangeCloseIconState = () => {
        setPressed(!pressed);
    };

    // функция изменения состояния инпутов
    const handleChangeInput = (event) => {
        setAdd({...add, [event.target.name]: event.target.value});
    }

    //функция проверки формы на пустые строки (валидация формы / событие submit) при отправке/после клика на кнопку
    const onSubmit = () => {
        if (
            add.english !== '' &&
            add.transcription !== '' &&
            add.russian !== '' &&
            add.tags !== '' 
        ) {
            wordStore.words.addWord(add);
            setAdd();
            // setPressed(false);
        }
    }
    
    return (
        <div className='popupAddContainer' >
            <div className='addContent'>
                <CloseIcon onClick={handleChangeCloseIconState} className='addCloseIcon' alt='Close picture' />
                
                <form className='addFormContainer'>
                    <div className='addFormFields'>
                        <input className='addFormInput' id='engWord' type='text' name='english' onChange={handleChangeInput} placeholder='' required />
                        <label className='addFormLabel' htmlFor='engWord'>Введите новое слово</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTranscription' type='text' name='transcription' onChange={handleChangeInput} placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTranscription'>Введите транскрипцию</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='rusTranslation' type='text' name='russian' onChange={handleChangeInput} placeholder='' required />
                        <label className='addFormLabel' htmlFor='rusTranslation'>Введите перевод</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTag' type='text' name='tags' onChange={handleChangeInput} placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTag'>Введите подходящий тег</label>
                    </div>

                    <div className='addFormBtnContainer'>
                        <button className='addFormBtnSubmit' type='submit' onClick={onSubmit}>save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default inject(['wordStore'])(observer(Add));