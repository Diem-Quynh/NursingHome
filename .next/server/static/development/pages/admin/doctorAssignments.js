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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ "./pages/admin/doctorAssignments/index.tsx":
/*!*************************************************!*\
  !*** ./pages/admin/doctorAssignments/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_DoctorAssignmentService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/DoctorAssignmentService */ "./themes/services/api/DoctorAssignmentService.ts");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











const formaterDate = value => {
  value = value ? String(value) : "";
  value = value.substr(0, 10);
  return `${value}`;
};

const Index = ({
  doctorAssigns,
  total
}) => {
  const {
    t,
    notify,
    redirect,
    setStore,
    getAuth,
    getStore
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    0: hiddenDeleteBtn,
    1: setHiddenDeleteBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true);
  const {
    0: selectedIds,
    1: setSelectedIds
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]);
  const doctorAssignService = new themes_services_api_DoctorAssignmentService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    "admin.doctorAssignments": "C"
  });
  const deletePer = checkPermission({
    "admin.doctorAssignment": "D"
  });
  const columns = [{
    title: t("doctor"),
    dataIndex: 'fullname',
    key: 'users.fullname',
    sorter: true,
    filterable: true,
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.doctorAssignments.edit', {
        id: record.id
      })
    }, record.doctorCode, " - ", record.fullname)
  }, {
    title: t('room'),
    dataIndex: 'roomCode',
    key: 'roomCode',
    sorter: true,
    filterable: true,
    width: '15%'
  }, {
    title: t("doctorAssignments.dateBegin"),
    dataIndex: 'dateBegin',
    key: 'dateBegin',
    sorter: true,
    filterDate: true,
    width: '15%',
    render: (text, record) => __jsx("div", null, formaterDate(text))
  }, {
    title: t("doctorAssignments.dateEnd"),
    dataIndex: 'dateEnd',
    key: 'dateEnd',
    sorter: true,
    filterDate: true,
    width: '15%',
    render: (text, record) => __jsx("div", null, formaterDate(text))
  }, {
    title: t("note"),
    dataIndex: 'note',
    key: 'note'
  }];

  const onChangeSelection = data => {
    if (data.length > 0) {
      setHiddenDeleteBtn(false);
    } else {
      setHiddenDeleteBtn(true);
    }

    setSelectedIds(data);
  };

  const fetchData = async values => {
    let [error, doctorAssigns] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(doctorAssignService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return doctorAssigns;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(doctorAssignService.delete({
      ids: selectedIds
    }));

    if (error) {
      return notify(t(`errors:${error.code}`), t(`${error.message}`), 'error');
    }

    notify(t("message.recordDeleted"));

    if (tableRef.current !== null) {
      tableRef.current.reload();
    }

    setSelectedIds([]);
    setHiddenDeleteBtn(true);
  };

  const renderDeleteDialog = () => {
    return __jsx(themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: confirmRef,
      onSubmit: onDelete,
      title: t('deleteItem'),
      content: t('message.deleteConfirm')
    });
  };

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"], null, __jsx("div", {
    className: "content"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    hidden: !createPer,
    onClick: () => redirect("frontend.admin.doctorAssignments.create"),
    type: "primary",
    className: "btn-top"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["PlusCircleOutlined"], null), t('create')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    danger: true,
    onClick: () => {
      if (confirmRef.current) confirmRef.current.show();
    },
    className: "btn-top",
    hidden: hiddenDeleteBtn || !deletePer
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteOutlined"], null), t('delete')), __jsx(themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTable"], {
    ref: tableRef,
    columns: columns,
    data: doctorAssigns,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let doctorAssignService = new themes_services_api_DoctorAssignmentService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, doctorAssigns] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(doctorAssignService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    doctorAssigns: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(doctorAssigns, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(doctorAssigns, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "admin.doctorAssignments": "R",
  "doctor.doctorAssignments": "R",
  "admin.users.doctorAssignments": "R"
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "./themes/components/Table/SearchComponents/DatePicker.jsx":
/*!*****************************************************************!*\
  !*** ./themes/components/Table/SearchComponents/DatePicker.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  RangePicker
} = antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"];

class FilterDatePicker extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getDates", dateStrings => {
      if (!dateStrings) dateStrings = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value", []);
      if (!dateStrings) return {};
      if (!dateStrings[0]) dateStrings[0] = undefined;
      if (!dateStrings[1]) dateStrings[1] = undefined;
      return {
        dateStrings: dateStrings,
        dates: [dateStrings[0] ? moment__WEBPACK_IMPORTED_MODULE_3___default()(dateStrings[0]) : undefined, dateStrings[1] ? moment__WEBPACK_IMPORTED_MODULE_3___default()(dateStrings[1]) : undefined]
      };
    });

    _defineProperty(this, "onChange", (dates, dateStrings) => {
      this.setState(_objectSpread({}, this.getDates(dateStrings)), () => {
        this.onSubmit();
      });
    });

    _defineProperty(this, "clear", () => {
      this.setState({
        dateStrings: ''
      }, () => {
        this.onSubmit();
      });
    });

    _defineProperty(this, "onSubmit", () => {
      const {
        column,
        confirm
      } = this.props;
      let filters = [];

      if (this.state.dateStrings && this.state.dateStrings[0] && this.state.dateStrings[1]) {
        filters.push({
          field: column.field,
          operator: this.props.operator || 'between',
          value: [moment__WEBPACK_IMPORTED_MODULE_3___default()(this.state.dateStrings[0]).startOf("days").add(14, 'h').toISOString(), moment__WEBPACK_IMPORTED_MODULE_3___default()(this.state.dateStrings[1]).endOf("days").add(14, 'h').toISOString()]
        });
      }

      confirm(filters);
    });

    this.state = _objectSpread({}, this.getDates());
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
      this.setState(_objectSpread({}, this.getDates()));
    }
  }

  render() {
    const _this$props = this.props,
          {
      confirm,
      column
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["confirm", "column"]);

    return __jsx("div", {
      style: {
        padding: 8
      }
    }, __jsx(RangePicker, _extends({}, otherProps, {
      allowEmpty: (true, true),
      ref: ref => this.refInput = ref,
      value: this.state.dates,
      onChange: this.onChange,
      onPressEnter: this.onSubmit,
      style: {
        width: "256px",
        marginBottom: 8
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true
    }, "Clear"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FilterDatePicker);

/***/ }),

/***/ "./themes/components/Table/SearchComponents/Dropdown.jsx":
/*!***************************************************************!*\
  !*** ./themes/components/Table/SearchComponents/Dropdown.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const InputGroup = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Group;

class FilterDropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      values: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value", [])
    });

    _defineProperty(this, "onChange", values => {
      this.setState({
        values: values
      });
    });

    _defineProperty(this, "onSubmit", () => {
      const {
        column,
        confirm
      } = this.props;
      let filters = [];

      if (this.state.values && this.state.values.length > 0) {
        filters = [{
          field: column.field,
          operator: this.props.operator || 'in',
          value: this.state.values
        }];
        /* filters = this.state.values.map(value => ({
            field: column.field,
            operator: this.props.operator || '=',
            value: value
        })) */
      }

      confirm(filters);
    });
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
      let values = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value", []);

      this.setState({
        values: values
      });
    }
  }

  renderOptions() {
    if (!this.props.options) return;
    return this.props.options.map(option => __jsx(Option, {
      key: option.value,
      value: option.value,
      label: option.label
    }, option.label));
  }

  render() {
    const _this$props = this.props,
          {
      confirm,
      column,
      options,
      searchBtnText,
      clearBtnText
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["confirm", "column", "options", "searchBtnText", "clearBtnText"]);

    return __jsx("div", {
      style: {
        padding: 8
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], _extends({
      mode: "multiple"
    }, otherProps, {
      allowClear: true,
      autoFocus: true,
      ref: ref => this.refInput = ref,
      value: this.state.values,
      onChange: this.onChange,
      onBlur: this.onSubmit,
      optionFilterProp: "label",
      style: {
        width: '250px',
        marginBottom: 8,
        display: "block"
      }
    }), this.renderOptions()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FilterDropdown);

/***/ }),

/***/ "./themes/components/Table/SearchComponents/Input.jsx":
/*!************************************************************!*\
  !*** ./themes/components/Table/SearchComponents/Input.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

class FilterInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value"),
      operator: this.props.operator || "contains"
    });

    _defineProperty(this, "onChange", e => {
      this.setState({
        value: e.target.value
      });
    });

    _defineProperty(this, "clear", () => {
      this.setState({
        value: ''
      }, () => {
        this.onSubmit();
      });
    });

    _defineProperty(this, "onSubmit", () => {
      const {
        column,
        confirm
      } = this.props;
      let filters = [];

      if (this.state.value) {
        filters.push({
          field: column.field,
          operator: this.state.operator,
          value: this.state.value
        });
      }

      confirm(filters);
    });
  }

  componentDidUpdate(prevProps) {
    if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value") != lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(prevProps.column, "filteredValue[0].value")) {
      this.setState({
        value: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value")
      });
    }

    if (this.visibleSearch != this.props.column.visibleSearch) {
      this.visibleSearch = this.props.column.visibleSearch;
      this.refInput.input.select();
    }
  }

  renderOperator() {
    const {
      messages = {},
      hideOperator,
      operator
    } = this.props;
    if (hideOperator) return;
    let operators = [{
      value: "contains",
      label: messages['contains'] || "Contains"
    }, {
      value: "=",
      label: messages['equal'] || "Equals"
    }, {
      value: "startWiths",
      label: messages['startWiths'] || "StartWiths"
    }, {
      value: "endWiths",
      label: messages['endWiths'] || "EndWiths"
    }];

    if (this.props.type == "number") {
      operators = [{
        value: "=",
        label: '='
      }, {
        value: ">",
        label: '>'
      }, {
        value: "<",
        label: '<'
      }, {
        value: ">=",
        label: '>='
      }, {
        value: "<=",
        label: '<='
      }];
    }

    const defaultOperator = operator || operators[0].value;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      defaultValue: defaultOperator,
      style: {
        width: 90
      },
      onChange: value => this.setState({
        operator: value
      })
    }, operators.map(operator => __jsx(Option, {
      value: operator.value,
      key: operator.value
    }, operator.label)));
  }

  render() {
    const _this$props = this.props,
          {
      confirm,
      column,
      hideOperator,
      type
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["confirm", "column", "hideOperator", "type"]);

    let Component = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
    if (type == "number") Component = antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"];
    return __jsx("div", {
      style: {
        padding: 8
      }
    }, __jsx(Component, _extends({}, otherProps, {
      addonBefore: this.renderOperator(),
      ref: ref => this.refInput = ref,
      value: this.state.value,
      onChange: this.onChange,
      onPressEnter: this.onSubmit,
      allowClear: true,
      style: {
        width: "250px",
        marginBottom: 8,
        display: 'block'
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true
    }, "Clear"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FilterInput);

/***/ }),

/***/ "./themes/components/Table/SearchComponents/RadioButton.jsx":
/*!******************************************************************!*\
  !*** ./themes/components/Table/SearchComponents/RadioButton.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Group
} = antd__WEBPACK_IMPORTED_MODULE_1__["Radio"];

class FilterCheck extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getChecked", checked => {
      if (checked == undefined) checked = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.props.column, "filteredValue[0].value", undefined);
      return {
        checked: checked
      };
    });

    _defineProperty(this, "onChange", e => {
      this.setState(_objectSpread({}, this.getChecked(e.target.value)), () => {
        this.onSubmit();
      });
    });

    _defineProperty(this, "clear", () => {
      this.setState({
        checked: undefined
      }, () => {
        this.onSubmit();
      });
    });

    _defineProperty(this, "onSubmit", () => {
      const {
        column,
        confirm
      } = this.props;
      let filters = [];

      if (this.state.checked != undefined) {
        filters.push({
          field: column.field,
          operator: this.props.operator || '=',
          value: this.state.checked
        });
      }

      confirm(filters);
    });

    this.state = _objectSpread({}, this.getChecked());
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.column.filteredValue) != JSON.stringify(this.props.column.filteredValue)) {
      this.setState(_objectSpread({}, this.getChecked()));
    }
  }

  render() {
    const _this$props = this.props,
          {
      confirm,
      column
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["confirm", "column"]);

    return __jsx("div", {
      style: {
        padding: 8
      }
    }, __jsx(Group, _extends({}, otherProps, {
      ref: ref => this.refInput = ref,
      value: this.state.checked,
      onChange: this.onChange,
      options: column.options,
      style: {
        width: "150px",
        marginBottom: 8
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true
    }, "Clear"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FilterCheck);

/***/ }),

