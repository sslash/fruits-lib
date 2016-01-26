export default function injectDependencies (client) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const { promise, types, ...rest } = action;
            if (!promise) {
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type: REQUEST});
            return promise(client).then(
                (payload) => next({...rest, payload, type: SUCCESS}),
                (error) => next({...rest, error, type: FAILURE})
            ).catch((error)=> {
                console.error('MIDDLEWARE ERROR:', error);
                next({...rest, error, type: FAILURE});
            });
        };
    };
}
