import {expect} from 'chai';
import * as detailActions from '../routeDetailActions';
import {fromJS, List, Map} from 'immutable';


describe('Detail actions', () => {
    describe('determineGeoType()', () => {
        it('should handle googleIds', () => {
            const places = [
                {
                    place_id: 1337
                },
                {
                    place_id: 1338
                }
            ];
            const googleIds = detailActions.determineGeoType(fromJS(places));
            expect(googleIds.get(0).googleId).to.equal(1337);
            expect(googleIds.get(1).googleId).to.equal(1338);
        });

        it('should handle geo location', () => {
            const places = List([
                Map({
                    geometry: {
                        lat: 1337,
                        lng: 1337
                    }
                }),
                Map({
                    geometry: {
                        lat: 1338,
                        lng: 1338
                    }
                })
            ]);
            const googleIds = detailActions.determineGeoType(places);
            expect(googleIds.get(0)).to.deep.equal({lat: 1337, lng: 1337});
            expect(googleIds.get(1)).to.deep.equal({lat: 1338, lng: 1338});
        });

        it('should choose google id if both geo and google id is present', () => {
            const places = List([
                Map({
                    place_id: 1337,
                    geometry: {
                        lat: 1337,
                        lng: 1337
                    }
                }),
                Map({
                    place_id: 1338,
                    geometry: {
                        lat: 1338,
                        lng: 1338
                    }
                })
            ]);
            const googleIds = detailActions.determineGeoType(places);
            expect(googleIds.get(0).googleId).to.equal(1337);
            expect(googleIds.get(1).googleId).to.equal(1338);
        });
    });
});
