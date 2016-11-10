import {Record, List, fromJS} from 'immutable';
import Vertice from './Vertice';
import User from './User';
import dateFormat from 'dateformat';
import getDefaultCardImg from '../fruitslib/getDefaultCardImg';
import duration from 'humanize-duration';
import get from 'lodash/object/get';

const KM = 1000;

const RouteRecord = Record({
    // Record will create getter for every property.
    id: '',
    title: '',
    _links: null,
    placeName : '',
    bannerImage : '',
    description : '',
    user : new User(),
    created : null,
    defaultRoute: false,

    card: null,
    cardLabeled: null,

    // temporary while we work out sending
    // nested components in fetch
    userId : '',
    buckets : new List(),
    likes : new List(),
    vertices : new List(),
    active: true,
    upvoteCount: 0,
    city: '',
    cityLocation: '',
    isPrivate: false,
    isDraft: false,
    comments: new List(),
    createLocalRouteId: null,
    bucketRouteId: null,
    distance: 0,
    duration: 0,
    rating: 0
});

function _findIndexByVertice (vertices, vertice) {

    if (vertice.sortorder) {
        return vertices.findIndex(v => v.get('sortorder') === vertice.sortorder);

    } else if (vertice.id) {
        return vertices.findIndex(v => v.get('id') === vertice.id);

    } else {
        throw new Error('Failed to find vertice index for vertice', vertice);
    }
}

export default class Route extends RouteRecord {

    static mapper (route) {
        const vertices = get(route, 'vertices', get(route, '_embedded.vertices', []));
        route.vertices = new List(vertices.map(vert => Vertice.mapper(vert)));
        route.user = fromJS(route.user || {});
        route.buckets = new List(route.buckets);
        route.comments = new List();
        return new Route(route);
    }

    getTitle () { return this.get('title'); }

    getTimeAgo () {
        const createdDate = this.get('created');
        return createdDate ? dateFormat(createdDate, 'mmmm dS, yyyy') : null;
    }

    getProfileImage () {
        const user = this.get('user');
        return user.get('profile') ? user.getIn(['profile', 'picture'])
            : user.get('image');
    }

    getCardImage () {
        return this.get('card') || getDefaultCardImg();
    }

    getKM (nrOfDecimals = 0) {
        return (this.get('distance') / KM).toFixed(nrOfDecimals);
    }
    // see https://github.com/EvanHahn/HumanizeDuration.js for different options
    getDuration (opts = { spacer: ' ' }) {
        return duration(this.get('duration'), opts);
    }

    static doUpdate (routeState, vertice, updater) {
        const verts = routeState.getIn(['route', 'vertices']);
        const index = _findIndexByVertice(verts, vertice);
        return routeState.setIn(['route', 'vertices'], updater(verts, index));
    }

    getNextSortorder () {
        return this.get('vertices').size + 1;
    }

    mapVerticesGeolocations() {
        return this.get('vertices').map(v => {
            const loc = v.getIn(['venue', 'geometry']);
            if (!loc) {
                throw new Error('Venue did not have location');
            }
            return [loc.get('lat'), loc.get('lng')];
        });
    }

    // used in ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS
    updateVenueSocials(venueSocials) {
        return this.get('vertices')
        .map(vert => {
            // find current venueSocial
            const venueSocial = (venueSocials || [])
                .filter(vs => !!vs)
                .filter(vs => vs.venueId === (vert.getIn(['venue', 'id']) + ''));

            return venueSocial.length ?
                vert.setIn(['venue', 'venueSocial'], venueSocial[0])
                 :
                vert;
        });
    }

    // used in routeDetail/create reducers
    static updateVertice (routeState, vertice) {

        return Route.doUpdate(routeState, vertice, (verts, index) => {
            return verts.update(index, (vert) => {
                if (!vertice.venue) {
                    return vert
                    .mergeDeep(vertice);
                }

                // explicitly copy the things we want,
                // delete the rest
                // but dont let venue override id in case it doesnt exist
                const venueId = vertice.venue.id ||
                vert.getIn(['venue', 'id']);

                const venueSocial = vertice.venue.venueSocial;
                delete vertice.venue;

                // TODO: might wanna do address and stuff here..
                try {
                    return vert
                    .mergeDeep(vertice)
                    .setIn(['venue', 'id'], venueId)
                    .setIn(['venue', 'venueSocial'], venueSocial);
                } catch (err) {
                    console.log('Failed to update vertice, illegal update values ', err);
                    return vert;
                }
            });
        });
    }

    static addVerticePhoto (routeState, vertice) {
        return Route.doUpdate(routeState, vertice, (verts, index) => {
            return verts.update(index, (vert) => {
                return vert.update('photos', photos => photos.push(vertice.photo));
            });
        });
    };

    static addVerticeTag (routeState, vertice) {
        return Route.doUpdate(routeState, vertice, (verts, index) => {
            return verts.update(index, (vert) => {
                return vert.update('buckets', buckets => buckets.push(vertice.bucket));
            });
        });
    }

    static removeVerticeTag (routeState, vertice) {
        return Route.doUpdate(routeState, vertice, (verts, index) => {
            return verts.update(index, (vert) => {
                return vert.update('buckets', buckets => buckets.delete(
                    buckets.findIndex(p => p.id === vertice.bucket))
                );
            });
        });
    }

    static removeVerticePhoto (routeState, vertice) {
        return Route.doUpdate(routeState, vertice, (verts, index) => {
            return verts.update(index, (vert) => {
                return vert.update('photos', photos =>
                photos.delete(
                    photos.findIndex(p => p.url === vertice.photo.url))
                );
            });
        });
    };
}
