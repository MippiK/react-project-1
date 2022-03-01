import React from "react";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer from "./MyPosts/MyPostsContainer.";


const Profile = (props) => {
    return (
        <div>

            <ProfileHeader />

            <ProfileInfo />

            <MyPostsContainer store={props.store}
            />

        </div>
    );
}

export default Profile;