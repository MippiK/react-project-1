import React from "react";

import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangeText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return <MyPosts onAddPost={addPost} onChangeText={onChangeText} newPostText={state.newPostText} posts={state.posts}/>
}

export default MyPostsContainer;