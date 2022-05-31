import React from "react";
import PostAddForm from "./PostAddForm/PostAddForm";
import GetPosts from "./Post/GetPosts";

const MyPosts = (props) => {

    return (
        <div>
            <PostAddForm addPost={props.addPost}
            />

            <GetPosts posts={props.posts} />
        </div>
    );
}

export default MyPosts;