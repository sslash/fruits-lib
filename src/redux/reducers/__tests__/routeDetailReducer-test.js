import {expect} from 'chai';
import reducer from '../routeDetailReducer';
import {List} from 'immutable';
import * as types from '../../constants/actionTypes';
import routeDirectionsResultFixture from './routeDirectionsResultFixture';
import venueDirectionsResultFixture from './venueDirectionsResultFixture';
import routeDetailFx from '../../../../test/fixtures/ROUTE_DETAIL_FETCH_SUCCESS_2';
import spicesFx from '../../../../test/fixtures/ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS';
import multiplevenuesFixture from '../../../../test/fixtures/VENUES_DIRECTIONS_MATRIX_FETCH';
import commentsFxt from '../../../../test/fixtures/ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS';
import routeFxt from '../../../../test/fixtures/ROUTE_DETAIL_FETCH_SUCCESS';
import _isEqual from 'lodash/lang/isEqual';

describe('route detail reducer', () => {

    it('should handle VENUES_DIRECTIONS_MATRIX_FAIL', () => {
        const afterState = reducer(undefined, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL,
        });
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(false);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(true);
    });

    it('should handle FETCH_DIRECTIONS_MATRIX_SUCCESS with index', () => {
        const beforeState = reducer(undefined, {
            type: types.FETCH_DIRECTIONS_MATRIX
        });

        expect(beforeState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(true);
        expect(beforeState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(false);

        const afterState = reducer(beforeState, {
            type: types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            payload: routeDirectionsResultFixture
        });

        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(false);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(false);

        expect(afterState.getIn(['directionsMatrix', 'directionsResult']).data.length).to.equal(10);
        expect(afterState.getIn(['directionsMatrix', 'directionsResult']).data[0].status).to.equal('OK');
    });

    it('should handle VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS with index', () => {
        const beforeState = reducer(undefined, {
            type: types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            payload: routeDirectionsResultFixture
        });


        const afterState = reducer(beforeState, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS,
            index: 3,
            payload: venueDirectionsResultFixture
        });

        const beforeRoute = beforeState.getIn(['directionsMatrix', 'directionsResult']).data;
        const updatedRoute = afterState.getIn(['directionsMatrix', 'directionsResult']).data;
        expect(beforeRoute.length).to.equal(updatedRoute.length);

        const updatedRouteBefore = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[3].routes[0];
        const updatedRouteAfter = afterState.getIn(['directionsMatrix', 'directionsResult']).data[3].routes[0];

        const notUpdatedRouteBefore = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[0].routes[0];
        const notUpdatedRouteAfter = afterState.getIn(['directionsMatrix', 'directionsResult']).data[0].routes[0];

        const notUpdatedRoute2Before = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[4].routes[0];
        const notUpdatedRoute2After = afterState.getIn(['directionsMatrix', 'directionsResult']).data[4].routes[0];


        expect(updatedRouteBefore.summary).to.not.equal(updatedRouteAfter.summary);
        expect(notUpdatedRouteBefore.summary).to.equal(notUpdatedRouteAfter.summary);
        expect(notUpdatedRoute2Before.summary).to.equal(notUpdatedRoute2After.summary);

        expect(afterState.getIn(['directionsMatrix', 'fetchingDirections'])).to.equal(false);
        expect(afterState.getIn(['directionsMatrix', 'fetchingDirectionsError'])).to.equal(false);
    });

    it('should handle VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS without index', () => {
        const beforeState = reducer(undefined, {
            type: types.FETCH_DIRECTIONS_MATRIX_SUCCESS,
            payload: routeDirectionsResultFixture
        });

        const afterState = reducer(beforeState, {
            type: types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS,
            payload: multiplevenuesFixture
        });

        const beforeRoute = beforeState.getIn(['directionsMatrix', 'directionsResult']).data;
        const updatedRoute = afterState.getIn(['directionsMatrix', 'directionsResult']).data;
        expect(beforeRoute.length).to.not.equal(updatedRoute.length);

        const updatedRouteBefore = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[3].routes[0];
        const updatedRouteAfter = afterState.getIn(['directionsMatrix', 'directionsResult']).data[3].routes[0];

        const notUpdatedRouteBefore = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[0].routes[0];
        const notUpdatedRouteAfter = afterState.getIn(['directionsMatrix', 'directionsResult']).data[0].routes[0];

        const notUpdatedRoute2Before = beforeState.getIn(['directionsMatrix', 'directionsResult']).data[4].routes[0];
        const notUpdatedRoute2After = afterState.getIn(['directionsMatrix', 'directionsResult']).data[4].routes[0];


        expect(updatedRouteBefore.summary).to.not.equal(updatedRouteAfter.summary);
        expect(notUpdatedRouteBefore.summary).to.not.equal(notUpdatedRouteAfter.summary);
        expect(notUpdatedRoute2Before.summary).to.not.equal(notUpdatedRoute2After.summary);

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

    it('should handle ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS', () => {
        const beforeState = reducer(undefined, {
            type: types.ROUTE_DETAIL_FETCH_SUCCESS,
            payload: routeDetailFx
        });

        // pre condition
        expect(beforeState.getIn(['route', 'id'])).to.equal(1785);
        expect(beforeState.getIn(['route', 'vertices', '1', 'venue', 'id'])).to.equal(179);
        expect(beforeState.getIn(['route', 'vertices', '0', 'venue', 'id'])).to.equal(905);
        expect(beforeState.getIn(['route', 'vertices', '1', 'venue', 'venueSocial'])).to.be.null;
        expect(beforeState.getIn(['route', 'vertices', '0', 'venue', 'venueSocial'])).to.be.null;

        const afterState = reducer(beforeState, {
            type: types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS,
            payload: spicesFx
        });

        expect(afterState.getIn(['route', 'vertices', '1', 'venue', 'venueSocial']).
            foursquare_venue.meta.name).to.equal('Skimuseet');

        expect(afterState.getIn(['route', 'vertices', '0', 'venue', 'venueSocial']).
            instagram_venue.data[0].username).to.equal('roger_rolex');
    });
    
    describe('comments', () => {
        it('should handle ROUTE_DETAIL_COMMENTS_FETCH', () => {
            const afterState = reducer(undefined, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH,
            });

            expect(afterState.get('isFetchingComments')).to.equal(true);
            expect(afterState.get('commentsError')).to.be.null;
        });

        it('should handle ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS', () => {
            const initialState = reducer(undefined, {
                type: types.ROUTE_DETAIL_FETCH_SUCCESS,
                payload: routeFxt
            });

            const beforeState = reducer(initialState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH,
            });

            const afterState = reducer(beforeState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS,
                payload: commentsFxt
            });

            expect(afterState.get('isFetchingComments')).to.equal(false);
            expect(afterState.get('commentsError')).to.be.null;
            const comments = afterState.getIn(['route', 'comments']);
            expect(comments.size).to.equal(2);
            expect(List.isList(comments)).to.be.true;
            expect(afterState.getIn(['route', 'comments', '0', 'username'])).to.equal('alexkanov');

            // verify route is still chill
            expect(afterState.getIn(['route', 'id'])).to.equal(1780);
        });

        it('should handle ROUTE_DETAIL_COMMENTS_FETCH_FAIL', () => {
            const initialState = reducer(undefined, {
                type: types.ROUTE_DETAIL_FETCH_SUCCESS,
                payload: routeFxt
            });

            const beforeState = reducer(initialState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH,
            });

            const afterState = reducer(beforeState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH_FAIL,
                error: {
                    message: 'Failed Ass!!',
                    data: {}
                }
            });

            expect(afterState.get('isFetchingComments')).to.equal(false);
            expect(afterState.get('commentsError').message).to.equal('Failed Ass!!');
        });

        it('should handle add comments', () => {
            const initialState = reducer(undefined, {
                type: types.ROUTE_DETAIL_FETCH_SUCCESS,
                payload: routeFxt
            });

            const beforeState = reducer(initialState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS,
                payload: {
                    _embedded: {
                        comments: []
                    }
                }
            });

            const payload = {
                username: 'Luke',
                image: '/skywalker.jpg',
                id: 253,
                user_id: 1337,
                route_id: 1780,
                text: 'I am your son.',
                created: '2016-03-19T08:37:45.531Z'
            }

            const afterState = reducer(beforeState, {
                type: types.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS,
                payload
            });

            const comments = afterState.getIn(['route', 'comments']);

            expect(comments.size).to.equal(1);
            expect(List.isList(comments)).to.be.true;
            expect(afterState.getIn(['route', 'comments', '0', 'image'])).to.equal(payload.image);
            expect(afterState.getIn(['route', 'comments', '0', 'text'])).to.equal(payload.text);
        });

        it('should handle add fail', () => {
            const initialState = reducer(undefined, {
                type: types.ROUTE_DETAIL_FETCH_SUCCESS,
                payload: routeFxt
            });

            const beforeState = reducer(initialState, {
                type: types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS,
                payload: commentsFxt
            });

            const afterState = reducer(beforeState, {
                type: types.ROUTE_DETAIL_COMMENTS_ADD_FAIL,
                error: {
                    message: 'Failed to post route'
                }
            });

            const comments = afterState.getIn(['route', 'comments']);

            expect(comments.size).to.equal(2);
            expect(List.isList(comments)).to.be.true;
            expect(afterState.get('commentsError').message).to.equal('Failed to post route')
        });
    })
});
