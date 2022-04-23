import React from "react";
import a from './Avatar.module.css'
import profile_photo from '../../../../assets/photos/default-profile-pic.jpg'

const Avatar = (props) => {
    return (
        <img className={a.profile_avatar} src={props.photo != null? props.photo : profile_photo} alt='profile_photo'/>
    );
}

export default Avatar;