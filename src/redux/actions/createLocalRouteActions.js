import  * as actions from '../constants/actionTypes';
import {Iterable} from 'immutable';
let createLocalRouteDAO;

export function init (args = {}) {
    createLocalRouteDAO = args.createLocalRouteDAO;
}

export function fetch (userId) {
    return {
        types: [
            actions.CREATE_LOCAL_ROUTE_FETCH,
            actions.CREATE_LOCAL_ROUTE_FETCH_SUCCESS,
            actions.CREATE_LOCAL_ROUTE_FETCH_FAIL
        ],
        promise: () => createLocalRouteDAO.getByUserId(userId)
    };
}

export function addVertice(vertice, userId) {

    const mappedVertice = Iterable.isIterable(vertice) ?
        vertice.toJSON() : vertice;

    return {
        types: [
            actions.CREATE_LOCAL_ROUTE_VERTICE_ADD,
            actions.CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS,
            actions.CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL
        ],
        promise: () => createLocalRouteDAO.addVertice(mappedVertice, userId)
    };
}

export function removeVertice(verticeId, userId) {

    return {
        types: [
            actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE,
            actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS,
            actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL
        ],
        promise: () => createLocalRouteDAO.removeVertice(verticeId, userId)
    };
}
