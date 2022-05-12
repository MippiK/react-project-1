import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    setLastUserId,
    setTotalUsers,
    setUsers,
    toggleFetching,
    toggleFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../assets/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setTotalUsers(data.totalCount);
                    this.props.toggleFetching(false);
                    this.setLastUser(data.items);
                });
        }
    }
    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.setLastUser(data.items)
                this.props.toggleFetching(false);
            });
    }
    follow = (userId) => {
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleFollow(userId, true)
                }
            })
    }
    unfollow = (userId) => {
        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleFollow(userId, false)
                }
            })
    }

    setLastUser = (users) => {
        if (this.props.users.length !== 0) {
            let last_user_id = users.slice(-1)
            this.props.setLastUserId(last_user_id[0].id)
        }
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
