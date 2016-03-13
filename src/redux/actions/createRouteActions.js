import  * as actions from '../constants/actionTypes';
import {reorderVertices} from '../../services/reorderService';
import {Iterable} from 'immutable';
import Vertice from '../../models/Vertice';
import Venue from '../../models/Venue';
import {pollAfterPostVertice, pollSpices} from '../../services/pollSpices';
let routeService;

export function init (args = {}) {
    routeService = args.routeService;
}

export function setCurrentEditingRoute (route) {
    return { type: actions.ROUTE_CREATE_INIT, route };
}

export function setTitle (text) {
    return { type: actions.CREATE_ROUTE_SET_TITLE, text };
}

// only used in mobile app
export function toggleBucket (bucket) {
    return { type: actions.CREATE_ROUTE_TOGGLE_BUCKET, bucket };
}

export function addCustomBucket (routeId, bucketName) {
    return {
        types: [
            actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM,
            actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS,
            actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/buckets/createCustom`, {bucketName}),
    };
}

export function addBucket (routeId, bucketId) {
    return {
        types: [
            actions.CREATE_ROUTE_BUCKET_ADD,
            actions.CREATE_ROUTE_BUCKET_ADD_SUCCESS,
            actions.CREATE_ROUTE_BUCKET_ADD_FAIL
        ],
        promise: ({req}) => req.put(`/routes/${routeId}/buckets/${bucketId}`),
        bucket: {id: bucketId}
    };
}

export function deleteBucket (routeId, bucketId) {
    return {
        types: [
            actions.CREATE_ROUTE_BUCKET_DEL,
            actions.CREATE_ROUTE_BUCKET_DEL_SUCCESS,
            actions.CREATE_ROUTE_BUCKET_DEL_FAIL
        ],
        promise: ({req}) => req.delete(`/routes/${routeId}/buckets/${bucketId}`),
        bucket: {id: bucketId}
    };
}

export function setRouteErrors (errors) {
    return { type: actions.CREATE_ROUTE_SET_ERRORS, errors };
}

export function postRoute (data) {
    return {
        types: [
            actions.POST_ROUTE,
            actions.POST_ROUTE_SUCCESS,
            actions.POST_ROUTE_FAIL
        ],
        promise: ({req}) => req.post('/routes', data),
        meta: data
    };
}

export function updateRoute (routeId, data) {
    return {
        types: [
            actions.CREATE_ROUTE_UPDATE,
            actions.CREATE_ROUTE_UPDATE_SUCCESS,
            actions.CREATE_ROUTE_UPDATE_FAIL
        ],
        promise: ({req}) => req.put(`/routes/${routeId}`, data),
        meta: data
    };
}

// sortorder only if webapp
export function addVerticeToRoute (routeId, vertice, sortorder) {

    const _vertice = Iterable.isIterable(vertice) ?
        vertice : Vertice.createMapper(vertice, sortorder);

    const promises = [

		// SAVE VERTICE
		{
			types: [actions.ADD_VERTICE_TO_ROUTE, actions.ADD_VERTICE_TO_ROUTE_SUCCESS, actions.ADD_VERTICE_TO_ROUTE_FAIL],
			promise: function promise(_ref3) {
				var req = _ref3.req;

				return req.post('/routes/' + routeId + '/vertices', _vertice.toJSON());
			},
			meta: _vertice.set('editMode', true)
		}
	];

    const _sortorder = _vertice.get('sortorder') || sortorder;

	// POLL SPICES
	if (_vertice.getIn(['venue', 'name']) || _vertice.getIn(['venue', 'geometry'])) {
	    promises.push({
	        types: [actions.CREATE_ROUTE_VERTICE_SPICES_FETCH, actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS,
                actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL],
	        promise: pollAfterPostVertice.bind(null, routeId, _sortorder)
	    });
	}

	return promises;

}

export function fetchSpicesForVertice (venueId, sortorder) {
    return {
        types: [
            actions.CREATE_ROUTE_VERTICE_SPICES_FETCH,
            actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS,
            actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL
        ],
        promise: ({req}) => pollSpices(req, null, venueId, sortorder, 1)
    }
}

export function updateVerticeTags (vertice) {
    return { type: actions.VERTICE_UPDATE_TAGS, payload: { id: vertice.id, tags: vertice.tags } };
}

export function updateVertice (updateData, verticeId, routeId) {

    return {
        types: [
            actions.VERTICE_UPDATE,
            actions.VERTICE_UPDATE_SUCCESS,
            actions.VERTICE_UPDATE_FAIL
        ],
        promise: ({req}) => req.put(`/routes/${routeId}/vertices/${verticeId}`, updateData),
        meta: {...updateData, id: verticeId}
    };
}

export function deleteVertice (routeId, deleteVertice, vertices) {
    const delSortorder = deleteVertice.get('sortorder');

    const moveUpOthersPromises = vertices.filter(v =>
            v.get('sortorder') > delSortorder
        ).map(v => {
            const updateData = {
                sortorder: v.get('sortorder') - 1
            };
            return updateVertice(updateData, v.get('id'), routeId);
        }).toJS();

    // delete vertice and move other vertices up one sortorder
    const promises = [{
        types: [
            actions.CREATE_ROUTE_VERTICE_DELETE,
            actions.CREATE_ROUTE_VERTICE_DELETE_SUCCESS,
            actions.CREATE_ROUTE_VERTICE_DELETE_FAIL
        ],
        promise: ({req}) => req.delete(`/routes/${routeId}/vertices/${deleteVertice.get('id')}`),
        meta: {id: deleteVertice.get('id')}
    }]
    .concat(moveUpOthersPromises);

    return promises;
}

/**
* Upload file
* @param {string|object} filename can be reference to
*    file (mobile) or actual file (web)
*/
export function addPhotoToVertice (routeId, verticeId, filename) {

    return {
        types: [
            actions.CREATE_ROUTE_VERTICE_PHOTO_ADD,
            actions.CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS,
            actions.CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL
        ],
        promise: ({req}) => routeService.addPhotoToVertice(routeId, verticeId, filename, req),
        meta: {
            routeId,
            verticeId
        }
    };
}

export function addSpicesPhoto (routeId, verticeId, url, source, externalLink, username) {

    return {
        types: [
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD,
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS,
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL
        ],
        promise: ({req}) => req.put(`/routes/${routeId}/vertices/${verticeId}/photo`, {
            externalImage: url,
            photoSource: source,
            externalLink,
            username
        }),
        meta: {id: verticeId, photo: {url, source}}
    };
}

export function deleteSpicesPhoto (routeId, verticeId, url) {

    return {
        types: [
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE,
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS,
            actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/vertices/${verticeId}/delete-photo`, {
            imageUrl: url
        }),
        meta: {id: verticeId, photo:{url}}
    };
}

