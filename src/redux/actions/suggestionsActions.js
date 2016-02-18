import * as actions from '../constants/actionTypes';


export function clear () {
    return { type: actions.SUGGESTIONS_CLEAR };
}

export function fetch (params) {
    return {
        types: [
            actions.SUGGESTIONS_FETCH,
            actions.SUGGESTIONS_FETCH_SUCCESS,
            actions.SUGGESTIONS_FETCH_FAIL
        ],
        promise: ({req}) => req.get('/venues/venueTips', { params }),
        meta: params
    };
}

export function fetchDetail (params) {
    return {
        types: [
            actions.SUGGESTIONS_DETAIL_FETCH,
            actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS,
            actions.SUGGESTIONS_DETAIL_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/venues/venueTipsDetail`, { params }),
        meta: params
    };
}
