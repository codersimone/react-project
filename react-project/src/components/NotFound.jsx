import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Error404Icon } from '../assets/icons/error_404_icon.svg';

//функция обработки ошибки при не совпадении адресов страниц/компонентов, выводит сообщение на экран в зависомости от работы хука useNavigate/навигация/сопоставление путей страниц/компонентов приложения
const NotFound = () => {
    // хук useNavigate 
    const navigate = useNavigate();

    // функция для клика по кнопке возврата на главную страницу 
    function callBack() {
        navigate('/');
    }
    
    return (
        <div className='error404Container'>
            <div className='errorImg'>
                <Error404Icon />
            </div>
            <h2 className='errorText'><strong>oops...</strong> the page you are looking for could not be found</h2>
            <button className='errorBtn' onClick={callBack}>go back to the home page</button>
        </div>
    );
}

export default NotFound;