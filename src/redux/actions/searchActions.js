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

export function hideSearchBar () {
    return {
        type: types.SEARCH_HIDE
    };
}

export function showSearchBar () {
    return {
        type: types.SEARCH_SHOW
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

export function clearSearch () {
    return {
        type: types.SEARCH_CLEAR
    };
}

export function citiesSearchString (searchString) {
    return {
        type: types.SEARCHING_CITIES,
        searchString
    };
}


export function sortValueChanged (sort) {
    return {
        type: types.SEARCH_SORT_VALUE_CHANGED,
        sort
    };
}
