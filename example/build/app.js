(function(){
  
  var manifestJson = {"package":"com.application.demo","name":"example","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1050","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false}}}}
  var createAppHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=F:\\github\\qrcode\\example\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=F:\\github\\qrcode\\example&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=F:/github/qrcode/example/src!./node_modules/_babel-loader@8.0.6@babel-loader/lib?cwd=F:/github/qrcode/example&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function __scriptModule__ (module, exports, $app_require$){\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {};\nexports.default = _default;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi4xMEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL3NjcmlwdC1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi4xMEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21vZHVsZS1sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi4xMEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPUY6XFxnaXRodWJcXHFyY29kZVxcZXhhbXBsZVxcc3JjIS4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJAOC4wLjZAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9RjpcXGdpdGh1YlxccXJjb2RlXFxleGFtcGxlJmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlIS4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuMTBAQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL3NyYy9hcHAudXg/dXhUeXBlPWFwcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLnV4PzFiNzEiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBcbn1cbjwvc2NyaXB0PiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=F:\\github\\qrcode\\example\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=F:\\github\\qrcode\\example&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\n");

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $app_style$ = {};var $app_script$ = __webpack_require__(/*! ../node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=F:/github/qrcode/example/src!../node_modules/babel-loader?cwd=F:/github/qrcode/example&cacheDirectory&comments=false!../node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ \"./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/manifest-loader.js?path=F:\\\\github\\\\qrcode\\\\example\\\\src!./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?cwd=F:\\\\github\\\\qrcode\\\\example&cacheDirectory&comments=false!./node_modules/_@hap-toolkit_dsl-xvm@0.6.10@@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app\")\n\n$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){\n     $app_script$($app_module$, $app_exports$, $app_require$)\n     if ($app_exports$.__esModule && $app_exports$.default) {\n            $app_module$.exports = $app_exports$.default;\n        }\n     $app_module$.exports['manifest'] = manifestJson;\n     $app_module$.exports.style = { list: [ $app_style$ ] };\n})\n\n$app_bootstrap$('@app-application/app',{ packagerVersion: '0.6.10'})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnV4P3V4VHlwZT1hcHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnV4PzNiNDYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRhcHBfc3R5bGUkID0ge307dmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL19AaGFwLXRvb2xraXRfZHNsLXh2bUAwLjYuMTBAQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlci9zY3JpcHQtbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9fQGhhcC10b29sa2l0X2RzbC14dm1AMC42LjEwQEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvbW9kdWxlLWxvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvX0BoYXAtdG9vbGtpdF9kc2wteHZtQDAuNi4xMEBAaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVyL21hbmlmZXN0LWxvYWRlci5qcz9wYXRoPUY6XFxcXGdpdGh1YlxcXFxxcmNvZGVcXFxcZXhhbXBsZVxcXFxzcmMhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9jd2Q9RjpcXFxcZ2l0aHViXFxcXHFyY29kZVxcXFxleGFtcGxlJmNhY2hlRGlyZWN0b3J5JmNvbW1lbnRzPWZhbHNlIS4uL25vZGVfbW9kdWxlcy9fQGhhcC10b29sa2l0X2RzbC14dm1AMC42LjEwQEBoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXIvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9hcHAudXg/dXhUeXBlPWFwcFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0c1snbWFuaWZlc3QnXSA9IG1hbmlmZXN0SnNvbjtcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSB7IGxpc3Q6IFsgJGFwcF9zdHlsZSQgXSB9O1xufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWFwcGxpY2F0aW9uL2FwcCcseyBwYWNrYWdlclZlcnNpb246ICcwLjYuMTAnfSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ux?uxType=app\n");

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = manifestJson;
  }
})();