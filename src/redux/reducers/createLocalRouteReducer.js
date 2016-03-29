import * as types from '../constants/actionTypes';
import Route from '../../models/Route';
import {Map, List, fromJS} from 'immutable';

const initialState = Map({
    isFetching: false,
    isFetched: false,
    error: null,
    createLocalRoute: null
});

export default function reducer (state = initialState, action) {

    switch (action.type) {

        case types.CREATE_LOCAL_ROUTE_FETCH:
            return state.set('isFetching', true);

        case types.CREATE_LOCAL_ROUTE_FETCH_SUCCESS:
            return state
                .set('isFetched', true)
                .set('isFetching', false)
                .set('error', null)
                .set('createLocalRoute', action.payload)

        case types.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS:
            return state
                .set('createLocalRoute', action.payload)

        case types.CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS:
            return state
                .set('createLocalRoute', action.payload)
                .set('isFetched', false);

        default:
            return state;
    }
}
