import {Map, List} from 'immutable';
import * as actions from '../constants/actionTypes';

const initialState = Map({
    things: List()
});

export default function reducer (state = initialState, action) {

    switch (action.type) {

        case actions.HAS_SEEN_THINGS_ADD:
            return state
                .set('things', state.get('things').push(action.thing));

        // only used for dev
        case actions.HAS_SEEN_THINGS_CLEAR:
            return state.set('things', List());

        default:
            return state;
    }
}
