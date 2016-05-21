import * as actions from '../constants/actionTypes';
import { fromJS } from 'immutable';
import * as consts from '../constants/constants';
import invariant from 'invariant';

const initialState = fromJS({
    isSearchCityActive: false,
    isSearchRoutesActive: false,
    showSearchBar: true,
    routesSearchString: '',
    citiesSearchString: '',
    sort: consts.LATEST
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
                isSearchRoutesActive: false,
                showSearchBar: true
            });
        case actions.SEARCHING_ROUTES:
            return state.set('routesSearchString', action.searchString);

        case actions.SEARCHING_CITIES:
            return state.set('citiesSearchString', action.searchString);
        case actions.SEARCH_SORT_VALUE_CHANGED:
            console.log('sapdap?', (action.sortValue !== consts.LATEST || action.sortValue !== consts.POPULAR))
            invariant((action.sortValue === consts.LATEST || action.sortValue === consts.POPULAR),
                     `sortValue needs to be either 1 or 2 not ${action.sortValue}`)
            return state.set('sort', action.sortValue);


        default:
            return state;

    }
}
