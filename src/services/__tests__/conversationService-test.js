import {expect} from 'chai';
import ConversationService from '../ConversationService';
import Conversation from '../../models/Conversation';

describe('Conversation service', () => {
    let service, conversation;
    const track = () => {}
    beforeEach(() => {
        service = new ConversationService(track);
        conversation = new Conversation({
            id: 1337,
            userToken: 123456789,
            userId: 1337
        });
    });

    it('Should post a message', () => {
        const message = {
            text: 'sap'
        }
        let postedMessage = {}
        const postMessage = message => postedMessage = message;
        service.onSend({message, conversation, postMessage});
        expect(postedMessage.fromId).to.equal(1337);
        expect(postedMessage.message).to.equal(message.text);
    });

    it('Should fetch conversation and unMount setInterval', () => {
        let postedConverstaion, counter = 0;
        const getConversation = conversation => {
            postedConverstaion = conversation
            counter++;
        };
        const intervalTime = 0;
        service.onMount(conversation, getConversation, intervalTime)
        service.unMount();
        expect(postedConverstaion.userToken).to.equal(123456789);
        expect(service.intervalId._idleNext).to.equal(null);

    });
});
