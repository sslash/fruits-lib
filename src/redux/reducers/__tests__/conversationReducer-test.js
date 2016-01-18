import {use, expect} from 'chai';
import reducer from '../conversationReducer';
import * as types from '../../constants/actionTypes';
import {List} from 'immutable';
import conversationFixture from './conversationFixture';


describe('Conversation reducer', () => {
    it('Should fetch conversation', () => {

        const newState = reducer(undefined, {
            type: types.FETCH_CONVERSATION
        });
        expect(newState.get('isFetching')).to.be.true;
    });

    it('Should fetch conversation', () => {

        const newState = reducer(undefined, {
            type: types.FETCH_CONVERSATION_ERROR
        });
        expect(newState.get('isFetching')).to.be.false;
        expect(newState.get('isError')).to.be.true;

    });

    it('Should fetch conversation and map conversation', () => {

        const newState = reducer(undefined, {
            type: types.FETCH_CONVERSATION_SUCCESS,
            payload: conversationFixture

        });
        expect(newState.get('isFetching')).to.be.false;
        expect(newState.get('isError')).to.be.false;
        expect(newState.getIn(['conversation', 'id'])).to.equal(587);
        expect(newState.getIn(['conversation', 'messages']).size).to.equal(2);
        expect(newState.getIn(['conversation', 'messages']).get(0).get('image')).to.equal('Routes');
        expect(newState.getIn(['conversation', 'messages']).get(0).get('position')).to.equal('left');
        expect(newState.getIn(['conversation', 'messages']).get(1).get('position')).to.equal('right');
        expect(newState.getIn(['conversation', 'messages']).get(1).get('image')).to.equal('test123');
    });
});
