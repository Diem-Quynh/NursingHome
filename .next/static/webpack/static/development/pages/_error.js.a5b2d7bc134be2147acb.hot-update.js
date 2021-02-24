webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDATN%5Cnursinghome%5Cpages%5C_error.jsx!./":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDATN%5Cnursinghome%5Cpages%5C_error.jsx ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.jsx */ "./pages/_error.jsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.jsx":
/*!**************************!*\
  !*** ./pages/_error.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/modules/I18n */ "./themes/modules/I18n.js");
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Error = function Error(_ref) {
  var statusCode = _ref.statusCode,
      t = _ref.t;

  if (statusCode == 404) {
    return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: " ",
      description: " "
    }, __jsx("div", null, __jsx("h1", {
      className: "title-green",
      style: {
        textAlign: "center",
        fontSize: "8vw"
      }
    }, "404"), __jsx("h2", {
      className: "title-green",
      style: {
        textAlign: "center"
      }
    }, "Link kh\xF4ng t\u1ED3n t\u1EA1i")));
  }

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: " ",
    description: " "
  }, __jsx("div", null, __jsx("h1", {
    className: "title-green",
    style: {
      textAlign: "center",
      fontSize: "8vw"
    }
  }, "ERROR"), __jsx("h2", {
    className: "title-green",
    style: {
      textAlign: "center"
    }
  }, "C\xF3 l\u1ED7i x\u1EA3y ra, xin vui l\xF2ng th\u1EED l\u1EA1i!")));
};

_c = Error;

Error.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var res, err, statusCode;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _ref2.res, err = _ref2.err;
            statusCode = null;

            if (res) {
              statusCode = res.statusCode;
            } else if (err) {
              statusCode = err.statusCode;
            }

            return _context.abrupt("return", {
              namespacesRequired: ['common', 'menu', 'pages'],
              statusCode: statusCode
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

Error.defaultProps = {
  statusCode: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('common')(Error));

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 6:
/*!*********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDATN%5Cnursinghome%5Cpages%5C_error.jsx ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDATN%5Cnursinghome%5Cpages%5C_error.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDATN%5Cnursinghome%5Cpages%5C_error.jsx!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLmpzeCJdLCJuYW1lcyI6WyJFcnJvciIsInN0YXR1c0NvZGUiLCJ0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsOENBQTBDO0FBQ2pFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBdUI7QUFBQSxNQUFwQkMsVUFBb0IsUUFBcEJBLFVBQW9CO0FBQUEsTUFBUkMsQ0FBUSxRQUFSQSxDQUFROztBQUNuQyxNQUFJRCxVQUFVLElBQUksR0FBbEIsRUFBdUI7QUFDckIsV0FDRSxNQUFDLDREQUFEO0FBQVEsV0FBSyxFQUFFLEdBQWY7QUFBbUIsaUJBQVcsRUFBQztBQUEvQixPQUNFLG1CQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBNEIsV0FBSyxFQUFFO0FBQUVFLGlCQUFTLEVBQUUsUUFBYjtBQUF1QkMsZ0JBQVEsRUFBRTtBQUFqQztBQUFuQyxhQURGLEVBRUU7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUE0QixXQUFLLEVBQUU7QUFBRUQsaUJBQVMsRUFBRTtBQUFiO0FBQW5DLHlDQUZGLENBREYsQ0FERjtBQVFEOztBQUVELFNBQU8sTUFBQyw0REFBRDtBQUFRLFNBQUssRUFBRSxHQUFmO0FBQW1CLGVBQVcsRUFBQztBQUEvQixLQUNMLG1CQUNFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBNEIsU0FBSyxFQUFFO0FBQUVBLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxjQUFRLEVBQUU7QUFBakM7QUFBbkMsYUFERixFQUVFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBNEIsU0FBSyxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiO0FBQW5DLHNFQUZGLENBREssQ0FBUDtBQU1ELENBbEJEOztLQUFNSCxLOztBQW9CTkEsS0FBSyxDQUFDSyxlQUFOO0FBQUEsK0xBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxlQUFULFNBQVNBLEdBQVQsRUFBY0MsR0FBZCxTQUFjQSxHQUFkO0FBQ2xCTixzQkFEa0IsR0FDTCxJQURLOztBQUV0QixnQkFBSUssR0FBSixFQUFTO0FBQ0pMLHdCQURJLEdBQ1dLLEdBRFgsQ0FDSkwsVUFESTtBQUVSLGFBRkQsTUFFTyxJQUFJTSxHQUFKLEVBQVM7QUFDWE4sd0JBRFcsR0FDSU0sR0FESixDQUNYTixVQURXO0FBRWY7O0FBTnFCLDZDQU9mO0FBQ0xPLGdDQUFrQixFQUFFLENBQUMsUUFBRCxFQUFVLE1BQVYsRUFBaUIsT0FBakIsQ0FEZjtBQUVMUCx3QkFBVSxFQUFWQTtBQUZLLGFBUGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUFELEtBQUssQ0FBQ1MsWUFBTixHQUFxQjtBQUNuQlIsWUFBVSxFQUFFO0FBRE8sQ0FBckI7QUFLZVMsMElBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJWLEtBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9lcnJvci5qcy5hNWIyZDdiYzEzNGJlMjE0N2FjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJFOlxcXFxEQVROXFxcXG51cnNpbmdob21lXFxcXHBhZ2VzXFxcXF9lcnJvci5qc3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAndGhlbWVzL21vZHVsZXMvSTE4bidcclxuaW1wb3J0IExheW91dCBmcm9tICd0aGVtZXMvbGF5b3V0cy9BZG1pbidcclxuXHJcbmNvbnN0IEVycm9yID0gKHsgc3RhdHVzQ29kZSwgdCB9KSA9PiB7XHJcbiAgaWYgKHN0YXR1c0NvZGUgPT0gNDA0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlID0nICcgZGVzY3JpcHRpb249JyAnPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUtZ3JlZW5cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjh2d1wiIH19PjQwNDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUtZ3JlZW5cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+TGluayBraMO0bmcgdOG7k24gdOG6oWk8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0IHRpdGxlID0nICcgZGVzY3JpcHRpb249JyAnPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlLWdyZWVuXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCI4dndcIiB9fT5FUlJPUjwvaDE+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1ncmVlblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Dw7MgbOG7l2kgeOG6o3kgcmEsIHhpbiB2dWkgbMOybmcgdGjhu60gbOG6oWkhPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG59XHJcblxyXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIGVyciB9KSA9PiB7XHJcbiAgbGV0IHN0YXR1c0NvZGUgPSBudWxsXHJcbiAgaWYgKHJlcykge1xyXG4gICAgKHsgc3RhdHVzQ29kZSB9ID0gcmVzKVxyXG4gIH0gZWxzZSBpZiAoZXJyKSB7XHJcbiAgICAoeyBzdGF0dXNDb2RlIH0gPSBlcnIpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywnbWVudScsJ3BhZ2VzJ10sXHJcbiAgICBzdGF0dXNDb2RlLFxyXG4gIH1cclxufVxyXG5cclxuRXJyb3IuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0YXR1c0NvZGU6IG51bGwsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKEVycm9yKSJdLCJzb3VyY2VSb290IjoiIn0=