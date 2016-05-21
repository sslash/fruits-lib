// TODO call on a reducer and create
import {expect} from 'chai';
import reducer from '../userRoutesReducer';
import * as types from '../../constants/actionTypes';
import Route from '../../../models/Route';

function fetchRoutesSuccesses (ids, prevState = undefined) {
    const routes = ids.reduce((total, curr) => {
        total.push({
            title: 'yeah broh',
            id: curr,
            isPrivate: true,
            isDraft: false,
            active: false
        });
        return total;
    }, []);

    return reducer(prevState, {
        type: types.FETCH_USER_ROUTES_SUCCESS,
        payload: {
            _embedded: {
                routes
            }
        }
    });
}

describe('userRoute reducer', () => {

    it('should handle UPDATE_USER_ROUTE', () => {
        const beforeState = fetchRoutesSuccesses([1337]);
        expect(beforeState.get('routes').get(0).get('isPrivate')).to.equal(true);

        const afterState = reducer(beforeState, {
            type: types.UPDATE_USER_ROUTE,
            meta: {id: 1337, isPrivate: false, isDraft: true, active: true}
        });

        expect(afterState.get('routes').get(0).get('isPrivate')).to.equal(false);
        expect(afterState.get('routes').get(0).get('isDraft')).to.equal(true);
        expect(afterState.get('routes').get(0).get('active')).to.equal(true);
    });

    it('should handle UPDATE_USER_ROUTE when there are multiable routes', () => {
        const beforeState = fetchRoutesSuccesses([1337, 1338]);

        expect(beforeState.get('routes').size).to.equal(2);

        const afterState = reducer(beforeState, {
            type: types.UPDATE_USER_ROUTE,
            meta: {id: 1337, isPrivate: false, isDraft: true, active: true}
        });

        expect(afterState.get('routes').get(0).get('isPrivate')).to.equal(false);
        expect(afterState.get('routes').get(0).get('isDraft')).to.equal(true);
        expect(afterState.get('routes').get(0).get('active')).to.equal(true);

        expect(afterState.get('routes').get(1).get('isPrivate')).to.equal(true);
        expect(afterState.get('routes').get(1).get('isDraft')).to.equal(false);
        expect(afterState.get('routes').get(1).get('active')).to.equal(false);
    });
});
