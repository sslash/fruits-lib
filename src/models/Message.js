import {Record, List} from 'immutable';

const MessageRecord = Record({
    // Record will create getter for every property.
    id: null,
    text: '',
    fromId: null,
    toId: null,
    date: null,
    conversationId: null,
    image: null,
    position: null
});


export default class Message extends MessageRecord {}
