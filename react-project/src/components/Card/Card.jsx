import React, {useContext, useState} from 'react';
import Context from '../../context/context';
import {ReactComponent as CloseIcon} from '../../assets/icons/close_icon.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow_right_circle_icon.svg';
import styles from '../Card/Card.module.css';

//попап с карточкой/игрой - изучением слов по карточкам. Аргументом передается функция clickPopup, объявленная в компоненте App.js
const Card = ({ clickPopup }) => {
    //контекст для передачи слов - устанавливаем хук useContext(Context) и указываем, что из Context берем значение dictionary
    const {dictionary} = useContext(Context);
    //хук currentIndex с начальным состоянием 0 индекс и методом setCurrentIndex, позволяющим менять это состояние при помощи событий onClick() с функциями goToPrevBtn() и goToNextBtn() (кнопки/иконки Назад и Вперед)
    const [currentIndex, setCurrentIndex] = useState(0);
    //хук pressedBtn с начальным состоянием false и методом setPressedBtn, позволяющим менять это состояние при помощи собития onClick() с функцией showTranslation() (кнопка Перевод) 
    const [pressedBtn, setPressedBtn] = useState(false);
    //функция showTranslation, позволяющая менять начальное состояние хука pressedBtn на противоположное по событию onClick() с функцией showTranslation()
    const showTranslation = () => setPressedBtn(!pressedBtn);
    //константа word со значением, равным импортированному общему массиву слов dictionary с индексом - начальным состоянием компонента (хук/константа currentIndex)
    const word = dictionary[currentIndex] || {};
    //функция goToPrevBtn() для события onClick() (кнопка/иконка Назад)
    const goToPrevBtn = () => {
        //метод if с условиями: если currentIndex больше 0 - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс назад)
        if (currentIndex > 0) { setCurrentIndex(currentIndex - 1) }
        setPressedBtn(false)
    }
    //функция goToNextBtn() для события onClick() (кнопка/иконка Вперед)
    const goToNextBtn = () => {
    //метод if с условиями: если currentIndex меньше днины массива Words -1 индекс (тк массив начинает отсчет с 0, а не с 1 и поледний индекс массива не учтется) - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс вперед)
        if (currentIndex < dictionary.length - 1) { setCurrentIndex(currentIndex + 1) }
        setPressedBtn(false)
    }
    return (
        <div className={styles.popupCardContainer}>
            <div className={styles.cardContent}>
                <CloseIcon onClick={clickPopup} className={styles.cardCloseIcon} alt='Close picture' />
                <div>
                    <div className={styles.wordInfo}>{word.english}</div>
                    <div className={styles.wordInfoTranslation}>{word.transcription}</div>
                    <div className={styles.wordInfo}>{word.tags}</div>
                </div>
                <div className={styles.translationContainer}>
                    {pressedBtn ? <div className={styles.translationIsShown}>{word.russian}</div> : <button className={styles.btnShowTranslation} onClick={showTranslation}>show<br />translation</button>}
                </div>
                <ArrowIcon onClick={goToPrevBtn} disabled={currentIndex === 0} className={styles.cardPrevArrow} alt='Left arrow' />
                <ArrowIcon onClick={goToNextBtn} disabled={currentIndex === dictionary.length - 1} className={styles.cardNextArrow} alt='Right arrow' />
            </div>
        </div>
    )
}

export default Card;