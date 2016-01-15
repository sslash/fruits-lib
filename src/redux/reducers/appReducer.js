import * as types from '../constants/actionTypes';

const initialState = {
    isModalOpen: false,
    checkTokenLoading: false
}


export default function reducer (state = initialState, action) {

    switch (action.type) {
        case types.OPEN_LOGIN_MODAL:
            return {
                isModalOpen: true
            }
        case types.CLOSE_LOGIN_MODAL:
            return {
                isModalOpen: false
            }
        case types.CHECK_TOKEN_REQUREST:
            return {
                ...state,
                checkTokenLoading: true
            }
        case types.CHECK_TOKEN_SUCCESS:
            return {
                isModalOpen: false,
                checkTokenLoading: false
            }
        default :
            return state;
    }
}
