import {authAPI} from "../api/api";


const SET_AUTH_USER = 'SET_AUTH_USER';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initial_state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state=initial_state, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default: {
            return state
        }
    }
}

export const setAuthUser = (userId, email, login, isAuth) => ({type: SET_AUTH_USER, data: {userId, email, login}, isAuth})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const meTC = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    dispatch(setAuthUser(id, email, login, true));
                    dispatch(toggleFetching(false));
                }
            })
    }
}
export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.login(email, password, rememberMe)
            .then(data => {
                if (data.resultCode !== 0) {
                    alert('Something went wrong...')
                }
                dispatch(meTC())
            })
    }
}
export const logoutTC = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.logout()
            .then(data => {
                if (data.resultCode !== 0) {
                    alert('Something went wrong...')
                }
                dispatch(setAuthUser(null, null, null, false));
            })
    }
}


export default authReducer;