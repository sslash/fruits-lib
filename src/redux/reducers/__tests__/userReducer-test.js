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

    it('should handle UPDATE_USER_ROUTE', () => {
        const beforeState = addNewRoute(1337);
        expect(beforeState.get('routes')[0].get('isPrivate')).to.equal(true);

        const afterState = reducer(beforeState, {
            type: types.UPDATE_USER_ROUTE,
            meta: {id: 1337, isPrivate: false, isDraft: true, active: true}
        });

        expect(afterState.get('routes')[0].get('isPrivate')).to.equal(false);
        expect(afterState.get('routes')[0].get('isDraft')).to.equal(true);
        expect(afterState.get('routes')[0].get('active')).to.equal(true);
    });

    it('should handle UPDATE_USER_ROUTE when there are multiable routes', () => {
        const beforeState = addNewRoute(1337);
        const beforeState1 = addNewRoute(1338, beforeState);


        expect(beforeState1.get('routes').length).to.equal(2);

        const afterState = reducer(beforeState1, {
            type: types.UPDATE_USER_ROUTE,
            meta: {id: 1337, isPrivate: false, isDraft: true, active: true}
        });

        expect(afterState.get('routes')[0].get('isPrivate')).to.equal(false);
        expect(afterState.get('routes')[0].get('isDraft')).to.equal(true);
        expect(afterState.get('routes')[0].get('active')).to.equal(true);

        expect(afterState.get('routes')[1].get('isPrivate')).to.equal(true);
        expect(afterState.get('routes')[1].get('isDraft')).to.equal(false);
        expect(afterState.get('routes')[1].get('active')).to.equal(false);
    });
});

function addNewRoute (id, prevState = undefined) {
    const route = new Route({
        title: 'yeah broh',
        id,
        isPrivate: true,
        isDraft: false,
        active: false
    });
    return reducer(prevState, {
        type: types.USER_ROUTE_ADD,
        meta: { route }
    });
}
