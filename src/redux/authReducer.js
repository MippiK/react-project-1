import {authAPI} from "../api/api";


const SET_AUTH_USER = 'SET_AUTH_USER';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_LOGIN_USER = 'SET_LOGIN_USER'

let initial_state = {
    userId: null,
    email: null,
    login: null,
    password: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state=initial_state, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_LOGIN_USER:
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default: {
            return state
        }
    }
}

export const setAuthUser = (userId, email, login) => ({type: SET_AUTH_USER, data: {userId, email, login}})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setLoginUser = (email, password) => ({type: TOGGLE_FETCHING, email, password})
export const meTC = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    dispatch(setAuthUser(id, email, login));
                    dispatch(toggleFetching(false));
                }
            })
    }
}
export const loginTC = (email, password) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.login(email, password)
            .then(data => {
                if (data.resultCode !== 0) {
                    alert('Something went wrong...')
                }
                dispatch(setLoginUser(email, password));
                dispatch(meTC())
            })
    }
}


export default authReducer;