import {Record, List} from 'immutable';
import Message from './Message';

const ConversationRecord = Record({
    id: null,
    userToken: '',
    messages : new List(),
    userId: null
});

export default class Conversation extends ConversationRecord {

    static mapper (conversation) {
        let conver = new Conversation(conversation);
        conver = conver.set('userId', conversation.id);
        if (conversation.messages) {
            conver = conver.set('messages', conver.addMessage(conversation.messages));
        }
        return conver;
    }

    addMessage (messages) {
        let newMessages = new List();
        messages.forEach((message) => {
            if (message.message) {
                const {position, image} = this.findImageAndPosition(message);
                message = {text: message.message, date: new Date(message.created), position};
                if(image) message.image = image;
                newMessages = newMessages.push(new Message(message));
            }
        });
        return newMessages;
    }

    findImageAndPosition (message) {
        if(this.get('userId') === message.fromId) {
            return {position: 'right', image: message.fromImage}
        } else {
            return {position: 'left', image: message.fromImage}
        }
    }
}
