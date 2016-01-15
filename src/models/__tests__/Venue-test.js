import Venue from '../../models/Venue';
import {expect} from 'chai';
import venueFetch from '../../../test/fixtures/ROUTE_DETAIL_SPICES_FETCH_SUCCESS';


describe('venue', () => {

    it('should pluck rating', () => {
        const venue = new Venue(venueFetch);
        const rating = venue.pluckRating();
        expect(rating.foursquare.rating).to.equal(8.1);
        expect(rating.foursquare.divisor).to.equal(10);
        expect(rating.foursquare.divisor).to.equal(10);
        expect(rating.yelp.rating).to.equal(3.5);
        expect(rating.yelp.divisor).to.equal(5);

    });
});
