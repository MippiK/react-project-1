import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9dfd3506-108b-4ab7-91ff-9b822511480a'}
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me: () => {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login: (email, password) => {
        return instance.post('auth/login', {email, password})
            .then(response => response.data)
    },
    logout: () => {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}

export const profileAPI = {
    profile: (userId) => {
        return instance.get(`profile/${userId? userId : 23090}`)
            .then(response => response.data)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId? userId : 23090}`)
            .then(response => response.data)
    },
    changeStatus: (status) => {
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    }
}