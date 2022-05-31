import React from "react";
import {loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = (props) => {
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .max(40, 'Must be 40 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    if (!props.isAuth) {
                        props.loginTC(values.email, values.password)
                        resetForm({values: ''})
                    }
                }}>
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>

    );
};


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {loginTC})(LoginForm);