import React from "react";
import Message from "./Message";
import m from './Message.module.css'
import SendMessage from "./SendMessageForm/SendMessage";


const GetMessages = (props) => {

    let messagesElements = props.messages.map( m => <Message  message={m.message} key={m.id}/> );
    return (
        <div className={m.message_wrapper}>
            <div>
                { messagesElements }
            </div>
            <SendMessage newMessageText={props.newMessageText}
                         addMessage={props.addMessage}
                         updateMessageText={props.updateMessageText} />
        </div>

    );
}

export default GetMessages;