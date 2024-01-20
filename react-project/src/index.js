import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import WordStore from './store/WordStore';
// import { BrowserRouter } from "react-router-dom";
import App from './App';

const store = {
    wordStore: new WordStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    // <React.StrictMode>
    <Provider {...store}>
        <App />
    </Provider>
    // </React.StrictMode>
    // </BrowserRouter>
);
