import './styles.css';
import React, { useState } from 'react';

const PopupForm = () => {
    const [getValue, setGetValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setGetValue(values => ({ ...values, [value]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Введено новое слово: ' + getValue);
    }

    // const saveNewWord = (event) => setGetValue({ value: event.target.value });
    // console.log('Введено новое слово: ' + getValue);

    return (
        <>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <label for="eng-word">Введите слово на английском языке</label>
                    <input id="eng-word" onChange={handleChange} value={getValue.newEngWord} name="newEngWord" type="text" placeholder="Введите слово" required autocomplete="new-eng-word" />

                    <label for="rus-word">Введите перевод слова на русском языке</label>
                    <input id="rus-word" onChange={handleChange} value={getValue.newRusWord} name="newRusWord" type="text" placeholder="Введите перевод" required autocomplete="new-rus-word" />

                    <label for="word-tag">Выберите подходящий к слову тег</label>
                    <select id="word-tag">
                        <option selected value="chooseTag">Выберите тег из списка</option>
                        <option value="domesticAnimals">Домашние животные</option>
                        <option value="food">Еда</option>
                        <option value="home">Дом</option>
                        <option value="nature">Природа</option>
                        <option value="transport">Транспорт</option>
                    </select>

                    <button onClick={handleSubmit} className="btn-save">Сохранить</button>
                </form>
            </div>
        </>
    )
}

export default PopupForm;