import React from "react";
import paf from './PostAddForm.module.css'
import PostForm from "../../../assets/Forms/PostsForm";

const PostAddForm = (props) => {
    return (
            <div className={paf.profile_upload_news}>
                <PostForm addPost={props.addPost}/>
            </div>
    );
}

export default PostAddForm;