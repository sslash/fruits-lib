import * as actions from '../constants/actionTypes';
import {Map, fromJS, Iterable} from 'immutable';
import Route from '../../models/Route';
import {DEFAULT_GRID_KEY, DEFAULT_CITY, DEFAULT_TERMS} from '../constants/constants';
// import routesListFixture from './routesListFixture';

const initialRoutesState = Map({
    isFetching: false,
    didInvalidate: false,
    items: [],
    // items: routesListFixture.map(Route.mapper), // <-- for debugging

    // directionsMatrix: null,
    error: null,

    // paging
    offset: 0,
    limit: 40
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
        case actions.ROUTES_QUERY_SUCCESS:

            return state.merge({
                isFetching: false,
                didInvalidate: false,
                items: state.get('items')
                    .concat(action.payload._embedded.routes.map(Route.mapper)),
                lastUpdated: new Date()
            });

        case actions.RECEIVE_ROUTES_FAILED:
        case actions.ROUTES_QUERY_SUCCESS:
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
    key: null
});

function createKey(action) {
    let terms = action.meta.terms;
    if (Array.isArray(terms)) {
        terms = terms.join(':');
    }
    return `${action.meta.city || DEFAULT_CITY}:${terms || DEFAULT_TERMS}`;
}

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
                [DEFAULT_GRID_KEY]: routes(state.get(DEFAULT_GRID_KEY), action)
            });

        case actions.ROUTES_QUERY:
            state = state.set('key', createKey(action));

        case actions.ROUTES_QUERY_SUCCESS:
        case actions.ROUTES_QUERY_FAIL:

            const key = createKey(action);
            return state.merge({
                [key]: routes(state.get(key), action)
            });

        // when setting new city categories
        case actions.ROUTES_CLEAR:
            return initialState;

        default:
            return state;
    }
}
