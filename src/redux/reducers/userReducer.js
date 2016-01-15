import * as types from '../constants/actionTypes';
import Route from '../../models/Route';
import {Record, Map, List, Iterable} from 'immutable';
import { LOAD } from 'redux-storage';


const UserAuth = Record({
    loggingIn: false,
    shouldRedirect: false,
    user: null,
    token: null,
    authError: null,
    signupError: null,

    // users routes
    // TODO: do a list here instead
    routes: [],
    fetchRoutesError: null,

    // user profile
    fethingUserProfile: false,
    fetchUserProfileError: null,

    // could have had a list here, one for each profile.
    // but probabz not necessary.
    userProfile: null
});

const initialState = new UserAuth();

export default function reducer (state = initialState, action = {}) {

    if (!Iterable.isIterable(state)) {
        state = initialState.set('user', Map(state.user));
    };

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
                authError: action.error ?
                    action.error.message : action.payload.errorMessage
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
            return state.set('signupError', action.error);

        case types.LOGOUT:
            return initialState;

        // load from offline storage
        case LOAD:
            let user = action.payload.user;
            if (user && user.routes) {
                user.routes = user.routes.map(Route.mapper);
            }

            return state.merge(user);

        case types.USER_TOKEN_STORE_AND_REDIRECT:
            return state.set('shouldRedirect', false);

        case types.FETCH_USER_ROUTES_SUCCESS:
            if (!action.payload._embedded) { return state; }
            return state.set('routes', action.payload._embedded.routes.map(Route.mapper));

        case types.FETCH_USER_ROUTES_FAIL:
            return state.set('fetchRoutesError', action.error);

        case types.USER_ROUTE_ADD:
            return state.update('routes', r => {
                return [...r, action.meta.route];
            });

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

        case types.USER_BOOTSTRAP:
            return state.set('user', Map(action.user));

        case types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS:
            return state.setIn(['user', 'image'], action.payload.image);

        default:
            return state;
    }
}
