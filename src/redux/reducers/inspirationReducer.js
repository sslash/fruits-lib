import * as actions from '../constants/actionTypes';
import {Map, fromJS, List, Iterable} from 'immutable';

const initialState = Map({
    foursquare: List(),
    yelp: List(),
    isFetching: false,
    error: null
});

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState;
    };

    switch (action.type) {
        case actions.INSPIRATION_FETCH:
            return state.set('isFetching', true);

        case actions.INSPIRATION_FETCH_SUCCESS:

            return state
                .set('foursquare', List(action.payload.foursquare.map(item => fromJS(item))))
                .set('yelp', List(action.payload.yelp.map(item => fromJS(item))))
                .set('isFetching', false)
                .set('error', false);

        case actions.INSPIRATION_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);
        default:
            return state;
    }
}
