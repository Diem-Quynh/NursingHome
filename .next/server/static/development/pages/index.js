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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PostLink = props => __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/login"
}, __jsx("a", null, props.title)));

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("h1", null, "Dashboard"), __jsx("ul", null, __jsx(PostLink, {
  id: "hello-nextjs",
  title: "Hello Next.js"
}), __jsx(PostLink, {
  id: "learn-nextjs",
  title: "Learn Next.js is awesome"
}), __jsx(PostLink, {
  id: "deploy-nextjs",
  title: "Deploy apps with Zeit1"
}), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["DatePicker"], null))));

/***/ }),

/***/ "./themes/_routes.json":
/*!*****************************!*\
  !*** ./themes/_routes.json ***!
  \*****************************/
/*! exports provided: __NOTE__, frontend.admin.login, api.login, api.users.updatePassword, api.users.userUpdatePassword, api.userPermissions.getByGroupId, api.userGroupPermissions.update, api.userGroups.index, api.userGroups.store, api.userGroups.detail, api.userGroups.update, api.userGroups.destroy, api.userGroups.delete, api.userPermissions.index, api.userPermissions.store, api.userPermissions.detail, api.userPermissions.update, api.userPermissions.destroy, api.userPermissions.delete, api.users.index, api.users.store, api.users.detail, api.users.update, api.users.destroy, api.users.delete, api.rooms.index, api.rooms.store, api.rooms.detail, api.rooms.update, api.rooms.destroy, api.rooms.delete, api.beds.index, api.beds.store, api.beds.detail, api.beds.update, api.beds.destroy, api.beds.delete, api.patients.index, api.patients.store, api.patients.detail, api.patients.update, api.patients.destroy, api.patients.delete, api.doctorAssignments.index, api.doctorAssignments.store, api.doctorAssignments.detail, api.doctorAssignments.update, api.doctorAssignments.destroy, api.doctorAssignments.delete, api.nurseAssignments.index, api.nurseAssignments.store, api.nurseAssignments.detail, api.nurseAssignments.update, api.nurseAssignments.destroy, api.nurseAssignments.delete, api.healthStatuses.index, api.healthStatuses.store, api.healthStatuses.detail, api.healthStatuses.update, api.healthStatuses.destroy, api.healthStatuses.delete, frontend.admin.home, frontend.admin.example.form, frontend.admin.dashboard.index, frontend.admin.users.index, frontend.admin.users.create, frontend.admin.users.edit, frontend.admin.userGroups.index, frontend.admin.userGroups.create, frontend.admin.userGroups.edit, frontend.admin.userGroups.role, frontend.admin.userPermissions.index, frontend.admin.userPermissions.create, frontend.admin.userPermissions.edit, frontend.admin.rooms.index, frontend.admin.rooms.create, frontend.admin.rooms.edit, frontend.admin.beds.index, frontend.admin.beds.create, frontend.admin.beds.edit, frontend.admin.patients.index, frontend.admin.patients.create, frontend.admin.patients.edit, frontend.admin.doctorAssignments.index, frontend.admin.doctorAssignments.create, frontend.admin.doctorAssignments.edit, frontend.admin.nurseAssignments.index, frontend.admin.nurseAssignments.create, frontend.admin.nurseAssignments.edit, frontend.admin.healthStatuses.index, frontend.admin.healthStatuses.create, frontend.admin.healthStatuses.edit, frontend.admin.statistics.healthStatus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"__NOTE__\":{\"note\":\"Do not edit this file. It is automatically generated by the system. To edit routes, please edit the file: routes/frontend.xxx.js\"},\"frontend.admin.login\":{\"url\":\"/admin/login\",\"action\":\"pages/admin/login\",\"method\":\"get\",\"middlewares\":[],\"name\":\"frontend.admin.login\",\"sidebar\":\"frontend.admin.login\"},\"api.login\":{\"url\":\"/api/v1/login\",\"action\":\"UserController.login\",\"method\":\"post\",\"middlewares\":[null],\"name\":\"api.login\",\"sidebar\":\"api.login\"},\"api.users.updatePassword\":{\"url\":\"/api/v1/users/:id/updatePassword\",\"action\":\"UserController.updatePassword\",\"method\":\"put\",\"middlewares\":[null,null,null],\"name\":\"api.users.updatePassword\",\"sidebar\":\"api.users.updatePassword\"},\"api.users.userUpdatePassword\":{\"url\":\"/api/v1/user/:id/userUpdatePassword\",\"action\":\"UserController.userUpdatePassword\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.userUpdatePassword\",\"sidebar\":\"api.users.userUpdatePassword\"},\"api.userPermissions.getByGroupId\":{\"url\":\"/api/v1/userPermissions/:groupId/getPermission\",\"action\":\"UserPermissionController.getByGroupId\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.getByGroupId\",\"sidebar\":\"api.userPermissions.getByGroupId\"},\"api.userGroupPermissions.update\":{\"url\":\"/api/v1/userGroupPermissions\",\"action\":\"UserGroupPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroupPermissions.update\",\"sidebar\":\"api.userGroupPermissions.update\"},\"api.userGroups.index\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.index\",\"sidebar\":\"api.userGroups.index\"},\"api.userGroups.store\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userGroups.store\",\"sidebar\":\"api.userGroups.store\"},\"api.userGroups.detail\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userGroups.detail\",\"sidebar\":\"api.userGroups.detail\"},\"api.userGroups.update\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userGroups.update\",\"sidebar\":\"api.userGroups.update\"},\"api.userGroups.destroy\":{\"url\":\"/api/v1/userGroups/:id\",\"action\":\"UserGroupController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.destroy\",\"sidebar\":\"api.userGroups.destroy\"},\"api.userGroups.delete\":{\"url\":\"/api/v1/userGroups\",\"action\":\"UserGroupController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userGroups.delete\",\"sidebar\":\"api.userGroups.delete\"},\"api.userPermissions.index\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.index\",\"sidebar\":\"api.userPermissions.index\"},\"api.userPermissions.store\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.store\",\"sidebar\":\"api.userPermissions.store\"},\"api.userPermissions.detail\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.detail\",\"sidebar\":\"api.userPermissions.detail\"},\"api.userPermissions.update\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.update\",\"sidebar\":\"api.userPermissions.update\"},\"api.userPermissions.destroy\":{\"url\":\"/api/v1/userPermissions/:id\",\"action\":\"UserPermissionController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.destroy\",\"sidebar\":\"api.userPermissions.destroy\"},\"api.userPermissions.delete\":{\"url\":\"/api/v1/userPermissions\",\"action\":\"UserPermissionController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.userPermissions.delete\",\"sidebar\":\"api.userPermissions.delete\"},\"api.users.index\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.index\",\"sidebar\":\"api.users.index\"},\"api.users.store\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.users.store\",\"sidebar\":\"api.users.store\"},\"api.users.detail\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.users.detail\",\"sidebar\":\"api.users.detail\"},\"api.users.update\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.users.update\",\"sidebar\":\"api.users.update\"},\"api.users.destroy\":{\"url\":\"/api/v1/users/:id\",\"action\":\"UserController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.destroy\",\"sidebar\":\"api.users.destroy\"},\"api.users.delete\":{\"url\":\"/api/v1/users\",\"action\":\"UserController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.users.delete\",\"sidebar\":\"api.users.delete\"},\"api.rooms.index\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.index\",\"sidebar\":\"api.rooms.index\"},\"api.rooms.store\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.rooms.store\",\"sidebar\":\"api.rooms.store\"},\"api.rooms.detail\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.rooms.detail\",\"sidebar\":\"api.rooms.detail\"},\"api.rooms.update\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.rooms.update\",\"sidebar\":\"api.rooms.update\"},\"api.rooms.destroy\":{\"url\":\"/api/v1/rooms/:id\",\"action\":\"RoomController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.destroy\",\"sidebar\":\"api.rooms.destroy\"},\"api.rooms.delete\":{\"url\":\"/api/v1/rooms\",\"action\":\"RoomController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.rooms.delete\",\"sidebar\":\"api.rooms.delete\"},\"api.beds.index\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.index\",\"sidebar\":\"api.beds.index\"},\"api.beds.store\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.beds.store\",\"sidebar\":\"api.beds.store\"},\"api.beds.detail\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.beds.detail\",\"sidebar\":\"api.beds.detail\"},\"api.beds.update\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.beds.update\",\"sidebar\":\"api.beds.update\"},\"api.beds.destroy\":{\"url\":\"/api/v1/beds/:id\",\"action\":\"BedController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.destroy\",\"sidebar\":\"api.beds.destroy\"},\"api.beds.delete\":{\"url\":\"/api/v1/beds\",\"action\":\"BedController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.beds.delete\",\"sidebar\":\"api.beds.delete\"},\"api.patients.index\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.index\",\"sidebar\":\"api.patients.index\"},\"api.patients.store\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.patients.store\",\"sidebar\":\"api.patients.store\"},\"api.patients.detail\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.patients.detail\",\"sidebar\":\"api.patients.detail\"},\"api.patients.update\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.patients.update\",\"sidebar\":\"api.patients.update\"},\"api.patients.destroy\":{\"url\":\"/api/v1/patients/:id\",\"action\":\"PatientController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.destroy\",\"sidebar\":\"api.patients.destroy\"},\"api.patients.delete\":{\"url\":\"/api/v1/patients\",\"action\":\"PatientController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.patients.delete\",\"sidebar\":\"api.patients.delete\"},\"api.doctorAssignments.index\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.index\",\"sidebar\":\"api.doctorAssignments.index\"},\"api.doctorAssignments.store\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.store\",\"sidebar\":\"api.doctorAssignments.store\"},\"api.doctorAssignments.detail\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.detail\",\"sidebar\":\"api.doctorAssignments.detail\"},\"api.doctorAssignments.update\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.update\",\"sidebar\":\"api.doctorAssignments.update\"},\"api.doctorAssignments.destroy\":{\"url\":\"/api/v1/doctorAssignments/:id\",\"action\":\"DoctorAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.destroy\",\"sidebar\":\"api.doctorAssignments.destroy\"},\"api.doctorAssignments.delete\":{\"url\":\"/api/v1/doctorAssignments\",\"action\":\"DoctorAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.doctorAssignments.delete\",\"sidebar\":\"api.doctorAssignments.delete\"},\"api.nurseAssignments.index\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.index\",\"sidebar\":\"api.nurseAssignments.index\"},\"api.nurseAssignments.store\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.store\",\"sidebar\":\"api.nurseAssignments.store\"},\"api.nurseAssignments.detail\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.detail\",\"sidebar\":\"api.nurseAssignments.detail\"},\"api.nurseAssignments.update\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.update\",\"sidebar\":\"api.nurseAssignments.update\"},\"api.nurseAssignments.destroy\":{\"url\":\"/api/v1/nurseAssignments/:id\",\"action\":\"NurseAssignmentController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.destroy\",\"sidebar\":\"api.nurseAssignments.destroy\"},\"api.nurseAssignments.delete\":{\"url\":\"/api/v1/nurseAssignments\",\"action\":\"NurseAssignmentController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.nurseAssignments.delete\",\"sidebar\":\"api.nurseAssignments.delete\"},\"api.healthStatuses.index\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.index\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.index\",\"sidebar\":\"api.healthStatuses.index\"},\"api.healthStatuses.store\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.store\",\"method\":\"post\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.store\",\"sidebar\":\"api.healthStatuses.store\"},\"api.healthStatuses.detail\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.detail\",\"method\":\"get\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.detail\",\"sidebar\":\"api.healthStatuses.detail\"},\"api.healthStatuses.update\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.update\",\"method\":\"put\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.update\",\"sidebar\":\"api.healthStatuses.update\"},\"api.healthStatuses.destroy\":{\"url\":\"/api/v1/healthStatuses/:id\",\"action\":\"HealthStatusController.destroy\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.destroy\",\"sidebar\":\"api.healthStatuses.destroy\"},\"api.healthStatuses.delete\":{\"url\":\"/api/v1/healthStatuses\",\"action\":\"HealthStatusController.delete\",\"method\":\"delete\",\"middlewares\":[null,null],\"name\":\"api.healthStatuses.delete\",\"sidebar\":\"api.healthStatuses.delete\"},\"frontend.admin.home\":{\"url\":\"/admin\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.home\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.example.form\":{\"url\":\"/admin/example/form\",\"action\":\"pages/example/form\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.example.form\",\"sidebar\":\"frontend.admin.example.form\"},\"frontend.admin.dashboard.index\":{\"url\":\"/admin/dashboard\",\"action\":\"pages/admin/dashboard\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.dashboard.index\",\"sidebar\":\"frontend.admin.dashboard.index\"},\"frontend.admin.users.index\":{\"url\":\"/admin/users\",\"action\":\"pages/admin/users\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.index\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.create\":{\"url\":\"/admin/users/create\",\"parent\":\"frontend.admin.users.index\",\"action\":\"pages/admin/users/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.create\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.users.edit\":{\"url\":\"/admin/users/:id/edit\",\"action\":\"pages/admin/users/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.users.edit\",\"sidebar\":\"frontend.admin.users.index\"},\"frontend.admin.userGroups.index\":{\"url\":\"/admin/userGroups\",\"action\":\"pages/admin/userGroups\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.index\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.create\":{\"url\":\"/admin/userGroups/create\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.create\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.edit\":{\"url\":\"/admin/userGroups/:id/edit\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.edit\",\"sidebar\":\"frontend.admin.userGroups.index\"},\"frontend.admin.userGroups.role\":{\"url\":\"/admin/userGroups/:id/role\",\"parent\":\"frontend.admin.userGroups.index\",\"action\":\"pages/admin/userGroups/role\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userGroups.role\",\"sidebar\":\"frontend.admin.userGroups.role\"},\"frontend.admin.userPermissions.index\":{\"url\":\"/admin/userPermissions\",\"action\":\"pages/admin/userPermissions\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.index\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.create\":{\"url\":\"/admin/userPermissions/create\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.create\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.userPermissions.edit\":{\"url\":\"/admin/userPermissions/:id/edit\",\"parent\":\"frontend.admin.userPermissions.index\",\"action\":\"pages/admin/userPermissions/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.userPermissions.edit\",\"sidebar\":\"frontend.admin.userPermissions.index\"},\"frontend.admin.rooms.index\":{\"url\":\"/admin/rooms\",\"action\":\"pages/admin/rooms\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.index\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.create\":{\"url\":\"/admin/rooms/create\",\"parent\":\"frontend.admin.rooms.index\",\"action\":\"pages/admin/rooms/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.create\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.rooms.edit\":{\"url\":\"/admin/rooms/:id/edit\",\"action\":\"pages/admin/rooms/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.rooms.edit\",\"sidebar\":\"frontend.admin.rooms.index\"},\"frontend.admin.beds.index\":{\"url\":\"/admin/beds\",\"action\":\"pages/admin/beds\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.index\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.create\":{\"url\":\"/admin/beds/create\",\"parent\":\"frontend.admin.beds.index\",\"action\":\"pages/admin/beds/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.create\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.beds.edit\":{\"url\":\"/admin/beds/:id/edit\",\"action\":\"pages/admin/beds/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.beds.edit\",\"sidebar\":\"frontend.admin.beds.index\"},\"frontend.admin.patients.index\":{\"url\":\"/admin/patients\",\"action\":\"pages/admin/patients\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.index\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.create\":{\"url\":\"/admin/patients/create\",\"parent\":\"frontend.admin.patients.index\",\"action\":\"pages/admin/patients/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.create\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.patients.edit\":{\"url\":\"/admin/patients/:id/edit\",\"action\":\"pages/admin/patients/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.patients.edit\",\"sidebar\":\"frontend.admin.patients.index\"},\"frontend.admin.doctorAssignments.index\":{\"url\":\"/admin/doctorAssignments\",\"action\":\"pages/admin/doctorAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.index\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.create\":{\"url\":\"/admin/doctorAssignments/create\",\"parent\":\"frontend.admin.doctorAssignments.index\",\"action\":\"pages/admin/doctorAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.create\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.doctorAssignments.edit\":{\"url\":\"/admin/doctorAssignments/:id/edit\",\"action\":\"pages/admin/doctorAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.doctorAssignments.edit\",\"sidebar\":\"frontend.admin.doctorAssignments.index\"},\"frontend.admin.nurseAssignments.index\":{\"url\":\"/admin/nurseAssignments\",\"action\":\"pages/admin/nurseAssignments\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.index\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.create\":{\"url\":\"/admin/nurseAssignments/create\",\"parent\":\"frontend.admin.nurseAssignments.index\",\"action\":\"pages/admin/nurseAssignments/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.create\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.nurseAssignments.edit\":{\"url\":\"/admin/nurseAssignments/:id/edit\",\"action\":\"pages/admin/nurseAssignments/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.nurseAssignments.edit\",\"sidebar\":\"frontend.admin.nurseAssignments.index\"},\"frontend.admin.healthStatuses.index\":{\"url\":\"/admin/healthStatuses\",\"action\":\"pages/admin/healthStatuses\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.index\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.create\":{\"url\":\"/admin/healthStatuses/create\",\"parent\":\"frontend.admin.healthStatuses.index\",\"action\":\"pages/admin/healthStatuses/create\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.create\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.healthStatuses.edit\":{\"url\":\"/admin/healthStatuses/:id/edit\",\"action\":\"pages/admin/healthStatuses/edit\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.healthStatuses.edit\",\"sidebar\":\"frontend.admin.healthStatuses.index\"},\"frontend.admin.statistics.healthStatus\":{\"url\":\"/admin/statistics/healthStatus\",\"action\":\"pages/admin/statistics/healthStatus\",\"method\":\"get\",\"middlewares\":[null],\"name\":\"frontend.admin.statistics.healthStatus\",\"sidebar\":\"frontend.admin.statistics.index\"}}");

/***/ }),

