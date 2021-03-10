/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  list-style: none; }\n\n.body {\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\n\n.hidden {\n  display: none; }\n\nbody {\n  background-color: #C8E6C9; }\n\nh1 {\n  font-size: 3rem;\n  font-weight: bold; }\n\nh2 {\n  font-size: 2rem;\n  font-style: italic; }\n\n.login-nav {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #4CAF50;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.login-message {\n  padding-top: 2%; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5%; }\n  .login-form input, .login-form .date-view-input button, .date-view-input .login-form button {\n    width: 30%;\n    padding: 1%;\n    margin-bottom: 2%;\n    border-color: #212121;\n    font-size: 1rem; }\n  .login-form button {\n    width: 30%;\n    padding: 1%;\n    background-color: #03A9F4;\n    border-color: #212121;\n    font-size: 1rem; }\n\n.login-button:hover {\n  cursor: pointer;\n  font-weight: bold; }\n\n.login-error {\n  color: #212121;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-top: 1%;\n  text-align: center; }\n\n.hidden {\n  display: none; }\n\n.guest-nav {\n  background-color: #4CAF50;\n  display: flex;\n  justify-content: space-between;\n  padding: 1%;\n  border-bottom: solid; }\n\n.guest-nav-right {\n  align-self: center; }\n  .guest-nav-right h2 {\n    text-align: end; }\n\n.date-view, .date-view-input {\n  margin-top: .5%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .date-view .date-view-title, .date-view-input .date-view-title {\n    font-size: 25px; }\n\n.date-view-input {\n  width: 20%;\n  border: 5px solid;\n  border-radius: 5px;\n  padding: 1% 3%; }\n  .date-view-input input, .date-view-input button {\n    border-color: #212121;\n    font-size: 16px;\n    width: 100%;\n    padding: 5%;\n    margin: 1%; }\n  .date-view-input button {\n    background-color: #03A9F4;\n    padding: 5%;\n    font-size: 16px;\n    margin: 1%; }\n\n.data-button:hover {\n  cursor: pointer;\n  text-decoration: underline; }\n\n.guest-bookings-view {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 400px; }\n  .guest-bookings-view p, .guest-bookings-view li {\n    margin-top: 10px;\n    font-size: 1.1rem; }\n\n.box {\n  background-color: #BDBDBD;\n  width: 28%;\n  border-radius: 6px;\n  border: 4px solid;\n  text-align: center;\n  padding: 1%;\n  box-shadow: 2px 2px 6px #BDBDBD;\n  margin-bottom: 10px; }\n\n.hidden {\n  display: none; }\n\n.room-type-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2% 0; }\n  .room-type-form h2, .room-type-form select {\n    margin-top: 5px; }\n\n.return-home-button {\n  margin-top: 10px;\n  padding: .5% 1%;\n  font-size: 14px;\n  border: 3px solid #03A9F4; }\n  .return-home-button:hover {\n    cursor: pointer;\n    border-width: 5px; }\n\n.room-filter-inputs {\n  display: flex;\n  flex-direction: row; }\n  .room-filter-inputs h2 {\n    padding-right: 10px; }\n  .room-filter-inputs select {\n    border: 3px solid #03A9F4;\n    font-size: 14px; }\n\n.room-type-inputs:hover {\n  cursor: pointer; }\n\n.room-cards-view {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 400px;\n  min-height: 300px;\n  flex-wrap: wrap; }\n\n.room-list {\n  font-size: 1.1rem;\n  padding: 5%; }\n  .room-list li {\n    padding: 3%; }\n\n.book-room-button {\n  font-weight: bold;\n  padding: 3%;\n  border-radius: 6px;\n  background-color: #03A9F4; }\n  .book-room-button:hover {\n    cursor: pointer;\n    border-width: 5px; }\n\n.room-types-empty {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin: 125px 10px; }\n\n.hidden {\n  display: none; }\n\n@media screen and (max-width: 980px) {\n  .guest-nav-right {\n    max-width: 50%; } }\n\n@media screen and (max-width: 750px) {\n  .login-nav {\n    text-align: center; }\n  .login-form input, .login-form .date-view-input button, .date-view-input .login-form button, .login-form button {\n    width: 60%; }\n  .guest-nav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 100%;\n    text-align: center; }\n    .guest-nav h2 {\n      font-size: 25px;\n      text-align: center; }\n  .guest-nav-right, .guest-nav-left {\n    min-width: 90%; }\n  .date-view, .date-view-input {\n    min-width: 50%; }\n    .date-view .date-view-input, .date-view-input .date-view-input {\n      border: 0; }\n  .guest-bookings-view {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .box {\n    width: 80%; }\n  .room-filter-inputs {\n    flex-direction: column;\n    align-items: center; }\n  .room-type-form {\n    text-align: center; } }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_base.scss","webpack://./src/css/_login-view.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_guest-landing.scss","webpack://./src/css/_guest-search.scss","webpack://./src/css/_media-queries.scss"],"names":[],"mappings":"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","sourcesContent":["// /* This is an example of using Sass, otherwise plain CSS works too*/\n// $primary-background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);\n// ;\n\n// body {\n//   background: $primary-background;\n// }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  list-style: none;\n}\n\n.body {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.hidden {\n  display: none;\n}","body {\n  background-color: $light-green;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\nh2 {\n  font-size: 2rem;\n  font-style: italic;\n}\n\n.login-nav {\n  @include flex-center-column;\n  background-color: $nav-bar;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\n.login-message {\n  padding-top: 2%;\n}\n\n.login-form {\n  @include flex-center-column;\n  margin-top: 5%;\n\n    input {\n      width: 30%;\n      padding: 1%;\n      margin-bottom: 2%;\n      border-color: $black;\n      font-size: 1rem;\n    }\n\n    button {\n      width: 30%;\n      padding: 1%;\n      background-color: $accent;\n      border-color: $black;\n      font-size: 1rem;\n    }\n}\n\n.login-button:hover {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.login-error {\n  color: $black;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-top: 1%;\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}","$nav-bar: #4CAF50;\n$text: #FFFFFF;\n$secondary-text: #757575;\n$green: #388E3C;\n$light-green: #C8E6C9;\n$grey: #BDBDBD;\n$black: #212121;\n$accent: #03A9F4;\n$error: #f00c0c;","@mixin flex-center-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@mixin cards {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 400px;\n}",".guest-nav {\n  background-color: $nav-bar;\n  display: flex;\n  justify-content: space-between;\n  padding: 1%;\n  border-bottom: solid;\n}\n\n.guest-nav-right {\n  align-self: center;\n\n    h2 {\n      text-align: end;\n    }\n}\n\n.date-view {\n  margin-top: .5%;\n  @include flex-center-column;\n\n    .date-view-title {\n      font-size: 25px;\n    }\n}\n\n.date-view-input {\n  @extend .date-view;\n  width: 20%;\n  border: 5px solid;\n  border-radius: 5px;\n  padding: 1% 3%;\n\n    input {\n      border-color: $black;\n      font-size: 16px;\n      width: 100%;\n      padding: 5%;\n      margin: 1%;\n  }\n\n    button {\n      @extend input;\n      background-color: $accent;\n      padding: 5%;\n      font-size: 16px;\n      margin: 1%; \n  }\n}\n\n.data-button:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.guest-bookings-view {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 400px;\n    p, li {\n      margin-top: 10px;\n      font-size: 1.1rem;\n    }\n}\n\n.box {\n  background-color: $grey;\n  width: 28%;\n  border-radius: 6px;\n  border: 4px solid;\n  text-align: center;\n  padding: 1%;\n  box-shadow: 2px 2px 6px $grey;\n  margin-bottom: 10px;\n}\n\n.hidden {\n  display: none;\n}",".room-type-form {\n  @include flex-center-column;\n  margin: 2% 0;\n\n    h2, select {\n      margin-top: 5px;\n    }\n}\n\n.return-home-button {\n  margin-top: 10px;\n  padding: .5% 1%;\n  font-size: 14px;\n  border: 3px solid $accent;\n\n    &:hover {\n      cursor: pointer;\n      border-width: 5px;\n    }\n}\n\n.room-filter-inputs {\n  display: flex;\n  flex-direction: row;\n\n    h2 {\n      padding-right: 10px;\n    }\n\n    select {\n      border: 3px solid $accent;\n      font-size: 14px;\n    }\n}\n\n.room-type-inputs:hover {\n  cursor: pointer;\n}\n\n.room-cards-view {\n  @include cards;\n  min-height: 300px;\n  flex-wrap: wrap;\n}\n\n.room-list {\n  font-size: 1.1rem;\n  padding: 5%;\n\n    li {\n      padding: 3%\n    }\n}\n\n.book-room-button {\n  font-weight: bold;\n  padding: 3%;\n  border-radius: 6px;\n  background-color: $accent;\n  \n    &:hover {\n      cursor: pointer;\n      border-width: 5px;\n    }\n}\n\n.room-types-empty {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin: 125px 10px;\n}\n\n.hidden {\n  display: none;\n}\n","@media screen and (max-width: 980px) { \n  .guest-nav-right {\n    max-width: 50%;\n  }\n\n}\n\n@media screen and (max-width: 750px) {\n  .login-nav {\n    text-align: center;\n  }\n\n  .login-form {\n    input, button {\n      width: 60%;\n    }\n  }\n\n  .guest-nav {\n    @include flex-center-column;\n    min-width: 100%;\n    text-align: center;\n\n      h2 {\n        font-size: 25px;\n        text-align: center;\n      }\n  }\n\n  .guest-nav-right, .guest-nav-left {\n    min-width: 90%;\n  }\n\n  .date-view {\n    min-width: 50%;\n\n      .date-view-input {\n        border: 0;\n      }\n  }\n\n  .guest-bookings-view {\n    @include flex-center-column;\n  }\n  \n  .box {\n    width: 80%;\n  }\n\n  .room-filter-inputs {\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .room-type-form {\n    text-align: center;\n  }\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Guest.js":
/*!**********************!*\
  !*** ./src/Guest.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Guest extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(userName, customerData) {
    super(userName, customerData);
    this.pastBookings = [];
    this.currentBookings = [];
    this.futureBookings = [];
    this.totalAmountSpent = 0;
  }

  findGuestBookingHistory(bookingData) {
    this.getValidUserID();
    return bookingData.filter(booking => booking.userID === this.id);
  }

  calculateAmountSpent(bookingData, roomData) {
    const bookingHistory = this.findGuestBookingHistory(bookingData);
    const totalAmount = roomData.reduce((total, room) => {
      bookingHistory.forEach(booking => {
        if (booking.roomNumber === room.number) {
          total += room.costPerNight;
        }
      })
      return total;
    }, 0);
    return this.totalAmountSpent = totalAmount.toFixed(2);
  }

  sortBookingHistory(bookingData) {
    const bookingHistory = this.findGuestBookingHistory(bookingData);
    bookingHistory.forEach(booking => {
      if (booking.date === this.date && !this.currentBookings.includes(booking)) {
        this.currentBookings.push(booking);
      } else if (Date.parse(booking.date) > Date.parse(this.date) && !this.futureBookings.includes(booking)) {
        this.futureBookings.push(booking);
      } else {
        this.pastBookings.push(booking);
      }
    })
  }

  sortBookingsByDate(timePeriod) {
    if (this.futureBookings.length > 0 && timePeriod === 'future') {
      this.futureBookings.sort((a, b) => {
        let aDate = Date.parse(a.date);
        let bDate = Date.parse(b.date);
        return bDate - aDate;
      });
    } else if (this.pastBookings.length > 0 && timePeriod === 'past') {
      this.pastBookings.sort((a, b) => {
        let aDate = Date.parse(a.date);
        let bDate = Date.parse(b.date);
        return aDate - bDate;
      })
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Guest);



/***/ }),

