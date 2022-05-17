import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/profileReducer";
import withRouter from "../assets/withRouter/withRouter";
import withRedirect from "../assets/withRedirect/withRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.setProfileTC(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setProfileTC})(withRouter(withRedirect(ProfileContainer)));