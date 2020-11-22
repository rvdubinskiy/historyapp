/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Protected/Component.tsx":
/*!*************************************!*\
  !*** ./src/Protected/Component.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _modules_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Body */ \"./src/Protected/modules/Body/index.ts\");\n\n\n\nconst ProtectedArea = () => {\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"useObserver\"])(() => {\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules_Body__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProtectedArea);\n\n\n//# sourceURL=webpack:///./src/Protected/Component.tsx?");

/***/ }),

/***/ "./src/Protected/index.ts":
/*!********************************!*\
  !*** ./src/Protected/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Protected/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/Protected/index.ts?");

/***/ }),

/***/ "./src/Protected/modules/Body/Component.tsx":
/*!**************************************************!*\
  !*** ./src/Protected/modules/Body/Component.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _utils_renderRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/renderRoutes */ \"./src/Protected/utils/renderRoutes.tsx\");\n\n\n\nconst Body = () => {\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"useObserver\"])(() => {\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_utils_renderRoutes__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])()));\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\n\n//# sourceURL=webpack:///./src/Protected/modules/Body/Component.tsx?");

/***/ }),

/***/ "./src/Protected/modules/Body/index.ts":
/*!*********************************************!*\
  !*** ./src/Protected/modules/Body/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Protected/modules/Body/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/Protected/modules/Body/index.ts?");

/***/ }),

/***/ "./src/Protected/utils/renderRoutes.tsx":
/*!**********************************************!*\
  !*** ./src/Protected/utils/renderRoutes.tsx ***!
  \**********************************************/
/*! exports provided: renderRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRoutes\", function() { return renderRoutes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _modules_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/Error */ \"./src/modules/Error/index.ts\");\n/* harmony import */ var _modules_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/NotFound */ \"./src/modules/NotFound/index.ts\");\n/* harmony import */ var modules_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/Home */ \"./src/modules/Home/index.ts\");\n/* harmony import */ var modules_Questions_Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modules/Questions/Component */ \"./src/modules/Questions/Component.tsx\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n\n\n\n\n\n\n\nconst renderRoutes = () => Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"useObserver\"])(() => (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null,\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/home\", component: () => (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules_Error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](modules_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))) }),\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/question/:id\", children: () => (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules_Error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](modules_Questions_Component__WEBPACK_IMPORTED_MODULE_5__[\"Question\"], null))) }),\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], { from: \"/\", to: \"/home\" }),\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { render: () => react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) }))));\n\n\n//# sourceURL=webpack:///./src/Protected/utils/renderRoutes.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Application */ \"./src/modules/Application/index.ts\");\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules_Application__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('root'));\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/modules/Application/Component.tsx":
/*!***********************************************!*\
  !*** ./src/modules/Application/Component.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _Themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Themes */ \"./src/modules/Themes/index.ts\");\n/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/GlobalStyle */ \"./src/styles/GlobalStyle.tsx\");\n/* harmony import */ var _stores_GlobalStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../stores/GlobalStore */ \"./src/stores/GlobalStore.tsx\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules */ \"./src/modules/Application/modules/index.ts\");\n\n\n\n\n// import { overridedMuiTheme } from '@huntbox-design/uing/Themes';\n\n\n\n\nconst Routes = () => {\n    const { history } = Object(_stores_GlobalStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], { theme: _Themes__WEBPACK_IMPORTED_MODULE_4__[\"default\"] },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Router\"], { history: history },\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], { theme: _Themes__WEBPACK_IMPORTED_MODULE_4__[\"default\"] },\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_stores_GlobalStore__WEBPACK_IMPORTED_MODULE_6__[\"GlobalStoreProvider\"], null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Routes, null))));\n});\n\n\n//# sourceURL=webpack:///./src/modules/Application/Component.tsx?");

/***/ }),

/***/ "./src/modules/Application/index.ts":
/*!******************************************!*\
  !*** ./src/modules/Application/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Application/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Application/index.ts?");

/***/ }),

/***/ "./src/modules/Application/modules/Component.tsx":
/*!*******************************************************!*\
  !*** ./src/modules/Application/modules/Component.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _Protected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Protected */ \"./src/Protected/index.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"useObserver\"])(() => {\n        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/home\", component: _Protected__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: \"/\", component: _Protected__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })));\n    });\n});\n\n\n//# sourceURL=webpack:///./src/modules/Application/modules/Component.tsx?");

/***/ }),

/***/ "./src/modules/Application/modules/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/Application/modules/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Application/modules/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Application/modules/index.ts?");

/***/ }),

