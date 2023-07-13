import React from "react";

//нужно подключить стили (попап должен быть центрирован по центру экрана, все вокруг должно становиться темно-серым/получпрозрачным)
function Popup({ clickPopup }) {
    return (
        <div>
            <div onClick={clickPopup}>X</div>
            {/** сюда внести новый компонент - верстка формы добавления нового слова */}
        </div>
    )
}

export default Popup;