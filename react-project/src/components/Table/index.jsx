import React from 'react';
import './styles.css'
// import Words from './src/data/englishWords.json';
import Words from '../../data/englishWords';
import Button from '../Button';

function TableWithEnglishWords() {
    const WordView = Words.map(
        (word) => {
            return (
                <tr className='table-word-info'>
                    <td>{word.englishWord}</td>
                    <td>{word.transcription}</td>
                    <td>{word.translationRussian}</td>
                    <td>{word.tag}</td>
                    <td>
                        <Button>
                            <img src="../img/icons/btn_edit_icon-48.png" alt='Edit button' />
                        </Button>
                    </td>
                    <td>
                        <Button>
                            <img src="../img/icons/btn_delite_icon-48.png" alt="Delite button" />
                        </Button>
                    </td>
                </tr>
            )
        }
    )
    return (
        <>
            <div className='container'>
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
            </div>
        </>
    )
}

export default TableWithEnglishWords;