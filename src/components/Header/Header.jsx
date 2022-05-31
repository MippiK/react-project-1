import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.similarpng.com%2Fvery-thumbnail%2F2020%2F11%2FBlue-correct-icon-on-transparent-background-PNG.png&f=1&nofb=1' alt='header_logo' />
            {props.isUserAuth? <div className={s.user_info}>
                    <NavLink to={'/profile'} className={s.header_link}>{props.userLogin} |</NavLink>
                    <NavLink to={'/logout'} className={s.header_link}> Logout</NavLink>
                    {/*<img src={props.profile.photos.large} alt="img_in_header"/>*/}
            </div> :
                <NavLink to={'/login'} className={s.header_link}>Login</NavLink>}
        </header>
    );
}

export default Header;