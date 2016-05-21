//STANDARD: domain_action_meta

// app
export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
export const CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
export const CHECK_TOKEN_REQUREST = 'CHECK_TOKEN_REQUREST';
export const CHECK_TOKEN_FAILED = 'CHECK_TOKEN_FAILED';

// notifications
export const NOTIFICATIONS_FETCH = 'NOTIFICATIONS_FETCH';
export const NOTIFICATIONS_FETCH_SUCCESS = 'NOTIFICATIONS_FETCH_SUCCESS';
export const NOTIFICATIONS_FETCH_FAIL = 'NOTIFICATIONS_FETCH_FAIL';

export const NOTIFICATIONS_MARK_SEEN = 'NOTIFICATIONS_MARK_SEEN';
export const NOTIFICATIONS_MARK_SEEN_SUCCESS = 'NOTIFICATIONS_MARK_SEEN_SUCCESS';
export const NOTIFICATIONS_MARK_SEE_FAIL = 'NOTIFICATIONS_MARK_SEEN_FAIL';

export const TRAVELMODE_CHANGED = 'TRAVELMODE_CHANGED';

//navbar
export const NAVBAR_CREATE_PRESSED = 'NAVBAR_CREATE_PRESSED';
export const NAVBAR_HOME_PRESSED = 'NAVBAR_HOME_PRESSED';
export const NAVBAR_SEARCH_PRESSED = 'NAVBAR_SEARCH_PRESSED';
export const NAVBAR_NOTIFICATION_PRESSED = 'NAVBAR_NOTIFICATION_PRESSED';
export const NAVBAR_USERPROFILE_PRESSED = 'NAVBAR_USERPROFILE_PRESSED';

//vertice
export const VERTICE_MAP_PRESSED = 'VERTICE_MAP_PRESSED';
export const VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS = 'VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS';
export const VENUES_DIRECTIONS_MATRIX_FETCH_FAIL = 'VENUES_DIRECTIONS_MATRIX_FETCH_FAIL';
export const VENUES_DIRECTIONS_MATRIX_FETCH = 'VENUES_DIRECTIONS_MATRIX_FETCH';

// routes
export const REQUEST_ROUTES = 'REQUEST_ROUTES';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTES_FAILED = 'RECEIVE_ROUTES_FAILED';
export const SELECT_BUCKET = 'SELECT_BUCKET';
export const INVALIDATE_BUCKET = 'INVALIDATE_BUCKET';
export const SELECTED_BUCKET_BOOTSTRAP = 'SELECTED_BUCKET_BOOTSTRAP';
export const SELECT_BUCKET_CHANGE = 'SELECT_BUCKET_CHANGE';
export const ROUTES_UPVOTE_UPDATE = 'ROUTES_UPVOTE_UPDATE';
export const ROUTES_UPVOTE_UPDATE_SUCCESS = 'ROUTES_UPVOTE_UPDATE_SUCCESS';
export const ROUTES_UPVOTE_UPDATE_FAIL = 'ROUTES_UPVOTE_UPDATE_FAIL';

export const ROUTES_QUERY = 'ROUTES_QUERY';
export const ROUTES_QUERY_SUCCESS = 'ROUTES_QUERY_SUCCESS';
export const ROUTES_QUERY_FAIL = 'ROUTES_QUERY_FAIL';

export const ROUTES_CLEAR = 'ROUTES_CLEAR';

export const FETCH_CITY_BUCKETS = 'FETCH_CITY_BUCKETS';
export const FETCH_CITY_BUCKETS_SUCCESS = 'FETCH_CITY_BUCKETS_SUCCESS';
export const FETCH_CITY_BUCKETS_FAIL = 'FETCH_CITY_BUCKETS_FAIL';
export const CITY_SELECT = 'CITY_SELECT';
export const BUCKETS_CLEAR = 'BUCKETS_CLEAR';

