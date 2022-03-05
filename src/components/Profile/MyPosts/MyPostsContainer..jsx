import React from "react";

import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import storeContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    debugger;
    return (
        <storeContext.Consumer>
            {store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onChangeText = (text) => {
                    store.dispatch(updatePostTextActionCreator(text));
                }
                return <MyPosts onAddPost={addPost}
                                onChangeText={onChangeText}
                                newPostText={state.newPostText}
                                posts={state.posts}/>
                }
            }
        </storeContext.Consumer>
    )
}

export default MyPostsContainer;