/***/ "./themes/components/Table/Table.jsx":
/*!*******************************************!*\
  !*** ./themes/components/Table/Table.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var themes_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! themes/route */ "./themes/route.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-highlight-words */ "react-highlight-words");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SearchComponents_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchComponents/Input */ "./themes/components/Table/SearchComponents/Input.jsx");
/* harmony import */ var _SearchComponents_DatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchComponents/DatePicker */ "./themes/components/Table/SearchComponents/DatePicker.jsx");
/* harmony import */ var _SearchComponents_RadioButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchComponents/RadioButton */ "./themes/components/Table/SearchComponents/RadioButton.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class GridTable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "defaultOptionToColumns", defaultOptions => {
      this.columns = this.columns.map(column => {
        //set field
        if (!column.field) column.field = column.key;
        let sort = defaultOptions.sorting.find(item => item.field === column.field);

        if (sort) {
          let {
            direction
          } = sort;
          column.sortOrder = direction === "asc" ? 'ascend' : 'descend';
        }

        let filters = defaultOptions.filters.filter(item => item.field === column.field);

        if (filters.length) {
          column.filteredValue = [...filters];
        } else {
          delete column.filteredValue;
        }

        if (column.filterable) {
          //    delete column.filterable;
          column = _objectSpread(_objectSpread({}, column), this.getColumnSearchProps(column, 'input'));
        }

        if (column.filterDate) {
          //    delete column.filterable;
          column = _objectSpread(_objectSpread({}, column), this.getColumnSearchProps(column, 'date'));
        }

        if (column.filterCheck) {
          column = _objectSpread(_objectSpread({}, column), this.getColumnSearchProps(column, 'check'));
        }

        return column;
      });
    });

    _defineProperty(this, "getColumnSearchProps", (column, type) => {
      let ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
      return {
        filterDropdown: ({
          confirm,
          setSelectedKeys
        }) => {
          let confirmFnc = values => {
            let currentColumn = this.columns.find(c => c.dataIndex === column.dataIndex);
            setSelectedKeys(values);
            confirm();
            this.reload();
          };

          if (column.renderFilter) {
            return column.renderFilter({
              column,
              confirm: confirmFnc,
              ref
            });
          }

          if (type == 'input') return __jsx(_SearchComponents_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
            column: column,
            ref: ref,
            confirm: confirmFnc
          });
          if (type == 'date') return __jsx(_SearchComponents_DatePicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
            column: column,
            ref: ref,
            confirm: confirmFnc
          });
          if (type == 'check') return __jsx(_SearchComponents_RadioButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
            column: column,
            ref: ref,
            confirm: confirmFnc
          });
        },
        filterIcon: filtered => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SearchOutlined"], {
          style: {
            color: filtered ? "#1890ff" : undefined
          }
        }),
        onFilterDropdownVisibleChange: visible => {
          if (!visible && column.visibleSearch != visible) {
            column.visibleSearch = visible;

            if (ref.current) {
              ref.current.onSubmit();
            }
          }

          column.visibleSearch = visible;
        }
      };
    });

    _defineProperty(this, "clearAll", async () => {
      let {
        pageSize,
        page
      } = this.pagination;
      await this.handleTableChange({
        pageSize,
        current: page
      }, {}, {});
    });

    _defineProperty(this, "setFiltersToColumns", (filters = {}) => {
      this.columns = this.columns.map(column => {
        let filter = filters[column.field];

        if (filter) {
          column.filteredValue = filter;
        } else {
          delete column.filteredValue;
        }

        return column;
      });
    });

    _defineProperty(this, "setSorterToColumns", (sorter = {}) => {
      this.columns = this.columns.map(column => {
        if (column.key == sorter.columnKey) {
          column.sortOrder = sorter.order;
        } else {
          delete column.sortOrder;
        }

        return column;
      });
    });

    _defineProperty(this, "setPagination", pagination => {
      this.pagination = {
        pageSize: pagination.pageSize,
        page: pagination.current - 1
      };
    });

    _defineProperty(this, "handleTableChange", async (pagination, filters, sorter) => {
      this.setFiltersToColumns(filters);
      this.setSorterToColumns(sorter);
      this.setPagination(pagination);
      this.reload();
    });

    _defineProperty(this, "buildFetchData", () => {
      let params = {
        filters: [],
        sorting: [],
        pageSize: this.pagination.pageSize,
        page: this.pagination.page
      };
      this.columns.map(column => {
        if (column.filteredValue) {
          params.filters = [...params.filters, ...column.filteredValue];
        }

        if (column.sortOrder) {
          params.sorting.push({
            field: column.field,
            direction: column.sortOrder == "ascend" ? "asc" : "desc"
          });
        }
      });
      return params;
    });

    _defineProperty(this, "getPagination", (pagination = {}) => {
      const {
        pageSize,
        page
      } = this.pagination;
      return _objectSpread(_objectSpread({}, pagination), {}, {
        total: this.total,
        position: 'bottom',
        pageSize: pageSize || 50,
        current: page + 1,
        showSizeChanger: true,
        pageSizeOptions: ['2', '10', '50', '100', '200', '500']
      });
    });

    this.initialProps = {
      bordered: true,
      size: 'middle',
      showHeader: true,
      hasData: true
    };
    this.state = {
      loading: false,
      reload: false
    };
    this.pagination = {};
    this.total = this.props.total || 100;
    this.data = this.props.data;
    this.handleTableChange = this.handleTableChange.bind(this);
  }
  /**
   * Khởi tạo các options từ query trên url
   */


  init() {
    const query = this.props.router.query;
    const defaultOptions = GridTable.getDataFromQuery(query, this.props);
    this.pagination = {
      pageSize: defaultOptions.pageSize || 50,
      page: defaultOptions.page || 0
    };
    this.columns = this.props.columns;
    this.defaultOptionToColumns(defaultOptions);
  }
  /**
   * Convert lại dữ liệu từ query đổi sang đúng format của column trong antd
   */


  componentDidMount() {
    this.init();
    this.setState({
      reload: !this.state.reload
    });
  }

  componentDidUpdate(prevProps) {
    //update data trong trường hợp đổi từ props bên ngoài
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      this.data = this.props.data;
    }

    if (JSON.stringify(this.props.router.query) != JSON.stringify(prevProps.router.query)) {
      this.init();
      this.setState({
        reload: !this.state.reload
      }); //chỉ cần render lại view
    }
  }

  static makeQuery(options) {
    const {
      filters = [],
      sorting = [],
      pageSize,
      page
    } = options;
    let queryObj = {
      f: [],
      s: {},
      ps: pageSize,
      p: page
    };

    for (let filter of filters) {
      queryObj.f.push([filter.field, filter.operator || 'contains', filter.value]);
    }

    for (let sort of sorting) {
      queryObj.s[sort.field] = sort.direction;
    }

    return js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].encode(JSON.stringify(queryObj));
  }
  /**
   * Khai báo các function cho dropdown search box
   */


  /**
   * Reload Table
   */
  async reload() {
    this.setState({
      loading: true
    });

    if (typeof this.props.fetchData === 'function') {
      const params = this.buildFetchData();
      const queryOptions = GridTable.makeQuery(params); // console.log(params, queryOptions)

      Object(themes_route__WEBPACK_IMPORTED_MODULE_3__["addQuery"])({
        filters: queryOptions
      });
      let result = (await this.props.fetchData(params)) || {};
      if (result.total != undefined) this.total = result.total;
      this.data = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(result, 'data', []);
    }

    this.setState({
      loading: false
    });
  }
  /**
   * Set filter từ table vào biến this.columns để controlled
   */


  static getDataFromQuery(query = {}, defaultOptions = {}) {
    let queryObj = query.filters || {};

    if (typeof query.filters == 'string') {
      try {
        queryObj = JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].decode(query.filters));
      } catch (e) {
        throw new Error(`filters params invalid format.`);
      }
    }

    if (!queryObj) return {};
    let filters = queryObj.f || [];
    let sorting = queryObj.s || {};
    let queryOut = {
      filters: defaultOptions.filters || [],
      sorting: defaultOptions.sorting || [],
      pageSize: queryObj.ps || defaultOptions.pageSize,
      page: queryObj.p || defaultOptions.page
    };

    for (let filter of filters) {
      queryOut.filters.push({
        field: filter[0],
        operator: filter[1],
        value: filter[2]
      });
    }

    for (let field in sorting) {
      queryOut.sorting.push({
        field: field,
        direction: sorting[field]
      });
    }

    return queryOut;
  }

  static getOptions(query, defaultOptions) {
    if (query && Object.keys(query).length > 0) return this.getDataFromQuery(query, defaultOptions);
    return defaultOptions;
  }
  /**
   * Build data từ this.columns để khớp với format trên server
   */


  render() {
    const _this$props = this.props,
          {
      hasData = true,
      data = [],
      ellipsis,
      fetchData,
      columns,
      pagination
    } = _this$props,
          otherProps = _objectWithoutProperties(_this$props, ["hasData", "data", "ellipsis", "fetchData", "columns", "pagination"]);

    return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], _extends({}, this.initialProps, {
      // tableLayout="fixed"
      scroll: {
        x: 900,
        scrollToFirstRowOnChange: true
      }
    }, otherProps, {
      columns: this.columns,
      dataSource: hasData ? this.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
        key: row.id
      })) : null,
      onChange: this.handleTableChange,
      loading: this.state.loading,
      pagination: this.getPagination(pagination)
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GridTable);

/***/ }),

/***/ "./themes/components/Table/TableTsx.tsx":
/*!**********************************************!*\
  !*** ./themes/components/Table/TableTsx.tsx ***!
  \**********************************************/
/*! exports provided: default, GridTableHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTableHelper", function() { return GridTableHelper; });
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./themes/components/Table/Table.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GridTableWithRouter = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(_Table__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    ref: ref,
    router: router
  }, props));
});
GridTableWithRouter.getOptions = _Table__WEBPACK_IMPORTED_MODULE_0__["default"].getOptions;
GridTableWithRouter.getDataFromQuery = _Table__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromQuery;
GridTableWithRouter.makeQuery = _Table__WEBPACK_IMPORTED_MODULE_0__["default"].makeQuery;
const GridTableHelper = {
  getOptions: _Table__WEBPACK_IMPORTED_MODULE_0__["default"].getOptions,
  getDataFromQuery: _Table__WEBPACK_IMPORTED_MODULE_0__["default"].getDataFromQuery,
  makeQuery: _Table__WEBPACK_IMPORTED_MODULE_0__["default"].makeQuery
};
/* harmony default export */ __webpack_exports__["default"] = (GridTableWithRouter);


/***/ }),

/***/ "./themes/components/Table/index.tsx":
/*!*******************************************!*\
  !*** ./themes/components/Table/index.tsx ***!
  \*******************************************/
