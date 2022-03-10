import React from "react";
import DialogItem from "./DialogItem";

const GetDialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/> );
    return (
        <div>
            { dialogsElements }
        </div>
    );
}

export default GetDialogs