/***/ "./src/Hotel.js":
/*!**********************!*\
  !*** ./src/Hotel.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Hotel {
  constructor(roomData, bookingData, date) {
    this.rooms = roomData;
    this.bookings = bookingData;
    this.date = date;
    this.avaiableRooms = [];
  }

  findRoomsAvaiable(date) {
    const bookedRoomNumbers = this.bookings.reduce((roomNumbers, booking) => {
      if (booking.date === date) {
        roomNumbers.push(booking.roomNumber);
      }
      return roomNumbers;
    }, []);
    const openRooms = this.rooms.filter(room => !bookedRoomNumbers.includes(room.number));
    this.avaiableRooms = openRooms;
    return openRooms;
  }

  filterRoomsByType(roomtype) {
    if (roomtype === 'all rooms') {
      return this.avaiableRooms;
    }
    return this.avaiableRooms.filter(room => room.roomType === roomtype)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Hotel);

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(userName, customerData) {
    this.userName = userName;
    this.password = 'overlook2021';
    this.id;
    this.customerData = customerData;
    this.name;
    this.guest = false;
    this.manager = false;
  }

  getValidUserID() {
    this.id = parseInt(this.userName.slice(8));
    if (this.id > 0 && this.id < 51) {
      this.guest = true;
      return 'guest';
    } else {
      return 'Error, not a valid username'
    }
  }

  determineUserType(password) {
    if (this.userName === 'manager' && password === this.password) {
      this.id = 0;
      this.manager = true;
      return 'manager';
    } else if (this.userName.includes('customer') && password === this.password) {
      return this.getValidUserID();
    } else {
      return 'Error, not a valid username and password';
    }
  }

  getGuestName() {
    const currentGuest = this.customerData.find(user => user.id === this.id);
    if (currentGuest) {
      this.name = currentGuest.name;
      return currentGuest.name;
    } else {
      return `Error, guest not on file`
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/fetchAPIData.js":
/*!*****************************!*\
  !*** ./src/fetchAPIData.js ***!
  \*****************************/
/*! exports provided: apiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
const apiRequest = {

  getBookingData() {
    return fetch('https://overlookhotel.herokuapp.com/api/v1/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => displayError(error))
  },

  getCustomerData() {
    return fetch('https://overlookhotel.herokuapp.com/api/v1/customers')
      .then(response => response.json())
      .then(data => data.customers)
      .catch(error => displayError(error))
  },

  getRoomData() {
    return fetch('https://overlookhotel.herokuapp.com/api/v1/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => displayError(error))
  },

  postNewRoomBooking(body) {
    return fetch('https://overlookhotel.herokuapp.com/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response)
  }
}

const displayError = (error) => {
  if (error.message === 'Failed to fetch') {
    const mainPage = document.getElementById('loginView');
    mainPage.innerText = 'Oops, looks like something went wrong please refresh and try again';
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/User.js");
/* harmony import */ var _Guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Guest */ "./src/Guest.js");
/* harmony import */ var _Hotel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hotel */ "./src/Hotel.js");
/* harmony import */ var _fetchAPIData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchAPIData */ "./src/fetchAPIData.js");






let customerData;
let bookingData;
let roomData;
let currentGuest;
let currentUser;
let hotel;
let today;

const guestSearchBar = document.getElementById('roomForm');
const filterOption = document.getElementById('roomTypes');
const searchByDateSection = document.getElementById('searchSection');
const avaiableRoomCard = document.getElementById('roomCards');
const loginForm = document.getElementById('loginForm');

window.addEventListener('load', getAllAPIData);
loginForm.addEventListener('click', handleUserLogin);
guestSearchBar.addEventListener('click', handleGuestSearchClick);
searchByDateSection.addEventListener('click', handleSearchByDate);
avaiableRoomCard.addEventListener('click', handleBookRoom)


function getAllAPIData() {
  const customers = _fetchAPIData__WEBPACK_IMPORTED_MODULE_4__["apiRequest"].getCustomerData();
  const bookings = _fetchAPIData__WEBPACK_IMPORTED_MODULE_4__["apiRequest"].getBookingData();
  const rooms = _fetchAPIData__WEBPACK_IMPORTED_MODULE_4__["apiRequest"].getRoomData();
  Promise.all([customers, bookings, rooms]).then(data => {
    assignAPIData(data[0], data[1], data[2]);
  })
}

function getCurrentDate() {
  const unformattedDate = new Date;
  const dateString = unformattedDate.toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  today = dateString.split('-').join('/');
}

function assignAPIData(customers, bookings, rooms) {
  getCurrentDate();
  customerData = customers;
  bookingData = bookings;
  roomData = rooms;
  hotel = new _Hotel__WEBPACK_IMPORTED_MODULE_3__["default"](roomData, bookingData, today);
}

function handleUserLogin(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('loginUsername');
  const userPasswordInput = document.getElementById('loginPassword');
  if (event.target.className === 'login-button') {
    determineUserType(userNameInput.value, userPasswordInput.value);
    clearLoginForm(userNameInput, userPasswordInput);
  }
}

function determineUserType(userNameInput, userPasswordInput) {
  currentUser = new _User__WEBPACK_IMPORTED_MODULE_1__["default"](userNameInput, customerData);
  currentUser.date = today;
  const userType = currentUser.determineUserType(userPasswordInput);
  removeDateInputError();
  if (userType === 'guest') {
    createGuest(currentUser, userPasswordInput);
  } else {
    displayLoginFormError();
  }
}

function displayLoginFormError() {
  loginForm.insertAdjacentHTML('afterend', `<h3 class="login-error error" id="loginError">This Username and Password is not recognized!</h3>`)
}

function clearLoginForm(userName, userPassword) {
  userName.value = '';
  userPassword.value = '';
}

