import {Record, List, fromJS} from 'immutable';
import timeago from 'time-ago';
import Vertice from './Vertice';
const ta = timeago();

const RouteRecord = Record({
    // Record will create getter for every property.
    id: '',
    title: '',
    _links: null,
    placeName : '',
    bannerImage : '',
    description : '',
    user : {},
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
    comments: new List()
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
        const vertices = route._embedded ? route._embedded.vertices : (route.vertices || []);
        route.vertices = List(vertices.map(vert => Vertice.mapper(vert)));
        route.user = fromJS(route.user || {});
        route.buckets = new List(route.buckets);
        route.comments = new List();
        return new Route(route);
    }

    getTitle () { return this.get('title'); }

    getTimeAgo () {
        const createdDate = this.get('created');
        return createdDate ? ta.ago(new Date(createdDate)) : null;
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
            return [loc.lat, loc.lng];
        });
    }

    // used in ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS
    updateVenueSocials(venueSocials = []) {
        return this.get('vertices')
        .map(vert => {
            // find current venueSocial
            const venueSocial = venueSocials
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
