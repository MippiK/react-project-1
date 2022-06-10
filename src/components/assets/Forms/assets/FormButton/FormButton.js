import React from 'react';
import s from './Button.module.css'

const FormButton = (props) => {
    return (
        <button {...props} className={s.button}>{props.children}</button>
    );
};

export default FormButton;
