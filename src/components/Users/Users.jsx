import React from "react";
import s from './Users.module.css'
import profilePic from "../../assets/photos/default-profile-pic.jpg"
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pages_count = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1, Math.min(props.currentPage + 5, pages_count)); i++) {
        pages.push(i);
    }
    return (
        <div className={s.friends}>
            <div className="pagination">
                {pages.map(page => {
                    return <span className={props.currentPage === page ? s.currentPage : s.page} onClick={() => {
                        props.setCurrentPage(page)
                    }}>{page}</span>
                })}
            </div>

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
                                <NavLink to={`/users/` + u.name.toLowerCase()}>{u.name}</NavLink>
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

export default Users;