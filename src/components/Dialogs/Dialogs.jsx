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
                         onAddMessage={props.onAddMessage}
                         onUpdateMessageText={props.onUpdateMessageText} />
        </div>
    );
}

export default Dialogs