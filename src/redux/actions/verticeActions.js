import * as actions from '../constants/actionTypes';

export function mapPressed (photo) {
    return { type: actions.VERTICE_MAP_PRESSED};
}

export function changeTravelOption (venueIds, travelMode) {
    return {
        types: [
            actions.CHANGE_TRAVEL_OPTIONS,
            actions.CHANGE_TRAVEL_OPTIONS_SUCCESS,
            actions.CHANGE_TRAVEL_OPTIONS_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/buckets/createCustom`, {bucketName}),
    };
}
