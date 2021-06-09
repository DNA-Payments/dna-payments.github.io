/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__.default)()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _get; }
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeFunction; }
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _superPropBase; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _wrapNativeSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__.default)(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__.default)(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.default)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@braintree/event-emitter/dist/event-emitter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@braintree/event-emitter/dist/event-emitter.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = {};
    }
    EventEmitter.prototype.on = function (event, callback) {
        if (this._events[event]) {
            this._events[event].push(callback);
        }
        else {
            this._events[event] = [callback];
        }
    };
    EventEmitter.prototype.off = function (event, callback) {
        var eventCallbacks = this._events[event];
        if (!eventCallbacks) {
            return;
        }
        var indexOfCallback = eventCallbacks.indexOf(callback);
        eventCallbacks.splice(indexOfCallback, 1);
    };
    EventEmitter.prototype._emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var eventCallbacks = this._events[event];
        if (!eventCallbacks) {
            return;
        }
        eventCallbacks.forEach(function (callback) {
            callback.apply(void 0, args);
        });
    };
    EventEmitter.prototype.hasListener = function (event) {
        var eventCallbacks = this._events[event];
        if (!eventCallbacks) {
            return false;
        }
        return eventCallbacks.length > 0;
    };
    EventEmitter.createChild = function (ChildObject) {
        ChildObject.prototype = Object.create(EventEmitter.prototype, {
            constructor: ChildObject,
        });
    };
    return EventEmitter;
}());
module.exports = EventEmitter;


/***/ }),

/***/ "./node_modules/@braintree/uuid/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@braintree/uuid/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;

    return v.toString(16);
  });
}

module.exports = uuid;


/***/ }),

/***/ "./src/code/classes/HostedFields.ts":
/*!******************************************!*\
  !*** ./src/code/classes/HostedFields.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostedFields": function() { return /* binding */ HostedFields; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var framebus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framebus */ "./node_modules/framebus/dist/index.js");
/* harmony import */ var framebus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framebus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _braintree_event_emitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @braintree/event-emitter */ "./node_modules/@braintree/event-emitter/dist/event-emitter.js");
/* harmony import */ var _braintree_event_emitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_braintree_event_emitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_injectFrame__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/injectFrame */ "./src/code/services/injectFrame.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/constants */ "./src/code/constants.ts");
/* harmony import */ var _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/DnaPaymentsError */ "./src/code/models/DnaPaymentsError.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/errors */ "./src/code/errors.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/services */ "./src/code/services/index.ts");
/* harmony import */ var _ThreeDSecure__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ThreeDSecure */ "./src/code/classes/ThreeDSecure.ts");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var HostedFields = /*#__PURE__*/function (_EventEmitter) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(HostedFields, _EventEmitter);

  var _super = _createSuper(HostedFields);

  function HostedFields(options) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, HostedFields);

    _this = _super.call(this);
    _this.options = options;
    _this._isInitialized = false;
    _this._instanceId = (0,uuid__WEBPACK_IMPORTED_MODULE_15__.default)();
    _this._state = null;
    _this._bus = new (framebus__WEBPACK_IMPORTED_MODULE_7___default())({
      channel: _this._instanceId,
      verifyDomain: function verifyDomain(domain) {
        return _constants__WEBPACK_IMPORTED_MODULE_10__.VERIFIED_DOMAINS.indexOf(domain) >= 0;
      }
    });
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(HostedFields, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var self = this;
      return new Promise(function (resolve, reject) {
        if (self._isInitialized) {
          resolve(self);
          return;
        }

        var fieldKeys = Object.keys(self.options.fields);

        try {
          (0,_services__WEBPACK_IMPORTED_MODULE_13__.checkFields)(fieldKeys);
          var frameReadyPromises = [];
          var frameReadyResolveFunctions = {};
          Object.entries(self.options.fields).forEach(function (_ref) {
            var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
                fieldType = _ref2[0],
                field = _ref2[1];

            var container = field.container;
            var iframe = (0,_services_injectFrame__WEBPACK_IMPORTED_MODULE_9__.injectFrame)("".concat(_constants__WEBPACK_IMPORTED_MODULE_10__.PREFIX_FIELD_NAME).concat(fieldType), container);
            iframe.src = "".concat(_constants__WEBPACK_IMPORTED_MODULE_10__.URLS.frameUrl, "#").concat(self._instanceId);
            frameReadyPromises.push(new Promise(function (res) {
              frameReadyResolveFunctions[fieldType] = res;
            }));
          });

          self._bus.on(_constants__WEBPACK_IMPORTED_MODULE_10__.events.FRAME_READY, function (data, reply) {
            if (data && data.field && (0,_services__WEBPACK_IMPORTED_MODULE_13__.isAllowedField)(data.field)) {
              frameReadyResolveFunctions[data.field](reply);
            }
          });

          self._attachBusEvents.bind(self)();

          var failureTimeout = setTimeout(function () {
            reject(new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_11__.DnaPaymentsError(_errors__WEBPACK_IMPORTED_MODULE_12__.default.HOSTED_FIELDS_TIMEOUT));
          }, _constants__WEBPACK_IMPORTED_MODULE_10__.INTEGRATION_TIMEOUT_MS);
          self.threeDSecure = new _ThreeDSecure__WEBPACK_IMPORTED_MODULE_14__.ThreeDSecure();
          self.threeDSecure.initialize(self.options);
          self.threeDSecure.on(_constants__WEBPACK_IMPORTED_MODULE_10__.threeDSecureEvents.SHOW, function (data) {
            _this2._emit(_constants__WEBPACK_IMPORTED_MODULE_10__.threeDSecureEvents.SHOW, data);
          });
          self.threeDSecure.on(_constants__WEBPACK_IMPORTED_MODULE_10__.threeDSecureEvents.HIDE, function (data) {
            _this2._emit(_constants__WEBPACK_IMPORTED_MODULE_10__.threeDSecureEvents.HIDE, data);
          });
          Promise.all(frameReadyPromises).then(function (replies) {
            replies.forEach(function (reply) {
              return reply(self.options);
            });
            clearTimeout(failureTimeout);
            self._isInitialized = true;
            resolve(self);
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: "submit",
    value: function submit(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3._bus.emit(_constants__WEBPACK_IMPORTED_MODULE_10__.events.SUBMIT, data, function (payload) {
          var _payload = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(payload, 2),
              err = _payload[0],
              result = _payload[1];

          if (err) {
            reject(new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_11__.DnaPaymentsError(err));
          } else if (_this3.threeDSecure.hasThreeDSecure(result)) {
            _this3.threeDSecure.setData(result).then(function () {
              return resolve(result);
            }).catch(function (err) {
              return reject(err);
            });
          } else {
            resolve(result);
          }
        });
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this._bus.emit(_constants__WEBPACK_IMPORTED_MODULE_10__.events.CLEAR);
    }
  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__.default)((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(HostedFields.prototype), "on", this).call(this, event, callback);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._bus.teardown();

      Object.entries(this.options.fields).forEach(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, 2),
            field = _ref4[1];

        var classContainer = field.classContainer,
            container = field.container;
        var elem = classContainer || container;
        elem.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.FOCUSED);
        elem.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.VALID);
        elem.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.INVALID);
        container.innerHTML = '';
      });

      if (this.threeDSecure) {
        this.threeDSecure.clear();
        this.threeDSecure = null;
      }

      this._isInitialized = false;
    }
  }, {
    key: "_attachBusEvents",
    value: function _attachBusEvents() {
      var _this4 = this;

      this._bus.on(_constants__WEBPACK_IMPORTED_MODULE_10__.events.INPUT_EVENT, function (eventData) {
        var type = eventData.type,
            payload = eventData.payload;
        var fieldKey = payload.fieldKey,
            fieldsState = payload.fieldsState;
        var _this4$options$fields = _this4.options.fields[fieldKey],
            classContainer = _this4$options$fields.classContainer,
            container = _this4$options$fields.container;
        var elem = classContainer || container;
        var state = fieldsState[fieldKey];
        elem.classList.toggle(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.FOCUSED, state.isFocused);
        elem.classList.toggle(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.VALID, state.isTouched && state.isValid);
        elem.classList.toggle(_constants__WEBPACK_IMPORTED_MODULE_10__.externalClasses.INVALID, state.isTouched && !state.isValid);
        _this4._state = {
          cardInfo: payload.cardInfo,
          fieldsState: payload.fieldsState
        };

        _this4._emit(type, payload);
      });

      this._bus.on(_constants__WEBPACK_IMPORTED_MODULE_10__.events.ERROR, function (error) {
        _this4.destroy();

        throw new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_11__.DnaPaymentsError(error);
      });
    }
  }]);

  return HostedFields;
}((_braintree_event_emitter__WEBPACK_IMPORTED_MODULE_8___default()));

/***/ }),

/***/ "./src/code/classes/ThreeDSecure.ts":
/*!******************************************!*\
  !*** ./src/code/classes/ThreeDSecure.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeDSecure": function() { return /* binding */ ThreeDSecure; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _braintree_event_emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @braintree/event-emitter */ "./node_modules/@braintree/event-emitter/dist/event-emitter.js");
/* harmony import */ var _braintree_event_emitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_braintree_event_emitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var payment_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! payment-core */ "./node_modules/payment-core/dist/index.js");
/* harmony import */ var payment_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(payment_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants */ "./src/code/constants.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib */ "./src/code/lib/index.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/errors */ "./src/code/errors.ts");
/* harmony import */ var _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/DnaPaymentsError */ "./src/code/models/DnaPaymentsError.ts");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ThreeDSecure = /*#__PURE__*/function (_EventEmitter) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ThreeDSecure, _EventEmitter);

  var _super = _createSuper(ThreeDSecure);

  function ThreeDSecure() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ThreeDSecure);

    _this = _super.apply(this, arguments);
    _this.paymentResult = null;
    _this.webSocket = null;
    _this.iframe = null;

    _this.onIframeLoad = function () {
      if (_this.paymentResult && _this.getSecure3DFields().actionUrl === _this.iframe.src) {
        _this._emit(_constants__WEBPACK_IMPORTED_MODULE_7__.threeDSecureEvents.SHOW);
      }
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ThreeDSecure, [{
    key: "urls",
    get: function get() {
      return (0,payment_core__WEBPACK_IMPORTED_MODULE_6__.getUrls)(this.isTest);
    }
  }, {
    key: "initialize",
    value: function initialize(options) {
      this.isTest = options.isTest || false;
      this.accessToken = options.accessToken;
      this.container = options.threeDSecure.container;
      var isInForm = Boolean((0,_lib__WEBPACK_IMPORTED_MODULE_8__.findClosestParent)(this.container, function (e) {
        return e.nodeName === 'FORM';
      }));

      if (isInForm) {
        throw new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_10__.DnaPaymentsError(_errors__WEBPACK_IMPORTED_MODULE_9__.default.THREE_D_SECURE_IN_FORM);
      }
    }
  }, {
    key: "hasThreeDSecure",
    value: function hasThreeDSecure(paymentResult) {
      var data = paymentResult.data;
      return Boolean(data.secure3D) || Boolean(data.threeDS);
    }
  }, {
    key: "setData",
    value: function setData(paymentResult) {
      var _this2 = this;

      return new Promise(function (res, rej) {
        _this2._paymentResolve = res;
        _this2._paymentReject = rej;

        _this2.clear();

        _this2.paymentResult = paymentResult;

        _this2.render();

        _this2.addWsListenerTo3dSecureResult();
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this._emit(_constants__WEBPACK_IMPORTED_MODULE_7__.threeDSecureEvents.HIDE);

      this.clear();
    }
  }, {
    key: "handle3dSecureResult",
    value: function handle3dSecureResult(query) {
      if (query && query.result) {
        if (query.result === 'ok') {
          this._paymentResolve(query.result);
        } else if (query.result === 'error') {
          this._paymentReject(new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_10__.DnaPaymentsError(_errors__WEBPACK_IMPORTED_MODULE_9__.default.threeDSecureError(query.errorMessage)));
        }
      }

      this.hide();
    }
  }, {
    key: "addWsListenerTo3dSecureResult",
    value: function addWsListenerTo3dSecureResult() {
      var _this3 = this;

      var tm;
      var pingInterval;
      var ws = new WebSocket("".concat(this.urls.wsUrl, "/").concat(this.paymentResult.data.id));

      function ping() {
        ws.send('__ping__');
        tm = setTimeout(function () {
          log('websocket channel closed');
        }, 5000);
      }

      function pong() {
        clearTimeout(tm);
      }

      ws.onopen = function () {
        log('websocket channel connected');
        pingInterval = setInterval(ping, 30000);
      };

      ws.onmessage = function (evt) {
        var msg = evt.data;

        if (msg === '__pong__') {
          pong();
          return;
        }

        var message = JSON.parse(evt.data);

        if (message.result) {
          var _message$result = message.result,
              result = _message$result.result,
              errorMessage = _message$result.errorMessage;

          _this3.handle3dSecureResult({
            result: result,
            errorMessage: errorMessage
          });
        }
      };

      ws.onclose = function (e) {
        clearInterval(pingInterval);
        log(e.reason);
      };

      ws.onerror = function (err) {
        clearInterval(pingInterval);
        log('Socket encountered error: ', err, 'Closing socket');
      };

      this.webSocket = ws;
    }
  }, {
    key: "getSecure3DFields",
    value: function getSecure3DFields() {
      var paymentResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.paymentResult;

      var _a, _b;

      var version = paymentResult.version,
          data = paymentResult.data;

      if (version === 1) {
        var dRequest = (_a = data) === null || _a === void 0 ? void 0 : _a.secure3D;
        return {
          version: '1',
          md: dRequest.md,
          actionUrl: dRequest.action,
          paReq: dRequest.paReq,
          termUrl: "".concat(this.urls.apiUrl, "/payments/cards/confirmPayment?Access=").concat(this.accessToken)
        };
      }

      var dRequestData = (_b = data) === null || _b === void 0 ? void 0 : _b.threeDS;
      return {
        md: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.md,
        actionUrl: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.acsUrl,
        paReq: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.pareq,
        termUrl: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.termUrl,
        version: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.version,
        creq: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.creq,
        threeDSSessionData: dRequestData === null || dRequestData === void 0 ? void 0 : dRequestData.threeDSSessionData
      };
    }
  }, {
    key: "render",
    value: function render() {
      var paymentResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.paymentResult;
      var secure3D = this.getSecure3DFields(paymentResult);
      var version = secure3D.version,
          actionUrl = secure3D.actionUrl,
          md = secure3D.md,
          paReq = secure3D.paReq,
          termUrl = secure3D.termUrl,
          creq = secure3D.creq,
          threeDSSessionData = secure3D.threeDSSessionData;
      var frameName = "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__.CORE_PREFIX, "output_frame");
      var formId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_7__.CORE_PREFIX, "output_form");
      var fieldsHtml = version === '1' ? "\n            <input type='hidden' name='PaReq' value='".concat(paReq, "' />\n            <input type='hidden' name='MD' value='").concat(md, "' />\n            <input type='hidden' name='TermUrl' value='").concat(termUrl, "' />\n        ") : "\n            <input type='hidden' name='creq' value='".concat(creq, "' />\n            <input type='hidden' name='threeDSSessionData' value='").concat(threeDSSessionData, "' />\n        ");
      var html = "\n            <div>\n                <form\n                    id=\"".concat(formId, "\"\n                    target=\"").concat(frameName, "\"\n                    method=\"POST\"\n                    action=\"").concat(actionUrl, "\"\n                >\n                ").concat(fieldsHtml, "\n                </form>\n            </div>\n            <iframe\n                name='").concat(frameName, "'\n                src='").concat(actionUrl, "'\n                id='").concat(frameName, "'\n                style='width: 100%; height: 100%; border: none; min-height: 400px;'\n            >\n                <p>Your browser does not support iframes.</p>\n            </iframe>\n        ");
      this.container.innerHTML = html;
      var form = document.getElementById(formId);
      this.iframe = document.getElementById(frameName);
      this.iframe.addEventListener('load', this.onIframeLoad);
      setTimeout(function () {
        form.submit();
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.paymentResult = null;
      this.container.innerHTML = '';

      if (this.iframe) {
        this.iframe.removeEventListener('load', this.onIframeLoad);
      }

      if (this.webSocket) {
        this.webSocket.close();
      }

      this.webSocket = null;
    }
  }]);

  return ThreeDSecure;
}((_braintree_event_emitter__WEBPACK_IMPORTED_MODULE_5___default()));
var log = console.log;

/***/ }),

/***/ "./src/code/constants.ts":
/*!*******************************!*\
  !*** ./src/code/constants.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PREFIX": function() { return /* binding */ PREFIX; },
/* harmony export */   "PREFIX_FIELD_NAME": function() { return /* binding */ PREFIX_FIELD_NAME; },
/* harmony export */   "CORE_PREFIX": function() { return /* binding */ CORE_PREFIX; },
/* harmony export */   "INTEGRATION_TIMEOUT_MS": function() { return /* binding */ INTEGRATION_TIMEOUT_MS; },
/* harmony export */   "CHECK_FOR_NEW_AUTOFILL_DATA_INTERVAL": function() { return /* binding */ CHECK_FOR_NEW_AUTOFILL_DATA_INTERVAL; },
/* harmony export */   "VERIFIED_DOMAINS": function() { return /* binding */ VERIFIED_DOMAINS; },
/* harmony export */   "URLS": function() { return /* binding */ URLS; },
/* harmony export */   "ALLOWED_FIELDS": function() { return /* binding */ ALLOWED_FIELDS; },
/* harmony export */   "events": function() { return /* binding */ events; },
/* harmony export */   "externalEvents": function() { return /* binding */ externalEvents; },
/* harmony export */   "externalClasses": function() { return /* binding */ externalClasses; },
/* harmony export */   "threeDSecureEvents": function() { return /* binding */ threeDSecureEvents; },
/* harmony export */   "ALLOWED_STYLES": function() { return /* binding */ ALLOWED_STYLES; }
/* harmony export */ });
var PREFIX = 'DNA_PAYMENTS_HOSTED_FIELDS_';
var PREFIX_FIELD_NAME = 'dna-payments-hosted-field-';
var CORE_PREFIX = 'dna-payments-';
var INTEGRATION_TIMEOUT_MS = 60000;
var CHECK_FOR_NEW_AUTOFILL_DATA_INTERVAL = 100;
var ASSETS_URL = 'https://dna-payments.github.io/hosted-fields';
var VERIFIED_DOMAINS = ['https://dnapayments.000webhostapp.com', 'https://dna-payments.github.io', 'https://localhost:3001'];
var URLS = {
  frameUrl: "".concat(ASSETS_URL, "/hosted-fields-frame.html"),
  threeDSecureUrl: "".concat(ASSETS_URL, "/three-d-secure-frame.html")
};
var ALLOWED_FIELDS = {
  cardholderName: {
    name: 'cardholder-name',
    label: 'Cardholder Name',
    autocomplete: 'cc-name'
  },
  cardNumber: {
    name: 'credit-card-number',
    label: 'Credit Card Number',
    autocomplete: 'cc-number'
  },
  cvv: {
    name: 'cvv',
    label: 'CVV',
    autocomplete: 'cc-csc'
  },
  expirationDate: {
    name: 'expiration',
    label: 'Expiration Date',
    autocomplete: 'cc-exp'
  },
  expirationMonth: {
    name: 'expiration-month',
    label: 'Expiration Month',
    autocomplete: 'cc-exp-month'
  },
  expirationYear: {
    name: 'expiration-year',
    label: 'Expiration Year',
    autocomplete: 'cc-exp-year'
  }
};
var events = {
  SUBMIT: "".concat(PREFIX, "SUBMIT"),
  CLEAR: "".concat(PREFIX, "CLEAR"),
  FRAME_READY: "".concat(PREFIX, "FRAME_READY"),
  INPUT_EVENT: "".concat(PREFIX, "INPUT_EVENT"),
  AUTO_FILL: "".concat(PREFIX, "AUTO_FILL"),
  ERROR: "".concat(PREFIX, "ERROR")
};
var externalEvents;

