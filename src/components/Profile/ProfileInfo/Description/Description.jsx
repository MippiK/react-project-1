import React from "react";

import d from './Description.module.css';

const Description = (props) => {
    return (
        <div className={d.profile_description}>
            <p>{props.description.fullName}</p>
            <p>{props.description.aboutMe}</p>
        </div>
    );
}

export default Description;