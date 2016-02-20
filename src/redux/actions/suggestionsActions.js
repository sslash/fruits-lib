import * as actions from '../constants/actionTypes';
import {fromJS} from 'immutable';

export function clear () {
    return { type: actions.SUGGESTIONS_CLEAR };
}

export function fetch (params) {
    return {
        types: [
            actions.SUGGESTIONS_FETCH,
            actions.SUGGESTIONS_FETCH_SUCCESS,
            actions.SUGGESTIONS_FETCH_FAIL
        ],
        promise: ({req}) => req.get('/venues/venueTips', { params }),
        meta: params
    };
}

export function fetchDetail (spot) {
    const params = {
        sourceId: spot.sourceId,
        source: spot.source,
        lat: spot.geometry.lat,
        lng: spot.geometry.lng,
        name: spot.name
    };

    const suggestion = fromJS(spot);

    return {
        types: [
            actions.SUGGESTIONS_DETAIL_FETCH,
            actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS,
            actions.SUGGESTIONS_DETAIL_FETCH_FAIL
        ],
        promise: ({ req }) => req.get(`/venues/getSpicesByGEOandName`, { params }),
        suggestion
    };
}
