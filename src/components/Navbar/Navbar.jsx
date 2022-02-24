import React from "react";
import cn from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {

    let linkName = ['Profile', 'Messages', 'News', 'Music', 'Settings', 'Friends']

    let links = linkName.map(el =><li><NavLink to={`/`+el} className = { navData => navData.isActive ? cn.active : cn.a }>{el}</NavLink></li>)

    return (
        <nav className={cn.nav}>
            <ul className={cn.nav_ul}>
                {links}
            </ul>
            <Friends friends={props.data.friends}/>
        </nav>
    );
}

export default Navbar;