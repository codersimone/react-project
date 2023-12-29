import React, { useState } from 'react';
import Btn from '../Btn/Btn';
import {ReactComponent as EditIcon} from '../../assets/icons/edit_icon.svg';
import {ReactComponent as CheckIcon} from '../../assets/icons/check_icon.svg';
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete_icon.svg';
import styles from '../TableRow/TableRow.module.css';


function TableRow({word, handleSaveNewWord}) {
    const [edit, setEdit] = useState(false);
    const [editedWord, setEditedWord] = useState({
        id: word.id,
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
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
                        <td><input name='english' type='text' value={editedWord.english} onChange={handleChange} /></td>
                        <td><input name='transcription' type='text' value={editedWord.transcription} onChange={handleChange} /></td>
                        <td><input name='russian' type='text' value={editedWord.russian} onChange={handleChange} /></td>
                        <td><input name='tags' type='text' value={editedWord.tags} onChange={handleChange} /></td>
                        <td>
                            <Btn className={styles.editDeleteIcon} type='change' editedWord={editedWord} wordId={word.id}>
                            <CheckIcon className={styles.editIcon} onClick={handleSave} alt='Save button' />
                            </Btn>
                        </td>
                        <td>
                            <Btn className={styles.editDeleteIcon} type='delete'  wordId={word.id}>
                            <DeleteIcon className={styles.deleteIcon} alt='Delete button' />
                            </Btn>
                        </td>
                    </tr>) : 
                    (<tr key={word.id} className={styles.tableWordInfo}> 
                        <td>{editedWord.english}</td>
                        <td>{editedWord.transcription}</td>
                        <td>{editedWord.russian}</td>
                        <td>{editedWord.tags}</td>
                        <td>
                            <Btn className={styles.editDeleteIcon} type='change' wordId={word.id}>
                            <EditIcon className={styles.editIcon} onClick={handleEdit} alt='Edit button' />
                            </Btn>
                        </td>
                        <td>
                            <Btn className={styles.editDeleteIcon} type='delete' wordId={word.id}>
                            <DeleteIcon className={styles.deleteIcon} alt='Delete button' />
                            </Btn>
                        </td>
                        
                    </tr>
                    )}
                </>
    )
}

export default TableRow;