/***/ "./themes/components/Breadcumb/index.tsx":
/*!***********************************************!*\
  !*** ./themes/components/Breadcumb/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_routes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/_routes.json */ "./themes/_routes.json");
var themes_routes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! themes/_routes.json */ "./themes/_routes.json", 1);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const breadCrumbComponent = () => {
  const {
    router,
    t,
    redirect
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__["default"])({
    lang: ['menu']
  });

  const getRouteName = () => {
    const routePath = router.pathname;
    const routeData = themes_routes_json__WEBPACK_IMPORTED_MODULE_4__;

    for (let routeName in routeData) {
      let routeElement = routeData[routeName];
      if (!routeElement.action) continue;
      if (routeElement.action.substr(5) === routePath) return routeName;
    }
  };

  let breadCumbs = [];
  const routeName = getRouteName();
  let routes = Object(themes_route__WEBPACK_IMPORTED_MODULE_2__["getBreadcrumbs"])(routeName);

  if (routes[0] && routes[0].name != "frontend.admin.home") {
    routes.unshift({
      name: 'frontend.admin.home'
    });
  }

  for (let route of routes) {
    try {
      let linkProps = Object(themes_route__WEBPACK_IMPORTED_MODULE_2__["route"])(route.name);
      breadCumbs.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
        key: route.name
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, linkProps, __jsx("a", null, route.name == "frontend.admin.home" ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HomeFilled"], null) : t(route.name)))));
    } catch (e) {
      breadCumbs.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
        key: route.name
      }, t(route.name)));
    }
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, breadCumbs);
};

/* harmony default export */ __webpack_exports__["default"] = (breadCrumbComponent);

/***/ }),

/***/ "./themes/components/Dialogs/ConfirmDialog.jsx":
/*!*****************************************************!*\
  !*** ./themes/components/Dialogs/ConfirmDialog.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  confirm
} = antd__WEBPACK_IMPORTED_MODULE_1__["Modal"];

class ConfirmDialog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "onCancel", () => {
      const {
        onCancel
      } = this.props;

      if (typeof onCancel === "function") {
        onCancel(this.state.data);
      }
    });

    _defineProperty(this, "onSubmit", async () => {
      const {
        onSubmit
      } = this.props;

      if (typeof onSubmit === "function") {
        await onSubmit(this.state.data);
      }
    });

    this.state = {};
  }

  show(data = null) {
    let {
      title,
      content
    } = this.props;
    title = title || "Title";
    content = content || "Content";
    this.setState({
      data: data
    });
    confirm({
      title: title,
      content: content,
      onOk: this.onSubmit,
      onCancel: this.onCancel
    });
  }

  render() {
    return __jsx("div", null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ConfirmDialog);

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

/***/ "./themes/hooks/PermissionHook.tsx":
/*!*****************************************!*\
  !*** ./themes/hooks/PermissionHook.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var _utils_Permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Permission */ "./themes/utils/Permission.ts");



