import * as types from '../constants/actionTypes';

export function setCitySearchActive () {
    return {
        type: types.SEARCH_CITY_ACTIVE
    };
}

export function setRoutesSearchActive () {
    return {
        type: types.SEARCH_ROUTES_ACTIVE
    };
}

export function showSearchBar () {
    return {
        type: types.SEARCH_IS_ACTIVE
    };
}

export function setSearchBarInactive () {
    return {
        type: types.SEARCH_IS_INACTIVE
    };
}

export function routesSearchString (searchString) {
    return {
        type: types.SEARCHING_ROUTES,
        searchString
    };
}

export function citiesSearchString (searchString) {
    return {
        type: types.SEARCHING_CITIES,
        searchString
    };
}

export function sortValueChanged (sortValue) {
    return {
        type: types.SEARCH_SORT_VALUE_CHANGED,
        sortValue
    };
}
