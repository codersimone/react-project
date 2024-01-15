import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = () => {
    return (
        <table className='table'>
            <Thead />
            <Tbody />
        </table>
    );
}

export default Table;


// import React, { useState } from 'react';
// import Words from '../../data/englishWords';
// import TableRow from '../TableRow/TableRow'
// import styles from '../Table/Table.module.css';


// function Table() {
//     const [save, setSave] = useState(Words);
//     const handleSave = (index, newWord) => {
//         console.log(newWord);
//         const copyWordsArr = [...save];
//         copyWordsArr[index] = newWord;
//         console.log(copyWordsArr[index]);
//         setSave(copyWordsArr);
//     }
//     return (
//         <>
//             <div className={styles.container}>
//                 <table className={styles.tableContainer}>
//                     <thead className={styles.tableColumnHeaders}>
//                         <tr>
//                             <th>English</th>
//                             <th>Transcription</th>
//                             <th>Russian</th>
//                             <th>Tag</th>
//                             <th>Edit</th>
//                             <th>Delite</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Words.map((word, index) => (<TableRow key={index} word={word} handleSaveNewWord={(newWord) => handleSave(index, newWord)} />))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// export default Table;