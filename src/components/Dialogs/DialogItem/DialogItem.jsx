import React from "react";

import di from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {


    let path ='/messages/' + props.id;

    return (
        <div className={di.dialogs}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jandewitenzonen.com%2Fimg%2Fproducts%2Ftulip%2FWitty_Picture.jpg&f=1&nofb=1' alt='dialog_image'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;