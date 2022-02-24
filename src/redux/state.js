const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


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
        /*this.addPost = this.addPost.bind(this);
        this.updatePostText = this.updatePostText.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.updateMessageText = this.updateMessageText.bind(this);*/
        return this._state;

    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = {
                id: 5,
                message: this.getState().profilePage.newPostText,
                like_count: 0
            };
            if (this._state.profilePage.newPostText === '') {
                alert('form empty');
            }
            else {
                this._state.profilePage.posts.push(post);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this);
            }
        }
        else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this);
        }
        else if (action.type === ADD_MESSAGE) {
            let message = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            if (this._state.dialogsPage.newMessageText === '') {
                alert('form empty');
            }
            else {
                this._state.dialogsPage.messages.push(message);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this);
            }
        }
        else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text;
            this._callSubscriber(this);
        }

    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    text: text
});
export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    text: text
});

export default store;
window.store = store;
