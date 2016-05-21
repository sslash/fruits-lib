import {Map, List} from 'immutable';
import * as actions from '../constants/actionTypes';

const initialState = Map({
    things: List()
});

export default function reducer (state = [], action) {

    switch (action.type) {

        case actions.HAS_SEEN_THINGS_ADD:
            return state.set('things', this.state.get('things').push(action.thing));
    }
}
