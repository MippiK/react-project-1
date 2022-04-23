import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import axios from "axios";
import withRouter from "../assets/withRouter/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId? userId : 23090}`)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));