function createGuest(currentUser, password) {
  currentUser.determineUserType(password);
  currentGuest = new _Guest__WEBPACK_IMPORTED_MODULE_2__["default"](currentUser.userName, customerData);
  currentGuest.date = today;
  updateGuestRecords();
  displayGuestDashboard();
}

function updateGuestRecords() {
  currentGuest.calculateAmountSpent(bookingData, roomData);
  currentGuest.sortBookingHistory(bookingData);
  currentGuest.sortBookingsByDate('past');
  currentGuest.sortBookingsByDate('future');
}

function displayGuestDashboard() {
  displayGuestDashboardView();
  displayPastGuestBookings();
  displayGuestBookingsToday();
  displayGuestFutureBookings();
  displayGuestName();
  displayGuestCost();
  displayTodaysDate();
}

function displayGuestDashboardView() {
  const guestView = document.getElementById('guestView');
  const loginView = document.getElementById('loginView');
  addClass(loginView);
  removeClass(guestView);
}

function displayPastGuestBookings() {
  const pastBookingSection = document.querySelector('.display-past-list');
  pastBookingSection.innerHTML = '';
  if (!currentGuest.pastBookings.length) {
    pastBookingSection.insertAdjacentHTML('beforeend', `<p class="display-history">You have not stayed here before! We look forward to having you.</p>`);
  } else {
    currentGuest.pastBookings.forEach(booking => {
      pastBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You stayed in room ${booking.roomNumber} on ${new Date(booking.date).toLocaleDateString()}</li>`);
    });
  }
}

function displayGuestBookingsToday() {
  const todayBookingSection = document.querySelector('.display-today-list');
  todayBookingSection.innerHTML = '';
  if (!currentGuest.currentBookings.length) {
    todayBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You don't have any stays booked today</li>`);
  } else {
    currentGuest.currentBookings.forEach(booking => {
      todayBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You are staying in Room ${booking.roomNumber} tonight</li>`);
    });
  }
}

function displayGuestFutureBookings() {
  const futureBookingSection = document.querySelector('.display-future-list');
  futureBookingSection.innerHTML = '';
  if (!currentGuest.futureBookings.length) {
    futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You don't have any stays planned in the future.</li>`);
  } else {
    currentGuest.futureBookings.forEach(booking => {
      futureBookingSection.insertAdjacentHTML('beforeend', `<li class="display-history">You'll be staying in room ${booking.roomNumber} on ${new Date(booking.date).toLocaleDateString()}</li>`);
    });
  }
}

function displayGuestName() {
  currentGuest.getValidUserID();
  const guestName = document.querySelector('.guest-nav-name')
  guestName.innerText = `Welcome ${currentGuest.getGuestName()}!`;
}

function displayGuestCost() {
  const guestCost = document.querySelector('.guest-nav-cost');
  guestCost.innerText = `You have spent $${currentGuest.totalAmountSpent} on your stays so far!`;
}

function displayTodaysDate() {
  const dateToday = document.querySelector('.guest-nav-date');
  const date = new Date().toLocaleDateString('en-US');
  dateToday.innerText = `Today's Date: ${date}`;
}

function displayGuestSearchView(date) {
  removeDateInputError();
  hideGuestDashboard();
  showGuestSearchView();
  determineOpenRooms(date);
}

function hideGuestDashboard() {
  const bookingCards = document.querySelector('.guest-bookings-view');
  const bookingDate = document.querySelector('.book-room-view')
  addClass(bookingCards);
  addClass(bookingDate);
}

function showGuestSearchView() {
  const guestSearch = document.querySelector('.guest-search-view');
  const roomCards = document.querySelector('.room-cards-view');
  const searchDate = document.querySelector('.room-types-open');
  searchDate.innerText = `Available Rooms for ${new Date(hotel.date).toLocaleDateString()}`;
  removeClass(guestSearch);
  removeClass(roomCards);
}

function addClass(element, className) {
  element.classList.add(className || 'hidden');
}

function removeClass(element, className) {
  element.classList.remove(className || 'hidden');
}

function determineOpenRooms(date) {
  const openRooms = hotel.findRoomsAvaiable(date);
  if (openRooms.length > 0) {
    displayOpenRooms(openRooms);
  } else {
    displayNoOpenRoomsMessage();
  }
}

function displayOpenRooms(openRooms) {
  const openRoomCard = document.querySelector('.room-cards-view');
  openRoomCard.innerHTML = '';
  openRooms.forEach(room => {
    openRoomCard.insertAdjacentHTML('beforeend', `
      <article class="room-card box" id=${room.number}>
      <h2 class="room-card-title">Room ${room.number}: ${room.roomType}</h2>
      <ul class="room-list">
        <li class="room-list-item">Number of Beds: ${room.numBeds}</li>
        <li class="room-list-item">Bed Size: ${room.bedSize}</li>
        <li class="room-list-item">Bidet: ${room.bidet}</li>
        <li class="room-list-item">Cost Per Night: $${room.costPerNight}</li>
      </ul>
      <button class="book-room-button">BOOK ROOM</button>
    </article>`);
  })
}

function displayNoOpenRoomsMessage() {
  const openRoomCard = document.querySelector('.room-cards-view');
  const guestSearch = document.getElementById('roomCards');
  openRoomCard.innerHTML = ''
  guestSearch.insertAdjacentHTML('afterbegin', `<h2 class="room-types-empty">We are so sorry, we don't have any open rooms on ${new Date(hotel.date).toLocaleDateString()}. Please adjust your search</h2>`);
}

function handleSearchByDate(event) {
  if (event.target.classList.contains('data-button')) {
    checkDateInputs(event);
  }
}

function checkDateInputs(event) {
  const dateInput = event.target.previousElementSibling.value.replaceAll("-", "/");
  if (today <= dateInput) {
    hotel.date = dateInput;
    filterOption.selectedIndex = 0;
    displayGuestSearchView(dateInput);
  } else {
    displayDateInputError();
  }
}

function displayDateInputError() {
  removeDateInputError();
  searchByDateSection.insertAdjacentHTML('afterend', `<h3 class="error date-view-title">Please enter a valid date</h3>`);
}

function removeDateInputError() {
  const errorMessage = document.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function handleGuestSearchClick(event) {
  if (event.target.classList.contains('return-home-button')) {
    hideGuestSearchView();
    showGuestDashboard();
  } else if (event.target.classList.contains('room-type-inputs')) {
    filterOption.addEventListener('input', handleFilterRooms)
  }
}

function handleFilterRooms(event) {
  const filteredRooms = hotel.filterRoomsByType(event.target.value);
  if (event.target.id !== 'roomTypes') {
    return;
  } else if (filteredRooms.length) {
    displayOpenRooms(filteredRooms);
  } else {
    displayNoOpenRoomsMessage();
  }
}

function showGuestDashboard() {
  const bookingCards = document.querySelector('.guest-bookings-view');
  const bookingDate = document.querySelector('.book-room-view')
  removeClass(bookingCards);
  removeClass(bookingDate);
}

function hideGuestSearchView() {
  const guestSearch = document.querySelector('.guest-search-view ');
  const roomCards = document.querySelector('.room-cards-view')
  addClass(guestSearch);
  addClass(roomCards);
}

function handleBookRoom(event) {
  if (event.target.classList.contains('book-room-button')) {
    const roomNumber = Number(event.target.parentNode.id);
    createBookingObject(roomNumber, event);
  }
}

function createBookingObject(roomNumberCard, event) {
  const bookingObj = {
    "userID": currentGuest.id,
    "date": hotel.date,
    "roomNumber": roomNumberCard
  }
  bookNewRoom(bookingObj, event);
}

function bookNewRoom(body, event) {
  _fetchAPIData__WEBPACK_IMPORTED_MODULE_4__["apiRequest"].postNewRoomBooking(body)
    .then(response => checkResponse(response, event))
    .then((booking) => updateBookingHistory(booking))
    .catch(error => displayServerError(error))
}

function displayServerError(error) {
  if (error.message === 'Failed to fetch') {
    const errorText = document.querySelectorAll('.room-card');
    errorText.forEach(button => {
      button.innerText = 'Please reload and try again';
    })
  }
}

function checkResponse(response, event) {
  if (response.ok) {
    displayConfirmation(event);
    return response.json();
  } else {
    displayBookingError(event);
  }
}

function displayConfirmation(event) {
  const bookBtn = event.target;
  bookBtn.insertAdjacentHTML('afterend', `<h3>Booking Successful</h3>`);
  bookBtn.remove();
}

function displayBookingError(event) {
  removeDateInputError();
  const bookBtn = event.target;
  bookBtn.insertAdjacentHTML('afterend', `<h3 class="error">Please Try Again</h3>`);
}

function updateBookingHistory(booking) {
  bookingData.push(booking.newBooking);
  updateGuestRecords();
  displayGuestCost();
  displayGuestBookingsToday(currentGuest);
  displayGuestFutureBookings(currentGuest);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9HdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSG90ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzdhYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoQVBJRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIs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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTZDOTsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLmxvZ2luLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgcGFkZGluZy1ib3R0b206IDIlOyB9XFxuXFxuLmxvZ2luLW1lc3NhZ2Uge1xcbiAgcGFkZGluZy10b3A6IDIlOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0LCAubG9naW4tZm9ybSAuZGF0ZS12aWV3LWlucHV0IGJ1dHRvbiwgLmRhdGUtdmlldy1pbnB1dCAubG9naW4tZm9ybSBidXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICAgIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG4gICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAubG9naW4tZm9ybSBidXR0b24ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBwYWRkaW5nOiAxJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzQTlGNDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbiAgICBmb250LXNpemU6IDFyZW07IH1cXG5cXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmxvZ2luLWVycm9yIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmd1ZXN0LW5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDElO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7IH1cXG5cXG4uZ3Vlc3QtbmF2LXJpZ2h0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgLmd1ZXN0LW5hdi1yaWdodCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGVuZDsgfVxcblxcbi5kYXRlLXZpZXcsIC5kYXRlLXZpZXctaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogLjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuZGF0ZS12aWV3IC5kYXRlLXZpZXctdGl0bGUsIC5kYXRlLXZpZXctaW5wdXQgLmRhdGUtdmlldy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcblxcbi5kYXRlLXZpZXctaW5wdXQge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMSUgMyU7IH1cXG4gIC5kYXRlLXZpZXctaW5wdXQgaW5wdXQsIC5kYXRlLXZpZXctaW5wdXQgYnV0dG9uIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgbWFyZ2luOiAxJTsgfVxcbiAgLmRhdGUtdmlldy1pbnB1dCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNBOUY0O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDElOyB9XFxuXFxuLmRhdGEtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmd1ZXN0LWJvb2tpbmdzLXZpZXcge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4OyB9XFxuICAuZ3Vlc3QtYm9va2luZ3MtdmlldyBwLCAuZ3Vlc3QtYm9va2luZ3MtdmlldyBsaSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtOyB9XFxuXFxuLmJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCREJEO1xcbiAgd2lkdGg6IDI4JTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMSU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDZweCAjQkRCREJEO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5yb29tLXR5cGUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIlIDA7IH1cXG4gIC5yb29tLXR5cGUtZm9ybSBoMiwgLnJvb20tdHlwZS1mb3JtIHNlbGVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDVweDsgfVxcblxcbi5yZXR1cm4taG9tZS1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IC41JSAxJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwM0E5RjQ7IH1cXG4gIC5yZXR1cm4taG9tZS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci13aWR0aDogNXB4OyB9XFxuXFxuLnJvb20tZmlsdGVyLWlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgLnJvb20tZmlsdGVyLWlucHV0cyBoMiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cXG4gIC5yb29tLWZpbHRlci1pbnB1dHMgc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAzQTlGNDtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLnJvb20tdHlwZS1pbnB1dHM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnJvb20tY2FyZHMtdmlldyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5yb29tLWxpc3Qge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiA1JTsgfVxcbiAgLnJvb20tbGlzdCBsaSB7XFxuICAgIHBhZGRpbmc6IDMlOyB9XFxuXFxuLmJvb2stcm9vbS1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAzJTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7IH1cXG4gIC5ib29rLXJvb20tYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDsgfVxcblxcbi5yb29tLXR5cGVzLWVtcHR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTI1cHggMTBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAuZ3Vlc3QtbmF2LXJpZ2h0IHtcXG4gICAgbWF4LXdpZHRoOiA1MCU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAubG9naW4tbmF2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubG9naW4tZm9ybSBpbnB1dCwgLmxvZ2luLWZvcm0gLmRhdGUtdmlldy1pbnB1dCBidXR0b24sIC5kYXRlLXZpZXctaW5wdXQgLmxvZ2luLWZvcm0gYnV0dG9uLCAubG9naW4tZm9ybSBidXR0b24ge1xcbiAgICB3aWR0aDogNjAlOyB9XFxuICAuZ3Vlc3QtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmd1ZXN0LW5hdiBoMiB7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmd1ZXN0LW5hdi1yaWdodCwgLmd1ZXN0LW5hdi1sZWZ0IHtcXG4gICAgbWluLXdpZHRoOiA5MCU7IH1cXG4gIC5kYXRlLXZpZXcsIC5kYXRlLXZpZXctaW5wdXQge1xcbiAgICBtaW4td2lkdGg6IDUwJTsgfVxcbiAgICAuZGF0ZS12aWV3IC5kYXRlLXZpZXctaW5wdXQsIC5kYXRlLXZpZXctaW5wdXQgLmRhdGUtdmlldy1pbnB1dCB7XFxuICAgICAgYm9yZGVyOiAwOyB9XFxuICAuZ3Vlc3QtYm9va2luZ3MtdmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5ib3gge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAucm9vbS1maWx0ZXItaW5wdXRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnJvb20tdHlwZS1mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLXZpZXcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ndWVzdC1sYW5kaW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2d1ZXN0LXNlYXJjaC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tZWRpYS1xdWVyaWVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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Yix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBTGpEcEI7RUtxREUsYUFBYSxFQUFBOztBQzFFZjtFRlFBO0lFTkksY0FBYyxFQUFBLEVBQ2Y7O0FBSUg7RUxPQTtJS0xJLGtCQUFrQixFQUFBO0VMZ0J0QjtJS1hNLFVBQVUsRUFBQTtFRmRoQjtJRENFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lHaUJqQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7SUFIcEI7TUFNTSxlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUFJeEI7SUFDRSxjQUFjLEVBQUE7RUZkbEI7SUVrQkksY0FBYyxFQUFBO0lBRGhCO01BSU0sU0FBUyxFQUFBO0VGaUJqQjtJRHJERSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0VDOERyQjtJRW5CSSxVQUFVLEVBQUE7RUR6QmQ7SUM2Qkksc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0VEbkR2QjtJQ3VESSxrQkFBa0IsRUFBQSxFQUNuQjs7QU5uQ0g7RU11Q0UsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIC8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuLy8gJHByaW1hcnktYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2Myw5NCwyNTEsMSkgMCUsIHJnYmEoMjUyLDcwLDEwNywxKSAxMDAlKTtcXG4vLyA7XFxuXFxuLy8gYm9keSB7XFxuLy8gICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbi8vIH1cXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZWVuO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubG9naW4tbmF2IHtcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXYtYmFyO1xcbiAgcGFkZGluZy10b3A6IDIlO1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbn1cXG5cXG4ubG9naW4tbWVzc2FnZSB7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDUlO1xcblxcbiAgICBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICBwYWRkaW5nOiAxJTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gICAgICBib3JkZXItY29sb3I6ICRibGFjaztcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICAgIHBhZGRpbmc6IDElO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAkYmxhY2s7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxufVxcblxcbi5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2dpbi1lcnJvciB7XFxuICBjb2xvcjogJGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiJG5hdi1iYXI6ICM0Q0FGNTA7XFxuJHRleHQ6ICNGRkZGRkY7XFxuJHNlY29uZGFyeS10ZXh0OiAjNzU3NTc1O1xcbiRncmVlbjogIzM4OEUzQztcXG4kbGlnaHQtZ3JlZW46ICNDOEU2Qzk7XFxuJGdyZXk6ICNCREJEQkQ7XFxuJGJsYWNrOiAjMjEyMTIxO1xcbiRhY2NlbnQ6ICMwM0E5RjQ7XFxuJGVycm9yOiAjZjAwYzBjO1wiLFwiQG1peGluIGZsZXgtY2VudGVyLWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBjYXJkcyB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVwiLFwiLmd1ZXN0LW5hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWJhcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxJTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbn1cXG5cXG4uZ3Vlc3QtbmF2LXJpZ2h0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgaDIge1xcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgfVxcbn1cXG5cXG4uZGF0ZS12aWV3IHtcXG4gIG1hcmdpbi10b3A6IC41JTtcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNvbHVtbjtcXG5cXG4gICAgLmRhdGUtdmlldy10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxufVxcblxcbi5kYXRlLXZpZXctaW5wdXQge1xcbiAgQGV4dGVuZCAuZGF0ZS12aWV3O1xcbiAgd2lkdGg6IDIwJTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMSUgMyU7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICBib3JkZXItY29sb3I6ICRibGFjaztcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgcGFkZGluZzogNSU7XFxuICAgICAgbWFyZ2luOiAxJTtcXG4gIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBAZXh0ZW5kIGlucHV0O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgcGFkZGluZzogNSU7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIG1hcmdpbjogMSU7IFxcbiAgfVxcbn1cXG5cXG4uZGF0YS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5ndWVzdC1ib29raW5ncy12aWV3IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICAgcCwgbGkge1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIH1cXG59XFxuXFxuLmJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcXG4gIHdpZHRoOiAyOCU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDRweCBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDElO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggJGdyZXk7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiLnJvb20tdHlwZS1mb3JtIHtcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNvbHVtbjtcXG4gIG1hcmdpbjogMiUgMDtcXG5cXG4gICAgaDIsIHNlbGVjdCB7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB9XFxufVxcblxcbi5yZXR1cm4taG9tZS1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IC41JSAxJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRhY2NlbnQ7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgfVxcbn1cXG5cXG4ucm9vbS1maWx0ZXItaW5wdXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBoMiB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgfVxcblxcbiAgICBzZWxlY3Qge1xcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRhY2NlbnQ7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxufVxcblxcbi5yb29tLXR5cGUtaW5wdXRzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJvb20tY2FyZHMtdmlldyB7XFxuICBAaW5jbHVkZSBjYXJkcztcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucm9vbS1saXN0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogNSU7XFxuXFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nOiAzJVxcbiAgICB9XFxufVxcblxcbi5ib29rLXJvb20tYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMyU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcbiAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgfVxcbn1cXG5cXG4ucm9vbS10eXBlcy1lbXB0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEyNXB4IDEwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkgeyBcXG4gIC5ndWVzdC1uYXYtcmlnaHQge1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gIC5sb2dpbi1uYXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubG9naW4tZm9ybSB7XFxuICAgIGlucHV0LCBidXR0b24ge1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5ndWVzdC1uYXYge1xcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlci1jb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICB9XFxuXFxuICAuZ3Vlc3QtbmF2LXJpZ2h0LCAuZ3Vlc3QtbmF2LWxlZnQge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5kYXRlLXZpZXcge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG5cXG4gICAgICAuZGF0ZS12aWV3LWlucHV0IHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICB9XFxuICB9XFxuXFxuICAuZ3Vlc3QtYm9va2luZ3MtdmlldyB7XFxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyLWNvbHVtbjtcXG4gIH1cXG4gIFxcbiAgLmJveCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAucm9vbS1maWx0ZXItaW5wdXRzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLnJvb20tdHlwZS1mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInXG5cbmNsYXNzIEd1ZXN0IGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lLCBjdXN0b21lckRhdGEpIHtcbiAgICBzdXBlcih1c2VyTmFtZSwgY3VzdG9tZXJEYXRhKTtcbiAgICB0aGlzLnBhc3RCb29raW5ncyA9IFtdO1xuICAgIHRoaXMuY3VycmVudEJvb2tpbmdzID0gW107XG4gICAgdGhpcy5mdXR1cmVCb29raW5ncyA9IFtdO1xuICAgIHRoaXMudG90YWxBbW91bnRTcGVudCA9IDA7XG4gIH1cblxuICBmaW5kR3Vlc3RCb29raW5nSGlzdG9yeShib29raW5nRGF0YSkge1xuICAgIHRoaXMuZ2V0VmFsaWRVc2VySUQoKTtcbiAgICByZXR1cm4gYm9va2luZ0RhdGEuZmlsdGVyKGJvb2tpbmcgPT4gYm9va2luZy51c2VySUQgPT09IHRoaXMuaWQpO1xuICB9XG5cbiAgY2FsY3VsYXRlQW1vdW50U3BlbnQoYm9va2luZ0RhdGEsIHJvb21EYXRhKSB7XG4gICAgY29uc3QgYm9va2luZ0hpc3RvcnkgPSB0aGlzLmZpbmRHdWVzdEJvb2tpbmdIaXN0b3J5KGJvb2tpbmdEYXRhKTtcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IHJvb21EYXRhLnJlZHVjZSgodG90YWwsIHJvb20pID0+IHtcbiAgICAgIGJvb2tpbmdIaXN0b3J5LmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICAgIGlmIChib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgICAgdG90YWwgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnRTcGVudCA9IHRvdGFsQW1vdW50LnRvRml4ZWQoMik7XG4gIH1cblxuICBzb3J0Qm9va2luZ0hpc3RvcnkoYm9va2luZ0RhdGEpIHtcbiAgICBjb25zdCBib29raW5nSGlzdG9yeSA9IHRoaXMuZmluZEd1ZXN0Qm9va2luZ0hpc3RvcnkoYm9va2luZ0RhdGEpO1xuICAgIGJvb2tpbmdIaXN0b3J5LmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSB0aGlzLmRhdGUgJiYgIXRoaXMuY3VycmVudEJvb2tpbmdzLmluY2x1ZGVzKGJvb2tpbmcpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9IGVsc2UgaWYgKERhdGUucGFyc2UoYm9va2luZy5kYXRlKSA+IERhdGUucGFyc2UodGhpcy5kYXRlKSAmJiAhdGhpcy5mdXR1cmVCb29raW5ncy5pbmNsdWRlcyhib29raW5nKSkge1xuICAgICAgICB0aGlzLmZ1dHVyZUJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhc3RCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzb3J0Qm9va2luZ3NCeURhdGUodGltZVBlcmlvZCkge1xuICAgIGlmICh0aGlzLmZ1dHVyZUJvb2tpbmdzLmxlbmd0aCA+IDAgJiYgdGltZVBlcmlvZCA9PT0gJ2Z1dHVyZScpIHtcbiAgICAgIHRoaXMuZnV0dXJlQm9va2luZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgYURhdGUgPSBEYXRlLnBhcnNlKGEuZGF0ZSk7XG4gICAgICAgIGxldCBiRGF0ZSA9IERhdGUucGFyc2UoYi5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGJEYXRlIC0gYURhdGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFzdEJvb2tpbmdzLmxlbmd0aCA+IDAgJiYgdGltZVBlcmlvZCA9PT0gJ3Bhc3QnKSB7XG4gICAgICB0aGlzLnBhc3RCb29raW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBhRGF0ZSA9IERhdGUucGFyc2UoYS5kYXRlKTtcbiAgICAgICAgbGV0IGJEYXRlID0gRGF0ZS5wYXJzZShiLmRhdGUpO1xuICAgICAgICByZXR1cm4gYURhdGUgLSBiRGF0ZTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1ZXN0O1xuXG4iLCJjbGFzcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKHJvb21EYXRhLCBib29raW5nRGF0YSwgZGF0ZSkge1xuICAgIHRoaXMucm9vbXMgPSByb29tRGF0YTtcbiAgICB0aGlzLmJvb2tpbmdzID0gYm9va2luZ0RhdGE7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmF2YWlhYmxlUm9vbXMgPSBbXTtcbiAgfVxuXG4gIGZpbmRSb29tc0F2YWlhYmxlKGRhdGUpIHtcbiAgICBjb25zdCBib29rZWRSb29tTnVtYmVycyA9IHRoaXMuYm9va2luZ3MucmVkdWNlKChyb29tTnVtYmVycywgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZSkge1xuICAgICAgICByb29tTnVtYmVycy5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vbU51bWJlcnM7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG9wZW5Sb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKHJvb20gPT4gIWJvb2tlZFJvb21OdW1iZXJzLmluY2x1ZGVzKHJvb20ubnVtYmVyKSk7XG4gICAgdGhpcy5hdmFpYWJsZVJvb21zID0gb3BlblJvb21zO1xuICAgIHJldHVybiBvcGVuUm9vbXM7XG4gIH1cblxuICBmaWx0ZXJSb29tc0J5VHlwZShyb29tdHlwZSkge1xuICAgIGlmIChyb29tdHlwZSA9PT0gJ2FsbCByb29tcycpIHtcbiAgICAgIHJldHVybiB0aGlzLmF2YWlhYmxlUm9vbXM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF2YWlhYmxlUm9vbXMuZmlsdGVyKHJvb20gPT4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbXR5cGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWw7IiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJOYW1lLCBjdXN0b21lckRhdGEpIHtcbiAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgdGhpcy5wYXNzd29yZCA9ICdvdmVybG9vazIwMjEnO1xuICAgIHRoaXMuaWQ7XG4gICAgdGhpcy5jdXN0b21lckRhdGEgPSBjdXN0b21lckRhdGE7XG4gICAgdGhpcy5uYW1lO1xuICAgIHRoaXMuZ3Vlc3QgPSBmYWxzZTtcbiAgICB0aGlzLm1hbmFnZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFZhbGlkVXNlcklEKCkge1xuICAgIHRoaXMuaWQgPSBwYXJzZUludCh0aGlzLnVzZXJOYW1lLnNsaWNlKDgpKTtcbiAgICBpZiAodGhpcy5pZCA+IDAgJiYgdGhpcy5pZCA8IDUxKSB7XG4gICAgICB0aGlzLmd1ZXN0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnZ3Vlc3QnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0Vycm9yLCBub3QgYSB2YWxpZCB1c2VybmFtZSdcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVVc2VyVHlwZShwYXNzd29yZCkge1xuICAgIGlmICh0aGlzLnVzZXJOYW1lID09PSAnbWFuYWdlcicgJiYgcGFzc3dvcmQgPT09IHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgdGhpcy5tYW5hZ2VyID0gdHJ1ZTtcbiAgICAgIHJldHVybiAnbWFuYWdlcic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXJOYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpICYmIHBhc3N3b3JkID09PSB0aGlzLnBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZFVzZXJJRCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ0Vycm9yLCBub3QgYSB2YWxpZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQnO1xuICAgIH1cbiAgfVxuXG4gIGdldEd1ZXN0TmFtZSgpIHtcbiAgICBjb25zdCBjdXJyZW50R3Vlc3QgPSB0aGlzLmN1c3RvbWVyRGF0YS5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gdGhpcy5pZCk7XG4gICAgaWYgKGN1cnJlbnRHdWVzdCkge1xuICAgICAgdGhpcy5uYW1lID0gY3VycmVudEd1ZXN0Lm5hbWU7XG4gICAgICByZXR1cm4gY3VycmVudEd1ZXN0Lm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgRXJyb3IsIGd1ZXN0IG5vdCBvbiBmaWxlYFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY29uc3QgYXBpUmVxdWVzdCA9IHtcblxuICBnZXRCb29raW5nRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vb3Zlcmxvb2tob3RlbC5oZXJva3VhcHAuY29tL2FwaS92MS9ib29raW5ncycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3MpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGxheUVycm9yKGVycm9yKSlcbiAgfSxcblxuICBnZXRDdXN0b21lckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL292ZXJsb29raG90ZWwuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY3VzdG9tZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5jdXN0b21lcnMpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGxheUVycm9yKGVycm9yKSlcbiAgfSxcblxuICBnZXRSb29tRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vb3Zlcmxvb2tob3RlbC5oZXJva3VhcHAuY29tL2FwaS92MS9yb29tcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEucm9vbXMpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGxheUVycm9yKGVycm9yKSlcbiAgfSxcblxuICBwb3N0TmV3Um9vbUJvb2tpbmcoYm9keSkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9vdmVybG9va2hvdGVsLmhlcm9rdWFwcC5jb20vYXBpL3YxL2Jvb2tpbmdzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UpXG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUVycm9yID0gKGVycm9yKSA9PiB7XG4gIGlmIChlcnJvci5tZXNzYWdlID09PSAnRmFpbGVkIHRvIGZldGNoJykge1xuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luVmlldycpO1xuICAgIG1haW5QYWdlLmlubmVyVGV4dCA9ICdPb3BzLCBsb29rcyBsaWtlIHNvbWV0aGluZyB3ZW50IHdyb25nIHBsZWFzZSByZWZyZXNoIGFuZCB0cnkgYWdhaW4nO1xuICB9XG59IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgR3Vlc3QgZnJvbSAnLi9HdWVzdCc7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9Ib3RlbCc7XG5pbXBvcnQgeyBhcGlSZXF1ZXN0IH0gZnJvbSAnLi9mZXRjaEFQSURhdGEnO1xuXG5sZXQgY3VzdG9tZXJEYXRhO1xubGV0IGJvb2tpbmdEYXRhO1xubGV0IHJvb21EYXRhO1xubGV0IGN1cnJlbnRHdWVzdDtcbmxldCBjdXJyZW50VXNlcjtcbmxldCBob3RlbDtcbmxldCB0b2RheTtcblxuY29uc3QgZ3Vlc3RTZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbUZvcm0nKTtcbmNvbnN0IGZpbHRlck9wdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tVHlwZXMnKTtcbmNvbnN0IHNlYXJjaEJ5RGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoU2VjdGlvbicpO1xuY29uc3QgYXZhaWFibGVSb29tQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tQ2FyZHMnKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkZvcm0nKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnZXRBbGxBUElEYXRhKTtcbmxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVVzZXJMb2dpbik7XG5ndWVzdFNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUd1ZXN0U2VhcmNoQ2xpY2spO1xuc2VhcmNoQnlEYXRlU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaEJ5RGF0ZSk7XG5hdmFpYWJsZVJvb21DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQm9va1Jvb20pXG5cblxuZnVuY3Rpb24gZ2V0QWxsQVBJRGF0YSgpIHtcbiAgY29uc3QgY3VzdG9tZXJzID0gYXBpUmVxdWVzdC5nZXRDdXN0b21lckRhdGEoKTtcbiAgY29uc3QgYm9va2luZ3MgPSBhcGlSZXF1ZXN0LmdldEJvb2tpbmdEYXRhKCk7XG4gIGNvbnN0IHJvb21zID0gYXBpUmVxdWVzdC5nZXRSb29tRGF0YSgpO1xuICBQcm9taXNlLmFsbChbY3VzdG9tZXJzLCBib29raW5ncywgcm9vbXNdKS50aGVuKGRhdGEgPT4ge1xuICAgIGFzc2lnbkFQSURhdGEoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xuICBjb25zdCB1bmZvcm1hdHRlZERhdGUgPSBuZXcgRGF0ZTtcbiAgY29uc3QgZGF0ZVN0cmluZyA9IHVuZm9ybWF0dGVkRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJmci1DQVwiLCB7XG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgIGRheTogXCIyLWRpZ2l0XCJcbiAgfSk7XG4gIHRvZGF5ID0gZGF0ZVN0cmluZy5zcGxpdCgnLScpLmpvaW4oJy8nKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduQVBJRGF0YShjdXN0b21lcnMsIGJvb2tpbmdzLCByb29tcykge1xuICBnZXRDdXJyZW50RGF0ZSgpO1xuICBjdXN0b21lckRhdGEgPSBjdXN0b21lcnM7XG4gIGJvb2tpbmdEYXRhID0gYm9va2luZ3M7XG4gIHJvb21EYXRhID0gcm9vbXM7XG4gIGhvdGVsID0gbmV3IEhvdGVsKHJvb21EYXRhLCBib29raW5nRGF0YSwgdG9kYXkpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVVc2VyTG9naW4oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpblVzZXJuYW1lJyk7XG4gIGNvbnN0IHVzZXJQYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luUGFzc3dvcmQnKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdsb2dpbi1idXR0b24nKSB7XG4gICAgZGV0ZXJtaW5lVXNlclR5cGUodXNlck5hbWVJbnB1dC52YWx1ZSwgdXNlclBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgIGNsZWFyTG9naW5Gb3JtKHVzZXJOYW1lSW5wdXQsIHVzZXJQYXNzd29yZElucHV0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVVc2VyVHlwZSh1c2VyTmFtZUlucHV0LCB1c2VyUGFzc3dvcmRJbnB1dCkge1xuICBjdXJyZW50VXNlciA9IG5ldyBVc2VyKHVzZXJOYW1lSW5wdXQsIGN1c3RvbWVyRGF0YSk7XG4gIGN1cnJlbnRVc2VyLmRhdGUgPSB0b2RheTtcbiAgY29uc3QgdXNlclR5cGUgPSBjdXJyZW50VXNlci5kZXRlcm1pbmVVc2VyVHlwZSh1c2VyUGFzc3dvcmRJbnB1dCk7XG4gIHJlbW92ZURhdGVJbnB1dEVycm9yKCk7XG4gIGlmICh1c2VyVHlwZSA9PT0gJ2d1ZXN0Jykge1xuICAgIGNyZWF0ZUd1ZXN0KGN1cnJlbnRVc2VyLCB1c2VyUGFzc3dvcmRJbnB1dCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheUxvZ2luRm9ybUVycm9yKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvZ2luRm9ybUVycm9yKCkge1xuICBsb2dpbkZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8aDMgY2xhc3M9XCJsb2dpbi1lcnJvciBlcnJvclwiIGlkPVwibG9naW5FcnJvclwiPlRoaXMgVXNlcm5hbWUgYW5kIFBhc3N3b3JkIGlzIG5vdCByZWNvZ25pemVkITwvaDM+YClcbn1cblxuZnVuY3Rpb24gY2xlYXJMb2dpbkZvcm0odXNlck5hbWUsIHVzZXJQYXNzd29yZCkge1xuICB1c2VyTmFtZS52YWx1ZSA9ICcnO1xuICB1c2VyUGFzc3dvcmQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3Vlc3QoY3VycmVudFVzZXIsIHBhc3N3b3JkKSB7XG4gIGN1cnJlbnRVc2VyLmRldGVybWluZVVzZXJUeXBlKHBhc3N3b3JkKTtcbiAgY3VycmVudEd1ZXN0ID0gbmV3IEd1ZXN0KGN1cnJlbnRVc2VyLnVzZXJOYW1lLCBjdXN0b21lckRhdGEpO1xuICBjdXJyZW50R3Vlc3QuZGF0ZSA9IHRvZGF5O1xuICB1cGRhdGVHdWVzdFJlY29yZHMoKTtcbiAgZGlzcGxheUd1ZXN0RGFzaGJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUd1ZXN0UmVjb3JkcygpIHtcbiAgY3VycmVudEd1ZXN0LmNhbGN1bGF0ZUFtb3VudFNwZW50KGJvb2tpbmdEYXRhLCByb29tRGF0YSk7XG4gIGN1cnJlbnRHdWVzdC5zb3J0Qm9va2luZ0hpc3RvcnkoYm9va2luZ0RhdGEpO1xuICBjdXJyZW50R3Vlc3Quc29ydEJvb2tpbmdzQnlEYXRlKCdwYXN0Jyk7XG4gIGN1cnJlbnRHdWVzdC5zb3J0Qm9va2luZ3NCeURhdGUoJ2Z1dHVyZScpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3REYXNoYm9hcmQoKSB7XG4gIGRpc3BsYXlHdWVzdERhc2hib2FyZFZpZXcoKTtcbiAgZGlzcGxheVBhc3RHdWVzdEJvb2tpbmdzKCk7XG4gIGRpc3BsYXlHdWVzdEJvb2tpbmdzVG9kYXkoKTtcbiAgZGlzcGxheUd1ZXN0RnV0dXJlQm9va2luZ3MoKTtcbiAgZGlzcGxheUd1ZXN0TmFtZSgpO1xuICBkaXNwbGF5R3Vlc3RDb3N0KCk7XG4gIGRpc3BsYXlUb2RheXNEYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHdWVzdERhc2hib2FyZFZpZXcoKSB7XG4gIGNvbnN0IGd1ZXN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWVzdFZpZXcnKTtcbiAgY29uc3QgbG9naW5WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luVmlldycpO1xuICBhZGRDbGFzcyhsb2dpblZpZXcpO1xuICByZW1vdmVDbGFzcyhndWVzdFZpZXcpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFzdEd1ZXN0Qm9va2luZ3MoKSB7XG4gIGNvbnN0IHBhc3RCb29raW5nU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXBhc3QtbGlzdCcpO1xuICBwYXN0Qm9va2luZ1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIGlmICghY3VycmVudEd1ZXN0LnBhc3RCb29raW5ncy5sZW5ndGgpIHtcbiAgICBwYXN0Qm9va2luZ1NlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPHAgY2xhc3M9XCJkaXNwbGF5LWhpc3RvcnlcIj5Zb3UgaGF2ZSBub3Qgc3RheWVkIGhlcmUgYmVmb3JlISBXZSBsb29rIGZvcndhcmQgdG8gaGF2aW5nIHlvdS48L3A+YCk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEd1ZXN0LnBhc3RCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgcGFzdEJvb2tpbmdTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cImRpc3BsYXktaGlzdG9yeVwiPllvdSBzdGF5ZWQgaW4gcm9vbSAke2Jvb2tpbmcucm9vbU51bWJlcn0gb24gJHtuZXcgRGF0ZShib29raW5nLmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvbGk+YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUd1ZXN0Qm9va2luZ3NUb2RheSgpIHtcbiAgY29uc3QgdG9kYXlCb29raW5nU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXRvZGF5LWxpc3QnKTtcbiAgdG9kYXlCb29raW5nU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgaWYgKCFjdXJyZW50R3Vlc3QuY3VycmVudEJvb2tpbmdzLmxlbmd0aCkge1xuICAgIHRvZGF5Qm9va2luZ1NlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGNsYXNzPVwiZGlzcGxheS1oaXN0b3J5XCI+WW91IGRvbid0IGhhdmUgYW55IHN0YXlzIGJvb2tlZCB0b2RheTwvbGk+YCk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEd1ZXN0LmN1cnJlbnRCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgdG9kYXlCb29raW5nU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGkgY2xhc3M9XCJkaXNwbGF5LWhpc3RvcnlcIj5Zb3UgYXJlIHN0YXlpbmcgaW4gUm9vbSAke2Jvb2tpbmcucm9vbU51bWJlcn0gdG9uaWdodDwvbGk+YCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUd1ZXN0RnV0dXJlQm9va2luZ3MoKSB7XG4gIGNvbnN0IGZ1dHVyZUJvb2tpbmdTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktZnV0dXJlLWxpc3QnKTtcbiAgZnV0dXJlQm9va2luZ1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIGlmICghY3VycmVudEd1ZXN0LmZ1dHVyZUJvb2tpbmdzLmxlbmd0aCkge1xuICAgIGZ1dHVyZUJvb2tpbmdTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cImRpc3BsYXktaGlzdG9yeVwiPllvdSBkb24ndCBoYXZlIGFueSBzdGF5cyBwbGFubmVkIGluIHRoZSBmdXR1cmUuPC9saT5gKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50R3Vlc3QuZnV0dXJlQm9va2luZ3MuZm9yRWFjaChib29raW5nID0+IHtcbiAgICAgIGZ1dHVyZUJvb2tpbmdTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cImRpc3BsYXktaGlzdG9yeVwiPllvdSdsbCBiZSBzdGF5aW5nIGluIHJvb20gJHtib29raW5nLnJvb21OdW1iZXJ9IG9uICR7bmV3IERhdGUoYm9va2luZy5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX08L2xpPmApO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHdWVzdE5hbWUoKSB7XG4gIGN1cnJlbnRHdWVzdC5nZXRWYWxpZFVzZXJJRCgpO1xuICBjb25zdCBndWVzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3QtbmF2LW5hbWUnKVxuICBndWVzdE5hbWUuaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtjdXJyZW50R3Vlc3QuZ2V0R3Vlc3ROYW1lKCl9IWA7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHdWVzdENvc3QoKSB7XG4gIGNvbnN0IGd1ZXN0Q29zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1uYXYtY29zdCcpO1xuICBndWVzdENvc3QuaW5uZXJUZXh0ID0gYFlvdSBoYXZlIHNwZW50ICQke2N1cnJlbnRHdWVzdC50b3RhbEFtb3VudFNwZW50fSBvbiB5b3VyIHN0YXlzIHNvIGZhciFgO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlzRGF0ZSgpIHtcbiAgY29uc3QgZGF0ZVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LW5hdi1kYXRlJyk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnKTtcbiAgZGF0ZVRvZGF5LmlubmVyVGV4dCA9IGBUb2RheSdzIERhdGU6ICR7ZGF0ZX1gO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3RTZWFyY2hWaWV3KGRhdGUpIHtcbiAgcmVtb3ZlRGF0ZUlucHV0RXJyb3IoKTtcbiAgaGlkZUd1ZXN0RGFzaGJvYXJkKCk7XG4gIHNob3dHdWVzdFNlYXJjaFZpZXcoKTtcbiAgZGV0ZXJtaW5lT3BlblJvb21zKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBoaWRlR3Vlc3REYXNoYm9hcmQoKSB7XG4gIGNvbnN0IGJvb2tpbmdDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1ib29raW5ncy12aWV3Jyk7XG4gIGNvbnN0IGJvb2tpbmdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcm9vbS12aWV3JylcbiAgYWRkQ2xhc3MoYm9va2luZ0NhcmRzKTtcbiAgYWRkQ2xhc3MoYm9va2luZ0RhdGUpO1xufVxuXG5mdW5jdGlvbiBzaG93R3Vlc3RTZWFyY2hWaWV3KCkge1xuICBjb25zdCBndWVzdFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1zZWFyY2gtdmlldycpO1xuICBjb25zdCByb29tQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbS1jYXJkcy12aWV3Jyk7XG4gIGNvbnN0IHNlYXJjaERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbS10eXBlcy1vcGVuJyk7XG4gIHNlYXJjaERhdGUuaW5uZXJUZXh0ID0gYEF2YWlsYWJsZSBSb29tcyBmb3IgJHtuZXcgRGF0ZShob3RlbC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1gO1xuICByZW1vdmVDbGFzcyhndWVzdFNlYXJjaCk7XG4gIHJlbW92ZUNsYXNzKHJvb21DYXJkcyk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lIHx8ICdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUgfHwgJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVPcGVuUm9vbXMoZGF0ZSkge1xuICBjb25zdCBvcGVuUm9vbXMgPSBob3RlbC5maW5kUm9vbXNBdmFpYWJsZShkYXRlKTtcbiAgaWYgKG9wZW5Sb29tcy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheU9wZW5Sb29tcyhvcGVuUm9vbXMpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlOb09wZW5Sb29tc01lc3NhZ2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5T3BlblJvb21zKG9wZW5Sb29tcykge1xuICBjb25zdCBvcGVuUm9vbUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbS1jYXJkcy12aWV3Jyk7XG4gIG9wZW5Sb29tQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgb3BlblJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgb3BlblJvb21DYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQgYm94XCIgaWQ9JHtyb29tLm51bWJlcn0+XG4gICAgICA8aDIgY2xhc3M9XCJyb29tLWNhcmQtdGl0bGVcIj5Sb29tICR7cm9vbS5udW1iZXJ9OiAke3Jvb20ucm9vbVR5cGV9PC9oMj5cbiAgICAgIDx1bCBjbGFzcz1cInJvb20tbGlzdFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJyb29tLWxpc3QtaXRlbVwiPk51bWJlciBvZiBCZWRzOiAke3Jvb20ubnVtQmVkc308L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJyb29tLWxpc3QtaXRlbVwiPkJlZCBTaXplOiAke3Jvb20uYmVkU2l6ZX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJyb29tLWxpc3QtaXRlbVwiPkJpZGV0OiAke3Jvb20uYmlkZXR9PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicm9vbS1saXN0LWl0ZW1cIj5Db3N0IFBlciBOaWdodDogJCR7cm9vbS5jb3N0UGVyTmlnaHR9PC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay1yb29tLWJ1dHRvblwiPkJPT0sgUk9PTTwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5gKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vT3BlblJvb21zTWVzc2FnZSgpIHtcbiAgY29uc3Qgb3BlblJvb21DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb20tY2FyZHMtdmlldycpO1xuICBjb25zdCBndWVzdFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tQ2FyZHMnKTtcbiAgb3BlblJvb21DYXJkLmlubmVySFRNTCA9ICcnXG4gIGd1ZXN0U2VhcmNoLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGA8aDIgY2xhc3M9XCJyb29tLXR5cGVzLWVtcHR5XCI+V2UgYXJlIHNvIHNvcnJ5LCB3ZSBkb24ndCBoYXZlIGFueSBvcGVuIHJvb21zIG9uICR7bmV3IERhdGUoaG90ZWwuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9LiBQbGVhc2UgYWRqdXN0IHlvdXIgc2VhcmNoPC9oMj5gKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnlEYXRlKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXRhLWJ1dHRvbicpKSB7XG4gICAgY2hlY2tEYXRlSW5wdXRzKGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0RhdGVJbnB1dHMoZXZlbnQpIHtcbiAgY29uc3QgZGF0ZUlucHV0ID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUucmVwbGFjZUFsbChcIi1cIiwgXCIvXCIpO1xuICBpZiAodG9kYXkgPD0gZGF0ZUlucHV0KSB7XG4gICAgaG90ZWwuZGF0ZSA9IGRhdGVJbnB1dDtcbiAgICBmaWx0ZXJPcHRpb24uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgZGlzcGxheUd1ZXN0U2VhcmNoVmlldyhkYXRlSW5wdXQpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlEYXRlSW5wdXRFcnJvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRlSW5wdXRFcnJvcigpIHtcbiAgcmVtb3ZlRGF0ZUlucHV0RXJyb3IoKTtcbiAgc2VhcmNoQnlEYXRlU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgYDxoMyBjbGFzcz1cImVycm9yIGRhdGUtdmlldy10aXRsZVwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGU8L2gzPmApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEYXRlSW5wdXRFcnJvcigpIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICBlcnJvck1lc3NhZ2UucmVtb3ZlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlR3Vlc3RTZWFyY2hDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV0dXJuLWhvbWUtYnV0dG9uJykpIHtcbiAgICBoaWRlR3Vlc3RTZWFyY2hWaWV3KCk7XG4gICAgc2hvd0d1ZXN0RGFzaGJvYXJkKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncm9vbS10eXBlLWlucHV0cycpKSB7XG4gICAgZmlsdGVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgaGFuZGxlRmlsdGVyUm9vbXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRmlsdGVyUm9vbXMoZXZlbnQpIHtcbiAgY29uc3QgZmlsdGVyZWRSb29tcyA9IGhvdGVsLmZpbHRlclJvb21zQnlUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIGlmIChldmVudC50YXJnZXQuaWQgIT09ICdyb29tVHlwZXMnKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGZpbHRlcmVkUm9vbXMubGVuZ3RoKSB7XG4gICAgZGlzcGxheU9wZW5Sb29tcyhmaWx0ZXJlZFJvb21zKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Tm9PcGVuUm9vbXNNZXNzYWdlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0d1ZXN0RGFzaGJvYXJkKCkge1xuICBjb25zdCBib29raW5nQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3QtYm9va2luZ3MtdmlldycpO1xuICBjb25zdCBib29raW5nRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXJvb20tdmlldycpXG4gIHJlbW92ZUNsYXNzKGJvb2tpbmdDYXJkcyk7XG4gIHJlbW92ZUNsYXNzKGJvb2tpbmdEYXRlKTtcbn1cblxuZnVuY3Rpb24gaGlkZUd1ZXN0U2VhcmNoVmlldygpIHtcbiAgY29uc3QgZ3Vlc3RTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3Qtc2VhcmNoLXZpZXcgJyk7XG4gIGNvbnN0IHJvb21DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb29tLWNhcmRzLXZpZXcnKVxuICBhZGRDbGFzcyhndWVzdFNlYXJjaCk7XG4gIGFkZENsYXNzKHJvb21DYXJkcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJvb2tSb29tKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib29rLXJvb20tYnV0dG9uJykpIHtcbiAgICBjb25zdCByb29tTnVtYmVyID0gTnVtYmVyKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBjcmVhdGVCb29raW5nT2JqZWN0KHJvb21OdW1iZXIsIGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nT2JqZWN0KHJvb21OdW1iZXJDYXJkLCBldmVudCkge1xuICBjb25zdCBib29raW5nT2JqID0ge1xuICAgIFwidXNlcklEXCI6IGN1cnJlbnRHdWVzdC5pZCxcbiAgICBcImRhdGVcIjogaG90ZWwuZGF0ZSxcbiAgICBcInJvb21OdW1iZXJcIjogcm9vbU51bWJlckNhcmRcbiAgfVxuICBib29rTmV3Um9vbShib29raW5nT2JqLCBldmVudCk7XG59XG5cbmZ1bmN0aW9uIGJvb2tOZXdSb29tKGJvZHksIGV2ZW50KSB7XG4gIGFwaVJlcXVlc3QucG9zdE5ld1Jvb21Cb29raW5nKGJvZHkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY2hlY2tSZXNwb25zZShyZXNwb25zZSwgZXZlbnQpKVxuICAgIC50aGVuKChib29raW5nKSA9PiB1cGRhdGVCb29raW5nSGlzdG9yeShib29raW5nKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGxheVNlcnZlckVycm9yKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlcnZlckVycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvci5tZXNzYWdlID09PSAnRmFpbGVkIHRvIGZldGNoJykge1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb29tLWNhcmQnKTtcbiAgICBlcnJvclRleHQuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmlubmVyVGV4dCA9ICdQbGVhc2UgcmVsb2FkIGFuZCB0cnkgYWdhaW4nO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZSwgZXZlbnQpIHtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgZGlzcGxheUNvbmZpcm1hdGlvbihldmVudCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5Qm9va2luZ0Vycm9yKGV2ZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q29uZmlybWF0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IGJvb2tCdG4gPSBldmVudC50YXJnZXQ7XG4gIGJvb2tCdG4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8aDM+Qm9va2luZyBTdWNjZXNzZnVsPC9oMz5gKTtcbiAgYm9va0J0bi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvb2tpbmdFcnJvcihldmVudCkge1xuICByZW1vdmVEYXRlSW5wdXRFcnJvcigpO1xuICBjb25zdCBib29rQnRuID0gZXZlbnQudGFyZ2V0O1xuICBib29rQnRuLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgPGgzIGNsYXNzPVwiZXJyb3JcIj5QbGVhc2UgVHJ5IEFnYWluPC9oMz5gKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQm9va2luZ0hpc3RvcnkoYm9va2luZykge1xuICBib29raW5nRGF0YS5wdXNoKGJvb2tpbmcubmV3Qm9va2luZyk7XG4gIHVwZGF0ZUd1ZXN0UmVjb3JkcygpO1xuICBkaXNwbGF5R3Vlc3RDb3N0KCk7XG4gIGRpc3BsYXlHdWVzdEJvb2tpbmdzVG9kYXkoY3VycmVudEd1ZXN0KTtcbiAgZGlzcGxheUd1ZXN0RnV0dXJlQm9va2luZ3MoY3VycmVudEd1ZXN0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9