
import {expect} from 'chai';
import reducer from '../searchReducer';
import * as types from '../../constants/actionTypes';
import { Map } from 'immutable';

const initialState = Map({
    isSearchCityActive: false,
    isSearchRoutesActive: false,
    showSearchBar: true,
    searchString: ''
});
describe('Search reducer', () => {

    it('should handle SEARCH_CITY_ACTIVE', () => {
        const newState = reducer(undefined, {
            type: types.SEARCH_CITY_ACTIVE,
        });
        expect(newState.get('isSearchCityActive')).to.equal(true);
        expect(newState.get('isSearchRoutesActive')).to.equal(false);
        expect(newState.get('showSearchBar')).to.equal(true);
    });

    it('should handle SEARCH_ROUTES_ACTIVE', () => {
        const newState = reducer(undefined, {
            type: types.SEARCH_ROUTES_ACTIVE,
        });
        expect(newState.get('isSearchCityActive')).to.equal(false);
        expect(newState.get('isSearchRoutesActive')).to.equal(true);
        expect(newState.get('showSearchBar')).to.equal(true);
    });

    it('should handle SEARCH_IS_ACTIVE', () => {
        const beforeState = reducer(undefined, {
            type: types.SEARCH_ROUTES_ACTIVE,
        });

        const newState = reducer(beforeState, {
            type: types.SEARCH_CITY_ACTIVE,
        });
        expect(newState.get('isSearchCityActive')).to.equal(true);
        expect(newState.get('isSearchRoutesActive')).to.equal(false);
        expect(newState.get('showSearchBar')).to.equal(true);
    });

    it('should handle SEARCH_IS_INACTIVE', () => {
        const newState = reducer(undefined, {
            type: types.SEARCH_IS_INACTIVE,
        });
        expect(newState.get('isSearchCityActive')).to.equal(false);
        expect(newState.get('isSearchRoutesActive')).to.equal(false);
        expect(newState.get('showSearchBar')).to.equal(true);
    });

    it('should handle SEARCHING_ROUTES', () => {
        const searchString = 'daddyMcSwagga';
        const newState = reducer(undefined, {
            type: types.SEARCHING_ROUTES,
            searchString
        });
        expect(newState.get('routesSearchString')).to.equal(searchString);
        expect(newState.get('citiesSearchString')).to.equal('');

    });

    it('should handle SEARCHING_CITIES', () => {
        const searchString = 'daddyMcSwagga';
        const newState = reducer(undefined, {
            type: types.SEARCHING_CITIES,
            searchString
        });
        expect(newState.get('citiesSearchString')).to.equal(searchString);
        expect(newState.get('routesSearchString')).to.equal('');

    });

    it('should handle SEARCH_SORT_VALUE_CHANGED error parameter', () => {
        const sortValue = 'daddyMcSwagga';
        const reducerPointer = () => (
            reducer(undefined, {
                type: types.SEARCH_SORT_VALUE_CHANGED,
                sortValue
            })
        );
        expect(reducerPointer).to.throw(Error);
    });


    it('should handle SEARCH_SORT_VALUE_CHANGED', () => {
        const sortValue = 1;
        const nextState = reducer(undefined, {
            type: types.SEARCH_SORT_VALUE_CHANGED,
            sortValue
        });
        expect(nextState.get('sort')).to.equal(sortValue);
    });



});
