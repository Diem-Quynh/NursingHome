module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/modules/I18n */ "./themes/modules/I18n.js");
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_components_Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/components/Store */ "./themes/components/Store/index.jsx");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/components/Loading */ "./themes/components/Loading/index.tsx");
/* harmony import */ var themes_less_custom_ant_theme_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/less/custom-ant-theme.less */ "./themes/less/custom-ant-theme.less");
/* harmony import */ var themes_less_custom_ant_theme_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(themes_less_custom_ant_theme_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var themes_less_home_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! themes/less/home.less */ "./themes/less/home.less");
/* harmony import */ var themes_less_home_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(themes_less_home_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var themes_less_login_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! themes/less/login.less */ "./themes/less/login.less");
/* harmony import */ var themes_less_login_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(themes_less_login_less__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var themes_less_admin_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! themes/less/admin.less */ "./themes/less/admin.less");
/* harmony import */ var themes_less_admin_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(themes_less_admin_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var themes_components_Errors_403__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! themes/components/Errors/403 */ "./themes/components/Errors/403.tsx");
/* harmony import */ var themes_components_Utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! themes/components/Utils */ "./themes/components/Utils/index.jsx");
/* harmony import */ var themes_utils_Permission__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! themes/utils/Permission */ "./themes/utils/Permission.ts");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_16__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_16___default()();

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(AppContext) {
    const {
      Component,
      ctx
    } = AppContext; //check permission

    const pagePermissions = Component.permissions;
    const cookies = next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(ctx);

    const userPermissions = lodash__WEBPACK_IMPORTED_MODULE_12___default.a.get(cookies, "user.permissions", {});

    let resultPermission = {};
    let newComponent = Component;

    if (pagePermissions) {
      resultPermission = Object(themes_utils_Permission__WEBPACK_IMPORTED_MODULE_15__["checkPermission"])(pagePermissions, userPermissions, true);
      if (resultPermission != true) newComponent = themes_components_Errors_403__WEBPACK_IMPORTED_MODULE_13__["default"];
    }

    const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(_objectSpread(_objectSpread({}, AppContext), {}, {
      Component: newComponent
    })); // calls page's `getInitialProps` and fills `appProps.pageProps`

    ctx.store.dispatch(Object(themes_components_Store__WEBPACK_IMPORTED_MODULE_4__["setStore"])("auth", cookies.user));
    ctx.store.dispatch(Object(themes_components_Store__WEBPACK_IMPORTED_MODULE_4__["setStore"])("cookies", cookies));
    ctx.store.dispatch(Object(themes_components_Store__WEBPACK_IMPORTED_MODULE_4__["setStore"])("publicRuntimeConfig", publicRuntimeConfig));
    let namespacesRequired = appProps.namespacesRequired || [];
    return _objectSpread(_objectSpread(_objectSpread({}, resultPermission), appProps), {}, {
      auth: cookies.user,
      cookies: cookies,
      namespacesRequired: [...namespacesRequired, 'common', 'pages', 'menu']
    });
  }

  render() {
    let {
      Component,
      pageProps,
      store,
      error,
      permissions
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(themes_components_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store
    }, error ? __jsx(themes_components_Errors_403__WEBPACK_IMPORTED_MODULE_13__["default"], {
      permissions: permissions
    }) : __jsx(Component, pageProps), __jsx(themes_components_Utils__WEBPACK_IMPORTED_MODULE_14__["ScrollToTopButton"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default()(themes_components_Store__WEBPACK_IMPORTED_MODULE_4__["makeStore"])(Object(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_2__["appWithTranslation"])(MyApp)));

/***/ }),

/***/ "./themes/_routes.json":
/*!*****************************!*\
  !*** ./themes/_routes.json ***!
  \*****************************/
/*! exports provided: __NOTE__, frontend.admin.login, api.login, api.users.updatePassword, api.users.userUpdatePassword, api.userPermissions.getByGroupId, api.userGroupPermissions.update, api.userGroups.index, api.userGroups.store, api.userGroups.detail, api.userGroups.update, api.userGroups.destroy, api.userGroups.delete, api.userPermissions.index, api.userPermissions.store, api.userPermissions.detail, api.userPermissions.update, api.userPermissions.destroy, api.userPermissions.delete, api.users.index, api.users.store, api.users.detail, api.users.update, api.users.destroy, api.users.delete, api.rooms.index, api.rooms.store, api.rooms.detail, api.rooms.update, api.rooms.destroy, api.rooms.delete, api.beds.index, api.beds.store, api.beds.detail, api.beds.update, api.beds.destroy, api.beds.delete, api.patients.index, api.patients.store, api.patients.detail, api.patients.update, api.patients.destroy, api.patients.delete, api.doctorAssignments.index, api.doctorAssignments.store, api.doctorAssignments.detail, api.doctorAssignments.update, api.doctorAssignments.destroy, api.doctorAssignments.delete, api.nurseAssignments.index, api.nurseAssignments.store, api.nurseAssignments.detail, api.nurseAssignments.update, api.nurseAssignments.destroy, api.nurseAssignments.delete, api.healthStatuses.index, api.healthStatuses.store, api.healthStatuses.detail, api.healthStatuses.update, api.healthStatuses.destroy, api.healthStatuses.delete, frontend.admin.home, frontend.admin.example.form, frontend.admin.dashboard.index, frontend.admin.users.index, frontend.admin.users.create, frontend.admin.users.edit, frontend.admin.userGroups.index, frontend.admin.userGroups.create, frontend.admin.userGroups.edit, frontend.admin.userGroups.role, frontend.admin.userPermissions.index, frontend.admin.userPermissions.create, frontend.admin.userPermissions.edit, frontend.admin.rooms.index, frontend.admin.rooms.create, frontend.admin.rooms.edit, frontend.admin.beds.index, frontend.admin.beds.create, frontend.admin.beds.edit, frontend.admin.patients.index, frontend.admin.patients.create, frontend.admin.patients.edit, frontend.admin.doctorAssignments.index, frontend.admin.doctorAssignments.create, frontend.admin.doctorAssignments.edit, frontend.admin.nurseAssignments.index, frontend.admin.nurseAssignments.create, frontend.admin.nurseAssignments.edit, frontend.admin.healthStatuses.index, frontend.admin.healthStatuses.create, frontend.admin.healthStatuses.edit, frontend.admin.statistics.healthStatus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"__NOTE__\":{\"note\":\"Do not edit this file. It is automatically generated by the system. To edit routes, please edit the file: routes/frontend.xxx.js\"},\"frontend.admin.login\":{\"url\":\"/admin/login\",\"action\":\"pages/admin/login\",\"method\":\"get\",\"middlewares\":[],\"name\":\"frontend.admin.login\",\"sidebar\":\"frontend.admin.login\"},\"api.login\":{\"url\":\"/api/v1/login\",\"action\":\"UserController.login\",\"method\":\"post\",\"middlewares\":[null],\"name\":\"api.login\",\"sidebar\":\"api.login\"},\"api.users.updatePassword\":{\"url\":\"/api/v1/users/:id/updatePassword\",\"action\":\"UserController.updatePassword\",\"method\":\"put\",\"middlewares\":[null,null,null],\"name\":\"api.users.updatePassword\",\"sidebar\":\"api.users.updatePassword\"},\"api.users.userUpdatePassword\":{\"url\":\"/api/v1/user/:id/userUpdatePassword\",\"action\":\"UserController.userUpdatePassword\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.userUpdatePassword\",\"sidebar\":\"api.users.userUpdatePassword\"},\"api.userPermissions.getByGroupId\":{\"url\":\"/api/v1/userPermissions/:groupId/getPermission\",\"action\":\"UserPermissionController.getByGroupId\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.getByGroupId\",\"sidebar\":\"api.userPermissions.getByGroupId\"},\"api.userGroupPermissions.update\":{\"url\":\"/api/v1/userGroupPermissions\",\"action\":\"UserGroupPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroupPermissions.update\",\"sidebar\":\"api.userGroupPermissions.update\"},\"api.userGroups.index\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.index\",\"sidebar\":\"api.userGroups.index\"},\"api.userGroups.store\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userGroups.store\",\"sidebar\":\"api.userGroups.store\"},\"api.userGroups.detail\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.detail\",\"sidebar\":\"api.userGroups.detail\"},\"api.userGroups.update\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroups.update\",\"sidebar\":\"api.userGroups.update\"},\"api.userGroups.destroy\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.destroy\",\"sidebar\":\"api.userGroups.destroy\"},\"api.userGroups.delete\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.delete\",\"sidebar\":\"api.userGroups.delete\"},\"api.userPermissions.index\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.index\",\"sidebar\":\"api.userPermissions.index\"},\"api.userPermissions.store\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.store\",\"sidebar\":\"api.userPermissions.store\"},\"api.userPermissions.detail\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.detail\",\"sidebar\":\"api.userPermissions.detail\"},\"api.userPermissions.update\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.update\",\"sidebar\":\"api.userPermissions.update\"},\"api.userPermissions.destroy\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.destroy\",\"sidebar\":\"api.userPermissions.destroy\"},\"api.userPermissions.delete\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.delete\",\"sidebar\":\"api.userPermissions.delete\"},\"api.users.index\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.index\",\"sidebar\":\"api.users.index\"},\"api.users.store\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.users.store\",\"sidebar\":\"api.users.store\"},\"api.users.detail\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.detail\",\"sidebar\":\"api.users.detail\"},\"api.users.update\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.update\",\"sidebar\":\"api.users.update\"},\"api.users.destroy\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.destroy\",\"sidebar\":\"api.users.destroy\"},\"api.users.delete\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.delete\",\"sidebar\":\"api.users.delete\"},\"api.rooms.index\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.index\",\"sidebar\":\"api.rooms.index\"},\"api.rooms.store\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.rooms.store\",\"sidebar\":\"api.rooms.store\"},\"api.rooms.detail\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.detail\",\"sidebar\":\"api.rooms.detail\"},\"api.rooms.update\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.rooms.update\",\"sidebar\":\"api.rooms.update\"},\"api.rooms.destroy\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.destroy\",\"sidebar\":\"api.rooms.destroy\"},\"api.rooms.delete\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.delete\",\"sidebar\":\"api.rooms.delete\"},\"api.beds.index\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.index\",\"sidebar\":\"api.beds.index\"},\"api.beds.store\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.beds.store\",\"sidebar\":\"api.beds.store\"},\"api.beds.detail\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.detail\",\"sidebar\":\"api.beds.detail\"},\"api.beds.update\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.beds.update\",\"sidebar\":\"api.beds.update\"},\"api.beds.destroy\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.destroy\",\"sidebar\":\"api.beds.destroy\"},\"api.beds.delete\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.delete\",\"sidebar\":\"api.beds.delete\"},\"api.patients.index\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.index\",\"sidebar\":\"api.patients.index\"},\"api.patients.store\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.patients.store\",\"sidebar\":\"api.patients.store\"},\"api.patients.detail\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.detail\",\"sidebar\":\"api.patients.detail\"},\"api.patients.update\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.patients.update\",\"sidebar\":\"api.patients.update\"},\"api.patients.destroy\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.destroy\",\"sidebar\":\"api.patients.destroy\"},\"api.patients.delete\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.delete\",\"sidebar\":\"api.patients.delete\"},\"api.doctorAssignments.index\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.index\",\"sidebar\":\"api.doctorAssignments.index\"},\"api.doctorAssignments.store\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.store\",\"sidebar\":\"api.doctorAssignments.store\"},\"api.doctorAssignments.detail\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.detail\",\"sidebar\":\"api.doctorAssignments.detail\"},\"api.doctorAssignments.update\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.update\",\"sidebar\":\"api.doctorAssignments.update\"},\"api.doctorAssignments.destroy\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.destroy\",\"sidebar\":\"api.doctorAssignments.destroy\"},\"api.doctorAssignments.delete\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.delete\",\"sidebar\":\"api.doctorAssignments.delete\"},\"api.nurseAssignments.index\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.index\",\"sidebar\":\"api.nurseAssignments.index\"},\"api.nurseAssignments.store\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.store\",\"sidebar\":\"api.nurseAssignments.store\"},\"api.nurseAssignments.detail\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.detail\",\"sidebar\":\"api.nurseAssignments.detail\"},\"api.nurseAssignments.update\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.update\",\"sidebar\":\"api.nurseAssignments.update\"},\"api.nurseAssignments.destroy\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.destroy\",\"sidebar\":\"api.nurseAssignments.destroy\"},\"api.nurseAssignments.delete\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.delete\",\"sidebar\":\"api.nurseAssignments.delete\"},\"api.healthStatuses.index\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.index\",\"sidebar\":\"api.healthStatuses.index\"},\"api.healthStatuses.store\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.store\",\"sidebar\":\"api.healthStatuses.store\"},\"api.healthStatuses.detail\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.detail\",\"sidebar\":\"api.healthStatuses.detail\"},\"api.healthStatuses.update\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.update\",\"sidebar\":\"api.healthStatuses.update\"},\"api.healthStatuses.destroy\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.destroy\",\"sidebar\":\"api.healthStatuses.destroy\"},\"api.healthStatuses.delete\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.delete\",\"sidebar\":\"api.healthStatuses.delete\"},\"frontend.admin.home\":{\"url\":\"/admin\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.home\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.example.form\":{\"url\":\"/admin/example/form\",\"action\":\"pages/example/form\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.example.form\",\"sidebar\":\"frontend.admin.example.form\"},\"frontend.admin.dashboard.index\":{\"url\":\"/admin/dashboard\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.dashboard.index\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.users.index\":{\"url\":\"/admin/users\",\"action\":\"pages/admin/users\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.index\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.create\":{\"url\":\"/admin/users/create\",\"parent\":\"frontend.admin.users.index\",\"action\":\"pages/admin/users/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.create\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.edit\":{\"url\":\"/admin/users/:id/edit\",\"action\":\"pages/admin/users/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.edit\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.userGroups.index\":{\"url\":\"/admin/userGroups\",\"action\":\"pages/admin/userGroups\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.index\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.create\":{\"url\":\"/admin/userGroups/create\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.create\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.edit\":{\"url\":\"/admin/userGroups/:id/edit\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.edit\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.role\":{\"url\":\"/admin/userGroups/:id/role\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/role\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.role\",\"sidebar\":\"frontend.admin.userGroups.role\"},\"frontend.admin.userPermissions.index\":{\"url\":\"/admin/userPermissions\",\"action\":\"pages/admin/userPermissions\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.index\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.create\":{\"url\":\"/admin/userPermissions/create\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.create\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.edit\":{\"url\":\"/admin/userPermissions/:id/edit\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.edit\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.rooms.index\":{\"url\":\"/admin/rooms\",\"action\":\"pages/admin/rooms\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.index\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.create\":{\"url\":\"/admin/rooms/create\",\"parent\":\"frontend.admin.rooms.index\",\"action\":\"pages/admin/rooms/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.create\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.edit\":{\"url\":\"/admin/rooms/:id/edit\",\"action\":\"pages/admin/rooms/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.edit\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.beds.index\":{\"url\":\"/admin/beds\",\"action\":\"pages/admin/beds\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.index\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.create\":{\"url\":\"/admin/beds/create\",\"parent\":\"frontend.admin.beds.index\",\"action\":\"pages/admin/beds/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.create\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.edit\":{\"url\":\"/admin/beds/:id/edit\",\"action\":\"pages/admin/beds/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.edit\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.patients.index\":{\"url\":\"/admin/patients\",\"action\":\"pages/admin/patients\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.index\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.create\":{\"url\":\"/admin/patients/create\",\"parent\":\"frontend.admin.patients.index\",\"action\":\"pages/admin/patients/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.create\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.edit\":{\"url\":\"/admin/patients/:id/edit\",\"action\":\"pages/admin/patients/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.edit\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.doctorAssignments.index\":{\"url\":\"/admin/doctorAssignments\",\"action\":\"pages/admin/doctorAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.index\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.create\":{\"url\":\"/admin/doctorAssignments/create\",\"parent\":\"frontend.admin.doctorAssignments.index\",\"action\":\"pages/admin/doctorAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.create\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.edit\":{\"url\":\"/admin/doctorAssignments/:id/edit\",\"action\":\"pages/admin/doctorAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.edit\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.nurseAssignments.index\":{\"url\":\"/admin/nurseAssignments\",\"action\":\"pages/admin/nurseAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.index\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.create\":{\"url\":\"/admin/nurseAssignments/create\",\"parent\":\"frontend.admin.nurseAssignments.index\",\"action\":\"pages/admin/nurseAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.create\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.edit\":{\"url\":\"/admin/nurseAssignments/:id/edit\",\"action\":\"pages/admin/nurseAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.edit\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.healthStatuses.index\":{\"url\":\"/admin/healthStatuses\",\"action\":\"pages/admin/healthStatuses\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.index\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.create\":{\"url\":\"/admin/healthStatuses/create\",\"parent\":\"frontend.admin.healthStatuses.index\",\"action\":\"pages/admin/healthStatuses/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.create\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.edit\":{\"url\":\"/admin/healthStatuses/:id/edit\",\"action\":\"pages/admin/healthStatuses/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.edit\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.statistics.healthStatus\":{\"url\":\"/admin/statistics/healthStatus\",\"action\":\"pages/admin/statistics/healthStatus\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.statistics.healthStatus\",\"sidebar\":\"frontend.admin.statistics.index\"}}");

/***/ }),

