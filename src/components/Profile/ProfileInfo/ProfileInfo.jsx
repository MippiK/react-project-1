import React from "react";

import pi from './ProfileInfo.module.css';

import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const ProfileInfo = () => {
    return (
        <div className={pi.profile_info}>
            <Avatar />
            <Description first_name='Illya' last_name='Romaniv' date_of_birth='28.07.2004' city='Kalush' education='KEP'/>
        </div>
    );
}

export default ProfileInfo;