import {expect} from 'chai';
import * as detailActions from '../routeDetailActions';
import {fromJS, List, Map} from 'immutable';
import Vertice from '../../../models/Vertice';


describe('Detail actions', () => {
    describe('mapVerticesToGeoVenues()', () => {
        it('should handle googleIds', () => {
            const places = [
                Vertice.mapper({
                    venue: {
                        place_id: 1337
                    }
                }),
                Vertice.mapper({
                    venue: {
                        place_id: 1338
                    }
                })
            ];
            const googleIds = detailActions.mapVerticesToGeoVenues(fromJS(places));
            expect(googleIds.get(0).googleId).to.equal(1337);
            expect(googleIds.get(1).googleId).to.equal(1338);
        });

        it('should handle geo location', () => {
            const places = List([
                Vertice.mapper({
                    venue: {
                        geometry: {
                            lat: 1337,
                            lng: 1337
                        }
                    }
                }),
                Vertice.mapper({
                    venue: {
                        geometry: {
                            lat: 1338,
                            lng: 1338
                        }
                    }
                })
            ]);
            const googleIds = detailActions.mapVerticesToGeoVenues(places);
            expect(googleIds.get(0)).to.deep.equal({lat: 1337, lng: 1337});
            expect(googleIds.get(1)).to.deep.equal({lat: 1338, lng: 1338});
        });

        it('should handle more then 2 spots', () => {
            const places = List([
                Vertice.mapper({
                    venue: {
                        geometry: {
                            lat: 1337,
                            lng: 1337
                        }
                    }
                }),
                Vertice.mapper({
                    venue: {
                        geometry: {
                            lat: 1338,
                            lng: 1338
                        }
                    }
                }),
                Vertice.mapper({
                    venue: {
                        geometry: {
                            lat: 1888,
                            lng: 1999
                        }
                    }
                })
            ]);
            const googleIds = detailActions.mapVerticesToGeoVenues(places);
            expect(googleIds.get(0)).to.deep.equal({lat: 1337, lng: 1337});
            expect(googleIds.get(1)).to.deep.equal({lat: 1338, lng: 1338});
            expect(googleIds.get(2)).to.deep.equal({lat: 1888, lng: 1999});
        });

        it('should choose google id if both geo and google id is present', () => {
            const places = List([
                Vertice.mapper({
                    venue: {
                        place_id: 1337,
                        geometry: {
                            lat: 1337,
                            lng: 1337
                        }
                    }
                }),
                Vertice.mapper({
                    venue: {
                        place_id: 1338,
                        geometry: {
                            lat: 1338,
                            lng: 1338
                        }
                    }
                })
            ]);
            const googleIds = detailActions.mapVerticesToGeoVenues(places);
            expect(googleIds.get(0).googleId).to.equal(1337);
            expect(googleIds.get(1).googleId).to.equal(1338);
        });
    });
});
