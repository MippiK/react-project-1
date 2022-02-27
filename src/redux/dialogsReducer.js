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