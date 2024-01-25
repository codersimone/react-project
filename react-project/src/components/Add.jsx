import React, {useState} from 'react';
import { observer, inject } from 'mobx-react';
import {ReactComponent as CloseIcon} from '../assets/icons/close_icon.svg';

const Add = ({wordStore}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='popupAddContainer' >
            <div className='addContent'>
                <CloseIcon onClick={setIsOpen} className='addCloseIcon' alt='Close picture' />
                
                <form className='addFormContainer'>
                    <div className='addFormFields'>
                        <input className='addFormInput' id='engWord' type='text' name='english' placeholder='' required />
                        <label className='addFormLabel' htmlFor='engWord'>Введите новое слово</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTranscription' type='text' name='transcription' placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTranscription'>Введите транскрипцию</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='rusTranslation' type='text' name='russian' placeholder='' required />
                        <label className='addFormLabel' htmlFor='rusTranslation'>Введите перевод</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTag' type='text' name='tags' placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTag'>Введите подходящий тег</label>
                    </div>

                    <div className='addFormBtnContainer'>
                        <button className='addFormBtnSubmit' type='submit'>save</button>
                    </div>
                </form>

                {/* <form className='addFormContainer'>
                    <div className='addFormFields'>
                        <input className='addFormInput' id='engWord' type='text' name='english' value={add.english || ''} onChange={handleAdd} placeholder='' required />
                        <label className='addFormLabel' htmlFor='engWord'>Введите новое слово</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTranscription' type='text' name='transcription' value={add.transcription || ''} onChange={handleAdd} placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTranscription'>Введите транскрипцию</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='rusTranslation' type='text' name='russian' value={add.russian || ''} onChange={handleAdd} placeholder='' required />
                        <label className='addFormLabel' htmlFor='rusTranslation'>Введите перевод</label>
                    </div>

                    <div className='addFormFields'>
                        <input className='addFormInput' id='wordTag' type='text' name='tags' value={add.tags || ''} onChange={handleAdd} placeholder='' required />
                        <label className='addFormLabel' htmlFor='wordTag'>Введите подходящий тег</label>
                    </div>

                    <div className='addFormBtnContainer'>
                        <button className='addFormBtnSubmit' type='submit' onClick={onSubmit} disabled={!isFormFilled}>save</button>
                    </div>
                </form> */}
            </div>
        </div>
    );
}

export default inject(['wordStore'])(observer(Add));