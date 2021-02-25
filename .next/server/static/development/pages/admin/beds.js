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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./pages/admin/beds/index.tsx":
/*!************************************!*\
  !*** ./pages/admin/beds/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/BedService */ "./themes/services/api/BedService.ts");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\nursinghome_github\\pages\\admin\\beds\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











const formaterStatus = value => {
  const {
    t
  } = Object(themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"])();
  value = Math.round(Number(value));
  value = value == 0 ? t('beds.empty') : t('beds.full');
  return `${value}`;
};

const Index = ({
  beds,
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
  const bedService = new themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    "admin.beds": "C"
  });
  const deletePer = checkPermission({
    "admin.beds": "D"
  });
  const columns = [{
    title: t("room"),
    dataIndex: 'roomCode',
    key: 'roomCode',
    sorter: true,
    filterable: true,
    width: '20%',
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.beds.edit', {
        id: record.id
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, record.roomCode)
  }, {
    title: t('beds.bedId'),
    dataIndex: 'bedId',
    key: 'bedId',
    width: '20%'
  }, {
    title: t('status'),
    dataIndex: 'status',
    sorter: true,
    filterCheck: true,
    options: [{
      label: t('beds.empty'),
      value: 0
    }, {
      label: t('beds.full'),
      value: 1
    }],
    key: 'status',
    width: '20%',
    render: (text, record) => __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 46
      }
    }, formaterStatus(text))
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
    let [error, beds] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(bedService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return beds;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(bedService.delete({
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
      content: t('message.deleteConfirm'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    });
  };

  return __jsx(themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    hidden: !createPer,
    onClick: () => redirect("frontend.admin.beds.create"),
    type: "primary",
    className: "btn-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["PlusCircleOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }), t('create')), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    danger: true,
    onClick: () => {
      if (confirmRef.current) confirmRef.current.show();
    },
    className: "btn-top",
    hidden: hiddenDeleteBtn || !deletePer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }), t('delete')), __jsx(themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTable"], {
    ref: tableRef,
    columns: columns,
    data: beds,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let bedService = new themes_services_api_BedService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, beds] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(bedService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    beds: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(beds, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(beds, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "admin.beds": "R"
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Breadcumb\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








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
        key: route.name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, linkProps, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }), __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, route.name == "frontend.admin.home" ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["HomeFilled"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 64
        }
      }) : t(route.name)))));
    } catch (e) {
      breadCumbs.push(__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
        key: route.name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 29
        }
      }, t(route.name)));
    }
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }
  }, breadCumbs);
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Dialogs\\ConfirmDialog.jsx";
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
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    });
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\SearchComponents\\DatePicker.jsx";
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 16
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\SearchComponents\\Dropdown.jsx";
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
      label: option.label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 49
      }
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 16
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\SearchComponents\\Input.jsx";
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
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, operators.map(operator => __jsx(Option, {
      value: operator.value,
      key: operator.value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 40
      }
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\SearchComponents\\RadioButton.jsx";
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
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }
    }, __jsx(Group, _extends({}, otherProps, {
      ref: ref => this.refInput = ref,
      value: this.state.checked,
      onChange: this.onChange,
      options: column.options,
      style: {
        width: "150px",
        marginBottom: 8
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.clear,
      danger: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\Table.jsx";

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
            confirm: confirmFnc,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 28
            }
          });
          if (type == 'date') return __jsx(_SearchComponents_DatePicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
            column: column,
            ref: ref,
            confirm: confirmFnc,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 28
            }
          });
          if (type == 'check') return __jsx(_SearchComponents_RadioButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
            column: column,
            ref: ref,
            confirm: confirmFnc,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 28
            }
          });
        },
        filterIcon: filtered => __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SearchOutlined"], {
          style: {
            color: filtered ? "#1890ff" : undefined
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 17
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

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], _extends({}, this.initialProps, {
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
      pagination: this.getPagination(pagination),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\components\\Table\\TableTsx.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GridTableWithRouter = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(_Table__WEBPACK_IMPORTED_MODULE_0__["default"], _extends({
    ref: ref,
    router: router
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\Admin.tsx";
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, publicRuntimeConfig.SITE_NAME), __jsx("meta", {
    property: "og:title",
    content: publicRuntimeConfig.TITLE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:description",
    content: publicRuntimeConfig.DESCRIPTION,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("meta", {
    property: "og:image",
    content: publicRuntimeConfig.LOGO,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "nursing-home-icon",
    href: publicRuntimeConfig.LOGO,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  })), __jsx("div", {
    id: "admin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    hasSider: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
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
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "slider",
    collapsed: false,
    onCollapseChange: onCollapseChange,
    theme: THEME,
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })) : __jsx(_admin_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "slider",
    collapsed: collapsed,
    onCollapseChange: onCollapseChange,
    theme: THEME,
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "primaryLayout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx(Content, {
    className: `main-layout ${collapsed ? "collapsed" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_admin_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    collapsed: collapsed,
    onCollapseChange: onCollapseChange,
    disabledSearch: props.disabledSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "breadcumbs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    lg: 12,
    xl: 15,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(Title, {
    level: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, props.title || t(`pages:${routeName.replace("frontend.admin.", "")}.title`)), __jsx(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, props.description || t(`pages:${routeName.replace("frontend.admin.", "")}.description`))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    lg: 12,
    xl: 9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "breadcumb-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, __jsx(themes_components_Breadcumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }))))), props.children), __jsx(Footer, {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "\xA9 ", moment__WEBPACK_IMPORTED_MODULE_8___default()().year(), " Hactech"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["BackTop"], {
    className: "backTop",
    target: () => document.querySelector("#primaryLayout"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\admin\\Header.tsx";
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
      content: t('message.signoutConfirm'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }
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
      onFinish: onChangePassword,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      closable: false,
      visible: modalVisible,
      onCancel: () => setModalVisible(false),
      onOk: () => {
        formChangePassword.submit();
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 7
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
      }],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("oldPassword"),
      type: "password",
      autoFocus: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 11
      }
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
      }],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("password"),
      type: "password",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
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
      }, validatorPassword],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: t("rePassword"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    }))));
  };

  const renderRightContent = () => {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 12
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PoweroffOutlined"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }),
      type: "link",
      className: "header-btn",
      onClick: () => {
        if (confirmRef.current) confirmRef.current.show();
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingFilled"], {
        spin: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }
      }),
      type: "link",
      className: "header-btn",
      onClick: () => {
        setModalVisible(true);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 7
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 12
      }
    }, __jsx("div", {
      style: {
        width: "400px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      gutter: [8, 8],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 12,
      md: 7,
      lg: 7,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "avatar",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 23
        }
      }),
      src: "",
      size: 100,
      shape: "square",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 15
      }
    }, auth.fullname))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      xs: 12,
      md: 17,
      lg: 17,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }, t('username')), ": ", __jsx("i", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 39
      }
    }, auth.username)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, t('fullname')), ": ", __jsx("i", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 37
      }
    }, auth.fullname)), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 15
      }
    }, t('email')), ": ", __jsx("i", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 36
      }
    }, auth.email ? auth.email : t("update"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, __jsx("b", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 15
      }
    }, t('phone')), ": ", __jsx("i", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 36
      }
    }, auth.phone ? auth.phone : t("update")))))));
  };

  const renderTitle = title => {
    return __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 7
      }
    }, title);
  };

  const renderItem = (title, link) => {
    return {
      value: title,
      label: __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 9
        }
      }, title, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 11
        }
      }, link))
    };
  };

  patients.map((item, index) => {
    optionsPatients.push(renderItem(`${item.fullname}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `patients/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 7
      }
    }, " Xem chi ti\u1EBFt ")));
  });
  beds.map((item, index) => {
    optionsBeds.push(renderItem(`${item.roomCode} - ${item.bedId}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `beds/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 7
      }
    }, " Xem chi ti\u1EBFt ")));
  });
  users.map((item, index) => {
    optionsUsers.push(renderItem(`${item.fullname} - ${item.username}`, __jsx("a", {
      style: {
        float: 'right'
      },
      href: `users/${item.id}/edit`,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 7
      }
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
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 7
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
      ,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      size: "large",
      placeholder: t("search"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 11
      }
    })));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 10
    }
  }, __jsx(Header, {
    className: headerClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 5
    }
  }, collapsed ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutlined"], _extends({
    style: {
      color: "#fff"
    }
  }, menuIconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 9
    }
  })) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutlined"], _extends({
    style: {
      color: "#fff"
    }
  }, menuIconProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    placement: "bottom",
    title: t('personalInfo'),
    content: accountPopup(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 23
      }
    }),
    type: "link",
    className: "header-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  })), renderSearch(), __jsx("div", {
    className: "rightContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\admin\\Menu.tsx";
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
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }
            }, item.icon ? item.icon : '', __jsx("span", {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 19
              }
            }, t(item.routeName))),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 13
            }
          }, children);
        } else {
          return __jsx(SubMenu, {
            key: item.routeName,
            title: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }
            }, item.icon ? item.icon : '', __jsx("span", {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }
            }, t(item.routeName))),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }
          }, generateMenus(item.children));
        }
      }

      if (!checkPermission(item.permissions)) return;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        key: item.routeName,
        onClick: () => redirect(item.routeName),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, item.icon ? item.icon : '', __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, t(item.routeName)));
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
  }, otherProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }), generateMenus(themes_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]));
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\admin\\Profile.tsx";
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
    className: "sidebar-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 12
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "profile-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 80,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 45
      }
    }),
    src: profileInfo.companyLogo,
    className: "avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "profile-companyName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, profileInfo.companyName), __jsx("div", {
    className: "profile-address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, profileInfo.companyAddress))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 22,
    offset: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    className: "profile-endLine",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
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
var _jsxFileName = "E:\\nursinghome_github\\themes\\layouts\\admin\\Sidebar.tsx";
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
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_Profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })))), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: theme,
    onCollapseChange: onCollapseChange,
    isMobile: isMobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
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

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/admin/beds/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\beds\index.tsx */"./pages/admin/beds/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vYmVkcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1N0b3JlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0RhdGVQaWNrZXIuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1NlYXJjaENvbXBvbmVudHMvRHJvcGRvd24uanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1NlYXJjaENvbXBvbmVudHMvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1NlYXJjaENvbXBvbmVudHMvUmFkaW9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9UYWJsZVRzeC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9CYXNlSG9va3MudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vay50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvQWRtaW4udHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvQ29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9JMThuLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CYXNlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy91dGlscy9QZXJtaXNzaW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3YWl0LXRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1iYXNlNjRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhpZ2hsaWdodC13b3Jkc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtcGF0dGVyblwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiZm9ybWF0ZXJTdGF0dXMiLCJ0IiwidXNlQmFzZUhvb2siLCJNYXRoIiwicm91bmQiLCJOdW1iZXIiLCJJbmRleCIsImJlZHMiLCJ0b3RhbCIsInJlZGlyZWN0Iiwic2V0U3RvcmUiLCJnZXRBdXRoIiwiZ2V0U3RvcmUiLCJoaWRkZW5EZWxldGVCdG4iLCJzZXRIaWRkZW5EZWxldGVCdG4iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSWRzIiwic2V0U2VsZWN0ZWRJZHMiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsImNvbmZpcm1SZWYiLCJjcmVhdGVSZWYiLCJ0YWJsZVJlZiIsImNoZWNrUGVybWlzc2lvbiIsInVzZVBlcm1pc3Npb25Ib29rIiwiY3JlYXRlUGVyIiwiZGVsZXRlUGVyIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwic29ydGVyIiwiZmlsdGVyYWJsZSIsIndpZHRoIiwidGV4dCIsInJlY29yZCIsImlkIiwicm9vbUNvZGUiLCJmaWx0ZXJDaGVjayIsImxhYmVsIiwib25DaGFuZ2VTZWxlY3Rpb24iLCJsZW5ndGgiLCJmZXRjaERhdGEiLCJ2YWx1ZXMiLCJ0byIsImluZGV4IiwiY29kZSIsIm9uRGVsZXRlIiwiZGVsZXRlIiwiaWRzIiwiY3VycmVudCIsInJlbmRlckRlbGV0ZURpYWxvZyIsInNob3ciLCJzZWxlY3RlZFJvd0tleXMiLCJvbkNoYW5nZSIsImRlZmF1bHRPcHRpb25zIiwiZmlsdGVycyIsInNvcnRpbmciLCJHcmlkVGFibGVIZWxwZXIiLCJnZXRPcHRpb25zIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiZ2V0RGF0YSIsImRlZmF1bHRRdWVyeSIsIm1ha2VRdWVyeSIsInBlcm1pc3Npb25zIiwiYnJlYWRDcnVtYkNvbXBvbmVudCIsImxhbmciLCJnZXRSb3V0ZU5hbWUiLCJyb3V0ZVBhdGgiLCJyb3V0ZURhdGEiLCJfcm91dGVzIiwicm91dGVOYW1lIiwicm91dGVFbGVtZW50IiwiYWN0aW9uIiwic3Vic3RyIiwiYnJlYWRDdW1icyIsInJvdXRlcyIsImdldEJyZWFkY3J1bWJzIiwidW5zaGlmdCIsImxpbmtQcm9wcyIsIm1ha2VVcmwiLCJjb25maXJtIiwiTW9kYWwiLCJDb25maXJtRGlhbG9nIiwib25DYW5jZWwiLCJzdGF0ZSIsIm9uU3VibWl0IiwiY29udGVudCIsInNldFN0YXRlIiwib25PayIsInJlZHVjZXIiLCJ0eXBlIiwiXyIsInBheWxvYWQiLCJtYWtlU3RvcmUiLCJpbml0U3RhdGUiLCJkZXZUb29sRXh0ZW5zaW9ucyIsImlzU2VydmVyIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInVuZGVmaW5lZCIsImNyZWF0ZVN0b3JlIiwiUmFuZ2VQaWNrZXIiLCJEYXRlUGlja2VyIiwiRmlsdGVyRGF0ZVBpY2tlciIsImRhdGVTdHJpbmdzIiwiY29sdW1uIiwiZGF0ZXMiLCJtb21lbnQiLCJnZXREYXRlcyIsIm9wZXJhdG9yIiwic3RhcnRPZiIsImFkZCIsInRvSVNPU3RyaW5nIiwiZW5kT2YiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsdGVyZWRWYWx1ZSIsIm90aGVyUHJvcHMiLCJwYWRkaW5nIiwicmVmSW5wdXQiLCJtYXJnaW5Cb3R0b20iLCJjbGVhciIsIk9wdGlvbiIsIlNlbGVjdCIsIklucHV0R3JvdXAiLCJJbnB1dCIsIkdyb3VwIiwiRmlsdGVyRHJvcGRvd24iLCJyZW5kZXJPcHRpb25zIiwibWFwIiwib3B0aW9uIiwic2VhcmNoQnRuVGV4dCIsImNsZWFyQnRuVGV4dCIsImRpc3BsYXkiLCJGaWx0ZXJJbnB1dCIsInZpc2libGVTZWFyY2giLCJpbnB1dCIsInNlbGVjdCIsInJlbmRlck9wZXJhdG9yIiwibWVzc2FnZXMiLCJoaWRlT3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJkZWZhdWx0T3BlcmF0b3IiLCJJbnB1dE51bWJlciIsIlJhZGlvIiwiRmlsdGVyQ2hlY2siLCJjaGVja2VkIiwiZ2V0Q2hlY2tlZCIsIkdyaWRUYWJsZSIsInNvcnQiLCJmaW5kIiwiaXRlbSIsImRpcmVjdGlvbiIsInNvcnRPcmRlciIsImZpbHRlciIsImdldENvbHVtblNlYXJjaFByb3BzIiwiZmlsdGVyRGF0ZSIsImZpbHRlckRyb3Bkb3duIiwic2V0U2VsZWN0ZWRLZXlzIiwiY29uZmlybUZuYyIsImN1cnJlbnRDb2x1bW4iLCJjIiwicmVuZGVyRmlsdGVyIiwiZmlsdGVySWNvbiIsImZpbHRlcmVkIiwiY29sb3IiLCJvbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZSIsInZpc2libGUiLCJwYWdlU2l6ZSIsInBhZ2luYXRpb24iLCJoYW5kbGVUYWJsZUNoYW5nZSIsImNvbHVtbktleSIsIm9yZGVyIiwic2V0RmlsdGVyc1RvQ29sdW1ucyIsInNldFNvcnRlclRvQ29sdW1ucyIsInNldFBhZ2luYXRpb24iLCJwb3NpdGlvbiIsInNob3dTaXplQ2hhbmdlciIsInBhZ2VTaXplT3B0aW9ucyIsImJvcmRlcmVkIiwic2l6ZSIsInNob3dIZWFkZXIiLCJoYXNEYXRhIiwibG9hZGluZyIsImJpbmQiLCJpbml0IiwiZ2V0RGF0YUZyb21RdWVyeSIsImRlZmF1bHRPcHRpb25Ub0NvbHVtbnMiLCJjb21wb25lbnREaWRNb3VudCIsInF1ZXJ5T2JqIiwiZiIsInMiLCJwcyIsIkJhc2U2NCIsImVuY29kZSIsImJ1aWxkRmV0Y2hEYXRhIiwicXVlcnlPcHRpb25zIiwiYWRkUXVlcnkiLCJwYXJzZSIsIkVycm9yIiwicXVlcnlPdXQiLCJrZXlzIiwiZWxsaXBzaXMiLCJ4Iiwic2Nyb2xsVG9GaXJzdFJvd09uQ2hhbmdlIiwicm93IiwiZ2V0UGFnaW5hdGlvbiIsIkdyaWRUYWJsZVdpdGhSb3V0ZXIiLCJmb3J3YXJkUmVmIiwidXNlUm91dGVyIiwiVGFibGUiLCJ1c2VCYXNlSG9va3MiLCJJMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJ1c2VTZWxlY3RvciIsIm5leHRSb3V0ZSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwibm90aWZpY2F0aW9uIiwiZHVyYXRpb24iLCJhdXRoIiwiZ2V0Q29va2llcyIsImNvb2tpZXMiLCJnZXRQdWJsaWNSdW50aW1lQ29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIlBlcm1pc3Npb25Ib29rIiwidXNlclBlcm1pc3Npb25zIiwiZ2V0VXNlclBlcm1pc3Npb24iLCJfY2hlY2tQZXJtaXNzaW9uIiwiVEhFTUUiLCJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsIkFkbWluIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9uQ29sbGFwc2VDaGFuZ2UiLCJsb2ciLCJ1cGRhdGVTaXplIiwibW9iaWxlIiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0lURV9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxPR08iLCJoZWlnaHQiLCJkaXNhYmxlZFNlYXJjaCIsInllYXIiLCJxdWVyeVNlbGVjdG9yIiwiSGVhZGVyIiwiU3ViTWVudSIsIk1lbnUiLCJTZWFyY2giLCJBZG1pbkhlYWRlciIsInVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJwYXRpZW50U2VydmljZSIsIlBhdGllbnRTZXJ2aWNlIiwicGF0aWVudHMiLCJzZXRQYXRpZW50cyIsInNldEJlZHMiLCJ1c2VycyIsInNldFVzZXJzIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY29va2llT2JqZWN0IiwiaGFuZGxlQ2xpY2tNZW51IiwicmVkaXJlY3RMb2dpbiIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ0b2tlbiIsInVzZXIiLCJvcHRpb25zUGF0aWVudHMiLCJvcHRpb25zQmVkcyIsIm9wdGlvbnNVc2VycyIsIm9uQ2hhbmdlU2VhcmNoIiwiZmlsdGVyUGF0aWVudHMiLCJmaWx0ZXJCZWRzIiwiZmlsdGVyVXNlcnMiLCJlcnJVc2VycyIsImRhdGFVc2VycyIsImVyclBhdGllbnRzIiwiZGF0YVBhdGllbnRzIiwiZXJyQmVkcyIsImRhdGFCZWRzIiwib25CbHVyU2VhcmNoIiwicmVuZGVyQ29uZmlybURpYWxvZyIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsInBhc3N3b3JkIiwidXNlclVwZGF0ZVBhc3N3b3JkIiwidmFsaWRhdG9yUGFzc3dvcmQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwicnVsZSIsInJlbmRlckNoYW5nZVBhc3NNb2RhbCIsImZvcm1DaGFuZ2VQYXNzd29yZCIsIkZvcm0iLCJ1c2VGb3JtIiwicmVwYXNzd29yZCIsInN1Ym1pdCIsInNwYW4iLCJyZXF1aXJlZCIsInJlbmRlclJpZ2h0Q29udGVudCIsIm1lbnVJY29uUHJvcHMiLCJjbGFzc05hbWUiLCJoZWFkZXJDbGFzcyIsImFjY291bnRQb3B1cCIsImZ1bGxuYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInBob25lIiwicmVuZGVyVGl0bGUiLCJyZW5kZXJJdGVtIiwibGluayIsImp1c3RpZnlDb250ZW50IiwiZmxvYXQiLCJiZWRJZCIsInJlbmRlclNlYXJjaCIsIk1lbnVDb21wb25lbnQiLCJnZW5lcmF0ZU1lbnVzIiwiaWNvbiIsIm1lbnUiLCJ0aGVtZSIsInRSZWFkeSIsImN1cnJlbnRSb3V0ZU5hbWUiLCJicmVhZGN1bXMiLCJnZXRTaWRlYmFyU2VsZWN0ZWRzIiwicm91dGVyTmFtZXMiLCJicmVhZGN1bSIsInNlbGVjdGVkS2V5cyIsInBvcCIsInNpZGViYXIiLCJudW1Gb3JtYXR0ZXIiLCJudW0iLCJ0b0ZpeGVkIiwiUHJvZmlsZSIsInByb2ZpbGVJbmZvIiwiY29tcGFueUxvZ28iLCJncm91cE5hbWUiLCJ1c2VyRnVsbG5hbWUiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwidG9kYXkiLCJTaWRlciIsInNpZGVCYXIiLCJkZWZhdWx0Q29va2llIiwiTmV4dEkxOE5leHQiLCJkZWZhdWx0IiwiZ2V0Q29uZmlnIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsImRlZmF1bHROUyIsImRlZmF1bHRMYW5ndWFnZSIsIkxBTkciLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVBhdGgiLCJicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiY29va2llc1N0cmluZyIsImhhbmRsZUdsb2JhbENhbGxiYWNrIiwiaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVHbG9iYWwiLCJoYW5kbGVHbG9iYWxFcnJvciIsImdldEFwcFVybCIsIkFQSV9IT1NUIiwiYmVmb3JlUmVxdWVzdCIsImFmdGVyUmVxdWVzdCIsIlJlcXVlc3RFeGNlcHRpb24iLCJwb3N0IiwicHV0IiwiVXJsUGF0dGVybiIsInF1ZXJ5U3RyaW5nIiwiUm91dGUiLCJyb3V0ZUNvbmZpZyIsInBhdHRlcm4iLCJhc1VybCIsImluZGV4T2YiLCJsb2NhdGlvbiIsIm9sZFF1ZXJ5IiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInBhcmVudCIsIkJhc2VBcGkiLCJjb250ZXh0Iiwic3RhdHVzIiwiY29va2llc09iaiIsIm5leHRDb29raWUiLCJnbG9iYWxIYW5kbGVDYWxsYmFjayIsImdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2siLCJjcmVhdGUiLCJkZXRhaWwiLCJlZGl0IiwiQmVkIiwiUGF0aWVudCIsIlVzZXIiLCJsb2dpbiIsInVwZGF0ZVBhc3N3b3JkIiwic2VhcmNoIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsInJlZHVjZSIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsInNob3dFcnJvciIsInBlcm1pc3Npb25BcnJheSIsInBlcm1pc3Npb24iLCJyb290UGVybWlzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTs7QUFDQTs7QUFFQTs7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QkFBaUIsRUFBRUgsU0FBUyxDQUFDRyxpQkFBRCxDQUZYO0FBR2pCQyxvQkFBYyxFQUFFSixTQUFTLENBQUNJLGNBQUQ7QUFIUixLQUFyQjtBQUtIOztBQUNELE1BQUksQ0FBQ0MsU0FBTCxFQUFnQixPQUFPLEtBQVA7QUFDaEIsU0FBTztBQUNIdGYsU0FBSyxFQUFFLElBREo7QUFFSCtILGVBQVcsRUFBRXdYO0FBRlYsR0FBUDtBQUtILENBckJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcYmVkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IExheW91dCBmcm9tICd0aGVtZXMvbGF5b3V0cy9BZG1pbidcclxuaW1wb3J0IHsgR3JpZFRhYmxlLCBHcmlkVGFibGVIZWxwZXIsIEZpbHRlcklucHV0IH0gZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvVGFibGUnO1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEJlZFNlcnZpY2UgZnJvbSAndGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tIFwidGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rXCI7XHJcbmltcG9ydCB7UGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgZm9ybWF0ZXJTdGF0dXMgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlQmFzZUhvb2soKTtcclxuICB2YWx1ZSA9IE1hdGgucm91bmQoTnVtYmVyKHZhbHVlKSlcclxuICB2YWx1ZSA9ICh2YWx1ZSA9PSAwID8gdCgnYmVkcy5lbXB0eScpIDogdCgnYmVkcy5mdWxsJykpXHJcbiAgcmV0dXJuIGAke3ZhbHVlfWBcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAoeyBiZWRzLCB0b3RhbCB9OiB7IGJlZHM6IEJlZFtdLCB0b3RhbDogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCBbaGlkZGVuRGVsZXRlQnRuLCBzZXRIaWRkZW5EZWxldGVCdG5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRJZHMsIHNldFNlbGVjdGVkSWRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZSgpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWY8R3JpZFRhYmxlPigpXHJcbiAgY29uc3QgeyBjaGVja1Blcm1pc3Npb24gfSA9IHVzZVBlcm1pc3Npb25Ib29rKCk7XHJcbiAgY29uc3QgY3JlYXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwiYWRtaW4uYmVkc1wiOiBcIkNcIlxyXG4gIH0pXHJcbiAgY29uc3QgZGVsZXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwiYWRtaW4uYmVkc1wiOiBcIkRcIlxyXG4gIH0pXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJyb29tXCIpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdyb29tQ29kZScsXHJcbiAgICAgIGtleTogJ3Jvb21Db2RlJyxcclxuICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOnRydWUsXHJcbiAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgcmVuZGVyOiAodGV4dDogc3RyaW5nLCByZWNvcmQ6IGFueSkgPT5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4uYmVkcy5lZGl0JywgeyBpZDogcmVjb3JkLmlkIH0pfT57cmVjb3JkLnJvb21Db2RlfTwvYT5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KCdiZWRzLmJlZElkJyksXHJcbiAgICAgIGRhdGFJbmRleDogJ2JlZElkJyxcclxuICAgICAga2V5OiAnYmVkSWQnLFxyXG4gICAgICB3aWR0aDogJzIwJScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdCgnc3RhdHVzJyksXHJcbiAgICAgIGRhdGFJbmRleDogJ3N0YXR1cycsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgZmlsdGVyQ2hlY2s6IHRydWUsXHJcbiAgICAgIG9wdGlvbnM6IFt7IGxhYmVsOnQoJ2JlZHMuZW1wdHknKSwgdmFsdWU6MCB9LCB7IGxhYmVsOnQoJ2JlZHMuZnVsbCcpLCB2YWx1ZToxIH1dLFxyXG4gICAgICBrZXk6ICdzdGF0dXMnLFxyXG4gICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e2Zvcm1hdGVyU3RhdHVzKHRleHQpfTwvZGl2PlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJub3RlXCIpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdub3RlJyxcclxuICAgICAga2V5OiAnbm90ZScsXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3Rpb24gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEhpZGRlbkRlbGV0ZUJ0bihmYWxzZSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRIaWRkZW5EZWxldGVCdG4odHJ1ZSlcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKGRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IHtcclxuICAgIGxldCBbZXJyb3IsIGJlZHNdOiBhbnlbXSA9IGF3YWl0IHRvKGJlZFNlcnZpY2UuaW5kZXgodmFsdWVzKSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7IGNvZGUsIG1lc3NhZ2UgfSA9IGVycm9yXHJcbiAgICAgIG5vdGlmeSh0KGBlcnJvcnM6JHtjb2RlfWApLCB0KG1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICAgIHJldHVybiBiZWRzXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5kZWxldGUoeyBpZHM6IHNlbGVjdGVkSWRzIH0pKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoYCR7ZXJyb3IubWVzc2FnZX1gKSwgJ2Vycm9yJylcclxuICAgIH1cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmREZWxldGVkXCIpKTtcclxuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQucmVsb2FkKClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKFtdKVxyXG4gICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJEZWxldGVEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17b25EZWxldGV9XHJcbiAgICAgICAgdGl0bGU9e3QoJ2RlbGV0ZUl0ZW0nKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLmRlbGV0ZUNvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxCdXR0b24gaGlkZGVuPXshY3JlYXRlUGVyfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmJlZHMuY3JlYXRlXCIpfSB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT0nYnRuLXRvcCc+XHJcbiAgICAgICAgPFBsdXNDaXJjbGVPdXRsaW5lZCAvPlxyXG4gICAgICAgIHt0KCdjcmVhdGUnKX1cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8QnV0dG9uIGRhbmdlciBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0gY2xhc3NOYW1lPSdidG4tdG9wJyBoaWRkZW49e2hpZGRlbkRlbGV0ZUJ0biB8fCAhZGVsZXRlUGVyfT5cclxuICAgICAgICA8RGVsZXRlT3V0bGluZWQgLz5cclxuICAgICAgICB7dCgnZGVsZXRlJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgPEdyaWRUYWJsZVxyXG4gICAgICAgIHJlZj17dGFibGVSZWZ9XHJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICBkYXRhPXtiZWRzfVxyXG4gICAgICAgIHJvd1NlbGVjdGlvbj17e3NlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRJZHMsIG9uQ2hhbmdlOiAoZGF0YTogYW55W10pID0+IG9uQ2hhbmdlU2VsZWN0aW9uKGRhdGEpIH19XHJcbiAgICAgICAgZmV0Y2hEYXRhPXtmZXRjaERhdGF9XHJcbiAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAvPlxyXG4gICAgICB7cmVuZGVyRGVsZXRlRGlhbG9nKCl9XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZShjdHgpXHJcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZmlsdGVyczogW10sXHJcbiAgICBzb3J0aW5nOiBbXVxyXG4gIH1cclxuICBsZXQgcXVlcnkgPSBjdHgucXVlcnlcclxuICBsZXQgZmlsdGVycyA9IEdyaWRUYWJsZUhlbHBlci5nZXRPcHRpb25zKHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgbGV0IFtlcnJvciwgYmVkc106IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5pbmRleChmaWx0ZXJzKSlcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2NvbW1vbicsICdwYWdlcycsICdtZW51JywgJ2Vycm9ycyddLFxyXG4gICAgZXJyb3I6IGVycm9yLFxyXG4gICAgYmVkczogdXNlQmFzZUhvb2suZ2V0RGF0YShiZWRzLCBcImRhdGFcIiwgW10pLFxyXG4gICAgdG90YWw6IHVzZUJhc2VIb29rLmdldERhdGEoYmVkcywgXCJ0b3RhbFwiLCAwKSxcclxuICAgIGRlZmF1bHRRdWVyeToge1xyXG4gICAgICBmaWx0ZXJzOiBHcmlkVGFibGVIZWxwZXIubWFrZVF1ZXJ5KGZpbHRlcnMpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkluZGV4LnBlcm1pc3Npb25zID0ge1xyXG4gIFwiYWRtaW4uYmVkc1wiOiBcIlJcIlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsImltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7IGdldEJyZWFkY3J1bWJzLCByb3V0ZSBhcyBtYWtlVXJsIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuaW50ZXJmYWNlIFJvdXRlIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgYnJlYWRDcnVtYkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gICAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgICAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGJyZWFkQ3VtYnMgPSBbXVxyXG4gICAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICAgIGxldCByb3V0ZXM6IFJvdXRlW10gPSBnZXRCcmVhZGNydW1icyhyb3V0ZU5hbWUpXHJcbiAgICBpZiAocm91dGVzWzBdICYmIHJvdXRlc1swXS5uYW1lICE9IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiKSB7XHJcbiAgICAgICAgcm91dGVzLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZnJvbnRlbmQuYWRtaW4uaG9tZScsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSBtYWtlVXJsKHJvdXRlLm5hbWUpXHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayB7Li4ubGlua1Byb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57IHJvdXRlLm5hbWUgPT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIgPyA8SG9tZUZpbGxlZCAvPiA6IHQocm91dGUubmFtZSkgfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7dChyb3V0ZS5uYW1lKX1cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJyZWFkY3J1bWI+e2JyZWFkQ3VtYnN9PC9CcmVhZGNydW1iPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWRDcnVtYkNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5jbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2hvdyhkYXRhID0gbnVsbCkge1xyXG4gICAgbGV0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgXCJUaXRsZVwiXHJcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIkNvbnRlbnRcIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgb25PazogdGhpcy5vblN1Ym1pdCxcclxuICAgICAgb25DYW5jZWw6IHRoaXMub25DYW5jZWwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKHR5cGVvZiBvbkNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIG9uQ2FuY2VsKHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0eXBlb2Ygb25TdWJtaXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBhd2FpdCBvblN1Ym1pdCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EaWFsb2c7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIGlmKGFjdGlvbi50eXBlID09PSBcInNldFN0b3JlXCIpe1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfVxyXG4gICAgXy5zZXQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnBhdGgsIGFjdGlvbi5wYXlsb2FkLnZhbHVlKVxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG4vKiBjb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzdG9yZTogc3RvcmVSZWR1Y2VyXHJcbn0pICovXHJcblxyXG5jb25zdCBzZXRTdG9yZSA9IChwYXRoLCB2YWx1ZSkgPT4gKHtcclxuICB0eXBlOiAnc2V0U3RvcmUnLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHBhdGgsXHJcbiAgICB2YWx1ZVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoaW5pdFN0YXRlID0ge30sIG9wdGlvbnMpID0+IHtcclxuICBsZXQgZGV2VG9vbEV4dGVuc2lvbnMgPSAoIW9wdGlvbnMuaXNTZXJ2ZXIgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18pID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSA6IHVuZGVmaW5lZFxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0U3RhdGUsIGRldlRvb2xFeHRlbnNpb25zKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgbWFrZVN0b3JlLFxyXG4gIHNldFN0b3JlXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5jb25zdCB7IFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xyXG5cclxuY2xhc3MgRmlsdGVyRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVzID0gKGRhdGVTdHJpbmdzKSA9PiB7XHJcbiAgICAgICAgaWYoIWRhdGVTdHJpbmdzKSBkYXRlU3RyaW5ncyA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICAgICAgaWYgKCFkYXRlU3RyaW5ncykgcmV0dXJuIHt9XHJcbiAgICAgICAgaWYgKCFkYXRlU3RyaW5nc1swXSkgZGF0ZVN0cmluZ3NbMF0gPSB1bmRlZmluZWRcclxuICAgICAgICBpZighZGF0ZVN0cmluZ3NbMV0pIGRhdGVTdHJpbmdzWzFdID0gdW5kZWZpbmVkXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZVN0cmluZ3M6IGRhdGVTdHJpbmdzLFxyXG4gICAgICAgICAgICBkYXRlczogW1xyXG4gICAgICAgICAgICAgICAgZGF0ZVN0cmluZ3NbMF0gPyBtb21lbnQoZGF0ZVN0cmluZ3NbMF0pIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZVN0cmluZ3NbMV0gPyBtb21lbnQoZGF0ZVN0cmluZ3NbMV0pIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChkYXRlcywgZGF0ZVN0cmluZ3MpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcyhkYXRlU3RyaW5ncylcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGVTdHJpbmdzOicnfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzICYmIHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMF0gJiYgdGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1sxXSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICdiZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMF0pLnN0YXJ0T2YoXCJkYXlzXCIpLmFkZCgxNCwnaCcpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMV0pLmVuZE9mKFwiZGF5c1wiKS5hZGQoMTQsJ2gnKS50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0VtcHR5PXt0cnVlLCB0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTZweFwiLCBtYXJnaW5Cb3R0b206IDgsIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEYXRlUGlja2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZWxlY3QsIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCBJbnB1dEdyb3VwID0gSW5wdXQuR3JvdXA7XHJcblxyXG5jbGFzcyBGaWx0ZXJEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZXM6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IHZhbHVlcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZXMgJiYgdGhpcy5zdGF0ZS52YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzID0gW3tcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnaW4nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVzXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIC8qIGZpbHRlcnMgPSB0aGlzLnN0YXRlLnZhbHVlcy5tYXAodmFsdWUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnPScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfSkpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJPcHRpb25zKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLm9wdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiA8T3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfSBsYWJlbD17b3B0aW9uLmxhYmVsfSA+e29wdGlvbi5sYWJlbH08L09wdGlvbj4pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIG9wdGlvbnMsIHNlYXJjaEJ0blRleHQsIGNsZWFyQnRuVGV4dCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcsIG1hcmdpbkJvdHRvbTogOCwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcm9wZG93biIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCwgSW5wdXROdW1iZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcclxuXHJcbmNsYXNzIEZpbHRlcklucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpLFxyXG4gICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8IFwiY29udGFpbnNcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSAhPSBfLmdldChwcmV2UHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aXNpYmxlU2VhcmNoICE9IHRoaXMucHJvcHMuY29sdW1uLnZpc2libGVTZWFyY2gpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlU2VhcmNoID0gdGhpcy5wcm9wcy5jb2x1bW4udmlzaWJsZVNlYXJjaFxyXG4gICAgICAgICAgICB0aGlzLnJlZklucHV0LmlucHV0LnNlbGVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTonJ30sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnN0YXRlLm9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wZXJhdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgPSB7fSwgaGlkZU9wZXJhdG9yLCBvcGVyYXRvciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChoaWRlT3BlcmF0b3IpIHJldHVyblxyXG4gICAgICAgIGxldCBvcGVyYXRvcnMgPSBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiY29udGFpbnNcIiwgbGFiZWw6IG1lc3NhZ2VzWydjb250YWlucyddIHx8IFwiQ29udGFpbnNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIj1cIiwgbGFiZWw6IG1lc3NhZ2VzWydlcXVhbCddIHx8IFwiRXF1YWxzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzdGFydFdpdGhzXCIsIGxhYmVsOiBtZXNzYWdlc1snc3RhcnRXaXRocyddIHx8IFwiU3RhcnRXaXRoc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZW5kV2l0aHNcIiwgbGFiZWw6IG1lc3NhZ2VzWydlbmRXaXRocyddIHx8IFwiRW5kV2l0aHNcIiB9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgb3BlcmF0b3JzID0gW1xyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI9XCIsIGxhYmVsOiAnPScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPlwiLCBsYWJlbDogJz4nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIjxcIiwgbGFiZWw6ICc8JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI+PVwiLCBsYWJlbDogJz49JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI8PVwiLCBsYWJlbDogJzw9JyB9XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcGVyYXRvciA9IG9wZXJhdG9yIHx8IG9wZXJhdG9yc1swXS52YWx1ZVxyXG5cclxuICAgICAgICByZXR1cm4gPFNlbGVjdCBkZWZhdWx0VmFsdWU9e2RlZmF1bHRPcGVyYXRvcn0gc3R5bGU9e3sgd2lkdGg6IDkwIH19IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlcmF0b3I6IHZhbHVlIH0pfT5cclxuICAgICAgICAgICAge29wZXJhdG9ycy5tYXAob3BlcmF0b3IgPT4gPE9wdGlvbiB2YWx1ZT17b3BlcmF0b3IudmFsdWV9IGtleT17b3BlcmF0b3IudmFsdWV9PntvcGVyYXRvci5sYWJlbH08L09wdGlvbj4pfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgaGlkZU9wZXJhdG9yLCB0eXBlLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IENvbXBvbmVudCA9IElucHV0XHJcbiAgICAgICAgaWYodHlwZSA9PSBcIm51bWJlclwiKSBDb21wb25lbnQgPSBJbnB1dE51bWJlclxyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWRkb25CZWZvcmU9e3RoaXMucmVuZGVyT3BlcmF0b3IoKX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjUwcHhcIiwgbWFyZ2luQm90dG9tOiA4LCBkaXNwbGF5OiAnYmxvY2snIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmFkaW8sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgR3JvdXAgfSA9IFJhZGlvO1xyXG5cclxuY2xhc3MgRmlsdGVyQ2hlY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tlZCA9IChjaGVja2VkKSA9PiB7XHJcbiAgICAgICAgaWYoY2hlY2tlZCA9PSB1bmRlZmluZWQpIGNoZWNrZWQgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDp1bmRlZmluZWR9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnPScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jaGVja2VkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxHcm91cFxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29sdW1uLm9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBtYXJnaW5Cb3R0b206IDgsIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDaGVjayIsImltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGFkZFF1ZXJ5IH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIjtcclxuaW1wb3J0IHsgQmFzZTY0IH0gZnJvbSAnanMtYmFzZTY0JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgRmlsdGVySW5wdXQgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0lucHV0J1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRGF0ZVBpY2tlcidcclxuaW1wb3J0IFJhZGlvIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9SYWRpb0J1dHRvbidcclxuXHJcbmNsYXNzIEdyaWRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgYm9yZGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpemU6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBoYXNEYXRhOiB0cnVlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbG9hZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge31cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5wcm9wcy50b3RhbCB8fCAxMDBcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGFcclxuICAgICAgICB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlID0gdGhpcy5oYW5kbGVUYWJsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLaOG7n2kgdOG6oW8gY8OhYyBvcHRpb25zIHThu6sgcXVlcnkgdHLDqm4gdXJsXHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnByb3BzLnJvdXRlci5xdWVyeVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gR3JpZFRhYmxlLmdldERhdGFGcm9tUXVlcnkocXVlcnksIHRoaXMucHJvcHMpXHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogZGVmYXVsdE9wdGlvbnMucGFnZVNpemUgfHwgNTAsXHJcbiAgICAgICAgICAgIHBhZ2U6IGRlZmF1bHRPcHRpb25zLnBhZ2UgfHwgMCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25Ub0NvbHVtbnMoZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBs4bqhaSBk4buvIGxp4buHdSB04burIHF1ZXJ5IMSR4buVaSBzYW5nIMSRw7puZyBmb3JtYXQgY+G7p2EgY29sdW1uIHRyb25nIGFudGRcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdE9wdGlvblRvQ29sdW1ucyA9IChkZWZhdWx0T3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgLy9zZXQgZmllbGRcclxuICAgICAgICAgICAgaWYoIWNvbHVtbi5maWVsZCkgY29sdW1uLmZpZWxkID0gY29sdW1uLmtleVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNvcnQgPSBkZWZhdWx0T3B0aW9ucy5zb3J0aW5nLmZpbmQoaXRlbSA9PiBpdGVtLmZpZWxkID09PSBjb2x1bW4uZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAoc29ydCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHsgZGlyZWN0aW9uIH0gPSBzb3J0O1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLnNvcnRPcmRlciA9IGRpcmVjdGlvbiA9PT0gXCJhc2NcIiA/ICdhc2NlbmQnIDogJ2Rlc2NlbmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0gZGVmYXVsdE9wdGlvbnMuZmlsdGVycy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZpZWxkID09PSBjb2x1bW4uZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXJlZFZhbHVlID0gWy4uLmZpbHRlcnNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJlZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBkZWxldGUgY29sdW1uLmZpbHRlcmFibGU7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2lucHV0JykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJhYmxlO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdkYXRlJykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnY2hlY2snKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkOiAhdGhpcy5zdGF0ZS5yZWxvYWR9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vdXBkYXRlIGRhdGEgdHJvbmcgdHLGsOG7nW5nIGjhu6NwIMSR4buVaSB04burIHByb3BzIGLDqm4gbmdvw6BpXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5kYXRhKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnJvdXRlci5xdWVyeSkgIT0gSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLnJvdXRlci5xdWVyeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSkgLy9jaOG7iSBj4bqnbiByZW5kZXIgbOG6oWkgdmlld1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVF1ZXJ5KG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB7IGZpbHRlcnMgPSBbXSwgc29ydGluZyA9IFtdLCBwYWdlU2l6ZSwgcGFnZSB9ID0gb3B0aW9uc1xyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHtcclxuICAgICAgICAgICAgZjogW10sXHJcbiAgICAgICAgICAgIHM6IHt9LFxyXG4gICAgICAgICAgICBwczogcGFnZVNpemUsXHJcbiAgICAgICAgICAgIHA6IHBhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T2JqLmYucHVzaChbZmlsdGVyLmZpZWxkLCBmaWx0ZXIub3BlcmF0b3IgfHwgJ2NvbnRhaW5zJywgZmlsdGVyLnZhbHVlXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgc29ydCBvZiBzb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T2JqLnNbc29ydC5maWVsZF0gPSBzb3J0LmRpcmVjdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShxdWVyeU9iaikpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLaGFpIGLDoW8gY8OhYyBmdW5jdGlvbiBjaG8gZHJvcGRvd24gc2VhcmNoIGJveFxyXG4gICAgICovXHJcbiAgICBnZXRDb2x1bW5TZWFyY2hQcm9wcyA9IChjb2x1bW4sdHlwZSkgPT4ge1xyXG4gICAgICAgIGxldCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRyb3Bkb3duOiAoeyBjb25maXJtLCBzZXRTZWxlY3RlZEtleXMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpcm1GbmMgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjID0+IGMuZGF0YUluZGV4ID09PSBjb2x1bW4uZGF0YUluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4ucmVuZGVyRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5yZW5kZXJGaWx0ZXIoeyBjb2x1bW4sIGNvbmZpcm06IGNvbmZpcm1GbmMsIHJlZiB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsdGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdkYXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdjaGVjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXJJY29uOiBmaWx0ZXJlZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IGZpbHRlcmVkID8gXCIjMTg5MGZmXCIgOiB1bmRlZmluZWQgfX0gLz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgb25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2U6IHZpc2libGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlICYmIGNvbHVtbi52aXNpYmxlU2VhcmNoICE9IHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4udmlzaWJsZVNlYXJjaCA9IHZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQub25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4udmlzaWJsZVNlYXJjaCA9IHZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgeyBwYWdlU2l6ZSwgcGFnZSB9ID0gdGhpcy5wYWdpbmF0aW9uXHJcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVUYWJsZUNoYW5nZSh7IHBhZ2VTaXplLCBjdXJyZW50OiBwYWdlIH0sIHt9LCB7fSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbG9hZCBUYWJsZVxyXG4gICAgICovXHJcbiAgICBhc3luYyByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZmV0Y2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuYnVpbGRGZXRjaERhdGEoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zID0gR3JpZFRhYmxlLm1ha2VRdWVyeShwYXJhbXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcywgcXVlcnlPcHRpb25zKVxyXG4gICAgICAgICAgICBhZGRRdWVyeSh7IGZpbHRlcnM6IHF1ZXJ5T3B0aW9ucyB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvcHMuZmV0Y2hEYXRhKHBhcmFtcykgfHwge31cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSB1bmRlZmluZWQpIHRoaXMudG90YWwgPSByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gXy5nZXQocmVzdWx0LCAnZGF0YScsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZmlsdGVyIHThu6sgdGFibGUgdsOgbyBiaeG6v24gdGhpcy5jb2x1bW5zIMSR4buDIGNvbnRyb2xsZWRcclxuICAgICAqL1xyXG4gICAgc2V0RmlsdGVyc1RvQ29sdW1ucyA9IChmaWx0ZXJzID0ge30pID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBmaWx0ZXJzW2NvbHVtbi5maWVsZF07XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXJlZFZhbHVlID0gZmlsdGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZXJUb0NvbHVtbnMgPSAoc29ydGVyID0ge30pID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4ua2V5ID09IHNvcnRlci5jb2x1bW5LZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5zb3J0T3JkZXIgPSBzb3J0ZXIub3JkZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLnNvcnRPcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRQYWdpbmF0aW9uID0gKHBhZ2luYXRpb24pID0+IHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiBwYWdpbmF0aW9uLmN1cnJlbnQgLSAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVUYWJsZUNoYW5nZSA9IGFzeW5jIChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+IHtcclxuICAgICAgICB0aGlzLnNldEZpbHRlcnNUb0NvbHVtbnMoZmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0ZXJUb0NvbHVtbnMoc29ydGVyKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb24ocGFnaW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0YUZyb21RdWVyeShxdWVyeSA9IHt9LCBkZWZhdWx0T3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0gcXVlcnkuZmlsdGVycyB8fCB7fVxyXG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnkuZmlsdGVycyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmogPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUocXVlcnkuZmlsdGVycykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmlsdGVycyBwYXJhbXMgaW52YWxpZCBmb3JtYXQuYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5T2JqKSByZXR1cm4ge31cclxuICAgICAgICBsZXQgZmlsdGVycyA9IHF1ZXJ5T2JqLmYgfHwgW11cclxuICAgICAgICBsZXQgc29ydGluZyA9IHF1ZXJ5T2JqLnMgfHwge31cclxuICAgICAgICBsZXQgcXVlcnlPdXQgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IGRlZmF1bHRPcHRpb25zLmZpbHRlcnMgfHwgW10sXHJcbiAgICAgICAgICAgIHNvcnRpbmc6IGRlZmF1bHRPcHRpb25zLnNvcnRpbmcgfHwgW10sXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBxdWVyeU9iai5wcyB8fCBkZWZhdWx0T3B0aW9ucy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogcXVlcnlPYmoucCB8fCBkZWZhdWx0T3B0aW9ucy5wYWdlXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcXVlcnlPdXQuZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWx0ZXJbMF0sXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogZmlsdGVyWzFdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpbHRlclsyXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBzb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T3V0LnNvcnRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHNvcnRpbmdbZmllbGRdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVlcnlPdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9wdGlvbnMocXVlcnksIGRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5nZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucylcclxuICAgICAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIGRhdGEgdOG7qyB0aGlzLmNvbHVtbnMgxJHhu4Mga2jhu5twIHbhu5tpIGZvcm1hdCB0csOqbiBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgYnVpbGRGZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgZmlsdGVyczogW10sXHJcbiAgICAgICAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb24ucGFnZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmVkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5maWx0ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5maWx0ZXJlZFZhbHVlXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5zb3J0T3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zb3J0aW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjb2x1bW4uc29ydE9yZGVyID09IFwiYXNjZW5kXCIgPyBcImFzY1wiIDogXCJkZXNjXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcGFyYW1zXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhZ2luYXRpb24gPSAocGFnaW5hdGlvbiA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgcGFnZSB9ID0gdGhpcy5wYWdpbmF0aW9uO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnBhZ2luYXRpb24sXHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSB8fCA1MCxcclxuICAgICAgICAgICAgY3VycmVudDogcGFnZSArIDEsXHJcbiAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBbJzInLCAnMTAnLCAnNTAnLCAnMTAwJywgJzIwMCcsICc1MDAnXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoYXNEYXRhID0gdHJ1ZSwgZGF0YSA9IFtdLCBlbGxpcHNpcywgZmV0Y2hEYXRhLCBjb2x1bW5zLCBwYWdpbmF0aW9uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5pbml0aWFsUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFibGVMYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDkwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9GaXJzdFJvd09uQ2hhbmdlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17aGFzRGF0YSA/IHRoaXMuZGF0YS5tYXAocm93ID0+ICh7IC4uLnJvdywga2V5OiByb3cuaWQgfSkpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUYWJsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dGhpcy5nZXRQYWdpbmF0aW9uKHBhZ2luYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFRhYmxlIiwiaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBHcmlkVGFibGVXaXRoUm91dGVyID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IGFueSwgcmVmOiBhbnkpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdHJldHVybiA8VGFibGUgcmVmPXtyZWZ9IHJvdXRlcj17cm91dGVyfSB7Li4ucHJvcHN9IC8+XHJcbn0pIGFzIGFueVxyXG5cclxuR3JpZFRhYmxlV2l0aFJvdXRlci5nZXRPcHRpb25zID0gVGFibGUuZ2V0T3B0aW9uc1xyXG5HcmlkVGFibGVXaXRoUm91dGVyLmdldERhdGFGcm9tUXVlcnkgPSBUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5XHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIubWFrZVF1ZXJ5ID0gVGFibGUubWFrZVF1ZXJ5XHJcblxyXG5jb25zdCBHcmlkVGFibGVIZWxwZXIgPSB7XHJcbiAgICBnZXRPcHRpb25zOiBUYWJsZS5nZXRPcHRpb25zLFxyXG4gICAgZ2V0RGF0YUZyb21RdWVyeTogVGFibGUuZ2V0RGF0YUZyb21RdWVyeSxcclxuICAgIG1ha2VRdWVyeTogVGFibGUubWFrZVF1ZXJ5XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFRhYmxlV2l0aFJvdXRlclxyXG5leHBvcnQge1xyXG4gICAgR3JpZFRhYmxlSGVscGVyXHJcbn0iLCIvLyBpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcclxuaW1wb3J0IFRhYmxlLCB7R3JpZFRhYmxlSGVscGVyfSBmcm9tICcuL1RhYmxlVHN4J1xyXG5pbXBvcnQgRmlsdGVySW5wdXQgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0lucHV0J1xyXG5pbXBvcnQgRmlsdGVyRHJvcGRvd24gZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgRmlsdGVyRGF0ZVBpY2tlciBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRGF0ZVBpY2tlcidcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBUYWJsZSBhcyBHcmlkVGFibGUsXHJcbiAgICBHcmlkVGFibGVIZWxwZXIsXHJcbiAgICBGaWx0ZXJJbnB1dCxcclxuICAgIEZpbHRlckRyb3Bkb3duLFxyXG4gICAgRmlsdGVyRGF0ZVBpY2tlclxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3RoZW1lcy9tb2R1bGVzL0kxOG4nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRTdG9yZSBhcyBzZXRTdG9yZUFjdGlvbiB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1N0b3JlJ1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnXHJcbmludGVyZmFjZSBCYXNlQm9vayB7XHJcbiAgICB1c2VTZWxlY3RvcjogRnVuY3Rpb24sXHJcbiAgICByb3V0ZXI6IGFueSxcclxuICAgIHQ6IEZ1bmN0aW9uLFxyXG4gICAgc2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgcmVkaXJlY3Q6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0RGF0YTogRnVuY3Rpb24sXHJcbiAgICBub3RpZnk6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0QXV0aDogRnVuY3Rpb25cclxuICAgIGdldENvb2tpZXM6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0UHVibGljUnVudGltZUNvbmZpZzogRnVuY3Rpb25cclxufVxyXG5jb25zdCB1c2VCYXNlSG9va3MgPSAgKHsgbGFuZyA9IFsnY29tbW9uJywgJ3BhZ2VzJywgJ2Vycm9ycyddLH0gOiB7IGxhbmc/OiBzdHJpbmdbXSwgfSA9IHt9KTogQmFzZUJvb2sgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IEkxOG4gPSB1c2VUcmFuc2xhdGlvbihsYW5nKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHNldFN0b3JlID0gYXN5bmMgKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN0b3JlQWN0aW9uKHBhdGgsIHZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdG9yZSA9IChwYXRoOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gXy5nZXQoc3RhdGUsIHBhdGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeTogc3RyaW5nLCBzaGFsbG93OiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmV4dFJvdXRlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIGFzOiByb3V0ZU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcywge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnLCB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiID0gXCJzdWNjZXNzXCIpOiB2b2lkID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0IC8vc2Vjb25kXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYXV0aClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvb2tpZXMgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvb2tpZXMpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wdWJsaWNSdW50aW1lQ29uZmlnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlU2VsZWN0b3IsXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHQ6IEkxOG4udCxcclxuICAgICAgICBzZXRTdG9yZSxcclxuICAgICAgICBnZXRTdG9yZSxcclxuICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICBnZXREYXRhLFxyXG4gICAgICAgIG5vdGlmeSxcclxuICAgICAgICBnZXRBdXRoLFxyXG4gICAgICAgIGdldENvb2tpZXMsXHJcbiAgICAgICAgZ2V0UHVibGljUnVudGltZUNvbmZpZ1xyXG4gICAgfTtcclxufVxyXG5cclxudXNlQmFzZUhvb2tzLmdldERhdGEgPSAgKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VCYXNlSG9va3MiLCJpbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAnLi9CYXNlSG9va3MnXHJcbmltcG9ydCB7Y2hlY2tQZXJtaXNzaW9ufSBmcm9tICcuLi91dGlscy9QZXJtaXNzaW9uJ1xyXG5cclxuICBcclxuY29uc3QgUGVybWlzc2lvbkhvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldEF1dGggfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge31cclxuICAgIGNvbnN0IHVzZXJQZXJtaXNzaW9ucyA9IGF1dGgucGVybWlzc2lvbnMgfHwge31cclxuXHJcbiAgICBjb25zdCBnZXRVc2VyUGVybWlzc2lvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlclBlcm1pc3Npb25zXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IF9jaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja1Blcm1pc3Npb24ocGVybWlzc2lvbnMsIHVzZXJQZXJtaXNzaW9ucylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VXNlclBlcm1pc3Npb24sXHJcbiAgICAgICAgY2hlY2tQZXJtaXNzaW9uOiBfY2hlY2tQZXJtaXNzaW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3Npb25Ib29rIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0LCBEcmF3ZXIsIEJhY2tUb3AsIFJvdywgQ29sLCBUeXBvZ3JhcGh5IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2FkbWluL1NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9hZG1pbi9IZWFkZXJcIjtcclxuY29uc3QgVEhFTUUgPSBcImxpZ2h0XCI7XHJcbmltcG9ydCBCcmVhZENydW1iIGZyb20gXCJ0aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWJcIjtcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2tzIGZyb20gXCJ0aGVtZXMvaG9va3MvQmFzZUhvb2tzXCI7XHJcbmltcG9ydCBfcm91dGVzIGZyb20gXCJ0aGVtZXMvX3JvdXRlcy5qc29uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuXHJcbmNvbnN0IHsgVGl0bGUsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCB7IENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgQWRtaW4gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0IH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKTtcclxuXHJcbiAgY29uc3Qgb25Db2xsYXBzZUNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MjtcclxuICAgIHNldElzTW9iaWxlKG1vYmlsZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICAgIHVwZGF0ZVNpemUoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlcztcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdO1xyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpIHx8IFwiXCI7XHJcbiAgLy8gY29uc29sZS5sb2cocm91dGVOYW1lKVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3B1YmxpY1J1bnRpbWVDb25maWcuU0lURV9OQU1FfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLlRJVExFfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5ERVNDUklQVElPTn0vPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfSAvPlxyXG4gICAgICA8bGluayByZWw9XCJudXJzaW5nLWhvbWUtaWNvblwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30+PC9saW5rPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBpZD1cImFkbWluXCI+XHJcbiAgICAgIDxMYXlvdXQgaGFzU2lkZXI9e3RydWV9PlxyXG4gICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgbWFza0Nsb3NhYmxlXHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzdHJveU9uQ2xvc2U9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IG9uQ29sbGFwc2VDaGFuZ2UoZmFsc2UpfVxyXG4gICAgICAgICAgICB2aXNpYmxlPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICBib2R5U3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgY29sbGFwc2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInByaW1hcnlMYXlvdXRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BtYWluLWxheW91dCAke2NvbGxhcHNlZCA/IFwiY29sbGFwc2VkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfSBkaXNhYmxlZFNlYXJjaD17cHJvcHMuZGlzYWJsZWRTZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1ic1wiPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17MTV9PlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LnRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0uZGVzY3JpcHRpb25gXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXs5fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRDcnVtYiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPEZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj7CqSB7bW9tZW50KCkueWVhcigpfSBIYWN0ZWNoPC9Gb290ZXI+XHJcbiAgICAgICAgICA8QmFja1RvcFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiYmFja1RvcFwifVxyXG4gICAgICAgICAgICB0YXJnZXQ9eygpID0+XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5TGF5b3V0XCIpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbil9O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBjcmVhdGVSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIExheW91dCwgQXZhdGFyLCBCdXR0b24sIElucHV0LCBQb3BvdmVyLCBSb3csIENvbCwgQXV0b0NvbXBsZXRlLCBGb3JtLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBcclxuICBNZW51VW5mb2xkT3V0bGluZWQsIE1lbnVGb2xkT3V0bGluZWQsIFBvd2Vyb2ZmT3V0bGluZWQsIFxyXG4gIFNldHRpbmdGaWxsZWQsIFVzZXJPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlXCJcclxuaW1wb3J0IFBhdGllbnRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZVwiXHJcbmltcG9ydCBCZWRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlXCJcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnXHJcbmltcG9ydCB0byBmcm9tICdhd2FpdC10by1qcydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSwgZ2V0Q29va2llcywgZ2V0RGF0YSAgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKVxyXG4gIGNvbnN0IHBhdGllbnRTZXJ2aWNlID0gbmV3IFBhdGllbnRTZXJ2aWNlKClcclxuICBjb25zdCBiZWRTZXJ2aWNlID0gbmV3IEJlZFNlcnZpY2UoKVxyXG4gIGNvbnN0IFtwYXRpZW50cywgc2V0UGF0aWVudHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2JlZHMsIHNldEJlZHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpIC8vIGNoYW5nZSBwYXNzd29yZFxyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge307XHJcbiAgY29uc3QgY29va2llT2JqZWN0ID0gZ2V0Q29va2llcygpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IGNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tNZW51ID0gKGU6IGFueSkgPT4geyB9XHJcbiAgY29uc3QgcmVkaXJlY3RMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhjb29raWVPYmplY3QpXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndG9rZW4nLCB7IHBhdGg6ICcvJ30pXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndXNlcicsIHsgcGF0aDogJy8nfSlcclxuICAgIHJldHVybiBhd2FpdCByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb29raWVPYmplY3QudG9rZW4gfHwgIWNvb2tpZU9iamVjdC51c2VyKSB7XHJcbiAgICAgIHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgbGV0IG9wdGlvbnNQYXRpZW50czogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc0JlZHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNVc2VyczogYW55ID0gW11cclxuICBcclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9IGFzeW5jICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBsZXQgZmlsdGVyUGF0aWVudHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyQmVkcyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJyb29tQ29kZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJVc2VycyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBbZXJyVXNlcnMsIHVzZXJzXTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS5pbmRleChmaWx0ZXJVc2VycykpXHJcbiAgICBsZXQgZGF0YVVzZXJzID0gXy5nZXQodXNlcnMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFVc2Vycy5sZW5ndGgpe1xyXG4gICAgICBzZXRVc2VycyhkYXRhVXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJQYXRpZW50cywgcGF0aWVudHNdOiBhbnlbXSA9IGF3YWl0IHRvKHBhdGllbnRTZXJ2aWNlLmluZGV4KGZpbHRlclBhdGllbnRzKSlcclxuICAgIGxldCBkYXRhUGF0aWVudHMgPSBfLmdldChwYXRpZW50cywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVBhdGllbnRzLmxlbmd0aCl7XHJcbiAgICAgIHNldFBhdGllbnRzKGRhdGFQYXRpZW50cylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyckJlZHMsIGJlZHNdOiBhbnlbXSA9IGF3YWl0IHRvKGJlZFNlcnZpY2UuaW5kZXgoZmlsdGVyQmVkcykpXHJcbiAgICBsZXQgZGF0YUJlZHMgPSBfLmdldChiZWRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhQmVkcy5sZW5ndGgpe1xyXG4gICAgICBzZXRCZWRzKGRhdGFCZWRzKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIGNvbnN0IG9uQmx1clNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldFVzZXJzKFtdKVxyXG4gICAgc2V0QmVkcyhbXSlcclxuICAgIHNldFBhdGllbnRzKFtdKVxyXG4gIH1cclxuICBcclxuICBjb25zdCByZW5kZXJDb25maXJtRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICByZWY9e2NvbmZpcm1SZWZ9XHJcbiAgICAgICAgb25TdWJtaXQ9e3JlZGlyZWN0TG9naW59XHJcbiAgICAgICAgdGl0bGU9e3QoJ3NpZ25vdXQnKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLnNpZ25vdXRDb25maXJtJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gYXN5bmMgKGRhdGE6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSlcclxuICAgIGxldCB2YWx1ZXMgPSB7IGlkOiBhdXRoLmlkLCBvbGRQYXNzd29yZDogZGF0YS5vbGRQYXNzd29yZCwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfVxyXG5cclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UudXNlclVwZGF0ZVBhc3N3b3JkKHZhbHVlcykpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBub3RpZnkodChgZXJyb3JzOiR7ZXJyb3IuY29kZX1gKSwgdChlcnJvci5tZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkVXBkYXRlZFwiKSlcclxuICB9XHJcblxyXG4gIC8vdmFsaWRhdGUgaW5wdXQgcGFzc3dvcmRcclxuICBjb25zdCB2YWxpZGF0b3JQYXNzd29yZCA9ICh7IGdldEZpZWxkVmFsdWUgfTogeyBnZXRGaWVsZFZhbHVlOiBGdW5jdGlvbiB9KSA9PiAoe1xyXG4gICAgdmFsaWRhdG9yOiAocnVsZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ2Zvcm0ucmVQYXNzd29yZCcpKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCByZW5kZXJDaGFuZ2VQYXNzTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUNoYW5nZVBhc3N3b3JkXSA9IEZvcm0udXNlRm9ybSgpXHJcbiAgICByZXR1cm4gKDxGb3JtIGZvcm09e2Zvcm1DaGFuZ2VQYXNzd29yZH0gbmFtZT1cImZvcm1DaGFuZ2VQYXNzd29yZFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBvbGRQYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICByZXBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvbkZpbmlzaD17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgID5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBvbk9rPXsoKSA9PiB7IGZvcm1DaGFuZ2VQYXNzd29yZC5zdWJtaXQoKTsgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInJlcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRvclBhc3N3b3JkXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyUmlnaHRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFBvd2Vyb2ZmT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiIG9uQ2xpY2s9eygpID0+IHsgaWYgKGNvbmZpcm1SZWYuY3VycmVudCkgY29uZmlybVJlZi5jdXJyZW50LnNob3coKSB9fT48L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8U2V0dGluZ0ZpbGxlZCBzcGluIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiAgb25DbGljaz17KCkgPT4geyBzZXRNb2RhbFZpc2libGUodHJ1ZSkgfX0gPjwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBtZW51SWNvblByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInRyaWdnZXJcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IG9uQ29sbGFwc2VDaGFuZ2UoIWNvbGxhcHNlZClcclxuICB9XHJcbiAgbGV0IGhlYWRlckNsYXNzID0gXCJoZWFkZXJcIlxyXG4gIGlmIChjb2xsYXBzZWQpIGhlYWRlckNsYXNzICs9ICcgY29sbGFwc2VkJ1xyXG5cclxuICBjb25zdCBhY2NvdW50UG9wdXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1s4LCA4XX0+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezd9IGxnPXs3fT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIlwifSBzaXplPXsxMDB9IHNoYXBlPVwic3F1YXJlXCI+XHJcbiAgICAgICAgICAgICAgICB7YXV0aC5mdWxsbmFtZX1cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICB7LyogPEF2YXRhciBzaXplPXs2NH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxN30gbGc9ezE3fT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgndXNlcm5hbWUnKX08L2I+OiA8aT57YXV0aC51c2VybmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Yj57dCgnZnVsbG5hbWUnKX08L2I+OiA8aT57YXV0aC5mdWxsbmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdlbWFpbCcpfTwvYj46IDxpPnthdXRoLmVtYWlsID8gYXV0aC5lbWFpbCA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgncGhvbmUnKX08L2I+OiA8aT57YXV0aC5waG9uZSA/IGF1dGgucGhvbmUgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyVGl0bGUgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudGRcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIG1vcmVcclxuICAgICAgICA8L2E+ICovfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySXRlbSA9ICh0aXRsZTogc3RyaW5nLCBsaW5rOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB0aXRsZSxcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7bGlua31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcGF0aWVudHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNQYXRpZW50cy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BwYXRpZW50cy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICBiZWRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zQmVkcy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0ucm9vbUNvZGV9IC0gJHtpdGVtLmJlZElkfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgYmVkcy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICB1c2Vycy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1VzZXJzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX0gLSAke2l0ZW0udXNlcm5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2B1c2Vycy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuIFxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdwYXRpZW50JykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zUGF0aWVudHMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnYmVkJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zQmVkc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2VtcGxveWVlJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zVXNlcnNcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI5MDBweFwiLCBkaXNwbGF5OiAnaW5saW5lJyB9fT5cclxuICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT1cImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLWRyb3Bkb3duXCJcclxuICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MzUwfSAvLyB3aWR0aCBkcm9wZG93blxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogYW55KSA9PiBvbkNoYW5nZVNlYXJjaCh2YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IG9uQmx1clNlYXJjaCgpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDM1MCB9fSAvLyB3aWR0aCBpbnB1dCBTZWFyY2hcclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBkaXNhYmxlZCA9IHtwcm9wcy5kaXNhYmxlZFNlYXJjaD8gdHJ1ZSA6IGZhbHNlIH0gLy8gZGlzYWJsZSBpbnB1dCBzZWFyY2hcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPXt0KFwic2VhcmNoXCIpfSAvPlxyXG4gICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30+XHJcbiAgICAgIHtjb2xsYXBzZWQgXHJcbiAgICAgID8gPE1lbnVVbmZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+IFxyXG4gICAgICA6IDxNZW51Rm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz59XHJcbiAgICAgIFxyXG4gICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dCgncGVyc29uYWxJbmZvJyl9IGNvbnRlbnQ9e2FjY291bnRQb3B1cCgpfT5cclxuICAgICAgICA8QnV0dG9uIGljb249ezxVc2VyT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIFxyXG4gICAgICB7LyogPEJ1dHRvbiBpY29uPXs8QmVsbE91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj4gKi99XHJcbiAgICAgIHsvKiA8U2VhcmNoXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bS4uLlwiXHJcbiAgICAgICAgb25TZWFyY2g9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoXCJcclxuICAgICAgLz4gKi99XHJcbiAgICAgIHtyZW5kZXJTZWFyY2goKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0Q29udGFpbmVyJz57cmVuZGVyUmlnaHRDb250ZW50KCl9PC9kaXY+XHJcblxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICB7cmVuZGVyQ29uZmlybURpYWxvZygpfVxyXG4gICAge3JlbmRlckNoYW5nZVBhc3NNb2RhbCgpfVxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSGVhZGVyIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAndGhlbWVzL3NpZGViYXInXHJcbmltcG9ydCB7IGdldFNpZGViYXJTZWxlY3RlZHMgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlUGVybWlzc2lvbkhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rJ1xyXG5cclxuY29uc3QgTWVudUNvbXBvbmVudCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgY29uc3Qge2NoZWNrUGVybWlzc2lvbn0gPSB1c2VQZXJtaXNzaW9uSG9vaygpXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZU1lbnVzID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGdlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbilcclxuICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVudS5JdGVtR3JvdXBcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Z2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWNoZWNrUGVybWlzc2lvbihpdGVtLnBlcm1pc3Npb25zKSkgcmV0dXJuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0ucm91dGVOYW1lfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChpdGVtLnJvdXRlTmFtZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KS5maWx0ZXIoKG1lbnU6YW55KSA9PiBtZW51KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0UmVhZHksIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXHJcbiAgY29uc3QgY3VycmVudFJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgY29uc3QgYnJlYWRjdW1zID0gZ2V0U2lkZWJhclNlbGVjdGVkcyhjdXJyZW50Um91dGVOYW1lKVxyXG4gIGxldCByb3V0ZXJOYW1lcyA9IGJyZWFkY3Vtcy5tYXAoKGJyZWFkY3VtOiBhbnkpID0+IGJyZWFkY3VtLnJvdXRlTmFtZSlcclxuICBjb25zdCBzZWxlY3RlZEtleXMgPSByb3V0ZXJOYW1lcy5wb3AoKVxyXG4gIHJldHVybiA8TWVudVxyXG4gICAgbW9kZT1cImlubGluZVwiXHJcbiAgICB0aGVtZT17dGhlbWV9XHJcbiAgICBkZWZhdWx0T3BlbktleXM9e3JvdXRlck5hbWVzfVxyXG4gICAgc2VsZWN0ZWRLZXlzPXtzZWxlY3RlZEtleXN9XHJcbiAgICBvbkNsaWNrPXtcclxuICAgICAgaXNNb2JpbGVcclxuICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2UodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIHsuLi5vdGhlclByb3BzfVxyXG4gID5cclxuICAgIHtnZW5lcmF0ZU1lbnVzKHNpZGViYXIpfVxyXG4gIDwvTWVudT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmZ1bmN0aW9uIG51bUZvcm1hdHRlcihudW06IG51bWJlcikge1xyXG4gICAgaWYobnVtID4gOTk5ICYmIG51bSA8IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDApLnRvRml4ZWQoMSkgKyAnSyc7IC8vIGNvbnZlcnQgdG8gSyBmb3IgbnVtYmVyIGZyb20gPiAxMDAwIDwgMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtID4gMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMDAwMCkudG9GaXhlZCgxKSArICdNJzsgLy8gY29udmVydCB0byBNIGZvciBudW1iZXIgZnJvbSA+IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA8IDkwMCl7XHJcbiAgICAgICAgcmV0dXJuIG51bTsgLy8gaWYgdmFsdWUgPCAxMDAwLCBub3RoaW5nIHRvIGRvXHJcbiAgICB9XHJcbn1cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0Q29va2llcywgcmVkaXJlY3QsIHQsIGdldERhdGEsIGdldEF1dGgsIGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpXHJcbiAgICBjb25zdCBwcm9maWxlSW5mbyA9IHtcclxuICAgICAgICBjb21wYW55TG9nbzogcHVibGljUnVudGltZUNvbmZpZy5MT0dPLFxyXG4gICAgICAgIGdyb3VwTmFtZTogXCJOaMOibiB2acOqblwiLFxyXG4gICAgICAgIHVzZXJGdWxsbmFtZTogXCJEacOqbSBUaOG7iyBRdeG7s25oXCIsXHJcbiAgICAgICAgY29tcGFueU5hbWU6IFwiVmnhu4duIGTGsOG7oW5nIGzDo28gSMaw4bubbmcgRMawxqFuZ1wiLFxyXG4gICAgICAgIGNvbXBhbnlBZGRyZXNzOiBcIlPhu5EgMzksIG5nw7UgNzQsIMSQxrDhu51uZyBEdXkgVMOibiwgUXXhuq1uIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpXCIsXHJcbiAgICAgICAgdG9kYXk6IHt9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1wcm9maWxlXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17ODB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IHNyYz17cHJvZmlsZUluZm8uY29tcGFueUxvZ299IGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbXBhbnlOYW1lXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWFkZHJlc3NcIj57cHJvZmlsZUluZm8uY29tcGFueUFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7LyogPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1uYW1lXCI+e3Byb2ZpbGVJbmZvLnVzZXJGdWxsbmFtZX08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1ncm91cE5hbWVcIj57cHJvZmlsZUluZm8uZ3JvdXBOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjJ9IG9mZnNldD17MX0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWVuZExpbmVcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQsIFVzZXJPdXRsaW5lZCwgSG9tZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zJztcclxuY29uc3QgVEhFTUUgPSAnbGlnaHQnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRoZW1lIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2lkZXJcclxuICAgICAgICAgICAgd2lkdGg9ezI1Nn1cclxuICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg9ezB9XHJcbiAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ9XCJsZ1wiXHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIC8vb25CcmVha3BvaW50PXshaXNNb2JpbGUgJiYgb25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX0gLz5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyO1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZGVmYXVsdENvb2tpZSkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhkZWZhdWx0Q29va2llKVxyXG4gIHJldHVybiBjb29raWVzXHJcbn0iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgTmV4dEkxOE5leHRJbnN0YW5jZSA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcclxuICBkZWZhdWx0TGFuZ3VhZ2U6IHB1YmxpY1J1bnRpbWVDb25maWcuTEFORyxcclxuICBvdGhlckxhbmd1YWdlczogWydlbiddLFxyXG4gIGxvY2FsZVBhdGg6IFwibGFuZ1wiLFxyXG4gIGJyb3dzZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2UsXHJcbiAgc2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5leHRJMThOZXh0SW5zdGFuY2UiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5pbXBvcnQgUmVxdWVzdEV4Y2VwdGlvbiBmcm9tICcuL1JlcXVlc3RFeGNlcHRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3Rvcihjb29raWVzU3RyaW5nKSB7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llc1N0cmluZ1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzKGNvb2tpZXNTdHJpbmcpLmdldCgndG9rZW4nKVxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZUdsb2JhbC5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZUdsb2JhbEVycm9yLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjaykge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2socmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbEVycm9yKGVycm9yKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgIGVycm9yID0gdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKGVycm9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbiAgfVxyXG5cclxuICBnZXRBcHBVcmwoKSB7XHJcbiAgICAvL3JldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvXCJcclxuICAgIHJldHVybiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9IT1NUXHJcbiAgfVxyXG4gIGJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSkge1xyXG5cclxuICB9XHJcbiAgYWZ0ZXJSZXF1ZXN0KHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKC0xLCBcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIilcclxuICAgIGNvbnN0IGNvZGUgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5jb2RlXCIsIC0xKVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLm1lc3NhZ2VcIiwgXCJcIilcclxuICAgIGNvbnN0IGRhdGEgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5kYXRhXCIpXHJcbiAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oY29kZSwgbWVzc2FnZSwgZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQodXJsLCBkYXRhID0ge30pIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcHV0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgZGVsZXRlKHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbn0iLCJjbGFzcyBSZXF1ZXN0RXhjZXB0aW9ue1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlPVwiXCIsIG1lc3NhZ2UgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEV4Y2VwdGlvbjtcclxuIiwiY29uc3QgVXJsUGF0dGVybiA9IHJlcXVpcmUoJ3VybC1wYXR0ZXJuJyk7XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4vX3JvdXRlcydcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBzdGF0aWMgbWFrZVVybChuYW1lLCBwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcm91dGVJbmZvID0gcm91dGVDb25maWdbbmFtZV1cclxuICAgICAgICBpZiAoIXJvdXRlSW5mbykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFVybFBhdHRlcm4ocm91dGVJbmZvLnVybCk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXNVcmwgPSBwYXR0ZXJuLnN0cmluZ2lmeShwYXJhbXMpIC8vbGluayBoaeG7g24gdGjhu4sgdHLDqm4gdHLDrG5oIGR1eeG7h3RcclxuICAgICAgICAgICAgbGV0IGhyZWYgPSBhc1VybCAvL2xpbmsgdGjhuq10IHRyb25nIC9wYWdlc1xyXG4gICAgICAgICAgICBpZiAocm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoMCwgNikgPT09IFwicGFnZXMvXCIpIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSByb3V0ZUluZm8uYWN0aW9uLnN1YnN0cig1KVxyXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignPycpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYD8ke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgJiR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhczogYXNVcmwsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFF1ZXJ5KHF1ZXJ5LCBzaGFsbG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFzUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgIGxldCBvbGRRdWVyeSA9IFJvdXRlci5yb3V0ZXIucXVlcnlcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLm9sZFF1ZXJ5LFxyXG4gICAgICAgICAgICAuLi5xdWVyeVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopID09IEpTT04uc3RyaW5naWZ5KG9sZFF1ZXJ5KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZ0FwcGVuZCA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeU9iailcclxuICAgICAgICAgICAgLyogaWYocXVlcnlTdHJpbmdBcHBlbmQpe1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgUm91dGVyLnJvdXRlci5xdWVyeSA9IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IChyb3V0ZU5hbWUsIHJvdXRlcywgcm91dGVQYXRocyA9IFtdKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpZGViYXJTZWxlY3RlZE5hbWUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXS5zaWRlYmFyIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCFyb3V0ZXMpIHJvdXRlcyA9IHNpZGViYXJcclxuICAgICAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJvdXRlLnJvdXRlTmFtZSA9PT0gc2lkZWJhclNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVQYXRocy5wdXNoKHJvdXRlKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZVBhdGhzXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldFNpZGViYXJTZWxlY3RlZHMoc2lkZWJhclNlbGVjdGVkTmFtZSwgcm91dGUuY2hpbGRyZW4sIFsuLi5yb3V0ZVBhdGhzLCByb3V0ZV0pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJyZWFkY3J1bWJzID0gKHJvdXRlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQocm91dGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnRoaXMuZ2V0QnJlYWRjcnVtYnMocm91dGUucGFyZW50KSwgLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3Qgcm91dGUgPSBSb3V0ZS5tYWtlVXJsXHJcbmNvbnN0IGFkZFF1ZXJ5ID0gUm91dGUuYWRkUXVlcnlcclxuY29uc3QgZ2V0QnJlYWRjcnVtYnMgPSBSb3V0ZS5nZXRCcmVhZGNydW1ic1xyXG5jb25zdCBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gUm91dGUuZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZTtcclxuZXhwb3J0IHtcclxuICAgIHJvdXRlLFxyXG4gICAgYWRkUXVlcnksXHJcbiAgICBnZXRCcmVhZGNydW1icyxcclxuICAgIGdldFNpZGViYXJTZWxlY3RlZHNcclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAndGhlbWVzL21vZHVsZXMvUmVxdWVzdCdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmNsYXNzIEJhc2VBcGl7XHJcbiAgY29va2llczogQ29va2llc1xyXG4gIFJlcXVlc3Q6IFJlcXVlc3RcclxuICBuYW1lOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNPYmogPSBjb250ZXh0ID8gbmV4dENvb2tpZShjb250ZXh0KToge31cclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXMoY29va2llc09iaik7XHJcbiAgICB0aGlzLlJlcXVlc3QgPSBuZXcgUmVxdWVzdChjb29raWVzT2JqKVxyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVDYWxsYmFja1xyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2tcclxuICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgfVxyXG4gIGdsb2JhbEhhbmRsZUNhbGxiYWNrID0gKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpID0+IHtcclxuICAgIGxldCBzdGF0dXMgPSBfLmdldChlcnJvciwgXCJyZXNwb25zZS5zdGF0dXNcIiwgLTEpO1xyXG4gICAgaWYoc3RhdHVzID09PSAtMSl7XHJcbiAgICAgIC8vbm90aWZ5KFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiLCBcImVycm9yXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidG9rZW5cIilcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInVzZXJcIilcclxuICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2xvZ2luXCIpe1xyXG4gICAgICAgIC8vbm90aWZ5KFwiTG9naW4gc2Vzc2lvbiBleHBpcmVkIVwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmxvZ2luXCIpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAvL2xvZ2luIHNjcmVlbi4ga2jDtG5nIGzDoG0gZ8OsIGPhuqMuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5yZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgcm91dGUocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIHJldHVybiByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3Qocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIGxldCBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgUm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcylcclxuICB9XHJcblxyXG4gIGFzeW5jIGluZGV4KGRhdGE/OiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5pbmRleGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zdG9yZWAsZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGFpbChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZXRhaWxgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBlZGl0KGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVwZGF0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZWxldGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmRlbGV0ZSh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUFwaSIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBCZWQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ2JlZHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVkIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFBhdGllbnQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3BhdGllbnRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAndXNlcnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBsb2dpbih7IGRhdGEgfToge2RhdGE6IHt1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfX0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoXCJhcGkubG9naW5cIikuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSkgfHwge31cclxuICAgICAgLy9zdWNjZXNzXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidG9rZW5cIiwgdW5kZWZpbmVkKSwge1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3VzZXInLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInVzZXJcIiwge30pLHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHVzZXJVcGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXNlclVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyBzZWFyY2goZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc2VhcmNoYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwiaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL19yb3V0ZXMuanNvbidcclxuXHJcbmNvbnN0IGNoYXJUb051bSA9IHsgQzogOCwgUjogNCwgVTogMiwgRDogMSB9XHJcbmNvbnN0IGNydWRUb0RlYyA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikucmVkdWNlKCh0b3RhbDogbnVtYmVyLCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCcpID0+IHRvdGFsICsgY2hhclRvTnVtW2NoYXJdLCAwKVxyXG5cclxufVxyXG5jb25zdCBkZWNUb0NydWQgPSAoZGVjOiBudW1iZXIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJ1xyXG4gICAgZm9yIChjaGFyIGluIGNoYXJUb051bSkge1xyXG4gICAgICAgIGlmICgoZGVjICYgY2hhclRvTnVtW2NoYXJdKSA9PSBjaGFyVG9OdW1bY2hhcl0pIHJlc3VsdCArPSBjaGFyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGhhc1Blcm1pc3Npb24gPSAocmVxdWlyZVBlcm1pc3Npb246IG51bWJlciwgdXNlclBlcm1pc3Npb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICh1c2VyUGVybWlzc2lvbiAmIHJlcXVpcmVQZXJtaXNzaW9uKSA9PT0gcmVxdWlyZVBlcm1pc3Npb25cclxuICB9XHJcblxyXG5jb25zdCBjaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSwgdXNlclBlcm1pc3Npb25zOiBhbnksIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZighcGVybWlzc2lvbnMpIHJldHVybiB0cnVlXHJcbiAgICBsZXQgcGVybWlzc2lvbkFycmF5ID0gW11cclxuICAgIGZvciAobGV0IHBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGNydWRUb0RlYyhwZXJtaXNzaW9uc1twZXJtaXNzaW9uXSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbXCJyb290XCJdIHx8IDBcclxuICAgICAgICBsZXQgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbcGVybWlzc2lvbl0gfHwgMFxyXG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb24gfCByb290UGVybWlzc2lvblxyXG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9uKHJlcXVpcmVQZXJtaXNzaW9uLCB1c2VyUGVybWlzc2lvbikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcGVybWlzc2lvbkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlUGVybWlzc2lvbjogZGVjVG9DcnVkKHJlcXVpcmVQZXJtaXNzaW9uKSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb246IGRlY1RvQ3J1ZCh1c2VyUGVybWlzc2lvbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKCFzaG93RXJyb3IpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25BcnJheVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNoZWNrUGVybWlzc2lvbixcclxuICAgIGhhc1Blcm1pc3Npb24sXHJcbiAgICBjcnVkVG9EZWMsXHJcbiAgICBkZWNUb0NydWRcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3YWl0LXRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWJhc2U2NFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1wYXR0ZXJuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=