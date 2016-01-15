import * as actions from '../constants/actionTypes';
import * as createRouteActions from './createRouteActions';
import Venue from '../../models/Venue';
import GooglePlacesAPIClient from '../../services/GooglePlacesAPIClient';
let googleAPI;

//
// INTERNALS
//
// function findCurrentEditingVertice (createRoute) {
//     const vert = createRoute.getIn(['route', 'vertices'])
//         .find(v => v.get('editMode') === true);
//     if (!vert || !vert.size) {
//         throw new Error('Failed to find current editing vertice');
//     }
//
//     return vert;
// }

function possiblyFetchVenueDetail (venue) {
    if (!venue.geometry && venue.place_id) {
        return googleAPI.fetchLatAndLng(venue.place_id)
            .then((venueRes) => {
                return Venue.mapFromGoogleResult(venueRes.result);
            });
    } else {
        return Promise.resolve(Venue.mapFromGoogleResult(venue));
    }
}

function updateVenueAfterDetailFetch (venue, dispatch) {

    // Route has not been selected, normal update
    return dispatch({ type: actions.VENUE_UPDATE, venue });
}

//
// actions
//

export function init (args = {}) {
    googleAPI = new GooglePlacesAPIClient({
        GOOGLE_API_KEY: args.GOOGLE_API_KEY,
        request: args.request
    });
}

export function updateVenue (venue, dispatch) {

    return possiblyFetchVenueDetail(venue)
    .then((updatedVenue) => {
        return updateVenueAfterDetailFetch(updatedVenue, dispatch);
    })
    .catch((err) => {
        console.log('Failed to fetch venue', err); // TODO track this
        updateVenueAfterDetailFetch(venue, dispatch);
    });
}

export function updateDescription (text) {
    return { type: actions.UPDATE_DESCRIPTION, text };
}

export function updateMeta (meta) {
    return { type: actions.VERTICE_UPDATE_META, meta };
}

export function updatePhoto (photo) {
    return { type: actions.UPDATE_PHOTO, photo};
}

export function removePhoto () {
    return { type: actions.VERTICE_PHOTO_DELETE};
}

export function getVerticeLocation (placeid) {
    return  {
        types: [
            actions.GET_VERTICE_LOCATION,
            actions.GET_VERTICE_LOCATION_SUCCESS,
            actions.GET_VERTICE_LOCATION_FAIL
        ],
        promise: () => googleAPI.fetchLatAndLng(placeid)
    };
}

export function setVerticeLocation (location) {
    return {type: actions.SET_VERTICE_LOCATION, location};
}

export function setSpices (index, spice) {
    return {type: actions.VERTICE_SPICES_SET, index, spice};
}

export function setSpicesPhotos () {
    return {type: actions.VERTICE_SPICES_SET_PHOTOS};
}

export function getVerticeSpices (name, geometry) {
    return {
        types: [
            actions.VERTICE_SPICES_GET,
            actions.VERTICE_SPICES_GET_SUCCESS,
            actions.VERTICE_SPICES_GET_FAIL
        ],
        promise: ({req}) => req.get(`/venues/getSpicesByGEOandName`, {name, lat: geometry.lat, lng: geometry.lng})
    };
}

export function reset () {
    return { type: actions.CREATE_VERTICE_RESET };
}
