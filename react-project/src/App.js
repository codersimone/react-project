import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Add from './components/Add';
import { ReactComponent as SwitchIcon } from './assets/icons/sun_moon_icon.svg';
import NotFound from './components/NotFound';
import DownloadingFromApi from './components/DownloadingFromApi';
import Home from './components/Home';
import Footer from './components/Footer';
import './assets/styles/styles.scss';

const App = ({ wordStore }) => {
    //хук theme с начальным состоянием класс 'light' и методом setTheme, позволяющим менять это состояние при помощи событий onClick() с функцией изменения класса на 'dark'/стили темной темы приложения
    const [theme, setTheme] = useState('light');

    // вызов хука useEffect загрузит данные с сервера один раз (второй аргумент - []) по функции loadData из wordStore
    useEffect(() => {
        wordStore.loadData();
    }, []);

    //toggleTheme (меняющая начальное состояние хука theme на противопожное/класс 'light' или 'dark' при условии точного совпадения одного из параметров условного/тернарного оператора)
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='app' theme={theme}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/game' element={<Card />} />
                <Route exact path='/new' element={<Add />} />
                <Route exact path='/' element={<SwitchIcon />} />
                <Route exact path='/' />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <DownloadingFromApi />
            <Footer />
        </div>
    );
};

export default inject(['wordStore'])(observer(App));
