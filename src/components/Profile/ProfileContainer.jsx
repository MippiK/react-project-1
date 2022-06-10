import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeStatusTC, getStatusTC, setProfileTC, setStatus} from "../../redux/profileReducer";
import withRouter from "../assets/withRouter/withRouter";
import withRedirect from "../assets/withRedirect/withRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.userId
        }
        this.props.setProfileTC(userId)
        this.props.getStatusTC(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     setStatus={this.props.setStatus}
                     changeStatusTC={this.props.changeStatusTC}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,

})

export default compose(withRouter, withRedirect, connect(mapStateToProps, {setProfileTC, getStatusTC, setStatus, changeStatusTC}))(ProfileContainer)