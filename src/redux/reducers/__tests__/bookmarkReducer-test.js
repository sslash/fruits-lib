import {expect} from 'chai';
import reducer from '../bookmarksReducer';
import * as types from '../../constants/actionTypes';
import successFixture from '../../../../test/fixtures/BOOKMARKS_FETCH_SUCCESS';
import {Map, List} from 'immutable';

describe('city reducer', () => {

    describe('fetch', () => {
        it('should handle BOOKMARKS_FETCH', () => {

            const beforeState = reducer(undefined, {});

            expect(beforeState.get('isFetching')).to.equal(false);
            expect(beforeState.get('fetched')).to.equal(false);

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH
            });
            expect(afterState.get('isFetching')).to.equal(true);
            expect(beforeState.get('fetched')).to.equal(false);
        });

        it('should handle BOOKMARKS_FETCH_SUCCESS', () => {

            const beforeState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH_SUCCESS,
                payload: successFixture
            });

            expect(afterState.get('isFetching')).to.equal(false);
            expect(afterState.get('fetched')).to.equal(true);
            expect(afterState.get('fetchedDeep')).to.equal(true);
            expect(afterState.get('error')).to.be.a('null');
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(1);
            expect(afterState.get('items').get(0).get('id')).to.equal(711);
            expect(afterState.get('items').get(0).get('title')).to.equal(successFixture[0].title);
        });

        it('should handle empty BOOKMARKS_FETCH_SUCCESS', () => {

            const beforeState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH_SUCCESS,
                payload: []
            });

            expect(afterState.get('isFetching')).to.equal(false);
            expect(afterState.get('fetched')).to.equal(true);
            expect(afterState.get('fetchedDeep')).to.equal(true);
            expect(afterState.get('error')).to.be.a('null');
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(0);
        });

        it('should handle BOOKMARKS_IDS_FETCH', () => {

            const beforeState = reducer(undefined, {});

            expect(beforeState.get('isFetching')).to.equal(false);
            expect(beforeState.get('fetched')).to.equal(false);

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_IDS_FETCH
            });
            expect(afterState.get('isFetching')).to.equal(true);
            expect(beforeState.get('fetched')).to.equal(false);
        });

        it('should handle BOOKMARKS_IDS_FETCH_SUCCESS', () => {

            const beforeState = reducer(beforeState, {
                type: types.BOOKMARKS_IDS_FETCH
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_IDS_FETCH_SUCCESS,
                payload: [711]
            });

            expect(afterState.get('isFetching')).to.equal(false);
            expect(afterState.get('fetched')).to.equal(true);
            expect(afterState.get('fetchedDeep')).to.equal(false);
            expect(afterState.get('error')).to.be.a('null');
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(1);
            expect(afterState.get('items').get(0).get('id')).to.equal(711);
        });

        it('should handle BOOKMARKS_FETCH_SUCCESS after BOOKMARKS_IDS_FETCH_SUCCESS', () => {

            const beforeState = reducer(beforeState, {
                type: types.BOOKMARKS_IDS_FETCH
            });

            const beforeChange = reducer(beforeState, {
                type: types.BOOKMARKS_IDS_FETCH_SUCCESS,
                payload: [711]
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_FETCH_SUCCESS,
                payload: successFixture
            });

            expect(afterState.get('isFetching')).to.equal(false);
            expect(afterState.get('fetched')).to.equal(true);
            expect(afterState.get('fetchedDeep')).to.equal(true);
            expect(afterState.get('error')).to.be.a('null');
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(1);
            expect(afterState.get('items').get(0).get('id')).to.equal(711);
            expect(afterState.get('items').get(0).get('title')).to.equal(successFixture[0].title);

        });
    });

    describe('post', () => {

        it('should handle BOOKMARKS_POST', () => {
            const bookmark = Map({ routeId: 1337 });
            const afterState = reducer(undefined, {
                type: types.BOOKMARKS_POST,
                route: bookmark
            });
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(1);
            expect(afterState.get('fetchedDeep')).to.equal(false);
            expect(afterState.get('items').get(0).get('routeId')).to.equal(1337);
        });

        it('should handle BOOKMARKS_POST after deep bookmarks exist', () => {
            const bookmark = Map({ routeId: 1337 });

            const beforeState = reducer(undefined, {
                type: types.BOOKMARKS_FETCH_SUCCESS,
                payload: successFixture
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_POST,
                route: bookmark
            });
            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(2);
            expect(afterState.get('items').last().get('routeId')).to.equal(1337);
        });

        it('should handle BOOKMARKS_POST_FAIL', () => {
            const bookmark = Map({ routeId: 1337 });
            const beforeState = reducer(undefined, {
                type: types.BOOKMARKS_POST,
                route: bookmark
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_POST_FAIL,
                bookmark: bookmark.toJS(),
                error: {message: 'Something went wrong!'}
            });

            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(0);
            expect(afterState.get('error').message).to.equal('Something went wrong!');
        });
    });

    describe('delete', () => {

        it('should handle BOOKMARKS_DELETE', () => {
            const bookmark = Map({ id: 1337 });

            const beforeState = reducer(undefined, {
                type: types.BOOKMARKS_POST,
                route: bookmark
            });

            const afterState = reducer(beforeState, {
                type: types.BOOKMARKS_DELETE,
                route: bookmark
            });

            expect(List.isList(afterState.get('items'))).to.be.true;
            expect(afterState.get('items').size).to.equal(0);
        });
    });
});
