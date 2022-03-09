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
    let stateCopy = {...state}; // make shallow copy
    stateCopy.messages = [...state.messages]; // copy messages
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: state.newMessageText
            };
            if (state.newMessageText === '') {
                alert('form empty');
            } else {
                stateCopy.messages.push(message);
                stateCopy.newMessageText = '';
            }
            return stateCopy; // then return copied data
        case UPDATE_MESSAGE_TEXT:
            stateCopy.newMessageText = action.text;
            return stateCopy; // then return copied data
        default:
            return stateCopy; // then return copied data
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