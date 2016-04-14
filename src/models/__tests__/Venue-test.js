import Venue from '../../models/Venue';
import {expect} from 'chai';
import venueFetch from '../../../test/fixtures/ROUTE_DETAIL_SPICES_FETCH_SUCCESS';
import VenueFixture from './VenueFixture';
import {fromJS} from 'immutable';

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

    it('should pluck openings hours', () => {
        const venue = new Venue(VenueFixture);
        const venue2 = new Venue();
        expect(venue2.getOpeningsHours()).to.equal(null);
        expect(venue.getOpeningsHours()).to.not.equal(null);
    });

    it('should pluck price', () => {
        const venue = new Venue(VenueFixture);
        expect(venue.getPrice().blackDollar).to.equal('$$$');
        expect(venue.getPrice().greyDollar).to.equal('$');
        const venue2 = new Venue();
        expect(venue2.getPrice()).to.equal(null);
    });

    it('should get 306x306 FS images', () => {
        const venue = new Venue(VenueFixture);
        const fsImage = fromJS(venue.venueSocial.foursquare_venue.photos[0]);
        expect(Venue.getFoursquareImage(fsImage).uri).to.contains('306x306');
    });

    it('should get 500x500 resolution FS images', () => {
        const venue = new Venue(VenueFixture);
        const fsImage = fromJS(venue.venueSocial.foursquare_venue.photos[0]);
        expect(Venue.getFoursquareImage(fsImage, true).uri).to.contains('500x500');
    });

    it('should get all comments', () => {
        const venue = new Venue(VenueFixture);
        console.log(venue.getComments().get(0))
        expect(venue.getComments().size).to.equal(30);
    });


});
