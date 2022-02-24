import React from "react";

import ph from './ProfileHeader.module.css'

const ProfileHeader = () => {
    return (
        <div>
            <img className={ph.profile_header} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6417762.jpg&f=1&nofb=1' alt='profile_header'/>
        </div>
    );
}

export default ProfileHeader;