import {expect} from 'chai';
import * as createRouteActions from '../createRouteActions';
import * as types from '../../constants/actionTypes';

describe('actions', () => {
    it('should create an action to set route title', () => {
        const text = 'Super title';

        const expectedAction = {
            type: types.CREATE_ROUTE_SET_TITLE,
            text
        };
        expect(createRouteActions.setTitle(text)).to.deep.equal(expectedAction);
    });
});
