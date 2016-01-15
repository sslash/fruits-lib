import {expect} from 'chai';
import reducer from '../createVerticeReducer';
import * as types from '../../constants/actionTypes';
import verticeFixture from './verticeFixture';
import venueFixture from './venueFixture';

describe('create route reducer', () => {

    it('should handle VENUE_UPDATE', () => {

        const beforeState = reducer(undefined, {
            type: types.VERTICE_UPDATE_META,
            meta: verticeFixture
        });

        const afterState = reducer(beforeState, {
            type: types.VENUE_UPDATE,
            venue: venueFixture
        });

        const venue = afterState.getIn(['vertice', 'venue']);
        const vert = afterState.get('vertice');

        expect(venue.get('id')).to.equal(venueFixture.id);
        expect(venue.get('name')).to.equal(venueFixture.name);
        expect(vert.get('id')).to.equal(verticeFixture.id);
        expect(vert.get('title')).to.equal(venueFixture.name);
        expect(vert.get('sortorder')).to.equal(verticeFixture.sortorder);
        expect(vert.get('description')).to.equal(verticeFixture.description);
    });
});
