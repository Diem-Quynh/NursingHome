module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/admin/login/index.tsx":
/*!*************************************!*\
  !*** ./pages/admin/login/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_layouts_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/layouts/Login */ "./themes/layouts/Login.jsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/UserService */ "./themes/services/api/UserService.ts");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
var _jsxFileName = "E:\\nursinghome_github\\pages\\admin\\login\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Login = () => {
  const {
    t,
    getAuth,
    getPublicRuntimeConfig,
    notify
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const publicRuntimeConfig = getPublicRuntimeConfig();
  const auth = getAuth();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();
  const userService = new themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__["default"]();

  const onFinish = async values => {
    setLoading(true);
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(userService.login({
      data: values
    }));
    setLoading(false);

    if (error) {
      return notify(t('message.loginFailed'), t(`errors:${error.code}`), 'error');
    }

    notify(t('message.loginSuccess'));
  };

  return __jsx(themes_layouts_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: publicRuntimeConfig.LOGO,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "sitename",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, t('admincp'))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onFinish: onFinish,
    form: form,
    name: "loginForm",
    layout: "horizontal",
    initialValues: {
      username: "",
      password: ""
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "username",
    rules: [{
      required: true,
      message: t('form.required')
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: t('username'),
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 52
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: t('form.required')
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
    placeholder: t('password'),
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 61
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "btnLogin",
    type: "primary",
    htmlType: "submit",
    loading: loading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, " ", t('login')))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./themes/_routes.json":
/*!*****************************!*\
  !*** ./themes/_routes.json ***!
  \*****************************/
/*! exports provided: __NOTE__, frontend.admin.login, api.login, api.users.updatePassword, api.users.userUpdatePassword, api.userPermissions.getByGroupId, api.userGroupPermissions.update, api.userGroups.index, api.userGroups.store, api.userGroups.detail, api.userGroups.update, api.userGroups.destroy, api.userGroups.delete, api.userPermissions.index, api.userPermissions.store, api.userPermissions.detail, api.userPermissions.update, api.userPermissions.destroy, api.userPermissions.delete, api.users.index, api.users.store, api.users.detail, api.users.update, api.users.destroy, api.users.delete, api.rooms.index, api.rooms.store, api.rooms.detail, api.rooms.update, api.rooms.destroy, api.rooms.delete, api.beds.index, api.beds.store, api.beds.detail, api.beds.update, api.beds.destroy, api.beds.delete, api.patients.index, api.patients.store, api.patients.detail, api.patients.update, api.patients.destroy, api.patients.delete, api.doctorAssignments.index, api.doctorAssignments.store, api.doctorAssignments.detail, api.doctorAssignments.update, api.doctorAssignments.destroy, api.doctorAssignments.delete, api.nurseAssignments.index, api.nurseAssignments.store, api.nurseAssignments.detail, api.nurseAssignments.update, api.nurseAssignments.destroy, api.nurseAssignments.delete, api.healthStatuses.index, api.healthStatuses.store, api.healthStatuses.detail, api.healthStatuses.update, api.healthStatuses.destroy, api.healthStatuses.delete, frontend.admin.home, frontend.admin.example.form, frontend.admin.dashboard.index, frontend.admin.users.index, frontend.admin.users.create, frontend.admin.users.edit, frontend.admin.userGroups.index, frontend.admin.userGroups.create, frontend.admin.userGroups.edit, frontend.admin.userGroups.role, frontend.admin.userPermissions.index, frontend.admin.userPermissions.create, frontend.admin.userPermissions.edit, frontend.admin.rooms.index, frontend.admin.rooms.create, frontend.admin.rooms.edit, frontend.admin.beds.index, frontend.admin.beds.create, frontend.admin.beds.edit, frontend.admin.patients.index, frontend.admin.patients.create, frontend.admin.patients.edit, frontend.admin.doctorAssignments.index, frontend.admin.doctorAssignments.create, frontend.admin.doctorAssignments.edit, frontend.admin.nurseAssignments.index, frontend.admin.nurseAssignments.create, frontend.admin.nurseAssignments.edit, frontend.admin.healthStatuses.index, frontend.admin.healthStatuses.create, frontend.admin.healthStatuses.edit, frontend.admin.statistics.healthStatus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"__NOTE__\":{\"note\":\"Do not edit this file. It is automatically generated by the system. To edit routes, please edit the file: routes/frontend.xxx.js\"},\"frontend.admin.login\":{\"url\":\"/admin/login\",\"action\":\"pages/admin/login\",\"method\":\"get\",\"middlewares\":[],\"name\":\"frontend.admin.login\",\"sidebar\":\"frontend.admin.login\"},\"api.login\":{\"url\":\"/api/v1/login\",\"action\":\"UserController.login\",\"method\":\"post\",\"middlewares\":[null],\"name\":\"api.login\",\"sidebar\":\"api.login\"},\"api.users.updatePassword\":{\"url\":\"/api/v1/users/:id/updatePassword\",\"action\":\"UserController.updatePassword\",\"method\":\"put\",\"middlewares\":[null,null,null],\"name\":\"api.users.updatePassword\",\"sidebar\":\"api.users.updatePassword\"},\"api.users.userUpdatePassword\":{\"url\":\"/api/v1/user/:id/userUpdatePassword\",\"action\":\"UserController.userUpdatePassword\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.userUpdatePassword\",\"sidebar\":\"api.users.userUpdatePassword\"},\"api.userPermissions.getByGroupId\":{\"url\":\"/api/v1/userPermissions/:groupId/getPermission\",\"action\":\"UserPermissionController.getByGroupId\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.getByGroupId\",\"sidebar\":\"api.userPermissions.getByGroupId\"},\"api.userGroupPermissions.update\":{\"url\":\"/api/v1/userGroupPermissions\",\"action\":\"UserGroupPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroupPermissions.update\",\"sidebar\":\"api.userGroupPermissions.update\"},\"api.userGroups.index\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.index\",\"sidebar\":\"api.userGroups.index\"},\"api.userGroups.store\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userGroups.store\",\"sidebar\":\"api.userGroups.store\"},\"api.userGroups.detail\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.detail\",\"sidebar\":\"api.userGroups.detail\"},\"api.userGroups.update\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroups.update\",\"sidebar\":\"api.userGroups.update\"},\"api.userGroups.destroy\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.destroy\",\"sidebar\":\"api.userGroups.destroy\"},\"api.userGroups.delete\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.delete\",\"sidebar\":\"api.userGroups.delete\"},\"api.userPermissions.index\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.index\",\"sidebar\":\"api.userPermissions.index\"},\"api.userPermissions.store\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.store\",\"sidebar\":\"api.userPermissions.store\"},\"api.userPermissions.detail\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.detail\",\"sidebar\":\"api.userPermissions.detail\"},\"api.userPermissions.update\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.update\",\"sidebar\":\"api.userPermissions.update\"},\"api.userPermissions.destroy\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.destroy\",\"sidebar\":\"api.userPermissions.destroy\"},\"api.userPermissions.delete\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.delete\",\"sidebar\":\"api.userPermissions.delete\"},\"api.users.index\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.index\",\"sidebar\":\"api.users.index\"},\"api.users.store\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.users.store\",\"sidebar\":\"api.users.store\"},\"api.users.detail\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.detail\",\"sidebar\":\"api.users.detail\"},\"api.users.update\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.update\",\"sidebar\":\"api.users.update\"},\"api.users.destroy\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.destroy\",\"sidebar\":\"api.users.destroy\"},\"api.users.delete\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.delete\",\"sidebar\":\"api.users.delete\"},\"api.rooms.index\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.index\",\"sidebar\":\"api.rooms.index\"},\"api.rooms.store\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.rooms.store\",\"sidebar\":\"api.rooms.store\"},\"api.rooms.detail\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.detail\",\"sidebar\":\"api.rooms.detail\"},\"api.rooms.update\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.rooms.update\",\"sidebar\":\"api.rooms.update\"},\"api.rooms.destroy\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.destroy\",\"sidebar\":\"api.rooms.destroy\"},\"api.rooms.delete\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.delete\",\"sidebar\":\"api.rooms.delete\"},\"api.beds.index\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.index\",\"sidebar\":\"api.beds.index\"},\"api.beds.store\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.beds.store\",\"sidebar\":\"api.beds.store\"},\"api.beds.detail\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.detail\",\"sidebar\":\"api.beds.detail\"},\"api.beds.update\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.beds.update\",\"sidebar\":\"api.beds.update\"},\"api.beds.destroy\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.destroy\",\"sidebar\":\"api.beds.destroy\"},\"api.beds.delete\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.delete\",\"sidebar\":\"api.beds.delete\"},\"api.patients.index\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.index\",\"sidebar\":\"api.patients.index\"},\"api.patients.store\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.patients.store\",\"sidebar\":\"api.patients.store\"},\"api.patients.detail\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.detail\",\"sidebar\":\"api.patients.detail\"},\"api.patients.update\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.patients.update\",\"sidebar\":\"api.patients.update\"},\"api.patients.destroy\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.destroy\",\"sidebar\":\"api.patients.destroy\"},\"api.patients.delete\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.delete\",\"sidebar\":\"api.patients.delete\"},\"api.doctorAssignments.index\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.index\",\"sidebar\":\"api.doctorAssignments.index\"},\"api.doctorAssignments.store\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.store\",\"sidebar\":\"api.doctorAssignments.store\"},\"api.doctorAssignments.detail\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.detail\",\"sidebar\":\"api.doctorAssignments.detail\"},\"api.doctorAssignments.update\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.update\",\"sidebar\":\"api.doctorAssignments.update\"},\"api.doctorAssignments.destroy\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.destroy\",\"sidebar\":\"api.doctorAssignments.destroy\"},\"api.doctorAssignments.delete\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.delete\",\"sidebar\":\"api.doctorAssignments.delete\"},\"api.nurseAssignments.index\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.index\",\"sidebar\":\"api.nurseAssignments.index\"},\"api.nurseAssignments.store\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.store\",\"sidebar\":\"api.nurseAssignments.store\"},\"api.nurseAssignments.detail\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.detail\",\"sidebar\":\"api.nurseAssignments.detail\"},\"api.nurseAssignments.update\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.update\",\"sidebar\":\"api.nurseAssignments.update\"},\"api.nurseAssignments.destroy\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.destroy\",\"sidebar\":\"api.nurseAssignments.destroy\"},\"api.nurseAssignments.delete\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.delete\",\"sidebar\":\"api.nurseAssignments.delete\"},\"api.healthStatuses.index\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.index\",\"sidebar\":\"api.healthStatuses.index\"},\"api.healthStatuses.store\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.store\",\"sidebar\":\"api.healthStatuses.store\"},\"api.healthStatuses.detail\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.detail\",\"sidebar\":\"api.healthStatuses.detail\"},\"api.healthStatuses.update\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.update\",\"sidebar\":\"api.healthStatuses.update\"},\"api.healthStatuses.destroy\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.destroy\",\"sidebar\":\"api.healthStatuses.destroy\"},\"api.healthStatuses.delete\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.delete\",\"sidebar\":\"api.healthStatuses.delete\"},\"frontend.admin.home\":{\"url\":\"/admin\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.home\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.example.form\":{\"url\":\"/admin/example/form\",\"action\":\"pages/example/form\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.example.form\",\"sidebar\":\"frontend.admin.example.form\"},\"frontend.admin.dashboard.index\":{\"url\":\"/admin/dashboard\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.dashboard.index\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.users.index\":{\"url\":\"/admin/users\",\"action\":\"pages/admin/users\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.index\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.create\":{\"url\":\"/admin/users/create\",\"parent\":\"frontend.admin.users.index\",\"action\":\"pages/admin/users/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.create\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.edit\":{\"url\":\"/admin/users/:id/edit\",\"action\":\"pages/admin/users/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.edit\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.userGroups.index\":{\"url\":\"/admin/userGroups\",\"action\":\"pages/admin/userGroups\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.index\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.create\":{\"url\":\"/admin/userGroups/create\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.create\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.edit\":{\"url\":\"/admin/userGroups/:id/edit\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.edit\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.role\":{\"url\":\"/admin/userGroups/:id/role\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/role\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.role\",\"sidebar\":\"frontend.admin.userGroups.role\"},\"frontend.admin.userPermissions.index\":{\"url\":\"/admin/userPermissions\",\"action\":\"pages/admin/userPermissions\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.index\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.create\":{\"url\":\"/admin/userPermissions/create\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.create\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.edit\":{\"url\":\"/admin/userPermissions/:id/edit\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.edit\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.rooms.index\":{\"url\":\"/admin/rooms\",\"action\":\"pages/admin/rooms\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.index\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.create\":{\"url\":\"/admin/rooms/create\",\"parent\":\"frontend.admin.rooms.index\",\"action\":\"pages/admin/rooms/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.create\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.edit\":{\"url\":\"/admin/rooms/:id/edit\",\"action\":\"pages/admin/rooms/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.edit\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.beds.index\":{\"url\":\"/admin/beds\",\"action\":\"pages/admin/beds\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.index\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.create\":{\"url\":\"/admin/beds/create\",\"parent\":\"frontend.admin.beds.index\",\"action\":\"pages/admin/beds/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.create\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.edit\":{\"url\":\"/admin/beds/:id/edit\",\"action\":\"pages/admin/beds/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.edit\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.patients.index\":{\"url\":\"/admin/patients\",\"action\":\"pages/admin/patients\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.index\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.create\":{\"url\":\"/admin/patients/create\",\"parent\":\"frontend.admin.patients.index\",\"action\":\"pages/admin/patients/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.create\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.edit\":{\"url\":\"/admin/patients/:id/edit\",\"action\":\"pages/admin/patients/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.edit\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.doctorAssignments.index\":{\"url\":\"/admin/doctorAssignments\",\"action\":\"pages/admin/doctorAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.index\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.create\":{\"url\":\"/admin/doctorAssignments/create\",\"parent\":\"frontend.admin.doctorAssignments.index\",\"action\":\"pages/admin/doctorAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.create\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.edit\":{\"url\":\"/admin/doctorAssignments/:id/edit\",\"action\":\"pages/admin/doctorAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.edit\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.nurseAssignments.index\":{\"url\":\"/admin/nurseAssignments\",\"action\":\"pages/admin/nurseAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.index\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.create\":{\"url\":\"/admin/nurseAssignments/create\",\"parent\":\"frontend.admin.nurseAssignments.index\",\"action\":\"pages/admin/nurseAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.create\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.edit\":{\"url\":\"/admin/nurseAssignments/:id/edit\",\"action\":\"pages/admin/nurseAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.edit\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.healthStatuses.index\":{\"url\":\"/admin/healthStatuses\",\"action\":\"pages/admin/healthStatuses\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.index\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.create\":{\"url\":\"/admin/healthStatuses/create\",\"parent\":\"frontend.admin.healthStatuses.index\",\"action\":\"pages/admin/healthStatuses/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.create\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.edit\":{\"url\":\"/admin/healthStatuses/:id/edit\",\"action\":\"pages/admin/healthStatuses/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.edit\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.statistics.healthStatus\":{\"url\":\"/admin/statistics/healthStatus\",\"action\":\"pages/admin/statistics/healthStatus\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.statistics.healthStatus\",\"sidebar\":\"frontend.admin.statistics.index\"}}");

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

/***/ "./themes/layouts/Login.jsx":
/*!**********************************!*\
  !*** ./themes/layouts/Login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\Login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Header,
  Footer,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, this.props.title || "")), __jsx("div", {
      id: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx(Content, {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, this.props.children)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./themes/modules/Cookies.js":
/*!***********************************!*\
  !*** ./themes/modules/Cookies.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (defaultCookie => {
  const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a(defaultCookie);
  return cookies;
});

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

/***/ "./themes/modules/Request.js":
/*!***********************************!*\
  !*** ./themes/modules/Request.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Request; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_modules_Cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/modules/Cookies */ "./themes/modules/Cookies.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RequestException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestException */ "./themes/modules/RequestException.js");
/* harmony import */ var _RequestException__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RequestException__WEBPACK_IMPORTED_MODULE_3__);




const getConfig = __webpack_require__(/*! next/config */ "next/config").default;

const {
  publicRuntimeConfig
} = getConfig();

class Request {
  constructor(cookiesString) {
    this.handleGlobalCallback = undefined;
    this.handleGlobalErrorCallback = undefined;
    this.cookies = cookiesString;
    const token = Object(themes_modules_Cookies__WEBPACK_IMPORTED_MODULE_1__["default"])(cookiesString).get('token');
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(this.handleGlobal.bind(this), this.handleGlobalError.bind(this));
  }

  handleGlobal(response) {
    if (this.handleGlobalCallback) {
      response = this.handleGlobalCallback(response);
    }

    return response;
  }

  handleGlobalError(error) {
    if (this.handleGlobalErrorCallback) {
      error = this.handleGlobalErrorCallback(error);
    }

    return error;
  }

  getAppUrl() {
    //return window.location.origin + "/"
    return publicRuntimeConfig.API_HOST;
  }

  beforeRequest({
    url,
    data
  }) {}

  afterRequest(result) {
    if (!result) throw new _RequestException__WEBPACK_IMPORTED_MODULE_3___default.a(-1, "Unable connect to server!");

    const code = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(result, "data.code", -1);

    const message = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(result, "data.message", "");

    const data = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(result, "data.data");

    if (code != 200) {
      throw new _RequestException__WEBPACK_IMPORTED_MODULE_3___default.a(code, message, data);
    }

    return data;
  }

  async get(url, data = {}) {
    this.beforeRequest({
      url,
      data
    });
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.getAppUrl() + url, {
      params: data
    });
    return this.afterRequest(result);
  }

  async post(url, data) {
    this.beforeRequest({
      url,
      data
    });
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.getAppUrl() + url, data);
    return this.afterRequest(result);
  }

  async put(url, data) {
    this.beforeRequest({
      url,
      data
    });
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(this.getAppUrl() + url, data);
    return this.afterRequest(result);
  }

  async delete(url, data) {
    this.beforeRequest({
      url,
      data
    });
    let result = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(this.getAppUrl() + url, {
      params: data
    });
    return this.afterRequest(result);
  }

}

