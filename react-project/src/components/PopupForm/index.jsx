import React from "react";
import './styles.css';
// import React, { useState } from 'react';

const PopupForm = () => {
    // const [isOpen, setIsOpen] = useState('');

    return (
        <div className="form">
            <form action="">
                <label for="eng">Введите слово на английском</label>
                <input id="eng" name="new-word-eng" type="text" />

                <label for="rus">Введите перевод слова на русском</label>
                <input id="rus" name="new-word-rus" type="text" />

                <label for="tag">Выберите тег к слову</label>
                <select id="tag">
                    <option selected value="chooseTag"></option>
                    <option value="domesticAnimals">Домашние животные</option>
                    <option value="food">Еда</option>
                    <option value="home">Дом</option>
                    <option value="nature">Природа</option>
                    <option value="transport">Транспорт</option>
                </select>

                <button className="btn-save">Сохранить</button>
            </form>
        </div>
    )
}

export default PopupForm;