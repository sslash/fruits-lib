import * as actions from '../constants/actionTypes';

export const addNewSeenThing = (thing) => {
    return {
        type: actions.HAS_SEEN_THINGS_ADD,
        thing
    };
}

export const clearSeenThings = () => {
    return {
        type: actions.HAS_SEEN_THINGS_CLEAR,
    };
}
