import * as actions from '../constants/actionTypes';
import {Map, fromJS, Iterable} from 'immutable';
import Route from '../../models/Route';
// import routesListFixture from './routesListFixture';

const initialRoutesState = Map({
    isFetching: false,
    didInvalidate: false,
    items: [],
    // items: routesListFixture.map(Route.mapper), // <-- for debugging

    // only concerns one route. TODO move into a single route
    directionsMatrix: null,
    error: null,

    // pageing
    offset: 0
});

function routes (state = initialRoutesState, action) {

    switch (action.type) {

        case actions.INVALIDATE_BUCKET:
            return state.set('didInvalidate', true);

        case actions.REQUEST_ROUTES:
            return state.merge({
                isFetching: true,
                didInvalidate: false,
                offset: action.meta.offset,
                items: state.get('items')
            });

        case actions.RECEIVE_ROUTES:

            return state.merge({
                isFetching: false,
                didInvalidate: false,
                items: state.get('items').concat(action.payload._embedded.routes.map(Route.mapper)),
                lastUpdated: new Date()
            });

        case actions.RECEIVE_ROUTES_FAILED:
            return state.merge({
                isFetching: false,
                didInvalidate: false,
                items: [],
                error: action.payload.error
            });
        default:
            return state;
    }
}


const initialState = Map({
    directionsMatrix: {}
});

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState.merge(fromJS(state));
    }

    switch (action.type) {
        case actions.INVALIDATE_BUCKET:
        case actions.RECEIVE_ROUTES:
        case actions.REQUEST_ROUTES:
        case actions.RECEIVE_ROUTES_FAILED:
            return state.merge({
                [action.meta.bucketName]: routes(state.get(action.meta.bucketName), action)
            });

        // when setting new city categories
        case actions.ROUTES_CLEAR:
            return initialState;
        // case actions.FETCH_DIRECTIONS_MATRIX:
        //     return state.set('directionsMatrix', {
        //         fetchingDirections: true
        //     });
        //
        // case actions.FETCH_DIRECTIONS_MATRIX_SUCCESS:
        //     return state.set('directionsMatrix', {
        //         fetchingDirections: false,
        //         directionsResult: action.payload
        //     });
        // case actions.FETCH_DIRECTIONS_MATRIX_FAILURE:
        //     return state.set('directionsMatrix', {
        //         fetchingDirections: false,
        //         fetchingDirectionsError: true
        //     });

        // when data comes from the server, we need to make it
        // an immutable object
        // TODO dont do it this way!!
        default:
            return state;
    }
}
