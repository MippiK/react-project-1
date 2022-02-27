const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts:  [
        {id : 1, message: 'Hi, how are u?', like_count: 5},
        {id : 2, message: 'It\'s my first post', like_count: 3},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                message: state.newPostText,
                like_count: 0
            };
            if (state.newPostText === '') {
                alert('form empty');
            } else {
                state.posts.push(post);
                state.newPostText = '';
            }
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            return state;
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