import React from 'react';
import {ErrorMessage, Field, useField} from "formik";
import s from './FormInput.module.css'

const FormInput = (props) => {
    const [field, meta] = useField(props);
    return (
        <div className={s.form__input}>
            <label htmlFor={props.htmlFor}>{props.children}</label>
            <Field name={props.name} type={props.type} placeholder={props.placeholder} className={meta.touched && meta.error? s.error : null}/>
            <div>
                <ErrorMessage name={props.name} />
            </div>
        </div>
    );
};

export default FormInput;
