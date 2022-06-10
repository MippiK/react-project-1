import React from "react";
import DialogsForm from "../../../assets/Forms/DialogsForm/DialogsForm";


const SendMessage = (props) => {

    return (
        <DialogsForm addMessage={props.addMessage}/>
    );
}

export default SendMessage;