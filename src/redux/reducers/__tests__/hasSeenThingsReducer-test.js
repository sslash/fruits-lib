import {expect} from 'chai';
import reducer from '../hasSeenThingsReducer';
import * as types from '../../constants/actionTypes';
import {HAS_SEEN_FIRST_BOOKMARK} from '../../constants/constants';
import Route from '../../../models/Route';
import successFxt from '../../../../test/fixtures/PUBLIC_USER_FETCH_SUCCESS';

describe('has seen things reducer', () => {
    it('should handle HAS_SEEN_THINGS_ADD', () => {
        const thing = HAS_SEEN_FIRST_BOOKMARK;

        const beforeState = reducer(undefined, {});
        expect(beforeState.get('things').size).to.equal(0);

        const state = reducer(beforeState, {
            type: types.HAS_SEEN_THINGS_ADD,
            thing
        });

        expect(state.get('things').size).to.equal(1);
        expect(state.get('things').get(0)).to.equal(thing);
    });
});
