import {expect} from 'chai';
import reducer from '../publicUserProfileReducer';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';
import successFxt from '../../../../test/fixtures/PUBLIC_USER_FETCH_SUCCESS';

describe('user reducer', () => {
    it('should handle PUBLIC_USER_FETCH', () => {
        const params = {username: 'Mike'};
        const state = reducer(undefined, {
            type: types.PUBLIC_USER_FETCH,
            meta: params
        });

        expect(state.get('user').get('username')).to.equal(params.username);
        expect(state.get('isFetching')).to.be.true;
        expect(state.get('error')).to.be.null;
    });

    it('should handle PUBLIC_USER_FETCH_SUCCESS', () => {
        const params = {username: 'Michaelusen'};
        const state = reducer(undefined, {
            type: types.PUBLIC_USER_FETCH,
            meta: params
        });

        const afterState = reducer(state, {
            type: types.PUBLIC_USER_FETCH_SUCCESS,
            payload: successFxt
        });

        const user = successFxt._embedded.users[0];
        expect(afterState.getIn(['user', 'username'])).to.equal(user.username);
        expect(afterState.getIn(['user', 'id'])).to.equal(user.id);
        expect(afterState.getIn(['user', 'description'])).to.equal(user.description);
        expect(afterState.get('isFetching')).to.be.false;
        expect(afterState.get('error')).to.be.null;
    });

    it('should handle PUBLIC_USER_FETCH_SUCCESS with loggedInUser', () => {
        const user = successFxt._embedded.users[0];

        const meta = {
            username: 'Michaelusen',
            loggedInUserId: user.id
        };

        const state = reducer(undefined, {
            type: types.PUBLIC_USER_FETCH,
            meta
        });

        const afterState = reducer(state, {
            type: types.PUBLIC_USER_FETCH_SUCCESS,
            payload: successFxt,
            meta
        });

        expect(afterState.getIn(['user', 'username'])).to.equal(user.username);
        expect(afterState.getIn(['user', 'id'])).to.equal(user.id);
        expect(afterState.getIn(['user', 'description'])).to.equal(user.description);
        expect(afterState.get('isFetching')).to.be.false;
        expect(afterState.get('error')).to.be.null;
        expect(afterState.get('isLoggedInUser')).to.be.true
    });

    it('should handle PUBLIC_USER_FETCH_SUCCESS with loggedInUser that is not the user', () => {
        const user = successFxt._embedded.users[0];

        const meta = {
            username: 'Michaelusen',
            loggedInUserId: user.id + 120
        };

        const state = reducer(undefined, {
            type: types.PUBLIC_USER_FETCH,
            meta
        });

        const afterState = reducer(state, {
            type: types.PUBLIC_USER_FETCH_SUCCESS,
            payload: successFxt,
            meta
        });

        expect(afterState.getIn(['user', 'username'])).to.equal(user.username);
        expect(afterState.getIn(['user', 'id'])).to.equal(user.id);
        expect(afterState.getIn(['user', 'description'])).to.equal(user.description);
        expect(afterState.get('isFetching')).to.be.false;
        expect(afterState.get('error')).to.be.null;
        expect(afterState.get('isLoggedInUser')).to.be.false
    });

    it('should handle PUBLIC_USER_FETCH_FAIL', () => {
        const errorData = {
            message: "something went wrong",
            data: { }
        };

        const params = {username: 'Michaelusen'};
        const state = reducer(undefined, {
            type: types.PUBLIC_USER_FETCH,
            meta: params
        });

        const afterState = reducer(state, {
            type: types.PUBLIC_USER_FETCH_FAIL,
            payload: errorData,
            error: errorData
        });

        expect(afterState.get('user')).to.be.null;
        expect(afterState.getIn(['error', 'message'])).to.equal(errorData.message);
        expect(afterState.get('isFetching')).to.be.false;
    });
});
