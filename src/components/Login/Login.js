import React from "react";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "../assets/Forms/LoginForm/LoginForm";


const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <>
            <h1>Login</h1>
            <LoginForm isAuth={props.isAuth} loginTC={props.loginTC}/>
        </>

    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login);