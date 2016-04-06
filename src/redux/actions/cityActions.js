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

export function fetchCityBuckets (city) {
    return {
        types: [
            actions.CITIES_BUCKETS_FETCH,
            actions.CITIES_BUCKETS_FETCH_SUCCESS,
            actions.CITIES_BUCKETS_FETCH_FAIL
        ],
        promise: ({ req }) => req.get(`/cities/${city}/buckets`)
    };
}

export function selectCity (city) {
    return { type: actions.CITY_SELECT, city };
}
