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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./source/css/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/css/reset.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nhtml{\\r\\n\\theight: 100%;\\r\\n}\\r\\nbody {\\r\\n\\theight: 100%;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./source/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./source/css/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/css/style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./source/css/reset.css\");\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#header {\\r\\n    height: 80px;\\r\\n    background-color: rgb(105, 105, 105);\\r\\n}\\r\\n\\r\\n#main {\\r\\n    flex: auto;\\r\\n    /* background-color: rgb(138, 137, 137); */\\r\\n}\\r\\n\\r\\n.container{\\r\\n    margin: 0 auto;\\r\\n    width: 98%;\\r\\n    height:100%;\\r\\n}\\r\\n\\r\\n/* header */\\r\\n.header_title{\\r\\n    float: left;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.header_title h1{\\r\\n    font-size: 24px;\\r\\n    font-weight: bold;\\r\\n    color: #ffffff;\\r\\n}\\r\\n\\r\\n.header_nav{\\r\\n    float: right;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n/* main */\\r\\n.rcolumn_divs{\\r\\n    overflow-x: auto;\\r\\n    display: flex;\\r\\n    height: calc(100% - 32px);\\r\\n    margin: 16px;\\r\\n}\\r\\n\\r\\n.rcolumn{\\r\\n    min-width: 300px;\\r\\n    max-width: 300px;\\r\\n    border-radius: 6px;\\r\\n    background-color: #eff1f3;\\r\\n    margin-right: 16px;\\r\\n    overflow: auto;\\r\\n    border: 1px solid #e1e4e8;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.add_rcolumn{\\r\\n    min-width: 300px;\\r\\n    max-width: 300px;\\r\\n    display: block;\\r\\n    height: fit-content;\\r\\n    border-radius: 6px;\\r\\n    border: 3px dashed #e1e4e8;\\r\\n    background-color: #ffffff;\\r\\n\\r\\n}\\r\\n\\r\\n.add_rcolumn button{\\r\\n    width: 100%;\\r\\n    padding: 40px 0;\\r\\n    background-color: #fff;\\r\\n    border: none;\\r\\n}\\r\\n.add_rcolumn button:hover{\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.add_rcolumn button:focus{\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n\\r\\n.rcolumn_title {\\r\\n    padding: 8px;\\r\\n}\\r\\n\\r\\n.rcolumn_title span{\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    font-size: 12px;\\r\\n    line-height: 20px;\\r\\n    border-radius: 50%;\\r\\n    background-color: rgb(212, 212, 212);\\r\\n    transform: translateY(-2px);\\r\\n}\\r\\n\\r\\n.rcolumn_title h2{\\r\\n    display: inline;\\r\\n    font-weight: bold;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\n.rcolumn_cards{\\r\\n    flex: auto;\\r\\n    height: 0;\\r\\n}\\r\\n\\r\\n.draggable {\\r\\n    cursor: move;\\r\\n}\\r\\n\\r\\n.memo_card {\\r\\n    background-color: #fff;\\r\\n    margin: 6px 0;\\r\\n    border: 1px solid #e1e4e8;\\r\\n    border-radius: 6px;\\r\\n    padding: 8px;\\r\\n    padding-left: 32px;\\r\\n    line-height: 1.5;\\r\\n}\\r\\n\\r\\n.memo_card:hover {\\r\\n    border-color: #d1d5da;\\r\\n    box-shadow: 0 1px 3px rgba(106,115,125,.3);\\r\\n}\\r\\n\\r\\n.card_content {\\r\\n    \\r\\n}\\r\\n\\r\\n.card_author::before {\\r\\n    font-size: 12px;\\r\\n    content: 'Add By ';\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./source/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/component/header.js":
/*!************************************!*\
  !*** ./source/component/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tools.js */ \"./source/utils/tools.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\r\n    constructor(isLogin){\r\n        this.init(isLogin);\r\n    }\r\n    async init(isLogin){\r\n        this.render(isLogin);\r\n        this.addEvent(isLogin);\r\n    }\r\n\r\n    render(isLogin){\r\n        // console.log(isLogin);\r\n        const sw = isLogin.isLogin ? `<span>${isLogin.id}</span><button type=\"button\" id=\"btn_logout\">로그아웃</button>` : `<button type=\"button\" id=\"btn_login\">로그인</button>`\r\n        const header_layer = `\r\n            <div class=\"container flex_header\">\r\n                <div class=\"header_title\"><h1>To Do 서비스</h1></div>\r\n                <nav class=\"header_nav\">\r\n                    ${sw}\r\n                    <button type=\"button\" id=\"btn_menu\">메뉴</button>\r\n                </nav>\r\n            </div>\r\n        `;\r\n        Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#header').innerHTML = header_layer;\r\n    }\r\n    \r\n    addEvent(isLogin){\r\n        if(isLogin.isLogin){\r\n            Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#btn_logout\").addEventListener('click', this.logoutHandler);\r\n        } else{\r\n            Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#btn_login\").addEventListener('click', this.loginHandler);\r\n        }\r\n    }\r\n\r\n    async logoutHandler(){\r\n        const logout = await Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"fetch_get\"])('/api/member/logout');\r\n        // console.log(logout);\r\n        location.reload();\r\n    }\r\n\r\n    async loginHandler(){\r\n        const login = await Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"fetch_post\"])('/api/member/login');\r\n        // console.log(login);\r\n        location.reload();\r\n    }\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./source/component/header.js?");

