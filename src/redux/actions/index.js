import * as app from './appActions';
import * as routes from './routesActions';
import * as createVertice from './createVerticeAction';
import * as createRoute from './createRouteActions';
import * as flashMessages from './flashMessagesActions';
import * as user from './userActions';
import * as navbar from './navbarActions';
import * as vertice from './verticeActions';
import * as routeDetail from './routeDetailActions';
import * as suggestions from './suggestionsActions';
import * as notifications from './notificationsActions';
import * as city from './cityActions';

export const actions = Object.assign({}, {
    user,
    app,
    routes,
    vertice,
    createVertice,
    createRoute,
    flashMessages,
    navbar,
    routeDetail,
    suggestions,
    notifications,
    city
});
