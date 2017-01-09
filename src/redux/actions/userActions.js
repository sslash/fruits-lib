import * as types from '../constants/actionTypes';
let request = null;
let facebookManager = null;
let userService = null;

export function init (args = {}) {
    request = args.request;
    facebookManager = args.facebookManager;
    userService = args.userService;
}

export function login (mail, password) {
    return {
        types: [types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAIL],
        promise: ({req}) => req.post('/users/login', {
            mail,
            password
        })
    };
}

export function clearUserError () {
    return {
        type: types.USER_CLEAR_ERROR
    };
}

export function storeInstaAuthToken (instaAuthToken) {
    return {
        type: types.INSTA_TOKEN_STORE,
        instaAuthToken
    }
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

export function signup (mail, password, username) {
    return {
        types: [types.SIGNUP, types.SIGNUP_SUCCESS, types.SIGNUP_FAIL],
        promise: ({req}) => req.post('/users', {
            mail,
            password,
            username
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

export function forgotPassword (mail) {

    return {
        types: [
            types.USER_FORGOT_PASSWORD,
            types.USER_FORGOT_PASSWORD_SUCCESS,
            types.USER_FORGOT_PASSWORD_FAIL
        ],
        promise: ({ req }) => req.post('/users/forgotPassword', { mail })
    };
}

export function bootstrapUser (user) {
    return {
        type: types.USER_BOOTSTRAP,
        user
    };
}
