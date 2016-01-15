import * as types from '../constants/actionTypes';

export function pushFlashMessage (flashMessage) {
    return { type: types.PUSH_FLASH_MESSAGE, flashMessage };
}

export function popFlashMessage () {
    return { type: types.POP_FLASH_MESSAGE };
}
