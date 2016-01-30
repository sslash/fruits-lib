// TODO: finishe me: http://rackt.github.io/redux/docs/advanced/ExampleRedditAPI.html

import * as types from '../constants/actionTypes';


export function requestRoutes (bucketName, bucketId, city) {

    const params = {};

    // TODO: remove this ugly hack
    if (bucketId && bucketName !== 'all') { params.category = bucketId; }
    if (city) { params.city = city; }

    return {
        types: [types.REQUEST_ROUTES, types.RECEIVE_ROUTES, types.RECEIVE_ROUTES_FAILED],
        promise: ({req}) => {
            return req.get('/routes', {params});
        },
        meta: {bucketName: bucketName}
    };
}

export function shouldFetchRoutes (routes, bucket) {
    const routesByBucket = routes[bucket];
    if (!routesByBucket) {
        return true;
    } else if (routesByBucket.isFetching) {
        return false;
    } else {
        return routesByBucket.didInvalidate;
    }
}

export function fetchRoutesIfNeeded (routes, bucketName, bucketId, city) {
    if (shouldFetchRoutes(routes, bucketName)) {
        return requestRoutes(bucketName, bucketId, city);
    }
}

export function fetchCityBuckets (dispatch, city = 'Oslo', resetRoutes = true) {

    resetRoutes && dispatch({type: types.ROUTES_CLEAR});

    return {
        types: [types.FETCH_CITY_BUCKETS, types.FETCH_CITY_BUCKETS_SUCCESS, types.FETCH_CITY_BUCKETS_FAIL],
        promise: ({ req }) => {
            return req.get('/buckets', { params: { city } });
        },
    };
}

export function selectBucket (bucket) {
    return {
        type: types.SELECT_BUCKET,
        bucket
    };
}

// TODO: finishe me
export function invalidateBucket (bucket) {
    return {
        type: types.INVALIDATE_BUCKET,
        bucket
    };
}
