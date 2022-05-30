import React from "react";
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remebmerMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        authAPI.login(formData.email, formData.password)
            .then(data => {
                if (data.resultCode !== 0) {
                    console.warn('Something went wrong...')
                }
            })
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>

    )
}

export default Login;