import * as types from '../constants/actionTypes';

const whiteList = [
    types.FACEBOOK_LOGIN_SUCCESS,
    types.SIGNUP_SUCCESS,
    types.LOGIN_SUCCESS
];

export default class AnalyticsMiddleware {

    constructor (args = {}) {
        this.tracking = args.tracking;

        this.analyticsMiddleware = this.analyticsMiddleware.bind(this);
    }

    analyticsMiddleware (store) {
        return next => action => {
            (whiteList.indexOf(action.type) >= 0) &&
            this.tracking.trackWithProperties(action.type, action.payload.user)
            return next(action);
        }
    }
}
