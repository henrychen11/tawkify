import { ADD_USER, FETCH_USERS } from '../actions/user_actions';

const userReducer = (state = [], action) => {
    let newState;
    switch(action.type){
        case ADD_USER:
            newState = state.concat(action.payload);
            return newState;
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;