/***/ "./src/modules/BorderWrapper/index.ts":
/*!********************************************!*\
  !*** ./src/modules/BorderWrapper/index.ts ***!
  \********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({ displayName: \"Wrapper\", componentId: \"sc-k6k3iv\" }) `\n    display: flex;\n\n    height: 100%;\n    width: 100%;\n\n    border-radius: 20px;\n\n    padding: 20px;\n\n    color: #4b4b4b;\n    /* background-color: #fff; */\n`;\n\n\n//# sourceURL=webpack:///./src/modules/BorderWrapper/index.ts?");

/***/ }),

/***/ "./src/modules/Button/Button.css":
/*!***************************************!*\
  !*** ./src/modules/Button/Button.css ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/modules/Button/Button.css?");

/***/ }),

/***/ "./src/modules/Button/Component.tsx":
/*!******************************************!*\
  !*** ./src/modules/Button/Component.tsx ***!
  \******************************************/
/*! exports provided: cnButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cnButton\", function() { return cnButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bem-react/classname */ \"./node_modules/@bem-react/classname/index.js\");\n/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.css */ \"./src/modules/Button/Button.css\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nconst cnButton = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_1__[\"cn\"])('Button');\nconst Button = (_a) => {\n    var props = __rest(_a, []);\n    const { disabled = false, children, onClick, style } = props, args = __rest(props, [\"disabled\", \"children\", \"onClick\", \"style\"]);\n    const handleOnClick = (event) => onClick && onClick(event);\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", Object.assign({}, args, { disabled: disabled, onClick: handleOnClick, className: cnButton(), style: style }), children));\n};\n\n\n//# sourceURL=webpack:///./src/modules/Button/Component.tsx?");

/***/ }),

/***/ "./src/modules/Button/index.ts":
/*!*************************************!*\
  !*** ./src/modules/Button/index.ts ***!
  \*************************************/
/*! exports provided: cnButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Button/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cnButton\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"cnButton\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Button/index.ts?");

/***/ }),

/***/ "./src/modules/Error/Component.tsx":
/*!*****************************************!*\
  !*** ./src/modules/Error/Component.tsx ***!
  \*****************************************/
/*! exports provided: default, ErrorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorWrapper\", function() { return ErrorWrapper; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _styles_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/warning */ \"./src/styles/warning/index.ts\");\n\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor(props) {\n        super(props);\n        this.state = { hasError: false };\n    }\n    componentDidCatch(error, info) {\n        this.setState({ hasError: true });\n        console.error(error, info);\n    }\n    render() {\n        if (this.state.hasError) {\n            return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_styles_warning__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_styles_warning__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], null, 'Oops:( Something went wrong.')));\n        }\n        return this.props.children;\n    }\n}\nconst ErrorWrapper = ({ error, children }) => {\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](() => {\n        console.warn('Error/ErrorWrapper is deprecated! Please use StatusWrapper/ErrorWrapper');\n    });\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[\"useObserver\"])(() => {\n        if (error) {\n            return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_styles_warning__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_styles_warning__WEBPACK_IMPORTED_MODULE_2__[\"Message\"], null, 'Oops:( Something went wrong.')));\n        }\n        return children;\n    });\n};\n\n\n//# sourceURL=webpack:///./src/modules/Error/Component.tsx?");

/***/ }),

/***/ "./src/modules/Error/index.ts":
/*!************************************!*\
  !*** ./src/modules/Error/index.ts ***!
  \************************************/
/*! exports provided: default, ErrorWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Error/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorWrapper\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"ErrorWrapper\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Error/index.ts?");

/***/ }),

/***/ "./src/modules/Home/Component.tsx":
/*!****************************************!*\
  !*** ./src/modules/Home/Component.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ \"./src/modules/Button/index.ts\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TextField */ \"./src/modules/TextField/index.ts\");\n/* harmony import */ var _BorderWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BorderWrapper */ \"./src/modules/BorderWrapper/index.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var modules_Questions_components_Body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modules/Questions/components/Body */ \"./src/modules/Questions/components/Body/index.ts\");\n\n\n\n\n\n\n\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({ displayName: \"Header\", componentId: \"sc-woeieu\" }) `\n    display: flex;\n\n    width: 100%;\n\n    flex-flow: row nowrap;\n\n    justify-content: flex-start;\n    align-items: flex-start;\n`;\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer.withConfig({ displayName: \"Footer\", componentId: \"sc-1evxbpr\" }) `\n    display: flex;\n\n    width: 100%;\n\n    flex-flow: row nowrap;\n\n    justify-content: flex-end;\n    align-items: center;\n\n    margin-top: auto;\n`;\nconst CustomWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_BorderWrapper__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"]).withConfig({ displayName: \"CustomWrapper\", componentId: \"sc-1usw6q\" }) `\n    background: #e9e9e9;\n\n    flex: display;\n    flex-flow: column nowrap;\n\n    max-width: 500px;\n\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n    @media only screen\n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation : landscape) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (orientation : portrait) \n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n`;\nconst Home = () => {\n    const [name, setName] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"]('');\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"useObserver\"])(() => (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null,\n        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_BorderWrapper__WEBPACK_IMPORTED_MODULE_4__[\"Wrapper\"], { style: {\n                flexFlow: 'column nowrap',\n                position: 'relative',\n                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://imperhans.ru/wp-content/uploads/2018/07/f84fff8a43f5434a52fc4a78dc529a8c.jpg)`,\n                backgroundSize: 'cover',\n                boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'\n            } },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Header, null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](CustomWrapper, null,\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](modules_Questions_components_Body__WEBPACK_IMPORTED_MODULE_6__[\"Paragraph\"], { style: {\n                            fontSize: '1.6rem',\n                            width: 'auto'\n                        } }, `Это история о невероятной смелости и отваге. История о том, как горстка советских бойцов остановила целую армаду немецких танков. Ровно 75 лет назад, 24 августа 1942 года, в разгар Сталинградской битвы, у хутора Малая Россошка состоялось сражение, которое до сих пор поражает проявленном в нем мужеством и отвагой.\\n`),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", { style: {\n                            fontSize: '1.6rem',\n                            width: 'auto'\n                        } }, 'Мы предлагаем вам стать частью этой истории и посмотреть изнутри на то, как совершали подвиг 33 бойца 87-й стрелковой дивизии.'))),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Footer, null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_TextField__WEBPACK_IMPORTED_MODULE_3__[\"TextField\"], { placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0438\\u043C\\u044F\", style: {\n                        marginRight: '16px'\n                    }, value: name, onChange: (event) => {\n                        setName(event.currentTarget.value);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Button__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], { disabled: name ? false : true, onClick: () => {\n                        name && sessionStorage.setItem(\"name\", name);\n                        name && sessionStorage.setItem('points', '1');\n                        name && (window.location.href = `question/${1}`);\n                    } }, `Начать`))))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./src/modules/Home/Component.tsx?");

/***/ }),

/***/ "./src/modules/Home/index.ts":
/*!***********************************!*\
  !*** ./src/modules/Home/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/Home/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/Home/index.ts?");

/***/ }),

/***/ "./src/modules/NotFound/Component.tsx":
/*!********************************************!*\
  !*** ./src/modules/NotFound/Component.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({ displayName: \"Wrapper\", componentId: \"sc-uklckz\" }) `\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 200;\n    overflow: hidden;\n    position: absolute;\n    background: #70809026;\n`;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({ displayName: \"Message\", componentId: \"sc-vkvekr\" }) `\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: calc(1rem + 2vmin);\n    font-weight: 500;\n`;\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Wrapper, null,\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](Message, null, 'Sorry, but this page dosn\\'t exist')));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/modules/NotFound/Component.tsx?");

/***/ }),

/***/ "./src/modules/NotFound/index.ts":
/*!***************************************!*\
  !*** ./src/modules/NotFound/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/NotFound/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/NotFound/index.ts?");

/***/ }),

/***/ "./src/modules/Questions/Component.tsx":
/*!*********************************************!*\
  !*** ./src/modules/Questions/Component.tsx ***!
  \*********************************************/
