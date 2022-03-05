import React from "react";
import gf from "./Friends.module.css";
import {NavLink} from "react-router-dom";

import storeContext from "../../../storeContext";

const Friends = (props) => {

    return (
        <storeContext.Consumer>
            { store => {
                let state = store.getState();
                let friends = state.sidebar.friends.map(el => <div className={gf.friend_item}>
                    <img
                        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jandewitenzonen.com%2Fimg%2Fproducts%2Ftulip%2FWitty_Picture.jpg&f=1&nofb=1'
                        alt='dialog_image'/>
                    <NavLink to={`/messages/` + el.id} className={gf.nav_friends_link}>{el.name}</NavLink>
                </div>);

                return <div className={gf.nav_friends}>
                    {friends}
                </div>
                }
            }
        </storeContext.Consumer>
    );
}

export default Friends