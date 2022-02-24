import React from "react";
import d from './Dialogs.module.css';

import GetDialogs from "./DialogItem/GetDialogs";
import GetMessages from "./Message/GetMessages";


const Dialogs = (props) => {
    debugger;
    return (
        <div className={d.dialogs_wrapper}>
            <GetDialogs dialogs={props.data.dialogs}/>

            <GetMessages messages={props.data.messages}
                         dispatch={props.dispatch}
                         newMessageText={props.data.newMessageText}
            />
        </div>
    );
}

export default Dialogs