module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ "./pages/admin/beds/edit.tsx":
/*!***********************************!*\
  !*** ./pages/admin/beds/edit.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/BedService */ "./themes/services/api/BedService.ts");
/* harmony import */ var themes_services_api_RoomService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/services/api/RoomService */ "./themes/services/api/RoomService.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_3__["Select"];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 18
    }
  }
};

const Edit = ({
  rooms,
  bed,
  bedError
}) => {
  const {
    t,
    notify,
    redirect,
    setStore,
    getAuth,
    getStore
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();
  const bedService = new themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const deletePer = checkPermission({
    "admin.beds": "D"
  });

  const DisplayError = err => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error');
  }; //submit form


  const onFinish = async values => {
    if (bedError) return DisplayError(bedError);
    setLoading(true);
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(bedService.edit({
      id: bed.id,
      values
    }));
    setLoading(false);
    if (error) return DisplayError(error);
    notify(t("message.recordUpdated"));
    redirect("frontend.admin.beds.index");
  };

  const onDelete = async () => {
    if (bedError) return DisplayError(bedError);
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(bedService.delete({
      ids: [bed.id]
    }));
    if (error) return DisplayError(error);
    notify(t('message.recordDeleted'));
    redirect("frontend.admin.beds.index");
  }; //render option


  const renderOption = () => {
    let result = [];
    rooms.map(item => {
      result.push(__jsx(Option, {
        value: item.code,
        key: item.code
      }, item.code, " - (", item.bedNumber, " ", t('bed'), ")"));
    });
    return result;
  };

  const renderDeleteDialog = () => {
    return __jsx(themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_0__["default"], {
      ref: confirmRef,
      onSubmit: onDelete,
      title: t('deleteItem'),
      content: t('message.deleteConfirm')
    });
  };

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "content"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], _extends({}, formItemLayout, {
    form: form,
    name: "createBed",
    initialValues: {
      roomCode: bed.roomCode,
      bedId: bed.bedId,
      status: bed.status,
      note: bed.note
    },
    onFinish: onFinish,
    scrollToFirstError: true
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("room"),
    name: "roomCode",
    rules: [{
      required: true,
      message: t('form.required')
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    showSearch: true,
    placeholder: t('placeholder.room'),
    filterOption: (input, option) => {
      return option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, renderOption())), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("beds.bedId"),
    name: "bedId",
    rules: [{
      required: true,
      message: t('form.required')
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["InputNumber"], {
    style: {
      width: "100%"
    },
    min: 1
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("status"),
    name: "status"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: 0,
    key: 0
  }, t("beds.empty")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: 1,
    key: 1
  }, t("beds.full")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("note"),
    name: "note"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    wrapperCol: {
      span: 24
    },
    style: {
      textAlign: "center"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => redirect("frontend.admin.beds.index"),
    style: {
      marginRight: 8
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LeftCircleFilled"], null), " ", t('cancel')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: loading,
    style: {
      marginRight: 8
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["SaveFilled"], null), " ", t('submit')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    hidden: !deletePer,
    danger: true,
    onClick: () => {
      if (confirmRef.current) confirmRef.current.show(bed.id);
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteFilled"], null), " ", t('deleteItem')))), renderDeleteDialog()));
};

Edit.getInitialProps = async ctx => {
  const roomService = new themes_services_api_RoomService__WEBPACK_IMPORTED_MODULE_5__["default"](ctx);
  const bedService = new themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  const query = ctx.query;
  let error;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    };
  }

  let [bedError, bed] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(bedService.detail({
    id: query.id
  }));
  if (bedError) bed = {};
  const [errorRoom, rooms] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(roomService.index({
    pageSize: -1
  }));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    bedError: bedError,
    bed: bed,
    rooms: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(rooms, "data", [])
  };
};

Edit.permissions = {
  "admin.beds": "U"
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

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

/***/ "./themes/services/api/RoomService.ts":
/*!********************************************!*\
  !*** ./themes/services/api/RoomService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class Room extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'rooms';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Room);

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

/***/ 19:
/*!*****************************************!*\
  !*** multi ./pages/admin/beds/edit.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\beds\edit.tsx */"./pages/admin/beds/edit.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vYmVkcy9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvU3RvcmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9CYXNlSG9va3MudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vay50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvQWRtaW4udHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvQ29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9JMThuLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CYXNlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1Jvb21TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3V0aWxzL1Blcm1pc3Npb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdhaXQtdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJPcHRpb24iLCJTZWxlY3QiLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwiRWRpdCIsInJvb21zIiwiYmVkIiwiYmVkRXJyb3IiLCJ0IiwicmVkaXJlY3QiLCJzZXRTdG9yZSIsImdldEF1dGgiLCJnZXRTdG9yZSIsInVzZUJhc2VIb29rIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsImJlZFNlcnZpY2UiLCJCZWRTZXJ2aWNlIiwiY29uZmlybVJlZiIsImNyZWF0ZVJlZiIsImNoZWNrUGVybWlzc2lvbiIsInVzZVBlcm1pc3Npb25Ib29rIiwiZGVsZXRlUGVyIiwiRGlzcGxheUVycm9yIiwiY29kZSIsIm9uRmluaXNoIiwidmFsdWVzIiwidG8iLCJlZGl0IiwiaWQiLCJvbkRlbGV0ZSIsImRlbGV0ZSIsImlkcyIsInJlbmRlck9wdGlvbiIsIm1hcCIsIml0ZW0iLCJiZWROdW1iZXIiLCJyZW5kZXJEZWxldGVEaWFsb2ciLCJyb29tQ29kZSIsImJlZElkIiwic3RhdHVzIiwibm90ZSIsInJlcXVpcmVkIiwiaW5wdXQiLCJvcHRpb24iLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpblJpZ2h0IiwiY3VycmVudCIsInNob3ciLCJyb29tU2VydmljZSIsIlJvb21TZXJ2aWNlIiwiZGV0YWlsIiwiZXJyb3JSb29tIiwiaW5kZXgiLCJwYWdlU2l6ZSIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIl8iLCJwZXJtaXNzaW9ucyIsImJyZWFkQ3J1bWJDb21wb25lbnQiLCJsYW5nIiwiZ2V0Um91dGVOYW1lIiwicm91dGVQYXRoIiwicm91dGVEYXRhIiwiX3JvdXRlcyIsInJvdXRlTmFtZSIsInJvdXRlRWxlbWVudCIsImFjdGlvbiIsInN1YnN0ciIsImJyZWFkQ3VtYnMiLCJyb3V0ZXMiLCJnZXRCcmVhZGNydW1icyIsInVuc2hpZnQiLCJsaW5rUHJvcHMiLCJtYWtlVXJsIiwiY29uZmlybSIsIk1vZGFsIiwiQ29uZmlybURpYWxvZyIsIm9uQ2FuY2VsIiwic3RhdGUiLCJvblN1Ym1pdCIsInRpdGxlIiwiY29udGVudCIsInNldFN0YXRlIiwib25PayIsInJlZHVjZXIiLCJ0eXBlIiwicGF5bG9hZCIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsImRldlRvb2xFeHRlbnNpb25zIiwiaXNTZXJ2ZXIiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwiY3JlYXRlU3RvcmUiLCJ1c2VCYXNlSG9va3MiLCJ1c2VSb3V0ZXIiLCJJMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJ1c2VTZWxlY3RvciIsIm5leHRSb3V0ZSIsImdldERhdGEiLCJvYmoiLCJkZWZhdWx0VmFsdWUiLCJkZXNjcmlwdGlvbiIsIm5vdGlmaWNhdGlvbiIsImR1cmF0aW9uIiwiYXV0aCIsImdldENvb2tpZXMiLCJjb29raWVzIiwiZ2V0UHVibGljUnVudGltZUNvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJQZXJtaXNzaW9uSG9vayIsInVzZXJQZXJtaXNzaW9ucyIsImdldFVzZXJQZXJtaXNzaW9uIiwiX2NoZWNrUGVybWlzc2lvbiIsIlRIRU1FIiwiVGl0bGUiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIkNvbnRlbnQiLCJGb290ZXIiLCJMYXlvdXQiLCJBZG1pbiIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJvbkNvbGxhcHNlQ2hhbmdlIiwibG9nIiwidXBkYXRlU2l6ZSIsIm1vYmlsZSIsImlubmVyV2lkdGgiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlNJVEVfTkFNRSIsIlRJVExFIiwiREVTQ1JJUFRJT04iLCJMT0dPIiwicGFkZGluZyIsImhlaWdodCIsImRpc2FibGVkU2VhcmNoIiwibW9tZW50IiwieWVhciIsInF1ZXJ5U2VsZWN0b3IiLCJIZWFkZXIiLCJTdWJNZW51IiwiTWVudSIsIlNlYXJjaCIsIklucHV0IiwiQWRtaW5IZWFkZXIiLCJ1c2VyU2VydmljZSIsIlVzZXJTZXJ2aWNlIiwicGF0aWVudFNlcnZpY2UiLCJQYXRpZW50U2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJjb29raWVPYmplY3QiLCJoYW5kbGVDbGlja01lbnUiLCJyZWRpcmVjdExvZ2luIiwiQ29va2llcyIsInJlbW92ZSIsInRva2VuIiwidXNlciIsIm9wdGlvbnNQYXRpZW50cyIsIm9wdGlvbnNCZWRzIiwib3B0aW9uc1VzZXJzIiwib25DaGFuZ2VTZWFyY2giLCJmaWx0ZXJQYXRpZW50cyIsImZpbHRlcnMiLCJvcGVyYXRvciIsInNvcnRpbmciLCJmaWx0ZXJCZWRzIiwiZmlsdGVyVXNlcnMiLCJlcnJVc2VycyIsImRhdGFVc2VycyIsImxlbmd0aCIsImVyclBhdGllbnRzIiwiZGF0YVBhdGllbnRzIiwiZXJyQmVkcyIsImRhdGFCZWRzIiwib25CbHVyU2VhcmNoIiwicmVuZGVyQ29uZmlybURpYWxvZyIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsInBhc3N3b3JkIiwidXNlclVwZGF0ZVBhc3N3b3JkIiwidmFsaWRhdG9yUGFzc3dvcmQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwicnVsZSIsInJlbmRlckNoYW5nZVBhc3NNb2RhbCIsImZvcm1DaGFuZ2VQYXNzd29yZCIsInJlcGFzc3dvcmQiLCJzdWJtaXQiLCJyZW5kZXJSaWdodENvbnRlbnQiLCJtZW51SWNvblByb3BzIiwiY2xhc3NOYW1lIiwiaGVhZGVyQ2xhc3MiLCJhY2NvdW50UG9wdXAiLCJmdWxsbmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInJlbmRlclRpdGxlIiwicmVuZGVySXRlbSIsImxpbmsiLCJsYWJlbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsb2F0IiwicmVuZGVyU2VhcmNoIiwiY29sb3IiLCJNZW51Q29tcG9uZW50IiwiZ2VuZXJhdGVNZW51cyIsImljb24iLCJmaWx0ZXIiLCJtZW51IiwidGhlbWUiLCJ0UmVhZHkiLCJvdGhlclByb3BzIiwiY3VycmVudFJvdXRlTmFtZSIsImJyZWFkY3VtcyIsImdldFNpZGViYXJTZWxlY3RlZHMiLCJyb3V0ZXJOYW1lcyIsImJyZWFkY3VtIiwic2VsZWN0ZWRLZXlzIiwicG9wIiwic2lkZWJhciIsIm51bUZvcm1hdHRlciIsIm51bSIsInRvRml4ZWQiLCJQcm9maWxlIiwicHJvZmlsZUluZm8iLCJjb21wYW55TG9nbyIsImdyb3VwTmFtZSIsInVzZXJGdWxsbmFtZSIsImNvbXBhbnlOYW1lIiwiY29tcGFueUFkZHJlc3MiLCJ0b2RheSIsIlNpZGVyIiwic2lkZUJhciIsImRlZmF1bHRDb29raWUiLCJOZXh0STE4TmV4dCIsImRlZmF1bHQiLCJnZXRDb25maWciLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiZGVmYXVsdE5TIiwiZGVmYXVsdExhbmd1YWdlIiwiTEFORyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsImJyb3dzZXJMYW5ndWFnZURldGVjdGlvbiIsInNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIlJlcXVlc3QiLCJjb29raWVzU3RyaW5nIiwiaGFuZGxlR2xvYmFsQ2FsbGJhY2siLCJoYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImhhbmRsZUdsb2JhbCIsImJpbmQiLCJoYW5kbGVHbG9iYWxFcnJvciIsImdldEFwcFVybCIsIkFQSV9IT1NUIiwiYmVmb3JlUmVxdWVzdCIsImFmdGVyUmVxdWVzdCIsIlJlcXVlc3RFeGNlcHRpb24iLCJwb3N0IiwicHV0IiwiVXJsUGF0dGVybiIsInF1ZXJ5U3RyaW5nIiwiUm91dGUiLCJyb3V0ZUNvbmZpZyIsIkVycm9yIiwicGF0dGVybiIsInN0cmluZ2lmeSIsImFzVXJsIiwiYWRkUXVlcnkiLCJsb2NhdGlvbiIsIm9sZFF1ZXJ5IiwicXVlcnlPYmoiLCJKU09OIiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInBhcmVudCIsIkJhc2VBcGkiLCJjb250ZXh0IiwiY29va2llc09iaiIsIm5leHRDb29raWUiLCJnbG9iYWxIYW5kbGVDYWxsYmFjayIsImdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2siLCJjcmVhdGUiLCJCZWQiLCJQYXRpZW50IiwiUm9vbSIsIlVzZXIiLCJsb2dpbiIsInVwZGF0ZVBhc3N3b3JkIiwic2VhcmNoIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidGV4dCIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsInNob3dFcnJvciIsInBlcm1pc3Npb25BcnJheSIsInBlcm1pc3Npb24iLCJyb290UGVybWlzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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SFIsS0FBckI7QUFLSDs7QUFDRCxNQUFJLENBQUNDLFNBQUwsRUFBZ0IsT0FBTyxLQUFQO0FBQ2hCLFNBQU87QUFDSDFaLFNBQUssRUFBRSxJQURKO0FBRUhvSSxlQUFXLEVBQUV1UjtBQUZWLEdBQVA7QUFLSCxDQXJCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXGJlZHNcXGVkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAndGhlbWVzL2xheW91dHMvQWRtaW4nXHJcbmltcG9ydCB7IEJ1dHRvbiwgUm93LCBDb2wsIEZvcm0sIElucHV0LCBTZWxlY3QsIE1vZGFsLCBJbnB1dE51bWJlciwgUmFkaW8gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEJlZFNlcnZpY2UgZnJvbSAndGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlJztcclxuaW1wb3J0IFJvb21TZXJ2aWNlIGZyb20gJ3RoZW1lcy9zZXJ2aWNlcy9hcGkvUm9vbVNlcnZpY2UnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgeyBEZWxldGVGaWxsZWQsIFNhdmVGaWxsZWQsIExlZnRDaXJjbGVGaWxsZWQsIENvcHlGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tIFwidGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rXCI7XHJcblxyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcblxyXG5jb25zdCBmb3JtSXRlbUxheW91dCA9IHtcclxuICBsYWJlbENvbDoge1xyXG4gICAgeHM6IHsgc3BhbjogMjQgfSxcclxuICAgIHNtOiB7IHNwYW46IDQgfSxcclxuICB9LFxyXG4gIHdyYXBwZXJDb2w6IHtcclxuICAgIHhzOiB7IHNwYW46IDI0IH0sXHJcbiAgICBzbTogeyBzcGFuOiAxOCB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBFZGl0ID0gKHsgcm9vbXMsIGJlZCwgYmVkRXJyb3IgfTogeyByb29tczogUm9vbVtdLCBiZWQ6IEJlZCwgYmVkRXJyb3I6IGFueSB9KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZSgpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcblxyXG4gIGNvbnN0IHsgY2hlY2tQZXJtaXNzaW9uIH0gPSB1c2VQZXJtaXNzaW9uSG9vaygpO1xyXG4gIGNvbnN0IGRlbGV0ZVBlciA9IGNoZWNrUGVybWlzc2lvbih7XHJcbiAgICBcImFkbWluLmJlZHNcIjogXCJEXCJcclxuICB9KVxyXG5cclxuICBjb25zdCBEaXNwbGF5RXJyb3IgPSAoZXJyOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBub3RpZnkodChgZXJyb3JzOiR7ZXJyLmNvZGV9YCksIHQoZXJyLm1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gIH1cclxuXHJcbiAgLy9zdWJtaXQgZm9ybVxyXG4gIGNvbnN0IG9uRmluaXNoID0gYXN5bmMgKHZhbHVlczogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZihiZWRFcnJvcikgcmV0dXJuIERpc3BsYXlFcnJvcihiZWRFcnJvcilcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5lZGl0KHtcclxuICAgICAgaWQ6IGJlZC5pZCxcclxuICAgICAgdmFsdWVzXHJcbiAgICB9KSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgaWYoZXJyb3IpIHJldHVybiBEaXNwbGF5RXJyb3IoZXJyb3IpXHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkVXBkYXRlZFwiKSlcclxuICAgIHJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZihiZWRFcnJvcikgcmV0dXJuIERpc3BsYXlFcnJvcihiZWRFcnJvcilcclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5kZWxldGUoeyBpZHM6IFtiZWQuaWRdIH0pKTtcclxuICAgIGlmKGVycm9yKSByZXR1cm4gRGlzcGxheUVycm9yKGVycm9yKVxyXG4gICAgbm90aWZ5KHQoJ21lc3NhZ2UucmVjb3JkRGVsZXRlZCcpKVxyXG4gICAgcmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5iZWRzLmluZGV4XCIpXHJcbiAgfVxyXG5cclxuICAvL3JlbmRlciBvcHRpb25cclxuICBjb25zdCByZW5kZXJPcHRpb24gPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0OiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICByb29tcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2l0ZW0uY29kZX0ga2V5PXtpdGVtLmNvZGV9PntpdGVtLmNvZGV9IC0gKHtpdGVtLmJlZE51bWJlcn0ge3QoJ2JlZCcpfSk8L09wdGlvbj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHJlbmRlckRlbGV0ZURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtvbkRlbGV0ZX1cclxuICAgICAgICB0aXRsZT17dCgnZGVsZXRlSXRlbScpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2UuZGVsZXRlQ29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBuYW1lPVwiY3JlYXRlQmVkXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICByb29tQ29kZTogYmVkLnJvb21Db2RlLFxyXG4gICAgICAgICAgYmVkSWQ6IGJlZC5iZWRJZCxcclxuICAgICAgICAgIHN0YXR1czogYmVkLnN0YXR1cyxcclxuICAgICAgICAgIG5vdGU6IGJlZC5ub3RlXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgc2Nyb2xsVG9GaXJzdEVycm9yXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInJvb21cIil9XHJcbiAgICAgICAgICBuYW1lPVwicm9vbUNvZGVcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHNob3dTZWFyY2hcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3BsYWNlaG9sZGVyLnJvb20nKX1cclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXQ6IGFueSwgb3B0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmNoaWxkcmVuWzBdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJPcHRpb24oKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcImJlZHMuYmVkSWRcIil9XHJcbiAgICAgICAgICBuYW1lPVwiYmVkSWRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dE51bWJlciAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG1pbj17MX0gLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJzdGF0dXNcIil9XHJcbiAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17MH0ga2V5PXswfT57dChcImJlZHMuZW1wdHlcIil9PC9SYWRpbz5cclxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXsxfSBrZXk9ezF9Pnt0KFwiYmVkcy5mdWxsXCIpfTwvUmFkaW8+XHJcbiAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcIm5vdGVcIil9XHJcbiAgICAgICAgICBuYW1lPVwibm90ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gd3JhcHBlckNvbD17eyBzcGFuOiAyNCB9fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiKX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDggfX0+XHJcbiAgICAgICAgICAgIDxMZWZ0Q2lyY2xlRmlsbGVkIC8+IHt0KCdjYW5jZWwnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvYWRpbmd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4IH19PlxyXG4gICAgICAgICAgICA8U2F2ZUZpbGxlZCAvPiB7dCgnc3VibWl0Jyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJ1dHRvbiBoaWRkZW49eyFkZWxldGVQZXJ9IGRhbmdlciBvbkNsaWNrPXsoKSA9PiB7IFxyXG4gICAgICAgICAgICAgIGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KGJlZC5pZCkgXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8RGVsZXRlRmlsbGVkIC8+IHt0KCdkZWxldGVJdGVtJyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAge3JlbmRlckRlbGV0ZURpYWxvZygpfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkVkaXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgY29uc3Qgcm9vbVNlcnZpY2UgPSBuZXcgUm9vbVNlcnZpY2UoY3R4KVxyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZShjdHgpXHJcbiAgY29uc3QgcXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgbGV0IGVycm9yOiBhbnk7XHJcblxyXG4gIGlmICghcXVlcnkuaWQpIHtcclxuICAgIC8vZXJyb3IgbWlzc2luZyBpZFxyXG4gICAgZXJyb3IgPSB7XHJcbiAgICAgIGNvZGU6IDk5OTYsXHJcbiAgICAgIG1lc3NhZ2U6ICdtaXNzaW5nIElEJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IFtiZWRFcnJvciwgYmVkXSA9IGF3YWl0IHRvKGJlZFNlcnZpY2UuZGV0YWlsKHsgaWQ6IHF1ZXJ5LmlkIH0pKTtcclxuICBpZihiZWRFcnJvcikgYmVkID0ge31cclxuICBjb25zdCBbZXJyb3JSb29tLCByb29tc10gPSBhd2FpdCB0byhyb29tU2VydmljZS5pbmRleCh7IHBhZ2VTaXplOiAtMSB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAncGFnZXMnLCAnbWVudScsJ2Vycm9ycyddLFxyXG4gICAgZXJyb3I6IGVycm9yLFxyXG4gICAgYmVkRXJyb3I6IGJlZEVycm9yLFxyXG4gICAgYmVkOiBiZWQsXHJcbiAgICByb29tczogXy5nZXQocm9vbXMsIFwiZGF0YVwiLCBbXSksXHJcbiAgfVxyXG59XHJcbkVkaXQucGVybWlzc2lvbnMgPSB7XHJcbiAgXCJhZG1pbi5iZWRzXCI6IFwiVVwiXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXQiLCJpbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgeyBnZXRCcmVhZGNydW1icywgcm91dGUgYXMgbWFrZVVybCB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmludGVyZmFjZSBSb3V0ZSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IGJyZWFkQ3J1bWJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICAgIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgICAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgICAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICAgICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBicmVhZEN1bWJzID0gW11cclxuICAgIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgICBsZXQgcm91dGVzOiBSb3V0ZVtdID0gZ2V0QnJlYWRjcnVtYnMocm91dGVOYW1lKVxyXG4gICAgaWYgKHJvdXRlc1swXSAmJiByb3V0ZXNbMF0ubmFtZSAhPSBcImZyb250ZW5kLmFkbWluLmhvbWVcIikge1xyXG4gICAgICAgIHJvdXRlcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ2Zyb250ZW5kLmFkbWluLmhvbWUnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgbGlua1Byb3BzID0gbWFrZVVybChyb3V0ZS5uYW1lKVxyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgey4uLmxpbmtQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+eyByb3V0ZS5uYW1lID09IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiID8gPEhvbWVGaWxsZWQgLz4gOiB0KHJvdXRlLm5hbWUpIH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAge3Qocm91dGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxCcmVhZGNydW1iPnticmVhZEN1bWJzfTwvQnJlYWRjcnVtYj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFkQ3J1bWJDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY2xhc3MgQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNob3coZGF0YSA9IG51bGwpIHtcclxuICAgIGxldCB7IHRpdGxlLCBjb250ZW50IH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aXRsZSA9IHRpdGxlIHx8IFwiVGl0bGVcIlxyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJDb250ZW50XCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgIGNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIG9uT2s6IHRoaXMub25TdWJtaXQsXHJcbiAgICAgIG9uQ2FuY2VsOiB0aGlzLm9uQ2FuY2VsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25DYW5jZWwgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmICh0eXBlb2Ygb25DYW5jZWwgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBvbkNhbmNlbCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodHlwZW9mIG9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgYXdhaXQgb25TdWJtaXQodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtRGlhbG9nOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICBpZihhY3Rpb24udHlwZSA9PT0gXCJzZXRTdG9yZVwiKXtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH1cclxuICAgIF8uc2V0KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5wYXRoLCBhY3Rpb24ucGF5bG9hZC52YWx1ZSlcclxuICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuLyogY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc3RvcmU6IHN0b3JlUmVkdWNlclxyXG59KSAqL1xyXG5cclxuY29uc3Qgc2V0U3RvcmUgPSAocGF0aCwgdmFsdWUpID0+ICh7XHJcbiAgdHlwZTogJ3NldFN0b3JlJyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBwYXRoLFxyXG4gICAgdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRTdGF0ZSA9IHt9LCBvcHRpb25zKSA9PiB7XHJcbiAgbGV0IGRldlRvb2xFeHRlbnNpb25zID0gKCFvcHRpb25zLmlzU2VydmVyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgOiB1bmRlZmluZWRcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdFN0YXRlLCBkZXZUb29sRXh0ZW5zaW9ucylcclxufVxyXG5leHBvcnQge1xyXG4gIG1ha2VTdG9yZSxcclxuICBzZXRTdG9yZVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3RoZW1lcy9tb2R1bGVzL0kxOG4nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRTdG9yZSBhcyBzZXRTdG9yZUFjdGlvbiB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1N0b3JlJ1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnXHJcbmludGVyZmFjZSBCYXNlQm9vayB7XHJcbiAgICB1c2VTZWxlY3RvcjogRnVuY3Rpb24sXHJcbiAgICByb3V0ZXI6IGFueSxcclxuICAgIHQ6IEZ1bmN0aW9uLFxyXG4gICAgc2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgcmVkaXJlY3Q6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0RGF0YTogRnVuY3Rpb24sXHJcbiAgICBub3RpZnk6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0QXV0aDogRnVuY3Rpb25cclxuICAgIGdldENvb2tpZXM6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0UHVibGljUnVudGltZUNvbmZpZzogRnVuY3Rpb25cclxufVxyXG5jb25zdCB1c2VCYXNlSG9va3MgPSAgKHsgbGFuZyA9IFsnY29tbW9uJywgJ3BhZ2VzJywgJ2Vycm9ycyddLH0gOiB7IGxhbmc/OiBzdHJpbmdbXSwgfSA9IHt9KTogQmFzZUJvb2sgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IEkxOG4gPSB1c2VUcmFuc2xhdGlvbihsYW5nKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHNldFN0b3JlID0gYXN5bmMgKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN0b3JlQWN0aW9uKHBhdGgsIHZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdG9yZSA9IChwYXRoOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gXy5nZXQoc3RhdGUsIHBhdGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeTogc3RyaW5nLCBzaGFsbG93OiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmV4dFJvdXRlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIGFzOiByb3V0ZU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcywge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnLCB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiID0gXCJzdWNjZXNzXCIpOiB2b2lkID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0IC8vc2Vjb25kXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYXV0aClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvb2tpZXMgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvb2tpZXMpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wdWJsaWNSdW50aW1lQ29uZmlnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlU2VsZWN0b3IsXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHQ6IEkxOG4udCxcclxuICAgICAgICBzZXRTdG9yZSxcclxuICAgICAgICBnZXRTdG9yZSxcclxuICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICBnZXREYXRhLFxyXG4gICAgICAgIG5vdGlmeSxcclxuICAgICAgICBnZXRBdXRoLFxyXG4gICAgICAgIGdldENvb2tpZXMsXHJcbiAgICAgICAgZ2V0UHVibGljUnVudGltZUNvbmZpZ1xyXG4gICAgfTtcclxufVxyXG5cclxudXNlQmFzZUhvb2tzLmdldERhdGEgPSAgKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VCYXNlSG9va3MiLCJpbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAnLi9CYXNlSG9va3MnXHJcbmltcG9ydCB7Y2hlY2tQZXJtaXNzaW9ufSBmcm9tICcuLi91dGlscy9QZXJtaXNzaW9uJ1xyXG5cclxuICBcclxuY29uc3QgUGVybWlzc2lvbkhvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldEF1dGggfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge31cclxuICAgIGNvbnN0IHVzZXJQZXJtaXNzaW9ucyA9IGF1dGgucGVybWlzc2lvbnMgfHwge31cclxuXHJcbiAgICBjb25zdCBnZXRVc2VyUGVybWlzc2lvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlclBlcm1pc3Npb25zXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IF9jaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja1Blcm1pc3Npb24ocGVybWlzc2lvbnMsIHVzZXJQZXJtaXNzaW9ucylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VXNlclBlcm1pc3Npb24sXHJcbiAgICAgICAgY2hlY2tQZXJtaXNzaW9uOiBfY2hlY2tQZXJtaXNzaW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3Npb25Ib29rIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0LCBEcmF3ZXIsIEJhY2tUb3AsIFJvdywgQ29sLCBUeXBvZ3JhcGh5IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2FkbWluL1NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9hZG1pbi9IZWFkZXJcIjtcclxuY29uc3QgVEhFTUUgPSBcImxpZ2h0XCI7XHJcbmltcG9ydCBCcmVhZENydW1iIGZyb20gXCJ0aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWJcIjtcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2tzIGZyb20gXCJ0aGVtZXMvaG9va3MvQmFzZUhvb2tzXCI7XHJcbmltcG9ydCBfcm91dGVzIGZyb20gXCJ0aGVtZXMvX3JvdXRlcy5qc29uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuXHJcbmNvbnN0IHsgVGl0bGUsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCB7IENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgQWRtaW4gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0IH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKTtcclxuXHJcbiAgY29uc3Qgb25Db2xsYXBzZUNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MjtcclxuICAgIHNldElzTW9iaWxlKG1vYmlsZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICAgIHVwZGF0ZVNpemUoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlcztcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdO1xyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpIHx8IFwiXCI7XHJcbiAgLy8gY29uc29sZS5sb2cocm91dGVOYW1lKVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3B1YmxpY1J1bnRpbWVDb25maWcuU0lURV9OQU1FfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLlRJVExFfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5ERVNDUklQVElPTn0vPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfSAvPlxyXG4gICAgICA8bGluayByZWw9XCJudXJzaW5nLWhvbWUtaWNvblwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30+PC9saW5rPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBpZD1cImFkbWluXCI+XHJcbiAgICAgIDxMYXlvdXQgaGFzU2lkZXI9e3RydWV9PlxyXG4gICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgbWFza0Nsb3NhYmxlXHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzdHJveU9uQ2xvc2U9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IG9uQ29sbGFwc2VDaGFuZ2UoZmFsc2UpfVxyXG4gICAgICAgICAgICB2aXNpYmxlPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICBib2R5U3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgY29sbGFwc2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInByaW1hcnlMYXlvdXRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BtYWluLWxheW91dCAke2NvbGxhcHNlZCA/IFwiY29sbGFwc2VkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfSBkaXNhYmxlZFNlYXJjaD17cHJvcHMuZGlzYWJsZWRTZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1ic1wiPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17MTV9PlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LnRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0uZGVzY3JpcHRpb25gXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXs5fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRDcnVtYiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPEZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj7CqSB7bW9tZW50KCkueWVhcigpfSBIYWN0ZWNoPC9Gb290ZXI+XHJcbiAgICAgICAgICA8QmFja1RvcFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiYmFja1RvcFwifVxyXG4gICAgICAgICAgICB0YXJnZXQ9eygpID0+XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5TGF5b3V0XCIpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbil9O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBjcmVhdGVSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIExheW91dCwgQXZhdGFyLCBCdXR0b24sIElucHV0LCBQb3BvdmVyLCBSb3csIENvbCwgQXV0b0NvbXBsZXRlLCBGb3JtLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBcclxuICBNZW51VW5mb2xkT3V0bGluZWQsIE1lbnVGb2xkT3V0bGluZWQsIFBvd2Vyb2ZmT3V0bGluZWQsIFxyXG4gIFNldHRpbmdGaWxsZWQsIFVzZXJPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlXCJcclxuaW1wb3J0IFBhdGllbnRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZVwiXHJcbmltcG9ydCBCZWRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlXCJcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnXHJcbmltcG9ydCB0byBmcm9tICdhd2FpdC10by1qcydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSwgZ2V0Q29va2llcywgZ2V0RGF0YSAgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKVxyXG4gIGNvbnN0IHBhdGllbnRTZXJ2aWNlID0gbmV3IFBhdGllbnRTZXJ2aWNlKClcclxuICBjb25zdCBiZWRTZXJ2aWNlID0gbmV3IEJlZFNlcnZpY2UoKVxyXG4gIGNvbnN0IFtwYXRpZW50cywgc2V0UGF0aWVudHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2JlZHMsIHNldEJlZHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpIC8vIGNoYW5nZSBwYXNzd29yZFxyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge307XHJcbiAgY29uc3QgY29va2llT2JqZWN0ID0gZ2V0Q29va2llcygpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IGNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tNZW51ID0gKGU6IGFueSkgPT4geyB9XHJcbiAgY29uc3QgcmVkaXJlY3RMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhjb29raWVPYmplY3QpXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndG9rZW4nLCB7IHBhdGg6ICcvJ30pXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndXNlcicsIHsgcGF0aDogJy8nfSlcclxuICAgIHJldHVybiBhd2FpdCByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb29raWVPYmplY3QudG9rZW4gfHwgIWNvb2tpZU9iamVjdC51c2VyKSB7XHJcbiAgICAgIHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgbGV0IG9wdGlvbnNQYXRpZW50czogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc0JlZHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNVc2VyczogYW55ID0gW11cclxuICBcclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9IGFzeW5jICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBsZXQgZmlsdGVyUGF0aWVudHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyQmVkcyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJyb29tQ29kZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJVc2VycyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBbZXJyVXNlcnMsIHVzZXJzXTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS5pbmRleChmaWx0ZXJVc2VycykpXHJcbiAgICBsZXQgZGF0YVVzZXJzID0gXy5nZXQodXNlcnMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFVc2Vycy5sZW5ndGgpe1xyXG4gICAgICBzZXRVc2VycyhkYXRhVXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJQYXRpZW50cywgcGF0aWVudHNdOiBhbnlbXSA9IGF3YWl0IHRvKHBhdGllbnRTZXJ2aWNlLmluZGV4KGZpbHRlclBhdGllbnRzKSlcclxuICAgIGxldCBkYXRhUGF0aWVudHMgPSBfLmdldChwYXRpZW50cywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVBhdGllbnRzLmxlbmd0aCl7XHJcbiAgICAgIHNldFBhdGllbnRzKGRhdGFQYXRpZW50cylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyckJlZHMsIGJlZHNdOiBhbnlbXSA9IGF3YWl0IHRvKGJlZFNlcnZpY2UuaW5kZXgoZmlsdGVyQmVkcykpXHJcbiAgICBsZXQgZGF0YUJlZHMgPSBfLmdldChiZWRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhQmVkcy5sZW5ndGgpe1xyXG4gICAgICBzZXRCZWRzKGRhdGFCZWRzKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIGNvbnN0IG9uQmx1clNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldFVzZXJzKFtdKVxyXG4gICAgc2V0QmVkcyhbXSlcclxuICAgIHNldFBhdGllbnRzKFtdKVxyXG4gIH1cclxuICBcclxuICBjb25zdCByZW5kZXJDb25maXJtRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICByZWY9e2NvbmZpcm1SZWZ9XHJcbiAgICAgICAgb25TdWJtaXQ9e3JlZGlyZWN0TG9naW59XHJcbiAgICAgICAgdGl0bGU9e3QoJ3NpZ25vdXQnKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLnNpZ25vdXRDb25maXJtJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gYXN5bmMgKGRhdGE6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSlcclxuICAgIGxldCB2YWx1ZXMgPSB7IGlkOiBhdXRoLmlkLCBvbGRQYXNzd29yZDogZGF0YS5vbGRQYXNzd29yZCwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfVxyXG5cclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UudXNlclVwZGF0ZVBhc3N3b3JkKHZhbHVlcykpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBub3RpZnkodChgZXJyb3JzOiR7ZXJyb3IuY29kZX1gKSwgdChlcnJvci5tZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkVXBkYXRlZFwiKSlcclxuICB9XHJcblxyXG4gIC8vdmFsaWRhdGUgaW5wdXQgcGFzc3dvcmRcclxuICBjb25zdCB2YWxpZGF0b3JQYXNzd29yZCA9ICh7IGdldEZpZWxkVmFsdWUgfTogeyBnZXRGaWVsZFZhbHVlOiBGdW5jdGlvbiB9KSA9PiAoe1xyXG4gICAgdmFsaWRhdG9yOiAocnVsZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ2Zvcm0ucmVQYXNzd29yZCcpKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCByZW5kZXJDaGFuZ2VQYXNzTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUNoYW5nZVBhc3N3b3JkXSA9IEZvcm0udXNlRm9ybSgpXHJcbiAgICByZXR1cm4gKDxGb3JtIGZvcm09e2Zvcm1DaGFuZ2VQYXNzd29yZH0gbmFtZT1cImZvcm1DaGFuZ2VQYXNzd29yZFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBvbGRQYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICByZXBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvbkZpbmlzaD17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgID5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBvbk9rPXsoKSA9PiB7IGZvcm1DaGFuZ2VQYXNzd29yZC5zdWJtaXQoKTsgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInJlcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRvclBhc3N3b3JkXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyUmlnaHRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFBvd2Vyb2ZmT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiIG9uQ2xpY2s9eygpID0+IHsgaWYgKGNvbmZpcm1SZWYuY3VycmVudCkgY29uZmlybVJlZi5jdXJyZW50LnNob3coKSB9fT48L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8U2V0dGluZ0ZpbGxlZCBzcGluIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiAgb25DbGljaz17KCkgPT4geyBzZXRNb2RhbFZpc2libGUodHJ1ZSkgfX0gPjwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBtZW51SWNvblByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInRyaWdnZXJcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IG9uQ29sbGFwc2VDaGFuZ2UoIWNvbGxhcHNlZClcclxuICB9XHJcbiAgbGV0IGhlYWRlckNsYXNzID0gXCJoZWFkZXJcIlxyXG4gIGlmIChjb2xsYXBzZWQpIGhlYWRlckNsYXNzICs9ICcgY29sbGFwc2VkJ1xyXG5cclxuICBjb25zdCBhY2NvdW50UG9wdXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1s4LCA4XX0+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezd9IGxnPXs3fT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIlwifSBzaXplPXsxMDB9IHNoYXBlPVwic3F1YXJlXCI+XHJcbiAgICAgICAgICAgICAgICB7YXV0aC5mdWxsbmFtZX1cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICB7LyogPEF2YXRhciBzaXplPXs2NH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxN30gbGc9ezE3fT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgndXNlcm5hbWUnKX08L2I+OiA8aT57YXV0aC51c2VybmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Yj57dCgnZnVsbG5hbWUnKX08L2I+OiA8aT57YXV0aC5mdWxsbmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdlbWFpbCcpfTwvYj46IDxpPnthdXRoLmVtYWlsID8gYXV0aC5lbWFpbCA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgncGhvbmUnKX08L2I+OiA8aT57YXV0aC5waG9uZSA/IGF1dGgucGhvbmUgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyVGl0bGUgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudGRcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIG1vcmVcclxuICAgICAgICA8L2E+ICovfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySXRlbSA9ICh0aXRsZTogc3RyaW5nLCBsaW5rOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB0aXRsZSxcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7bGlua31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcGF0aWVudHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNQYXRpZW50cy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BwYXRpZW50cy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICBiZWRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zQmVkcy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0ucm9vbUNvZGV9IC0gJHtpdGVtLmJlZElkfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgYmVkcy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICB1c2Vycy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1VzZXJzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX0gLSAke2l0ZW0udXNlcm5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2B1c2Vycy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuIFxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdwYXRpZW50JykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zUGF0aWVudHMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnYmVkJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zQmVkc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2VtcGxveWVlJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zVXNlcnNcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI5MDBweFwiLCBkaXNwbGF5OiAnaW5saW5lJyB9fT5cclxuICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT1cImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLWRyb3Bkb3duXCJcclxuICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MzUwfSAvLyB3aWR0aCBkcm9wZG93blxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogYW55KSA9PiBvbkNoYW5nZVNlYXJjaCh2YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IG9uQmx1clNlYXJjaCgpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDM1MCB9fSAvLyB3aWR0aCBpbnB1dCBTZWFyY2hcclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBkaXNhYmxlZCA9IHtwcm9wcy5kaXNhYmxlZFNlYXJjaD8gdHJ1ZSA6IGZhbHNlIH0gLy8gZGlzYWJsZSBpbnB1dCBzZWFyY2hcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPXt0KFwic2VhcmNoXCIpfSAvPlxyXG4gICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30+XHJcbiAgICAgIHtjb2xsYXBzZWQgXHJcbiAgICAgID8gPE1lbnVVbmZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+IFxyXG4gICAgICA6IDxNZW51Rm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz59XHJcbiAgICAgIFxyXG4gICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dCgncGVyc29uYWxJbmZvJyl9IGNvbnRlbnQ9e2FjY291bnRQb3B1cCgpfT5cclxuICAgICAgICA8QnV0dG9uIGljb249ezxVc2VyT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIFxyXG4gICAgICB7LyogPEJ1dHRvbiBpY29uPXs8QmVsbE91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj4gKi99XHJcbiAgICAgIHsvKiA8U2VhcmNoXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bS4uLlwiXHJcbiAgICAgICAgb25TZWFyY2g9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoXCJcclxuICAgICAgLz4gKi99XHJcbiAgICAgIHtyZW5kZXJTZWFyY2goKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0Q29udGFpbmVyJz57cmVuZGVyUmlnaHRDb250ZW50KCl9PC9kaXY+XHJcblxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICB7cmVuZGVyQ29uZmlybURpYWxvZygpfVxyXG4gICAge3JlbmRlckNoYW5nZVBhc3NNb2RhbCgpfVxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSGVhZGVyIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAndGhlbWVzL3NpZGViYXInXHJcbmltcG9ydCB7IGdldFNpZGViYXJTZWxlY3RlZHMgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlUGVybWlzc2lvbkhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rJ1xyXG5cclxuY29uc3QgTWVudUNvbXBvbmVudCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgY29uc3Qge2NoZWNrUGVybWlzc2lvbn0gPSB1c2VQZXJtaXNzaW9uSG9vaygpXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZU1lbnVzID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGdlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbilcclxuICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVudS5JdGVtR3JvdXBcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Z2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWNoZWNrUGVybWlzc2lvbihpdGVtLnBlcm1pc3Npb25zKSkgcmV0dXJuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0ucm91dGVOYW1lfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChpdGVtLnJvdXRlTmFtZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KS5maWx0ZXIoKG1lbnU6YW55KSA9PiBtZW51KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0UmVhZHksIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXHJcbiAgY29uc3QgY3VycmVudFJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgY29uc3QgYnJlYWRjdW1zID0gZ2V0U2lkZWJhclNlbGVjdGVkcyhjdXJyZW50Um91dGVOYW1lKVxyXG4gIGxldCByb3V0ZXJOYW1lcyA9IGJyZWFkY3Vtcy5tYXAoKGJyZWFkY3VtOiBhbnkpID0+IGJyZWFkY3VtLnJvdXRlTmFtZSlcclxuICBjb25zdCBzZWxlY3RlZEtleXMgPSByb3V0ZXJOYW1lcy5wb3AoKVxyXG4gIHJldHVybiA8TWVudVxyXG4gICAgbW9kZT1cImlubGluZVwiXHJcbiAgICB0aGVtZT17dGhlbWV9XHJcbiAgICBkZWZhdWx0T3BlbktleXM9e3JvdXRlck5hbWVzfVxyXG4gICAgc2VsZWN0ZWRLZXlzPXtzZWxlY3RlZEtleXN9XHJcbiAgICBvbkNsaWNrPXtcclxuICAgICAgaXNNb2JpbGVcclxuICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2UodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIHsuLi5vdGhlclByb3BzfVxyXG4gID5cclxuICAgIHtnZW5lcmF0ZU1lbnVzKHNpZGViYXIpfVxyXG4gIDwvTWVudT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmZ1bmN0aW9uIG51bUZvcm1hdHRlcihudW06IG51bWJlcikge1xyXG4gICAgaWYobnVtID4gOTk5ICYmIG51bSA8IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDApLnRvRml4ZWQoMSkgKyAnSyc7IC8vIGNvbnZlcnQgdG8gSyBmb3IgbnVtYmVyIGZyb20gPiAxMDAwIDwgMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtID4gMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMDAwMCkudG9GaXhlZCgxKSArICdNJzsgLy8gY29udmVydCB0byBNIGZvciBudW1iZXIgZnJvbSA+IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA8IDkwMCl7XHJcbiAgICAgICAgcmV0dXJuIG51bTsgLy8gaWYgdmFsdWUgPCAxMDAwLCBub3RoaW5nIHRvIGRvXHJcbiAgICB9XHJcbn1cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0Q29va2llcywgcmVkaXJlY3QsIHQsIGdldERhdGEsIGdldEF1dGgsIGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpXHJcbiAgICBjb25zdCBwcm9maWxlSW5mbyA9IHtcclxuICAgICAgICBjb21wYW55TG9nbzogcHVibGljUnVudGltZUNvbmZpZy5MT0dPLFxyXG4gICAgICAgIGdyb3VwTmFtZTogXCJOaMOibiB2acOqblwiLFxyXG4gICAgICAgIHVzZXJGdWxsbmFtZTogXCJEacOqbSBUaOG7iyBRdeG7s25oXCIsXHJcbiAgICAgICAgY29tcGFueU5hbWU6IFwiVmnhu4duIGTGsOG7oW5nIGzDo28gSMaw4bubbmcgRMawxqFuZ1wiLFxyXG4gICAgICAgIGNvbXBhbnlBZGRyZXNzOiBcIlPhu5EgMzksIG5nw7UgNzQsIMSQxrDhu51uZyBEdXkgVMOibiwgUXXhuq1uIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpXCIsXHJcbiAgICAgICAgdG9kYXk6IHt9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1wcm9maWxlXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17ODB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IHNyYz17cHJvZmlsZUluZm8uY29tcGFueUxvZ299IGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbXBhbnlOYW1lXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWFkZHJlc3NcIj57cHJvZmlsZUluZm8uY29tcGFueUFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7LyogPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1uYW1lXCI+e3Byb2ZpbGVJbmZvLnVzZXJGdWxsbmFtZX08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1ncm91cE5hbWVcIj57cHJvZmlsZUluZm8uZ3JvdXBOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjJ9IG9mZnNldD17MX0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWVuZExpbmVcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQsIFVzZXJPdXRsaW5lZCwgSG9tZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zJztcclxuY29uc3QgVEhFTUUgPSAnbGlnaHQnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRoZW1lIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2lkZXJcclxuICAgICAgICAgICAgd2lkdGg9ezI1Nn1cclxuICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg9ezB9XHJcbiAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ9XCJsZ1wiXHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIC8vb25CcmVha3BvaW50PXshaXNNb2JpbGUgJiYgb25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX0gLz5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyO1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZGVmYXVsdENvb2tpZSkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhkZWZhdWx0Q29va2llKVxyXG4gIHJldHVybiBjb29raWVzXHJcbn0iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgTmV4dEkxOE5leHRJbnN0YW5jZSA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcclxuICBkZWZhdWx0TGFuZ3VhZ2U6IHB1YmxpY1J1bnRpbWVDb25maWcuTEFORyxcclxuICBvdGhlckxhbmd1YWdlczogWydlbiddLFxyXG4gIGxvY2FsZVBhdGg6IFwibGFuZ1wiLFxyXG4gIGJyb3dzZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2UsXHJcbiAgc2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5leHRJMThOZXh0SW5zdGFuY2UiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5pbXBvcnQgUmVxdWVzdEV4Y2VwdGlvbiBmcm9tICcuL1JlcXVlc3RFeGNlcHRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3Rvcihjb29raWVzU3RyaW5nKSB7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llc1N0cmluZ1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzKGNvb2tpZXNTdHJpbmcpLmdldCgndG9rZW4nKVxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZUdsb2JhbC5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZUdsb2JhbEVycm9yLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjaykge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2socmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbEVycm9yKGVycm9yKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgIGVycm9yID0gdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKGVycm9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbiAgfVxyXG5cclxuICBnZXRBcHBVcmwoKSB7XHJcbiAgICAvL3JldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvXCJcclxuICAgIHJldHVybiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9IT1NUXHJcbiAgfVxyXG4gIGJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSkge1xyXG5cclxuICB9XHJcbiAgYWZ0ZXJSZXF1ZXN0KHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKC0xLCBcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIilcclxuICAgIGNvbnN0IGNvZGUgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5jb2RlXCIsIC0xKVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLm1lc3NhZ2VcIiwgXCJcIilcclxuICAgIGNvbnN0IGRhdGEgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5kYXRhXCIpXHJcbiAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oY29kZSwgbWVzc2FnZSwgZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQodXJsLCBkYXRhID0ge30pIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcHV0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgZGVsZXRlKHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbn0iLCJjbGFzcyBSZXF1ZXN0RXhjZXB0aW9ue1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlPVwiXCIsIG1lc3NhZ2UgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEV4Y2VwdGlvbjtcclxuIiwiY29uc3QgVXJsUGF0dGVybiA9IHJlcXVpcmUoJ3VybC1wYXR0ZXJuJyk7XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4vX3JvdXRlcydcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBzdGF0aWMgbWFrZVVybChuYW1lLCBwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcm91dGVJbmZvID0gcm91dGVDb25maWdbbmFtZV1cclxuICAgICAgICBpZiAoIXJvdXRlSW5mbykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFVybFBhdHRlcm4ocm91dGVJbmZvLnVybCk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXNVcmwgPSBwYXR0ZXJuLnN0cmluZ2lmeShwYXJhbXMpIC8vbGluayBoaeG7g24gdGjhu4sgdHLDqm4gdHLDrG5oIGR1eeG7h3RcclxuICAgICAgICAgICAgbGV0IGhyZWYgPSBhc1VybCAvL2xpbmsgdGjhuq10IHRyb25nIC9wYWdlc1xyXG4gICAgICAgICAgICBpZiAocm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoMCwgNikgPT09IFwicGFnZXMvXCIpIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSByb3V0ZUluZm8uYWN0aW9uLnN1YnN0cig1KVxyXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignPycpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYD8ke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgJiR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhczogYXNVcmwsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFF1ZXJ5KHF1ZXJ5LCBzaGFsbG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFzUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgIGxldCBvbGRRdWVyeSA9IFJvdXRlci5yb3V0ZXIucXVlcnlcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLm9sZFF1ZXJ5LFxyXG4gICAgICAgICAgICAuLi5xdWVyeVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopID09IEpTT04uc3RyaW5naWZ5KG9sZFF1ZXJ5KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZ0FwcGVuZCA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeU9iailcclxuICAgICAgICAgICAgLyogaWYocXVlcnlTdHJpbmdBcHBlbmQpe1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgUm91dGVyLnJvdXRlci5xdWVyeSA9IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IChyb3V0ZU5hbWUsIHJvdXRlcywgcm91dGVQYXRocyA9IFtdKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpZGViYXJTZWxlY3RlZE5hbWUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXS5zaWRlYmFyIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCFyb3V0ZXMpIHJvdXRlcyA9IHNpZGViYXJcclxuICAgICAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJvdXRlLnJvdXRlTmFtZSA9PT0gc2lkZWJhclNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVQYXRocy5wdXNoKHJvdXRlKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZVBhdGhzXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldFNpZGViYXJTZWxlY3RlZHMoc2lkZWJhclNlbGVjdGVkTmFtZSwgcm91dGUuY2hpbGRyZW4sIFsuLi5yb3V0ZVBhdGhzLCByb3V0ZV0pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJyZWFkY3J1bWJzID0gKHJvdXRlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQocm91dGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnRoaXMuZ2V0QnJlYWRjcnVtYnMocm91dGUucGFyZW50KSwgLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3Qgcm91dGUgPSBSb3V0ZS5tYWtlVXJsXHJcbmNvbnN0IGFkZFF1ZXJ5ID0gUm91dGUuYWRkUXVlcnlcclxuY29uc3QgZ2V0QnJlYWRjcnVtYnMgPSBSb3V0ZS5nZXRCcmVhZGNydW1ic1xyXG5jb25zdCBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gUm91dGUuZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZTtcclxuZXhwb3J0IHtcclxuICAgIHJvdXRlLFxyXG4gICAgYWRkUXVlcnksXHJcbiAgICBnZXRCcmVhZGNydW1icyxcclxuICAgIGdldFNpZGViYXJTZWxlY3RlZHNcclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAndGhlbWVzL21vZHVsZXMvUmVxdWVzdCdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmNsYXNzIEJhc2VBcGl7XHJcbiAgY29va2llczogQ29va2llc1xyXG4gIFJlcXVlc3Q6IFJlcXVlc3RcclxuICBuYW1lOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNPYmogPSBjb250ZXh0ID8gbmV4dENvb2tpZShjb250ZXh0KToge31cclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXMoY29va2llc09iaik7XHJcbiAgICB0aGlzLlJlcXVlc3QgPSBuZXcgUmVxdWVzdChjb29raWVzT2JqKVxyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVDYWxsYmFja1xyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2tcclxuICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgfVxyXG4gIGdsb2JhbEhhbmRsZUNhbGxiYWNrID0gKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpID0+IHtcclxuICAgIGxldCBzdGF0dXMgPSBfLmdldChlcnJvciwgXCJyZXNwb25zZS5zdGF0dXNcIiwgLTEpO1xyXG4gICAgaWYoc3RhdHVzID09PSAtMSl7XHJcbiAgICAgIC8vbm90aWZ5KFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiLCBcImVycm9yXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidG9rZW5cIilcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInVzZXJcIilcclxuICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2xvZ2luXCIpe1xyXG4gICAgICAgIC8vbm90aWZ5KFwiTG9naW4gc2Vzc2lvbiBleHBpcmVkIVwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmxvZ2luXCIpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAvL2xvZ2luIHNjcmVlbi4ga2jDtG5nIGzDoG0gZ8OsIGPhuqMuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5yZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgcm91dGUocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIHJldHVybiByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3Qocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIGxldCBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgUm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcylcclxuICB9XHJcblxyXG4gIGFzeW5jIGluZGV4KGRhdGE/OiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5pbmRleGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zdG9yZWAsZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGFpbChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZXRhaWxgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBlZGl0KGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVwZGF0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZWxldGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmRlbGV0ZSh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUFwaSIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBCZWQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ2JlZHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVkIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFBhdGllbnQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3BhdGllbnRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgUm9vbSBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAncm9vbXMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbSIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2Vycyc7IC8va+G6vyB0aOG7q2EgQ1JVRCB04burIHRo4bqxbmcgY2hhXHJcbiAgfVxyXG4gIGFzeW5jIGxvZ2luKHsgZGF0YSB9OiB7ZGF0YToge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9fSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShcImFwaS5sb2dpblwiKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKSB8fCB7fVxyXG4gICAgICAvL3N1Y2Nlc3NcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3Rva2VuJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ0b2tlblwiLCB1bmRlZmluZWQpLCB7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jb29raWVzLnNldCgndXNlcicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidXNlclwiLCB7fSkse1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIilcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgdXNlclVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51c2VyVXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHNlYXJjaChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zZWFyY2hgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIiwiaW1wb3J0IHtcclxuICBIb21lT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFVzZXJncm91cEFkZE91dGxpbmVkLFxyXG4gIFRlYW1PdXRsaW5lZCxcclxuICBTY2hlZHVsZU91dGxpbmVkLFxyXG4gIFNvbHV0aW9uT3V0bGluZWQsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lZCxcclxuICBWZXJpZmllZE91dGxpbmVkLFxyXG4gIEluc2VydFJvd1JpZ2h0T3V0bGluZWQsXHJcbiAgTGF5b3V0T3V0bGluZWQsXHJcbiAgQ2FycnlPdXRPdXRsaW5lZCxcclxuICBMaW5lQ2hhcnRPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhciA9IFtcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SG9tZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnJvb21zLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SW5zZXJ0Um93UmlnaHRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5iZWRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8TGF5b3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucGF0aWVudHMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYXNzaWdubWVudFwiLFxyXG4gICAgaWNvbjogPFNjaGVkdWxlT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLm51cnNlQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8Q2FsZW5kYXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hZG1pbnNJbmRleFwiLFxyXG4gICAgaWNvbjogPFRlYW1PdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJHcm91cHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VXNlcmdyb3VwQWRkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlclBlcm1pc3Npb25zLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFZlcmlmaWVkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNcIixcclxuICAgIGljb246IDxDYXJyeU91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljcy5oZWFsdGhTdGF0dXNcIixcclxuICAgICAgICBpY29uOiA8TGluZUNoYXJ0T3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xyXG4iLCJpbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vX3JvdXRlcy5qc29uJ1xyXG5cclxuY29uc3QgY2hhclRvTnVtID0geyBDOiA4LCBSOiA0LCBVOiAyLCBEOiAxIH1cclxuY29uc3QgY3J1ZFRvRGVjID0gKHRleHQ6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5yZWR1Y2UoKHRvdGFsOiBudW1iZXIsIGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJykgPT4gdG90YWwgKyBjaGFyVG9OdW1bY2hhcl0sIDApXHJcblxyXG59XHJcbmNvbnN0IGRlY1RvQ3J1ZCA9IChkZWM6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnXHJcbiAgICBmb3IgKGNoYXIgaW4gY2hhclRvTnVtKSB7XHJcbiAgICAgICAgaWYgKChkZWMgJiBjaGFyVG9OdW1bY2hhcl0pID09IGNoYXJUb051bVtjaGFyXSkgcmVzdWx0ICs9IGNoYXJcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaGFzUGVybWlzc2lvbiA9IChyZXF1aXJlUGVybWlzc2lvbjogbnVtYmVyLCB1c2VyUGVybWlzc2lvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHVzZXJQZXJtaXNzaW9uICYgcmVxdWlyZVBlcm1pc3Npb24pID09PSByZXF1aXJlUGVybWlzc2lvblxyXG4gIH1cclxuXHJcbmNvbnN0IGNoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55LCB1c2VyUGVybWlzc2lvbnM6IGFueSwgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmKCFwZXJtaXNzaW9ucykgcmV0dXJuIHRydWVcclxuICAgIGxldCBwZXJtaXNzaW9uQXJyYXkgPSBbXVxyXG4gICAgZm9yIChsZXQgcGVybWlzc2lvbiBpbiBwZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVQZXJtaXNzaW9uID0gY3J1ZFRvRGVjKHBlcm1pc3Npb25zW3Blcm1pc3Npb25dKTtcclxuICAgICAgICBjb25zdCByb290UGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1tcInJvb3RcIl0gfHwgMFxyXG4gICAgICAgIGxldCB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1twZXJtaXNzaW9uXSB8fCAwXHJcbiAgICAgICAgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbiB8IHJvb3RQZXJtaXNzaW9uXHJcbiAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24ocmVxdWlyZVBlcm1pc3Npb24sIHVzZXJQZXJtaXNzaW9uKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBwZXJtaXNzaW9uQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24sXHJcbiAgICAgICAgICAgIHJlcXVpcmVQZXJtaXNzaW9uOiBkZWNUb0NydWQocmVxdWlyZVBlcm1pc3Npb24pLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbjogZGVjVG9DcnVkKHVzZXJQZXJtaXNzaW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoIXNob3dFcnJvcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbkFycmF5XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2hlY2tQZXJtaXNzaW9uLFxyXG4gICAgaGFzUGVybWlzc2lvbixcclxuICAgIGNydWRUb0RlYyxcclxuICAgIGRlY1RvQ3J1ZFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdhaXQtdG8tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1wYXR0ZXJuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=