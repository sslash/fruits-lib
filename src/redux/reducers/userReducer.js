import * as types from '../constants/actionTypes';
import Route from '../../models/Route';
import _isArray from 'lodash/lang/isArray';
import {Record, Map, List, Iterable, fromJS} from 'immutable';
// import { LOAD } from 'redux-storage';


// super simple handler to flatten the array
// we get from bad requests (400) from the API
const formatError = (error) => {
    if (_isArray(error)) {
        return error[0];
    } else {
        return error;
    }
};

const initialState = fromJS({
    loggingIn: false,
    shouldRedirect: false,
    user: null,
    token: null,
    authError: null,
    signupError: null,
    isSaving: false,
    updateError: null,
    // user profile
    fethingUserProfile: false,
    fetchUserProfileError: null,

    // Legacy!!
    // could have had a list here, one for each profile.
    // but probabz not necessary.
    userProfile: null,

    // instagram stuff
    instaAuthToken: null
});

export default function reducer (state = initialState, action = {}) {

    if (!Iterable.isIterable(state)) {
        state = initialState.set('user', fromJS(state.user));
    }

    switch (action.type) {
        case types.LOGIN:
        case types.FACEBOOK_LOGIN:
        return state.merge({
            loggingIn: true
        });

        case types.LOGIN_SUCCESS:
        case types.FACEBOOK_LOGIN_SUCCESS:
            return state.merge({
                loggingIn: false,
                shouldRedirect: true,
                user: action.payload.user,
                token: action.payload.token,
                authError: null
            });

        case types.LOGIN_FAIL:
        case types.FACEBOOK_LOGIN_FAIL:
        return state.merge({
            loggingIn: false,
            user: null,
            token: null,
            authError: formatError(action.error)
        });

        case types.SIGNUP:
        return state.merge(state, {
            loggingIn: true
        });

        case types.SIGNUP_SUCCESS:
        return state.merge({
            loggingIn: false,
            shouldRedirect: true,
            user: action.payload.user,
            token: action.payload.token,
            signupError: null
        });

        case types.SIGNUP_FAIL:
        return state
            .set('signupError', formatError(action.error))
            .set('loggingIn', false);

        case types.LOGOUT:
        return initialState;

        // load from offline storage
        case types.LOAD:
            let {user} = action.payload;
            // if (user && user.routes) {
            //     user.routes = user.routes.map(Route.mapper);
            // }
            return state.merge(user);

        case types.USER_TOKEN_STORE_AND_REDIRECT:
        return state.set('shouldRedirect', false);

        case types.FETCH_USER_PROFILE:
        return state.set('fethingUserProfile', true);

        case types.FETCH_USER_PROFILE_SUCCESS:
        return state.merge({
            'fethingUserProfile': false,
            userProfile: action.payload
        });
        case types.FETCH_USER_PROFILE_FAIL:
        return state.merge({
            'fethingUserProfile': false,
            fetchUserProfileError: action.payload
        });

        case types.INSTA_TOKEN_STORE:
            return state.set('instaAuthToken', action.instaAuthToken);

        case types.USER_BOOTSTRAP:
        return state.set('user', fromJS(action.user));

        case types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS:
        return state.setIn(['user', 'image'], action.payload.image);

        case types.USER_UPDATE_PROFILE:
        return state.set('isSaving', true).set('updateError', null);
        case types.USER_CLEAR_ERROR:
        return state.set('updateError', null);

        case types.USER_UPDATE_PROFILE_FAIL:
        let message;
        if (action.error) {
            message = action.error.message || action.payload.errorMessage;
        } else if (action.payload) {
            message = action.payload.message;
        }

        return state
            .set('isSaving', false)
            .set('updateError', message);

        case types.USER_UPDATE_PROFILE_SUCCESS:
            return state
                .set('user', fromJS(action.payload))
                .set('updateError', null)
                .set('isSaving', false);
        default:
        return state;
    }
}