/***/ "./themes/components/Errors/403.tsx":
/*!******************************************!*\
  !*** ./themes/components/Errors/403.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Error = ({
  permissions
}) => {
  const {
    t,
    router
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_1__["default"])();
  let subTitle = "";

  if (permissions) {
    subTitle = t("pages:errors.403.detail") + 'root, ';

    for (const iterator of permissions) {
      const permission = iterator['permission'];
      const requirePermission = iterator['requirePermission'];
      const userPermission = iterator['userPermission'];
      subTitle = subTitle + t('common:or') + ' ' + t("pages:errors.403.permissionDetail", {
        permission,
        requirePermission,
        userPermission
      });
    }
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Result"], {
    status: "403",
    title: t("pages:errors.403.title"),
    subTitle: __jsx("div", {
      style: {
        width: '80%',
        margin: 'auto'
      }
    }, t("pages:errors.403.description"), __jsx("br", null), subTitle),
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "primary",
      onClick: () => router.back()
    }, t("back"))
  });
};

Error.getInitialProps = () => {
  return {
    namespacesRequired: ['common', 'pages', 'menu']
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./themes/components/Loading/index.tsx":
/*!*********************************************!*\
  !*** ./themes/components/Loading/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tanem_react_nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanem/react-nprogress */ "@tanem/react-nprogress");
