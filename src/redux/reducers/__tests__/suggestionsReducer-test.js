import {expect} from 'chai';
import {List} from 'immutable';
import reducer from '../suggestionsReducer';
import * as types from '../../constants/actionTypes';
import foursquareFixure from './foursquareFixture';
import instagramFixture from './instagramFixture';

describe('suggestion reducer', () => {

    it('should handle SUGGESTIONS_DETAIL_FETCH', () => {

        const beforeState = reducer(undefined, {});
        expect(beforeState.get('isFetching')).to.equal(false);

        const afterState = reducer(beforeState, {
            type: types.SUGGESTIONS_DETAIL_FETCH
        });
        expect(afterState.getIn(['current', 'isFetching'])).to.equal(true);
    });

    it('should handle images when SUGGESTIONS_DETAIL_FETCH_SUCCESS:', () => {
        const afterState = reducer(undefined, {
            type: types.SUGGESTIONS_DETAIL_FETCH_SUCCESS,
            payload: {instagram: instagramFixture, foursquare: foursquareFixure}
        });
        expect(afterState.getIn(['current', 'item', 'images']).size).to.equal(21);
        expect(afterState.getIn(['current', 'item', 'images', 0, 'source'])).to.equal('foursquare');
        expect(afterState.getIn(['current', 'item', 'reviews']).size).to.equal(5);
        expect(afterState.getIn(['current', 'item', 'ratings', 'foursquare'])).to.equal(9.5);
        expect(afterState.getIn(['current', 'item', 'meta', 'foursquare', 'price'])).to.equal('$');
        expect(afterState.getIn(['current', 'item', 'meta', 'foursquare', 'hoursStatus'])).to.equal('Open until 1:00 AM');
    });

});
