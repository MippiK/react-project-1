const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: state.newMessageText
            };
            if (state.newMessageText === '') {
                alert('form empty');
            } else {
                state.messages.push(message);
                state.newMessageText = '';
            }
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}


export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;