/***/ }),

/***/ "./themes/modules/RequestException.js":
/*!********************************************!*\
  !*** ./themes/modules/RequestException.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class RequestException {
  constructor(code = "", message = "", data) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

}

module.exports = RequestException;

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

/***/ "./themes/services/api/BaseService.ts":
/*!********************************************!*\
  !*** ./themes/services/api/BaseService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_modules_Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/modules/Request */ "./themes/modules/Request.js");
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_modules_Cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/modules/Cookies */ "./themes/modules/Cookies.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class BaseApi {
  constructor(context) {
    _defineProperty(this, "cookies", void 0);

    _defineProperty(this, "Request", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "getData", (obj, path, defaultValue) => {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(obj, path, defaultValue);
    });

    _defineProperty(this, "globalHandleCallback", response => {
      return response;
    });

    _defineProperty(this, "globalHandleErrorCallback", error => {
      let status = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, "response.status", -1);

      if (status === -1) {//notify("Unable connect to server!", "error")
      } else if (status === 401) {
        this.cookies.remove("token");
        this.cookies.remove("user");

        if (window && window.location.pathname !== "/login") {
          //notify("Login session expired!", "error")
          this.redirect("frontend.admin.login");
        } else {//login screen. không làm gì cả.
        }
      }

      return error.response;
    });

    const cookiesObj = context ? next_cookies__WEBPACK_IMPORTED_MODULE_5___default()(context) : {};
    this.cookies = Object(themes_modules_Cookies__WEBPACK_IMPORTED_MODULE_4__["default"])(cookiesObj);
    this.Request = new themes_modules_Request__WEBPACK_IMPORTED_MODULE_1__["default"](cookiesObj);
    this.Request.handleGlobalCallback = this.globalHandleCallback;
    this.Request.handleGlobalErrorCallback = this.globalHandleErrorCallback;
    this.name = "";
  }

  route(routeName, query) {
    return Object(themes_route__WEBPACK_IMPORTED_MODULE_2__["default"])(routeName, query);
  }

  redirect(routeName, query) {
    let nextRoute = Object(themes_route__WEBPACK_IMPORTED_MODULE_2__["default"])(routeName, query);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(nextRoute.href, nextRoute.as);
  }

  async index(data) {
    const url = this.route(`api.${this.name}.index`, data).href;
    return await this.Request.get(url, data);
  }

  async create(data) {
    const url = this.route(`api.${this.name}.store`, data).href;
    return await this.Request.post(url, data);
  }

  async detail(data) {
    const url = this.route(`api.${this.name}.detail`, data).href;
    return await this.Request.get(url, data);
  }

  async edit(data) {
    const url = this.route(`api.${this.name}.update`, data).href;
    return await this.Request.put(url, data);
  }

  async delete(data) {
    const url = this.route(`api.${this.name}.delete`, data).href;
    return await this.Request.delete(url, data);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseApi);

