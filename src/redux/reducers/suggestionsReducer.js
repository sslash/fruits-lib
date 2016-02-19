import * as actions from '../constants/actionTypes';
import {Map, fromJS, List, Iterable} from 'immutable';
import Venue from '../../models/Venue';

const initialCurrentState = Map({
    isFetching: false,
    item: Map(),
    error: null
});

function current (state = initialCurrentState, action) {

    switch (action.type) {

        case actions.SUGGESTIONS_DETAIL_FETCH:
            return state.set('isFetching', true);

        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
            return state.set('isFetching', false)
                .set('item', fromJS(action.payload));
                
        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
            return state.set('isFetching', false)
                .set('error', action.error);

        default:
            return state;
    }
}

const initialState = Map({
    foursquare: List(),
    yelp: List(),
    isFetching: false,
    error: null,
    current: undefined
});

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState;
    }

    switch (action.type) {
        case actions.SUGGESTIONS_CLEAR:
            return initialState;

        case actions.SUGGESTIONS_FETCH:
            return state.set('isFetching', true);

        case actions.SUGGESTIONS_FETCH_SUCCESS:

            return state
                .set('foursquare', action.payload.foursquare && List(action.payload.foursquare.map(item => fromJS(item))))
                .set('yelp', action.payload.yelp && List(action.payload.yelp.map(item => fromJS(item))))
                .set('isFetching', false)
                .set('error', false);

        case actions.SUGGESTIONS_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        case actions.SUGGESTIONS_DETAIL_FETCH:
        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
            return state.set('current', current(state.get('current'), action));

        default:
            return state;
    }
}
