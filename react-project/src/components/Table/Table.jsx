import React, { useState, useContext } from 'react';
import Context from '../../context/context';
import Words from '../../data/englishWords';
import TableRow from '../TableRow/TableRow'
import styles from '../Table/Table.module.css';


function Table() {
    const {dictionary} = useContext(Context);
    const [save, setSave] = useState(dictionary);
    const handleSave = (index, newWord) => {
        const copyWordsArr = [...save];
        copyWordsArr[index] = newWord;
        setSave(copyWordsArr);
    }
    return (
        <>
            <div className={styles.container}>
                <table className={styles.tableContainer}>
                    <thead className={styles.tableColumnHeaders}>
                        <tr>
                            <th>English</th>
                            <th>Transcription</th>
                            <th>Russian</th>
                            <th>Tag</th>
                            <th>Edit</th>
                            <th>Delite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dictionary.map((word, index) => (<TableRow key={index} word={word} handleSaveNewWord={(newWord) => handleSave(index, newWord)} />))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;