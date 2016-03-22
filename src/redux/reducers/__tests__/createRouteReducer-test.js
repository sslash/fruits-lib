import {expect} from 'chai';
import reducer from '../createRouteReducer';
import * as types from '../../constants/actionTypes';
import Vertice from '../../../models/Vertice';
import verticeFxt from './verticeFixture';
import fetchBucketsFxt from '../../../../test/fixtures/FETCH_BUCKETS_SUCCESS';
import createRouteBucketSuccesFxt from '../../../../test/fixtures/CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS';
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
            payload: verticeFxt
        });

        const vert = afterState.getIn(['route', 'vertices']).get(0).toJSON();
        expect(vert.id).to.equal(verticeFxt.id);
        expect(vert.sortorder).to.equal(verticeFxt.sortorder);
        expect(vert.description).to.equal(verticeFxt.description);
        expect(vert.title).to.equal(verticeFxt.title);
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

    it('should handle CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS', () => {
        const beforeState = reducer(null, {
            type: types.FETCH_BUCKETS_SUCCESS,
            payload: fetchBucketsFxt
        });

        expect(beforeState.get('buckets').items.length).to.equal(24);

        const afterState = reducer(beforeState, {
            type: types.CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS,
            payload: createRouteBucketSuccesFxt
        });

        expect(afterState.get('buckets').items.length).to.equal(25);
        expect(afterState.get('buckets').items[24].name).to.equal(createRouteBucketSuccesFxt.name);
        expect(afterState.getIn(['route', 'buckets']).size).to.equal(1);
        expect(afterState.getIn(['route', 'buckets', '0'])).to.equal(createRouteBucketSuccesFxt.id);
    });

    it('should handle VERTICE_UPDATE_BUCKETS', () => {
        const title = "IT WORKS";

        const beforeState = reducer(undefined, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: new Vertice().set('title', title)
        });

        const afterState = reducer(beforeState, {
            type: types.ADD_VERTICE_TO_ROUTE_SUCCESS,
            payload: verticeFxt
        });
        const afterTagAddedState = reducer(beforeState, {
            type: types.VERTICE_UPDATE_BUCKETS_SUCCESS,
            payload: { name: 'yolo', id: 1337 },
            meta: { id: 942 }
        });
        const verticeTags = afterTagAddedState.getIn(['route', 'vertices', 0, 'buckets']);
        expect(verticeTags.get(0).name).to.equal('yolo');
        expect(verticeTags.get(0).id).to.equal(1337);
        expect(verticeTags.size).to.equal(1);
    });

    it('should handle VERTICE_DELETE_BUCKETS_SUCCESS', () => {
        const title = "IT WORKS";
        const bucket = { name: 'yolo', id: 1337 };
        const beforeState = reducer(undefined, {
            type: types.ADD_VERTICE_TO_ROUTE,
            meta: new Vertice().set('title', title)
        });

        const afterState = reducer(beforeState, {
            type: types.ADD_VERTICE_TO_ROUTE_SUCCESS,
            payload: verticeFxt
        });

        const afterTagAddedState = reducer(beforeState, {
            type: types.VERTICE_UPDATE_BUCKETS_SUCCESS,
            payload: bucket,
            meta: { id: 942 }
        });
        const afterTagDeletedState = reducer(afterTagAddedState, {
            type: types.VERTICE_DELETE_BUCKETS_SUCCESS,
            meta: { id: 942, bucketId: 1337 }
        });
        const verticeTags = afterTagDeletedState.getIn(['route', 'vertices', 0, 'buckets']);
        expect(verticeTags.size).to.equal(0);
    });

    it('should handle ROUTES_CREATE_TOGGLE_DRAFT', () => {
        const afterState = reducer(undefined, {
            type: types.ROUTES_CREATE_TOGGLE_DRAFT,
            payload: verticeFxt
        });
        const draft = afterState.get('draft');
        expect(draft.get('posting')).to.equal(true);
        expect(draft.get('error')).to.equal(false);

    });

    it('should handle ROUTES_CREATE_TOGGLE_DRAFT_SUCCESS', () => {
        const beforeState = reducer(undefined, {
            type: types.ROUTES_CREATE_TOGGLE_DRAFT,
            payload: verticeFxt
        });

        const afterState = reducer(beforeState, {
            type: types.ROUTES_CREATE_TOGGLE_DRAFT_SUCCESS,
            payload: verticeFxt
        });
        const draft = afterState.get('draft');
        expect(draft.get('posting')).to.equal(false);
        expect(draft.get('error')).to.equal(false);
    });

    it('should handle ROUTES_CREATE_TOGGLE_DRAFT_FAIL', () => {
        const beforeState = reducer(undefined, {
            type: types.ROUTES_CREATE_TOGGLE_DRAFT,
        });

        const afterState = reducer(beforeState, {
            type: types.ROUTES_CREATE_TOGGLE_DRAFT_FAIL,
        });
        const draft = afterState.get('draft');
        expect(draft.get('posting')).to.equal(false);
        expect(draft.get('error')).to.equal(true);
    });

});
