import React from "react";
import cn from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = (props) => {

    let linkName = ['Profile', 'Messages', 'News', 'Music', 'Settings', 'Find-users']

    let links = linkName.map(el =><li><NavLink to={`/`+el.toLowerCase()} className = { navData => navData.isActive ? cn.active : cn.a } key={el.id}>{el}</NavLink></li>)

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