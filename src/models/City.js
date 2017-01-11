import {Record, Map} from 'immutable';

const CityRecord = Record({
    imageSmall: '',
    imageMedium: '',
    imageLarge: '',
    title: '',
    address: '',
    defaultImage: ''
});

export default class City extends CityRecord {
    static multiMapper (cities) {
        return cities.map(city => new City(city));
    }
}
