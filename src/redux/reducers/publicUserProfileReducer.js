import {fromJS, Iterable, List} from 'immutable';
import * as types from '../constants/actionTypes';
import User from '../../models/User';
import Route from '../../models/Route';

const initialState = fromJS({
    user: null, // User
    isFetching: false,
    error: null,
    isLoggedInUser: false,
});

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

        default:
        return state;
    }
}
