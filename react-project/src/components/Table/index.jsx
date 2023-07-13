import React from 'react';
import './styles.css'
// import Words from './src/data/englishWords.json';
import Words from '../../data/englishWords';

function TableWithEnglishWords() {
    const WordView = Words.map(
        (word) => {
            return (
                <tr className='table-word-info'>
                    <td>{word.englishWord}</td>
                    <td>{word.transcription}</td>
                    <td>{word.translationRussian}</td>
                    <td>{word.tag}</td>
                    <td>вставить Компонент кнопки "редактировать"</td>
                    <td>вставить Компонент кнопки "удалить"</td>
                </tr>
            )
        }
    )
    return (
        <>
            <table className='table-container'>
                <thead className='table-column-headers'>
                    <tr key={WordView.id}>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Russian</th>
                        <th>Tag</th>
                        <th>Edit</th>
                        <th>Delite</th>
                    </tr>
                </thead>
                <tbody>
                    {WordView}
                </tbody>
            </table>
        </>
    )
}

export default TableWithEnglishWords;