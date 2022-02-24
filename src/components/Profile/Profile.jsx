import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileHeader from "./ProfileHeader/ProfileHeader";


const Profile = (props) => {
    return (
        <div>

            <ProfileHeader />

            <ProfileInfo />

            <MyPosts posts={props.data.posts}
                     newPostText={props.data.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    );
}

export default Profile;