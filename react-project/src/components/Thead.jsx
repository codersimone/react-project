import React, {useEffect, useState} from 'react';
import { observer, inject } from 'mobx-react';

const Thead = ({ wordStore, word, isLoaded }) => {
    // проверка -  если данные уже были загружены - вернет их
    // ??? НУЖНА ЛИ ОНА ТУТ ВООБЩЕ ??? 
    // нужна связка с изменениями - кликами на иконки EditIcon/Карандаш и DeleteIcon/Мусорный бак и SaveIcon/Галочка и CancelIcon/Сброс введенных данных в компоненте Row
    if (isLoaded) {
        return;
    }

    // хук useState для условного рендеринга конопок/иконок и действий в них 
    const [change, setChange] = useState(false);

    return (
        <thead className='tableThead'>
            {change ? (
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