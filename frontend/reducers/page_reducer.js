import { UDPATE_PAGE } from '../actions/page_actions';

const initialState = {
    page: 1
}

const pageReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    console.log('inside reducer',action, action.page)
    switch(action.type){
        case UDPATE_PAGE:
            console.log('herehererere')
            newState = Object.assign({}, state, { page: action.page } );
            return newState;
        default:
            return state;
    }
}

export default pageReducer;