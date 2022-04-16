const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsers: 0,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            };
        case SET_USERS:
            return  {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const toggleFollowAC = (userId) => ({
    type: TOGGLE_FOLLOW,
    userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPageAC = (page) => ({
    type: SET_CURRENT_PAGE,
    page
});
export const setTotalUsersAC = (totalUsers) => ({
    type: SET_TOTAL_USERS,
    totalUsers
});
export const toggleFetchingAC = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
});


export default usersReducer;