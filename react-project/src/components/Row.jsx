import React, {useState} from 'react';
import { observer, inject } from 'mobx-react';
// import {ReactComponent as CancelIcon} from '../assets/icons/close_icon.svg';
// import {ReactComponent as SaveIcon} from '../assets/icons/check_icon.svg';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete_icon.svg';
import {ReactComponent as EditIcon} from '../assets/icons/edit_icon.svg';

const Row = ({ wordStore, word, isLoaded }) => {
    // хук useState - состояние pressed/Нажато с начальным состоянием false и функция изменения состояния setPressed 
    const [pressed, setPressed] = useState(false);

    // хук useState - состояние state с начальным состоянием слово (word) и  функция изменения состояния setState
    const [state, setState] = useState(word)

    // хук useState - состояние wordFromApi с начальным состоянием - необходимыми полями вывода данных слова из json файла сервера и функция изменения состояния setWordFromApi
    const [wordFromApi, setWordFromApi] = useState({
        id: word.id,
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
    });

    // проверка -  если данные уже были загружены - вернет их
    if (isLoaded) {
        return;
    }

    // константа с вызовом функции из стора для удаления слова 
    const onDeleteWord = (id) => {
        wordStore.deleteWord(id);
        // setPressed(false);
    }

    // константа с вызовом функции из стора для редактирвоания слова 
    const onEditWord = () => {
        // создаем новый объект для записи в него уже измененного слова с необхомыми полями вывода данных слова 
        const cangedWord = {
            id: wordFromApi.id,
            english: wordFromApi.english,
            transcription: wordFromApi.transcription,
            russian: wordFromApi.russian,
            tags: wordFromApi.tags,
        };
        // записываем уже измененное слово (cangedWord) в функцию (editWord) из стора (wordStore) для отправки обновленных данных на сервер и перерисовки компонента Row
        wordStore.editWord(cangedWord);
        setPressed(false);
    };

    // функция изменения состояния кнопки редактирования/иконки Карандаш на true (противоположное false)
    const handleChangeButtonsState = () => {
        setPressed(true);
    };

    // функция изменения состояния инпутов
    const handleChangeInput = (event) => {
        setWordFromApi({...wordFromApi, [event.target.name]: event.target.value});
    }

    // функция изменения состояния инпутов при нажатии на кнопку/иконку Отмена редактирования и возврата к изначальному состоянию инпутов (данные слова, которые были до редактирования)
    const handleChangeCancel = (word) => {
        setWordFromApi({...wordStore.word});
        setPressed(false);
    }

    return (
// условный рендеринг
    <> 
        { pressed ?
// второй вариант отображения: инпуты с данными слов для их редактирования + иконки SaveIcon/Галочка и CancelIcon/Сброс введенных данных 
        (<tr key={word.id} className='tableWordInfo'>
            <td>
                <input 
                    onChange={handleChangeInput} 
                    name='english' 
                    type='text' 
                    value={wordFromApi.english} 
                />
            </td>
            <td>
                <input 
                    onChange={handleChangeInput} 
                    name='transcription' 
                    type='text' 
                    value={wordFromApi.transcription} 
                />
            </td>
            <td>
                <input 
                    onChange={handleChangeInput} 
                    name='russian' 
                    type='text' 
                    value={wordFromApi.russian} 
                />
            </td>
            <td>
                <input 
                    onChange={handleChangeInput} 
                    name='tags' 
                    type='text' 
                    value={wordFromApi.tags} 
                />
            </td>
            <td>
                <button onClick={() => onEditWord(word.id)} className='saveBtn'>save</button>
                {/* <SaveIcon onClick={() => onEditWord(word.id)} className='saveIcon' alt='Save icon' /> */}
            </td>
            <td>
                <button onClick={handleChangeCancel} className='cancelBtn'>cancel</button>
                {/* <CancelIcon className='cancelIcon' alt='Cancel icon' /> */}
            </td>
        </tr>) : 
// первый вариант отображения: строки со словами и их данными + иконки EditIcon/Карандаш и DeleteIcon/Мусорный бак
        (<tr key={word.id} className='tableWordInfo'> 
            <td>{wordFromApi.english}</td>
            <td>{wordFromApi.transcription}</td>
            <td>{wordFromApi.russian}</td>
            <td>{wordFromApi.tags}</td>
            <td>
                <EditIcon onClick={handleChangeButtonsState} className='editIcon' alt='Edit icon' />
            </td>
            <td>
                <DeleteIcon onClick={() => onDeleteWord(word.id)} className='deleteIcon' alt='Delete icon' />
            </td>
        </tr>
        )}
    </>
    );
}

export default inject(['wordStore'])(observer(Row)); 