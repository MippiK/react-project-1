import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUser, toggleFetching} from "../../redux/authReducer";
import axios from "axios";
import Preloader from "../assets/Preloader/Preloader";
import {setProfile} from "../../redux/profileReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data;
                    this.props.setAuthUser(id, email, login)
                    this.props.toggleFetching(false)
                }
            })
    }

    render() {
        return (
            <> {this.props.isFetching ? <Preloader /> : <Header {...this.props} />}</>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        isUserAuth: state.auth.isAuth,
        userLogin: state.auth.login,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {setAuthUser, toggleFetching, setProfile})(HeaderContainer);