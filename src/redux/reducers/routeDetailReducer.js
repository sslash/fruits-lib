import * as types from '../constants/actionTypes';
import {Map, List, fromJS, Iterable} from 'immutable';
import Route from '../../models/Route';
import _isEqual from 'lodash/lang/isEqual';

const initialState = Map({
    isFetching: false,
    route: null,
    directionsMatrix: Map(),
    error: null,
    travelmode: 'WALKING',
    isFetchingComments: false,
    commentsError: null
});

export default function reducer (state = initialState, action) {

    // rehydrated state
    if (!Iterable.isIterable(state)) {
        if (state.route) {
            state = initialState.set('route', Route.mapper(state.route));
        } else {
            state = initialState;
        }
    }

    switch (action.type) {
        case types.ROUTE_DETAIL_FETCH:
            return state.set('isFetching', true);

        case types.TRAVELMODE_CHANGED:
            return state.set('travelmode', action.travelmode)

        case types.ROUTE_DETAIL_FETCH_SUCCESS:

            return initialState
                .set('route', Route.mapper(action.payload))
                .set('isFetching', false)
                .set('error', false);

        case types.ROUTE_DETAIL_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        // TODO: HANDLE UPVOTES RESULT
        case types.UPVOTE_ROUTE_SUCCESS:
            return state
                .setIn(['route', 'likes'], action.payload._embedded.likes);

        case types.UPVOTE_ROUTE_FAIL:
            return state;

        case types.FETCH_DIRECTIONS_MATRIX:
            return state.set('directionsMatrix', Map({
                fetchingDirections: true,
                fetchingDirectionsError: false
            }));

        case types.FETCH_DIRECTIONS_MATRIX_SUCCESS:
            return state.set('directionsMatrix', Map({
                fetchingDirections: false,
                fetchingDirectionsError: false,
                directionsResult: action.payload
            }));
        case types.FETCH_DIRECTIONS_MATRIX_FAIL:
            return state.set('directionsMatrix', Map({
                fetchingDirections: false,
                fetchingDirectionsError: true
            }));


        case types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS:
            return Route.updateVertice(state, {
                ...action.payload
            });

        case types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS:
            const verts = state
                .get('route')
                .updateVenueSocials(action.payload);

            return state.setIn(['route', 'vertices'], verts);

        case types.ROUTE_DETAIL_BOOTSTRAP:
            return state
                .set('route', action.route)
                .set('directionsMatrix', Map());

        case types.VENUES_DIRECTIONS_MATRIX_FETCH:
        return state
            .setIn(['directionsMatrix', 'fetchingDirections'], true)
            .setIn(['directionsMatrix', 'fetchingDirectionsError'], false);

        case types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS:
            if (action.payload.data && action.payload.data.length) {
                let newDirectionsResult;

                if (isNaN(action.index)) {
                    newDirectionsResult = action.payload;

                } else {
                    newDirectionsResult = Object.assign({}, state.getIn(['directionsMatrix', 'directionsResult']));

                    // something has gone wrong. simply return. TODO: logg error
                    if (!newDirectionsResult.data) {
                        console.error(`No directionsResult in VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS`);
                        return state;
                    }

                    newDirectionsResult.data = newDirectionsResult.data.map((data, index) => {
                        return index === action.index ?
                            action.payload.data[0] : data;
                    });
                }

            return state.set('directionsMatrix', Map({
                fetchingDirections: false,
                fetchingDirectionsError: false,
                directionsResult: newDirectionsResult
            }));

        } else {
            return state;
        }


        case types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL:
            return state
                .setIn(['directionsMatrix', 'fetchingDirections'], false)
                .setIn(['directionsMatrix', 'fetchingDirectionsError'], true);

        case types.ROUTE_DETAIL_COMMENTS_FETCH:
            return state
                .set('isFetchingComments', true)
                .set('commentsError', null);

        case types.ROUTE_DETAIL_COMMENTS_FETCH_FAIL:
            return state
                .set('isFetchingComments', false)
                .set('commentsError', action.error);

        case types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS:
            return state
                .set('isFetchingComments', false)
                .setIn(['route', 'comments'],
                    new List(
                        action.payload._embedded.comments
                            .map((comment) => fromJS(comment))
                    ));

        case types.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS:
            const comments = state.getIn(['route', 'comments']);
            const newComments = comments.push(fromJS(action.payload));
            return state.setIn(['route', 'comments'], newComments);

        case types.ROUTE_DETAIL_COMMENTS_ADD_FAIL:
        case types.ROUTE_DETAIL_COMMENTS_DELETE_FAIL:
            return state.set('commentsError', action.error);


        case types.ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS:
            const comnts = state.getIn(['route', 'comments']);
            const deleteIndex = comnts.findIndex(c => c.get('id') === action.commentId);

            return state.setIn(['route', 'comments'], comnts.delete(deleteIndex));

        default:
            return state;
    }
}
