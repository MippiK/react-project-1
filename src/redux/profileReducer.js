import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u?', like_count: 5},
        {id: 2, message: 'It\'s my first post', like_count: 3},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    // to work with data, first u need to copy it
    switch (action.type) {
        case ADD_POST:
            let messageText = action.postText;
            return  {
                ...state,
                posts: [...state.posts,  {id: 2, message: messageText, like_count: 0}],
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return  {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})


export const changeStatusTC = (text) => {
    return (dispatch) => {
        profileAPI.changeStatus(text).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(text))}
            }

        )
    }
}

export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            data => dispatch(setStatus(data))
        )
    }
}

export const addPost = (postText) => ({
    type: ADD_POST,
    postText
});


export const setProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.profile(userId)
            .then(data => {
                dispatch(setProfile(data));
            });
    }
}


export default profileReducer;