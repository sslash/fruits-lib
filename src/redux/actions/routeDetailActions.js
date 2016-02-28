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

export function changeTravelMode (travelmode) {
    return {type: types.TRAVELMODE_CHANGED, travelmode};
}

export function fetchDistanceMatrix (routeId, travelmode) {
    return {
        types: [
            types.FETCH_DIRECTIONS_MATRIX,
            types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            types.FETCH_DIRECTIONS_MATRIX_FAIL
        ],

        promise: ({req}) => req.get(`/routes/${routeId}/directionsMatrix`, {params: { travelmode }})
    };
}

export function fetchDistanceMatrixBetweenVenues (geoFirstSpot, geoSecondSpot, travelmode, routeId, index) {
    if(checkGEO(geoFirstSpot) && checkGEO(geoSecondSpot)) {
        const lat = [geoFirstSpot.lat, geoSecondSpot.lat];
        const lng = [geoFirstSpot.lng, geoSecondSpot.lng];
        return {
            types: [
                types.VENUES_DIRECTIONS_MATRIX_FETCH,
                types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS,
                types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL
            ],
            promise: ({req}) => req.get(`/routes/${routeId}/directionsMatrix`, {params: { travelmode, lat, lng }}),
            index
        };
    }
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

function checkGEO (geo) {
    //todo fix error handling, give user feedback
    if(geo.lat && geo.lng) {
        return true;
    } else {
        return false;
    }

}
