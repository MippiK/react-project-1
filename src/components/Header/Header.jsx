import React from "react";
import ch from './Header.module.css'


const Header = () => {
    return (
        <header className={ch.header}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.similarpng.com%2Fvery-thumbnail%2F2020%2F11%2FBlue-correct-icon-on-transparent-background-PNG.png&f=1&nofb=1' alt='header_logo' />
        </header>
    );
}

export default Header;