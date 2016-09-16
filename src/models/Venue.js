import {Record, Map, List, fromJS} from 'immutable';
import _isFunc from 'lodash/lang/isFunction';

const VenueRecord = Record({
    id: '',
    name: null,
    address: null,
    geometry: null,
    spices: Map(),
    website: null,

    source: '', // yelp, foursquare, ta, google

    // external references
    place_id: null, // google
    googleId: null, // google id (backend)
    foursquareId: null,
    yelpId: null,

    // old. must remove me. TODO
    venueSocial: null,

    // new school
    images: List(),
    reviews: List(),
    ratings: List()
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

        getOpeningsHours () {
            const venueSocial = this.get('venueSocial');
            if (venueSocial && venueSocial.google_venue && venueSocial.google_venue.opening_hours) {
                let currentDay = new Date().getDay();
                currentDay = currentDay === 0 ? 6 : currentDay - 1  //getDay() returns 0 if sunday, but it's indexed in position 6 in googles array;
                return venueSocial.google_venue.opening_hours.weekday_text[currentDay];
            } else {
                return null;
            }
        }

        getPrice () {
            const venueSocial = this.get('venueSocial');
            if (venueSocial && venueSocial.foursquare_venue && venueSocial.foursquare_venue.meta) {
                const { price } = this.get('venueSocial').foursquare_venue.meta;
                if (price) {
                    const tier = price.tier || 0;
                    let greyDollar = '$$$$';
                    let blackDollar = '';

                    for(let i = 0; i < tier; i++) {
                        blackDollar = blackDollar + '$';
                        greyDollar = greyDollar.slice(0, -1); //add one black dollar, need to remove one grey dollar
                    }
                    return { blackDollar, greyDollar };
                }
            }
            return null;
        }
        static getInstagramImage (instagramImage) {
            return {uri: instagramImage.getIn(['images', 'low_resolution', 'url'])};
        }

        static getFoursquareImage (foursquareImage, wantBig = false) {
            const prefix = foursquareImage.get('prefix');
            const suffix = foursquareImage.get('suffix');
            return wantBig ? {uri:`${prefix}500x500${suffix}`} : {uri:`${prefix}306x306${suffix}`};
        }

        static mapper (venue) {
            const created = new Venue(venue);
            if (venue.googleId) {
                return created.set('place_id', venue.googleId);
            } else {
                return created;
            }
        }

        getComments () {
            const venueSocial = this.get('venueSocial');
            const comments = this.getFoursquareComments(venueSocial.foursquare_venue)
            return comments;

        }

        getFoursquareComments (foursquare = {}) {
            if (foursquare.tips) {
                return fromJS(foursquare.tips.map(tip => {
                    return {
                        image: Venue.getFoursquareImage(fromJS(tip.photo)).uri,
                        mail: '',
                        text: tip.text,
                        username: tip.username
                    };
                }));
            } else {
                return new Map();
            }
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

            } else if (venue.address_components) {
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

        static foursquareToVenue (venue) {
            let thumb; let photos;
            if (venue.getIn(['venue', 'photos', 'count'])) {
                const imgBase = venue.getIn(['venue', 'photos', 'groups', 0, 'items', 0]);
                thumb = `${imgBase.get('prefix')}300x300${imgBase.get('suffix')}`;
                // used for storing on Vertice
                photos = [`${imgBase.get('prefix')}500x500${imgBase.get('suffix')}`];
            }

            const address = venue.getIn(['venue', 'location', 'formattedAddress']).join(', ');
            const _venue = venue.get('venue');

            return {
                photo: thumb,
                name: _venue.get('name'),
                description: `${_venue.get('name')}, ${address}`,
                rating: _venue.get('rating'),
                ratingBase: '10',
                geometry: Venue.mapSpicesGeo(
                    _venue.getIn(['location', 'lat']),
                    _venue.getIn(['location', 'lng'])
                ),
                address,
                city: _venue.getIn(['location', 'city']),
                photos,
                foursquareId: _venue.get('id')
            };
        }

        static yelpToVenue (venue) {
            const address = venue.getIn(['location', 'display_address']).join(', ');
            return {
                photo: venue.get('image_url'),
                name: venue.get('name'),
                description: `${venue.get('name')}, ${address}`,
                rating: venue.get('rating'),
                ratingBase: '5',
                geometry: Venue.mapSpicesGeo(
                    venue.getIn(['location', 'coordinate', 'latitude']),
                    venue.getIn(['location', 'coordinate', 'longitude'])
                ),
                address,
                city: venue.getIn(['location', 'city']),
                yelpId: venue.get('id')
            };
        }

        static mapSpicesGeo (lat, lng) {
            return {
                location: { lat, lng }
            }
        }
    }
