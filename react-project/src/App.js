import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from './context/context';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import AddWord from './components/AddWord/AddWord';
import classnames from 'classnames';
import './App.css';

const App = () => {
    //хук theme с начальным состоянием класс 'light' и методом setTheme, позволяющим менять это состояние при помощи событий onClick() с функцией изменения класса на 'dark'/стили темной темы приложения
    const [theme, setTheme] = useState('light');
    //хук isOpen с начальным состоянием false и методом setIsOpen, позволяющим менять это состояние
    const [isOpen, setIsOpen] = useState(false);
    //хук useNavigate, позволяющий управлять навигацией приложения
    const navigate = useNavigate();
    //функция handleClosePopup сопостовляющая путь '/' и выполняющая ряд действий:
    function handleClosePopup() {
        navigate('/');
    }
    //clickPopup (меняющая начальное состояние хука isOpen на противоположное)
    const clickPopup = () => setIsOpen(!isOpen);
    //toggleTheme (меняющая начальное состояние хука theme на противопожное/класс 'light' или 'dark' при условии точного совпадения одного из параметров условного/тернарного оператора)
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    //при помощи импортированной библиотеки classnames задаем константу с присвоением действий хука theme классу 'app'/обертке всего приложения
    const ChangeThemeStyle = classnames('app', theme);
    return (
        <ContextApi>
            <div className={ChangeThemeStyle}>
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                    clickPopup={clickPopup}
                />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route
                        exact
                        path='/game'
                        element={<Card clickPopup={handleClosePopup} />}
                    />
                    <Route
                        exact
                        path='/new'
                        element={<AddWord clickPopup={handleClosePopup} />}
                    />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </ContextApi>
    );
};
//функция обработки ошибки при не совпадении адресов страниц/компонентов, выводит сообщение на экран в зависомости от работы хука useNavigate/навигация/сопоставление путей страниц/компонентов приложения
function NotFound() {
    const navigate = useNavigate();
    function callBack() {
        navigate('/');
    }
    return (
        <>
            <h2>Страница не найдена</h2>
            <button onClick={callBack}>Вернуться на главную станицу</button>
        </>
    );
}

export default App;