export const CITIES_FETCH = 'CITIES_FETCH';
export const CITIES_FETCH_SUCCESS = 'CITIES_FETCH_SUCCESS';
export const CITIES_FETCH_FAIL = 'CITIES_FETCH_FAIL';
export const CITIES_BUCKETS_FETCH = 'CITIES_BUCKETS_FETCH';
export const CITIES_BUCKETS_FETCH_SUCCESS = 'CITIES_BUCKETS_FETCH_SUCCESS';
export const CITIES_BUCKETS_FETCH_FAIL = 'CITIES_BUCKETS_FETCH_FAIL';

export const ROUTE_CREATE_INIT = 'ROUTE_CREATE_INIT';

// route detail
export const ROUTE_DETAIL_FETCH = 'ROUTE_DETAIL_FETCH';
export const ROUTE_DETAIL_FETCH_SUCCESS = 'ROUTE_DETAIL_FETCH_SUCCESS';
export const ROUTE_DETAIL_FETCH_FAIL = 'ROUTE_DETAIL_FETCH_FAIL';
export const ROUTE_DETAIL_VERTICE_SPICES_FETCH = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH';
export const ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS';
export const ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL';

export const ROUTE_DETAIL_SPICES_FOR_VENUES_LIST = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST';
export const ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS';
export const ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL';

export const ROUTE_DETAIL_COMMENTS_FETCH = 'ROUTE_DETAIL_COMMENTS_FETCH';
export const ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS = 'ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS';
export const ROUTE_DETAIL_COMMENTS_FETCH_FAIL = 'ROUTE_DETAIL_COMMENTS_FETCH_FAIL';

export const ROUTE_DETAIL_COMMENTS_ADD = 'ROUTE_DETAIL_COMMENTS_ADD';
export const ROUTE_DETAIL_COMMENTS_ADD_FAIL = 'ROUTE_DETAIL_COMMENTS_ADD_FAIL';
export const ROUTE_DETAIL_COMMENTS_ADD_SUCCESS = 'ROUTE_DETAIL_COMMENTS_ADD_SUCCESS';

export const ROUTE_DETAIL_COMMENTS_DELETE = 'ROUTE_DETAIL_COMMENTS_DELETE';
export const ROUTE_DETAIL_COMMENTS_DELETE_FAIL = 'ROUTE_DETAIL_COMMENTS_DELETE_FAIL';
export const ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS = 'ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS';

// upvote
export const UPVOTE_ROUTE = 'UPVOTE_ROUTE';
export const UPVOTE_ROUTE_SUCCESS = 'UPVOTE_ROUTE_SUCCESS';
export const UPVOTE_ROUTE_FAIL = 'UPVOTE_ROUTE_FAIL';

// directions
export const FETCH_DIRECTIONS_MATRIX = 'FETCH_DIRECTIONS_MATRIX';
export const FETCH_DIRECTIONS_MATRIX_SUCCESS = 'FETCH_DIRECTIONS_MATRIX_SUCCESS';
export const FETCH_DIRECTIONS_MATRIX_FAIL = 'FETCH_DIRECTIONS_MATRIX_FAIL';

//create vertice
export const VENUE_UPDATE = 'VENUE_UPDATE';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const VERTICE_UPDATE_META = 'VERTICE_UPDATE_META';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const VERTICE_PHOTO_DELETE = 'VERTICE_PHOTO_DELETE';

export const GET_VERTICE_LOCATION = 'GET_VERTICE_LOCATION';
export const GET_VERTICE_LOCATION_SUCCESS = 'GET_VERTICE_LOCATION_SUCCESS';
export const GET_VERTICE_LOCATION_FAIL = 'GET_VERTICE_LOCATION_FAIL';
export const SET_VERTICE_LOCATION = 'SET_VERTICE_LOCATION';
export const VERTICE_SPICES_SET = 'VERTICE_SPICES_SET';
export const VERTICE_SPICES_GET = 'VERTICE_SPICES_GET';
export const VERTICE_SPICES_GET_SUCCESS = 'VERTICE_SPICES_GET_SUCCESS';
export const VERTICE_SPICES_GET_FAIL = 'VERTICE_SPICES_GET_FAIL';
export const VERTICE_SPICES_SET_PHOTOS = 'VERTICE_SPICES_SET_PHOTOS';

