import React from "react";
import cn from '../Navbar.module.css'
import GetFriends from "./GetFriends";

const Friends = (props) => {
    return (
            <GetFriends friends={props.friends}/>
    );
}

export default Friends