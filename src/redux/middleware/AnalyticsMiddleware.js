import * as types from '../constants/actionTypes';

// those action types that are listed here will be tracked
const whiteList = [];

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