/*! exports provided: Question, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Question\", function() { return Question; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Body */ \"./src/modules/Questions/components/Body/index.ts\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ \"./src/modules/Questions/components/Footer/index.ts\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/modules/Questions/components/Header/index.ts\");\n/* harmony import */ var _tools_Functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/Functions */ \"./src/modules/Questions/tools/Functions.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ \"./src/modules/Button/index.ts\");\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NotFound */ \"./src/modules/NotFound/index.ts\");\n/* harmony import */ var _BorderWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BorderWrapper */ \"./src/modules/BorderWrapper/index.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/data */ \"./src/modules/Questions/data/data.ts\");\n\n\n// import components for page\n\n\n\n\n\n\n\n\n\nconst Question = () => {\n    const { id } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"])();\n    const [answer, setAnswer] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"]('');\n    const points = typeof parseInt(id) === 'number' && parseInt(id) - 1;\n    const [chunk] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](() => _data_data__WEBPACK_IMPORTED_MODULE_10__[\"data\"].pages[points]);\n    react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](() => {\n        Object(_tools_Functions__WEBPACK_IMPORTED_MODULE_5__[\"getText\"])(chunk.title);\n    }, []);\n    return Object(mobx_react__WEBPACK_IMPORTED_MODULE_9__[\"useObserver\"])(() => (typeof points === 'number' && sessionStorage.getItem('points') >= chunk['points-coint']\n        ? (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_BorderWrapper__WEBPACK_IMPORTED_MODULE_8__[\"Wrapper\"], { style: {\n                justifyContent: 'center',\n                alignItems: 'flex-start',\n                flexFlow: 'column nowrap',\n                backgroundColor: '#fff'\n            } },\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"HeaderItem\"], null,\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", height: \"40\", width: \"40\", fill: \"#bba519\", viewBox: \"0 0 100 100\" },\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", { d: \"M66.5,24.13l3-13.71a1.5,1.5,0,0,0-2.26-1.6S64.13,10.71,58,\\n                                10.71c-2.78,0-4.47-1.25-6.42-2.7-2.21-1.65-4.72-3.51-9-3.51-8.16,\\n                                0-10.86,4.67-11,4.87a1.5,1.5,0,0,0-.15,1.05l3,13.71C30.41,29.28,\\n                                3,64.94,16,81.06,26,93.5,41.19,93.49,50.2,93.5h.92c9.08,0,24-.14,\\n                                33.9-12.44C98,64.94,70.59,29.28,66.5,24.13Zm16.19,55c-9,11.19-23,\\n                                11.32-31.58,11.32H50.2c-8.51,0-22.76,0-31.88-11.32C12.07,71.42,17.42,\\n                                57.37,23,47a154.6,154.6,0,0,1,14.26-21.5,1.5,1.5,0,0,0,\\n                                .3-1.27l-3-13.75c.76-.88,3.06-2.93,8-2.93,3.28,0,5.19,1.42,7.21,\\n                                2.92s4.43,3.29,8.21,3.29a26.65,26.65,0,0,0,8-1.12l-2.56,11.6a1.5,\\n                                1.5,0,0,0,.3,1.27A154.42,154.42,0,0,1,78,46.92C83.57,57.35,88.94,\\n                                71.41,82.69,79.18Z\" }),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", { d: \"M58.5,53.5a1.5,1.5,0,0,0,3,\\n                                0c0-4.53-3.92-8.27-9-8.9V42.5a1.5,1.5,0,0,0-3,\\n                                0v2.1c-5.08.63-9,4.37-9,8.9s3.92,8.26,9,8.89v12c-3.42-.56-6-3-6-5.88a1.5,\\n                                1.5,0,0,0-3,0c0,4.53,3.92,8.28,9,8.9v2.1a1.5,1.5,0,0,0,3,0V77.4c5.08-.63,\\n                                9-4.38,9-8.9s-3.92-8.27-9-8.89v-12C55.92,48.18,58.5,50.6,58.5,53.5Zm-15,\\n                                0c0-2.9,2.58-5.32,6-5.88V59.38C46.08,58.82,43.5,56.4,43.5,53.5Zm15,15c0,\\n                                2.9-2.58,5.33-6,5.88V62.62C55.92,63.18,58.5,65.6,58.5,68.49Z\" }),\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", { d: \"M41.58,26.44A33.42,33.42,0,0,0,50.5,27.5a33.42,33.42,0,\\n                                0,0,8.92-1.06,1.5,1.5,0,1,0-.84-2.88,30.84,30.84,0,0,1-8.08.94,30.84,\\n                                30.84,0,0,1-8.08-.94,1.5,1.5,0,0,0-.84,2.88Z\" })),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { style: {\n                            fontSize: '2rem',\n                            marginLeft: '10px'\n                        } }, points)),\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"HeaderItem\"], { style: {\n                        fontSize: '2rem'\n                    } },\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", null, sessionStorage.getItem('name')),\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], { disabled: answer ? false : true, style: { marginLeft: '16px' }, onClick: () => {\n                            sessionStorage.setItem('points', (+id + 1).toString());\n                            answer && sessionStorage.setItem(chunk['page-number'], answer);\n                            if (chunk['page-number'] === '8') {\n                                answer && (window.location.href = `/final/`);\n                            }\n                            else {\n                                answer && (window.location.href = `/question/${+id + 1}`);\n                            }\n                        } }, 'Submit'))),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Body__WEBPACK_IMPORTED_MODULE_2__[\"Body\"], null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Body__WEBPACK_IMPORTED_MODULE_2__[\"Paragraph\"], { id: \"text-holder\" })),\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"Footer\"], null,\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"Textarea\"], { value: answer, onChange: (event) => {\n                        setAnswer(event.currentTarget.value);\n                    } }))))\n        : react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_NotFound__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ Question });\n\n\n//# sourceURL=webpack:///./src/modules/Questions/Component.tsx?");

/***/ }),

/***/ "./src/modules/Questions/components/Body/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/Questions/components/Body/index.ts ***!
  \********************************************************/
/*! exports provided: Body, Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body\", function() { return Body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Paragraph\", function() { return Paragraph; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n/**\n * Body wrapper block\n */\nconst blink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"] `\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n`;\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({ displayName: \"Body\", componentId: \"sc-129tpnw\" }) `\n    /* height: 100%; */\n\n    margin-top: 16px;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    width: 100%;\n\n    overflow: scroll;\n\n    opacity: 0.8;\n\n    min-height: 70%;\n\n    \n`;\nconst Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({ displayName: \"Paragraph\", componentId: \"sc-1vdmoe3\" }) `\n    width: 70%;\n    font-size: 1.6rem;\n\n    overflow: hidden;\n    white-space: normal; /* Keeps the content on a single line */\n    margin: 0 auto; /* Gives that scrolling effect as the typing happens */ \n\n    &:after{\n        content: \"|\";\n        background-color: #4b4b4b;\n        border-radius: 20px;\n        width: 1px;\n        animation: blink .3ms linear infinite alternate;\n    }\n\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px)\n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.4rem;\n        max-width: 100%;\n    }\n    @media only screen\n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation : landscape) { \n        width: 100%;\n        font-size: 1.4rem;\n        max-width: 100%;\n    }\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (orientation : portrait) \n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.4rem;\n        max-width: 100%;\n    }\n`;\n\n\n//# sourceURL=webpack:///./src/modules/Questions/components/Body/index.ts?");

/***/ }),

/***/ "./src/modules/Questions/components/Footer/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/Questions/components/Footer/index.ts ***!
  \**********************************************************/
/*! exports provided: Footer, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textarea\", function() { return Textarea; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n/**\n * Footer fot saving answer\n */\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].footer.withConfig({ displayName: \"Footer\", componentId: \"sc-1v77a2j\" }) `\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    min-height: 20%;\n    max-height: 30%;\n\n    margin-top: auto;\n\n    width: 100%;\n\n    background-color: #fff;\n`;\nconst Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea.withConfig({ displayName: \"Textarea\", componentId: \"sc-1b5o77a\" }) `\n    width: 70%;\n    height: 100%;\n\n    max-width: 70%;\n    max-height: 100%;\n    min-height: 30%;\n    min-width: 30%;\n\n    padding: 10px;\n\n    font-size: 1.6rem;\n    font-family: 'Poiret One', Arial, Helvetica, sans-serif;\n    \n    border-radius: 10px;\n    outline: none;\n    border: none;\n\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px)\n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n    @media only screen\n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation : landscape) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n    @media only screen \n    and (min-device-width : 375px) \n    and (max-device-width : 860px) \n    and (orientation : portrait) \n    and (-webkit-min-device-pixel-ratio: 2) { \n        width: 100%;\n        font-size: 1.2rem;\n        max-width: 100%;\n    }\n`;\n\n\n//# sourceURL=webpack:///./src/modules/Questions/components/Footer/index.ts?");

/***/ }),

/***/ "./src/modules/Questions/components/Header/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/Questions/components/Header/index.ts ***!
  \**********************************************************/
/*! exports provided: Header, HeaderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeaderItem\", function() { return HeaderItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n/**\n * Header wrapper block\n */\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header.withConfig({ displayName: \"Header\", componentId: \"sc-1936y1e\" }) `\n    display: flex;\n    flex-flow: row nowrap;\n\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 0px 20px;\n\n    height: 50px;\n    width: 100%;\n\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px)\n    and (-webkit-min-device-pixel-ratio: 2) { \n        padding: 0px;\n    }\n    @media only screen\n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation : landscape) { \n        padding: 0px;\n    }\n    @media only screen \n    and (min-device-width : 360px) \n    and (max-device-width : 860px) \n    and (orientation : portrait) \n    and (-webkit-min-device-pixel-ratio: 2) { \n        padding: 0px;\n    }\n`;\nconst HeaderItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({ displayName: \"HeaderItem\", componentId: \"sc-ujjgi1\" }) `\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    flex-basis: auto;\n`;\n\n\n//# sourceURL=webpack:///./src/modules/Questions/components/Header/index.ts?");

/***/ }),