(function (externalEvents) {
  externalEvents["CLEAR"] = "clear";
  externalEvents["FOCUS"] = "focus";
  externalEvents["BLUR"] = "blur";
  externalEvents["CHANGE"] = "change";
  externalEvents["VALIDITY_CHANGE"] = "validityChange";
})(externalEvents || (externalEvents = {}));

var externalClasses = {
  FOCUSED: "".concat(PREFIX_FIELD_NAME, "focused"),
  INVALID: "".concat(PREFIX_FIELD_NAME, "invalid"),
  VALID: "".concat(PREFIX_FIELD_NAME, "valid")
};
var threeDSecureEvents = {
  SHOW: "".concat(CORE_PREFIX, "three-d-secure-show"),
  HIDE: "".concat(CORE_PREFIX, "three-d-secure-hide")
};
var ALLOWED_STYLES = ['-moz-appearance', '-moz-osx-font-smoothing', '-moz-tap-highlight-color', '-moz-transition', '-webkit-appearance', '-webkit-font-smoothing', '-webkit-tap-highlight-color', '-webkit-transition', 'appearance', 'color', 'direction', 'font', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-ligatures', 'font-variant-numeric', 'font-weight', 'letter-spacing', 'line-height', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'opacity', 'outline', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'text-align', 'text-shadow', 'transition'];

/***/ }),

/***/ "./src/code/errors.ts":
/*!****************************!*\
  !*** ./src/code/errors.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/DnaPaymentsError */ "./src/code/models/DnaPaymentsError.ts");
/* harmony import */ var _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/DnaPaymentsErrorType */ "./src/code/models/DnaPaymentsErrorType.ts");


var HOSTED_FIELDS_TIMEOUT = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.UNKNOWN,
  code: 'HOSTED_FIELDS_TIMEOUT',
  message: 'Hosted Fields timed out when attempting to set up.'
};
var NOT_ALLOWED_FIELD = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
  code: 'NOT_ALLOWED_FIELD',
  message: 'Not allowed hosted field.'
};
var NOT_IN_IFRAME = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
  code: 'NOT_IN_IFRAME',
  message: 'Must be in Iframe.'
};
var NOT_ALL_REQUIRED_FIELDS = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
  code: 'NOT_ALL_REQUIRED_FIELDS',
  message: 'Not all required fields are provided.'
};
var THREE_D_SECURE_IN_FORM = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
  code: 'THREE_D_SECURE_IN_FORM',
  message: '3D Secure container must not be in FORM tag'
};
var INVALID_CARD_DATA = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.CUSTOMER,
  code: 'INVALID_CARD_DATA',
  message: 'Invalid card data.'
};
var CLIENT_INITIALIZE_ERROR = {
  type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.INTERNAL,
  code: 'CLIENT_INITIALIZE_ERROR',
  message: 'Could not initialize the Client object. Maybe an invalid accessToken.'
};

var internalError = function internalError(_ref) {
  var _ref$code = _ref.code,
      code = _ref$code === void 0 ? '00' : _ref$code,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;
  return new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_0__.DnaPaymentsError({
    type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.INTERNAL,
    code: code,
    message: message
  });
};

var duplicateFieldError = function duplicateFieldError(fieldKey) {
  return new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_0__.DnaPaymentsError({
    type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
    code: 'DUPLICATE_FIELD',
    message: "".concat(fieldKey, " field is already initialized.")
  });
};

var notAllowedFieldError = function notAllowedFieldError(fieldKey) {
  return new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_0__.DnaPaymentsError({
    type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
    code: 'NOT_ALLOWED_FIELD',
    message: "".concat(fieldKey, " field is NOT an allowed hosted field.")
  });
};

var requiredFieldError = function requiredFieldError(fieldKey) {
  return new _models_DnaPaymentsError__WEBPACK_IMPORTED_MODULE_0__.DnaPaymentsError({
    type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.MERCHANT,
    code: 'MISSING_REQUIRED_FIELD',
    message: "".concat(fieldKey, " required field is NOT provided.")
  });
};

var threeDSecureError = function threeDSecureError(errorMessage) {
  return {
    type: _models_DnaPaymentsErrorType__WEBPACK_IMPORTED_MODULE_1__.DnaPaymentsErrorType.INTERNAL,
    code: 'THREE_D_SECURE_ERROR',
    message: errorMessage || '3D Secure error.'
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  internalError: internalError,
  duplicateFieldError: duplicateFieldError,
  notAllowedFieldError: notAllowedFieldError,
  requiredFieldError: requiredFieldError,
  threeDSecureError: threeDSecureError,
  CLIENT_INITIALIZE_ERROR: CLIENT_INITIALIZE_ERROR,
  HOSTED_FIELDS_TIMEOUT: HOSTED_FIELDS_TIMEOUT,
  INVALID_CARD_DATA: INVALID_CARD_DATA,
  NOT_ALLOWED_FIELD: NOT_ALLOWED_FIELD,
  NOT_IN_IFRAME: NOT_IN_IFRAME,
  NOT_ALL_REQUIRED_FIELDS: NOT_ALL_REQUIRED_FIELDS,
  THREE_D_SECURE_IN_FORM: THREE_D_SECURE_IN_FORM
});

/***/ }),

/***/ "./src/code/lib/createFrame.ts":
/*!*************************************!*\
  !*** ./src/code/lib/createFrame.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFrame": function() { return /* binding */ createFrame; }
/* harmony export */ });
/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ "./src/code/lib/setAttributes.ts");

function createFrame() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var iframe = document.createElement('iframe');
  var config = Object.assign({}, defaultAttributes, attributes);

  if (config.style && typeof config.style !== "string") {
    Object.assign(iframe.style, config.style);
    delete config.style;
  }

  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(iframe, config);

  if (!iframe.getAttribute("id")) {
    iframe.id = iframe.name;
  }

  return iframe;
}
var defaultAttributes = {
  src: "about:blank",
  frameBorder: 0,
  allowtransparency: true,
  scrolling: "no"
};

/***/ }),

/***/ "./src/code/lib/findClosestParent.ts":
/*!*******************************************!*\
  !*** ./src/code/lib/findClosestParent.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findClosestParent": function() { return /* binding */ findClosestParent; }
/* harmony export */ });
function findClosestParent(element, check) {
  if (check(element)) {
    return element;
  }

  if (element.parentNode.nodeName !== 'BODY') {
    return element.parentNode && findClosestParent(element.parentNode, check);
  }

  return null;
}

/***/ }),

/***/ "./src/code/lib/getMainDomain.ts":
/*!***************************************!*\
  !*** ./src/code/lib/getMainDomain.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMainDomain": function() { return /* binding */ getMainDomain; }
/* harmony export */ });
function getMainDomain(url) {
  return url.match(/\w*\.\w*$/gi);
}

/***/ }),

/***/ "./src/code/lib/inIframe.ts":
/*!**********************************!*\
  !*** ./src/code/lib/inIframe.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inIframe": function() { return /* binding */ inIframe; }
/* harmony export */ });
function inIframe() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  try {
    return win.self !== win.top;
  } catch (e) {
    return true;
  }
}

/***/ }),

/***/ "./src/code/lib/index.ts":
/*!*******************************!*\
  !*** ./src/code/lib/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFrame": function() { return /* reexport safe */ _createFrame__WEBPACK_IMPORTED_MODULE_0__.createFrame; },
/* harmony export */   "getMainDomain": function() { return /* reexport safe */ _getMainDomain__WEBPACK_IMPORTED_MODULE_1__.getMainDomain; },
/* harmony export */   "inIframe": function() { return /* reexport safe */ _inIframe__WEBPACK_IMPORTED_MODULE_2__.inIframe; },
/* harmony export */   "setAttributes": function() { return /* reexport safe */ _setAttributes__WEBPACK_IMPORTED_MODULE_3__.setAttributes; },
/* harmony export */   "findClosestParent": function() { return /* reexport safe */ _findClosestParent__WEBPACK_IMPORTED_MODULE_4__.findClosestParent; }
/* harmony export */ });
/* harmony import */ var _createFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFrame */ "./src/code/lib/createFrame.ts");
/* harmony import */ var _getMainDomain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMainDomain */ "./src/code/lib/getMainDomain.ts");
/* harmony import */ var _inIframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inIframe */ "./src/code/lib/inIframe.ts");
/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setAttributes */ "./src/code/lib/setAttributes.ts");
/* harmony import */ var _findClosestParent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./findClosestParent */ "./src/code/lib/findClosestParent.ts");






/***/ }),

/***/ "./src/code/lib/setAttributes.ts":
/*!***************************************!*\
  !*** ./src/code/lib/setAttributes.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttributes": function() { return /* binding */ setAttributes; }
/* harmony export */ });
function setAttributes(element, attributes) {
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      var value = attributes[key];

      if (value == null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
}

/***/ }),

/***/ "./src/code/models/DnaPaymentsError.ts":
/*!*********************************************!*\
  !*** ./src/code/models/DnaPaymentsError.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DnaPaymentsError": function() { return /* binding */ DnaPaymentsError; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DnaPaymentsError = /*#__PURE__*/function (_Error) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(DnaPaymentsError, _Error);

  var _super = _createSuper(DnaPaymentsError);

  function DnaPaymentsError(options) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, DnaPaymentsError);

    _this = _super.call(this, options.message);
    Object.setPrototypeOf((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this), DnaPaymentsError.prototype);
    _this.name = 'DnaPaymentsError';
    _this.type = options.type;
    _this.code = options.code;
    _this.stack = Error().stack;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(DnaPaymentsError, [{
    key: "toJSON",
    value: function toJSON() {
      return Object.assign(Object.assign({}, this), {
        message: this.message
      });
    }
  }]);

  return DnaPaymentsError;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__.default)(Error));

/***/ }),

/***/ "./src/code/models/DnaPaymentsErrorType.ts":
/*!*************************************************!*\
  !*** ./src/code/models/DnaPaymentsErrorType.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DnaPaymentsErrorType": function() { return /* binding */ DnaPaymentsErrorType; }
/* harmony export */ });
var DnaPaymentsErrorType;

(function (DnaPaymentsErrorType) {
  DnaPaymentsErrorType["UNKNOWN"] = "UNKNOWN";
  DnaPaymentsErrorType["MERCHANT"] = "MERCHANT";
  DnaPaymentsErrorType["CUSTOMER"] = "CUSTOMER";
  DnaPaymentsErrorType["INTERNAL"] = "INTERNAL";
})(DnaPaymentsErrorType || (DnaPaymentsErrorType = {}));

/***/ }),

/***/ "./src/code/services/assembleIframes.ts":
/*!**********************************************!*\
  !*** ./src/code/services/assembleIframes.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assembleIframes": function() { return /* binding */ assembleIframes; }
/* harmony export */ });
function assembleIframes(parentWindow) {
  var frames = [];

  for (var i = 0; i < parentWindow.frames.length; i++) {
    var frame = parentWindow.frames[i];

    try {
      if (frame.location.href === window.location.href) {
        frames.push(frame);
      }
    } catch (_a) {}
  }

  return frames;
}

/***/ }),

/***/ "./src/code/services/checkFields.ts":
/*!******************************************!*\
  !*** ./src/code/services/checkFields.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkFields": function() { return /* binding */ checkFields; }
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/errors */ "./src/code/errors.ts");
/* harmony import */ var _isAllowedField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isAllowedField */ "./src/code/services/isAllowedField.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var checkFields = function checkFields(fieldKeys) {
  var dupplicates = fieldKeys.filter(function (key, i) {
    return fieldKeys.indexOf(key) !== i;
  });

  if (dupplicates.length > 0) {
    throw _errors__WEBPACK_IMPORTED_MODULE_0__.default.duplicateFieldError(dupplicates[0]);
  }

  var _iterator = _createForOfIteratorHelper(fieldKeys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fieldKey = _step.value;

      if (!(0,_isAllowedField__WEBPACK_IMPORTED_MODULE_1__.isAllowedField)(fieldKey)) {
        throw _errors__WEBPACK_IMPORTED_MODULE_0__.default.notAllowedFieldError(fieldKey);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var requiredKeys = ['cardholderName', 'cardNumber', 'cvv', 'expirationDate'];
  var absentKeys = requiredKeys.filter(function (requiredKey) {
    return fieldKeys.indexOf(requiredKey) < 0;
  });

  if (absentKeys.length > 0 && (absentKeys[0] !== 'expirationDate' || !['expirationMonth', 'expirationYear'].every(function (key) {
    return fieldKeys.indexOf(key) >= 0;
  }))) {
    throw _errors__WEBPACK_IMPORTED_MODULE_0__.default.requiredFieldError(absentKeys[0]);
  }

  return true;
};

/***/ }),

/***/ "./src/code/services/createInputsForAutofill.ts":
/*!******************************************************!*\
  !*** ./src/code/services/createInputsForAutofill.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInputsForAutofill": function() { return /* binding */ createInputsForAutofill; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ "./src/code/constants.ts");
/* harmony import */ var _createMockInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMockInput */ "./src/code/services/createMockInput.ts");



var createInputsForAutofill = function createInputsForAutofill(fieldInput) {
  var autofillFieldKeys = ['cardholderName', 'cardNumber', 'expirationMonth', 'expirationYear', 'cvv'];
  var autofillFieldInputs = autofillFieldKeys.map(function (fieldKey) {
    return (0,_createMockInput__WEBPACK_IMPORTED_MODULE_2__.createMockInput)(fieldKey);
  });
  var cachedValues = autofillFieldKeys.reduce(function (prev, key) {
    return Object.assign(Object.assign({}, prev), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, key, ''));
  }, {});
  fieldInput.element.addEventListener('input', function () {
    autofillFieldKeys.forEach(function (key, i) {
      autofillFieldInputs[i].value = '';
      cachedValues[key] = '';
    });
  });
  setInterval(function () {
    var hasNewAutofill = autofillFieldKeys.some(function (key, i) {
      return autofillFieldInputs[i].value && autofillFieldInputs[i].value !== cachedValues[key];
    });

    if (hasNewAutofill) {
      autofillFieldKeys.forEach(function (key, i) {
        var value = autofillFieldInputs[i].value;

        if (key === 'expirationMonth' && value && value.length === 1) {
          value = '0' + value;
        } else if (key === 'expirationYear' && value && value.length === 2) {
          value = String(new Date().getFullYear()).substring(0, 2) + value;
        }

        cachedValues[key] = value;
      });
      fieldInput.model.setAutofill(cachedValues);
    }
  }, _constants__WEBPACK_IMPORTED_MODULE_1__.CHECK_FOR_NEW_AUTOFILL_DATA_INTERVAL);
  var fieldKey = fieldInput.fieldKey;
  var fragement = document.createDocumentFragment();
  autofillFieldInputs.forEach(function (fieldInput, i) {
    var keys = fieldKey === 'expirationDate' ? ['expirationMonth', 'expirationYear'] : [fieldKey];

    if (keys.indexOf(autofillFieldKeys[i]) < 0) {
      fragement.appendChild(fieldInput);
    }
  });
  return fragement;
};

/***/ }),

/***/ "./src/code/services/createMockInput.ts":
/*!**********************************************!*\
  !*** ./src/code/services/createMockInput.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMockInput": function() { return /* binding */ createMockInput; }
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib */ "./src/code/lib/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ "./src/code/constants.ts");

 // create mock input for autofill card data

var createMockInput = function createMockInput(fieldKey) {
  var input = document.createElement('input');
  var _ALLOWED_FIELDS$field = _constants__WEBPACK_IMPORTED_MODULE_1__.ALLOWED_FIELDS[fieldKey],
      autocomplete = _ALLOWED_FIELDS$field.autocomplete,
      name = _ALLOWED_FIELDS$field.name;
  (0,_lib__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(input, {
    'aria-hidden': true,
    tabindex: -1,
    id: "".concat(name, "-autofill-field"),
    class: 'autofill-field',
    type: 'text',
    autocomplete: autocomplete,
    name: name
  });
  return input;
};

/***/ }),

/***/ "./src/code/services/getFrameName.ts":
/*!*******************************************!*\
  !*** ./src/code/services/getFrameName.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFrameName": function() { return /* binding */ getFrameName; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/code/constants.ts");

function getFrameName() {
  return window.name.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.PREFIX_FIELD_NAME, '');
}

/***/ }),

/***/ "./src/code/services/index.ts":
/*!************************************!*\
  !*** ./src/code/services/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFrameName": function() { return /* reexport safe */ _getFrameName__WEBPACK_IMPORTED_MODULE_0__.getFrameName; },
/* harmony export */   "injectFrame": function() { return /* reexport safe */ _injectFrame__WEBPACK_IMPORTED_MODULE_1__.injectFrame; },
/* harmony export */   "isAllowedField": function() { return /* reexport safe */ _isAllowedField__WEBPACK_IMPORTED_MODULE_2__.isAllowedField; },
/* harmony export */   "assembleIframes": function() { return /* reexport safe */ _assembleIframes__WEBPACK_IMPORTED_MODULE_3__.assembleIframes; },
/* harmony export */   "createMockInput": function() { return /* reexport safe */ _createMockInput__WEBPACK_IMPORTED_MODULE_4__.createMockInput; },
/* harmony export */   "createInputsForAutofill": function() { return /* reexport safe */ _createInputsForAutofill__WEBPACK_IMPORTED_MODULE_5__.createInputsForAutofill; },
/* harmony export */   "checkFields": function() { return /* reexport safe */ _checkFields__WEBPACK_IMPORTED_MODULE_6__.checkFields; }
/* harmony export */ });
/* harmony import */ var _getFrameName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFrameName */ "./src/code/services/getFrameName.ts");
/* harmony import */ var _injectFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectFrame */ "./src/code/services/injectFrame.ts");
/* harmony import */ var _isAllowedField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isAllowedField */ "./src/code/services/isAllowedField.ts");
/* harmony import */ var _assembleIframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assembleIframes */ "./src/code/services/assembleIframes.ts");
/* harmony import */ var _createMockInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createMockInput */ "./src/code/services/createMockInput.ts");
/* harmony import */ var _createInputsForAutofill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createInputsForAutofill */ "./src/code/services/createInputsForAutofill.ts");
/* harmony import */ var _checkFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkFields */ "./src/code/services/checkFields.ts");








/***/ }),

/***/ "./src/code/services/injectFrame.ts":
/*!******************************************!*\
  !*** ./src/code/services/injectFrame.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectFrame": function() { return /* binding */ injectFrame; }
/* harmony export */ });
/* harmony import */ var _lib_createFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/createFrame */ "./src/code/lib/createFrame.ts");

function injectFrame(name, container) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var iframe = (0,_lib_createFrame__WEBPACK_IMPORTED_MODULE_0__.createFrame)({
    name: name,
    style: Object.assign({}, iFrameStyle, style)
  });
  var fragment = document.createDocumentFragment();
  var clearboth = document.createElement('div');
  clearboth.style.clear = 'both';
  fragment.appendChild(iframe);
  fragment.appendChild(clearboth);
  container.innerHTML = '';
  container.appendChild(fragment);
  return iframe;
}
var iFrameStyle = {
  border: 'none',
  width: '100%',
  height: '100%',
  'float': 'left'
};

/***/ }),

/***/ "./src/code/services/isAllowedField.ts":
/*!*********************************************!*\
  !*** ./src/code/services/isAllowedField.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAllowedField": function() { return /* binding */ isAllowedField; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants */ "./src/code/constants.ts");

function isAllowedField(field) {
  return Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_FIELDS).indexOf(field) >= 0;
}

/***/ }),

/***/ "./node_modules/framebus/dist/framebus.js":
/*!************************************************!*\
  !*** ./node_modules/framebus/dist/framebus.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Framebus = void 0;
var is_not_string_1 = __webpack_require__(/*! ./lib/is-not-string */ "./node_modules/framebus/dist/lib/is-not-string.js");
var subscription_args_invalid_1 = __webpack_require__(/*! ./lib/subscription-args-invalid */ "./node_modules/framebus/dist/lib/subscription-args-invalid.js");
var broadcast_1 = __webpack_require__(/*! ./lib/broadcast */ "./node_modules/framebus/dist/lib/broadcast.js");
var package_payload_1 = __webpack_require__(/*! ./lib/package-payload */ "./node_modules/framebus/dist/lib/package-payload.js");
var constants_1 = __webpack_require__(/*! ./lib/constants */ "./node_modules/framebus/dist/lib/constants.js");
var DefaultPromise = (typeof window !== "undefined" &&
    window.Promise);
