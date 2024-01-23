import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import WordStore from './store/WordStore';
import App from './App';

const store = {
    wordStore: new WordStore(),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider {...store}>
            <App />
        </Provider>
    </BrowserRouter>
);