/***/ "./src/modules/Questions/data/data.ts":
/*!********************************************!*\
  !*** ./src/modules/Questions/data/data.ts ***!
  \********************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nconst data = {\n    \"pages\": [{\n            \"page-number\": \"1\",\n            \"title\": \"Атака немецкой пехоты началась с налета штурмовиков.  Самолеты вермахта сбросили авиабомбы и обстреляли местность из пушек и пулеметов. Металл перепахал землю, и после налета в живых оставалось немного —  только 33 человека из всех, кто  приготовился к обороне. Установилось затишье. Но выжившие бойцы понимали…\",\n            \"max-level\": \"0\",\n            \"points-coint\": \"1\"\n        },\n        {\n            \"page-number\": \"2\",\n            \"title\": \"«...Солнце клонилось к закату, когда один из наблюдателей крикнул: “Танки!” Вражеские машины одна за другой выползали из лощины и двигались к высотке… В окопах стало тихо. Бойцы переглянулись, как бы спрашивая друг друга: “Выстоим ли?” Минуту напряжённого молчания прервал голос комсомольца Леонида Ковалёва: “Друзья! – обратился он к своим товарищам. – Не видать фашистам Волги! Будем драться до последнего вздоха!” Его слова глубоко взволновали всех бойцов. Было решено стоять насмерть...» Повезло политруку Евтифееву. Он извлек из засыпанного взрывом окопа… \",\n            \"max-level\": \"0\",\n            \"points-coint\": \"2\"\n        },\n        {\n            \"page-number\": \"3\",\n            \"title\": \"Перед самым закатом на позицию 33-х красноармейцев пошел вражеский батальон пехоты, перед которым шло несколько десятков танков. Первым огонь пустил политрук. Он подбил одну машину врага, передал оружие бойцу  Стрелкову. Евтифеев организовал взаимодействие автоматчиков и пулеметчиков с бронебойщиками: их меткий огонь не давал ни одному врагу проникнуть за пределы отмеченной территории. \",\n            \"max-level\": \"0\",\n            \"points-coint\": \"3\"\n        },\n        {\n            \"page-number\": \"4\",\n            \"title\": \"Практически все находившиеся на высотке не имели большого боевого опыта, а некоторые и вовсе никогда не встречались с танками. Более того, в распоряжении защитников Малой Россошки было совсем мало оружия. Одними только танками гитлеровцы превосходили по численности советских бойцов, а ведь за танками двигалась ещё и пехота. Как потом станет известно, по проходящей здесь дороге немецкое командование бросило 70 танков и сотни солдат. Казалось, что никаких шансов у защитников высоты нет, но вдруг в ход пошли… \",\n            \"max-level\": \"0\",\n            \"points-coint\": \"4\"\n        },\n        {\n            \"page-number\": \"5\",\n            \"title\": \"И без того небольшое количество оружия советских бойцов стало уменьшаться. Волей случая или везения немцы прекратили первую атаку, однако конец был не близок. Перед бойцами встал вопрос -- что делать? Единодушно решили…\",\n            \"max-level\": \"0\",\n            \"points-coint\": \"5\"\n        },\n        {\n            \"page-number\": \"6\",\n            \"title\": \"Поздней ночью над полем битвы установилось затишье. Потеряв 27 танков и до 150 солдат и офицеров, немцы были вынуждены отойти, а все советские солдаты, участвовавшие в битве…\",\n            \"max-level\": \"0\",\n            \"points-coint\": \"6\"\n        },\n        {\n            \"page-number\": \"7\",\n            \"title\": \"В те дни подвиг «сталинградских панфиловцев» получил широкую известность. Но, к сожалению, никому из них, в отличие от панфиловцев под Москвой…\",\n            \"max-level\": \"0\",\n            \"points-coint\": \"7\"\n        },\n        {\n            \"page-number\": \"8\",\n            \"title\": \"Сегодня в Красноармейском районе Волгограда есть улица 33 Героев. К сожалению, сейчас, спустя 75 лет, мало кто может сказать, в честь каких именно героев она названа. А между тем, прорвись немецкая танковая группа к Волге… (Что могло бы произойти?)\",\n            \"max-level\": \"0\",\n            \"points-coint\": \"8\"\n        }\n    ],\n    \"final\": {\n        \"0\": \"Да, это история о мужестве и стойкости. А еще это подтверждение одной суворовской истине о том, что врага нужно бить не числом, а умением. И здесь уже никто не усомнится в умении советских бойцов бороться за каждый последующий вздох.\",\n        \"1\": \"«Тридцать три не дрогнули. Они уничтожали танки пулями, гранатами, бутылками. Они уничтожили двадцать семь танков. Еще раз русское сердце оказалось крепче железа. Если чужестранец нам скажет, что только чудо может спасти Сталинград, мы ответим: разве не чудо подвиг тридцати трех? Враг еще не знает, на что способен русский человек, когда он защищает свою землю»\",\n        \"2\": \"Илья Эренбург\",\n        \"3\": \"Героическим подразделением командовал младший лейтенант Георгий Андреевич Стрелков, из офицеров были также младший политрук Алексей Григорьевич Евтифеев и заместитель политрука Леонид Иванович Ковалёв. Под их командованием сражались бойцы: старшины Лаврентий Григорьевич Луханин, Дмитрий Иванович Пуказов; сержант Николай Петрович Юрпалов; младшие сержанты Игнатий Егорович Хожевский (Хоржевский), Михаил Игнатьевич Мингалев, Михаил Семёнович Кондратов, Владимир Исаакович Пасхальный; красноармейцы Шахай Хапкаевич Башмаков, Николай Семёнович Власкин, Фахри Гайнудинов, Никифор Иосифович Иус, Семён Васильевич Калита, Виктор Александрович Мезенцев, Пётр Петрович Почеталкин, Николай Фёдорович Пяночкин (Пьяночкин), Андрей Григорьевич Рудык (Рудых), Иван Михайлович Ряшенцев, Филипп Николаевич Жезлов, Михаил Семёнович Кондратов, Кропит Фатеевич Пономарёв, Иван Сергеевич Тимофеев, Павел Давидович Назаренко, Кондрат Кириллович Титов, Михаил Иванович Толкачёв, Василий Тихонович Яковенко, Павел Яковлевич Дендобрий, Василий Ильич Матющенко (Матюшенко), Прокоп Емельянович Мельник, Василий Исаакович Мельниченко, Сергей Никитович Прошин, Николай Иванович Черноус.\",\n        \"4\": \"Памяти тридцати трех героев и всех советских солдат,\",\n        \"5\": \"сражавшихся за Родину,\",\n        \"6\": \"посвящается.\"\n    }\n};\n\n\n//# sourceURL=webpack:///./src/modules/Questions/data/data.ts?");

/***/ }),

/***/ "./src/modules/Questions/tools/Functions.ts":
/*!**************************************************!*\
  !*** ./src/modules/Questions/tools/Functions.ts ***!
  \**************************************************/
