import * as actions from '../constants/actionTypes';
import {Map, List, Iterable, fromJS} from 'immutable';

const initialState = Map({
    selected: 'all',
    buckets: List(),
    city: 'Oslo',
    isFetching: false,
    error: null
});

export default function reducer (state = initialState, action) {
    // rehydrated state
    if (!Iterable.isIterable(state)) {
        state = initialState.merge(state);
    }

    switch (action.type) {

        case actions.SELECT_BUCKET:
            return state.set('selected', action.bucket);

        case actions.SELECTED_BUCKET_BOOTSTRAP:

            return initialState
                .set('buckets', action.buckets)
                .set('selected', Map(action.buckets[0]));

        case actions.SELECT_BUCKET_CHANGE:

            return state.set('selected', action.bucket);

        case actions.FETCH_CITY_BUCKETS:
            return state.set('isFetching', true);

        case actions.FETCH_CITY_BUCKETS_SUCCESS:

            const buckets = (action.payload._embedded &&
                    action.payload._embedded.bucket) ?
                        List(action.payload._embedded.bucket.map(b => fromJS(b))) : List();

            return state
                .set('buckets', buckets)
                .set('selected', buckets.get(0))
                .set('isFetching', false)
                .set('error', null);

        case actions.FETCH_CITY_BUCKETS_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        default:
            return state;
    }
}
