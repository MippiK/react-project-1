const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    // to work with data, first u need to copy it
    switch (action.type) {
        case ADD_MESSAGE:
            let messageText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id:5, message: messageText}],
            }
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => ({
    type: ADD_MESSAGE,
    newMessageText
});


export default dialogsReducer;