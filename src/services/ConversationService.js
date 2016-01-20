export default class ConversationService {

    constructor (track) {
        this.track = track;
        this.intervalId = null;
    }

    onSend ({message = {}, rowID = null, conversation, postMessage}) {
        this.track('Sending message in conversation');
        message = {message: message.text, fromId: conversation.get('userId'), conversationId: conversation.get('id'), userToken: conversation.get('userToken')};
        postMessage(message);
    }

    onMount (conversation, getConversation, intervalTime = (60 * 500)) {
        this.track('Conversation is loaded');
        conversation = {userToken: conversation.get('userToken'), conversationId: conversation.get('id')};
        getConversation(conversation);

        //pulling every {intervalTime} , remove when socket io is here.
        this.intervalId = (setInterval(() => {
            getConversation(conversation);
        }, intervalTime));
    }

    unMount () {
        clearInterval(this.intervalId);
    }

}
