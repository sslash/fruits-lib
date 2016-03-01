import * as types from '../constants/actionTypes';
import Route from '../../models/Route';
import {Map, List, fromJS} from 'immutable';

const initialState = Map({
    isFetching: false,
    items: new List(),
    error: null,
    fetched: false,
    fetchedDeep: false
});


function removeBookmark (state, routeId) {
    const items = state.get('items');
    return items
        .delete(items.findIndex(item => item.get('id') === routeId));
}

export default function reducer (state = initialState, action) {
    if (!Map.isMap(state)) {
        state = fromJS(state);
    }

    switch (action.type) {
        case types.BOOKMARKS_POST:
            const items = state.get('items')
                .push(Map({id: action.bookmark.routeId}));

            return state
                .set('items', items)

                // reset so we have to fetch routes again
                // when we enter user profile
                .set('fetchedDeep', false);

        case types.BOOKMARKS_POST_SUCCESS:
            return state;

        case types.BOOKMARKS_POST_FAIL:

            return state
                .set('items', removeBookmark(state, action.bookmark.routeId))
                .set('error', action.error);

        case types.BOOKMARKS_FETCH:
            return state.set('isFetching', true);

        case types.BOOKMARKS_FETCH_SUCCESS:
            return state
                .merge({
                    isFetching: false,
                    fetched: true,
                    fetchedDeep: true,
                    items: List(action.payload.map(Route.mapper))
                });

        case types.BOOKMARKS_FETCH_FAIL:
            return state
                .set('error', action.error);

        case types.BOOKMARKS_IDS_FETCH:
            return state
                .set('isFetching', true);

        case types.BOOKMARKS_IDS_FETCH_SUCCESS:
            return state
                .merge({
                    isFetching: false,
                    fetched: true,
                    fetchedDeep: false,
                    items: List(action.payload.map(id => Map({id})))
                });

        case types.BOOKMARKS_IDS_FETCH_FAIL:
            return state
                .set('error', action.error);

        case types.BOOKMARKS_DELETE:
            return state
                .set('items', removeBookmark(state, action.bookmark.routeId));

        default:
            return state;
    }
}
