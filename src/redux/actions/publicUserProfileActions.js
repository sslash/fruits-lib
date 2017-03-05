import * as types from '../constants/actionTypes';
export function fetchPublicUserProfile (params, loggedInUserId) {
    params = params || {};

    const uri = params.id ?
        `/users/${params.id}` : '/users';

    // if not id, probz search by username
    const _params = params.id ? 
        {} : { params };

    return {
        types: [types.PUBLIC_USER_FETCH, types.PUBLIC_USER_FETCH_SUCCESS, types.PUBLIC_USER_FETCH_FAIL],
        promise: ({req}) => req.get(uri, _params),
        meta: {
            ...params,
        },
        loggedInUserId
    };
}
