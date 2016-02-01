import * as actions from '../constants/actionTypes';

export function fetch () {
    return {
        types: [
            actions.CITY_FETCH,
            actions.CITY_FETCH_SUCCESS,
            actions.CITY_FETCH_FAIL
        ],
        promise: ({ req }) => req.get('/city')
    };
}
