import * as actions from '../constants/actionTypes';
import {fromJS, List, Iterable} from 'immutable';

const initialState = fromJS({
    isFetching: false,
    items: List(),
    error: null
})

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        return fromJS(state);
    }

    switch (action.type) {
        case actions.NOTIFICATIONS_FETCH:
            return state.set('isFetching', true);

        case actions.NOTIFICATIONS_FETCH_SUCCESS:
            return state
            .set('isFetching', false)
            .set('items', List(action.payload));

        case actions.NOTIFICATIONS_FETCH_FAIL:
            return state
                .set('isFetching', false)
                .set('errors', action.error);

        case actions.NOTIFICATIONS_MARK_SEEN_SUCCESS:
            return state.set('items',
                state.get('items').map(i => Object.assign({}, i, {seen: true})));

        default:
            return state;
    }
}
