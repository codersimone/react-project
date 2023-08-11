import React from "react";
import './styles.css';
import PopupForm from "../PopupForm";

const Popup = ({ clickPopup }) => {
    return (
        <div className="popup" >
            <div className="popup__content">
                <PopupForm />
                <img onClick={clickPopup} className="popup__close-icon" src="../img/icons/popup_close_icon-48.png" alt="Close picture" />
            </div>
        </div>
    )
}

export default Popup;