/*! exports provided: getText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getText\", function() { return getText; });\nfunction getText(text) {\n    let i = 0;\n    const speed = 30; /* The speed/duration of the effect in milliseconds */\n    function typeWriter() {\n        if (i < text.length) {\n            document.getElementById(\"text-holder\").innerHTML += text.charAt(i);\n            i++;\n            setTimeout(typeWriter, speed);\n        }\n    }\n    typeWriter();\n}\n\n\n//# sourceURL=webpack:///./src/modules/Questions/tools/Functions.ts?");

/***/ }),

/***/ "./src/modules/TextField/Component.tsx":
/*!*********************************************!*\
  !*** ./src/modules/TextField/Component.tsx ***!
  \*********************************************/
/*! exports provided: cnTextField, TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cnTextField\", function() { return cnTextField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return TextField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bem-react/classname */ \"./node_modules/@bem-react/classname/index.js\");\n/* harmony import */ var _bem_react_classname__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bem_react_classname__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextField_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField.css */ \"./src/modules/TextField/TextField.css\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nconst cnTextField = Object(_bem_react_classname__WEBPACK_IMPORTED_MODULE_1__[\"cn\"])('TextField');\nconst TextField = (_a) => {\n    var props = __rest(_a, []);\n    const { children, onClick, onChange, value, style, placeholder } = props, args = __rest(props, [\"children\", \"onClick\", \"onChange\", \"value\", \"style\", \"placeholder\"]);\n    const handleOnClick = (event) => onClick && onClick(event);\n    const hangeleOnChange = (event) => onChange && onChange(event);\n    return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"input\", Object.assign({}, args, { placeholder: placeholder, onClick: handleOnClick, onChange: hangeleOnChange, value: value, style: style, className: cnTextField() }), children));\n};\n\n\n//# sourceURL=webpack:///./src/modules/TextField/Component.tsx?");

/***/ }),

/***/ "./src/modules/TextField/TextField.css":
/*!*********************************************!*\
  !*** ./src/modules/TextField/TextField.css ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/modules/TextField/TextField.css?");

/***/ }),

/***/ "./src/modules/TextField/index.ts":
/*!****************************************!*\
  !*** ./src/modules/TextField/index.ts ***!
  \****************************************/
/*! exports provided: cnTextField, TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/modules/TextField/Component.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cnTextField\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"cnTextField\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"TextField\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/modules/TextField/index.ts?");

/***/ }),

/***/ "./src/modules/Themes/buttons.tsx":
/*!****************************************!*\
  !*** ./src/modules/Themes/buttons.tsx ***!
  \****************************************/
/*! exports provided: buttons, disabledButtons, pressedButtons, buttonSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttons\", function() { return buttons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"disabledButtons\", function() { return disabledButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pressedButtons\", function() { return pressedButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonSizes\", function() { return buttonSizes; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/modules/Themes/colors.tsx\");\n\nconst commonButtonStyles = {\n    outline: 'none',\n    border: 'none',\n    fontWeight: 500,\n    fontSize: 11,\n    borderRadius: 4,\n    position: 'relative',\n    display: 'inline-flex',\n    alignItems: 'center',\n    padding: '8px 14px',\n    justifyContent: 'center',\n    textTransform: 'uppercase',\n    cursor: 'pointer',\n};\nconst buttons = {\n    contained: Object.assign(Object.assign({}, commonButtonStyles), { background: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200], border: 'none', '&:hover': {\n            background: ` linear-gradient(0deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)), ${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]}`,\n        } }),\n    text: Object.assign(Object.assign({}, commonButtonStyles), { color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200], background: 'none', '&:hover': {\n            background: 'rgba(141, 202, 254, 0.04)',\n        } }),\n    outlined: Object.assign(Object.assign({}, commonButtonStyles), { border: '1px solid rgba(255, 255, 255, 0.12)', background: 'none', color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200], '&:hover': {\n            backgroundColor: 'rgba(141, 202, 254, 0.04)',\n        } }),\n    danger: Object.assign(Object.assign({}, commonButtonStyles), { border: '1px solid rgba(255, 255, 255, 0.12)', background: 'none', color: '#FC534E', '&:hover': {\n            backgroundColor: 'rgba(252, 83, 78, 0.04)',\n        } }),\n    whiteOutlined: Object.assign(Object.assign({}, commonButtonStyles), { border: '1px solid rgba(255, 255, 255, 0.12)', color: '#ffffff', background: 'none', borderRadius: '32px', '&:hover': {\n            backgroundColor: 'rgba(255, 255, 255, 0.04)',\n        } }),\n    whiteContained: Object.assign(Object.assign({}, commonButtonStyles), { background: 'rgba(255, 255, 255, 0.87)', color: '#000000', borderRadius: '32px', '&:hover': {\n            background: ` linear-gradient(0deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)), rgba(255, 255, 255, 0.87)`,\n        } }),\n};\nconst disabledButtons = {\n    contained: {\n        backgroundColor: 'rgba(255, 255, 255, 0.12)',\n        color: 'rgba(255, 255, 255, 0.38)',\n        '&:hover': {\n            background: 'rgba(255, 255, 255, 0.12)',\n        },\n    },\n    text: {\n        color: 'rgba(255, 255, 255, 0.38)',\n        backgroundColor: 'none',\n        '&:hover': {\n            background: 'none',\n        },\n    },\n    outlined: {\n        color: 'rgba(255, 255, 255, 0.38)',\n        '&:hover': {\n            background: 'none',\n        },\n    },\n    danger: {\n        color: 'rgba(255, 255, 255, 0.38)',\n        '&:hover': {\n            background: 'none',\n        },\n    },\n};\nconst pressedButtons = {\n    text: {\n        background: 'rgba(141, 202, 254, 0.12)',\n        '&:hover': {\n            background: 'rgba(141, 202, 254, 0.12)',\n        },\n    },\n    outlined: {\n        backgroundColor: 'rgba(141, 202, 254, 0.12)',\n        '&:hover': {\n            background: 'rgba(141, 202, 254, 0.12)',\n        },\n    },\n    danger: {\n        backgroundColor: 'rgba(252, 83, 78, 0.12)',\n        '&:hover': {\n            background: 'rgba(252, 83, 78, 0.12)',\n        },\n    },\n};\nconst buttonSizes = {\n    pagen_m: {\n        padding: 0,\n        width: 32,\n        height: 32,\n        color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray.iconDark,\n        fontSize: '1rem',\n        fontWeight: 500,\n    },\n    pagen_s: {\n        padding: 0,\n        width: 26,\n        height: 26,\n        color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray.primary,\n        fontSize: '0.85rem',\n        fontWeight: 400,\n    },\n    primary_m: {\n        padding: '0 10px',\n        height: 32,\n        color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray.iconDark,\n        fontSize: '0.85rem',\n        fontWeight: 500,\n    },\n    primary_s: {\n        padding: '0 10px',\n        height: 26,\n        color: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gray.primary,\n        fontSize: '0.85rem',\n        fontWeight: 500,\n    },\n    withoutBorder_m: {},\n};\n\n\n//# sourceURL=webpack:///./src/modules/Themes/buttons.tsx?");

/***/ }),

