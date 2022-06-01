import React from "react";
import sm from './SendMessage.module.css'
import DialogsForm from "../../../assets/Forms/DialogsForm";


const SendMessage = (props) => {

    return (
        <div className={sm.container}>
            <DialogsForm addMessage={props.addMessage}/>
        </div>
    );
}

export default SendMessage;