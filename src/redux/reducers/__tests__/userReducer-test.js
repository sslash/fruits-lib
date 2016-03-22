import {expect} from 'chai';
import reducer from '../userReducer';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';

describe('user reducer', () => {

    it('should handle USER_ROUTE_ADD', () => {
        const route = new Route({title: 'yeah broh'});
        const afterState = reducer(undefined, {
            type: types.USER_ROUTE_ADD,
            meta: {route}
        });

        expect(afterState.get('routes').length).to.equal(1);
        expect(afterState.get('routes')[0]).to.deep.equal(route);
    });

    it('should set loggingIn to false, when signup fails', () => {
        const errorMessage = 'fail';
        const afterState = reducer(undefined, {
            type: types.SIGNUP_FAIL,
            error: {message: errorMessage}
        });
        expect(afterState.get('loggingIn')).to.equal(false);
        expect(afterState.get('signupError').message).to.equal(errorMessage);
    });

    it('should set loggingIn to true when signing up', () => {
        const afterState = reducer(undefined, {
            type: types.SIGNUP,
        });
        expect(afterState.get('loggingIn')).to.equal(true);
    });

    it('should handle USER_ROUTE_MAKE_PUBLIC_SUCCESS', () => {
        const route = new Route({title: 'yeah broh', id: 1337, isPrivate: true});
        const beforeState = reducer(undefined, {
            type: types.USER_ROUTE_ADD,
            meta: {route}
        });

        expect(beforeState.get('routes')[0].get('isPrivate')).to.equal(true);

        const afterState = reducer(beforeState, {
            type: types.USER_ROUTE_MAKE_PUBLIC_SUCCESS,
            meta: {routeId: 1337}
        });
        expect(afterState.get('routes')[0].get('isPrivate')).to.equal(false);
    });

    it('should handle USER_ROUTE_MAKE_PRIVATE_SUCCESS', () => {
        const route = new Route({title: 'yeah broh', id: 1337, isPrivate: false});
        const beforeState = reducer(undefined, {
            type: types.USER_ROUTE_ADD,
            meta: {route}
        });

        expect(beforeState.get('routes')[0].get('isPrivate')).to.equal(false);

        const afterState = reducer(beforeState, {
            type: types.USER_ROUTE_MAKE_PRIVATE_SUCCESS,
            meta: {routeId: 1337}
        });
        expect(afterState.get('routes')[0].get('isPrivate')).to.equal(true);
    });

    it('should handle USER_DELETE_ROUTE_SUCCESS', () => {
        const route = new Route({title: 'yeah broh', id: 1337, isPrivate: true, isDeleted: false});
        const beforeState = reducer(undefined, {
            type: types.USER_ROUTE_ADD,
            meta: {route}
        });
        expect(beforeState.get('routes')[0].get('isDeleted')).to.equal(false);

        const afterState = reducer(beforeState, {
            type: types.USER_DELETE_ROUTE_SUCCESS,
            meta: {routeId: 1337}
        });
        expect(afterState.get('routes')[0].get('isDeleted')).to.equal(true);
    });

});
