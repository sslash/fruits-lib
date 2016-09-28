import * as types from '../constants/actionTypes';

export function fetchUserRoutes (userId, params) {
    if (!userId) { throw new Error('User id must be included'); }

    return {
        types: [types.FETCH_USER_ROUTES, types.FETCH_USER_ROUTES_SUCCESS, types.FETCH_USER_ROUTES_FAIL],
        promise: ({ req }) => req.get(`/routes/users/${userId}`, { params })
    };
}

export function updateUserRoutes (routeId, data) {
    return {
        types: [
            types.UPDATE_USER_ROUTE,
            types.UPDATE_USER_ROUTE_SUCCESS,
            types.UPDATE_USER_ROUTE_FAIL
        ],
        promise: ({ req }) => req.put(`/routes/${routeId}`, data),
        meta: data
    };
}

export function fetchLikedRoutes (userId) {
    return {
        types: [types.PUBLIC_LIKED_ROUTE_FETCH, types.PUBLIC_LIKED_ROUTE_SUCCESS, types.PUBLIC_LIKED_ROUTE_FAIL],
        promise: ({ req }) => req.get(`/routes/users/likedRoute/${userId}`),
    };
}
