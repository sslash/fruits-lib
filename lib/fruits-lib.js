(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fruits-lib", [], factory);
	else if(typeof exports === 'object')
		exports["fruits-lib"] = factory();
	else
		root["fruits-lib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionTypes = exports.constants = exports.utils = exports.services = exports.middleware = exports.reducers = exports.actions = exports.models = exports.fruitslib = exports.config = undefined;
	
	var _configs = __webpack_require__(1);
	
	Object.defineProperty(exports, 'config', {
	  enumerable: true,
	  get: function get() {
	    return _configs.configs;
	  }
	});
	
	var _fruitslib2 = __webpack_require__(2);
	
	var _fruitslib = _interopRequireWildcard(_fruitslib2);
	
	var _models2 = __webpack_require__(5);
	
	var _models = _interopRequireWildcard(_models2);
	
	var _actions2 = __webpack_require__(14);
	
	var _actions = _interopRequireWildcard(_actions2);
	
	var _reducers2 = __webpack_require__(39);
	
	var _reducers = _interopRequireWildcard(_reducers2);
	
	var _middleware2 = __webpack_require__(83);
	
	var _middleware = _interopRequireWildcard(_middleware2);
	
	var _services2 = __webpack_require__(85);
	
	var _services = _interopRequireWildcard(_services2);
	
	var _utils2 = __webpack_require__(86);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _constants2 = __webpack_require__(18);
	
	var _constants = _interopRequireWildcard(_constants2);
	
	var _actionTypes2 = __webpack_require__(16);
	
	var _actionTypes = _interopRequireWildcard(_actionTypes2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.fruitslib = _fruitslib;
	exports.models = _models;
	exports.actions = _actions;
	exports.reducers = _reducers;
	exports.middleware = _middleware;
	exports.services = _services;
	exports.utils = _utils;
	exports.constants = _constants;
	exports.actionTypes = _actionTypes;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var configs = exports.configs = {
	    apiPath: {
	        local: 'http://localhost:8000/api/v1',
	        // local: 'http://www.routes.guide/api/v1',
	        prod: 'http://www.routes.guide/api/v1'
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.getDefaultCardImg = undefined;
	
	var _getDefaultCardImg2 = __webpack_require__(3);
	
	var _getDefaultCardImg3 = _interopRequireDefault(_getDefaultCardImg2);
	
	var _utils2 = __webpack_require__(4);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.getDefaultCardImg = _getDefaultCardImg3.default;
	exports.utils = _utils;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getDefaultCardImg;
	var images = ['/img/defaultimg3.png', '/img/defaultimg3.png', '/img/defaultimg3.png', '/img/defaultimg1.jpg', '/img/defaultimg2.jpg'];
	
	var len = images.length;
	
	function getDefaultCardImg() {
	    return 'http://www.routes.guide/img/defaultimg3.png';
	}
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.truncate = truncate;
	exports.immutableComparator = immutableComparator;
	function truncate(str, maxLen) {
	    if (!str || !maxLen) {
	        return str;
	    }
	
	    if (str.length > maxLen) {
	        var substr = str.substring(0, maxLen - 3).trim();
	        return substr + '...';
	    }
	
	    return str;
	}
	
	function immutableComparator(key) {
	    return function (a, b) {
	        return a.get(key) - b.get(key);
	    };
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Vertice = exports.Venue = exports.Route = undefined;
	
	var _Route2 = __webpack_require__(6);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _Venue2 = __webpack_require__(9);
	
	var _Venue3 = _interopRequireDefault(_Venue2);
	
	var _Vertice2 = __webpack_require__(8);
	
	var _Vertice3 = _interopRequireDefault(_Vertice2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Route = _Route3.default;
	exports.Venue = _Venue3.default;
	exports.Vertice = _Vertice3.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _Vertice = __webpack_require__(8);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	var _dateformat = __webpack_require__(12);
	
	var _dateformat2 = _interopRequireDefault(_dateformat);
	
	var _getDefaultCardImg = __webpack_require__(3);
	
	var _getDefaultCardImg2 = _interopRequireDefault(_getDefaultCardImg);
	
	var _humanizeDuration = __webpack_require__(13);
	
	var _humanizeDuration2 = _interopRequireDefault(_humanizeDuration);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KM = 1000;
	
	var RouteRecord = (0, _immutable.Record)({
	    // Record will create getter for every property.
	    id: '',
	    title: '',
	    _links: null,
	    placeName: '',
	    bannerImage: '',
	    description: '',
	    user: {},
	    created: null,
	    defaultRoute: false,
	
	    card: null,
	    cardLabeled: null,
	
	    // temporary while we work out sending
	    // nested components in fetch
	    userId: '',
	    buckets: new _immutable.List(),
	    likes: new _immutable.List(),
	    vertices: new _immutable.List(),
	    active: true,
	    upvoteCount: 0,
	    city: '',
	    cityLocation: '',
	    isPrivate: false,
	    isDraft: false,
	    comments: new _immutable.List(),
	    createLocalRouteId: null,
	    bucketRouteId: null,
	    distance: 0,
	    duration: 0,
	    rating: 0
	});
	
	function _findIndexByVertice(vertices, vertice) {
	
	    if (vertice.sortorder) {
	        return vertices.findIndex(function (v) {
	            return v.get('sortorder') === vertice.sortorder;
	        });
	    } else if (vertice.id) {
	        return vertices.findIndex(function (v) {
	            return v.get('id') === vertice.id;
	        });
	    } else {
	        throw new Error('Failed to find vertice index for vertice', vertice);
	    }
	}
	
	var Route = function (_RouteRecord) {
	    _inherits(Route, _RouteRecord);
	
	    function Route() {
	        _classCallCheck(this, Route);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Route).apply(this, arguments));
	    }
	
	    _createClass(Route, [{
	        key: 'getTitle',
	        value: function getTitle() {
	            return this.get('title');
	        }
	    }, {
	        key: 'getTimeAgo',
	        value: function getTimeAgo() {
	            var createdDate = this.get('created');
	            return createdDate ? (0, _dateformat2.default)(createdDate, 'mmmm dS, yyyy') : null;
	        }
	    }, {
	        key: 'getProfileImage',
	        value: function getProfileImage() {
	            var user = this.get('user');
	            return user.get('profile') ? user.getIn(['profile', 'picture']) : user.get('image');
	        }
	    }, {
	        key: 'getCardImage',
	        value: function getCardImage() {
	            return this.get('card') || (0, _getDefaultCardImg2.default)();
	        }
	    }, {
	        key: 'getKM',
	        value: function getKM() {
	            var nrOfDecimals = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	            return (this.get('distance') / KM).toFixed(nrOfDecimals);
	        }
	        // see https://github.com/EvanHahn/HumanizeDuration.js for different options
	
	    }, {
	        key: 'getDuration',
	        value: function getDuration() {
	            var opts = arguments.length <= 0 || arguments[0] === undefined ? { spacer: ' ' } : arguments[0];
	
	            return (0, _humanizeDuration2.default)(this.get('duration'), opts);
	        }
	    }, {
	        key: 'getNextSortorder',
	        value: function getNextSortorder() {
	            return this.get('vertices').size + 1;
	        }
	    }, {
	        key: 'mapVerticesGeolocations',
	        value: function mapVerticesGeolocations() {
	            return this.get('vertices').map(function (v) {
	                var loc = v.getIn(['venue', 'geometry']);
	                if (!loc) {
	                    throw new Error('Venue did not have location');
	                }
	                return [loc.lat, loc.lng];
	            });
	        }
	
	        // used in ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS
	
	    }, {
	        key: 'updateVenueSocials',
	        value: function updateVenueSocials() {
	            var venueSocials = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
	            return this.get('vertices').map(function (vert) {
	                // find current venueSocial
	                var venueSocial = venueSocials.filter(function (vs) {
	                    return vs.venueId === vert.getIn(['venue', 'id']) + '';
	                });
	
	                return venueSocial.length ? vert.setIn(['venue', 'venueSocial'], venueSocial[0]) : vert;
	            });
	        }
	
	        // used in routeDetail/create reducers
	
	    }], [{
	        key: 'mapper',
	        value: function mapper(route) {
	            var vertices = route._embedded ? route._embedded.vertices : route.vertices || (0, _immutable.List)();
	            route.vertices = (0, _immutable.List)(vertices.map(function (vert) {
	                return _Vertice2.default.mapper(vert);
	            }));
	            route.user = (0, _immutable.fromJS)(route.user || {});
	            route.buckets = new _immutable.List(route.buckets);
	            route.comments = new _immutable.List();
	            return new Route(route);
	        }
	    }, {
	        key: 'doUpdate',
	        value: function doUpdate(routeState, vertice, updater) {
	            var verts = routeState.getIn(['route', 'vertices']);
	            var index = _findIndexByVertice(verts, vertice);
	            return routeState.setIn(['route', 'vertices'], updater(verts, index));
	        }
	    }, {
	        key: 'updateVertice',
	        value: function updateVertice(routeState, vertice) {
	
	            return Route.doUpdate(routeState, vertice, function (verts, index) {
	                return verts.update(index, function (vert) {
	                    if (!vertice.venue) {
	                        return vert.mergeDeep(vertice);
	                    }
	
	                    // explicitly copy the things we want,
	                    // delete the rest
	                    // but dont let venue override id in case it doesnt exist
	                    var venueId = vertice.venue.id || vert.getIn(['venue', 'id']);
	
	                    var venueSocial = vertice.venue.venueSocial;
	                    delete vertice.venue;
	
	                    // TODO: might wanna do address and stuff here..
	                    try {
	                        return vert.mergeDeep(vertice).setIn(['venue', 'id'], venueId).setIn(['venue', 'venueSocial'], venueSocial);
	                    } catch (err) {
	                        console.log('Failed to update vertice, illegal update values ', err);
	                        return vert;
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'addVerticePhoto',
	        value: function addVerticePhoto(routeState, vertice) {
	            return Route.doUpdate(routeState, vertice, function (verts, index) {
	                return verts.update(index, function (vert) {
	                    return vert.update('photos', function (photos) {
	                        return photos.push(vertice.photo);
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'addVerticeTag',
	        value: function addVerticeTag(routeState, vertice) {
	            return Route.doUpdate(routeState, vertice, function (verts, index) {
	                return verts.update(index, function (vert) {
	                    return vert.update('buckets', function (buckets) {
	                        return buckets.push(vertice.bucket);
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'removeVerticeTag',
	        value: function removeVerticeTag(routeState, vertice) {
	            return Route.doUpdate(routeState, vertice, function (verts, index) {
	                return verts.update(index, function (vert) {
	                    return vert.update('buckets', function (buckets) {
	                        return buckets.delete(buckets.findIndex(function (p) {
	                            return p.id === vertice.bucket;
	                        }));
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'removeVerticePhoto',
	        value: function removeVerticePhoto(routeState, vertice) {
	            return Route.doUpdate(routeState, vertice, function (verts, index) {
	                return verts.update(index, function (vert) {
	                    return vert.update('photos', function (photos) {
	                        return photos.delete(photos.findIndex(function (p) {
	                            return p.url === vertice.photo.url;
	                        }));
	                    });
	                });
	            });
	        }
	    }]);
	
	    return Route;
	}(RouteRecord);
	
	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory();
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;
	
	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }
	
	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }
	
	
	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }
	
	
	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }
	
	
	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }
	
	
	
	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }
	
	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }
	
	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }
	
	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }
	
	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }
	
	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;
	
	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;
	
	
	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';
	
	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;
	
	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};
	
	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };
	
	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }
	
	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }
	
	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}
	
	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }
	
	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }
	
	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }
	
	  function returnTrue() {
	    return true;
	  }
	
	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }
	
	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }
	
	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }
	
	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }
	
	  /* global Symbol */
	
	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;
	
	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';
	
	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
	
	
	  function Iterator(next) {
	      this.next = next;
	    }
	
	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };
	
	
	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;
	
	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };
	
	
	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }
	
	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }
	
	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }
	
	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }
	
	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }
	
	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }
	
	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }
	
	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };
	
	    Seq.prototype.toSeq = function() {
	      return this;
	    };
	
	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };
	
	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };
	
	    // abstract __iterateUncached(fn, reverse)
	
	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };
	
	    // abstract __iteratorUncached(type, reverse)
	
	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };
	
	
	
	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }
	
	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };
	
	
	
	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }
	
	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };
	
	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };
	
	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };
	
	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };
	
	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };
	
	
	
	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }
	
	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };
	
	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };
	
	
	
	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;
	
	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
	
	  Seq.prototype[IS_SEQ_SENTINEL] = true;
	
	
	
	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }
	
	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };
	
	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };
	
	
	
	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }
	
	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };
	
	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };
	
	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };
	
	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }
	
	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };
	
	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };
	
	
	
	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }
	
	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	
	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };
	
	
	
	
	  // # pragma Helper functions
	
	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }
	
	  var EMPTY_SEQ;
	
	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }
	
	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }
	
	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }
	
	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }
	
	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }
	
	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }
	
	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }
	
	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }
	
	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }
	
	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }
	
	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }
	
	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }
	
	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }
	
	    var notAssociative = !isAssociative(a);
	
	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }
	
	    var flipped = false;
	
	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }
	
	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });
	
	    return allEqual && a.size === bSize;
	  }
	
	  createClass(Repeat, IndexedSeq);
	
	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }
	
	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };
	
	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };
	
	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };
	
	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };
	
	    Repeat.prototype.reverse = function() {
	      return this;
	    };
	
	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };
	
	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };
	
	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };
	
	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };
	
	
	  var EMPTY_REPEAT;
	
	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }
	
	  createClass(Range, IndexedSeq);
	
	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }
	
	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };
	
	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };
	
	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };
	
	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };
	
	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };
	
	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };
	
	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };
	
	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };
	
	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };
	
	
	  var EMPTY_RANGE;
	
	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }
	
	
	  createClass(KeyedCollection, Collection);function KeyedCollection() {}
	
	  createClass(IndexedCollection, Collection);function IndexedCollection() {}
	
	  createClass(SetCollection, Collection);function SetCollection() {}
	
	
	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;
	
	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };
	
	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }
	
	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }
	
	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }
	
	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }
	
	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }
	
	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }
	
	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }
	
	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }
	
	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }
	
	    return hash;
	  }
	
	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;
	
	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());
	
	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }
	
	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }
	
	  var objHashUID = 0;
	
	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }
	
	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};
	
	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }
	
	  createClass(Map, KeyedCollection);
	
	    // @pragma Construction
	
	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };
	
	    // @pragma Access
	
	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };
	
	    // @pragma Modification
	
	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };
	
	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };
	
	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };
	
	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };
	
	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };
	
	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };
	
	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };
	
	    // @pragma Composition
	
	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };
	
	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };
	
	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };
	
	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };
	
	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };
	
	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };
	
	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };
	
	    // @pragma Mutability
	
	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };
	
	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };
	
	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };
	
	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };
	
	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };
	
	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };
	
	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };
	
	
	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }
	
	  Map.isMap = isMap;
	
	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
	
	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;
	
	
	  // #pragma Trie Nodes
	
	
	
	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }
	
	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && entries.length === 1) {
	        return; // undefined
	      }
	
	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new ArrayMapNode(ownerID, newEntries);
	    };
	
	
	
	
	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }
	
	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };
	
	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;
	
	      if (!exists && value === NOT_SET) {
	        return this;
	      }
	
	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	
	      if (newNode === node) {
	        return this;
	      }
	
	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }
	
	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }
	
	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };
	
	
	
	
	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }
	
	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };
	
	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];
	
	      if (removed && !node) {
	        return this;
	      }
	
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }
	
	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);
	
	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }
	
	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };
	
	
	
	
	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }
	
	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };
	
	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	
	      var removed = value === NOT_SET;
	
	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }
	
	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;
	
	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);
	
	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }
	
	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);
	
	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }
	
	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }
	
	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };
	
	
	
	
	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }
	
	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };
	
	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }
	
	      SetRef(didAlter);
	
	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }
	
	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }
	
	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };
	
	
	
	  // #pragma Iterators
	
	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }
	
	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }
	
	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }
	
	  createClass(MapIterator, Iterator);
	
	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }
	
	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };
	
	
	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }
	
	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }
	
	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }
	
	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }
	
	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }
	
	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }
	
	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }
	
	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	
	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);
	
	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }
	
	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }
	
	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }
	
	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }
	
	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }
	
	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }
	
	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }
	
	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }
	
	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }
	
	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }
	
	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }
	
	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }
	
	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }
	
	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
	
	  createClass(List, IndexedCollection);
	
	    // @pragma Construction
	
	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }
	
	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };
	
	    // @pragma Access
	
	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };
	
	    // @pragma Modification
	
	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };
	
	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };
	
	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };
	
	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };
	
	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };
	
	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };
	
	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };
	
	    // @pragma Composition
	
	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };
	
	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };
	
	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };
	
	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };
	
	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };
	
	    // @pragma Iteration
	
	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };
	
	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };
	
	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };
	
	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };
	
	
	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }
	
	  List.isList = isList;
	
	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
	
	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	
	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }
	
	    // TODO: seems like these methods are very similar
	
	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };
	
	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }
	
	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };
	
	
	
	  var DONE = {};
	
	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;
	
	    return iterateNodeOrLeaf(list._root, list._level, 0);
	
	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }
	
	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }
	
	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }
	
	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }
	
	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }
	
	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);
	
	    if (index !== index) {
	      return list;
	    }
	
	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }
	
	    index += list._origin;
	
	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }
	
	    if (!didAlter.value) {
	      return list;
	    }
	
	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }
	
	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }
	
	    var newNode;
	
	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }
	
	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }
	
	    SetRef(didAlter);
	
	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }
	
	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }
	
	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }
	
	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }
	
	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }
	
	    var newLevel = list._level;
	    var newRoot = list._root;
	
	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }
	
	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);
	
	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }
	
	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
	
	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }
	
	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }
	
	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
	
	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;
	
	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }
	
	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }
	
	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }
	
	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }
	
	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }
	
	  createClass(OrderedMap, Map);
	
	    // @pragma Construction
	
	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }
	
	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };
	
	    // @pragma Access
	
	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };
	
	    // @pragma Modification
	
	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };
	
	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };
	
	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };
	
	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };
	
	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };
	
	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };
	
	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };
	
	
	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }
	
	  OrderedMap.isOrderedMap = isOrderedMap;
	
	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
	
	
	
	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }
	
	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }
	
	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }
	
	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }
	
	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };
	
	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };
	
	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };
	
	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };
	
	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };
	
	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };
	
	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };
	
	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };
	
	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };
	
	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };
	
	
	
	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }
	
	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };
	
	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };
	
	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };
	
	
	
	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }
	
	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };
	
	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };
	
	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };
	
	
	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;
	
	
	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }
	
	
	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }
	
	
	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }
	
	
	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }
	
	
	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }
	
	
	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }
	
	
	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;
	
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	
	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }
	
	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);
	
	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }
	
	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }
	
	    var sliceSeq = makeSequence(iterable);
	
	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;
	
	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }
	
	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };
	
	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }
	
	    return sliceSeq;
	  }
	
	
	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }
	
	
	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }
	
	
	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});
	
	    if (iters.length === 0) {
	      return iterable;
	    }
	
	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }
	
	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }
	
	
	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }
	
	
	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }
	
	
	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }
	
	
	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }
	
	
	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }
	
	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }
	
	
	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }
	
	
	  // #pragma Helper Functions
	
	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }
	
	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }
	
	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }
	
	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }
	
	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }
	
	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }
	
	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }
	
	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }
	
	  createClass(Record, KeyedCollection);
	
	    function Record(defaultValues, name) {
	      var hasInitialized;
	
	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };
	
	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;
	
	      return RecordType;
	    }
	
	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };
	
	    // @pragma Access
	
	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };
	
	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };
	
	    // @pragma Modification
	
	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };
	
	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };
	
	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };
	
	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };
	
	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };
	
	
	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;
	
	
	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }
	
	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }
	
	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }
	
	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }
	
	  createClass(Set, SetCollection);
	
	    // @pragma Construction
	
	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };
	
	    // @pragma Access
	
	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };
	
	    // @pragma Modification
	
	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };
	
	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };
	
	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };
	
	    // @pragma Composition
	
	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };
	
	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };
	
	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };
	
	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };
	
	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };
	
	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };
	
	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };
	
	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };
	
	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };
	
	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };
	
	
	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }
	
	  Set.isSet = isSet;
	
	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
	
	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;
	
	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;
	
	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }
	
	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }
	
	  createClass(OrderedSet, Set);
	
	    // @pragma Construction
	
	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }
	
	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };
	
	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };
	
	
	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }
	
	  OrderedSet.isOrderedSet = isOrderedSet;
	
	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
	
	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;
	
	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }
	
	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }
	
	  createClass(Stack, IndexedCollection);
	
	    // @pragma Construction
	
	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }
	
	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };
	
	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };
	
	    // @pragma Access
	
	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };
	
	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };
	
	    // @pragma Modification
	
	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };
	
	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };
	
	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };
	
	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };
	
	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };
	
	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };
	
	    // @pragma Mutability
	
	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };
	
	    // @pragma Iteration
	
	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };
	
	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };
	
	
	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }
	
	  Stack.isStack = isStack;
	
	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';
	
	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;
	
	
	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }
	
	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }
	
	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }
	
	  Iterable.Iterator = Iterator;
	
	  mixin(Iterable, {
	
	    // ### Conversion to other types
	
	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },
	
	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },
	
	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },
	
	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },
	
	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },
	
	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },
	
	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },
	
	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },
	
	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },
	
	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },
	
	
	    // ### Common JavaScript methods and properties
	
	    toString: function() {
	      return '[Iterable]';
	    },
	
	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },
	
	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },
	
	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },
	
	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },
	
	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },
	
	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },
	
	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },
	
	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },
	
	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },
	
	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },
	
	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },
	
	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },
	
	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },
	
	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },
	
	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },
	
	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },
	
	
	    // ### More sequential methods
	
	    butLast: function() {
	      return this.slice(0, -1);
	    },
	
	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },
	
	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },
	
	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },
	
	    equals: function(other) {
	      return deepEqual(this, other);
	    },
	
	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },
	
	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },
	
	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },
	
	    first: function() {
	      return this.find(returnTrue);
	    },
	
	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },
	
	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },
	
	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },
	
	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },
	
	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },
	
	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },
	
	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },
	
	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },
	
	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },
	
	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },
	
	    last: function() {
	      return this.toSeq().reverse().first();
	    },
	
	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },
	
	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },
	
	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },
	
	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },
	
	    rest: function() {
	      return this.slice(1);
	    },
	
	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },
	
	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },
	
	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },
	
	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },
	
	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },
	
	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },
	
	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },
	
	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },
	
	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },
	
	
	    // ### Hashable Object
	
	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }
	
	
	    // ### Internal
	
	    // abstract __iterate(fn, reverse)
	
	    // abstract __iterator(type, reverse)
	  });
	
	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
	
	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;
	
	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();
	
	
	
	  mixin(KeyedIterable, {
	
	    // ### More sequential methods
	
	    flip: function() {
	      return reify(this, flipFactory(this));
	    },
	
	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },
	
	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },
	
	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },
	
	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },
	
	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },
	
	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }
	
	  });
	
	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};
	
	
	
	  mixin(IndexedIterable, {
	
	    // ### Conversion to other types
	
	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },
	
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },
	
	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },
	
	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },
	
	    lastIndexOf: function(searchValue) {
	      var key = this.toKeyedSeq().reverse().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	
	      // var index =
	      // return this.toSeq().reverse().indexOf(searchValue);
	    },
	
	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },
	
	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },
	
	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },
	
	
	    // ### More collection methods
	
	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },
	
	    first: function() {
	      return this.get(0);
	    },
	
	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },
	
	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },
	
	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },
	
	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },
	
	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },
	
	    last: function() {
	      return this.get(-1);
	    },
	
	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },
	
	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },
	
	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }
	
	  });
	
	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
	
	
	
	  mixin(SetIterable, {
	
	    // ### ES6 Collection methods (ES6 Array and Map)
	
	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },
	
	    includes: function(value) {
	      return this.has(value);
	    },
	
	
	    // ### More sequential methods
	
	    keySeq: function() {
	      return this.valueSeq();
	    }
	
	  });
	
	  SetIterable.prototype.has = IterablePrototype.includes;
	
	
	  // Mixin subclasses
	
	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);
	
	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);
	
	
	  // #pragma Helper functions
	
	  function keyMapper(v, k) {
	    return k;
	  }
	
	  function entryMapper(v, k) {
	    return [k, v];
	  }
	
	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }
	
	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }
	
	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }
	
	  function defaultZipper() {
	    return arrCopy(arguments);
	  }
	
	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }
	
	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }
	
	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }
	
	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }
	
	  var Immutable = {
	
	    Iterable: Iterable,
	
	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,
	
	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,
	
	    is: is,
	    fromJS: fromJS
	
	  };
	
	  return Immutable;
	
	}));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _Venue = __webpack_require__(9);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	var _getDefaultCardImg = __webpack_require__(3);
	
	var _getDefaultCardImg2 = _interopRequireDefault(_getDefaultCardImg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function extractCity(venue) {
	    if (!venue.address_components) {
	        return;
	    }
	
	    var res = venue.address_components.filter(function (a) {
	        return a.types.indexOf('postal_town') >= 0 || a.types.indexOf('locality') >= 0;
	    });
	
	    if (res && res.length) {
	        return (0, _immutable.Map)(res[0]);
	    }
	}
	
	var VerticeRecord = (0, _immutable.Record)({
	    // Record will create getter for every property.
	    id: null,
	    title: '',
	    description: '',
	    venue: new _Venue2.default(),
	    sortorder: 1,
	    _links: {},
	    photos: (0, _immutable.List)(),
	    fsTip: null,
	    capturedPhoto: '',
	    location: {},
	    buckets: (0, _immutable.List)(),
	
	    // if currently editing this vertice
	    editMode: false,
	    city: null
	});
	
	var Vertice = function (_VerticeRecord) {
	    _inherits(Vertice, _VerticeRecord);
	
	    function Vertice() {
	        _classCallCheck(this, Vertice);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Vertice).apply(this, arguments));
	    }
	
	    _createClass(Vertice, null, [{
	        key: 'createMapper',
	        value: function createMapper(vertice, sortorder) {
	
	            var venue = _Venue2.default.mapFromGoogleResult(vertice.venue);
	
	            return new Vertice({
	                sortorder: sortorder || 1,
	                showFoursquare: true,
	                showInstagram: true,
	                title: venue.name || venue.address,
	                photos: (0, _immutable.List)(),
	                venue: venue,
	
	                // only used to set the route
	                // use vertice.venue because non-immutable is expected
	                city: extractCity(vertice.venue)
	            });
	        }
	    }, {
	        key: 'mapper',
	        value: function mapper(vertice) {
	            return new Vertice(vertice).set('photos', new _immutable.List(vertice.photos)).set('venue', _Venue2.default.mapper(vertice.venue)).set('buckets', new _immutable.List(vertice.buckets));
	        }
	    }, {
	        key: 'oldToNewMapper',
	        value: function oldToNewMapper(data) {
	
	            var venue = new _Venue2.default(data);
	            return new Vertice({
	                venue: venue,
	                title: data.name,
	                city: data.city,
	                photos: data.photos ? (0, _immutable.List)(data.photos.filter(function (photo) {
	                    return !!photo;
	                })) : (0, _immutable.List)(),
	                sortorder: data.sortorder
	            });
	        }
	    }]);
	
	    return Vertice;
	}(VerticeRecord);
	
	exports.default = Vertice;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _isFunction = __webpack_require__(10);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VenueRecord = (0, _immutable.Record)({
	    id: '',
	    name: null,
	    address: null,
	    geometry: null,
	    spices: (0, _immutable.Map)(),
	    website: null,
	
	    // external references
	    place_id: null, // google
	    googleId: null, // google id (backend)
	    foursquareId: null,
	    yelpId: null,
	
	    // old. must remove me. TODO
	    venueSocial: null,
	
	    // new school
	    images: (0, _immutable.List)(),
	    reviews: (0, _immutable.List)(),
	    ratings: (0, _immutable.List)()
	});
	
	var Venue = function (_VenueRecord) {
	    _inherits(Venue, _VenueRecord);
	
	    function Venue() {
	        _classCallCheck(this, Venue);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Venue).apply(this, arguments));
	    }
	
	    _createClass(Venue, [{
	        key: 'getInstagramImages',
	        value: function getInstagramImages() {
	            return this.getIn(['spices', 'instagramVenue']) || [];
	        }
	    }, {
	        key: 'getFoursquareImages',
	        value: function getFoursquareImages() {
	            return this.getIn(['spices', 'foursquareVenue', 'photos']) || [];
	        }
	    }, {
	        key: 'getFoursquare',
	        value: function getFoursquare() {
	            return this.getIn(['spices', 'foursquareVenue']) || [];
	        }
	    }, {
	        key: 'pluckRating',
	        value: function pluckRating() {
	
	            var venueSpices = this.get('venueSocial');
	            if (!venueSpices) {
	                return null;
	            }
	
	            var rating = {};
	
	            if (venueSpices.foursquare_venue && venueSpices.foursquare_venue.meta && venueSpices.foursquare_venue.meta.rating) {
	                rating.foursquare = {
	                    iconClass: 'fa-foursquare',
	                    rating: venueSpices.foursquare_venue.meta.rating,
	                    divisor: 10
	                };
	            }
	
	            if (venueSpices.yelp_venue && venueSpices.yelp_venue.rating) {
	                rating.yelp = {
	                    iconClass: 'fa-yelp',
	                    rating: venueSpices.yelp_venue.rating,
	                    divisor: 5
	                };
	            }
	
	            return rating;
	        }
	    }, {
	        key: 'getOpeningsHours',
	        value: function getOpeningsHours() {
	            var venueSocial = this.get('venueSocial');
	            if (venueSocial && venueSocial.google_venue && venueSocial.google_venue.opening_hours) {
	                var currentDay = new Date().getDay();
	                currentDay = currentDay === 0 ? 6 : currentDay - 1; //getDay() returns 0 if sunday, but it's indexed in position 6 in googles array;
	                return venueSocial.google_venue.opening_hours.weekday_text[currentDay];
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'getPrice',
	        value: function getPrice() {
	            var venueSocial = this.get('venueSocial');
	            if (venueSocial && venueSocial.foursquare_venue && venueSocial.foursquare_venue.meta) {
	                var price = this.get('venueSocial').foursquare_venue.meta.price;
	
	                if (price) {
	                    var tier = price.tier || 0;
	                    var greyDollar = '$$$$';
	                    var blackDollar = '';
	
	                    for (var i = 0; i < tier; i++) {
	                        blackDollar = blackDollar + '$';
	                        greyDollar = greyDollar.slice(0, -1); //add one black dollar, need to remove one grey dollar
	                    }
	                    return { blackDollar: blackDollar, greyDollar: greyDollar };
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'getComments',
	        value: function getComments() {
	            var venueSocial = this.get('venueSocial');
	            var comments = this.getFoursquareComments(venueSocial.foursquare_venue);
	            return comments;
	        }
	    }, {
	        key: 'getFoursquareComments',
	        value: function getFoursquareComments() {
	            var foursquare = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            if (foursquare.tips) {
	                return (0, _immutable.fromJS)(foursquare.tips.map(function (tip) {
	                    return {
	                        image: Venue.getFoursquareImage((0, _immutable.fromJS)(tip.photo)).uri,
	                        mail: '',
	                        text: tip.text,
	                        username: tip.username
	                    };
	                }));
	            } else {
	                return new _immutable.Map();
	            }
	        }
	    }], [{
	        key: 'getInstagramImage',
	        value: function getInstagramImage(instagramImage) {
	            return { uri: instagramImage.getIn(['images', 'low_resolution', 'url']) };
	        }
	    }, {
	        key: 'getFoursquareImage',
	        value: function getFoursquareImage(foursquareImage) {
	            var wantBig = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	            var prefix = foursquareImage.get('prefix');
	            var suffix = foursquareImage.get('suffix');
	            return wantBig ? { uri: prefix + '500x500' + suffix } : { uri: prefix + '306x306' + suffix };
	        }
	    }, {
	        key: 'mapper',
	        value: function mapper(venue) {
	            var created = new Venue(venue);
	            if (venue.googleId) {
	                return created.set('place_id', venue.googleId);
	            } else {
	                return created;
	            }
	        }
	    }, {
	        key: 'mapFromGoogleResult',
	        value: function mapFromGoogleResult(venue) {
	
	            // google has its own id. delete that
	            delete venue.id;
	
	            // Serialize the geometry data so it can be stored in one format
	            if (venue.geometry) {
	                if (!venue.geometry.location.lng) {
	                    throw new Error('Something went wrong, geometry was not defined');
	                }
	
	                var lat = venue.geometry.location.lat;
	                var lng = venue.geometry.location.lng;
	
	                venue.geometry = (0, _immutable.Map)({
	                    lat: (0, _isFunction2.default)(lat) ? lat() : lat,
	                    lng: (0, _isFunction2.default)(lng) ? lng() : lng
	                });
	            }
	
	            if (venue.formatted_address) {
	                venue.address = venue.formatted_address;
	            } else if (venue.address_components) {
	                var address = '';
	                if (venue.address_components) {
	                    address = [venue.address_components[0] && venue.address_components[0].short_name || '', venue.address_components[1] && venue.address_components[1].short_name || '', venue.address_components[2] && venue.address_components[2].short_name || ''].join(' ');
	                }
	                venue.address = address;
	            }
	
	            return new Venue(venue);
	        }
	    }, {
	        key: 'foursquareToVenue',
	        value: function foursquareToVenue(venue) {
	            var thumb = undefined;var photos = undefined;
	            if (venue.getIn(['venue', 'photos', 'count'])) {
	                var imgBase = venue.getIn(['venue', 'photos', 'groups', 0, 'items', 0]);
	                thumb = imgBase.get('prefix') + '300x300' + imgBase.get('suffix');
	                // used for storing on Vertice
	                photos = [imgBase.get('prefix') + '500x500' + imgBase.get('suffix')];
	            }
	
	            var address = venue.getIn(['venue', 'location', 'formattedAddress']).join(', ');
	            var _venue = venue.get('venue');
	
	            return {
	                photo: thumb,
	                name: _venue.get('name'),
	                description: _venue.get('name') + ', ' + address,
	                rating: _venue.get('rating'),
	                ratingBase: '10',
	                geometry: Venue.mapSpicesGeo(_venue.getIn(['location', 'lat']), _venue.getIn(['location', 'lng'])),
	                address: address,
	                city: _venue.getIn(['location', 'city']),
	                photos: photos,
	                foursquareId: _venue.get('id')
	            };
	        }
	    }, {
	        key: 'yelpToVenue',
	        value: function yelpToVenue(venue) {
	            var address = venue.getIn(['location', 'display_address']).join(', ');
	            return {
	                photo: venue.get('image_url'),
	                name: venue.get('name'),
	                description: venue.get('name') + ', ' + address,
	                rating: venue.get('rating'),
	                ratingBase: '5',
	                geometry: Venue.mapSpicesGeo(venue.getIn(['location', 'coordinate', 'latitude']), venue.getIn(['location', 'coordinate', 'longitude'])),
	                address: address,
	                city: venue.getIn(['location', 'city']),
	                yelpId: venue.get('id')
	            };
	        }
	    }, {
	        key: 'mapSpicesGeo',
	        value: function mapSpicesGeo(lat, lng) {
	            return {
	                location: { lat: lat, lng: lng }
	            };
	        }
	    }]);
	
	    return Venue;
	}(VenueRecord);
	
	exports.default = Venue;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(11);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Date Format 1.2.3
	 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
	 * MIT license
	 *
	 * Includes enhancements by Scott Trenda <scott.trenda.net>
	 * and Kris Kowal <cixar.com/~kris.kowal/>
	 *
	 * Accepts a date, a mask, or a date and a mask.
	 * Returns a formatted version of the given date.
	 * The date defaults to the current date/time.
	 * The mask defaults to dateFormat.masks.default.
	 */
	
	(function(global) {
	  'use strict';
	
	  var dateFormat = (function() {
	      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
	      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	      var timezoneClip = /[^-+\dA-Z]/g;
	  
	      // Regexes and supporting functions are cached through closure
	      return function (date, mask, utc, gmt) {
	  
	        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
	        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
	          mask = date;
	          date = undefined;
	        }
	  
	        date = date || new Date;
	  
	        if(!(date instanceof Date)) {
	          date = new Date(date);
	        }
	  
	        if (isNaN(date)) {
	          throw TypeError('Invalid date');
	        }
	  
	        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
	  
	        // Allow setting the utc/gmt argument via the mask
	        var maskSlice = mask.slice(0, 4);
	        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
	          mask = mask.slice(4);
	          utc = true;
	          if (maskSlice === 'GMT:') {
	            gmt = true;
	          }
	        }
	  
	        var _ = utc ? 'getUTC' : 'get';
	        var d = date[_ + 'Date']();
	        var D = date[_ + 'Day']();
	        var m = date[_ + 'Month']();
	        var y = date[_ + 'FullYear']();
	        var H = date[_ + 'Hours']();
	        var M = date[_ + 'Minutes']();
	        var s = date[_ + 'Seconds']();
	        var L = date[_ + 'Milliseconds']();
	        var o = utc ? 0 : date.getTimezoneOffset();
	        var W = getWeek(date);
	        var N = getDayOfWeek(date);
	        var flags = {
	          d:    d,
	          dd:   pad(d),
	          ddd:  dateFormat.i18n.dayNames[D],
	          dddd: dateFormat.i18n.dayNames[D + 7],
	          m:    m + 1,
	          mm:   pad(m + 1),
	          mmm:  dateFormat.i18n.monthNames[m],
	          mmmm: dateFormat.i18n.monthNames[m + 12],
	          yy:   String(y).slice(2),
	          yyyy: y,
	          h:    H % 12 || 12,
	          hh:   pad(H % 12 || 12),
	          H:    H,
	          HH:   pad(H),
	          M:    M,
	          MM:   pad(M),
	          s:    s,
	          ss:   pad(s),
	          l:    pad(L, 3),
	          L:    pad(Math.round(L / 10)),
	          t:    H < 12 ? 'a'  : 'p',
	          tt:   H < 12 ? 'am' : 'pm',
	          T:    H < 12 ? 'A'  : 'P',
	          TT:   H < 12 ? 'AM' : 'PM',
	          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
	          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
	          W:    W,
	          N:    N
	        };
	  
	        return mask.replace(token, function (match) {
	          if (match in flags) {
	            return flags[match];
	          }
	          return match.slice(1, match.length - 1);
	        });
	      };
	    })();
	
	  dateFormat.masks = {
	    'default':               'ddd mmm dd yyyy HH:MM:ss',
	    'shortDate':             'm/d/yy',
	    'mediumDate':            'mmm d, yyyy',
	    'longDate':              'mmmm d, yyyy',
	    'fullDate':              'dddd, mmmm d, yyyy',
	    'shortTime':             'h:MM TT',
	    'mediumTime':            'h:MM:ss TT',
	    'longTime':              'h:MM:ss TT Z',
	    'isoDate':               'yyyy-mm-dd',
	    'isoTime':               'HH:MM:ss',
	    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
	    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
	    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
	  };
	
	  // Internationalization strings
	  dateFormat.i18n = {
	    dayNames: [
	      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
	      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
	    ],
	    monthNames: [
	      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
	      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
	    ]
	  };
	
	function pad(val, len) {
	  val = String(val);
	  len = len || 2;
	  while (val.length < len) {
	    val = '0' + val;
	  }
	  return val;
	}
	
	/**
	 * Get the ISO 8601 week number
	 * Based on comments from
	 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
	 *
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getWeek(date) {
	  // Remove time components of date
	  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	
	  // Change date to Thursday same week
	  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
	
	  // Take January 4th as it is always in week 1 (see ISO 8601)
	  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
	
	  // Change date to Thursday same week
	  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
	
	  // Check if daylight-saving-time-switch occured and correct for it
	  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
	  targetThursday.setHours(targetThursday.getHours() - ds);
	
	  // Number of weeks between target Thursday and first Thursday
	  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
	  return 1 + Math.floor(weekDiff);
	}
	
	/**
	 * Get ISO-8601 numeric representation of the day of the week
	 * 1 (for Monday) through 7 (for Sunday)
	 * 
	 * @param  {Object} `date`
	 * @return {Number}
	 */
	function getDayOfWeek(date) {
	  var dow = date.getDay();
	  if(dow === 0) {
	    dow = 7;
	  }
	  return dow;
	}
	
	/**
	 * kind-of shortcut
	 * @param  {*} val
	 * @return {String}
	 */
	function kindOf(val) {
	  if (val === null) {
	    return 'null';
	  }
	
	  if (val === undefined) {
	    return 'undefined';
	  }
	
	  if (typeof val !== 'object') {
	    return typeof val;
	  }
	
	  if (Array.isArray(val)) {
	    return 'array';
	  }
	
	  return {}.toString.call(val)
	    .slice(8, -1).toLowerCase();
	};
	
	
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return dateFormat;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = dateFormat;
	  } else {
	    global.dateFormat = dateFormat;
	  }
	})(this);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// HumanizeDuration.js - http://git.io/j0HgmQ
	
	;(function () {
	  var languages = {
	    ar: {
	      y: function (c) { return c === 1 ? 'سنة' : 'سنوات' },
	      mo: function (c) { return c === 1 ? 'شهر' : 'أشهر' },
	      w: function (c) { return c === 1 ? 'أسبوع' : 'أسابيع' },
	      d: function (c) { return c === 1 ? 'يوم' : 'أيام' },
	      h: function (c) { return c === 1 ? 'ساعة' : 'ساعات' },
	      m: function (c) { return c === 1 ? 'دقيقة' : 'دقائق' },
	      s: function (c) { return c === 1 ? 'ثانية' : 'ثواني' },
	      ms: function (c) { return c === 1 ? 'جزء من الثانية' : 'أجزاء من الثانية' },
	      decimal: ','
	    },
	    ca: {
	      y: function (c) { return 'any' + (c !== 1 ? 's' : '') },
	      mo: function (c) { return 'mes' + (c !== 1 ? 'os' : '') },
	      w: function (c) { return 'setman' + (c !== 1 ? 'es' : 'a') },
	      d: function (c) { return 'di' + (c !== 1 ? 'es' : 'a') },
	      h: function (c) { return 'hor' + (c !== 1 ? 'es' : 'a') },
	      m: function (c) { return 'minut' + (c !== 1 ? 's' : '') },
	      s: function (c) { return 'segon' + (c !== 1 ? 's' : '') },
	      ms: function (c) { return 'milisegon' + (c !== 1 ? 's' : '') },
	      decimal: ','
	    },
	    cs: {
	      y: function (c) { return ['rok', 'roku', 'roky', 'let'][getCzechForm(c)] },
	      mo: function (c) { return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][getCzechForm(c)] },
	      w: function (c) { return ['týden', 'týdne', 'týdny', 'týdnů'][getCzechForm(c)] },
	      d: function (c) { return ['den', 'dne', 'dny', 'dní'][getCzechForm(c)] },
	      h: function (c) { return ['hodina', 'hodiny', 'hodiny', 'hodin'][getCzechForm(c)] },
	      m: function (c) { return ['minuta', 'minuty', 'minuty', 'minut'][getCzechForm(c)] },
	      s: function (c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getCzechForm(c)] },
	      ms: function (c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getCzechForm(c)] },
	      decimal: ','
	    },
	    da: {
	      y: 'år',
	      mo: function (c) { return 'måned' + (c !== 1 ? 'er' : '') },
	      w: function (c) { return 'uge' + (c !== 1 ? 'r' : '') },
	      d: function (c) { return 'dag' + (c !== 1 ? 'e' : '') },
	      h: function (c) { return 'time' + (c !== 1 ? 'r' : '') },
	      m: function (c) { return 'minut' + (c !== 1 ? 'ter' : '') },
	      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
	      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
	      decimal: ','
	    },
	    de: {
	      y: function (c) { return 'Jahr' + (c !== 1 ? 'e' : '') },
	      mo: function (c) { return 'Monat' + (c !== 1 ? 'e' : '') },
	      w: function (c) { return 'Woche' + (c !== 1 ? 'n' : '') },
	      d: function (c) { return 'Tag' + (c !== 1 ? 'e' : '') },
	      h: function (c) { return 'Stunde' + (c !== 1 ? 'n' : '') },
	      m: function (c) { return 'Minute' + (c !== 1 ? 'n' : '') },
	      s: function (c) { return 'Sekunde' + (c !== 1 ? 'n' : '') },
	      ms: function (c) { return 'Millisekunde' + (c !== 1 ? 'n' : '') },
	      decimal: ','
	    },
	    en: {
	      y: function (c) { return 'year' + (c !== 1 ? 's' : '') },
	      mo: function (c) { return 'month' + (c !== 1 ? 's' : '') },
	      w: function (c) { return 'week' + (c !== 1 ? 's' : '') },
	      d: function (c) { return 'day' + (c !== 1 ? 's' : '') },
	      h: function (c) { return 'hour' + (c !== 1 ? 's' : '') },
	      m: function (c) { return 'minute' + (c !== 1 ? 's' : '') },
	      s: function (c) { return 'second' + (c !== 1 ? 's' : '') },
	      ms: function (c) { return 'millisecond' + (c !== 1 ? 's' : '') },
	      decimal: '.'
	    },
	    es: {
	      y: function (c) { return 'año' + (c !== 1 ? 's' : '') },
	      mo: function (c) { return 'mes' + (c !== 1 ? 'es' : '') },
	      w: function (c) { return 'semana' + (c !== 1 ? 's' : '') },
	      d: function (c) { return 'día' + (c !== 1 ? 's' : '') },
	      h: function (c) { return 'hora' + (c !== 1 ? 's' : '') },
	      m: function (c) { return 'minuto' + (c !== 1 ? 's' : '') },
	      s: function (c) { return 'segundo' + (c !== 1 ? 's' : '') },
	      ms: function (c) { return 'milisegundo' + (c !== 1 ? 's' : '') },
	      decimal: ','
	    },
	    fi: {
	      y: function (c) { return c === 1 ? 'vuosi' : 'vuotta' },
	      mo: function (c) { return c === 1 ? 'kuukausi' : 'kuukautta' },
	      w: function (c) { return 'viikko' + (c !== 1 ? 'a' : '') },
	      d: function (c) { return 'päivä' + (c !== 1 ? 'ä' : '') },
	      h: function (c) { return 'tunti' + (c !== 1 ? 'a' : '') },
	      m: function (c) { return 'minuutti' + (c !== 1 ? 'a' : '') },
	      s: function (c) { return 'sekunti' + (c !== 1 ? 'a' : '') },
	      ms: function (c) { return 'millisekunti' + (c !== 1 ? 'a' : '') },
	      decimal: ','
	    },
	    fr: {
	      y: function (c) { return 'an' + (c !== 1 ? 's' : '') },
	      mo: 'mois',
	      w: function (c) { return 'semaine' + (c !== 1 ? 's' : '') },
	      d: function (c) { return 'jour' + (c !== 1 ? 's' : '') },
	      h: function (c) { return 'heure' + (c !== 1 ? 's' : '') },
	      m: function (c) { return 'minute' + (c !== 1 ? 's' : '') },
	      s: function (c) { return 'seconde' + (c !== 1 ? 's' : '') },
	      ms: function (c) { return 'milliseconde' + (c !== 1 ? 's' : '') },
	      decimal: ','
	    },
	    gr: {
	      y: function (c) { return c === 1 ? 'χρόνος' : 'χρόνια' },
	      mo: function (c) { return c === 1 ? 'μήνας' : 'μήνες' },
	      w: function (c) { return c === 1 ? 'εβδομάδα' : 'εβδομάδες' },
	      d: function (c) { return c === 1 ? 'μέρα' : 'μέρες' },
	      h: function (c) { return c === 1 ? 'ώρα' : 'ώρες' },
	      m: function (c) { return c === 1 ? 'λεπτό' : 'λεπτά' },
	      s: function (c) { return c === 1 ? 'δευτερόλεπτο' : 'δευτερόλεπτα' },
	      ms: function (c) { return c === 1 ? 'χιλιοστό του δευτερολέπτου' : 'χιλιοστά του δευτερολέπτου' },
	      decimal: ','
	    },
	    hu: {
	      y: 'év',
	      mo: 'hónap',
	      w: 'hét',
	      d: 'nap',
	      h: 'óra',
	      m: 'perc',
	      s: 'másodperc',
	      ms: 'ezredmásodperc',
	      decimal: ','
	    },
	    it: {
	      y: function (c) { return 'ann' + (c !== 1 ? 'i' : 'o') },
	      mo: function (c) { return 'mes' + (c !== 1 ? 'i' : 'e') },
	      w: function (c) { return 'settiman' + (c !== 1 ? 'e' : 'a') },
	      d: function (c) { return 'giorn' + (c !== 1 ? 'i' : 'o') },
	      h: function (c) { return 'or' + (c !== 1 ? 'e' : 'a') },
	      m: function (c) { return 'minut' + (c !== 1 ? 'i' : 'o') },
	      s: function (c) { return 'second' + (c !== 1 ? 'i' : 'o') },
	      ms: function (c) { return 'millisecond' + (c !== 1 ? 'i' : 'o') },
	      decimal: ','
	    },
	    ja: {
	      y: '年',
	      mo: '月',
	      w: '週',
	      d: '日',
	      h: '時間',
	      m: '分',
	      s: '秒',
	      ms: 'ミリ秒',
	      decimal: '.'
	    },
	    ko: {
	      y: '년',
	      mo: '개월',
	      w: '주일',
	      d: '일',
	      h: '시간',
	      m: '분',
	      s: '초',
	      ms: '밀리 초',
	      decimal: '.'
	    },
	    lt: {
	      y: function (c) { return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai' },
	      mo: function (c) { return ['mėnuo', 'mėnesiai', 'mėnesių'][getLithuanianForm(c)] },
	      w: function (c) { return ['savaitė', 'savaitės', 'savaičių'][getLithuanianForm(c)] },
	      d: function (c) { return ['diena', 'dienos', 'dienų'][getLithuanianForm(c)] },
	      h: function (c) { return ['valanda', 'valandos', 'valandų'][getLithuanianForm(c)] },
	      m: function (c) { return ['minutė', 'minutės', 'minučių'][getLithuanianForm(c)] },
	      s: function (c) { return ['sekundė', 'sekundės', 'sekundžių'][getLithuanianForm(c)] },
	      ms: function (c) { return ['milisekundė', 'milisekundės', 'milisekundžių'][getLithuanianForm(c)] },
	      decimal: ','
	    },
	    nl: {
	      y: 'jaar',
	      mo: function (c) { return c === 1 ? 'maand' : 'maanden' },
	      w: function (c) { return c === 1 ? 'week' : 'weken' },
	      d: function (c) { return c === 1 ? 'dag' : 'dagen' },
	      h: 'uur',
	      m: function (c) { return c === 1 ? 'minuut' : 'minuten' },
	      s: function (c) { return c === 1 ? 'seconde' : 'seconden' },
	      ms: function (c) { return c === 1 ? 'milliseconde' : 'milliseconden' },
	      decimal: ','
	    },
	    no: {
	      y: 'år',
	      mo: function (c) { return 'måned' + (c !== 1 ? 'er' : '') },
	      w: function (c) { return 'uke' + (c !== 1 ? 'r' : '') },
	      d: function (c) { return 'dag' + (c !== 1 ? 'er' : '') },
	      h: function (c) { return 'time' + (c !== 1 ? 'r' : '') },
	      m: function (c) { return 'minutt' + (c !== 1 ? 'er' : '') },
	      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
	      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
	      decimal: ','
	    },
	    pl: {
	      y: function (c) { return ['rok', 'roku', 'lata', 'lat'][getPolishForm(c)] },
	      mo: function (c) { return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][getPolishForm(c)] },
	      w: function (c) { return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][getPolishForm(c)] },
	      d: function (c) { return ['dzień', 'dnia', 'dni', 'dni'][getPolishForm(c)] },
	      h: function (c) { return ['godzina', 'godziny', 'godziny', 'godzin'][getPolishForm(c)] },
	      m: function (c) { return ['minuta', 'minuty', 'minuty', 'minut'][getPolishForm(c)] },
	      s: function (c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getPolishForm(c)] },
	      ms: function (c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getPolishForm(c)] },
	      decimal: ','
	    },
	    pt: {
	      y: function (c) { return 'ano' + (c !== 1 ? 's' : '') },
	      mo: function (c) { return c !== 1 ? 'meses' : 'mês' },
	      w: function (c) { return 'semana' + (c !== 1 ? 's' : '') },
	      d: function (c) { return 'dia' + (c !== 1 ? 's' : '') },
	      h: function (c) { return 'hora' + (c !== 1 ? 's' : '') },
	      m: function (c) { return 'minuto' + (c !== 1 ? 's' : '') },
	      s: function (c) { return 'segundo' + (c !== 1 ? 's' : '') },
	      ms: function (c) { return 'milissegundo' + (c !== 1 ? 's' : '') },
	      decimal: ','
	    },
	    ru: {
	      y: function (c) { return ['лет', 'год', 'года'][getSlavicForm(c)] },
	      mo: function (c) { return ['месяцев', 'месяц', 'месяца'][getSlavicForm(c)] },
	      w: function (c) { return ['недель', 'неделя', 'недели'][getSlavicForm(c)] },
	      d: function (c) { return ['дней', 'день', 'дня'][getSlavicForm(c)] },
	      h: function (c) { return ['часов', 'час', 'часа'][getSlavicForm(c)] },
	      m: function (c) { return ['минут', 'минута', 'минуты'][getSlavicForm(c)] },
	      s: function (c) { return ['секунд', 'секунда', 'секунды'][getSlavicForm(c)] },
	      ms: function (c) { return ['миллисекунд', 'миллисекунда', 'миллисекунды'][getSlavicForm(c)] },
	      decimal: ','
	    },
	    uk: {
	      y: function (c) { return ['років', 'рік', 'роки'][getSlavicForm(c)] },
	      mo: function (c) { return ['місяців', 'місяць', 'місяці'][getSlavicForm(c)] },
	      w: function (c) { return ['неділь', 'неділя', 'неділі'][getSlavicForm(c)] },
	      d: function (c) { return ['днів', 'день', 'дні'][getSlavicForm(c)] },
	      h: function (c) { return ['годин', 'година', 'години'][getSlavicForm(c)] },
	      m: function (c) { return ['хвилин', 'хвилина', 'хвилини'][getSlavicForm(c)] },
	      s: function (c) { return ['секунд', 'секунда', 'секунди'][getSlavicForm(c)] },
	      ms: function (c) { return ['мілісекунд', 'мілісекунда', 'мілісекунди'][getSlavicForm(c)] },
	      decimal: ','
	    },
	    sv: {
	      y: 'år',
	      mo: function (c) { return 'månad' + (c !== 1 ? 'er' : '') },
	      w: function (c) { return 'veck' + (c !== 1 ? 'or' : 'a') },
	      d: function (c) { return 'dag' + (c !== 1 ? 'ar' : '') },
	      h: function (c) { return 'timm' + (c !== 1 ? 'ar' : 'e') },
	      m: function (c) { return 'minut' + (c !== 1 ? 'er' : '') },
	      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
	      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
	      decimal: ','
	    },
	    tr: {
	      y: 'yıl',
	      mo: 'ay',
	      w: 'hafta',
	      d: 'gün',
	      h: 'saat',
	      m: 'dakika',
	      s: 'saniye',
	      ms: 'milisaniye',
	      decimal: ','
	    },
	    vi: {
	      y: 'năm',
	      mo: 'tháng',
	      w: 'tuần',
	      d: 'ngày',
	      h: 'giờ',
	      m: 'phút',
	      s: 'giây',
	      ms: 'mili giây',
	      decimal: ','
	    },
	    zh_CN: {
	      y: '年',
	      mo: '个月',
	      w: '周',
	      d: '天',
	      h: '小时',
	      m: '分钟',
	      s: '秒',
	      ms: '毫秒',
	      decimal: '.'
	    },
	    zh_TW: {
	      y: '年',
	      mo: '個月',
	      w: '周',
	      d: '天',
	      h: '小時',
	      m: '分鐘',
	      s: '秒',
	      ms: '毫秒',
	      decimal: '.'
	    }
	  }
	
	  // You can create a humanizer, which returns a function with defaults
	  // parameters.
	  function humanizer (passedOptions) {
	    var result = function humanizer (ms, humanizerOptions) {
	      var options = extend({}, result, humanizerOptions || {})
	      return doHumanization(ms, options)
	    }
	
	    return extend(result, {
	      language: 'en',
	      delimiter: ', ',
	      spacer: ' ',
	      units: ['y', 'mo', 'w', 'd', 'h', 'm', 's'],
	      languages: {},
	      round: false,
	      unitMeasures: {
	        y: 31557600000,
	        mo: 2629800000,
	        w: 604800000,
	        d: 86400000,
	        h: 3600000,
	        m: 60000,
	        s: 1000,
	        ms: 1
	      }
	    }, passedOptions)
	  }
	
	  // The main function is just a wrapper around a default humanizer.
	  var humanizeDuration = humanizer({})
	
	  // doHumanization does the bulk of the work.
	  function doHumanization (ms, options) {
	    var i, len, piece
	
	    // Make sure we have a positive number.
	    // Has the nice sideffect of turning Number objects into primitives.
	    ms = Math.abs(ms)
	
	    var dictionary = options.languages[options.language] || languages[options.language]
	    if (!dictionary) {
	      throw new Error('No language ' + dictionary + '.')
	    }
	
	    var pieces = []
	
	    // Start at the top and keep removing units, bit by bit.
	    var unitName, unitMS, unitCount
	    for (i = 0, len = options.units.length; i < len; i++) {
	      unitName = options.units[i]
	      unitMS = options.unitMeasures[unitName]
	
	      // What's the number of full units we can fit?
	      if (i + 1 === len) {
	        unitCount = ms / unitMS
	      } else {
	        unitCount = Math.floor(ms / unitMS)
	      }
	
	      // Add the string.
	      pieces.push({
	        unitCount: unitCount,
	        unitName: unitName
	      })
	
	      // Remove what we just figured out.
	      ms -= unitCount * unitMS
	    }
	
	    if (options.round) {
	      var ratioToLargerUnit, previousPiece
	      for (i = pieces.length - 1; i >= 0; i--) {
	        piece = pieces[i]
	        piece.unitCount = Math.round(piece.unitCount)
	
	        if (i === 0) { break }
	
	        previousPiece = pieces[i - 1]
	
	        ratioToLargerUnit = options.unitMeasures[previousPiece.unitName] / options.unitMeasures[piece.unitName]
	        if ((piece.unitCount % ratioToLargerUnit) === 0 || (options.largest && ((options.largest - 1) < i))) {
	          previousPiece.unitCount += piece.unitCount / ratioToLargerUnit
	          piece.unitCount = 0
	        }
	      }
	    }
	
	    var result = []
	    for (i = 0, pieces.length; i < len; i++) {
	      piece = pieces[i]
	      if (piece.unitCount) {
	        result.push(render(piece.unitCount, piece.unitName, dictionary, options))
	      }
	
	      if (result.length === options.largest) { break }
	    }
	
	    if (result.length) {
	      return result.join(options.delimiter)
	    } else {
	      return render(0, options.units[options.units.length - 1], dictionary, options)
	    }
	  }
	
	  function render (count, type, dictionary, options) {
	    var decimal
	    if (options.decimal === void 0) {
	      decimal = dictionary.decimal
	    } else {
	      decimal = options.decimal
	    }
	
	    var countStr = count.toString().replace('.', decimal)
	
	    var dictionaryValue = dictionary[type]
	    var word
	    if (typeof dictionaryValue === 'function') {
	      word = dictionaryValue(count)
	    } else {
	      word = dictionaryValue
	    }
	
	    return countStr + options.spacer + word
	  }
	
	  function extend (destination) {
	    var source
	    for (var i = 1; i < arguments.length; i++) {
	      source = arguments[i]
	      for (var prop in source) {
	        if (source.hasOwnProperty(prop)) {
	          destination[prop] = source[prop]
	        }
	      }
	    }
	    return destination
	  }
	
	  // Internal helper function for Czech language.
	  function getCzechForm (c) {
	    if (c === 1) {
	      return 0
	    } else if (Math.floor(c) !== c) {
	      return 1
	    } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
	      return 2
	    } else {
	      return 3
	    }
	  }
	
	  // Internal helper function for Polish language.
	  function getPolishForm (c) {
	    if (c === 1) {
	      return 0
	    } else if (Math.floor(c) !== c) {
	      return 1
	    } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
	      return 2
	    } else {
	      return 3
	    }
	  }
	
	  // Internal helper function for Russian and Ukranian languages.
	  function getSlavicForm (c) {
	    if (Math.floor(c) !== c) {
	      return 2
	    } else if ((c >= 5 && c <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
	      return 0
	    } else if (c % 10 === 1) {
	      return 1
	    } else if (c > 1) {
	      return 2
	    } else {
	      return 0
	    }
	  }
	
	  // Internal helper function for Lithuanian language.
	  function getLithuanianForm (c) {
	    if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
	      return 0
	    } else if (Math.floor(c) !== c || (c % 10 >= 2 && c % 100 > 20) || (c % 10 >= 2 && c % 100 < 10)) {
	      return 1
	    } else {
	      return 2
	    }
	  }
	
	  humanizeDuration.getSupportedLanguages = function getSupportedLanguages () {
	    var result = []
	    for (var language in languages) {
	      if (languages.hasOwnProperty(language)) {
	        result.push(language)
	      }
	    }
	    return result
	  }
	
	  humanizeDuration.humanizer = humanizer
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return humanizeDuration
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else if (typeof module !== 'undefined' && module.exports) {
	    module.exports = humanizeDuration
	  } else {
	    this.humanizeDuration = humanizeDuration
	  }
	})();  // eslint-disable-line semi


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actions = undefined;
	
	var _appActions = __webpack_require__(15);
	
	var app = _interopRequireWildcard(_appActions);
	
	var _routesActions = __webpack_require__(17);
	
	var routes = _interopRequireWildcard(_routesActions);
	
	var _createVerticeAction = __webpack_require__(19);
	
	var createVertice = _interopRequireWildcard(_createVerticeAction);
	
	var _createRouteActions = __webpack_require__(20);
	
	var createRoute = _interopRequireWildcard(_createRouteActions);
	
	var _flashMessagesActions = __webpack_require__(25);
	
	var flashMessages = _interopRequireWildcard(_flashMessagesActions);
	
	var _userActions = __webpack_require__(26);
	
	var user = _interopRequireWildcard(_userActions);
	
	var _navbarActions = __webpack_require__(27);
	
	var navbar = _interopRequireWildcard(_navbarActions);
	
	var _verticeActions = __webpack_require__(28);
	
	var vertice = _interopRequireWildcard(_verticeActions);
	
	var _routeDetailActions = __webpack_require__(29);
	
	var routeDetail = _interopRequireWildcard(_routeDetailActions);
	
	var _suggestionsActions = __webpack_require__(30);
	
	var suggestions = _interopRequireWildcard(_suggestionsActions);
	
	var _notificationsActions = __webpack_require__(31);
	
	var notifications = _interopRequireWildcard(_notificationsActions);
	
	var _cityActions = __webpack_require__(32);
	
	var city = _interopRequireWildcard(_cityActions);
	
	var _bookmarksActions = __webpack_require__(33);
	
	var bookmarks = _interopRequireWildcard(_bookmarksActions);
	
	var _createLocalRouteActions = __webpack_require__(34);
	
	var createLocalRoute = _interopRequireWildcard(_createLocalRouteActions);
	
	var _publicUserProfileActions = __webpack_require__(35);
	
	var publicUserProfile = _interopRequireWildcard(_publicUserProfileActions);
	
	var _userRoutesActions = __webpack_require__(36);
	
	var userRoutes = _interopRequireWildcard(_userRoutesActions);
	
	var _searchActions = __webpack_require__(37);
	
	var search = _interopRequireWildcard(_searchActions);
	
	var _hasSeenThingsActions = __webpack_require__(38);
	
	var hasSeenThings = _interopRequireWildcard(_hasSeenThingsActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var actions = exports.actions = Object.assign({}, {
	    user: user,
	    app: app,
	    routes: routes,
	    vertice: vertice,
	    createVertice: createVertice,
	    createRoute: createRoute,
	    flashMessages: flashMessages,
	    navbar: navbar,
	    routeDetail: routeDetail,
	    suggestions: suggestions,
	    notifications: notifications,
	    city: city,
	    bookmarks: bookmarks,
	    createLocalRoute: createLocalRoute,
	    publicUserProfile: publicUserProfile,
	    userRoutes: userRoutes,
	    search: search,
	    hasSeenThings: hasSeenThings
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.openLoginModal = function openLoginModal() {
	    return {
	        type: types.OPEN_LOGIN_MODAL,
	        isModalOpen: true
	    };
	};
	
	exports.closeLoginModal = function closeLoginModal() {
	    return {
	        type: types.CLOSE_LOGIN_MODAL,
	        isModalOpen: false
	    };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//STANDARD: domain_action_meta
	
	// app
	var OPEN_LOGIN_MODAL = exports.OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
	var CLOSE_LOGIN_MODAL = exports.CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
	var CHECK_TOKEN_SUCCESS = exports.CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
	var CHECK_TOKEN_REQUREST = exports.CHECK_TOKEN_REQUREST = 'CHECK_TOKEN_REQUREST';
	var CHECK_TOKEN_FAILED = exports.CHECK_TOKEN_FAILED = 'CHECK_TOKEN_FAILED';
	
	// notifications
	var NOTIFICATIONS_FETCH = exports.NOTIFICATIONS_FETCH = 'NOTIFICATIONS_FETCH';
	var NOTIFICATIONS_FETCH_SUCCESS = exports.NOTIFICATIONS_FETCH_SUCCESS = 'NOTIFICATIONS_FETCH_SUCCESS';
	var NOTIFICATIONS_FETCH_FAIL = exports.NOTIFICATIONS_FETCH_FAIL = 'NOTIFICATIONS_FETCH_FAIL';
	
	var NOTIFICATIONS_MARK_SEEN = exports.NOTIFICATIONS_MARK_SEEN = 'NOTIFICATIONS_MARK_SEEN';
	var NOTIFICATIONS_MARK_SEEN_SUCCESS = exports.NOTIFICATIONS_MARK_SEEN_SUCCESS = 'NOTIFICATIONS_MARK_SEEN_SUCCESS';
	var NOTIFICATIONS_MARK_SEE_FAIL = exports.NOTIFICATIONS_MARK_SEE_FAIL = 'NOTIFICATIONS_MARK_SEEN_FAIL';
	
	var TRAVELMODE_CHANGED = exports.TRAVELMODE_CHANGED = 'TRAVELMODE_CHANGED';
	
	//navbar
	var NAVBAR_CREATE_PRESSED = exports.NAVBAR_CREATE_PRESSED = 'NAVBAR_CREATE_PRESSED';
	var NAVBAR_HOME_PRESSED = exports.NAVBAR_HOME_PRESSED = 'NAVBAR_HOME_PRESSED';
	var NAVBAR_SEARCH_PRESSED = exports.NAVBAR_SEARCH_PRESSED = 'NAVBAR_SEARCH_PRESSED';
	var NAVBAR_NOTIFICATION_PRESSED = exports.NAVBAR_NOTIFICATION_PRESSED = 'NAVBAR_NOTIFICATION_PRESSED';
	var NAVBAR_USERPROFILE_PRESSED = exports.NAVBAR_USERPROFILE_PRESSED = 'NAVBAR_USERPROFILE_PRESSED';
	
	//vertice
	var VERTICE_MAP_PRESSED = exports.VERTICE_MAP_PRESSED = 'VERTICE_MAP_PRESSED';
	var VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS = exports.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS = 'VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS';
	var VENUES_DIRECTIONS_MATRIX_FETCH_FAIL = exports.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL = 'VENUES_DIRECTIONS_MATRIX_FETCH_FAIL';
	var VENUES_DIRECTIONS_MATRIX_FETCH = exports.VENUES_DIRECTIONS_MATRIX_FETCH = 'VENUES_DIRECTIONS_MATRIX_FETCH';
	
	// routes
	var REQUEST_ROUTES = exports.REQUEST_ROUTES = 'REQUEST_ROUTES';
	var RECEIVE_ROUTES = exports.RECEIVE_ROUTES = 'RECEIVE_ROUTES';
	var RECEIVE_ROUTES_FAILED = exports.RECEIVE_ROUTES_FAILED = 'RECEIVE_ROUTES_FAILED';
	var SELECT_BUCKET = exports.SELECT_BUCKET = 'SELECT_BUCKET';
	var INVALIDATE_BUCKET = exports.INVALIDATE_BUCKET = 'INVALIDATE_BUCKET';
	var SELECTED_BUCKET_BOOTSTRAP = exports.SELECTED_BUCKET_BOOTSTRAP = 'SELECTED_BUCKET_BOOTSTRAP';
	var SELECT_BUCKET_CHANGE = exports.SELECT_BUCKET_CHANGE = 'SELECT_BUCKET_CHANGE';
	var ROUTES_UPVOTE_UPDATE = exports.ROUTES_UPVOTE_UPDATE = 'ROUTES_UPVOTE_UPDATE';
	var ROUTES_UPVOTE_UPDATE_SUCCESS = exports.ROUTES_UPVOTE_UPDATE_SUCCESS = 'ROUTES_UPVOTE_UPDATE_SUCCESS';
	var ROUTES_UPVOTE_UPDATE_FAIL = exports.ROUTES_UPVOTE_UPDATE_FAIL = 'ROUTES_UPVOTE_UPDATE_FAIL';
	
	var ROUTES_QUERY = exports.ROUTES_QUERY = 'ROUTES_QUERY';
	var ROUTES_QUERY_SUCCESS = exports.ROUTES_QUERY_SUCCESS = 'ROUTES_QUERY_SUCCESS';
	var ROUTES_QUERY_FAIL = exports.ROUTES_QUERY_FAIL = 'ROUTES_QUERY_FAIL';
	
	var ROUTES_CLEAR = exports.ROUTES_CLEAR = 'ROUTES_CLEAR';
	
	var FETCH_CITY_BUCKETS = exports.FETCH_CITY_BUCKETS = 'FETCH_CITY_BUCKETS';
	var FETCH_CITY_BUCKETS_SUCCESS = exports.FETCH_CITY_BUCKETS_SUCCESS = 'FETCH_CITY_BUCKETS_SUCCESS';
	var FETCH_CITY_BUCKETS_FAIL = exports.FETCH_CITY_BUCKETS_FAIL = 'FETCH_CITY_BUCKETS_FAIL';
	var CITY_SELECT = exports.CITY_SELECT = 'CITY_SELECT';
	var BUCKETS_CLEAR = exports.BUCKETS_CLEAR = 'BUCKETS_CLEAR';
	
	var CITIES_FETCH = exports.CITIES_FETCH = 'CITIES_FETCH';
	var CITIES_FETCH_SUCCESS = exports.CITIES_FETCH_SUCCESS = 'CITIES_FETCH_SUCCESS';
	var CITIES_FETCH_FAIL = exports.CITIES_FETCH_FAIL = 'CITIES_FETCH_FAIL';
	var CITIES_BUCKETS_FETCH = exports.CITIES_BUCKETS_FETCH = 'CITIES_BUCKETS_FETCH';
	var CITIES_BUCKETS_FETCH_SUCCESS = exports.CITIES_BUCKETS_FETCH_SUCCESS = 'CITIES_BUCKETS_FETCH_SUCCESS';
	var CITIES_BUCKETS_FETCH_FAIL = exports.CITIES_BUCKETS_FETCH_FAIL = 'CITIES_BUCKETS_FETCH_FAIL';
	
	var ROUTE_CREATE_INIT = exports.ROUTE_CREATE_INIT = 'ROUTE_CREATE_INIT';
	
	// route detail
	var ROUTE_DETAIL_FETCH = exports.ROUTE_DETAIL_FETCH = 'ROUTE_DETAIL_FETCH';
	var ROUTE_DETAIL_FETCH_SUCCESS = exports.ROUTE_DETAIL_FETCH_SUCCESS = 'ROUTE_DETAIL_FETCH_SUCCESS';
	var ROUTE_DETAIL_FETCH_FAIL = exports.ROUTE_DETAIL_FETCH_FAIL = 'ROUTE_DETAIL_FETCH_FAIL';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL';
	
	var ROUTE_DETAIL_SPICES_FOR_VENUES_LIST = exports.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST';
	var ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS = exports.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS';
	var ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL = exports.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL = 'ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL';
	
	var ROUTE_DETAIL_COMMENTS_FETCH = exports.ROUTE_DETAIL_COMMENTS_FETCH = 'ROUTE_DETAIL_COMMENTS_FETCH';
	var ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS = exports.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS = 'ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS';
	var ROUTE_DETAIL_COMMENTS_FETCH_FAIL = exports.ROUTE_DETAIL_COMMENTS_FETCH_FAIL = 'ROUTE_DETAIL_COMMENTS_FETCH_FAIL';
	
	var ROUTE_DETAIL_COMMENTS_ADD = exports.ROUTE_DETAIL_COMMENTS_ADD = 'ROUTE_DETAIL_COMMENTS_ADD';
	var ROUTE_DETAIL_COMMENTS_ADD_FAIL = exports.ROUTE_DETAIL_COMMENTS_ADD_FAIL = 'ROUTE_DETAIL_COMMENTS_ADD_FAIL';
	var ROUTE_DETAIL_COMMENTS_ADD_SUCCESS = exports.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS = 'ROUTE_DETAIL_COMMENTS_ADD_SUCCESS';
	
	var ROUTE_DETAIL_COMMENTS_DELETE = exports.ROUTE_DETAIL_COMMENTS_DELETE = 'ROUTE_DETAIL_COMMENTS_DELETE';
	var ROUTE_DETAIL_COMMENTS_DELETE_FAIL = exports.ROUTE_DETAIL_COMMENTS_DELETE_FAIL = 'ROUTE_DETAIL_COMMENTS_DELETE_FAIL';
	var ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS = exports.ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS = 'ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS';
	
	// upvote
	var UPVOTE_ROUTE = exports.UPVOTE_ROUTE = 'UPVOTE_ROUTE';
	var UPVOTE_ROUTE_SUCCESS = exports.UPVOTE_ROUTE_SUCCESS = 'UPVOTE_ROUTE_SUCCESS';
	var UPVOTE_ROUTE_FAIL = exports.UPVOTE_ROUTE_FAIL = 'UPVOTE_ROUTE_FAIL';
	
	// directions
	var FETCH_DIRECTIONS_MATRIX = exports.FETCH_DIRECTIONS_MATRIX = 'FETCH_DIRECTIONS_MATRIX';
	var FETCH_DIRECTIONS_MATRIX_SUCCESS = exports.FETCH_DIRECTIONS_MATRIX_SUCCESS = 'FETCH_DIRECTIONS_MATRIX_SUCCESS';
	var FETCH_DIRECTIONS_MATRIX_FAIL = exports.FETCH_DIRECTIONS_MATRIX_FAIL = 'FETCH_DIRECTIONS_MATRIX_FAIL';
	
	//create vertice
	var VENUE_UPDATE = exports.VENUE_UPDATE = 'VENUE_UPDATE';
	var UPDATE_DESCRIPTION = exports.UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
	var VERTICE_UPDATE_META = exports.VERTICE_UPDATE_META = 'VERTICE_UPDATE_META';
	var UPDATE_PHOTO = exports.UPDATE_PHOTO = 'UPDATE_PHOTO';
	var VERTICE_PHOTO_DELETE = exports.VERTICE_PHOTO_DELETE = 'VERTICE_PHOTO_DELETE';
	
	var GET_VERTICE_LOCATION = exports.GET_VERTICE_LOCATION = 'GET_VERTICE_LOCATION';
	var GET_VERTICE_LOCATION_SUCCESS = exports.GET_VERTICE_LOCATION_SUCCESS = 'GET_VERTICE_LOCATION_SUCCESS';
	var GET_VERTICE_LOCATION_FAIL = exports.GET_VERTICE_LOCATION_FAIL = 'GET_VERTICE_LOCATION_FAIL';
	var SET_VERTICE_LOCATION = exports.SET_VERTICE_LOCATION = 'SET_VERTICE_LOCATION';
	var VERTICE_SPICES_SET = exports.VERTICE_SPICES_SET = 'VERTICE_SPICES_SET';
	var VERTICE_SPICES_GET = exports.VERTICE_SPICES_GET = 'VERTICE_SPICES_GET';
	var VERTICE_SPICES_GET_SUCCESS = exports.VERTICE_SPICES_GET_SUCCESS = 'VERTICE_SPICES_GET_SUCCESS';
	var VERTICE_SPICES_GET_FAIL = exports.VERTICE_SPICES_GET_FAIL = 'VERTICE_SPICES_GET_FAIL';
	var VERTICE_SPICES_SET_PHOTOS = exports.VERTICE_SPICES_SET_PHOTOS = 'VERTICE_SPICES_SET_PHOTOS';
	
	var VERTICE_UPDATE_BUCKETS = exports.VERTICE_UPDATE_BUCKETS = 'VERTICE_UPDATE_BUCKETS';
	var VERTICE_UPDATE_BUCKETS_SUCCESS = exports.VERTICE_UPDATE_BUCKETS_SUCCESS = 'VERTICE_UPDATE_BUCKETS_SUCCESS';
	var VERTICE_UPDATE_BUCKETS_FAIL = exports.VERTICE_UPDATE_BUCKETS_FAIL = 'VERTICE_UPDATE_BUCKETS_FAIL';
	
	var VERTICE_DELETE_BUCKETS = exports.VERTICE_DELETE_BUCKETS = 'VERTICE_DELETE_BUCKETS';
	var VERTICE_DELETE_BUCKETS_SUCCESS = exports.VERTICE_DELETE_BUCKETS_SUCCESS = 'VERTICE_DELETE_BUCKETS_SUCCESS';
	var VERTICE_DELETE_BUCKETS_FAIL = exports.VERTICE_DELETE_BUCKETS_FAIL = 'VERTICE_DELETE_BUCKETS_FAIL';
	
	var CREATE_ROUTE_VERTICE_PHOTO_ADD = exports.CREATE_ROUTE_VERTICE_PHOTO_ADD = 'CREATE_ROUTE_VERTICE_PHOTO_ADD';
	var CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS = exports.CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS = 'CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS';
	var CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL = exports.CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL = 'CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL';
	
	var ROUTE_FINISH = exports.ROUTE_FINISH = 'ROUTE_FINISH';
	var ROUTE_FINISH_SUCCESS = exports.ROUTE_FINISH_SUCCESS = 'ROUTE_FINISH_SUCCESS';
	var ROUTE_FINISH_FAIL = exports.ROUTE_FINISH_FAIL = 'ROUTE_FINISH_FAIL';
	var CREATE_VERTICE_RESET = exports.CREATE_VERTICE_RESET = 'CREATE_VERTICE_RESET';
	
	// IS THIS IN USE??
	var UPDATE_TITLE_STATE = exports.UPDATE_TITLE_STATE = 'UPDATE_TITLE_STATE';
	
	// create route
	var CREATE_ROUTE_SET_TITLE = exports.CREATE_ROUTE_SET_TITLE = 'CREATE_ROUTE_SET_TITLE'; // dont need, use updateRoute
	var CREATE_ROUTE_SET_ERRORS = exports.CREATE_ROUTE_SET_ERRORS = 'CREATE_ROUTE_SET_ERRORS';
	var CREATE_ROUTE_UPDATE = exports.CREATE_ROUTE_UPDATE = 'CREATE_ROUTE_UPDATE';
	var CREATE_ROUTE_UPDATE_SUCCESS = exports.CREATE_ROUTE_UPDATE_SUCCESS = 'CREATE_ROUTE_UPDATE_SUCCESS';
	var CREATE_ROUTE_UPDATE_FAIL = exports.CREATE_ROUTE_UPDATE_FAIL = 'CREATE_ROUTE_UPDATE_FAIL';
	var CREATE_ROUTE_TOGGLE_BUCKET = exports.CREATE_ROUTE_TOGGLE_BUCKET = 'CREATE_ROUTE_TOGGLE_BUCKET';
	var POST_ROUTE = exports.POST_ROUTE = 'POST_ROUTE';
	var POST_ROUTE_SUCCESS = exports.POST_ROUTE_SUCCESS = 'POST_ROUTE_SUCCESS';
	var POST_ROUTE_FAIL = exports.POST_ROUTE_FAIL = 'POST_ROUTE_FAIL';
	var FETCH_BUCKETS = exports.FETCH_BUCKETS = 'FETCH_BUCKETS';
	var FETCH_BUCKETS_SUCCESS = exports.FETCH_BUCKETS_SUCCESS = 'FETCH_BUCKETS_SUCCESS';
	var FETCH_BUCKETS_FAILURE = exports.FETCH_BUCKETS_FAILURE = 'FETCH_BUCKETS_FAILURE';
	var ADD_VERTICE_TO_ROUTE = exports.ADD_VERTICE_TO_ROUTE = 'ADD_VERTICE_TO_ROUTE';
	var ADD_VERTICE_TO_ROUTE_SUCCESS = exports.ADD_VERTICE_TO_ROUTE_SUCCESS = 'ADD_VERTICE_TO_ROUTE_SUCCESS';
	var ADD_VERTICE_TO_ROUTE_FAIL = exports.ADD_VERTICE_TO_ROUTE_FAIL = 'ADD_VERTICE_TO_ROUTE_FAIL';
	var CREATE_ROUTE_VERTICE_SPICES_FETCH = exports.CREATE_ROUTE_VERTICE_SPICES_FETCH = 'CREATE_ROUTE_VERTICE_SPICES_FETCH';
	var CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS = exports.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS';
	var CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL = exports.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL = 'CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL';
	var CREATE_ROUTE_VERTICE_DELETE = exports.CREATE_ROUTE_VERTICE_DELETE = 'CREATE_ROUTE_VERTICE_DELETE';
	var CREATE_ROUTE_VERTICE_DELETE_SUCCESS = exports.CREATE_ROUTE_VERTICE_DELETE_SUCCESS = 'CREATE_ROUTE_VERTICE_DELETE_SUCCESS';
	var CREATE_ROUTE_VERTICE_DELETE_FAIL = exports.CREATE_ROUTE_VERTICE_DELETE_FAIL = 'CREATE_ROUTE_VERTICE_DELETE_FAIL';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS';
	var CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL = exports.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL = 'CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL';
	var CREATE_ROUTE_RESET = exports.CREATE_ROUTE_RESET = 'CREATE_ROUTE_RESET';
	var CREATE_ROUTE_BUCKET_ADD = exports.CREATE_ROUTE_BUCKET_ADD = 'CREATE_ROUTE_BUCKET_ADD';
	var CREATE_ROUTE_BUCKET_ADD_SUCCESS = exports.CREATE_ROUTE_BUCKET_ADD_SUCCESS = 'CREATE_ROUTE_BUCKET_ADD_SUCCESS';
	var CREATE_ROUTE_BUCKET_ADD_FAIL = exports.CREATE_ROUTE_BUCKET_ADD_FAIL = 'CREATE_ROUTE_BUCKET_ADD_FAIL';
	var CREATE_ROUTE_BUCKET_DEL = exports.CREATE_ROUTE_BUCKET_DEL = 'CREATE_ROUTE_BUCKET_DEL';
	var CREATE_ROUTE_BUCKET_DEL_SUCCESS = exports.CREATE_ROUTE_BUCKET_DEL_SUCCESS = 'CREATE_ROUTE_BUCKET_DEL_SUCCESS';
	var CREATE_ROUTE_BUCKET_DEL_FAIL = exports.CREATE_ROUTE_BUCKET_DEL_FAIL = 'CREATE_ROUTE_BUCKET_DEL_FAIL';
	var CREATE_ROUTE_BUCKET_ADD_CUSTOM = exports.CREATE_ROUTE_BUCKET_ADD_CUSTOM = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM';
	var CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS = exports.CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS';
	var CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL = exports.CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL = 'CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL';
	
	// copied from routedetail
	var CREATE_ROUTE_FETCH = exports.CREATE_ROUTE_FETCH = 'CREATE_ROUTE_FETCH';
	var CREATE_ROUTE_FETCH_SUCCESS = exports.CREATE_ROUTE_FETCH_SUCCESS = 'CREATE_ROUTE_FETCH_SUCCESS';
	var CREATE_ROUTE_FETCH_FAIL = exports.CREATE_ROUTE_FETCH_FAIL = 'CREATE_ROUTE_FETCH_FAIL';
	
	var VERTICE_UPDATE = exports.VERTICE_UPDATE = 'VERTICE_UPDATE';
	var VERTICE_UPDATE_SUCCESS = exports.VERTICE_UPDATE_SUCCESS = 'VERTICE_UPDATE_SUCCESS';
	var VERTICE_UPDATE_FAIL = exports.VERTICE_UPDATE_FAIL = 'VERTICE_UPDATE_FAIL';
	
	var VERTICE_REORDER = exports.VERTICE_REORDER = 'VERTICE_REORDER';
	var VERTICE_REORDER_SUCCESS = exports.VERTICE_REORDER_SUCCESS = 'VERTICE_REORDER_SUCCESS';
	var VERTICE_REORDER_FAIL = exports.VERTICE_REORDER_FAIL = 'VERTICE_REORDER_FAIL';
	
	var ROUTE_DETAIL_BOOTSTRAP = exports.ROUTE_DETAIL_BOOTSTRAP = 'ROUTE_DETAIL_BOOTSTRAP';
	
	// flash messages
	var PUSH_FLASH_MESSAGE = exports.PUSH_FLASH_MESSAGE = 'PUSH_FLASH_MESSAGE';
	var POP_FLASH_MESSAGE = exports.POP_FLASH_MESSAGE = 'POP_FLASH_MESSAGE';
	
	// user
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
	var LOGIN_FAIL = exports.LOGIN_FAIL = 'LOGIN_FAIL';
	
	var FACEBOOK_LOGIN = exports.FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
	var FACEBOOK_LOGIN_FAIL = exports.FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';
	var FACEBOOK_LOGIN_SUCCESS = exports.FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
	
	var SIGNUP = exports.SIGNUP = 'SIGNUP';
	var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
	var SIGNUP_FAIL = exports.SIGNUP_FAIL = 'SIGNUP_FAIL';
	var USER_ROUTE_ADD = exports.USER_ROUTE_ADD = 'USER_ROUTE_ADD';
	
	var LOGOUT = exports.LOGOUT = 'LOGOUT';
	var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
	var LOGOUT_FAIL = exports.LOGOUT_FAIL = 'LOGOUT_FAIL';
	
	var FETCH_USER_ROUTES = exports.FETCH_USER_ROUTES = 'FETCH_USER_ROUTES';
	var FETCH_USER_ROUTES_SUCCESS = exports.FETCH_USER_ROUTES_SUCCESS = 'FETCH_USER_ROUTES_SUCCESS';
	var FETCH_USER_ROUTES_FAIL = exports.FETCH_USER_ROUTES_FAIL = 'FETCH_USER_ROUTES_FAIL';
	var FETCH_USER_PROFILE = exports.FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
	var FETCH_USER_PROFILE_SUCCESS = exports.FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
	var FETCH_USER_PROFILE_FAIL = exports.FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';
	var USER_UPLOAD_PROFILE_PICTURE = exports.USER_UPLOAD_PROFILE_PICTURE = 'USER_UPLOAD_PROFILE_PICTURE';
	var USER_UPLOAD_PROFILE_PICTURE_SUCCESS = exports.USER_UPLOAD_PROFILE_PICTURE_SUCCESS = 'USER_UPLOAD_PROFILE_PICTURE_SUCCESS';
	var USER_UPLOAD_PROFILE_PICTURE_FAIL = exports.USER_UPLOAD_PROFILE_PICTURE_FAIL = 'USER_UPLOAD_PROFILE_PICTURE_FAIL';
	var USER_TOKEN_STORE_AND_REDIRECT = exports.USER_TOKEN_STORE_AND_REDIRECT = 'USER_TOKEN_STORE_AND_REDIRECT';
	var USER_BOOTSTRAP = exports.USER_BOOTSTRAP = 'USER_BOOTSTRAP';
	var USER_UPDATE_PROFILE = exports.USER_UPDATE_PROFILE = 'USER_UPDATE_PROFILE';
	var USER_UPDATE_PROFILE_SUCCESS = exports.USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS';
	var USER_UPDATE_PROFILE_FAIL = exports.USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL';
	var USER_CLEAR_ERROR = exports.USER_CLEAR_ERROR = 'USER_CLEAR_ERROR';
	
	// suggestions
	var SUGGESTIONS_FETCH = exports.SUGGESTIONS_FETCH = 'SUGGESTIONS_FETCH';
	var SUGGESTIONS_FETCH_SUCCESS = exports.SUGGESTIONS_FETCH_SUCCESS = 'SUGGESTIONS_FETCH_SUCCESS';
	var SUGGESTIONS_FETCH_FAIL = exports.SUGGESTIONS_FETCH_FAIL = 'SUGGESTIONS_FETCH_FAIL';
	var SUGGESTIONS_CLEAR = exports.SUGGESTIONS_CLEAR = 'SUGGESTIONS_CLEAR';
	
	var SUGGESTIONS_DETAIL_FETCH = exports.SUGGESTIONS_DETAIL_FETCH = 'SUGGESTIONS_DETAIL_FETCH';
	var SUGGESTIONS_DETAIL_FETCH_SUCCESS = exports.SUGGESTIONS_DETAIL_FETCH_SUCCESS = 'SUGGESTIONS_DETAIL_FETCH_SUCCESS';
	var SUGGESTIONS_DETAIL_FETCH_FAIL = exports.SUGGESTIONS_DETAIL_FETCH_FAIL = 'SUGGESTIONS_DETAIL_FETCH_FAIL';
	
	var BOOKMARKS_POST = exports.BOOKMARKS_POST = 'BOOKMARKS_POST';
	var BOOKMARKS_POST_SUCCESS = exports.BOOKMARKS_POST_SUCCESS = 'BOOKMARKS_POST_SUCCESS';
	var BOOKMARKS_POST_FAIL = exports.BOOKMARKS_POST_FAIL = 'BOOKMARKS_POST_FAIL';
	
	var BOOKMARKS_FETCH = exports.BOOKMARKS_FETCH = 'BOOKMARKS_FETCH';
	var BOOKMARKS_FETCH_SUCCESS = exports.BOOKMARKS_FETCH_SUCCESS = 'BOOKMARKS_FETCH_SUCCESS';
	var BOOKMARKS_FETCH_FAIL = exports.BOOKMARKS_FETCH_FAIL = 'BOOKMARKS_FETCH_FAIL';
	
	var BOOKMARKS_IDS_FETCH = exports.BOOKMARKS_IDS_FETCH = 'BOOKMARKS_IDS_FETCH';
	var BOOKMARKS_IDS_FETCH_SUCCESS = exports.BOOKMARKS_IDS_FETCH_SUCCESS = 'BOOKMARKS_IDS_FETCH_SUCCESS';
	var BOOKMARKS_IDS_FETCH_FAIL = exports.BOOKMARKS_IDS_FETCH_FAIL = 'BOOKMARKS_IDS_FETCH_FAIL';
	
	var BOOKMARKS_DELETE = exports.BOOKMARKS_DELETE = 'BOOKMARKS_DELETE';
	var BOOKMARKS_DELETE_SUCCESS = exports.BOOKMARKS_DELETE_SUCCESS = 'BOOKMARKS_DELETE_SUCCESS';
	var BOOKMARKS_DELETE_FAIL = exports.BOOKMARKS_DELETE_FAIL = 'BOOKMARKS_DELETE_FAIL';
	
	var UPDATE_USER_ROUTE = exports.UPDATE_USER_ROUTE = 'UPDATE_USER_ROUTE';
	var UPDATE_USER_ROUTE_SUCCESS = exports.UPDATE_USER_ROUTE_SUCCESS = 'UPDATE_USER_ROUTE_SUCCESS';
	var UPDATE_USER_ROUTE_FAIL = exports.UPDATE_USER_ROUTE_FAIL = 'UPDATE_USER_ROUTE_FAIL';
	
	var CREATE_LOCAL_ROUTE_VERTICE_ADD = exports.CREATE_LOCAL_ROUTE_VERTICE_ADD = 'CREATE_LOCAL_ROUTE_VERTICE_ADD';
	var CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS = exports.CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS = 'CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS';
	var CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL = exports.CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL = 'CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL';
	var CREATE_LOCAL_ROUTE_VERTICE_REMOVE = exports.CREATE_LOCAL_ROUTE_VERTICE_REMOVE = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE';
	var CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS = exports.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS';
	var CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL = exports.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL = 'CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL';
	var CREATE_LOCAL_ROUTE_FETCH = exports.CREATE_LOCAL_ROUTE_FETCH = 'CREATE_LOCAL_ROUTE_FETCH';
	var CREATE_LOCAL_ROUTE_FETCH_SUCCESS = exports.CREATE_LOCAL_ROUTE_FETCH_SUCCESS = 'CREATE_LOCAL_ROUTE_FETCH_SUCCESS';
	var CREATE_LOCAL_ROUTE_FETCH_FAIL = exports.CREATE_LOCAL_ROUTE_FETCH_FAIL = 'CREATE_LOCAL_ROUTE_FETCH_FAIL';
	
	// users
	var PUBLIC_USER_FETCH = exports.PUBLIC_USER_FETCH = 'PUBLIC_USER_FETCH';
	var PUBLIC_USER_FETCH_SUCCESS = exports.PUBLIC_USER_FETCH_SUCCESS = 'PUBLIC_USER_FETCH_SUCCESS';
	var PUBLIC_USER_FETCH_FAIL = exports.PUBLIC_USER_FETCH_FAIL = 'PUBLIC_USER_FETCH_FAIL';
	
	// search
	var SEARCH_CITY_ACTIVE = exports.SEARCH_CITY_ACTIVE = 'SEARCH_CITY_ACTIVE';
	var SEARCH_ROUTES_ACTIVE = exports.SEARCH_ROUTES_ACTIVE = 'SEARCH_ROUTES_ACTIVE';
	var SEARCH_IS_INACTIVE = exports.SEARCH_IS_INACTIVE = 'SEARCH_IS_INACTIVE';
	var SEARCHING_ROUTES = exports.SEARCHING_ROUTES = 'SEARCHING_ROUTES';
	var SEARCHING_CITIES = exports.SEARCHING_CITIES = 'SEARCHING_CITIES';
	var SEARCH_SORT_VALUE_CHANGED = exports.SEARCH_SORT_VALUE_CHANGED = 'SEARCH_SORT_VALUE_CHANGED';
	var SEARCH_HIDE = exports.SEARCH_HIDE = 'SEARCH_HIDE';
	var SEARCH_SHOW = exports.SEARCH_SHOW = 'SEARCH_SHOW';
	
	var PUBLIC_LIKED_ROUTE_FETCH = exports.PUBLIC_LIKED_ROUTE_FETCH = 'PUBLIC_LIKED_ROUTE_FETCH';
	var PUBLIC_LIKED_ROUTE_SUCCESS = exports.PUBLIC_LIKED_ROUTE_SUCCESS = 'PUBLIC_LIKED_ROUTE_SUCCESS';
	var PUBLIC_LIKED_ROUTE_FAIL = exports.PUBLIC_LIKED_ROUTE_FAIL = 'PUBLIC_LIKED_ROUTE_FAIL';
	
	var NO_OP = exports.NO_OP = 'NO_OP';
	var LOAD = exports.LOAD = 'REDUX_STORAGE_LOAD';
	var HAS_SEEN_THINGS_ADD = exports.HAS_SEEN_THINGS_ADD = 'HAS_SEEN_THINGS_ADD';
	var HAS_SEEN_THINGS_CLEAR = exports.HAS_SEEN_THINGS_CLEAR = 'HAS_SEEN_THINGS_CLEAR';

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // TODO: finishe me: http://rackt.github.io/redux/docs/advanced/ExampleRedditAPI.html
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.requestRoutes = requestRoutes;
	exports.shouldFetchRoutes = shouldFetchRoutes;
	exports.fetchRoutesIfNeeded = fetchRoutesIfNeeded;
	exports.clearRoutes = clearRoutes;
	exports.fetchCityBuckets = fetchCityBuckets;
	exports.selectBucket = selectBucket;
	exports.invalidateBucket = invalidateBucket;
	exports.queryRoutes = queryRoutes;
	exports.upvoteRouteInGrid = upvoteRouteInGrid;
	exports.queryRoutesNative = queryRoutesNative;
	
	var _immutable = __webpack_require__(7);
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _constants = __webpack_require__(18);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function requestRoutes(bucketName, bucketId, city, offset, limit) {
	
	    var params = {
	        offset: offset,
	        limit: limit
	    };
	
	    // TODO: remove this ugly hack
	    if (bucketId && bucketName !== _constants.DEFAULT_BUCKET_NAME) {
	        params.category = bucketId;
	    }
	    if (city) {
	        params.city = city;
	    }
	
	    return {
	        types: [types.REQUEST_ROUTES, types.RECEIVE_ROUTES, types.RECEIVE_ROUTES_FAILED],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	
	            return req.get('/routes', { params: params });
	        },
	        meta: {
	            bucketName: bucketName,
	            offset: offset
	        }
	    };
	}
	
	function shouldFetchRoutes(routes, bucket, offset) {
	    var routesByBucket = routes.get(bucket);
	    if (!routesByBucket) {
	        return true;
	    } else if (routesByBucket.isFetching) {
	        return false;
	    } else if (offset > routesByBucket.get('offset')) {
	        return true;
	    } else {
	        return routesByBucket.didInvalidate;
	    }
	}
	
	/**
	* @param {object} bucket either a bucket (Map),
	* or a bucketName (string)     
	*/
	function fetchRoutesIfNeeded(bucket, bucketId, city, offset, limit) {
	    var bucketName = _immutable.Iterable.isIterable(bucket) ? bucket.get('name') : bucket;
	
	    return requestRoutes(bucketName, bucketId, city, offset, limit);
	}
	
	function clearRoutes() {
	    return { type: types.ROUTES_CLEAR };
	}
	
	function fetchCityBuckets(dispatch) {
	    var city = arguments.length <= 1 || arguments[1] === undefined ? 'Oslo' : arguments[1];
	    var resetRoutes = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	    resetRoutes && dispatch({ type: types.ROUTES_CLEAR });
	
	    return {
	        types: [types.FETCH_CITY_BUCKETS, types.FETCH_CITY_BUCKETS_SUCCESS, types.FETCH_CITY_BUCKETS_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	
	            return req.get('/buckets', { params: { city: city } });
	        }
	    };
	}
	
	function selectBucket(bucket) {
	    var _bucket = _immutable.Iterable.isIterable(bucket) ? bucket : (0, _immutable.fromJS)(bucket);
	
	    return {
	        type: types.SELECT_BUCKET,
	        bucket: _bucket
	    };
	}
	
	// TODO: finishe me
	function invalidateBucket(bucket) {
	    return {
	        type: types.INVALIDATE_BUCKET,
	        bucket: bucket
	    };
	}
	
	/* USE THIS IN EVERY ROUTE SEARCH FROM NOW */
	// reducer key will be: city:terms
	// TODO: nextPage(terms, offset, limit, city);
	function queryRoutes(terms, offset, limit, city, sort, others) {
	    var params = _extends({
	        terms: terms || '',
	        offset: offset,
	        limit: limit,
	        city: city || '',
	        sort: sort || ''
	    }, others);
	    return {
	        types: [types.ROUTES_QUERY, types.ROUTES_QUERY_SUCCESS, types.ROUTES_QUERY_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	
	            return req.get('/routes', { params: params });
	        },
	        meta: params
	    };
	}
	
	// called from an action sequece (routeDetail.upvoteRoute).
	// therefore has to return a promise even
	// though it only has to return the previous payload
	function upvoteRouteInGrid(routeId) {
	    return {
	        types: [types.ROUTES_UPVOTE_UPDATE, types.ROUTES_UPVOTE_UPDATE_SUCCESS, types.ROUTES_UPVOTE_UPDATE_FAIL],
	        promise: function promise(_ref4) {
	            var result = _ref4.result;
	
	            return Promise.resolve(result.payload);
	        },
	        meta: {
	            routeId: routeId
	        }
	    };
	}
	
	function getCurrentRoutes(routes) {
	    var key = routes.get('key') || _constants.DEFAULT_GRID_KEY;
	    return routes.get(key);
	}
	
	// TODO Routes webapp should also use this
	// wrapper for doing a routes search
	
	function queryRoutesNative(_ref5) {
	    var _ref5$selectedCity = _ref5.selectedCity;
	    var selectedCity = _ref5$selectedCity === undefined ? '' : _ref5$selectedCity;
	    var stateRoutes = _ref5.stateRoutes;
	    var _ref5$searchTerm = _ref5.searchTerm;
	    var searchTerm = _ref5$searchTerm === undefined ? '' : _ref5$searchTerm;
	    var _ref5$sortName = _ref5.sortName;
	    var sortName = _ref5$sortName === undefined ? _constants.POPULAR : _ref5$sortName;
	    var _ref5$resetOffset = _ref5.resetOffset;
	    var resetOffset = _ref5$resetOffset === undefined ? false : _ref5$resetOffset;
	
	    var currentRoutes = getCurrentRoutes(stateRoutes);
	    var limit = currentRoutes ? currentRoutes.get('limit') : 40;
	    var offset = undefined;
	
	    // when we search, we reset the current offset back to 0
	    if (resetOffset) {
	        offset = 0;
	    } else {
	        offset = currentRoutes ? currentRoutes.get('offset') + 1 : 0;
	    }
	
	    return queryRoutes(searchTerm, offset, limit, selectedCity, sortName);
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// routes
	var DEFAULT_GRID_KEY = exports.DEFAULT_GRID_KEY = 'DEFAULT_GRID_KEY';
	var DEFAULT_BUCKET_NAME = exports.DEFAULT_BUCKET_NAME = 'all';
	var DEFAULT_CITY = exports.DEFAULT_CITY = 'DEFAULT_CITY';
	var DEFAULT_TERMS = exports.DEFAULT_TERMS = 'DEFAULT_TERMS';
	
	// TODO WEB TO USE THIS contz
	// Consts for toggle bar.
	var LATEST = exports.LATEST = 'latest';
	var POPULAR = exports.POPULAR = 'popular';
	
	// has seen things
	var HAS_SEEN_FIRST_BOOKMARK = exports.HAS_SEEN_FIRST_BOOKMARK = 'HAS_SEEN_FIRST_BOOKMARK';

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	exports.updateVenue = updateVenue;
	exports.updateDescription = updateDescription;
	exports.updateMeta = updateMeta;
	exports.updatePhoto = updatePhoto;
	exports.removePhoto = removePhoto;
	exports.getVerticeLocation = getVerticeLocation;
	exports.setVerticeLocation = setVerticeLocation;
	exports.setSpices = setSpices;
	exports.setSpicesPhotos = setSpicesPhotos;
	exports.getVerticeSpices = getVerticeSpices;
	exports.reset = reset;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _createRouteActions = __webpack_require__(20);
	
	var createRouteActions = _interopRequireWildcard(_createRouteActions);
	
	var _Venue = __webpack_require__(9);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	var _GooglePlacesAPIClient = __webpack_require__(23);
	
	var _GooglePlacesAPIClient2 = _interopRequireDefault(_GooglePlacesAPIClient);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var googleAPI = undefined;
	
	//
	// INTERNALS
	//
	// function findCurrentEditingVertice (createRoute) {
	//     const vert = createRoute.getIn(['route', 'vertices'])
	//         .find(v => v.get('editMode') === true);
	//     if (!vert || !vert.size) {
	//         throw new Error('Failed to find current editing vertice');
	//     }
	//
	//     return vert;
	// }
	
	function possiblyFetchVenueDetail(venue) {
	    if (!venue.geometry && venue.place_id) {
	        return googleAPI.fetchLatAndLng(venue.place_id).then(function (venueRes) {
	            return _Venue2.default.mapFromGoogleResult(venueRes.result);
	        });
	    } else {
	        return Promise.resolve(_Venue2.default.mapFromGoogleResult(venue));
	    }
	}
	
	function updateVenueAfterDetailFetch(venue, dispatch) {
	
	    // Route has not been selected, normal update
	    return dispatch({ type: actions.VENUE_UPDATE, venue: venue });
	}
	
	//
	// actions
	//
	
	function init() {
	    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    googleAPI = new _GooglePlacesAPIClient2.default({
	        GOOGLE_API_KEY: args.GOOGLE_API_KEY,
	        request: args.request
	    });
	}
	
	function updateVenue(venue, dispatch) {
	
	    return possiblyFetchVenueDetail(venue).then(function (updatedVenue) {
	        return updateVenueAfterDetailFetch(updatedVenue, dispatch);
	    }).catch(function (err) {
	        console.log('Failed to fetch venue', err); // TODO track this
	        updateVenueAfterDetailFetch(venue, dispatch);
	    });
	}
	
	function updateDescription(text) {
	    return { type: actions.UPDATE_DESCRIPTION, text: text };
	}
	
	function updateMeta(meta) {
	    return { type: actions.VERTICE_UPDATE_META, meta: meta };
	}
	
	function updatePhoto(photo) {
	    return { type: actions.UPDATE_PHOTO, photo: photo };
	}
	
	function removePhoto() {
	    return { type: actions.VERTICE_PHOTO_DELETE };
	}
	
	function getVerticeLocation(placeid) {
	    return {
	        types: [actions.GET_VERTICE_LOCATION, actions.GET_VERTICE_LOCATION_SUCCESS, actions.GET_VERTICE_LOCATION_FAIL],
	        promise: function promise() {
	            return googleAPI.fetchLatAndLng(placeid);
	        }
	    };
	}
	
	function setVerticeLocation(location) {
	    return { type: actions.SET_VERTICE_LOCATION, location: location };
	}
	
	function setSpices(index, spice) {
	    return { type: actions.VERTICE_SPICES_SET, index: index, spice: spice };
	}
	
	function setSpicesPhotos() {
	    return { type: actions.VERTICE_SPICES_SET_PHOTOS };
	}
	
	function getVerticeSpices(name, geometry) {
	    return {
	        types: [actions.VERTICE_SPICES_GET, actions.VERTICE_SPICES_GET_SUCCESS, actions.VERTICE_SPICES_GET_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/venues/getSpicesByGEOandName', { params: { name: name, lat: geometry.lat, lng: geometry.lng } });
	        }
	    };
	}
	
	function reset() {
	    return { type: actions.CREATE_VERTICE_RESET };
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	exports.setCurrentEditingRoute = setCurrentEditingRoute;
	exports.setTitle = setTitle;
	exports.toggleBucket = toggleBucket;
	exports.addCustomBucket = addCustomBucket;
	exports.addBucket = addBucket;
	exports.deleteBucket = deleteBucket;
	exports.setRouteErrors = setRouteErrors;
	exports.postRoute = postRoute;
	exports.updateRoute = updateRoute;
	exports.addVerticeToRoute = addVerticeToRoute;
	exports.fetchSpicesForVertice = fetchSpicesForVertice;
	exports.updateVerticeBucket = updateVerticeBucket;
	exports.deleteVerticeBucket = deleteVerticeBucket;
	exports.updateVertice = updateVertice;
	exports.deleteVertice = deleteVertice;
	exports.addPhotoToVertice = addPhotoToVertice;
	exports.addSpicesPhoto = addSpicesPhoto;
	exports.deleteSpicesPhoto = deleteSpicesPhoto;
	exports.finishRoute = finishRoute;
	exports.fetchBuckets = fetchBuckets;
	exports.reorder = reorder;
	exports.fetch = fetch;
	exports.reset = reset;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _reorderService = __webpack_require__(21);
	
	var _immutable = __webpack_require__(7);
	
	var _Vertice = __webpack_require__(8);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	var _Venue = __webpack_require__(9);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	var _pollSpices = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var routeService = undefined;
	
	function init() {
	    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    routeService = args.routeService;
	}
	
	function setCurrentEditingRoute(route) {
	    return { type: actions.ROUTE_CREATE_INIT, route: route };
	}
	
	function setTitle(text) {
	    return { type: actions.CREATE_ROUTE_SET_TITLE, text: text };
	}
	
	// only used in mobile app
	function toggleBucket(bucket) {
	    return { type: actions.CREATE_ROUTE_TOGGLE_BUCKET, bucket: bucket };
	}
	
	function addCustomBucket(routeId, bucketName) {
	    return {
	        types: [actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM, actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS, actions.CREATE_ROUTE_BUCKET_ADD_CUSTOM_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.post('/routes/' + routeId + '/buckets/createCustom', { bucketName: bucketName });
	        }
	    };
	}
	
	function addBucket(routeId, bucketId) {
	    return {
	        types: [actions.CREATE_ROUTE_BUCKET_ADD, actions.CREATE_ROUTE_BUCKET_ADD_SUCCESS, actions.CREATE_ROUTE_BUCKET_ADD_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.put('/routes/' + routeId + '/buckets/' + bucketId);
	        },
	        bucket: { id: bucketId }
	    };
	}
	
	function deleteBucket(routeId, bucketId) {
	    return {
	        types: [actions.CREATE_ROUTE_BUCKET_DEL, actions.CREATE_ROUTE_BUCKET_DEL_SUCCESS, actions.CREATE_ROUTE_BUCKET_DEL_FAIL],
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return req.delete('/routes/' + routeId + '/buckets/' + bucketId);
	        },
	        bucket: { id: bucketId }
	    };
	}
	
	function setRouteErrors(errors) {
	    return { type: actions.CREATE_ROUTE_SET_ERRORS, errors: errors };
	}
	
	function postRoute(data) {
	    return {
	        types: [actions.POST_ROUTE, actions.POST_ROUTE_SUCCESS, actions.POST_ROUTE_FAIL],
	        promise: function promise(_ref5) {
	            var req = _ref5.req;
	            return req.post('/routes', data);
	        },
	        meta: data
	    };
	}
	
	function updateRoute(routeId, data) {
	    return {
	        types: [actions.CREATE_ROUTE_UPDATE, actions.CREATE_ROUTE_UPDATE_SUCCESS, actions.CREATE_ROUTE_UPDATE_FAIL],
	        promise: function promise(_ref6) {
	            var req = _ref6.req;
	            return req.put('/routes/' + routeId, data);
	        },
	        meta: data
	    };
	}
	
	// sortorder only if webapp
	function addVerticeToRoute(routeId, vertice, sortorder) {
	    var _vertice = _immutable.Iterable.isIterable(vertice) ? vertice : _Vertice2.default.createMapper(vertice, sortorder);
	
	    var promises = [
	
	    // SAVE VERTICE
	    {
	        types: [actions.ADD_VERTICE_TO_ROUTE, actions.ADD_VERTICE_TO_ROUTE_SUCCESS, actions.ADD_VERTICE_TO_ROUTE_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	
	            return req.post('/routes/' + routeId + '/vertices', _vertice.toJSON());
	        },
	        meta: _vertice.set('editMode', true)
	    }];
	
	    var _sortorder = _vertice.get('sortorder') || sortorder;
	
	    // POLL SPICES
	    if (_vertice.getIn(['venue', 'name']) || _vertice.getIn(['venue', 'geometry'])) {
	        promises.push({
	            types: [actions.CREATE_ROUTE_VERTICE_SPICES_FETCH, actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL],
	            promise: _pollSpices.pollAfterPostVertice.bind(null, routeId, _sortorder)
	        });
	    }
	
	    return promises;
	}
	
	function fetchSpicesForVertice(venueId, sortorder) {
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_SPICES_FETCH, actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL],
	        promise: function promise(_ref7) {
	            var req = _ref7.req;
	            return (0, _pollSpices.pollSpices)(req, null, venueId, sortorder, 1);
	        }
	    };
	}
	
	function updateVerticeBucket(routeId, verticeId, bucket) {
	    return {
	        types: [actions.VERTICE_UPDATE_BUCKETS, actions.VERTICE_UPDATE_BUCKETS_SUCCESS, actions.VERTICE_UPDATE_BUCKETS_FAIL],
	        promise: function promise(_ref8) {
	            var req = _ref8.req;
	            return req.put('/routes/' + routeId + '/vertices/' + verticeId + '/buckets', { bucket: bucket });
	        },
	        meta: { bucket: bucket, id: verticeId }
	    };
	};
	
	function deleteVerticeBucket(routeId, verticeId, bucketId) {
	    return {
	        types: [actions.VERTICE_DELETE_BUCKETS, actions.VERTICE_DELETE_BUCKETS_SUCCESS, actions.VERTICE_DELETE_BUCKETS_FAIL],
	        promise: function promise(_ref9) {
	            var req = _ref9.req;
	            return req.delete('/routes/' + routeId + '/vertices/' + verticeId + '/buckets/' + bucketId);
	        },
	        meta: { bucketId: bucketId, id: verticeId }
	    };
	};
	
	function updateVertice(updateData, verticeId, routeId) {
	
	    return {
	        types: [actions.VERTICE_UPDATE, actions.VERTICE_UPDATE_SUCCESS, actions.VERTICE_UPDATE_FAIL],
	        promise: function promise(_ref10) {
	            var req = _ref10.req;
	            return req.put('/routes/' + routeId + '/vertices/' + verticeId, updateData);
	        },
	        meta: _extends({}, updateData, { id: verticeId })
	    };
	}
	
	function deleteVertice(routeId, deleteVertice, vertices) {
	    var delSortorder = deleteVertice.get('sortorder');
	
	    var moveUpOthersPromises = vertices.filter(function (v) {
	        return v.get('sortorder') > delSortorder;
	    }).map(function (v) {
	        var updateData = {
	            sortorder: v.get('sortorder') - 1
	        };
	        return updateVertice(updateData, v.get('id'), routeId);
	    }).toJS();
	
	    // delete vertice and move other vertices up one sortorder
	    var promises = [{
	        types: [actions.CREATE_ROUTE_VERTICE_DELETE, actions.CREATE_ROUTE_VERTICE_DELETE_SUCCESS, actions.CREATE_ROUTE_VERTICE_DELETE_FAIL],
	        promise: function promise(_ref11) {
	            var req = _ref11.req;
	            return req.delete('/routes/' + routeId + '/vertices/' + deleteVertice.get('id'));
	        },
	        meta: { id: deleteVertice.get('id') }
	    }].concat(moveUpOthersPromises);
	
	    return promises;
	}
	
	/**
	* Upload file
	* @param {string|object} filename can be reference to
	*    file (mobile) or actual file (web)
	*/
	function addPhotoToVertice(routeId, verticeId, filename) {
	
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_PHOTO_ADD, actions.CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS, actions.CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL],
	        promise: function promise(_ref12) {
	            var req = _ref12.req;
	            return routeService.addPhotoToVertice(routeId, verticeId, filename, req);
	        },
	        meta: {
	            routeId: routeId,
	            verticeId: verticeId
	        }
	    };
	}
	
	function addSpicesPhoto(routeId, verticeId, url, source, externalLink, username) {
	
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL],
	        promise: function promise(_ref13) {
	            var req = _ref13.req;
	            return req.put('/routes/' + routeId + '/vertices/' + verticeId + '/photo', {
	                externalImage: url,
	                photoSource: source,
	                externalLink: externalLink,
	                username: username
	            });
	        },
	        meta: { id: verticeId, photo: { url: url, source: source } }
	    };
	}
	
	function deleteSpicesPhoto(routeId, verticeId, url) {
	
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL],
	        promise: function promise(_ref14) {
	            var req = _ref14.req;
	            return req.post('/routes/' + routeId + '/vertices/' + verticeId + '/delete-photo', {
	                imageUrl: url
	            });
	        },
	        meta: { id: verticeId, photo: { url: url } }
	    };
	}
	
	function finishRoute(routeId, data) {
	    return {
	        types: [actions.ROUTE_FINISH, actions.ROUTE_FINISH_SUCCESS, actions.ROUTE_FINISH_FAIL],
	        promise: function promise(_ref15) {
	            var req = _ref15.req;
	            return req.post('/routes/' + routeId + '/finito', data);
	        }
	    };
	};
	
	function fetchBuckets() {
	
	    return {
	        types: [actions.FETCH_BUCKETS, actions.FETCH_BUCKETS_SUCCESS, actions.FETCH_BUCKETS_FAIL],
	        promise: function promise(_ref16) {
	            var req = _ref16.req;
	            return req.get('/buckets');
	        }
	    };
	}
	
	function reorder(routeId, vertices, verticeIndex, upOrDown) {
	    var url = '/routes/' + routeId + '/vertices/reorder';
	    var reorderList = (0, _reorderService.reorderVertices)(verticeIndex, vertices, upOrDown);
	
	    return {
	        types: [actions.VERTICE_REORDER, actions.VERTICE_REORDER_SUCCESS, actions.VERTICE_REORDER_FAIL],
	        promise: function promise(_ref17) {
	            var req = _ref17.req;
	            return req.post(url, { reorderList: reorderList });
	        },
	        meta: { reorderList: reorderList }
	    };
	};
	
	// copied from routeDetail
	function fetch(routeId) {
	    return {
	        types: [actions.CREATE_ROUTE_FETCH, actions.CREATE_ROUTE_FETCH_SUCCESS, actions.CREATE_ROUTE_FETCH_FAIL],
	        promise: function promise(_ref18) {
	            var req = _ref18.req;
	            return req.get('/routes/' + routeId + '?edit=true');
	        },
	        meta: { routeId: routeId }
	    };
	}
	
	function reset() {
	    return { type: actions.CREATE_ROUTE_RESET };
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reorderVertices = reorderVertices;
	
	var _utils = __webpack_require__(4);
	
	function _swap(reordered, verticeIndex, i2) {
	    var tmp = reordered[verticeIndex];
	    reordered[verticeIndex] = reordered[i2];
	    reordered[i2] = tmp;
	    return reordered;
	}
	
	/**
	* Takes a list of vertices, returns a list if vertice ids
	* with the vertice at @sortIndex swapped with its adjacent
	* top or below vertice
	*
	* @param {Number} verticeIndex index into reorderList
	* @param {object} vertices Immutable js list of vertices
	* @param {string} upOrDown move verticeIndex up or down
	*
	* @returns {Array} reordered list of verticeIds
	*/
	function reorderVertices(verticeIndex, vertices, upOrDown) {
	    if (verticeIndex > vertices.count() - 1) {
	        throw new Error('Illegal reorder index');
	    }
	
	    var end = vertices.count() - 1;
	    var swapIndex = undefined;
	
	    // set index of who to swap with
	    if (upOrDown === 'down') {
	        swapIndex = verticeIndex === end ? 0 : verticeIndex + 1;
	    } else {
	        swapIndex = verticeIndex === 0 ? end : verticeIndex - 1;
	    }
	
	    var reordered = vertices.sort((0, _utils.immutableComparator)('sortorder')).map(function (i) {
	        return i.get('id');
	    });
	
	    return _swap(reordered.toJSON(), verticeIndex, swapIndex);
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pollAfterPostVertice = pollAfterPostVertice;
	exports.pollSpices = pollSpices;
	/**
	* Precondition: expect a post vertice call
	* with the result in @param result
	*/
	function pollAfterPostVertice(routeId, sortorder, opts) {
	    var req = opts.req;
	    var result = opts.result;
	
	    if (result.payload.venue && result.payload.venue.spicePollId) {
	
	        return pollSpices(req, routeId, result.payload.venue.spicePollId, sortorder, 10);
	    } else {
	        return Promise.resolve(result.payload);
	    }
	}
	
	function pollSpices(req, routeId, spicePollId, sortorder, retries) {
	
	    return new Promise(function (resolve, reject) {
	
	        var url = routeId ? '/routes/' + routeId + '/vertices/pollSocial/' + spicePollId :
	        // when you dont have poll id you have venueId
	        // for simplicity we name it spicePollId here
	        '/venues/' + spicePollId + '/spices';
	
	        var pollInterval = setInterval(function () {
	
	            if (retries-- === 0) {
	                clearInterval(pollInterval);
	                return reject({ message: 'Failed to poll spice updates for id:', spicePollId: spicePollId });
	            }
	
	            req.get(url).then(function (res) {
	                if (res) {
	                    clearInterval(pollInterval);
	                    resolve({
	                        venue: {
	                            venueSocial: res
	                        },
	                        sortorder: sortorder
	                    });
	                }
	            }).catch();
	        }, 1000);
	    });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var baseAutocompleteUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
	var baseNearbyUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
	var baseLatAndLng = 'https://maps.googleapis.com/maps/api/place/details/json';
	var API_KEY = undefined;
	
	var GooglePlacesAPIClient = function () {
	    function GooglePlacesAPIClient() {
	        var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, GooglePlacesAPIClient);
	
	        API_KEY = args.GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;
	        if (!API_KEY) {
	            throw new Error('Google API key must be set');
	        }
	
	        this.request = args.request;
	        this.fetchAutocomplete = this.fetchAutocomplete.bind(this);
	        this.fetchNearbyVenues = this.fetchNearbyVenues.bind(this);
	        this.fetchLatAndLng = this.fetchLatAndLng.bind(this);
	    }
	
	    _createClass(GooglePlacesAPIClient, [{
	        key: 'fetchAutocomplete',
	        value: function fetchAutocomplete(query, location) {
	            var data = {
	                input: query,
	                key: API_KEY,
	                location: location
	            };
	            return this.request.getExt(baseAutocompleteUrl, data);
	        }
	    }, {
	        key: 'fetchNearbyVenues',
	        value: function fetchNearbyVenues(location) {
	            return this.request.getExt(baseNearbyUrl, {
	                location: location,
	                key: API_KEY,
	                radius: 200
	            });
	        }
	    }, {
	        key: 'fetchLatAndLng',
	        value: function fetchLatAndLng(placeid) {
	            return this.request.getExt(baseLatAndLng, {
	                placeid: placeid,
	                key: API_KEY
	            });
	        }
	    }]);
	
	    return GooglePlacesAPIClient;
	}();
	
	exports.default = GooglePlacesAPIClient;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pushFlashMessage = pushFlashMessage;
	exports.popFlashMessage = popFlashMessage;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function pushFlashMessage(flashMessage) {
	    return { type: types.PUSH_FLASH_MESSAGE, flashMessage: flashMessage };
	}
	
	function popFlashMessage() {
	    return { type: types.POP_FLASH_MESSAGE };
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	exports.login = login;
	exports.clearUserError = clearUserError;
	exports.storeLoginToken = storeLoginToken;
	exports.facebookLogin = facebookLogin;
	exports.signup = signup;
	exports.logout = logout;
	exports.fetchUserProfile = fetchUserProfile;
	exports.updateProfile = updateProfile;
	exports.uploadProfilePicture = uploadProfilePicture;
	exports.bootstrapUser = bootstrapUser;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var request = null;
	var facebookManager = null;
	var userService = null;
	
	function init() {
	    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    request = args.request;
	    facebookManager = args.facebookManager;
	    userService = args.userService;
	}
	
	function login(mail, password) {
	    return {
	        types: [types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.post('/users/login', {
	                mail: mail,
	                password: password
	            });
	        }
	    };
	}
	
	function clearUserError() {
	    return {
	        type: types.USER_CLEAR_ERROR
	    };
	}
	
	function storeLoginToken(token, user) {
	
	    // set token so we can use it on every request
	    request.setAuthorizationToken(token);
	
	    return {
	        type: types.USER_TOKEN_STORE_AND_REDIRECT
	    };
	}
	
	function facebookLogin(data) {
	
	    return {
	        types: [types.FACEBOOK_LOGIN, types.FACEBOOK_LOGIN_SUCCESS, types.FACEBOOK_LOGIN_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.post('/users/createFromFacebook', data);
	        }
	    };
	}
	
	function signup(mail, password, username) {
	    return {
	        types: [types.SIGNUP, types.SIGNUP_SUCCESS, types.SIGNUP_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.post('/users', {
	                mail: mail,
	                password: password,
	                username: username
	            });
	        }
	    };
	}
	
	function logout(userId) {
	
	    request.removeAuthorizationToken();
	    facebookManager.logout();
	
	    // TODO: call server and delete token
	    return {
	        type: types.LOGOUT
	    };
	}
	
	function fetchUserProfile(userId) {
	    return {
	        types: [types.FETCH_USER_PROFILE, types.FETCH_USER_PROFILE_SUCCESS, types.FETCH_USER_PROFILE_FAIL],
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return req.get('/users/' + userId);
	        }
	    };
	}
	
	function updateProfile(userId, data) {
	    return {
	        types: [types.USER_UPDATE_PROFILE, types.USER_UPDATE_PROFILE_SUCCESS, types.USER_UPDATE_PROFILE_FAIL],
	        promise: function promise(_ref5) {
	            var req = _ref5.req;
	            return req.put('/users/' + userId, { data: data });
	        }
	    };
	}
	
	function uploadProfilePicture(fileOrPath) {
	
	    return {
	        types: [types.USER_UPLOAD_PROFILE_PICTURE, types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS, types.USER_UPLOAD_PROFILE_PICTURE_FAIL],
	        promise: function promise(_ref6) {
	            var req = _ref6.req;
	            return userService.uploadProfilePicture(fileOrPath, req);
	        }
	    };
	}
	
	function bootstrapUser(user) {
	    return {
	        type: types.USER_BOOTSTRAP,
	        user: user
	    };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createPressed = createPressed;
	exports.homePressed = homePressed;
	exports.searchPressed = searchPressed;
	exports.notificationPressed = notificationPressed;
	exports.userprofilePressed = userprofilePressed;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function createPressed(photo) {
	    return { type: actions.NAVBAR_CREATE_PRESSED };
	}
	
	function homePressed(photo) {
	    return { type: actions.NAVBAR_HOME_PRESSED };
	}
	
	function searchPressed(photo) {
	    return { type: actions.NAVBAR_SEARCH_PRESSED };
	}
	
	function notificationPressed(photo) {
	    return { type: actions.NAVBAR_NOTIFICATION_PRESSED };
	}
	
	function userprofilePressed(photo) {
	    return { type: actions.NAVBAR_USERPROFILE_PRESSED };
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapPressed = mapPressed;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function mapPressed(photo) {
	    return { type: actions.VERTICE_MAP_PRESSED };
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.upvoteRoute = upvoteRoute;
	exports.fetch = fetch;
	exports.fetchComments = fetchComments;
	exports.addComment = addComment;
	exports.deleteComment = deleteComment;
	exports.changeTravelMode = changeTravelMode;
	exports.fetchDistanceMatrix = fetchDistanceMatrix;
	exports.fetchDistanceMatrixBetweenVenues = fetchDistanceMatrixBetweenVenues;
	exports.mapVerticesToGeoVenues = mapVerticesToGeoVenues;
	exports.fetchSpicesForVertice = fetchSpicesForVertice;
	exports.fetchSpicesForVenuesList = fetchSpicesForVenuesList;
	exports.bootstrapRoute = bootstrapRoute;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _pollSpices = __webpack_require__(22);
	
	var _routesActions = __webpack_require__(17);
	
	var routesActions = _interopRequireWildcard(_routesActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	//
	// export function upvoteRoute (routeId) {
	//     return {
	//         types: [
	//             types.UPVOTE_ROUTE,
	//             types.UPVOTE_ROUTE_SUCCESS,
	//             types.UPVOTE_ROUTE_FAIL
	//         ],
	//         promise: ({req}) => req.post(`/routes/${routeId}/upvote`)
	//     };
	// }
	
	function upvoteRoute(routeId) {
	
	    // upvote route then update the route in the grid
	    return [{
	        types: [types.UPVOTE_ROUTE, types.UPVOTE_ROUTE_SUCCESS, types.UPVOTE_ROUTE_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.post('/routes/' + routeId + '/upvote');
	        }
	    },
	
	    // update route in grid
	    routesActions.upvoteRouteInGrid(routeId)];
	}
	
	function fetch(routeId) {
	    return {
	        types: [types.ROUTE_DETAIL_FETCH, types.ROUTE_DETAIL_FETCH_SUCCESS, types.ROUTE_DETAIL_FETCH_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.get('/routes/' + routeId);
	        },
	        meta: { routeId: routeId }
	    };
	}
	
	function fetchComments(routeId) {
	    return {
	        types: [types.ROUTE_DETAIL_COMMENTS_FETCH, types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS, types.ROUTE_DETAIL_COMMENTS_FETCH_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.get('/routes/' + routeId + '/comments');
	        }
	    };
	}
	
	function addComment(routeId, body) {
	    return {
	        types: [types.ROUTE_DETAIL_COMMENTS_ADD, types.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS, types.ROUTE_DETAIL_COMMENTS_ADD_FAIL],
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return req.post('/routes/' + routeId + '/comments', { body: body });
	        }
	    };
	}
	
	function deleteComment(routeId, commentId) {
	    return {
	        types: [types.ROUTE_DETAIL_COMMENTS_DELETE, types.ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS, types.ROUTE_DETAIL_COMMENTS_DELETE_FAIL],
	        promise: function promise(_ref5) {
	            var req = _ref5.req;
	
	            var fn = req['delete'] || req['del'];
	            return fn('/routes/' + routeId + '/comments/' + commentId);
	        },
	        commentId: commentId
	    };
	}
	
	function changeTravelMode(travelmode) {
	    return { type: types.TRAVELMODE_CHANGED, travelmode: travelmode };
	}
	
	function fetchDistanceMatrix(routeId, travelmode) {
	    return {
	        types: [types.FETCH_DIRECTIONS_MATRIX, types.FETCH_DIRECTIONS_MATRIX_SUCCESS, types.FETCH_DIRECTIONS_MATRIX_FAIL],
	
	        promise: function promise(_ref6) {
	            var req = _ref6.req;
	            return req.post('/routes/' + routeId + '/directionsMatrix', { travelmode: travelmode });
	        }
	    };
	}
	
	function fetchDistanceMatrixBetweenVenues(vertices, travelmode, routeId, index) {
	    var venues = mapVerticesToGeoVenues(vertices);
	
	    return {
	        types: [types.VENUES_DIRECTIONS_MATRIX_FETCH, types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS, types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL],
	        promise: function promise(_ref7) {
	            var req = _ref7.req;
	            return req.post('/routes/' + routeId + '/directionsMatrix', { travelmode: travelmode, venues: venues });
	        },
	        index: index
	    };
	}
	
	// pick either google_id or (lat and lng) when
	// fetching travelmode and distance between two venues
	function mapVerticesToGeoVenues(vertices) {
	    return vertices.map(function (vertice) {
	        var geo = vertice.getIn(['venue', 'geometry']) || {};
	
	        if (vertice.getIn(['venue', 'place_id'])) {
	            return { googleId: vertice.getIn(['venue', 'place_id']) };
	        } else if (geo.lat && geo.lng) {
	            return { lat: geo.lat, lng: geo.lng };
	        } else {
	            throw new Error({ message: 'error determineGeoType(), none of the data provided is legit' });
	        }
	    });
	}
	
	// copied from createRoute
	function fetchSpicesForVertice(venueId, sortorder) {
	    return {
	        types: [types.ROUTE_DETAIL_VERTICE_SPICES_FETCH, types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS, types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL],
	
	        promise: function promise(_ref8) {
	            var req = _ref8.req;
	            return (0, _pollSpices.pollSpices)(req, null, venueId, sortorder, 1);
	        }
	    };
	}
	
	function fetchSpicesForVenuesList(routeId, venueIds) {
	
	    return {
	        types: [types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST, types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS, types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_FAIL],
	
	        promise: function promise(_ref9) {
	            var req = _ref9.req;
	            return req.get('/routes/' + routeId + '/venue-spices-fetch', { params: { venueIds: venueIds } });
	        }
	    };
	}
	
	// used in routes-native to put route we get from router
	// over to route detail store
	function bootstrapRoute(route) {
	    return { type: types.ROUTE_DETAIL_BOOTSTRAP, route: route };
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clear = clear;
	exports.fetch = fetch;
	exports.fetchDetail = fetchDetail;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function clear() {
	    return { type: actions.SUGGESTIONS_CLEAR };
	}
	
	function fetch(params) {
	    return {
	        types: [actions.SUGGESTIONS_FETCH, actions.SUGGESTIONS_FETCH_SUCCESS, actions.SUGGESTIONS_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/venues/venueTips', { params: params });
	        },
	        meta: params
	    };
	}
	
	function fetchDetail(spot) {
	    var params = {
	        sourceId: spot.sourceId,
	        source: spot.source,
	        lat: spot.geometry.lat,
	        lng: spot.geometry.lng,
	        name: spot.name
	    };
	
	    var suggestion = (0, _immutable.fromJS)(spot);
	
	    return {
	        types: [actions.SUGGESTIONS_DETAIL_FETCH, actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS, actions.SUGGESTIONS_DETAIL_FETCH_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.get('/venues/getSpicesByGEOandName', { params: params });
	        },
	        suggestion: suggestion
	    };
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchNotification = fetchNotification;
	exports.markSeen = markSeen;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function fetchNotification() {
	    return {
	        types: [actions.NOTIFICATIONS_FETCH, actions.NOTIFICATIONS_FETCH_SUCCESS, actions.NOTIFICATIONS_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/notifications');
	        }
	    };
	}
	
	function markSeen(notificationId) {
	    return {
	        types: [actions.NOTIFICATIONS_MARK_SEEN, actions.NOTIFICATIONS_MARK_SEEN_SUCCESS, actions.NOTIFICATIONS_MARK_SEEN_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.post('/notifications/' + notificationId + '/markSeen');
	        }
	    };
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetch = fetch;
	exports.fetchCityBuckets = fetchCityBuckets;
	exports.selectCity = selectCity;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function fetch() {
	    return {
	        types: [actions.CITIES_FETCH, actions.CITIES_FETCH_SUCCESS, actions.CITIES_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/cities');
	        }
	    };
	}
	
	function fetchCityBuckets(city) {
	    return {
	        types: [actions.CITIES_BUCKETS_FETCH, actions.CITIES_BUCKETS_FETCH_SUCCESS, actions.CITIES_BUCKETS_FETCH_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.get('/cities/' + city + '/buckets');
	        }
	    };
	}
	
	function selectCity(city) {
	    return { type: actions.CITY_SELECT, city: city };
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getBookmarkedRoutes = getBookmarkedRoutes;
	exports.getBookmarkedRoutesIds = getBookmarkedRoutesIds;
	exports.postBookmark = postBookmark;
	exports.deleteBookmark = deleteBookmark;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// deep fetch
	function getBookmarkedRoutes(userId) {
	    return {
	        types: [actions.BOOKMARKS_FETCH, actions.BOOKMARKS_FETCH_SUCCESS, actions.BOOKMARKS_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/users/' + userId + '/bookmarks');
	        }
	    };
	}
	
	// only fetch route ids,
	// for performance (e.g check if you have bookmarked a route)
	function getBookmarkedRoutesIds(userId) {
	    return {
	        types: [actions.BOOKMARKS_IDS_FETCH, actions.BOOKMARKS_IDS_FETCH_SUCCESS, actions.BOOKMARKS_IDS_FETCH_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.get('/users/' + userId + '/bookmarks?ids=true');
	        }
	    };
	}
	function postBookmark(userId, route) {
	    return {
	        types: [actions.BOOKMARKS_POST, actions.BOOKMARKS_POST_SUCCESS, actions.BOOKMARKS_POST_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.post('/users/' + userId + '/bookmarks', { routeId: route.get('id') });
	        },
	        route: route
	    };
	}
	
	function deleteBookmark(userId, route) {
	    return {
	        types: [actions.BOOKMARKS_DELETE, actions.BOOKMARKS_DELETE_SUCCESS, actions.BOOKMARKS_DELETE_FAIL],
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return req.post('/users/' + userId + '/bookmarks/delete', { routeId: route.get('id') });
	        },
	        route: route
	    };
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = init;
	exports.fetch = fetch;
	exports.addVertice = addVertice;
	exports.removeVertice = removeVertice;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var createLocalRouteDAO = undefined;
	
	function init() {
	    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    createLocalRouteDAO = args.createLocalRouteDAO;
	}
	
	function fetch(userId) {
	    return {
	        types: [actions.CREATE_LOCAL_ROUTE_FETCH, actions.CREATE_LOCAL_ROUTE_FETCH_SUCCESS, actions.CREATE_LOCAL_ROUTE_FETCH_FAIL],
	        promise: function promise() {
	            return createLocalRouteDAO.getByUserId(userId);
	        }
	    };
	}
	
	function addVertice(vertice, userId) {
	
	    var mappedVertice = _immutable.Iterable.isIterable(vertice) ? vertice.toJSON() : vertice;
	
	    return {
	        types: [actions.CREATE_LOCAL_ROUTE_VERTICE_ADD, actions.CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS, actions.CREATE_LOCAL_ROUTE_VERTICE_ADD_FAIL],
	        promise: function promise() {
	            return createLocalRouteDAO.addVertice(mappedVertice, userId);
	        }
	    };
	}
	
	function removeVertice(verticeId, userId) {
	
	    return {
	        types: [actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE, actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS, actions.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_FAIL],
	        promise: function promise() {
	            return createLocalRouteDAO.removeVertice(verticeId, userId);
	        }
	    };
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchPublicUserProfile = fetchPublicUserProfile;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function fetchPublicUserProfile() {
	    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var loggedInUserId = arguments[1];
	
	    return {
	        types: [types.PUBLIC_USER_FETCH, types.PUBLIC_USER_FETCH_SUCCESS, types.PUBLIC_USER_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/users', { params: params });
	        },
	        meta: _extends({}, params, {
	            loggedInUserId: loggedInUserId
	        })
	    };
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchUserRoutes = fetchUserRoutes;
	exports.updateUserRoutes = updateUserRoutes;
	exports.fetchLikedRoutes = fetchLikedRoutes;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function fetchUserRoutes(userId) {
	    if (!userId) {
	        throw new Error('User id must be included');
	    }
	
	    return {
	        types: [types.FETCH_USER_ROUTES, types.FETCH_USER_ROUTES_SUCCESS, types.FETCH_USER_ROUTES_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/routes/users/' + userId);
	        }
	    };
	}
	
	function updateUserRoutes(routeId, data) {
	    return {
	        types: [types.UPDATE_USER_ROUTE, types.UPDATE_USER_ROUTE_SUCCESS, types.UPDATE_USER_ROUTE_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.put('/routes/' + routeId, data);
	        },
	        meta: data
	    };
	}
	
	function fetchLikedRoutes(userId) {
	    return {
	        types: [types.PUBLIC_LIKED_ROUTE_FETCH, types.PUBLIC_LIKED_ROUTE_SUCCESS, types.PUBLIC_LIKED_ROUTE_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.get('/routes/users/likedRoute/' + userId);
	        }
	    };
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setCitySearchActive = setCitySearchActive;
	exports.setRoutesSearchActive = setRoutesSearchActive;
	exports.hideSearchBar = hideSearchBar;
	exports.showSearchBar = showSearchBar;
	exports.setSearchBarInactive = setSearchBarInactive;
	exports.routesSearchString = routesSearchString;
	exports.citiesSearchString = citiesSearchString;
	exports.sortValueChanged = sortValueChanged;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function setCitySearchActive() {
	    return {
	        type: types.SEARCH_CITY_ACTIVE
	    };
	}
	
	function setRoutesSearchActive() {
	    return {
	        type: types.SEARCH_ROUTES_ACTIVE
	    };
	}
	
	function hideSearchBar() {
	    return {
	        type: types.SEARCH_HIDE
	    };
	}
	
	function showSearchBar() {
	    return {
	        type: types.SEARCH_SHOW
	    };
	}
	
	function setSearchBarInactive() {
	    return {
	        type: types.SEARCH_IS_INACTIVE
	    };
	}
	
	function routesSearchString(searchString) {
	    return {
	        type: types.SEARCHING_ROUTES,
	        searchString: searchString
	    };
	}
	
	function citiesSearchString(searchString) {
	    return {
	        type: types.SEARCHING_CITIES,
	        searchString: searchString
	    };
	}
	
	function sortValueChanged(sort) {
	    return {
	        type: types.SEARCH_SORT_VALUE_CHANGED,
	        sort: sort
	    };
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.clearSeenThings = exports.addNewSeenThing = undefined;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var addNewSeenThing = exports.addNewSeenThing = function addNewSeenThing(thing) {
	    return {
	        type: actions.HAS_SEEN_THINGS_ADD,
	        thing: thing
	    };
	};
	
	var clearSeenThings = exports.clearSeenThings = function clearSeenThings() {
	    return {
	        type: actions.HAS_SEEN_THINGS_CLEAR
	    };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasSeenThingsReducer = exports.searchReducer = exports.userRoutesReducer = exports.publicUserProfileReducer = exports.createLocalRouteReducer = exports.bookmarksReducer = exports.cityReducer = exports.notificationsReducer = exports.suggestions = exports.routeDetail = exports.userReducer = exports.selectedBucketReducer = exports.routesReducer = exports.flashMessagesReducer = exports.createVerticeReducer = exports.createRouteReducer = exports.appReducer = undefined;
	
	var _appReducer2 = __webpack_require__(40);
	
	var _appReducer3 = _interopRequireDefault(_appReducer2);
	
	var _createRouteReducer2 = __webpack_require__(41);
	
	var _createRouteReducer3 = _interopRequireDefault(_createRouteReducer2);
	
	var _createVerticeReducer2 = __webpack_require__(66);
	
	var _createVerticeReducer3 = _interopRequireDefault(_createVerticeReducer2);
	
	var _flashMessagesReducer2 = __webpack_require__(67);
	
	var _flashMessagesReducer3 = _interopRequireDefault(_flashMessagesReducer2);
	
	var _routesReducer2 = __webpack_require__(68);
	
	var _routesReducer3 = _interopRequireDefault(_routesReducer2);
	
	var _selectedBucketReducer2 = __webpack_require__(69);
	
	var _selectedBucketReducer3 = _interopRequireDefault(_selectedBucketReducer2);
	
	var _userReducer2 = __webpack_require__(70);
	
	var _userReducer3 = _interopRequireDefault(_userReducer2);
	
	var _routeDetailReducer = __webpack_require__(42);
	
	var _routeDetailReducer2 = _interopRequireDefault(_routeDetailReducer);
	
	var _suggestionsReducer = __webpack_require__(71);
	
	var _suggestionsReducer2 = _interopRequireDefault(_suggestionsReducer);
	
	var _notificationsReducer2 = __webpack_require__(72);
	
	var _notificationsReducer3 = _interopRequireDefault(_notificationsReducer2);
	
	var _cityReducer2 = __webpack_require__(73);
	
	var _cityReducer3 = _interopRequireDefault(_cityReducer2);
	
	var _bookmarksReducer2 = __webpack_require__(75);
	
	var _bookmarksReducer3 = _interopRequireDefault(_bookmarksReducer2);
	
	var _createLocalRouteReducer2 = __webpack_require__(76);
	
	var _createLocalRouteReducer3 = _interopRequireDefault(_createLocalRouteReducer2);
	
	var _publicUserProfileReducer2 = __webpack_require__(77);
	
	var _publicUserProfileReducer3 = _interopRequireDefault(_publicUserProfileReducer2);
	
	var _userRoutesReducer2 = __webpack_require__(79);
	
	var _userRoutesReducer3 = _interopRequireDefault(_userRoutesReducer2);
	
	var _searchReducer2 = __webpack_require__(80);
	
	var _searchReducer3 = _interopRequireDefault(_searchReducer2);
	
	var _hasSeenThingsReducer2 = __webpack_require__(82);
	
	var _hasSeenThingsReducer3 = _interopRequireDefault(_hasSeenThingsReducer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.appReducer = _appReducer3.default;
	exports.createRouteReducer = _createRouteReducer3.default;
	exports.createVerticeReducer = _createVerticeReducer3.default;
	exports.flashMessagesReducer = _flashMessagesReducer3.default;
	exports.routesReducer = _routesReducer3.default;
	exports.selectedBucketReducer = _selectedBucketReducer3.default;
	exports.userReducer = _userReducer3.default;
	exports.routeDetail = _routeDetailReducer2.default;
	exports.suggestions = _suggestionsReducer2.default;
	exports.notificationsReducer = _notificationsReducer3.default;
	exports.cityReducer = _cityReducer3.default;
	exports.bookmarksReducer = _bookmarksReducer3.default;
	exports.createLocalRouteReducer = _createLocalRouteReducer3.default;
	exports.publicUserProfileReducer = _publicUserProfileReducer3.default;
	exports.userRoutesReducer = _userRoutesReducer3.default;
	exports.searchReducer = _searchReducer3.default;
	exports.hasSeenThingsReducer = _hasSeenThingsReducer3.default;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {
	    isModalOpen: false,
	    checkTokenLoading: false
	};
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case types.OPEN_LOGIN_MODAL:
	            return {
	                isModalOpen: true
	            };
	        case types.CLOSE_LOGIN_MODAL:
	            return {
	                isModalOpen: false
	            };
	        case types.CHECK_TOKEN_REQUREST:
	            return _extends({}, state, {
	                checkTokenLoading: true
	            });
	        case types.CHECK_TOKEN_SUCCESS:
	            return {
	                isModalOpen: false,
	                checkTokenLoading: false
	            };
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _routeDetailReducer = __webpack_require__(42);
	
	var _routeDetailReducer2 = _interopRequireDefault(_routeDetailReducer);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = (0, _immutable.Map)({
	    route: new _Route2.default(),
	
	    // general errors in create
	    errors: null,
	
	    // show loading spinner
	    postingRoute: false,
	
	    // buckets to select from in create
	    buckets: {
	        fetched: false,
	        items: []
	    },
	    uploadingPhoto: false,
	    finito: false,
	
	    donePressed: false,
	    pendingDoneActions: (0, _immutable.List)(),
	    renderMapCounter: 0,
	    fetchingSpices: false
	});
	
	function _routeHasBucket(state, bucketId) {
	    return state.getIn(['route', 'buckets']).includes(bucketId);
	}
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState;
	    };
	
	    switch (action.type) {
	
	        // shared with routeDetail,
	        // used in editRoute
	        // havent found another way then copying
	        case types.CREATE_ROUTE_FETCH:
	            return state.set('isFetching', true);
	
	        case types.CREATE_ROUTE_FETCH_SUCCESS:
	
	            // we only want bucket ids
	            action.payload.buckets = action.payload.buckets.map(function (b) {
	                return b.id;
	            });
	
	            return state.set('route', _Route2.default.mapper(action.payload)).set('isFetching', false).set('renderMapCounter', state.get('renderMapCounter') + 1).set('error', false);
	
	        case types.CREATE_ROUTE_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        case types.ROUTE_CREATE_INIT:
	            return state.set('route', new _Route2.default(action.route));
	
	        case types.CREATE_ROUTE_SET_TITLE:
	            return state.setIn(['route', 'title'], action.text);
	
	        case types.CREATE_ROUTE_SET_ERRORS:
	            return state.set('errors', action.errors);
	
	        case types.CREATE_ROUTE_TOGGLE_BUCKET:
	        case types.CREATE_ROUTE_BUCKET_ADD:
	        case types.CREATE_ROUTE_BUCKET_DEL:
	
	            if (_routeHasBucket(state, action.bucket.id)) {
	                var _ret = function () {
	                    var index = state.getIn(['route', 'buckets']).indexOf(action.bucket.id);
	                    return {
	                        v: state.updateIn(['route', 'buckets'], function (buckets) {
	                            return buckets.delete(index);
	                        })
	                    };
	                }();
	
	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            } else {
	                return state.updateIn(['route', 'buckets'], function (buckets) {
	                    return buckets.push(action.bucket.id);
	                });
	            }
	
	        case types.POST_ROUTE:
	            return state.merge({
	                postingRoute: true,
	                failedPostRoute: null,
	
	                // eager merge in the created route
	                route: new _Route2.default(action.meta),
	                pendingDoneActions: state.get('pendingDoneActions').push(types.POST_ROUTE)
	            });
	
	        case types.POST_ROUTE_FAIL:
	            return state.merge({
	                postingRoute: false,
	                failedPostRoute: action.error
	            });
	
	        case types.POST_ROUTE_SUCCESS:
	            return state.updateIn(['route'], function (route) {
	                return route.merge(action.payload);
	            }).set('postingRoute', false).set('pendingDoneActions', state.get('pendingDoneActions').pop());
	
	        case types.CREATE_ROUTE_UPDATE:
	
	            // optimistic update.
	            // can be rolled back by storing
	            // current state
	            return state.mergeDeep({
	                route: action.meta
	            });
	
	        case types.FETCH_BUCKETS_SUCCESS:
	            return state.set('buckets', {
	                fetched: true,
	                items: action.payload._embedded.bucket
	            });
	
	        case types.CREATE_ROUTE_BUCKET_ADD_CUSTOM_SUCCESS:
	            var bucket = action.payload;
	            var items = [].concat(_toConsumableArray(state.get('buckets').items), [bucket]);
	            return state.set('buckets', {
	                items: items,
	                fetched: true
	            }).updateIn(['route', 'buckets'], function (buckets) {
	                return buckets.push(bucket.id);
	            });
	
	        case types.CREATE_ROUTE_VERTICE_SPICES_FETCH:
	            return state.set('fetchingSpices', true);
	
	        case types.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS:
	            return _Route2.default.updateVertice(state, _extends({}, action.payload)).set('fetchingSpices', false);
	
	        case types.CREATE_ROUTE_VERTICE_SPICES_FETCH_FAIL:
	            return state.set('fetchingSpices', false).set('errors', 'Failed to fetch spices');
	
	        case types.ADD_VERTICE_TO_ROUTE:
	            var vert = action.meta;
	            var pendingActions = state.get('pendingDoneActions').push(types.ADD_VERTICE_TO_ROUTE);
	
	            var newState = state.updateIn(['route', 'vertices'], function (v) {
	                return v.push(vert);
	            }).set('pendingDoneActions', pendingActions);
	
	            return newState;
	
	        case types.ADD_VERTICE_TO_ROUTE_SUCCESS:
	
	            // ATM we dont care about these
	            // action.payload.venue.venueSocial
	            var vertData = Object.assign({}, action.payload);
	            return _Route2.default.updateVertice(state, vertData).set('pendingDoneActions', state.get('pendingDoneActions').pop()).set('renderMapCounter', state.get('renderMapCounter') + 1);
	
	        case types.CREATE_ROUTE_VERTICE_DELETE:
	
	            // ATM we dont care about these
	            // action.payload.venue.venueSocial
	            // return Route.updateVertice(state, vertData);
	            var index = state.getIn(['route', 'vertices']).findIndex(function (v) {
	                return v.get('id') === action.meta.id;
	            });
	
	            // delete vertice
	            var verts = state.getIn(['route', 'vertices']).delete(index);
	
	            return state.setIn(['route', 'vertices'], verts).set('renderMapCounter', state.get('renderMapCounter') + 1);
	
	        case types.ADD_VERTICE_TO_ROUTE_FAIL:
	            // TODO: reverse the vertice
	            return state.set('failedToAddSpot', action.error);
	
	        case types.VERTICE_UPDATE_SUCCESS:
	            return _Route2.default.updateVertice(state, action.meta);
	
	        // TODO: handle failure
	        case types.VERTICE_UPDATE_FAIL:
	            return state.set('failedToUpdateSpot', action.error);
	
	        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD:
	            return state.set('uploadingPhoto', true).set('pendingDoneActions', state.get('pendingDoneActions').push(types.CREATE_ROUTE_VERTICE_PHOTO_ADD));
	
	        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD_FAIL:
	            return state.set('uploadingPhoto', false).set('pendingDoneActions', state.get('pendingDoneActions').pop());
	
	        case types.CREATE_ROUTE_VERTICE_PHOTO_ADD_SUCCESS:
	            var vertice = {
	                id: action.meta.verticeId,
	                photo: { url: action.payload.url }
	            };
	
	            return _Route2.default.addVerticePhoto(state, vertice).set('uploadingPhoto', false).set('pendingDoneActions', state.get('pendingDoneActions').pop());
	
	        case types.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD:
	            return _Route2.default.addVerticePhoto(state, action.meta);
	
	        case types.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE:
	            return _Route2.default.removeVerticePhoto(state, action.meta);
	
	        case types.VERTICE_UPDATE_BUCKETS_SUCCESS:
	            return _Route2.default.addVerticeTag(state, { bucket: action.payload, id: action.meta.id });
	
	        case types.VERTICE_DELETE_BUCKETS_SUCCESS:
	            return _Route2.default.removeVerticeTag(state, { bucket: action.meta.bucketId, id: action.meta.id });
	
	        case types.VERTICE_REORDER:
	            var updatedListOfVerticeIds = action.meta.reorderList;
	            var route = state.get('route');
	            var vertices = route.get('vertices');
	
	            // // swap the images array
	            var relocatedVertices = updatedListOfVerticeIds.map(function (verticeId, sortorder) {
	                return vertices
	                // find this vertice
	                .find(function (vertice) {
	                    return vertice.get('id') === verticeId;
	                })
	
	                // update sortorder
	                .set('sortorder', sortorder + 1);
	            });
	
	            return state.set('route', route.set('vertices', (0, _immutable.List)(relocatedVertices))).set('renderMapCounter', state.get('renderMapCounter') + 1);
	
	        case types.ROUTE_FINISH:
	            return state.set('donePressed', true);
	        case types.ROUTE_FINISH_SUCCESS:
	            return state.set('finito', true);
	
	        case types.CREATE_ROUTE_RESET:
	            return initialState;
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _isEqual2 = __webpack_require__(43);
	
	var _isEqual3 = _interopRequireDefault(_isEqual2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    isFetching: false,
	    route: null,
	    directionsMatrix: (0, _immutable.Map)(),
	    error: null,
	    travelmode: 'WALKING',
	    isFetchingComments: false,
	    commentsError: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    // rehydrated state
	    if (!_immutable.Iterable.isIterable(state)) {
	        if (state.route) {
	            state = initialState.set('route', _Route2.default.mapper(state.route));
	        } else {
	            state = initialState;
	        }
	    }
	
	    switch (action.type) {
	        case types.ROUTE_DETAIL_FETCH:
	            return state.set('isFetching', true);
	
	        case types.TRAVELMODE_CHANGED:
	            return state.set('travelmode', action.travelmode);
	
	        case types.ROUTE_DETAIL_FETCH_SUCCESS:
	
	            return state.set('route', _Route2.default.mapper(action.payload)).set('isFetching', false).set('error', false);
	
	        case types.ROUTE_DETAIL_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        // TODO: HANDLE UPVOTES RESULT
	        case types.UPVOTE_ROUTE_SUCCESS:
	            return state.setIn(['route', 'likes'], action.payload._embedded.likes);
	
	        case types.UPVOTE_ROUTE_FAIL:
	            return state;
	
	        case types.FETCH_DIRECTIONS_MATRIX:
	            return state.set('directionsMatrix', (0, _immutable.Map)({
	                fetchingDirections: true,
	                fetchingDirectionsError: false
	            }));
	
	        case types.FETCH_DIRECTIONS_MATRIX_SUCCESS:
	            return state.set('directionsMatrix', (0, _immutable.Map)({
	                fetchingDirections: false,
	                fetchingDirectionsError: false,
	                directionsResult: action.payload
	            }));
	        case types.FETCH_DIRECTIONS_MATRIX_FAIL:
	            return state.set('directionsMatrix', (0, _immutable.Map)({
	                fetchingDirections: false,
	                fetchingDirectionsError: true
	            }));
	
	        case types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS:
	            return _Route2.default.updateVertice(state, _extends({}, action.payload));
	
	        case types.ROUTE_DETAIL_SPICES_FOR_VENUES_LIST_SUCCESS:
	            var verts = state.get('route').updateVenueSocials(action.payload);
	
	            return state.setIn(['route', 'vertices'], verts);
	
	        case types.ROUTE_DETAIL_BOOTSTRAP:
	            return state.set('route', action.route).set('directionsMatrix', (0, _immutable.Map)());
	
	        case types.VENUES_DIRECTIONS_MATRIX_FETCH:
	            return state.setIn(['directionsMatrix', 'fetchingDirections'], true).setIn(['directionsMatrix', 'fetchingDirectionsError'], false);
	
	        case types.VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS:
	            if (action.payload.data && action.payload.data.length) {
	                var newDirectionsResult = undefined;
	
	                if (isNaN(action.index)) {
	                    newDirectionsResult = action.payload;
	                } else {
	                    newDirectionsResult = Object.assign({}, state.getIn(['directionsMatrix', 'directionsResult']));
	
	                    // something has gone wrong. simply return. TODO: logg error
	                    if (!newDirectionsResult.data) {
	                        console.error('No directionsResult in VENUES_DIRECTIONS_MATRIX_FETCH_SUCCESS');
	                        return state;
	                    }
	
	                    newDirectionsResult.data = newDirectionsResult.data.map(function (data, index) {
	                        return index === action.index ? action.payload.data[0] : data;
	                    });
	                }
	
	                return state.set('directionsMatrix', (0, _immutable.Map)({
	                    fetchingDirections: false,
	                    fetchingDirectionsError: false,
	                    directionsResult: newDirectionsResult
	                }));
	            } else {
	                return state;
	            }
	
	        case types.VENUES_DIRECTIONS_MATRIX_FETCH_FAIL:
	            return state.setIn(['directionsMatrix', 'fetchingDirections'], false).setIn(['directionsMatrix', 'fetchingDirectionsError'], true);
	
	        case types.ROUTE_DETAIL_COMMENTS_FETCH:
	            return state.set('isFetchingComments', true).set('commentsError', null);
	
	        case types.ROUTE_DETAIL_COMMENTS_FETCH_FAIL:
	            return state.set('isFetchingComments', false).set('commentsError', action.error);
	
	        case types.ROUTE_DETAIL_COMMENTS_FETCH_SUCCESS:
	            return state.set('isFetchingComments', false).setIn(['route', 'comments'], new _immutable.List(action.payload._embedded.comments.map(function (comment) {
	                return (0, _immutable.fromJS)(comment);
	            })));
	
	        case types.ROUTE_DETAIL_COMMENTS_ADD_SUCCESS:
	            var comments = state.getIn(['route', 'comments']);
	            var newComments = comments.push((0, _immutable.fromJS)(action.payload));
	            return state.setIn(['route', 'comments'], newComments);
	
	        case types.ROUTE_DETAIL_COMMENTS_ADD_FAIL:
	        case types.ROUTE_DETAIL_COMMENTS_DELETE_FAIL:
	            return state.set('commentsError', action.error);
	
	        case types.ROUTE_DETAIL_COMMENTS_DELETE_SUCCESS:
	            var comnts = state.getIn(['route', 'comments']);
	            var deleteIndex = comnts.findIndex(function (c) {
	                return c.get('id') === action.commentId;
	            });
	
	            return state.setIn(['route', 'comments'], comnts.delete(deleteIndex));
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(44),
	    bindCallback = __webpack_require__(64);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent. If `customizer` is provided it's invoked to compare values.
	 * If `customizer` returns `undefined` comparisons are handled by the method
	 * instead. The `customizer` is bound to `thisArg` and invoked with up to
	 * three arguments: (value, other [, index|key]).
	 *
	 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	 * numbers, `Object` objects, regexes, and strings. Objects are compared by
	 * their own, not inherited, enumerable properties. Functions and DOM nodes
	 * are **not** supported. Provide a customizer function to extend support
	 * for comparing other values.
	 *
	 * @static
	 * @memberOf _
	 * @alias eq
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize value comparisons.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * object == other;
	 * // => false
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * // using a customizer callback
	 * var array = ['hello', 'goodbye'];
	 * var other = ['hi', 'goodbye'];
	 *
	 * _.isEqual(array, other, function(value, other) {
	 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	 *     return true;
	 *   }
	 * });
	 * // => true
	 */
	function isEqual(value, other, customizer, thisArg) {
	  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	  var result = customizer ? customizer(value, other) : undefined;
	  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	}
	
	module.exports = isEqual;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(45),
	    isObject = __webpack_require__(11),
	    isObjectLike = __webpack_require__(53);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(46),
	    equalByTag = __webpack_require__(48),
	    equalObjects = __webpack_require__(49),
	    isArray = __webpack_require__(60),
	    isTypedArray = __webpack_require__(63);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(47);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(50);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(51),
	    isArrayLike = __webpack_require__(54),
	    isObject = __webpack_require__(11),
	    shimKeys = __webpack_require__(58);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(52);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(10),
	    isObjectLike = __webpack_require__(53);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(55),
	    isLength = __webpack_require__(57);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(56);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(59),
	    isArray = __webpack_require__(60),
	    isIndex = __webpack_require__(61),
	    isLength = __webpack_require__(57),
	    keysIn = __webpack_require__(62);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(54),
	    isObjectLike = __webpack_require__(53);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(51),
	    isLength = __webpack_require__(57),
	    isObjectLike = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(59),
	    isArray = __webpack_require__(60),
	    isIndex = __webpack_require__(61),
	    isLength = __webpack_require__(57),
	    isObject = __webpack_require__(11);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(57),
	    isObjectLike = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(65);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Vertice = __webpack_require__(8);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	var _Venue = __webpack_require__(9);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    errorType: '',
	    vertice: new _Vertice2.default({
	        editMode: true,
	        sortorder: 1
	    })
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    switch (action.type) {
	        case types.VENUE_UPDATE:
	            return state.update('vertice', function (v) {
	                return v.mergeDeep({
	                    title: action.venue.name,
	                    venue: action.venue
	                });
	            });
	
	        case types.VERTICE_UPDATE_META:
	            return state.update('vertice', function (v) {
	                return v.merge(action.meta);
	            });
	
	        case types.UPDATE_DESCRIPTION:
	            return state.setIn(['vertice', 'description'], action.text);
	
	        case types.UPDATE_PHOTO:
	            return state.setIn(['vertice', 'capturedPhoto'], action.photo);
	
	        case types.VERTICE_PHOTO_DELETE:
	            return state.removeIn(['vertice', 'capturedPhoto']);
	
	        case types.SET_VERTICE_LOCATION:
	            return state.setIn(['vertice', 'location'], action.location);
	
	        case types.VERTICE_SPICES_SET:
	            return picturePicked(state, action.index, action.spice);
	
	        case types.VERTICE_SPICES_GET_SUCCESS:
	            if (!action.payload.length) {
	                console.warn('Failed to get spices');
	                return state.set('errorType', types.VERTICE_SPICES_GET_FAIL);
	            }
	            var foursquareVenue = (0, _immutable.fromJS)(action.payload[0].foursquare_venue);
	            var instagramVenue = (0, _immutable.fromJS)(action.payload[0].instagram_venue ? action.payload[0].instagram_venue.data : {});
	
	            return state.setIn(['vertice', 'venue', 'spices'], (0, _immutable.Map)({ instagramVenue: instagramVenue, foursquareVenue: foursquareVenue }));
	
	        case types.VERTICE_SPICES_SET_PHOTOS:
	            var foursquareImages = state.getIn(['vertice', 'venue']).getFoursquareImages();
	            var instagramImages = state.getIn(['vertice', 'venue']).getInstagramImages();
	            return state.setIn(['vertice', 'photos'], getSpicesPicked(instagramImages, foursquareImages));
	
	        case types.VERTICE_SPICES_GET_FAIL:
	            return state.set('errorType', types.VERTICE_SPICES_GET_FAIL);
	
	        case types.VERTICE_SPICES_GET:
	            return state.set('errorType', '');
	
	        case types.CREATE_VERTICE_RESET:
	            return initialState;
	        default:
	            return state;
	    }
	}
	
	function picturePicked(vertice, index, spice) {
	    var prevValue = '';
	    var newList = '';
	    var venue = vertice.getIn(['vertice', 'venue']);
	    if (spice === 'Instagram') {
	        var instagram = venue.getInstagramImages(vertice);
	        prevValue = instagram.getIn([index, 'picked']);
	        newList = instagram.update(index, function (element) {
	            return element.merge({ picked: !prevValue });
	        });
	        newList = newList.update(index, function (element) {
	            return element.merge({ getPhoto: _Venue2.default.getInstagramImage });
	        });
	        return vertice.setIn(['vertice', 'venue', 'spices', 'instagramVenue'], newList);
	    } else {
	        var foursquare = venue.getFoursquareImages(vertice);
	        prevValue = foursquare.getIn([index, 'picked']);
	        newList = foursquare.update(index, function (element) {
	            return element.merge({ picked: !prevValue });
	        });
	        newList = newList.update(index, function (element) {
	            return element.merge({ getPhoto: _Venue2.default.getFoursquareImage });
	        });
	        return vertice.setIn(['vertice', 'venue', 'spices', 'foursquareVenue', 'photos'], newList);
	    }
	}
	
	function getSpicesPicked(instagramList, foursquareList) {
	    var newList = [];
	    var pickedInstagramPhotos = instagramList.forEach(function (instagram) {
	        return instagram.get('picked') && newList.push({ url: instagram.get('getPhoto')(instagram).uri });
	    });
	    var pickedFoursquarePhotos = foursquareList.forEach(function (foursquare) {
	        return foursquare.get('picked') && newList.push({ url: foursquare.get('getPhoto')(foursquare).uri });
	    });
	
	    return (0, _immutable.fromJS)(newList);
	}
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actions.PUSH_FLASH_MESSAGE:
	            state.push(action.flashMessage);
	            return state;
	
	        case actions.POP_FLASH_MESSAGE:
	            state.pop();
	            return state;
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _constants = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// import routesListFixture from './routesListFixture';
	
	var initialRoutesState = (0, _immutable.Map)({
	    isFetching: false,
	    didInvalidate: false,
	    items: (0, _immutable.List)(),
	    // items: routesListFixture.map(Route.mapper), // <-- for debugging
	
	    // directionsMatrix: null,
	    error: null,
	
	    // paging
	    offset: 0,
	    limit: 40
	});
	
	function routes() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialRoutesState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case actions.INVALIDATE_BUCKET:
	            return state.set('didInvalidate', true);
	
	        case actions.REQUEST_ROUTES:
	        case actions.ROUTES_QUERY:
	            return state.merge({
	                isFetching: true,
	                didInvalidate: false,
	                offset: action.meta.offset,
	
	                // if offset is 0, we are not appending to an existing list
	                // e.g not part of infinite scrolling
	                // in this case, reset the list so it doesn't get appended
	                items: action.meta.offset === 0 ? new _immutable.List() : state.get('items')
	            });
	
	        case actions.RECEIVE_ROUTES:
	        case actions.ROUTES_QUERY_SUCCESS:
	
	            return state.merge({
	                isFetching: false,
	                didInvalidate: false,
	                items: state.get('items').concat(action.payload._embedded.routes.map(_Route2.default.mapper)),
	                lastUpdated: new Date()
	            });
	
	        case actions.RECEIVE_ROUTES_FAILED:
	        case actions.ROUTES_QUERY_FAIL:
	            return state.merge({
	                isFetching: false,
	                didInvalidate: false,
	                items: [],
	                error: action.payload.error
	            });
	        default:
	            return state;
	    }
	}
	
	// keys will be populated here, one for each grid list
	var initialState = (0, _immutable.Map)({
	    key: null,
	    terms: null, // search terms
	    directionsMatrix: null
	});
	
	/*
	* Key is used to map a collection of routes.
	* For instance 'Oslo:bike:food': [<routes>]
	*
	* We also need
	*/
	function createKey(action) {
	    // const city = action.meta.city || DEFAULT_CITY;
	    // let terms = action.meta.terms;
	    // if (Array.isArray(terms)) {
	    //     terms = terms.join(':');
	    // }
	    //
	    // terms = terms || DEFAULT_TERMS;
	    //
	    // return `${city}:${terms}`;
	    // no need to have special key
	    return _constants.DEFAULT_CITY + ':' + _constants.DEFAULT_TERMS;
	}
	
	function reducer() {
	    var _state$merge2;
	
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState;
	    }
	
	    switch (action.type) {
	        case actions.INVALIDATE_BUCKET:
	        case actions.RECEIVE_ROUTES:
	        case actions.REQUEST_ROUTES:
	        case actions.RECEIVE_ROUTES_FAILED:
	            return state.merge(_defineProperty({}, _constants.DEFAULT_GRID_KEY, routes(state.get(_constants.DEFAULT_GRID_KEY), action)));
	
	        case actions.ROUTES_QUERY:
	            state = state.set('key', createKey(action));
	
	        case actions.ROUTES_QUERY_SUCCESS:
	        case actions.ROUTES_QUERY_FAIL:
	
	            var key = createKey(action);
	            return state.merge((_state$merge2 = {}, _defineProperty(_state$merge2, key, routes(state.get(key), action)), _defineProperty(_state$merge2, 'terms', action.meta.terms), _state$merge2));
	
	        // when setting new city categories
	        case actions.ROUTES_CLEAR:
	            return initialState;
	
	        case actions.ROUTES_UPVOTE_UPDATE_SUCCESS:
	            // loop through every bucketName
	            // for each if you find the route with id, update count
	
	            var likes = action.payload.likes;
	
	            Object.keys(state.toJSON()).forEach(function (bucketName) {
	                if (bucketName !== 'directionsMatrix') {
	
	                    var items = state.getIn([bucketName, 'items']);
	                    if (items) {
	                        var index = items.findIndex(function (route) {
	                            return route.get('id') === action.meta.routeId;
	                        });
	                        var updatedItems = items.update(index, function (route) {
	                            return route.set('upvoteCount', likes);
	                        });
	
	                        state = state.setIn([bucketName, 'items'], updatedItems);
	                    }
	                }
	            });
	
	            return state;
	
	        // when data comes from the server, we need to make it
	        // an immutable object
	        // TODO dont do it this way!!
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    selected: 'all',
	    buckets: (0, _immutable.List)(),
	    city: 'Oslo',
	    isFetching: false,
	    error: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    // rehydrated state
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState.merge(state);
	    }
	
	    switch (action.type) {
	
	        case actions.SELECT_BUCKET:
	            return state.set('selected', action.bucket);
	
	        case actions.BUCKETS_CLEAR:
	            return initialState;
	
	        case actions.SELECTED_BUCKET_BOOTSTRAP:
	
	            return initialState.set('buckets', action.buckets).set('selected', (0, _immutable.Map)(action.buckets[0]));
	
	        case actions.SELECT_BUCKET_CHANGE:
	
	            return state.set('selected', action.bucket);
	
	        case actions.FETCH_CITY_BUCKETS:
	            return state.set('isFetching', true);
	
	        case actions.FETCH_CITY_BUCKETS_SUCCESS:
	
	            var buckets = action.payload._embedded && action.payload._embedded.bucket ? (0, _immutable.List)(action.payload._embedded.bucket.map(function (b) {
	                return (0, _immutable.fromJS)(b);
	            })) : (0, _immutable.List)();
	
	            return state.set('buckets', buckets).set('selected', buckets.get(0)).set('isFetching', false).set('error', null);
	
	        case actions.FETCH_CITY_BUCKETS_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _isArray2 = __webpack_require__(60);
	
	var _isArray3 = _interopRequireDefault(_isArray2);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// import { LOAD } from 'redux-storage';
	
	// super simple handler to flatten the array
	// we get from bad requests (400) from the API
	var formatError = function formatError(error) {
	    if ((0, _isArray3.default)(error)) {
	        return error[0];
	    } else {
	        return error;
	    }
	};
	
	var initialState = (0, _immutable.fromJS)({
	    loggingIn: false,
	    shouldRedirect: false,
	    user: null,
	    token: null,
	    authError: null,
	    signupError: null,
	    isSaving: false,
	    updateError: null,
	    // user profile
	    fethingUserProfile: false,
	    fetchUserProfileError: null,
	
	    // Legacy!!
	    // could have had a list here, one for each profile.
	    // but probabz not necessary.
	    userProfile: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState.set('user', (0, _immutable.fromJS)(state.user));
	    }
	
	    switch (action.type) {
	        case types.LOGIN:
	        case types.FACEBOOK_LOGIN:
	            return state.merge({
	                loggingIn: true
	            });
	
	        case types.LOGIN_SUCCESS:
	        case types.FACEBOOK_LOGIN_SUCCESS:
	            return state.merge({
	                loggingIn: false,
	                shouldRedirect: true,
	                user: action.payload.user,
	                token: action.payload.token,
	                authError: null
	            });
	
	        case types.LOGIN_FAIL:
	        case types.FACEBOOK_LOGIN_FAIL:
	            return state.merge({
	                loggingIn: false,
	                user: null,
	                token: null,
	                authError: formatError(action.error)
	            });
	
	        case types.SIGNUP:
	            return state.merge(state, {
	                loggingIn: true
	            });
	
	        case types.SIGNUP_SUCCESS:
	            return state.merge({
	                loggingIn: false,
	                shouldRedirect: true,
	                user: action.payload.user,
	                token: action.payload.token,
	                signupError: null
	            });
	
	        case types.SIGNUP_FAIL:
	            return state.set('signupError', formatError(action.error)).set('loggingIn', false);
	
	        case types.LOGOUT:
	            return initialState;
	
	        // load from offline storage
	        case types.LOAD:
	            var user = action.payload.user;
	            // if (user && user.routes) {
	            //     user.routes = user.routes.map(Route.mapper);
	            // }
	
	            return state.merge(user);
	
	        case types.USER_TOKEN_STORE_AND_REDIRECT:
	            return state.set('shouldRedirect', false);
	
	        case types.FETCH_USER_PROFILE:
	            return state.set('fethingUserProfile', true);
	
	        case types.FETCH_USER_PROFILE_SUCCESS:
	            return state.merge({
	                'fethingUserProfile': false,
	                userProfile: action.payload
	            });
	        case types.FETCH_USER_PROFILE_FAIL:
	            return state.merge({
	                'fethingUserProfile': false,
	                fetchUserProfileError: action.payload
	            });
	
	        case types.USER_BOOTSTRAP:
	            return state.set('user', (0, _immutable.fromJS)(action.user));
	
	        case types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS:
	            return state.setIn(['user', 'image'], action.payload.image);
	
	        case types.USER_UPDATE_PROFILE:
	            return state.set('isSaving', true).set('updateError', null);
	        case types.USER_CLEAR_ERROR:
	            return state.set('updateError', null);
	
	        case types.USER_UPDATE_PROFILE_FAIL:
	            var message = undefined;
	            if (action.error) {
	                message = action.error.message || action.payload.errorMessage;
	            } else if (action.payload) {
	                message = action.payload.message;
	            }
	
	            return state.set('isSaving', false).set('updateError', message);
	
	        case types.USER_UPDATE_PROFILE_SUCCESS:
	            return state.set('user', (0, _immutable.fromJS)(action.payload)).set('updateError', null).set('isSaving', false);
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _Venue = __webpack_require__(9);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialCurrentState = (0, _immutable.Map)({
	    isFetching: false,
	    item: (0, _immutable.Map)(),
	    error: null
	});
	
	function current() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialCurrentState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case actions.SUGGESTIONS_DETAIL_FETCH:
	            return state.set('isFetching', true).set('item', action.suggestion);
	
	        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
	            var item = state.get('item').mergeDeep((0, _immutable.fromJS)(action.payload));
	            return state.set('isFetching', false).set('item', item);
	
	        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
	            return state.set('isFetching', false).set('error', action.error);
	
	        default:
	            return state;
	    }
	}
	
	var initialState = (0, _immutable.Map)({
	    foursquare: (0, _immutable.List)(),
	    yelp: (0, _immutable.List)(),
	    isFetching: false,
	    error: null,
	    current: undefined
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState;
	    }
	
	    switch (action.type) {
	        case actions.SUGGESTIONS_CLEAR:
	            return initialState;
	
	        case actions.SUGGESTIONS_FETCH:
	            return state.set('isFetching', true).set('current', undefined);
	
	        case actions.SUGGESTIONS_FETCH_SUCCESS:
	
	            return state.set('foursquare', action.payload.foursquare && (0, _immutable.List)(action.payload.foursquare.map(function (item) {
	                return (0, _immutable.fromJS)(item);
	            }))).set('yelp', action.payload.yelp && (0, _immutable.List)(action.payload.yelp.map(function (item) {
	                return (0, _immutable.fromJS)(item);
	            }))).set('isFetching', false).set('error', false);
	
	        case actions.SUGGESTIONS_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        case actions.SUGGESTIONS_DETAIL_FETCH:
	        case actions.SUGGESTIONS_DETAIL_FETCH_SUCCESS:
	        case actions.SUGGESTIONS_DETAIL_FETCH_FAIL:
	            return state.set('current', current(state.get('current'), action));
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.fromJS)({
	    isFetching: false,
	    items: (0, _immutable.List)(),
	    error: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        return (0, _immutable.fromJS)(state);
	    }
	
	    switch (action.type) {
	        case actions.NOTIFICATIONS_FETCH:
	            return state.set('isFetching', true);
	
	        case actions.NOTIFICATIONS_FETCH_SUCCESS:
	            return state.set('isFetching', false).set('items', (0, _immutable.List)(action.payload));
	
	        case actions.NOTIFICATIONS_FETCH_FAIL:
	            return state.set('isFetching', false).set('errors', action.error);
	
	        case actions.NOTIFICATIONS_MARK_SEEN_SUCCESS:
	            return state.set('items', state.get('items').map(function (i) {
	                return Object.assign({}, i, { seen: true });
	            }));
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _City = __webpack_require__(74);
	
	var _City2 = _interopRequireDefault(_City);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    isFetching: false,
	    cities: new _immutable.List(),
	    isError: false,
	    selected: '',
	    buckets: new _immutable.List(),
	    isFetchingBuckets: false,
	    bucketsError: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState.merge((0, _immutable.fromJS)(state));
	    }
	
	    switch (action.type) {
	        case types.CITIES_FETCH:
	            return state.set('isFetching', true).set('isError', false);
	
	        case types.CITIES_FETCH_SUCCESS:
	            return state.set('isFetching', false).set('isError', false).set('cities', new _immutable.List(_City2.default.multiMapper(action.payload)));
	
	        case types.CITIES_FETCH_FAIL:
	            return state.set('isFetching', false).set('isError', true);
	
	        case types.CITY_SELECT:
	            return state.set('selected', action.city);
	
	        case types.CITIES_BUCKETS_FETCH:
	            return state.set('isFetchingBuckets', true);
	
	        case types.CITIES_BUCKETS_FETCH_SUCCESS:
	            return state.set('isFetchingBuckets', false).set('buckets', new _immutable.List(action.payload));
	
	        case types.CITIES_BUCKETS_FETCH_FAIL:
	            return state.set('isFetchingBuckets', false).set('bucketsError', action.error);
	
	        case types.LOAD:
	            return state.set('selected', null);
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CityRecord = (0, _immutable.Record)({
	    imageSmall: '',
	    imageMedium: '',
	    imageLarge: '',
	    title: '',
	    address: ''
	});
	
	var City = function (_CityRecord) {
	    _inherits(City, _CityRecord);
	
	    function City() {
	        _classCallCheck(this, City);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(City).apply(this, arguments));
	    }
	
	    _createClass(City, null, [{
	        key: 'multiMapper',
	        value: function multiMapper(cities) {
	            return cities.map(function (city) {
	                return new City(city);
	            });
	        }
	    }]);
	
	    return City;
	}(CityRecord);
	
	exports.default = City;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    isFetching: false,
	    items: new _immutable.List(),
	    error: null,
	    fetched: false,
	    fetchedDeep: false
	});
	
	function removeBookmark(state, routeId) {
	    console.log(state, 'dette er ');
	    var items = state.get('items');
	    return items.delete(items.findIndex(function (item) {
	        return item.get('id') === routeId;
	    }));
	}
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Map.isMap(state)) {
	        state = (0, _immutable.fromJS)(state);
	    }
	
	    switch (action.type) {
	        case types.BOOKMARKS_POST:
	            var items = state.get('items').push(action.route);
	
	            return state.set('items', items);
	
	        // reset so we have to fetch routes again
	        // when we enter user profile
	        // .set('fetchedDeep', false);
	
	        case types.BOOKMARKS_POST_SUCCESS:
	            return state;
	
	        case types.BOOKMARKS_POST_FAIL:
	            console.log(action, 'dette er da');
	
	            return state.set('items', removeBookmark(state, action.bookmark.routeId)).set('error', action.error);
	
	        case types.BOOKMARKS_FETCH:
	            return state.set('isFetching', true);
	
	        case types.BOOKMARKS_FETCH_SUCCESS:
	            var bookmarks = action.payload;
	            return state.merge({
	                isFetching: false,
	                fetched: true,
	                fetchedDeep: true,
	                items: bookmarks ? (0, _immutable.List)(bookmarks.map(_Route2.default.mapper)) : (0, _immutable.List)()
	            });
	
	        case types.BOOKMARKS_FETCH_FAIL:
	            return state.set('error', action.error);
	
	        case types.BOOKMARKS_IDS_FETCH:
	            return state.set('isFetching', true);
	
	        case types.BOOKMARKS_IDS_FETCH_SUCCESS:
	            return state.merge({
	                isFetching: false,
	                fetched: true,
	                fetchedDeep: false,
	                items: (0, _immutable.List)(action.payload.map(function (id) {
	                    return (0, _immutable.Map)({ id: id });
	                }))
	            });
	
	        case types.BOOKMARKS_IDS_FETCH_FAIL:
	            return state.set('error', action.error);
	
	        case types.BOOKMARKS_DELETE:
	            return state.set('items', removeBookmark(state, action.route.get('id')));
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    isFetching: false,
	    isFetched: false,
	    error: null,
	    createLocalRoute: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case types.CREATE_LOCAL_ROUTE_FETCH:
	            return state.set('isFetching', true);
	
	        case types.CREATE_LOCAL_ROUTE_FETCH_SUCCESS:
	            return state.set('isFetched', true).set('isFetching', false).set('error', null).set('createLocalRoute', action.payload);
	
	        case types.CREATE_LOCAL_ROUTE_VERTICE_REMOVE_SUCCESS:
	            return state.set('createLocalRoute', action.payload);
	
	        case types.CREATE_LOCAL_ROUTE_VERTICE_ADD_SUCCESS:
	            return state.set('createLocalRoute', action.payload).set('isFetched', false);
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _immutable = __webpack_require__(7);
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _User = __webpack_require__(78);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.fromJS)({
	    user: null, // User
	    isFetching: false,
	    error: null,
	    isLoggedInUser: false
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = (0, _immutable.fromJS)(state).set('user', new _User2.default(state.user));
	    }
	
	    // the whole state tree is just a copy of the userReducer state
	    // we do this to have one separate key for the logged in user (store.user)
	    // and one key for each public profile (store.publicUserProfile.anna = {}
	    // store.publicUserProfile.Tim = {}...)
	    //
	    // But for now we only support one public user profile at the time,
	    // which is the DEFAULT_PUBLIC_USER_KEY
	    switch (action.type) {
	        case types.PUBLIC_USER_FETCH:
	            return state.merge({
	                user: new _User2.default(action.meta),
	                isFetching: true,
	                error: null,
	                isLoggedInUser: false
	            });
	
	        case types.PUBLIC_USER_FETCH_SUCCESS:
	
	            if (action.payload.users) {
	                var user = new _User2.default(_User2.default.mapper(action.payload._embedded.users[0]));
	                var meta = action.meta || {};
	
	                return state.merge({
	                    user: user,
	                    isFetching: false,
	                    error: null,
	                    isLoggedInUser: meta.loggedInUserId === user.get('id')
	                });
	            } else {
	                return state.merge({
	                    user: null,
	                    isFetching: false,
	                    isLoggedInUser: false,
	                    error: { message: 'Failed to fetch user, empty result' }
	                });
	            }
	
	        case types.PUBLIC_USER_FETCH_FAIL:
	            return state.merge({
	                user: null,
	                isFetching: false,
	                isLoggedInUser: false,
	                error: action.payload
	            });
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserRecord = (0, _immutable.Record)({
	    id: '',
	    username: '',
	    mail: '',
	    description: '',
	    image: '',
	    profile: null,
	    location: null,
	    facebook: null,
	    instagram_profile_url: null,
	    backgroundImage: null,
	    url: ''
	});
	
	var User = function (_UserRecord) {
	    _inherits(User, _UserRecord);
	
	    function User() {
	        _classCallCheck(this, User);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
	    }
	
	    _createClass(User, [{
	        key: 'getProfilePhoto',
	        value: function getProfilePhoto() {
	            return this.get('profile') ? this.get('profile').picture : this.get('image');
	        }
	    }], [{
	        key: 'mapper',
	        value: function mapper(data) {
	            return new User(data);
	        }
	    }]);
	
	    return User;
	}(UserRecord);
	
	exports.default = User;
	exports.default = User;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _immutable = __webpack_require__(7);
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.fromJS)({
	    fetchRoutesError: false,
	    isFetching: false,
	    likedRoutes: new _immutable.List(),
	    routes: new _immutable.List()
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = (0, _immutable.fromJS)(state);
	    }
	
	    switch (action.type) {
	        case types.FETCH_USER_ROUTES:
	            return state.merge({
	                isFetching: true,
	                fetchRoutesError: false,
	                routes: new _immutable.List(),
	                likedRoute: new _immutable.List()
	            });
	
	        case types.FETCH_USER_ROUTES_SUCCESS:
	            if (!action.payload._embedded) {
	                return state;
	            }
	            return state.merge({
	                routes: action.payload._embedded.routes.map(_Route2.default.mapper),
	                isFetching: false,
	                fetchRoutesError: false
	            });
	
	        case types.FETCH_USER_ROUTES_FAIL:
	            return state.set('fetchRoutesError', action.error).set(isFetching, false);
	
	        case types.PUBLIC_LIKED_ROUTE_SUCCESS:
	            if (!action.payload._embedded) {
	                return state;
	            }
	            return state.merge({
	                isFetching: false,
	                fetchRoutesError: false,
	                likedRoutes: action.payload._embedded.routes.map(_Route2.default.mapper)
	            });
	
	        case types.UPDATE_USER_ROUTE:
	            // optimistic update..
	            var newRoutes = updateRoute(state.get('routes'), action.meta);
	            return state.set('routes', newRoutes);
	
	        default:
	            return state;
	    }
	}
	
	/**
	* @param (array) routes, list of routes
	* @param (object) updatedRoute, contains the route id and some properties. An exmaple of the object
	* can be {id: 1337, isActive: false, isDraft: true}
	*/
	
	function updateRoute(routes, updatedRoute) {
	    return routes.map(function (route) {
	        if (route.get('id') === updatedRoute.id) {
	            return updateKeyValue(route, updatedRoute);
	        } else {
	            return route;
	        }
	    });
	}
	
	function updateKeyValue(route, updatedRoute) {
	    var newRoute = route;
	    var keys = Object.keys(updatedRoute);
	    keys.forEach(function (key) {
	        newRoute = newRoute.set(key, updatedRoute[key]);
	    });
	    return newRoute;
	}
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _constants = __webpack_require__(18);
	
	var _invariant = __webpack_require__(81);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.fromJS)({
	    isSearchCityActive: false,
	    isSearchRoutesActive: false,
	    showSearchBar: true,
	    routesSearchString: '',
	    citiesSearchString: '',
	    sort: _constants.LATEST
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	        case actions.SEARCH_CITY_ACTIVE:
	            return state.merge({
	                isSearchCityActive: true,
	                isSearchRoutesActive: false, // todo fix a new variable
	                showSearchBar: true
	            });
	
	        case actions.SEARCH_ROUTES_ACTIVE:
	            return state.merge({
	                isSearchCityActive: false,
	                isSearchRoutesActive: true,
	                showSearchBar: true
	            });
	
	        case actions.SEARCH_IS_ACTIVE:
	            return state.set('showSearchBar', true);
	
	        case actions.SEARCH_IS_INACTIVE:
	            return state.merge({
	                isSearchCityActive: false,
	                isSearchRoutesActive: false
	            });
	        case actions.SEARCHING_ROUTES:
	            return state.set('routesSearchString', action.searchString);
	
	        case actions.SEARCH_HIDE:
	            return state.set('showSearchBar', false);
	
	        case actions.SEARCH_SHOW:
	            return state.set('showSearchBar', true);
	
	        case actions.SEARCHING_CITIES:
	            return state.set('citiesSearchString', action.searchString);
	        case actions.SEARCH_SORT_VALUE_CHANGED:
	            (0, _invariant2.default)(action.sort === _constants.LATEST || action.sort === _constants.POPULAR, 'sortValue needs to be either popular or latest not ' + action.sort);
	            return state.set('sort', action.sort);
	
	        default:
	            return state;
	
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _immutable = __webpack_require__(7);
	
	var _actionTypes = __webpack_require__(16);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    things: (0, _immutable.List)()
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case actions.HAS_SEEN_THINGS_ADD:
	            return state.set('things', state.get('things').push(action.thing));
	
	        // only used for dev
	        case actions.HAS_SEEN_THINGS_CLEAR:
	            return state.set('things', (0, _immutable.List)());
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AnalyticsMiddleware = undefined;
	
	var _AnalyticsMiddleware2 = __webpack_require__(84);
	
	var _AnalyticsMiddleware3 = _interopRequireDefault(_AnalyticsMiddleware2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AnalyticsMiddleware = _AnalyticsMiddleware3.default;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTypes = __webpack_require__(16);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var whiteList = [types.FACEBOOK_LOGIN_SUCCESS, types.SIGNUP_SUCCESS, types.LOGIN_SUCCESS];
	
	var AnalyticsMiddleware = function () {
	    function AnalyticsMiddleware() {
	        var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, AnalyticsMiddleware);
	
	        this.tracking = args.tracking;
	
	        this.analyticsMiddleware = this.analyticsMiddleware.bind(this);
	    }
	
	    _createClass(AnalyticsMiddleware, [{
	        key: 'analyticsMiddleware',
	        value: function analyticsMiddleware(store) {
	            var _this = this;
	
	            return function (next) {
	                return function (action) {
	                    whiteList.indexOf(action.type) >= 0 && _this.tracking.trackWithProperties(action.type, action.payload.user);
	                    return next(action);
	                };
	            };
	        }
	    }]);
	
	    return AnalyticsMiddleware;
	}();
	
	exports.default = AnalyticsMiddleware;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reorderService = exports.GooglePlacesAPIClient = undefined;
	
	var _GooglePlacesAPIClient2 = __webpack_require__(23);
	
	var _GooglePlacesAPIClient3 = _interopRequireDefault(_GooglePlacesAPIClient2);
	
	var _reorderService2 = __webpack_require__(21);
	
	var _reorderService3 = _interopRequireDefault(_reorderService2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.GooglePlacesAPIClient = _GooglePlacesAPIClient3.default;
	exports.reorderService = _reorderService3.default;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.injectDependencies = undefined;
	
	var _injectDependencies2 = __webpack_require__(87);
	
	var _injectDependencies3 = _interopRequireDefault(_injectDependencies2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.injectDependencies = _injectDependencies3.default;

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = injectDependencies;
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function injectDependencies(client) {
	    return function (_ref) {
	        var dispatch = _ref.dispatch;
	        var getState = _ref.getState;
	
	        return function (next) {
	            return function (action) {
	                if (typeof action === 'function') {
	                    return action(dispatch, getState);
	                }
	
	                var promise = action.promise;
	                var types = action.types;
	
	                var rest = _objectWithoutProperties(action, ['promise', 'types']);
	
	                if (!promise) {
	                    return next(action);
	                }
	
	                var _types = _slicedToArray(types, 3);
	
	                var REQUEST = _types[0];
	                var SUCCESS = _types[1];
	                var FAILURE = _types[2];
	
	                next(_extends({}, rest, { type: REQUEST }));
	                return promise(client).then(function (payload) {
	                    return next(_extends({}, rest, { payload: payload, type: SUCCESS }));
	                }, function (error) {
	                    return next(_extends({}, rest, { error: error, type: FAILURE }));
	                }).catch(function (error) {
	                    console.error('MIDDLEWARE ERROR:', error);
	                    next(_extends({}, rest, { error: error, type: FAILURE }));
	                });
	            };
	        };
	    };
	}
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=fruits-lib.js.map