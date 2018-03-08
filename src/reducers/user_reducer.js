import { ADD_USER } from '../actions/user_actions';

const userReducer = (state = [], action) => {
    let newState;
    switch(action.type){
        case ADD_USER:
            newState = state.concat(action.payload);
            return newState;;
        default:
            return state;
    }
}

export default userReducer;