import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    toggleFetchingAC,
    toggleFollowAC
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
                });
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
            });
    }

    render() {
        return <div className="users">
            {this.props.isFetching ? <Preloader/> :
                <Users totalUsers={this.props.totalUsers}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.setCurrentPage}
                       users={this.props.users}
                       toggleFollow={this.props.toggleFollow}/>}
        </div>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setTotalUsersAC(totalUsers))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        toggleFetching: (ifFetching) => {
            dispatch(toggleFetchingAC(ifFetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
