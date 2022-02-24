import React from "react";
import a from './Avatar.module.css'

const Avatar = () => {
    return (
        <img className={a.profile_avatar} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.lovethispic.com%2Fuploaded_images%2F350925-Art-Parrot-Image.jpg&f=1&nofb=1' alt='profile_avatar'/>
    );
}

export default Avatar;