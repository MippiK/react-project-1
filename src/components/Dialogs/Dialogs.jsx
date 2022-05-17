import React from "react";
import d from './Dialogs.module.css';

import GetDialogs from "./DialogItem/GetDialogs";
import GetMessages from "./Message/GetMessages";

const Dialogs = (props) => {

    return (
        <div className={d.dialogs_wrapper}>
            <GetDialogs dialogs={props.dialogs}/>

            <GetMessages messages={props.messages}
                         newMessageText={props.newMessageText}
                         addMessage={props.addMessage}
                         updateMessageText={props.updateMessageText} />
        </div>
    );
}

export default Dialogs