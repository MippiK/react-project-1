import React from "react";
import sm from './SendMessage.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../../redux/dialogsReducer";

const SendMessage = (props) => {

    /*let inputRef = React.createRef();*/
    let addMsg = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (e) => {
        /*let text = inputRef.current.value;*/
        let text = e.target.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className={sm.container}>
            <input placeholder='message' value={props.newMessageText} onChange={updateMessageText}/>
            <button onClick={ addMsg }>send</button>
        </div>
    );
}

export default SendMessage;