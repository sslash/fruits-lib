import {expect} from 'chai';
import reducer from '../cityReducer';
import * as types from '../../constants/actionTypes';
import cities from './cityFixture';
import {Map, List} from 'immutable';

describe('city reducer', () => {

    it('should handle CITIES_FETCH', () => {
        const afterState = reducer(undefined, {
            type: types.CITIES_FETCH,
        });
        expect(afterState.get('isFetching')).to.equal(true);
        expect(afterState.get('cities')).to.equal(new List());
        expect(afterState.get('isError')).to.equal(false);

    });

    it('should handle CITIES_FETCH_SUCCESS', () => {
        const afterState = reducer(undefined, {
            type: types.CITIES_FETCH_SUCCESS,
            payload: cities

        });
        expect(afterState.get('isFetching')).to.equal(false);
        expect(afterState.get('cities').get(0).get('title')).to.equal('London');
        expect(afterState.get('isError')).to.equal(false);

    });

    it('should handle CITIES_FETCH_FAIL', () => {
        const afterState = reducer(undefined, {
            type: types.CITIES_FETCH_FAIL,
        });
        expect(afterState.get('isFetching')).to.equal(false);
        expect(afterState.get('cities')).to.equal(new List());
        expect(afterState.get('isError')).to.equal(true);

    });

});
