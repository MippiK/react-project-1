import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer from "./MyPosts/MyPostsContainer.";
import Preloader from "../assets/Preloader/Preloader";


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <ProfileHeader />

            <ProfileInfo profile={props.profile}
                         status={props.status}
                         setStatus={props.setStatus}
                         changeStatusTC={props.changeStatusTC}/>

            <MyPostsContainer />

        </div>
    );
}

export default Profile;