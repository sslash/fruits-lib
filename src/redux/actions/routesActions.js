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

export function clearRoutes (dispatch) {
    dispatch({ type: types.BUCKETS_CLEAR });

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