/***/ }),

/***/ "./source/component/main.js":
/*!**********************************!*\
  !*** ./source/component/main.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tools.js */ \"./source/utils/tools.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\r\n    constructor(isLogin){\r\n        this.init(isLogin);\r\n    }\r\n\r\n    init(isLogin){\r\n        this.render(isLogin);\r\n    }\r\n\r\n    async render(isLogin){\r\n        const rcolumns = await Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"fetch_get\"])('/api/rcolumn/');\r\n        // console.log(rcolumns);\r\n        const divs = this.rcolumnsDivs(rcolumns);\r\n        const main_layer = `\r\n            <div class=\"container\">\r\n                ${divs}\r\n            </div>\r\n        `;\r\n        Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('#main').innerHTML = main_layer;\r\n    }\r\n\r\n    rcolumnsDivs(rcolumns){\r\n        let divs = \"\";\r\n        divs += \"<div class='rcolumn_divs'>\";\r\n        rcolumns.forEach(rcol => {\r\n            divs += \"<div class='rcolumn'>\";\r\n            divs += `<div class='rcolumn_title' data-colno='${rcol.colno}' data-corder='${rcol.corder}'>\r\n                        <span>${rcol.cards.length}</span>\r\n                        <h2>${rcol.cname}</h2>\r\n                    </div>`;\r\n            divs += `<div class='rcolumn_cards'>`;\r\n            rcol.cards.forEach(card => {\r\n                divs += `<div class='memo_card draggable'>`;\r\n                divs += `<div class='card_content'>${card.ccontent}</div>`;\r\n                divs += `<div class='card_author'>${card.id}</div>`;\r\n                divs += `</div>`;\r\n            });\r\n            divs += `</div>`;\r\n            divs += \"</div>\";\r\n        });\r\n        divs += `<div class='add_rcolumn'>\r\n                    <button type='button' id='btn_addColumn'>+ 칼럼 추가</button>\r\n                </div>`;\r\n        divs += \"</div>\";\r\n        return divs;\r\n    }\r\n\r\n    addEvent(isLogin){\r\n        //\r\n    }\r\n});\n\n//# sourceURL=webpack:///./source/component/main.js?");

/***/ }),

/***/ "./source/component/page.js":
/*!**********************************!*\
  !*** ./source/component/page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tools.js */ \"./source/utils/tools.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./source/component/header.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./source/component/main.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class{\r\n    constructor(){\r\n        this.init();\r\n    }\r\n\r\n    async init(){\r\n        const isLogin = await Object(_utils_tools_js__WEBPACK_IMPORTED_MODULE_0__[\"fetch_get\"])('/api/member/isLogin'); // isLogin:true/false, id:user1\r\n        // console.log(isLogin);\r\n        new _header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](isLogin);\r\n        new _main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](isLogin);\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack:///./source/component/page.js?");

/***/ }),

/***/ "./source/css/style.css":
/*!******************************!*\
  !*** ./source/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./source/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./source/css/style.css?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/page.js */ \"./source/component/page.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./source/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n// 엔트리 파일\r\n// 번들로 변환해서 사용\r\n// npx webpack --entry ./source/index.js --output ./public/index_bundle.js\r\n\r\n// config 설정 시\r\n// npm webpack --config webpack.config.js\r\n\r\n// 또는 npx webpack 으로 실행\r\n// npx webpack --watch -> 수정사항 자동 업데이트\r\n\r\n// \"proxy\": \"http://101.101.210.76:3000/\"\r\n\r\n// 번들링 대상\r\n\r\n\r\nnew _component_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ }),

/***/ "./source/utils/tools.js":
/*!*******************************!*\
  !*** ./source/utils/tools.js ***!
  \*******************************/
/*! exports provided: $, fetch_get, fetch_post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_get\", function() { return fetch_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_post\", function() { return fetch_post; });\nconst $ = (sel, base=document)=>base.querySelector(sel);\r\n\r\nconst fetch_get = async url=>{\r\n    const response = await fetch(url);\r\n    const json = await response.json();\r\n    return json;\r\n};\r\n\r\nconst fetch_post = async (url)=>{\r\n    const data = {id:'user1', pw:'1234'};\r\n    const response = await fetch(url, {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data)\r\n    });\r\n    const body = await response.json();\r\n    // console.log(body);\r\n    // alert(JSON.stringify(body));\r\n}\n\n//# sourceURL=webpack:///./source/utils/tools.js?");

/***/ })

/******/ });