/***/ "./src/modules/Themes/colors.tsx":
/*!***************************************!*\
  !*** ./src/modules/Themes/colors.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst colors = {\n    white: {\n        primary: '#ffffff'\n    },\n    blue: {\n        primary: '#1976F1',\n        sideBar: '#1F42FB',\n        fade: '#1971b2',\n        light: '#558eff',\n        progress: '#58AFFF',\n        '50': '#E3F2FE',\n        '100': '#BADEFE',\n        '200': '#8DCAFE',\n        '300': '#5EB5FD',\n        '400': '#35A5FD',\n        '500': '#0096FD',\n        '600': '#0088EE',\n        '700': '#0076DB',\n        '800': '#0064C9',\n        '900': '#0046AA'\n    },\n    green: {\n        primary: '#56C528',\n        medium: '#5caf50',\n        '50': '#EFFCE9',\n        '100': '#D7F7C7',\n        '200': '#BBF2A2',\n        '300': '#9CEC79',\n        '400': '#81E756',\n        '500': '#64E130',\n        '600': '#54D027',\n        '700': '#37BB1B',\n        '800': '#0AA60D',\n        '900': '#008300'\n    },\n    orange: {\n        primary: '#f1a013'\n    },\n    yellow: {\n        primary: '#FDC447',\n        '50': '#FFFDE9',\n        '100': '#FFF9C8',\n        '200': '#FFF5A4',\n        '300': '#FFF081',\n        '400': '#FEEB65',\n        '500': '#FCE64D',\n        '600': '#FFDB4F',\n        '700': '#FDC347',\n        '800': '#F9AC40',\n        '900': '#F28633'\n    },\n    red: {\n        primary: '#F45F4D',\n        light: '#eb6d58',\n        '50': '#FFECEE',\n        '100': '#FFCFD1',\n        '200': '#FF9D95',\n        '300': '#FF756B',\n        '400': '#FF5341',\n        '500': '#FF451E',\n        '600': '#FF3B22',\n        '700': '#ED2F1D',\n        '800': '#E02815',\n        '900': '#D01C03'\n    },\n    gray: {\n        // '#74777f', '#d9dee6', '#e5e5e5'\n        primary: '#8B8E97',\n        light: '#ced0da',\n        iconLight: '#b3b7bd',\n        iconDefault: '#a7a9ad',\n        iconMiddle: '#81848a',\n        iconDark: '#4f535b'\n    },\n    dark: {\n        primary: '#151B2A',\n        medium: '#182033',\n        light: '#1B2235',\n        area: '#030918',\n        block: '#171e2e',\n        forms: '#1D2539',\n        lines: '#e8ebf3',\n        text: '#ffffff',\n        title: '#8b8e97',\n        menuActive: '#1f42fb',\n        menuIcon: '#9bb5ff'\n    },\n    primary: {\n        highEmphasis: '#8DCAFE',\n        mediumEmphasis: 'rgba(141, 202, 254, 0.6)',\n        disabled: 'rgba(141, 202, 254, 0.38)',\n        tagHovered: 'linear-gradient(0deg, rgba(141, 202, 254, 0.08), rgba(141, 202, 254, 0.08)), rgba(141, 202, 254, 0.12)',\n        focused: 'rgba(141, 202, 254, 0.12)',\n        pressed: 'rgba(141, 202, 254, 0.1)',\n        selected: 'rgba(141, 202, 254, 0.08)',\n        hovered: 'rgba(141, 202, 254, 0.04)'\n    },\n    onSurface: {\n        highEmphasis: 'rgba(255, 255, 255, 0.87)',\n        mediumEmphasis: 'rgba(255, 255, 255, 0.6)',\n        disabled: 'rgba(255, 255, 255, 0.38)',\n        hovered: 'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), rgba(255, 255, 255, 0.12)',\n        white12: 'rgba(255, 255, 255, 0.12)',\n        white8: 'rgba(255, 255, 255, 0.08)',\n        hoveredState: 'rgba(255, 255, 255, 0.04)'\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (colors);\n\n\n//# sourceURL=webpack:///./src/modules/Themes/colors.tsx?");

/***/ }),

/***/ "./src/modules/Themes/index.ts":
/*!*************************************!*\
  !*** ./src/modules/Themes/index.ts ***!
  \*************************************/
/*! exports provided: default, main, colors, overridedMuiTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/modules/Themes/main.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ \"./src/modules/Themes/colors.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mui */ \"./src/modules/Themes/mui.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"overridedMuiTheme\", function() { return _mui__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/modules/Themes/index.ts?");

/***/ }),

/***/ "./src/modules/Themes/main.tsx":
/*!*************************************!*\
  !*** ./src/modules/Themes/main.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/modules/Themes/colors.tsx\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/modules/Themes/buttons.tsx\");\n\n\nconst main = {\n    colors: _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem'],\n    space: [0, 2, 4, 8, 10, 12],\n    buttons: _buttons__WEBPACK_IMPORTED_MODULE_1__[\"buttons\"],\n    buttonSizes: _buttons__WEBPACK_IMPORTED_MODULE_1__[\"buttonSizes\"],\n    disabledButtons: _buttons__WEBPACK_IMPORTED_MODULE_1__[\"disabledButtons\"],\n    pressedButtons: _buttons__WEBPACK_IMPORTED_MODULE_1__[\"pressedButtons\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n\n//# sourceURL=webpack:///./src/modules/Themes/main.tsx?");

/***/ }),

