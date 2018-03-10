import UPDATE_PAGE from '../actions/status_actions';

const initialState = {
    page: 1
}

const pageReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;

    switch(action.type){
        case UPDATE_PAGE:
            newState = Object.assign({}, state, action.page);
            return newState;
        default:
            return state;
    }
}

export default pageReducer;