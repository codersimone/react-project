import React from 'react';
import Row from './Row';

const Tbody = () => {
    return (
        <>
            <tbody className='tableTbody'>
                {/* {Words.map((word, index) => (<TableRow key={index} word={word} handleSaveNewWord={(newWord) => handleSave(index, newWord)} />))} */}
                <Row />
            </tbody>
        </>
    );
}

export default Tbody;