const PermissionHook = () => {
  const {
    getAuth
  } = Object(_BaseHooks__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const auth = getAuth() || {};
  const userPermissions = auth.permissions || {};

  const getUserPermission = () => {
    return userPermissions;
  };

  const _checkPermission = permissions => {
    return Object(_utils_Permission__WEBPACK_IMPORTED_MODULE_1__["checkPermission"])(permissions, userPermissions);
  };

  return {
    getUserPermission,
    checkPermission: _checkPermission
  };
};

/* harmony default export */ __webpack_exports__["default"] = (PermissionHook);

/***/ }),

/***/ "./themes/layouts/Admin.tsx":
/*!**********************************!*\
  !*** ./themes/layouts/Admin.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/Sidebar */ "./themes/layouts/admin/Sidebar.tsx");
/* harmony import */ var _admin_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/Header */ "./themes/layouts/admin/Header.tsx");
/* harmony import */ var themes_components_Breadcumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/components/Breadcumb */ "./themes/components/Breadcumb/index.tsx");
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_routes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! themes/_routes.json */ "./themes/_routes.json");
var themes_routes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! themes/_routes.json */ "./themes/_routes.json", 1);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const THEME = "light";





const {
  Title,
  Text
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const Admin = props => {
  const {
    router,
    t
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    getPublicRuntimeConfig
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const publicRuntimeConfig = getPublicRuntimeConfig();

  const onCollapseChange = value => {
    console.log(value);
    setCollapsed(value);
  };

  const updateSize = () => {
    const mobile = window.innerWidth < 992;
    setIsMobile(mobile);
    setCollapsed(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getRouteName = () => {
    const routePath = router.pathname;
    const routeData = themes_routes_json__WEBPACK_IMPORTED_MODULE_6__;

    for (let routeName in routeData) {
      let routeElement = routeData[routeName];
      if (!routeElement.action) continue;
      if (routeElement.action.substr(5) === routePath) return routeName;
    }
  };

  const routeName = getRouteName() || ""; // console.log(routeName)

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, publicRuntimeConfig.SITE_NAME), __jsx("meta", {
    property: "og:title",
    content: publicRuntimeConfig.TITLE
  }), __jsx("meta", {
    property: "og:description",
    content: publicRuntimeConfig.DESCRIPTION
  }), __jsx("meta", {
    property: "og:image",
    content: publicRuntimeConfig.LOGO
  }), __jsx("link", {
    rel: "nursing-home-icon",
    href: publicRuntimeConfig.LOGO
  })), __jsx("div", {
    id: "admin"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    hasSider: true
  }, isMobile ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    maskClosable: true,
    closable: false,
    destroyOnClose: true,
    onClose: () => onCollapseChange(false),
    visible: collapsed,
    placement: "left",
    bodyStyle: {
      padding: 0,
      height: "100vh"
    }
  }, __jsx(_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "slider",
    collapsed: false,
    onCollapseChange: onCollapseChange,
    theme: THEME,
    isMobile: isMobile
  })) : __jsx(_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "slider",
    collapsed: collapsed,
    onCollapseChange: onCollapseChange,
    theme: THEME,
    isMobile: isMobile
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx("div", {
    id: "primaryLayout"
  }), __jsx(Content, {
    className: `main-layout ${collapsed ? "collapsed" : ""}`
  }, __jsx(_admin_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    collapsed: collapsed,
    onCollapseChange: onCollapseChange,
    disabledSearch: props.disabledSearch
  }), __jsx("div", {
    className: "breadcumbs"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    lg: 12,
    xl: 15
  }, __jsx(Title, {
    level: 4
  }, props.title || t(`pages:${routeName.replace("frontend.admin.", "")}.title`)), __jsx(Text, null, props.description || t(`pages:${routeName.replace("frontend.admin.", "")}.description`))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    lg: 12,
    xl: 9
  }, __jsx("div", {
    className: "breadcumb-right"
  }, __jsx(themes_components_Breadcumb__WEBPACK_IMPORTED_MODULE_4__["default"], null))))), props.children), __jsx(Footer, {
    className: "footer"
  }, "\xA9 ", moment__WEBPACK_IMPORTED_MODULE_8___default()().year(), " Hactech"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["BackTop"], {
    className: "backTop",
    target: () => document.querySelector("#primaryLayout")
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./themes/layouts/admin/Header.tsx":
/*!*****************************************!*\
  !*** ./themes/layouts/admin/Header.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/UserService */ "./themes/services/api/UserService.ts");
/* harmony import */ var themes_services_api_PatientService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/services/api/PatientService */ "./themes/services/api/PatientService.ts");
/* harmony import */ var themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! themes/services/api/BedService */ "./themes/services/api/BedService.ts");
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];

const AdminHeader = props => {
  const {
    t,
    notify,
    redirect,
    setStore,
    getAuth,
    getStore,
    getCookies,
    getData
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const userService = new themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const patientService = new themes_services_api_PatientService__WEBPACK_IMPORTED_MODULE_5__["default"]();
  const bedService = new themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_6__["default"]();
  const [patients, setPatients] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [beds, setBeds] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [users, setUsers] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // change password

  const auth = getAuth() || {};
  const cookieObject = getCookies();
  const confirmRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  const handleClickMenu = e => {};

  const redirectLogin = async () => {
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8___default.a(cookieObject);
    await cookies.remove('token', {
      path: '/'
    });
    await cookies.remove('user', {
      path: '/'
    });
    return await redirect('frontend.admin.login');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!cookieObject.token || !cookieObject.user) {
      redirect('frontend.admin.login');
    }
  }, []);
  let optionsPatients = [];
  let optionsBeds = [];
  let optionsUsers = [];

  const onChangeSearch = async value => {
    let filterPatients = {
      filters: [{
        field: "fullname",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    };
    let filterBeds = {
      filters: [{
        field: "roomCode",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    };
    let filterUsers = {
      filters: [{
        field: "fullname",
        operator: "contains",
        value: value
      }],
      sorting: [],
      pageSize: 5,
      page: 0
    };
    let [errUsers, users] = await await_to_js__WEBPACK_IMPORTED_MODULE_9___default()(userService.index(filterUsers));

    let dataUsers = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.get(users, "data", []);

    if (dataUsers.length) {
      setUsers(dataUsers);
    }

    let [errPatients, patients] = await await_to_js__WEBPACK_IMPORTED_MODULE_9___default()(patientService.index(filterPatients));

    let dataPatients = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.get(patients, "data", []);

    if (dataPatients.length) {
      setPatients(dataPatients);
    }

    let [errBeds, beds] = await await_to_js__WEBPACK_IMPORTED_MODULE_9___default()(bedService.index(filterBeds));

    let dataBeds = lodash__WEBPACK_IMPORTED_MODULE_10___default.a.get(beds, "data", []);

    if (dataBeds.length) {
      setBeds(dataBeds);
    }
  };

  const onBlurSearch = () => {
    setUsers([]);
    setBeds([]);
    setPatients([]);
  };

  const renderConfirmDialog = () => {
    return __jsx(themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: confirmRef,
      onSubmit: redirectLogin,
      title: t('signout'),
      content: t('message.signoutConfirm')
    });
  };

  const onChangePassword = async data => {
    console.log(data);
    setModalVisible(false);
    let values = {
      id: auth.id,
      oldPassword: data.oldPassword,
      password: data.password
    };
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_9___default()(userService.userUpdatePassword(values));

    if (error) {
      return notify(t(`errors:${error.code}`), t(error.message), 'error');
    }

    notify(t("message.recordUpdated"));
  }; //validate input password


  const validatorPassword = ({
    getFieldValue
  }) => ({
    validator: (rule, value) => {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(t('form.rePassword'));
    }
  });

  const renderChangePassModal = () => {
    const [formChangePassword] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      form: formChangePassword,
      name: "formChangePassword",
      initialValues: {
        oldPassword: "",
        password: "",
        repassword: ""
      },
      onFinish: onChangePassword
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      closable: false,
      visible: modalVisible,
      onCancel: () => setModalVisible(false),
      onOk: () => {
        formChangePassword.submit();
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: t("oldPassword"),
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 17
      },
      name: "oldPassword",
      rules: [{
        required: true,
        message: t('form.required')
      }]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("oldPassword"),
      type: "password",
      autoFocus: true
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: t("password"),
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 17
      },
      name: "password",
      rules: [{
        required: true,
        message: t('form.required')
      }]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("password"),
      type: "password"
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: t("rePassword"),
      labelCol: {
        span: 7
      },
      wrapperCol: {
        span: 17
      },
      name: "repassword",
      rules: [{
        required: true,
        message: t('form.required')
      }, validatorPassword]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("rePassword")
    }))));
  };

  const renderRightContent = () => {
    return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PoweroffOutlined"], null),
      type: "link",
      className: "header-btn",
      onClick: () => {
        if (confirmRef.current) confirmRef.current.show();
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingFilled"], {
        spin: true
      }),
      type: "link",
      className: "header-btn",
      onClick: () => {
        setModalVisible(true);
      }
    }));
  };

  const {
    collapsed,
    onCollapseChange
  } = props;
  const menuIconProps = {
    className: "trigger",
    onClick: () => onCollapseChange(!collapsed)
  };
  let headerClass = "header";
  if (collapsed) headerClass += ' collapsed';

  const accountPopup = () => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      style: {
        width: "400px"
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [8, 8]
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 12,
      md: 7,
      lg: 7
    }, __jsx("div", {
      className: "avatar"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null),
      src: "",
      size: 100,
      shape: "square"
    }, auth.fullname))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 12,
      md: 17,
      lg: 17
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("b", null, t('username')), ": ", __jsx("i", null, auth.username)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("b", null, t('fullname')), ": ", __jsx("i", null, auth.fullname)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("b", null, t('email')), ": ", __jsx("i", null, auth.email ? auth.email : t("update"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx("b", null, t('phone')), ": ", __jsx("i", null, auth.phone ? auth.phone : t("update")))))));
  };

  const renderTitle = title => {
    return __jsx("span", null, title);
  };

  const renderItem = (title, link) => {
    return {
      value: title,
      label: __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, title, __jsx("span", null, link))
    };
  };

  patients.map((item, index) => {
    optionsPatients.push(renderItem(`${item.fullname}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `patients/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, " Xem chi ti\u1EBFt ")));
  });
  beds.map((item, index) => {
    optionsBeds.push(renderItem(`${item.roomCode} - ${item.bedId}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `beds/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, " Xem chi ti\u1EBFt ")));
  });
  users.map((item, index) => {
    optionsUsers.push(renderItem(`${item.fullname} - ${item.username}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `users/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, " Xem chi ti\u1EBFt ")));
  });
  const options = [{
    label: renderTitle(t('patient')),
    options: optionsPatients
  }, {
    label: renderTitle(t('bed')),
    options: optionsBeds
  }, {
    label: renderTitle(t('employee')),
    options: optionsUsers
  }];

  const renderSearch = () => {
    return __jsx("div", {
      style: {
        height: "900px",
        display: 'inline'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
      dropdownClassName: "certain-category-search-dropdown",
      dropdownMatchSelectWidth: 350 // width dropdown
      ,
      onChange: value => onChangeSearch(value),
      onBlur: () => onBlurSearch(),
      style: {
        width: 350
      } // width input Search
      ,
      options: options,
      disabled: props.disabledSearch ? true : false // disable input search

    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      size: "large",
      placeholder: t("search")
    })));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, {
    className: headerClass
  }, collapsed ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutlined"], _extends({
    style: {
      color: "#fff"
    }
  }, menuIconProps)) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutlined"], _extends({
    style: {
      color: "#fff"
    }
  }, menuIconProps)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottom",
    title: t('personalInfo'),
    content: accountPopup()
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null),
    type: "link",
    className: "header-btn"
  })), renderSearch(), __jsx("div", {
    className: "rightContainer"
  }, renderRightContent())), renderConfirmDialog(), renderChangePassModal());
};

