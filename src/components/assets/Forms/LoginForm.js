import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginValidatorSchema} from "../FormValidators/formValidators";
import React from "react";

const LoginForm = (props) => {
    return (
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={loginValidatorSchema}
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
    );
};

export default LoginForm;