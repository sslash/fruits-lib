import * as actions from '../constants/actionTypes';
import {Map, List, Iterable} from 'immutable';

const initialState = Map({
    selected: 'all',
    buckets: List(),
    city: 'Oslo'
});

export default function reducer (state = initialState, action) {
    // rehydrated state
    if (!Iterable.isIterable(state)) {
        state = initialState.merge(state);
    };

    switch (action.type) {

        case actions.SELECT_BUCKET:
            return state.set('selected', action.bucket);

        case actions.SELECTED_BUCKET_BOOTSTRAP:

            return initialState
                .set('buckets', action.buckets)
                .set('selected', Map(action.buckets[0]));

        case actions.SELECT_BUCKET_CHANGE:

            return state.set('selected', action.bucket);

        default:
            return state;
    }
}
