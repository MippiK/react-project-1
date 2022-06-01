import React from "react";
import {loginTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "../assets/Forms/LoginForm";


const Login = (props) => {
    return (
        <>
            <h1>Login</h1>
            <LoginForm isAuth={props.isAuth}/>
        </>

    );
};


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {loginTC})(Login);