import * as actions from '../constants/actionTypes';

export default function reducer (state = [], action) {

    switch (action.type) {
        case actions.PUSH_FLASH_MESSAGE:
            state.push(action.flashMessage);
            return state;

        case actions.POP_FLASH_MESSAGE:
            state.pop();
            return state;

        default:
            return state;
    }
}
