import * as types from '../constants/actionTypes';
let request = null;
let facebookManager = null;
let userService = null;

export function init (args = {}) {
    request = args.request;
    facebookManager = args.facebookManager;
    userService = args.userService;
};

export function login (mail, password) {
    return {
        types: [types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAIL],
        promise: ({req}) => req.post('/users/login', {
            mail,
            password
        })
    };
}

export function storeLoginToken (token, user) {

    // set token so we can use it on every request
    request.setAuthorizationToken(token);

    return {
        type: types.USER_TOKEN_STORE_AND_REDIRECT
    };
}

export function facebookLogin (data) {

    return {
        types: [types.FACEBOOK_LOGIN, types.FACEBOOK_LOGIN_SUCCESS, types.FACEBOOK_LOGIN_FAIL],
        promise: ({req}) => req.post('/users/createFromFacebook', data)
    };
}

export function signup (mail, password) {
    return {
        types: [types.SIGNUP, types.SIGNUP_SUCCESS, types.SIGNUP_FAIL],
        promise: ({req}) => req.post('/users', {
            mail,
            password
        })
    };
}

export function logout (userId) {

    request.removeAuthorizationToken();
    facebookManager.logout();

    // TODO: call server and delete token
    return {
        type: types.LOGOUT
    };
}

export function fetchUserProfile (userId) {
    return {
        types: [types.FETCH_USER_PROFILE, types.FETCH_USER_PROFILE_SUCCESS, types.FETCH_USER_PROFILE_FAIL],
        promise: ({req}) => req.get(`/users/${userId}`)
    };
}

export function fetchUserRoutes (userId) {
    if (!userId) { throw new Error('User id must be included'); }

    return {
        types: [types.FETCH_USER_ROUTES, types.FETCH_USER_ROUTES_SUCCESS, types.FETCH_USER_ROUTES_FAIL],
        promise: ({req}) => req.get(`/routes/users/${userId}`)
    };
}

export function addNewRouteToUser (route) {

    return {
        type: types.USER_ROUTE_ADD,
        meta: {route}
    };
}

export function updateProfile(userId, data) {
    return {
        types: [
            types.USER_UPDATE_PROFILE,
            types.USER_UPDATE_PROFILE_SUCCESS,
            types.USER_UPDATE_PROFILE_FAIL
        ],
        promise: ({req}) => req.put(`/users/${userId}`, {data})
    };
}

export function uploadProfilePicture (fileOrPath) {

    return {
        types: [
            types.USER_UPLOAD_PROFILE_PICTURE,
            types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS,
            types.USER_UPLOAD_PROFILE_PICTURE_FAIL
        ],
        promise: ({req}) => userService.uploadProfilePicture(fileOrPath, req)
    };
}

export function bootstrapUser (user) {
    return {
        type: types.USER_BOOTSTRAP,
        user
    };
}

export function deleteRoute (routeId) {
    return {
        types: [
            types.USER_DELETE_ROUTE,
            types.USER_DELETE_ROUTE_SUCCESS,
            types.USER_DELETE_ROUTE_FAIL
        ],
        promise: ({req}) => req.delete(`/routes/${routeId}`),
        meta: { routeId }
    }
}

export function setRouteToPrivate (routeId) {
    return {
        types: [
            types.USER_ROUTE_MAKE_PRIVATE,
            types.USER_ROUTE_MAKE_PRIVATE_SUCCESS,
            types.USER_ROUTE_MAKE_PRIVATE_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/make-private`),
        meta: { routeId }
    }
}

export function setRouteToPublic (routeId) {
    return {
        types: [
            types.USER_ROUTE_MAKE_PUBLIC,
            types.USER_ROUTE_MAKE_PUBLIC_SUCCESS,
            types.USER_ROUTE_MAKE_PUBLIC_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/make-public`),
        meta: { routeId }
    }
}
