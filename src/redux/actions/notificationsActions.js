import * as actions from '../constants/actionTypes';

export function fetchNotification () {
    return {
        types: [
            actions.NOTIFICATIONS_FETCH,
            actions.NOTIFICATIONS_FETCH_SUCCESS,
            actions.NOTIFICATIONS_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/notifications`)
    };
}

export function markSeen (notificationId) {
    return {
        types: [
            actions.NOTIFICATIONS_MARK_SEEN,
            actions.NOTIFICATIONS_MARK_SEEN_SUCCESS,
            actions.NOTIFICATIONS_MARK_SEEN_FAIL
        ],
        promise: ({req}) => req.post(`/notifications/${notificationId}/markSeen`)
    };
}
