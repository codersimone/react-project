import React, {useState} from 'react';
import { observer, inject } from 'mobx-react';
import {ReactComponent as CloseIcon} from '../assets/icons/close_icon.svg';
import {ReactComponent as ArrowIcon} from '../assets/icons/arrow_right_circle_icon.svg';

const Card = ({wordStore}) => {
    // const [pressed, setPressed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='popupCardContainer'>
            <div className='cardContent'>
                <CloseIcon onClick={setIsOpen} className='cardCloseIcon' alt='Close picture' />
                <div>
                    <div className='wordInfo'>англ</div>
                    <div className='wordInfoTranslation'>транскр</div>
                    <div className='wordInfo'>тег</div>
                </div>
                <div className='translationContainer'>
                    {isOpen ? <div className='translationIsShown'>перевод</div> : <button className='btnShowTranslation' onClick={setIsOpen}>show<br />translation</button>}
                </div>
                <ArrowIcon className='cardPrevArrow' alt='Left arrow' />
                <ArrowIcon className='cardNextArrow' alt='Right arrow' />

                {/* <ArrowIcon onClick={goToPrevBtn} disabled={currentIndex === 0} className={styles.cardPrevArrow} alt='Left arrow' />
                <ArrowIcon onClick={goToNextBtn} disabled={currentIndex === dictionary.length - 1} className={styles.cardNextArrow} alt='Right arrow' /> */}
            </div>
        </div>
    );
}

export default inject(['wordStore'])(observer(Card));