import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Card from './components/Card/Card';
import AddWord from './components/AddWord/AddWord';
// import { ReactComponent as SwitchIcon } from './assets/icons/sun_moon_light_dark_icon.svg';
import { ReactComponent as SwitchIcon } from './assets/icons/edit_icon.svg';
import Footer from './components/Footer';
import './assets/styles/styles.scss';

const App = ({ wordStore }) => {
    // вызов хука useEffect загрузит данные с сервера один раз (второй аргумент - []) по функции loadData из wordStore
    useEffect(() => {
        wordStore.loadData();
    }, []);
    return (
        <>
            <div>
                {/* <SwitchIcon /> */}
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/game' element={<Card />} />
                    <Route exact path='/new' element={<AddWord />} />
                    <Route exact path='/' element={<SwitchIcon />} />
                    <Route exact path='/' />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </>
    );

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

// _______________________
// const App = ({ wordStore }) => {
// вызов хука useEffect загрузит данные с сервера один раз по функции loadData из wordStore
// useEffect(() => {
//     wordStore.loadData();
// }, []);

// const [newWord, setNewWord] = useState([]);
// const addNewWord = () => {
//     if (!newWord) return;
//     wordStore.add(newWord);
//     setNewWord([]);
// };
// const deleteWord = (index) => {
//     wordStore.remove(index);
// };
// return (
// <>
//     <Header />
//     <Home />
//     <Footer />
// </>
// <div>
//     <ol>
//         {wordStore.words.map((word, index) => (
//             <li key={index}>
//                 {word}
//                 <button onClick={() => deleteWord(index)}>
//                     delete
//                 </button>
//             </li>
//         ))}
//     </ol>
//     <input
//         type='text'
//         value={newWord}
//         onChange={(e) => setNewWord(e.target.value)}
//     />
//     <button onClick={addNewWord}>add</button>
// </div>
// );
// };

// export default inject(['wordStore'])(observer(App));
// _______________________

// const App = () => {
//     return (
//         <div className='app'>
//             <Header />
//             <Home />
//             <Footer />
/* <WordsApi /> */
//     </div>
// );
// const [tema, setTema] = useState('light');
// const [isOpen, setIsOpen] = useState(false);
// const clickPopup = () => setIsOpen(!isOpen);
// const toggleTema = () => {
//     setTema(tema === 'light' ? 'dark' : 'light');
// };

// return (
//     <div className='app' id={tema}>
//         <Header
//             tema={tema}
//             toggleTema={toggleTema}
//             clickPopup={clickPopup}
//         />
//         {/* <Home /> */}
//     </div>
// );
// const [theme, setTheme] = useState(() => {
//     const mode = JSON.parse(localStorage.getItem('mode'));
//     return mode || 'light';
// });
// const toggleTheme = () => {
//     setTheme((current) => {
//         const newTheme = current === 'light' ? 'dark' : 'light';
//         localStorage.setItem('mode', JSON.stringify(newTheme));
//         return newTheme;
//     });
// };

// console.log(theme, 'theme');

// return (
//     <div className='wrapper' id={theme}>
//         <div className='toggleContainer'>
//             <p className='changeText'>{theme} mode</p>
//             <input onChange={toggleTheme} type='checkbox' id='toggle-btn' />
//             <label htmlFor='toggle-btn' className='toggle-label'></label>
// {
/* <Switcher
                    onChange={toggleTheme}
                    id='toggle-btn'
                    type='checkbox'
                /> */
// }
// </div>

// {
/* <div className='container'>
                <div id='sun' className='shape'></div>
                <div id='moon' className='shape'></div>
            </div> */
// }
// </div>

// <>
//     <Header />
//     <Home />
//     <Footer />
// </>
// );
// };

// export default inject(['bookStore', 'filmStore', 'userStore'])(observer(App));

// import React from "react";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Table from "./components/Table/Table";
// import Card from "./components/Card/Card";
// import AddWord from "./components/AddWord/AddWord";
// import classnames from "classnames";
// import "./App.css";

// const App = () => {
//   const [tema, setTema] = useState("light");
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   function handleClosePopup() {
//     navigate("/");
//   }
//   const clickPopup = () => setIsOpen(!isOpen);
//   const toggleTema = () => {
//     setTema(tema === "light" ? "dark" : "light");
//   };
//   const ChangeThemeStyle = classnames("app", tema);
//   return (
//     <div className={ChangeThemeStyle}>
//       <Header tema={tema} toggleTema={toggleTema} clickPopup={clickPopup} />
//       <Routes>
//         <Route exact path="/" element={<Table />} />
//         <Route
//           exact
//           path="/game"
//           element={<Card clickPopup={handleClosePopup} />}
//         />
//         <Route
//           exact
//           path="/new"
//           element={<AddWord clickPopup={handleClosePopup} />}
//         />
//         <Route exact path="/" />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// function NotFound() {
//   const navigate = useNavigate();
//   function callBack() {
//     navigate("/");
//   }
//   return (
//     <>
//       <h2>Страница не найдена</h2>
//       <button onClick={callBack}>Вернуться на главную станицу</button>
//     </>
//   );
// }

// export default App;
