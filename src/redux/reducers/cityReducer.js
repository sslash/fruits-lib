import * as types from '../constants/actionTypes';
import {Map, List} from 'immutable';
import City from '../../models/City';

const initialState = Map({
    isFetching: false,
    cities: new List(),
    isError: false
});

export default function reducer (state = initialState, action) {

    switch (action.type) {
        case types.CITY_FETCH:
            return state.set('isFetching', true).set('isError', false);
        case types.CITY_FETCH_SUCCESS:
            return state.set('isFetching', false).set('isError', false).set('cities', new List(City.mapper(action.payload)));
        case types.CITY_FETCH_FAIL:
            return state.set('isFetching', false).set('isError', true);
        default :
        return state;
    }
}
