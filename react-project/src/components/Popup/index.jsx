import React from "react";
import './styles.css';

//нужно подключить стили (попап должен быть центрирован по центру экрана, все вокруг должно становиться темно-серым/полупрозрачным)
const Popup = ({ clickPopup }) => {
    return (
        <div className="popup" >
            <div className="popup__content">
                <img onClick={clickPopup} className="popup__close-icon" src="../img/icons/popup_close_icon.png" alt="Close picture" />
            </div>
            {/** сюда внести новый компонент - верстка формы добавления нового слова */}
        </div>
    )
}

export default Popup;