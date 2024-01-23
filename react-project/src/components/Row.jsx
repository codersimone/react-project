import React, {useEffect, useState} from 'react';
import { observer, inject } from 'mobx-react';
// import Btn from './Btn/Btn';
import {ReactComponent as CancelIcon} from '../assets/icons/close_icon.svg';
import {ReactComponent as SaveIcon} from '../assets/icons/check_icon.svg';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete_icon.svg';
import {ReactComponent as EditIcon} from '../assets/icons/edit_icon.svg';

const Row = ({ wordStore, word, isLoaded }) => {
    // проверка -  если данные уже были загружены - вернет их
    if (isLoaded) {
        return;
    }

    // хук useState - состояние Открыть и функция изменения состояния на Закрыть
    const [isOpen, setIsOpen] = useState();

    // хук useState - состояние с необходимыми полями вывода данных слова из json файла сервера 
    const [wordFromApi, setWordFromApi] = useState( {
        id: word.id,
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
    });

    // константа с вызовом функции из стора для удаления слова 
    const onDeleteWord = (id) => {
        wordStore.deleteWord(id);
    }

    // константа с вызовом функции из стора для редактирвоания слова 
    const onEditWord = (id) => {
        // создаем новый объект для записи в него уже измененного слова с необхомыми полями 
        const cangedWord = {
            id: word.id,
            english: word.english,
            transcription: word.transcription,
            russian: word.russian,
            tags: word.tags,
        };
        // записываем уже измененное слово (cangedWord) в функцию (editWord) из стора (wordStore) для отправки обновленных данных на сервер и перерисовки компонента Row
        wordStore.editWord(id, cangedWord);
    };

    // функция изменения состояния 
    const handleChange = (event) => {
        setWordFromApi({...wordFromApi, [event.target.name]: event.target.value});
    }



    return (
// условный рендеринг
    <> 
        { isOpen ?
// второй вариант отображения: инпуты с данными слов для их редактирования + иконки SaveIcon/Галочка и CancelIcon/Сброс введенных данных 
        (<tr key={word.id} className='tableWordInfo'>
            <td><input onChange={handleChange} name='english' type='text' value={wordFromApi.english} /></td>
            <td><input onChange={handleChange} name='transcription' type='text' value={wordFromApi.transcription} /></td>
            <td><input onChange={handleChange} name='russian' type='text' value={wordFromApi.russian} /></td>
            <td><input onChange={handleChange} name='tags' type='text' value={wordFromApi.tags} /></td>
            <td>
                <div className='editDeleteIcon' type='change' id={word.id}>
                    <SaveIcon onClick={() => onEditWord(word.id)} className='saveIcon' alt='Save icon' />
                </div>
            </td>
            <td>
                <div className='editDeleteIcon' type='delete'  id={word.id}>
                    <CancelIcon className='cancelIcon' alt='Cancel icon' />
                </div>
            </td>
        </tr>) : 
// первый вариант отображения: строки со словами и их данными + иконки EditIcon/Карандаш и DeleteIcon/Мусорный бак
        (<tr key={word.id} className='tableWordInfo'> 
            <td>{wordFromApi.english}</td>
            <td>{wordFromApi.transcription}</td>
            <td>{wordFromApi.russian}</td>
            <td>{wordFromApi.tags}</td>
            <td>
                <div className='editDeleteIcon' type='change' id={word.id}>
                    <EditIcon onClick={setIsOpen} className='editIcon' alt='Edit icon' />
                </div>
            </td>
            <td>
                <div className='editDeleteIcon' type='delete' id={word.id}>
                    <DeleteIcon onClick={() => onDeleteWord(word.id)} className='deleteIcon' alt='Delete icon' />
                </div>
            </td>
        </tr>
        )}
    </>
    );
}

export default inject(['wordStore'])(observer(Row)); 