import React from "react";
import s from './Users.module.css'
import profilePic from "../../assets/photos/default-profile-pic.jpg"
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pages_count = Math.ceil(props.totalUsers / props.pageSize);
    let users = props.users.map(u => {
        return (
            <div key={u.id} className={s.friends_element} onPointerEnter={u.id === props.lastUserId ? () => {
                if (props.currentPage <= pages_count) {
                    props.setCurrentPage(props.currentPage + 1)
                }
            } : null}>
                <div className={s.left_content}>
                    <img src={u.photos.small != null ? u.photos.small : profilePic} alt="user_picture"/>
                    {u.followed ? <button disabled={props.isFollowPending.some(userId => userId === u.id)}
                            onClick={() => (props.unfollow(u.id, false))}>Unfollow</button> :
                        <button disabled={props.isFollowPending.some(userId => userId === u.id)}
                            onClick={() => (props.follow(u.id, true))}>Follow</button>}
                </div>

                <div className={s.right_content}>
                    <div className={s.user_info}>
                        <NavLink to={`/profile/` + u.id}>{u.name}</NavLink>
                        <p>{u.status}</p>
                    </div>

                    <div className={s.user_country}>
                        <p>Ukraine</p>
                        <p>Kyiv</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={s.friends}>
            {users}
        </div>
    )
}

export default Users;