export function finishRoute (routeId, data) {
    return {
        types: [
            actions.ROUTE_FINISH,
            actions.ROUTE_FINISH_SUCCESS,
            actions.ROUTE_FINISH_FAIL
        ],
        promise: ({req}) => req.post(`/routes/${routeId}/finito`, data)
    }
};

export function fetchBuckets () {

    return {
        types: [
            actions.FETCH_BUCKETS,
            actions.FETCH_BUCKETS_SUCCESS,
            actions.FETCH_BUCKETS_FAIL
        ],
        promise: ({req}) => req.get('/buckets')
    };
}


export function reorder (routeId, vertices, verticeIndex, upOrDown) {
    const url = `/routes/${routeId}/vertices/reorder`;
    const reorderList = reorderVertices(verticeIndex, vertices, upOrDown);

    return {
        types: [actions.VERTICE_REORDER, actions.VERTICE_REORDER_SUCCESS, actions.VERTICE_REORDER_FAIL],
        promise: ({req}) => req.post(url, {reorderList}),
        meta: {reorderList}
    }
};

// copied from routeDetail
export function fetch (routeId) {
    return {
        types: [
            actions.CREATE_ROUTE_FETCH,
            actions.CREATE_ROUTE_FETCH_SUCCESS,
            actions.CREATE_ROUTE_FETCH_FAIL
        ],
        promise: ({req}) => req.get(`/routes/${routeId}?edit=true`),
        meta: {routeId}
    };
}

export function reset () {
    return { type: actions.CREATE_ROUTE_RESET };
}
