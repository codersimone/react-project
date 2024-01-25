import React, {useState} from 'react';

const Thead = () => {
    // хук useState для условного рендеринга конопок/иконок и действий в них 
    const [isChange, setIsChange] = useState(false);

    return (
        <thead className='tableThead'>
            {isChange ? (
                <tr>
                    <th>english</th>
                    <th>transcription</th>
                    <th>russian</th>
                    <th>tag</th>
                    <th>save</th>
                    <th>cancel</th>
                </tr>) : 
                (<tr>
                    <th>english</th>
                    <th>transcription</th>
                    <th>russian</th>
                    <th>tag</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            )}
        </thead>

        // было так: 
        // <tr>
        //     <th>english</th>
        //     <th>transcription</th>
        //     <th>russian</th>
        //     <th>tag</th>
        //     <th>edit</th>
        //     <th>delete</th>
        // </tr>
    );
}

export default Thead;