export const VERTICE_UPDATE_BUCKETS = 'VERTICE_UPDATE_BUCKETS';
export const VERTICE_UPDATE_BUCKETS_SUCCESS = 'VERTICE_UPDATE_BUCKETS_SUCCESS';
export const VERTICE_UPDATE_BUCKETS_FAIL = 'VERTICE_UPDATE_BUCKETS_FAIL';

export const VERTICE_DELETE_BUCKETS = 'VERTICE_DELETE_BUCKETS';
export const VERTICE_DELETE_BUCKETS_SUCCESS = 'VERTICE_DELETE_BUCKETS_SUCCESS';
export const VERTICE_DELETE_BUCKETS_FAIL = 'VERTICE_DELETE_BUCKETS_FAIL';

export const CREATE_ROUTE_VERTICE_PHOTO_ADD = 'CREATE_ROUTE_VERTICE_PHOTO_ADD';
export const CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS = 'CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS';
export const CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL = 'CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL';

export const ROUTE_FINISH = 'ROUTE_FINISH';
export const ROUTE_FINISH_SUCCESS = 'ROUTE_FINISH_SUCCESS';
export const ROUTE_FINISH_FAIL = 'ROUTE_FINISH_FAIL';
export const CREATE_VERTICE_RESET = 'CREATE_VERTICE_RESET';

// IS THIS IN USE??
export const UPDATE_TITLE_STATE = 'UPDATE_TITLE_STATE';

// create route
export const CREATE_ROUTE_SET_TITLE = 'CREATE_ROUTE_SET_TITLE'; // dont need, use updateRoute
export const CREATE_ROUTE_SET_ERRORS = 'CREATE_ROUTE_SET_ERRORS';
export const CREATE_ROUTE_UPDATE = 'CREATE_ROUTE_UPDATE';
export const CREATE_ROUTE_UPDATE_SUCCESS = 'CREATE_ROUTE_UPDATE_SUCCESS';
export const CREATE_ROUTE_UPDATE_FAIL = 'CREATE_ROUTE_UPDATE_FAIL';
export const CREATE_ROUTE_TOGGLE_BUCKET = 'CREATE_ROUTE_TOGGLE_BUCKET';
export const POST_ROUTE = 'POST_ROUTE';
export const POST_ROUTE_SUCCESS = 'POST_ROUTE_SUCCESS';
export const POST_ROUTE_FAIL = 'POST_ROUTE_FAIL';
export const FETCH_BUCKETS = 'FETCH_BUCKETS';
export const FETCH_BUCKETS_SUCCESS = 'FETCH_BUCKETS_SUCCESS';
export const FETCH_BUCKETS_FAILURE = 'FETCH_BUCKETS_FAILURE';
export const ADD_VERTICE_TO_ROUTE = 'ADD_VERTICE_TO_ROUTE';
export const ADD_VERTICE_TO_ROUTE_SUCCESS = 'ADD_VERTICE_TO_ROUTE_SUCCESS';
export const ADD_VERTICE_TO_ROUTE_FAIL = 'ADD_VERTICE_TO_ROUTE_FAIL';
export const CREATE_ROUTE_VERTICE_SPICES_FETCH = 'CREATE_ROUTE_VERTICE_SPICES_FETCH';
export const CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS';
export const CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL = 'CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL';
export const CREATE_ROUTE_VERTICE_DELETE = 'CREATE_ROUTE_VERTICE_DELETE';
export const CREATE_ROUTE_VERTICE_DELETE_SUCCESS = 'CREATE_ROUTE_VERTICE_DELETE_SUCCESS';
export const CREATE_ROUTE_VERTICE_DELETE_FAIL = 'CREATE_ROUTE_VERTICE_DELETE_FAIL';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS';
export const CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL';
export const CREATE_ROUTE_RESET = 'CREATE_ROUTE_RESET';
export const CREATE_ROUTE_BUCKET_ADD = 'CREATE_ROUTE_BUCKET_ADD';
export const CREATE_ROUTE_BUCKET_ADD_SUCCESS = 'CREATE_ROUTE_BUCKET_ADD_SUCCESS';
export const CREATE_ROUTE_BUCKET_ADD_FAIL = 'CREATE_ROUTE_BUCKET_ADD_FAIL';
export const CREATE_ROUTE_BUCKET_DEL = 'CREATE_ROUTE_BUCKET_DEL';
export const CREATE_ROUTE_BUCKET_DEL_SUCCESS = 'CREATE_ROUTE_BUCKET_DEL_SUCCESS';
export const CREATE_ROUTE_BUCKET_DEL_FAIL = 'CREATE_ROUTE_BUCKET_DEL_FAIL';
export const CREATE_ROUTE_BUCKET_ADD_CUSTOM = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM';
export const CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS';
export const CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL';

