import {Record, Map} from 'immutable';

const CityRecord = Record({
    imageSmall: '',
    imageMedium: '',
    imageLarge: '',
    title: '',
    address: ''
});

export default class City extends CityRecord {
    static multiMapper (cities) {
        return cities.map(city => new City(city));
    }
}
