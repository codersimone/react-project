import React, {useEffect} from 'react';
import { observer, inject } from 'mobx-react';
// import Btn from './Btn/Btn';
import {ReactComponent as EditIcon} from '../assets/icons/edit_icon.svg';
import {ReactComponent as DeleteIcon} from '../assets/icons/delete_icon.svg';


const Row = ({ wordStore, word, isLoaded, id }) => {
    // тут хук не работает, только в App.js 
    // ????? НУЖНО ЛИ ЕГО ТУТ УКАЗЫВАТЬ ПОМИМО App.js? ПРИ ОТКРЫТОМ ПОПАПЕ ВЕДЬ НЕ РЕНДЕРИТСЯ КОМПОНЕНТ App.js И ДАННЫЕ НЕ ПРОЙДУТ В ОБА ПОПАПА ?!?!?!?!?
    // useEffect(() => {
    //     wordStore.loadData();
    // }, []); 

    // проверка -  если данные уже были загружены - вернет их
    if (isLoaded) {
        return;
    }

    // константа с необходимыми полями вывода данных слова из json файла сервера 
    const wordFromApi = {
        id: word.id,
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
    };
    // ранее был хук useState
    // const [editedWord, setEditedWord] = useState({
    //     id: word.id,
    //     english: word.english,
    //     transcription: word.transcription,
    //     russian: word.russian,
    //     tags: word.tags,
    // });

    // функция клика для кнопки/иконки Delete компонента Row
    // const onDelete = (id) => {
    //     wordStore.deleteWord(id);
    // };
    // const onDeleteWord = () => {
    //             const wordIndex = wordStore.words.findIndex((word) => word.id === id);
    //             wordStore.wordIndex(id);
    //         }

    const onDeleteWord = (id) => {
        wordStore.deleteWord(id);
    }

    // const clickToDelete = () => onDeleteWord();

    return (
        <tr key={word.id} className='tableWordInfo'> 
                        <td>{wordFromApi.english}</td>
                        <td>{wordFromApi.transcription}</td>
                        <td>{wordFromApi.russian}</td>
                        <td>{wordFromApi.tags}</td>
                        <td>
                            <div className='editDeleteIcon' type='change' id={word.id}>
                                <EditIcon className='editIcon' alt='Edit button' />
                            </div>
                        </td>
                        <td>
                            <div className='editDeleteIcon' type='delete' id={word.id}>
                                <DeleteIcon className='deleteIcon' onClick={onDeleteWord} alt='Delete button' />
                            </div>
                        </td>
                        
                    </tr>
    );
}

export default inject(['wordStore'])(observer(Row)); 