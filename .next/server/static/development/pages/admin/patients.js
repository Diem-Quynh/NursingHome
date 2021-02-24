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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "./pages/admin/patients/index.tsx":
/*!****************************************!*\
  !*** ./pages/admin/patients/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_PatientService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/PatientService */ "./themes/services/api/PatientService.ts");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











const formaterGender = value => {
  const {
    t
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"])();
  value = Math.round(Number(value));
  value = value == 0 ? t('male') : t('female');
  return `${value}`;
};

const formaterDate = value => {
  value = value ? String(value) : "";
  value = value.substr(0, 10);
  return `${value}`;
};

const Index = ({
  patients,
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
  const patientService = new themes_services_api_PatientService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    "admin.patients": "C",
    "receptionist.patients": "C"
  });
  const deletePer = checkPermission({
    "admin.patients": "D"
  });
  const columns = [{
    title: t("patient"),
    dataIndex: 'code',
    key: 'code',
    filterable: true,
    fixed: 'left'
  }, {
    title: t("fullname"),
    dataIndex: 'fullname',
    key: 'fullname',
    sorter: true,
    filterable: true,
    fixed: 'left',
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.patients.edit', {
        id: record.id
      })
    }, record.fullname)
  }, {
    title: t('room'),
    dataIndex: 'roomCode',
    sorter: true,
    filterable: true,
    key: 'beds.roomCode',
    fixed: 'left',
    render: (text, record) => __jsx("div", null, record.roomCode, " - ", record.bedCode)
  }, {
    title: t('birthday'),
    dataIndex: 'birthday',
    key: 'birthday',
    filterDate: true,
    render: (text, record) => __jsx("div", null, formaterDate(text))
  }, {
    title: t("gender"),
    dataIndex: 'gender',
    key: 'gender',
    filterCheck: true,
    options: [{
      label: t('male'),
      value: 0
    }, {
      label: t('female'),
      value: 1
    }],
    width: '7%',
    render: (text, record) => __jsx("div", null, formaterGender(text))
  }, {
    title: t("address"),
    dataIndex: 'address',
    key: 'address',
    filterable: true
  }, {
    title: t("cardId"),
    dataIndex: 'cardId',
    key: 'cardId',
    filterable: true
  }, {
    title: t("phone"),
    dataIndex: 'phone',
    key: 'phone',
    filterable: true
  }, {
    title: t("patients.medicalHistory"),
    dataIndex: 'medicalHistory',
    key: 'medicalHistory',
    filterable: true
  }, {
    title: t("patients.dateIn"),
    dataIndex: 'dateIn',
    sorter: true,
    filterDate: true,
    key: 'dateIn',
    render: (text, record) => __jsx("div", null, formaterDate(text))
  }, {
    title: t("patients.dateOut"),
    dataIndex: 'dateOut',
    sorter: true,
    filterDate: true,
    key: 'dateOut',
    render: (text, record) => __jsx("div", null, formaterDate(text))
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
    let [error, patients] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(patientService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return patients;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(patientService.delete({
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
    onClick: () => redirect("frontend.admin.patients.create"),
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
    data: patients,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total,
    scroll: {
      x: 1400
    }
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let patientService = new themes_services_api_PatientService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, patients] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(patientService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    patients: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(patients, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(patients, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "admin.patients": "R",
  "doctor.patients": "R",
  "nurse.patients": "R",
  "receptionist.patients": "R"
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

/***/ 10:
/*!**********************************************!*\
  !*** multi ./pages/admin/patients/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\patients\index.tsx */"./pages/admin/patients/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vcGF0aWVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9TdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvVGFibGVUc3gudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2sudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL0FkbWluLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL01lbnUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvSTE4bi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3RFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmFzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvdXRpbHMvUGVybWlzc2lvbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd2FpdC10by1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtYmFzZTY0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bml2ZXJzYWwtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsLXBhdHRlcm5cIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImZvcm1hdGVyR2VuZGVyIiwidCIsInVzZUJhc2VIb29rIiwiTWF0aCIsInJvdW5kIiwiTnVtYmVyIiwiZm9ybWF0ZXJEYXRlIiwiU3RyaW5nIiwic3Vic3RyIiwiSW5kZXgiLCJwYXRpZW50cyIsInRvdGFsIiwicmVkaXJlY3QiLCJzZXRTdG9yZSIsImdldEF1dGgiLCJnZXRTdG9yZSIsImhpZGRlbkRlbGV0ZUJ0biIsInNldEhpZGRlbkRlbGV0ZUJ0biIsInVzZVN0YXRlIiwic2VsZWN0ZWRJZHMiLCJzZXRTZWxlY3RlZElkcyIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwidGFibGVSZWYiLCJjaGVja1Blcm1pc3Npb24iLCJ1c2VQZXJtaXNzaW9uSG9vayIsImNyZWF0ZVBlciIsImRlbGV0ZVBlciIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImZpbHRlcmFibGUiLCJmaXhlZCIsInNvcnRlciIsInRleHQiLCJyZWNvcmQiLCJpZCIsImZ1bGxuYW1lIiwicm9vbUNvZGUiLCJiZWRDb2RlIiwiZmlsdGVyRGF0ZSIsImZpbHRlckNoZWNrIiwibGFiZWwiLCJ3aWR0aCIsIm9uQ2hhbmdlU2VsZWN0aW9uIiwibGVuZ3RoIiwiZmV0Y2hEYXRhIiwidmFsdWVzIiwidG8iLCJpbmRleCIsImNvZGUiLCJvbkRlbGV0ZSIsImRlbGV0ZSIsImlkcyIsImN1cnJlbnQiLCJyZW5kZXJEZWxldGVEaWFsb2ciLCJzaG93Iiwic2VsZWN0ZWRSb3dLZXlzIiwib25DaGFuZ2UiLCJ4IiwiZGVmYXVsdE9wdGlvbnMiLCJmaWx0ZXJzIiwic29ydGluZyIsIkdyaWRUYWJsZUhlbHBlciIsImdldE9wdGlvbnMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJnZXREYXRhIiwiZGVmYXVsdFF1ZXJ5IiwibWFrZVF1ZXJ5IiwicGVybWlzc2lvbnMiLCJicmVhZENydW1iQ29tcG9uZW50IiwibGFuZyIsImdldFJvdXRlTmFtZSIsInJvdXRlUGF0aCIsInJvdXRlRGF0YSIsIl9yb3V0ZXMiLCJyb3V0ZU5hbWUiLCJyb3V0ZUVsZW1lbnQiLCJhY3Rpb24iLCJicmVhZEN1bWJzIiwicm91dGVzIiwiZ2V0QnJlYWRjcnVtYnMiLCJ1bnNoaWZ0IiwibGlua1Byb3BzIiwibWFrZVVybCIsImNvbmZpcm0iLCJNb2RhbCIsIkNvbmZpcm1EaWFsb2ciLCJvbkNhbmNlbCIsInN0YXRlIiwib25TdWJtaXQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvbk9rIiwicmVkdWNlciIsInR5cGUiLCJfIiwicGF5bG9hZCIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsImRldlRvb2xFeHRlbnNpb25zIiwiaXNTZXJ2ZXIiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwiY3JlYXRlU3RvcmUiLCJSYW5nZVBpY2tlciIsIkRhdGVQaWNrZXIiLCJGaWx0ZXJEYXRlUGlja2VyIiwiZGF0ZVN0cmluZ3MiLCJjb2x1bW4iLCJkYXRlcyIsIm1vbWVudCIsImdldERhdGVzIiwib3BlcmF0b3IiLCJzdGFydE9mIiwiYWRkIiwidG9JU09TdHJpbmciLCJlbmRPZiIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFZhbHVlIiwib3RoZXJQcm9wcyIsInBhZGRpbmciLCJyZWZJbnB1dCIsIm1hcmdpbkJvdHRvbSIsImNsZWFyIiwiT3B0aW9uIiwiU2VsZWN0IiwiSW5wdXRHcm91cCIsIklucHV0IiwiR3JvdXAiLCJGaWx0ZXJEcm9wZG93biIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJzZWFyY2hCdG5UZXh0IiwiY2xlYXJCdG5UZXh0IiwiZGlzcGxheSIsIkZpbHRlcklucHV0IiwidmlzaWJsZVNlYXJjaCIsImlucHV0Iiwic2VsZWN0IiwicmVuZGVyT3BlcmF0b3IiLCJtZXNzYWdlcyIsImhpZGVPcGVyYXRvciIsIm9wZXJhdG9ycyIsImRlZmF1bHRPcGVyYXRvciIsIklucHV0TnVtYmVyIiwiUmFkaW8iLCJGaWx0ZXJDaGVjayIsImNoZWNrZWQiLCJnZXRDaGVja2VkIiwiR3JpZFRhYmxlIiwic29ydCIsImZpbmQiLCJpdGVtIiwiZGlyZWN0aW9uIiwic29ydE9yZGVyIiwiZmlsdGVyIiwiZ2V0Q29sdW1uU2VhcmNoUHJvcHMiLCJmaWx0ZXJEcm9wZG93biIsInNldFNlbGVjdGVkS2V5cyIsImNvbmZpcm1GbmMiLCJjdXJyZW50Q29sdW1uIiwiYyIsInJlbmRlckZpbHRlciIsImZpbHRlckljb24iLCJmaWx0ZXJlZCIsImNvbG9yIiwib25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwicGFnZVNpemUiLCJwYWdpbmF0aW9uIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJjb2x1bW5LZXkiLCJvcmRlciIsInNldEZpbHRlcnNUb0NvbHVtbnMiLCJzZXRTb3J0ZXJUb0NvbHVtbnMiLCJzZXRQYWdpbmF0aW9uIiwicG9zaXRpb24iLCJzaG93U2l6ZUNoYW5nZXIiLCJwYWdlU2l6ZU9wdGlvbnMiLCJib3JkZXJlZCIsInNpemUiLCJzaG93SGVhZGVyIiwiaGFzRGF0YSIsImxvYWRpbmciLCJiaW5kIiwiaW5pdCIsImdldERhdGFGcm9tUXVlcnkiLCJkZWZhdWx0T3B0aW9uVG9Db2x1bW5zIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeU9iaiIsImYiLCJzIiwicHMiLCJCYXNlNjQiLCJlbmNvZGUiLCJidWlsZEZldGNoRGF0YSIsInF1ZXJ5T3B0aW9ucyIsImFkZFF1ZXJ5IiwicGFyc2UiLCJFcnJvciIsInF1ZXJ5T3V0Iiwia2V5cyIsImVsbGlwc2lzIiwic2Nyb2xsVG9GaXJzdFJvd09uQ2hhbmdlIiwicm93IiwiZ2V0UGFnaW5hdGlvbiIsIkdyaWRUYWJsZVdpdGhSb3V0ZXIiLCJmb3J3YXJkUmVmIiwidXNlUm91dGVyIiwiVGFibGUiLCJ1c2VCYXNlSG9va3MiLCJJMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJ1c2VTZWxlY3RvciIsIm5leHRSb3V0ZSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwibm90aWZpY2F0aW9uIiwiZHVyYXRpb24iLCJhdXRoIiwiZ2V0Q29va2llcyIsImNvb2tpZXMiLCJnZXRQdWJsaWNSdW50aW1lQ29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIlBlcm1pc3Npb25Ib29rIiwidXNlclBlcm1pc3Npb25zIiwiZ2V0VXNlclBlcm1pc3Npb24iLCJfY2hlY2tQZXJtaXNzaW9uIiwiVEhFTUUiLCJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsIkFkbWluIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9uQ29sbGFwc2VDaGFuZ2UiLCJsb2ciLCJ1cGRhdGVTaXplIiwibW9iaWxlIiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0lURV9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxPR08iLCJoZWlnaHQiLCJkaXNhYmxlZFNlYXJjaCIsInllYXIiLCJxdWVyeVNlbGVjdG9yIiwiSGVhZGVyIiwiU3ViTWVudSIsIk1lbnUiLCJTZWFyY2giLCJBZG1pbkhlYWRlciIsInVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInNldFBhdGllbnRzIiwiYmVkcyIsInNldEJlZHMiLCJ1c2VycyIsInNldFVzZXJzIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY29va2llT2JqZWN0IiwiaGFuZGxlQ2xpY2tNZW51IiwicmVkaXJlY3RMb2dpbiIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ0b2tlbiIsInVzZXIiLCJvcHRpb25zUGF0aWVudHMiLCJvcHRpb25zQmVkcyIsIm9wdGlvbnNVc2VycyIsIm9uQ2hhbmdlU2VhcmNoIiwiZmlsdGVyUGF0aWVudHMiLCJmaWx0ZXJCZWRzIiwiZmlsdGVyVXNlcnMiLCJlcnJVc2VycyIsImRhdGFVc2VycyIsImVyclBhdGllbnRzIiwiZGF0YVBhdGllbnRzIiwiZXJyQmVkcyIsImRhdGFCZWRzIiwib25CbHVyU2VhcmNoIiwicmVuZGVyQ29uZmlybURpYWxvZyIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsInBhc3N3b3JkIiwidXNlclVwZGF0ZVBhc3N3b3JkIiwidmFsaWRhdG9yUGFzc3dvcmQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwicnVsZSIsInJlbmRlckNoYW5nZVBhc3NNb2RhbCIsImZvcm1DaGFuZ2VQYXNzd29yZCIsIkZvcm0iLCJ1c2VGb3JtIiwicmVwYXNzd29yZCIsInN1Ym1pdCIsInNwYW4iLCJyZXF1aXJlZCIsInJlbmRlclJpZ2h0Q29udGVudCIsIm1lbnVJY29uUHJvcHMiLCJjbGFzc05hbWUiLCJoZWFkZXJDbGFzcyIsImFjY291bnRQb3B1cCIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsInJlbmRlclRpdGxlIiwicmVuZGVySXRlbSIsImxpbmsiLCJqdXN0aWZ5Q29udGVudCIsImZsb2F0IiwiYmVkSWQiLCJyZW5kZXJTZWFyY2giLCJNZW51Q29tcG9uZW50IiwiZ2VuZXJhdGVNZW51cyIsImljb24iLCJtZW51IiwidGhlbWUiLCJ0UmVhZHkiLCJjdXJyZW50Um91dGVOYW1lIiwiYnJlYWRjdW1zIiwiZ2V0U2lkZWJhclNlbGVjdGVkcyIsInJvdXRlck5hbWVzIiwiYnJlYWRjdW0iLCJzZWxlY3RlZEtleXMiLCJwb3AiLCJzaWRlYmFyIiwibnVtRm9ybWF0dGVyIiwibnVtIiwidG9GaXhlZCIsIlByb2ZpbGUiLCJwcm9maWxlSW5mbyIsImNvbXBhbnlMb2dvIiwiZ3JvdXBOYW1lIiwidXNlckZ1bGxuYW1lIiwiY29tcGFueU5hbWUiLCJjb21wYW55QWRkcmVzcyIsInRvZGF5IiwiU2lkZXIiLCJzaWRlQmFyIiwiZGVmYXVsdENvb2tpZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdCIsImdldENvbmZpZyIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJkZWZhdWx0TlMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJMQU5HIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVxdWVzdCIsImNvb2tpZXNTdHJpbmciLCJoYW5kbGVHbG9iYWxDYWxsYmFjayIsImhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2siLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlR2xvYmFsIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicG9zdCIsInB1dCIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwicm91dGVDb25maWciLCJwYXR0ZXJuIiwiYXNVcmwiLCJpbmRleE9mIiwibG9jYXRpb24iLCJvbGRRdWVyeSIsInF1ZXJ5U3RyaW5nQXBwZW5kIiwicm91dGVQYXRocyIsInNpZGViYXJTZWxlY3RlZE5hbWUiLCJwYXJlbnQiLCJCYXNlQXBpIiwiY29udGV4dCIsInN0YXR1cyIsImNvb2tpZXNPYmoiLCJuZXh0Q29va2llIiwiZ2xvYmFsSGFuZGxlQ2FsbGJhY2siLCJnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrIiwiY3JlYXRlIiwiZGV0YWlsIiwiZWRpdCIsIkJlZCIsIlBhdGllbnQiLCJVc2VyIiwibG9naW4iLCJ1cGRhdGVQYXNzd29yZCIsInNlYXJjaCIsInJvdXRlUGFyYW1zIiwiY2hhclRvTnVtIiwiQyIsIlIiLCJVIiwiRCIsImNydWRUb0RlYyIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJyZWR1Y2UiLCJjaGFyIiwiZGVjVG9DcnVkIiwiZGVjIiwiaGFzUGVybWlzc2lvbiIsInJlcXVpcmVQZXJtaXNzaW9uIiwidXNlclBlcm1pc3Npb24iLCJzaG93RXJyb3IiLCJwZXJtaXNzaW9uQXJyYXkiLCJwZXJtaXNzaW9uIiwicm9vdFBlcm1pc3Npb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7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Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxccGF0aWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJ3RoZW1lcy9sYXlvdXRzL0FkbWluJ1xyXG5pbXBvcnQgeyBHcmlkVGFibGUsIEdyaWRUYWJsZUhlbHBlciwgRmlsdGVySW5wdXQgfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUGF0aWVudFNlcnZpY2UgZnJvbSAndGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHRvIGZyb20gJ2F3YWl0LXRvLWpzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlUGVybWlzc2lvbkhvb2sgZnJvbSBcInRoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9va1wiO1xyXG5pbXBvcnQge1BsdXNDaXJjbGVPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IGZvcm1hdGVyR2VuZGVyID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgdmFsdWUgPSBNYXRoLnJvdW5kKE51bWJlcih2YWx1ZSkpXHJcbiAgdmFsdWUgPSAodmFsdWUgPT0gMCA/IHQoJ21hbGUnKSA6IHQoJ2ZlbWFsZScpKVxyXG4gIHJldHVybiBgJHt2YWx1ZX1gXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdGVyRGF0ZSA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgdmFsdWUgPSB2YWx1ZT8gU3RyaW5nKHZhbHVlKSA6IFwiXCJcclxuICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLDEwKVxyXG4gIHJldHVybiBgJHt2YWx1ZX1gXHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcGF0aWVudHMsIHRvdGFsIH06IHsgcGF0aWVudHM6IFBhdGllbnRbXSwgdG90YWw6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgW2hpZGRlbkRlbGV0ZUJ0biwgc2V0SGlkZGVuRGVsZXRlQnRuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3NlbGVjdGVkSWRzLCBzZXRTZWxlY3RlZElkc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBwYXRpZW50U2VydmljZSA9IG5ldyBQYXRpZW50U2VydmljZSgpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWY8R3JpZFRhYmxlPigpXHJcbiAgY29uc3QgeyBjaGVja1Blcm1pc3Npb24gfSA9IHVzZVBlcm1pc3Npb25Ib29rKCk7XHJcbiAgY29uc3QgY3JlYXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwiYWRtaW4ucGF0aWVudHNcIjogXCJDXCIsXHJcbiAgICBcInJlY2VwdGlvbmlzdC5wYXRpZW50c1wiOiBcIkNcIlxyXG4gIH0pXHJcbiAgY29uc3QgZGVsZXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwiYWRtaW4ucGF0aWVudHNcIjogXCJEXCJcclxuICB9KVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwicGF0aWVudFwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnY29kZScsXHJcbiAgICAgIGtleTogJ2NvZGUnLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICBmaXhlZDogJ2xlZnQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJmdWxsbmFtZVwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnZnVsbG5hbWUnLFxyXG4gICAgICBrZXk6ICdmdWxsbmFtZScsXHJcbiAgICAgIHNvcnRlcjp0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICBmaXhlZDogJ2xlZnQnLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0OiBzdHJpbmcsIHJlY29yZDogYW55KSA9PlxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5wYXRpZW50cy5lZGl0JywgeyBpZDogcmVjb3JkLmlkIH0pfT57cmVjb3JkLmZ1bGxuYW1lfTwvYT5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KCdyb29tJyksXHJcbiAgICAgIGRhdGFJbmRleDogJ3Jvb21Db2RlJyxcclxuICAgICAgc29ydGVyOnRydWUsXHJcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgIGtleTogJ2JlZHMucm9vbUNvZGUnLFxyXG4gICAgICBmaXhlZDonbGVmdCcsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e3JlY29yZC5yb29tQ29kZX0gLSB7cmVjb3JkLmJlZENvZGV9PC9kaXY+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdCgnYmlydGhkYXknKSxcclxuICAgICAgZGF0YUluZGV4OiAnYmlydGhkYXknLFxyXG4gICAgICBrZXk6ICdiaXJ0aGRheScsXHJcbiAgICAgIGZpbHRlckRhdGU6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e2Zvcm1hdGVyRGF0ZSh0ZXh0KX08L2Rpdj5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwiZ2VuZGVyXCIpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdnZW5kZXInLFxyXG4gICAgICBrZXk6ICdnZW5kZXInLFxyXG4gICAgICBmaWx0ZXJDaGVjazogdHJ1ZSxcclxuICAgICAgb3B0aW9uczogW3sgbGFiZWw6dCgnbWFsZScpLCB2YWx1ZTowIH0sIHsgbGFiZWw6dCgnZmVtYWxlJyksIHZhbHVlOjEgfV0sXHJcbiAgICAgIHdpZHRoOiAnNyUnLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0OiBzdHJpbmcsIHJlY29yZDogYW55KSA9PiA8ZGl2Pntmb3JtYXRlckdlbmRlcih0ZXh0KX08L2Rpdj5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwiYWRkcmVzc1wiKSxcclxuICAgICAgZGF0YUluZGV4OiAnYWRkcmVzcycsXHJcbiAgICAgIGtleTogJ2FkZHJlc3MnLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJjYXJkSWRcIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2NhcmRJZCcsXHJcbiAgICAgIGtleTogJ2NhcmRJZCcsXHJcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdChcInBob25lXCIpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdwaG9uZScsXHJcbiAgICAgIGtleTogJ3Bob25lJyxcclxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwicGF0aWVudHMubWVkaWNhbEhpc3RvcnlcIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ21lZGljYWxIaXN0b3J5JyxcclxuICAgICAga2V5OiAnbWVkaWNhbEhpc3RvcnknLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJwYXRpZW50cy5kYXRlSW5cIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2RhdGVJbicsXHJcbiAgICAgIHNvcnRlcjp0cnVlLFxyXG4gICAgICBmaWx0ZXJEYXRlOiB0cnVlLFxyXG4gICAgICBrZXk6ICdkYXRlSW4nLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0OiBzdHJpbmcsIHJlY29yZDogYW55KSA9PiA8ZGl2Pntmb3JtYXRlckRhdGUodGV4dCl9PC9kaXY+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdChcInBhdGllbnRzLmRhdGVPdXRcIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2RhdGVPdXQnLFxyXG4gICAgICBzb3J0ZXI6dHJ1ZSxcclxuICAgICAgZmlsdGVyRGF0ZTogdHJ1ZSxcclxuICAgICAga2V5OiAnZGF0ZU91dCcsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e2Zvcm1hdGVyRGF0ZSh0ZXh0KX08L2Rpdj5cclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlbGVjdGlvbiA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0SGlkZGVuRGVsZXRlQnRuKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEhpZGRlbkRlbGV0ZUJ0bih0cnVlKVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRJZHMoZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4ge1xyXG4gICAgbGV0IFtlcnJvciwgcGF0aWVudHNdOiBhbnlbXSA9IGF3YWl0IHRvKHBhdGllbnRTZXJ2aWNlLmluZGV4KHZhbHVlcykpXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgeyBjb2RlLCBtZXNzYWdlIH0gPSBlcnJvclxyXG4gICAgICBub3RpZnkodChgZXJyb3JzOiR7Y29kZX1gKSwgdChtZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aWVudHNcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byhwYXRpZW50U2VydmljZS5kZWxldGUoeyBpZHM6IHNlbGVjdGVkSWRzIH0pKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoYCR7ZXJyb3IubWVzc2FnZX1gKSwgJ2Vycm9yJylcclxuICAgIH1cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmREZWxldGVkXCIpKTtcclxuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQucmVsb2FkKClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKFtdKVxyXG4gICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJEZWxldGVEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17b25EZWxldGV9XHJcbiAgICAgICAgdGl0bGU9e3QoJ2RlbGV0ZUl0ZW0nKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLmRlbGV0ZUNvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxCdXR0b24gaGlkZGVuPXshY3JlYXRlUGVyfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmNyZWF0ZVwiKX0gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9J2J0bi10b3AnPlxyXG4gICAgICAgIDxQbHVzQ2lyY2xlT3V0bGluZWQgLz5cclxuICAgICAgICB7dCgnY3JlYXRlJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPEJ1dHRvbiBkYW5nZXIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdygpIH19IGNsYXNzTmFtZT0nYnRuLXRvcCcgaGlkZGVuPXtoaWRkZW5EZWxldGVCdG4gfHwgIWRlbGV0ZVBlcn0+XHJcbiAgICAgICAgPERlbGV0ZU91dGxpbmVkIC8+XHJcbiAgICAgICAge3QoJ2RlbGV0ZScpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgIDxHcmlkVGFibGVcclxuICAgICAgICByZWY9e3RhYmxlUmVmfVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17cGF0aWVudHN9XHJcbiAgICAgICAgcm93U2VsZWN0aW9uPXt7c2VsZWN0ZWRSb3dLZXlzOiBzZWxlY3RlZElkcywgb25DaGFuZ2U6IChkYXRhOiBhbnlbXSkgPT4gb25DaGFuZ2VTZWxlY3Rpb24oZGF0YSkgfX1cclxuICAgICAgICBmZXRjaERhdGE9e2ZldGNoRGF0YX1cclxuICAgICAgICB0b3RhbD17dG90YWx9XHJcbiAgICAgICAgc2Nyb2xsPXt7IHg6MTQwMCB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7cmVuZGVyRGVsZXRlRGlhbG9nKCl9XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IHBhdGllbnRTZXJ2aWNlID0gbmV3IFBhdGllbnRTZXJ2aWNlKGN0eClcclxuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBmaWx0ZXJzOiBbXSxcclxuICAgIHNvcnRpbmc6IFtdXHJcbiAgfVxyXG4gIGxldCBxdWVyeSA9IGN0eC5xdWVyeVxyXG4gIGxldCBmaWx0ZXJzID0gR3JpZFRhYmxlSGVscGVyLmdldE9wdGlvbnMocXVlcnksIGRlZmF1bHRPcHRpb25zKTtcclxuICBsZXQgW2Vycm9yLCBwYXRpZW50c106IGFueVtdID0gYXdhaXQgdG8ocGF0aWVudFNlcnZpY2UuaW5kZXgoZmlsdGVycykpXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAncGFnZXMnLCAnbWVudScsICdlcnJvcnMnXSxcclxuICAgIGVycm9yOiBlcnJvcixcclxuICAgIHBhdGllbnRzOiB1c2VCYXNlSG9vay5nZXREYXRhKHBhdGllbnRzLCBcImRhdGFcIiwgW10pLFxyXG4gICAgdG90YWw6IHVzZUJhc2VIb29rLmdldERhdGEocGF0aWVudHMsIFwidG90YWxcIiwgMCksXHJcbiAgICBkZWZhdWx0UXVlcnk6IHtcclxuICAgICAgZmlsdGVyczogR3JpZFRhYmxlSGVscGVyLm1ha2VRdWVyeShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5JbmRleC5wZXJtaXNzaW9ucyA9IHtcclxuICBcImFkbWluLnBhdGllbnRzXCI6IFwiUlwiLFxyXG4gIFwiZG9jdG9yLnBhdGllbnRzXCI6IFwiUlwiLFxyXG4gIFwibnVyc2UucGF0aWVudHNcIjogXCJSXCIsXHJcbiAgXCJyZWNlcHRpb25pc3QucGF0aWVudHNcIjogXCJSXCIsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgZ2V0QnJlYWRjcnVtYnMsIHJvdXRlIGFzIG1ha2VVcmwgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBicmVhZENydW1iQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICAgICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYnJlYWRDdW1icyA9IFtdXHJcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gICAgbGV0IHJvdXRlczogUm91dGVbXSA9IGdldEJyZWFkY3J1bWJzKHJvdXRlTmFtZSlcclxuICAgIGlmIChyb3V0ZXNbMF0gJiYgcm91dGVzWzBdLm5hbWUgIT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIpIHtcclxuICAgICAgICByb3V0ZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmcm9udGVuZC5hZG1pbi5ob21lJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IG1ha2VVcmwocm91dGUubmFtZSlcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnsgcm91dGUubmFtZSA9PSBcImZyb250ZW5kLmFkbWluLmhvbWVcIiA/IDxIb21lRmlsbGVkIC8+IDogdChyb3V0ZS5uYW1lKSB9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHt0KHJvdXRlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8QnJlYWRjcnVtYj57YnJlYWRDdW1ic308L0JyZWFkY3J1bWI+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicmVhZENydW1iQ29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzaG93KGRhdGEgPSBudWxsKSB7XHJcbiAgICBsZXQgeyB0aXRsZSwgY29udGVudCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGl0bGUgPSB0aXRsZSB8fCBcIlRpdGxlXCJcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiQ29udGVudFwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvbk9rOiB0aGlzLm9uU3VibWl0LFxyXG4gICAgICBvbkNhbmNlbDogdGhpcy5vbkNhbmNlbCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodHlwZW9mIG9uQ2FuY2VsID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgb25DYW5jZWwodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHR5cGVvZiBvblN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IG9uU3VibWl0KHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwic2V0U3RvcmVcIil7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9XHJcbiAgICBfLnNldChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucGF0aCwgYWN0aW9uLnBheWxvYWQudmFsdWUpXHJcbiAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qIGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN0b3JlOiBzdG9yZVJlZHVjZXJcclxufSkgKi9cclxuXHJcbmNvbnN0IHNldFN0b3JlID0gKHBhdGgsIHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdzZXRTdG9yZScsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcGF0aCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0U3RhdGUgPSB7fSwgb3B0aW9ucykgPT4ge1xyXG4gIGxldCBkZXZUb29sRXh0ZW5zaW9ucyA9ICghb3B0aW9ucy5pc1NlcnZlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpIDogdW5kZWZpbmVkXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRTdGF0ZSwgZGV2VG9vbEV4dGVuc2lvbnMpXHJcbn1cclxuZXhwb3J0IHtcclxuICBtYWtlU3RvcmUsXHJcbiAgc2V0U3RvcmVcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmNvbnN0IHsgUmFuZ2VQaWNrZXIgfSA9IERhdGVQaWNrZXI7XHJcblxyXG5jbGFzcyBGaWx0ZXJEYXRlUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZXMgPSAoZGF0ZVN0cmluZ3MpID0+IHtcclxuICAgICAgICBpZighZGF0ZVN0cmluZ3MpIGRhdGVTdHJpbmdzID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgICAgICBpZiAoIWRhdGVTdHJpbmdzKSByZXR1cm4ge31cclxuICAgICAgICBpZiAoIWRhdGVTdHJpbmdzWzBdKSBkYXRlU3RyaW5nc1swXSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmKCFkYXRlU3RyaW5nc1sxXSkgZGF0ZVN0cmluZ3NbMV0gPSB1bmRlZmluZWRcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRlU3RyaW5nczogZGF0ZVN0cmluZ3MsXHJcbiAgICAgICAgICAgIGRhdGVzOiBbXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nc1swXSA/IG1vbWVudChkYXRlU3RyaW5nc1swXSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nc1sxXSA/IG1vbWVudChkYXRlU3RyaW5nc1sxXSkgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGRhdGVzLCBkYXRlU3RyaW5ncykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKGRhdGVTdHJpbmdzKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZVN0cmluZ3M6Jyd9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3MgJiYgdGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1swXSAmJiB0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzFdKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJ2JldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1swXSkuc3RhcnRPZihcImRheXNcIikuYWRkKDE0LCdoJykudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1sxXSkuZW5kT2YoXCJkYXlzXCIpLmFkZCgxNCwnaCcpLnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPFJhbmdlUGlja2VyXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFsbG93RW1wdHk9e3RydWUsIHRydWV9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1NnB4XCIsIG1hcmdpbkJvdHRvbTogOCwgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRhdGVQaWNrZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlbGVjdCwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IElucHV0R3JvdXAgPSBJbnB1dC5Hcm91cDtcclxuXHJcbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlczogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlczogdmFsdWVzIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlcyAmJiB0aGlzLnN0YXRlLnZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICdpbicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZXNcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgLyogZmlsdGVycyA9IHRoaXMuc3RhdGUudmFsdWVzLm1hcCh2YWx1ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICc9JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KSkgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wdGlvbnMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMub3B0aW9ucykgcmV0dXJuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IDxPcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9IGxhYmVsPXtvcHRpb24ubGFiZWx9ID57b3B0aW9uLmxhYmVsfTwvT3B0aW9uPilcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgb3B0aW9ucywgc2VhcmNoQnRuVGV4dCwgY2xlYXJCdG5UZXh0LCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dDbGVhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI1MHB4JywgbWFyZ2luQm90dG9tOiA4LCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgU2VsZWN0LCBJbnB1dE51bWJlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdFxyXG5cclxuY2xhc3MgRmlsdGVySW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiksXHJcbiAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgXCJjb250YWluc1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpICE9IF8uZ2V0KHByZXZQcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVTZWFyY2ggIT0gdGhpcy5wcm9wcy5jb2x1bW4udmlzaWJsZVNlYXJjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVTZWFyY2ggPSB0aGlzLnByb3BzLmNvbHVtbi52aXNpYmxlU2VhcmNoXHJcbiAgICAgICAgICAgIHRoaXMucmVmSW5wdXQuaW5wdXQuc2VsZWN0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOicnfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMuc3RhdGUub3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3BlcmF0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyA9IHt9LCBoaWRlT3BlcmF0b3IsIG9wZXJhdG9yIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGhpZGVPcGVyYXRvcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IG9wZXJhdG9ycyA9IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjb250YWluc1wiLCBsYWJlbDogbWVzc2FnZXNbJ2NvbnRhaW5zJ10gfHwgXCJDb250YWluc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiPVwiLCBsYWJlbDogbWVzc2FnZXNbJ2VxdWFsJ10gfHwgXCJFcXVhbHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInN0YXJ0V2l0aHNcIiwgbGFiZWw6IG1lc3NhZ2VzWydzdGFydFdpdGhzJ10gfHwgXCJTdGFydFdpdGhzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJlbmRXaXRoc1wiLCBsYWJlbDogbWVzc2FnZXNbJ2VuZFdpdGhzJ10gfHwgXCJFbmRXaXRoc1wiIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBvcGVyYXRvcnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj1cIiwgbGFiZWw6ICc9JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI+XCIsIGxhYmVsOiAnPicgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPFwiLCBsYWJlbDogJzwnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj49XCIsIGxhYmVsOiAnPj0nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIjw9XCIsIGxhYmVsOiAnPD0nIH1cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wZXJhdG9yID0gb3BlcmF0b3IgfHwgb3BlcmF0b3JzWzBdLnZhbHVlXHJcblxyXG4gICAgICAgIHJldHVybiA8U2VsZWN0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdE9wZXJhdG9yfSBzdHlsZT17eyB3aWR0aDogOTAgfX0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVyYXRvcjogdmFsdWUgfSl9PlxyXG4gICAgICAgICAgICB7b3BlcmF0b3JzLm1hcChvcGVyYXRvciA9PiA8T3B0aW9uIHZhbHVlPXtvcGVyYXRvci52YWx1ZX0ga2V5PXtvcGVyYXRvci52YWx1ZX0+e29wZXJhdG9yLmxhYmVsfTwvT3B0aW9uPil9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCBoaWRlT3BlcmF0b3IsIHR5cGUsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgQ29tcG9uZW50ID0gSW5wdXRcclxuICAgICAgICBpZih0eXBlID09IFwibnVtYmVyXCIpIENvbXBvbmVudCA9IElucHV0TnVtYmVyXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT17dGhpcy5yZW5kZXJPcGVyYXRvcigpfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBtYXJnaW5Cb3R0b206IDgsIGRpc3BsYXk6ICdibG9jaycgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcklucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSYWRpbywgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBHcm91cCB9ID0gUmFkaW87XHJcblxyXG5jbGFzcyBGaWx0ZXJDaGVjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGVja2VkID0gKGNoZWNrZWQpID0+IHtcclxuICAgICAgICBpZihjaGVja2VkID09IHVuZGVmaW5lZCkgY2hlY2tlZCA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOnVuZGVmaW5lZH0sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja2VkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICc9JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNoZWNrZWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPEdyb3VwXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2x1bW4ub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkJvdHRvbTogOCwgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNoZWNrIiwiaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgYWRkUXVlcnkgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LWhpZ2hsaWdodC13b3Jkc1wiO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBGaWx0ZXJJbnB1dCBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvSW5wdXQnXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyJ1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uJ1xyXG5cclxuY2xhc3MgR3JpZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFByb3BzID0ge1xyXG4gICAgICAgICAgICBib3JkZXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGhhc0RhdGE6IHRydWUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVsb2FkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7fVxyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnByb3BzLnRvdGFsIHx8IDEwMFxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxyXG4gICAgICAgIHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEto4bufaSB04bqhbyBjw6FjIG9wdGlvbnMgdOG7qyBxdWVyeSB0csOqbiB1cmxcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBHcmlkVGFibGUuZ2V0RGF0YUZyb21RdWVyeShxdWVyeSwgdGhpcy5wcm9wcylcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBkZWZhdWx0T3B0aW9ucy5wYWdlU2l6ZSB8fCA1MCxcclxuICAgICAgICAgICAgcGFnZTogZGVmYXVsdE9wdGlvbnMucGFnZSB8fCAwLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnM7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvblRvQ29sdW1ucyhkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGzhuqFpIGThu68gbGnhu4d1IHThu6sgcXVlcnkgxJHhu5VpIHNhbmcgxJHDum5nIGZvcm1hdCBj4bunYSBjb2x1bW4gdHJvbmcgYW50ZFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0T3B0aW9uVG9Db2x1bW5zID0gKGRlZmF1bHRPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAvL3NldCBmaWVsZFxyXG4gICAgICAgICAgICBpZighY29sdW1uLmZpZWxkKSBjb2x1bW4uZmllbGQgPSBjb2x1bW4ua2V5XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc29ydCA9IGRlZmF1bHRPcHRpb25zLnNvcnRpbmcuZmluZChpdGVtID0+IGl0ZW0uZmllbGQgPT09IGNvbHVtbi5maWVsZCk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBkaXJlY3Rpb24gfSA9IHNvcnQ7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gZGlyZWN0aW9uID09PSBcImFzY1wiID8gJ2FzY2VuZCcgOiAnZGVzY2VuZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSBkZWZhdWx0T3B0aW9ucy5maWx0ZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0uZmllbGQgPT09IGNvbHVtbi5maWVsZCk7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlcmVkVmFsdWUgPSBbLi4uZmlsdGVyc107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLmZpbHRlcmVkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyYWJsZTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnaW5wdXQnKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBkZWxldGUgY29sdW1uLmZpbHRlcmFibGU7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2RhdGUnKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdjaGVjaycpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6ICF0aGlzLnN0YXRlLnJlbG9hZH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy91cGRhdGUgZGF0YSB0cm9uZyB0csaw4budbmcgaOG7o3AgxJHhu5VpIHThu6sgcHJvcHMgYsOqbiBuZ2/DoGlcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmRhdGEpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5KSAhPSBKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMucm91dGVyLnF1ZXJ5KSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkOiAhdGhpcy5zdGF0ZS5yZWxvYWR9KSAvL2No4buJIGPhuqduIHJlbmRlciBs4bqhaSB2aWV3XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWtlUXVlcnkob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHsgZmlsdGVycyA9IFtdLCBzb3J0aW5nID0gW10sIHBhZ2VTaXplLCBwYWdlIH0gPSBvcHRpb25zXHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICBmOiBbXSxcclxuICAgICAgICAgICAgczoge30sXHJcbiAgICAgICAgICAgIHBzOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgcDogcGFnZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcXVlcnlPYmouZi5wdXNoKFtmaWx0ZXIuZmllbGQsIGZpbHRlci5vcGVyYXRvciB8fCAnY29udGFpbnMnLCBmaWx0ZXIudmFsdWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBzb3J0IG9mIHNvcnRpbmcpIHtcclxuICAgICAgICAgICAgcXVlcnlPYmouc1tzb3J0LmZpZWxkXSA9IHNvcnQuZGlyZWN0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEtoYWkgYsOhbyBjw6FjIGZ1bmN0aW9uIGNobyBkcm9wZG93biBzZWFyY2ggYm94XHJcbiAgICAgKi9cclxuICAgIGdldENvbHVtblNlYXJjaFByb3BzID0gKGNvbHVtbix0eXBlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsdGVyRHJvcGRvd246ICh7IGNvbmZpcm0sIHNldFNlbGVjdGVkS2V5cyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybUZuYyA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGMgPT4gYy5kYXRhSW5kZXggPT09IGNvbHVtbi5kYXRhSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXlzKHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5yZW5kZXJGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnJlbmRlckZpbHRlcih7IGNvbHVtbiwgY29uZmlybTogY29uZmlybUZuYywgcmVmIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2NoZWNrJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbHRlckljb246IGZpbHRlcmVkID0+IChcclxuICAgICAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogZmlsdGVyZWQgPyBcIiMxODkwZmZcIiA6IHVuZGVmaW5lZCB9fSAvPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBvbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZTogdmlzaWJsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUgJiYgY29sdW1uLnZpc2libGVTZWFyY2ggIT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi52aXNpYmxlU2VhcmNoID0gdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5vblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbHVtbi52aXNpYmxlU2VhcmNoID0gdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLnBhZ2luYXRpb25cclxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlKHsgcGFnZVNpemUsIGN1cnJlbnQ6IHBhZ2UgfSwge30sIHt9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIFRhYmxlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mZXRjaERhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5idWlsZEZldGNoRGF0YSgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeU9wdGlvbnMgPSBHcmlkVGFibGUubWFrZVF1ZXJ5KHBhcmFtcylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFyYW1zLCBxdWVyeU9wdGlvbnMpXHJcbiAgICAgICAgICAgIGFkZFF1ZXJ5KHsgZmlsdGVyczogcXVlcnlPcHRpb25zIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5wcm9wcy5mZXRjaERhdGEocGFyYW1zKSB8fCB7fVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IHVuZGVmaW5lZCkgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmdldChyZXN1bHQsICdkYXRhJywgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBmaWx0ZXIgdOG7qyB0YWJsZSB2w6BvIGJp4bq/biB0aGlzLmNvbHVtbnMgxJHhu4MgY29udHJvbGxlZFxyXG4gICAgICovXHJcbiAgICBzZXRGaWx0ZXJzVG9Db2x1bW5zID0gKGZpbHRlcnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IGZpbHRlcnNbY29sdW1uLmZpZWxkXTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlcmVkVmFsdWUgPSBmaWx0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLmZpbHRlcmVkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNvcnRlclRvQ29sdW1ucyA9IChzb3J0ZXIgPSB7fSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT0gc29ydGVyLmNvbHVtbktleSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLnNvcnRPcmRlciA9IHNvcnRlci5vcmRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uc29ydE9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldFBhZ2luYXRpb24gPSAocGFnaW5hdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2luYXRpb24uY3VycmVudCAtIDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZVRhYmxlQ2hhbmdlID0gYXN5bmMgKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RmlsdGVyc1RvQ29sdW1ucyhmaWx0ZXJzKTtcclxuICAgICAgICB0aGlzLnNldFNvcnRlclRvQ29sdW1ucyhzb3J0ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5ID0ge30sIGRlZmF1bHRPcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSBxdWVyeS5maWx0ZXJzIHx8IHt9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeS5maWx0ZXJzID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iaiA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZShxdWVyeS5maWx0ZXJzKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmaWx0ZXJzIHBhcmFtcyBpbnZhbGlkIGZvcm1hdC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcXVlcnlPYmopIHJldHVybiB7fVxyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gcXVlcnlPYmouZiB8fCBbXVxyXG4gICAgICAgIGxldCBzb3J0aW5nID0gcXVlcnlPYmoucyB8fCB7fVxyXG4gICAgICAgIGxldCBxdWVyeU91dCA9IHtcclxuICAgICAgICAgICAgZmlsdGVyczogZGVmYXVsdE9wdGlvbnMuZmlsdGVycyB8fCBbXSxcclxuICAgICAgICAgICAgc29ydGluZzogZGVmYXVsdE9wdGlvbnMuc29ydGluZyB8fCBbXSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHF1ZXJ5T2JqLnBzIHx8IGRlZmF1bHRPcHRpb25zLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiBxdWVyeU9iai5wIHx8IGRlZmF1bHRPcHRpb25zLnBhZ2VcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgICBxdWVyeU91dC5maWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpbHRlclswXSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJbMV0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyWzJdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHNvcnRpbmcpIHtcclxuICAgICAgICAgICAgcXVlcnlPdXQuc29ydGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydGluZ1tmaWVsZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWVyeU91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T3B0aW9ucyhxdWVyeSwgZGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLmdldERhdGFGcm9tUXVlcnkocXVlcnksIGRlZmF1bHRPcHRpb25zKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgZGF0YSB04burIHRoaXMuY29sdW1ucyDEkeG7gyBraOG7m3AgduG7m2kgZm9ybWF0IHRyw6puIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBidWlsZEZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXSxcclxuICAgICAgICAgICAgc29ydGluZzogW10sXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnaW5hdGlvbi5wYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmZpbHRlcnMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1uLmZpbHRlcmVkVmFsdWVcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLnNvcnRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNvcnRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGNvbHVtbi5zb3J0T3JkZXIgPT0gXCJhc2NlbmRcIiA/IFwiYXNjXCIgOiBcImRlc2NcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJhbXNcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFnaW5hdGlvbiA9IChwYWdpbmF0aW9uID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLnBhZ2luYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucGFnaW5hdGlvbixcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMudG90YWwsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplIHx8IDUwLFxyXG4gICAgICAgICAgICBjdXJyZW50OiBwYWdlICsgMSxcclxuICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IFsnMicsICcxMCcsICc1MCcsICcxMDAnLCAnMjAwJywgJzUwMCddXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhhc0RhdGEgPSB0cnVlLCBkYXRhID0gW10sIGVsbGlwc2lzLCBmZXRjaERhdGEsIGNvbHVtbnMsIHBhZ2luYXRpb24sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLmluaXRpYWxQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZUxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogOTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0ZpcnN0Um93T25DaGFuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtoYXNEYXRhID8gdGhpcy5kYXRhLm1hcChyb3cgPT4gKHsgLi4ucm93LCBrZXk6IHJvdy5pZCB9KSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLmdldFBhZ2luYXRpb24ocGFnaW5hdGlvbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkVGFibGUiLCJpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcclxuaW1wb3J0IFJlYWN0LCB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEdyaWRUYWJsZVdpdGhSb3V0ZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogYW55LCByZWY6IGFueSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0cmV0dXJuIDxUYWJsZSByZWY9e3JlZn0gcm91dGVyPXtyb3V0ZXJ9IHsuLi5wcm9wc30gLz5cclxufSkgYXMgYW55XHJcblxyXG5HcmlkVGFibGVXaXRoUm91dGVyLmdldE9wdGlvbnMgPSBUYWJsZS5nZXRPcHRpb25zXHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIuZ2V0RGF0YUZyb21RdWVyeSA9IFRhYmxlLmdldERhdGFGcm9tUXVlcnlcclxuR3JpZFRhYmxlV2l0aFJvdXRlci5tYWtlUXVlcnkgPSBUYWJsZS5tYWtlUXVlcnlcclxuXHJcbmNvbnN0IEdyaWRUYWJsZUhlbHBlciA9IHtcclxuICAgIGdldE9wdGlvbnM6IFRhYmxlLmdldE9wdGlvbnMsXHJcbiAgICBnZXREYXRhRnJvbVF1ZXJ5OiBUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5LFxyXG4gICAgbWFrZVF1ZXJ5OiBUYWJsZS5tYWtlUXVlcnlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHcmlkVGFibGVXaXRoUm91dGVyXHJcbmV4cG9ydCB7XHJcbiAgICBHcmlkVGFibGVIZWxwZXJcclxufSIsIi8vIGltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xyXG5pbXBvcnQgVGFibGUsIHtHcmlkVGFibGVIZWxwZXJ9IGZyb20gJy4vVGFibGVUc3gnXHJcbmltcG9ydCBGaWx0ZXJJbnB1dCBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvSW5wdXQnXHJcbmltcG9ydCBGaWx0ZXJEcm9wZG93biBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRHJvcGRvd24nXHJcbmltcG9ydCBGaWx0ZXJEYXRlUGlja2VyIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyJ1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRhYmxlIGFzIEdyaWRUYWJsZSxcclxuICAgIEdyaWRUYWJsZUhlbHBlcixcclxuICAgIEZpbHRlcklucHV0LFxyXG4gICAgRmlsdGVyRHJvcGRvd24sXHJcbiAgICBGaWx0ZXJEYXRlUGlja2VyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAndGhlbWVzL21vZHVsZXMvSTE4bidcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFN0b3JlIGFzIHNldFN0b3JlQWN0aW9uIH0gZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvU3RvcmUnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCdcclxuaW50ZXJmYWNlIEJhc2VCb29rIHtcclxuICAgIHVzZVNlbGVjdG9yOiBGdW5jdGlvbixcclxuICAgIHJvdXRlcjogYW55LFxyXG4gICAgdDogRnVuY3Rpb24sXHJcbiAgICBzZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICBnZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICByZWRpcmVjdDogRnVuY3Rpb24sXHJcbiAgICBnZXREYXRhOiBGdW5jdGlvbixcclxuICAgIG5vdGlmeTogRnVuY3Rpb24sXHJcbiAgICBnZXRBdXRoOiBGdW5jdGlvblxyXG4gICAgZ2V0Q29va2llczogRnVuY3Rpb24sXHJcbiAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnOiBGdW5jdGlvblxyXG59XHJcbmNvbnN0IHVzZUJhc2VIb29rcyA9ICAoeyBsYW5nID0gWydjb21tb24nLCAncGFnZXMnLCAnZXJyb3JzJ10sfSA6IHsgbGFuZz86IHN0cmluZ1tdLCB9ID0ge30pOiBCYXNlQm9vayA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgSTE4biA9IHVzZVRyYW5zbGF0aW9uKGxhbmcpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgc2V0U3RvcmUgPSBhc3luYyAocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0U3RvcmVBY3Rpb24ocGF0aCwgdmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0b3JlID0gKHBhdGg6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBfLmdldChzdGF0ZSwgcGF0aCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSAocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcsIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBuZXh0Um91dGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogcm91dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgYXM6IHJvdXRlTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzLCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RpZnkgPSAobWVzc2FnZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nID0gJycsIHR5cGU6IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgPSBcInN1Y2Nlc3NcIik6IHZvaWQgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVyYXRpb246IDQgLy9zZWNvbmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRBdXRoID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29va2llcyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29va2llcylcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFB1YmxpY1J1bnRpbWVDb25maWcgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnB1YmxpY1J1bnRpbWVDb25maWcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VTZWxlY3RvcixcclxuICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgdDogSTE4bi50LFxyXG4gICAgICAgIHNldFN0b3JlLFxyXG4gICAgICAgIGdldFN0b3JlLFxyXG4gICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgIGdldERhdGEsXHJcbiAgICAgICAgbm90aWZ5LFxyXG4gICAgICAgIGdldEF1dGgsXHJcbiAgICAgICAgZ2V0Q29va2llcyxcclxuICAgICAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnXHJcbiAgICB9O1xyXG59XHJcblxyXG51c2VCYXNlSG9va3MuZ2V0RGF0YSA9ICAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUJhc2VIb29rcyIsImltcG9ydCB1c2VCYXNlSG9vayBmcm9tICcuL0Jhc2VIb29rcydcclxuaW1wb3J0IHtjaGVja1Blcm1pc3Npb259IGZyb20gJy4uL3V0aWxzL1Blcm1pc3Npb24nXHJcblxyXG4gIFxyXG5jb25zdCBQZXJtaXNzaW9uSG9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0QXV0aCB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fVxyXG4gICAgY29uc3QgdXNlclBlcm1pc3Npb25zID0gYXV0aC5wZXJtaXNzaW9ucyB8fCB7fVxyXG5cclxuICAgIGNvbnN0IGdldFVzZXJQZXJtaXNzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyUGVybWlzc2lvbnNcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgX2NoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9ucywgdXNlclBlcm1pc3Npb25zKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRVc2VyUGVybWlzc2lvbixcclxuICAgICAgICBjaGVja1Blcm1pc3Npb246IF9jaGVja1Blcm1pc3Npb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbkhvb2siLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQsIERyYXdlciwgQmFja1RvcCwgUm93LCBDb2wsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vYWRtaW4vU2lkZWJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2FkbWluL0hlYWRlclwiO1xyXG5jb25zdCBUSEVNRSA9IFwibGlnaHRcIjtcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcInRoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYlwiO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB1c2VCYXNlSG9va3MgZnJvbSBcInRoZW1lcy9ob29rcy9CYXNlSG9va3NcIjtcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSBcInRoZW1lcy9fcm91dGVzLmpzb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBBZG1pbiA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpO1xyXG5cclxuICBjb25zdCBvbkNvbGxhcHNlQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQodmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyO1xyXG4gICAgc2V0SXNNb2JpbGUobW9iaWxlKTtcclxuICAgIHNldENvbGxhcHNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gICAgdXBkYXRlU2l6ZSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzO1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV07XHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKCkgfHwgXCJcIjtcclxuICAvLyBjb25zb2xlLmxvZyhyb3V0ZU5hbWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cHVibGljUnVudGltZUNvbmZpZy5TSVRFX05BTUV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuVElUTEV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkRFU0NSSVBUSU9OfS8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099IC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm51cnNpbmctaG9tZS1pY29uXCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfT48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGlkPVwiYWRtaW5cIj5cclxuICAgICAgPExheW91dCBoYXNTaWRlcj17dHJ1ZX0+XHJcbiAgICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGVcclxuICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXN0cm95T25DbG9zZT17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gb25Db2xsYXBzZUNoYW5nZShmYWxzZSl9XHJcbiAgICAgICAgICAgIHZpc2libGU9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicHJpbWFyeUxheW91dFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0ICR7Y29sbGFwc2VkID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9IGRpc2FibGVkU2VhcmNoPXtwcm9wcy5kaXNhYmxlZFNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWJzXCI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0udGl0bGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS5kZXNjcmlwdGlvbmBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZENydW1iIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPsKpIHttb21lbnQoKS55ZWFyKCl9IEhhY3RlY2g8L0Zvb3Rlcj5cclxuICAgICAgICAgIDxCYWNrVG9wXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJiYWNrVG9wXCJ9XHJcbiAgICAgICAgICAgIHRhcmdldD17KCkgPT5cclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW1hcnlMYXlvdXRcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuKX07XHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIGNyZWF0ZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgTGF5b3V0LCBBdmF0YXIsIEJ1dHRvbiwgSW5wdXQsIFBvcG92ZXIsIFJvdywgQ29sLCBBdXRvQ29tcGxldGUsIEZvcm0sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCwgTWVudUZvbGRPdXRsaW5lZCwgUG93ZXJvZmZPdXRsaW5lZCwgXHJcbiAgU2V0dGluZ0ZpbGxlZCwgVXNlck91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2VcIlxyXG5pbXBvcnQgUGF0aWVudFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlXCJcclxuaW1wb3J0IEJlZFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2VcIlxyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuaW1wb3J0IHRvIGZyb20gJ2F3YWl0LXRvLWpzJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuY29uc3QgQWRtaW5IZWFkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdCwgbm90aWZ5LCByZWRpcmVjdCwgc2V0U3RvcmUsIGdldEF1dGgsIGdldFN0b3JlLCBnZXRDb29raWVzLCBnZXREYXRhICB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpXHJcbiAgY29uc3QgcGF0aWVudFNlcnZpY2UgPSBuZXcgUGF0aWVudFNlcnZpY2UoKVxyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZSgpXHJcbiAgY29uc3QgW3BhdGllbnRzLCBzZXRQYXRpZW50c10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYmVkcywgc2V0QmVkc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gY2hhbmdlIHBhc3N3b3JkXHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fTtcclxuICBjb25zdCBjb29raWVPYmplY3QgPSBnZXRDb29raWVzKClcclxuICBjb25zdCBjb25maXJtUmVmID0gY3JlYXRlUmVmPENvbmZpcm1EaWFsb2c+KClcclxuICBjb25zdCBoYW5kbGVDbGlja01lbnUgPSAoZTogYW55KSA9PiB7IH1cclxuICBjb25zdCByZWRpcmVjdExvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvb2tpZU9iamVjdClcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJy8nfSlcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd1c2VyJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvb2tpZU9iamVjdC50b2tlbiB8fCAhY29va2llT2JqZWN0LnVzZXIpIHtcclxuICAgICAgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBcclxuICBsZXQgb3B0aW9uc1BhdGllbnRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zQmVkczogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc1VzZXJzOiBhbnkgPSBbXVxyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VhcmNoID0gYXN5bmMgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGxldCBmaWx0ZXJQYXRpZW50cyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJCZWRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcInJvb21Db2RlXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlclVzZXJzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IFtlcnJVc2VycywgdXNlcnNdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLmluZGV4KGZpbHRlclVzZXJzKSlcclxuICAgIGxldCBkYXRhVXNlcnMgPSBfLmdldCh1c2VycywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVVzZXJzLmxlbmd0aCl7XHJcbiAgICAgIHNldFVzZXJzKGRhdGFVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyclBhdGllbnRzLCBwYXRpZW50c106IGFueVtdID0gYXdhaXQgdG8ocGF0aWVudFNlcnZpY2UuaW5kZXgoZmlsdGVyUGF0aWVudHMpKVxyXG4gICAgbGV0IGRhdGFQYXRpZW50cyA9IF8uZ2V0KHBhdGllbnRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhUGF0aWVudHMubGVuZ3RoKXtcclxuICAgICAgc2V0UGF0aWVudHMoZGF0YVBhdGllbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyQmVkcywgYmVkc106IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5pbmRleChmaWx0ZXJCZWRzKSlcclxuICAgIGxldCBkYXRhQmVkcyA9IF8uZ2V0KGJlZHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFCZWRzLmxlbmd0aCl7XHJcbiAgICAgIHNldEJlZHMoZGF0YUJlZHMpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgY29uc3Qgb25CbHVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcnMoW10pXHJcbiAgICBzZXRCZWRzKFtdKVxyXG4gICAgc2V0UGF0aWVudHMoW10pXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHJlbmRlckNvbmZpcm1EaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17cmVkaXJlY3RMb2dpbn1cclxuICAgICAgICB0aXRsZT17dCgnc2lnbm91dCcpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2Uuc2lnbm91dENvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAoZGF0YTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKVxyXG4gICAgbGV0IHZhbHVlcyA9IHsgaWQ6IGF1dGguaWQsIG9sZFBhc3N3b3JkOiBkYXRhLm9sZFBhc3N3b3JkLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9XHJcblxyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS51c2VyVXBkYXRlUGFzc3dvcmQodmFsdWVzKSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5vdGlmeSh0KGBlcnJvcnM6JHtlcnJvci5jb2RlfWApLCB0KGVycm9yLm1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmRVcGRhdGVkXCIpKVxyXG4gIH1cclxuXHJcbiAgLy92YWxpZGF0ZSBpbnB1dCBwYXNzd29yZFxyXG4gIGNvbnN0IHZhbGlkYXRvclBhc3N3b3JkID0gKHsgZ2V0RmllbGRWYWx1ZSB9OiB7IGdldEZpZWxkVmFsdWU6IEZ1bmN0aW9uIH0pID0+ICh7XHJcbiAgICB2YWxpZGF0b3I6IChydWxlOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnZm9ybS5yZVBhc3N3b3JkJykpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlckNoYW5nZVBhc3NNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtQ2hhbmdlUGFzc3dvcmRdID0gRm9ybS51c2VGb3JtKClcclxuICAgIHJldHVybiAoPEZvcm0gZm9ybT17Zm9ybUNoYW5nZVBhc3N3b3JkfSBuYW1lPVwiZm9ybUNoYW5nZVBhc3N3b3JkXCJcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIG9sZFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uRmluaXNoPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHsgZm9ybUNoYW5nZVBhc3N3b3JkLnN1Ym1pdCgpOyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicmVwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yUGFzc3dvcmRcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJSaWdodENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8UG93ZXJvZmZPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdygpIH19PjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGljb249ezxTZXR0aW5nRmlsbGVkIHNwaW4gLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiICBvbkNsaWNrPXsoKSA9PiB7IHNldE1vZGFsVmlzaWJsZSh0cnVlKSB9fSA+PC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IG1lbnVJY29uUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwidHJpZ2dlclwiLFxyXG4gICAgb25DbGljazogKCkgPT4gb25Db2xsYXBzZUNoYW5nZSghY29sbGFwc2VkKVxyXG4gIH1cclxuICBsZXQgaGVhZGVyQ2xhc3MgPSBcImhlYWRlclwiXHJcbiAgaWYgKGNvbGxhcHNlZCkgaGVhZGVyQ2xhc3MgKz0gJyBjb2xsYXBzZWQnXHJcblxyXG4gIGNvbnN0IGFjY291bnRQb3B1cCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzgsIDhdfT5cclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17N30gbGc9ezd9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiXCJ9IHNpemU9ezEwMH0gc2hhcGU9XCJzcXVhcmVcIj5cclxuICAgICAgICAgICAgICAgIHthdXRoLmZ1bGxuYW1lfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIHsvKiA8QXZhdGFyIHNpemU9ezY0fSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD4gXHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezE3fSBsZz17MTd9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCd1c2VybmFtZScpfTwvYj46IDxpPnthdXRoLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxiPnt0KCdmdWxsbmFtZScpfTwvYj46IDxpPnthdXRoLmZ1bGxuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ2VtYWlsJyl9PC9iPjogPGk+e2F1dGguZW1haWwgPyBhdXRoLmVtYWlsIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdwaG9uZScpfTwvYj46IDxpPnthdXRoLnBob25lID8gYXV0aC5waG9uZSA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJUaXRsZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9YW50ZFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgbW9yZVxyXG4gICAgICAgIDwvYT4gKi99XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJJdGVtID0gKHRpdGxlOiBzdHJpbmcsIGxpbms6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRpdGxlLFxyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtsaW5rfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBwYXRpZW50cy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1BhdGllbnRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHBhdGllbnRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIGJlZHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNCZWRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5yb29tQ29kZX0gLSAke2l0ZW0uYmVkSWR9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BiZWRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIHVzZXJzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zVXNlcnMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfSAtICR7aXRlbS51c2VybmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHVzZXJzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ3BhdGllbnQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNQYXRpZW50cyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdiZWQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNCZWRzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnZW1wbG95ZWUnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNVc2Vyc1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwMHB4XCIsIGRpc3BsYXk6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPVwiY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd25cIlxyXG4gICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXszNTB9IC8vIHdpZHRoIGRyb3Bkb3duXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBhbnkpID0+IG9uQ2hhbmdlU2VhcmNoKHZhbHVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gb25CbHVyU2VhcmNoKCl9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzUwIH19IC8vIHdpZHRoIGlucHV0IFNlYXJjaFxyXG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgIGRpc2FibGVkID0ge3Byb3BzLmRpc2FibGVkU2VhcmNoPyB0cnVlIDogZmFsc2UgfSAvLyBkaXNhYmxlIGlucHV0IHNlYXJjaFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5TZWFyY2ggc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9e3QoXCJzZWFyY2hcIil9IC8+XHJcbiAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2hlYWRlckNsYXNzfT5cclxuICAgICAge2NvbGxhcHNlZCBcclxuICAgICAgPyA8TWVudVVuZm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz4gXHJcbiAgICAgIDogPE1lbnVGb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPn1cclxuICAgICAgXHJcbiAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXt0KCdwZXJzb25hbEluZm8nKX0gY29udGVudD17YWNjb3VudFBvcHVwKCl9PlxyXG4gICAgICAgIDxCdXR0b24gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgXHJcbiAgICAgIHsvKiA8QnV0dG9uIGljb249ezxCZWxsT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPiAqL31cclxuICAgICAgey8qIDxTZWFyY2hcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tLi4uXCJcclxuICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2hcIlxyXG4gICAgICAvPiAqL31cclxuICAgICAge3JlbmRlclNlYXJjaCgpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHRDb250YWluZXInPntyZW5kZXJSaWdodENvbnRlbnQoKX08L2Rpdj5cclxuXHJcbiAgICA8L0hlYWRlcj5cclxuICAgIHtyZW5kZXJDb25maXJtRGlhbG9nKCl9XHJcbiAgICB7cmVuZGVyQ2hhbmdlUGFzc01vZGFsKCl9XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXIiLCJcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5pbXBvcnQgc2lkZWJhciBmcm9tICd0aGVtZXMvc2lkZWJhcidcclxuaW1wb3J0IHsgZ2V0U2lkZWJhclNlbGVjdGVkcyB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tICd0aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2snXHJcblxyXG5jb25zdCBNZW51Q29tcG9uZW50ID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICBjb25zdCB7Y2hlY2tQZXJtaXNzaW9ufSA9IHVzZVBlcm1pc3Npb25Ib29rKClcclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlTWVudXMgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuID0gZ2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKVxyXG4gICAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZighY2hlY2tQZXJtaXNzaW9uKGl0ZW0ucGVybWlzc2lvbnMpKSByZXR1cm5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5yb3V0ZU5hbWV9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KGl0ZW0ucm91dGVOYW1lKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH0pLmZpbHRlcigobWVudTphbnkpID0+IG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRSZWFkeSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuICBjb25zdCBjdXJyZW50Um91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICBjb25zdCBicmVhZGN1bXMgPSBnZXRTaWRlYmFyU2VsZWN0ZWRzKGN1cnJlbnRSb3V0ZU5hbWUpXHJcbiAgbGV0IHJvdXRlck5hbWVzID0gYnJlYWRjdW1zLm1hcCgoYnJlYWRjdW06IGFueSkgPT4gYnJlYWRjdW0ucm91dGVOYW1lKVxyXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJvdXRlck5hbWVzLnBvcCgpXHJcbiAgcmV0dXJuIDxNZW51XHJcbiAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgIHRoZW1lPXt0aGVtZX1cclxuICAgIGRlZmF1bHRPcGVuS2V5cz17cm91dGVyTmFtZXN9XHJcbiAgICBzZWxlY3RlZEtleXM9e3NlbGVjdGVkS2V5c31cclxuICAgIG9uQ2xpY2s9e1xyXG4gICAgICBpc01vYmlsZVxyXG4gICAgICAgID8gKCkgPT4ge1xyXG4gICAgICAgICAgb25Db2xsYXBzZUNoYW5nZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgey4uLm90aGVyUHJvcHN9XHJcbiAgPlxyXG4gICAge2dlbmVyYXRlTWVudXMoc2lkZWJhcil9XHJcbiAgPC9NZW51PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEF2YXRhciwgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuZnVuY3Rpb24gbnVtRm9ybWF0dGVyKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZihudW0gPiA5OTkgJiYgbnVtIDwgMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMCkudG9GaXhlZCgxKSArICdLJzsgLy8gY29udmVydCB0byBLIGZvciBudW1iZXIgZnJvbSA+IDEwMDAgPCAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPiAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwMDAwKS50b0ZpeGVkKDEpICsgJ00nOyAvLyBjb252ZXJ0IHRvIE0gZm9yIG51bWJlciBmcm9tID4gMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtIDwgOTAwKXtcclxuICAgICAgICByZXR1cm4gbnVtOyAvLyBpZiB2YWx1ZSA8IDEwMDAsIG5vdGhpbmcgdG8gZG9cclxuICAgIH1cclxufVxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRDb29raWVzLCByZWRpcmVjdCwgdCwgZ2V0RGF0YSwgZ2V0QXV0aCwgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKClcclxuICAgIGNvbnN0IHByb2ZpbGVJbmZvID0ge1xyXG4gICAgICAgIGNvbXBhbnlMb2dvOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxPR08sXHJcbiAgICAgICAgZ3JvdXBOYW1lOiBcIk5ow6JuIHZpw6puXCIsXHJcbiAgICAgICAgdXNlckZ1bGxuYW1lOiBcIkRpw6ptIFRo4buLIFF14buzbmhcIixcclxuICAgICAgICBjb21wYW55TmFtZTogXCJWaeG7h24gZMaw4buhbmcgbMOjbyBIxrDhu5tuZyBExrDGoW5nXCIsXHJcbiAgICAgICAgY29tcGFueUFkZHJlc3M6IFwiU+G7kSAzOSwgbmfDtSA3NCwgxJDGsOG7nW5nIER1eSBUw6JuLCBRdeG6rW4gQ+G6p3UgR2nhuqV5LCBIw6AgTuG7mWlcIixcclxuICAgICAgICB0b2RheToge30sXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXByb2ZpbGVcIj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs4MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gc3JjPXtwcm9maWxlSW5mby5jb21wYW55TG9nb30gY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY29tcGFueU5hbWVcIj57cHJvZmlsZUluZm8uY29tcGFueU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYWRkcmVzc1wiPntwcm9maWxlSW5mby5jb21wYW55QWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj57cHJvZmlsZUluZm8udXNlckZ1bGxuYW1lfTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLWdyb3VwTmFtZVwiPntwcm9maWxlSW5mby5ncm91cE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICBcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyMn0gb2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cInByb2ZpbGUtZW5kTGluZVwiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCwgVXNlck91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMnO1xyXG5jb25zdCBUSEVNRSA9ICdsaWdodCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnXHJcblxyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdGhlbWUgfSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgICB3aWR0aD17MjU2fVxyXG4gICAgICAgICAgICBjb2xsYXBzZWRXaWR0aD17MH1cclxuICAgICAgICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgLy9vbkJyZWFrcG9pbnQ9eyFpc01vYmlsZSAmJiBvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChkZWZhdWx0Q29va2llKSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGRlZmF1bHRDb29raWUpXHJcbiAgcmV0dXJuIGNvb2tpZXNcclxufSIsImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dEluc3RhbmNlID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TlM6ICdjb21tb24nLFxyXG4gIGRlZmF1bHRMYW5ndWFnZTogcHVibGljUnVudGltZUNvbmZpZy5MQU5HLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJ10sXHJcbiAgbG9jYWxlUGF0aDogXCJsYW5nXCIsXHJcbiAgYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZSxcclxuICBzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2VcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTmV4dEkxOE5leHRJbnN0YW5jZSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcbmltcG9ydCBSZXF1ZXN0RXhjZXB0aW9uIGZyb20gJy4vUmVxdWVzdEV4Y2VwdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGNvb2tpZXNTdHJpbmcpIHtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzU3RyaW5nXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoY29va2llc1N0cmluZykuZ2V0KCd0b2tlbicpXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlR2xvYmFsLmJpbmQodGhpcyksIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3IuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWwocmVzcG9uc2UpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsRXJyb3IoZXJyb3IpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2spIHtcclxuICAgICAgZXJyb3IgPSB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2soZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JcclxuICB9XHJcblxyXG4gIGdldEFwcFVybCgpIHtcclxuICAgIC8vcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIlxyXG4gICAgcmV0dXJuIHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX0hPU1RcclxuICB9XHJcbiAgYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KSB7XHJcblxyXG4gIH1cclxuICBhZnRlclJlcXVlc3QocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oLTEsIFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiKVxyXG4gICAgY29uc3QgY29kZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmNvZGVcIiwgLTEpXHJcbiAgICBjb25zdCBtZXNzYWdlID0gXy5nZXQocmVzdWx0LCBcImRhdGEubWVzc2FnZVwiLCBcIlwiKVxyXG4gICAgY29uc3QgZGF0YSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmRhdGFcIilcclxuICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlLCBkYXRhKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldCh1cmwsIGRhdGEgPSB7fSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwdXQodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBkZWxldGUodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxufSIsImNsYXNzIFJlcXVlc3RFeGNlcHRpb257XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU9XCJcIiwgbWVzc2FnZSA9IFwiXCIsIGRhdGEpIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0RXhjZXB0aW9uO1xyXG4iLCJjb25zdCBVcmxQYXR0ZXJuID0gcmVxdWlyZSgndXJsLXBhdHRlcm4nKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi9fcm91dGVzJ1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmNsYXNzIFJvdXRlIHtcclxuICAgIHN0YXRpYyBtYWtlVXJsKG5hbWUsIHBhcmFtcykge1xyXG4gICAgICAgIGxldCByb3V0ZUluZm8gPSByb3V0ZUNvbmZpZ1tuYW1lXVxyXG4gICAgICAgIGlmICghcm91dGVJbmZvKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgVXJsUGF0dGVybihyb3V0ZUluZm8udXJsKTtcclxuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhc1VybCA9IHBhdHRlcm4uc3RyaW5naWZ5KHBhcmFtcykgLy9saW5rIGhp4buDbiB0aOG7iyB0csOqbiB0csOsbmggZHV54buHdFxyXG4gICAgICAgICAgICBsZXQgaHJlZiA9IGFzVXJsIC8vbGluayB0aOG6rXQgdHJvbmcgL3BhZ2VzXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUluZm8uYWN0aW9uLnN1YnN0cigwLCA2KSA9PT0gXCJwYWdlcy9cIikge1xyXG4gICAgICAgICAgICAgICAgaHJlZiA9IHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDUpXHJcbiAgICAgICAgICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgPyR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGAmJHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzOiBhc1VybCxcclxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUXVlcnkocXVlcnksIHNoYWxsb3cgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHJldHVybjtcclxuICAgICAgICBsZXQgYXNQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgbGV0IG9sZFF1ZXJ5ID0gUm91dGVyLnJvdXRlci5xdWVyeVxyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHtcclxuICAgICAgICAgICAgLi4ub2xkUXVlcnksXHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShxdWVyeU9iaikgPT0gSlNPTi5zdHJpbmdpZnkob2xkUXVlcnkpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nQXBwZW5kID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHF1ZXJ5T2JqKVxyXG4gICAgICAgICAgICAvKiBpZihxdWVyeVN0cmluZ0FwcGVuZCl7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBSb3V0ZXIucm91dGVyLnF1ZXJ5ID0gcXVlcnlPYmpcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gKHJvdXRlTmFtZSwgcm91dGVzLCByb3V0ZVBhdGhzID0gW10pID0+IHtcclxuICAgICAgICBsZXQgc2lkZWJhclNlbGVjdGVkTmFtZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdLnNpZGViYXIgOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gc2lkZWJhclxyXG4gICAgICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgICAgICBpZiAocm91dGUucm91dGVOYW1lID09PSBzaWRlYmFyU2VsZWN0ZWROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGhzLnB1c2gocm91dGUpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlUGF0aHNcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0U2lkZWJhclNlbGVjdGVkcyhzaWRlYmFyU2VsZWN0ZWROYW1lLCByb3V0ZS5jaGlsZHJlbiwgWy4uLnJvdXRlUGF0aHMsIHJvdXRlXSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QnJlYWRjcnVtYnMgPSAocm91dGVOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICByZXN1bHQudW5zaGlmdChyb3V0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocm91dGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbLi4udGhpcy5nZXRCcmVhZGNydW1icyhyb3V0ZS5wYXJlbnQpLCAuLi5yZXN1bHRdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCByb3V0ZSA9IFJvdXRlLm1ha2VVcmxcclxuY29uc3QgYWRkUXVlcnkgPSBSb3V0ZS5hZGRRdWVyeVxyXG5jb25zdCBnZXRCcmVhZGNydW1icyA9IFJvdXRlLmdldEJyZWFkY3J1bWJzXHJcbmNvbnN0IGdldFNpZGViYXJTZWxlY3RlZHMgPSBSb3V0ZS5nZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlO1xyXG5leHBvcnQge1xyXG4gICAgcm91dGUsXHJcbiAgICBhZGRRdWVyeSxcclxuICAgIGdldEJyZWFkY3J1bWJzLFxyXG4gICAgZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICd0aGVtZXMvbW9kdWxlcy9SZXF1ZXN0J1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuY2xhc3MgQmFzZUFwaXtcclxuICBjb29raWVzOiBDb29raWVzXHJcbiAgUmVxdWVzdDogUmVxdWVzdFxyXG4gIG5hbWU6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCkge1xyXG4gICAgY29uc3QgY29va2llc09iaiA9IGNvbnRleHQgPyBuZXh0Q29va2llKGNvbnRleHQpOiB7fVxyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llcyhjb29raWVzT2JqKTtcclxuICAgIHRoaXMuUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvb2tpZXNPYmopXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUNhbGxiYWNrXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFja1xyXG4gICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICB9XHJcbiAgZ2xvYmFsSGFuZGxlQ2FsbGJhY2sgPSAocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgbGV0IHN0YXR1cyA9IF8uZ2V0KGVycm9yLCBcInJlc3BvbnNlLnN0YXR1c1wiLCAtMSk7XHJcbiAgICBpZihzdGF0dXMgPT09IC0xKXtcclxuICAgICAgLy9ub3RpZnkoXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIsIFwiZXJyb3JcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ0b2tlblwiKVxyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidXNlclwiKVxyXG4gICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvbG9naW5cIil7XHJcbiAgICAgICAgLy9ub3RpZnkoXCJMb2dpbiBzZXNzaW9uIGV4cGlyZWQhXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4ubG9naW5cIilcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIC8vbG9naW4gc2NyZWVuLiBraMO0bmcgbMOgbSBnw6wgY+G6oy5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICByb3V0ZShyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgcmV0dXJuIHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgfVxyXG5cclxuICByZWRpcmVjdChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgbGV0IG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICBSb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5kZXgoZGF0YT86IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmluZGV4YCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnN0b3JlYCxkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0YWlsKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRldGFpbGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGVkaXQoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRlbGV0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZGVsZXRlKHVybCwgZGF0YSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQXBpIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIEJlZCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAnYmVkcyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgUGF0aWVudCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAncGF0aWVudHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2Vycyc7IC8va+G6vyB0aOG7q2EgQ1JVRCB04burIHRo4bqxbmcgY2hhXHJcbiAgfVxyXG4gIGFzeW5jIGxvZ2luKHsgZGF0YSB9OiB7ZGF0YToge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9fSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShcImFwaS5sb2dpblwiKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKSB8fCB7fVxyXG4gICAgICAvL3N1Y2Nlc3NcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3Rva2VuJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ0b2tlblwiLCB1bmRlZmluZWQpLCB7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jb29raWVzLnNldCgndXNlcicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidXNlclwiLCB7fSkse1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIilcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgdXNlclVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51c2VyVXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHNlYXJjaChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zZWFyY2hgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIiwiaW1wb3J0IHtcclxuICBIb21lT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFVzZXJncm91cEFkZE91dGxpbmVkLFxyXG4gIFRlYW1PdXRsaW5lZCxcclxuICBTY2hlZHVsZU91dGxpbmVkLFxyXG4gIFNvbHV0aW9uT3V0bGluZWQsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lZCxcclxuICBWZXJpZmllZE91dGxpbmVkLFxyXG4gIEluc2VydFJvd1JpZ2h0T3V0bGluZWQsXHJcbiAgTGF5b3V0T3V0bGluZWQsXHJcbiAgQ2FycnlPdXRPdXRsaW5lZCxcclxuICBMaW5lQ2hhcnRPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhciA9IFtcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SG9tZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnJvb21zLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SW5zZXJ0Um93UmlnaHRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5iZWRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8TGF5b3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucGF0aWVudHMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYXNzaWdubWVudFwiLFxyXG4gICAgaWNvbjogPFNjaGVkdWxlT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLm51cnNlQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8Q2FsZW5kYXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hZG1pbnNJbmRleFwiLFxyXG4gICAgaWNvbjogPFRlYW1PdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJHcm91cHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VXNlcmdyb3VwQWRkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlclBlcm1pc3Npb25zLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFZlcmlmaWVkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNcIixcclxuICAgIGljb246IDxDYXJyeU91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljcy5oZWFsdGhTdGF0dXNcIixcclxuICAgICAgICBpY29uOiA8TGluZUNoYXJ0T3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xyXG4iLCJpbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vX3JvdXRlcy5qc29uJ1xyXG5cclxuY29uc3QgY2hhclRvTnVtID0geyBDOiA4LCBSOiA0LCBVOiAyLCBEOiAxIH1cclxuY29uc3QgY3J1ZFRvRGVjID0gKHRleHQ6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5yZWR1Y2UoKHRvdGFsOiBudW1iZXIsIGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJykgPT4gdG90YWwgKyBjaGFyVG9OdW1bY2hhcl0sIDApXHJcblxyXG59XHJcbmNvbnN0IGRlY1RvQ3J1ZCA9IChkZWM6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnXHJcbiAgICBmb3IgKGNoYXIgaW4gY2hhclRvTnVtKSB7XHJcbiAgICAgICAgaWYgKChkZWMgJiBjaGFyVG9OdW1bY2hhcl0pID09IGNoYXJUb051bVtjaGFyXSkgcmVzdWx0ICs9IGNoYXJcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaGFzUGVybWlzc2lvbiA9IChyZXF1aXJlUGVybWlzc2lvbjogbnVtYmVyLCB1c2VyUGVybWlzc2lvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHVzZXJQZXJtaXNzaW9uICYgcmVxdWlyZVBlcm1pc3Npb24pID09PSByZXF1aXJlUGVybWlzc2lvblxyXG4gIH1cclxuXHJcbmNvbnN0IGNoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55LCB1c2VyUGVybWlzc2lvbnM6IGFueSwgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmKCFwZXJtaXNzaW9ucykgcmV0dXJuIHRydWVcclxuICAgIGxldCBwZXJtaXNzaW9uQXJyYXkgPSBbXVxyXG4gICAgZm9yIChsZXQgcGVybWlzc2lvbiBpbiBwZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVQZXJtaXNzaW9uID0gY3J1ZFRvRGVjKHBlcm1pc3Npb25zW3Blcm1pc3Npb25dKTtcclxuICAgICAgICBjb25zdCByb290UGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1tcInJvb3RcIl0gfHwgMFxyXG4gICAgICAgIGxldCB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1twZXJtaXNzaW9uXSB8fCAwXHJcbiAgICAgICAgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbiB8IHJvb3RQZXJtaXNzaW9uXHJcbiAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24ocmVxdWlyZVBlcm1pc3Npb24sIHVzZXJQZXJtaXNzaW9uKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBwZXJtaXNzaW9uQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24sXHJcbiAgICAgICAgICAgIHJlcXVpcmVQZXJtaXNzaW9uOiBkZWNUb0NydWQocmVxdWlyZVBlcm1pc3Npb24pLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbjogZGVjVG9DcnVkKHVzZXJQZXJtaXNzaW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoIXNob3dFcnJvcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbkFycmF5XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2hlY2tQZXJtaXNzaW9uLFxyXG4gICAgaGFzUGVybWlzc2lvbixcclxuICAgIGNydWRUb0RlYyxcclxuICAgIGRlY1RvQ3J1ZFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdhaXQtdG8tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtYmFzZTY0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==