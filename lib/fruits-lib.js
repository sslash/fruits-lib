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
	exports.utils = exports.services = exports.constants = exports.middleware = exports.reducers = exports.actions = exports.models = exports.fruitslib = exports.config = undefined;
	
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
	
	var _actions2 = __webpack_require__(15);
	
	var _actions = _interopRequireWildcard(_actions2);
	
	var _reducers2 = __webpack_require__(32);
	
	var _reducers = _interopRequireWildcard(_reducers2);
	
	var _middleware2 = __webpack_require__(86);
	
	var _middleware = _interopRequireWildcard(_middleware2);
	
	var _actionTypes = __webpack_require__(17);
	
	var _constants = _interopRequireWildcard(_actionTypes);
	
	var _services2 = __webpack_require__(88);
	
	var _services = _interopRequireWildcard(_services2);
	
	var _utils2 = __webpack_require__(90);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.fruitslib = _fruitslib;
	exports.models = _models;
	exports.actions = _actions;
	exports.reducers = _reducers;
	exports.middleware = _middleware;
	exports.constants = _constants;
	exports.services = _services;
	exports.utils = _utils;

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
	    var i = Math.floor(Math.random() * len);
	    return images[i];
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
	exports.Message = exports.Conversation = exports.Vertice = exports.Venue = exports.Route = undefined;
	
	var _Route2 = __webpack_require__(6);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _Venue2 = __webpack_require__(10);
	
	var _Venue3 = _interopRequireDefault(_Venue2);
	
	var _Vertice2 = __webpack_require__(9);
	
	var _Vertice3 = _interopRequireDefault(_Vertice2);
	
	var _Conversation2 = __webpack_require__(13);
	
	var _Conversation3 = _interopRequireDefault(_Conversation2);
	
	var _Message2 = __webpack_require__(14);
	
	var _Message3 = _interopRequireDefault(_Message2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Route = _Route3.default;
	exports.Venue = _Venue3.default;
	exports.Vertice = _Vertice3.default;
	exports.Conversation = _Conversation3.default;
	exports.Message = _Message3.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _timeAgo = __webpack_require__(8);
	
	var _timeAgo2 = _interopRequireDefault(_timeAgo);
	
	var _Vertice = __webpack_require__(9);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ta = (0, _timeAgo2.default)();
	
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
	
	    // temporary while we work out sending
	    // nested components in fetch
	    userId: '',
	    buckets: new _immutable.List(),
	    likes: new _immutable.List(),
	    vertices: new _immutable.List(),
	    upvoteCount: 0,
	    city: ''
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
	            return createdDate ? ta.ago(new Date(createdDate)) : null;
	        }
	    }, {
	        key: 'getNextSortorder',
	        value: function getNextSortorder() {
	            return this.get('vertices').size + 1;
	        }
	
	        // used in routeDetail/create reducers
	
	    }], [{
	        key: 'mapper',
	        value: function mapper(route) {
	            var vertices = route._embedded ? route._embedded.vertices : route.vertices || [];
	            route.vertices = (0, _immutable.List)(vertices.map(function (vert) {
	                return _Vertice2.default.mapper(vert);
	            }));
	            route.user = (0, _immutable.fromJS)(route.user || {});
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
/***/ function(module, exports) {

	var timeago = function() {
	
	    var o = {
	      second: 1000,
	      minute: 60 * 1000,
	      hour: 60 * 1000 * 60,
	      day: 24 * 60 * 1000 * 60,
	      week: 7 * 24 * 60 * 1000 * 60,
	      month: 30 * 24 * 60 * 1000 * 60,
	      year: 365 * 24 * 60 * 1000 * 60
	    };
	    var obj = {};
	
	    obj.ago = function(nd) {
	      var r = Math.round,
	        pl = function(v, n) {
	          return n + ' ' + v + (n > 1 ? 's' : '') + ' ago'
	        },
	        ts = new Date().getTime() - new Date(nd).getTime(),
	        ii;
	      for (i in o) {
	        if (r(ts) < o[i]) return pl(ii || 'm', r(ts / (o[ii] || 1)))
	        ii = i;
	      }
	      return pl(i, r(ts / o[i]));
	    }
	
	    obj.today = function() {
	      var now = new Date();
	      var Weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	      var Month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	      return Weekday[now.getDay()] + ", " + Month[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
	    }
	
	    obj.timefriendly = function(s) {
	      var t = s.match(/(\d).([a-z]*?)s?$/);
	      return t[1] * eval(o[t[2]]);
	    }
	
	    obj.mintoread = function(text, altcmt, wpm) {
	      var m = Math.round(text.split(' ').length / (wpm || 200));
	      return (m || '< 1') + (altcmt || ' min to read');
	    }
	
	    return obj;
	  }
	
	if (typeof module !== 'undefined' && module.exports)
	  module.exports = timeago;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _Venue = __webpack_require__(10);
	
	var _Venue2 = _interopRequireDefault(_Venue);
	
	var _getDefaultCardImg = __webpack_require__(3);
	
	var _getDefaultCardImg2 = _interopRequireDefault(_getDefaultCardImg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function extractCity(venue) {
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
	    capturedPhoto: '',
	    location: {},
	    fsTip: null,
	
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
	            return new Vertice(vertice).set('venue', new _Venue2.default(vertice.venue));
	        }
	    }]);
	
	    return Vertice;
	}(VerticeRecord);
	
	exports.default = Vertice;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _isFunction = __webpack_require__(11);
	
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
	    foursquareId: null,
	    yelpId: null,
	
	    // old. must remove me. TODO
	    venueSocial: null
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
	    }], [{
	        key: 'getInstagramImage',
	        value: function getInstagramImage(instagramImage) {
	            return { uri: instagramImage.getIn(['images', 'low_resolution', 'url']) };
	        }
	    }, {
	        key: 'getFoursquareImage',
	        value: function getFoursquareImage(foursquareImage) {
	            return { uri: foursquareImage.get('prefix') + '306x306' + foursquareImage.get('suffix') };
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
	            } else {
	                var address = '';
	                if (venue.address_components) {
	                    address = [venue.address_components[0] && venue.address_components[0].short_name || '', venue.address_components[1] && venue.address_components[1].short_name || '', venue.address_components[2] && venue.address_components[2].short_name || ''].join(' ');
	                }
	                venue.address = address;
	            }
	
	            return new Venue(venue);
	        }
	    }]);
	
	    return Venue;
	}(VenueRecord);
	
	exports.default = Venue;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	var _Message = __webpack_require__(14);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ConversationRecord = (0, _immutable.Record)({
	    id: null,
	    userToken: '',
	    messages: new _immutable.List(),
	    userId: null
	});
	
	var Conversation = function (_ConversationRecord) {
	    _inherits(Conversation, _ConversationRecord);
	
	    function Conversation() {
	        _classCallCheck(this, Conversation);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Conversation).apply(this, arguments));
	    }
	
	    _createClass(Conversation, [{
	        key: 'addMessage',
	        value: function addMessage(messages) {
	            var _this2 = this;
	
	            var newMessages = new _immutable.List();
	            messages.forEach(function (message) {
	                if (message.message) {
	                    var _findImageAndPosition = _this2.findImageAndPosition(message);
	
	                    var position = _findImageAndPosition.position;
	                    var image = _findImageAndPosition.image;
	
	                    message = image ? { text: message.message, date: new Date(message.created), position: position, image: image } : { text: message.message, date: new Date(message.created), position: position };
	                    newMessages = newMessages.push(new _Message2.default(message));
	                }
	            });
	            return newMessages;
	        }
	    }, {
	        key: 'findImageAndPosition',
	        value: function findImageAndPosition(message) {
	            if (this.get('userId') === message.fromId) {
	                return { position: 'right', image: message.fromImage };
	            } else {
	                return { position: 'left', image: message.fromImage };
	            }
	        }
	    }], [{
	        key: 'mapper',
	        value: function mapper(conversation) {
	            var conver = new Conversation(conversation);
	            conver = conver.set('userId', conversation.id);
	            if (conversation.messages) {
	                conver = conver.set('messages', conver.addMessage(conversation.messages));
	            }
	            return conver;
	        }
	    }]);
	
	    return Conversation;
	}(ConversationRecord);
	
	exports.default = Conversation;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MessageRecord = (0, _immutable.Record)({
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
	
	var Message = function (_MessageRecord) {
	    _inherits(Message, _MessageRecord);
	
	    function Message() {
	        _classCallCheck(this, Message);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Message).apply(this, arguments));
	    }
	
	    return Message;
	}(MessageRecord);
	
	exports.default = Message;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.actions = undefined;
	
	var _appActions = __webpack_require__(16);
	
	var app = _interopRequireWildcard(_appActions);
	
	var _routesActions = __webpack_require__(18);
	
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
	
	var _inspirationActions = __webpack_require__(30);
	
	var inspiration = _interopRequireWildcard(_inspirationActions);
	
	var _conversationActions = __webpack_require__(31);
	
	var conversation = _interopRequireWildcard(_conversationActions);
	
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
	    inspiration: inspiration,
	    conversation: conversation
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _actionTypes = __webpack_require__(17);
	
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
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//STANDARD: domain_action_meta
	
	//Conversation
	var INIT_CONVERSATION = exports.INIT_CONVERSATION = 'INIT_CONVERSATION';
	var FETCH_CONVERSATION = exports.FETCH_CONVERSATION = 'FETCH_CONVERSATION';
	var FETCH_CONVERSATION_SUCCESS = exports.FETCH_CONVERSATION_SUCCESS = 'FETCH_CONVERSATION_SUCCESS';
	var FETCH_CONVERSATION_ERROR = exports.FETCH_CONVERSATION_ERROR = 'FETCH_CONVERSATION_ERROR';
	var POST_MESSAGE = exports.POST_MESSAGE = 'POST_MESSAGE';
	var POST_MESSAGE_SUCCESS = exports.POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
	var POST_MESSAGE_ERROR = exports.POST_MESSAGE_ERROR = 'POST_MESSAGE_ERROR';
	
	// app
	var OPEN_LOGIN_MODAL = exports.OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
	var CLOSE_LOGIN_MODAL = exports.CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
	var CHECK_TOKEN_SUCCESS = exports.CHECK_TOKEN_SUCCESS = 'CHECK_TOKEN_SUCCESS';
	var CHECK_TOKEN_REQUREST = exports.CHECK_TOKEN_REQUREST = 'CHECK_TOKEN_REQUREST';
	var CHECK_TOKEN_FAILED = exports.CHECK_TOKEN_FAILED = 'CHECK_TOKEN_FAILED';
	
	//navbar
	var NAVBAR_CREATE_PRESSED = exports.NAVBAR_CREATE_PRESSED = 'NAVBAR_CREATE_PRESSED';
	var NAVBAR_HOME_PRESSED = exports.NAVBAR_HOME_PRESSED = 'NAVBAR_HOME_PRESSED';
	var NAVBAR_SEARCH_PRESSED = exports.NAVBAR_SEARCH_PRESSED = 'NAVBAR_SEARCH_PRESSED';
	var NAVBAR_NOTIFICATION_PRESSED = exports.NAVBAR_NOTIFICATION_PRESSED = 'NAVBAR_NOTIFICATION_PRESSED';
	var NAVBAR_USERPROFILE_PRESSED = exports.NAVBAR_USERPROFILE_PRESSED = 'NAVBAR_USERPROFILE_PRESSED';
	
	//vertice
	var VERTICE_MAP_PRESSED = exports.VERTICE_MAP_PRESSED = 'VERTICE_MAP_PRESSED';
	
	// routes
	var REQUEST_ROUTES = exports.REQUEST_ROUTES = 'REQUEST_ROUTES';
	var RECEIVE_ROUTES = exports.RECEIVE_ROUTES = 'RECEIVE_ROUTES';
	var RECEIVE_ROUTES_FAILED = exports.RECEIVE_ROUTES_FAILED = 'RECEIVE_ROUTES_FAILED';
	var SELECT_BUCKET = exports.SELECT_BUCKET = 'SELECT_BUCKET';
	var INVALIDATE_BUCKET = exports.INVALIDATE_BUCKET = 'INVALIDATE_BUCKET';
	var SELECTED_BUCKET_BOOTSTRAP = exports.SELECTED_BUCKET_BOOTSTRAP = 'SELECTED_BUCKET_BOOTSTRAP';
	var SELECT_BUCKET_CHANGE = exports.SELECT_BUCKET_CHANGE = 'SELECT_BUCKET_CHANGE';
	
	var FETCH_CITY_BUCKETS = exports.FETCH_CITY_BUCKETS = 'FETCH_CITY_BUCKETS';
	var FETCH_CITY_BUCKETS_SUCCESS = exports.FETCH_CITY_BUCKETS_SUCCESS = 'FETCH_CITY_BUCKETS_SUCCESS';
	var FETCH_CITY_BUCKETS_FAIL = exports.FETCH_CITY_BUCKETS_FAIL = 'FETCH_CITY_BUCKETS_FAIL';
	
	var ROUTE_CREATE_INIT = exports.ROUTE_CREATE_INIT = 'ROUTE_CREATE_INIT';
	
	// route detail
	var ROUTE_DETAIL_FETCH = exports.ROUTE_DETAIL_FETCH = 'ROUTE_DETAIL_FETCH';
	var ROUTE_DETAIL_FETCH_SUCCESS = exports.ROUTE_DETAIL_FETCH_SUCCESS = 'ROUTE_DETAIL_FETCH_SUCCESS';
	var ROUTE_DETAIL_FETCH_FAIL = exports.ROUTE_DETAIL_FETCH_FAIL = 'ROUTE_DETAIL_FETCH_FAIL';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS';
	var ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL = exports.ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL = 'ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL';
	
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
	
	// inspiration
	var INSPIRATION_FETCH = exports.INSPIRATION_FETCH = 'INSPIRATION_FETCH';
	var INSPIRATION_FETCH_SUCCESS = exports.INSPIRATION_FETCH_SUCCESS = 'INSPIRATION_FETCH_SUCCESS';
	var INSPIRATION_FETCH_FAIL = exports.INSPIRATION_FETCH_FAIL = 'INSPIRATION_FETCH_FAIL';

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.requestRoutes = requestRoutes;
	exports.shouldFetchRoutes = shouldFetchRoutes;
	exports.fetchRoutesIfNeeded = fetchRoutesIfNeeded;
	exports.fetchCityBuckets = fetchCityBuckets;
	exports.selectBucket = selectBucket;
	exports.invalidateBucket = invalidateBucket;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function requestRoutes(bucketName, bucketId, city) {
	
	    var params = {};
	
	    // TODO: remove this ugly hack
	    if (bucketId && bucketName !== 'all') {
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
	        meta: { bucketName: bucketName }
	    };
	} // TODO: finishe me: http://rackt.github.io/redux/docs/advanced/ExampleRedditAPI.html
	
	function shouldFetchRoutes(routes, bucket) {
	    var routesByBucket = routes[bucket];
	    if (!routesByBucket) {
	        return true;
	    } else if (routesByBucket.isFetching) {
	        return false;
	    } else {
	        return routesByBucket.didInvalidate;
	    }
	}
	
	function fetchRoutesIfNeeded(routes, bucketName, bucketId, city) {
	    if (shouldFetchRoutes(routes, bucketName)) {
	        return requestRoutes(bucketName, bucketId, city);
	    }
	}
	
	function fetchCityBuckets(existingBuckets) {
	    if (existingBuckets.size) {
	        return;
	    }
	
	    return {
	        types: [types.FETCH_CITY_BUCKETS, types.FETCH_CITY_BUCKETS_SUCCESS, types.FETCH_CITY_BUCKETS_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	
	            return req.get('/buckets', { params: { city: 'Oslo' } });
	        }
	    };
	}
	
	function selectBucket(bucket) {
	    return {
	        type: types.SELECT_BUCKET,
	        bucket: bucket
	    };
	}
	
	// TODO: finishe me
	function invalidateBucket(bucket) {
	    return {
	        type: types.INVALIDATE_BUCKET,
	        bucket: bucket
	    };
	}

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
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _createRouteActions = __webpack_require__(20);
	
	var createRouteActions = _interopRequireWildcard(_createRouteActions);
	
	var _Venue = __webpack_require__(10);
	
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
	            return req.get('/venues/getSpicesByGEOandName', { name: name, lat: geometry.lat, lng: geometry.lng });
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
	exports.setRouteErrors = setRouteErrors;
	exports.postRoute = postRoute;
	exports.updateRoute = updateRoute;
	exports.addVerticeToRoute = addVerticeToRoute;
	exports.fetchSpicesForVertice = fetchSpicesForVertice;
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
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _reorderService = __webpack_require__(21);
	
	var _immutable = __webpack_require__(7);
	
	var _Vertice = __webpack_require__(9);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	var _Venue = __webpack_require__(10);
	
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
	
	function toggleBucket(bucket) {
	    return { type: actions.CREATE_ROUTE_TOGGLE_BUCKET, bucket: bucket };
	}
	
	function setRouteErrors(errors) {
	    return { type: actions.CREATE_ROUTE_SET_ERRORS, errors: errors };
	}
	
	function postRoute(data) {
	    return {
	        types: [actions.POST_ROUTE, actions.POST_ROUTE_SUCCESS, actions.POST_ROUTE_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.post('/routes', data);
	        },
	        meta: data
	    };
	}
	
	function updateRoute(routeId, data) {
	    return {
	        types: [actions.CREATE_ROUTE_UPDATE, actions.CREATE_ROUTE_UPDATE_SUCCESS, actions.CREATE_ROUTE_UPDATE_FAIL],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
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
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return (0, _pollSpices.pollSpices)(req, null, venueId, sortorder, 1);
	        }
	    };
	}
	
	function updateVertice(updateData, verticeId, routeId) {
	
	    return {
	        types: [actions.VERTICE_UPDATE, actions.VERTICE_UPDATE_SUCCESS, actions.VERTICE_UPDATE_FAIL],
	        promise: function promise(_ref5) {
	            var req = _ref5.req;
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
	        promise: function promise(_ref6) {
	            var req = _ref6.req;
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
	        promise: function promise(_ref7) {
	            var req = _ref7.req;
	            return routeService.addPhotoToVertice(routeId, verticeId, filename, req);
	        },
	        meta: {
	            routeId: routeId,
	            verticeId: verticeId
	        }
	    };
	}
	
	function addSpicesPhoto(routeId, verticeId, url, source) {
	
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_ADD_FAIL],
	        promise: function promise(_ref8) {
	            var req = _ref8.req;
	            return req.put('/routes/' + routeId + '/vertices/' + verticeId + '/photo', {
	                externalImage: url,
	                photoSource: source
	            });
	        },
	        meta: { id: verticeId, photo: { url: url, source: source } }
	    };
	}
	
	function deleteSpicesPhoto(routeId, verticeId, url) {
	
	    return {
	        types: [actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_SUCCESS, actions.CREATE_ROUTE_VERTICE_SPICE_PHOTO_REMOVE_FAIL],
	        promise: function promise(_ref9) {
	            var req = _ref9.req;
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
	        promise: function promise(_ref10) {
	            var req = _ref10.req;
	            return req.post('/routes/' + routeId + '/finito', data);
	        }
	    };
	};
	
	function fetchBuckets() {
	
	    return {
	        types: [actions.FETCH_BUCKETS, actions.FETCH_BUCKETS_SUCCESS, actions.FETCH_BUCKETS_FAIL],
	        promise: function promise(_ref11) {
	            var req = _ref11.req;
	            return req.get('/buckets');
	        }
	    };
	}
	
	function reorder(routeId, vertices, verticeIndex, upOrDown) {
	    var url = '/routes/' + routeId + '/vertices/reorder';
	    var reorderList = (0, _reorderService.reorderVertices)(verticeIndex, vertices, upOrDown);
	
	    return {
	        types: [actions.VERTICE_REORDER, actions.VERTICE_REORDER_SUCCESS, actions.VERTICE_REORDER_FAIL],
	        promise: function promise(_ref12) {
	            var req = _ref12.req;
	            return req.post(url, { reorderList: reorderList });
	        },
	        meta: { reorderList: reorderList }
	    };
	};
	
	// copied from routeDetail
	function fetch(routeId) {
	    return {
	        types: [actions.CREATE_ROUTE_FETCH, actions.CREATE_ROUTE_FETCH_SUCCESS, actions.CREATE_ROUTE_FETCH_FAIL],
	        promise: function promise(_ref13) {
	            var req = _ref13.req;
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
	                clearInterval(pollInterval);
	                resolve({
	                    venue: {
	                        venueSocial: res
	                    },
	                    sortorder: sortorder
	                });
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
	
	var _actionTypes = __webpack_require__(17);
	
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
	exports.storeLoginToken = storeLoginToken;
	exports.facebookLogin = facebookLogin;
	exports.signup = signup;
	exports.logout = logout;
	exports.fetchUserProfile = fetchUserProfile;
	exports.fetchUserRoutes = fetchUserRoutes;
	exports.addNewRouteToUser = addNewRouteToUser;
	exports.uploadProfilePicture = uploadProfilePicture;
	exports.bootstrapUser = bootstrapUser;
	
	var _actionTypes = __webpack_require__(17);
	
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
	};
	
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
	
	function signup(mail, password) {
	    return {
	        types: [types.SIGNUP, types.SIGNUP_SUCCESS, types.SIGNUP_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.post('/users', {
	                mail: mail,
	                password: password
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
	
	function fetchUserRoutes(userId) {
	    if (!userId) {
	        throw new Error('User id must be included');
	    }
	
	    return {
	        types: [types.FETCH_USER_ROUTES, types.FETCH_USER_ROUTES_SUCCESS, types.FETCH_USER_ROUTES_FAIL],
	        promise: function promise(_ref5) {
	            var req = _ref5.req;
	            return req.get('/routes/users/' + userId);
	        }
	    };
	}
	
	function addNewRouteToUser(route) {
	
	    return {
	        type: types.USER_ROUTE_ADD,
	        meta: { route: route }
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
	
	var _actionTypes = __webpack_require__(17);
	
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
	
	var _actionTypes = __webpack_require__(17);
	
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
	exports.fetchDistanceMatrix = fetchDistanceMatrix;
	exports.fetchSpicesForVertice = fetchSpicesForVertice;
	exports.bootstrapRoute = bootstrapRoute;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _pollSpices = __webpack_require__(22);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function upvoteRoute(routeId) {
	    return {
	        types: [types.UPVOTE_ROUTE, types.UPVOTE_ROUTE_SUCCESS, types.UPVOTE_ROUTE_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.post('/routes/' + routeId + '/upvote');
	        }
	    };
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
	
	function fetchDistanceMatrix(routeId) {
	    return {
	        types: [types.FETCH_DIRECTIONS_MATRIX, types.FETCH_DIRECTIONS_MATRIX_SUCCESS, types.FETCH_DIRECTIONS_MATRIX_FAIL],
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.get('/routes/' + routeId + '/directionsMatrix');
	        }
	    };
	}
	
	// copied from createRoute
	function fetchSpicesForVertice(venueId, sortorder) {
	    return {
	        types: [types.ROUTE_DETAIL_VERTICE_SPICES_FETCH, types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS, types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_FAIL],
	
	        promise: function promise(_ref4) {
	            var req = _ref4.req;
	            return (0, _pollSpices.pollSpices)(req, null, venueId, sortorder, 1);
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
	exports.fetch = fetch;
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function fetch(params) {
	    return {
	        types: [actions.INSPIRATION_FETCH, actions.INSPIRATION_FETCH_SUCCESS, actions.INSPIRATION_FETCH_FAIL],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get('/venues/venueTips', { params: params });
	        },
	        meta: params
	    };
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getConversation = getConversation;
	exports.createConversation = createConversation;
	exports.postMessage = postMessage;
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function getConversation() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var url = '/conversations';
	    return {
	        types: [actions.FETCH_CONVERSATION, actions.FETCH_CONVERSATION_SUCCESS, actions.FETCH_CONVERSATION_ERROR],
	        promise: function promise(_ref) {
	            var req = _ref.req;
	            return req.get(url, data);
	        },
	        meta: data
	    };
	}
	
	function createConversation(data) {
	    var url = '/conversations';
	    return {
	        types: [actions.FETCH_CONVERSATION, actions.FETCH_CONVERSATION_SUCCESS, actions.FETCH_CONVERSATION_ERROR],
	        promise: function promise(_ref2) {
	            var req = _ref2.req;
	            return req.post(url, data);
	        },
	        meta: data
	    };
	}
	
	function postMessage(data) {
	    var url = '/messages/' + data.conversationId + '/messages';
	    // localhost:8000/api/v1/messages/599/messages
	    console.log(url, data, 'sao da');
	    return {
	        types: [actions.POST_MESSAGE, actions.POST_MESSAGE_SUCCESS, actions.POST_MESSAGE_ERROR],
	
	        promise: function promise(_ref3) {
	            var req = _ref3.req;
	            return req.put(url, data);
	        },
	        meta: data
	    };
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.conversationReducer = exports.inspiration = exports.routeDetail = exports.userReducer = exports.selectedBucketReducer = exports.routesReducer = exports.flashMessagesReducer = exports.createVerticeReducer = exports.createRouteReducer = exports.appReducer = undefined;
	
	var _appReducer2 = __webpack_require__(33);
	
	var _appReducer3 = _interopRequireDefault(_appReducer2);
	
	var _createRouteReducer2 = __webpack_require__(34);
	
	var _createRouteReducer3 = _interopRequireDefault(_createRouteReducer2);
	
	var _createVerticeReducer2 = __webpack_require__(36);
	
	var _createVerticeReducer3 = _interopRequireDefault(_createVerticeReducer2);
	
	var _flashMessagesReducer2 = __webpack_require__(37);
	
	var _flashMessagesReducer3 = _interopRequireDefault(_flashMessagesReducer2);
	
	var _routesReducer2 = __webpack_require__(38);
	
	var _routesReducer3 = _interopRequireDefault(_routesReducer2);
	
	var _selectedBucketReducer2 = __webpack_require__(40);
	
	var _selectedBucketReducer3 = _interopRequireDefault(_selectedBucketReducer2);
	
	var _userReducer2 = __webpack_require__(41);
	
	var _userReducer3 = _interopRequireDefault(_userReducer2);
	
	var _routeDetailReducer = __webpack_require__(35);
	
	var _routeDetailReducer2 = _interopRequireDefault(_routeDetailReducer);
	
	var _inspirationReducer = __webpack_require__(84);
	
	var _inspirationReducer2 = _interopRequireDefault(_inspirationReducer);
	
	var _conversationReducer2 = __webpack_require__(85);
	
	var _conversationReducer3 = _interopRequireDefault(_conversationReducer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.appReducer = _appReducer3.default;
	exports.createRouteReducer = _createRouteReducer3.default;
	exports.createVerticeReducer = _createVerticeReducer3.default;
	exports.flashMessagesReducer = _flashMessagesReducer3.default;
	exports.routesReducer = _routesReducer3.default;
	exports.selectedBucketReducer = _selectedBucketReducer3.default;
	exports.userReducer = _userReducer3.default;
	exports.routeDetail = _routeDetailReducer2.default;
	exports.inspiration = _inspirationReducer2.default;
	exports.conversationReducer = _conversationReducer3.default;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _routeDetailReducer = __webpack_require__(35);
	
	var _routeDetailReducer2 = _interopRequireDefault(_routeDetailReducer);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	    pendingDoneActions: (0, _immutable.List)()
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
	
	            return state.set('route', _Route2.default.mapper(action.payload)).set('isFetching', false).set('error', false);
	
	        case types.CREATE_ROUTE_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        case types.ROUTE_CREATE_INIT:
	            return state.set('route', new _Route2.default(action.route));
	
	        case types.CREATE_ROUTE_SET_TITLE:
	            return state.setIn(['route', 'title'], action.text);
	
	        case types.CREATE_ROUTE_SET_ERRORS:
	            return state.set('errors', action.errors);
	
	        case types.CREATE_ROUTE_TOGGLE_BUCKET:
	
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
	
	        case types.CREATE_ROUTE_VERTICE_SPICES_FETCH_SUCCESS:
	            return _Route2.default.updateVertice(state, _extends({}, action.payload));
	
	        case types.ADD_VERTICE_TO_ROUTE:
	            var vert = action.meta;
	
	            var newState = state.updateIn(['route', 'vertices'], function (v) {
	                return v.push(vert);
	            }).set('pendingDoneActions', state.get('pendingDoneActions').push(types.ADD_VERTICE_TO_ROUTE));
	
	            if (vert.get('city') && vert.getIn(['city', 'long_name'])) {
	                return newState.setIn(['route', 'city'], vert.getIn(['city', 'long_name']).toLowerCase());
	            } else {
	                return newState;
	            }
	
	        case types.ADD_VERTICE_TO_ROUTE_SUCCESS:
	
	            // ATM we dont care about these
	            // action.payload.venue.venueSocial
	            var vertData = Object.assign({}, action.payload);
	            return _Route2.default.updateVertice(state, vertData).set('pendingDoneActions', state.get('pendingDoneActions').pop());
	
	        case types.CREATE_ROUTE_VERTICE_DELETE:
	
	            // ATM we dont care about these
	            // action.payload.venue.venueSocial
	            // return Route.updateVertice(state, vertData);
	            var index = state.getIn(['route', 'vertices']).findIndex(function (v) {
	                return v.get('id') === action.meta.id;
	            });
	
	            // delete vertice
	            var verts = state.getIn(['route', 'vertices']).delete(index);
	
	            return state.setIn(['route', 'vertices'], verts);
	
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
	
	            return state.set('route', route.set('vertices', (0, _immutable.List)(relocatedVertices)));
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    isFetching: false,
	    route: null,
	    directionsMatrix: (0, _immutable.Map)(),
	    error: null
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
	    };
	
	    switch (action.type) {
	        case types.ROUTE_DETAIL_FETCH:
	            return state.set('isFetching', true);
	
	        case types.ROUTE_DETAIL_FETCH_SUCCESS:
	
	            return initialState.set('route', _Route2.default.mapper(action.payload)).set('isFetching', false).set('error', false);
	
	        case types.ROUTE_DETAIL_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        // TODO: HANDLE UPVOTES RESULT
	        case types.UPVOTE_ROUTE_SUCCESS:
	            return state.setIn(['route', 'likes'], action.payload._embedded.likes);
	
	        case types.UPVOTE_ROUTE_FAIL:
	            return state;
	
	        case types.FETCH_DIRECTIONS_MATRIX:
	            return state.set('directionsMatrix', (0, _immutable.fromJS)({
	                fetchingDirections: true
	            }));
	
	        case types.FETCH_DIRECTIONS_MATRIX_SUCCESS:
	            return state.set('directionsMatrix', (0, _immutable.fromJS)({
	                fetchingDirections: false,
	                directionsResult: action.payload
	            }));
	        case types.FETCH_DIRECTIONS_MATRIX_FAIL:
	            return state.set('directionsMatrix', (0, _immutable.fromJS)({
	                fetchingDirections: false,
	                fetchingDirectionsFailed: true
	            }));
	
	        case types.ROUTE_DETAIL_VERTICE_SPICES_FETCH_SUCCESS:
	            return _Route2.default.updateVertice(state, _extends({}, action.payload));
	
	        case types.ROUTE_DETAIL_BOOTSTRAP:
	            return state.set('route', action.route);
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Vertice = __webpack_require__(9);
	
	var _Vertice2 = _interopRequireDefault(_Vertice);
	
	var _Venue = __webpack_require__(10);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _routesListFixture = __webpack_require__(39);
	
	var _routesListFixture2 = _interopRequireDefault(_routesListFixture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialRoutesState = (0, _immutable.Map)({
	    isFetching: false,
	    didInvalidate: false,
	    items: [],
	    // items: routesListFixture.map(Route.mapper), //<-- for debugging
	
	    // only concerns one route. TODO move into a single route
	    directionsMatrix: null,
	    error: null
	});
	
	function routes() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialRoutesState : arguments[0];
	    var action = arguments[1];
	
	    switch (action.type) {
	
	        case actions.INVALIDATE_BUCKET:
	            return state.set('didInvalidate', true);
	
	        case actions.REQUEST_ROUTES:
	            return state.merge({
	                isFetching: true,
	                didInvalidate: false
	            });
	
	        case actions.RECEIVE_ROUTES:
	
	            return state.merge({
	                isFetching: false,
	                didInvalidate: false,
	                items: action.payload._embedded.routes.map(_Route2.default.mapper),
	                lastUpdated: new Date()
	            });
	
	        case actions.RECEIVE_ROUTES_FAILED:
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
	
	var initialState = (0, _immutable.Map)({
	    directionsMatrix: {}
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState.merge((0, _immutable.fromJS)(state));
	    }
	
	    switch (action.type) {
	        case actions.INVALIDATE_BUCKET:
	        case actions.RECEIVE_ROUTES:
	        case actions.REQUEST_ROUTES:
	        case actions.RECEIVE_ROUTES_FAILED:
	            return state.merge(_defineProperty({}, action.meta.bucketName, routes(state.get(action.meta.bucket), action)));
	
	        // case actions.FETCH_DIRECTIONS_MATRIX:
	        //     return state.set('directionsMatrix', {
	        //         fetchingDirections: true
	        //     });
	        //
	        // case actions.FETCH_DIRECTIONS_MATRIX_SUCCESS:
	        //     return state.set('directionsMatrix', {
	        //         fetchingDirections: false,
	        //         directionsResult: action.payload
	        //     });
	        // case actions.FETCH_DIRECTIONS_MATRIX_FAILURE:
	        //     return state.set('directionsMatrix', {
	        //         fetchingDirections: false,
	        //         fetchingDirectionsFailed: true
	        //     });
	
	        // when data comes from the server, we need to make it
	        // an immutable object
	        // TODO dont do it this way!!
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	// const routes = [
	//     {
	//         _links: {
	//             self: {
	//                 href: "/api/v1/routes/711"
	//             },
	//             bannerImg: {
	//                 href: "/api/v1/routes/711/bannerImg"
	//             },
	//             vertices: {
	//                 href: "/api/v1/routes/711/vertices"
	//             },
	//             finito: {
	//                 href: "/api/v1/routes/711/finito"
	//             },
	//             buckets: {
	//                 href: "/api/v1/routes/711/buckets"
	//             }
	//         },
	//         _embedded: {
	//             vertices: [
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1340"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1340"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1340/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJqzuhpWNuQUYRe9HdccH7LC0",
	//                         id: 931,
	//                         title: "Halloween Party at The Villa "
	//                     },
	//                     photos: [
	//                         "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/11205806_880591971979379_1744282565_n.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10467772_477430779072405_581895459_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Big Halloween party! Lee jones, Johanne Barman, Nadda Noor and Bonjour Tristesse is the DJ's! Highly rated electronica club with underground music: house, techno, dubstep, drum'n'bass, electro and other innovative genres. The Villa has two dance floors that fill up every weekend to Norwegian and international DJs, live acts and artists. is the DJ's! Highly rated electronica club with underground music: house, techno, dubstep, drum'n'bass, electro and other innovative genres. The Villa has two dance floors that fill up every weekend to Norwegian and international DJs, live acts and artists is the DJ's! Highly rated electronica club with underground music: house, techno, dubstep, drum'n'bass, electro and other innovative genres. The Villa has two dance floors that fill up every weekend to Norwegian and international DJs, live acts and artists",
	//                     id: 1340,
	//                     price: 0,
	//                     sortorder: 5,
	//                     title: "Halloween Party at The Villa ",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1339"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1339"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1339/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJr1DOn2VuQUYR1YilvP0Rs1k",
	//                         id: 412,
	//                         title: "Halloween Party at Vulkan Arena"
	//                     },
	//                     photos: [
	//                         "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10009163_1495691250652892_1944981598_n.jpg",
	//                         "https://irs1.4sqi.net/img/general/306x306/41601675_dpkn0bVt8BUF8a9kEYtnQGK7OIyKgRvEfdibGzHOuMQ.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11374267_915240921890095_70767410_n.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11909427_106612483027468_1937549910_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Halloween party at Vulkan arena. Club consept from The Void, and they promise a big party with lightshows and great music",
	//                     id: 1339,
	//                     price: 0,
	//                     sortorder: 4,
	//                     title: "Halloween Party at Vulkan Arena",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1338"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1338"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1338/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJSV_JYWluQUYRRz6qWzF-n84",
	//                         id: 934,
	//                         title: "Horror Movie at Ringen Kino"
	//                     },
	//                     photos: [
	//                         "https://irs0.4sqi.net/img/general/306x306/765161_nXTb4tMFwj9_GluEoah5cqGm3Z3BYgNlyE3YOjykHDQ.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Horror party at Ringen cinema and showing of the horror movie The Babadook. Spooky atmosphere and great awards for the best Halloween outfit. Starts 19.00 https://www.facebook.com/events/1691998587700089",
	//                     id: 1338,
	//                     price: 0,
	//                     sortorder: 3,
	//                     title: "Horror Movie at Ringen Kino",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1336"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1336"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1336/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJqf1ayVtuQUYRabLmIkrZuSg",
	//                         id: 932,
	//                         title: "Halloween at Munchmuseet"
	//                     },
	//                     photos: [
	//                         "https://irs0.4sqi.net/img/general/306x306/8407084_IUJK5Y9gSXJSi5KbFQIDVzvdhAjpocE27MBvX_DJFP0.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Why not combine art and horror? The museum is arranging a workshop where you can make your own masks and Halloween pumpkins. Horror stories are told for kids at 16 and 18 for adults. It's also going to be a tour through hell(!) from 12-15 or 20. You can also see the horror classic Scream from 19! From 10-22.00 ",
	//                     id: 1336,
	//                     price: 0,
	//                     sortorder: 1,
	//                     title: "Halloween at Munchmuseet",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1337"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1337"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1337/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJn6fpqsRtQUYR5jvE2cYyzMo",
	//                         id: 933,
	//                         title: "Ghost House at Chateau Neuf"
	//                     },
	//                     photos: [
	//                         "https://routes-photos.s3.amazonaws.com/1337-vertice-39ed26d0-7e68-11e5-b106-25baac71e5c6.jpg",
	//                         "https://routes-photos.s3.amazonaws.com/1337-vertice-081d88c0-7e68-11e5-9146-47fda5192b34.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/12070834_523511647816393_162104234_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Chateau Neuf is being transformed to a big ghost house! A terrifying walk through attraction filled with repulsive monsters, special effects and live actors. Their goal is to scare you! After 18.00 they are turning up the heat, and it’s going to be a lot more spooky after that! From 14-23.00",
	//                     id: 1337,
	//                     price: 0,
	//                     sortorder: 2,
	//                     title: "Ghost House at Chateau Neuf",
	//                     type: null
	//                 }
	//             ]
	//         },
	//         description: "Saturday (31.10) filled with great Halloween stuff to do! Spooky and fun! Saturday (31.10) filled with great Halloween stuff to do! Spooky and fun! Saturday (31.10) filled with great Halloween stuff to do! Spooky and fun! Saturday (31.10) filled with great Halloween stuff to do! Spooky and fun!",
	//         id: 711,
	//         title: "Halloween Weekend ",
	//         bannerImage: null,
	//         placeName: null,
	//         views: 0,
	//         photos: [ ],
	//         user: {
	//             id: 82,
	//             image: "https://routes-photos.s3.amazonaws.com/82-user-4630a960-3c07-11e5-b7e5-11fb88eb9bd4.jpg",
	//             username: "Routyfruity",
	//             description: "Hello."
	//         }
	//     },
	//     {
	//         _links: {
	//             self: {
	//                 href: "/api/v1/routes/711"
	//             },
	//             bannerImg: {
	//                 href: "/api/v1/routes/711/bannerImg"
	//             },
	//             vertices: {
	//                 href: "/api/v1/routes/711/vertices"
	//             },
	//             finito: {
	//                 href: "/api/v1/routes/711/finito"
	//             },
	//             buckets: {
	//                 href: "/api/v1/routes/711/buckets"
	//             }
	//         },
	//         buckets: ['sap', 'dap', 'fap'],
	//         _embedded: {
	//             buckets: ['sap', 'dap', 'fap'],
	//             vertices: [
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1340"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1340"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1340/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJqzuhpWNuQUYRe9HdccH7LC0",
	//                         id: 931,
	//                         title: "Halloween Party at The Villa "
	//                     },
	//                     photos: [
	//                         "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/11205806_880591971979379_1744282565_n.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e15/10467772_477430779072405_581895459_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Big Halloween party! Lee jones, Johanne Barman, Nadda Noor and Bonjour Tristesse is the DJ's! Highly rated electronica club with underground music: house, techno, dubstep, drum'n'bass, electro and other innovative genres. The Villa has two dance floors that fill up every weekend to Norwegian and international DJs, live acts and artists.",
	//                     id: 1340,
	//                     price: 0,
	//                     sortorder: 5,
	//                     title: "Halloween Party at The Villa ",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1339"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1339"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1339/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJr1DOn2VuQUYR1YilvP0Rs1k",
	//                         id: 412,
	//                         title: "Halloween Party at Vulkan Arena"
	//                     },
	//                     photos: [
	//                         "https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e15/10009163_1495691250652892_1944981598_n.jpg",
	//                         "https://irs1.4sqi.net/img/general/306x306/41601675_dpkn0bVt8BUF8a9kEYtnQGK7OIyKgRvEfdibGzHOuMQ.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11374267_915240921890095_70767410_n.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11909427_106612483027468_1937549910_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Halloween party at Vulkan arena. Club consept from The Void, and they promise a big party with lightshows and great music",
	//                     id: 1339,
	//                     price: 0,
	//                     sortorder: 4,
	//                     title: "Halloween Party at Vulkan Arena",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1338"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1338"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1338/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJSV_JYWluQUYRRz6qWzF-n84",
	//                         id: 934,
	//                         title: "Horror Movie at Ringen Kino"
	//                     },
	//                     photos: [
	//                         "https://irs0.4sqi.net/img/general/306x306/765161_nXTb4tMFwj9_GluEoah5cqGm3Z3BYgNlyE3YOjykHDQ.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Horror party at Ringen cinema and showing of the horror movie The Babadook. Spooky atmosphere and great awards for the best Halloween outfit. Starts 19.00 https://www.facebook.com/events/1691998587700089",
	//                     id: 1338,
	//                     price: 0,
	//                     sortorder: 3,
	//                     title: "Horror Movie at Ringen Kino",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1336"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1336/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJqf1ayVtuQUYRabLmIkrZuSg",
	//                         id: 932,
	//                         title: "Halloween at Munchmuseet"
	//                     },
	//                     photos: [
	//                         "https://irs0.4sqi.net/img/general/306x306/8407084_IUJK5Y9gSXJSi5KbFQIDVzvdhAjpocE27MBvX_DJFP0.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Why not combine art and horror? The museum is arranging a workshop where you can make your own masks and Halloween pumpkins. Horror stories are told for kids at 16 and 18 for adults. It's also going to be a tour through hell(!) from 12-15 or 20. You can also see the horror classic Scream from 19! From 10-22.00 ",
	//                     id: 1336,
	//                     price: 0,
	//                     sortorder: 1,
	//                     title: "Halloween at Munchmuseet",
	//                     type: null
	//                 },
	//                 {
	//                     _links: {
	//                         self: {
	//                             href: "/api/v1/routes/711/vertices/1337"
	//                         },
	//                         update: {
	//                             href: "/api/v1/routes/711/vertices/1337"
	//                         },
	//                         events: {
	//                             href: "/api/v1/routes/711/vertices/1337/venueEvents"
	//                         }
	//                     },
	//                     venue: {
	//                         googleId: "ChIJn6fpqsRtQUYR5jvE2cYyzMo",
	//                         id: 933,
	//                         title: "Ghost House at Chateau Neuf"
	//                     },
	//                     photos: [
	//                         "https://routes-photos.s3.amazonaws.com/1337-vertice-39ed26d0-7e68-11e5-b106-25baac71e5c6.jpg",
	//                         "https://routes-photos.s3.amazonaws.com/1337-vertice-081d88c0-7e68-11e5-9146-47fda5192b34.jpg",
	//                         "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/12070834_523511647816393_162104234_n.jpg"
	//                     ],
	//                     events: [ ],
	//                     color: null,
	//                     description: "Chateau Neuf is being transformed to a big ghost house! A terrifying walk through attraction filled with repulsive monsters, special effects and live actors. Their goal is to scare you! After 18.00 they are turning up the heat, and it’s going to be a lot more spooky after that! From 14-23.00",
	//                     id: 1337,
	//                     price: 0,
	//                     sortorder: 2,
	//                     title: "Ghost House at Chateau Neuf",
	//                     type: null
	//                 }
	//             ]
	//         },
	//         description: "Saturday (31.10) filled with great Halloween stuff to do! Spooky and fun!",
	//         id: 711,
	//         title: "Halloween Weekend ",
	//         bannerImage: null,
	//         placeName: null,
	//         views: 0,
	//         photos: [ ],
	//         user: {
	//             id: 82,
	//             image: "https://routes-photos.s3.amazonaws.com/82-user-4630a960-3c07-11e5-b7e5-11fb88eb9bd4.jpg",
	//             username: "Routyfruity",
	//             description: "Hello."
	//         }
	//     }
	// ];
	//
	// export default routes;
	"use strict";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
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
	
	        case actions.SELECTED_BUCKET_BOOTSTRAP:
	
	            return initialState.set('buckets', action.buckets).set('selected', (0, _immutable.Map)(action.buckets[0]));
	
	        case actions.SELECT_BUCKET_CHANGE:
	
	            return state.set('selected', action.bucket);
	
	        case actions.FETCH_CITY_BUCKETS:
	            return state.set('isFetching', true);
	
	        case actions.FETCH_CITY_BUCKETS_SUCCESS:
	
	            return state.set('buckets', action.payload._embedded && action.payload._embedded.bucket ? (0, _immutable.List)(action.payload._embedded.bucket.map(function (b) {
	                return (0, _immutable.fromJS)(b);
	            })) : (0, _immutable.List)()).set('isFetching', false).set('error', false);
	
	        case actions.FETCH_CITY_BUCKETS_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Route = __webpack_require__(6);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _immutable = __webpack_require__(7);
	
	var _reduxStorage = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var UserAuth = (0, _immutable.Record)({
	    loggingIn: false,
	    shouldRedirect: false,
	    user: null,
	    token: null,
	    authError: null,
	    signupError: null,
	
	    // users routes
	    // TODO: do a list here instead
	    routes: [],
	    fetchRoutesError: null,
	
	    // user profile
	    fethingUserProfile: false,
	    fetchUserProfileError: null,
	
	    // could have had a list here, one for each profile.
	    // but probabz not necessary.
	    userProfile: null
	});
	
	var initialState = new UserAuth();
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState.set('user', (0, _immutable.Map)(state.user));
	    };
	
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
	                authError: action.error ? action.error.errorMessage : action.payload.errorMessage
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
	            return state.set('signupError', action.error);
	
	        case types.LOGOUT:
	            return initialState;
	
	        // load from offline storage
	        case _reduxStorage.LOAD:
	            var user = action.payload.user;
	            if (user && user.routes) {
	                user.routes = user.routes.map(_Route2.default.mapper);
	            }
	
	            return state.merge(user);
	
	        case types.USER_TOKEN_STORE_AND_REDIRECT:
	            return state.set('shouldRedirect', false);
	
	        case types.FETCH_USER_ROUTES_SUCCESS:
	            if (!action.payload._embedded) {
	                return state;
	            }
	            return state.set('routes', action.payload._embedded.routes.map(_Route2.default.mapper));
	
	        case types.FETCH_USER_ROUTES_FAIL:
	            return state.set('fetchRoutesError', action.error);
	
	        case types.USER_ROUTE_ADD:
	            return state.update('routes', function (r) {
	                return [].concat(_toConsumableArray(r), [action.meta.route]);
	            });
	
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
	            return state.set('user', (0, _immutable.Map)(action.user));
	
	        case types.USER_UPLOAD_PROFILE_PICTURE_SUCCESS:
	            return state.setIn(['user', 'image'], action.payload.image);
	
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
	exports.SAVE = exports.LOAD = exports.reducer = exports.createMiddleware = exports.createLoader = exports.decorators = undefined;
	
	var _createLoader = __webpack_require__(43);
	
	Object.defineProperty(exports, 'createLoader', {
	    enumerable: true,
	    get: function get() {
	        return _createLoader['default'];
	    }
	});
	
	var _createMiddleware = __webpack_require__(58);
	
	Object.defineProperty(exports, 'createMiddleware', {
	    enumerable: true,
	    get: function get() {
	        return _createMiddleware['default'];
	    }
	});
	
	var _reducer = __webpack_require__(59);
	
	Object.defineProperty(exports, 'reducer', {
	    enumerable: true,
	    get: function get() {
	        return _reducer['default'];
	    }
	});
	
	var _constants = __webpack_require__(57);
	
	Object.defineProperty(exports, 'LOAD', {
	    enumerable: true,
	    get: function get() {
	        return _constants.LOAD;
	    }
	});
	Object.defineProperty(exports, 'SAVE', {
	    enumerable: true,
	    get: function get() {
	        return _constants.SAVE;
	    }
	});
	
	var _decorators2 = __webpack_require__(78);
	
	var _decorators = _interopRequireWildcard(_decorators2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	exports.decorators = _decorators;
	
	// The full default export is required to be BC with redux-storage <= v1.3.2
	exports.default = _extends({}, __webpack_require__(57), {
	    createLoader: __webpack_require__(43)['default'],
	    createMiddleware: __webpack_require__(58)['default'],
	    decorators: __webpack_require__(78),
	    reducer: __webpack_require__(59)['default']
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(44);
	
	exports.default = function (engine) {
	    return function (store) {
	        var dispatchLoad = function dispatchLoad(state) {
	            return store.dispatch((0, _actions.load)(state));
	        };
	        return engine.load().then(function (newState) {
	            dispatchLoad(newState);
	            return newState;
	        });
	    };
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.save = exports.load = undefined;
	
	var _reduxActions = __webpack_require__(45);
	
	var _constants = __webpack_require__(57);
	
	var constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var load = exports.load = (0, _reduxActions.createAction)(constants.LOAD);
	var save = exports.save = (0, _reduxActions.createAction)(constants.SAVE);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createAction = __webpack_require__(46);
	
	var _createAction2 = _interopRequireDefault(_createAction);
	
	var _handleAction = __webpack_require__(47);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _handleActions = __webpack_require__(54);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}
	
	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;
	
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };
	
	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }
	
	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }
	
	    return action;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = handleAction;
	
	var _fluxStandardAction = __webpack_require__(48);
	
	function isFunction(val) {
	  return typeof val === 'function';
	}
	
	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;
	
	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';
	
	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }
	
	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];
	
	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashIsplainobject = __webpack_require__(49);
	
	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);
	
	var validKeys = ['type', 'payload', 'error', 'meta'];
	
	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}
	
	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}
	
	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(50),
	    isArguments = __webpack_require__(51),
	    keysIn = __webpack_require__(52);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
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
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = baseFor;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.0.5 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	
	/**
	 * Checks if `value` is likely an `arguments` object.
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
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
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
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(51),
	    isArray = __webpack_require__(53);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
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
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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
/* 53 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
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
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
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
	
	module.exports = isArray;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = handleActions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _handleAction = __webpack_require__(47);
	
	var _handleAction2 = _interopRequireDefault(_handleAction);
	
	var _ownKeys = __webpack_require__(55);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _reduceReducers = __webpack_require__(56);
	
	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);
	
	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });
	
	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}
	
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = ownKeys;
	
	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }
	
	  var keys = Object.getOwnPropertyNames(object);
	
	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }
	
	  return keys;
	}
	
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reduceReducers;
	
	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }
	
	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LOAD = exports.LOAD = 'REDUX_STORAGE_LOAD';
	var SAVE = exports.SAVE = 'REDUX_STORAGE_SAVE';

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actions = __webpack_require__(44);
	
	var _constants = __webpack_require__(57);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function swallow() {}
	
	function warnAboutConfusingFiltering(blacklist, whitelist) {
	    blacklist.filter(function (item) {
	        return whitelist.indexOf(item) !== -1;
	    }).forEach(function (item) {
	        console.warn( // eslint-disable-line no-console
	        '[redux-storage] Action ' + item + ' is on BOTH black- and whitelist.' + ' This is most likely a mistake!');
	    });
	}
	
	exports.default = function (engine) {
	    var actionBlacklist = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    var actionWhitelist = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	    // Also don't save if we process our own actions
	    var blacklistedActions = [].concat(_toConsumableArray(actionBlacklist), [_constants.LOAD, _constants.SAVE]);
	
	    if (process.env.NODE_ENV !== 'production') {
	        warnAboutConfusingFiltering(actionBlacklist, actionWhitelist);
	    }
	
	    return function (_ref) {
	        var dispatch = _ref.dispatch;
	        var getState = _ref.getState;
	
	        return function (next) {
	            return function (action) {
	                var result = next(action);
	
	                var isOnBlacklist = blacklistedActions.indexOf(action.type) !== -1;
	                var isOnWhitelist = actionWhitelist.length === 0 ? true // Don't filter if the whitelist is empty
	                : actionWhitelist.indexOf(action.type) !== -1;
	
	                // Skip blacklisted actions
	                if (!isOnBlacklist && isOnWhitelist) {
	                    (function () {
	                        var saveState = getState();
	                        var dispatchSave = function dispatchSave() {
	                            return dispatch((0, _actions.save)(saveState));
	                        };
	                        engine.save(saveState).then(dispatchSave)['catch'](swallow);
	                    })();
	                }
	
	                return result;
	            };
	        };
	    };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(60);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _lodash3 = __webpack_require__(61);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	var _lodash5 = __webpack_require__(53);
	
	var _lodash6 = _interopRequireDefault(_lodash5);
	
	var _lodash7 = __webpack_require__(62);
	
	var _lodash8 = _interopRequireDefault(_lodash7);
	
	var _immutable = __webpack_require__(7);
	
	var _constants = __webpack_require__(57);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function myMerge(oldState, newState) {
	    // Whole state is ImmutableJS? Easiest way to merge
	    if ((0, _lodash2.default)(oldState.mergeDeep)) {
	        return oldState.mergeDeep(newState);
	    }
	
	    // newState is ImmutableJS? We can safely use fromJS and merge
	    if ((0, _lodash2.default)(newState.mergeDeep)) {
	        return (0, _immutable.fromJS)(oldState).mergeDeep(newState);
	    }
	
	    // Otherwise we need to carefully merge to avoid deprecated warnings from
	    // ImmutableJS see #8. We inspect only the first object level, as this is
	    // a common pattern with redux!
	    var result = _extends({}, oldState);
	    // Note: Iterate using OLD STYLE and avoid Symbols for old browsers
	    for (var key in newState) {
	        if (!newState.hasOwnProperty(key)) {
	            continue;
	        }
	        var value = newState[key];
	
	        // Assign if we don't need to merge at all
	        if (!result.hasOwnProperty(key)) {
	            result[key] = (0, _lodash4.default)(value) && !(0, _lodash6.default)(value) ? (0, _lodash8.default)({}, value) : value;
	            continue;
	        }
	
	        var oldValue = result[key];
	
	        if (!!oldValue && (0, _lodash2.default)(oldValue.mergeDeep)) {
	            result[key] = oldValue.mergeDeep(value);
	        } else if (!!value && (0, _lodash2.default)(value.mergeDeep)) {
	            result[key] = (0, _immutable.fromJS)(oldValue).mergeDeep(value);
	        } else if ((0, _lodash4.default)(value) && !(0, _lodash6.default)(value)) {
	            result[key] = (0, _lodash8.default)({}, oldValue, value);
	        } else {
	            result[key] = value;
	        }
	    }
	
	    return result;
	}
	
	exports.default = function (reducer) {
	    return function (state, action) {
	        return reducer(action.type === _constants.LOAD ? myMerge(state, action.payload) : state, action);
	    };
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
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
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isFunction;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayCopy = __webpack_require__(63),
	    arrayEach = __webpack_require__(64),
	    createAssigner = __webpack_require__(65),
	    isArguments = __webpack_require__(69),
	    isArray = __webpack_require__(53),
	    isPlainObject = __webpack_require__(70),
	    isTypedArray = __webpack_require__(73),
	    keys = __webpack_require__(74),
	    toPlainObject = __webpack_require__(76);
	
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
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);
	
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;
	
	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];
	
	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;
	
	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);
	
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}
	
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
	
	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it is invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);
	
	module.exports = merge;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(66),
	    isIterateeCall = __webpack_require__(67),
	    restParam = __webpack_require__(68);
	
	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
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
	
	module.exports = bindCallback;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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
	
	module.exports = isIterateeCall;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.0.5 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	
	/**
	 * Checks if `value` is likely an `arguments` object.
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
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
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
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(71),
	    isArguments = __webpack_require__(69),
	    keysIn = __webpack_require__(72);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
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
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = baseFor;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(69),
	    isArray = __webpack_require__(53);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
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
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
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
/* 73 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	/** Used for built-in method references. */
	var objectProto = global.Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
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
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = isTypedArray;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(75),
	    isArguments = __webpack_require__(69),
	    isArray = __webpack_require__(53);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
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
	
	module.exports = keys;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
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
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
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
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
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
	
	module.exports = getNative;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(77),
	    keysIn = __webpack_require__(72);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debounce = __webpack_require__(79);
	
	Object.defineProperty(exports, 'debounce', {
	  enumerable: true,
	  get: function get() {
	    return _debounce['default'];
	  }
	});
	
	var _filter = __webpack_require__(80);
	
	Object.defineProperty(exports, 'filter', {
	  enumerable: true,
	  get: function get() {
	    return _filter['default'];
	  }
	});
	
	var _immutablejs = __webpack_require__(83);
	
	Object.defineProperty(exports, 'immutablejs', {
	  enumerable: true,
	  get: function get() {
	    return _immutablejs['default'];
	  }
	});

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (engine, ms) {
	    var lastTimeout = undefined;
	    var lastReject = undefined;
	
	    return {
	        load: function load() {
	            return engine.load();
	        },
	        save: function save(state) {
	            clearTimeout(lastTimeout);
	            if (lastReject) {
	                lastReject();
	                lastReject = null;
	            }
	
	            return new Promise(function (resolve, reject) {
	                lastReject = reject;
	                lastTimeout = setTimeout(function () {
	                    lastReject = null;
	                    engine.save(state).then(resolve)["catch"](reject);
	                }, ms);
	            });
	        }
	    };
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lodash = __webpack_require__(81);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _lodash3 = __webpack_require__(60);
	
	var _lodash4 = _interopRequireDefault(_lodash3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.default = function (engine) {
	    var whitelist = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    return {
	        load: function load() {
	            return engine.load();
	        },
	        save: function save(state) {
	            var saveState = {};
	
	            whitelist.forEach(function (key) {
	                var value = state;
	
	                // Support strings for one-level paths
	                if (typeof key === 'string') {
	                    key = [key]; // eslint-disable-line no-param-reassign
	                }
	
	                key.forEach(function (keyPart) {
	                    // Support immutable structures
	                    if ((0, _lodash4.default)(value.has) && (0, _lodash4.default)(value.get)) {
	                        if (!value.has(keyPart)) {
	                            // No value stored
	                            return;
	                        }
	
	                        value = value.get(keyPart);
	                    } else if (value.hasOwnProperty(keyPart)) {
	                        value = value[keyPart];
	                    } else {
	                        // No value stored
	                        return;
	                    }
	
	                    (0, _lodash2.default)(saveState, key, value);
	                });
	            });
	
	            return engine.save(saveState);
	        }
	    };
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.7.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var toPath = __webpack_require__(82),
	    isArray = __webpack_require__(53);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
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
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
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
	
	/**
	 * Sets the property value of `path` on `object`. If a portion of `path`
	 * does not exist it is created.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to augment.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, 'x[0].y.z', 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  if (object == null) {
	    return object;
	  }
	  var pathKey = (path + '');
	  path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = path[index];
	    if (isObject(nested)) {
	      if (index == lastIndex) {
	        nested[key] = value;
	      } else if (nested[key] == null) {
	        nested[key] = isIndex(path[index + 1]) ? [] : {};
	      }
	    }
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = set;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.8.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArray = __webpack_require__(53);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(7);
	
	exports.default = function (engine) {
	    var whitelist = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    return {
	        load: function load() {
	            return engine.load().then(function (result) {
	                whitelist.forEach(function (key) {
	                    result[key] = (0, _immutable.fromJS)(result[key]);
	                });
	                return result;
	            });
	        },
	        save: function save(state) {
	            return engine.save(state);
	        }
	    };
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var actions = _interopRequireWildcard(_actionTypes);
	
	var _immutable = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    foursquare: (0, _immutable.List)(),
	    yelp: (0, _immutable.List)(),
	    isFetching: false,
	    error: null
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    if (!_immutable.Iterable.isIterable(state)) {
	        state = initialState;
	    };
	
	    switch (action.type) {
	        case actions.INSPIRATION_FETCH:
	            return state.set('isFetching', true);
	
	        case actions.INSPIRATION_FETCH_SUCCESS:
	
	            return state.set('foursquare', (0, _immutable.List)(action.payload.foursquare.map(function (item) {
	                return (0, _immutable.fromJS)(item);
	            }))).set('yelp', (0, _immutable.List)(action.payload.yelp.map(function (item) {
	                return (0, _immutable.fromJS)(item);
	            }))).set('isFetching', false).set('error', false);
	
	        case actions.INSPIRATION_FETCH_FAIL:
	
	            return state.set('isFetching', false).set('error', action.error);
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = reducer;
	
	var _actionTypes = __webpack_require__(17);
	
	var types = _interopRequireWildcard(_actionTypes);
	
	var _Conversation = __webpack_require__(13);
	
	var _Conversation2 = _interopRequireDefault(_Conversation);
	
	var _immutable = __webpack_require__(7);
	
	var _reduxStorage = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = (0, _immutable.Map)({
	    conversation: new _Conversation2.default(),
	    isFetching: false,
	    isError: false
	});
	
	function reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    switch (action.type) {
	
	        case types.FETCH_CONVERSATION:
	            return state.set('isFetching', true);
	
	        case types.FETCH_CONVERSATION_ERROR:
	            return state.merge({
	                isError: true,
	                isFetching: false
	            });
	
	        case _reduxStorage.LOAD:
	            if (!action.payload.conversation) return state;
	            return state.set('conversation', _Conversation2.default.mapper(action.payload.conversation.conversation));
	
	        case types.FETCH_CONVERSATION_SUCCESS:
	            return state.set('conversation', _Conversation2.default.mapper(action.payload));
	
	        case types.POST_MESSAGE_SUCCESS:
	            var messages = action.payload.messages;
	
	            var conversation = state.get('conversation');
	            return state.setIn(['conversation', 'messages'], conversation.addMessage(messages));
	
	        default:
	            return state;
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AnalyticsMiddleware = undefined;
	
	var _AnalyticsMiddleware2 = __webpack_require__(87);
	
	var _AnalyticsMiddleware3 = _interopRequireDefault(_AnalyticsMiddleware2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.AnalyticsMiddleware = _AnalyticsMiddleware3.default;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _actionTypes = __webpack_require__(17);
	
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ConversationService = exports.reorderService = exports.GooglePlacesAPIClient = undefined;
	
	var _GooglePlacesAPIClient2 = __webpack_require__(23);
	
	var _GooglePlacesAPIClient3 = _interopRequireDefault(_GooglePlacesAPIClient2);
	
	var _reorderService2 = __webpack_require__(21);
	
	var _reorderService3 = _interopRequireDefault(_reorderService2);
	
	var _ConversationService2 = __webpack_require__(89);
	
	var _ConversationService3 = _interopRequireDefault(_ConversationService2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.GooglePlacesAPIClient = _GooglePlacesAPIClient3.default;
	exports.reorderService = _reorderService3.default;
	exports.ConversationService = _ConversationService3.default;

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ConversationService = function () {
	    function ConversationService(track) {
	        _classCallCheck(this, ConversationService);
	
	        this.track = track;
	        this.intervalId = null;
	    }
	
	    _createClass(ConversationService, [{
	        key: 'onSend',
	        value: function onSend(_ref) {
	            var _ref$message = _ref.message;
	            var message = _ref$message === undefined ? {} : _ref$message;
	            var _ref$rowID = _ref.rowID;
	            var rowID = _ref$rowID === undefined ? null : _ref$rowID;
	            var conversation = _ref.conversation;
	            var postMessage = _ref.postMessage;
	
	            this.track('Sending message in conversation');
	            message = { message: message.text, fromId: conversation.get('userId'), conversationId: conversation.get('id'), userToken: conversation.get('userToken') };
	            postMessage(message);
	        }
	    }, {
	        key: 'onMount',
	        value: function onMount(conversation, getConversation) {
	            var intervalTime = arguments.length <= 2 || arguments[2] === undefined ? 60 * 500 : arguments[2];
	
	            this.track('Conversation is loaded');
	            conversation = { userToken: conversation.get('userToken'), conversationId: conversation.get('id') };
	            getConversation(conversation);
	
	            //pulling every {intervalTime} , remove when socket io is here.
	            this.intervalId = setInterval(function () {
	                getConversation(conversation);
	            }, intervalTime);
	        }
	    }, {
	        key: 'unMount',
	        value: function unMount() {
	            clearInterval(this.intervalId);
	        }
	    }]);
	
	    return ConversationService;
	}();
	
	exports.default = ConversationService;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.injectDependencies = undefined;
	
	var _injectDependencies2 = __webpack_require__(91);
	
	var _injectDependencies3 = _interopRequireDefault(_injectDependencies2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.injectDependencies = _injectDependencies3.default;

/***/ },
/* 91 */
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
	
	                var rest = _objectWithoutProperties(action, ['promise', 'types']); // eslint-disable-line no-redeclare
	
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