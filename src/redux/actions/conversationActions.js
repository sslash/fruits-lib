import  * as actions from '../constants/actionTypes';

export function getConversation (data = {}) {
    const url = '/conversations';
    return {
        types: [
            actions.FETCH_CONVERSATION,
            actions.FETCH_CONVERSATION_SUCCESS,
            actions.FETCH_CONVERSATION_ERROR
        ],
        promise: ({req}) => req.get(url, data),
        meta: data
    };
}

export function createConversation (data) {
    const url = '/conversations';
    return {
        types: [
            actions.FETCH_CONVERSATION,
            actions.FETCH_CONVERSATION_SUCCESS,
            actions.FETCH_CONVERSATION_ERROR
        ],
        promise: ({req}) => req.post(url, data),
        meta: data
    };
}

export function postMessage (data) {
    const url = `/messages/${data.conversationId}/messages`;
    // localhost:8000/api/v1/messages/599/messages
    console.log(url, data, 'sao da')
    return {
        types: [
            actions.POST_MESSAGE,
            actions.POST_MESSAGE_SUCCESS,
            actions.POST_MESSAGE_ERROR
        ],

        promise: ({req}) => req.put(url, data),
        meta: data
    };
}
