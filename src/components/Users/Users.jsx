import React from "react";
import s from './Users.module.css'
import axios from "axios";
import profilePic from "../../assets/photos/default-profile-pic.jpg"
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return (
            <div className={s.friends}>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id} className={s.friends_element}>
                            <div className={s.left_content}>
                                <img src={u.photos.small != null ? u.photos.small : profilePic} alt="user_picture"/>
                                <button
                                    onClick={() => (this.props.toggleFollow(u.id))}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>

                            <div className={s.right_content}>
                                <div className={s.user_info}>
                                    <NavLink to={`/users/`+u.name.toLowerCase()}>{u.name}</NavLink>
                                    <p>{u.status}</p>
                                </div>

                                <div className={s.user_country}>
                                    <p>Ukraine</p>
                                    <p>Kyiv</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;