/* harmony default export */ __webpack_exports__["default"] = (AdminHeader);

/***/ }),

/***/ "./themes/layouts/admin/Menu.tsx":
/*!***************************************!*\
  !*** ./themes/layouts/admin/Menu.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/sidebar */ "./themes/sidebar.js");
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var themes_routes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/_routes.json */ "./themes/_routes.json");
var themes_routes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! themes/_routes.json */ "./themes/_routes.json", 1);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];






const MenuComponent = props => {
  const {
    router,
    t,
    redirect
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_5__["default"])({
    lang: ['menu']
  });
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_6__["default"])();

  const getRouteName = () => {
    const routePath = router.pathname;
    const routeData = themes_routes_json__WEBPACK_IMPORTED_MODULE_4__;

    for (let routeName in routeData) {
      let routeElement = routeData[routeName];
      if (!routeElement.action) continue;
      if (routeElement.action.substr(5) === routePath) return routeName;
    }
  };

  const generateMenus = data => {
    return data.map(item => {
      if (item.children) {
        if (item.type === "group") {
          let children = generateMenus(item.children);
          if (!children.length) return;
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].ItemGroup, {
            key: item.routeName,
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, item.icon ? item.icon : '', __jsx("span", null, t(item.routeName)))
          }, children);
        } else {
          return __jsx(SubMenu, {
            key: item.routeName,
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, item.icon ? item.icon : '', __jsx("span", null, t(item.routeName)))
          }, generateMenus(item.children));
        }
      }

      if (!checkPermission(item.permissions)) return;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: item.routeName,
        onClick: () => redirect(item.routeName)
      }, item.icon ? item.icon : '', __jsx("span", null, t(item.routeName)));
    }).filter(menu => menu);
  };

  const {
    theme,
    onCollapseChange,
    isMobile,
    tReady
  } = props,
        otherProps = _objectWithoutProperties(props, ["theme", "onCollapseChange", "isMobile", "tReady"]);

  const currentRouteName = getRouteName();
  const breadcums = Object(themes_route__WEBPACK_IMPORTED_MODULE_3__["getSidebarSelecteds"])(currentRouteName);
  let routerNames = breadcums.map(breadcum => breadcum.routeName);
  const selectedKeys = routerNames.pop();
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], _extends({
    mode: "inline",
    theme: theme,
    defaultOpenKeys: routerNames,
    selectedKeys: selectedKeys,
    onClick: isMobile ? () => {
      onCollapseChange(true);
    } : undefined
  }, otherProps), generateMenus(themes_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuComponent);

/***/ }),

/***/ "./themes/layouts/admin/Profile.tsx":
/*!******************************************!*\
  !*** ./themes/layouts/admin/Profile.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

const Profile = () => {
  const {
    getCookies,
    redirect,
    t,
    getData,
    getAuth,
    getPublicRuntimeConfig
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const auth = getAuth();
  const publicRuntimeConfig = getPublicRuntimeConfig();
  const profileInfo = {
    companyLogo: publicRuntimeConfig.LOGO,
    groupName: "Nhân viên",
    userFullname: "Diêm Thị Quỳnh",
    companyName: "Viện dưỡng lão Hướng Dương",
    companyAddress: "Số 39, ngõ 74, Đường Duy Tân, Quận Cầu Giấy, Hà Nội",
    today: {}
  };
  return __jsx("div", {
    className: "sidebar-profile"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24
  }, __jsx("div", {
    className: "profile-avatar"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 80,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], null),
    src: profileInfo.companyLogo,
    className: "avatar"
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24
  }, __jsx("div", {
    className: "profile-companyName"
  }, profileInfo.companyName), __jsx("div", {
    className: "profile-address"
  }, profileInfo.companyAddress))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 22,
    offset: 1
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: "profile-endLine"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./themes/layouts/admin/Sidebar.tsx":
/*!******************************************!*\
  !*** ./themes/layouts/admin/Sidebar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./themes/layouts/admin/Menu.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Profile */ "./themes/layouts/admin/Profile.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const THEME = 'light';
const {
  Header,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];


const sideBar = props => {
  const {
    collapsed,
    onCollapseChange,
    isMobile,
    theme
  } = props;
  return __jsx(Sider, {
    width: 256,
    collapsedWidth: 0,
    trigger: null,
    breakpoint: "lg",
    theme: THEME,
    collapsible: true,
    collapsed: collapsed //onBreakpoint={!isMobile && onCollapseChange}

  }, __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24
  }, __jsx(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: theme,
    onCollapseChange: onCollapseChange,
    isMobile: isMobile
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (sideBar);

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

/***/ "./themes/services/api/BedService.ts":
/*!*******************************************!*\
  !*** ./themes/services/api/BedService.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class Bed extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'beds';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bed);

/***/ }),

