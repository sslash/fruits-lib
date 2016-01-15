import {Record, Map} from 'immutable';
import _isFunc from 'lodash/lang/isFunction';

const VenueRecord = Record({
    id: '',
    name: null,
    place_id: null,
    address: null,
    geometry: null,
    spices: Map(),
    website: null,

    // old. must remove me. TODO
    venueSocial: null
});

export default class Venue extends VenueRecord {

    getInstagramImages () {
        return this.getIn(['spices', 'instagramVenue']) || [];
    }

    getFoursquareImages () {
        return this.getIn(['spices', 'foursquareVenue', 'photos']) || [];
    }

    getFoursquare () {
        return this.getIn(['spices', 'foursquareVenue']) || [];
    }

    pluckRating () {

        const venueSpices = this.get('venueSocial');
        if (!venueSpices) { return null; }

        let rating = {};

        if (venueSpices.foursquare_venue
        && venueSpices.foursquare_venue.meta
        && venueSpices.foursquare_venue.meta.rating) {
            rating.foursquare = {
                iconClass: 'fa-foursquare',
                rating: venueSpices.foursquare_venue.meta.rating,
                divisor: 10
            };
        }

        if (venueSpices.yelp_venue && venueSpices.yelp_venue.rating) {
            rating.yelp = {
                iconClass: 'fa-yelp',
                rating: venueSpices.yelp_venue.rating,
                divisor: 5
            };
        }

        return rating;
    }

    static getInstagramImage (instagramImage) {
        return {uri: instagramImage.getIn(['images', 'low_resolution', 'url'])};
    }

    static getFoursquareImage (foursquareImage) {
        return {uri:`${foursquareImage.get('prefix')}306x306${foursquareImage.get('suffix')}`};
    }

    static mapFromGoogleResult (venue) {

        // google has its own id. delete that
        delete venue.id;

        // Serialize the geometry data so it can be stored in one format
        if (venue.geometry) {
            if (!venue.geometry.location.lng) {
                throw new Error('Something went wrong, geometry was not defined');
            }

            const lat = venue.geometry.location.lat;
            const lng = venue.geometry.location.lng;

            venue.geometry = Map({
                lat: _isFunc(lat) ? lat() : lat,
                lng: _isFunc(lng) ? lng() : lng
            });
        }

        if (venue.formatted_address) {
            venue.address = venue.formatted_address;

        } else {
            let address = '';
            if (venue.address_components) {
                address = [
                    (venue.address_components[0] && venue.address_components[0].short_name || ''),
                    (venue.address_components[1] && venue.address_components[1].short_name || ''),
                    (venue.address_components[2] && venue.address_components[2].short_name || '')
                ].join(' ');
            }
            venue.address = address;
        }

        return new Venue(venue);
    }
}
