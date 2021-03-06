import * as types from '../constants/actionTypes';
// those action types that are listed here will be tracked
const whiteList = [];

const peoplePropsWhiteList = [types.SIGNUP_SUCCESS, types.LOGIN_SUCCESS, types.FACEBOOK_LOGIN_SUCCESS];

export default class AnalyticsMiddleware {

    constructor(args = {}) {
        if (args.tracking) {
            if (args.tracking) {
                this.tracking = args.tracking;
                this.analyticsMiddleware = this.analyticsMiddleware.bind(this);
            } else {
                throw new Error('No tracking provided to analyticsMiddleware');
            }
        }
    }

    analyticsMiddleware () {
        return next => action => {
            this.addPeopleProps(action);
            (whiteList.indexOf(action.type) >= 0) &&
                this.tracking.trackWithProperties(action.type, action.payload.user);

            return next(action);
        };
    }

    addPeopleProps(action) {
        if (peoplePropsWhiteList.indexOf(action.type) >= 0) {
            if (this.tracking.trackUser) {
                const { user: { mail, username } } = action.payload;
                if (mail) {
                    const platform = action.type === types.SIGNUP_SUCCESS ? 'email' : 'facebook';
                    this.tracking.trackUser(username, mail, platform);
                } else {
                    console.log('Error, no mail provided on user obj ', action.payload.user);
                }
            }
        }

    }
}
