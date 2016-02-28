import {expect} from 'chai';
import reducer from '../routeDetailReducer';
import * as types from '../../constants/actionTypes';
import routeDirectionsResultFixture from './routeDirectionsResultFixture';
import venueDirectionsResultFixture from './venueDirectionsResultFixture';
import _isEqual from 'lodash/lang/isEqual';

describe('route detail reducer', () => {

    it('should handle VENUES_DIRECTIONS_MATRIX_FAIL', () => {
        const afterState = reducer(undefined, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL,
        });
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(false);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(true);
    });

    it('should handle VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS', () => {
        const beforeState = reducer(undefined, {
            type: types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            payload: routeDirectionsResultFixture
        });
        const afterState = reducer(beforeState, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS,
            index: 0,
            payload: venueDirectionsResultFixture
        });

        const oldDirections = beforeState.getIn(['directionsMatrix', 'directionsResult', 'data']).get(0).getIn(['routes', '0', 'legs']).get(0).toJS();
        const newDirections = afterState.getIn(['directionsMatrix', 'directionsResult', 'data']).get(0).getIn(['routes', '0', 'legs']).get(0).toJS();
        const oldLength = beforeState.getIn(['directionsMatrix', 'directionsResult', 'data']).size;
        const newLength = afterState.getIn(['directionsMatrix', 'directionsResult', 'data']).size;

        expect(oldDirections.distance.value).to.not.equal(newDirections.distance.value);
        expect(newLength).to.equal(oldLength);

        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(false);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(false);

    });

    it('should handle VENUES_DIRECTIONS_MATRIX', () => {
        const afterState = reducer(undefined, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH,
        });

        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(true);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(false);
    });
});