/***/ }),

/***/ "./themes/services/api/UserService.ts":
/*!********************************************!*\
  !*** ./themes/services/api/UserService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class User extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'users'; //kế thừa CRUD từ thằng cha
  }

  async login({
    data
  }) {
    const url = this.route("api.login").href;
    let result = (await this.Request.post(url, data)) || {}; //success

    this.cookies.set('token', this.getData(result, "token", undefined), {
      path: "/"
    });
    this.cookies.set('user', this.getData(result, "user", {}), {
      path: "/"
    });
    this.redirect("frontend.admin.dashboard.index");
    return result;
  }

  async updatePassword(data) {
    const url = this.route(`api.${this.name}.updatePassword`, data).href;
    let result = await this.Request.put(url, data);
    return result.data;
  }

  async userUpdatePassword(data) {
    const url = this.route(`api.${this.name}.userUpdatePassword`, data).href;
    let result = await this.Request.put(url, data);
    return result.data;
  }

  async search(data) {
    const url = this.route(`api.${this.name}.search`, data).href;
    return await this.Request.get(url, data);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);

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
var _jsxFileName = "E:\\nursinghome_github\\themes\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const sidebar = [{
  routeName: "frontend.admin.dashboard.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HomeOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }),
  routeParams: {}
}, {
  routeName: "frontend.admin.users.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.rooms.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["InsertRowRightOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.beds.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LayoutOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.patients.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.assignment",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ScheduleOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.doctorAssignments.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SolutionOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }),
    routeParams: {}
  }, {
    routeName: "frontend.admin.nurseAssignments.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SolutionOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }),
    routeParams: {}
  }]
}, {
  routeName: "frontend.admin.healthStatuses.index",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CalendarOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }),
  routeParams: {} // type: "sub",

}, {
  routeName: "frontend.admin.adminsIndex",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["TeamOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.userGroups.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UsergroupAddOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }),
    routeParams: {}
  }, {
    routeName: "frontend.admin.userPermissions.index",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["VerifiedOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }),
    routeParams: {}
  }]
}, {
  routeName: "frontend.admin.statistic",
  icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CarryOutOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }),
  routeParams: {},
  type: "sub",
  children: [{
    routeName: "frontend.admin.statistics.healthStatus",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LineChartOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }),
    routeParams: {}
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (sidebar);

/***/ }),

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/admin/login/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\login\index.tsx */"./pages/admin/login/index.tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "await-to-js":
/*!******************************!*\
  !*** external "await-to-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("await-to-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vbG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvQ29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9JMThuLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CYXNlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3YWl0LXRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsiTG9naW4iLCJ0IiwiZ2V0QXV0aCIsImdldFB1YmxpY1J1bnRpbWVDb25maWciLCJub3RpZnkiLCJ1c2VCYXNlSG9va3MiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiYXV0aCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJmb3JtIiwiRm9ybSIsInVzZUZvcm0iLCJ1c2VyU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJlcnJvciIsInJlc3VsdCIsInRvIiwibG9naW4iLCJkYXRhIiwiY29kZSIsIkxPR08iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiY29sb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiXyIsInNldCIsInBheWxvYWQiLCJwYXRoIiwidmFsdWUiLCJzZXRTdG9yZSIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsIm9wdGlvbnMiLCJkZXZUb29sRXh0ZW5zaW9ucyIsImlzU2VydmVyIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInVuZGVmaW5lZCIsImNyZWF0ZVN0b3JlIiwibGFuZyIsInJvdXRlciIsInVzZVJvdXRlciIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRTdG9yZUFjdGlvbiIsImdldFN0b3JlIiwidXNlU2VsZWN0b3IiLCJnZXQiLCJyZWRpcmVjdCIsInJvdXRlTmFtZSIsInF1ZXJ5Iiwic2hhbGxvdyIsIm5leHRSb3V0ZSIsInJvdXRlIiwiZSIsImhyZWYiLCJhcyIsInB1c2giLCJnZXREYXRhIiwib2JqIiwiZGVmYXVsdFZhbHVlIiwiZGVzY3JpcHRpb24iLCJub3RpZmljYXRpb24iLCJkdXJhdGlvbiIsImdldENvb2tpZXMiLCJjb29raWVzIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2lkZXIiLCJDb250ZW50IiwiTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJkZWZhdWx0Q29va2llIiwiQ29va2llcyIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJnZXRDb25maWciLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiZGVmYXVsdE5TIiwiZGVmYXVsdExhbmd1YWdlIiwiTEFORyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsImJyb3dzZXJMYW5ndWFnZURldGVjdGlvbiIsInNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIlJlcXVlc3QiLCJjb25zdHJ1Y3RvciIsImNvb2tpZXNTdHJpbmciLCJoYW5kbGVHbG9iYWxDYWxsYmFjayIsImhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2siLCJ0b2tlbiIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVHbG9iYWwiLCJiaW5kIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJ1cmwiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicGFyYW1zIiwicG9zdCIsInB1dCIsImRlbGV0ZSIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwibWFrZVVybCIsIm5hbWUiLCJyb3V0ZUluZm8iLCJyb3V0ZUNvbmZpZyIsIkVycm9yIiwicGF0dGVybiIsInN0cmluZ2lmeSIsImFzVXJsIiwic3Vic3RyIiwiaW5kZXhPZiIsImFkZFF1ZXJ5IiwiYXNQYXRoIiwibG9jYXRpb24iLCJwYXRobmFtZSIsIm9sZFF1ZXJ5IiwiUm91dGVyIiwicXVlcnlPYmoiLCJKU09OIiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZXMiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInNpZGViYXIiLCJnZXRTaWRlYmFyU2VsZWN0ZWRzIiwibGVuZ3RoIiwidW5zaGlmdCIsInBhcmVudCIsImdldEJyZWFkY3J1bWJzIiwiQmFzZUFwaSIsImNvbnRleHQiLCJzdGF0dXMiLCJyZW1vdmUiLCJjb29raWVzT2JqIiwibmV4dENvb2tpZSIsImdsb2JhbEhhbmRsZUNhbGxiYWNrIiwiZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayIsImluZGV4IiwiY3JlYXRlIiwiZGV0YWlsIiwiZWRpdCIsIlVzZXIiLCJ1cGRhdGVQYXNzd29yZCIsInVzZXJVcGRhdGVQYXNzd29yZCIsInNlYXJjaCIsImljb24iLCJyb3V0ZVBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gs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Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ3RoZW1lcy9sYXlvdXRzL0xvZ2luJ1xyXG5pbXBvcnQgeyBMb2NrT3V0bGluZWQsIFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICd0aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCB1c2VCYXNlSG9va3MgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcyc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHQsIGdldEF1dGgsIGdldFB1YmxpY1J1bnRpbWVDb25maWcsIG5vdGlmeSB9ID0gdXNlQmFzZUhvb2tzKClcclxuICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpXHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKClcclxuICBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpXHJcbiAgY29uc3Qgb25GaW5pc2ggPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLmxvZ2luKHsgZGF0YTogdmFsdWVzIH0pKVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoJ21lc3NhZ2UubG9naW5GYWlsZWQnKSwgdChgZXJyb3JzOiR7ZXJyb3IuY29kZX1gKSwgJ2Vycm9yJylcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkodCgnbWVzc2FnZS5sb2dpblN1Y2Nlc3MnKSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGVuYW1lXCI+e3QoJ2FkbWluY3AnKX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPEZvcm1cclxuICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICBuYW1lPVwibG9naW5Gb3JtXCJcclxuICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXNlcm5hbWVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XX0gPlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj17dCgndXNlcm5hbWUnKX0gcHJlZml4PXs8VXNlck91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn0gLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhc3N3b3JkXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfV19PlxyXG4gICAgICAgIDxJbnB1dC5QYXNzd29yZCBwbGFjZWhvbGRlcj17dCgncGFzc3dvcmQnKX0gcHJlZml4PXs8TG9ja091dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn0gLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5Mb2dpblwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2FkaW5nfT4ge3QoJ2xvZ2luJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gIDwvTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICBpZihhY3Rpb24udHlwZSA9PT0gXCJzZXRTdG9yZVwiKXtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH1cclxuICAgIF8uc2V0KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5wYXRoLCBhY3Rpb24ucGF5bG9hZC52YWx1ZSlcclxuICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuLyogY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc3RvcmU6IHN0b3JlUmVkdWNlclxyXG59KSAqL1xyXG5cclxuY29uc3Qgc2V0U3RvcmUgPSAocGF0aCwgdmFsdWUpID0+ICh7XHJcbiAgdHlwZTogJ3NldFN0b3JlJyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBwYXRoLFxyXG4gICAgdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRTdGF0ZSA9IHt9LCBvcHRpb25zKSA9PiB7XHJcbiAgbGV0IGRldlRvb2xFeHRlbnNpb25zID0gKCFvcHRpb25zLmlzU2VydmVyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgOiB1bmRlZmluZWRcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdFN0YXRlLCBkZXZUb29sRXh0ZW5zaW9ucylcclxufVxyXG5leHBvcnQge1xyXG4gIG1ha2VTdG9yZSxcclxuICBzZXRTdG9yZVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3RoZW1lcy9tb2R1bGVzL0kxOG4nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRTdG9yZSBhcyBzZXRTdG9yZUFjdGlvbiB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1N0b3JlJ1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnXHJcbmludGVyZmFjZSBCYXNlQm9vayB7XHJcbiAgICB1c2VTZWxlY3RvcjogRnVuY3Rpb24sXHJcbiAgICByb3V0ZXI6IGFueSxcclxuICAgIHQ6IEZ1bmN0aW9uLFxyXG4gICAgc2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgcmVkaXJlY3Q6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0RGF0YTogRnVuY3Rpb24sXHJcbiAgICBub3RpZnk6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0QXV0aDogRnVuY3Rpb25cclxuICAgIGdldENvb2tpZXM6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0UHVibGljUnVudGltZUNvbmZpZzogRnVuY3Rpb25cclxufVxyXG5jb25zdCB1c2VCYXNlSG9va3MgPSAgKHsgbGFuZyA9IFsnY29tbW9uJywgJ3BhZ2VzJywgJ2Vycm9ycyddLH0gOiB7IGxhbmc/OiBzdHJpbmdbXSwgfSA9IHt9KTogQmFzZUJvb2sgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IEkxOG4gPSB1c2VUcmFuc2xhdGlvbihsYW5nKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHNldFN0b3JlID0gYXN5bmMgKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN0b3JlQWN0aW9uKHBhdGgsIHZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdG9yZSA9IChwYXRoOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gXy5nZXQoc3RhdGUsIHBhdGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeTogc3RyaW5nLCBzaGFsbG93OiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmV4dFJvdXRlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIGFzOiByb3V0ZU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcywge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnLCB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiID0gXCJzdWNjZXNzXCIpOiB2b2lkID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0IC8vc2Vjb25kXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYXV0aClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvb2tpZXMgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvb2tpZXMpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wdWJsaWNSdW50aW1lQ29uZmlnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlU2VsZWN0b3IsXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHQ6IEkxOG4udCxcclxuICAgICAgICBzZXRTdG9yZSxcclxuICAgICAgICBnZXRTdG9yZSxcclxuICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICBnZXREYXRhLFxyXG4gICAgICAgIG5vdGlmeSxcclxuICAgICAgICBnZXRBdXRoLFxyXG4gICAgICAgIGdldENvb2tpZXMsXHJcbiAgICAgICAgZ2V0UHVibGljUnVudGltZUNvbmZpZ1xyXG4gICAgfTtcclxufVxyXG5cclxudXNlQmFzZUhvb2tzLmdldERhdGEgPSAgKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VCYXNlSG9va3MiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBIZWFkZXIsIEZvb3RlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICg8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGUgfHwgXCJcIn08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XHJcbiAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRDb29raWUpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoZGVmYXVsdENvb2tpZSlcclxuICByZXR1cm4gY29va2llc1xyXG59IiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuaW1wb3J0IFJlcXVlc3RFeGNlcHRpb24gZnJvbSAnLi9SZXF1ZXN0RXhjZXB0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29va2llc1N0cmluZykge1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXNTdHJpbmdcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcyhjb29raWVzU3RyaW5nKS5nZXQoJ3Rva2VuJylcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVHbG9iYWwuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVHbG9iYWxFcnJvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbChyZXNwb25zZSkge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2spIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWxFcnJvcihlcnJvcikge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjaykge1xyXG4gICAgICBlcnJvciA9IHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwVXJsKCkge1xyXG4gICAgLy9yZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiXHJcbiAgICByZXR1cm4gcHVibGljUnVudGltZUNvbmZpZy5BUElfSE9TVFxyXG4gIH1cclxuICBiZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pIHtcclxuXHJcbiAgfVxyXG4gIGFmdGVyUmVxdWVzdChyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbigtMSwgXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIpXHJcbiAgICBjb25zdCBjb2RlID0gXy5nZXQocmVzdWx0LCBcImRhdGEuY29kZVwiLCAtMSlcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5tZXNzYWdlXCIsIFwiXCIpXHJcbiAgICBjb25zdCBkYXRhID0gXy5nZXQocmVzdWx0LCBcImRhdGEuZGF0YVwiKVxyXG4gICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UsIGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0KHVybCwgZGF0YSA9IHt9KSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZSh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG59IiwiY2xhc3MgUmVxdWVzdEV4Y2VwdGlvbntcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZT1cIlwiLCBtZXNzYWdlID0gXCJcIiwgZGF0YSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RFeGNlcHRpb247XHJcbiIsImNvbnN0IFVybFBhdHRlcm4gPSByZXF1aXJlKCd1cmwtcGF0dGVybicpO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL19yb3V0ZXMnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuY2xhc3MgUm91dGUge1xyXG4gICAgc3RhdGljIG1ha2VVcmwobmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlSW5mbyA9IHJvdXRlQ29uZmlnW25hbWVdXHJcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBVcmxQYXR0ZXJuKHJvdXRlSW5mby51cmwpO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFzVXJsID0gcGF0dGVybi5zdHJpbmdpZnkocGFyYW1zKSAvL2xpbmsgaGnhu4NuIHRo4buLIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIGxldCBocmVmID0gYXNVcmwgLy9saW5rIHRo4bqtdCB0cm9uZyAvcGFnZXNcclxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDAsIDYpID09PSBcInBhZ2VzL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gcm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoNSlcclxuICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGA/JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYCYke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXM6IGFzVXJsLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRRdWVyeShxdWVyeSwgc2hhbGxvdyA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICBsZXQgb2xkUXVlcnkgPSBSb3V0ZXIucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5vbGRRdWVyeSxcclxuICAgICAgICAgICAgLi4ucXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSA9PSBKU09OLnN0cmluZ2lmeShvbGRRdWVyeSkpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmdBcHBlbmQgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC8qIGlmKHF1ZXJ5U3RyaW5nQXBwZW5kKXtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFJvdXRlci5yb3V0ZXIucXVlcnkgPSBxdWVyeU9ialxyXG4gICAgICAgICAgICB9ICovXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpZGViYXJTZWxlY3RlZHMgPSAocm91dGVOYW1lLCByb3V0ZXMsIHJvdXRlUGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBzaWRlYmFyU2VsZWN0ZWROYW1lID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0uc2lkZWJhciA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBzaWRlYmFyXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5yb3V0ZU5hbWUgPT09IHNpZGViYXJTZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aHMucHVzaChyb3V0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVQYXRoc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXRTaWRlYmFyU2VsZWN0ZWRzKHNpZGViYXJTZWxlY3RlZE5hbWUsIHJvdXRlLmNoaWxkcmVuLCBbLi4ucm91dGVQYXRocywgcm91dGVdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCcmVhZGNydW1icyA9IChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KHJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFsuLi50aGlzLmdldEJyZWFkY3J1bWJzKHJvdXRlLnBhcmVudCksIC4uLnJlc3VsdF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJvdXRlID0gUm91dGUubWFrZVVybFxyXG5jb25zdCBhZGRRdWVyeSA9IFJvdXRlLmFkZFF1ZXJ5XHJcbmNvbnN0IGdldEJyZWFkY3J1bWJzID0gUm91dGUuZ2V0QnJlYWRjcnVtYnNcclxuY29uc3QgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IFJvdXRlLmdldFNpZGViYXJTZWxlY3RlZHNcclxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XHJcbmV4cG9ydCB7XHJcbiAgICByb3V0ZSxcclxuICAgIGFkZFF1ZXJ5LFxyXG4gICAgZ2V0QnJlYWRjcnVtYnMsXHJcbiAgICBnZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5jbGFzcyBCYXNlQXBpe1xyXG4gIGNvb2tpZXM6IENvb2tpZXNcclxuICBSZXF1ZXN0OiBSZXF1ZXN0XHJcbiAgbmFtZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWVzT2JqID0gY29udGV4dCA/IG5leHRDb29raWUoY29udGV4dCk6IHt9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzKGNvb2tpZXNPYmopO1xyXG4gICAgdGhpcy5SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29va2llc09iailcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlQ2FsbGJhY2tcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrXHJcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVDYWxsYmFjayA9IChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gXy5nZXQoZXJyb3IsIFwicmVzcG9uc2Uuc3RhdHVzXCIsIC0xKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gLTEpe1xyXG4gICAgICAvL25vdGlmeShcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIiwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInRva2VuXCIpXHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ1c2VyXCIpXHJcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAvL25vdGlmeShcIkxvZ2luIHNlc3Npb24gZXhwaXJlZCFcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy9sb2dpbiBzY3JlZW4uIGtow7RuZyBsw6BtIGfDrCBj4bqjLlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHJvdXRlKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICByZXR1cm4gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICBsZXQgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgIFJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBpbmRleChkYXRhPzogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uaW5kZXhgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc3RvcmVgLGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRhaWwoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGV0YWlsYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGVsZXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5kZWxldGUodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGkiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAndXNlcnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBsb2dpbih7IGRhdGEgfToge2RhdGE6IHt1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfX0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoXCJhcGkubG9naW5cIikuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSkgfHwge31cclxuICAgICAgLy9zdWNjZXNzXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidG9rZW5cIiwgdW5kZWZpbmVkKSwge1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3VzZXInLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInVzZXJcIiwge30pLHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHVzZXJVcGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXNlclVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyBzZWFyY2goZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc2VhcmNoYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd2FpdC10by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==