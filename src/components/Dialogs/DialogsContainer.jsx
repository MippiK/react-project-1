import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onUpdateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return <Dialogs dialogs={state.dialogs}
                    messages={state.messages}
                    newMessageText={state.newMessageText}
                    onAddMessage={onAddMessage}
                    onUpdateMessageText={onUpdateMessageText} />
}

export default DialogsContainer;