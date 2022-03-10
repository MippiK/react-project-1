const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u?', like_count: 5},
        {id: 2, message: 'It\'s my first post', like_count: 3},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    // to work with data, first u need to copy it
    switch (action.type) {
        case ADD_POST:
            let messageText = state.newPostText;
            return  {
                ...state,
                posts: [...state.posts,  {id: 2, message: messageText, like_count: 3}],
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return  {
                ...state,
                newPostText: action.text
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    text: text
});

export default profileReducer;