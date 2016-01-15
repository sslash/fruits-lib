import {expect} from 'chai';
import reducer from '../userReducer';
import * as types from '../../constants/actionTypes';
import * as authFixture from './authFixture';

describe('authentication reducer', () => {

    it('should handle LOGIN', () => {

        const newState = reducer(undefined, {
            type: types.LOGIN
        });

        expect(newState.get('loggingIn')).to.be.true;
    });

    it('should handle LOGIN_SUCCESS', () => {

        // login pre
        const newState = reducer(undefined, {
            type: types.LOGIN
        });

        // login success
        const successState = reducer(newState, {
            type: types.LOGIN_SUCCESS,
            payload: authFixture.successReturn
        });

        expect(successState.get('loggingIn')).to.be.false;
        expect(successState.getIn(['user', 'id'])).to.equal(25);
        expect(successState.getIn(['user', 'mail'])).to.equal('michaelgunnulfsen@gmail.com');
        expect(successState.get('token')).to.exist;
    });
});
