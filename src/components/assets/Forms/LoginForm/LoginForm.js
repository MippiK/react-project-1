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
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    if (!props.isAuth) {
                        props.loginTC(values.email, values.password, values.rememberMe)
                        resetForm({values: ''})
                    }
                }}>
                <Form className={s.login__form}>
                    <FormInput htmlFor='email' name='email' type='text' placeholder='email'>Email</FormInput>
                    <FormInput htmlFor='password' name='password' type='password' placeholder='password'>Password</FormInput>
                    <FormInput htmlFor='rememberMe' name='rememberMe' type='checkbox'>Remember Me</FormInput>
                    <FormButton>Login</FormButton>
                </Form>
            </Formik>
    );
};

export default LoginForm;