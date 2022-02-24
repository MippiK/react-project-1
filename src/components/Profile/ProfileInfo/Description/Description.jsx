import React from "react";

import d from './Description.module.css';

const Description = (props) => {
    return (
        <div className={d.profile_description}>
            <p>{props.first_name} {props.last_name}</p>
            <p>Date of Birth: {props.date_of_birth}</p>
            <p>City: {props.city}</p>
            <p>Education: {props.education}</p>
        </div>
    );
}

export default Description;