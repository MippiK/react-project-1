import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {logoutTC, meTC} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.meTC()
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

export default connect(mapStateToProps, {meTC, logoutTC})(HeaderContainer);