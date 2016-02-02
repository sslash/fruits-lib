import * as actions from '../constants/actionTypes';

export function fetch () {
    return {
        types: [
            actions.CITIES_FETCH,
            actions.CITIES_FETCH_SUCCESS,
            actions.CITIES_FETCH_FAIL
        ],
        promise: ({ req }) => req.get('/cities')
    };
}
