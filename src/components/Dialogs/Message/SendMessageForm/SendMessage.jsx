import React from "react";
import sm from './SendMessage.module.css'


const SendMessage = (props) => {
    let addMessage = () => {
        props.onAddMessage()
    }

    let updateMessageText = (e) => {
        let text = e.target.value;
        props.onUpdateMessageText(text);
    }

    return (
        <div className={sm.container}>
            <input placeholder='message' value={props.newMessageText} onChange={updateMessageText}/>
            <button onClick={addMessage}>send</button>
        </div>
    );
}

export default SendMessage;