// copied from routedetail
export const CREATE_ROUTE_FETCH = 'CREATE_ROUTE_FETCH';
export const CREATE_ROUTE_FETCH_SUCCESS = 'CREATE_ROUTE_FETCH_SUCCESS';
export const CREATE_ROUTE_FETCH_FAIL = 'CREATE_ROUTE_FETCH_FAIL';

export const VERTICE_UPDATE = 'VERTICE_UPDATE';
export const VERTICE_UPDATE_SUCCESS = 'VERTICE_UPDATE_SUCCESS';
export const VERTICE_UPDATE_FAIL = 'VERTICE_UPDATE_FAIL';

export const VERTICE_REORDER = 'VERTICE_REORDER';
export const VERTICE_REORDER_SUCCESS = 'VERTICE_REORDER_SUCCESS';
export const VERTICE_REORDER_FAIL = 'VERTICE_REORDER_FAIL';

export const ROUTE_DETAIL_BOOTSTRAP = 'ROUTE_DETAIL_BOOTSTRAP';

// flash messages
export const PUSH_FLASH_MESSAGE = 'PUSH_FLASH_MESSAGE';
export const POP_FLASH_MESSAGE = 'POP_FLASH_MESSAGE';

// user
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const USER_ROUTE_ADD = 'USER_ROUTE_ADD';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const FETCH_USER_ROUTES = 'FETCH_USER_ROUTES';
export const FETCH_USER_ROUTES_SUCCESS = 'FETCH_USER_ROUTES_SUCCESS';
export const FETCH_USER_ROUTES_FAIL = 'FETCH_USER_ROUTES_FAIL';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';
export const USER_UPLOAD_PROFILE_PICTURE = 'USER_UPLOAD_PROFILE_PICTURE';
export const USER_UPLOAD_PROFILE_PICTURE_SUCCESS = 'USER_UPLOAD_PROFILE_PICTURE_SUCCESS';
export const USER_UPLOAD_PROFILE_PICTURE_FAIL = 'USER_UPLOAD_PROFILE_PICTURE_FAIL';
export const USER_TOKEN_STORE_AND_REDIRECT = 'USER_TOKEN_STORE_AND_REDIRECT';
export const USER_BOOTSTRAP = 'USER_BOOTSTRAP';
export const USER_UPDATE_PROFILE = 'USER_UPDATE_PROFILE';
export const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
export const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL';
export const USER_CLEAR_ERROR = 'USER_CLEAR_ERROR';


// suggestions
export const SUGGESTIONS_FETCH = 'SUGGESTIONS_FETCH';
export const SUGGESTIONS_FETCH_SUCCESS = 'SUGGESTIONS_FETCH_SUCCESS';
export const SUGGESTIONS_FETCH_FAIL = 'SUGGESTIONS_FETCH_FAIL';
export const SUGGESTIONS_CLEAR = 'SUGGESTIONS_CLEAR';

export const SUGGESTIONS_DETAIL_FETCH = 'SUGGESTIONS_DETAIL_FETCH';
export const SUGGESTIONS_DETAIL_FETCH_SUCCESS = 'SUGGESTIONS_DETAIL_FETCH_SUCCESS';
export const SUGGESTIONS_DETAIL_FETCH_FAIL = 'SUGGESTIONS_DETAIL_FETCH_FAIL';

