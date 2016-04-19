import * as types from '../constants/actionTypes';
export function fetchPublicUserProfile (params = {}, loggedInUserId) {
    return {
        types: [types.PUBLIC_USER_FETCH, types.PUBLIC_USER_FETCH_SUCCESS, types.PUBLIC_USER_FETCH_FAIL],
        promise: ({req}) => req.get(`/users`, {params}),
        meta: {
            ...params,
            loggedInUserId
        }
    };
}

export function fetchLikedRoutes (userId) {
    return {
        types: [types.PUBLIC_LIKED_ROUTE_FETCH, types.PUBLIC_LIKED_ROUTE_SUCCESS, types.PUBLIC_LIKED_ROUTE_FAIL],
        promise: ({req}) => req.get(`/routes/users/likedRoute/${userId}`),
    };
}
