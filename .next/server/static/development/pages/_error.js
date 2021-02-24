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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/_error.jsx":
/*!**************************!*\
  !*** ./pages/_error.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/modules/I18n */ "./themes/modules/I18n.js");
/* harmony import */ var themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Error = ({
  statusCode,
  t
}) => {
  if (statusCode == 404) {
    return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

Error.getInitialProps = async ({
  res,
  err
}) => {
  let statusCode = null;

  if (res) {
    ({
      statusCode
    } = res);
  } else if (err) {
    ({
      statusCode
    } = err);
  }

  return {
    namespacesRequired: ['common', 'menu', 'pages'],
    statusCode
  };
};

Error.defaultProps = {
  statusCode: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(themes_modules_I18n__WEBPACK_IMPORTED_MODULE_1__["withTranslation"])('common')(Error));

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

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/_error.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DATN\nursinghome\pages\_error.jsx */"./pages/_error.jsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvU3RvcmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9CYXNlSG9va3MudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vay50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvQWRtaW4udHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvQ29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9JMThuLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CYXNlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy91dGlscy9QZXJtaXNzaW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3YWl0LXRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtcGF0dGVyblwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRXJyb3IiLCJzdGF0dXNDb2RlIiwidCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwid2l0aFRyYW5zbGF0aW9uIiwiYnJlYWRDcnVtYkNvbXBvbmVudCIsInJlZGlyZWN0IiwidXNlQmFzZUhvb2siLCJsYW5nIiwiZ2V0Um91dGVOYW1lIiwicm91dGVQYXRoIiwicm91dGVEYXRhIiwiX3JvdXRlcyIsInJvdXRlTmFtZSIsInJvdXRlRWxlbWVudCIsImFjdGlvbiIsInN1YnN0ciIsImJyZWFkQ3VtYnMiLCJyb3V0ZXMiLCJnZXRCcmVhZGNydW1icyIsInVuc2hpZnQiLCJsaW5rUHJvcHMiLCJtYWtlVXJsIiwiY29uZmlybSIsIk1vZGFsIiwiQ29uZmlybURpYWxvZyIsIm9uQ2FuY2VsIiwic3RhdGUiLCJvblN1Ym1pdCIsInNob3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uT2siLCJyZWR1Y2VyIiwidHlwZSIsIl8iLCJwYXlsb2FkIiwic2V0U3RvcmUiLCJtYWtlU3RvcmUiLCJpbml0U3RhdGUiLCJkZXZUb29sRXh0ZW5zaW9ucyIsImlzU2VydmVyIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInVuZGVmaW5lZCIsImNyZWF0ZVN0b3JlIiwidXNlQmFzZUhvb2tzIiwidXNlUm91dGVyIiwiSTE4biIsInVzZVRyYW5zbGF0aW9uIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNldFN0b3JlQWN0aW9uIiwiZ2V0U3RvcmUiLCJ1c2VTZWxlY3RvciIsIm5leHRSb3V0ZSIsImdldERhdGEiLCJvYmoiLCJkZWZhdWx0VmFsdWUiLCJkZXNjcmlwdGlvbiIsIm5vdGlmaWNhdGlvbiIsImR1cmF0aW9uIiwiZ2V0QXV0aCIsImF1dGgiLCJnZXRDb29raWVzIiwiY29va2llcyIsImdldFB1YmxpY1J1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiUGVybWlzc2lvbkhvb2siLCJ1c2VyUGVybWlzc2lvbnMiLCJwZXJtaXNzaW9ucyIsImdldFVzZXJQZXJtaXNzaW9uIiwiX2NoZWNrUGVybWlzc2lvbiIsImNoZWNrUGVybWlzc2lvbiIsIlRIRU1FIiwiVGl0bGUiLCJUZXh0IiwiVHlwb2dyYXBoeSIsIkNvbnRlbnQiLCJGb290ZXIiLCJMYXlvdXQiLCJBZG1pbiIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsInVzZVN0YXRlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9uQ29sbGFwc2VDaGFuZ2UiLCJsb2ciLCJ1cGRhdGVTaXplIiwibW9iaWxlIiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0lURV9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxPR08iLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZGlzYWJsZWRTZWFyY2giLCJtb21lbnQiLCJ5ZWFyIiwicXVlcnlTZWxlY3RvciIsIkhlYWRlciIsIlN1Yk1lbnUiLCJNZW51IiwiU2VhcmNoIiwiSW5wdXQiLCJBZG1pbkhlYWRlciIsInVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJwYXRpZW50U2VydmljZSIsIlBhdGllbnRTZXJ2aWNlIiwiYmVkU2VydmljZSIsIkJlZFNlcnZpY2UiLCJwYXRpZW50cyIsInNldFBhdGllbnRzIiwiYmVkcyIsInNldEJlZHMiLCJ1c2VycyIsInNldFVzZXJzIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY29va2llT2JqZWN0IiwiY29uZmlybVJlZiIsImNyZWF0ZVJlZiIsImhhbmRsZUNsaWNrTWVudSIsInJlZGlyZWN0TG9naW4iLCJDb29raWVzIiwicmVtb3ZlIiwidG9rZW4iLCJ1c2VyIiwib3B0aW9uc1BhdGllbnRzIiwib3B0aW9uc0JlZHMiLCJvcHRpb25zVXNlcnMiLCJvbkNoYW5nZVNlYXJjaCIsImZpbHRlclBhdGllbnRzIiwiZmlsdGVycyIsIm9wZXJhdG9yIiwic29ydGluZyIsInBhZ2VTaXplIiwiZmlsdGVyQmVkcyIsImZpbHRlclVzZXJzIiwiZXJyVXNlcnMiLCJ0byIsImluZGV4IiwiZGF0YVVzZXJzIiwibGVuZ3RoIiwiZXJyUGF0aWVudHMiLCJkYXRhUGF0aWVudHMiLCJlcnJCZWRzIiwiZGF0YUJlZHMiLCJvbkJsdXJTZWFyY2giLCJyZW5kZXJDb25maXJtRGlhbG9nIiwib25DaGFuZ2VQYXNzd29yZCIsInZhbHVlcyIsImlkIiwib2xkUGFzc3dvcmQiLCJwYXNzd29yZCIsInVzZXJVcGRhdGVQYXNzd29yZCIsImNvZGUiLCJ2YWxpZGF0b3JQYXNzd29yZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVuZGVyQ2hhbmdlUGFzc01vZGFsIiwiZm9ybUNoYW5nZVBhc3N3b3JkIiwiRm9ybSIsInVzZUZvcm0iLCJyZXBhc3N3b3JkIiwic3VibWl0Iiwic3BhbiIsInJlcXVpcmVkIiwicmVuZGVyUmlnaHRDb250ZW50IiwiY3VycmVudCIsIm1lbnVJY29uUHJvcHMiLCJjbGFzc05hbWUiLCJoZWFkZXJDbGFzcyIsImFjY291bnRQb3B1cCIsIndpZHRoIiwiZnVsbG5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJyZW5kZXJUaXRsZSIsInJlbmRlckl0ZW0iLCJsaW5rIiwibGFiZWwiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiZmxvYXQiLCJyb29tQ29kZSIsImJlZElkIiwicmVuZGVyU2VhcmNoIiwiY29sb3IiLCJNZW51Q29tcG9uZW50IiwidXNlUGVybWlzc2lvbkhvb2siLCJnZW5lcmF0ZU1lbnVzIiwiaWNvbiIsImZpbHRlciIsIm1lbnUiLCJ0aGVtZSIsInRSZWFkeSIsIm90aGVyUHJvcHMiLCJjdXJyZW50Um91dGVOYW1lIiwiYnJlYWRjdW1zIiwiZ2V0U2lkZWJhclNlbGVjdGVkcyIsInJvdXRlck5hbWVzIiwiYnJlYWRjdW0iLCJzZWxlY3RlZEtleXMiLCJwb3AiLCJzaWRlYmFyIiwibnVtRm9ybWF0dGVyIiwibnVtIiwidG9GaXhlZCIsIlByb2ZpbGUiLCJwcm9maWxlSW5mbyIsImNvbXBhbnlMb2dvIiwiZ3JvdXBOYW1lIiwidXNlckZ1bGxuYW1lIiwiY29tcGFueU5hbWUiLCJjb21wYW55QWRkcmVzcyIsInRvZGF5IiwiU2lkZXIiLCJzaWRlQmFyIiwiZGVmYXVsdENvb2tpZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdCIsImdldENvbmZpZyIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJkZWZhdWx0TlMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJMQU5HIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVxdWVzdCIsImNvb2tpZXNTdHJpbmciLCJoYW5kbGVHbG9iYWxDYWxsYmFjayIsImhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2siLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlR2xvYmFsIiwiYmluZCIsImhhbmRsZUdsb2JhbEVycm9yIiwiZ2V0QXBwVXJsIiwiQVBJX0hPU1QiLCJiZWZvcmVSZXF1ZXN0IiwiYWZ0ZXJSZXF1ZXN0IiwiUmVxdWVzdEV4Y2VwdGlvbiIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJVcmxQYXR0ZXJuIiwicXVlcnlTdHJpbmciLCJSb3V0ZSIsInJvdXRlQ29uZmlnIiwicGF0dGVybiIsInN0cmluZ2lmeSIsImFzVXJsIiwiaW5kZXhPZiIsImFkZFF1ZXJ5IiwibG9jYXRpb24iLCJvbGRRdWVyeSIsInF1ZXJ5T2JqIiwiSlNPTiIsInF1ZXJ5U3RyaW5nQXBwZW5kIiwicm91dGVQYXRocyIsInNpZGViYXJTZWxlY3RlZE5hbWUiLCJwYXJlbnQiLCJCYXNlQXBpIiwiY29udGV4dCIsInN0YXR1cyIsImNvb2tpZXNPYmoiLCJuZXh0Q29va2llIiwiZ2xvYmFsSGFuZGxlQ2FsbGJhY2siLCJnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrIiwiY3JlYXRlIiwiZGV0YWlsIiwiZWRpdCIsIkJlZCIsIlBhdGllbnQiLCJVc2VyIiwibG9naW4iLCJ1cGRhdGVQYXNzd29yZCIsInNlYXJjaCIsInJvdXRlUGFyYW1zIiwiY2hhclRvTnVtIiwiQyIsIlIiLCJVIiwiRCIsImNydWRUb0RlYyIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwicmVkdWNlIiwidG90YWwiLCJjaGFyIiwiZGVjVG9DcnVkIiwiZGVjIiwiaGFzUGVybWlzc2lvbiIsInJlcXVpcmVQZXJtaXNzaW9uIiwidXNlclBlcm1pc3Npb24iLCJzaG93RXJyb3IiLCJwZXJtaXNzaW9u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O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ3RoZW1lcy9sYXlvdXRzL0FkbWluJ1xyXG5cclxuY29uc3QgRXJyb3IgPSAoeyBzdGF0dXNDb2RlLCB0IH0pID0+IHtcclxuICBpZiAoc3RhdHVzQ29kZSA9PSA0MDQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGUgPScgJyBkZXNjcmlwdGlvbj0nICc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZS1ncmVlblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IFwiOHZ3XCIgfX0+NDA0PC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZS1ncmVlblwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5MaW5rIGtow7RuZyB04buTbiB04bqhaTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQgdGl0bGUgPScgJyBkZXNjcmlwdGlvbj0nICc+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUtZ3JlZW5cIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOiBcIjh2d1wiIH19PkVSUk9SPC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlLWdyZWVuXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkPDsyBs4buXaSB44bqjeSByYSwgeGluIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSE8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgZXJyIH0pID0+IHtcclxuICBsZXQgc3RhdHVzQ29kZSA9IG51bGxcclxuICBpZiAocmVzKSB7XHJcbiAgICAoeyBzdGF0dXNDb2RlIH0gPSByZXMpXHJcbiAgfSBlbHNlIGlmIChlcnIpIHtcclxuICAgICh7IHN0YXR1c0NvZGUgfSA9IGVycilcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCdtZW51JywncGFnZXMnXSxcclxuICAgIHN0YXR1c0NvZGUsXHJcbiAgfVxyXG59XHJcblxyXG5FcnJvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RhdHVzQ29kZTogbnVsbCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoRXJyb3IpIiwiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgZ2V0QnJlYWRjcnVtYnMsIHJvdXRlIGFzIG1ha2VVcmwgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBicmVhZENydW1iQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICAgICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYnJlYWRDdW1icyA9IFtdXHJcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gICAgbGV0IHJvdXRlczogUm91dGVbXSA9IGdldEJyZWFkY3J1bWJzKHJvdXRlTmFtZSlcclxuICAgIGlmIChyb3V0ZXNbMF0gJiYgcm91dGVzWzBdLm5hbWUgIT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIpIHtcclxuICAgICAgICByb3V0ZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmcm9udGVuZC5hZG1pbi5ob21lJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IG1ha2VVcmwocm91dGUubmFtZSlcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnsgcm91dGUubmFtZSA9PSBcImZyb250ZW5kLmFkbWluLmhvbWVcIiA/IDxIb21lRmlsbGVkIC8+IDogdChyb3V0ZS5uYW1lKSB9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHt0KHJvdXRlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8QnJlYWRjcnVtYj57YnJlYWRDdW1ic308L0JyZWFkY3J1bWI+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicmVhZENydW1iQ29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzaG93KGRhdGEgPSBudWxsKSB7XHJcbiAgICBsZXQgeyB0aXRsZSwgY29udGVudCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGl0bGUgPSB0aXRsZSB8fCBcIlRpdGxlXCJcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiQ29udGVudFwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvbk9rOiB0aGlzLm9uU3VibWl0LFxyXG4gICAgICBvbkNhbmNlbDogdGhpcy5vbkNhbmNlbCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodHlwZW9mIG9uQ2FuY2VsID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgb25DYW5jZWwodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHR5cGVvZiBvblN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IG9uU3VibWl0KHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwic2V0U3RvcmVcIil7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9XHJcbiAgICBfLnNldChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucGF0aCwgYWN0aW9uLnBheWxvYWQudmFsdWUpXHJcbiAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qIGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN0b3JlOiBzdG9yZVJlZHVjZXJcclxufSkgKi9cclxuXHJcbmNvbnN0IHNldFN0b3JlID0gKHBhdGgsIHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdzZXRTdG9yZScsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcGF0aCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0U3RhdGUgPSB7fSwgb3B0aW9ucykgPT4ge1xyXG4gIGxldCBkZXZUb29sRXh0ZW5zaW9ucyA9ICghb3B0aW9ucy5pc1NlcnZlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpIDogdW5kZWZpbmVkXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRTdGF0ZSwgZGV2VG9vbEV4dGVuc2lvbnMpXHJcbn1cclxuZXhwb3J0IHtcclxuICBtYWtlU3RvcmUsXHJcbiAgc2V0U3RvcmVcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0U3RvcmUgYXMgc2V0U3RvcmVBY3Rpb24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbnRlcmZhY2UgQmFzZUJvb2sge1xyXG4gICAgdXNlU2VsZWN0b3I6IEZ1bmN0aW9uLFxyXG4gICAgcm91dGVyOiBhbnksXHJcbiAgICB0OiBGdW5jdGlvbixcclxuICAgIHNldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIGdldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIHJlZGlyZWN0OiBGdW5jdGlvbixcclxuICAgIGdldERhdGE6IEZ1bmN0aW9uLFxyXG4gICAgbm90aWZ5OiBGdW5jdGlvbixcclxuICAgIGdldEF1dGg6IEZ1bmN0aW9uXHJcbiAgICBnZXRDb29raWVzOiBGdW5jdGlvbixcclxuICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWc6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgdXNlQmFzZUhvb2tzID0gICh7IGxhbmcgPSBbJ2NvbW1vbicsICdwYWdlcycsICdlcnJvcnMnXSx9IDogeyBsYW5nPzogc3RyaW5nW10sIH0gPSB7fSk6IEJhc2VCb29rID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBJMThuID0gdXNlVHJhbnNsYXRpb24obGFuZylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzZXRTdG9yZSA9IGFzeW5jIChwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRTdG9yZUFjdGlvbihwYXRoLCB2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RvcmUgPSAocGF0aDogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IF8uZ2V0KHN0YXRlLCBwYXRoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRSb3V0ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBhczogcm91dGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMsIHtcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJywgdHlwZTogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiA9IFwic3VjY2Vzc1wiKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNCAvL3NlY29uZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEF1dGggPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb29raWVzID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb29raWVzKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHVibGljUnVudGltZUNvbmZpZyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucHVibGljUnVudGltZUNvbmZpZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbGVjdG9yLFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICB0OiBJMThuLnQsXHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmUsXHJcbiAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgZ2V0RGF0YSxcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgZ2V0QXV0aCxcclxuICAgICAgICBnZXRDb29raWVzLFxyXG4gICAgICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWdcclxuICAgIH07XHJcbn1cclxuXHJcbnVzZUJhc2VIb29rcy5nZXREYXRhID0gIChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQmFzZUhvb2tzIiwiaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJy4vQmFzZUhvb2tzJ1xyXG5pbXBvcnQge2NoZWNrUGVybWlzc2lvbn0gZnJvbSAnLi4vdXRpbHMvUGVybWlzc2lvbidcclxuXHJcbiAgXHJcbmNvbnN0IFBlcm1pc3Npb25Ib29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRBdXRoIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9XHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbnMgPSBhdXRoLnBlcm1pc3Npb25zIHx8IHt9XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlclBlcm1pc3Npb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJQZXJtaXNzaW9uc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb25zLCB1c2VyUGVybWlzc2lvbnMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXJQZXJtaXNzaW9uLFxyXG4gICAgICAgIGNoZWNrUGVybWlzc2lvbjogX2NoZWNrUGVybWlzc2lvblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJtaXNzaW9uSG9vayIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgRHJhd2VyLCBCYWNrVG9wLCBSb3csIENvbCwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9hZG1pbi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vYWRtaW4vSGVhZGVyXCI7XHJcbmNvbnN0IFRIRU1FID0gXCJsaWdodFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtYiBmcm9tIFwidGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHVzZUJhc2VIb29rcyBmcm9tIFwidGhlbWVzL2hvb2tzL0Jhc2VIb29rc1wiO1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tIFwidGhlbWVzL19yb3V0ZXMuanNvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFkbWluID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKCk7XHJcblxyXG4gIGNvbnN0IG9uQ29sbGFwc2VDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldENvbGxhcHNlZCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVTaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA5OTI7XHJcbiAgICBzZXRJc01vYmlsZShtb2JpbGUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgICB1cGRhdGVTaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXM7XHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXTtcclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKSB8fCBcIlwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJvdXRlTmFtZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntwdWJsaWNSdW50aW1lQ29uZmlnLlNJVEVfTkFNRX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5USVRMRX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuREVTQ1JJUFRJT059Lz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30gLz5cclxuICAgICAgPGxpbmsgcmVsPVwibnVyc2luZy1ob21lLWljb25cIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099PjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgaWQ9XCJhZG1pblwiPlxyXG4gICAgICA8TGF5b3V0IGhhc1NpZGVyPXt0cnVlfT5cclxuICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIG1hc2tDbG9zYWJsZVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc3Ryb3lPbkNsb3NlPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgdmlzaWJsZT17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgYm9keVN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgIGNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwcmltYXJ5TGF5b3V0XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXQgJHtjb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPEhlYWRlciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX0gZGlzYWJsZWRTZWFyY2g9e3Byb3BzLmRpc2FibGVkU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYnNcIj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS50aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LmRlc2NyaXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17OX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1iLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+wqkge21vbWVudCgpLnllYXIoKX0gSGFjdGVjaDwvRm9vdGVyPlxyXG4gICAgICAgICAgPEJhY2tUb3BcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJhY2tUb3BcIn1cclxuICAgICAgICAgICAgdGFyZ2V0PXsoKSA9PlxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpbWFyeUxheW91dFwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4pfTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgY3JlYXRlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQsIEF2YXRhciwgQnV0dG9uLCBJbnB1dCwgUG9wb3ZlciwgUm93LCBDb2wsIEF1dG9Db21wbGV0ZSwgRm9ybSwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgXHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLCBNZW51Rm9sZE91dGxpbmVkLCBQb3dlcm9mZk91dGxpbmVkLCBcclxuICBTZXR0aW5nRmlsbGVkLCBVc2VyT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyU2VydmljZVwiXHJcbmltcG9ydCBQYXRpZW50U2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2VcIlxyXG5pbXBvcnQgQmVkU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZVwiXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0XHJcblxyXG5jb25zdCBBZG1pbkhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUsIGdldENvb2tpZXMsIGdldERhdGEgIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKClcclxuICBjb25zdCBwYXRpZW50U2VydmljZSA9IG5ldyBQYXRpZW50U2VydmljZSgpXHJcbiAgY29uc3QgYmVkU2VydmljZSA9IG5ldyBCZWRTZXJ2aWNlKClcclxuICBjb25zdCBbcGF0aWVudHMsIHNldFBhdGllbnRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtiZWRzLCBzZXRCZWRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyBjaGFuZ2UgcGFzc3dvcmRcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9O1xyXG4gIGNvbnN0IGNvb2tpZU9iamVjdCA9IGdldENvb2tpZXMoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBjcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWVudSA9IChlOiBhbnkpID0+IHsgfVxyXG4gIGNvbnN0IHJlZGlyZWN0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoY29va2llT2JqZWN0KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3Rva2VuJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3VzZXInLCB7IHBhdGg6ICcvJ30pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY29va2llT2JqZWN0LnRva2VuIHx8ICFjb29raWVPYmplY3QudXNlcikge1xyXG4gICAgICByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGxldCBvcHRpb25zUGF0aWVudHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNCZWRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zVXNlcnM6IGFueSA9IFtdXHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSBhc3luYyAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgbGV0IGZpbHRlclBhdGllbnRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlckJlZHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwicm9vbUNvZGVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyVXNlcnMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgW2VyclVzZXJzLCB1c2Vyc106IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UuaW5kZXgoZmlsdGVyVXNlcnMpKVxyXG4gICAgbGV0IGRhdGFVc2VycyA9IF8uZ2V0KHVzZXJzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhVXNlcnMubGVuZ3RoKXtcclxuICAgICAgc2V0VXNlcnMoZGF0YVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyUGF0aWVudHMsIHBhdGllbnRzXTogYW55W10gPSBhd2FpdCB0byhwYXRpZW50U2VydmljZS5pbmRleChmaWx0ZXJQYXRpZW50cykpXHJcbiAgICBsZXQgZGF0YVBhdGllbnRzID0gXy5nZXQocGF0aWVudHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFQYXRpZW50cy5sZW5ndGgpe1xyXG4gICAgICBzZXRQYXRpZW50cyhkYXRhUGF0aWVudHMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJCZWRzLCBiZWRzXTogYW55W10gPSBhd2FpdCB0byhiZWRTZXJ2aWNlLmluZGV4KGZpbHRlckJlZHMpKVxyXG4gICAgbGV0IGRhdGFCZWRzID0gXy5nZXQoYmVkcywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YUJlZHMubGVuZ3RoKXtcclxuICAgICAgc2V0QmVkcyhkYXRhQmVkcylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBvbkJsdXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VycyhbXSlcclxuICAgIHNldEJlZHMoW10pXHJcbiAgICBzZXRQYXRpZW50cyhbXSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVyQ29uZmlybURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtyZWRpcmVjdExvZ2lufVxyXG4gICAgICAgIHRpdGxlPXt0KCdzaWdub3V0Jyl9XHJcbiAgICAgICAgY29udGVudD17dCgnbWVzc2FnZS5zaWdub3V0Q29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IGFzeW5jIChkYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICBsZXQgdmFsdWVzID0geyBpZDogYXV0aC5pZCwgb2xkUGFzc3dvcmQ6IGRhdGEub2xkUGFzc3dvcmQsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH1cclxuXHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLnVzZXJVcGRhdGVQYXNzd29yZCh2YWx1ZXMpKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoZXJyb3IubWVzc2FnZSksICdlcnJvcicpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KHQoXCJtZXNzYWdlLnJlY29yZFVwZGF0ZWRcIikpXHJcbiAgfVxyXG5cclxuICAvL3ZhbGlkYXRlIGlucHV0IHBhc3N3b3JkXHJcbiAgY29uc3QgdmFsaWRhdG9yUGFzc3dvcmQgPSAoeyBnZXRGaWVsZFZhbHVlIH06IHsgZ2V0RmllbGRWYWx1ZTogRnVuY3Rpb24gfSkgPT4gKHtcclxuICAgIHZhbGlkYXRvcjogKHJ1bGU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdmb3JtLnJlUGFzc3dvcmQnKSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2hhbmdlUGFzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1DaGFuZ2VQYXNzd29yZF0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gICAgcmV0dXJuICg8Rm9ybSBmb3JtPXtmb3JtQ2hhbmdlUGFzc3dvcmR9IG5hbWU9XCJmb3JtQ2hhbmdlUGFzc3dvcmRcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25Paz17KCkgPT4geyBmb3JtQ2hhbmdlUGFzc3dvcmQuc3VibWl0KCk7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJyZXBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JQYXNzd29yZFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvRm9ybT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclJpZ2h0Q29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIGljb249ezxQb3dlcm9mZk91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0+PC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFNldHRpbmdGaWxsZWQgc3BpbiAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9kYWxWaXNpYmxlKHRydWUpIH19ID48L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgbWVudUljb25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJ0cmlnZ2VyXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKCFjb2xsYXBzZWQpXHJcbiAgfVxyXG4gIGxldCBoZWFkZXJDbGFzcyA9IFwiaGVhZGVyXCJcclxuICBpZiAoY29sbGFwc2VkKSBoZWFkZXJDbGFzcyArPSAnIGNvbGxhcHNlZCdcclxuXHJcbiAgY29uc3QgYWNjb3VudFBvcHVwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MDBweFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbOCwgOF19PlxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs3fSBsZz17N30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBcclxuICAgICAgICAgICAgICAgIHNyYz17XCJcIn0gc2l6ZT17MTAwfSBzaGFwZT1cInNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgICAge2F1dGguZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgey8qIDxBdmF0YXIgc2l6ZT17NjR9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTd9IGxnPXsxN30+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3VzZXJuYW1lJyl9PC9iPjogPGk+e2F1dGgudXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGI+e3QoJ2Z1bGxuYW1lJyl9PC9iPjogPGk+e2F1dGguZnVsbG5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgnZW1haWwnKX08L2I+OiA8aT57YXV0aC5lbWFpbCA/IGF1dGguZW1haWwgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3Bob25lJyl9PC9iPjogPGk+e2F1dGgucGhvbmUgPyBhdXRoLnBob25lIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclRpdGxlID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgICB7LyogPGFcclxuICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1hbnRkXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBtb3JlXHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAodGl0bGU6IHN0cmluZywgbGluazogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGl0bGUsXHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2xpbmt9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHBhdGllbnRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zUGF0aWVudHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgcGF0aWVudHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgYmVkcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc0JlZHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLnJvb21Db2RlfSAtICR7aXRlbS5iZWRJZH1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YGJlZHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgdXNlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNVc2Vycy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9IC0gJHtpdGVtLnVzZXJuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgdXNlcnMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgncGF0aWVudCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1BhdGllbnRzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2JlZCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc0JlZHNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdlbXBsb3llZScpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1VzZXJzXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTAwcHhcIiwgZGlzcGxheTogJ2lubGluZScgfX0+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9XCJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93blwiXHJcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezM1MH0gLy8gd2lkdGggZHJvcGRvd25cclxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IGFueSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkJsdXJTZWFyY2goKX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzNTAgfX0gLy8gd2lkdGggaW5wdXQgU2VhcmNoXHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgZGlzYWJsZWQgPSB7cHJvcHMuZGlzYWJsZWRTZWFyY2g/IHRydWUgOiBmYWxzZSB9IC8vIGRpc2FibGUgaW5wdXQgc2VhcmNoXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlNlYXJjaCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj17dChcInNlYXJjaFwiKX0gLz5cclxuICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9PlxyXG4gICAgICB7Y29sbGFwc2VkIFxyXG4gICAgICA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPiBcclxuICAgICAgOiA8TWVudUZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+fVxyXG4gICAgICBcclxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3QoJ3BlcnNvbmFsSW5mbycpfSBjb250ZW50PXthY2NvdW50UG9wdXAoKX0+XHJcbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXNlck91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICBcclxuICAgICAgey8qIDxCdXR0b24gaWNvbj17PEJlbGxPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+ICovfVxyXG4gICAgICB7LyogPFNlYXJjaFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20uLi5cIlxyXG4gICAgICAgIG9uU2VhcmNoPXt2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaFwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICB7cmVuZGVyU2VhcmNoKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodENvbnRhaW5lcic+e3JlbmRlclJpZ2h0Q29udGVudCgpfTwvZGl2PlxyXG5cclxuICAgIDwvSGVhZGVyPlxyXG4gICAge3JlbmRlckNvbmZpcm1EaWFsb2coKX1cclxuICAgIHtyZW5kZXJDaGFuZ2VQYXNzTW9kYWwoKX1cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlciIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJ3RoZW1lcy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBnZXRTaWRlYmFyU2VsZWN0ZWRzIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVBlcm1pc3Npb25Ib29rIGZyb20gJ3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vaydcclxuXHJcbmNvbnN0IE1lbnVDb21wb25lbnQgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gIGNvbnN0IHtjaGVja1Blcm1pc3Npb259ID0gdXNlUGVybWlzc2lvbkhvb2soKVxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVNZW51cyA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJncm91cFwiKSB7XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pXHJcbiAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2dlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFjaGVja1Blcm1pc3Npb24oaXRlbS5wZXJtaXNzaW9ucykpIHJldHVyblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnJvdXRlTmFtZX0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoaXRlbS5yb3V0ZU5hbWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfSkuZmlsdGVyKChtZW51OmFueSkgPT4gbWVudSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRoZW1lLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdFJlYWR5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gIGNvbnN0IGJyZWFkY3VtcyA9IGdldFNpZGViYXJTZWxlY3RlZHMoY3VycmVudFJvdXRlTmFtZSlcclxuICBsZXQgcm91dGVyTmFtZXMgPSBicmVhZGN1bXMubWFwKChicmVhZGN1bTogYW55KSA9PiBicmVhZGN1bS5yb3V0ZU5hbWUpXHJcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyTmFtZXMucG9wKClcclxuICByZXR1cm4gPE1lbnVcclxuICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgZGVmYXVsdE9wZW5LZXlzPXtyb3V0ZXJOYW1lc31cclxuICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWRLZXlzfVxyXG4gICAgb25DbGljaz17XHJcbiAgICAgIGlzTW9iaWxlXHJcbiAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICB7Li4ub3RoZXJQcm9wc31cclxuICA+XHJcbiAgICB7Z2VuZXJhdGVNZW51cyhzaWRlYmFyKX1cclxuICA8L01lbnU+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5mdW5jdGlvbiBudW1Gb3JtYXR0ZXIobnVtOiBudW1iZXIpIHtcclxuICAgIGlmKG51bSA+IDk5OSAmJiBudW0gPCAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwKS50b0ZpeGVkKDEpICsgJ0snOyAvLyBjb252ZXJ0IHRvIEsgZm9yIG51bWJlciBmcm9tID4gMTAwMCA8IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA+IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDAwMDApLnRvRml4ZWQoMSkgKyAnTSc7IC8vIGNvbnZlcnQgdG8gTSBmb3IgbnVtYmVyIGZyb20gPiAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPCA5MDApe1xyXG4gICAgICAgIHJldHVybiBudW07IC8vIGlmIHZhbHVlIDwgMTAwMCwgbm90aGluZyB0byBkb1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldENvb2tpZXMsIHJlZGlyZWN0LCB0LCBnZXREYXRhLCBnZXRBdXRoLCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKVxyXG4gICAgY29uc3QgcHJvZmlsZUluZm8gPSB7XHJcbiAgICAgICAgY29tcGFueUxvZ286IHB1YmxpY1J1bnRpbWVDb25maWcuTE9HTyxcclxuICAgICAgICBncm91cE5hbWU6IFwiTmjDom4gdmnDqm5cIixcclxuICAgICAgICB1c2VyRnVsbG5hbWU6IFwiRGnDqm0gVGjhu4sgUXXhu7NuaFwiLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiBcIlZp4buHbiBkxrDhu6FuZyBsw6NvIEjGsOG7m25nIETGsMahbmdcIixcclxuICAgICAgICBjb21wYW55QWRkcmVzczogXCJT4buRIDM5LCBuZ8O1IDc0LCDEkMaw4budbmcgRHV5IFTDom4sIFF14bqtbiBD4bqndSBHaeG6pXksIEjDoCBO4buZaVwiLFxyXG4gICAgICAgIHRvZGF5OiB7fSxcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItcHJvZmlsZVwiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezgwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBzcmM9e3Byb2ZpbGVJbmZvLmNvbXBhbnlMb2dvfSBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb21wYW55TmFtZVwiPntwcm9maWxlSW5mby5jb21wYW55TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hZGRyZXNzXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlBZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiPntwcm9maWxlSW5mby51c2VyRnVsbG5hbWV9PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtZ3JvdXBOYW1lXCI+e3Byb2ZpbGVJbmZvLmdyb3VwTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwicHJvZmlsZS1lbmRMaW5lXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkLCBVc2VyT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucyc7XHJcbmNvbnN0IFRIRU1FID0gJ2xpZ2h0J1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0aGVtZSB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTZ9XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICAvL29uQnJlYWtwb2ludD17IWlzTW9iaWxlICYmIG9uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9IC8+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRDb29raWUpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoZGVmYXVsdENvb2tpZSlcclxuICByZXR1cm4gY29va2llc1xyXG59IiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuaW1wb3J0IFJlcXVlc3RFeGNlcHRpb24gZnJvbSAnLi9SZXF1ZXN0RXhjZXB0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29va2llc1N0cmluZykge1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXNTdHJpbmdcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcyhjb29raWVzU3RyaW5nKS5nZXQoJ3Rva2VuJylcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVHbG9iYWwuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVHbG9iYWxFcnJvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbChyZXNwb25zZSkge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2spIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWxFcnJvcihlcnJvcikge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjaykge1xyXG4gICAgICBlcnJvciA9IHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwVXJsKCkge1xyXG4gICAgLy9yZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiXHJcbiAgICByZXR1cm4gcHVibGljUnVudGltZUNvbmZpZy5BUElfSE9TVFxyXG4gIH1cclxuICBiZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pIHtcclxuXHJcbiAgfVxyXG4gIGFmdGVyUmVxdWVzdChyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbigtMSwgXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIpXHJcbiAgICBjb25zdCBjb2RlID0gXy5nZXQocmVzdWx0LCBcImRhdGEuY29kZVwiLCAtMSlcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5tZXNzYWdlXCIsIFwiXCIpXHJcbiAgICBjb25zdCBkYXRhID0gXy5nZXQocmVzdWx0LCBcImRhdGEuZGF0YVwiKVxyXG4gICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UsIGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0KHVybCwgZGF0YSA9IHt9KSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZSh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG59IiwiY2xhc3MgUmVxdWVzdEV4Y2VwdGlvbntcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZT1cIlwiLCBtZXNzYWdlID0gXCJcIiwgZGF0YSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RFeGNlcHRpb247XHJcbiIsImNvbnN0IFVybFBhdHRlcm4gPSByZXF1aXJlKCd1cmwtcGF0dGVybicpO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL19yb3V0ZXMnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuY2xhc3MgUm91dGUge1xyXG4gICAgc3RhdGljIG1ha2VVcmwobmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlSW5mbyA9IHJvdXRlQ29uZmlnW25hbWVdXHJcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBVcmxQYXR0ZXJuKHJvdXRlSW5mby51cmwpO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFzVXJsID0gcGF0dGVybi5zdHJpbmdpZnkocGFyYW1zKSAvL2xpbmsgaGnhu4NuIHRo4buLIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIGxldCBocmVmID0gYXNVcmwgLy9saW5rIHRo4bqtdCB0cm9uZyAvcGFnZXNcclxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDAsIDYpID09PSBcInBhZ2VzL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gcm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoNSlcclxuICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGA/JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYCYke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXM6IGFzVXJsLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRRdWVyeShxdWVyeSwgc2hhbGxvdyA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICBsZXQgb2xkUXVlcnkgPSBSb3V0ZXIucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5vbGRRdWVyeSxcclxuICAgICAgICAgICAgLi4ucXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSA9PSBKU09OLnN0cmluZ2lmeShvbGRRdWVyeSkpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmdBcHBlbmQgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC8qIGlmKHF1ZXJ5U3RyaW5nQXBwZW5kKXtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFJvdXRlci5yb3V0ZXIucXVlcnkgPSBxdWVyeU9ialxyXG4gICAgICAgICAgICB9ICovXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpZGViYXJTZWxlY3RlZHMgPSAocm91dGVOYW1lLCByb3V0ZXMsIHJvdXRlUGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBzaWRlYmFyU2VsZWN0ZWROYW1lID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0uc2lkZWJhciA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBzaWRlYmFyXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5yb3V0ZU5hbWUgPT09IHNpZGViYXJTZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aHMucHVzaChyb3V0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVQYXRoc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXRTaWRlYmFyU2VsZWN0ZWRzKHNpZGViYXJTZWxlY3RlZE5hbWUsIHJvdXRlLmNoaWxkcmVuLCBbLi4ucm91dGVQYXRocywgcm91dGVdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCcmVhZGNydW1icyA9IChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KHJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFsuLi50aGlzLmdldEJyZWFkY3J1bWJzKHJvdXRlLnBhcmVudCksIC4uLnJlc3VsdF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJvdXRlID0gUm91dGUubWFrZVVybFxyXG5jb25zdCBhZGRRdWVyeSA9IFJvdXRlLmFkZFF1ZXJ5XHJcbmNvbnN0IGdldEJyZWFkY3J1bWJzID0gUm91dGUuZ2V0QnJlYWRjcnVtYnNcclxuY29uc3QgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IFJvdXRlLmdldFNpZGViYXJTZWxlY3RlZHNcclxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XHJcbmV4cG9ydCB7XHJcbiAgICByb3V0ZSxcclxuICAgIGFkZFF1ZXJ5LFxyXG4gICAgZ2V0QnJlYWRjcnVtYnMsXHJcbiAgICBnZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5jbGFzcyBCYXNlQXBpe1xyXG4gIGNvb2tpZXM6IENvb2tpZXNcclxuICBSZXF1ZXN0OiBSZXF1ZXN0XHJcbiAgbmFtZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWVzT2JqID0gY29udGV4dCA/IG5leHRDb29raWUoY29udGV4dCk6IHt9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzKGNvb2tpZXNPYmopO1xyXG4gICAgdGhpcy5SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29va2llc09iailcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlQ2FsbGJhY2tcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrXHJcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVDYWxsYmFjayA9IChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gXy5nZXQoZXJyb3IsIFwicmVzcG9uc2Uuc3RhdHVzXCIsIC0xKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gLTEpe1xyXG4gICAgICAvL25vdGlmeShcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIiwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInRva2VuXCIpXHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ1c2VyXCIpXHJcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAvL25vdGlmeShcIkxvZ2luIHNlc3Npb24gZXhwaXJlZCFcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy9sb2dpbiBzY3JlZW4uIGtow7RuZyBsw6BtIGfDrCBj4bqjLlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHJvdXRlKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICByZXR1cm4gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICBsZXQgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgIFJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBpbmRleChkYXRhPzogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uaW5kZXhgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc3RvcmVgLGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRhaWwoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGV0YWlsYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGVsZXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5kZWxldGUodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGkiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgQmVkIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdiZWRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBQYXRpZW50IGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdwYXRpZW50cyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50IiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3VzZXJzJzsgLy9r4bq/IHRo4burYSBDUlVEIHThu6sgdGjhurFuZyBjaGFcclxuICB9XHJcbiAgYXN5bmMgbG9naW4oeyBkYXRhIH06IHtkYXRhOiB7dXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZ319KSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKFwiYXBpLmxvZ2luXCIpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpIHx8IHt9XHJcbiAgICAgIC8vc3VjY2Vzc1xyXG4gICAgdGhpcy5jb29raWVzLnNldCgndG9rZW4nLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInRva2VuXCIsIHVuZGVmaW5lZCksIHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd1c2VyJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ1c2VyXCIsIHt9KSx7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5yZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiKVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgYXN5bmMgdXBkYXRlUGFzc3dvcmQoZGF0YTogeyBpZDogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nfSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyB1c2VyVXBkYXRlUGFzc3dvcmQoZGF0YTogeyBpZDogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nfSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVzZXJVcGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgc2VhcmNoKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnNlYXJjaGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiLCJpbXBvcnQge1xyXG4gIEhvbWVPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgVXNlcmdyb3VwQWRkT3V0bGluZWQsXHJcbiAgVGVhbU91dGxpbmVkLFxyXG4gIFNjaGVkdWxlT3V0bGluZWQsXHJcbiAgU29sdXRpb25PdXRsaW5lZCxcclxuICBDYWxlbmRhck91dGxpbmVkLFxyXG4gIFZlcmlmaWVkT3V0bGluZWQsXHJcbiAgSW5zZXJ0Um93UmlnaHRPdXRsaW5lZCxcclxuICBMYXlvdXRPdXRsaW5lZCxcclxuICBDYXJyeU91dE91dGxpbmVkLFxyXG4gIExpbmVDaGFydE91dGxpbmVkXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyID0gW1xyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIixcclxuICAgIGljb246IDxIb21lT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlcnMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucm9vbXMuaW5kZXhcIixcclxuICAgIGljb246IDxJbnNlcnRSb3dSaWdodE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmJlZHMuaW5kZXhcIixcclxuICAgIGljb246IDxMYXlvdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5wYXRpZW50cy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hc3NpZ25tZW50XCIsXHJcbiAgICBpY29uOiA8U2NoZWR1bGVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRvY3RvckFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ubnVyc2VBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uaGVhbHRoU3RhdHVzZXMuaW5kZXhcIixcclxuICAgIGljb246IDxDYWxlbmRhck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFkbWluc0luZGV4XCIsXHJcbiAgICBpY29uOiA8VGVhbU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlckdyb3Vwcy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxVc2VyZ3JvdXBBZGRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyUGVybWlzc2lvbnMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VmVyaWZpZWRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY1wiLFxyXG4gICAgaWNvbjogPENhcnJ5T3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNzLmhlYWx0aFN0YXR1c1wiLFxyXG4gICAgICAgIGljb246IDxMaW5lQ2hhcnRPdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XHJcbiIsImltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuLi9fcm91dGVzLmpzb24nXHJcblxyXG5jb25zdCBjaGFyVG9OdW0gPSB7IEM6IDgsIFI6IDQsIFU6IDIsIEQ6IDEgfVxyXG5jb25zdCBjcnVkVG9EZWMgPSAodGV4dDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGV4dC50b1VwcGVyQ2FzZSgpLnNwbGl0KFwiXCIpLnJlZHVjZSgodG90YWw6IG51bWJlciwgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnKSA9PiB0b3RhbCArIGNoYXJUb051bVtjaGFyXSwgMClcclxuXHJcbn1cclxuY29uc3QgZGVjVG9DcnVkID0gKGRlYzogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGxldCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCdcclxuICAgIGZvciAoY2hhciBpbiBjaGFyVG9OdW0pIHtcclxuICAgICAgICBpZiAoKGRlYyAmIGNoYXJUb051bVtjaGFyXSkgPT0gY2hhclRvTnVtW2NoYXJdKSByZXN1bHQgKz0gY2hhclxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBoYXNQZXJtaXNzaW9uID0gKHJlcXVpcmVQZXJtaXNzaW9uOiBudW1iZXIsIHVzZXJQZXJtaXNzaW9uOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAodXNlclBlcm1pc3Npb24gJiByZXF1aXJlUGVybWlzc2lvbikgPT09IHJlcXVpcmVQZXJtaXNzaW9uXHJcbiAgfVxyXG5cclxuY29uc3QgY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnksIHVzZXJQZXJtaXNzaW9uczogYW55LCBzaG93RXJyb3I6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYoIXBlcm1pc3Npb25zKSByZXR1cm4gdHJ1ZVxyXG4gICAgbGV0IHBlcm1pc3Npb25BcnJheSA9IFtdXHJcbiAgICBmb3IgKGxldCBwZXJtaXNzaW9uIGluIHBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZVBlcm1pc3Npb24gPSBjcnVkVG9EZWMocGVybWlzc2lvbnNbcGVybWlzc2lvbl0pO1xyXG4gICAgICAgIGNvbnN0IHJvb3RQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb25zW1wicm9vdFwiXSB8fCAwXHJcbiAgICAgICAgbGV0IHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb25zW3Blcm1pc3Npb25dIHx8IDBcclxuICAgICAgICB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uIHwgcm9vdFBlcm1pc3Npb25cclxuICAgICAgICBpZiAoaGFzUGVybWlzc2lvbihyZXF1aXJlUGVybWlzc2lvbiwgdXNlclBlcm1pc3Npb24pKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIHBlcm1pc3Npb25BcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgcGVybWlzc2lvbjogcGVybWlzc2lvbixcclxuICAgICAgICAgICAgcmVxdWlyZVBlcm1pc3Npb246IGRlY1RvQ3J1ZChyZXF1aXJlUGVybWlzc2lvbiksXHJcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uOiBkZWNUb0NydWQodXNlclBlcm1pc3Npb24pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGlmICghc2hvd0Vycm9yKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9uQXJyYXlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjaGVja1Blcm1pc3Npb24sXHJcbiAgICBoYXNQZXJtaXNzaW9uLFxyXG4gICAgY3J1ZFRvRGVjLFxyXG4gICAgZGVjVG9DcnVkXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd2FpdC10by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==