import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Add from './components/Add';
import { ReactComponent as SwitchIcon } from './assets/icons/sun_moon_icon.svg';
import Home from './components/Home';
import Footer from './components/Footer';
import './assets/styles/styles.scss';

const App = ({ wordStore }) => {
    // вызов хука useEffect загрузит данные с сервера один раз (второй аргумент - []) по функции loadData из wordStore
    useEffect(() => {
        wordStore.loadData();
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/game' element={<Card />} />
                <Route exact path='/new' element={<Add />} />
                <Route exact path='/' element={<SwitchIcon />} />
                <Route exact path='/' />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );

    // TODO: h2 переделать на вывод картинки 404 Error
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
};

export default inject(['wordStore'])(observer(App));
