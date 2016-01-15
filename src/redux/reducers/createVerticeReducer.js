import * as types from '../constants/actionTypes';
import Vertice from '../../models/Vertice';
import Venue from '../../models/Venue';
import {Map, fromJS} from 'immutable';

const initialState = Map({
    errorType: '',
    vertice: new Vertice({
        editMode: true,
        sortorder: 1
    })
});


export default function reducer (state = initialState, action = {}) {
    switch (action.type) {
        case types.VENUE_UPDATE:
            return state.update('vertice', v => v.mergeDeep({
                title: action.venue.name,
                venue: action.venue
            }));

        case types.VERTICE_UPDATE_META:
            return state.update('vertice', v => v.merge(action.meta));

        case types.UPDATE_DESCRIPTION:
            return state.setIn(['vertice', 'description'], action.text);

        case types.UPDATE_PHOTO:
            return state.setIn(['vertice', 'capturedPhoto'], action.photo);

        case types.VERTICE_PHOTO_DELETE:
            return state.removeIn(['vertice', 'capturedPhoto']);

        case types.SET_VERTICE_LOCATION:
            return state.setIn(['vertice', 'location'], action.location);

        case types.VERTICE_SPICES_SET:
            return picturePicked(state, action.index, action.spice);

        case types.VERTICE_SPICES_GET_SUCCESS:
            if (!action.payload.length) {
                console.warn('Failed to get spices');
                return state.set('errorType', types.VERTICE_SPICES_GET_FAIL);
            }
            const foursquareVenue = fromJS(action.payload[0].foursquare_venue);
            const instagramVenue = fromJS(action.payload[0].instagram_venue ?
                    action.payload[0].instagram_venue.data : {});

            return state.setIn(['vertice', 'venue', 'spices'], Map({instagramVenue, foursquareVenue}));

        case types.VERTICE_SPICES_SET_PHOTOS:
            const foursquareImages = state.getIn(['vertice', 'venue']).getFoursquareImages();
            const instagramImages = state.getIn(['vertice', 'venue']).getInstagramImages();
            return state.setIn(['vertice', 'photos'], getSpicesPicked(instagramImages, foursquareImages));

        case types.VERTICE_SPICES_GET_FAIL:
            return state.set('errorType', types.VERTICE_SPICES_GET_FAIL);

        case types.VERTICE_SPICES_GET:
            return state.set('errorType', '');

        case types.CREATE_VERTICE_RESET:
            return initialState;
        default:
            return state;
    }
}

function picturePicked (vertice, index, spice) {
    let prevValue = '';
    let newList = '';
    const venue = vertice.getIn(['vertice', 'venue']);
    if (spice === 'Instagram') {
        const instagram = venue.getInstagramImages(vertice);
        prevValue = instagram.getIn([index, 'picked']);
        newList = instagram.update(index, element => element.merge({picked: !prevValue}));
        newList = newList.update(index, element => element.merge({getPhoto: Venue.getInstagramImage}));
        return vertice.setIn(['vertice', 'venue', 'spices', 'instagramVenue'], newList);
    } else {
        const foursquare = venue.getFoursquareImages(vertice);
        prevValue = foursquare.getIn([index, 'picked']);
        newList = foursquare.update(index, element => element.merge({picked: !prevValue}));
        newList = newList.update(index, element => element.merge({getPhoto: Venue.getFoursquareImage}));
        return vertice.setIn(['vertice', 'venue', 'spices', 'foursquareVenue', 'photos'], newList);
    }
}

function getSpicesPicked (instagramList, foursquareList) {
    const newList = [];
    const pickedInstagramPhotos = instagramList.forEach(instagram =>
        instagram.get('picked') && newList.push({url: instagram.get('getPhoto')(instagram).uri})
    );
    const pickedFoursquarePhotos = foursquareList.forEach(foursquare =>
        foursquare.get('picked') && newList.push({url: foursquare.get('getPhoto')(foursquare).uri})
    );

    return fromJS(newList);

}
