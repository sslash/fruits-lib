import {expect} from 'chai';
import reducer from '../userReducer';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';

describe('user reducer', () => {

    // it('should handle USER_ROUTE_ADD', () => {
    //     const route = new Route({title: 'yeah broh'});
    //     const afterState = reducer(undefined, {
    //         type: types.USER_ROUTE_ADD,
    //         meta: {route}
    //     });
    //
    //     expect(afterState.get('routes').length).to.equal(1);
    //     expect(afterState.get('routes')[0]).to.deep.equal(route);
    // });

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
