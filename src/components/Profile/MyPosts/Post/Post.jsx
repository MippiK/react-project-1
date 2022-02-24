import React from "react";
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.news}>
            <img className={p.news_user_pic} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcache.lovethispic.com%2Fuploaded_images%2F350925-Art-Parrot-Image.jpg&f=1&nofb=1' alt='news_avtar'/>
            <p>{props.message}</p>
            <span>like {props.like_count}</span>
        </div>
    );
}

export default Post