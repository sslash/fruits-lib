import * as actions from '../constants/actionTypes';
import {Map, fromJS, List, Iterable} from 'immutable';
import Venue from '../../models/Venue';

const initialCurrentState = Map({
    isFetching: false,
    item: Map({
        images: List(),
        reviews: null,
        ratings: null,
        meta: null
    }),
    error: null
});

function gatherMeta (data) {
    const {price, hours} = data.foursquare.meta;
    return {
        foursquare: {
            price: price && price.currency,
            hoursStatus: hours && hours.status
        }
    };
}

function gatherRatings (data) {
    return { foursquare: data.foursquare.meta.rating };
}
function gatherReviews (data) {
    return data.foursquare.tips.map(tips => {
        return { text: tips.text, source: 'foursquare', user: tips.user, created: tips.createdAt };
    });
}

function gatherImages (data) {
    return formatFSImages(data.foursquare.photos || []).concat(formatInstagramImages(data.instagram.data || []));
}

function formatFSImages (fsImages) {
    return fsImages.map(image => {
        return {image: `${image.prefix}500x500${image.suffix}`, source: 'foursquare'}
    });
}

function formatInstagramImages(instaImages) {
    return instaImages.map(image => {
        return {image: image.images.standard_resolution, source: 'instagram'}
    });
}

function current (state = initialCurrentState, action) {

    switch (action.type) {

        case actions.SUGGESTIONS_DETAIL_FETCH:
            return state.set('isFetching', true);

        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
            return state.set('isFetching', false)
                .setIn(['item', 'images'], fromJS(gatherImages(action.payload)))
                .setIn(['item', 'reviews'], fromJS(gatherReviews(action.payload)))
                .setIn(['item', 'ratings'], fromJS(gatherRatings(action.payload)))
                .setIn(['item', 'meta'], fromJS(gatherMeta(action.payload)));




        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
            return state.set('isFetching', false)
                .set('error', action.error);

        default:
            return state;
    }
}

const initialState = Map({
    foursquare: List(),
    yelp: List(),
    isFetching: false,
    error: null,
    current: undefined
});

export default function reducer (state = initialState, action) {

    if (!Iterable.isIterable(state)) {
        state = initialState;
    }

    switch (action.type) {
        case actions.SUGGESTIONS_CLEAR:
            return initialState;

        case actions.SUGGESTIONS_FETCH:
            return state.set('isFetching', true);

        case actions.SUGGESTIONS_FETCH_SUCCESS:

            return state
                .set('foursquare', action.payload.foursquare && List(action.payload.foursquare.map(item => fromJS(item))))
                .set('yelp', action.payload.yelp && List(action.payload.yelp.map(item => fromJS(item))))
                .set('isFetching', false)
                .set('error', false);

        case actions.SUGGESTIONS_FETCH_FAIL:

            return state
                .set('isFetching', false)
                .set('error', action.error);

        case actions.SUGGESTIONS_DETAIL_FETCH:
        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
            return state.set('current', current(state.get('current'), action));

        default:
            return state;
    }
}
