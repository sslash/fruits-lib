import * as types from '../constants/actionTypes';
import {pollSpices} from '../../services/pollSpices';


export function upvoteRoute (routeId) {
    return {
        types: [
            types.UPVOTE_ROUTE,
            types.UPVOTE_ROUTE_SUCCESS,
            types.UPVOTE_ROUTE_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/upvote`)
    };
}


export function fetch (routeId) {
    return {
        types: [
            types.ROUTE_DETAIL_FETCH,
            types.ROUTE_DETAIL_FETCH_SUCCESS,
            types.ROUTE_DETAIL_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/routes/${routeId}`),
        meta: {routeId}
    };
}

export function fetchDistanceMatrix (routeId) {
    return {
        types: [
            types.FETCH_DIRECTIONS_MATRIX,
            types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            types.FETCH_DIRECTIONS_MATRIX_FAIL
        ],
        promise: ({req}) => req.get(`/routes/${routeId}/directionsMatrix`)
    };
}

// copied from createRoute
export function fetchSpicesForVertice (venueId, sortorder) {
    return {
        types: [
            types.ROUTE_DETAIL_VERTICE_SPICES_FETCH,
            types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS,
            types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL
        ],

        promise: ({req}) => pollSpices(req, null, venueId, sortorder, 1),
    };
}

// used in routes-native to put route we get from router
// over to route detail store
export function bootstrapRoute (route) {
    return {type: types.ROUTE_DETAIL_BOOTSTRAP, route};
}
