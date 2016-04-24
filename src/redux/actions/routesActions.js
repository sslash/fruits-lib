// TODO: finishe me: http://rackt.github.io/redux/docs/advanced/ExampleRedditAPI.html
import {fromJS, Iterable} from 'immutable';
import * as types from '../constants/actionTypes';
import {DEFAULT_BUCKET_NAME} from '../constants/constants';


export function requestRoutes (bucketName, bucketId, city, offset, limit) {

    const params = {
        offset,
        limit
    };

    // TODO: remove this ugly hack
    if (bucketId && bucketName !== DEFAULT_BUCKET_NAME) { params.category = bucketId; }
    if (city) { params.city = city; }

    return {
        types: [types.REQUEST_ROUTES, types.RECEIVE_ROUTES, types.RECEIVE_ROUTES_FAILED],
        promise: ({req}) => {
            return req.get('/routes', {params});
        },
        meta: {
            bucketName,
            offset
        }
    };
}

export function shouldFetchRoutes (routes, bucket, offset) {
    const routesByBucket = routes.get(bucket);
    if (!routesByBucket) {
        return true;
    } else if (routesByBucket.isFetching) {
        return false;
    } else if (offset > routesByBucket.get('offset')) {
        return true;
    } else {
        return routesByBucket.didInvalidate;
    }
}

/**
* @param {object} bucket either a bucket (Map),
* or a bucketName (string)
*/
export function fetchRoutesIfNeeded (bucket, bucketId, city, offset, limit) {
    const bucketName = Iterable.isIterable(bucket) ?
        bucket.get('name') : bucket;

    return requestRoutes(bucketName, bucketId, city, offset, limit);
}

export function clearRoutes () {
    return { type: types.ROUTES_CLEAR };
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
    const _bucket = Iterable.isIterable(bucket) ?
        bucket : fromJS(bucket);

    return {
        type: types.SELECT_BUCKET,
        bucket: _bucket
    };
}

// TODO: finishe me
export function invalidateBucket (bucket) {
    return {
        type: types.INVALIDATE_BUCKET,
        bucket
    };
}


/* USE THIS IN EVERY ROUTE SEARCH FROM NOW */
// reducer key will be: city:terms
// TODO: nextPage(terms, offset, limit, city);
export function queryRoutes (terms, offset, limit, city, sort, others) {
    const params = {
        terms: terms || '',
        offset,
        limit,
        city: city || '',
        sort: sort || '',
        ...others
    };
    return {
        types: [types.ROUTES_QUERY, types.ROUTES_QUERY_SUCCESS,
            types.ROUTES_QUERY_FAIL],
        promise: ({ req }) => {
            return req.get('/routes', { params });
        },
        meta: params
    }
}

// called from an action sequece (routeDetail.upvoteRoute).
// therefore has to return a promise even
// though it only has to return the previous payload
export function upvoteRouteInGrid(routeId) {
    return {
        types: [
            types.ROUTES_UPVOTE_UPDATE,
            types.ROUTES_UPVOTE_UPDATE_SUCCESS,
            types.ROUTES_UPVOTE_UPDATE_FAIL
        ],
        promise: ({result}) => {
            return Promise.resolve(result.payload);
        },
        meta: {
            routeId
        }
    };
}
