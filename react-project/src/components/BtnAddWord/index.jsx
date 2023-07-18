import React, { useState } from "react";
import './styles.css';
import Popup from "./../Popup";

const BtnAddWord = () => {
    const [isOpen, setIsOpen] = useState(false);
    const clickPopup = () => setIsOpen(!isOpen)
    return (
        <>
            <button onClick={clickPopup} className="btn-add-word">Добавить новое слово</button>
            {isOpen && <Popup clickPopup={clickPopup} />}
        </>
    )
}

export default BtnAddWord;