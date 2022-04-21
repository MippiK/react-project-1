import MyPosts from "./MyPosts";
import {addPost, updatePostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};


const MyPostsContainer = connect(mapStateToProps,
    {addPost, updatePostText})(MyPosts);

export default MyPostsContainer;