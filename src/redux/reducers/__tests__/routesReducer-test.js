import {expect} from 'chai';
import {List} from 'immutable';
import reducer from '../routesReducer';
import * as types from '../../constants/actionTypes';
import routesFxt from '../../../../test/fixtures/RECEIVE_ROUTES_SUCCESS';

describe('routes reducer', () => {

    it('should handle ROUTES_UPVOTE_UPDATE_SUCCESS', () => {
        const bucketName = 'YOLO';
        const beforeState = reducer(undefined, {});
        const middleState = reducer(beforeState, {
            type: types.RECEIVE_ROUTES,
            meta: {bucketName},
            payload: routesFxt
        });

        expect(middleState.getIn([bucketName, 'items']).size).to.equal(20);

        //
        const afterState = reducer(middleState, {
            type: types.ROUTES_UPVOTE_UPDATE_SUCCESS,
            meta: {
                routeId: 1780
            },
            payload: {
                likes: 1337
            }
        });

        console.log(`SAP! middleState`, middleState.getIn([bucketName, 'items']).map((route, i) => {
            return {
                id: route.get('id'),
                index: i,
                upvoteCount: route.get('upvoteCount')
            };
        }).toJSON());

        expect(afterState.getIn([bucketName, 'items', '8', 'upvoteCount'])).to.equal(1337);
        expect(afterState.getIn([bucketName, 'items', '9', 'upvoteCount'])).to.equal(2);

        console.log(`SAP! afterState`, afterState.getIn([bucketName, 'items']).map((route, i) => {
            return {
                id: route.get('id'),
                index: i,
                upvoteCount: route.get('upvoteCount')
            };
        }).toJSON());
    });
});
