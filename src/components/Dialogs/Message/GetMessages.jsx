import React from "react";
import Message from "./Message";
import m from './Message.module.css'
import SendMessage from "./SendMessageForm/SendMessage";


const GetMessages = (props) => {

    let messagesElements = props.messages.map( m => <Message  message={m.message} /> );
    return (
        <div className={m.message_wrapper}>
            <div>
                { messagesElements }
            </div>
            <SendMessage dispatch={props.dispatch}
                         newMessageText={props.newMessageText}
            />
        </div>

    );
}

export default GetMessages;