import React from "react";
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUsersAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsers(response.data.totalCount)
                })
        }
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        return <Users totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      setCurrentPage={this.setCurrentPage}
                      users={this.props.users}
                      toggleFollow={this.props.toggleFollow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
