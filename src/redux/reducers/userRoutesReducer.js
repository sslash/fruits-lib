import { Map, fromJS, List, Iterable } from 'immutable';
import _get from 'lodash/object/get';
import * as types from '../constants/actionTypes';
import Route from '../../models/Route';

const initialState = fromJS({
    fetchRoutesError: false,
    isFetching: false,
    likedRoutes: new List(),
    routes: new List(),
});


export default function reducer (state = initialState, action) {


    if (!Iterable.isIterable(state)) {
        state = fromJS(state);
    }

    switch (action.type) {
        case types.FETCH_USER_ROUTES:
            return state.merge({
                isFetching: true,
                fetchRoutesError: false,
                routes: new List(),
                likedRoute: new List()
            });

        case types.FETCH_USER_ROUTES_SUCCESS:
            if (!_get(action, 'payload._embedded')) { return state; }
            return state.merge({
                routes: action.payload._embedded.routes.map(Route.mapper),
                isFetching: false,
                fetchRoutesError: false
            });

        case types.FETCH_USER_ROUTES_FAIL:
            return state.set('fetchRoutesError', action.error).set('isFetching', false);

        case types.PUBLIC_LIKED_ROUTE_SUCCESS:
            if (!_get(action, 'payload._embedded')) { return state; }
                return state.merge({
                    isFetching: false,
                    fetchRoutesError: false,
                    likedRoutes: action.payload._embedded.routes.map(Route.mapper),
            });

        case types.UPDATE_USER_ROUTE:
            // optimistic update..
            const newRoutes = updateRoute(state.get('routes'), action.meta);
            return state.set('routes', newRoutes);

        default:
            return state;
        }
}


/**
* @param (array) routes, list of routes
* @param (object) updatedRoute, contains the route id and some properties. An exmaple of the object
* can be {id: 1337, isActive: false, isDraft: true}
*/

function updateRoute (routes, updatedRoute) {
    return routes.map(route => {
        if (route.get('id') === updatedRoute.id) {
            return updateKeyValue(route, updatedRoute);
        } else {
            return route;
        }
    });
}



function updateKeyValue (route, updatedRoute) {
    let newRoute = route;
    const keys = Object.keys(updatedRoute);
    keys.forEach(key => {
        newRoute = newRoute.set(key, updatedRoute[key])
    });
    return newRoute;
}
