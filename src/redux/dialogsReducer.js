const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {id : 1, name: 'Illya'},
        {id : 2, name: 'Babon'},
        {id : 3, name: 'Nastya'},
        {id : 4, name: 'John'}
    ],
    messages: [
    {id : 1, message: 'Hello'},
    {id : 2, message: 'Hi'},
    {id : 3, message: 'Kak dela'},
    {id : 4, message: 'Wake up'}
],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    // to work with data, first u need to copy it
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id:5, message: messageText}],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state;
    }
}

export const addMessage = () => ({
    type: ADD_MESSAGE
});
export const updateMessageText = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
});

export default dialogsReducer;