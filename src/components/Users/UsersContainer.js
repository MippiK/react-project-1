import React from "react";
import {connect} from "react-redux";
import {followTC, setCurrentPageTC, setLastUserId, setUsersTC, unFollowTC} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../assets/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setUsersTC(this.props.currentPage, this.props.pageSize, this.setLastUser)
        }
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPageTC(page, this.props.pageSize, this.setLastUser);
    }
    follow = (userId) => {
        this.props.followTC(userId);
    }
    unfollow = (userId) => {
        this.props.unFollowTC(userId);
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
                   isFollowPending={this.props.isFollowPending} />
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
        lastUserId: state.usersPage.lastUserId,
        isFollowPending: state.usersPage.isFollowPending
    }
}

export default connect(mapStateToProps,
    {
        setLastUserId, setUsersTC, setCurrentPageTC,
        followTC, unFollowTC})(UsersContainer);
