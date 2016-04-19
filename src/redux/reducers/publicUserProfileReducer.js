import {fromJS, Iterable, List} from 'immutable';
import * as types from '../constants/actionTypes';
import User from '../../models/User';
import Route from '../../models/Route';

const initialState = fromJS({
    user: null, // User
    isFetching: false,
    error: null,
    isLoggedInUser: false,
    likedRoutes: [],
    routes: [],
    bookmarkedRoutes: []
});

let bookmarks;

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = fromJS(state)
            .set('user', new User(state.user));
    }

    // the whole state tree is just a copy of the userReducer state
    // we do this to have one separate key for the logged in user (store.user)
    // and one key for each public profile (store.publicUserProfile.anna = {}
    // store.publicUserProfile.Tim = {}...)
    //
    // But for now we only support one public user profile at the time,
    // which is the DEFAULT_PUBLIC_USER_KEY
    switch (action.type) {
        case types.PUBLIC_USER_FETCH:
        return state.merge({
            user: new User(action.meta),
            isFetching: true,
            error: null,
            isLoggedInUser: false
        });
        //optimistic update
        case types.USER_UPDATE_PROFILE_SUCCESS:
        return state.merge({
            user: new User(action.payload),
            isFetching: false,
            error: null,
        });

        case types.PUBLIC_USER_FETCH_SUCCESS:

        if (action.payload.users) {
            const user = new User(User.mapper(action.payload._embedded.users[0]));
            const meta = action.meta || {};

            return state.merge({
                user,
                isFetching: false,
                error: null,
                isLoggedInUser: meta.loggedInUserId ===
                user.get('id')
            });
        } else {
            return state.merge({
                user: null,
                isFetching: false,
                isLoggedInUser: false,
                error: {message: 'Failed to fetch user, empty result'}
            });
        }

        case types.PUBLIC_USER_FETCH_FAIL:
        return state.merge({
            user: null,
            isFetching: false,
            isLoggedInUser: false,
            error: action.payload
        });


        case types.BOOKMARKS_FETCH_SUCCESS:
        bookmarks = action.payload;
        return state
        .merge({
            bookmarkedRoutes: bookmarks ?
            List(bookmarks.map(Route.mapper)) : []
        });

        case types.FETCH_USER_ROUTES_SUCCESS:
        if (!action.payload._embedded) { return state; }
        return state.merge({
            routes: action.payload._embedded.routes.map(Route.mapper),
        });

        case types.PUBLIC_LIKED_ROUTE_SUCCESS:
        if (!action.payload._embedded) { return state; }
        return state.merge({
            likedRoutes: action.payload._embedded.routes.map(Route.mapper),
        });

        default:
        return state;
    }
}
