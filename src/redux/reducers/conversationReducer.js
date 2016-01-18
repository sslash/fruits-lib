import * as types from '../constants/actionTypes';
import Conversation from '../../models/Conversation';
import {Map} from 'immutable';
import {LOAD} from 'redux-storage';

const initialState = Map({
    conversation: new Conversation(),
    isFetching: false,
    isError: false
});

export default function reducer (state = initialState, action = {}) {

    switch (action.type) {

        case types.FETCH_CONVERSATION:
            return state.set('isFetching', true);

        case types.FETCH_CONVERSATION_ERROR:
            return state.merge({
                isError: true,
                isFetching: false
            });

        case LOAD:
            if(!action.payload.conversation) return state;
            return state.set('conversation', Conversation.mapper(action.payload.conversation.conversation));

        case types.FETCH_CONVERSATION_SUCCESS:
            return state.set('conversation', Conversation.mapper(action.payload));

        case types.POST_MESSAGE_SUCCESS:
            const {messages} = action.payload;
            let conversation = state.get('conversation');
            return state.setIn(['conversation', 'messages'], conversation.addMessage(messages));

        default:
            return state;
    }
}