/***/ "./src/modules/Themes/mui.tsx":
/*!************************************!*\
  !*** ./src/modules/Themes/mui.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _muiButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muiButtons */ \"./src/modules/Themes/muiButtons.tsx\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ \"./src/modules/Themes/colors.tsx\");\n\n\n\nconst overridedMuiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n    props: {\n        MuiTab: {\n            disableRipple: true\n        },\n        MuiTabs: {\n            textColor: 'primary'\n        }\n    },\n    overrides: {\n        MuiMenuItem: {\n            root: {\n                padding: '8px 10px',\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.highEmphasis}`,\n                '&:hover': {\n                    background: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`,\n                    borderBottom: 'none'\n                }\n            }\n        },\n        MuiTabs: {\n            root: {\n                background: 'transparent',\n                minHeight: '32px'\n            },\n            flexContainer: {\n                // borderBottom: `2px solid ${colors.onSurface.white12}`,\n                boxShadow: `inset 0 -2px 0 0 ${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.white12}`,\n                boxSizing: 'border-box'\n            },\n            fixed: {\n                display: 'flex'\n            },\n            indicator: {\n                backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`,\n                display: 'flex',\n                justifyContent: 'center'\n            }\n        },\n        MuiAppBar: {\n            colorPrimary: {\n                backgroundColor: 'transparent'\n            },\n            root: {\n                backgroundColor: 'transparent'\n                // borderBottom: `2px solid ${colors.onSurface.white12}`,\n            }\n        },\n        MuiTab: {\n            textColorPrimary: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.disabled}`,\n                '&$selected': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                }\n            },\n            wrapper: {\n                lineHeight: '18px',\n                marginTop: '4px',\n                marginBottom: '4px'\n            },\n            root: {\n                padding: 0,\n                boxSizing: 'content-box',\n                minHeight: '32px',\n                '&:not(.lastTab)': {\n                    marginRight: '16px'\n                },\n                '@media (min-width: 600px)': {\n                    minWidth: '48px'\n                },\n                '&:hover': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                },\n                '&$selected': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                }\n            }\n        },\n        MuiInputLabel: {\n            root: {\n                lineHeight: '16px',\n                fontSize: '13px',\n                '&$focused': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                },\n                '&$error': {\n                    color: '#FC534E'\n                },\n                '&$disabled': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.disabled}`\n                },\n                'pointer-events': 'none'\n            },\n            shrink: {\n                transform: 'translate(0, -16px) scale(0.85)'\n            },\n            marginDense: {\n                transform: 'translate(0, -50%)'\n            },\n            formControl: {\n                background: 'transparent',\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`,\n                left: '12px',\n                top: '50%',\n                transform: 'translate(0, -50%)'\n            }\n        },\n        MuiFormHelperText: {\n            root: {\n                fontSize: '11px',\n                lineHeight: '14px',\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`,\n                paddingLeft: '12px',\n                '&$error': {\n                    color: '#FC534E'\n                },\n                '&$disabled': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`\n                }\n            }\n        },\n        MuiInputBase: {\n            input: {\n                // backgroundColor: `${colors.onSurface.hoveredState}`,\n                // background: 'green',\n                // backgroundColor: 'red',\n                height: 'auto',\n                lineHeight: '16px',\n                borderRadius: '4px',\n                padding: '8px 12px',\n                color: 'white',\n                '&::placeholder': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`,\n                    lineHeight: '16px',\n                    fontSize: '13px'\n                }\n            },\n            root: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`,\n                background: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`,\n                '&$disabled': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.disabled}`,\n                    background: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                }\n            },\n            adornedStart: {\n                paddingLeft: '12px'\n            },\n            adornedEnd: {\n                paddingRight: '12px'\n            },\n            inputAdornedEnd: {\n                paddingRight: '12px'\n            },\n            inputAdornedStart: {\n                paddingLeft: '12px'\n            }\n        },\n        MuiInput: {\n            formControl: {\n                'label + &': {\n                    marginTop: 0\n                }\n            },\n            root: {\n                caretColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`,\n                // backgroundColor: `${colors.onSurface.hoveredState}`,\n                borderRadius: '4px',\n                '&$error': {\n                    caretColor: 'white'\n                },\n                '&$focused': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                },\n                '&$disabled': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                },\n                '&:hover': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.white8}`,\n                    '&$disabled': {\n                        backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                    },\n                    '&$focused': {\n                        backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                    }\n                }\n            },\n            underline: {\n                '&:before': {\n                    borderBottom: 'none !important'\n                },\n                '&:after': {\n                    borderBottom: `2px solid ${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                },\n                '&$error': {\n                    '&:after': {\n                        borderBottom: '2px solid #FC534E'\n                    }\n                }\n            }\n        },\n        MuiFilledInput: {\n            root: {\n                caretColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`,\n                backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`,\n                borderRadius: '4px',\n                '&$error': {\n                    caretColor: 'white'\n                },\n                '&$focused': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                },\n                '&$disabled': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                },\n                '&:hover': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.white8}`,\n                    '&$disabled': {\n                        backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                    },\n                    '&$focused': {\n                        backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.hoveredState}`\n                    }\n                }\n            },\n            input: {\n                padding: '24px 12px 10px'\n            },\n            underline: {\n                '&:before': {\n                    borderBottom: 'none !important'\n                },\n                '&:after': {\n                    borderBottom: `2px solid ${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`\n                },\n                '&$error': {\n                    '&:after': {\n                        borderBottom: '2px solid #FC534E'\n                    }\n                }\n            },\n            adornedStart: {\n                paddingLeft: '12px'\n            },\n            inputAdornedEnd: {\n                paddingRight: '12px'\n            },\n            inputAdornedStart: {\n                paddingLeft: '12px'\n            }\n        },\n        MuiSelect: {\n            root: {\n                paddingTop: '24px',\n                paddingBottom: '10px',\n                paddingLeft: '12px',\n                '&$error': {\n                    color: 'green',\n                    iconOpen: {\n                        color: 'purple'\n                    }\n                }\n            },\n            select: {\n                minWidth: '200px',\n                position: 'relative',\n                '&&': {\n                    paddingRight: '44px'\n                },\n                '&:focus': {\n                    backgroundColor: 'transparent'\n                },\n                '&$error': {\n                    color: 'green'\n                }\n            },\n            icon: {\n                height: '24px',\n                width: '24px',\n                color: 'currentColor',\n                position: 'absolute',\n                marginRight: '12px',\n                '&$disabled': {\n                    color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.disabled}`\n                },\n                '&$error': {\n                    color: 'yellow'\n                }\n            },\n            iconOpen: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue[200]}`,\n                '&$error': {\n                    color: '#FC534E'\n                }\n            },\n            selectMenu: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.highEmphasis}`\n            }\n        },\n        MuiListItem: {\n            root: {\n                '&$selected': {\n                    backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.white12}`,\n                    '&:hover': {\n                        backgroundColor: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.white12}`\n                    }\n                }\n            }\n        },\n        MuiMenu: {\n            paper: {\n                maxHeight: '250px',\n                marginTop: '8px',\n                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',\n                overflowY: 'scroll',\n                '&::-webkit-scrollbar': {\n                    width: '0px'\n                },\n                // '&::-webkit-scrollbar': {\n                //     width: '4px'\n                // },\n                // '&::-webkit-scrollbar-track': {\n                //     background: 'transparent'\n                // },\n                // '&::-webkit-scrollbar-thumb': {\n                //     backgroundColor: `${colors.onSurface.white12}`,\n                //     borderRadius: '4px'\n                // },\n                '-ms-overflow-style': 'none',\n                'scrollbar-width': 'none'\n            }\n        },\n        MuiDialog: {\n            paper: {\n                margin: '96px'\n            },\n            paperWidthXs: {\n                maxWidth: '320px'\n            },\n            paperWidthMd: {\n                maxWidth: '430px'\n            }\n            // container: {\n            //     background: 'red'\n            // } \n        },\n        MuiBackdrop: {\n            root: {\n                // backgroundColor: `${colors.dark.area}`,\n                // backgroundColor: 'green',\n                opacity: 0.7\n            }\n        },\n        MuiDialogActions: {\n            root: {\n                padding: '16px 24px 24px 24px'\n            }\n        },\n        MuiPaper: {\n            root: {\n                backgroundColor: 'none',\n                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #030919'\n                // backgroundColor: 'red'\n            }\n        },\n        MuiDialogTitle: {\n            root: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.highEmphasis}`,\n                padding: '24px 24px 4px 24px'\n            }\n        },\n        MuiDialogContent: {\n            root: {\n                padding: '12px 24px'\n            }\n        },\n        MuiDialogContentText: {\n            root: {\n                color: `${_colors__WEBPACK_IMPORTED_MODULE_2__[\"default\"].onSurface.mediumEmphasis}`,\n                marginBottom: 0\n            }\n        },\n        MuiButton: {\n            root: Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]),\n            text: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].medium), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].text),\n            textSizeSmall: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].small), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].text),\n            textSizeLarge: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].large), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].text),\n            outlined: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].medium), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].outlined),\n            outlinedSizeSmall: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].small), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].outlined),\n            outlinedSizeLarge: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].large), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].outlined),\n            contained: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].medium), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].contained),\n            containedSizeSmall: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].small), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].contained),\n            containedSizeLarge: Object.assign(Object.assign(Object.assign({}, _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"commonStyle\"]), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"sizes\"].large), _muiButtons__WEBPACK_IMPORTED_MODULE_1__[\"variants\"].contained),\n            startIcon: {\n                margin: '0 8px 0 0'\n            },\n            endIcon: {\n                margin: '0 0 0 8px'\n            },\n            // iconSizeSmall: {\n            //     margin: 0\n            // },\n            label: {\n                display: 'flex',\n                alignItems: 'center'\n            }\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (overridedMuiTheme);\n\n\n//# sourceURL=webpack:///./src/modules/Themes/mui.tsx?");

