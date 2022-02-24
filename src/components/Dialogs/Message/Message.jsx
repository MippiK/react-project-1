import React from "react";
import m from './Message.module.css'


const Message = (props) => {
    return (
            <div className={m.messages}>
                <p>{props.message}</p>
            </div>
    );
}

export default Message