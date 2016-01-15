import * as actions from '../constants/actionTypes';

export function createPressed (photo) {
    return { type: actions.NAVBAR_CREATE_PRESSED};
}

export function homePressed (photo) {
    return { type: actions.NAVBAR_HOME_PRESSED};
}

export function searchPressed (photo) {
    return { type: actions.NAVBAR_SEARCH_PRESSED};
}

export function notificationPressed (photo) {
    return { type: actions.NAVBAR_NOTIFICATION_PRESSED};
}

export function userprofilePressed (photo) {
    return { type: actions.NAVBAR_USERPROFILE_PRESSED};
}
