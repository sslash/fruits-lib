import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';
import { LATEST, POPULAR } from '../constants/constants';
import invariant from 'invariant';

const initialState = fromJS({
    isSearchCityActive: false,
    isSearchRoutesActive: false,
    showSearchBar: true,
    routesSearchString: '',
    citiesSearchString: '',
    sort: POPULAR
});

export default function reducer (state = initialState, action) {

    switch (action.type) {
        case actions.SEARCH_CITY_ACTIVE:
            return state.merge({
                isSearchCityActive: true,
                isSearchRoutesActive: false, // todo fix a new variable
                showSearchBar: true
            });

        case actions.SEARCH_ROUTES_ACTIVE:
            return state.merge({
                isSearchCityActive: false,
                isSearchRoutesActive: true,
                showSearchBar: true
            });

        case actions.SEARCH_IS_ACTIVE:
            return state.set('showSearchBar', true);

            case actions.SEARCH_IS_INACTIVE:
            return state.merge({
                isSearchCityActive: false,
                isSearchRoutesActive: false
            });
        case actions.SEARCHING_ROUTES:
            return state.set('routesSearchString', action.searchString);

        case actions.SEARCH_HIDE:
            return state.set('showSearchBar', false);

        case actions.SEARCH_SHOW:
            return state.set('showSearchBar', true);

        case actions.SEARCHING_CITIES:
            return state.set('citiesSearchString', action.searchString);
        case actions.SEARCH_SORT_VALUE_CHANGED:
            invariant((action.sort === LATEST || action.sort === POPULAR),
                     `sortValue needs to be either popular or latest not ${action.sort}`)
            return state.set('sort', action.sort);


        default:
            return state;

    }
}
