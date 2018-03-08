import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const middlewares = [];

const configureStore = (preloadedState = []) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
);

export default configureStore;