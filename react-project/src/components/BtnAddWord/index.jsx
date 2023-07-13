import React, { useState } from "react";
import Popup from "./../Popup";

function BtnAddWord() {
    const [isOpen, setIsOpen] = useState(false);
    const clickPopup = () => setIsOpen(!isOpen)
    return (
        <>
            <button onClick={clickPopup}>Добавить слово</button>
            {isOpen && <Popup clickPopup={clickPopup} />}
        </>
    )
}

export default BtnAddWord;