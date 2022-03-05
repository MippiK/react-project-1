import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import storeContext from "../../storeContext";


const DialogsContainer = () => {

    return (
        <storeContext.Consumer>
            {store => {

                let state = store.getState().dialogsPage;

                let onAddMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onUpdateMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }

                return <Dialogs dialogs={state.dialogs}
                                messages={state.messages}
                                newMessageText={state.newMessageText}
                                onAddMessage={onAddMessage}
                                onUpdateMessageText={onUpdateMessageText}/> }
            }
        </storeContext.Consumer>)
}

export default DialogsContainer;