import {Form, Formik} from "formik";
import {loginValidatorSchema} from "../../FormValidators/formValidators";
import React from "react";
import FormInput from "../assets/FormInput/FormInput";
import FormButton from "../assets/FormButton/FormButton";
import s from './LoginForm.module.css'

const LoginForm = (props) => {

    return (
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false}}
                validationSchema={loginValidatorSchema}
                onSubmit={(values, { resetForm, setStatus}) => {
                    console.log(values)
                    if (!props.isAuth) {
                        props.loginTC(values.email, values.password, values.rememberMe, setStatus)
                        resetForm({values: ''})
                    }
                }}>
                {({isSubmitting, status}) => (
                    <Form className={s.login__form}>
                        <p>{status}</p>
                        <FormInput htmlFor='email' name='email' type='text' placeholder='email'>Email</FormInput>
                        <FormInput htmlFor='password' name='password' type='password' placeholder='password'>Password</FormInput>
                        <FormInput htmlFor='rememberMe' name='rememberMe' type='checkbox'>Remember Me</FormInput>
                        <FormButton disabled={isSubmitting}>Login</FormButton>
                    </Form>
                )}
            </Formik>
    );
};

export default LoginForm;