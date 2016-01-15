import {expect} from 'chai';
import reducer from '../createRouteReducer';
import * as types from '../../constants/actionTypes';
import Vertice from '../../../models/Vertice';
import verticeFixture from './verticeFixture';
import {List} from 'immutable';

describe('create route reducer', () => {

    it('should handle ADD_VERTICE_TO_ROUTE', () => {
        const title = 'yolo broh.';
        const newState = reducer(undefined, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: new Vertice().set('title', title)
        });

        expect(newState.getIn(['route', 'vertices']).count()).to.equal(1);
        expect(newState.getIn(['route', 'vertices']).get(0).title).to.equal(title);
    });

    it('should handle ADD_VERTICE_TO_ROUTE_SUCCESS', () => {

        const title = 'yolo broh.';
        const beforeState = reducer(undefined, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: new Vertice().set('title', title)
        });

        const afterState = reducer(beforeState, {
            type: types.ADD_VERTICE_TO_ROUTE_SUCCESS,
            payload: verticeFixture
        });

        const vert = afterState.getIn(['route', 'vertices']).get(0).toJSON();
        expect(vert.id).to.equal(verticeFixture.id);
        expect(vert.sortorder).to.equal(verticeFixture.sortorder);
        expect(vert.description).to.equal(verticeFixture.description);
        expect(vert.title).to.equal(verticeFixture.title);
    });

    it('should handle VERTICE_REORDER', () => {
        const verts = [
            new Vertice({sortorder: 1, id: 1337}),
            new Vertice({sortorder: 2, id: 1338}),
            new Vertice({sortorder: 3, id: 1339})
        ];

        let state = reducer(undefined, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: verts[0]
        });
        state = reducer(state, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: verts[1]
        });
        const beforeState = reducer(state, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: verts[2]
        });

        // shuffle first
        const reorderList = [1338, 1337, 1339];
        const afterState = reducer(beforeState, {
            type: types.VERTICE_REORDER,
            meta: {reorderList}
        });

        const v1 = afterState.getIn(['route', 'vertices']).find(v => v.get('id') === 1337);
        const v2 = afterState.getIn(['route', 'vertices']).find(v => v.get('id') === 1338);
        const v3 = afterState.getIn(['route', 'vertices']).find(v => v.get('id') === 1339);

        expect(v1.get('sortorder')).to.equal(2);
        expect(v2.get('sortorder')).to.equal(1);
        expect(v3.get('sortorder')).to.equal(3);

        // shuffle second
        const reorderList2 = [1337, 1339, 1338];
        const afterState2 = reducer(afterState, {
            type: types.VERTICE_REORDER,
            meta: {reorderList: reorderList2}
        });

        const v21 = afterState2.getIn(['route', 'vertices']).find(v => v.get('id') === 1337);
        const v22 = afterState2.getIn(['route', 'vertices']).find(v => v.get('id') === 1338);
        const v23 = afterState2.getIn(['route', 'vertices']).find(v => v.get('id') === 1339);

        expect(v21.get('sortorder')).to.equal(1);
        expect(v22.get('sortorder')).to.equal(3);
        expect(v23.get('sortorder')).to.equal(2);

        // shuffle ends
        const reorderList3 = [1339, 1338, 1337];
        const afterState3 = reducer(afterState2, {
            type: types.VERTICE_REORDER,
            meta: {reorderList: reorderList3}
        });

        const v31 = afterState3.getIn(['route', 'vertices']).find(v => v.get('id') === 1337);
        const v32 = afterState3.getIn(['route', 'vertices']).find(v => v.get('id') === 1338);
        const v33 = afterState3.getIn(['route', 'vertices']).find(v => v.get('id') === 1339);

        expect(v31.get('sortorder')).to.equal(3);
        expect(v32.get('sortorder')).to.equal(2);
        expect(v33.get('sortorder')).to.equal(1);

    });
});
