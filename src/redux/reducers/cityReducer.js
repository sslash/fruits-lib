import * as types from '../constants/actionTypes';
import {Map, List, Iterable, fromJS} from 'immutable';
import City from '../../models/City';

const initialState = Map({
    isFetching: false,
    cities: new List(),
    isError: false,
    selected: undefined
});

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState.merge(fromJS(state));
    }

    switch (action.type) {
        case types.CITIES_FETCH:
            return state.set('isFetching', true).set('isError', false);

        case types.CITIES_FETCH_SUCCESS:
            return state.set('isFetching', false).set('isError', false).set('cities', new List(City.multiMapper(action.payload)));

        case types.CITIES_FETCH_FAIL:
            return state.set('isFetching', false).set('isError', true);

        case types.CITY_SELECT:
            return state.set('selected', action.city);

        default:
            return state;
    }
}
