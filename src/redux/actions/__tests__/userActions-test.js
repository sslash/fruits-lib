import {expect} from 'chai';
import * as userActions from '../userActions';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';

describe('user actions', () => {
    it('should add new route to user', () => {
        const route = new Route();

        const expectedAction = {
            type: types.USER_ROUTE_ADD,
            meta: {route}
        };
        expect(userActions.addNewRouteToUser(route)).to.deep.equal(expectedAction);
    });
});
