import React from "react";
import paf from './PostAddForm.module.css'

const PostAddForm = (props) => {
    /*let inputRef = React.createRef();*/

    let onChangeText = (e) => {
        /*let text = inputRef.current.value;*/
        let text = e.target.value;
        props.updatePostText(text)
    }

    return (
            <div className={paf.profile_upload_news}>
                <input placeholder='your news' type='text' value={props.newPostText} onChange={onChangeText}/>
                <button onClick={props.addPost}>Send</button>
            </div>
    );
}

export default PostAddForm;