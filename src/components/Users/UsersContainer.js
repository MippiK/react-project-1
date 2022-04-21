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
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false);
                this.setLastUser(response.data.items)
            });
    }

    render() {
        return <div className="users">
            <Users totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPage={this.setCurrentPage}
                   setLastUser={this.setLastUser}
                   lastUserId={this.props.lastUserId}
                   users={this.props.users}
                   toggleFollow={this.props.toggleFollow}/>
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
