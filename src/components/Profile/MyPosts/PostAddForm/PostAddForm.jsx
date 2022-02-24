import React from "react";
import paf from './PostAddForm.module.css'
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/profileReducer";

const PostAddForm = (props) => {
    /*let inputRef = React.createRef();*/
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangeText = (e) => {
        /*let text = inputRef.current.value;*/
        let text = e.target.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
            <div className={paf.profile_upload_news}>
                <input placeholder='your news' type='text' value={props.newPostText} onChange={onChangeText}/>
                <button onClick={ addPost }>Send</button>
            </div>
    );
}

export default PostAddForm;