var Framebus = /** @class */ (function () {
    function Framebus(options) {
        if (options === void 0) { options = {}; }
        this.origin = options.origin || "*";
        this.channel = options.channel || "";
        this.verifyDomain = options.verifyDomain;
        this.isDestroyed = false;
        this.listeners = [];
    }
    Framebus.setPromise = function (PromiseGlobal) {
        Framebus.Promise = PromiseGlobal;
    };
    Framebus.target = function (options) {
        return new Framebus(options);
    };
    Framebus.prototype.include = function (childWindow) {
        if (childWindow == null) {
            return false;
        }
        if (childWindow.Window == null) {
            return false;
        }
        if (childWindow.constructor !== childWindow.Window) {
            return false;
        }
        constants_1.childWindows.push(childWindow);
        return true;
    };
    Framebus.prototype.target = function (options) {
        return Framebus.target(options);
    };
    Framebus.prototype.emit = function (eventName, data, reply) {
        if (this.isDestroyed) {
            return false;
        }
        var origin = this.origin;
        eventName = this.namespaceEvent(eventName);
        if (is_not_string_1.isntString(eventName)) {
            return false;
        }
        if (is_not_string_1.isntString(origin)) {
            return false;
        }
        if (typeof data === "function") {
            reply = data;
            data = undefined; // eslint-disable-line no-undefined
        }
        var payload = package_payload_1.packagePayload(eventName, origin, data, reply);
        if (!payload) {
            return false;
        }
        broadcast_1.broadcast(window.top || window.self, payload, origin);
        return true;
    };
    Framebus.prototype.emitAsPromise = function (eventName, data) {
        var _this = this;
        return new Framebus.Promise(function (resolve, reject) {
            var didAttachListener = _this.emit(eventName, data, function (payload) {
                resolve(payload);
            });
            if (!didAttachListener) {
                reject(new Error("Listener not added for \"" + eventName + "\""));
            }
        });
    };
    Framebus.prototype.on = function (eventName, originalHandler) {
        if (this.isDestroyed) {
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        var origin = this.origin;
        var handler = originalHandler;
        eventName = this.namespaceEvent(eventName);
        if (subscription_args_invalid_1.subscriptionArgsInvalid(eventName, handler, origin)) {
            return false;
        }
        if (this.verifyDomain) {
            /* eslint-disable no-invalid-this, @typescript-eslint/ban-ts-comment */
            handler = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                // @ts-ignore
                if (self.checkOrigin(this && this.origin)) {
                    originalHandler.apply(void 0, args);
                }
            };
            /* eslint-enable no-invalid-this, @typescript-eslint/ban-ts-comment */
        }
        this.listeners.push({
            eventName: eventName,
            handler: handler,
            originalHandler: originalHandler,
        });
        constants_1.subscribers[origin] = constants_1.subscribers[origin] || {};
        constants_1.subscribers[origin][eventName] = constants_1.subscribers[origin][eventName] || [];
        constants_1.subscribers[origin][eventName].push(handler);
        return true;
    };
    Framebus.prototype.off = function (eventName, originalHandler) {
        var handler = originalHandler;
        if (this.isDestroyed) {
            return false;
        }
        if (this.verifyDomain) {
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.originalHandler === originalHandler) {
                    handler = listener.handler;
                }
            }
        }
        eventName = this.namespaceEvent(eventName);
        var origin = this.origin;
        if (subscription_args_invalid_1.subscriptionArgsInvalid(eventName, handler, origin)) {
            return false;
        }
        var subscriberList = constants_1.subscribers[origin] && constants_1.subscribers[origin][eventName];
        if (!subscriberList) {
            return false;
        }
        for (var i = 0; i < subscriberList.length; i++) {
            if (subscriberList[i] === handler) {
                subscriberList.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Framebus.prototype.teardown = function () {
        if (this.isDestroyed) {
            return;
        }
        this.isDestroyed = true;
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            this.off(listener.eventName, listener.handler);
        }
        this.listeners.length = 0;
    };
    Framebus.prototype.checkOrigin = function (postMessageOrigin) {
        var merchantHost;
        var a = document.createElement("a");
        a.href = location.href;
        if (a.protocol === "https:") {
            merchantHost = a.host.replace(/:443$/, "");
        }
        else if (a.protocol === "http:") {
            merchantHost = a.host.replace(/:80$/, "");
        }
        else {
            merchantHost = a.host;
        }
        var merchantOrigin = a.protocol + "//" + merchantHost;
        if (merchantOrigin === postMessageOrigin) {
            return true;
        }
        if (this.verifyDomain) {
            return this.verifyDomain(postMessageOrigin);
        }
        return true;
    };
    Framebus.prototype.namespaceEvent = function (eventName) {
        if (!this.channel) {
            return eventName;
        }
        return this.channel + ":" + eventName;
    };
    Framebus.Promise = DefaultPromise;
    return Framebus;
}());
exports.Framebus = Framebus;


/***/ }),

/***/ "./node_modules/framebus/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/framebus/dist/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var attach_1 = __webpack_require__(/*! ./lib/attach */ "./node_modules/framebus/dist/lib/attach.js");
var framebus_1 = __webpack_require__(/*! ./framebus */ "./node_modules/framebus/dist/framebus.js");
attach_1.attach();
module.exports = framebus_1.Framebus;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/attach.js":
/*!**************************************************!*\
  !*** ./node_modules/framebus/dist/lib/attach.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.detach = exports.attach = void 0;
var message_1 = __webpack_require__(/*! ./message */ "./node_modules/framebus/dist/lib/message.js");
var isAttached = false;
function attach() {
    if (isAttached || typeof window === "undefined") {
        return;
    }
    isAttached = true;
    window.addEventListener("message", message_1.onmessage, false);
}
exports.attach = attach;
// removeIf(production)
function detach() {
    isAttached = false;
    window.removeEventListener("message", message_1.onmessage, false);
}
exports.detach = detach;
// endRemoveIf(production)


/***/ }),

/***/ "./node_modules/framebus/dist/lib/broadcast-to-child-windows.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framebus/dist/lib/broadcast-to-child-windows.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.broadcastToChildWindows = void 0;
var broadcast_1 = __webpack_require__(/*! ./broadcast */ "./node_modules/framebus/dist/lib/broadcast.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/framebus/dist/lib/constants.js");
function broadcastToChildWindows(payload, origin, source) {
    for (var i = constants_1.childWindows.length - 1; i >= 0; i--) {
        var childWindow = constants_1.childWindows[i];
        if (childWindow.closed) {
            constants_1.childWindows.splice(i, 1);
        }
        else if (source !== childWindow) {
            broadcast_1.broadcast(childWindow.top, payload, origin);
        }
    }
}
exports.broadcastToChildWindows = broadcastToChildWindows;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/broadcast.js":
/*!*****************************************************!*\
  !*** ./node_modules/framebus/dist/lib/broadcast.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.broadcast = void 0;
var has_opener_1 = __webpack_require__(/*! ./has-opener */ "./node_modules/framebus/dist/lib/has-opener.js");
function broadcast(frame, payload, origin) {
    var i = 0;
    var frameToBroadcastTo;
    try {
        frame.postMessage(payload, origin);
        if (has_opener_1.hasOpener(frame) && frame.opener.top !== window.top) {
            broadcast(frame.opener.top, payload, origin);
        }
        // previously, our max value was frame.frames.length
        // but frames.length inherits from window.length
        // which can be overwritten if a developer does
        // `var length = value;` outside of a function
        // scope, it'll prevent us from looping through
        // all the frames. With this, we loop through
        // until there are no longer any frames
        // eslint-disable-next-line no-cond-assign
        while ((frameToBroadcastTo = frame.frames[i])) {
            broadcast(frameToBroadcastTo, payload, origin);
            i++;
        }
    }
    catch (_) {
        /* ignored */
    }
}
exports.broadcast = broadcast;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/framebus/dist/lib/constants.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribers = exports.childWindows = exports.prefix = void 0;
exports.prefix = "/*framebus*/";
exports.childWindows = [];
exports.subscribers = {};


/***/ }),

/***/ "./node_modules/framebus/dist/lib/dispatch.js":
/*!****************************************************!*\
  !*** ./node_modules/framebus/dist/lib/dispatch.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dispatch = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/framebus/dist/lib/constants.js");
function dispatch(origin, event, data, reply, e) {
    if (!constants_1.subscribers[origin]) {
        return;
    }
    if (!constants_1.subscribers[origin][event]) {
        return;
    }
    var args = [];
    if (data) {
        args.push(data);
    }
    if (reply) {
        args.push(reply);
    }
    for (var i = 0; i < constants_1.subscribers[origin][event].length; i++) {
        constants_1.subscribers[origin][event][i].apply(e, args);
    }
}
exports.dispatch = dispatch;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/has-opener.js":
/*!******************************************************!*\
  !*** ./node_modules/framebus/dist/lib/has-opener.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasOpener = void 0;
function hasOpener(frame) {
    if (frame.top !== frame) {
        return false;
    }
    if (frame.opener == null) {
        return false;
    }
    if (frame.opener === frame) {
        return false;
    }
    if (frame.opener.closed === true) {
        return false;
    }
    return true;
}
exports.hasOpener = hasOpener;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/is-not-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/framebus/dist/lib/is-not-string.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isntString = void 0;
function isntString(str) {
    return typeof str !== "string";
}
exports.isntString = isntString;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/message.js":
/*!***************************************************!*\
  !*** ./node_modules/framebus/dist/lib/message.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.onmessage = void 0;
var is_not_string_1 = __webpack_require__(/*! ./is-not-string */ "./node_modules/framebus/dist/lib/is-not-string.js");
var unpack_payload_1 = __webpack_require__(/*! ./unpack-payload */ "./node_modules/framebus/dist/lib/unpack-payload.js");
var dispatch_1 = __webpack_require__(/*! ./dispatch */ "./node_modules/framebus/dist/lib/dispatch.js");
var broadcast_to_child_windows_1 = __webpack_require__(/*! ./broadcast-to-child-windows */ "./node_modules/framebus/dist/lib/broadcast-to-child-windows.js");
function onmessage(e) {
    if (is_not_string_1.isntString(e.data)) {
        return;
    }
    var payload = unpack_payload_1.unpackPayload(e);
    if (!payload) {
        return;
    }
    var data = payload.eventData;
    var reply = payload.reply;
    dispatch_1.dispatch("*", payload.event, data, reply, e);
    dispatch_1.dispatch(e.origin, payload.event, data, reply, e);
    broadcast_to_child_windows_1.broadcastToChildWindows(e.data, payload.origin, e.source);
}
exports.onmessage = onmessage;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/package-payload.js":
/*!***********************************************************!*\
  !*** ./node_modules/framebus/dist/lib/package-payload.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packagePayload = void 0;
var subscribe_replier_1 = __webpack_require__(/*! ./subscribe-replier */ "./node_modules/framebus/dist/lib/subscribe-replier.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/framebus/dist/lib/constants.js");
function packagePayload(event, origin, data, reply) {
    var packaged;
    var payload = {
        event: event,
        origin: origin,
    };
    if (typeof reply === "function") {
        payload.reply = subscribe_replier_1.subscribeReplier(reply, origin);
    }
    payload.eventData = data;
    try {
        packaged = constants_1.prefix + JSON.stringify(payload);
    }
    catch (e) {
        throw new Error("Could not stringify event: " + e.message);
    }
    return packaged;
}
exports.packagePayload = packagePayload;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/subscribe-replier.js":
/*!*************************************************************!*\
  !*** ./node_modules/framebus/dist/lib/subscribe-replier.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscribeReplier = void 0;
var framebus_1 = __webpack_require__(/*! ../framebus */ "./node_modules/framebus/dist/framebus.js");
var uuid_1 = __importDefault(__webpack_require__(/*! @braintree/uuid */ "./node_modules/@braintree/uuid/index.js"));
function subscribeReplier(fn, origin) {
    var uuid = uuid_1.default();
    function replier(data, replyOriginHandler) {
        fn(data, replyOriginHandler);
        framebus_1.Framebus.target({
            origin: origin,
        }).off(uuid, replier);
    }
    framebus_1.Framebus.target({
        origin: origin,
    }).on(uuid, replier);
    return uuid;
}
exports.subscribeReplier = subscribeReplier;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/subscription-args-invalid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framebus/dist/lib/subscription-args-invalid.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.subscriptionArgsInvalid = void 0;
var is_not_string_1 = __webpack_require__(/*! ./is-not-string */ "./node_modules/framebus/dist/lib/is-not-string.js");
function subscriptionArgsInvalid(event, fn, origin) {
    if (is_not_string_1.isntString(event)) {
        return true;
    }
    if (typeof fn !== "function") {
        return true;
    }
    return is_not_string_1.isntString(origin);
}
exports.subscriptionArgsInvalid = subscriptionArgsInvalid;


/***/ }),

/***/ "./node_modules/framebus/dist/lib/unpack-payload.js":
/*!**********************************************************!*\
  !*** ./node_modules/framebus/dist/lib/unpack-payload.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unpackPayload = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/framebus/dist/lib/constants.js");
var package_payload_1 = __webpack_require__(/*! ./package-payload */ "./node_modules/framebus/dist/lib/package-payload.js");
function unpackPayload(e) {
    var payload;
    if (e.data.slice(0, constants_1.prefix.length) !== constants_1.prefix) {
        return false;
    }
    try {
        payload = JSON.parse(e.data.slice(constants_1.prefix.length));
    }
    catch (err) {
        return false;
    }
    if (payload.reply) {
        var replyOrigin_1 = e.origin;
        var replySource_1 = e.source;
        var replyEvent_1 = payload.reply;
        payload.reply = function reply(replyData) {
            if (!replySource_1) {
                return;
            }
            var replyPayload = package_payload_1.packagePayload(replyEvent_1, replyOrigin_1, replyData);
            if (!replyPayload) {
                return;
            }
            replySource_1.postMessage(replyPayload, replyOrigin_1);
        };
    }
    return payload;
}
exports.unpackPayload = unpackPayload;


/***/ }),

/***/ "./node_modules/payment-core/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/payment-core/dist/index.js ***!
  \*************************************************/
