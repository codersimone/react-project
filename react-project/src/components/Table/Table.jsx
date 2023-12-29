import React, { useState, useContext } from 'react';
import Context from '../../context/context';
import TableRow from '../TableRow/TableRow'
import styles from '../Table/Table.module.css';

//таблица слов стартовой страницы приложения с выводом заголовков и компонента TableRow, выводящего массив слов, полученных с сервера
function Table() {
//контекст для передачи слов - устанавливаем хук useContext(Context) и указываем, что из Context берем значение dictionary
    const {dictionary} = useContext(Context);
//хук save с начальным состоянием равным массиву dictionary и методом setSave, позволяющим менять это состояние
    const [save, setSave] = useState(dictionary);
//функция с аргументами index(текуший индекс) и !!!!!!! дописать
    const handleSave = (index, newWord) => {
        const copyWordsArr = [...save];
        copyWordsArr[index] = newWord;
        setSave(copyWordsArr);
    }
    return (
            <div className={styles.container}>
                <table className={styles.tableContainer}>
                    <thead className={styles.tableColumnHeaders}>
                        <tr>
                            <th>English</th>
                            <th>Transcription</th>
                            <th>Russian</th>
                            <th>Tag</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dictionary.map((word) => (<TableRow key={word.id} word={word} handleSaveNewWord={(newWord) => handleSave(word.id, newWord)} />))}
                    </tbody>
                </table>
            </div>
    )
}

export default Table;