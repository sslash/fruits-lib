export function fetchPublicUserProfile (userId, params) {
    let _params = params ? { params } : null;
    return {
        types: [types.PUBLIC_USER_FETCH, types.PUBLIC_USER_FETCH_SUCCESS, types.PUBLIC_USER_FETCH_FAIL],
        promise: ({req}) => req.get(`/users/${userId}`, _params)
    };
}