/*! exports provided: GridTable, GridTableHelper, FilterInput, FilterDropdown, FilterDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableTsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableTsx */ "./themes/components/Table/TableTsx.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridTable", function() { return _TableTsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridTableHelper", function() { return _TableTsx__WEBPACK_IMPORTED_MODULE_0__["GridTableHelper"]; });

/* harmony import */ var _SearchComponents_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchComponents/Input */ "./themes/components/Table/SearchComponents/Input.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterInput", function() { return _SearchComponents_Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SearchComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchComponents/Dropdown */ "./themes/components/Table/SearchComponents/Dropdown.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDropdown", function() { return _SearchComponents_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SearchComponents_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchComponents/DatePicker */ "./themes/components/Table/SearchComponents/DatePicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterDatePicker", function() { return _SearchComponents_DatePicker__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// import Table from './Table'






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

/***/ "./themes/services/api/DoctorAssignmentService.ts":
/*!********************************************************!*\
  !*** ./themes/services/api/DoctorAssignmentService.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class DoctorAssignment extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'doctorAssignments';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DoctorAssignment);

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

/***/ 11:
/*!*******************************************************!*\
  !*** multi ./pages/admin/doctorAssignments/index.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\doctorAssignments\index.tsx */"./pages/admin/doctorAssignments/index.tsx");


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

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-base64");

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

/***/ "react-highlight-words":
/*!****************************************!*\
  !*** external "react-highlight-words" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-highlight-words");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vZG9jdG9yQXNzaWdubWVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9TdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvVGFibGVUc3gudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2sudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL0FkbWluLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL01lbnUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvSTE4bi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3RFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmFzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvRG9jdG9yQXNzaWdubWVudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy91dGlscy9QZXJtaXNzaW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3YWl0LXRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1iYXNlNjRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhpZ2hsaWdodC13b3Jkc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtcGF0dGVyblwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZm9ybWF0ZXJEYXRlIiwiU3RyaW5nIiwic3Vic3RyIiwiSW5kZXgiLCJkb2N0b3JBc3NpZ25zIiwidG90YWwiLCJ0IiwicmVkaXJlY3QiLCJzZXRTdG9yZSIsImdldEF1dGgiLCJnZXRTdG9yZSIsInVzZUJhc2VIb29rIiwiaGlkZGVuRGVsZXRlQnRuIiwic2V0SGlkZGVuRGVsZXRlQnRuIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkcyIsInNldFNlbGVjdGVkSWRzIiwiZG9jdG9yQXNzaWduU2VydmljZSIsIkRvY3RvckFzc2lnblNlcnZpY2UiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwidGFibGVSZWYiLCJjaGVja1Blcm1pc3Npb24iLCJ1c2VQZXJtaXNzaW9uSG9vayIsImNyZWF0ZVBlciIsImRlbGV0ZVBlciIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInNvcnRlciIsImZpbHRlcmFibGUiLCJ0ZXh0IiwicmVjb3JkIiwiaWQiLCJkb2N0b3JDb2RlIiwiZnVsbG5hbWUiLCJ3aWR0aCIsImZpbHRlckRhdGUiLCJvbkNoYW5nZVNlbGVjdGlvbiIsImxlbmd0aCIsImZldGNoRGF0YSIsInZhbHVlcyIsInRvIiwiaW5kZXgiLCJjb2RlIiwib25EZWxldGUiLCJkZWxldGUiLCJpZHMiLCJjdXJyZW50IiwicmVuZGVyRGVsZXRlRGlhbG9nIiwic2hvdyIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwiZGVmYXVsdE9wdGlvbnMiLCJmaWx0ZXJzIiwic29ydGluZyIsIkdyaWRUYWJsZUhlbHBlciIsImdldE9wdGlvbnMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJnZXREYXRhIiwiZGVmYXVsdFF1ZXJ5IiwibWFrZVF1ZXJ5IiwicGVybWlzc2lvbnMiLCJicmVhZENydW1iQ29tcG9uZW50IiwibGFuZyIsImdldFJvdXRlTmFtZSIsInJvdXRlUGF0aCIsInJvdXRlRGF0YSIsIl9yb3V0ZXMiLCJyb3V0ZU5hbWUiLCJyb3V0ZUVsZW1lbnQiLCJhY3Rpb24iLCJicmVhZEN1bWJzIiwicm91dGVzIiwiZ2V0QnJlYWRjcnVtYnMiLCJ1bnNoaWZ0IiwibGlua1Byb3BzIiwibWFrZVVybCIsImNvbmZpcm0iLCJNb2RhbCIsIkNvbmZpcm1EaWFsb2ciLCJvbkNhbmNlbCIsInN0YXRlIiwib25TdWJtaXQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvbk9rIiwicmVkdWNlciIsInR5cGUiLCJfIiwicGF5bG9hZCIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsImRldlRvb2xFeHRlbnNpb25zIiwiaXNTZXJ2ZXIiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwiY3JlYXRlU3RvcmUiLCJSYW5nZVBpY2tlciIsIkRhdGVQaWNrZXIiLCJGaWx0ZXJEYXRlUGlja2VyIiwiZGF0ZVN0cmluZ3MiLCJjb2x1bW4iLCJkYXRlcyIsIm1vbWVudCIsImdldERhdGVzIiwib3BlcmF0b3IiLCJzdGFydE9mIiwiYWRkIiwidG9JU09TdHJpbmciLCJlbmRPZiIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFZhbHVlIiwib3RoZXJQcm9wcyIsInBhZGRpbmciLCJyZWZJbnB1dCIsIm1hcmdpbkJvdHRvbSIsImNsZWFyIiwiT3B0aW9uIiwiU2VsZWN0IiwiSW5wdXRHcm91cCIsIklucHV0IiwiR3JvdXAiLCJGaWx0ZXJEcm9wZG93biIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJsYWJlbCIsInNlYXJjaEJ0blRleHQiLCJjbGVhckJ0blRleHQiLCJkaXNwbGF5IiwiRmlsdGVySW5wdXQiLCJ2aXNpYmxlU2VhcmNoIiwiaW5wdXQiLCJzZWxlY3QiLCJyZW5kZXJPcGVyYXRvciIsIm1lc3NhZ2VzIiwiaGlkZU9wZXJhdG9yIiwib3BlcmF0b3JzIiwiZGVmYXVsdE9wZXJhdG9yIiwiSW5wdXROdW1iZXIiLCJSYWRpbyIsIkZpbHRlckNoZWNrIiwiY2hlY2tlZCIsImdldENoZWNrZWQiLCJHcmlkVGFibGUiLCJzb3J0IiwiZmluZCIsIml0ZW0iLCJkaXJlY3Rpb24iLCJzb3J0T3JkZXIiLCJmaWx0ZXIiLCJnZXRDb2x1bW5TZWFyY2hQcm9wcyIsImZpbHRlckNoZWNrIiwiZmlsdGVyRHJvcGRvd24iLCJzZXRTZWxlY3RlZEtleXMiLCJjb25maXJtRm5jIiwiY3VycmVudENvbHVtbiIsImMiLCJyZW5kZXJGaWx0ZXIiLCJmaWx0ZXJJY29uIiwiZmlsdGVyZWQiLCJjb2xvciIsIm9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwidmlzaWJsZSIsInBhZ2VTaXplIiwicGFnaW5hdGlvbiIsImhhbmRsZVRhYmxlQ2hhbmdlIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJzZXRGaWx0ZXJzVG9Db2x1bW5zIiwic2V0U29ydGVyVG9Db2x1bW5zIiwic2V0UGFnaW5hdGlvbiIsInBvc2l0aW9uIiwic2hvd1NpemVDaGFuZ2VyIiwicGFnZVNpemVPcHRpb25zIiwiYm9yZGVyZWQiLCJzaXplIiwic2hvd0hlYWRlciIsImhhc0RhdGEiLCJsb2FkaW5nIiwiYmluZCIsImluaXQiLCJnZXREYXRhRnJvbVF1ZXJ5IiwiZGVmYXVsdE9wdGlvblRvQ29sdW1ucyIsImNvbXBvbmVudERpZE1vdW50IiwicXVlcnlPYmoiLCJmIiwicyIsInBzIiwiQmFzZTY0IiwiZW5jb2RlIiwiYnVpbGRGZXRjaERhdGEiLCJxdWVyeU9wdGlvbnMiLCJhZGRRdWVyeSIsInBhcnNlIiwiRXJyb3IiLCJxdWVyeU91dCIsImtleXMiLCJlbGxpcHNpcyIsIngiLCJzY3JvbGxUb0ZpcnN0Um93T25DaGFuZ2UiLCJyb3ciLCJnZXRQYWdpbmF0aW9uIiwiR3JpZFRhYmxlV2l0aFJvdXRlciIsImZvcndhcmRSZWYiLCJ1c2VSb3V0ZXIiLCJUYWJsZSIsInVzZUJhc2VIb29rcyIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRTdG9yZUFjdGlvbiIsInVzZVNlbGVjdG9yIiwibmV4dFJvdXRlIiwib2JqIiwiZGVmYXVsdFZhbHVlIiwiZGVzY3JpcHRpb24iLCJub3RpZmljYXRpb24iLCJkdXJhdGlvbiIsImF1dGgiLCJnZXRDb29raWVzIiwiY29va2llcyIsImdldFB1YmxpY1J1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiUGVybWlzc2lvbkhvb2siLCJ1c2VyUGVybWlzc2lvbnMiLCJnZXRVc2VyUGVybWlzc2lvbiIsIl9jaGVja1Blcm1pc3Npb24iLCJUSEVNRSIsIlRpdGxlIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwiQWRtaW4iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwib25Db2xsYXBzZUNoYW5nZSIsImxvZyIsInVwZGF0ZVNpemUiLCJtb2JpbGUiLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTSVRFX05BTUUiLCJUSVRMRSIsIkRFU0NSSVBUSU9OIiwiTE9HTyIsImhlaWdodCIsImRpc2FibGVkU2VhcmNoIiwieWVhciIsInF1ZXJ5U2VsZWN0b3IiLCJIZWFkZXIiLCJTdWJNZW51IiwiTWVudSIsIlNlYXJjaCIsIkFkbWluSGVhZGVyIiwidXNlclNlcnZpY2UiLCJVc2VyU2VydmljZSIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJjb29raWVPYmplY3QiLCJoYW5kbGVDbGlja01lbnUiLCJyZWRpcmVjdExvZ2luIiwiQ29va2llcyIsInJlbW92ZSIsInRva2VuIiwidXNlciIsIm9wdGlvbnNQYXRpZW50cyIsIm9wdGlvbnNCZWRzIiwib3B0aW9uc1VzZXJzIiwib25DaGFuZ2VTZWFyY2giLCJmaWx0ZXJQYXRpZW50cyIsImZpbHRlckJlZHMiLCJmaWx0ZXJVc2VycyIsImVyclVzZXJzIiwiZGF0YVVzZXJzIiwiZXJyUGF0aWVudHMiLCJkYXRhUGF0aWVudHMiLCJlcnJCZWRzIiwiZGF0YUJlZHMiLCJvbkJsdXJTZWFyY2giLCJyZW5kZXJDb25maXJtRGlhbG9nIiwib25DaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJ1c2VyVXBkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0b3JQYXNzd29yZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVuZGVyQ2hhbmdlUGFzc01vZGFsIiwiZm9ybUNoYW5nZVBhc3N3b3JkIiwiRm9ybSIsInVzZUZvcm0iLCJyZXBhc3N3b3JkIiwic3VibWl0Iiwic3BhbiIsInJlcXVpcmVkIiwicmVuZGVyUmlnaHRDb250ZW50IiwibWVudUljb25Qcm9wcyIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzIiwiYWNjb3VudFBvcHVwIiwidXNlcm5hbWUiLCJlbWFpbCIsInBob25lIiwicmVuZGVyVGl0bGUiLCJyZW5kZXJJdGVtIiwibGluayIsImp1c3RpZnlDb250ZW50IiwiZmxvYXQiLCJyb29tQ29kZSIsImJlZElkIiwicmVuZGVyU2VhcmNoIiwiTWVudUNvbXBvbmVudCIsImdlbmVyYXRlTWVudXMiLCJpY29uIiwibWVudSIsInRoZW1lIiwidFJlYWR5IiwiY3VycmVudFJvdXRlTmFtZSIsImJyZWFkY3VtcyIsImdldFNpZGViYXJTZWxlY3RlZHMiLCJyb3V0ZXJOYW1lcyIsImJyZWFkY3VtIiwic2VsZWN0ZWRLZXlzIiwicG9wIiwic2lkZWJhciIsIm51bUZvcm1hdHRlciIsIm51bSIsInRvRml4ZWQiLCJQcm9maWxlIiwicHJvZmlsZUluZm8iLCJjb21wYW55TG9nbyIsImdyb3VwTmFtZSIsInVzZXJGdWxsbmFtZSIsImNvbXBhbnlOYW1lIiwiY29tcGFueUFkZHJlc3MiLCJ0b2RheSIsIlNpZGVyIiwic2lkZUJhciIsImRlZmF1bHRDb29raWUiLCJOZXh0STE4TmV4dCIsImRlZmF1bHQiLCJnZXRDb25maWciLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiZGVmYXVsdE5TIiwiZGVmYXVsdExhbmd1YWdlIiwiTEFORyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsImJyb3dzZXJMYW5ndWFnZURldGVjdGlvbiIsInNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIlJlcXVlc3QiLCJjb29raWVzU3RyaW5nIiwiaGFuZGxlR2xvYmFsQ2FsbGJhY2siLCJoYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImhhbmRsZUdsb2JhbCIsImhhbmRsZUdsb2JhbEVycm9yIiwiZ2V0QXBwVXJsIiwiQVBJX0hPU1QiLCJiZWZvcmVSZXF1ZXN0IiwiYWZ0ZXJSZXF1ZXN0IiwiUmVxdWVzdEV4Y2VwdGlvbiIsInBvc3QiLCJwdXQiLCJVcmxQYXR0ZXJuIiwicXVlcnlTdHJpbmciLCJSb3V0ZSIsInJvdXRlQ29uZmlnIiwicGF0dGVybiIsImFzVXJsIiwiaW5kZXhPZiIsImxvY2F0aW9uIiwib2xkUXVlcnkiLCJxdWVyeVN0cmluZ0FwcGVuZCIsInJvdXRlUGF0aHMiLCJzaWRlYmFyU2VsZWN0ZWROYW1lIiwicGFyZW50IiwiQmFzZUFwaSIsImNvbnRleHQiLCJzdGF0dXMiLCJjb29raWVzT2JqIiwibmV4dENvb2tpZSIsImdsb2JhbEhhbmRsZUNhbGxiYWNrIiwiZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayIsImNyZWF0ZSIsImRldGFpbCIsImVkaXQiLCJCZWQiLCJEb2N0b3JBc3NpZ25tZW50IiwiUGF0aWVudCIsIlVzZXIiLCJsb2dpbiIsInVwZGF0ZVBhc3N3b3JkIiwic2VhcmNoIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsInJlZHVjZSIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsInNob3dFcnJvciIsInBlcm1pc3Npb25BcnJheSIsInBlcm1pc3Npb24iLCJyb290UGVybWlzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcZG9jdG9yQXNzaWdubWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJ3RoZW1lcy9sYXlvdXRzL0FkbWluJ1xyXG5pbXBvcnQgeyBHcmlkVGFibGUsIEdyaWRUYWJsZUhlbHBlciwgRmlsdGVySW5wdXQgfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgRG9jdG9yQXNzaWduU2VydmljZSBmcm9tICd0aGVtZXMvc2VydmljZXMvYXBpL0RvY3RvckFzc2lnbm1lbnRTZXJ2aWNlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tIFwidGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rXCI7XHJcbmltcG9ydCB7UGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgZm9ybWF0ZXJEYXRlID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICB2YWx1ZSA9IHZhbHVlPyBTdHJpbmcodmFsdWUpIDogXCJcIlxyXG4gIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsMTApXHJcbiAgcmV0dXJuIGAke3ZhbHVlfWBcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAoeyBkb2N0b3JBc3NpZ25zLCB0b3RhbCB9OiB7IGRvY3RvckFzc2lnbnM6IERvY3RvckFzc2lnbm1lbnRbXSwgdG90YWw6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgW2hpZGRlbkRlbGV0ZUJ0biwgc2V0SGlkZGVuRGVsZXRlQnRuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3NlbGVjdGVkSWRzLCBzZXRTZWxlY3RlZElkc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBkb2N0b3JBc3NpZ25TZXJ2aWNlID0gbmV3IERvY3RvckFzc2lnblNlcnZpY2UoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBSZWFjdC5jcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG4gIGNvbnN0IHRhYmxlUmVmID0gUmVhY3QuY3JlYXRlUmVmPEdyaWRUYWJsZT4oKVxyXG4gIGNvbnN0IHsgY2hlY2tQZXJtaXNzaW9uIH0gPSB1c2VQZXJtaXNzaW9uSG9vaygpO1xyXG4gIGNvbnN0IGNyZWF0ZVBlciA9IGNoZWNrUGVybWlzc2lvbih7XHJcbiAgICBcImFkbWluLmRvY3RvckFzc2lnbm1lbnRzXCI6IFwiQ1wiXHJcbiAgfSlcclxuICBjb25zdCBkZWxldGVQZXIgPSBjaGVja1Blcm1pc3Npb24oe1xyXG4gICAgXCJhZG1pbi5kb2N0b3JBc3NpZ25tZW50XCI6IFwiRFwiXHJcbiAgfSlcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogdChcImRvY3RvclwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnZnVsbG5hbWUnLFxyXG4gICAgICBrZXk6ICd1c2Vycy5mdWxsbmFtZScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgZmlsdGVyYWJsZTp0cnVlLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0OiBzdHJpbmcsIHJlY29yZDogYW55KSA9PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5lZGl0JywgXHJcbiAgICAgICAgeyBpZDogcmVjb3JkLmlkIH0pfT57cmVjb3JkLmRvY3RvckNvZGV9IC0ge3JlY29yZC5mdWxsbmFtZX08L2E+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdCgncm9vbScpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdyb29tQ29kZScsXHJcbiAgICAgIGtleTogJ3Jvb21Db2RlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOnRydWUsXHJcbiAgICAgIHdpZHRoOiAnMTUlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJkb2N0b3JBc3NpZ25tZW50cy5kYXRlQmVnaW5cIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2RhdGVCZWdpbicsXHJcbiAgICAgIGtleTogJ2RhdGVCZWdpbicsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgZmlsdGVyRGF0ZTogdHJ1ZSxcclxuICAgICAgd2lkdGg6ICcxNSUnLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0OiBzdHJpbmcsIHJlY29yZDogYW55KSA9PiA8ZGl2Pntmb3JtYXRlckRhdGUodGV4dCl9PC9kaXY+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdChcImRvY3RvckFzc2lnbm1lbnRzLmRhdGVFbmRcIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2RhdGVFbmQnLFxyXG4gICAgICBrZXk6ICdkYXRlRW5kJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBmaWx0ZXJEYXRlOiB0cnVlLFxyXG4gICAgICB3aWR0aDogJzE1JScsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e2Zvcm1hdGVyRGF0ZSh0ZXh0KX08L2Rpdj5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwibm90ZVwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnbm90ZScsXHJcbiAgICAgIGtleTogJ25vdGUnLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0aW9uID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRIaWRkZW5EZWxldGVCdG4oZmFsc2UpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZElkcyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiB7XHJcbiAgICBsZXQgW2Vycm9yLCBkb2N0b3JBc3NpZ25zXTogYW55W10gPSBhd2FpdCB0byhkb2N0b3JBc3NpZ25TZXJ2aWNlLmluZGV4KHZhbHVlcykpXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgeyBjb2RlLCBtZXNzYWdlIH0gPSBlcnJvclxyXG4gICAgICBub3RpZnkodChgZXJyb3JzOiR7Y29kZX1gKSwgdChtZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZG9jdG9yQXNzaWduc1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKGRvY3RvckFzc2lnblNlcnZpY2UuZGVsZXRlKHsgaWRzOiBzZWxlY3RlZElkcyB9KSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5vdGlmeSh0KGBlcnJvcnM6JHtlcnJvci5jb2RlfWApLCB0KGAke2Vycm9yLm1lc3NhZ2V9YCksICdlcnJvcicpXHJcbiAgICB9XHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkRGVsZXRlZFwiKSk7XHJcbiAgICBpZiAodGFibGVSZWYuY3VycmVudCAhPT0gbnVsbCkge1xyXG4gICAgICB0YWJsZVJlZi5jdXJyZW50LnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZElkcyhbXSlcclxuICAgIHNldEhpZGRlbkRlbGV0ZUJ0bih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyRGVsZXRlRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICByZWY9e2NvbmZpcm1SZWZ9XHJcbiAgICAgICAgb25TdWJtaXQ9e29uRGVsZXRlfVxyXG4gICAgICAgIHRpdGxlPXt0KCdkZWxldGVJdGVtJyl9XHJcbiAgICAgICAgY29udGVudD17dCgnbWVzc2FnZS5kZWxldGVDb25maXJtJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICA8QnV0dG9uIGhpZGRlbj17IWNyZWF0ZVBlcn0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5jcmVhdGVcIil9IHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPSdidG4tdG9wJz5cclxuICAgICAgICA8UGx1c0NpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAge3QoJ2NyZWF0ZScpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxCdXR0b24gZGFuZ2VyIG9uQ2xpY2s9eygpID0+IHsgaWYgKGNvbmZpcm1SZWYuY3VycmVudCkgY29uZmlybVJlZi5jdXJyZW50LnNob3coKSB9fSBjbGFzc05hbWU9J2J0bi10b3AnIGhpZGRlbj17aGlkZGVuRGVsZXRlQnRuIHx8ICFkZWxldGVQZXJ9PlxyXG4gICAgICAgIDxEZWxldGVPdXRsaW5lZCAvPlxyXG4gICAgICAgIHt0KCdkZWxldGUnKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIFxyXG4gICAgICA8R3JpZFRhYmxlXHJcbiAgICAgICAgcmVmPXt0YWJsZVJlZn1cclxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgIGRhdGE9e2RvY3RvckFzc2lnbnN9XHJcbiAgICAgICAgcm93U2VsZWN0aW9uPXt7c2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZElkcywgb25DaGFuZ2U6IChkYXRhOiBhbnlbXSkgPT4gb25DaGFuZ2VTZWxlY3Rpb24oZGF0YSkgfX1cclxuICAgICAgICBmZXRjaERhdGE9e2ZldGNoRGF0YX1cclxuICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtyZW5kZXJEZWxldGVEaWFsb2coKX1cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBhbnkpID0+IHtcclxuICBsZXQgZG9jdG9yQXNzaWduU2VydmljZSA9IG5ldyBEb2N0b3JBc3NpZ25TZXJ2aWNlKGN0eClcclxuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBmaWx0ZXJzOiBbXSxcclxuICAgIHNvcnRpbmc6IFtdXHJcbiAgfVxyXG4gIGxldCBxdWVyeSA9IGN0eC5xdWVyeVxyXG4gIGxldCBmaWx0ZXJzID0gR3JpZFRhYmxlSGVscGVyLmdldE9wdGlvbnMocXVlcnksIGRlZmF1bHRPcHRpb25zKTtcclxuICBsZXQgW2Vycm9yLCBkb2N0b3JBc3NpZ25zXTogYW55W10gPSBhd2FpdCB0byhkb2N0b3JBc3NpZ25TZXJ2aWNlLmluZGV4KGZpbHRlcnMpKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnLCAnZXJyb3JzJ10sXHJcbiAgICBlcnJvcjogZXJyb3IsXHJcbiAgICBkb2N0b3JBc3NpZ25zOiB1c2VCYXNlSG9vay5nZXREYXRhKGRvY3RvckFzc2lnbnMsIFwiZGF0YVwiLCBbXSksXHJcbiAgICB0b3RhbDogdXNlQmFzZUhvb2suZ2V0RGF0YShkb2N0b3JBc3NpZ25zLCBcInRvdGFsXCIsIDApLFxyXG4gICAgZGVmYXVsdFF1ZXJ5OiB7XHJcbiAgICAgIGZpbHRlcnM6IEdyaWRUYWJsZUhlbHBlci5tYWtlUXVlcnkoZmlsdGVycylcclxuICAgIH1cclxuICB9XHJcbn1cclxuSW5kZXgucGVybWlzc2lvbnMgPSB7XHJcbiAgXCJhZG1pbi5kb2N0b3JBc3NpZ25tZW50c1wiOiBcIlJcIixcclxuICBcImRvY3Rvci5kb2N0b3JBc3NpZ25tZW50c1wiOlwiUlwiLFxyXG4gIFwiYWRtaW4udXNlcnMuZG9jdG9yQXNzaWdubWVudHNcIjpcIlJcIixcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJpbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgeyBnZXRCcmVhZGNydW1icywgcm91dGUgYXMgbWFrZVVybCB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmludGVyZmFjZSBSb3V0ZSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IGJyZWFkQ3J1bWJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICAgIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgICAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgICAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICAgICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBicmVhZEN1bWJzID0gW11cclxuICAgIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgICBsZXQgcm91dGVzOiBSb3V0ZVtdID0gZ2V0QnJlYWRjcnVtYnMocm91dGVOYW1lKVxyXG4gICAgaWYgKHJvdXRlc1swXSAmJiByb3V0ZXNbMF0ubmFtZSAhPSBcImZyb250ZW5kLmFkbWluLmhvbWVcIikge1xyXG4gICAgICAgIHJvdXRlcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ2Zyb250ZW5kLmFkbWluLmhvbWUnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgbGlua1Byb3BzID0gbWFrZVVybChyb3V0ZS5uYW1lKVxyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgey4uLmxpbmtQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+eyByb3V0ZS5uYW1lID09IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiID8gPEhvbWVGaWxsZWQgLz4gOiB0KHJvdXRlLm5hbWUpIH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAge3Qocm91dGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxCcmVhZGNydW1iPnticmVhZEN1bWJzfTwvQnJlYWRjcnVtYj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFkQ3J1bWJDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY2xhc3MgQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNob3coZGF0YSA9IG51bGwpIHtcclxuICAgIGxldCB7IHRpdGxlLCBjb250ZW50IH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aXRsZSA9IHRpdGxlIHx8IFwiVGl0bGVcIlxyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJDb250ZW50XCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgIGNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIG9uT2s6IHRoaXMub25TdWJtaXQsXHJcbiAgICAgIG9uQ2FuY2VsOiB0aGlzLm9uQ2FuY2VsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25DYW5jZWwgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmICh0eXBlb2Ygb25DYW5jZWwgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBvbkNhbmNlbCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodHlwZW9mIG9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgYXdhaXQgb25TdWJtaXQodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtRGlhbG9nOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICBpZihhY3Rpb24udHlwZSA9PT0gXCJzZXRTdG9yZVwiKXtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH1cclxuICAgIF8uc2V0KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5wYXRoLCBhY3Rpb24ucGF5bG9hZC52YWx1ZSlcclxuICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuLyogY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc3RvcmU6IHN0b3JlUmVkdWNlclxyXG59KSAqL1xyXG5cclxuY29uc3Qgc2V0U3RvcmUgPSAocGF0aCwgdmFsdWUpID0+ICh7XHJcbiAgdHlwZTogJ3NldFN0b3JlJyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBwYXRoLFxyXG4gICAgdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRTdGF0ZSA9IHt9LCBvcHRpb25zKSA9PiB7XHJcbiAgbGV0IGRldlRvb2xFeHRlbnNpb25zID0gKCFvcHRpb25zLmlzU2VydmVyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgOiB1bmRlZmluZWRcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdFN0YXRlLCBkZXZUb29sRXh0ZW5zaW9ucylcclxufVxyXG5leHBvcnQge1xyXG4gIG1ha2VTdG9yZSxcclxuICBzZXRTdG9yZVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcclxuXHJcbmNsYXNzIEZpbHRlckRhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlcyA9IChkYXRlU3RyaW5ncykgPT4ge1xyXG4gICAgICAgIGlmKCFkYXRlU3RyaW5ncykgZGF0ZVN0cmluZ3MgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgICAgIGlmICghZGF0ZVN0cmluZ3MpIHJldHVybiB7fVxyXG4gICAgICAgIGlmICghZGF0ZVN0cmluZ3NbMF0pIGRhdGVTdHJpbmdzWzBdID0gdW5kZWZpbmVkXHJcbiAgICAgICAgaWYoIWRhdGVTdHJpbmdzWzFdKSBkYXRlU3RyaW5nc1sxXSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGVTdHJpbmdzOiBkYXRlU3RyaW5ncyxcclxuICAgICAgICAgICAgZGF0ZXM6IFtcclxuICAgICAgICAgICAgICAgIGRhdGVTdHJpbmdzWzBdID8gbW9tZW50KGRhdGVTdHJpbmdzWzBdKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGRhdGVTdHJpbmdzWzFdID8gbW9tZW50KGRhdGVTdHJpbmdzWzFdKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAoZGF0ZXMsIGRhdGVTdHJpbmdzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoZGF0ZVN0cmluZ3MpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRlU3RyaW5nczonJ30sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRlU3RyaW5ncyAmJiB0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzBdICYmIHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMV0pIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzBdKS5zdGFydE9mKFwiZGF5c1wiKS5hZGQoMTQsJ2gnKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzFdKS5lbmRPZihcImRheXNcIikuYWRkKDE0LCdoJykudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8UmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dFbXB0eT17dHJ1ZSwgdHJ1ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjU2cHhcIiwgbWFyZ2luQm90dG9tOiA4LCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRGF0ZVBpY2tlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2VsZWN0LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgSW5wdXRHcm91cCA9IElucHV0Lkdyb3VwO1xyXG5cclxuY2xhc3MgRmlsdGVyRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWVzOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbixcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbixcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB2YWx1ZXMgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWVzICYmIHRoaXMuc3RhdGUudmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycyA9IFt7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJ2luJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlc1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAvKiBmaWx0ZXJzID0gdGhpcy5zdGF0ZS52YWx1ZXMubWFwKHZhbHVlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJz0nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pKSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3B0aW9ucygpIHtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5vcHRpb25zKSByZXR1cm5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gPE9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0gbGFiZWw9e29wdGlvbi5sYWJlbH0gPntvcHRpb24ubGFiZWx9PC9PcHRpb24+KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCBvcHRpb25zLCBzZWFyY2hCdG5UZXh0LCBjbGVhckJ0blRleHQsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjUwcHgnLCBtYXJnaW5Cb3R0b206IDgsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRHJvcGRvd24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QsIElucHV0TnVtYmVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcblxyXG5jbGFzcyBGaWx0ZXJJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSxcclxuICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCBcImNvbnRhaW5zXCJcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIikgIT0gXy5nZXQocHJldlByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZVNlYXJjaCAhPSB0aGlzLnByb3BzLmNvbHVtbi52aXNpYmxlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZVNlYXJjaCA9IHRoaXMucHJvcHMuY29sdW1uLnZpc2libGVTZWFyY2hcclxuICAgICAgICAgICAgdGhpcy5yZWZJbnB1dC5pbnB1dC5zZWxlY3QoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6Jyd9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5zdGF0ZS5vcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJPcGVyYXRvcigpIHtcclxuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzID0ge30sIGhpZGVPcGVyYXRvciwgb3BlcmF0b3IgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaGlkZU9wZXJhdG9yKSByZXR1cm5cclxuICAgICAgICBsZXQgb3BlcmF0b3JzID0gW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImNvbnRhaW5zXCIsIGxhYmVsOiBtZXNzYWdlc1snY29udGFpbnMnXSB8fCBcIkNvbnRhaW5zXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCI9XCIsIGxhYmVsOiBtZXNzYWdlc1snZXF1YWwnXSB8fCBcIkVxdWFsc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic3RhcnRXaXRoc1wiLCBsYWJlbDogbWVzc2FnZXNbJ3N0YXJ0V2l0aHMnXSB8fCBcIlN0YXJ0V2l0aHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImVuZFdpdGhzXCIsIGxhYmVsOiBtZXNzYWdlc1snZW5kV2l0aHMnXSB8fCBcIkVuZFdpdGhzXCIgfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIG9wZXJhdG9ycyA9IFtcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPVwiLCBsYWJlbDogJz0nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj5cIiwgbGFiZWw6ICc+JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI8XCIsIGxhYmVsOiAnPCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPj1cIiwgbGFiZWw6ICc+PScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPD1cIiwgbGFiZWw6ICc8PScgfVxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWZhdWx0T3BlcmF0b3IgPSBvcGVyYXRvciB8fCBvcGVyYXRvcnNbMF0udmFsdWVcclxuXHJcbiAgICAgICAgcmV0dXJuIDxTZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0T3BlcmF0b3J9IHN0eWxlPXt7IHdpZHRoOiA5MCB9fSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZXJhdG9yOiB2YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgIHtvcGVyYXRvcnMubWFwKG9wZXJhdG9yID0+IDxPcHRpb24gdmFsdWU9e29wZXJhdG9yLnZhbHVlfSBrZXk9e29wZXJhdG9yLnZhbHVlfT57b3BlcmF0b3IubGFiZWx9PC9PcHRpb24+KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIGhpZGVPcGVyYXRvciwgdHlwZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBDb21wb25lbnQgPSBJbnB1dFxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJudW1iZXJcIikgQ29tcG9uZW50ID0gSW5wdXROdW1iZXJcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlPXt0aGlzLnJlbmRlck9wZXJhdG9yKCl9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIG1hcmdpbkJvdHRvbTogOCwgZGlzcGxheTogJ2Jsb2NrJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVySW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJhZGlvLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IEdyb3VwIH0gPSBSYWRpbztcclxuXHJcbmNsYXNzIEZpbHRlckNoZWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoZWNrZWQgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdW5kZWZpbmVkKSBjaGVja2VkID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6dW5kZWZpbmVkfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJz0nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY2hlY2tlZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8R3JvdXBcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbHVtbi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiwgbWFyZ2luQm90dG9tOiA4LCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ2hlY2siLCJpbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBhZGRRdWVyeSB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIaWdobGlnaHRlciBmcm9tIFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ2pzLWJhc2U2NCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IEZpbHRlcklucHV0IGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9JbnB1dCdcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0RhdGVQaWNrZXInXHJcbmltcG9ydCBSYWRpbyBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvUmFkaW9CdXR0b24nXHJcblxyXG5jbGFzcyBHcmlkVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGJvcmRlcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzaXplOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgaGFzRGF0YTogdHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWxvYWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHt9XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucHJvcHMudG90YWwgfHwgMTAwXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUYWJsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2jhu59pIHThuqFvIGPDoWMgb3B0aW9ucyB04burIHF1ZXJ5IHRyw6puIHVybFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnlcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IEdyaWRUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5LCB0aGlzLnByb3BzKVxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IGRlZmF1bHRPcHRpb25zLnBhZ2VTaXplIHx8IDUwLFxyXG4gICAgICAgICAgICBwYWdlOiBkZWZhdWx0T3B0aW9ucy5wYWdlIHx8IDAsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucztcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9uVG9Db2x1bW5zKGRlZmF1bHRPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgbOG6oWkgZOG7ryBsaeG7h3UgdOG7qyBxdWVyeSDEkeG7lWkgc2FuZyDEkcO6bmcgZm9ybWF0IGPhu6dhIGNvbHVtbiB0cm9uZyBhbnRkXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRPcHRpb25Ub0NvbHVtbnMgPSAoZGVmYXVsdE9wdGlvbnMpID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIC8vc2V0IGZpZWxkXHJcbiAgICAgICAgICAgIGlmKCFjb2x1bW4uZmllbGQpIGNvbHVtbi5maWVsZCA9IGNvbHVtbi5rZXlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBzb3J0ID0gZGVmYXVsdE9wdGlvbnMuc29ydGluZy5maW5kKGl0ZW0gPT4gaXRlbS5maWVsZCA9PT0gY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB7IGRpcmVjdGlvbiB9ID0gc29ydDtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5zb3J0T3JkZXIgPSBkaXJlY3Rpb24gPT09IFwiYXNjXCIgPyAnYXNjZW5kJyA6ICdkZXNjZW5kJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IGRlZmF1bHRPcHRpb25zLmZpbHRlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5maWVsZCA9PT0gY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRWYWx1ZSA9IFsuLi5maWx0ZXJzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyZWRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJhYmxlO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdpbnB1dCcpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlckRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyYWJsZTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnZGF0ZScpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlckNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2NoZWNrJykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL3VwZGF0ZSBkYXRhIHRyb25nIHRyxrDhu51uZyBo4bujcCDEkeG7lWkgdOG7qyBwcm9wcyBiw6puIG5nb8OgaVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuZGF0YSkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpICE9IEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5yb3V0ZXIucXVlcnkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6ICF0aGlzLnN0YXRlLnJlbG9hZH0pIC8vY2jhu4kgY+G6p24gcmVuZGVyIGzhuqFpIHZpZXdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1ha2VRdWVyeShvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJzID0gW10sIHNvcnRpbmcgPSBbXSwgcGFnZVNpemUsIHBhZ2UgfSA9IG9wdGlvbnNcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIGY6IFtdLFxyXG4gICAgICAgICAgICBzOiB7fSxcclxuICAgICAgICAgICAgcHM6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwOiBwYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgICBxdWVyeU9iai5mLnB1c2goW2ZpbHRlci5maWVsZCwgZmlsdGVyLm9wZXJhdG9yIHx8ICdjb250YWlucycsIGZpbHRlci52YWx1ZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHNvcnQgb2Ygc29ydGluZykge1xyXG4gICAgICAgICAgICBxdWVyeU9iai5zW3NvcnQuZmllbGRdID0gc29ydC5kaXJlY3Rpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEJhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2hhaSBiw6FvIGPDoWMgZnVuY3Rpb24gY2hvIGRyb3Bkb3duIHNlYXJjaCBib3hcclxuICAgICAqL1xyXG4gICAgZ2V0Q29sdW1uU2VhcmNoUHJvcHMgPSAoY29sdW1uLHR5cGUpID0+IHtcclxuICAgICAgICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEcm9wZG93bjogKHsgY29uZmlybSwgc2V0U2VsZWN0ZWRLZXlzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maXJtRm5jID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoYyA9PiBjLmRhdGFJbmRleCA9PT0gY29sdW1uLmRhdGFJbmRleClcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEtleXModmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnJlbmRlckZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ucmVuZGVyRmlsdGVyKHsgY29sdW1uLCBjb25maXJtOiBjb25maXJtRm5jLCByZWYgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZpbHRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnZGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnY2hlY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVySWNvbjogZmlsdGVyZWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBmaWx0ZXJlZCA/IFwiIzE4OTBmZlwiIDogdW5kZWZpbmVkIH19IC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB2aXNpYmxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSAmJiBjb2x1bW4udmlzaWJsZVNlYXJjaCAhPSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnZpc2libGVTZWFyY2ggPSB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9uU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sdW1uLnZpc2libGVTZWFyY2ggPSB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHsgcGFnZVNpemUsIHBhZ2UgfSA9IHRoaXMucGFnaW5hdGlvblxyXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UoeyBwYWdlU2l6ZSwgY3VycmVudDogcGFnZSB9LCB7fSwge30pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgVGFibGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmZldGNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmJ1aWxkRmV0Y2hEYXRhKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IEdyaWRUYWJsZS5tYWtlUXVlcnkocGFyYW1zKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcclxuICAgICAgICAgICAgYWRkUXVlcnkoeyBmaWx0ZXJzOiBxdWVyeU9wdGlvbnMgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnByb3BzLmZldGNoRGF0YShwYXJhbXMpIHx8IHt9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gdW5kZWZpbmVkKSB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IF8uZ2V0KHJlc3VsdCwgJ2RhdGEnLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZpbHRlciB04burIHRhYmxlIHbDoG8gYmnhur9uIHRoaXMuY29sdW1ucyDEkeG7gyBjb250cm9sbGVkXHJcbiAgICAgKi9cclxuICAgIHNldEZpbHRlcnNUb0NvbHVtbnMgPSAoZmlsdGVycyA9IHt9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gZmlsdGVyc1tjb2x1bW4uZmllbGRdO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29ydGVyVG9Db2x1bW5zID0gKHNvcnRlciA9IHt9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmtleSA9PSBzb3J0ZXIuY29sdW1uS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gc29ydGVyLm9yZGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5zb3J0T3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0UGFnaW5hdGlvbiA9IChwYWdpbmF0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogcGFnaW5hdGlvbi5jdXJyZW50IC0gMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlVGFibGVDaGFuZ2UgPSBhc3luYyAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJzVG9Db2x1bW5zKGZpbHRlcnMpO1xyXG4gICAgICAgIHRoaXMuc2V0U29ydGVyVG9Db2x1bW5zKHNvcnRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uKHBhZ2luYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERhdGFGcm9tUXVlcnkocXVlcnkgPSB7fSwgZGVmYXVsdE9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHF1ZXJ5LmZpbHRlcnMgfHwge31cclxuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5LmZpbHRlcnMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5T2JqID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlKHF1ZXJ5LmZpbHRlcnMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZpbHRlcnMgcGFyYW1zIGludmFsaWQgZm9ybWF0LmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFxdWVyeU9iaikgcmV0dXJuIHt9XHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBxdWVyeU9iai5mIHx8IFtdXHJcbiAgICAgICAgbGV0IHNvcnRpbmcgPSBxdWVyeU9iai5zIHx8IHt9XHJcbiAgICAgICAgbGV0IHF1ZXJ5T3V0ID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiBkZWZhdWx0T3B0aW9ucy5maWx0ZXJzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiBkZWZhdWx0T3B0aW9ucy5zb3J0aW5nIHx8IFtdLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcXVlcnlPYmoucHMgfHwgZGVmYXVsdE9wdGlvbnMucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5T2JqLnAgfHwgZGVmYXVsdE9wdGlvbnMucGFnZVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T3V0LmZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZmlsdGVyWzBdLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGZpbHRlclsxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXJbMl1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gc29ydGluZykge1xyXG4gICAgICAgICAgICBxdWVyeU91dC5zb3J0aW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0aW5nW2ZpZWxkXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5T3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRPcHRpb25zKHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMuZ2V0RGF0YUZyb21RdWVyeShxdWVyeSwgZGVmYXVsdE9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZCBkYXRhIHThu6sgdGhpcy5jb2x1bW5zIMSR4buDIGto4bubcCB24bubaSBmb3JtYXQgdHLDqm4gc2VydmVyXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkRmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdpbmF0aW9uLnBhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuZmlsdGVycyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuZmlsdGVycyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW4uZmlsdGVyZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc29ydGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogY29sdW1uLnNvcnRPcmRlciA9PSBcImFzY2VuZFwiID8gXCJhc2NcIiA6IFwiZGVzY1wiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYWdpbmF0aW9uID0gKHBhZ2luYXRpb24gPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIHBhZ2UgfSA9IHRoaXMucGFnaW5hdGlvbjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wYWdpbmF0aW9uLFxyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy50b3RhbCxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUgfHwgNTAsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IHBhZ2UgKyAxLFxyXG4gICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogWycyJywgJzEwJywgJzUwJywgJzEwMCcsICcyMDAnLCAnNTAwJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGFzRGF0YSA9IHRydWUsIGRhdGEgPSBbXSwgZWxsaXBzaXMsIGZldGNoRGF0YSwgY29sdW1ucywgcGFnaW5hdGlvbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuaW5pdGlhbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlTGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiA5MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvRmlyc3RSb3dPbkNoYW5nZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2hhc0RhdGEgPyB0aGlzLmRhdGEubWFwKHJvdyA9PiAoeyAuLi5yb3csIGtleTogcm93LmlkIH0pKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMuZ2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRUYWJsZSIsImltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgR3JpZFRhYmxlV2l0aFJvdXRlciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBhbnksIHJlZjogYW55KSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRyZXR1cm4gPFRhYmxlIHJlZj17cmVmfSByb3V0ZXI9e3JvdXRlcn0gey4uLnByb3BzfSAvPlxyXG59KSBhcyBhbnlcclxuXHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIuZ2V0T3B0aW9ucyA9IFRhYmxlLmdldE9wdGlvbnNcclxuR3JpZFRhYmxlV2l0aFJvdXRlci5nZXREYXRhRnJvbVF1ZXJ5ID0gVGFibGUuZ2V0RGF0YUZyb21RdWVyeVxyXG5HcmlkVGFibGVXaXRoUm91dGVyLm1ha2VRdWVyeSA9IFRhYmxlLm1ha2VRdWVyeVxyXG5cclxuY29uc3QgR3JpZFRhYmxlSGVscGVyID0ge1xyXG4gICAgZ2V0T3B0aW9uczogVGFibGUuZ2V0T3B0aW9ucyxcclxuICAgIGdldERhdGFGcm9tUXVlcnk6IFRhYmxlLmdldERhdGFGcm9tUXVlcnksXHJcbiAgICBtYWtlUXVlcnk6IFRhYmxlLm1ha2VRdWVyeVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRUYWJsZVdpdGhSb3V0ZXJcclxuZXhwb3J0IHtcclxuICAgIEdyaWRUYWJsZUhlbHBlclxyXG59IiwiLy8gaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXHJcbmltcG9ydCBUYWJsZSwge0dyaWRUYWJsZUhlbHBlcn0gZnJvbSAnLi9UYWJsZVRzeCdcclxuaW1wb3J0IEZpbHRlcklucHV0IGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9JbnB1dCdcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9Ecm9wZG93bidcclxuaW1wb3J0IEZpbHRlckRhdGVQaWNrZXIgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0RhdGVQaWNrZXInXHJcblxyXG5leHBvcnQge1xyXG4gICAgVGFibGUgYXMgR3JpZFRhYmxlLFxyXG4gICAgR3JpZFRhYmxlSGVscGVyLFxyXG4gICAgRmlsdGVySW5wdXQsXHJcbiAgICBGaWx0ZXJEcm9wZG93bixcclxuICAgIEZpbHRlckRhdGVQaWNrZXJcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0U3RvcmUgYXMgc2V0U3RvcmVBY3Rpb24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbnRlcmZhY2UgQmFzZUJvb2sge1xyXG4gICAgdXNlU2VsZWN0b3I6IEZ1bmN0aW9uLFxyXG4gICAgcm91dGVyOiBhbnksXHJcbiAgICB0OiBGdW5jdGlvbixcclxuICAgIHNldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIGdldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIHJlZGlyZWN0OiBGdW5jdGlvbixcclxuICAgIGdldERhdGE6IEZ1bmN0aW9uLFxyXG4gICAgbm90aWZ5OiBGdW5jdGlvbixcclxuICAgIGdldEF1dGg6IEZ1bmN0aW9uXHJcbiAgICBnZXRDb29raWVzOiBGdW5jdGlvbixcclxuICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWc6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgdXNlQmFzZUhvb2tzID0gICh7IGxhbmcgPSBbJ2NvbW1vbicsICdwYWdlcycsICdlcnJvcnMnXSx9IDogeyBsYW5nPzogc3RyaW5nW10sIH0gPSB7fSk6IEJhc2VCb29rID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBJMThuID0gdXNlVHJhbnNsYXRpb24obGFuZylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzZXRTdG9yZSA9IGFzeW5jIChwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRTdG9yZUFjdGlvbihwYXRoLCB2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RvcmUgPSAocGF0aDogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IF8uZ2V0KHN0YXRlLCBwYXRoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRSb3V0ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBhczogcm91dGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMsIHtcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJywgdHlwZTogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiA9IFwic3VjY2Vzc1wiKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNCAvL3NlY29uZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEF1dGggPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb29raWVzID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb29raWVzKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHVibGljUnVudGltZUNvbmZpZyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucHVibGljUnVudGltZUNvbmZpZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbGVjdG9yLFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICB0OiBJMThuLnQsXHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmUsXHJcbiAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgZ2V0RGF0YSxcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgZ2V0QXV0aCxcclxuICAgICAgICBnZXRDb29raWVzLFxyXG4gICAgICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWdcclxuICAgIH07XHJcbn1cclxuXHJcbnVzZUJhc2VIb29rcy5nZXREYXRhID0gIChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQmFzZUhvb2tzIiwiaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJy4vQmFzZUhvb2tzJ1xyXG5pbXBvcnQge2NoZWNrUGVybWlzc2lvbn0gZnJvbSAnLi4vdXRpbHMvUGVybWlzc2lvbidcclxuXHJcbiAgXHJcbmNvbnN0IFBlcm1pc3Npb25Ib29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRBdXRoIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9XHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbnMgPSBhdXRoLnBlcm1pc3Npb25zIHx8IHt9XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlclBlcm1pc3Npb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJQZXJtaXNzaW9uc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb25zLCB1c2VyUGVybWlzc2lvbnMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXJQZXJtaXNzaW9uLFxyXG4gICAgICAgIGNoZWNrUGVybWlzc2lvbjogX2NoZWNrUGVybWlzc2lvblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJtaXNzaW9uSG9vayIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgRHJhd2VyLCBCYWNrVG9wLCBSb3csIENvbCwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9hZG1pbi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vYWRtaW4vSGVhZGVyXCI7XHJcbmNvbnN0IFRIRU1FID0gXCJsaWdodFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtYiBmcm9tIFwidGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHVzZUJhc2VIb29rcyBmcm9tIFwidGhlbWVzL2hvb2tzL0Jhc2VIb29rc1wiO1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tIFwidGhlbWVzL19yb3V0ZXMuanNvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFkbWluID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKCk7XHJcblxyXG4gIGNvbnN0IG9uQ29sbGFwc2VDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldENvbGxhcHNlZCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVTaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA5OTI7XHJcbiAgICBzZXRJc01vYmlsZShtb2JpbGUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgICB1cGRhdGVTaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXM7XHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXTtcclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKSB8fCBcIlwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJvdXRlTmFtZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntwdWJsaWNSdW50aW1lQ29uZmlnLlNJVEVfTkFNRX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5USVRMRX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuREVTQ1JJUFRJT059Lz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30gLz5cclxuICAgICAgPGxpbmsgcmVsPVwibnVyc2luZy1ob21lLWljb25cIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099PjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgaWQ9XCJhZG1pblwiPlxyXG4gICAgICA8TGF5b3V0IGhhc1NpZGVyPXt0cnVlfT5cclxuICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIG1hc2tDbG9zYWJsZVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc3Ryb3lPbkNsb3NlPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgdmlzaWJsZT17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgYm9keVN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgIGNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwcmltYXJ5TGF5b3V0XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXQgJHtjb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPEhlYWRlciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX0gZGlzYWJsZWRTZWFyY2g9e3Byb3BzLmRpc2FibGVkU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYnNcIj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS50aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LmRlc2NyaXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17OX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1iLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+wqkge21vbWVudCgpLnllYXIoKX0gSGFjdGVjaDwvRm9vdGVyPlxyXG4gICAgICAgICAgPEJhY2tUb3BcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJhY2tUb3BcIn1cclxuICAgICAgICAgICAgdGFyZ2V0PXsoKSA9PlxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpbWFyeUxheW91dFwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4pfTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgY3JlYXRlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQsIEF2YXRhciwgQnV0dG9uLCBJbnB1dCwgUG9wb3ZlciwgUm93LCBDb2wsIEF1dG9Db21wbGV0ZSwgRm9ybSwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgXHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLCBNZW51Rm9sZE91dGxpbmVkLCBQb3dlcm9mZk91dGxpbmVkLCBcclxuICBTZXR0aW5nRmlsbGVkLCBVc2VyT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyU2VydmljZVwiXHJcbmltcG9ydCBQYXRpZW50U2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2VcIlxyXG5pbXBvcnQgQmVkU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZVwiXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0XHJcblxyXG5jb25zdCBBZG1pbkhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUsIGdldENvb2tpZXMsIGdldERhdGEgIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKClcclxuICBjb25zdCBwYXRpZW50U2VydmljZSA9IG5ldyBQYXRpZW50U2VydmljZSgpXHJcbiAgY29uc3QgYmVkU2VydmljZSA9IG5ldyBCZWRTZXJ2aWNlKClcclxuICBjb25zdCBbcGF0aWVudHMsIHNldFBhdGllbnRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtiZWRzLCBzZXRCZWRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyBjaGFuZ2UgcGFzc3dvcmRcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9O1xyXG4gIGNvbnN0IGNvb2tpZU9iamVjdCA9IGdldENvb2tpZXMoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBjcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWVudSA9IChlOiBhbnkpID0+IHsgfVxyXG4gIGNvbnN0IHJlZGlyZWN0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoY29va2llT2JqZWN0KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3Rva2VuJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3VzZXInLCB7IHBhdGg6ICcvJ30pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY29va2llT2JqZWN0LnRva2VuIHx8ICFjb29raWVPYmplY3QudXNlcikge1xyXG4gICAgICByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGxldCBvcHRpb25zUGF0aWVudHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNCZWRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zVXNlcnM6IGFueSA9IFtdXHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSBhc3luYyAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgbGV0IGZpbHRlclBhdGllbnRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlckJlZHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwicm9vbUNvZGVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyVXNlcnMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgW2VyclVzZXJzLCB1c2Vyc106IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UuaW5kZXgoZmlsdGVyVXNlcnMpKVxyXG4gICAgbGV0IGRhdGFVc2VycyA9IF8uZ2V0KHVzZXJzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhVXNlcnMubGVuZ3RoKXtcclxuICAgICAgc2V0VXNlcnMoZGF0YVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyUGF0aWVudHMsIHBhdGllbnRzXTogYW55W10gPSBhd2FpdCB0byhwYXRpZW50U2VydmljZS5pbmRleChmaWx0ZXJQYXRpZW50cykpXHJcbiAgICBsZXQgZGF0YVBhdGllbnRzID0gXy5nZXQocGF0aWVudHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFQYXRpZW50cy5sZW5ndGgpe1xyXG4gICAgICBzZXRQYXRpZW50cyhkYXRhUGF0aWVudHMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJCZWRzLCBiZWRzXTogYW55W10gPSBhd2FpdCB0byhiZWRTZXJ2aWNlLmluZGV4KGZpbHRlckJlZHMpKVxyXG4gICAgbGV0IGRhdGFCZWRzID0gXy5nZXQoYmVkcywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YUJlZHMubGVuZ3RoKXtcclxuICAgICAgc2V0QmVkcyhkYXRhQmVkcylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBvbkJsdXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VycyhbXSlcclxuICAgIHNldEJlZHMoW10pXHJcbiAgICBzZXRQYXRpZW50cyhbXSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVyQ29uZmlybURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtyZWRpcmVjdExvZ2lufVxyXG4gICAgICAgIHRpdGxlPXt0KCdzaWdub3V0Jyl9XHJcbiAgICAgICAgY29udGVudD17dCgnbWVzc2FnZS5zaWdub3V0Q29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IGFzeW5jIChkYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICBsZXQgdmFsdWVzID0geyBpZDogYXV0aC5pZCwgb2xkUGFzc3dvcmQ6IGRhdGEub2xkUGFzc3dvcmQsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH1cclxuXHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLnVzZXJVcGRhdGVQYXNzd29yZCh2YWx1ZXMpKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoZXJyb3IubWVzc2FnZSksICdlcnJvcicpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KHQoXCJtZXNzYWdlLnJlY29yZFVwZGF0ZWRcIikpXHJcbiAgfVxyXG5cclxuICAvL3ZhbGlkYXRlIGlucHV0IHBhc3N3b3JkXHJcbiAgY29uc3QgdmFsaWRhdG9yUGFzc3dvcmQgPSAoeyBnZXRGaWVsZFZhbHVlIH06IHsgZ2V0RmllbGRWYWx1ZTogRnVuY3Rpb24gfSkgPT4gKHtcclxuICAgIHZhbGlkYXRvcjogKHJ1bGU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdmb3JtLnJlUGFzc3dvcmQnKSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2hhbmdlUGFzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1DaGFuZ2VQYXNzd29yZF0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gICAgcmV0dXJuICg8Rm9ybSBmb3JtPXtmb3JtQ2hhbmdlUGFzc3dvcmR9IG5hbWU9XCJmb3JtQ2hhbmdlUGFzc3dvcmRcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25Paz17KCkgPT4geyBmb3JtQ2hhbmdlUGFzc3dvcmQuc3VibWl0KCk7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJyZXBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JQYXNzd29yZFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvRm9ybT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclJpZ2h0Q29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIGljb249ezxQb3dlcm9mZk91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0+PC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFNldHRpbmdGaWxsZWQgc3BpbiAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9kYWxWaXNpYmxlKHRydWUpIH19ID48L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgbWVudUljb25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJ0cmlnZ2VyXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKCFjb2xsYXBzZWQpXHJcbiAgfVxyXG4gIGxldCBoZWFkZXJDbGFzcyA9IFwiaGVhZGVyXCJcclxuICBpZiAoY29sbGFwc2VkKSBoZWFkZXJDbGFzcyArPSAnIGNvbGxhcHNlZCdcclxuXHJcbiAgY29uc3QgYWNjb3VudFBvcHVwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MDBweFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbOCwgOF19PlxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs3fSBsZz17N30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBcclxuICAgICAgICAgICAgICAgIHNyYz17XCJcIn0gc2l6ZT17MTAwfSBzaGFwZT1cInNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgICAge2F1dGguZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgey8qIDxBdmF0YXIgc2l6ZT17NjR9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTd9IGxnPXsxN30+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3VzZXJuYW1lJyl9PC9iPjogPGk+e2F1dGgudXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGI+e3QoJ2Z1bGxuYW1lJyl9PC9iPjogPGk+e2F1dGguZnVsbG5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgnZW1haWwnKX08L2I+OiA8aT57YXV0aC5lbWFpbCA/IGF1dGguZW1haWwgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3Bob25lJyl9PC9iPjogPGk+e2F1dGgucGhvbmUgPyBhdXRoLnBob25lIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclRpdGxlID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgICB7LyogPGFcclxuICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1hbnRkXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBtb3JlXHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAodGl0bGU6IHN0cmluZywgbGluazogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGl0bGUsXHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2xpbmt9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHBhdGllbnRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zUGF0aWVudHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgcGF0aWVudHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgYmVkcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc0JlZHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLnJvb21Db2RlfSAtICR7aXRlbS5iZWRJZH1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YGJlZHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgdXNlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNVc2Vycy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9IC0gJHtpdGVtLnVzZXJuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgdXNlcnMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgncGF0aWVudCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1BhdGllbnRzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2JlZCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc0JlZHNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdlbXBsb3llZScpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1VzZXJzXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTAwcHhcIiwgZGlzcGxheTogJ2lubGluZScgfX0+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9XCJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93blwiXHJcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezM1MH0gLy8gd2lkdGggZHJvcGRvd25cclxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IGFueSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkJsdXJTZWFyY2goKX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzNTAgfX0gLy8gd2lkdGggaW5wdXQgU2VhcmNoXHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgZGlzYWJsZWQgPSB7cHJvcHMuZGlzYWJsZWRTZWFyY2g/IHRydWUgOiBmYWxzZSB9IC8vIGRpc2FibGUgaW5wdXQgc2VhcmNoXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlNlYXJjaCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj17dChcInNlYXJjaFwiKX0gLz5cclxuICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9PlxyXG4gICAgICB7Y29sbGFwc2VkIFxyXG4gICAgICA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPiBcclxuICAgICAgOiA8TWVudUZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+fVxyXG4gICAgICBcclxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3QoJ3BlcnNvbmFsSW5mbycpfSBjb250ZW50PXthY2NvdW50UG9wdXAoKX0+XHJcbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXNlck91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICBcclxuICAgICAgey8qIDxCdXR0b24gaWNvbj17PEJlbGxPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+ICovfVxyXG4gICAgICB7LyogPFNlYXJjaFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20uLi5cIlxyXG4gICAgICAgIG9uU2VhcmNoPXt2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaFwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICB7cmVuZGVyU2VhcmNoKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodENvbnRhaW5lcic+e3JlbmRlclJpZ2h0Q29udGVudCgpfTwvZGl2PlxyXG5cclxuICAgIDwvSGVhZGVyPlxyXG4gICAge3JlbmRlckNvbmZpcm1EaWFsb2coKX1cclxuICAgIHtyZW5kZXJDaGFuZ2VQYXNzTW9kYWwoKX1cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlciIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJ3RoZW1lcy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBnZXRTaWRlYmFyU2VsZWN0ZWRzIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVBlcm1pc3Npb25Ib29rIGZyb20gJ3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vaydcclxuXHJcbmNvbnN0IE1lbnVDb21wb25lbnQgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gIGNvbnN0IHtjaGVja1Blcm1pc3Npb259ID0gdXNlUGVybWlzc2lvbkhvb2soKVxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVNZW51cyA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJncm91cFwiKSB7XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pXHJcbiAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2dlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFjaGVja1Blcm1pc3Npb24oaXRlbS5wZXJtaXNzaW9ucykpIHJldHVyblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnJvdXRlTmFtZX0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoaXRlbS5yb3V0ZU5hbWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfSkuZmlsdGVyKChtZW51OmFueSkgPT4gbWVudSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRoZW1lLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdFJlYWR5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gIGNvbnN0IGJyZWFkY3VtcyA9IGdldFNpZGViYXJTZWxlY3RlZHMoY3VycmVudFJvdXRlTmFtZSlcclxuICBsZXQgcm91dGVyTmFtZXMgPSBicmVhZGN1bXMubWFwKChicmVhZGN1bTogYW55KSA9PiBicmVhZGN1bS5yb3V0ZU5hbWUpXHJcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyTmFtZXMucG9wKClcclxuICByZXR1cm4gPE1lbnVcclxuICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgZGVmYXVsdE9wZW5LZXlzPXtyb3V0ZXJOYW1lc31cclxuICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWRLZXlzfVxyXG4gICAgb25DbGljaz17XHJcbiAgICAgIGlzTW9iaWxlXHJcbiAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICB7Li4ub3RoZXJQcm9wc31cclxuICA+XHJcbiAgICB7Z2VuZXJhdGVNZW51cyhzaWRlYmFyKX1cclxuICA8L01lbnU+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5mdW5jdGlvbiBudW1Gb3JtYXR0ZXIobnVtOiBudW1iZXIpIHtcclxuICAgIGlmKG51bSA+IDk5OSAmJiBudW0gPCAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwKS50b0ZpeGVkKDEpICsgJ0snOyAvLyBjb252ZXJ0IHRvIEsgZm9yIG51bWJlciBmcm9tID4gMTAwMCA8IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA+IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDAwMDApLnRvRml4ZWQoMSkgKyAnTSc7IC8vIGNvbnZlcnQgdG8gTSBmb3IgbnVtYmVyIGZyb20gPiAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPCA5MDApe1xyXG4gICAgICAgIHJldHVybiBudW07IC8vIGlmIHZhbHVlIDwgMTAwMCwgbm90aGluZyB0byBkb1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldENvb2tpZXMsIHJlZGlyZWN0LCB0LCBnZXREYXRhLCBnZXRBdXRoLCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKVxyXG4gICAgY29uc3QgcHJvZmlsZUluZm8gPSB7XHJcbiAgICAgICAgY29tcGFueUxvZ286IHB1YmxpY1J1bnRpbWVDb25maWcuTE9HTyxcclxuICAgICAgICBncm91cE5hbWU6IFwiTmjDom4gdmnDqm5cIixcclxuICAgICAgICB1c2VyRnVsbG5hbWU6IFwiRGnDqm0gVGjhu4sgUXXhu7NuaFwiLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiBcIlZp4buHbiBkxrDhu6FuZyBsw6NvIEjGsOG7m25nIETGsMahbmdcIixcclxuICAgICAgICBjb21wYW55QWRkcmVzczogXCJT4buRIDM5LCBuZ8O1IDc0LCDEkMaw4budbmcgRHV5IFTDom4sIFF14bqtbiBD4bqndSBHaeG6pXksIEjDoCBO4buZaVwiLFxyXG4gICAgICAgIHRvZGF5OiB7fSxcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItcHJvZmlsZVwiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezgwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBzcmM9e3Byb2ZpbGVJbmZvLmNvbXBhbnlMb2dvfSBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb21wYW55TmFtZVwiPntwcm9maWxlSW5mby5jb21wYW55TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hZGRyZXNzXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlBZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiPntwcm9maWxlSW5mby51c2VyRnVsbG5hbWV9PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtZ3JvdXBOYW1lXCI+e3Byb2ZpbGVJbmZvLmdyb3VwTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwicHJvZmlsZS1lbmRMaW5lXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkLCBVc2VyT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucyc7XHJcbmNvbnN0IFRIRU1FID0gJ2xpZ2h0J1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0aGVtZSB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTZ9XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICAvL29uQnJlYWtwb2ludD17IWlzTW9iaWxlICYmIG9uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9IC8+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRDb29raWUpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoZGVmYXVsdENvb2tpZSlcclxuICByZXR1cm4gY29va2llc1xyXG59IiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuaW1wb3J0IFJlcXVlc3RFeGNlcHRpb24gZnJvbSAnLi9SZXF1ZXN0RXhjZXB0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29va2llc1N0cmluZykge1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXNTdHJpbmdcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcyhjb29raWVzU3RyaW5nKS5nZXQoJ3Rva2VuJylcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVHbG9iYWwuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVHbG9iYWxFcnJvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbChyZXNwb25zZSkge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2spIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWxFcnJvcihlcnJvcikge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjaykge1xyXG4gICAgICBlcnJvciA9IHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwVXJsKCkge1xyXG4gICAgLy9yZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiXHJcbiAgICByZXR1cm4gcHVibGljUnVudGltZUNvbmZpZy5BUElfSE9TVFxyXG4gIH1cclxuICBiZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pIHtcclxuXHJcbiAgfVxyXG4gIGFmdGVyUmVxdWVzdChyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbigtMSwgXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIpXHJcbiAgICBjb25zdCBjb2RlID0gXy5nZXQocmVzdWx0LCBcImRhdGEuY29kZVwiLCAtMSlcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5tZXNzYWdlXCIsIFwiXCIpXHJcbiAgICBjb25zdCBkYXRhID0gXy5nZXQocmVzdWx0LCBcImRhdGEuZGF0YVwiKVxyXG4gICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UsIGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0KHVybCwgZGF0YSA9IHt9KSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZSh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG59IiwiY2xhc3MgUmVxdWVzdEV4Y2VwdGlvbntcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZT1cIlwiLCBtZXNzYWdlID0gXCJcIiwgZGF0YSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RFeGNlcHRpb247XHJcbiIsImNvbnN0IFVybFBhdHRlcm4gPSByZXF1aXJlKCd1cmwtcGF0dGVybicpO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL19yb3V0ZXMnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuY2xhc3MgUm91dGUge1xyXG4gICAgc3RhdGljIG1ha2VVcmwobmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlSW5mbyA9IHJvdXRlQ29uZmlnW25hbWVdXHJcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBVcmxQYXR0ZXJuKHJvdXRlSW5mby51cmwpO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFzVXJsID0gcGF0dGVybi5zdHJpbmdpZnkocGFyYW1zKSAvL2xpbmsgaGnhu4NuIHRo4buLIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIGxldCBocmVmID0gYXNVcmwgLy9saW5rIHRo4bqtdCB0cm9uZyAvcGFnZXNcclxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDAsIDYpID09PSBcInBhZ2VzL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gcm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoNSlcclxuICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGA/JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYCYke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXM6IGFzVXJsLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRRdWVyeShxdWVyeSwgc2hhbGxvdyA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICBsZXQgb2xkUXVlcnkgPSBSb3V0ZXIucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5vbGRRdWVyeSxcclxuICAgICAgICAgICAgLi4ucXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSA9PSBKU09OLnN0cmluZ2lmeShvbGRRdWVyeSkpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmdBcHBlbmQgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC8qIGlmKHF1ZXJ5U3RyaW5nQXBwZW5kKXtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFJvdXRlci5yb3V0ZXIucXVlcnkgPSBxdWVyeU9ialxyXG4gICAgICAgICAgICB9ICovXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpZGViYXJTZWxlY3RlZHMgPSAocm91dGVOYW1lLCByb3V0ZXMsIHJvdXRlUGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBzaWRlYmFyU2VsZWN0ZWROYW1lID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0uc2lkZWJhciA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBzaWRlYmFyXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5yb3V0ZU5hbWUgPT09IHNpZGViYXJTZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aHMucHVzaChyb3V0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVQYXRoc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXRTaWRlYmFyU2VsZWN0ZWRzKHNpZGViYXJTZWxlY3RlZE5hbWUsIHJvdXRlLmNoaWxkcmVuLCBbLi4ucm91dGVQYXRocywgcm91dGVdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCcmVhZGNydW1icyA9IChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KHJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFsuLi50aGlzLmdldEJyZWFkY3J1bWJzKHJvdXRlLnBhcmVudCksIC4uLnJlc3VsdF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJvdXRlID0gUm91dGUubWFrZVVybFxyXG5jb25zdCBhZGRRdWVyeSA9IFJvdXRlLmFkZFF1ZXJ5XHJcbmNvbnN0IGdldEJyZWFkY3J1bWJzID0gUm91dGUuZ2V0QnJlYWRjcnVtYnNcclxuY29uc3QgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IFJvdXRlLmdldFNpZGViYXJTZWxlY3RlZHNcclxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XHJcbmV4cG9ydCB7XHJcbiAgICByb3V0ZSxcclxuICAgIGFkZFF1ZXJ5LFxyXG4gICAgZ2V0QnJlYWRjcnVtYnMsXHJcbiAgICBnZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5jbGFzcyBCYXNlQXBpe1xyXG4gIGNvb2tpZXM6IENvb2tpZXNcclxuICBSZXF1ZXN0OiBSZXF1ZXN0XHJcbiAgbmFtZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWVzT2JqID0gY29udGV4dCA/IG5leHRDb29raWUoY29udGV4dCk6IHt9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzKGNvb2tpZXNPYmopO1xyXG4gICAgdGhpcy5SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29va2llc09iailcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlQ2FsbGJhY2tcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrXHJcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVDYWxsYmFjayA9IChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gXy5nZXQoZXJyb3IsIFwicmVzcG9uc2Uuc3RhdHVzXCIsIC0xKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gLTEpe1xyXG4gICAgICAvL25vdGlmeShcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIiwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInRva2VuXCIpXHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ1c2VyXCIpXHJcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAvL25vdGlmeShcIkxvZ2luIHNlc3Npb24gZXhwaXJlZCFcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy9sb2dpbiBzY3JlZW4uIGtow7RuZyBsw6BtIGfDrCBj4bqjLlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHJvdXRlKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICByZXR1cm4gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICBsZXQgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgIFJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBpbmRleChkYXRhPzogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uaW5kZXhgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc3RvcmVgLGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRhaWwoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGV0YWlsYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGVsZXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5kZWxldGUodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGkiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgQmVkIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdiZWRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBEb2N0b3JBc3NpZ25tZW50IGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdkb2N0b3JBc3NpZ25tZW50cyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JBc3NpZ25tZW50IiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFBhdGllbnQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3BhdGllbnRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAndXNlcnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBsb2dpbih7IGRhdGEgfToge2RhdGE6IHt1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfX0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoXCJhcGkubG9naW5cIikuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSkgfHwge31cclxuICAgICAgLy9zdWNjZXNzXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidG9rZW5cIiwgdW5kZWZpbmVkKSwge1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3VzZXInLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInVzZXJcIiwge30pLHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHVzZXJVcGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXNlclVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyBzZWFyY2goZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc2VhcmNoYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwiaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL19yb3V0ZXMuanNvbidcclxuXHJcbmNvbnN0IGNoYXJUb051bSA9IHsgQzogOCwgUjogNCwgVTogMiwgRDogMSB9XHJcbmNvbnN0IGNydWRUb0RlYyA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikucmVkdWNlKCh0b3RhbDogbnVtYmVyLCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCcpID0+IHRvdGFsICsgY2hhclRvTnVtW2NoYXJdLCAwKVxyXG5cclxufVxyXG5jb25zdCBkZWNUb0NydWQgPSAoZGVjOiBudW1iZXIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJ1xyXG4gICAgZm9yIChjaGFyIGluIGNoYXJUb051bSkge1xyXG4gICAgICAgIGlmICgoZGVjICYgY2hhclRvTnVtW2NoYXJdKSA9PSBjaGFyVG9OdW1bY2hhcl0pIHJlc3VsdCArPSBjaGFyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGhhc1Blcm1pc3Npb24gPSAocmVxdWlyZVBlcm1pc3Npb246IG51bWJlciwgdXNlclBlcm1pc3Npb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICh1c2VyUGVybWlzc2lvbiAmIHJlcXVpcmVQZXJtaXNzaW9uKSA9PT0gcmVxdWlyZVBlcm1pc3Npb25cclxuICB9XHJcblxyXG5jb25zdCBjaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSwgdXNlclBlcm1pc3Npb25zOiBhbnksIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZighcGVybWlzc2lvbnMpIHJldHVybiB0cnVlXHJcbiAgICBsZXQgcGVybWlzc2lvbkFycmF5ID0gW11cclxuICAgIGZvciAobGV0IHBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGNydWRUb0RlYyhwZXJtaXNzaW9uc1twZXJtaXNzaW9uXSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbXCJyb290XCJdIHx8IDBcclxuICAgICAgICBsZXQgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbcGVybWlzc2lvbl0gfHwgMFxyXG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb24gfCByb290UGVybWlzc2lvblxyXG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9uKHJlcXVpcmVQZXJtaXNzaW9uLCB1c2VyUGVybWlzc2lvbikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcGVybWlzc2lvbkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlUGVybWlzc2lvbjogZGVjVG9DcnVkKHJlcXVpcmVQZXJtaXNzaW9uKSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb246IGRlY1RvQ3J1ZCh1c2VyUGVybWlzc2lvbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKCFzaG93RXJyb3IpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25BcnJheVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNoZWNrUGVybWlzc2lvbixcclxuICAgIGhhc1Blcm1pc3Npb24sXHJcbiAgICBjcnVkVG9EZWMsXHJcbiAgICBkZWNUb0NydWRcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3YWl0LXRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWJhc2U2NFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1wYXR0ZXJuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=