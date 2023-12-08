import React, { useState } from 'react';
import Words from '../../data/englishWords';
import Btn from '../Btn/Btn';
import styles from '../TableRow/TableRow.module.css';


function TableRow({word, handleSaveNewWord}) {
    const [edit, setEdit] = useState(false);
    const [editedWord, setEditedWord] = useState({
        id: word.id,
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags_json: word.tags_json,
    });
    const handleEdit = () => {
        setEdit(true);
    }
    const handleSave = () => {
        handleSaveNewWord(editedWord);
        setEdit(false);
    }

    const handleChange = (e) => {
        const value = (e.target.value);
        setEditedWord({
            ...editedWord,
            [e.target.name]: value
        })
    }
            return (
                <>
                    { edit ? 
                    (<tr key={word.id} className={styles.tableWordInfo}>
                        <td><input name='englishWord' type='text' value={editedWord.english} onChange={handleChange} /></td>
                        <td><input name='transcription' type='text' value={editedWord.transcription} onChange={handleChange} /></td>
                        <td><input name='translationRussian' type='text' value={editedWord.russian} onChange={handleChange} /></td>
                        <td><input name='tag' type='text' value={editedWord.tags_json} onChange={handleChange} /></td>
                        <td><Btn className={styles.editDeliteIcon} type='change' wordList={Words} wordId={word.id}>
                            <img className={styles.editIcon} onClick={handleSave} src='../img/icons/form_select_arrow_icon.png' alt='Save button' />
                        </Btn></td>
                        <td><Btn className={styles.editDeliteIcon} type='delete' wordList={Words} wordId={word.id}>
                            <img className={styles.deleteIcon} src='../img/icons/btn_delite_icon-48.png' alt='Delite button' />
                        </Btn></td>
                    </tr>) : 
                    (<tr key={word.id} className={styles.tableWordInfo}> 
                            <td>{editedWord.english}</td>
                            <td>{editedWord.transcription}</td>
                            <td>{editedWord.russian}</td>
                            <th>{editedWord.tags_json}</th>
                            <th>
                            <Btn className={styles.editDeliteIcon} type='change' wordList={Words} wordId={word.id}>
                                <img className={styles.editIcon} onClick={handleEdit} src='../img/icons/btn_edit_icon-48.png' alt='Edit button' />
                            </Btn>
                            </th>
                            <th>
                            <Btn className={styles.editDeliteIcon} type='delete' wordList={Words} wordId={word.id}>
                                <img className={styles.deleteIcon} src='../img/icons/btn_delite_icon-48.png' alt='Delite button' />
                            </Btn>
                            </th>
                        
                    </tr>
                    )}
                </>
    )
}

export default TableRow;