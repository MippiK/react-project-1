import React from "react";
import s from './Users.module.css'
import axios from "axios";
import profilePic from "../../assets/photos/default-profile-pic.jpg"

const Users = (props) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return (
        <div className={s.friends}>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.friends_element}>
                        <div className={s.left_content}>
                            <img src={u.photos.small != null ? u.photos.small : profilePic} alt="user_picture"/>
                            <button
                                onClick={() => (props.toggleFollow(u.id))}>{u.followed ? 'Unfollow' : 'Follow'}</button>
                        </div>

                        <div className={s.right_content}>
                            <div className={s.user_info}>
                                <a href={`/users/`+u.id}>{u.name}</a>
                                <p>{u.status}</p>
                            </div>

                            <div className={s.user_country}>
                                <p>none</p>
                                <p>none</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;