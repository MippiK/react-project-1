import React from "react";
import Post from "./Post";

const GetPosts = (props) => {

    let postsElement = props.posts.map( post => <Post message={post.message} like_count={post.like_count} /> );

    return (
      <div>
          {postsElement}
      </div>
    );
}

export default GetPosts;