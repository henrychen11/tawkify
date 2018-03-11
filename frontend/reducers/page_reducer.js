import { UDPATE_PAGE } from '../actions/page_actions';

const initialState = {
    page: 1
}

const pageReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case UDPATE_PAGE:
            newState = Object.assign({}, state, { page: action.page } );
            return newState;
        default:
            return state;
    }
}

export default pageReducer;