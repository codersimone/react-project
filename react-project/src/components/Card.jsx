import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import {ReactComponent as CloseIcon} from '../assets/icons/close_icon.svg';
import {ReactComponent as ArrowIcon} from '../assets/icons/arrow_right_circle_icon.svg';

const Card = ({wordStore, word}) => {
    //хук currentIndex с начальным состоянием 0 индекс и методом setCurrentIndex, позволяющим менять это состояние при помощи событий onClick() с функциями goToPrevBtn() и goToNextBtn() (кнопки/иконки Назад и Вперед)
    const [currentIndex, setCurrentIndex] = useState(0);

    //хук pressedBtn с начальным состоянием false и методом setPressedBtn, позволяющим менять это состояние при помощи собития onClick() с функцией showTranslation() (кнопка Перевод) 
    const [pressedBtn, setPressedBtn] = useState(false);

    //функция showTranslation, позволяющая менять начальное состояние хука pressedBtn на противоположное по событию onClick() с функцией showTranslation()
    const showTranslation = () => setPressedBtn(!pressedBtn);

    //константа currentWord со значением, равным импортированному общему массиву слов wordStore с индексом - начальным состоянием компонента (хук/константа currentIndex)
    const currentWord = wordStore.words[currentIndex] || {};

    //функция goToPrevBtn() для события onClick() (кнопка/иконка Назад)
    const goToPrevBtn = () => {
        //метод if с условиями: если currentIndex больше 0 - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс назад)
        if (currentIndex > 0) { setCurrentIndex(currentIndex - 1) }
        setPressedBtn(false)
    }

    //функция goToNextBtn() для события onClick() (кнопка/иконка Вперед)
    const goToNextBtn = () => {
    //метод if с условиями: если currentIndex меньше днины массива Words -1 индекс (тк массив начинает отсчет с 0, а не с 1 и поледний индекс массива не учтется) - изменить состояние компонента при помощи функции setCurrentIndex (пролистать на один индекс вперед)
        if (currentIndex < wordStore.words.length - 1) { setCurrentIndex(currentIndex + 1) }
        setPressedBtn(false)
    }

    // хук useNavigate/навигация/сопоставление путей страниц/компонентов приложения
    const navigate = useNavigate();

    // функция для клика по кнопке возврата на главную страницу 
    function callBack() {
        navigate('/');
    }

    return (
        <div className='popupCardContainer'>
            <div className='cardContent'>
                <CloseIcon onClick={callBack} className='cardCloseIcon' alt='Close picture' />
                <div>
                    {/* <div className='wordInfo'>{wordStore.word.english}</div> */}
                    <div className='wordInfo'>англ</div>
                    <div className='wordInfoTranslation'>транскр</div>
                    <div className='wordInfo'>тег</div>
                </div>

                <div className='translationContainer'>
                    {pressedBtn ? <div className='translationIsShown'>перевод</div> : <button className='btnShowTranslation' onClick={showTranslation}>show<br />translation</button>}
                </div>

                <ArrowIcon onClick={goToPrevBtn} disabled={currentIndex === 0} className='cardPrevArrow' alt='Left arrow' />
                <ArrowIcon onClick={goToNextBtn} disabled={currentIndex === wordStore.words.length - 1} className='cardNextArrow' alt='Right arrow' />
            </div>
        </div>
    );
}

export default inject(['wordStore'])(observer(Card));