import React from 'react';

const Thead = () => {
    return (
        <>
            <thead className='tableThead'>
                <tr>
                    <th>english</th>
                    <th>transcription</th>
                    <th>russian</th>
                    <th>tag</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
        </>
        
    );
}

export default Thead;