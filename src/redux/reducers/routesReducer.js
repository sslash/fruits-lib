import * as actions from '../constants/actionTypes';
import {Map, fromJS, Iterable, List} from 'immutable';
import Route from '../../models/Route';
import {DEFAULT_GRID_KEY, DEFAULT_CITY, DEFAULT_TERMS} from '../constants/constants';
// import routesListFixture from './routesListFixture';

const initialRoutesState = Map({
    isFetching: false,
    didInvalidate: false,
    items: List(),
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
        case actions.ROUTES_QUERY:
            return state.merge({
                isFetching: true,
                didInvalidate: false,
                offset: action.meta.offset,

                // if offset is 0, we are not appending to an existing list
                // e.g not part of infinite scrolling
                // in this case, reset the list so it doesn't get appended
                items: action.meta.offset === 0 ?
                    new List() : state.get('items')
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
        case actions.ROUTES_QUERY_FAIL:
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

// keys will be populated here, one for each grid list
const initialState = Map({
    key: null,
    terms: null, // search terms
    directionsMatrix: null
});

/*
* Key is used to map a collection of routes.
* For instance 'Oslo:bike:food': [<routes>]
*
* We also need
*/
function createKey(action) {
    // const city = action.meta.city || DEFAULT_CITY;
    // let terms = action.meta.terms;
    // if (Array.isArray(terms)) {
    //     terms = terms.join(':');
    // }
    //
    // terms = terms || DEFAULT_TERMS;
    //
    // return `${city}:${terms}`;
    // no need to have special key
    return `${DEFAULT_CITY}:${DEFAULT_TERMS}`;
}

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState;
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
                [key]: routes(state.get(key), action),
                terms: action.meta.terms
            });

        // when setting new city categories
        case actions.ROUTES_CLEAR:
            return initialState;

        case actions.ROUTES_UPVOTE_UPDATE_SUCCESS:
            // loop through every bucketName
            // for each if you find the route with id, update count

            let {likes} = action.payload;

            Object.keys(state.toJSON())
                .forEach(bucketName => {
                    if (bucketName !== 'directionsMatrix') {

                        const items = state.getIn([bucketName, 'items']);
                        if (items) {
                            const index = items.findIndex(route => route.get('id') === action.meta.routeId);

                            if (index > -1) {
                                const updatedItems = items.update(index, (route) => {
                                    return route.set('upvoteCount', likes);
                                });
                                state = state.setIn([bucketName, 'items'], updatedItems);
                            }
                        }
                    }
            });

            return state;

        // when data comes from the server, we need to make it
        // an immutable object
        // TODO dont do it this way!!
        default:
            return state;
    }
}
