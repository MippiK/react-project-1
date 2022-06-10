import React from "react";
import PostForm from "../../../assets/Forms/PostsForm/PostsForm";

const PostAddForm = (props) => {
    return (
        <PostForm addPost={props.addPost}/>
    );
}

export default PostAddForm;