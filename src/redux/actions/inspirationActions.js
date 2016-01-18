import * as actions from '../constants/actionTypes';


export function fetch (params) {
    return {
        types: [
            actions.INSPIRATION_FETCH,
            actions.INSPIRATION_FETCH_SUCCESS,
            actions.INSPIRATION_FETCH_FAIL
        ],
        promise: ({req}) => req.get('/venues/venueTips', { params }),
        meta: params
    };
}
