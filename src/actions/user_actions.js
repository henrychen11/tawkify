
export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});

export const fetchUsers = () => ({
    type: FETCH_USERS,
    payload: users
})