/* harmony import */ var _tanem_react_nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tanem_react_nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* Router.onRouteChangeStart = () => {
  console.log("vao...")
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log("vao...2")
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
 */

const Loading = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: isRouteChanging,
    1: setIsRouteChanging
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onStart = () => {
    setIsRouteChanging(true);
  };

  const onEnd = () => {
    setIsRouteChanging(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);
    router.events.on('routeChangeError', onEnd);
    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
      router.events.off('routeChangeError', onEnd);
    };
  }, []);
  return __jsx(_tanem_react_nprogress__WEBPACK_IMPORTED_MODULE_0__["NProgress"], {
    isAnimating: isRouteChanging,
    key: "loading"
  }, ({
    isFinished,
    progress,
    animationDuration
  }) => __jsx("div", {
    style: {
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`
    }
  }, __jsx("div", {
    style: {
      background: '#29d',
      height: 2,
      left: 0,
      marginLeft: `${(-1 + progress) * 100}%`,
      position: 'fixed',
      top: 0,
      transition: `margin-left ${animationDuration}ms linear`,
      width: '100%',
      zIndex: 1031
    }
  }, __jsx("div", {
    style: {
      boxShadow: '0 0 10px #29d, 0 0 5px #29d',
      display: 'block',
      height: '100%',
      opacity: 1,
      position: 'absolute',
      right: 0,
      transform: 'rotate(3deg) translate(0px, -4px)',
      width: 100
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./themes/components/Store/index.jsx":
/*!*******************************************!*\
  !*** ./themes/components/Store/index.jsx ***!
  \*******************************************/
/*! exports provided: makeStore, setStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStore", function() { return setStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const reducer = (state = {}, action) => {
  if (action.type === "setStore") {
    state = _objectSpread({}, state);

    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.set(state, action.payload.path, action.payload.value);

    return state;
  }

  return state;
};
/* const reducer = combineReducers({
  store: storeReducer
}) */


const setStore = (path, value) => ({
  type: 'setStore',
  payload: {
    path,
    value
  }
});

const makeStore = (initState = {}, options) => {
  let devToolExtensions = !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initState, devToolExtensions);
};



/***/ }),

/***/ "./themes/components/Utils/ScrollToTopButton.jsx":
/*!*******************************************************!*\
  !*** ./themes/components/Utils/ScrollToTopButton.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_up_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-up-button */ "react-scroll-up-button");
/* harmony import */ var react_scroll_up_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_up_button__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", null, __jsx(react_scroll_up_button__WEBPACK_IMPORTED_MODULE_1___default.a, null));
  }

}

/***/ }),

/***/ "./themes/components/Utils/index.jsx":
/*!*******************************************!*\
  !*** ./themes/components/Utils/index.jsx ***!
  \*******************************************/
/*! exports provided: ScrollToTopButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollToTopButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollToTopButton */ "./themes/components/Utils/ScrollToTopButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopButton", function() { return _ScrollToTopButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./themes/hooks/BaseHooks.tsx":
/*!************************************!*\
  !*** ./themes/hooks/BaseHooks.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/modules/I18n */ "./themes/modules/I18n.js");
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var themes_components_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/components/Store */ "./themes/components/Store/index.jsx");
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);








const useBaseHooks = ({
  lang = ['common', 'pages', 'errors']
} = {}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const I18n = Object(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(lang);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const setStore = async (path, value) => {
    return dispatch(Object(themes_components_Store__WEBPACK_IMPORTED_MODULE_3__["setStore"])(path, value));
  };

  const getStore = path => {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(state, path));
  };

  const redirect = (routeName, query, shallow = false) => {
    let nextRoute;

    try {
      nextRoute = Object(themes_route__WEBPACK_IMPORTED_MODULE_4__["default"])(routeName, query);
    } catch (e) {
      nextRoute = {
        href: routeName,
        as: routeName
      };
    }

    router.push(nextRoute.href, nextRoute.as, {
      shallow
    });
  };

  const getData = (obj, path, defaultValue = undefined) => {
    let value = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(obj, path, defaultValue);

    if (value == null) return defaultValue;
    return value;
  };

  const notify = (message, description = '', type = "success") => {
    antd__WEBPACK_IMPORTED_MODULE_6__["notification"][type]({
      message: message,
      description: description,
      duration: 4 //second

    });
  };

  const getAuth = () => {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.auth);
  };

  const getCookies = () => {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cookies);
  };

  const getPublicRuntimeConfig = () => {
    return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.publicRuntimeConfig);
  };

  return {
    useSelector: react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"],
    router,
    t: I18n.t,
    setStore,
    getStore,
    redirect,
    getData,
    notify,
    getAuth,
    getCookies,
    getPublicRuntimeConfig
  };
};

useBaseHooks.getData = (obj, path, defaultValue = undefined) => {
  let value = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.get(obj, path, defaultValue);

  if (value == null) return defaultValue;
  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (useBaseHooks);

/***/ }),

/***/ "./themes/less/admin.less":
/*!********************************!*\
  !*** ./themes/less/admin.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/less/custom-ant-theme.less":
/*!*******************************************!*\
  !*** ./themes/less/custom-ant-theme.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/less/home.less":
/*!*******************************!*\
  !*** ./themes/less/home.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/less/login.less":
/*!********************************!*\
  !*** ./themes/less/login.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/modules/I18n.js":
/*!********************************!*\
  !*** ./themes/modules/I18n.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

const getConfig = __webpack_require__(/*! next/config */ "next/config").default;

const {
  publicRuntimeConfig
} = getConfig();
const NextI18NextInstance = new NextI18Next({
  defaultNS: 'common',
  defaultLanguage: publicRuntimeConfig.LANG,
  otherLanguages: ['en'],
  localePath: "lang",
  browserLanguageDetection: false,
  serverLanguageDetection: false
});
module.exports = NextI18NextInstance;

/***/ }),

/***/ "./themes/route.js":
/*!*************************!*\
  !*** ./themes/route.js ***!
  \*************************/
/*! exports provided: default, route, addQuery, getBreadcrumbs, getSidebarSelecteds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuery", function() { return addQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreadcrumbs", function() { return getBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSidebarSelecteds", function() { return getSidebarSelecteds; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_routes */ "./themes/_routes.json");
var _routes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./_routes */ "./themes/_routes.json", 1);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./themes/sidebar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const UrlPattern = __webpack_require__(/*! url-pattern */ "url-pattern");

const queryString = __webpack_require__(/*! query-string */ "query-string");





class Route {
  static makeUrl(name, params) {
    let routeInfo = _routes__WEBPACK_IMPORTED_MODULE_1__[name];

    if (!routeInfo) {
      //console.error(`Route ${name} not found`)
      throw Error(`Route ${name} not found`);
    }

    let pattern = new UrlPattern(routeInfo.url);
    let query = queryString.stringify(params);

    try {
      let asUrl = pattern.stringify(params); //link hiển thị trên trình duyệt

      let href = asUrl; //link thật trong /pages

      if (routeInfo.action.substr(0, 6) === "pages/") {
        href = routeInfo.action.substr(5);

        if (href.indexOf('?') === -1) {
          href += `?${query}`;
        } else {
          href += `&${query}`;
        }
      }

      return {
        as: asUrl,
        href: href
      };
    } catch (e) {
      //console.error(e)
      throw e;
    }
  }

  static addQuery(query, shallow = true) {
    if (true) return;
    let asPath = window.location.pathname;
    let oldQuery = next_router__WEBPACK_IMPORTED_MODULE_0___default.a.router.query;

    let queryObj = _objectSpread(_objectSpread({}, oldQuery), query);

    if (JSON.stringify(queryObj) == JSON.stringify(oldQuery)) return;
    let queryStringAppend = queryString.stringify(queryObj);
    /* if(queryStringAppend){
      Router.push({
        pathname: Router.router.pathname,
        query: queryObj,
      }, {
        pathname: asPath,
        query: queryObj
      }, {
        shallow: shallow,
      })
      Router.router.query = queryObj
    } */

    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push({
      pathname: next_router__WEBPACK_IMPORTED_MODULE_0___default.a.router.pathname,
      query: queryObj
    }, {
      pathname: asPath,
      query: queryObj
    }, {
      shallow: shallow
    });
  }

}

_defineProperty(Route, "getSidebarSelecteds", (routeName, routes, routePaths = []) => {
  let sidebarSelectedName = _routes__WEBPACK_IMPORTED_MODULE_1__[routeName] ? _routes__WEBPACK_IMPORTED_MODULE_1__[routeName].sidebar : undefined;
  if (!routes) routes = _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"];

  for (let route of routes) {
    if (route.routeName === sidebarSelectedName) {
      routePaths.push(route);
      return routePaths;
    } else if (route.children) {
      let result = Route.getSidebarSelecteds(sidebarSelectedName, route.children, [...routePaths, route]);
      if (result && result.length) return result;
    }
  }

  return [];
});

_defineProperty(Route, "getBreadcrumbs", routeName => {
  let result = [];
  const route = _routes__WEBPACK_IMPORTED_MODULE_1__[routeName] ? _routes__WEBPACK_IMPORTED_MODULE_1__[routeName] : undefined;

  if (route) {
    result.unshift(route);

    if (route.parent) {
      result = [...Route.getBreadcrumbs(route.parent), ...result];
    }
  }

  return result;
});

const route = Route.makeUrl;
const addQuery = Route.addQuery;
const getBreadcrumbs = Route.getBreadcrumbs;
const getSidebarSelecteds = Route.getSidebarSelecteds;
/* harmony default export */ __webpack_exports__["default"] = (route);


/***/ }),

/***/ "./themes/sidebar.js":
/*!***************************!*\
  !*** ./themes/sidebar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const sidebar = [{
  routeName: "frontend.admin.dashboard.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HomeOutlined"], null),
  routeParams: {}
}, {
  routeName: "frontend.admin.users.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], null),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.rooms.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["InsertRowRightOutlined"], null),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.beds.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LayoutOutlined"], null),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.patients.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], null),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.assignment",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ScheduleOutlined"], null),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.doctorAssignments.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SolutionOutlined"], null),
    routeParams: {}
  }, {
    routeName: "frontend.admin.nurseAssignments.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SolutionOutlined"], null),
    routeParams: {}
  }]
}, {
  routeName: "frontend.admin.healthStatuses.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CalendarOutlined"], null),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.adminsIndex",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["TeamOutlined"], null),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.userGroups.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UsergroupAddOutlined"], null),
    routeParams: {}
  }, {
    routeName: "frontend.admin.userPermissions.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["VerifiedOutlined"], null),
    routeParams: {}
  }]
}, {
  routeName: "frontend.admin.statistic",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CarryOutOutlined"], null),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.statistics.healthStatus",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LineChartOutlined"], null),
    routeParams: {}
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (sidebar);

/***/ }),

/***/ "./themes/utils/Permission.ts":
/*!************************************!*\
  !*** ./themes/utils/Permission.ts ***!
  \************************************/
/*! exports provided: checkPermission, hasPermission, crudToDec, decToCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPermission", function() { return checkPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasPermission", function() { return hasPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudToDec", function() { return crudToDec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decToCrud", function() { return decToCrud; });
const charToNum = {
  C: 8,
  R: 4,
  U: 2,
  D: 1
};

const crudToDec = text => {
  return text.toUpperCase().split("").reduce((total, char) => total + charToNum[char], 0);
};

const decToCrud = dec => {
  let result = "";
  let char;

  for (char in charToNum) {
    if ((dec & charToNum[char]) == charToNum[char]) result += char;
  }

  return result;
};

const hasPermission = (requirePermission, userPermission) => {
  return (userPermission & requirePermission) === requirePermission;
};

const checkPermission = (permissions, userPermissions, showError = false) => {
  if (!permissions) return true;
  let permissionArray = [];

  for (let permission in permissions) {
    const requirePermission = crudToDec(permissions[permission]);
    const rootPermission = userPermissions["root"] || 0;
    let userPermission = userPermissions[permission] || 0;
    userPermission = userPermission | rootPermission;
    if (hasPermission(requirePermission, userPermission)) return true;
    permissionArray.push({
      permission: permission,
      requirePermission: decToCrud(requirePermission),
      userPermission: decToCrud(userPermission)
    });
  }

  if (!showError) return false;
  return {
    error: true,
    permissions: permissionArray
  };
};



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@tanem/react-nprogress":
/*!*****************************************!*\
  !*** external "@tanem/react-nprogress" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tanem/react-nprogress");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll-up-button":
/*!*****************************************!*\
  !*** external "react-scroll-up-button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-up-button");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url-pattern":
/*!******************************!*\
  !*** external "url-pattern" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-pattern");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0Vycm9ycy80MDMudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9VdGlscy9TY3JvbGxUb1RvcEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVXRpbHMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9CYXNlSG9va3MudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy91dGlscy9QZXJtaXNzaW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHRhbmVtL3JlYWN0LW5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbC11cC1idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiTXlBcHAiLCJBcHBDb250ZXh0IiwiY3R4IiwicGFnZVBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMiLCJjb29raWVzIiwibmV4dENvb2tpZSIsInVzZXJQZXJtaXNzaW9ucyIsIl8iLCJnZXQiLCJyZXN1bHRQZXJtaXNzaW9uIiwibmV3Q29tcG9uZW50IiwiY2hlY2tQZXJtaXNzaW9uIiwiRXJyb3I0MDNQYWdlIiwiYXBwUHJvcHMiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0U3RvcmUiLCJ1c2VyIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiYXV0aCIsImVycm9yIiwicHJvcHMiLCJ3aXRoUmVkdXgiLCJtYWtlU3RvcmUiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJFcnJvciIsInQiLCJ1c2VCYXNlSG9vayIsInN1YlRpdGxlIiwiaXRlcmF0b3IiLCJwZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsIndpZHRoIiwibWFyZ2luIiwiTG9hZGluZyIsInVzZVJvdXRlciIsImlzUm91dGVDaGFuZ2luZyIsInNldElzUm91dGVDaGFuZ2luZyIsInVzZVN0YXRlIiwib25TdGFydCIsIm9uRW5kIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJvZmYiLCJpc0ZpbmlzaGVkIiwicHJvZ3Jlc3MiLCJhbmltYXRpb25EdXJhdGlvbiIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJsZWZ0IiwibWFyZ2luTGVmdCIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYm94U2hhZG93IiwiZGlzcGxheSIsInJpZ2h0IiwidHJhbnNmb3JtIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldCIsInBheWxvYWQiLCJwYXRoIiwidmFsdWUiLCJpbml0U3RhdGUiLCJvcHRpb25zIiwiZGV2VG9vbEV4dGVuc2lvbnMiLCJpc1NlcnZlciIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ1bmRlZmluZWQiLCJjcmVhdGVTdG9yZSIsIkluZGV4IiwidXNlQmFzZUhvb2tzIiwibGFuZyIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJnZXRTdG9yZSIsInVzZVNlbGVjdG9yIiwicmVkaXJlY3QiLCJyb3V0ZU5hbWUiLCJxdWVyeSIsInNoYWxsb3ciLCJuZXh0Um91dGUiLCJyb3V0ZSIsImUiLCJocmVmIiwiZ2V0RGF0YSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsIm5vdGlmeSIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIm5vdGlmaWNhdGlvbiIsImR1cmF0aW9uIiwiZ2V0QXV0aCIsImdldENvb2tpZXMiLCJnZXRQdWJsaWNSdW50aW1lQ29uZmlnIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJkZWZhdWx0TlMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJMQU5HIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiVXJsUGF0dGVybiIsInF1ZXJ5U3RyaW5nIiwiUm91dGUiLCJtYWtlVXJsIiwibmFtZSIsInBhcmFtcyIsInJvdXRlSW5mbyIsInJvdXRlQ29uZmlnIiwicGF0dGVybiIsInN0cmluZ2lmeSIsImFzVXJsIiwic3Vic3RyIiwiaW5kZXhPZiIsImFkZFF1ZXJ5IiwiYXNQYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm9sZFF1ZXJ5IiwiUm91dGVyIiwicXVlcnlPYmoiLCJKU09OIiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZXMiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInNpZGViYXIiLCJjaGlsZHJlbiIsInJlc3VsdCIsImdldFNpZGViYXJTZWxlY3RlZHMiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwicGFyZW50IiwiZ2V0QnJlYWRjcnVtYnMiLCJpY29uIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidGV4dCIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwic2hvd0Vycm9yIiwicGVybWlzc2lvbkFycmF5Iiwicm9vdFBlcm1pc3Npb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNUM7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7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STBCLGNBQWMsR0FBRzFCLGVBQWUsQ0FBQ3dCLFVBQUQsQ0FBZixJQUErQixDQUFwRDtBQUNBRSxrQkFBYyxHQUFHQSxjQUFjLEdBQUc0SSxjQUFsQztBQUNBLFFBQUlILGFBQWEsQ0FBQzFJLGlCQUFELEVBQW9CQyxjQUFwQixDQUFqQixFQUFzRCxPQUFPLElBQVA7QUFDdEQySSxtQkFBZSxDQUFDdkwsSUFBaEIsQ0FBcUI7QUFDakIwQyxnQkFBVSxFQUFFQSxVQURLO0FBRWpCQyx1QkFBaUIsRUFBRXdJLFNBQVMsQ0FBQ3hJLGlCQUFELENBRlg7QUFHakJDLG9CQUFjLEVBQUV1SSxTQUFTLENBQUN2SSxjQUFEO0FBSFIsS0FBckI7QUFLSDs7QUFDRCxNQUFJLENBQUMwSSxTQUFMLEVBQWdCLE9BQU8sS0FBUDtBQUNoQixTQUFPO0FBQ0h0SixTQUFLLEVBQUUsSUFESjtBQUVIakIsZUFBVyxFQUFFd0s7QUFGVixHQUFQO0FBS0gsQ0FyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ3RoZW1lcy9tb2R1bGVzL0kxOG4nXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IG1ha2VTdG9yZSwgc2V0U3RvcmUgfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvTG9hZGluZydcclxuaW1wb3J0ICd0aGVtZXMvbGVzcy9jdXN0b20tYW50LXRoZW1lLmxlc3MnO1xyXG5pbXBvcnQgJ3RoZW1lcy9sZXNzL2hvbWUubGVzcydcclxuaW1wb3J0ICd0aGVtZXMvbGVzcy9sb2dpbi5sZXNzJ1xyXG5pbXBvcnQgJ3RoZW1lcy9sZXNzL2FkbWluLmxlc3MnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmltcG9ydCBFcnJvcjQwM1BhZ2UgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRXJyb3JzLzQwMydcclxuaW1wb3J0IHsgU2Nyb2xsVG9Ub3BCdXR0b24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9VdGlscydcclxuaW1wb3J0IHsgY2hlY2tQZXJtaXNzaW9uLCBkZWNUb0NydWQgfSBmcm9tICd0aGVtZXMvdXRpbHMvUGVybWlzc2lvbidcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoQXBwQ29udGV4dCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIGN0eCB9ID0gQXBwQ29udGV4dFxyXG5cclxuICAgIC8vY2hlY2sgcGVybWlzc2lvblxyXG4gICAgY29uc3QgcGFnZVBlcm1pc3Npb25zID0gQ29tcG9uZW50LnBlcm1pc3Npb25zXHJcbiAgICBjb25zdCBjb29raWVzID0gbmV4dENvb2tpZShjdHgpXHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbnMgPSBfLmdldChjb29raWVzLCBcInVzZXIucGVybWlzc2lvbnNcIiwge30pXHJcbiAgICBsZXQgcmVzdWx0UGVybWlzc2lvbiA9IHt9XHJcbiAgICBsZXQgbmV3Q29tcG9uZW50ID0gQ29tcG9uZW50XHJcblxyXG5cclxuICAgIGlmIChwYWdlUGVybWlzc2lvbnMpIHtcclxuICAgICAgcmVzdWx0UGVybWlzc2lvbiA9IGNoZWNrUGVybWlzc2lvbihwYWdlUGVybWlzc2lvbnMsIHVzZXJQZXJtaXNzaW9ucywgdHJ1ZSk7XHJcbiAgICAgIGlmIChyZXN1bHRQZXJtaXNzaW9uICE9IHRydWUpIG5ld0NvbXBvbmVudCA9IEVycm9yNDAzUGFnZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyh7XHJcbiAgICAgIC4uLkFwcENvbnRleHQsXHJcbiAgICAgIENvbXBvbmVudDogbmV3Q29tcG9uZW50XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbiAgICBjdHguc3RvcmUuZGlzcGF0Y2goc2V0U3RvcmUoXCJhdXRoXCIsIGNvb2tpZXMudXNlcikpO1xyXG4gICAgY3R4LnN0b3JlLmRpc3BhdGNoKHNldFN0b3JlKFwiY29va2llc1wiLCBjb29raWVzKSk7XHJcbiAgICBjdHguc3RvcmUuZGlzcGF0Y2goc2V0U3RvcmUoXCJwdWJsaWNSdW50aW1lQ29uZmlnXCIsIHB1YmxpY1J1bnRpbWVDb25maWcpKTtcclxuICAgIGxldCBuYW1lc3BhY2VzUmVxdWlyZWQgPSBhcHBQcm9wcy5uYW1lc3BhY2VzUmVxdWlyZWQgfHwgW11cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5yZXN1bHRQZXJtaXNzaW9uLFxyXG4gICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgYXV0aDogY29va2llcy51c2VyLFxyXG4gICAgICBjb29raWVzOiBjb29raWVzLFxyXG4gICAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsuLi5uYW1lc3BhY2VzUmVxdWlyZWQsICdjb21tb24nLCAncGFnZXMnLCAnbWVudSddLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlLCBlcnJvciwgcGVybWlzc2lvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICB7ZXJyb3IgP1xyXG4gICAgICAgICAgICA8RXJyb3I0MDNQYWdlIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9uc30gLz5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8U2Nyb2xsVG9Ub3BCdXR0b24gLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHApKSIsImltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgeyBSZXN1bHQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgRXJyb3IgPSAoeyBwZXJtaXNzaW9ucyB9IDogeyBwZXJtaXNzaW9ucz86IFtdIH0pID0+IHtcclxuICAgIGNvbnN0IHsgdCwgcm91dGVyIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBsZXQgc3ViVGl0bGUgPSBcIlwiXHJcbiAgICBpZiAocGVybWlzc2lvbnMpIHtcclxuICAgICAgICBzdWJUaXRsZSA9IHQoXCJwYWdlczplcnJvcnMuNDAzLmRldGFpbFwiKSArICdyb290LCAnXHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gaXRlcmF0b3JbJ3Blcm1pc3Npb24nXVxyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGl0ZXJhdG9yWydyZXF1aXJlUGVybWlzc2lvbiddXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQZXJtaXNzaW9uID0gaXRlcmF0b3JbJ3VzZXJQZXJtaXNzaW9uJ11cclxuICAgICAgICAgICAgc3ViVGl0bGUgPSBzdWJUaXRsZSArIHQoJ2NvbW1vbjpvcicpKyAnICcgKyB0KFwicGFnZXM6ZXJyb3JzLjQwMy5wZXJtaXNzaW9uRGV0YWlsXCIsIHtwZXJtaXNzaW9uLCByZXF1aXJlUGVybWlzc2lvbiwgdXNlclBlcm1pc3Npb259KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiA8UmVzdWx0XHJcbiAgICAgICAgc3RhdHVzPVwiNDAzXCJcclxuICAgICAgICB0aXRsZT17dChcInBhZ2VzOmVycm9ycy40MDMudGl0bGVcIil9XHJcbiAgICAgICAgc3ViVGl0bGU9ezxkaXYgc3R5bGU9e3sgd2lkdGg6JzgwJScsIG1hcmdpbjonYXV0bycgfX0+e3QoXCJwYWdlczplcnJvcnMuNDAzLmRlc2NyaXB0aW9uXCIpfTxiciAvPntzdWJUaXRsZX08L2Rpdj59XHJcbiAgICAgICAgZXh0cmE9ezxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT57dChcImJhY2tcIil9PC9CdXR0b24+fVxyXG4gICAgLz5cclxufVxyXG5cclxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnXVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yXHJcbiIsImltcG9ydCB7IE5Qcm9ncmVzcyB9IGZyb20gJ0B0YW5lbS9yZWFjdC1ucHJvZ3Jlc3MnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8qIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ2YW8uLi5cIilcclxuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxufTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ2YW8uLi4yXCIpXHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiB7XHJcbiAgTlByb2dyZXNzLmRvbmUoKTtcclxufTtcclxuICovXHJcbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW2lzUm91dGVDaGFuZ2luZywgc2V0SXNSb3V0ZUNoYW5naW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qgb25TdGFydCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1JvdXRlQ2hhbmdpbmcodHJ1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IG9uRW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzUm91dGVDaGFuZ2luZyhmYWxzZSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIG9uU3RhcnQpXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG9uRW5kKVxyXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBvbkVuZClcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIG9uU3RhcnQpXHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgb25FbmQpXHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgb25FbmQpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gPE5Qcm9ncmVzcyBpc0FuaW1hdGluZz17aXNSb3V0ZUNoYW5naW5nfSBrZXk9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgeyh7IGlzRmluaXNoZWQsIHByb2dyZXNzLCBhbmltYXRpb25EdXJhdGlvbiB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogaXNGaW5pc2hlZCA/IDAgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2FuaW1hdGlvbkR1cmF0aW9ufW1zIGxpbmVhcmAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyOWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGAkeygtMSArIHByb2dyZXNzKSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYG1hcmdpbi1sZWZ0ICR7YW5pbWF0aW9uRHVyYXRpb259bXMgbGluZWFyYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMDMxLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC9OUHJvZ3Jlc3M+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmciLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwic2V0U3RvcmVcIil7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9XHJcbiAgICBfLnNldChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucGF0aCwgYWN0aW9uLnBheWxvYWQudmFsdWUpXHJcbiAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qIGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN0b3JlOiBzdG9yZVJlZHVjZXJcclxufSkgKi9cclxuXHJcbmNvbnN0IHNldFN0b3JlID0gKHBhdGgsIHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdzZXRTdG9yZScsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcGF0aCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0U3RhdGUgPSB7fSwgb3B0aW9ucykgPT4ge1xyXG4gIGxldCBkZXZUb29sRXh0ZW5zaW9ucyA9ICghb3B0aW9ucy5pc1NlcnZlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpIDogdW5kZWZpbmVkXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRTdGF0ZSwgZGV2VG9vbEV4dGVuc2lvbnMpXHJcbn1cclxuZXhwb3J0IHtcclxuICBtYWtlU3RvcmUsXHJcbiAgc2V0U3RvcmVcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNjcm9sbFVwQnV0dG9uIGZyb20gXCJyZWFjdC1zY3JvbGwtdXAtYnV0dG9uXCI7IFxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNjcm9sbFVwQnV0dG9uLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY3JvbGxUb1RvcEJ1dHRvbiBmcm9tICcuL1Njcm9sbFRvVG9wQnV0dG9uJ1xyXG5leHBvcnQge1xyXG4gICAgU2Nyb2xsVG9Ub3BCdXR0b25cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0U3RvcmUgYXMgc2V0U3RvcmVBY3Rpb24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbnRlcmZhY2UgQmFzZUJvb2sge1xyXG4gICAgdXNlU2VsZWN0b3I6IEZ1bmN0aW9uLFxyXG4gICAgcm91dGVyOiBhbnksXHJcbiAgICB0OiBGdW5jdGlvbixcclxuICAgIHNldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIGdldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIHJlZGlyZWN0OiBGdW5jdGlvbixcclxuICAgIGdldERhdGE6IEZ1bmN0aW9uLFxyXG4gICAgbm90aWZ5OiBGdW5jdGlvbixcclxuICAgIGdldEF1dGg6IEZ1bmN0aW9uXHJcbiAgICBnZXRDb29raWVzOiBGdW5jdGlvbixcclxuICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWc6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgdXNlQmFzZUhvb2tzID0gICh7IGxhbmcgPSBbJ2NvbW1vbicsICdwYWdlcycsICdlcnJvcnMnXSx9IDogeyBsYW5nPzogc3RyaW5nW10sIH0gPSB7fSk6IEJhc2VCb29rID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBJMThuID0gdXNlVHJhbnNsYXRpb24obGFuZylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzZXRTdG9yZSA9IGFzeW5jIChwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRTdG9yZUFjdGlvbihwYXRoLCB2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RvcmUgPSAocGF0aDogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IF8uZ2V0KHN0YXRlLCBwYXRoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRSb3V0ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBhczogcm91dGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMsIHtcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJywgdHlwZTogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiA9IFwic3VjY2Vzc1wiKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNCAvL3NlY29uZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEF1dGggPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb29raWVzID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb29raWVzKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHVibGljUnVudGltZUNvbmZpZyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucHVibGljUnVudGltZUNvbmZpZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbGVjdG9yLFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICB0OiBJMThuLnQsXHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmUsXHJcbiAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgZ2V0RGF0YSxcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgZ2V0QXV0aCxcclxuICAgICAgICBnZXRDb29raWVzLFxyXG4gICAgICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWdcclxuICAgIH07XHJcbn1cclxuXHJcbnVzZUJhc2VIb29rcy5nZXREYXRhID0gIChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQmFzZUhvb2tzIiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiY29uc3QgVXJsUGF0dGVybiA9IHJlcXVpcmUoJ3VybC1wYXR0ZXJuJyk7XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4vX3JvdXRlcydcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBzdGF0aWMgbWFrZVVybChuYW1lLCBwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcm91dGVJbmZvID0gcm91dGVDb25maWdbbmFtZV1cclxuICAgICAgICBpZiAoIXJvdXRlSW5mbykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFVybFBhdHRlcm4ocm91dGVJbmZvLnVybCk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXNVcmwgPSBwYXR0ZXJuLnN0cmluZ2lmeShwYXJhbXMpIC8vbGluayBoaeG7g24gdGjhu4sgdHLDqm4gdHLDrG5oIGR1eeG7h3RcclxuICAgICAgICAgICAgbGV0IGhyZWYgPSBhc1VybCAvL2xpbmsgdGjhuq10IHRyb25nIC9wYWdlc1xyXG4gICAgICAgICAgICBpZiAocm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoMCwgNikgPT09IFwicGFnZXMvXCIpIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSByb3V0ZUluZm8uYWN0aW9uLnN1YnN0cig1KVxyXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignPycpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYD8ke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgJiR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhczogYXNVcmwsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFF1ZXJ5KHF1ZXJ5LCBzaGFsbG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFzUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgIGxldCBvbGRRdWVyeSA9IFJvdXRlci5yb3V0ZXIucXVlcnlcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLm9sZFF1ZXJ5LFxyXG4gICAgICAgICAgICAuLi5xdWVyeVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopID09IEpTT04uc3RyaW5naWZ5KG9sZFF1ZXJ5KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZ0FwcGVuZCA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeU9iailcclxuICAgICAgICAgICAgLyogaWYocXVlcnlTdHJpbmdBcHBlbmQpe1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgUm91dGVyLnJvdXRlci5xdWVyeSA9IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IChyb3V0ZU5hbWUsIHJvdXRlcywgcm91dGVQYXRocyA9IFtdKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpZGViYXJTZWxlY3RlZE5hbWUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXS5zaWRlYmFyIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCFyb3V0ZXMpIHJvdXRlcyA9IHNpZGViYXJcclxuICAgICAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJvdXRlLnJvdXRlTmFtZSA9PT0gc2lkZWJhclNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVQYXRocy5wdXNoKHJvdXRlKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZVBhdGhzXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldFNpZGViYXJTZWxlY3RlZHMoc2lkZWJhclNlbGVjdGVkTmFtZSwgcm91dGUuY2hpbGRyZW4sIFsuLi5yb3V0ZVBhdGhzLCByb3V0ZV0pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJyZWFkY3J1bWJzID0gKHJvdXRlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQocm91dGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnRoaXMuZ2V0QnJlYWRjcnVtYnMocm91dGUucGFyZW50KSwgLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3Qgcm91dGUgPSBSb3V0ZS5tYWtlVXJsXHJcbmNvbnN0IGFkZFF1ZXJ5ID0gUm91dGUuYWRkUXVlcnlcclxuY29uc3QgZ2V0QnJlYWRjcnVtYnMgPSBSb3V0ZS5nZXRCcmVhZGNydW1ic1xyXG5jb25zdCBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gUm91dGUuZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZTtcclxuZXhwb3J0IHtcclxuICAgIHJvdXRlLFxyXG4gICAgYWRkUXVlcnksXHJcbiAgICBnZXRCcmVhZGNydW1icyxcclxuICAgIGdldFNpZGViYXJTZWxlY3RlZHNcclxufSIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwiaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL19yb3V0ZXMuanNvbidcclxuXHJcbmNvbnN0IGNoYXJUb051bSA9IHsgQzogOCwgUjogNCwgVTogMiwgRDogMSB9XHJcbmNvbnN0IGNydWRUb0RlYyA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikucmVkdWNlKCh0b3RhbDogbnVtYmVyLCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCcpID0+IHRvdGFsICsgY2hhclRvTnVtW2NoYXJdLCAwKVxyXG5cclxufVxyXG5jb25zdCBkZWNUb0NydWQgPSAoZGVjOiBudW1iZXIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJ1xyXG4gICAgZm9yIChjaGFyIGluIGNoYXJUb051bSkge1xyXG4gICAgICAgIGlmICgoZGVjICYgY2hhclRvTnVtW2NoYXJdKSA9PSBjaGFyVG9OdW1bY2hhcl0pIHJlc3VsdCArPSBjaGFyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGhhc1Blcm1pc3Npb24gPSAocmVxdWlyZVBlcm1pc3Npb246IG51bWJlciwgdXNlclBlcm1pc3Npb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICh1c2VyUGVybWlzc2lvbiAmIHJlcXVpcmVQZXJtaXNzaW9uKSA9PT0gcmVxdWlyZVBlcm1pc3Npb25cclxuICB9XHJcblxyXG5jb25zdCBjaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSwgdXNlclBlcm1pc3Npb25zOiBhbnksIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZighcGVybWlzc2lvbnMpIHJldHVybiB0cnVlXHJcbiAgICBsZXQgcGVybWlzc2lvbkFycmF5ID0gW11cclxuICAgIGZvciAobGV0IHBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGNydWRUb0RlYyhwZXJtaXNzaW9uc1twZXJtaXNzaW9uXSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbXCJyb290XCJdIHx8IDBcclxuICAgICAgICBsZXQgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbcGVybWlzc2lvbl0gfHwgMFxyXG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb24gfCByb290UGVybWlzc2lvblxyXG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9uKHJlcXVpcmVQZXJtaXNzaW9uLCB1c2VyUGVybWlzc2lvbikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcGVybWlzc2lvbkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlUGVybWlzc2lvbjogZGVjVG9DcnVkKHJlcXVpcmVQZXJtaXNzaW9uKSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb246IGRlY1RvQ3J1ZCh1c2VyUGVybWlzc2lvbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKCFzaG93RXJyb3IpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25BcnJheVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNoZWNrUGVybWlzc2lvbixcclxuICAgIGhhc1Blcm1pc3Npb24sXHJcbiAgICBjcnVkVG9EZWMsXHJcbiAgICBkZWNUb0NydWRcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGFuZW0vcmVhY3QtbnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGwtdXAtYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1wYXR0ZXJuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=