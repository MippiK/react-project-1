import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUser, toggleFetching} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true)
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data;
                    this.props.setAuthUser(id, email, login)
                    this.props.toggleFetching(false)
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />

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

export default connect(mapStateToProps, {setAuthUser, toggleFetching})(HeaderContainer);