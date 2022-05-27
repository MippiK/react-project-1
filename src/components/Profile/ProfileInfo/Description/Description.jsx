import React from "react";
import ProfileStatus from './ProfileStatus'
import d from './Description.module.css';

const Description = (props) => {
    return (
        <div className={d.profile_description}>
            <p>{props.description.fullName}</p>
            <ProfileStatus status={props.status} setStatus={props.setStatus} changeStatusTC={props.changeStatusTC}/>
        </div>
    );
}

export default Description;