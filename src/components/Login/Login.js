import React from "react";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "../assets/Forms/LoginForm/LoginForm";
import s from './Login.module.css'


const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm isAuth={props.isAuth} loginTC={props.loginTC}/>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login);