import * as types from '../constants/actionTypes';


exports.openLoginModal = function openLoginModal () {
    return {
        type: types.OPEN_LOGIN_MODAL,
        isModalOpen: true
    }
}

exports.closeLoginModal = function closeLoginModal () {
    return {
        type: types.CLOSE_LOGIN_MODAL,
        isModalOpen: false
    }
}
