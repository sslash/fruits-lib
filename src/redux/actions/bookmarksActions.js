import * as actions from '../constants/actionTypes';

// deep fetch
export function getBookmarkedRoutes (userId) {
    return {
        types: [
            actions.BOOKMARKS_FETCH,
            actions.BOOKMARKS_FETCH_SUCCESS,
            actions.BOOKMARKS_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/users/${userId}/bookmarks`)
    };
}

// only fetch route ids,
// for performance (e.g check if you have bookmarked a route)
export function getBookmarkedRoutesIds (userId) {
    return {
        types: [
            actions.BOOKMARKS_IDS_FETCH,
            actions.BOOKMARKS_IDS_FETCH_SUCCESS,
            actions.BOOKMARKS_IDS_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/users/${userId}/bookmarks?ids=true`)
    };
}
export function postBookmark (userId, route) {
    return {
        types: [
            actions.BOOKMARKS_POST,
            actions.BOOKMARKS_POST_SUCCESS,
            actions.BOOKMARKS_POST_FAIL
        ],
        promise: ({req}) => req.post(`/users/${userId}/bookmarks`,
            {routeId: route.get('id')}),
        route
    };
}

export function deleteBookmark (userId, route) {
    return {
        types: [
            actions.BOOKMARKS_DELETE,
            actions.BOOKMARKS_DELETE_SUCCESS,
            actions.BOOKMARKS_DELETE_FAIL
        ],
        promise: ({req}) => req.post(`/users/${userId}/bookmarks/delete`,
            {routeId: route.get('id')}),
        route
    };
}