/***/ }),

/***/ "./src/modules/Themes/muiButtons.tsx":
/*!*******************************************!*\
  !*** ./src/modules/Themes/muiButtons.tsx ***!
  \*******************************************/
/*! exports provided: commonStyle, sizes, variants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commonStyle\", function() { return commonStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sizes\", function() { return sizes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"variants\", function() { return variants; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/modules/Themes/colors.tsx\");\n\nconst commonStyle = {\n    lineHeight: '16px',\n    borderRadius: 4,\n    fontWeight: 500,\n    display: 'flex',\n    alignItems: 'center',\n    minWidth: '64px',\n    opacity: 1\n};\nconst sizes = {\n    small: {\n        padding: '4px 8px !important',\n        fontSize: '10px'\n    },\n    medium: {\n        padding: '8px 10px !important',\n        fontSize: '11px'\n    },\n    large: {\n        padding: '12px 16px !important',\n        fontSize: '14px'\n    }\n};\nconst variants = {\n    text: {\n        color: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]}`,\n        background: 'transparent',\n        '&:hover': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primary.hovered}`\n        },\n        '&:active': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primary.focused}`\n        },\n        '&:disabled': {\n            color: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onSurface.disabled}`,\n            border: 'none'\n        }\n    },\n    outlined: {\n        border: 'none',\n        color: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]}`,\n        boxShadow: `0px 0px 0px 1px ${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onSurface.white12} inset`,\n        '&:hover': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primary.hovered}`\n        },\n        '&:active': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].primary.focused}`\n        },\n        '&:disabled': {\n            color: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onSurface.disabled}`,\n            border: 'none'\n        }\n    },\n    contained: {\n        background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]} !important`,\n        color: '#000000',\n        '&:hover': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]}`\n        },\n        '&:disabled': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onSurface.white12} !important`,\n            color: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].onSurface.disabled}`\n        },\n        '&:active': {\n            background: `${_colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue[200]}`\n        }\n    }\n};\n\n\n//# sourceURL=webpack:///./src/modules/Themes/muiButtons.tsx?");

/***/ }),

/***/ "./src/stores/GlobalStore.tsx":
/*!************************************!*\
  !*** ./src/stores/GlobalStore.tsx ***!
  \************************************/
/*! exports provided: globalStore, GlobalStoreProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalStore\", function() { return globalStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStoreProvider\", function() { return GlobalStoreProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserStore */ \"./src/stores/UserStore.ts\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var _modules_Themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/Themes */ \"./src/modules/Themes/index.ts\");\n// TODO: Перенести в global/hooks\n\n\n\n\nconst history = Object(history__WEBPACK_IMPORTED_MODULE_2__[\"createBrowserHistory\"])();\nconst globalStore = {\n    user: new _UserStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"](history),\n    history: history,\n    theme: _modules_Themes__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n};\nconst storeContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](null);\nconst GlobalStoreProvider = ({ children }) => {\n    const store = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](() => {\n        return globalStore;\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](storeContext.Provider, { value: store }, children);\n};\nconst useGlobalStore = (flag) => {\n    const [store] = react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"](storeContext);\n    if (!store) {\n        throw new Error('You have forgot to use StoreProvider, shame on you.');\n    }\n    if (flag) {\n        return store.user;\n    }\n    return store;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGlobalStore);\n\n\n//# sourceURL=webpack:///./src/stores/GlobalStore.tsx?");

/***/ }),

/***/ "./src/stores/UserStore.ts":
/*!*********************************!*\
  !*** ./src/stores/UserStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return default_1; });\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/dist/mobx.esm.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nclass default_1 {\n    constructor(history) {\n        this._result = [];\n        this.pushData = (data) => {\n            this._result.length === 0\n                || this._result.filter(item => JSON.stringify(item) === JSON.stringify(data)).length === 0\n                    && this._result.push(data);\n        };\n        this.history = history;\n    }\n    get result() {\n        return this._result;\n    }\n    get resultLast() {\n        return this._result.length ? this._result[this._result.length - 1] : {};\n    }\n}\n__decorate([\n    mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]\n], default_1.prototype, \"_result\", void 0);\n__decorate([\n    mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]\n], default_1.prototype, \"result\", null);\n__decorate([\n    mobx__WEBPACK_IMPORTED_MODULE_0__[\"computed\"]\n], default_1.prototype, \"resultLast\", null);\n__decorate([\n    mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]\n], default_1.prototype, \"pushData\", void 0);\n\n\n//# sourceURL=webpack:///./src/stores/UserStore.ts?");

/***/ }),

/***/ "./src/styles/GlobalStyle.tsx":
/*!************************************!*\
  !*** ./src/styles/GlobalStyle.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"] `\n    * {\n        box-sizing: border-box;\n    }\n\n    * ::-webkit-scrollbar-track\n    {\n        border-radius: 100px;\n        margin: 4px;\n    }\n\n    * ::-webkit-scrollbar\n    {\n        width: 8px;\n    }\n\n    * ::-webkit-scrollbar-thumb\n    {\n        border-radius: 10px;\n        background-color: rgba(255, 255, 255, 0.25);\n    }\n\n    html, body {\n        color: white;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 13px;\n        font-family: 'Poiret One', Arial, Helvetica, sans-serif;\n        /* background: #030918; */\n        height: 100%;\n\n        @font-face {\n            font-family: 'PoiretOne';\n            font-weight: 400;\n            src: url('./assets/fonts/PoiretOne.ttf');\n        }\n    }\n    body {\n        line-height: 1.5;\n        font-family: 'Poiret One', sans-serif;\n    }\n\n    p,h1,h2,h3,h4,h5,h6 {\n        padding: 0;\n        margin: 0;\n    }\n\n    #root {\n        display: flex;\n        flex-direction: column;\n        height: 100vh;\n        width: 100%;\n        padding: 20px;\n        background: #030918;\n\n        overflow: hidden;\n    }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n\n//# sourceURL=webpack:///./src/styles/GlobalStyle.tsx?");

/***/ }),

/***/ "./src/styles/warning/Styled.tsx":
/*!***************************************!*\
  !*** ./src/styles/warning/Styled.tsx ***!
  \***************************************/
/*! exports provided: Container, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({ displayName: \"Container\", componentId: \"sc-1yvwg9s\" }) `\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n    overflow: hidden;\n    position: absolute;\n    background: #70809026;\n    min-height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n`;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({ displayName: \"Message\", componentId: \"sc-18n3pll\" }) `\n    top: 50%;\n    left: 50%;\n    font-size: calc(1rem + 1vmin);\n    font-weight: 500;\n`;\n\n\n//# sourceURL=webpack:///./src/styles/warning/Styled.tsx?");

/***/ }),

/***/ "./src/styles/warning/index.ts":
/*!*************************************!*\
  !*** ./src/styles/warning/index.ts ***!
  \*************************************/
/*! exports provided: Message, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styled */ \"./src/styles/warning/Styled.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return _Styled__WEBPACK_IMPORTED_MODULE_0__[\"Message\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return _Styled__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/styles/warning/index.ts?");

/***/ })

/******/ });