/***/ "./themes/services/api/PatientService.ts":
/*!***********************************************!*\
  !*** ./themes/services/api/PatientService.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class Patient extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'patients';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Patient);

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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DATN\nursinghome\pages\index.jsx */"./pages/index.jsx");


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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9TdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2hvb2tzL0Jhc2VIb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9BZG1pbi50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9Qcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9Db29raWVzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL0Jhc2VTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3V0aWxzL1Blcm1pc3Npb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdhaXQtdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJQb3N0TGluayIsInRpdGxlIiwiYnJlYWRDcnVtYkNvbXBvbmVudCIsInQiLCJyZWRpcmVjdCIsInVzZUJhc2VIb29rIiwibGFuZyIsImdldFJvdXRlTmFtZSIsInJvdXRlUGF0aCIsInJvdXRlRGF0YSIsIl9yb3V0ZXMiLCJyb3V0ZU5hbWUiLCJyb3V0ZUVsZW1lbnQiLCJhY3Rpb24iLCJzdWJzdHIiLCJicmVhZEN1bWJzIiwicm91dGVzIiwiZ2V0QnJlYWRjcnVtYnMiLCJ1bnNoaWZ0IiwibGlua1Byb3BzIiwibWFrZVVybCIsImNvbmZpcm0iLCJNb2RhbCIsIkNvbmZpcm1EaWFsb2ciLCJvbkNhbmNlbCIsInN0YXRlIiwib25TdWJtaXQiLCJzaG93IiwiY29udGVudCIsInNldFN0YXRlIiwib25PayIsInJlZHVjZXIiLCJ0eXBlIiwiXyIsInBheWxvYWQiLCJzZXRTdG9yZSIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsImRldlRvb2xFeHRlbnNpb25zIiwiaXNTZXJ2ZXIiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwiY3JlYXRlU3RvcmUiLCJ1c2VCYXNlSG9va3MiLCJ1c2VSb3V0ZXIiLCJJMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJnZXRTdG9yZSIsInVzZVNlbGVjdG9yIiwibmV4dFJvdXRlIiwiZ2V0RGF0YSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwibm90aWZpY2F0aW9uIiwiZHVyYXRpb24iLCJnZXRBdXRoIiwiYXV0aCIsImdldENvb2tpZXMiLCJjb29raWVzIiwiZ2V0UHVibGljUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJQZXJtaXNzaW9uSG9vayIsInVzZXJQZXJtaXNzaW9ucyIsInBlcm1pc3Npb25zIiwiZ2V0VXNlclBlcm1pc3Npb24iLCJfY2hlY2tQZXJtaXNzaW9uIiwiY2hlY2tQZXJtaXNzaW9uIiwiVEhFTUUiLCJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsIkFkbWluIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidXNlU3RhdGUiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwib25Db2xsYXBzZUNoYW5nZSIsImxvZyIsInVwZGF0ZVNpemUiLCJtb2JpbGUiLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTSVRFX05BTUUiLCJUSVRMRSIsIkRFU0NSSVBUSU9OIiwiTE9HTyIsInBhZGRpbmciLCJoZWlnaHQiLCJkaXNhYmxlZFNlYXJjaCIsIm1vbWVudCIsInllYXIiLCJxdWVyeVNlbGVjdG9yIiwiSGVhZGVyIiwiU3ViTWVudSIsIk1lbnUiLCJTZWFyY2giLCJJbnB1dCIsIkFkbWluSGVhZGVyIiwidXNlclNlcnZpY2UiLCJVc2VyU2VydmljZSIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJjb29raWVPYmplY3QiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwiaGFuZGxlQ2xpY2tNZW51IiwicmVkaXJlY3RMb2dpbiIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ0b2tlbiIsInVzZXIiLCJvcHRpb25zUGF0aWVudHMiLCJvcHRpb25zQmVkcyIsIm9wdGlvbnNVc2VycyIsIm9uQ2hhbmdlU2VhcmNoIiwiZmlsdGVyUGF0aWVudHMiLCJmaWx0ZXJzIiwib3BlcmF0b3IiLCJzb3J0aW5nIiwicGFnZVNpemUiLCJmaWx0ZXJCZWRzIiwiZmlsdGVyVXNlcnMiLCJlcnJVc2VycyIsInRvIiwiaW5kZXgiLCJkYXRhVXNlcnMiLCJsZW5ndGgiLCJlcnJQYXRpZW50cyIsImRhdGFQYXRpZW50cyIsImVyckJlZHMiLCJkYXRhQmVkcyIsIm9uQmx1clNlYXJjaCIsInJlbmRlckNvbmZpcm1EaWFsb2ciLCJvbkNoYW5nZVBhc3N3b3JkIiwidmFsdWVzIiwiaWQiLCJvbGRQYXNzd29yZCIsInBhc3N3b3JkIiwidXNlclVwZGF0ZVBhc3N3b3JkIiwiY29kZSIsInZhbGlkYXRvclBhc3N3b3JkIiwiZ2V0RmllbGRWYWx1ZSIsInZhbGlkYXRvciIsInJ1bGUiLCJyZW5kZXJDaGFuZ2VQYXNzTW9kYWwiLCJmb3JtQ2hhbmdlUGFzc3dvcmQiLCJGb3JtIiwidXNlRm9ybSIsInJlcGFzc3dvcmQiLCJzdWJtaXQiLCJzcGFuIiwicmVxdWlyZWQiLCJyZW5kZXJSaWdodENvbnRlbnQiLCJjdXJyZW50IiwibWVudUljb25Qcm9wcyIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzIiwiYWNjb3VudFBvcHVwIiwid2lkdGgiLCJmdWxsbmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInJlbmRlclRpdGxlIiwicmVuZGVySXRlbSIsImxpbmsiLCJsYWJlbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsIml0ZW0iLCJmbG9hdCIsInJvb21Db2RlIiwiYmVkSWQiLCJyZW5kZXJTZWFyY2giLCJjb2xvciIsIk1lbnVDb21wb25lbnQiLCJ1c2VQZXJtaXNzaW9uSG9vayIsImdlbmVyYXRlTWVudXMiLCJpY29uIiwiZmlsdGVyIiwibWVudSIsInRoZW1lIiwidFJlYWR5Iiwib3RoZXJQcm9wcyIsImN1cnJlbnRSb3V0ZU5hbWUiLCJicmVhZGN1bXMiLCJnZXRTaWRlYmFyU2VsZWN0ZWRzIiwicm91dGVyTmFtZXMiLCJicmVhZGN1bSIsInNlbGVjdGVkS2V5cyIsInBvcCIsInNpZGViYXIiLCJudW1Gb3JtYXR0ZXIiLCJudW0iLCJ0b0ZpeGVkIiwiUHJvZmlsZSIsInByb2ZpbGVJbmZvIiwiY29tcGFueUxvZ28iLCJncm91cE5hbWUiLCJ1c2VyRnVsbG5hbWUiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwidG9kYXkiLCJTaWRlciIsInNpZGVCYXIiLCJkZWZhdWx0Q29va2llIiwiTmV4dEkxOE5leHQiLCJkZWZhdWx0IiwiZ2V0Q29uZmlnIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsImRlZmF1bHROUyIsImRlZmF1bHRMYW5ndWFnZSIsIkxBTkciLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVBhdGgiLCJicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiY29va2llc1N0cmluZyIsImhhbmRsZUdsb2JhbENhbGxiYWNrIiwiaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVHbG9iYWwiLCJiaW5kIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicG9zdCIsInB1dCIsImRlbGV0ZSIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwicm91dGVDb25maWciLCJFcnJvciIsInBhdHRlcm4iLCJzdHJpbmdpZnkiLCJhc1VybCIsImluZGV4T2YiLCJhZGRRdWVyeSIsImxvY2F0aW9uIiwib2xkUXVlcnkiLCJxdWVyeU9iaiIsIkpTT04iLCJxdWVyeVN0cmluZ0FwcGVuZCIsInJvdXRlUGF0aHMiLCJzaWRlYmFyU2VsZWN0ZWROYW1lIiwicGFyZW50IiwiQmFzZUFwaSIsImNvbnRleHQiLCJzdGF0dXMiLCJjb29raWVzT2JqIiwibmV4dENvb2tpZSIsImdsb2JhbEhhbmRsZUNhbGxiYWNrIiwiZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayIsImNyZWF0ZSIsImRldGFpbCIsImVkaXQiLCJCZWQiLCJQYXRpZW50IiwiVXNlciIsImxvZ2luIiwidXBkYXRlUGFzc3dvcmQiLCJzZWFyY2giLCJyb3V0ZVBhcmFtcyIsImNoYXJUb051bSIsIkMiLCJSIiwiVSIsIkQiLCJjcnVkVG9EZWMiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJzcGxpdCIsInJlZHVjZSIsInRvdGFsIiwiY2hhciIsImRlY1RvQ3J1ZCIsImRlYyIsImhhc1Blcm1pc3Npb24iLCJyZXF1aXJlUGVybWlzc2lvbiIsInVzZXJQZXJtaXNzaW9uIiwic2hvd0Vycm9yIiwicGVybWlzc2lvbkFycmF5IiwicGVybWlzc2lvbiIsInJvb3RQZXJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7cm91dGV9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IExheW91dCBmcm9tICd0aGVtZXMvbGF5b3V0cy9BZG1pbidcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgUG9zdExpbmsgPSAocHJvcHMpID0+IChcclxuIDxsaT5cclxuICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbiAgIDwvTGluaz5cclxuIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGgxPkRhc2hib2FyZDwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cclxuICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIi8+XHJcbiAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdDFcIi8+XHJcbiAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICA8L3VsPlxyXG4gIDwvTGF5b3V0PlxyXG4pIiwiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgZ2V0QnJlYWRjcnVtYnMsIHJvdXRlIGFzIG1ha2VVcmwgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBicmVhZENydW1iQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICAgICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYnJlYWRDdW1icyA9IFtdXHJcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gICAgbGV0IHJvdXRlczogUm91dGVbXSA9IGdldEJyZWFkY3J1bWJzKHJvdXRlTmFtZSlcclxuICAgIGlmIChyb3V0ZXNbMF0gJiYgcm91dGVzWzBdLm5hbWUgIT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIpIHtcclxuICAgICAgICByb3V0ZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmcm9udGVuZC5hZG1pbi5ob21lJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IG1ha2VVcmwocm91dGUubmFtZSlcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnsgcm91dGUubmFtZSA9PSBcImZyb250ZW5kLmFkbWluLmhvbWVcIiA/IDxIb21lRmlsbGVkIC8+IDogdChyb3V0ZS5uYW1lKSB9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHt0KHJvdXRlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8QnJlYWRjcnVtYj57YnJlYWRDdW1ic308L0JyZWFkY3J1bWI+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicmVhZENydW1iQ29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzaG93KGRhdGEgPSBudWxsKSB7XHJcbiAgICBsZXQgeyB0aXRsZSwgY29udGVudCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGl0bGUgPSB0aXRsZSB8fCBcIlRpdGxlXCJcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiQ29udGVudFwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvbk9rOiB0aGlzLm9uU3VibWl0LFxyXG4gICAgICBvbkNhbmNlbDogdGhpcy5vbkNhbmNlbCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodHlwZW9mIG9uQ2FuY2VsID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgb25DYW5jZWwodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHR5cGVvZiBvblN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IG9uU3VibWl0KHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwic2V0U3RvcmVcIil7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9XHJcbiAgICBfLnNldChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucGF0aCwgYWN0aW9uLnBheWxvYWQudmFsdWUpXHJcbiAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qIGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN0b3JlOiBzdG9yZVJlZHVjZXJcclxufSkgKi9cclxuXHJcbmNvbnN0IHNldFN0b3JlID0gKHBhdGgsIHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdzZXRTdG9yZScsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcGF0aCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0U3RhdGUgPSB7fSwgb3B0aW9ucykgPT4ge1xyXG4gIGxldCBkZXZUb29sRXh0ZW5zaW9ucyA9ICghb3B0aW9ucy5pc1NlcnZlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpIDogdW5kZWZpbmVkXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRTdGF0ZSwgZGV2VG9vbEV4dGVuc2lvbnMpXHJcbn1cclxuZXhwb3J0IHtcclxuICBtYWtlU3RvcmUsXHJcbiAgc2V0U3RvcmVcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0U3RvcmUgYXMgc2V0U3RvcmVBY3Rpb24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbnRlcmZhY2UgQmFzZUJvb2sge1xyXG4gICAgdXNlU2VsZWN0b3I6IEZ1bmN0aW9uLFxyXG4gICAgcm91dGVyOiBhbnksXHJcbiAgICB0OiBGdW5jdGlvbixcclxuICAgIHNldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIGdldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIHJlZGlyZWN0OiBGdW5jdGlvbixcclxuICAgIGdldERhdGE6IEZ1bmN0aW9uLFxyXG4gICAgbm90aWZ5OiBGdW5jdGlvbixcclxuICAgIGdldEF1dGg6IEZ1bmN0aW9uXHJcbiAgICBnZXRDb29raWVzOiBGdW5jdGlvbixcclxuICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWc6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgdXNlQmFzZUhvb2tzID0gICh7IGxhbmcgPSBbJ2NvbW1vbicsICdwYWdlcycsICdlcnJvcnMnXSx9IDogeyBsYW5nPzogc3RyaW5nW10sIH0gPSB7fSk6IEJhc2VCb29rID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBJMThuID0gdXNlVHJhbnNsYXRpb24obGFuZylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzZXRTdG9yZSA9IGFzeW5jIChwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRTdG9yZUFjdGlvbihwYXRoLCB2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RvcmUgPSAocGF0aDogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IF8uZ2V0KHN0YXRlLCBwYXRoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRSb3V0ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBhczogcm91dGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMsIHtcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJywgdHlwZTogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiA9IFwic3VjY2Vzc1wiKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNCAvL3NlY29uZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEF1dGggPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb29raWVzID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb29raWVzKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHVibGljUnVudGltZUNvbmZpZyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucHVibGljUnVudGltZUNvbmZpZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbGVjdG9yLFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICB0OiBJMThuLnQsXHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmUsXHJcbiAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgZ2V0RGF0YSxcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgZ2V0QXV0aCxcclxuICAgICAgICBnZXRDb29raWVzLFxyXG4gICAgICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWdcclxuICAgIH07XHJcbn1cclxuXHJcbnVzZUJhc2VIb29rcy5nZXREYXRhID0gIChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQmFzZUhvb2tzIiwiaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJy4vQmFzZUhvb2tzJ1xyXG5pbXBvcnQge2NoZWNrUGVybWlzc2lvbn0gZnJvbSAnLi4vdXRpbHMvUGVybWlzc2lvbidcclxuXHJcbiAgXHJcbmNvbnN0IFBlcm1pc3Npb25Ib29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRBdXRoIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9XHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbnMgPSBhdXRoLnBlcm1pc3Npb25zIHx8IHt9XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlclBlcm1pc3Npb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJQZXJtaXNzaW9uc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb25zLCB1c2VyUGVybWlzc2lvbnMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXJQZXJtaXNzaW9uLFxyXG4gICAgICAgIGNoZWNrUGVybWlzc2lvbjogX2NoZWNrUGVybWlzc2lvblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJtaXNzaW9uSG9vayIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgRHJhd2VyLCBCYWNrVG9wLCBSb3csIENvbCwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9hZG1pbi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vYWRtaW4vSGVhZGVyXCI7XHJcbmNvbnN0IFRIRU1FID0gXCJsaWdodFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtYiBmcm9tIFwidGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHVzZUJhc2VIb29rcyBmcm9tIFwidGhlbWVzL2hvb2tzL0Jhc2VIb29rc1wiO1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tIFwidGhlbWVzL19yb3V0ZXMuanNvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFkbWluID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKCk7XHJcblxyXG4gIGNvbnN0IG9uQ29sbGFwc2VDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldENvbGxhcHNlZCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVTaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA5OTI7XHJcbiAgICBzZXRJc01vYmlsZShtb2JpbGUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgICB1cGRhdGVTaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXM7XHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXTtcclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKSB8fCBcIlwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJvdXRlTmFtZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntwdWJsaWNSdW50aW1lQ29uZmlnLlNJVEVfTkFNRX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5USVRMRX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuREVTQ1JJUFRJT059Lz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30gLz5cclxuICAgICAgPGxpbmsgcmVsPVwibnVyc2luZy1ob21lLWljb25cIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099PjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgaWQ9XCJhZG1pblwiPlxyXG4gICAgICA8TGF5b3V0IGhhc1NpZGVyPXt0cnVlfT5cclxuICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIG1hc2tDbG9zYWJsZVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc3Ryb3lPbkNsb3NlPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgdmlzaWJsZT17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgYm9keVN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgIGNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwcmltYXJ5TGF5b3V0XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXQgJHtjb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPEhlYWRlciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX0gZGlzYWJsZWRTZWFyY2g9e3Byb3BzLmRpc2FibGVkU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYnNcIj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS50aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LmRlc2NyaXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17OX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1iLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+wqkge21vbWVudCgpLnllYXIoKX0gSGFjdGVjaDwvRm9vdGVyPlxyXG4gICAgICAgICAgPEJhY2tUb3BcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJhY2tUb3BcIn1cclxuICAgICAgICAgICAgdGFyZ2V0PXsoKSA9PlxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpbWFyeUxheW91dFwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4pfTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgY3JlYXRlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQsIEF2YXRhciwgQnV0dG9uLCBJbnB1dCwgUG9wb3ZlciwgUm93LCBDb2wsIEF1dG9Db21wbGV0ZSwgRm9ybSwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgXHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLCBNZW51Rm9sZE91dGxpbmVkLCBQb3dlcm9mZk91dGxpbmVkLCBcclxuICBTZXR0aW5nRmlsbGVkLCBVc2VyT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyU2VydmljZVwiXHJcbmltcG9ydCBQYXRpZW50U2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2VcIlxyXG5pbXBvcnQgQmVkU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZVwiXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0XHJcblxyXG5jb25zdCBBZG1pbkhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUsIGdldENvb2tpZXMsIGdldERhdGEgIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKClcclxuICBjb25zdCBwYXRpZW50U2VydmljZSA9IG5ldyBQYXRpZW50U2VydmljZSgpXHJcbiAgY29uc3QgYmVkU2VydmljZSA9IG5ldyBCZWRTZXJ2aWNlKClcclxuICBjb25zdCBbcGF0aWVudHMsIHNldFBhdGllbnRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtiZWRzLCBzZXRCZWRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyBjaGFuZ2UgcGFzc3dvcmRcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9O1xyXG4gIGNvbnN0IGNvb2tpZU9iamVjdCA9IGdldENvb2tpZXMoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBjcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWVudSA9IChlOiBhbnkpID0+IHsgfVxyXG4gIGNvbnN0IHJlZGlyZWN0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoY29va2llT2JqZWN0KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3Rva2VuJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3VzZXInLCB7IHBhdGg6ICcvJ30pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY29va2llT2JqZWN0LnRva2VuIHx8ICFjb29raWVPYmplY3QudXNlcikge1xyXG4gICAgICByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGxldCBvcHRpb25zUGF0aWVudHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNCZWRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zVXNlcnM6IGFueSA9IFtdXHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSBhc3luYyAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgbGV0IGZpbHRlclBhdGllbnRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlckJlZHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwicm9vbUNvZGVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyVXNlcnMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgW2VyclVzZXJzLCB1c2Vyc106IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UuaW5kZXgoZmlsdGVyVXNlcnMpKVxyXG4gICAgbGV0IGRhdGFVc2VycyA9IF8uZ2V0KHVzZXJzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhVXNlcnMubGVuZ3RoKXtcclxuICAgICAgc2V0VXNlcnMoZGF0YVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyUGF0aWVudHMsIHBhdGllbnRzXTogYW55W10gPSBhd2FpdCB0byhwYXRpZW50U2VydmljZS5pbmRleChmaWx0ZXJQYXRpZW50cykpXHJcbiAgICBsZXQgZGF0YVBhdGllbnRzID0gXy5nZXQocGF0aWVudHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFQYXRpZW50cy5sZW5ndGgpe1xyXG4gICAgICBzZXRQYXRpZW50cyhkYXRhUGF0aWVudHMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJCZWRzLCBiZWRzXTogYW55W10gPSBhd2FpdCB0byhiZWRTZXJ2aWNlLmluZGV4KGZpbHRlckJlZHMpKVxyXG4gICAgbGV0IGRhdGFCZWRzID0gXy5nZXQoYmVkcywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YUJlZHMubGVuZ3RoKXtcclxuICAgICAgc2V0QmVkcyhkYXRhQmVkcylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBvbkJsdXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VycyhbXSlcclxuICAgIHNldEJlZHMoW10pXHJcbiAgICBzZXRQYXRpZW50cyhbXSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVyQ29uZmlybURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtyZWRpcmVjdExvZ2lufVxyXG4gICAgICAgIHRpdGxlPXt0KCdzaWdub3V0Jyl9XHJcbiAgICAgICAgY29udGVudD17dCgnbWVzc2FnZS5zaWdub3V0Q29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IGFzeW5jIChkYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICBsZXQgdmFsdWVzID0geyBpZDogYXV0aC5pZCwgb2xkUGFzc3dvcmQ6IGRhdGEub2xkUGFzc3dvcmQsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH1cclxuXHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLnVzZXJVcGRhdGVQYXNzd29yZCh2YWx1ZXMpKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoZXJyb3IubWVzc2FnZSksICdlcnJvcicpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KHQoXCJtZXNzYWdlLnJlY29yZFVwZGF0ZWRcIikpXHJcbiAgfVxyXG5cclxuICAvL3ZhbGlkYXRlIGlucHV0IHBhc3N3b3JkXHJcbiAgY29uc3QgdmFsaWRhdG9yUGFzc3dvcmQgPSAoeyBnZXRGaWVsZFZhbHVlIH06IHsgZ2V0RmllbGRWYWx1ZTogRnVuY3Rpb24gfSkgPT4gKHtcclxuICAgIHZhbGlkYXRvcjogKHJ1bGU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdmb3JtLnJlUGFzc3dvcmQnKSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2hhbmdlUGFzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1DaGFuZ2VQYXNzd29yZF0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gICAgcmV0dXJuICg8Rm9ybSBmb3JtPXtmb3JtQ2hhbmdlUGFzc3dvcmR9IG5hbWU9XCJmb3JtQ2hhbmdlUGFzc3dvcmRcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25Paz17KCkgPT4geyBmb3JtQ2hhbmdlUGFzc3dvcmQuc3VibWl0KCk7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJyZXBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JQYXNzd29yZFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvRm9ybT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclJpZ2h0Q29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIGljb249ezxQb3dlcm9mZk91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0+PC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFNldHRpbmdGaWxsZWQgc3BpbiAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9kYWxWaXNpYmxlKHRydWUpIH19ID48L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgbWVudUljb25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJ0cmlnZ2VyXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKCFjb2xsYXBzZWQpXHJcbiAgfVxyXG4gIGxldCBoZWFkZXJDbGFzcyA9IFwiaGVhZGVyXCJcclxuICBpZiAoY29sbGFwc2VkKSBoZWFkZXJDbGFzcyArPSAnIGNvbGxhcHNlZCdcclxuXHJcbiAgY29uc3QgYWNjb3VudFBvcHVwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MDBweFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbOCwgOF19PlxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs3fSBsZz17N30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBcclxuICAgICAgICAgICAgICAgIHNyYz17XCJcIn0gc2l6ZT17MTAwfSBzaGFwZT1cInNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgICAge2F1dGguZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgey8qIDxBdmF0YXIgc2l6ZT17NjR9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTd9IGxnPXsxN30+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3VzZXJuYW1lJyl9PC9iPjogPGk+e2F1dGgudXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGI+e3QoJ2Z1bGxuYW1lJyl9PC9iPjogPGk+e2F1dGguZnVsbG5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgnZW1haWwnKX08L2I+OiA8aT57YXV0aC5lbWFpbCA/IGF1dGguZW1haWwgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3Bob25lJyl9PC9iPjogPGk+e2F1dGgucGhvbmUgPyBhdXRoLnBob25lIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclRpdGxlID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgICB7LyogPGFcclxuICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1hbnRkXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBtb3JlXHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAodGl0bGU6IHN0cmluZywgbGluazogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGl0bGUsXHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2xpbmt9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHBhdGllbnRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zUGF0aWVudHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgcGF0aWVudHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgYmVkcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc0JlZHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLnJvb21Db2RlfSAtICR7aXRlbS5iZWRJZH1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YGJlZHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgdXNlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNVc2Vycy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9IC0gJHtpdGVtLnVzZXJuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgdXNlcnMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgncGF0aWVudCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1BhdGllbnRzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2JlZCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc0JlZHNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdlbXBsb3llZScpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1VzZXJzXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTAwcHhcIiwgZGlzcGxheTogJ2lubGluZScgfX0+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9XCJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93blwiXHJcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezM1MH0gLy8gd2lkdGggZHJvcGRvd25cclxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IGFueSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkJsdXJTZWFyY2goKX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzNTAgfX0gLy8gd2lkdGggaW5wdXQgU2VhcmNoXHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgZGlzYWJsZWQgPSB7cHJvcHMuZGlzYWJsZWRTZWFyY2g/IHRydWUgOiBmYWxzZSB9IC8vIGRpc2FibGUgaW5wdXQgc2VhcmNoXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlNlYXJjaCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj17dChcInNlYXJjaFwiKX0gLz5cclxuICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9PlxyXG4gICAgICB7Y29sbGFwc2VkIFxyXG4gICAgICA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPiBcclxuICAgICAgOiA8TWVudUZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+fVxyXG4gICAgICBcclxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3QoJ3BlcnNvbmFsSW5mbycpfSBjb250ZW50PXthY2NvdW50UG9wdXAoKX0+XHJcbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXNlck91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICBcclxuICAgICAgey8qIDxCdXR0b24gaWNvbj17PEJlbGxPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+ICovfVxyXG4gICAgICB7LyogPFNlYXJjaFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20uLi5cIlxyXG4gICAgICAgIG9uU2VhcmNoPXt2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaFwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICB7cmVuZGVyU2VhcmNoKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodENvbnRhaW5lcic+e3JlbmRlclJpZ2h0Q29udGVudCgpfTwvZGl2PlxyXG5cclxuICAgIDwvSGVhZGVyPlxyXG4gICAge3JlbmRlckNvbmZpcm1EaWFsb2coKX1cclxuICAgIHtyZW5kZXJDaGFuZ2VQYXNzTW9kYWwoKX1cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlciIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJ3RoZW1lcy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBnZXRTaWRlYmFyU2VsZWN0ZWRzIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVBlcm1pc3Npb25Ib29rIGZyb20gJ3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vaydcclxuXHJcbmNvbnN0IE1lbnVDb21wb25lbnQgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gIGNvbnN0IHtjaGVja1Blcm1pc3Npb259ID0gdXNlUGVybWlzc2lvbkhvb2soKVxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVNZW51cyA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJncm91cFwiKSB7XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pXHJcbiAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2dlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFjaGVja1Blcm1pc3Npb24oaXRlbS5wZXJtaXNzaW9ucykpIHJldHVyblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnJvdXRlTmFtZX0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoaXRlbS5yb3V0ZU5hbWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfSkuZmlsdGVyKChtZW51OmFueSkgPT4gbWVudSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRoZW1lLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdFJlYWR5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gIGNvbnN0IGJyZWFkY3VtcyA9IGdldFNpZGViYXJTZWxlY3RlZHMoY3VycmVudFJvdXRlTmFtZSlcclxuICBsZXQgcm91dGVyTmFtZXMgPSBicmVhZGN1bXMubWFwKChicmVhZGN1bTogYW55KSA9PiBicmVhZGN1bS5yb3V0ZU5hbWUpXHJcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyTmFtZXMucG9wKClcclxuICByZXR1cm4gPE1lbnVcclxuICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgZGVmYXVsdE9wZW5LZXlzPXtyb3V0ZXJOYW1lc31cclxuICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWRLZXlzfVxyXG4gICAgb25DbGljaz17XHJcbiAgICAgIGlzTW9iaWxlXHJcbiAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICB7Li4ub3RoZXJQcm9wc31cclxuICA+XHJcbiAgICB7Z2VuZXJhdGVNZW51cyhzaWRlYmFyKX1cclxuICA8L01lbnU+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5mdW5jdGlvbiBudW1Gb3JtYXR0ZXIobnVtOiBudW1iZXIpIHtcclxuICAgIGlmKG51bSA+IDk5OSAmJiBudW0gPCAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwKS50b0ZpeGVkKDEpICsgJ0snOyAvLyBjb252ZXJ0IHRvIEsgZm9yIG51bWJlciBmcm9tID4gMTAwMCA8IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA+IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDAwMDApLnRvRml4ZWQoMSkgKyAnTSc7IC8vIGNvbnZlcnQgdG8gTSBmb3IgbnVtYmVyIGZyb20gPiAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPCA5MDApe1xyXG4gICAgICAgIHJldHVybiBudW07IC8vIGlmIHZhbHVlIDwgMTAwMCwgbm90aGluZyB0byBkb1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldENvb2tpZXMsIHJlZGlyZWN0LCB0LCBnZXREYXRhLCBnZXRBdXRoLCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKVxyXG4gICAgY29uc3QgcHJvZmlsZUluZm8gPSB7XHJcbiAgICAgICAgY29tcGFueUxvZ286IHB1YmxpY1J1bnRpbWVDb25maWcuTE9HTyxcclxuICAgICAgICBncm91cE5hbWU6IFwiTmjDom4gdmnDqm5cIixcclxuICAgICAgICB1c2VyRnVsbG5hbWU6IFwiRGnDqm0gVGjhu4sgUXXhu7NuaFwiLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiBcIlZp4buHbiBkxrDhu6FuZyBsw6NvIEjGsOG7m25nIETGsMahbmdcIixcclxuICAgICAgICBjb21wYW55QWRkcmVzczogXCJT4buRIDM5LCBuZ8O1IDc0LCDEkMaw4budbmcgRHV5IFTDom4sIFF14bqtbiBD4bqndSBHaeG6pXksIEjDoCBO4buZaVwiLFxyXG4gICAgICAgIHRvZGF5OiB7fSxcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItcHJvZmlsZVwiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezgwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBzcmM9e3Byb2ZpbGVJbmZvLmNvbXBhbnlMb2dvfSBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb21wYW55TmFtZVwiPntwcm9maWxlSW5mby5jb21wYW55TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hZGRyZXNzXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlBZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiPntwcm9maWxlSW5mby51c2VyRnVsbG5hbWV9PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtZ3JvdXBOYW1lXCI+e3Byb2ZpbGVJbmZvLmdyb3VwTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwicHJvZmlsZS1lbmRMaW5lXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkLCBVc2VyT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucyc7XHJcbmNvbnN0IFRIRU1FID0gJ2xpZ2h0J1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0aGVtZSB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTZ9XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICAvL29uQnJlYWtwb2ludD17IWlzTW9iaWxlICYmIG9uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9IC8+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRDb29raWUpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoZGVmYXVsdENvb2tpZSlcclxuICByZXR1cm4gY29va2llc1xyXG59IiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuaW1wb3J0IFJlcXVlc3RFeGNlcHRpb24gZnJvbSAnLi9SZXF1ZXN0RXhjZXB0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29va2llc1N0cmluZykge1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXNTdHJpbmdcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcyhjb29raWVzU3RyaW5nKS5nZXQoJ3Rva2VuJylcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVHbG9iYWwuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVHbG9iYWxFcnJvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbChyZXNwb25zZSkge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2spIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWxFcnJvcihlcnJvcikge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjaykge1xyXG4gICAgICBlcnJvciA9IHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwVXJsKCkge1xyXG4gICAgLy9yZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiXHJcbiAgICByZXR1cm4gcHVibGljUnVudGltZUNvbmZpZy5BUElfSE9TVFxyXG4gIH1cclxuICBiZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pIHtcclxuXHJcbiAgfVxyXG4gIGFmdGVyUmVxdWVzdChyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbigtMSwgXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIpXHJcbiAgICBjb25zdCBjb2RlID0gXy5nZXQocmVzdWx0LCBcImRhdGEuY29kZVwiLCAtMSlcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5tZXNzYWdlXCIsIFwiXCIpXHJcbiAgICBjb25zdCBkYXRhID0gXy5nZXQocmVzdWx0LCBcImRhdGEuZGF0YVwiKVxyXG4gICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UsIGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0KHVybCwgZGF0YSA9IHt9KSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZSh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG59IiwiY2xhc3MgUmVxdWVzdEV4Y2VwdGlvbntcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZT1cIlwiLCBtZXNzYWdlID0gXCJcIiwgZGF0YSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RFeGNlcHRpb247XHJcbiIsImNvbnN0IFVybFBhdHRlcm4gPSByZXF1aXJlKCd1cmwtcGF0dGVybicpO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL19yb3V0ZXMnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuY2xhc3MgUm91dGUge1xyXG4gICAgc3RhdGljIG1ha2VVcmwobmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlSW5mbyA9IHJvdXRlQ29uZmlnW25hbWVdXHJcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBVcmxQYXR0ZXJuKHJvdXRlSW5mby51cmwpO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFzVXJsID0gcGF0dGVybi5zdHJpbmdpZnkocGFyYW1zKSAvL2xpbmsgaGnhu4NuIHRo4buLIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIGxldCBocmVmID0gYXNVcmwgLy9saW5rIHRo4bqtdCB0cm9uZyAvcGFnZXNcclxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDAsIDYpID09PSBcInBhZ2VzL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gcm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoNSlcclxuICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGA/JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYCYke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXM6IGFzVXJsLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRRdWVyeShxdWVyeSwgc2hhbGxvdyA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICBsZXQgb2xkUXVlcnkgPSBSb3V0ZXIucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5vbGRRdWVyeSxcclxuICAgICAgICAgICAgLi4ucXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSA9PSBKU09OLnN0cmluZ2lmeShvbGRRdWVyeSkpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmdBcHBlbmQgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC8qIGlmKHF1ZXJ5U3RyaW5nQXBwZW5kKXtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFJvdXRlci5yb3V0ZXIucXVlcnkgPSBxdWVyeU9ialxyXG4gICAgICAgICAgICB9ICovXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpZGViYXJTZWxlY3RlZHMgPSAocm91dGVOYW1lLCByb3V0ZXMsIHJvdXRlUGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBzaWRlYmFyU2VsZWN0ZWROYW1lID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0uc2lkZWJhciA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBzaWRlYmFyXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5yb3V0ZU5hbWUgPT09IHNpZGViYXJTZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aHMucHVzaChyb3V0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVQYXRoc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXRTaWRlYmFyU2VsZWN0ZWRzKHNpZGViYXJTZWxlY3RlZE5hbWUsIHJvdXRlLmNoaWxkcmVuLCBbLi4ucm91dGVQYXRocywgcm91dGVdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCcmVhZGNydW1icyA9IChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KHJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFsuLi50aGlzLmdldEJyZWFkY3J1bWJzKHJvdXRlLnBhcmVudCksIC4uLnJlc3VsdF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJvdXRlID0gUm91dGUubWFrZVVybFxyXG5jb25zdCBhZGRRdWVyeSA9IFJvdXRlLmFkZFF1ZXJ5XHJcbmNvbnN0IGdldEJyZWFkY3J1bWJzID0gUm91dGUuZ2V0QnJlYWRjcnVtYnNcclxuY29uc3QgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IFJvdXRlLmdldFNpZGViYXJTZWxlY3RlZHNcclxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XHJcbmV4cG9ydCB7XHJcbiAgICByb3V0ZSxcclxuICAgIGFkZFF1ZXJ5LFxyXG4gICAgZ2V0QnJlYWRjcnVtYnMsXHJcbiAgICBnZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5jbGFzcyBCYXNlQXBpe1xyXG4gIGNvb2tpZXM6IENvb2tpZXNcclxuICBSZXF1ZXN0OiBSZXF1ZXN0XHJcbiAgbmFtZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWVzT2JqID0gY29udGV4dCA/IG5leHRDb29raWUoY29udGV4dCk6IHt9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzKGNvb2tpZXNPYmopO1xyXG4gICAgdGhpcy5SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29va2llc09iailcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlQ2FsbGJhY2tcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrXHJcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVDYWxsYmFjayA9IChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gXy5nZXQoZXJyb3IsIFwicmVzcG9uc2Uuc3RhdHVzXCIsIC0xKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gLTEpe1xyXG4gICAgICAvL25vdGlmeShcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIiwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInRva2VuXCIpXHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ1c2VyXCIpXHJcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAvL25vdGlmeShcIkxvZ2luIHNlc3Npb24gZXhwaXJlZCFcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy9sb2dpbiBzY3JlZW4uIGtow7RuZyBsw6BtIGfDrCBj4bqjLlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHJvdXRlKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICByZXR1cm4gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICBsZXQgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgIFJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBpbmRleChkYXRhPzogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uaW5kZXhgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc3RvcmVgLGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRhaWwoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGV0YWlsYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGVsZXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5kZWxldGUodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGkiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgQmVkIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdiZWRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBQYXRpZW50IGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdwYXRpZW50cyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50IiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3VzZXJzJzsgLy9r4bq/IHRo4burYSBDUlVEIHThu6sgdGjhurFuZyBjaGFcclxuICB9XHJcbiAgYXN5bmMgbG9naW4oeyBkYXRhIH06IHtkYXRhOiB7dXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ319KSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKFwiYXBpLmxvZ2luXCIpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpIHx8IHt9XHJcbiAgICAgIC8vc3VjY2Vzc1xyXG4gICAgdGhpcy5jb29raWVzLnNldCgndG9rZW4nLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInRva2VuXCIsIHVuZGVmaW5lZCksIHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd1c2VyJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ1c2VyXCIsIHt9KSx7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiKVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlUGFzc3dvcmQoZGF0YTogeyBpZDogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nfSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyB1c2VyVXBkYXRlUGFzc3dvcmQoZGF0YTogeyBpZDogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nfSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVzZXJVcGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgc2VhcmNoKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnNlYXJjaGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiLCJpbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgVXNlcmdyb3VwQWRkT3V0bGluZWQsXHJcbiAgVGVhbU91dGxpbmVkLFxyXG4gIFNjaGVkdWxlT3V0bGluZWQsXHJcbiAgU29sdXRpb25PdXRsaW5lZCxcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIFZlcmlmaWVkT3V0bGluZWQsXHJcbiAgSW5zZXJ0Um93UmlnaHRPdXRsaW5lZCxcclxuICBMYXlvdXRPdXRsaW5lZCxcclxuICBDYXJyeU91dE91dGxpbmVkLFxyXG4gIExpbmVDaGFydE91dGxpbmVkXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyID0gW1xyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIixcclxuICAgIGljb246IDxIb21lT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlcnMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucm9vbXMuaW5kZXhcIixcclxuICAgIGljb246IDxJbnNlcnRSb3dSaWdodE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmJlZHMuaW5kZXhcIixcclxuICAgIGljb246IDxMYXlvdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5wYXRpZW50cy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hc3NpZ25tZW50XCIsXHJcbiAgICBpY29uOiA8U2NoZWR1bGVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRvY3RvckFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ubnVyc2VBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uaGVhbHRoU3RhdHVzZXMuaW5kZXhcIixcclxuICAgIGljb246IDxDYWxlbmRhck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFkbWluc0luZGV4XCIsXHJcbiAgICBpY29uOiA8VGVhbU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlckdyb3Vwcy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxVc2VyZ3JvdXBBZGRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyUGVybWlzc2lvbnMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VmVyaWZpZWRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY1wiLFxyXG4gICAgaWNvbjogPENhcnJ5T3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNzLmhlYWx0aFN0YXR1c1wiLFxyXG4gICAgICAgIGljb246IDxMaW5lQ2hhcnRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XHJcbiIsImltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuLi9fcm91dGVzLmpzb24nXHJcblxyXG5jb25zdCBjaGFyVG9OdW0gPSB7IEM6IDgsIFI6IDQsIFU6IDIsIEQ6IDEgfVxyXG5jb25zdCBjcnVkVG9EZWMgPSAodGV4dDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGV4dC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLnJlZHVjZSgodG90YWw6IG51bWJlciwgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnKSA9PiB0b3RhbCArIGNoYXJUb051bVtjaGFyXSwgMClcclxuXHJcbn1cclxuY29uc3QgZGVjVG9DcnVkID0gKGRlYzogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGxldCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCdcclxuICAgIGZvciAoY2hhciBpbiBjaGFyVG9OdW0pIHtcclxuICAgICAgICBpZiAoKGRlYyAmIGNoYXJUb051bVtjaGFyXSkgPT0gY2hhclRvTnVtW2NoYXJdKSByZXN1bHQgKz0gY2hhclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBoYXNQZXJtaXNzaW9uID0gKHJlcXVpcmVQZXJtaXNzaW9uOiBudW1iZXIsIHVzZXJQZXJtaXNzaW9uOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAodXNlclBlcm1pc3Npb24gJiByZXF1aXJlUGVybWlzc2lvbikgPT09IHJlcXVpcmVQZXJtaXNzaW9uXHJcbiAgfVxyXG5cclxuY29uc3QgY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnksIHVzZXJQZXJtaXNzaW9uczogYW55LCBzaG93RXJyb3I6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYoIXBlcm1pc3Npb25zKSByZXR1cm4gdHJ1ZVxyXG4gICAgbGV0IHBlcm1pc3Npb25BcnJheSA9IFtdXHJcbiAgICBmb3IgKGxldCBwZXJtaXNzaW9uIGluIHBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZVBlcm1pc3Npb24gPSBjcnVkVG9EZWMocGVybWlzc2lvbnNbcGVybWlzc2lvbl0pO1xyXG4gICAgICAgIGNvbnN0IHJvb3RQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb25zW1wicm9vdFwiXSB8fCAwXHJcbiAgICAgICAgbGV0IHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb25zW3Blcm1pc3Npb25dIHx8IDBcclxuICAgICAgICB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uIHwgcm9vdFBlcm1pc3Npb25cclxuICAgICAgICBpZiAoaGFzUGVybWlzc2lvbihyZXF1aXJlUGVybWlzc2lvbiwgdXNlclBlcm1pc3Npb24pKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHBlcm1pc3Npb25BcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgcGVybWlzc2lvbjogcGVybWlzc2lvbixcclxuICAgICAgICAgICAgcmVxdWlyZVBlcm1pc3Npb246IGRlY1RvQ3J1ZChyZXF1aXJlUGVybWlzc2lvbiksXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uOiBkZWNUb0NydWQodXNlclBlcm1pc3Npb24pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICghc2hvd0Vycm9yKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9uQXJyYXlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjaGVja1Blcm1pc3Npb24sXHJcbiAgICBoYXNQZXJtaXNzaW9uLFxyXG4gICAgY3J1ZFRvRGVjLFxyXG4gICAgZGVjVG9DcnVkXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd2FpdC10by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==