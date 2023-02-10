const SET_USER = 'SET_USER';
const SET_AUTH = 'SET_AUTH';
const SET_EMAIL = 'SET_EMAIL';

const defaultState = {
    user: {},
    isAuthorized: false,
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_USER: {
            return {...state, user: {...state.user, ...action.payload}}
        }
        case SET_EMAIL: {
            return {...state, user: {...state.user, email: action.payload}}
        }
        case SET_AUTH: {
            return {...state, isAuthorized: action.payload}
        }
        default: 
            return state;
    }
};

export const setUserAC = (payload) => ({ type: SET_USER, payload });
export const setEmailAC = (payload) => ({ type: SET_EMAIL, payload });
export const setAuthAC = (payload) => ({ type: SET_AUTH, payload });