export const BOOKMARKS_POST = 'BOOKMARKS_POST';
export const BOOKMARKS_POST_SUCCESS = 'BOOKMARKS_POST_SUCCESS';
export const BOOKMARKS_POST_FAIL = 'BOOKMARKS_POST_FAIL';

export const BOOKMARKS_FETCH = 'BOOKMARKS_FETCH';
export const BOOKMARKS_FETCH_SUCCESS = 'BOOKMARKS_FETCH_SUCCESS';
export const BOOKMARKS_FETCH_FAIL = 'BOOKMARKS_FETCH_FAIL';

export const BOOKMARKS_IDS_FETCH = 'BOOKMARKS_IDS_FETCH';
export const BOOKMARKS_IDS_FETCH_SUCCESS = 'BOOKMARKS_IDS_FETCH_SUCCESS';
export const BOOKMARKS_IDS_FETCH_FAIL = 'BOOKMARKS_IDS_FETCH_FAIL';

export const BOOKMARKS_DELETE = 'BOOKMARKS_DELETE';
export const BOOKMARKS_DELETE_SUCCESS = 'BOOKMARKS_DELETE_SUCCESS';
export const BOOKMARKS_DELETE_FAIL = 'BOOKMARKS_DELETE_FAIL';

export const UPDATE_USER_ROUTE = 'UPDATE_USER_ROUTE'
export const UPDATE_USER_ROUTE_SUCCESS = 'UPDATE_USER_ROUTE_SUCCESS'
export const UPDATE_USER_ROUTE_FAIL = 'UPDATE_USER_ROUTE_FAIL'

export const CREATE_LOCAL_ROUTE_VERTICE_ADD = 'CREATE_LOCAL_ROUTE_VERTICE_ADD';
export const CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS = 'CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS';
export const CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL = 'CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL';
export const CREATE_LOCAL_ROUTE_VERTICE_REMOVE = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE';
export const CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS';
export const CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL';
export const CREATE_LOCAL_ROUTE_FETCH = 'CREATE_LOCAL_ROUTE_FETCH';
export const CREATE_LOCAL_ROUTE_FETCH_SUCCESS = 'CREATE_LOCAL_ROUTE_FETCH_SUCCESS';
export const CREATE_LOCAL_ROUTE_FETCH_FAIL = 'CREATE_LOCAL_ROUTE_FETCH_FAIL';

// users
export const PUBLIC_USER_FETCH = 'PUBLIC_USER_FETCH';
export const PUBLIC_USER_FETCH_SUCCESS = 'PUBLIC_USER_FETCH_SUCCESS';
export const PUBLIC_USER_FETCH_FAIL = 'PUBLIC_USER_FETCH_FAIL';

// search
export const SEARCH_CITY_ACTIVE = 'SEARCH_CITY_ACTIVE';
export const SEARCH_ROUTES_ACTIVE = 'SEARCH_ROUTES_ACTIVE';
export const SEARCH_IS_INACTIVE = 'SEARCH_IS_INACTIVE';
export const SEARCH_IS_ACTIVE = 'SEARCH_IS_ACTIVE';
export const SEARCHING_ROUTES = 'SEARCHING_ROUTES';
export const SEARCHING_CITIES = 'SEARCHING_CITIES';
export const SEARCH_SORT_VALUE_CHANGED = 'SEARCH_SORT_VALUE_CHANGED';


export const PUBLIC_LIKED_ROUTE_FETCH = 'PUBLIC_LIKED_ROUTE_FETCH';
export const PUBLIC_LIKED_ROUTE_SUCCESS = 'PUBLIC_LIKED_ROUTE_SUCCESS';
export const PUBLIC_LIKED_ROUTE_FAIL = 'PUBLIC_LIKED_ROUTE_FAIL';

export const NO_OP = 'NO_OP';
export const LOAD = 'REDUX_STORAGE_LOAD';
