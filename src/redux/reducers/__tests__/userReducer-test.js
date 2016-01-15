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
});
