import React from 'react';
import { useState } from 'react';
import Words from '../../data/englishWords';
import styles from '../Card/Card.module.css';

const Card = ({ clickPopup }) => {
    //хук currentIndex с начальным состоянием 0 индекс и методом setCurrentIndex, позволяющим менять это состояние при помощи событий onClick() с функциями goToPrevBtn() и goToNextBtn() (кнопки/иконки Назад и Вперед)
    const [currentIndex, setCurrentIndex] = useState(0);
    //хук pressedBtn с начальным состоянием false и методом setPressedBtn, позволяющим менять это состояние при помощи собития onClick() с функцией showTranslation() (кнопка Перевод) 
    const [pressedBtn, setPressedBtn] = useState(false);
    //функция showTranslation, позволяющая менять начальное состояние хука pressedBtn на противоположное по собитию onClick() с функцией showTranslation()
    const showTranslation = () => setPressedBtn(!pressedBtn);
    //константа word со значением, равным импортированному общему массиву слов Words с индексом - начальным состоянием компонента (хук/константа currentIndex)
    const word = Words[currentIndex];
    //функция goToPrevBtn() для события onClick() (кнопка/иконка Назад)
    const goToPrevBtn = () => {
        //метод if с условиями: если currentIndex больше 0 - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс назад)
        if (currentIndex > 0) { setCurrentIndex(currentIndex - 1) }
        setPressedBtn(false)
    }
    //функция goToNextBtn() для события onClick() (кнопка/иконка Вперед)
    const goToNextBtn = () => {
        //метод if с условиями: если currentIndex меньше днины массива Words -1 индекс (тк массив начинает отсчет с 0, а не с 1 и поледний индекс массива не учтется) - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс вперед)
        if (currentIndex < Words.length - 1) { setCurrentIndex(currentIndex + 1) }
        setPressedBtn(false)
    }
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <img onClick={clickPopup} className={styles.cardCloseIcon} src='../img/icons/popup_close_icon-48.png' alt='Close picture' />
                <div>
                    <div>{word.englishWord}</div>
                    <div>{word.transcription}</div>
                    <div>{word.tag}</div>
                </div>
                <div>
                    {pressedBtn ? <div className={styles.btnShowTranslation}>{word.translationRussian}</div> : <button className={styles.btnShowTranslation} onClick={showTranslation}>Перевод</button>}
                </div>
                <img onClick={goToPrevBtn} disabled={currentIndex === 0} className={styles.cardPrevArrow} src='../img/icons/baseline_arrow_right_alt_white_24dp.png' />
                <img onClick={goToNextBtn} disabled={currentIndex === Words.length - 1} className={styles.cardNextArrow} src='../img/icons/baseline_arrow_right_alt_white_24dp.png' />
            </div>
        </div>
    )
}

export default Card;