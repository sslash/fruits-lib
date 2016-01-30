import {Record, Map, List} from 'immutable';
import Venue from './Venue';
import getDefaultCardImg from '../fruitslib/getDefaultCardImg';


function extractCity (venue) {
    if (!venue.address_components) { return; }

    const res = venue.address_components.filter(a =>
        a.types.indexOf('postal_town') >= 0 || a.types.indexOf('locality') >= 0);

    if (res && res.length) {
        return Map(res[0]);
    }
}


const VerticeRecord = Record({
    // Record will create getter for every property.
    id: null,
    title: '',
    description: '',
    venue: new Venue(),
    sortorder: 1,
    _links: {},
    photos: List(),
    fsTip: null,
    capturedPhoto: '',
    location: {},
    fsTip: null,

    // if currently editing this vertice
    editMode: false,
    city: null
});

export default class Vertice extends VerticeRecord {

    static createMapper (vertice, sortorder) {

        const venue = Venue.mapFromGoogleResult(vertice.venue);

        return new Vertice({
            sortorder: sortorder || 1,
            showFoursquare: true,
            showInstagram: true,
            title: venue.name || venue.address,
            photos: List(),
            venue,

            // only used to set the route
            // use vertice.venue because non-immutable is expected
            city: extractCity(vertice.venue)
        });
    }

    static mapper (vertice) {
        return new VerticeRecord(vertice)
            .set('photos', new List(vertice.photos))
            .set('venue', new Venue(vertice.venue));
    }
}
