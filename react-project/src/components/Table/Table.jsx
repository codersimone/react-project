import React from 'react';
import styles from './styles.css';
// import Words from './src/data/englishWords.json';
import Words from '../../data/englishWords';

function TableWithEnglishWords() {
    const WordView = Words.map(
        (word) => {
            return (
                <tr>
                    <td>{word.englishWord}</td>
                    <td>{word.transcription}</td>
                    <td>{word.translationRussian}</td>
                    <td>{word.tag}</td>
                    <td></td>
                </tr>
            )
        }
    )
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Russian</th>
                        <th>Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {WordView}
                </tbody>
            </table>
            <button></button>
        </>
    )
}

export default TableWithEnglishWords;