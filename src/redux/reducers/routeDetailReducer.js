import * as types from '../constants/actionTypes';
import {Map, fromJS, Iterable} from 'immutable';
import Route from '../../models/Route';
import _isEqual from 'lodash/lang/isEqual';

const initialState = Map({
    isFetching: false,
    route: null,
    directionsMatrix: Map(),
    error: null,
    travelmode: 'WALKING'
});

export default function reducer (state = initialState, action) {

    // rehydrated state
    if (!Iterable.isIterable(state)) {
        if (state.route) {
            state = initialState.set('route', Route.mapper(state.route));
        } else {
            state = initialState;
        }
    };

    switch (action.type) {
        case types.ROUTE_DETAIL_FETCH:
            return state.set('isFetching', true);

        case types.TRAVELMODE_CHANGED:
            return state.set('travelmode', action.travelmode)

        case types.ROUTE_DETAIL_FETCH_SUCCESS:

            return initialState
                .set('route', Route.mapper(action.payload))
                .set('isFetching', false)
                .set('error', false);

        case types.ROUTE_DETAIL_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        // TODO: HANDLE UPVOTES RESULT
        case types.UPVOTE_ROUTE_SUCCESS:
            return state
                .setIn(['route', 'likes'], action.payload._embedded.likes);

        case types.UPVOTE_ROUTE_FAIL:
            return state;

        case types.FETCH_DIRECTIONS_MATRIX:
            return state.set('directionsMatrix', fromJS({
                fetchingDirections: true,
                fetchingDirectionsFailed: false
            }));

        case types.FETCH_DIRECTIONS_MATRIX_SUCCESS:
            return state.set('directionsMatrix', fromJS({
                fetchingDirections: false,
                directionsResult: action.payload
            }));
        case types.FETCH_DIRECTIONS_MATRIX_FAIL:
            return state.set('directionsMatrix', fromJS({
                fetchingDirections: false,
                fetchingDirectionsFailed: true
            }));

        case types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS:
            return Route.updateVertice(state, {
                ...action.payload
            });

        case types.ROUTE_DETAIL_BOOTSTRAP:
            return state.set('route', action.route);

        case types.VENUES_DIRECTIONS_MATRIX_FETCH:
        return state.setIn(['directionsMatrix', 'fetchingDirections'], true).setIn(['directionsMatrix', 'fetchingDirectionsFailed'], false);

        case types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS:
            debugger;
            return state.set('directionsMatrix', fromJS({
                fetchingDirections: false,
                fetchingDirectionsFailed: false,
            })).setIn(['directionsMatrix', 'directionsResult', 'data'], mapNewDirections(action.payload, state.getIn(['directionsMatrix', 'directionsResult', 'data'])))


        case types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL:
            return state.setIn(['directionsMatrix', 'fetchingDirections'], false).setIn(['directionsMatrix', 'fetchingDirectionsFailed'], true);

        default:
            return state;
    }
}


function mapNewDirections(newDirections, oldDirections) {
    return oldDirections.map((route) => {
        if(isRoute(route) && _isEqual(route.get('geocoded_waypoints').toJS(), newDirections.data[0].geocoded_waypoints)) {
            return fromJS(newDirections.data[0]);
        } else {
            return route;
        }
    });
}

function isRoute(route) {
    if(route) {
        if(route.isEmpty()) {
            return false;
        }else {
            return true;
        }
    }else {
        return false
    }
}
