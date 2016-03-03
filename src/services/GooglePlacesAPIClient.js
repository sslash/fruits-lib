const baseAutocompleteUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const baseNearbyUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const baseLatAndLng = 'https://maps.googleapis.com/maps/api/place/details/json';
let API_KEY;

export default class GooglePlacesAPIClient {

    constructor (args = {}) {
        API_KEY = args.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
        if (!API_KEY) {
            throw new Error('Google API key must be set');
        }

        this.request = args.request;
        this.fetchAutocomplete = this.fetchAutocomplete.bind(this);
        this.fetchNearbyVenues = this.fetchNearbyVenues.bind(this);
        this.fetchLatAndLng = this.fetchLatAndLng.bind(this);
    }

    fetchAutocomplete (query, location) {
        const data = {
            input: query,
            key: API_KEY,
            location
        };
        return this.request.getExt(baseAutocompleteUrl, data);
    }

    fetchNearbyVenues (location) {
        return this.request.getExt(baseNearbyUrl, {
            location: location,
            key:API_KEY,
            radius: 200
        });
    }

    fetchLatAndLng (placeid) {
        return this.request.getExt(baseLatAndLng, {
            placeid,
            key: API_KEY
        });
    }
}
