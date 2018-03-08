import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import ReduxPromise from 'redux-promise';

let createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('app') );