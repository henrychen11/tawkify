import { combineReducers } from 'redux';
import pageReducer from './page_reducer';

const rootReducer = combineReducers({
    page: pageReducer
})

export default rootReducer;