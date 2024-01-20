import React from 'react';
import { observer, inject } from 'mobx-react';
import Row from './Row';

const Tbody = ({ wordStore }) => {
    return (
            <tbody className='tableTbody'>
                {wordStore.words.map((word) => (<Row key={word.id} word={word} />))}

                {/* {Words.map((word, index) => (<TableRow key={index} word={word} handleSaveNewWord={(newWord) => handleSave(index, newWord)} />))} */}
            </tbody>
    );
}

export default inject(['wordStore'])(observer(Tbody));