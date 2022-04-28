import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage, setLastUserId,
    setTotalUsers,
    setUsers,
    toggleFetching,
    toggleFollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../assets/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                    withCredentials: true
                })
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsers(response.data.totalCount);
                    this.props.toggleFetching(false);
                    this.setLastUser(response.data.items);
                });
        }
    }

    setLastUser = (users) => {
        if (this.props.users.length !== 0) {
            let last_user_id = users.slice(-1)
            this.props.setLastUserId(last_user_id[0].id)
        }
    }
    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false);
                this.setLastUser(response.data.items)
            });
    }
    follow = (userId) => {
        axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
                withCredentials: true,
                headers: {'API-KEY': '9dfd3506-108b-4ab7-91ff-9b822511480a'}
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleFollow(userId, true)
                }
            })
    }
    unfollow = (userId) => {
        axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                withCredentials: true,
                headers: {'API-KEY': '9dfd3506-108b-4ab7-91ff-9b822511480a'}
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.toggleFollow(userId, false)
                }
            })
    }

    render() {
        return <div className="users">
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   lastUserId={this.props.lastUserId}
                   users={this.props.users}
                   follow={this.follow}
                   unfollow={this.unfollow}
            />
            {this.props.isFetching ? <Preloader/> : null}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching,
        lastUserId: state.usersPage.lastUserId
    }
}

export default connect(mapStateToProps,
    {setUsers, setTotalUsers, setCurrentPage, setLastUserId, toggleFollow, toggleFetching})(UsersContainer);
