export function fetchPublicUserProfile (userId, params) {
    return {
        types: [types.PUBLIC_USER_FETCH, types.PUBLIC_USER_FETCH_SUCCESS, types.PUBLIC_USER_FETCH_FAIL],
        promise: ({req}) => req.get(`/users/${userId}`, {params})
    };
}