/***/ (function(module) {

/*! For license information please see index.js.LICENSE.txt */
!function(){var t={71:function(t,e,r){"use strict";var n,i,o,s,a;r.r(e),r.d(e,{CardError:function(){return s},Client:function(){return Yt},CreditCardType:function(){return a},DonationMode:function(){return n},PaymentMethod:function(){return i},WidgetMode:function(){return o},convertPaymentDataFromV1toV2:function(){return Ut},convertPaymentDataFromV2toV1:function(){return Ht},convertPaymentDataTypesToV1:function(){return _t},convertPaymentDataTypesToV2:function(){return Lt},getCardInfo:function(){return wt},getUrls:function(){return St},urls:function(){return gt}}),function(t){t.TopUp="TopUp",t.RoundUp="RoundUp"}(n||(n={})),function(t){t.BankCard="BankCard",t.Ecospend="Ecospend",t.PayPal="PayPal",t.PayByBank="PayByBank",t.ApplePay="ApplePay",t.GooglePay="GooglePay"}(i||(i={})),function(t){t.SEAMLESS="SEAMLESS",t.EMBEDDED="EMBEDDED",t.HOSTED="HOSTED"}(o||(o={})),function(t){t.INVALID_CARD_NUMBER="INVALID_CARD_NUMBER",t.NOT_SUPPORT_CARD_SCHEME="NOT_SUPPORT_CARD_SCHEME",t.INVALID_CARDHOLDER_NAME="INVALID_CARDHOLDER_NAME",t.INVALID_EXPIRY_DATE="INVALID_EXPIRY_DATE",t.INVALID_SECURE_CODE="INVALID_SECURE_CODE"}(s||(s={})),function(t){t.VISA="visa",t.MASTERCARD="mastercard",t.AMERICAN_EXPRESS="american-express",t.DINERS_CLUB="diners-club",t.DISCOVER="discover",t.JCB="jcb",t.UNIONPAY="unionpay",t.MAESTRO="maestro",t.ELO="elo",t.MIR="mir",t.HIPER="hiper",t.HIPERCARD="hipercard"}(a||(a={}));var u=r(703),c=r.n(u),h=r(551),l=r(938),f=r.n(l);function p(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}function d(t,e){return t&e}function g(t,e){return t|e}function y(t,e){return t^e}function v(t,e){return t&~e}function m(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function b(t){for(var e=0;0!=t;)t&=t-1,++e;return e}var S,w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function O(t){var e,r,n="";for(e=0;e+3<=t.length;e+=3)r=parseInt(t.substring(e,e+3),16),n+=w.charAt(r>>6)+w.charAt(63&r);for(e+1==t.length?(r=parseInt(t.substring(e,e+1),16),n+=w.charAt(r<<2)):e+2==t.length&&(r=parseInt(t.substring(e,e+2),16),n+=w.charAt(r>>2)+w.charAt((3&r)<<4));(3&n.length)>0;)n+="=";return n}function T(t){var e,r="",n=0,i=0;for(e=0;e<t.length&&"="!=t.charAt(e);++e){var o=w.indexOf(t.charAt(e));o<0||(0==n?(r+=p(o>>2),i=3&o,n=1):1==n?(r+=p(i<<2|o>>4),i=15&o,n=2):2==n?(r+=p(i),r+=p(o>>2),i=3&o,n=3):(r+=p(i<<2|o>>4),r+=p(15&o),n=0))}return 1==n&&(r+=p(i<<2)),r}var E,D={decode:function(t){var e;if(void 0===E){var r="= \f\n\r\t \u2028\u2029";for(E=Object.create(null),e=0;e<64;++e)E["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)]=e;for(E["-"]=62,E._=63,e=0;e<r.length;++e)E[r.charAt(e)]=-1}var n=[],i=0,o=0;for(e=0;e<t.length;++e){var s=t.charAt(e);if("="==s)break;if(-1!=(s=E[s])){if(void 0===s)throw new Error("Illegal character at offset "+e);i|=s,++o>=4?(n[n.length]=i>>16,n[n.length]=i>>8&255,n[n.length]=255&i,i=0,o=0):i<<=6}}switch(o){case 1:throw new Error("Base64 encoding incomplete: at least 2 bits missing");case 2:n[n.length]=i>>10;break;case 3:n[n.length]=i>>16,n[n.length]=i>>8&255}return n},re:/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,unarmor:function(t){var e=D.re.exec(t);if(e)if(e[1])t=e[1];else{if(!e[2])throw new Error("RegExp out of sync");t=e[2]}return D.decode(t)}},x=1e13,j=function(){function t(t){this.buf=[+t||0]}return t.prototype.mulAdd=function(t,e){var r,n,i=this.buf,o=i.length;for(r=0;r<o;++r)(n=i[r]*t+e)<x?e=0:n-=(e=0|n/x)*x,i[r]=n;e>0&&(i[r]=e)},t.prototype.sub=function(t){var e,r,n=this.buf,i=n.length;for(e=0;e<i;++e)(r=n[e]-t)<0?(r+=x,t=1):t=0,n[e]=r;for(;0===n[n.length-1];)n.pop()},t.prototype.toString=function(t){if(10!=(t||10))throw new Error("only base 10 is supported");for(var e=this.buf,r=e[e.length-1].toString(),n=e.length-2;n>=0;--n)r+=(x+e[n]).toString().substring(1);return r},t.prototype.valueOf=function(){for(var t=this.buf,e=0,r=t.length-1;r>=0;--r)e=e*x+t[r];return e},t.prototype.simplify=function(){var t=this.buf;return 1==t.length?t[0]:this},t}(),A=/^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,R=/^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;function C(t,e){return t.length>e&&(t=t.substring(0,e)+"…"),t}var P,I=function(){function t(e,r){this.hexDigits="0123456789ABCDEF",e instanceof t?(this.enc=e.enc,this.pos=e.pos):(this.enc=e,this.pos=r)}return t.prototype.get=function(t){if(void 0===t&&(t=this.pos++),t>=this.enc.length)throw new Error("Requesting byte offset "+t+" on a stream of length "+this.enc.length);return"string"==typeof this.enc?this.enc.charCodeAt(t):this.enc[t]},t.prototype.hexByte=function(t){return this.hexDigits.charAt(t>>4&15)+this.hexDigits.charAt(15&t)},t.prototype.hexDump=function(t,e,r){for(var n="",i=t;i<e;++i)if(n+=this.hexByte(this.get(i)),!0!==r)switch(15&i){case 7:n+="  ";break;case 15:n+="\n";break;default:n+=" "}return n},t.prototype.isASCII=function(t,e){for(var r=t;r<e;++r){var n=this.get(r);if(n<32||n>176)return!1}return!0},t.prototype.parseStringISO=function(t,e){for(var r="",n=t;n<e;++n)r+=String.fromCharCode(this.get(n));return r},t.prototype.parseStringUTF=function(t,e){for(var r="",n=t;n<e;){var i=this.get(n++);r+=i<128?String.fromCharCode(i):i>191&&i<224?String.fromCharCode((31&i)<<6|63&this.get(n++)):String.fromCharCode((15&i)<<12|(63&this.get(n++))<<6|63&this.get(n++))}return r},t.prototype.parseStringBMP=function(t,e){for(var r,n,i="",o=t;o<e;)r=this.get(o++),n=this.get(o++),i+=String.fromCharCode(r<<8|n);return i},t.prototype.parseTime=function(t,e,r){var n=this.parseStringISO(t,e),i=(r?A:R).exec(n);return i?(r&&(i[1]=+i[1],i[1]+=+i[1]<70?2e3:1900),n=i[1]+"-"+i[2]+"-"+i[3]+" "+i[4],i[5]&&(n+=":"+i[5],i[6]&&(n+=":"+i[6],i[7]&&(n+="."+i[7]))),i[8]&&(n+=" UTC","Z"!=i[8]&&(n+=i[8],i[9]&&(n+=":"+i[9]))),n):"Unrecognized time: "+n},t.prototype.parseInteger=function(t,e){for(var r,n=this.get(t),i=n>127,o=i?255:0,s="";n==o&&++t<e;)n=this.get(t);if(0==(r=e-t))return i?-1:0;if(r>4){for(s=n,r<<=3;0==(128&(+s^o));)s=+s<<1,--r;s="("+r+" bit)\n"}i&&(n-=256);for(var a=new j(n),u=t+1;u<e;++u)a.mulAdd(256,this.get(u));return s+a.toString()},t.prototype.parseBitString=function(t,e,r){for(var n=this.get(t),i="("+((e-t-1<<3)-n)+" bit)\n",o="",s=t+1;s<e;++s){for(var a=this.get(s),u=s==e-1?n:0,c=7;c>=u;--c)o+=a>>c&1?"1":"0";if(o.length>r)return i+C(o,r)}return i+o},t.prototype.parseOctetString=function(t,e,r){if(this.isASCII(t,e))return C(this.parseStringISO(t,e),r);var n=e-t,i="("+n+" byte)\n";n>(r/=2)&&(e=t+r);for(var o=t;o<e;++o)i+=this.hexByte(this.get(o));return n>r&&(i+="…"),i},t.prototype.parseOID=function(t,e,r){for(var n="",i=new j,o=0,s=t;s<e;++s){var a=this.get(s);if(i.mulAdd(128,127&a),o+=7,!(128&a)){if(""===n)if((i=i.simplify())instanceof j)i.sub(80),n="2."+i.toString();else{var u=i<80?i<40?0:1:2;n=u+"."+(i-40*u)}else n+="."+i.toString();if(n.length>r)return C(n,r);i=new j,o=0}}return o>0&&(n+=".incomplete"),n},t}(),N=function(){function t(t,e,r,n,i){if(!(n instanceof V))throw new Error("Invalid tag value.");this.stream=t,this.header=e,this.length=r,this.tag=n,this.sub=i}return t.prototype.typeName=function(){switch(this.tag.tagClass){case 0:switch(this.tag.tagNumber){case 0:return"EOC";case 1:return"BOOLEAN";case 2:return"INTEGER";case 3:return"BIT_STRING";case 4:return"OCTET_STRING";case 5:return"NULL";case 6:return"OBJECT_IDENTIFIER";case 7:return"ObjectDescriptor";case 8:return"EXTERNAL";case 9:return"REAL";case 10:return"ENUMERATED";case 11:return"EMBEDDED_PDV";case 12:return"UTF8String";case 16:return"SEQUENCE";case 17:return"SET";case 18:return"NumericString";case 19:return"PrintableString";case 20:return"TeletexString";case 21:return"VideotexString";case 22:return"IA5String";case 23:return"UTCTime";case 24:return"GeneralizedTime";case 25:return"GraphicString";case 26:return"VisibleString";case 27:return"GeneralString";case 28:return"UniversalString";case 30:return"BMPString"}return"Universal_"+this.tag.tagNumber.toString();case 1:return"Application_"+this.tag.tagNumber.toString();case 2:return"["+this.tag.tagNumber.toString()+"]";case 3:return"Private_"+this.tag.tagNumber.toString()}},t.prototype.content=function(t){if(void 0===this.tag)return null;void 0===t&&(t=1/0);var e=this.posContent(),r=Math.abs(this.length);if(!this.tag.isUniversal())return null!==this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+r,t);switch(this.tag.tagNumber){case 1:return 0===this.stream.get(e)?"false":"true";case 2:return this.stream.parseInteger(e,e+r);case 3:return this.sub?"("+this.sub.length+" elem)":this.stream.parseBitString(e,e+r,t);case 4:return this.sub?"("+this.sub.length+" elem)":this.stream.parseOctetString(e,e+r,t);case 6:return this.stream.parseOID(e,e+r,t);case 16:case 17:return null!==this.sub?"("+this.sub.length+" elem)":"(no elem)";case 12:return C(this.stream.parseStringUTF(e,e+r),t);case 18:case 19:case 20:case 21:case 22:case 26:return C(this.stream.parseStringISO(e,e+r),t);case 30:return C(this.stream.parseStringBMP(e,e+r),t);case 23:case 24:return this.stream.parseTime(e,e+r,23==this.tag.tagNumber)}return null},t.prototype.toString=function(){return this.typeName()+"@"+this.stream.pos+"[header:"+this.header+",length:"+this.length+",sub:"+(null===this.sub?"null":this.sub.length)+"]"},t.prototype.toPrettyString=function(t){void 0===t&&(t="");var e=t+this.typeName()+" @"+this.stream.pos;if(this.length>=0&&(e+="+"),e+=this.length,this.tag.tagConstructed?e+=" (constructed)":!this.tag.isUniversal()||3!=this.tag.tagNumber&&4!=this.tag.tagNumber||null===this.sub||(e+=" (encapsulates)"),e+="\n",null!==this.sub){t+="  ";for(var r=0,n=this.sub.length;r<n;++r)e+=this.sub[r].toPrettyString(t)}return e},t.prototype.posStart=function(){return this.stream.pos},t.prototype.posContent=function(){return this.stream.pos+this.header},t.prototype.posEnd=function(){return this.stream.pos+this.header+Math.abs(this.length)},t.prototype.toHexString=function(){return this.stream.hexDump(this.posStart(),this.posEnd(),!0)},t.decodeLength=function(t){var e=t.get(),r=127&e;if(r==e)return r;if(r>6)throw new Error("Length over 48 bits not supported at position "+(t.pos-1));if(0===r)return null;e=0;for(var n=0;n<r;++n)e=256*e+t.get();return e},t.prototype.getHexStringValue=function(){var t=this.toHexString(),e=2*this.header,r=2*this.length;return t.substr(e,r)},t.decode=function(e){var r;r=e instanceof I?e:new I(e,0);var n=new I(r),i=new V(r),o=t.decodeLength(r),s=r.pos,a=s-n.pos,u=null,c=function(){var e=[];if(null!==o){for(var n=s+o;r.pos<n;)e[e.length]=t.decode(r);if(r.pos!=n)throw new Error("Content size is not correct for container starting at offset "+s)}else try{for(;;){var i=t.decode(r);if(i.tag.isEOC())break;e[e.length]=i}o=s-r.pos}catch(t){throw new Error("Exception while decoding undefined length content: "+t)}return e};if(i.tagConstructed)u=c();else if(i.isUniversal()&&(3==i.tagNumber||4==i.tagNumber))try{if(3==i.tagNumber&&0!=r.get())throw new Error("BIT STRINGs with unused bits cannot encapsulate.");u=c();for(var h=0;h<u.length;++h)if(u[h].tag.isEOC())throw new Error("EOC is not supposed to be actual content.")}catch(t){u=null}if(null===u){if(null===o)throw new Error("We can't skip over an invalid tag with undefined length at offset "+s);r.pos=s+Math.abs(o)}return new t(n,a,o,i,u)},t}(),V=function(){function t(t){var e=t.get();if(this.tagClass=e>>6,this.tagConstructed=0!=(32&e),this.tagNumber=31&e,31==this.tagNumber){var r=new j;do{e=t.get(),r.mulAdd(128,127&e)}while(128&e);this.tagNumber=r.simplify()}}return t.prototype.isUniversal=function(){return 0===this.tagClass},t.prototype.isEOC=function(){return 0===this.tagClass&&0===this.tagNumber},t}(),M=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],B=(1<<26)/M[M.length-1],_=function(){function t(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}return t.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,n=(1<<e)-1,i=!1,o="",s=this.t,a=this.DB-s*this.DB%e;if(s-- >0)for(a<this.DB&&(r=this[s]>>a)>0&&(i=!0,o=p(r));s>=0;)a<e?(r=(this[s]&(1<<a)-1)<<e-a,r|=this[--s]>>(a+=this.DB-e)):(r=this[s]>>(a-=e)&n,a<=0&&(a+=this.DB,--s)),r>0&&(i=!0),i&&(o+=p(r));return i?o:"0"},t.prototype.negate=function(){var e=q();return t.ZERO.subTo(this,e),e},t.prototype.abs=function(){return this.s<0?this.negate():this},t.prototype.compareTo=function(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(0!=(e=r-t.t))return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0},t.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+J(this[this.t-1]^this.s&this.DM)},t.prototype.mod=function(e){var r=q();return this.abs().divRemTo(e,null,r),this.s<0&&r.compareTo(t.ZERO)>0&&e.subTo(r,r),r},t.prototype.modPowInt=function(t,e){var r;return r=t<256||e.isEven()?new k(e):new U(e),this.exp(t,r)},t.prototype.clone=function(){var t=q();return this.copyTo(t),t},t.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},t.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},t.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},t.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},t.prototype.toByteArray=function(){var t=this.t,e=[];e[0]=this.s;var r,n=this.DB-t*this.DB%8,i=0;if(t-- >0)for(n<this.DB&&(r=this[t]>>n)!=(this.s&this.DM)>>n&&(e[i++]=r|this.s<<this.DB-n);t>=0;)n<8?(r=(this[t]&(1<<n)-1)<<8-n,r|=this[--t]>>(n+=this.DB-8)):(r=this[t]>>(n-=8)&255,n<=0&&(n+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==i&&(128&this.s)!=(128&r)&&++i,(i>0||r!=this.s)&&(e[i++]=r);return e},t.prototype.equals=function(t){return 0==this.compareTo(t)},t.prototype.min=function(t){return this.compareTo(t)<0?this:t},t.prototype.max=function(t){return this.compareTo(t)>0?this:t},t.prototype.and=function(t){var e=q();return this.bitwiseTo(t,d,e),e},t.prototype.or=function(t){var e=q();return this.bitwiseTo(t,g,e),e},t.prototype.xor=function(t){var e=q();return this.bitwiseTo(t,y,e),e},t.prototype.andNot=function(t){var e=q();return this.bitwiseTo(t,v,e),e},t.prototype.not=function(){for(var t=q(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t},t.prototype.shiftLeft=function(t){var e=q();return t<0?this.rShiftTo(-t,e):this.lShiftTo(t,e),e},t.prototype.shiftRight=function(t){var e=q();return t<0?this.lShiftTo(-t,e):this.rShiftTo(t,e),e},t.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+m(this[t]);return this.s<0?this.t*this.DB:-1},t.prototype.bitCount=function(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=b(this[r]^e);return t},t.prototype.testBit=function(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)},t.prototype.setBit=function(t){return this.changeBit(t,g)},t.prototype.clearBit=function(t){return this.changeBit(t,v)},t.prototype.flipBit=function(t){return this.changeBit(t,y)},t.prototype.add=function(t){var e=q();return this.addTo(t,e),e},t.prototype.subtract=function(t){var e=q();return this.subTo(t,e),e},t.prototype.multiply=function(t){var e=q();return this.multiplyTo(t,e),e},t.prototype.divide=function(t){var e=q();return this.divRemTo(t,e,null),e},t.prototype.remainder=function(t){var e=q();return this.divRemTo(t,null,e),e},t.prototype.divideAndRemainder=function(t){var e=q(),r=q();return this.divRemTo(t,e,r),[e,r]},t.prototype.modPow=function(t,e){var r,n,i=t.bitLength(),o=G(1);if(i<=0)return o;r=i<18?1:i<48?3:i<144?4:i<768?5:6,n=i<8?new k(e):e.isEven()?new H(e):new U(e);var s=[],a=3,u=r-1,c=(1<<r)-1;if(s[1]=n.convert(this),r>1){var h=q();for(n.sqrTo(s[1],h);a<=c;)s[a]=q(),n.mulTo(h,s[a-2],s[a]),a+=2}var l,f,p=t.t-1,d=!0,g=q();for(i=J(t[p])-1;p>=0;){for(i>=u?l=t[p]>>i-u&c:(l=(t[p]&(1<<i+1)-1)<<u-i,p>0&&(l|=t[p-1]>>this.DB+i-u)),a=r;0==(1&l);)l>>=1,--a;if((i-=a)<0&&(i+=this.DB,--p),d)s[l].copyTo(o),d=!1;else{for(;a>1;)n.sqrTo(o,g),n.sqrTo(g,o),a-=2;a>0?n.sqrTo(o,g):(f=o,o=g,g=f),n.mulTo(g,s[l],o)}for(;p>=0&&0==(t[p]&1<<i);)n.sqrTo(o,g),f=o,o=g,g=f,--i<0&&(i=this.DB-1,--p)}return n.revert(o)},t.prototype.modInverse=function(e){var r=e.isEven();if(this.isEven()&&r||0==e.signum())return t.ZERO;for(var n=e.clone(),i=this.clone(),o=G(1),s=G(0),a=G(0),u=G(1);0!=n.signum();){for(;n.isEven();)n.rShiftTo(1,n),r?(o.isEven()&&s.isEven()||(o.addTo(this,o),s.subTo(e,s)),o.rShiftTo(1,o)):s.isEven()||s.subTo(e,s),s.rShiftTo(1,s);for(;i.isEven();)i.rShiftTo(1,i),r?(a.isEven()&&u.isEven()||(a.addTo(this,a),u.subTo(e,u)),a.rShiftTo(1,a)):u.isEven()||u.subTo(e,u),u.rShiftTo(1,u);n.compareTo(i)>=0?(n.subTo(i,n),r&&o.subTo(a,o),s.subTo(u,s)):(i.subTo(n,i),r&&a.subTo(o,a),u.subTo(s,u))}return 0!=i.compareTo(t.ONE)?t.ZERO:u.compareTo(e)>=0?u.subtract(e):u.signum()<0?(u.addTo(e,u),u.signum()<0?u.add(e):u):u},t.prototype.pow=function(t){return this.exp(t,new L)},t.prototype.gcd=function(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var n=e;e=r,r=n}var i=e.getLowestSetBit(),o=r.getLowestSetBit();if(o<0)return e;for(i<o&&(o=i),o>0&&(e.rShiftTo(o,e),r.rShiftTo(o,r));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=r.getLowestSetBit())>0&&r.rShiftTo(i,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return o>0&&r.lShiftTo(o,r),r},t.prototype.isProbablePrime=function(t){var e,r=this.abs();if(1==r.t&&r[0]<=M[M.length-1]){for(e=0;e<M.length;++e)if(r[0]==M[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<M.length;){for(var n=M[e],i=e+1;i<M.length&&n<B;)n*=M[i++];for(n=r.modInt(n);e<i;)if(n%M[e++]==0)return!1}return r.millerRabin(t)},t.prototype.copyTo=function(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s},t.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},t.prototype.fromString=function(e,r){var n;if(16==r)n=4;else if(8==r)n=3;else if(256==r)n=8;else if(2==r)n=1;else if(32==r)n=5;else{if(4!=r)return void this.fromRadix(e,r);n=2}this.t=0,this.s=0;for(var i=e.length,o=!1,s=0;--i>=0;){var a=8==n?255&+e[i]:Z(e,i);a<0?"-"==e.charAt(i)&&(o=!0):(o=!1,0==s?this[this.t++]=a:s+n>this.DB?(this[this.t-1]|=(a&(1<<this.DB-s)-1)<<s,this[this.t++]=a>>this.DB-s):this[this.t-1]|=a<<s,(s+=n)>=this.DB&&(s-=this.DB))}8==n&&0!=(128&+e[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&t.ZERO.subTo(this,this)},t.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},t.prototype.dlShiftTo=function(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s},t.prototype.drShiftTo=function(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s},t.prototype.lShiftTo=function(t,e){for(var r=t%this.DB,n=this.DB-r,i=(1<<n)-1,o=Math.floor(t/this.DB),s=this.s<<r&this.DM,a=this.t-1;a>=0;--a)e[a+o+1]=this[a]>>n|s,s=(this[a]&i)<<r;for(a=o-1;a>=0;--a)e[a]=0;e[o]=s,e.t=this.t+o+1,e.s=this.s,e.clamp()},t.prototype.rShiftTo=function(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var n=t%this.DB,i=this.DB-n,o=(1<<n)-1;e[0]=this[r]>>n;for(var s=r+1;s<this.t;++s)e[s-r-1]|=(this[s]&o)<<i,e[s-r]=this[s]>>n;n>0&&(e[this.t-r-1]|=(this.s&o)<<i),e.t=this.t-r,e.clamp()}},t.prototype.subTo=function(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);r<i;)n+=this[r]-t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=n<0?-1:0,n<-1?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()},t.prototype.multiplyTo=function(e,r){var n=this.abs(),i=e.abs(),o=n.t;for(r.t=o+i.t;--o>=0;)r[o]=0;for(o=0;o<i.t;++o)r[o+n.t]=n.am(0,i[o],r,o,0,n.t);r.s=0,r.clamp(),this.s!=e.s&&t.ZERO.subTo(r,r)},t.prototype.squareTo=function(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()},t.prototype.divRemTo=function(e,r,n){var i=e.abs();if(!(i.t<=0)){var o=this.abs();if(o.t<i.t)return null!=r&&r.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=q());var s=q(),a=this.s,u=e.s,c=this.DB-J(i[i.t-1]);c>0?(i.lShiftTo(c,s),o.lShiftTo(c,n)):(i.copyTo(s),o.copyTo(n));var h=s.t,l=s[h-1];if(0!=l){var f=l*(1<<this.F1)+(h>1?s[h-2]>>this.F2:0),p=this.FV/f,d=(1<<this.F1)/f,g=1<<this.F2,y=n.t,v=y-h,m=null==r?q():r;for(s.dlShiftTo(v,m),n.compareTo(m)>=0&&(n[n.t++]=1,n.subTo(m,n)),t.ONE.dlShiftTo(h,m),m.subTo(s,s);s.t<h;)s[s.t++]=0;for(;--v>=0;){var b=n[--y]==l?this.DM:Math.floor(n[y]*p+(n[y-1]+g)*d);if((n[y]+=s.am(0,b,n,v,0,h))<b)for(s.dlShiftTo(v,m),n.subTo(m,n);n[y]<--b;)n.subTo(m,n)}null!=r&&(n.drShiftTo(h,r),a!=u&&t.ZERO.subTo(r,r)),n.t=h,n.clamp(),c>0&&n.rShiftTo(c,n),a<0&&t.ZERO.subTo(n,n)}}},t.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return(e=(e=(e=(e=e*(2-(15&t)*e)&15)*(2-(255&t)*e)&255)*(2-((65535&t)*e&65535))&65535)*(2-t*e%this.DV)%this.DV)>0?this.DV-e:-e},t.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},t.prototype.exp=function(e,r){if(e>4294967295||e<1)return t.ONE;var n=q(),i=q(),o=r.convert(this),s=J(e)-1;for(o.copyTo(n);--s>=0;)if(r.sqrTo(n,i),(e&1<<s)>0)r.mulTo(i,o,n);else{var a=n;n=i,i=a}return r.revert(n)},t.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},t.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),n=G(r),i=q(),o=q(),s="";for(this.divRemTo(n,i,o);i.signum()>0;)s=(r+o.intValue()).toString(t).substr(1)+s,i.divRemTo(n,i,o);return o.intValue().toString(t)+s},t.prototype.fromRadix=function(e,r){this.fromInt(0),null==r&&(r=10);for(var n=this.chunkSize(r),i=Math.pow(r,n),o=!1,s=0,a=0,u=0;u<e.length;++u){var c=Z(e,u);c<0?"-"==e.charAt(u)&&0==this.signum()&&(o=!0):(a=r*a+c,++s>=n&&(this.dMultiply(i),this.dAddOffset(a,0),s=0,a=0))}s>0&&(this.dMultiply(Math.pow(r,s)),this.dAddOffset(a,0)),o&&t.ZERO.subTo(this,this)},t.prototype.fromNumber=function(e,r,n){if("number"==typeof r)if(e<2)this.fromInt(1);else for(this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),g,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(r);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(t.ONE.shiftLeft(e-1),this);else{var i=[],o=7&e;i.length=1+(e>>3),r.nextBytes(i),o>0?i[0]&=(1<<o)-1:i[0]=0,this.fromString(i,256)}},t.prototype.bitwiseTo=function(t,e,r){var n,i,o=Math.min(t.t,this.t);for(n=0;n<o;++n)r[n]=e(this[n],t[n]);if(t.t<this.t){for(i=t.s&this.DM,n=o;n<this.t;++n)r[n]=e(this[n],i);r.t=this.t}else{for(i=this.s&this.DM,n=o;n<t.t;++n)r[n]=e(i,t[n]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()},t.prototype.changeBit=function(e,r){var n=t.ONE.shiftLeft(e);return this.bitwiseTo(n,r,n),n},t.prototype.addTo=function(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);r<i;)n+=this[r]+t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t[r],e[r++]=n&this.DM,n>>=this.DB;n+=t.s}e.s=n<0?-1:0,n>0?e[r++]=n:n<-1&&(e[r++]=this.DV+n),e.t=r,e.clamp()},t.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},t.prototype.dAddOffset=function(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}},t.prototype.multiplyLowerTo=function(t,e,r){var n=Math.min(this.t+t.t,e);for(r.s=0,r.t=n;n>0;)r[--n]=0;for(var i=r.t-this.t;n<i;++n)r[n+this.t]=this.am(0,t[n],r,n,0,this.t);for(i=Math.min(t.t,e);n<i;++n)this.am(0,t[n],r,n,0,e-n);r.clamp()},t.prototype.multiplyUpperTo=function(t,e,r){--e;var n=r.t=this.t+t.t-e;for(r.s=0;--n>=0;)r[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)r[this.t+n-e]=this.am(e-n,t[n],r,0,0,this.t+n-e);r.clamp(),r.drShiftTo(1,r)},t.prototype.modInt=function(t){if(t<=0)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var n=this.t-1;n>=0;--n)r=(e*r+this[n])%t;return r},t.prototype.millerRabin=function(e){var r=this.subtract(t.ONE),n=r.getLowestSetBit();if(n<=0)return!1;var i=r.shiftRight(n);(e=e+1>>1)>M.length&&(e=M.length);for(var o=q(),s=0;s<e;++s){o.fromInt(M[Math.floor(Math.random()*M.length)]);var a=o.modPow(i,this);if(0!=a.compareTo(t.ONE)&&0!=a.compareTo(r)){for(var u=1;u++<n&&0!=a.compareTo(r);)if(0==(a=a.modPowInt(2,this)).compareTo(t.ONE))return!1;if(0!=a.compareTo(r))return!1}}return!0},t.prototype.square=function(){var t=q();return this.squareTo(t),t},t.prototype.gcda=function(t,e){var r=this.s<0?this.negate():this.clone(),n=t.s<0?t.negate():t.clone();if(r.compareTo(n)<0){var i=r;r=n,n=i}var o=r.getLowestSetBit(),s=n.getLowestSetBit();if(s<0)e(r);else{o<s&&(s=o),s>0&&(r.rShiftTo(s,r),n.rShiftTo(s,n));var a=function(){(o=r.getLowestSetBit())>0&&r.rShiftTo(o,r),(o=n.getLowestSetBit())>0&&n.rShiftTo(o,n),r.compareTo(n)>=0?(r.subTo(n,r),r.rShiftTo(1,r)):(n.subTo(r,n),n.rShiftTo(1,n)),r.signum()>0?setTimeout(a,0):(s>0&&n.lShiftTo(s,n),setTimeout((function(){e(n)}),0))};setTimeout(a,10)}},t.prototype.fromNumberAsync=function(e,r,n,i){if("number"==typeof r)if(e<2)this.fromInt(1);else{this.fromNumber(e,n),this.testBit(e-1)||this.bitwiseTo(t.ONE.shiftLeft(e-1),g,this),this.isEven()&&this.dAddOffset(1,0);var o=this,s=function(){o.dAddOffset(2,0),o.bitLength()>e&&o.subTo(t.ONE.shiftLeft(e-1),o),o.isProbablePrime(r)?setTimeout((function(){i()}),0):setTimeout(s,0)};setTimeout(s,0)}else{var a=[],u=7&e;a.length=1+(e>>3),r.nextBytes(a),u>0?a[0]&=(1<<u)-1:a[0]=0,this.fromString(a,256)}},t}(),L=function(){function t(){}return t.prototype.convert=function(t){return t},t.prototype.revert=function(t){return t},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r)},t.prototype.sqrTo=function(t,e){t.squareTo(e)},t}(),k=function(){function t(t){this.m=t}return t.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),U=function(){function t(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}return t.prototype.convert=function(t){var e=q();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(_.ZERO)>0&&this.m.subTo(e,e),e},t.prototype.revert=function(t){var e=q();return t.copyTo(e),this.reduce(e),e},t.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],n=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=e+this.m.t]+=this.m.am(0,n,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}(),H=function(){function t(t){this.m=t,this.r2=q(),this.q3=q(),_.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t)}return t.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=q();return t.copyTo(e),this.reduce(e),e},t.prototype.revert=function(t){return t},t.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},t.prototype.mulTo=function(t,e,r){t.multiplyTo(e,r),this.reduce(r)},t.prototype.sqrTo=function(t,e){t.squareTo(e),this.reduce(e)},t}();function q(){return new _(null)}function F(t,e){return new _(t,e)}var z="undefined"!=typeof navigator;z&&"Microsoft Internet Explorer"==navigator.appName?(_.prototype.am=function(t,e,r,n,i,o){for(var s=32767&e,a=e>>15;--o>=0;){var u=32767&this[t],c=this[t++]>>15,h=a*u+c*s;i=((u=s*u+((32767&h)<<15)+r[n]+(1073741823&i))>>>30)+(h>>>15)+a*c+(i>>>30),r[n++]=1073741823&u}return i},P=30):z&&"Netscape"!=navigator.appName?(_.prototype.am=function(t,e,r,n,i,o){for(;--o>=0;){var s=e*this[t++]+r[n]+i;i=Math.floor(s/67108864),r[n++]=67108863&s}return i},P=26):(_.prototype.am=function(t,e,r,n,i,o){for(var s=16383&e,a=e>>14;--o>=0;){var u=16383&this[t],c=this[t++]>>14,h=a*u+c*s;i=((u=s*u+((16383&h)<<14)+r[n]+i)>>28)+(h>>14)+a*c,r[n++]=268435455&u}return i},P=28),_.prototype.DB=P,_.prototype.DM=(1<<P)-1,_.prototype.DV=1<<P,_.prototype.FV=Math.pow(2,52),_.prototype.F1=52-P,_.prototype.F2=2*P-52;var K,Y,$=[];for(K="0".charCodeAt(0),Y=0;Y<=9;++Y)$[K++]=Y;for(K="a".charCodeAt(0),Y=10;Y<36;++Y)$[K++]=Y;for(K="A".charCodeAt(0),Y=10;Y<36;++Y)$[K++]=Y;function Z(t,e){var r=$[t.charCodeAt(e)];return null==r?-1:r}function G(t){var e=q();return e.fromInt(t),e}function J(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}_.ZERO=G(0),_.ONE=G(1);var Q,W,X=function(){function t(){this.i=0,this.j=0,this.S=[]}return t.prototype.init=function(t){var e,r,n;for(e=0;e<256;++e)this.S[e]=e;for(r=0,e=0;e<256;++e)r=r+this.S[e]+t[e%t.length]&255,n=this.S[e],this.S[e]=this.S[r],this.S[r]=n;this.i=0,this.j=0},t.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]},t}(),tt=null;if(null==tt){tt=[],W=0;var et=void 0;if(window.crypto&&window.crypto.getRandomValues){var rt=new Uint32Array(256);for(window.crypto.getRandomValues(rt),et=0;et<rt.length;++et)tt[W++]=255&rt[et]}var nt=0,it=function(t){if((nt=nt||0)>=256||W>=256)window.removeEventListener?window.removeEventListener("mousemove",it,!1):window.detachEvent&&window.detachEvent("onmousemove",it);else try{var e=t.x+t.y;tt[W++]=255&e,nt+=1}catch(t){}};window.addEventListener?window.addEventListener("mousemove",it,!1):window.attachEvent&&window.attachEvent("onmousemove",it)}function ot(){if(null==Q){for(Q=new X;W<256;){var t=Math.floor(65536*Math.random());tt[W++]=255&t}for(Q.init(tt),W=0;W<tt.length;++W)tt[W]=0;W=0}return Q.next()}var st=function(){function t(){}return t.prototype.nextBytes=function(t){for(var e=0;e<t.length;++e)t[e]=ot()},t}(),at=function(){function t(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}return t.prototype.doPublic=function(t){return t.modPowInt(this.e,this.n)},t.prototype.doPrivate=function(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),r=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(r)<0;)e=e.add(this.p);return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)},t.prototype.setPublic=function(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=F(t,16),this.e=parseInt(e,16)):console.error("Invalid RSA public key")},t.prototype.encrypt=function(t){var e=this.n.bitLength()+7>>3,r=function(t,e){if(e<t.length+11)return console.error("Message too long for RSA"),null;for(var r=[],n=t.length-1;n>=0&&e>0;){var i=t.charCodeAt(n--);i<128?r[--e]=i:i>127&&i<2048?(r[--e]=63&i|128,r[--e]=i>>6|192):(r[--e]=63&i|128,r[--e]=i>>6&63|128,r[--e]=i>>12|224)}r[--e]=0;for(var o=new st,s=[];e>2;){for(s[0]=0;0==s[0];)o.nextBytes(s);r[--e]=s[0]}return r[--e]=2,r[--e]=0,new _(r)}(t,e);if(null==r)return null;var n=this.doPublic(r);if(null==n)return null;for(var i=n.toString(16),o=i.length,s=0;s<2*e-o;s++)i="0"+i;return i},t.prototype.setPrivate=function(t,e,r){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=F(t,16),this.e=parseInt(e,16),this.d=F(r,16)):console.error("Invalid RSA private key")},t.prototype.setPrivateEx=function(t,e,r,n,i,o,s,a){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=F(t,16),this.e=parseInt(e,16),this.d=F(r,16),this.p=F(n,16),this.q=F(i,16),this.dmp1=F(o,16),this.dmq1=F(s,16),this.coeff=F(a,16)):console.error("Invalid RSA private key")},t.prototype.generate=function(t,e){var r=new st,n=t>>1;this.e=parseInt(e,16);for(var i=new _(e,16);;){for(;this.p=new _(t-n,1,r),0!=this.p.subtract(_.ONE).gcd(i).compareTo(_.ONE)||!this.p.isProbablePrime(10););for(;this.q=new _(n,1,r),0!=this.q.subtract(_.ONE).gcd(i).compareTo(_.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var s=this.p.subtract(_.ONE),a=this.q.subtract(_.ONE),u=s.multiply(a);if(0==u.gcd(i).compareTo(_.ONE)){this.n=this.p.multiply(this.q),this.d=i.modInverse(u),this.dmp1=this.d.mod(s),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}},t.prototype.decrypt=function(t){var e=F(t,16),r=this.doPrivate(e);return null==r?null:function(t,e){for(var r=t.toByteArray(),n=0;n<r.length&&0==r[n];)++n;if(r.length-n!=e-1||2!=r[n])return null;for(++n;0!=r[n];)if(++n>=r.length)return null;for(var i="";++n<r.length;){var o=255&r[n];o<128?i+=String.fromCharCode(o):o>191&&o<224?(i+=String.fromCharCode((31&o)<<6|63&r[n+1]),++n):(i+=String.fromCharCode((15&o)<<12|(63&r[n+1])<<6|63&r[n+2]),n+=2)}return i}(r,this.n.bitLength()+7>>3)},t.prototype.generateAsync=function(t,e,r){var n=new st,i=t>>1;this.e=parseInt(e,16);var o=new _(e,16),s=this,a=function(){var e=function(){if(s.p.compareTo(s.q)<=0){var t=s.p;s.p=s.q,s.q=t}var e=s.p.subtract(_.ONE),n=s.q.subtract(_.ONE),i=e.multiply(n);0==i.gcd(o).compareTo(_.ONE)?(s.n=s.p.multiply(s.q),s.d=o.modInverse(i),s.dmp1=s.d.mod(e),s.dmq1=s.d.mod(n),s.coeff=s.q.modInverse(s.p),setTimeout((function(){r()}),0)):setTimeout(a,0)},u=function(){s.q=q(),s.q.fromNumberAsync(i,1,n,(function(){s.q.subtract(_.ONE).gcda(o,(function(t){0==t.compareTo(_.ONE)&&s.q.isProbablePrime(10)?setTimeout(e,0):setTimeout(u,0)}))}))},c=function(){s.p=q(),s.p.fromNumberAsync(t-i,1,n,(function(){s.p.subtract(_.ONE).gcda(o,(function(t){0==t.compareTo(_.ONE)&&s.p.isProbablePrime(10)?setTimeout(u,0):setTimeout(c,0)}))}))};setTimeout(c,0)};setTimeout(a,0)},t.prototype.sign=function(t,e,r){var n=function(t,e){if(e<t.length+22)return console.error("Message too long for RSA"),null;for(var r=e-t.length-6,n="",i=0;i<r;i+=2)n+="ff";return F("0001"+n+"00"+t,16)}((ut[r]||"")+e(t).toString(),this.n.bitLength()/4);if(null==n)return null;var i=this.doPrivate(n);if(null==i)return null;var o=i.toString(16);return 0==(1&o.length)?o:"0"+o},t.prototype.verify=function(t,e,r){var n=F(e,16),i=this.doPublic(n);return null==i?null:function(t){for(var e in ut)if(ut.hasOwnProperty(e)){var r=ut[e],n=r.length;if(t.substr(0,n)==r)return t.substr(n)}return t}(i.toString(16).replace(/^1f+00/,""))==r(t).toString()},t}(),ut={md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",ripemd160:"3021300906052b2403020105000414"},ct={};ct.lang={extend:function(t,e,r){if(!e||!t)throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");var n=function(){};if(n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.superclass=e.prototype,e.prototype.constructor==Object.prototype.constructor&&(e.prototype.constructor=e),r){var i;for(i in r)t.prototype[i]=r[i];var o=function(){},s=["toString","valueOf"];try{/MSIE/.test(navigator.userAgent)&&(o=function(t,e){for(i=0;i<s.length;i+=1){var r=s[i],n=e[r];"function"==typeof n&&n!=Object.prototype[r]&&(t[r]=n)}})}catch(t){}o(t.prototype,r)}}};var ht={};void 0!==ht.asn1&&ht.asn1||(ht.asn1={}),ht.asn1.ASN1Util=new function(){this.integerToByteHex=function(t){var e=t.toString(16);return e.length%2==1&&(e="0"+e),e},this.bigIntToMinTwosComplementsHex=function(t){var e=t.toString(16);if("-"!=e.substr(0,1))e.length%2==1?e="0"+e:e.match(/^[0-7]/)||(e="00"+e);else{var r=e.substr(1).length;r%2==1?r+=1:e.match(/^[0-7]/)||(r+=2);for(var n="",i=0;i<r;i++)n+="f";e=new _(n,16).xor(t).add(_.ONE).toString(16).replace(/^-/,"")}return e},this.getPEMStringFromHex=function(t,e){return hextopem(t,e)},this.newObject=function(t){var e=ht.asn1,r=e.DERBoolean,n=e.DERInteger,i=e.DERBitString,o=e.DEROctetString,s=e.DERNull,a=e.DERObjectIdentifier,u=e.DEREnumerated,c=e.DERUTF8String,h=e.DERNumericString,l=e.DERPrintableString,f=e.DERTeletexString,p=e.DERIA5String,d=e.DERUTCTime,g=e.DERGeneralizedTime,y=e.DERSequence,v=e.DERSet,m=e.DERTaggedObject,b=e.ASN1Util.newObject,S=Object.keys(t);if(1!=S.length)throw"key of param shall be only one.";var w=S[0];if(-1==":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+w+":"))throw"undefined key: "+w;if("bool"==w)return new r(t[w]);if("int"==w)return new n(t[w]);if("bitstr"==w)return new i(t[w]);if("octstr"==w)return new o(t[w]);if("null"==w)return new s(t[w]);if("oid"==w)return new a(t[w]);if("enum"==w)return new u(t[w]);if("utf8str"==w)return new c(t[w]);if("numstr"==w)return new h(t[w]);if("prnstr"==w)return new l(t[w]);if("telstr"==w)return new f(t[w]);if("ia5str"==w)return new p(t[w]);if("utctime"==w)return new d(t[w]);if("gentime"==w)return new g(t[w]);if("seq"==w){for(var O=t[w],T=[],E=0;E<O.length;E++){var D=b(O[E]);T.push(D)}return new y({array:T})}if("set"==w){for(O=t[w],T=[],E=0;E<O.length;E++)D=b(O[E]),T.push(D);return new v({array:T})}if("tag"==w){var x=t[w];if("[object Array]"===Object.prototype.toString.call(x)&&3==x.length){var j=b(x[2]);return new m({tag:x[0],explicit:x[1],obj:j})}var A={};if(void 0!==x.explicit&&(A.explicit=x.explicit),void 0!==x.tag&&(A.tag=x.tag),void 0===x.obj)throw"obj shall be specified for 'tag'.";return A.obj=b(x.obj),new m(A)}},this.jsonToASN1HEX=function(t){return this.newObject(t).getEncodedHex()}},ht.asn1.ASN1Util.oidHexToInt=function(t){for(var e="",r=parseInt(t.substr(0,2),16),n=(e=Math.floor(r/40)+"."+r%40,""),i=2;i<t.length;i+=2){var o=("00000000"+parseInt(t.substr(i,2),16).toString(2)).slice(-8);n+=o.substr(1,7),"0"==o.substr(0,1)&&(e=e+"."+new _(n,2).toString(10),n="")}return e},ht.asn1.ASN1Util.oidIntToHex=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new _(t,10).toString(2),i=7-n.length%7;7==i&&(i=0);for(var o="",s=0;s<i;s++)o+="0";for(n=o+n,s=0;s<n.length-1;s+=7){var a=n.substr(s,7);s!=n.length-7&&(a="1"+a),r+=e(parseInt(a,2))}return r};if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var n="",i=t.split("."),o=40*parseInt(i[0])+parseInt(i[1]);n+=e(o),i.splice(0,2);for(var s=0;s<i.length;s++)n+=r(i[s]);return n},ht.asn1.ASN1Object=function(){this.getLengthHexFromValue=function(){if(void 0===this.hV||null==this.hV)throw"this.hV is null or undefined.";if(this.hV.length%2==1)throw"value hex must be even length: n="+"".length+",v="+this.hV;var t=this.hV.length/2,e=t.toString(16);if(e.length%2==1&&(e="0"+e),t<128)return e;var r=e.length/2;if(r>15)throw"ASN.1 length too long to represent by 8x: n = "+t.toString(16);return(128+r).toString(16)+e},this.getEncodedHex=function(){return(null==this.hTLV||this.isModified)&&(this.hV=this.getFreshValueHex(),this.hL=this.getLengthHexFromValue(),this.hTLV=this.hT+this.hL+this.hV,this.isModified=!1),this.hTLV},this.getValueHex=function(){return this.getEncodedHex(),this.hV},this.getFreshValueHex=function(){return""}},ht.asn1.DERAbstractString=function(t){ht.asn1.DERAbstractString.superclass.constructor.call(this),this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(this.s)},this.setStringHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?this.setString(t):void 0!==t.str?this.setString(t.str):void 0!==t.hex&&this.setStringHex(t.hex))},ct.lang.extend(ht.asn1.DERAbstractString,ht.asn1.ASN1Object),ht.asn1.DERAbstractTime=function(t){ht.asn1.DERAbstractTime.superclass.constructor.call(this),this.localDateToUTC=function(t){return utc=t.getTime()+6e4*t.getTimezoneOffset(),new Date(utc)},this.formatDate=function(t,e,r){var n=this.zeroPadding,i=this.localDateToUTC(t),o=String(i.getFullYear());"utc"==e&&(o=o.substr(2,2));var s=o+n(String(i.getMonth()+1),2)+n(String(i.getDate()),2)+n(String(i.getHours()),2)+n(String(i.getMinutes()),2)+n(String(i.getSeconds()),2);if(!0===r){var a=i.getMilliseconds();if(0!=a){var u=n(String(a),3);s=s+"."+(u=u.replace(/[0]+$/,""))}}return s+"Z"},this.zeroPadding=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},this.getString=function(){return this.s},this.setString=function(t){this.hTLV=null,this.isModified=!0,this.s=t,this.hV=stohex(t)},this.setByDateValue=function(t,e,r,n,i,o){var s=new Date(Date.UTC(t,e-1,r,n,i,o,0));this.setByDate(s)},this.getFreshValueHex=function(){return this.hV}},ct.lang.extend(ht.asn1.DERAbstractTime,ht.asn1.ASN1Object),ht.asn1.DERAbstractStructured=function(t){ht.asn1.DERAbstractString.superclass.constructor.call(this),this.setByASN1ObjectArray=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array=t},this.appendASN1Object=function(t){this.hTLV=null,this.isModified=!0,this.asn1Array.push(t)},this.asn1Array=new Array,void 0!==t&&void 0!==t.array&&(this.asn1Array=t.array)},ct.lang.extend(ht.asn1.DERAbstractStructured,ht.asn1.ASN1Object),ht.asn1.DERBoolean=function(){ht.asn1.DERBoolean.superclass.constructor.call(this),this.hT="01",this.hTLV="0101ff"},ct.lang.extend(ht.asn1.DERBoolean,ht.asn1.ASN1Object),ht.asn1.DERInteger=function(t){ht.asn1.DERInteger.superclass.constructor.call(this),this.hT="02",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=ht.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new _(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.bigint?this.setByBigInteger(t.bigint):void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},ct.lang.extend(ht.asn1.DERInteger,ht.asn1.ASN1Object),ht.asn1.DERBitString=function(t){if(void 0!==t&&void 0!==t.obj){var e=ht.asn1.ASN1Util.newObject(t.obj);t.hex="00"+e.getEncodedHex()}ht.asn1.DERBitString.superclass.constructor.call(this),this.hT="03",this.setHexValueIncludingUnusedBits=function(t){this.hTLV=null,this.isModified=!0,this.hV=t},this.setUnusedBitsAndHexValue=function(t,e){if(t<0||7<t)throw"unused bits shall be from 0 to 7: u = "+t;var r="0"+t;this.hTLV=null,this.isModified=!0,this.hV=r+e},this.setByBinaryString=function(t){var e=8-(t=t.replace(/0+$/,"")).length%8;8==e&&(e=0);for(var r=0;r<=e;r++)t+="0";var n="";for(r=0;r<t.length-1;r+=8){var i=t.substr(r,8),o=parseInt(i,2).toString(16);1==o.length&&(o="0"+o),n+=o}this.hTLV=null,this.isModified=!0,this.hV="0"+e+n},this.setByBooleanArray=function(t){for(var e="",r=0;r<t.length;r++)1==t[r]?e+="1":e+="0";this.setByBinaryString(e)},this.newFalseArray=function(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=!1;return e},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t&&t.toLowerCase().match(/^[0-9a-f]+$/)?this.setHexValueIncludingUnusedBits(t):void 0!==t.hex?this.setHexValueIncludingUnusedBits(t.hex):void 0!==t.bin?this.setByBinaryString(t.bin):void 0!==t.array&&this.setByBooleanArray(t.array))},ct.lang.extend(ht.asn1.DERBitString,ht.asn1.ASN1Object),ht.asn1.DEROctetString=function(t){if(void 0!==t&&void 0!==t.obj){var e=ht.asn1.ASN1Util.newObject(t.obj);t.hex=e.getEncodedHex()}ht.asn1.DEROctetString.superclass.constructor.call(this,t),this.hT="04"},ct.lang.extend(ht.asn1.DEROctetString,ht.asn1.DERAbstractString),ht.asn1.DERNull=function(){ht.asn1.DERNull.superclass.constructor.call(this),this.hT="05",this.hTLV="0500"},ct.lang.extend(ht.asn1.DERNull,ht.asn1.ASN1Object),ht.asn1.DERObjectIdentifier=function(t){var e=function(t){var e=t.toString(16);return 1==e.length&&(e="0"+e),e},r=function(t){var r="",n=new _(t,10).toString(2),i=7-n.length%7;7==i&&(i=0);for(var o="",s=0;s<i;s++)o+="0";for(n=o+n,s=0;s<n.length-1;s+=7){var a=n.substr(s,7);s!=n.length-7&&(a="1"+a),r+=e(parseInt(a,2))}return r};ht.asn1.DERObjectIdentifier.superclass.constructor.call(this),this.hT="06",this.setValueHex=function(t){this.hTLV=null,this.isModified=!0,this.s=null,this.hV=t},this.setValueOidString=function(t){if(!t.match(/^[0-9.]+$/))throw"malformed oid string: "+t;var n="",i=t.split("."),o=40*parseInt(i[0])+parseInt(i[1]);n+=e(o),i.splice(0,2);for(var s=0;s<i.length;s++)n+=r(i[s]);this.hTLV=null,this.isModified=!0,this.s=null,this.hV=n},this.setValueName=function(t){var e=ht.asn1.x509.OID.name2oid(t);if(""===e)throw"DERObjectIdentifier oidName undefined: "+t;this.setValueOidString(e)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&("string"==typeof t?t.match(/^[0-2].[0-9.]+$/)?this.setValueOidString(t):this.setValueName(t):void 0!==t.oid?this.setValueOidString(t.oid):void 0!==t.hex?this.setValueHex(t.hex):void 0!==t.name&&this.setValueName(t.name))},ct.lang.extend(ht.asn1.DERObjectIdentifier,ht.asn1.ASN1Object),ht.asn1.DEREnumerated=function(t){ht.asn1.DEREnumerated.superclass.constructor.call(this),this.hT="0a",this.setByBigInteger=function(t){this.hTLV=null,this.isModified=!0,this.hV=ht.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)},this.setByInteger=function(t){var e=new _(String(t),10);this.setByBigInteger(e)},this.setValueHex=function(t){this.hV=t},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.int?this.setByInteger(t.int):"number"==typeof t?this.setByInteger(t):void 0!==t.hex&&this.setValueHex(t.hex))},ct.lang.extend(ht.asn1.DEREnumerated,ht.asn1.ASN1Object),ht.asn1.DERUTF8String=function(t){ht.asn1.DERUTF8String.superclass.constructor.call(this,t),this.hT="0c"},ct.lang.extend(ht.asn1.DERUTF8String,ht.asn1.DERAbstractString),ht.asn1.DERNumericString=function(t){ht.asn1.DERNumericString.superclass.constructor.call(this,t),this.hT="12"},ct.lang.extend(ht.asn1.DERNumericString,ht.asn1.DERAbstractString),ht.asn1.DERPrintableString=function(t){ht.asn1.DERPrintableString.superclass.constructor.call(this,t),this.hT="13"},ct.lang.extend(ht.asn1.DERPrintableString,ht.asn1.DERAbstractString),ht.asn1.DERTeletexString=function(t){ht.asn1.DERTeletexString.superclass.constructor.call(this,t),this.hT="14"},ct.lang.extend(ht.asn1.DERTeletexString,ht.asn1.DERAbstractString),ht.asn1.DERIA5String=function(t){ht.asn1.DERIA5String.superclass.constructor.call(this,t),this.hT="16"},ct.lang.extend(ht.asn1.DERIA5String,ht.asn1.DERAbstractString),ht.asn1.DERUTCTime=function(t){ht.asn1.DERUTCTime.superclass.constructor.call(this,t),this.hT="17",this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"utc"),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{12}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date))},ct.lang.extend(ht.asn1.DERUTCTime,ht.asn1.DERAbstractTime),ht.asn1.DERGeneralizedTime=function(t){ht.asn1.DERGeneralizedTime.superclass.constructor.call(this,t),this.hT="18",this.withMillis=!1,this.setByDate=function(t){this.hTLV=null,this.isModified=!0,this.date=t,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)},this.getFreshValueHex=function(){return void 0===this.date&&void 0===this.s&&(this.date=new Date,this.s=this.formatDate(this.date,"gen",this.withMillis),this.hV=stohex(this.s)),this.hV},void 0!==t&&(void 0!==t.str?this.setString(t.str):"string"==typeof t&&t.match(/^[0-9]{14}Z$/)?this.setString(t):void 0!==t.hex?this.setStringHex(t.hex):void 0!==t.date&&this.setByDate(t.date),!0===t.millis&&(this.withMillis=!0))},ct.lang.extend(ht.asn1.DERGeneralizedTime,ht.asn1.DERAbstractTime),ht.asn1.DERSequence=function(t){ht.asn1.DERSequence.superclass.constructor.call(this,t),this.hT="30",this.getFreshValueHex=function(){for(var t="",e=0;e<this.asn1Array.length;e++)t+=this.asn1Array[e].getEncodedHex();return this.hV=t,this.hV}},ct.lang.extend(ht.asn1.DERSequence,ht.asn1.DERAbstractStructured),ht.asn1.DERSet=function(t){ht.asn1.DERSet.superclass.constructor.call(this,t),this.hT="31",this.sortFlag=!0,this.getFreshValueHex=function(){for(var t=new Array,e=0;e<this.asn1Array.length;e++){var r=this.asn1Array[e];t.push(r.getEncodedHex())}return 1==this.sortFlag&&t.sort(),this.hV=t.join(""),this.hV},void 0!==t&&void 0!==t.sortflag&&0==t.sortflag&&(this.sortFlag=!1)},ct.lang.extend(ht.asn1.DERSet,ht.asn1.DERAbstractStructured),ht.asn1.DERTaggedObject=function(t){ht.asn1.DERTaggedObject.superclass.constructor.call(this),this.hT="a0",this.hV="",this.isExplicit=!0,this.asn1Object=null,this.setASN1Object=function(t,e,r){this.hT=e,this.isExplicit=t,this.asn1Object=r,this.isExplicit?(this.hV=this.asn1Object.getEncodedHex(),this.hTLV=null,this.isModified=!0):(this.hV=null,this.hTLV=r.getEncodedHex(),this.hTLV=this.hTLV.replace(/^../,e),this.isModified=!1)},this.getFreshValueHex=function(){return this.hV},void 0!==t&&(void 0!==t.tag&&(this.hT=t.tag),void 0!==t.explicit&&(this.isExplicit=t.explicit),void 0!==t.obj&&(this.asn1Object=t.obj,this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)))},ct.lang.extend(ht.asn1.DERTaggedObject,ht.asn1.ASN1Object);var lt,ft=(lt=function(t,e){return(lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}lt(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),pt=function(t){function e(r){var n=t.call(this)||this;return r&&("string"==typeof r?n.parseKey(r):(e.hasPrivateKeyProperty(r)||e.hasPublicKeyProperty(r))&&n.parsePropertiesFrom(r)),n}return ft(e,t),e.prototype.parseKey=function(t){try{var e=0,r=0,n=/^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(t)?function(t){var e;if(void 0===S){var r="0123456789ABCDEF",n=" \f\n\r\t \u2028\u2029";for(S={},e=0;e<16;++e)S[r.charAt(e)]=e;for(r=r.toLowerCase(),e=10;e<16;++e)S[r.charAt(e)]=e;for(e=0;e<n.length;++e)S[n.charAt(e)]=-1}var i=[],o=0,s=0;for(e=0;e<t.length;++e){var a=t.charAt(e);if("="==a)break;if(-1!=(a=S[a])){if(void 0===a)throw new Error("Illegal character at offset "+e);o|=a,++s>=2?(i[i.length]=o,o=0,s=0):o<<=4}}if(s)throw new Error("Hex encoding incomplete: 4 bits missing");return i}(t):D.unarmor(t),i=N.decode(n);if(3===i.sub.length&&(i=i.sub[2].sub[0]),9===i.sub.length){e=i.sub[1].getHexStringValue(),this.n=F(e,16),r=i.sub[2].getHexStringValue(),this.e=parseInt(r,16);var o=i.sub[3].getHexStringValue();this.d=F(o,16);var s=i.sub[4].getHexStringValue();this.p=F(s,16);var a=i.sub[5].getHexStringValue();this.q=F(a,16);var u=i.sub[6].getHexStringValue();this.dmp1=F(u,16);var c=i.sub[7].getHexStringValue();this.dmq1=F(c,16);var h=i.sub[8].getHexStringValue();this.coeff=F(h,16)}else{if(2!==i.sub.length)return!1;var l=i.sub[1].sub[0];e=l.sub[0].getHexStringValue(),this.n=F(e,16),r=l.sub[1].getHexStringValue(),this.e=parseInt(r,16)}return!0}catch(t){return!1}},e.prototype.getPrivateBaseKey=function(){var t={array:[new ht.asn1.DERInteger({int:0}),new ht.asn1.DERInteger({bigint:this.n}),new ht.asn1.DERInteger({int:this.e}),new ht.asn1.DERInteger({bigint:this.d}),new ht.asn1.DERInteger({bigint:this.p}),new ht.asn1.DERInteger({bigint:this.q}),new ht.asn1.DERInteger({bigint:this.dmp1}),new ht.asn1.DERInteger({bigint:this.dmq1}),new ht.asn1.DERInteger({bigint:this.coeff})]};return new ht.asn1.DERSequence(t).getEncodedHex()},e.prototype.getPrivateBaseKeyB64=function(){return O(this.getPrivateBaseKey())},e.prototype.getPublicBaseKey=function(){var t=new ht.asn1.DERSequence({array:[new ht.asn1.DERObjectIdentifier({oid:"1.2.840.113549.1.1.1"}),new ht.asn1.DERNull]}),e=new ht.asn1.DERSequence({array:[new ht.asn1.DERInteger({bigint:this.n}),new ht.asn1.DERInteger({int:this.e})]}),r=new ht.asn1.DERBitString({hex:"00"+e.getEncodedHex()});return new ht.asn1.DERSequence({array:[t,r]}).getEncodedHex()},e.prototype.getPublicBaseKeyB64=function(){return O(this.getPublicBaseKey())},e.wordwrap=function(t,e){if(!t)return t;var r="(.{1,"+(e=e||64)+"})( +|$\n?)|(.{1,"+e+"})";return t.match(RegExp(r,"g")).join("\n")},e.prototype.getPrivateKey=function(){var t="-----BEGIN RSA PRIVATE KEY-----\n";return(t+=e.wordwrap(this.getPrivateBaseKeyB64())+"\n")+"-----END RSA PRIVATE KEY-----"},e.prototype.getPublicKey=function(){var t="-----BEGIN PUBLIC KEY-----\n";return(t+=e.wordwrap(this.getPublicBaseKeyB64())+"\n")+"-----END PUBLIC KEY-----"},e.hasPublicKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")},e.hasPrivateKeyProperty=function(t){return(t=t||{}).hasOwnProperty("n")&&t.hasOwnProperty("e")&&t.hasOwnProperty("d")&&t.hasOwnProperty("p")&&t.hasOwnProperty("q")&&t.hasOwnProperty("dmp1")&&t.hasOwnProperty("dmq1")&&t.hasOwnProperty("coeff")},e.prototype.parsePropertiesFrom=function(t){this.n=t.n,this.e=t.e,t.hasOwnProperty("d")&&(this.d=t.d,this.p=t.p,this.q=t.q,this.dmp1=t.dmp1,this.dmq1=t.dmq1,this.coeff=t.coeff)},e}(at),dt=function(){function t(t){t=t||{},this.default_key_size=t.default_key_size?parseInt(t.default_key_size,10):1024,this.default_public_exponent=t.default_public_exponent||"010001",this.log=t.log||!1,this.key=null}return t.prototype.setKey=function(t){this.log&&this.key&&console.warn("A key was already set, overriding existing."),this.key=new pt(t)},t.prototype.setPrivateKey=function(t){this.setKey(t)},t.prototype.setPublicKey=function(t){this.setKey(t)},t.prototype.decrypt=function(t){try{return this.getKey().decrypt(T(t))}catch(t){return!1}},t.prototype.encrypt=function(t){try{return O(this.getKey().encrypt(t))}catch(t){return!1}},t.prototype.sign=function(t,e,r){try{return O(this.getKey().sign(t,e,r))}catch(t){return!1}},t.prototype.verify=function(t,e,r){try{return this.getKey().verify(t,T(e),r)}catch(t){return!1}},t.prototype.getKey=function(t){if(!this.key){if(this.key=new pt,t&&"[object Function]"==={}.toString.call(t))return void this.key.generateAsync(this.default_key_size,this.default_public_exponent,t);this.key.generate(this.default_key_size,this.default_public_exponent)}return this.key},t.prototype.getPrivateKey=function(){return this.getKey().getPrivateKey()},t.prototype.getPrivateKeyB64=function(){return this.getKey().getPrivateBaseKeyB64()},t.prototype.getPublicKey=function(){return this.getKey().getPublicKey()},t.prototype.getPublicKeyB64=function(){return this.getKey().getPublicBaseKeyB64()},t.version="3.1.0",t}(),gt={API_URL:"https://api.dnapayments.com",TEST_API_URL:"https://test-api.dnapayments.com",WS_URL:"wss://api.dnapayments.com/ws",TEST_WS_URL:"wss://test-api.dnapayments.com/ws"};function yt(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0,i=t.length;n<i;n++)r[n]=t.charCodeAt(n);return e}function vt(t){for(var e=new Uint8Array(t),r="",n=0;n<e.byteLength;n++)r+=String.fromCodePoint(e[n]);return r}function mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function bt(t){return t?"https://test-api.dnapayments.com":"https://api.dnapayments.com"}function St(t){return t?{apiUrl:gt.TEST_API_URL,wsUrl:gt.TEST_WS_URL}:{apiUrl:gt.API_URL,wsUrl:gt.TEST_WS_URL}}function wt(t){var e,r;e=(0,l.getTypeInfo)(f().types.UNIONPAY),f().addCard(Object.assign(Object.assign({},e),{lengths:[13].concat((r=e.lengths,function(t){if(Array.isArray(t))return mt(t)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return mt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?mt(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}));var n=f()(t.replace(/[^0-9\\.]+/g,""));return 1===n.length?n[0]:null}function Ot(t,e){var r=new dt({});r.setPublicKey(t);var n=JSON.stringify(e);return r.encrypt(n)}function Tt(t,e,r){return n=this,i=void 0,o=void 0,s=regeneratorRuntime.mark((function n(){var i,o,s,a,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.substring("-----BEGIN PUBLIC KEY-----".length,t.length-"-----END PUBLIC KEY-----".length),o=window.atob(i),s=yt(o),n.next=7,window.crypto.subtle.importKey("spki",s,{name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,["encrypt"]);case 7:return a=n.sent,n.next=10,c=JSON.stringify(r),h=a,l=e,c=yt(c),window.crypto.subtle.encrypt({name:"RSA-OAEP",label:(new TextEncoder).encode(l)},h,c);case 10:return u=n.sent,n.abrupt("return",window.btoa(vt(u)));case 12:case"end":return n.stop()}var c,h,l}),n)})),new(o||(o=Promise))((function(t,e){function r(t){try{u(s.next(t))}catch(t){e(t)}}function a(t){try{u(s.throw(t))}catch(t){e(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(r,a)}u((s=s.apply(n,i||[])).next())}));var n,i,o,s}function Et(){for(var t=[1,4,8,15,16,24,32,48],e=window&&window.screen?window.screen.colorDepth:0,r=0;t[++r]<=e;);return String(t[--r])}function Dt(){var t=window&&window.screen?String(window.screen.width):0;return t>768?"03":t>425?"02":"01"}function xt(){var t=window&&window.screen?String(window.screen.width):"",e=window&&window.screen?String(window.screen.height):"",r=window&&window.navigator?window.navigator.userAgent:"",n=!(!window||!window.navigator)&&navigator.javaEnabled(),i="";window&&window.navigator&&(i=window.navigator.language?window.navigator.language:window.navigator.browserLanguage);var o=new Date,s=String(o.getTimezoneOffset());return{screenWidth:t,screenHeight:e,screenColorDepth:Et(),userAgent:r,timeZone:s,language:i,javaEnabled:n,challengeWindowSize:Dt(),acceptHeader:"text/html"}}var jt=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))};function At(t,e){return jt(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,h.noThrow)((0,h.apiCheck)((0,h.get)("".concat(bt(e),"/payments/form/configuration"),null,[["Authorization","Bearer "+t]]))));case 1:case"end":return r.stop()}}),r)})))}function Rt(t,e,r,n){return jt(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,h.noThrow)((0,h.apiCheck)((0,h.post)("".concat(bt(e),"/transaction/iinLookup"),{packet:Ot(r,{pan:n})},[["Authorization","Bearer "+t]]))));case 1:case"end":return i.stop()}}),i)})))}function Ct(t,e,r){return jt(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="".concat(bt(e),"/payment/cryptopay"),n.t0=h.check,n.next=4,(0,h.noThrow)((0,h.post)(i,r,[["Authorization","Bearer "+t]]));case 4:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 6:case"end":return n.stop()}}),n)})))}function Pt(t,e,r){return jt(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="".concat(bt(e),"/v2/payments"),n.t0=h.check,n.next=4,(0,h.noThrow)((0,h.post)(i,r,[["Authorization","Bearer "+t]]));case 4:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1));case 6:case"end":return n.stop()}}),n)})))}function It(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Nt=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};function Vt(t,e){return e?It({},t,parseFloat(String(e))):{}}function Mt(t,e){return e?It({},t,String(e)):{}}function Bt(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"string";return"number"===r?Vt(t,e):"string"===r?Mt(t,e):e?It({},t,e):{}}function _t(t){var e;return"paymentSettings"in t&&(null===(e=null==t?void 0:t.paymentSettings)||void 0===e?void 0:e.terminalId)?Ht(t):t}function Lt(t){var e;return"paymentSettings"in t&&(null===(e=null==t?void 0:t.paymentSettings)||void 0===e?void 0:e.terminalId)?t:Ut(t)}function kt(t){if(!t)return null;var e=t.region,r=Nt(t,["region"]);return Object.assign(Object.assign({},r),e&&(null==e?void 0:e.length)<4?{region:e}:{})}function Ut(t){var e=t.transactionType,r=t.currency,n=t.invoiceId,i=t.terminal,o=t.description,s=t.merchantCustomData,a=t.entryMode,u=t.avsHouseMatrix,c=t.avsPostCodeMatrix,h=t.PAMatrix,l=t.CSCMatrix,f=t.postLink,p=t.failurePostLink,d=t.backLink,g=t.failureBackLink,y=t.accountId,v=t.accountFirstName,m=t.accountLastName,b=t.accountStreet1,S=t.accountStreet2,w=t.accountPostalCode,O=t.accountCity,T=t.phone,E=t.accountCountry,D=t.shippingAddress,x=t.accountEmail,j=t.recurringFrequency,A=t.recurringExpirationDate,R=t.periodicType,C=t.numberOfInstallments,P=t.sequenceType,I=t.merchantName,N=t.merchantNumber,V=t.merchantURL,M=t.merchantDepartmentID,B=t.merchantStoreID,_=t.visaMID,L=t.masterCardMID,k=t.amexMID,U=t.CVC2RC,H=t.paymentTo,q=t.taxAmount,F=t.deliveryType,z=Nt(t,["transactionType","currency","invoiceId","terminal","description","merchantCustomData","entryMode","avsHouseMatrix","avsPostCodeMatrix","PAMatrix","CSCMatrix","postLink","failurePostLink","backLink","failureBackLink","accountId","accountFirstName","accountLastName","accountStreet1","accountStreet2","accountPostalCode","accountCity","phone","accountCountry","shippingAddress","accountEmail","recurringFrequency","recurringExpirationDate","periodicType","numberOfInstallments","sequenceType","merchantName","merchantNumber","merchantURL","merchantDepartmentID","merchantStoreID","visaMID","masterCardMID","amexMID","CVC2RC","paymentTo","taxAmount","deliveryType"]);return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},z),{invoiceId:n?String(n):"",amount:parseFloat(String(t.amount))}),Bt("currency",r)),e?{transactionType:String(t.transactionType).toUpperCase()}:{}),Bt("description",o)),Bt("merchantCustomData",s)),Bt("entryMode",a)),{paymentSettings:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({terminalId:i},Bt("avsHouseMatrix",u,"number")),Bt("avsPostCodeMatrix",c,"number")),Bt("cscMatrix",l,"number")),Bt("paMatrix",h,"number")),Bt("returnUrl",d)),Bt("failureReturnUrl",g)),Bt("callbackUrl",f)),Bt("failureCallbackUrl",p)),customerDetails:Object.assign(Object.assign({accountDetails:Object.assign({},Bt("accountId",y)),billingAddress:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Bt("firstName",v)),Bt("lastName",m)),Bt("addressLine1",b)),Bt("addressLine2",S)),Bt("postalCode",w)),Bt("city",O)),Bt("country",E)),deliveryDetails:Object.assign({},Bt("deliveryAddress",kt(D),"object"))},Bt("email",x)),Bt("mobilePhone",T)),periodic:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Bt("recurringFrequency",j)),Bt("recurringExpirationDate",A)),Bt("periodicType",R)),Bt("numberOfInstallments",C)),Bt("sequenceType",P)),requestorDetails:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Bt("merchantName",I)),Bt("merchantNumber",N)),Bt("merchantUrl",V)),Bt("merchantDepartmentId",M,"number")),Bt("merchantStoreId",B,"number")),Bt("visaMid",_)),Bt("mastercardMid",L)),Bt("amexMid",k))}),Bt("CVC2RC",U)),Bt("paymentTo",H)),Bt("taxAmount",q,"number")),Bt("deliveryType",F))}function Ht(t){var e,r,n,i,o,s,a,u,c,h,l=t.invoiceId,f=(t.amount,t.currency),p=t.transactionType,d=t.description,g=t.merchantCustomData,y=t.entryMode,v=t.paymentSettings,m=t.language,b=t.customerDetails,S=t.periodic,w=t.CVC2RC,O=t.paymentTo,T=t.requestorDetails,E=t.taxAmount,D=t.deliveryType,x=t.amountBreakdown,j=t.orderLines,A=t.productType,R=Nt(t,["invoiceId","amount","currency","transactionType","description","merchantCustomData","entryMode","paymentSettings","language","customerDetails","periodic","CVC2RC","paymentTo","requestorDetails","taxAmount","deliveryType","amountBreakdown","orderLines","productType"]);return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},R),{invoiceId:l?String(l):"",amount:parseFloat(String(t.amount))}),Bt("language",m)),Bt("description",d)),Bt("currency",f)),Bt("terminal",null==v?void 0:v.terminalId)),Bt("postLink",null==v?void 0:v.callbackUrl)),Bt("failurePostLink",null==v?void 0:v.failureCallbackUrl)),Bt("backLink",null==v?void 0:v.returnUrl)),Bt("failureBackLink",null==v?void 0:v.failureReturnUrl)),Bt("accountId",null===(e=null==b?void 0:b.accountDetails)||void 0===e?void 0:e.accountId)),Bt("accountCountry",null===(r=null==b?void 0:b.billingAddress)||void 0===r?void 0:r.country)),Bt("accountCity",null===(n=null==b?void 0:b.billingAddress)||void 0===n?void 0:n.city)),Bt("accountStreet1",null===(i=null==b?void 0:b.billingAddress)||void 0===i?void 0:i.addressLine1)),Bt("accountStreet2",null===(o=null==b?void 0:b.billingAddress)||void 0===o?void 0:o.addressLine2)),Bt("accountStreet3",null===(s=null==b?void 0:b.billingAddress)||void 0===s?void 0:s.addressLine3)),Bt("accountEmail",null==b?void 0:b.email)),Bt("accountFirstName",null===(a=null==b?void 0:b.billingAddress)||void 0===a?void 0:a.firstName)),Bt("accountLastName",null===(u=null==b?void 0:b.billingAddress)||void 0===u?void 0:u.lastName)),Bt("accountPostalCode",null===(c=null==b?void 0:b.billingAddress)||void 0===c?void 0:c.postalCode)),Bt("phone",null==b?void 0:b.mobilePhone)),Bt("accountEmail",null==b?void 0:b.email)),Bt("transactionType",p)),Bt("recurringFrequency",null==S?void 0:S.recurringFrequency)),Bt("recurringExpirationDate",null==S?void 0:S.recurringExpirationDate)),Bt("periodicType",null==S?void 0:S.periodicType)),Bt("sequenceType",null==S?void 0:S.sequenceType)),Bt("numberOfInstallments",null==S?void 0:S.numberOfInstallments)),Bt("entryMode",y)),Bt("CVC2RC",w)),Bt("paymentTo",O)),Bt("avsHouseMatrix",null==v?void 0:v.avsHouseMatrix,"number")),Bt("avsPostCodeMatrix",null==v?void 0:v.avsPostCodeMatrix,"number")),Bt("CSCMatrix",null==v?void 0:v.cscMatrix,"number")),Bt("PAMatrix",null==v?void 0:v.paMatrix,"number")),Bt("merchantName",null==T?void 0:T.merchantName)),Bt("merchantNumber",null==T?void 0:T.merchantNumber)),Bt("merchantURL",null==T?void 0:T.merchantUrl)),Bt("merchantDepartmentID",null==T?void 0:T.merchantDepartmentId,"number")),Bt("merchantStoreID",null==T?void 0:T.merchantStoreId,"number")),Bt("visaMID",null==T?void 0:T.visaMid)),Bt("masterCardMID",null==T?void 0:T.mastercardMid)),Bt("amexMID",null==T?void 0:T.amexMid)),Bt("merchantCustomData",g)),Bt("taxAmount",E,"number")),Bt("deliveryType",D)),Bt("amountBreakdown",x,"object")),Bt("orderLines",j,"object")),Bt("shippingAddress",null===(h=null==b?void 0:b.deliveryDetails)||void 0===h?void 0:h.deliveryAddress,"object")),Bt("productType",A))}function qt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Ft(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ft(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function zt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Kt=function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},Yt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isTest=!1,this.token=null,this.configuration=null,this.loadedCardSchemes={},this.isCardSchemaLoading=!1,this.isTest=null==e?void 0:e.isTest,this.token=null==e?void 0:e.token}var e,r;return e=t,(r=[{key:"init",value:function(){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadConfiguration();case 2:case"end":return t.stop()}}),t,this)})))}},{key:"setTestMode",value:function(t){this.isTest=t}},{key:"setToken",value:function(t){this.token=t}},{key:"getConfiguration",value:function(){return this.configuration}},{key:"startCardSchemaLoading",value:function(){this.isCardSchemaLoading=!0}},{key:"stopCardSchemaLoading",value:function(){this.isCardSchemaLoading=!1}},{key:"getAcceptedCardSchemes",value:function(){var t,e,r;return null===(r=null===(e=null===(t=this.configuration)||void 0===t?void 0:t.paymentMethodsSettings)||void 0===e?void 0:e.bankCard)||void 0===r?void 0:r.acceptedCardSchemes}},{key:"isCardSchemeIdIncluded",value:function(t){var e=this.getAcceptedCardSchemes();return null==e?void 0:e.map((function(t){return t.cardSchemeId})).includes(t)}},{key:"loadConfiguration",value:function(){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,At(this.token,this.isTest);case 2:if(!(e=t.sent).error&&e.value){t.next=5;break}throw new Error("Load configuration error");case 5:this.configuration=e.value;case 6:case"end":return t.stop()}}),t,this)})))}},{key:"isValidCardNumber",value:function(t){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c().number(t,{luhnValidateUnionPay:!0}).isValid){e.next=3;break}return e.abrupt("return",{code:s.INVALID_CARD_NUMBER,message:"Invalid card number"});case 3:if(!this.getAcceptedCardSchemes()){e.next=9;break}return e.next=7,this.fetchCardScheme(t);case 7:return r=e.sent,e.abrupt("return",r);case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e,this)})))}},{key:"isValidCardHolder",value:function(t){return!!/^[^0-9]+$/.test(t)||{code:s.INVALID_CARDHOLDER_NAME,message:"Invalid cardholder name"}}},{key:"isValidExpiryDate",value:function(t){var e=qt(t.split("/"),2),r=e[0],n=e[1];return!(!r||!n||2!==r.length||2!==n.length||parseInt(r.toString(),10)<1||parseInt(r.toString(),10)>12)||{code:s.INVALID_EXPIRY_DATE,message:"Invalid expiry date"}}},{key:"isValidSecureCode",value:function(t,e){var r,n;if(t){var i=this.getCardInfo(e);return!(t.length<3||i&&i.code&&t.length!==i.code.size)||{code:s.INVALID_SECURE_CODE,message:"Invalid secure code"}}return void 0!==(null===(r=this.configuration)||void 0===r?void 0:r.CSCMandatory)&&!(null===(n=this.configuration)||void 0===n?void 0:n.CSCMandatory)||{code:s.INVALID_SECURE_CODE,message:"Invalid secure code"}}},{key:"getCardInfo",value:function(t){return wt(t)}},{key:"getCardScheme",value:function(t){var e,r,n;return Kt(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(null===(e=this.loadedCardSchemes)||void 0===e?void 0:e[t])){i.next=2;break}return i.abrupt("return",this.loadedCardSchemes[t]);case 2:return i.next=4,Rt(this.token,this.isTest,this.configuration.cert,t);case 4:return o=i.sent,this.loadedCardSchemes[t]=null===(r=null==o?void 0:o.value)||void 0===r?void 0:r.cardSchemeId,i.abrupt("return",null===(n=null==o?void 0:o.value)||void 0===n?void 0:n.cardSchemeId);case 7:case"end":return i.stop()}}),i,this)})))}},{key:"fetchCardScheme",value:function(t){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.startCardSchemaLoading(),e.next=3,this.getCardScheme(t);case 3:if(r=e.sent,this.stopCardSchemaLoading(),this.loadCardSchema=r,!r||this.isCardSchemeIdIncluded(r)){e.next=8;break}return e.abrupt("return",{code:s.NOT_SUPPORT_CARD_SCHEME,message:"Not support card scheme"});case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"cryptoPay",value:function(t,e,r){var n;return Kt(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(2!==(null===(n=this.configuration)||void 0===n?void 0:n.version)){i.next=2;break}return i.abrupt("return",this.cryptoPayV2(t,e,r));case 2:return i.abrupt("return",this.cryptoPayV1(t,e,r));case 3:case"end":return i.stop()}}),i,this)})))}},{key:"cryptoPayV1",value:function(t,e,r){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object.assign(Object.assign({},_t(t)),{name:null==e?void 0:e.cardHolderName,"сryptogram":r||this.getCryptoCardData(e)}),n.abrupt("return",Ct(this.token,this.isTest,i));case 2:case"end":return n.stop()}}),n,this)})))}},{key:"cryptoPayV2",value:function(t,e,r){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getCardPaymentDataV2(Lt(t),e,r);case 2:return i=n.sent,n.abrupt("return",Pt(this.token,this.isTest,i));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"getCardPaymentDataV2",value:function(t,e,r){return Kt(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=Object,n.t1=Object.assign({},t),n.t2=Object.assign(Object.assign({},t.customerDetails),{browserDetails:xt()}),!r){n.next=7;break}n.t3={cryptogram:r,cardholderName:e.cardHolderName},n.next=11;break;case 7:return n.next=9,this.getCryptoCardDataV2(t,e);case 9:n.t4=n.sent,n.t3={encryptedData:n.t4};case 11:return n.t5=n.t3,n.t6={customerDetails:n.t2,cardDetails:n.t5},n.abrupt("return",n.t0.assign.call(n.t0,n.t1,n.t6));case 14:case"end":return n.stop()}}),n,this)})))}},{key:"getCryptoCardDataV2",value:function(t,e){var r,n;return Kt(this,void 0,void 0,regeneratorRuntime.mark((function i(){var o,s,a,u,c,h;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return o=null===(r=null==e?void 0:e.expiryDate)||void 0===r?void 0:r.split("/"),s=qt(o,2),a=s[0],u=s[1],c={accountNumber:e.cardNumber,expirationMonth:a,expirationYear:u,csc:e.cvv,cardholderName:e.cardHolderName,paymentTo:null==t?void 0:t.paymentTo},i.next=4,Tt(null===(n=this.getConfiguration())||void 0===n?void 0:n.cert,this.token,c);case 4:return h=i.sent,i.abrupt("return",h);case 6:case"end":return i.stop()}}),i,this)})))}},{key:"getCryptoCardData",value:function(t){var e,r,n=qt(null===(e=null==t?void 0:t.expiryDate)||void 0===e?void 0:e.split("/"),2),i=n[0],o=n[1],s={hpan:t.cardNumber,expDate:i+o,cvc:t.cvv,terminalId:t.terminal};return Ot(null===(r=this.getConfiguration())||void 0===r?void 0:r.cert,s)}}])&&zt(e.prototype,r),t}()},551:function(t){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),s=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r};t.exports={arrayToObject:s,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],s=o.obj[o.prop],a=Object.keys(s),u=0;u<a.length;++u){var c=a[u],h=s[c];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(e.push({obj:s,prop:c}),r.push(h))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);e.obj[e.prop]=n}}}(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,r){if(0===t.length)return t;var n=t;if("symbol"==typeof t?n=Symbol.prototype.toString.call(t):"string"!=typeof t&&(n=String(t)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var i="",s=0;s<n.length;++s){var a=n.charCodeAt(s);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?i+=n.charAt(s):a<128?i+=o[a]:a<2048?i+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?i+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(s+=1,a=65536+((1023&a)<<10|1023&n.charCodeAt(s)),i+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return i},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(i(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var a=e;return i(e)&&!i(r)&&(a=s(e,o)),i(e)&&i(r)?(r.forEach((function(r,i){if(n.call(e,i)){var s=e[i];s&&"object"==typeof s&&r&&"object"==typeof r?e[i]=t(s,r,o):e.push(r)}else e[i]=r})),e):Object.keys(r).reduce((function(e,i){var s=r[i];return n.call(e,i)?e[i]=t(e[i],s,o):e[i]=s,e}),a)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9);e.Content=n.Content;var i=r(10);e.ApiError=i.ApiError},function(t,e,r){"use strict";var n=String.prototype.replace,i=/%20/g,o=r(0),s={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports=o.assign({default:s.RFC3986,formatters:{RFC1738:function(t){return n.call(t,i,"+")},RFC3986:function(t){return String(t)}}},s)},function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r(4)),n(r(1))},function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r(5)),n(r(12))},function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e,r,n,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){s(o,n,i,a,u,"next",t)}function u(t){s(o,n,i,a,u,"throw",t)}a(void 0)}))}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var h=c(r(6)),l=r(1),f=c(r(11));function p(t){return new l.Content("application/json",void 0===t?void 0:JSON.stringify(t))}function d(t,e,r){return g.apply(this,arguments)}function g(){return(g=a(regeneratorRuntime.mark((function t(e,r,n){var i,o,s,a,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=u.length>3&&void 0!==u[3]?u[3]:[],s={method:e,headers:o=i||[]},void 0!==n&&(a=n instanceof l.Content?n:p(n),o.push(["Content-Type",a.type]),s.body=a.body),t.next=6,fetch(r,s);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e,r){return v.apply(this,arguments)}function v(){return(v=a(regeneratorRuntime.mark((function t(e,r,n){var o,s,a,u,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>3&&void 0!==c[3]?c[3]:[],t.next=3,d(e,r,n,o);case 3:if(204!==(s=t.sent).status){t.next=6;break}return t.abrupt("return",{status:204});case 6:return t.next=8,s.text();case 8:return a=t.sent,u=a&&401!==s.status?JSON.parse(a):void 0,t.abrupt("return",f.default(i({},s.ok?{result:u}:{error:u},{status:s.status})));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.jsonContent=p,e.form=function(t){return new l.Content("application/x-www-form-urlencoded",void 0===t?void 0:Object.entries(t).map((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),2!==r.length);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,2);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),r=e[0],n=e[1];return"".concat(r,"=").concat(encodeURIComponent(n))})).join("&"))},e.send=y,e.get=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return void 0!==e&&(t=t+"?"+h.default.stringify(e)),y("GET",t,void 0,r)},e.post=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return y("POST",t,e,r)},e.put=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return y("PUT",t,e,r)},e.del=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return y("DELETE",t,e,r)}},function(t,e,r){"use strict";var n=r(7),i=r(8),o=r(2);t.exports={formats:o,parse:i,stringify:n}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=Object.prototype.hasOwnProperty,s={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},a=Array.isArray,u=Array.prototype.push,c=function(t,e){u.apply(t,a(e)?e:[e])},h=Date.prototype.toISOString,l=i.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:l,formatter:i.formatters[l],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},p=function t(e,r,i,o,s,u,h,l,p,d,g,y,v){var m,b=e;if("function"==typeof h?b=h(r,b):b instanceof Date?b=d(b):"comma"===i&&a(b)&&(b=b.join(",")),null===b){if(o)return u&&!y?u(r,f.encoder,v,"key"):r;b=""}if("string"==typeof(m=b)||"number"==typeof m||"boolean"==typeof m||"symbol"==typeof m||"bigint"==typeof m||n.isBuffer(b))return u?[g(y?r:u(r,f.encoder,v,"key"))+"="+g(u(b,f.encoder,v,"value"))]:[g(r)+"="+g(String(b))];var S,w=[];if(void 0===b)return w;if(a(h))S=h;else{var O=Object.keys(b);S=l?O.sort(l):O}for(var T=0;T<S.length;++T){var E=S[T];s&&null===b[E]||(a(b)?c(w,t(b[E],"function"==typeof i?i(r,E):r,i,o,s,u,h,l,p,d,g,y,v)):c(w,t(b[E],r+(p?"."+E:"["+E+"]"),i,o,s,u,h,l,p,d,g,y,v)))}return w};t.exports=function(t,e){var r,n=t,u=function(t){if(!t)return f;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||f.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==t.format){if(!o.call(i.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=i.formatters[r],s=f.filter;return("function"==typeof t.filter||a(t.filter))&&(s=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===t.allowDots?f.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:f.charsetSentinel,delimiter:void 0===t.delimiter?f.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:f.encode,encoder:"function"==typeof t.encoder?t.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:f.encodeValuesOnly,filter:s,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:f.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:f.strictNullHandling}}(e);"function"==typeof u.filter?n=(0,u.filter)("",n):a(u.filter)&&(r=u.filter);var h,l=[];if("object"!=typeof n||null===n)return"";h=e&&e.arrayFormat in s?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var d=s[h];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var g=0;g<r.length;++g){var y=r[g];u.skipNulls&&null===n[y]||c(l,p(n[y],y,d,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.formatter,u.encodeValuesOnly,u.charset))}var v=l.join(u.delimiter),m=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),v.length>0?m+v:""}},function(t,e,r){"use strict";var n=r(0),i=Object.prototype.hasOwnProperty,o=Array.isArray,s={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},u=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(n),a=s?n.slice(0,s.index):n,c=[];if(a){if(!r.plainObjects&&i.call(Object.prototype,a)&&!r.allowPrototypes)return;c.push(a)}for(var h=0;r.depth>0&&null!==(s=o.exec(n))&&h<r.depth;){if(h+=1,!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}return s&&c.push("["+n.slice(s.index)+"]"),function(t,e,r){for(var n=u(e,r),i=t.length-1;i>=0;--i){var o,s=t[i];if("[]"===s&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var a="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(a,10);r.parseArrays||""!==a?!isNaN(c)&&s!==a&&String(c)===a&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[])[c]=n:o[a]=n:o={0:n}}n=o}return n}(c,e,r)}};t.exports=function(t,e){var r=function(t){if(!t)return s;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?s.charset:t.charset;return{allowDots:void 0===t.allowDots?s.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:s.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:s.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:s.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:s.comma,decoder:"function"==typeof t.decoder?t.decoder:s.decoder,delimiter:"string"==typeof t.delimiter||n.isRegExp(t.delimiter)?t.delimiter:s.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:s.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:s.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:s.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:s.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var h="string"==typeof t?function(t,e){var r,c={},h=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,l=e.parameterLimit===1/0?void 0:e.parameterLimit,f=h.split(e.delimiter,l),p=-1,d=e.charset;if(e.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[r]?d="utf-8":"utf8=%26%2310003%3B"===f[r]&&(d="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)if(r!==p){var g,y,v=f[r],m=v.indexOf("]="),b=-1===m?v.indexOf("="):m+1;-1===b?(g=e.decoder(v,s.decoder,d,"key"),y=e.strictNullHandling?null:""):(g=e.decoder(v.slice(0,b),s.decoder,d,"key"),y=e.decoder(v.slice(b+1),s.decoder,d,"value")),y&&e.interpretNumericEntities&&"iso-8859-1"===d&&(y=a(y)),y=u(y,e),v.indexOf("[]=")>-1&&(y=o(y)?[y]:y),i.call(c,g)?c[g]=n.combine(c[g],y):c[g]=y}return c}(t,r):t,l=r.plainObjects?Object.create(null):{},f=Object.keys(h),p=0;p<f.length;++p){var d=f[p],g=c(d,h[d],r);l=n.merge(l,g,r)}return n.compact(l)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Content=function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e,this.body=r}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,t)})(t)}function a(t,e,r){return(a=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&c(i,r.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(n,t);var e,r=(e=n,function(){var t,r=h(e);if(u()){var n=h(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return i(this,t)});function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e=r.call(this,t.message),Object.setPrototypeOf(o(e),n.prototype),e.name="ApiError",e.code=t.code,e.stack=Error().stack,e}return n}(s(Error));e.ApiError=l},function(t,e,r){"use strict";function n(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.strict=n,e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);function i(t,e){if("string"==typeof t)return new Error(t);if("function"==typeof t)try{var r=t(e);return"string"==typeof r?new Error(r):r}catch(t){return new Error("Error provider failed")}return t}e.check=function(t,e){if(!t.error)return t.value;throw e?i(e,t.error):t.error},e.throwOnFail=function(t,e){if(!e)return"function"==typeof t?t():t;var r;if("function"==typeof t)try{var n=t();if(!(n instanceof Promise))return n;r=n}catch(t){throw i(e,t)}else r=t;return r.catch((function(t){throw i(e,t)}))},e.noThrow=function(t,e){var r;if("function"==typeof t)try{var n=t();if(!(n instanceof Promise))return{value:n};r=n}catch(t){return{error:e?i(e,t):t}}else r=t;return r.then((function(t){return{value:t}})).catch((function(t){return{error:e?i(e,t):t}}))},e.apiCheck=function(t){if(t instanceof Promise)return t.then((function(t){if(t.error)throw new n.ApiError(t.error);return t.result}));if(t.error)throw new n.ApiError(t.error);return t.result}}])},443:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cardNumber=void 0;var n=r(839),i=r(938);function o(t,e,r){return{card:t,isPotentiallyValid:e,isValid:r}}e.cardNumber=function(t,e){var r,s;if(void 0===e&&(e={}),"string"!=typeof t&&"number"!=typeof t)return o(null,!1,!1);var a=String(t).replace(/-|\s/g,"");if(!/^\d*$/.test(a))return o(null,!1,!1);var u=i(a);if(0===u.length)return o(null,!1,!1);if(1!==u.length)return o(null,!0,!1);var c=u[0];if(e.maxLength&&a.length>e.maxLength)return o(c,!1,!1);r=c.type===i.types.UNIONPAY&&!0!==e.luhnValidateUnionPay||n(a),s=Math.max.apply(null,c.lengths),e.maxLength&&(s=Math.min(e.maxLength,s));for(var h=0;h<c.lengths.length;h++)if(c.lengths[h]===a.length)return o(c,a.length<s||r,r);return o(c,a.length<s,!1)}},367:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cardholderName=void 0;var r=/^[\d\s-]*$/;function n(t,e){return{isValid:t,isPotentiallyValid:e}}e.cardholderName=function(t){return"string"!=typeof t?n(!1,!1):0===t.length?n(!1,!0):t.length>255?n(!1,!1):r.test(t)?n(!1,!0):n(!0,!0)}},84:function(t,e){"use strict";function r(t,e){return{isValid:t,isPotentiallyValid:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.cvv=void 0,e.cvv=function(t,e){return void 0===e&&(e=3),e=e instanceof Array?e:[e],"string"!=typeof t?r(!1,!1):/^\d*$/.test(t)?function(t,e){for(var r=0;r<t.length;r++)if(e===t[r])return!0;return!1}(e,t.length)?r(!0,!0):t.length<Math.min.apply(null,e)?r(!1,!0):t.length>function(t){for(var e=3,r=0;r<t.length;r++)e=t[r]>e?t[r]:e;return e}(e)?r(!1,!1):r(!0,!0):r(!1,!1)}},622:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.expirationDate=void 0;var i=r(178),o=r(437),s=r(275);function a(t,e,r,n){return{isValid:t,isPotentiallyValid:e,month:r,year:n}}e.expirationDate=function(t,e){var r;if("string"==typeof t)t=t.replace(/^(\d\d) (\d\d(\d\d)?)$/,"$1/$2"),r=i.parseDate(String(t));else{if(null===t||"object"!=typeof t)return a(!1,!1,null,null);var u=n({},t);r={month:String(u.month),year:String(u.year)}}var c=o.expirationMonth(r.month),h=s.expirationYear(r.year,e);if(c.isValid){if(h.isCurrentYear){var l=c.isValidForThisYear;return a(l,l,r.month,r.year)}if(h.isValid)return a(!0,!0,r.month,r.year)}return c.isPotentiallyValid&&h.isPotentiallyValid?a(!1,!0,null,null):a(!1,!1,null,null)}},437:function(t,e){"use strict";function r(t,e,r){return{isValid:t,isPotentiallyValid:e,isValidForThisYear:r||!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.expirationMonth=void 0,e.expirationMonth=function(t){var e=(new Date).getMonth()+1;if("string"!=typeof t)return r(!1,!1);if(""===t.replace(/\s/g,"")||"0"===t)return r(!1,!0);if(!/^\d*$/.test(t))return r(!1,!1);var n=parseInt(t,10);if(isNaN(Number(t)))return r(!1,!1);var i=n>0&&n<13;return r(i,i,i&&n>=e)}},275:function(t,e){"use strict";function r(t,e,r){return{isValid:t,isPotentiallyValid:e,isCurrentYear:r||!1}}Object.defineProperty(e,"__esModule",{value:!0}),e.expirationYear=void 0,e.expirationYear=function(t,e){var n;if(void 0===e&&(e=19),"string"!=typeof t)return r(!1,!1);if(""===t.replace(/\s/g,""))return r(!1,!0);if(!/^\d*$/.test(t))return r(!1,!1);var i=t.length;if(i<2)return r(!1,!0);var o=(new Date).getFullYear();if(3===i)return r(!1,t.slice(0,2)===String(o).slice(0,2));if(i>4)return r(!1,!1);var s=parseInt(t,10),a=Number(String(o).substr(2,2)),u=!1;return 2===i?(n=a===s,u=s>=a&&s<=a+e):4===i&&(n=o===s,u=s>=o&&s<=o+e),r(u,u,n)}},703:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=(this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&n(e,t,r);return i(e,t),e})(r(938)),s=r(367),a=r(443),u=r(622),c=r(437),h=r(275),l=r(84),f=r(204),p={creditCardType:o,cardholderName:s.cardholderName,number:a.cardNumber,expirationDate:u.expirationDate,expirationMonth:c.expirationMonth,expirationYear:h.expirationYear,cvv:l.cvv,postalCode:f.postalCode};t.exports=p},991:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=void 0,e.isArray=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},178:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseDate=void 0;var n=r(275),i=r(991);e.parseDate=function(t){var e;if(/^\d{4}-\d{1,2}$/.test(t)?e=t.split("-").reverse():/\//.test(t)?e=t.split(/\s*\/\s*/g):/\s/.test(t)&&(e=t.split(/ +/g)),i.isArray(e))return{month:e[0]||"",year:e.slice(1).join()};var r,o,s,a=(r=t,0===(s=Number(r[0]))?2:s>1||1===s&&Number(r[1])>2?1:1===s?(o=r.substr(1),n.expirationYear(o).isPotentiallyValid?1:2):5===r.length?1:r.length>5?2:1),u=t.substr(0,a);return{month:u,year:t.substr(u.length)}}},839:function(t){"use strict";t.exports=function(t){for(var e,r=0,n=!1,i=t.length-1;i>=0;)e=parseInt(t.charAt(i),10),n&&(e*=2)>9&&(e=e%10+1),n=!n,r+=e,i--;return r%10==0}},204:function(t,e){"use strict";function r(t,e){return{isValid:t,isPotentiallyValid:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.postalCode=void 0,e.postalCode=function(t,e){void 0===e&&(e={});var n=e.minLength||3;return"string"!=typeof t?r(!1,!1):t.length<n?r(!1,!0):r(!0,!0)}},938:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=r(323),o=r(778),s=r(657),a=r(558),u=r(176),c={},h={VISA:"visa",MASTERCARD:"mastercard",AMERICAN_EXPRESS:"american-express",DINERS_CLUB:"diners-club",DISCOVER:"discover",JCB:"jcb",UNIONPAY:"unionpay",MAESTRO:"maestro",ELO:"elo",MIR:"mir",HIPER:"hiper",HIPERCARD:"hipercard"},l=[h.VISA,h.MASTERCARD,h.AMERICAN_EXPRESS,h.DINERS_CLUB,h.DISCOVER,h.JCB,h.UNIONPAY,h.MAESTRO,h.ELO,h.MIR,h.HIPER,h.HIPERCARD],f=u.clone(l);function p(t){return c[t]||i[t]}function d(t,e){void 0===e&&(e=!1);var r=f.indexOf(t);if(!e&&-1===r)throw new Error('"'+t+'" is not a supported card type.');return r}function g(t){var e=[];if(!s.isValidInputType(t))return e;if(0===t.length)return f.map((function(t){return u.clone(p(t))}));f.forEach((function(r){var n=p(r);o.addMatchingCardsToResults(t,n,e)}));var r=a.findBestMatch(e);return r?[r]:e}g.getTypeInfo=function(t){return u.clone(p(t))},g.removeCard=function(t){var e=d(t);f.splice(e,1)},g.addCard=function(t){var e=d(t.type,!0);c[t.type]=t,-1===e&&f.push(t.type)},g.updateCard=function(t,e){var r=c[t]||i[t];if(!r)throw new Error('"'+t+"\" is not a recognized type. Use `addCard` instead.'");if(e.type&&r.type!==e.type)throw new Error("Cannot overwrite type parameter.");var o=u.clone(r);o=n(n({},o),e),c[o.type]=o},g.changeOrder=function(t,e){var r=d(t);f.splice(r,1),f.splice(e,0,t)},g.resetModifications=function(){f=u.clone(l),c={}},g.types=h,t.exports=g},778:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addMatchingCardsToResults=void 0;var n=r(176),i=r(528);e.addMatchingCardsToResults=function(t,e,r){var o,s;for(o=0;o<e.patterns.length;o++){var a=e.patterns[o];if(i.matches(t,a)){var u=n.clone(e);s=Array.isArray(a)?String(a[0]).length:String(a).length,t.length>=s&&(u.matchStrength=s),r.push(u);break}}}},323:function(t){"use strict";t.exports={visa:{niceType:"Visa",type:"visa",patterns:[4],gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",size:3}},mastercard:{niceType:"Mastercard",type:"mastercard",patterns:[[51,55],[2221,2229],[223,229],[23,26],[270,271],2720],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},"american-express":{niceType:"American Express",type:"american-express",patterns:[34,37],gaps:[4,10],lengths:[15],code:{name:"CID",size:4}},"diners-club":{niceType:"Diners Club",type:"diners-club",patterns:[[300,305],36,38,39],gaps:[4,10],lengths:[14,16,19],code:{name:"CVV",size:3}},discover:{niceType:"Discover",type:"discover",patterns:[6011,[644,649],65],gaps:[4,8,12],lengths:[16,19],code:{name:"CID",size:3}},jcb:{niceType:"JCB",type:"jcb",patterns:[2131,1800,[3528,3589]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVV",size:3}},unionpay:{niceType:"UnionPay",type:"unionpay",patterns:[620,[624,626],[62100,62182],[62184,62187],[62185,62197],[62200,62205],[622010,622999],622018,[622019,622999],[62207,62209],[622126,622925],[623,626],6270,6272,6276,[627700,627779],[627781,627799],[6282,6289],6291,6292,810,[8110,8131],[8132,8151],[8152,8163],[8164,8171]],gaps:[4,8,12],lengths:[14,15,16,17,18,19],code:{name:"CVN",size:3}},maestro:{niceType:"Maestro",type:"maestro",patterns:[493698,[5e5,504174],[504176,506698],[506779,508999],[56,59],63,67,6],gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:"CVC",size:3}},elo:{niceType:"Elo",type:"elo",patterns:[401178,401179,438935,457631,457632,431274,451416,457393,504175,[506699,506778],[509e3,509999],627780,636297,636368,[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650978],[651652,651679],[655e3,655019],[655021,655058]],gaps:[4,8,12],lengths:[16],code:{name:"CVE",size:3}},mir:{niceType:"Mir",type:"mir",patterns:[[2200,2204]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVP2",size:3}},hiper:{niceType:"Hiper",type:"hiper",patterns:[637095,63737423,63743358,637568,637599,637609,637612],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},hipercard:{niceType:"Hipercard",type:"hipercard",patterns:[606282],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}}}},176:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.clone=void 0,e.clone=function(t){return t?JSON.parse(JSON.stringify(t)):null}},558:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.findBestMatch=void 0,e.findBestMatch=function(t){return function(t){var e=t.filter((function(t){return t.matchStrength})).length;return e>0&&e===t.length}(t)?t.reduce((function(t,e){return t?Number(t.matchStrength)<Number(e.matchStrength)?e:t:e})):null}},657:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isValidInputType=void 0,e.isValidInputType=function(t){return"string"==typeof t||t instanceof String}},528:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.matches=void 0,e.matches=function(t,e){return Array.isArray(e)?function(t,e,r){var n=String(e).length,i=t.substr(0,n),o=parseInt(i,10);return e=parseInt(String(e).substr(0,i.length),10),r=parseInt(String(r).substr(0,i.length),10),o>=e&&o<=r}(t,e[0],e[1]):function(t,e){return(e=String(e)).substring(0,t.length)===t.substring(0,e.length)}(t,e)}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n=r(71);module.exports=n}();

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************************!*\
  !*** ./src/code/external.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": function() { return /* binding */ create; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_HostedFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/HostedFields */ "./src/code/classes/HostedFields.ts");


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


function create(options) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var instance;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            instance = new _classes_HostedFields__WEBPACK_IMPORTED_MODULE_1__.HostedFields(options);
            _context.next = 3;
            return instance.init();

          case 3:
            return _context.abrupt("return", instance);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

if (!window.dnaPayments) {
  window.dnaPayments = {};
}

window.dnaPayments.hostedFields = {
  create: create
};
}();
/******/ })()
;