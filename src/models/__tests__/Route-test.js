import Route from '../../models/Route';
import {expect} from 'chai';
import routeFixture from './routeFixture'

//TODO WRITE TEST FOR THE REST OF THE MODEL
describe('Routes', () => {

    it('Should get the vertices Geo-Location', () => {
        const NewRoute = Route.mapper(routeFixture);
        const lngLat = NewRoute.mapVerticesGeolocations().toJS()[0];
        const lng = lngLat[0];
        expect(lng).to.equal(60.15495120000001);
    });
});
