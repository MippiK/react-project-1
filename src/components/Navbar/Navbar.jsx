import React from "react";
import cn from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = (props) => {

    let linkName = ['Profile', 'Messages', 'News', 'Music', 'Settings', 'Friends']

    let links = linkName.map(el =><li><NavLink to={`/`+el} className = { navData => navData.isActive ? cn.active : cn.a }>{el}</NavLink></li>)

    return (
        <nav className={cn.nav}>
            <ul className={cn.nav_ul}>
                {links}
            </ul>
            <FriendsContainer />
        </nav>
    );
}

export default Navbar;