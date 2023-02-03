const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_AUTH = 'SET_AUTH';

const defaultState = {
    userData: {},
    isAuthorized: false,
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case SET_EMAIL: {
            return {...state, userData: { ...state.userData, email: action.payload }}
        }
        case SET_PASSWORD: {
            return {...state, userData: { ...state.userData, password: action.payload }}
        }
        case SET_AUTH: {
            return {...state, isAuthorized: action.payload}
        }
        default: 
            return state;
    }
};

export const setEmailAC = (payload) => ({ type: SET_EMAIL, payload });
export const setPasswordAC = (payload) => ({ type: SET_PASSWORD, payload });
export const setAuthAC = (payload) => ({ type: SET_AUTH, payload });