import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _state: {
        profilePage: {
            posts:  [
                {id : 1, message: 'Hi, how are u?', like_count: 5},
                {id : 2, message: 'It\'s my first post', like_count: 3},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id : 1, name: 'Illya'},
                {id : 2, name: 'Babon'},
                {id : 3, name: 'Nastya'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState(){
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this)
    }
}

export default store;
window.store = store;
