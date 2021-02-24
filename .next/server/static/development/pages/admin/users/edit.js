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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

/***/ "./pages/admin/users/edit.tsx":
/*!************************************!*\
  !*** ./pages/admin/users/edit.tsx ***!
  \************************************/
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
/* harmony import */ var themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/UserService */ "./themes/services/api/UserService.ts");
/* harmony import */ var themes_services_api_UserGroupService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! themes/services/api/UserGroupService */ "./themes/services/api/UserGroupService.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













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
  groups,
  user,
  userError
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
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [form] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();
  const userService = new themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const deletePer = checkPermission({
    "admin.users": "D"
  });

  const DisplayError = err => {
    return notify(t(`errors:${err.code}`), t(err.message), 'error');
  }; //submit form


  const onFinish = async values => {
    if (userError) {
      return DisplayError(userError);
    }

    setLoading(true);

    let {
      rePassword
    } = values,
        otherValues = _objectWithoutProperties(values, ["rePassword"]);

    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(userService.edit(_objectSpread({
      id: user.id
    }, otherValues)));
    setLoading(false);

    if (error) {
      return DisplayError(error);
    }

    notify(t("message.recordUpdated"));
    redirect("frontend.admin.users.index");
  };

  const onDelete = async () => {
    if (userError) {
      return DisplayError(userError);
    }

    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(userService.delete({
      ids: [user.id]
    }));

    if (error) {
      return DisplayError(error);
    }

    notify(t('message.recordDeleted'));
    redirect("frontend.admin.users.index");
  };

  const onChangePassword = async data => {
    setModalVisible(false);

    if (userError) {
      return DisplayError(userError);
    }

    let values = {
      id: user.id,
      password: data.password
    };
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(userService.updatePassword(values));

    if (error) {
      return DisplayError(error);
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
  }); //render option


  const renderOption = () => {
    let result = [];
    groups.map(item => {
      result.push(__jsx(Option, {
        value: item.id,
        key: item.id
      }, item.name));
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

  const renderChangePassModal = () => {
    const [formChangePassword2] = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].useForm();
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      form: formChangePassword2,
      name: "formChangePassword2",
      initialValues: {
        password: "",
        repassword: ""
      },
      onFinish: onChangePassword
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      closable: false,
      visible: modalVisible,
      onCancel: () => setModalVisible(false),
      onOk: () => {
        formChangePassword2.submit();
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
      placeholder: t("password"),
      type: "password",
      autoFocus: true
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
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
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
      placeholder: t("rePassword")
    }))));
  };

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disabledSearch: true
  }, __jsx("div", {
    className: "content"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], _extends({}, formItemLayout, {
    form: form,
    name: "createUser",
    initialValues: {
      code: user.code,
      fullname: user.fullname,
      position: user.position,
      birthday: user.birthday ? moment__WEBPACK_IMPORTED_MODULE_11___default()(user.birthday).subtract(7, 'h') : "",
      gender: user.gender,
      address: user.address,
      cardId: user.cardId,
      email: user.email,
      phone: user.phone,
      username: user.username,
      groupId: user.groupId
    },
    onFinish: onFinish,
    scrollToFirstError: true
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("code"),
    name: "code",
    rules: [{
      required: true,
      message: t('form.required'),
      whitespace: false
    }, {
      max: 8,
      message: t('form.maxLength', {
        length: 8
      })
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("fullname"),
    name: "fullname",
    rules: [{
      required: true,
      message: t('form.required')
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("position"),
    name: "position",
    rules: [{
      required: true,
      message: t('form.required')
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("userGroup"),
    name: "groupId" // rules={[
    //   { required: true, message: t('form.required') },
    // ]}

  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    showSearch: true,
    placeholder: t('placeholder.group'),
    filterOption: (input, option) => {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, renderOption())), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("username"),
    name: "username" // rules={[
    //   { required: true, message: t('form.required'), whitespace: true },
    //   { max: 15, message: t('form.maxLength', { length: 15 }) }
    // ]}

  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("birthday"),
    name: "birthday"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
    format: 'YYYY-MM-DD',
    placeholder: t('placeholder.date'),
    showTime: false
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("gender"),
    name: "gender"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: 0,
    key: 0
  }, t("male")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    value: 1,
    key: 1
  }, t("female")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("address"),
    name: "address"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("cardId"),
    name: "cardId",
    rules: [{
      pattern: /^[0-9]+$/g,
      message: t('form.number')
    }, {
      max: 12,
      message: t('form.maxLength', {
        length: 12
      })
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("email"),
    name: "email",
    rules: [{
      type: 'email',
      message: t('form.email')
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: t("phone"),
    name: "phone",
    rules: [{
      pattern: /^[0-9]+$/g,
      message: t('form.number')
    }, {
      max: 12,
      message: t('form.maxLength', {
        length: 12
      })
    }]
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    wrapperCol: {
      span: 24
    },
    style: {
      textAlign: "center"
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => redirect("frontend.admin.users.index"),
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
    onClick: () => {
      setModalVisible(true);
    },
    style: {
      marginRight: 8
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["CopyFilled"], null), " ", t('changePassword')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    hidden: !deletePer,
    danger: true,
    onClick: () => {
      if (confirmRef.current) confirmRef.current.show(user.id);
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteFilled"], null), " ", t('deleteItem')))), renderDeleteDialog(), renderChangePassModal()));
};

Edit.getInitialProps = async ctx => {
  const userGroupService = new themes_services_api_UserGroupService__WEBPACK_IMPORTED_MODULE_5__["default"](ctx);
  const userService = new themes_services_api_UserService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  const query = ctx.query;
  let error;

  if (!query.id) {
    //error missing id
    error = {
      code: 9996,
      message: 'missing ID'
    };
  }

  let [userError, user] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(userService.detail({
    id: query.id
  }));
  if (userError) user = {};
  const [errorGroup, groups] = await await_to_js__WEBPACK_IMPORTED_MODULE_7___default()(userGroupService.index({
    pageSize: -1
  }));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    user: user,
    userError: userError,
    groups: lodash__WEBPACK_IMPORTED_MODULE_6___default.a.get(groups, "data", [])
  };
};

Edit.permissions = {
  "admin.users": "U"
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

/***/ "./themes/services/api/UserGroupService.ts":
/*!*************************************************!*\
  !*** ./themes/services/api/UserGroupService.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class UserGroups extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'userGroups'; //kế thừa CRUD từ thằng cha
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserGroups);

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

/***/ 17:
/*!******************************************!*\
  !*** multi ./pages/admin/users/edit.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\users\edit.tsx */"./pages/admin/users/edit.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vdXNlcnMvZWRpdC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2sudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL0FkbWluLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL01lbnUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvSTE4bi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3RFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmFzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyR3JvdXBTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3V0aWxzL1Blcm1pc3Npb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdhaXQtdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJPcHRpb24iLCJTZWxlY3QiLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwic20iLCJ3cmFwcGVyQ29sIiwiRWRpdCIsInVzZXIiLCJ1c2VyRXJyb3IiLCJ0IiwicmVkaXJlY3QiLCJzZXRTdG9yZSIsImdldEF1dGgiLCJnZXRTdG9yZSIsInVzZUJhc2VIb29rIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsIm1vZGFsVmlzaWJsZSIsInNldE1vZGFsVmlzaWJsZSIsImZvcm0iLCJGb3JtIiwidXNlRm9ybSIsInVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwiY2hlY2tQZXJtaXNzaW9uIiwidXNlUGVybWlzc2lvbkhvb2siLCJkZWxldGVQZXIiLCJEaXNwbGF5RXJyb3IiLCJjb2RlIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJyZVBhc3N3b3JkIiwib3RoZXJWYWx1ZXMiLCJ0byIsImVkaXQiLCJpZCIsIm9uRGVsZXRlIiwiZGVsZXRlIiwiaWRzIiwib25DaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwidXBkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0b3JQYXNzd29yZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVuZGVyT3B0aW9uIiwibWFwIiwiaXRlbSIsInJlbmRlckRlbGV0ZURpYWxvZyIsInJlbmRlckNoYW5nZVBhc3NNb2RhbCIsImZvcm1DaGFuZ2VQYXNzd29yZDIiLCJyZXBhc3N3b3JkIiwic3VibWl0IiwicmVxdWlyZWQiLCJmdWxsbmFtZSIsInBvc2l0aW9uIiwiYmlydGhkYXkiLCJtb21lbnQiLCJzdWJ0cmFjdCIsImdlbmRlciIsImFkZHJlc3MiLCJjYXJkSWQiLCJlbWFpbCIsInBob25lIiwidXNlcm5hbWUiLCJncm91cElkIiwid2hpdGVzcGFjZSIsIm1heCIsImxlbmd0aCIsImlucHV0Iiwib3B0aW9uIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGF0dGVybiIsInR5cGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsImN1cnJlbnQiLCJzaG93IiwidXNlckdyb3VwU2VydmljZSIsIlVzZXJHcm91cFNlcnZpY2UiLCJkZXRhaWwiLCJlcnJvckdyb3VwIiwiaW5kZXgiLCJwYWdlU2l6ZSIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIl8iLCJwZXJtaXNzaW9ucyIsImJyZWFkQ3J1bWJDb21wb25lbnQiLCJsYW5nIiwiZ2V0Um91dGVOYW1lIiwicm91dGVQYXRoIiwicm91dGVEYXRhIiwiX3JvdXRlcyIsInJvdXRlTmFtZSIsInJvdXRlRWxlbWVudCIsImFjdGlvbiIsInN1YnN0ciIsImJyZWFkQ3VtYnMiLCJyb3V0ZXMiLCJnZXRCcmVhZGNydW1icyIsInVuc2hpZnQiLCJsaW5rUHJvcHMiLCJtYWtlVXJsIiwiY29uZmlybSIsIk1vZGFsIiwiQ29uZmlybURpYWxvZyIsIm9uQ2FuY2VsIiwic3RhdGUiLCJvblN1Ym1pdCIsInRpdGxlIiwiY29udGVudCIsInNldFN0YXRlIiwib25PayIsInJlZHVjZXIiLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiaW5pdFN0YXRlIiwiZGV2VG9vbEV4dGVuc2lvbnMiLCJpc1NlcnZlciIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ1bmRlZmluZWQiLCJjcmVhdGVTdG9yZSIsInVzZUJhc2VIb29rcyIsInVzZVJvdXRlciIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRTdG9yZUFjdGlvbiIsInVzZVNlbGVjdG9yIiwibmV4dFJvdXRlIiwiZ2V0RGF0YSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwibm90aWZpY2F0aW9uIiwiZHVyYXRpb24iLCJhdXRoIiwiZ2V0Q29va2llcyIsImNvb2tpZXMiLCJnZXRQdWJsaWNSdW50aW1lQ29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIlBlcm1pc3Npb25Ib29rIiwidXNlclBlcm1pc3Npb25zIiwiZ2V0VXNlclBlcm1pc3Npb24iLCJfY2hlY2tQZXJtaXNzaW9uIiwiVEhFTUUiLCJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsIkFkbWluIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9uQ29sbGFwc2VDaGFuZ2UiLCJsb2ciLCJ1cGRhdGVTaXplIiwibW9iaWxlIiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0lURV9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxPR08iLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZGlzYWJsZWRTZWFyY2giLCJ5ZWFyIiwicXVlcnlTZWxlY3RvciIsIkhlYWRlciIsIlN1Yk1lbnUiLCJNZW51IiwiU2VhcmNoIiwiSW5wdXQiLCJBZG1pbkhlYWRlciIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJjb29raWVPYmplY3QiLCJoYW5kbGVDbGlja01lbnUiLCJyZWRpcmVjdExvZ2luIiwiQ29va2llcyIsInJlbW92ZSIsInRva2VuIiwib3B0aW9uc1BhdGllbnRzIiwib3B0aW9uc0JlZHMiLCJvcHRpb25zVXNlcnMiLCJvbkNoYW5nZVNlYXJjaCIsImZpbHRlclBhdGllbnRzIiwiZmlsdGVycyIsIm9wZXJhdG9yIiwic29ydGluZyIsImZpbHRlckJlZHMiLCJmaWx0ZXJVc2VycyIsImVyclVzZXJzIiwiZGF0YVVzZXJzIiwiZXJyUGF0aWVudHMiLCJkYXRhUGF0aWVudHMiLCJlcnJCZWRzIiwiZGF0YUJlZHMiLCJvbkJsdXJTZWFyY2giLCJyZW5kZXJDb25maXJtRGlhbG9nIiwib2xkUGFzc3dvcmQiLCJ1c2VyVXBkYXRlUGFzc3dvcmQiLCJmb3JtQ2hhbmdlUGFzc3dvcmQiLCJyZW5kZXJSaWdodENvbnRlbnQiLCJtZW51SWNvblByb3BzIiwiY2xhc3NOYW1lIiwiaGVhZGVyQ2xhc3MiLCJhY2NvdW50UG9wdXAiLCJ3aWR0aCIsInJlbmRlclRpdGxlIiwicmVuZGVySXRlbSIsImxpbmsiLCJsYWJlbCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsb2F0Iiwicm9vbUNvZGUiLCJiZWRJZCIsInJlbmRlclNlYXJjaCIsImNvbG9yIiwiTWVudUNvbXBvbmVudCIsImdlbmVyYXRlTWVudXMiLCJpY29uIiwiZmlsdGVyIiwibWVudSIsInRoZW1lIiwidFJlYWR5Iiwib3RoZXJQcm9wcyIsImN1cnJlbnRSb3V0ZU5hbWUiLCJicmVhZGN1bXMiLCJnZXRTaWRlYmFyU2VsZWN0ZWRzIiwicm91dGVyTmFtZXMiLCJicmVhZGN1bSIsInNlbGVjdGVkS2V5cyIsInBvcCIsInNpZGViYXIiLCJudW1Gb3JtYXR0ZXIiLCJudW0iLCJ0b0ZpeGVkIiwiUHJvZmlsZSIsInByb2ZpbGVJbmZvIiwiY29tcGFueUxvZ28iLCJncm91cE5hbWUiLCJ1c2VyRnVsbG5hbWUiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwidG9kYXkiLCJTaWRlciIsInNpZGVCYXIiLCJkZWZhdWx0Q29va2llIiwiTmV4dEkxOE5leHQiLCJkZWZhdWx0IiwiZ2V0Q29uZmlnIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsImRlZmF1bHROUyIsImRlZmF1bHRMYW5ndWFnZSIsIkxBTkciLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVBhdGgiLCJicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiY29va2llc1N0cmluZyIsImhhbmRsZUdsb2JhbENhbGxiYWNrIiwiaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVHbG9iYWwiLCJiaW5kIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicG9zdCIsInB1dCIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwicm91dGVDb25maWciLCJFcnJvciIsInN0cmluZ2lmeSIsImFzVXJsIiwiYWRkUXVlcnkiLCJsb2NhdGlvbiIsIm9sZFF1ZXJ5IiwicXVlcnlPYmoiLCJKU09OIiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInBhcmVudCIsIkJhc2VBcGkiLCJjb250ZXh0Iiwic3RhdHVzIiwiY29va2llc09iaiIsIm5leHRDb29raWUiLCJnbG9iYWxIYW5kbGVDYWxsYmFjayIsImdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2siLCJjcmVhdGUiLCJCZWQiLCJQYXRpZW50IiwiVXNlckdyb3VwcyIsIlVzZXIiLCJsb2dpbiIsInNlYXJjaCIsInJvdXRlUGFyYW1zIiwiY2hhclRvTnVtIiwiQyIsIlIiLCJVIiwiRCIsImNydWRUb0RlYyIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwicmVkdWNlIiwidG90YWwiLCJjaGFyIiwiZGVjVG9DcnVkIiwiZGVjIiwiaGFzUGVybWlzc2lvbiIsInJlcXVpcmVQZXJtaXNzaW9uIiwidXNlclBlcm1pc3Npb24iLCJzaG93RXJyb3IiLCJwZXJtaXNzaW9uQXJyYXkiLCJwZXJtaXNzaW9uIiwicm9vdFBlcm1pc3Npb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFkbWluXFx1c2Vyc1xcZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICd0aGVtZXMvbGF5b3V0cy9BZG1pbidcclxuaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCwgRm9ybSwgSW5wdXQsIFNlbGVjdCwgTW9kYWwsIFJhZGlvLCBEYXRlUGlja2VyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICd0aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IFVzZXJHcm91cFNlcnZpY2UgZnJvbSAndGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyR3JvdXBTZXJ2aWNlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHRvIGZyb20gJ2F3YWl0LXRvLWpzJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHsgRGVsZXRlRmlsbGVkLCBTYXZlRmlsbGVkLCBMZWZ0Q2lyY2xlRmlsbGVkLCBDb3B5RmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgdXNlUGVybWlzc2lvbkhvb2sgZnJvbSBcInRoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9va1wiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcclxuXHJcbmNvbnN0IGZvcm1JdGVtTGF5b3V0ID0ge1xyXG4gIGxhYmVsQ29sOiB7XHJcbiAgICB4czogeyBzcGFuOiAyNCB9LFxyXG4gICAgc206IHsgc3BhbjogNCB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlckNvbDoge1xyXG4gICAgeHM6IHsgc3BhbjogMjQgfSxcclxuICAgIHNtOiB7IHNwYW46IDE4IH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IEVkaXQgPSAoeyBncm91cHMsIHVzZXIsIHVzZXJFcnJvciB9OiB7IGdyb3VwczogVXNlckdyb3VwW10sIHVzZXI6IFVzZXIsIHVzZXJFcnJvcjphbnkgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdCwgbm90aWZ5LCByZWRpcmVjdCwgc2V0U3RvcmUsIGdldEF1dGgsIGdldFN0b3JlIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBSZWFjdC5jcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG5cclxuICBjb25zdCB7IGNoZWNrUGVybWlzc2lvbiB9ID0gdXNlUGVybWlzc2lvbkhvb2soKTtcclxuICBjb25zdCBkZWxldGVQZXIgPSBjaGVja1Blcm1pc3Npb24oe1xyXG4gICAgXCJhZG1pbi51c2Vyc1wiOiBcIkRcIlxyXG4gIH0pXHJcbiAgY29uc3QgRGlzcGxheUVycm9yID0gKGVycjogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vyci5jb2RlfWApLCB0KGVyci5tZXNzYWdlKSwgJ2Vycm9yJylcclxuICB9XHJcblxyXG4gIC8vc3VibWl0IGZvcm1cclxuICBjb25zdCBvbkZpbmlzaCA9IGFzeW5jICh2YWx1ZXM6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgaWYodXNlckVycm9yKSB7IHJldHVybiBEaXNwbGF5RXJyb3IodXNlckVycm9yKSB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBsZXQgeyByZVBhc3N3b3JkLCAuLi5vdGhlclZhbHVlcyB9ID0gdmFsdWVzO1xyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS5lZGl0KHtcclxuICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgIC4uLm90aGVyVmFsdWVzXHJcbiAgICB9KSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgIGlmIChlcnJvcikgeyByZXR1cm4gRGlzcGxheUVycm9yKGVycm9yKSB9XHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkVXBkYXRlZFwiKSlcclxuICAgIHJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4udXNlcnMuaW5kZXhcIilcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgaWYodXNlckVycm9yKSB7IHJldHVybiBEaXNwbGF5RXJyb3IodXNlckVycm9yKSB9XHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLmRlbGV0ZSh7IGlkczogW3VzZXIuaWRdIH0pKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIERpc3BsYXlFcnJvcihlcnJvcikgfVxyXG4gICAgbm90aWZ5KHQoJ21lc3NhZ2UucmVjb3JkRGVsZXRlZCcpKVxyXG4gICAgcmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiKVxyXG4gIH1cclxuICBcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gYXN5bmMgKGRhdGE6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKVxyXG4gICAgaWYodXNlckVycm9yKSB7IHJldHVybiBEaXNwbGF5RXJyb3IodXNlckVycm9yKSB9XHJcbiAgICBsZXQgdmFsdWVzID0geyBpZDogdXNlci5pZCwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfVxyXG5cclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UudXBkYXRlUGFzc3dvcmQodmFsdWVzKSk7XHJcbiAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIERpc3BsYXlFcnJvcihlcnJvcikgfVxyXG5cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmRVcGRhdGVkXCIpKVxyXG4gIH1cclxuXHJcbiAgLy92YWxpZGF0ZSBpbnB1dCBwYXNzd29yZFxyXG4gIGNvbnN0IHZhbGlkYXRvclBhc3N3b3JkID0gKHsgZ2V0RmllbGRWYWx1ZSB9OiB7IGdldEZpZWxkVmFsdWU6IEZ1bmN0aW9uIH0pID0+ICh7XHJcbiAgICB2YWxpZGF0b3I6IChydWxlOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnZm9ybS5yZVBhc3N3b3JkJykpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vcmVuZGVyIG9wdGlvblxyXG4gIGNvbnN0IHJlbmRlck9wdGlvbiA9ICgpOiBKU1guRWxlbWVudFtdID0+IHtcclxuICAgIGxldCByZXN1bHQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGdyb3Vwcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKFxyXG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2l0ZW0uaWR9IGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L09wdGlvbj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGNvbnN0IHJlbmRlckRlbGV0ZURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtvbkRlbGV0ZX1cclxuICAgICAgICB0aXRsZT17dCgnZGVsZXRlSXRlbScpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2UuZGVsZXRlQ29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyQ2hhbmdlUGFzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1DaGFuZ2VQYXNzd29yZDJdID0gRm9ybS51c2VGb3JtKClcclxuICAgIHJldHVybiAoPEZvcm0gZm9ybT17Zm9ybUNoYW5nZVBhc3N3b3JkMn0gbmFtZT1cImZvcm1DaGFuZ2VQYXNzd29yZDJcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25Paz17KCkgPT4geyBmb3JtQ2hhbmdlUGFzc3dvcmQyLnN1Ym1pdCgpOyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicmVwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yUGFzc3dvcmRcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExheW91dCBkaXNhYmxlZFNlYXJjaCA9IHt0cnVlfSA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPEZvcm1cclxuICAgICAgICB7Li4uZm9ybUl0ZW1MYXlvdXR9XHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBuYW1lPVwiY3JlYXRlVXNlclwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgY29kZTogdXNlci5jb2RlLFxyXG4gICAgICAgICAgZnVsbG5hbWU6IHVzZXIuZnVsbG5hbWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogdXNlci5wb3NpdGlvbixcclxuICAgICAgICAgIGJpcnRoZGF5OiB1c2VyLmJpcnRoZGF5ID8gbW9tZW50KHVzZXIuYmlydGhkYXkpLnN1YnRyYWN0KDcsJ2gnKSA6IFwiXCIsXHJcbiAgICAgICAgICBnZW5kZXI6IHVzZXIuZ2VuZGVyLFxyXG4gICAgICAgICAgYWRkcmVzczogdXNlci5hZGRyZXNzLFxyXG4gICAgICAgICAgY2FyZElkOiB1c2VyLmNhcmRJZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcGhvbmU6IHVzZXIucGhvbmUsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgIGdyb3VwSWQ6IHVzZXIuZ3JvdXBJZFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxyXG4gICAgICAgIHNjcm9sbFRvRmlyc3RFcnJvclxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJjb2RlXCIpfVxyXG4gICAgICAgICAgbmFtZT1cImNvZGVcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpLCB3aGl0ZXNwYWNlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICB7IG1heDogOCwgbWVzc2FnZTogdCgnZm9ybS5tYXhMZW5ndGgnLCB7IGxlbmd0aDogOCB9KSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcImZ1bGxuYW1lXCIpfVxyXG4gICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInBvc2l0aW9uXCIpfVxyXG4gICAgICAgICAgbmFtZT1cInBvc2l0aW9uXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJ1c2VyR3JvdXBcIil9XHJcbiAgICAgICAgICBuYW1lPVwiZ3JvdXBJZFwiXHJcbiAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgLy8gICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfSxcclxuICAgICAgICAgIC8vIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlbGVjdCBcclxuICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IHt0KCdwbGFjZWhvbGRlci5ncm91cCcpfVxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb249eyAoaW5wdXQ6IGFueSwgb3B0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLmNoaWxkcmVuLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+PSAwXHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyT3B0aW9uKCl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJ1c2VybmFtZVwiKX1cclxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAvLyBydWxlcz17W1xyXG4gICAgICAgICAgLy8gICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJyksIHdoaXRlc3BhY2U6IHRydWUgfSxcclxuICAgICAgICAgIC8vICAgeyBtYXg6IDE1LCBtZXNzYWdlOiB0KCdmb3JtLm1heExlbmd0aCcsIHsgbGVuZ3RoOiAxNSB9KSB9XHJcbiAgICAgICAgICAvLyBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcImJpcnRoZGF5XCIpfVxyXG4gICAgICAgICAgbmFtZT1cImJpcnRoZGF5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBmb3JtYXQ9eydZWVlZLU1NLUREJ30gcGxhY2Vob2xkZXI9e3QoJ3BsYWNlaG9sZGVyLmRhdGUnKX0gc2hvd1RpbWU9e2ZhbHNlfS8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwiZ2VuZGVyXCIpfVxyXG4gICAgICAgICAgbmFtZT1cImdlbmRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezB9IGtleT17MH0+e3QoXCJtYWxlXCIpfTwvUmFkaW8+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17MX0ga2V5PXsxfT57dChcImZlbWFsZVwiKX08L1JhZGlvPlxyXG4gICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJhZGRyZXNzXCIpfVxyXG4gICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcImNhcmRJZFwiKX1cclxuICAgICAgICAgIG5hbWU9XCJjYXJkSWRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyBwYXR0ZXJuOiAvXlswLTldKyQvZywgbWVzc2FnZTogdCgnZm9ybS5udW1iZXInKSB9LFxyXG4gICAgICAgICAgICB7IG1heDogMTIsIG1lc3NhZ2U6IHQoJ2Zvcm0ubWF4TGVuZ3RoJywgeyBsZW5ndGg6IDEyIH0pIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwiZW1haWxcIil9XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyB0eXBlOiAnZW1haWwnLCBtZXNzYWdlOiB0KCdmb3JtLmVtYWlsJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJwaG9uZVwiKX1cclxuICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHBhdHRlcm46IC9eWzAtOV0rJC9nLCBtZXNzYWdlOiB0KCdmb3JtLm51bWJlcicpIH0sXHJcbiAgICAgICAgICAgIHsgbWF4OiAxMiwgbWVzc2FnZTogdCgnZm9ybS5tYXhMZW5ndGgnLCB7IGxlbmd0aDogMTIgfSkgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSB3cmFwcGVyQ29sPXt7IHNwYW46IDI0IH19IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiKX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDggfX0+XHJcbiAgICAgICAgICAgIDxMZWZ0Q2lyY2xlRmlsbGVkIC8+IHt0KCdjYW5jZWwnKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvYWRpbmd9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4IH19PlxyXG4gICAgICAgICAgICA8U2F2ZUZpbGxlZCAvPiB7dCgnc3VibWl0Jyl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBzZXRNb2RhbFZpc2libGUodHJ1ZSkgfX0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDggfX0+XHJcbiAgICAgICAgICAgIDxDb3B5RmlsbGVkIC8+IHt0KCdjaGFuZ2VQYXNzd29yZCcpfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCdXR0b24gaGlkZGVuPXshZGVsZXRlUGVyfSBkYW5nZXIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdyh1c2VyLmlkKSB9fT5cclxuICAgICAgICAgICAgPERlbGV0ZUZpbGxlZCAvPiB7dCgnZGVsZXRlSXRlbScpfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIHtyZW5kZXJEZWxldGVEaWFsb2coKX1cclxuICAgICAge3JlbmRlckNoYW5nZVBhc3NNb2RhbCgpfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkVkaXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgY29uc3QgdXNlckdyb3VwU2VydmljZSA9IG5ldyBVc2VyR3JvdXBTZXJ2aWNlKGN0eClcclxuICBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZShjdHgpXHJcbiAgY29uc3QgcXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgbGV0IGVycm9yOiBhbnk7XHJcblxyXG4gIGlmICghcXVlcnkuaWQpIHtcclxuICAgIC8vZXJyb3IgbWlzc2luZyBpZFxyXG4gICAgZXJyb3IgPSB7XHJcbiAgICAgIGNvZGU6IDk5OTYsXHJcbiAgICAgIG1lc3NhZ2U6ICdtaXNzaW5nIElEJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IFt1c2VyRXJyb3IsIHVzZXJdID0gYXdhaXQgdG8odXNlclNlcnZpY2UuZGV0YWlsKHsgaWQ6IHF1ZXJ5LmlkIH0pKTtcclxuICBpZiAodXNlckVycm9yKSB1c2VyID0ge31cclxuICBjb25zdCBbZXJyb3JHcm91cCwgZ3JvdXBzXSA9IGF3YWl0IHRvKHVzZXJHcm91cFNlcnZpY2UuaW5kZXgoeyBwYWdlU2l6ZTogLTEgfSkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnLCdlcnJvcnMnXSxcclxuICAgIGVycm9yOiBlcnJvcixcclxuICAgIHVzZXI6IHVzZXIsXHJcbiAgICB1c2VyRXJyb3I6IHVzZXJFcnJvcixcclxuICAgIGdyb3VwczogXy5nZXQoZ3JvdXBzLCBcImRhdGFcIiwgW10pLFxyXG4gIH1cclxufVxyXG5FZGl0LnBlcm1pc3Npb25zID0ge1xyXG4gIFwiYWRtaW4udXNlcnNcIjogXCJVXCJcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRWRpdCIsImltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7IGdldEJyZWFkY3J1bWJzLCByb3V0ZSBhcyBtYWtlVXJsIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuaW50ZXJmYWNlIFJvdXRlIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgYnJlYWRDcnVtYkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gICAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgICAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGJyZWFkQ3VtYnMgPSBbXVxyXG4gICAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICAgIGxldCByb3V0ZXM6IFJvdXRlW10gPSBnZXRCcmVhZGNydW1icyhyb3V0ZU5hbWUpXHJcbiAgICBpZiAocm91dGVzWzBdICYmIHJvdXRlc1swXS5uYW1lICE9IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiKSB7XHJcbiAgICAgICAgcm91dGVzLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZnJvbnRlbmQuYWRtaW4uaG9tZScsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSBtYWtlVXJsKHJvdXRlLm5hbWUpXHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayB7Li4ubGlua1Byb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57IHJvdXRlLm5hbWUgPT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIgPyA8SG9tZUZpbGxlZCAvPiA6IHQocm91dGUubmFtZSkgfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7dChyb3V0ZS5uYW1lKX1cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJyZWFkY3J1bWI+e2JyZWFkQ3VtYnN9PC9CcmVhZGNydW1iPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWRDcnVtYkNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5jbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2hvdyhkYXRhID0gbnVsbCkge1xyXG4gICAgbGV0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgXCJUaXRsZVwiXHJcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIkNvbnRlbnRcIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgb25PazogdGhpcy5vblN1Ym1pdCxcclxuICAgICAgb25DYW5jZWw6IHRoaXMub25DYW5jZWwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKHR5cGVvZiBvbkNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIG9uQ2FuY2VsKHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0eXBlb2Ygb25TdWJtaXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBhd2FpdCBvblN1Ym1pdCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EaWFsb2c7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIGlmKGFjdGlvbi50eXBlID09PSBcInNldFN0b3JlXCIpe1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfVxyXG4gICAgXy5zZXQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnBhdGgsIGFjdGlvbi5wYXlsb2FkLnZhbHVlKVxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG4vKiBjb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzdG9yZTogc3RvcmVSZWR1Y2VyXHJcbn0pICovXHJcblxyXG5jb25zdCBzZXRTdG9yZSA9IChwYXRoLCB2YWx1ZSkgPT4gKHtcclxuICB0eXBlOiAnc2V0U3RvcmUnLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHBhdGgsXHJcbiAgICB2YWx1ZVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoaW5pdFN0YXRlID0ge30sIG9wdGlvbnMpID0+IHtcclxuICBsZXQgZGV2VG9vbEV4dGVuc2lvbnMgPSAoIW9wdGlvbnMuaXNTZXJ2ZXIgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18pID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSA6IHVuZGVmaW5lZFxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0U3RhdGUsIGRldlRvb2xFeHRlbnNpb25zKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgbWFrZVN0b3JlLFxyXG4gIHNldFN0b3JlXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAndGhlbWVzL21vZHVsZXMvSTE4bidcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFN0b3JlIGFzIHNldFN0b3JlQWN0aW9uIH0gZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvU3RvcmUnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCdcclxuaW50ZXJmYWNlIEJhc2VCb29rIHtcclxuICAgIHVzZVNlbGVjdG9yOiBGdW5jdGlvbixcclxuICAgIHJvdXRlcjogYW55LFxyXG4gICAgdDogRnVuY3Rpb24sXHJcbiAgICBzZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICBnZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICByZWRpcmVjdDogRnVuY3Rpb24sXHJcbiAgICBnZXREYXRhOiBGdW5jdGlvbixcclxuICAgIG5vdGlmeTogRnVuY3Rpb24sXHJcbiAgICBnZXRBdXRoOiBGdW5jdGlvblxyXG4gICAgZ2V0Q29va2llczogRnVuY3Rpb24sXHJcbiAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnOiBGdW5jdGlvblxyXG59XHJcbmNvbnN0IHVzZUJhc2VIb29rcyA9ICAoeyBsYW5nID0gWydjb21tb24nLCAncGFnZXMnLCAnZXJyb3JzJ10sfSA6IHsgbGFuZz86IHN0cmluZ1tdLCB9ID0ge30pOiBCYXNlQm9vayA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgSTE4biA9IHVzZVRyYW5zbGF0aW9uKGxhbmcpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgc2V0U3RvcmUgPSBhc3luYyAocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0U3RvcmVBY3Rpb24ocGF0aCwgdmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0b3JlID0gKHBhdGg6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBfLmdldChzdGF0ZSwgcGF0aCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSAocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcsIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBuZXh0Um91dGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogcm91dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgYXM6IHJvdXRlTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzLCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RpZnkgPSAobWVzc2FnZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nID0gJycsIHR5cGU6IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgPSBcInN1Y2Nlc3NcIik6IHZvaWQgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVyYXRpb246IDQgLy9zZWNvbmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRBdXRoID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29va2llcyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29va2llcylcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFB1YmxpY1J1bnRpbWVDb25maWcgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnB1YmxpY1J1bnRpbWVDb25maWcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VTZWxlY3RvcixcclxuICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgdDogSTE4bi50LFxyXG4gICAgICAgIHNldFN0b3JlLFxyXG4gICAgICAgIGdldFN0b3JlLFxyXG4gICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgIGdldERhdGEsXHJcbiAgICAgICAgbm90aWZ5LFxyXG4gICAgICAgIGdldEF1dGgsXHJcbiAgICAgICAgZ2V0Q29va2llcyxcclxuICAgICAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnXHJcbiAgICB9O1xyXG59XHJcblxyXG51c2VCYXNlSG9va3MuZ2V0RGF0YSA9ICAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUJhc2VIb29rcyIsImltcG9ydCB1c2VCYXNlSG9vayBmcm9tICcuL0Jhc2VIb29rcydcclxuaW1wb3J0IHtjaGVja1Blcm1pc3Npb259IGZyb20gJy4uL3V0aWxzL1Blcm1pc3Npb24nXHJcblxyXG4gIFxyXG5jb25zdCBQZXJtaXNzaW9uSG9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0QXV0aCB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fVxyXG4gICAgY29uc3QgdXNlclBlcm1pc3Npb25zID0gYXV0aC5wZXJtaXNzaW9ucyB8fCB7fVxyXG5cclxuICAgIGNvbnN0IGdldFVzZXJQZXJtaXNzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyUGVybWlzc2lvbnNcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgX2NoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9ucywgdXNlclBlcm1pc3Npb25zKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRVc2VyUGVybWlzc2lvbixcclxuICAgICAgICBjaGVja1Blcm1pc3Npb246IF9jaGVja1Blcm1pc3Npb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbkhvb2siLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQsIERyYXdlciwgQmFja1RvcCwgUm93LCBDb2wsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vYWRtaW4vU2lkZWJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2FkbWluL0hlYWRlclwiO1xyXG5jb25zdCBUSEVNRSA9IFwibGlnaHRcIjtcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcInRoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYlwiO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB1c2VCYXNlSG9va3MgZnJvbSBcInRoZW1lcy9ob29rcy9CYXNlSG9va3NcIjtcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSBcInRoZW1lcy9fcm91dGVzLmpzb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBBZG1pbiA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpO1xyXG5cclxuICBjb25zdCBvbkNvbGxhcHNlQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQodmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyO1xyXG4gICAgc2V0SXNNb2JpbGUobW9iaWxlKTtcclxuICAgIHNldENvbGxhcHNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gICAgdXBkYXRlU2l6ZSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzO1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV07XHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKCkgfHwgXCJcIjtcclxuICAvLyBjb25zb2xlLmxvZyhyb3V0ZU5hbWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cHVibGljUnVudGltZUNvbmZpZy5TSVRFX05BTUV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuVElUTEV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkRFU0NSSVBUSU9OfS8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099IC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm51cnNpbmctaG9tZS1pY29uXCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfT48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGlkPVwiYWRtaW5cIj5cclxuICAgICAgPExheW91dCBoYXNTaWRlcj17dHJ1ZX0+XHJcbiAgICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGVcclxuICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXN0cm95T25DbG9zZT17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gb25Db2xsYXBzZUNoYW5nZShmYWxzZSl9XHJcbiAgICAgICAgICAgIHZpc2libGU9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicHJpbWFyeUxheW91dFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0ICR7Y29sbGFwc2VkID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9IGRpc2FibGVkU2VhcmNoPXtwcm9wcy5kaXNhYmxlZFNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWJzXCI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0udGl0bGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS5kZXNjcmlwdGlvbmBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZENydW1iIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPsKpIHttb21lbnQoKS55ZWFyKCl9IEhhY3RlY2g8L0Zvb3Rlcj5cclxuICAgICAgICAgIDxCYWNrVG9wXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJiYWNrVG9wXCJ9XHJcbiAgICAgICAgICAgIHRhcmdldD17KCkgPT5cclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW1hcnlMYXlvdXRcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuKX07XHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIGNyZWF0ZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgTGF5b3V0LCBBdmF0YXIsIEJ1dHRvbiwgSW5wdXQsIFBvcG92ZXIsIFJvdywgQ29sLCBBdXRvQ29tcGxldGUsIEZvcm0sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCwgTWVudUZvbGRPdXRsaW5lZCwgUG93ZXJvZmZPdXRsaW5lZCwgXHJcbiAgU2V0dGluZ0ZpbGxlZCwgVXNlck91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2VcIlxyXG5pbXBvcnQgUGF0aWVudFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlXCJcclxuaW1wb3J0IEJlZFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2VcIlxyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuaW1wb3J0IHRvIGZyb20gJ2F3YWl0LXRvLWpzJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuY29uc3QgQWRtaW5IZWFkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdCwgbm90aWZ5LCByZWRpcmVjdCwgc2V0U3RvcmUsIGdldEF1dGgsIGdldFN0b3JlLCBnZXRDb29raWVzLCBnZXREYXRhICB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpXHJcbiAgY29uc3QgcGF0aWVudFNlcnZpY2UgPSBuZXcgUGF0aWVudFNlcnZpY2UoKVxyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZSgpXHJcbiAgY29uc3QgW3BhdGllbnRzLCBzZXRQYXRpZW50c10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYmVkcywgc2V0QmVkc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gY2hhbmdlIHBhc3N3b3JkXHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fTtcclxuICBjb25zdCBjb29raWVPYmplY3QgPSBnZXRDb29raWVzKClcclxuICBjb25zdCBjb25maXJtUmVmID0gY3JlYXRlUmVmPENvbmZpcm1EaWFsb2c+KClcclxuICBjb25zdCBoYW5kbGVDbGlja01lbnUgPSAoZTogYW55KSA9PiB7IH1cclxuICBjb25zdCByZWRpcmVjdExvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvb2tpZU9iamVjdClcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJy8nfSlcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd1c2VyJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvb2tpZU9iamVjdC50b2tlbiB8fCAhY29va2llT2JqZWN0LnVzZXIpIHtcclxuICAgICAgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBcclxuICBsZXQgb3B0aW9uc1BhdGllbnRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zQmVkczogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc1VzZXJzOiBhbnkgPSBbXVxyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VhcmNoID0gYXN5bmMgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGxldCBmaWx0ZXJQYXRpZW50cyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJCZWRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcInJvb21Db2RlXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlclVzZXJzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IFtlcnJVc2VycywgdXNlcnNdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLmluZGV4KGZpbHRlclVzZXJzKSlcclxuICAgIGxldCBkYXRhVXNlcnMgPSBfLmdldCh1c2VycywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVVzZXJzLmxlbmd0aCl7XHJcbiAgICAgIHNldFVzZXJzKGRhdGFVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyclBhdGllbnRzLCBwYXRpZW50c106IGFueVtdID0gYXdhaXQgdG8ocGF0aWVudFNlcnZpY2UuaW5kZXgoZmlsdGVyUGF0aWVudHMpKVxyXG4gICAgbGV0IGRhdGFQYXRpZW50cyA9IF8uZ2V0KHBhdGllbnRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhUGF0aWVudHMubGVuZ3RoKXtcclxuICAgICAgc2V0UGF0aWVudHMoZGF0YVBhdGllbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyQmVkcywgYmVkc106IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5pbmRleChmaWx0ZXJCZWRzKSlcclxuICAgIGxldCBkYXRhQmVkcyA9IF8uZ2V0KGJlZHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFCZWRzLmxlbmd0aCl7XHJcbiAgICAgIHNldEJlZHMoZGF0YUJlZHMpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgY29uc3Qgb25CbHVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcnMoW10pXHJcbiAgICBzZXRCZWRzKFtdKVxyXG4gICAgc2V0UGF0aWVudHMoW10pXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHJlbmRlckNvbmZpcm1EaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17cmVkaXJlY3RMb2dpbn1cclxuICAgICAgICB0aXRsZT17dCgnc2lnbm91dCcpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2Uuc2lnbm91dENvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAoZGF0YTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKVxyXG4gICAgbGV0IHZhbHVlcyA9IHsgaWQ6IGF1dGguaWQsIG9sZFBhc3N3b3JkOiBkYXRhLm9sZFBhc3N3b3JkLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9XHJcblxyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS51c2VyVXBkYXRlUGFzc3dvcmQodmFsdWVzKSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5vdGlmeSh0KGBlcnJvcnM6JHtlcnJvci5jb2RlfWApLCB0KGVycm9yLm1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmRVcGRhdGVkXCIpKVxyXG4gIH1cclxuXHJcbiAgLy92YWxpZGF0ZSBpbnB1dCBwYXNzd29yZFxyXG4gIGNvbnN0IHZhbGlkYXRvclBhc3N3b3JkID0gKHsgZ2V0RmllbGRWYWx1ZSB9OiB7IGdldEZpZWxkVmFsdWU6IEZ1bmN0aW9uIH0pID0+ICh7XHJcbiAgICB2YWxpZGF0b3I6IChydWxlOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnZm9ybS5yZVBhc3N3b3JkJykpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlckNoYW5nZVBhc3NNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtQ2hhbmdlUGFzc3dvcmRdID0gRm9ybS51c2VGb3JtKClcclxuICAgIHJldHVybiAoPEZvcm0gZm9ybT17Zm9ybUNoYW5nZVBhc3N3b3JkfSBuYW1lPVwiZm9ybUNoYW5nZVBhc3N3b3JkXCJcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIG9sZFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uRmluaXNoPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHsgZm9ybUNoYW5nZVBhc3N3b3JkLnN1Ym1pdCgpOyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicmVwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yUGFzc3dvcmRcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJSaWdodENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8UG93ZXJvZmZPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdygpIH19PjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGljb249ezxTZXR0aW5nRmlsbGVkIHNwaW4gLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiICBvbkNsaWNrPXsoKSA9PiB7IHNldE1vZGFsVmlzaWJsZSh0cnVlKSB9fSA+PC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IG1lbnVJY29uUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwidHJpZ2dlclwiLFxyXG4gICAgb25DbGljazogKCkgPT4gb25Db2xsYXBzZUNoYW5nZSghY29sbGFwc2VkKVxyXG4gIH1cclxuICBsZXQgaGVhZGVyQ2xhc3MgPSBcImhlYWRlclwiXHJcbiAgaWYgKGNvbGxhcHNlZCkgaGVhZGVyQ2xhc3MgKz0gJyBjb2xsYXBzZWQnXHJcblxyXG4gIGNvbnN0IGFjY291bnRQb3B1cCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzgsIDhdfT5cclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17N30gbGc9ezd9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiXCJ9IHNpemU9ezEwMH0gc2hhcGU9XCJzcXVhcmVcIj5cclxuICAgICAgICAgICAgICAgIHthdXRoLmZ1bGxuYW1lfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIHsvKiA8QXZhdGFyIHNpemU9ezY0fSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD4gXHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezE3fSBsZz17MTd9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCd1c2VybmFtZScpfTwvYj46IDxpPnthdXRoLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxiPnt0KCdmdWxsbmFtZScpfTwvYj46IDxpPnthdXRoLmZ1bGxuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ2VtYWlsJyl9PC9iPjogPGk+e2F1dGguZW1haWwgPyBhdXRoLmVtYWlsIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdwaG9uZScpfTwvYj46IDxpPnthdXRoLnBob25lID8gYXV0aC5waG9uZSA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJUaXRsZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9YW50ZFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgbW9yZVxyXG4gICAgICAgIDwvYT4gKi99XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJJdGVtID0gKHRpdGxlOiBzdHJpbmcsIGxpbms6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRpdGxlLFxyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtsaW5rfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBwYXRpZW50cy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1BhdGllbnRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHBhdGllbnRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIGJlZHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNCZWRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5yb29tQ29kZX0gLSAke2l0ZW0uYmVkSWR9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BiZWRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIHVzZXJzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zVXNlcnMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfSAtICR7aXRlbS51c2VybmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHVzZXJzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ3BhdGllbnQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNQYXRpZW50cyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdiZWQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNCZWRzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnZW1wbG95ZWUnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNVc2Vyc1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwMHB4XCIsIGRpc3BsYXk6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPVwiY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd25cIlxyXG4gICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXszNTB9IC8vIHdpZHRoIGRyb3Bkb3duXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBhbnkpID0+IG9uQ2hhbmdlU2VhcmNoKHZhbHVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gb25CbHVyU2VhcmNoKCl9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzUwIH19IC8vIHdpZHRoIGlucHV0IFNlYXJjaFxyXG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgIGRpc2FibGVkID0ge3Byb3BzLmRpc2FibGVkU2VhcmNoPyB0cnVlIDogZmFsc2UgfSAvLyBkaXNhYmxlIGlucHV0IHNlYXJjaFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5TZWFyY2ggc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9e3QoXCJzZWFyY2hcIil9IC8+XHJcbiAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2hlYWRlckNsYXNzfT5cclxuICAgICAge2NvbGxhcHNlZCBcclxuICAgICAgPyA8TWVudVVuZm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz4gXHJcbiAgICAgIDogPE1lbnVGb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPn1cclxuICAgICAgXHJcbiAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXt0KCdwZXJzb25hbEluZm8nKX0gY29udGVudD17YWNjb3VudFBvcHVwKCl9PlxyXG4gICAgICAgIDxCdXR0b24gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgXHJcbiAgICAgIHsvKiA8QnV0dG9uIGljb249ezxCZWxsT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPiAqL31cclxuICAgICAgey8qIDxTZWFyY2hcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tLi4uXCJcclxuICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2hcIlxyXG4gICAgICAvPiAqL31cclxuICAgICAge3JlbmRlclNlYXJjaCgpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHRDb250YWluZXInPntyZW5kZXJSaWdodENvbnRlbnQoKX08L2Rpdj5cclxuXHJcbiAgICA8L0hlYWRlcj5cclxuICAgIHtyZW5kZXJDb25maXJtRGlhbG9nKCl9XHJcbiAgICB7cmVuZGVyQ2hhbmdlUGFzc01vZGFsKCl9XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXIiLCJcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5pbXBvcnQgc2lkZWJhciBmcm9tICd0aGVtZXMvc2lkZWJhcidcclxuaW1wb3J0IHsgZ2V0U2lkZWJhclNlbGVjdGVkcyB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tICd0aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2snXHJcblxyXG5jb25zdCBNZW51Q29tcG9uZW50ID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICBjb25zdCB7Y2hlY2tQZXJtaXNzaW9ufSA9IHVzZVBlcm1pc3Npb25Ib29rKClcclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlTWVudXMgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuID0gZ2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKVxyXG4gICAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZighY2hlY2tQZXJtaXNzaW9uKGl0ZW0ucGVybWlzc2lvbnMpKSByZXR1cm5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5yb3V0ZU5hbWV9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KGl0ZW0ucm91dGVOYW1lKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH0pLmZpbHRlcigobWVudTphbnkpID0+IG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRSZWFkeSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuICBjb25zdCBjdXJyZW50Um91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICBjb25zdCBicmVhZGN1bXMgPSBnZXRTaWRlYmFyU2VsZWN0ZWRzKGN1cnJlbnRSb3V0ZU5hbWUpXHJcbiAgbGV0IHJvdXRlck5hbWVzID0gYnJlYWRjdW1zLm1hcCgoYnJlYWRjdW06IGFueSkgPT4gYnJlYWRjdW0ucm91dGVOYW1lKVxyXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJvdXRlck5hbWVzLnBvcCgpXHJcbiAgcmV0dXJuIDxNZW51XHJcbiAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgIHRoZW1lPXt0aGVtZX1cclxuICAgIGRlZmF1bHRPcGVuS2V5cz17cm91dGVyTmFtZXN9XHJcbiAgICBzZWxlY3RlZEtleXM9e3NlbGVjdGVkS2V5c31cclxuICAgIG9uQ2xpY2s9e1xyXG4gICAgICBpc01vYmlsZVxyXG4gICAgICAgID8gKCkgPT4ge1xyXG4gICAgICAgICAgb25Db2xsYXBzZUNoYW5nZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgey4uLm90aGVyUHJvcHN9XHJcbiAgPlxyXG4gICAge2dlbmVyYXRlTWVudXMoc2lkZWJhcil9XHJcbiAgPC9NZW51PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEF2YXRhciwgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuZnVuY3Rpb24gbnVtRm9ybWF0dGVyKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZihudW0gPiA5OTkgJiYgbnVtIDwgMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMCkudG9GaXhlZCgxKSArICdLJzsgLy8gY29udmVydCB0byBLIGZvciBudW1iZXIgZnJvbSA+IDEwMDAgPCAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPiAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwMDAwKS50b0ZpeGVkKDEpICsgJ00nOyAvLyBjb252ZXJ0IHRvIE0gZm9yIG51bWJlciBmcm9tID4gMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtIDwgOTAwKXtcclxuICAgICAgICByZXR1cm4gbnVtOyAvLyBpZiB2YWx1ZSA8IDEwMDAsIG5vdGhpbmcgdG8gZG9cclxuICAgIH1cclxufVxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRDb29raWVzLCByZWRpcmVjdCwgdCwgZ2V0RGF0YSwgZ2V0QXV0aCwgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKClcclxuICAgIGNvbnN0IHByb2ZpbGVJbmZvID0ge1xyXG4gICAgICAgIGNvbXBhbnlMb2dvOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxPR08sXHJcbiAgICAgICAgZ3JvdXBOYW1lOiBcIk5ow6JuIHZpw6puXCIsXHJcbiAgICAgICAgdXNlckZ1bGxuYW1lOiBcIkRpw6ptIFRo4buLIFF14buzbmhcIixcclxuICAgICAgICBjb21wYW55TmFtZTogXCJWaeG7h24gZMaw4buhbmcgbMOjbyBIxrDhu5tuZyBExrDGoW5nXCIsXHJcbiAgICAgICAgY29tcGFueUFkZHJlc3M6IFwiU+G7kSAzOSwgbmfDtSA3NCwgxJDGsOG7nW5nIER1eSBUw6JuLCBRdeG6rW4gQ+G6p3UgR2nhuqV5LCBIw6AgTuG7mWlcIixcclxuICAgICAgICB0b2RheToge30sXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXByb2ZpbGVcIj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs4MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gc3JjPXtwcm9maWxlSW5mby5jb21wYW55TG9nb30gY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY29tcGFueU5hbWVcIj57cHJvZmlsZUluZm8uY29tcGFueU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYWRkcmVzc1wiPntwcm9maWxlSW5mby5jb21wYW55QWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj57cHJvZmlsZUluZm8udXNlckZ1bGxuYW1lfTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLWdyb3VwTmFtZVwiPntwcm9maWxlSW5mby5ncm91cE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICBcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyMn0gb2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cInByb2ZpbGUtZW5kTGluZVwiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCwgVXNlck91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMnO1xyXG5jb25zdCBUSEVNRSA9ICdsaWdodCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnXHJcblxyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdGhlbWUgfSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgICB3aWR0aD17MjU2fVxyXG4gICAgICAgICAgICBjb2xsYXBzZWRXaWR0aD17MH1cclxuICAgICAgICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgLy9vbkJyZWFrcG9pbnQ9eyFpc01vYmlsZSAmJiBvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChkZWZhdWx0Q29va2llKSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGRlZmF1bHRDb29raWUpXHJcbiAgcmV0dXJuIGNvb2tpZXNcclxufSIsImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dEluc3RhbmNlID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TlM6ICdjb21tb24nLFxyXG4gIGRlZmF1bHRMYW5ndWFnZTogcHVibGljUnVudGltZUNvbmZpZy5MQU5HLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJ10sXHJcbiAgbG9jYWxlUGF0aDogXCJsYW5nXCIsXHJcbiAgYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZSxcclxuICBzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2VcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTmV4dEkxOE5leHRJbnN0YW5jZSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcbmltcG9ydCBSZXF1ZXN0RXhjZXB0aW9uIGZyb20gJy4vUmVxdWVzdEV4Y2VwdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGNvb2tpZXNTdHJpbmcpIHtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzU3RyaW5nXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoY29va2llc1N0cmluZykuZ2V0KCd0b2tlbicpXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlR2xvYmFsLmJpbmQodGhpcyksIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3IuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWwocmVzcG9uc2UpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsRXJyb3IoZXJyb3IpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2spIHtcclxuICAgICAgZXJyb3IgPSB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2soZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JcclxuICB9XHJcblxyXG4gIGdldEFwcFVybCgpIHtcclxuICAgIC8vcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIlxyXG4gICAgcmV0dXJuIHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX0hPU1RcclxuICB9XHJcbiAgYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KSB7XHJcblxyXG4gIH1cclxuICBhZnRlclJlcXVlc3QocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oLTEsIFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiKVxyXG4gICAgY29uc3QgY29kZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmNvZGVcIiwgLTEpXHJcbiAgICBjb25zdCBtZXNzYWdlID0gXy5nZXQocmVzdWx0LCBcImRhdGEubWVzc2FnZVwiLCBcIlwiKVxyXG4gICAgY29uc3QgZGF0YSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmRhdGFcIilcclxuICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlLCBkYXRhKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldCh1cmwsIGRhdGEgPSB7fSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwdXQodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBkZWxldGUodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxufSIsImNsYXNzIFJlcXVlc3RFeGNlcHRpb257XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU9XCJcIiwgbWVzc2FnZSA9IFwiXCIsIGRhdGEpIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0RXhjZXB0aW9uO1xyXG4iLCJjb25zdCBVcmxQYXR0ZXJuID0gcmVxdWlyZSgndXJsLXBhdHRlcm4nKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi9fcm91dGVzJ1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmNsYXNzIFJvdXRlIHtcclxuICAgIHN0YXRpYyBtYWtlVXJsKG5hbWUsIHBhcmFtcykge1xyXG4gICAgICAgIGxldCByb3V0ZUluZm8gPSByb3V0ZUNvbmZpZ1tuYW1lXVxyXG4gICAgICAgIGlmICghcm91dGVJbmZvKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgVXJsUGF0dGVybihyb3V0ZUluZm8udXJsKTtcclxuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhc1VybCA9IHBhdHRlcm4uc3RyaW5naWZ5KHBhcmFtcykgLy9saW5rIGhp4buDbiB0aOG7iyB0csOqbiB0csOsbmggZHV54buHdFxyXG4gICAgICAgICAgICBsZXQgaHJlZiA9IGFzVXJsIC8vbGluayB0aOG6rXQgdHJvbmcgL3BhZ2VzXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUluZm8uYWN0aW9uLnN1YnN0cigwLCA2KSA9PT0gXCJwYWdlcy9cIikge1xyXG4gICAgICAgICAgICAgICAgaHJlZiA9IHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDUpXHJcbiAgICAgICAgICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgPyR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGAmJHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzOiBhc1VybCxcclxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUXVlcnkocXVlcnksIHNoYWxsb3cgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHJldHVybjtcclxuICAgICAgICBsZXQgYXNQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgbGV0IG9sZFF1ZXJ5ID0gUm91dGVyLnJvdXRlci5xdWVyeVxyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHtcclxuICAgICAgICAgICAgLi4ub2xkUXVlcnksXHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShxdWVyeU9iaikgPT0gSlNPTi5zdHJpbmdpZnkob2xkUXVlcnkpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nQXBwZW5kID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHF1ZXJ5T2JqKVxyXG4gICAgICAgICAgICAvKiBpZihxdWVyeVN0cmluZ0FwcGVuZCl7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBSb3V0ZXIucm91dGVyLnF1ZXJ5ID0gcXVlcnlPYmpcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gKHJvdXRlTmFtZSwgcm91dGVzLCByb3V0ZVBhdGhzID0gW10pID0+IHtcclxuICAgICAgICBsZXQgc2lkZWJhclNlbGVjdGVkTmFtZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdLnNpZGViYXIgOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gc2lkZWJhclxyXG4gICAgICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgICAgICBpZiAocm91dGUucm91dGVOYW1lID09PSBzaWRlYmFyU2VsZWN0ZWROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGhzLnB1c2gocm91dGUpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlUGF0aHNcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0U2lkZWJhclNlbGVjdGVkcyhzaWRlYmFyU2VsZWN0ZWROYW1lLCByb3V0ZS5jaGlsZHJlbiwgWy4uLnJvdXRlUGF0aHMsIHJvdXRlXSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QnJlYWRjcnVtYnMgPSAocm91dGVOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICByZXN1bHQudW5zaGlmdChyb3V0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocm91dGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbLi4udGhpcy5nZXRCcmVhZGNydW1icyhyb3V0ZS5wYXJlbnQpLCAuLi5yZXN1bHRdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCByb3V0ZSA9IFJvdXRlLm1ha2VVcmxcclxuY29uc3QgYWRkUXVlcnkgPSBSb3V0ZS5hZGRRdWVyeVxyXG5jb25zdCBnZXRCcmVhZGNydW1icyA9IFJvdXRlLmdldEJyZWFkY3J1bWJzXHJcbmNvbnN0IGdldFNpZGViYXJTZWxlY3RlZHMgPSBSb3V0ZS5nZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlO1xyXG5leHBvcnQge1xyXG4gICAgcm91dGUsXHJcbiAgICBhZGRRdWVyeSxcclxuICAgIGdldEJyZWFkY3J1bWJzLFxyXG4gICAgZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICd0aGVtZXMvbW9kdWxlcy9SZXF1ZXN0J1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuY2xhc3MgQmFzZUFwaXtcclxuICBjb29raWVzOiBDb29raWVzXHJcbiAgUmVxdWVzdDogUmVxdWVzdFxyXG4gIG5hbWU6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCkge1xyXG4gICAgY29uc3QgY29va2llc09iaiA9IGNvbnRleHQgPyBuZXh0Q29va2llKGNvbnRleHQpOiB7fVxyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llcyhjb29raWVzT2JqKTtcclxuICAgIHRoaXMuUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvb2tpZXNPYmopXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUNhbGxiYWNrXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFja1xyXG4gICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICB9XHJcbiAgZ2xvYmFsSGFuZGxlQ2FsbGJhY2sgPSAocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgbGV0IHN0YXR1cyA9IF8uZ2V0KGVycm9yLCBcInJlc3BvbnNlLnN0YXR1c1wiLCAtMSk7XHJcbiAgICBpZihzdGF0dXMgPT09IC0xKXtcclxuICAgICAgLy9ub3RpZnkoXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIsIFwiZXJyb3JcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ0b2tlblwiKVxyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidXNlclwiKVxyXG4gICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvbG9naW5cIil7XHJcbiAgICAgICAgLy9ub3RpZnkoXCJMb2dpbiBzZXNzaW9uIGV4cGlyZWQhXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4ubG9naW5cIilcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIC8vbG9naW4gc2NyZWVuLiBraMO0bmcgbMOgbSBnw6wgY+G6oy5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICByb3V0ZShyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgcmV0dXJuIHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgfVxyXG5cclxuICByZWRpcmVjdChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgbGV0IG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICBSb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5kZXgoZGF0YT86IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmluZGV4YCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnN0b3JlYCxkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0YWlsKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRldGFpbGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGVkaXQoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRlbGV0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZGVsZXRlKHVybCwgZGF0YSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQXBpIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIEJlZCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAnYmVkcyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgUGF0aWVudCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAncGF0aWVudHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBVc2VyR3JvdXBzIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2VyR3JvdXBzJzsgLy9r4bq/IHRo4burYSBDUlVEIHThu6sgdGjhurFuZyBjaGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJHcm91cHMiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAndXNlcnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBsb2dpbih7IGRhdGEgfToge2RhdGE6IHt1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfX0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoXCJhcGkubG9naW5cIikuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSkgfHwge31cclxuICAgICAgLy9zdWNjZXNzXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidG9rZW5cIiwgdW5kZWZpbmVkKSwge1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3VzZXInLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInVzZXJcIiwge30pLHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHVzZXJVcGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXNlclVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyBzZWFyY2goZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc2VhcmNoYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwiaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL19yb3V0ZXMuanNvbidcclxuXHJcbmNvbnN0IGNoYXJUb051bSA9IHsgQzogOCwgUjogNCwgVTogMiwgRDogMSB9XHJcbmNvbnN0IGNydWRUb0RlYyA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikucmVkdWNlKCh0b3RhbDogbnVtYmVyLCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCcpID0+IHRvdGFsICsgY2hhclRvTnVtW2NoYXJdLCAwKVxyXG5cclxufVxyXG5jb25zdCBkZWNUb0NydWQgPSAoZGVjOiBudW1iZXIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJ1xyXG4gICAgZm9yIChjaGFyIGluIGNoYXJUb051bSkge1xyXG4gICAgICAgIGlmICgoZGVjICYgY2hhclRvTnVtW2NoYXJdKSA9PSBjaGFyVG9OdW1bY2hhcl0pIHJlc3VsdCArPSBjaGFyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGhhc1Blcm1pc3Npb24gPSAocmVxdWlyZVBlcm1pc3Npb246IG51bWJlciwgdXNlclBlcm1pc3Npb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICh1c2VyUGVybWlzc2lvbiAmIHJlcXVpcmVQZXJtaXNzaW9uKSA9PT0gcmVxdWlyZVBlcm1pc3Npb25cclxuICB9XHJcblxyXG5jb25zdCBjaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSwgdXNlclBlcm1pc3Npb25zOiBhbnksIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZighcGVybWlzc2lvbnMpIHJldHVybiB0cnVlXHJcbiAgICBsZXQgcGVybWlzc2lvbkFycmF5ID0gW11cclxuICAgIGZvciAobGV0IHBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGNydWRUb0RlYyhwZXJtaXNzaW9uc1twZXJtaXNzaW9uXSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbXCJyb290XCJdIHx8IDBcclxuICAgICAgICBsZXQgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbcGVybWlzc2lvbl0gfHwgMFxyXG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb24gfCByb290UGVybWlzc2lvblxyXG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9uKHJlcXVpcmVQZXJtaXNzaW9uLCB1c2VyUGVybWlzc2lvbikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcGVybWlzc2lvbkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlUGVybWlzc2lvbjogZGVjVG9DcnVkKHJlcXVpcmVQZXJtaXNzaW9uKSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb246IGRlY1RvQ3J1ZCh1c2VyUGVybWlzc2lvbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKCFzaG93RXJyb3IpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25BcnJheVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNoZWNrUGVybWlzc2lvbixcclxuICAgIGhhc1Blcm1pc3Npb24sXHJcbiAgICBjcnVkVG9EZWMsXHJcbiAgICBkZWNUb0NydWRcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3YWl0LXRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmwtcGF0dGVyblwiKTsiXSwic291cmNlUm9vdCI6IiJ9