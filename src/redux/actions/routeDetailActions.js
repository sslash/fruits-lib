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

export function fetchComments (routeId) {
    return {
        types: [
            types.ROUTE_DETAIL_COMMENTS_FETCH,
            types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS,
            types.ROUTE_DETAIL_COMMENTS_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/routes/${routeId}/comments`)
    };
}

export function addComment (routeId, body) {
    return {
        types: [
            types.ROUTE_DETAIL_COMMENTS_ADD,
            types.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS,
            types.ROUTE_DETAIL_COMMENTS_ADD_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/comments`, {body})
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

        promise: ({req}) => req.post(`/routes/${routeId}/directionsMatrix`, { travelmode })
    };
}

export function fetchDistanceMatrixBetweenVenues (vertices, travelmode, routeId, index) {
    const venues = mapVerticesToGeoVenues(vertices);

    return {
        types: [
            types.VENUES_DIRECTIONS_MATRIX_FETCH,
            types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS,
            types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/directionsMatrix`, {travelmode, venues}),
        index
    };
}

// pick either google_id or (lat and lng) when
// fetching travelmode and distance between two venues
export function mapVerticesToGeoVenues(vertices) {
    return vertices.map(vertice => {
        const geo = vertice.getIn(['venue', 'geometry']) || {};


        if (vertice.getIn(['venue', 'place_id'])) {
            return {googleId: vertice.getIn(['venue', 'place_id'])};

        } else if (geo.lat && geo.lng) {
            return {lat: geo.lat, lng: geo.lng};

        } else {
            throw new Error({message: 'error determineGeoType(), none of the data provided is legit'});
        }
    });
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

export function fetchSpicesForVenuesList (routeId, venueIds) {

    return {
        types: [
            types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST,
            types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS,
            types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL
        ],

        promise: ({req}) => req.get(`/routes/${routeId}/venue-spices-fetch`, {params: {venueIds: venueIds}})
    };
}

// used in routes-native to put route we get from router
// over to route detail store
export function bootstrapRoute (route) {
    return {type: types.ROUTE_DETAIL_BOOTSTRAP, route};
}
