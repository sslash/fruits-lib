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

export function fetchCityAutocomplete(cityQuery) {
    return {
        types: [
            actions.CITIES_FETCH,
            actions.CITIES_FETCH_SUCCESS,
            actions.CITIES_FETCH_FAIL
        ],
        promise: ({ req }) => req.get(`/cities/${cityQuery}`)
    };
}

export function clearCitySearch() {
    return {
        type: actions.CITIES_CLEAR,
    }
}

export function reverseGeocoding(params) {
    const obj = {
        params
    };
    return {
        types: [
            actions.REVERSE_GEOCODING_FETCH,
            actions.REVERSE_GEOCODING_FETCH_SUCCESS,
            actions.REVERSE_GEOCODING_FETCH_FAIL
        ],
        promise: ({ req }) => req.get('/cities/reverse-geocode', obj)
    };
}
