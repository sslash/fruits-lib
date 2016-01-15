import * as types from '../constants/actionTypes';
import routeDetailReducer from './routeDetailReducer';
import Route from '../../models/Route';
import {Map, List, Iterable} from 'immutable';

const initialState = Map({
    route: new Route(),

    // general errors in create
    errors: null,

    // show loading spinner
    postingRoute: false,

    // buckets to select from in create
    buckets: {
        fetched: false,
        items: []
    },
    uploadingPhoto: false,
    finito: false,

    donePressed: false,
    pendingDoneActions: List()
});


function _routeHasBucket (state, bucketId) {
    return state.getIn(['route', 'buckets']).includes(bucketId);
}


export default function reducer (state = initialState, action = {}) {

    if (!Iterable.isIterable(state)) {
        state = initialState;
    };

    switch (action.type) {

        // shared with routeDetail,
        // used in editRoute
        // havent found another way then copying
        case types.CREATE_ROUTE_FETCH:
            return state.set('isFetching', true);

        case types.CREATE_ROUTE_FETCH_SUCCESS:

            return state
                .set('route', Route.mapper(action.payload))
                .set('isFetching', false)
                .set('error', false);

        case types.CREATE_ROUTE_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        case types.ROUTE_CREATE_INIT:
            return state.set('route', new Route(action.route));

        case types.CREATE_ROUTE_SET_TITLE:
            return state.setIn(['route', 'title'], action.text);

        case types.CREATE_ROUTE_SET_ERRORS:
            return state.set('errors', action.errors);

        case types.CREATE_ROUTE_TOGGLE_BUCKET:

            if (_routeHasBucket(state, action.bucket.id)) {
                const index = state.getIn(['route', 'buckets']).indexOf(action.bucket.id);
                return state.updateIn(['route', 'buckets'], buckets => buckets.delete(index));

            } else {
                return state.updateIn(['route', 'buckets'], buckets => buckets.push(action.bucket.id));
            }

        case types.POST_ROUTE:
            return state.merge({
                postingRoute: true,
                failedPostRoute: null,

                // eager merge in the created route
                route: new Route(action.meta),
                pendingDoneActions: state.get('pendingDoneActions').push(types.POST_ROUTE)
            });

        case types.POST_ROUTE_FAIL:
            return state.merge({
                postingRoute: false,
                failedPostRoute: action.error
            });

        case types.POST_ROUTE_SUCCESS:
            return state.updateIn(['route'], route => {
                return route.merge(action.payload);
            })
            .set('postingRoute', false)
            .set('pendingDoneActions',
                state.get('pendingDoneActions').pop())

        case types.CREATE_ROUTE_UPDATE:

            // optimistic update.
            // can be rolled back by storing
            // current state
            return state.mergeDeep({
                route: action.meta
            });

        case types.FETCH_BUCKETS_SUCCESS:
            return state
                .set('buckets', {
                    fetched: true,
                    items: action.payload._embedded.bucket
                });

        case types.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS:
            return Route.updateVertice(state, {
                ...action.payload
            });

        case types.ADD_VERTICE_TO_ROUTE:
            const vert = action.meta;

            const newState = state
                .updateIn(['route', 'vertices'], v => v.push(vert))
                .set('pendingDoneActions',
                    state.get('pendingDoneActions').push(types.ADD_VERTICE_TO_ROUTE))

            if (vert.get('city') && vert.getIn(['city', 'long_name'])) {
                return newState.setIn(['route', 'city'],
                    vert.getIn(['city', 'long_name']).toLowerCase());
            } else {
                return newState;
            }

        case types.ADD_VERTICE_TO_ROUTE_SUCCESS:

            // ATM we dont care about these
            // action.payload.venue.venueSocial
            const vertData = Object.assign({}, action.payload);
            return Route.updateVertice(state, vertData)
                .set('pendingDoneActions',
                    state.get('pendingDoneActions').pop())

        case types.CREATE_ROUTE_VERTICE_DELETE:

                // ATM we dont care about these
                // action.payload.venue.venueSocial
                // return Route.updateVertice(state, vertData);
            const index = state.getIn(['route', 'vertices'])
                .findIndex(v => v.get('id') === action.meta.id);

            // delete vertice
            const verts = state.getIn(['route', 'vertices']).delete(index);

            return state.setIn(['route', 'vertices'], verts);

        case types.ADD_VERTICE_TO_ROUTE_FAIL:
            // TODO: reverse the vertice
            return state.set('failedToAddSpot', action.error);

        case types.VERTICE_UPDATE_SUCCESS:
            return Route.updateVertice(state, action.meta);

        // TODO: handle failure
        case types.VERTICE_UPDATE_FAIL:
            return state.set('failedToUpdateSpot', action.error);

        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD:
            return state.set('uploadingPhoto', true)
                .set('pendingDoneActions',
                    state.get('pendingDoneActions').push(types.CREATE_ROUTE_VERTICE_PHOTO_ADD));

        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL:
            return state.set('uploadingPhoto', false)
                .set('pendingDoneActions', state.get('pendingDoneActions').pop())

        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS:
            const vertice = {
                id: action.meta.verticeId,
                photo: {url: action.payload.url}
            };

            return Route.addVerticePhoto(state, vertice)
                .set('uploadingPhoto', false)
                .set('pendingDoneActions', state.get('pendingDoneActions').pop())

        case types.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD:
            return Route.addVerticePhoto(state, action.meta);

        case types.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE:
            return Route.removeVerticePhoto(state, action.meta);


        case types.VERTICE_REORDER:
            const updatedListOfVerticeIds = action.meta.reorderList;
            const route = state.get('route');
            const vertices = route.get('vertices');

            // // swap the images array
            const relocatedVertices = updatedListOfVerticeIds.map((verticeId, sortorder) => {
                return vertices
                // find this vertice
                .find(vertice => vertice.get('id') === verticeId)

                // update sortorder
                .set('sortorder', sortorder + 1);
            });

            return state.set('route', route.set('vertices', List(relocatedVertices)));

        case types.ROUTE_FINISH:
            return state.set('donePressed', true);
        case types.ROUTE_FINISH_SUCCESS:
            return state.set('finito', true);

        case types.CREATE_ROUTE_RESET:
            return initialState;

        default:
            return state;
    }
}
