import React from "react";
import PostAddForm from "./PostAddForm/PostAddForm";
import GetPosts from "./Post/GetPosts";

const MyPosts = (props) => {

    return (
        <div>
            <PostAddForm onAddPost={props.onAddPost}
                         onChangeText={props.onChangeText}
                         newPostText={props.newPostText}
            />

            <GetPosts posts={props.posts} />
        </div>
    );
}

export default MyPosts;