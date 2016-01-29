import {expect} from 'chai';
import {List} from 'immutable';
import reducer from '../selectedBucketReducer';
import * as types from '../../constants/actionTypes';
import fetchCityBucketsSuccess from '../../../../test/fixtures/FETCH_CITY_BUCKETS_SUCCESS';

describe('selected bucket reducer', () => {

    it('should handle FETCH_CITY_BUCKETS', () => {

        const beforeState = reducer(undefined, {});
        expect(beforeState.get('isFetching')).to.equal(false);

        const afterState = reducer(beforeState, {
            type: types.FETCH_CITY_BUCKETS
        });
        expect(afterState.get('isFetching')).to.equal(true);
    });

    it('should handle FETCH_CITY_BUCKETS_SUCCESS', () => {

        const beforeState = reducer(beforeState, {
            type: types.FETCH_CITY_BUCKETS
        });

        expect(beforeState.get('isFetching')).to.equal(true);

        const afterState = reducer(beforeState, {
            type: types.FETCH_CITY_BUCKETS_SUCCESS,
            payload: fetchCityBucketsSuccess
        });

        expect(afterState.get('isFetching')).to.equal(false);
        expect(afterState.get('error')).to.be.a('null');
        expect(List.isList(afterState.get('buckets'))).to.be.true;
        expect(afterState.get('buckets').size).to.equal(2);
        expect(afterState.get('buckets').get(0).get('id')).to.equal(22);
        expect(afterState.get('buckets').get(0).get('category_title')).to.equal('Routes in London');
        expect(afterState.get('buckets').get(1).get('id')).to.equal(6);
        expect(afterState.getIn(['selected', 'id'])).to.equal(22);
    });
});
