import {expect} from 'chai';
import reducer from '../userRoute';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';

describe('userRoute reducer', () => {

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
}
