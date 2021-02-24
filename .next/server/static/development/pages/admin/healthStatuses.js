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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ "./pages/admin/healthStatuses/index.tsx":
/*!**********************************************!*\
  !*** ./pages/admin/healthStatuses/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_HealthStatusService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/HealthStatusService */ "./themes/services/api/HealthStatusService.ts");
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
  healths,
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
  const healthService = new themes_services_api_HealthStatusService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    // "admin.healthStatuses": "C",
    'doctor.healthStatuses': 'C'
  });
  const deletePer = checkPermission({
    // "admin.healthStatuses": "D",
    "doctor.healthStatuses": "D"
  });
  const columns = [{
    title: t("patient"),
    dataIndex: 'patientName',
    key: 'patients.fullname',
    sorter: true,
    filterable: true,
    fixed: 'left',
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.healthStatuses.edit', {
        id: record.id
      })
    }, record.patientCode, " - ", record.patientName, " - ", record.roomCode, " - ", record.bedCode)
  }, {
    title: t("healthStatuses.date"),
    dataIndex: 'date',
    key: 'date',
    sorter: true,
    filterDate: true,
    fixed: 'left',
    width: '9%',
    render: (text, record) => __jsx("div", null, formaterDate(text))
  }, {
    title: t('doctor'),
    dataIndex: 'doctorName',
    key: 'users.fullname',
    sorter: true,
    filterable: true,
    render: (text, record) => __jsx("div", null, record.doctorCode, " - ", record.doctorName)
  }, {
    title: t("healthStatuses.weight") + " (Kg)",
    dataIndex: 'weight',
    key: 'weight'
  }, {
    title: t("healthStatuses.bloodPressure") + " (mmHg)",
    dataIndex: 'bloodPressure',
    key: 'bloodPressure'
  }, {
    title: t("healthStatuses.bloodSugar") + " (mg/dL)",
    dataIndex: 'bloodSugar',
    key: 'bloodSugar'
  }, {
    title: t("healthStatuses.heartRate") + " (BPM)",
    dataIndex: 'heartRate',
    key: 'heartRate'
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
    let [error, healths] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(healthService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return healths;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(healthService.delete({
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
    onClick: () => redirect("frontend.admin.healthStatuses.create"),
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
    data: healths,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total,
    scroll: {
      x: 1500
    }
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let healthService = new themes_services_api_HealthStatusService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, healths] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(healthService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    healths: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(healths, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(healths, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "doctor.healthStatuses": "R",
  "nurse.healthStatuses": "R"
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

/***/ "./themes/services/api/HealthStatusService.ts":
/*!****************************************************!*\
  !*** ./themes/services/api/HealthStatusService.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class HealthStatus extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'healthStatuses';
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HealthStatus);

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

/***/ 13:
/*!****************************************************!*\
  !*** multi ./pages/admin/healthStatuses/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\healthStatuses\index.tsx */"./pages/admin/healthStatuses/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vaGVhbHRoU3RhdHVzZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9TdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvVGFibGVUc3gudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2sudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL0FkbWluLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL01lbnUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvSTE4bi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3RFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmFzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvSGVhbHRoU3RhdHVzU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3V0aWxzL1Blcm1pc3Npb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdhaXQtdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWJhc2U2NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJmb3JtYXRlckRhdGUiLCJTdHJpbmciLCJzdWJzdHIiLCJJbmRleCIsImhlYWx0aHMiLCJ0b3RhbCIsInQiLCJyZWRpcmVjdCIsInNldFN0b3JlIiwiZ2V0QXV0aCIsImdldFN0b3JlIiwidXNlQmFzZUhvb2siLCJoaWRkZW5EZWxldGVCdG4iLCJzZXRIaWRkZW5EZWxldGVCdG4iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkSWRzIiwic2V0U2VsZWN0ZWRJZHMiLCJoZWFsdGhTZXJ2aWNlIiwiSGVhbHRoU2VydmljZSIsImNvbmZpcm1SZWYiLCJjcmVhdGVSZWYiLCJ0YWJsZVJlZiIsImNoZWNrUGVybWlzc2lvbiIsInVzZVBlcm1pc3Npb25Ib29rIiwiY3JlYXRlUGVyIiwiZGVsZXRlUGVyIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwic29ydGVyIiwiZmlsdGVyYWJsZSIsImZpeGVkIiwidGV4dCIsInJlY29yZCIsImlkIiwicGF0aWVudENvZGUiLCJwYXRpZW50TmFtZSIsInJvb21Db2RlIiwiYmVkQ29kZSIsImZpbHRlckRhdGUiLCJ3aWR0aCIsImRvY3RvckNvZGUiLCJkb2N0b3JOYW1lIiwib25DaGFuZ2VTZWxlY3Rpb24iLCJsZW5ndGgiLCJmZXRjaERhdGEiLCJ2YWx1ZXMiLCJ0byIsImluZGV4IiwiY29kZSIsIm9uRGVsZXRlIiwiZGVsZXRlIiwiaWRzIiwiY3VycmVudCIsInJlbmRlckRlbGV0ZURpYWxvZyIsInNob3ciLCJzZWxlY3RlZFJvd0tleXMiLCJvbkNoYW5nZSIsIngiLCJkZWZhdWx0T3B0aW9ucyIsImZpbHRlcnMiLCJzb3J0aW5nIiwiR3JpZFRhYmxlSGVscGVyIiwiZ2V0T3B0aW9ucyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsImdldERhdGEiLCJkZWZhdWx0UXVlcnkiLCJtYWtlUXVlcnkiLCJwZXJtaXNzaW9ucyIsImJyZWFkQ3J1bWJDb21wb25lbnQiLCJsYW5nIiwiZ2V0Um91dGVOYW1lIiwicm91dGVQYXRoIiwicm91dGVEYXRhIiwiX3JvdXRlcyIsInJvdXRlTmFtZSIsInJvdXRlRWxlbWVudCIsImFjdGlvbiIsImJyZWFkQ3VtYnMiLCJyb3V0ZXMiLCJnZXRCcmVhZGNydW1icyIsInVuc2hpZnQiLCJsaW5rUHJvcHMiLCJtYWtlVXJsIiwiY29uZmlybSIsIk1vZGFsIiwiQ29uZmlybURpYWxvZyIsIm9uQ2FuY2VsIiwic3RhdGUiLCJvblN1Ym1pdCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uT2siLCJyZWR1Y2VyIiwidHlwZSIsIl8iLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiaW5pdFN0YXRlIiwiZGV2VG9vbEV4dGVuc2lvbnMiLCJpc1NlcnZlciIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ1bmRlZmluZWQiLCJjcmVhdGVTdG9yZSIsIlJhbmdlUGlja2VyIiwiRGF0ZVBpY2tlciIsIkZpbHRlckRhdGVQaWNrZXIiLCJkYXRlU3RyaW5ncyIsImNvbHVtbiIsImRhdGVzIiwibW9tZW50IiwiZ2V0RGF0ZXMiLCJvcGVyYXRvciIsInN0YXJ0T2YiLCJhZGQiLCJ0b0lTT1N0cmluZyIsImVuZE9mIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlcmVkVmFsdWUiLCJvdGhlclByb3BzIiwicGFkZGluZyIsInJlZklucHV0IiwibWFyZ2luQm90dG9tIiwiY2xlYXIiLCJPcHRpb24iLCJTZWxlY3QiLCJJbnB1dEdyb3VwIiwiSW5wdXQiLCJHcm91cCIsIkZpbHRlckRyb3Bkb3duIiwicmVuZGVyT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImxhYmVsIiwic2VhcmNoQnRuVGV4dCIsImNsZWFyQnRuVGV4dCIsImRpc3BsYXkiLCJGaWx0ZXJJbnB1dCIsInZpc2libGVTZWFyY2giLCJpbnB1dCIsInNlbGVjdCIsInJlbmRlck9wZXJhdG9yIiwibWVzc2FnZXMiLCJoaWRlT3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJkZWZhdWx0T3BlcmF0b3IiLCJJbnB1dE51bWJlciIsIlJhZGlvIiwiRmlsdGVyQ2hlY2siLCJjaGVja2VkIiwiZ2V0Q2hlY2tlZCIsIkdyaWRUYWJsZSIsInNvcnQiLCJmaW5kIiwiaXRlbSIsImRpcmVjdGlvbiIsInNvcnRPcmRlciIsImZpbHRlciIsImdldENvbHVtblNlYXJjaFByb3BzIiwiZmlsdGVyQ2hlY2siLCJmaWx0ZXJEcm9wZG93biIsInNldFNlbGVjdGVkS2V5cyIsImNvbmZpcm1GbmMiLCJjdXJyZW50Q29sdW1uIiwiYyIsInJlbmRlckZpbHRlciIsImZpbHRlckljb24iLCJmaWx0ZXJlZCIsImNvbG9yIiwib25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwicGFnZVNpemUiLCJwYWdpbmF0aW9uIiwiaGFuZGxlVGFibGVDaGFuZ2UiLCJjb2x1bW5LZXkiLCJvcmRlciIsInNldEZpbHRlcnNUb0NvbHVtbnMiLCJzZXRTb3J0ZXJUb0NvbHVtbnMiLCJzZXRQYWdpbmF0aW9uIiwicG9zaXRpb24iLCJzaG93U2l6ZUNoYW5nZXIiLCJwYWdlU2l6ZU9wdGlvbnMiLCJib3JkZXJlZCIsInNpemUiLCJzaG93SGVhZGVyIiwiaGFzRGF0YSIsImxvYWRpbmciLCJiaW5kIiwiaW5pdCIsImdldERhdGFGcm9tUXVlcnkiLCJkZWZhdWx0T3B0aW9uVG9Db2x1bW5zIiwiY29tcG9uZW50RGlkTW91bnQiLCJxdWVyeU9iaiIsImYiLCJzIiwicHMiLCJCYXNlNjQiLCJlbmNvZGUiLCJidWlsZEZldGNoRGF0YSIsInF1ZXJ5T3B0aW9ucyIsImFkZFF1ZXJ5IiwicGFyc2UiLCJFcnJvciIsInF1ZXJ5T3V0Iiwia2V5cyIsImVsbGlwc2lzIiwic2Nyb2xsVG9GaXJzdFJvd09uQ2hhbmdlIiwicm93IiwiZ2V0UGFnaW5hdGlvbiIsIkdyaWRUYWJsZVdpdGhSb3V0ZXIiLCJmb3J3YXJkUmVmIiwidXNlUm91dGVyIiwiVGFibGUiLCJ1c2VCYXNlSG9va3MiLCJJMThuIiwidXNlVHJhbnNsYXRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2V0U3RvcmVBY3Rpb24iLCJ1c2VTZWxlY3RvciIsIm5leHRSb3V0ZSIsIm9iaiIsImRlZmF1bHRWYWx1ZSIsImRlc2NyaXB0aW9uIiwibm90aWZpY2F0aW9uIiwiZHVyYXRpb24iLCJhdXRoIiwiZ2V0Q29va2llcyIsImNvb2tpZXMiLCJnZXRQdWJsaWNSdW50aW1lQ29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIlBlcm1pc3Npb25Ib29rIiwidXNlclBlcm1pc3Npb25zIiwiZ2V0VXNlclBlcm1pc3Npb24iLCJfY2hlY2tQZXJtaXNzaW9uIiwiVEhFTUUiLCJUaXRsZSIsIlRleHQiLCJUeXBvZ3JhcGh5IiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsIkFkbWluIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsIm9uQ29sbGFwc2VDaGFuZ2UiLCJsb2ciLCJ1cGRhdGVTaXplIiwibW9iaWxlIiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU0lURV9OQU1FIiwiVElUTEUiLCJERVNDUklQVElPTiIsIkxPR08iLCJoZWlnaHQiLCJkaXNhYmxlZFNlYXJjaCIsInllYXIiLCJxdWVyeVNlbGVjdG9yIiwiSGVhZGVyIiwiU3ViTWVudSIsIk1lbnUiLCJTZWFyY2giLCJBZG1pbkhlYWRlciIsInVzZXJTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJwYXRpZW50U2VydmljZSIsIlBhdGllbnRTZXJ2aWNlIiwiYmVkU2VydmljZSIsIkJlZFNlcnZpY2UiLCJwYXRpZW50cyIsInNldFBhdGllbnRzIiwiYmVkcyIsInNldEJlZHMiLCJ1c2VycyIsInNldFVzZXJzIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY29va2llT2JqZWN0IiwiaGFuZGxlQ2xpY2tNZW51IiwicmVkaXJlY3RMb2dpbiIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ0b2tlbiIsInVzZXIiLCJvcHRpb25zUGF0aWVudHMiLCJvcHRpb25zQmVkcyIsIm9wdGlvbnNVc2VycyIsIm9uQ2hhbmdlU2VhcmNoIiwiZmlsdGVyUGF0aWVudHMiLCJmaWx0ZXJCZWRzIiwiZmlsdGVyVXNlcnMiLCJlcnJVc2VycyIsImRhdGFVc2VycyIsImVyclBhdGllbnRzIiwiZGF0YVBhdGllbnRzIiwiZXJyQmVkcyIsImRhdGFCZWRzIiwib25CbHVyU2VhcmNoIiwicmVuZGVyQ29uZmlybURpYWxvZyIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsInBhc3N3b3JkIiwidXNlclVwZGF0ZVBhc3N3b3JkIiwidmFsaWRhdG9yUGFzc3dvcmQiLCJnZXRGaWVsZFZhbHVlIiwidmFsaWRhdG9yIiwicnVsZSIsInJlbmRlckNoYW5nZVBhc3NNb2RhbCIsImZvcm1DaGFuZ2VQYXNzd29yZCIsIkZvcm0iLCJ1c2VGb3JtIiwicmVwYXNzd29yZCIsInN1Ym1pdCIsInNwYW4iLCJyZXF1aXJlZCIsInJlbmRlclJpZ2h0Q29udGVudCIsIm1lbnVJY29uUHJvcHMiLCJjbGFzc05hbWUiLCJoZWFkZXJDbGFzcyIsImFjY291bnRQb3B1cCIsImZ1bGxuYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInBob25lIiwicmVuZGVyVGl0bGUiLCJyZW5kZXJJdGVtIiwibGluayIsImp1c3RpZnlDb250ZW50IiwiZmxvYXQiLCJiZWRJZCIsInJlbmRlclNlYXJjaCIsIk1lbnVDb21wb25lbnQiLCJnZW5lcmF0ZU1lbnVzIiwiaWNvbiIsIm1lbnUiLCJ0aGVtZSIsInRSZWFkeSIsImN1cnJlbnRSb3V0ZU5hbWUiLCJicmVhZGN1bXMiLCJnZXRTaWRlYmFyU2VsZWN0ZWRzIiwicm91dGVyTmFtZXMiLCJicmVhZGN1bSIsInNlbGVjdGVkS2V5cyIsInBvcCIsInNpZGViYXIiLCJudW1Gb3JtYXR0ZXIiLCJudW0iLCJ0b0ZpeGVkIiwiUHJvZmlsZSIsInByb2ZpbGVJbmZvIiwiY29tcGFueUxvZ28iLCJncm91cE5hbWUiLCJ1c2VyRnVsbG5hbWUiLCJjb21wYW55TmFtZSIsImNvbXBhbnlBZGRyZXNzIiwidG9kYXkiLCJTaWRlciIsInNpZGVCYXIiLCJkZWZhdWx0Q29va2llIiwiTmV4dEkxOE5leHQiLCJkZWZhdWx0IiwiZ2V0Q29uZmlnIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsImRlZmF1bHROUyIsImRlZmF1bHRMYW5ndWFnZSIsIkxBTkciLCJvdGhlckxhbmd1YWdlcyIsImxvY2FsZVBhdGgiLCJicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZXF1ZXN0IiwiY29va2llc1N0cmluZyIsImhhbmRsZUdsb2JhbENhbGxiYWNrIiwiaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVHbG9iYWwiLCJoYW5kbGVHbG9iYWxFcnJvciIsImdldEFwcFVybCIsIkFQSV9IT1NUIiwiYmVmb3JlUmVxdWVzdCIsImFmdGVyUmVxdWVzdCIsIlJlcXVlc3RFeGNlcHRpb24iLCJwb3N0IiwicHV0IiwiVXJsUGF0dGVybiIsInF1ZXJ5U3RyaW5nIiwiUm91dGUiLCJyb3V0ZUNvbmZpZyIsInBhdHRlcm4iLCJhc1VybCIsImluZGV4T2YiLCJsb2NhdGlvbiIsIm9sZFF1ZXJ5IiwicXVlcnlTdHJpbmdBcHBlbmQiLCJyb3V0ZVBhdGhzIiwic2lkZWJhclNlbGVjdGVkTmFtZSIsInBhcmVudCIsIkJhc2VBcGkiLCJjb250ZXh0Iiwic3RhdHVzIiwiY29va2llc09iaiIsIm5leHRDb29raWUiLCJnbG9iYWxIYW5kbGVDYWxsYmFjayIsImdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2siLCJjcmVhdGUiLCJkZXRhaWwiLCJlZGl0IiwiQmVkIiwiSGVhbHRoU3RhdHVzIiwiUGF0aWVudCIsIlVzZXIiLCJsb2dpbiIsInVwZGF0ZVBhc3N3b3JkIiwic2VhcmNoIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsInJlZHVjZSIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsInNob3dFcnJvciIsInBlcm1pc3Npb25BcnJheSIsInBlcm1pc3Npb24iLCJyb290UGVybWlzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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SG9JLGVBQVcsRUFBRTJYO0FBRlYsR0FBUDtBQUtILENBckJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcaGVhbHRoU3RhdHVzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJ3RoZW1lcy9sYXlvdXRzL0FkbWluJ1xyXG5pbXBvcnQgeyBHcmlkVGFibGUsIEdyaWRUYWJsZUhlbHBlciwgRmlsdGVySW5wdXQgfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9UYWJsZSc7XHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSGVhbHRoU2VydmljZSBmcm9tICd0aGVtZXMvc2VydmljZXMvYXBpL0hlYWx0aFN0YXR1c1NlcnZpY2UnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB0byBmcm9tICdhd2FpdC10by1qcydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVBlcm1pc3Npb25Ib29rIGZyb20gXCJ0aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2tcIjtcclxuaW1wb3J0IHtQbHVzQ2lyY2xlT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBmb3JtYXRlckRhdGUgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIHZhbHVlID0gdmFsdWU/IFN0cmluZyh2YWx1ZSkgOiBcIlwiXHJcbiAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwxMClcclxuICByZXR1cm4gYCR7dmFsdWV9YFxyXG59XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGhlYWx0aHMsIHRvdGFsIH06IHsgaGVhbHRoczogSGVhbHRoU3RhdHVzW10sIHRvdGFsOiBudW1iZXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdCwgbm90aWZ5LCByZWRpcmVjdCwgc2V0U3RvcmUsIGdldEF1dGgsIGdldFN0b3JlIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IFtoaWRkZW5EZWxldGVCdG4sIHNldEhpZGRlbkRlbGV0ZUJ0bl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZElkcywgc2V0U2VsZWN0ZWRJZHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgaGVhbHRoU2VydmljZSA9IG5ldyBIZWFsdGhTZXJ2aWNlKClcclxuICBjb25zdCBjb25maXJtUmVmID0gUmVhY3QuY3JlYXRlUmVmPENvbmZpcm1EaWFsb2c+KClcclxuICBjb25zdCB0YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxHcmlkVGFibGU+KClcclxuICBjb25zdCB7IGNoZWNrUGVybWlzc2lvbiB9ID0gdXNlUGVybWlzc2lvbkhvb2soKTtcclxuICBjb25zdCBjcmVhdGVQZXIgPSBjaGVja1Blcm1pc3Npb24oe1xyXG4gICAgLy8gXCJhZG1pbi5oZWFsdGhTdGF0dXNlc1wiOiBcIkNcIixcclxuICAgICdkb2N0b3IuaGVhbHRoU3RhdHVzZXMnOiAnQydcclxuICB9KVxyXG4gIGNvbnN0IGRlbGV0ZVBlciA9IGNoZWNrUGVybWlzc2lvbih7XHJcbiAgICAvLyBcImFkbWluLmhlYWx0aFN0YXR1c2VzXCI6IFwiRFwiLFxyXG4gICAgXCJkb2N0b3IuaGVhbHRoU3RhdHVzZXNcIjogXCJEXCJcclxuICB9KVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwicGF0aWVudFwiKSxcclxuICAgICAgZGF0YUluZGV4OiAncGF0aWVudE5hbWUnLFxyXG4gICAgICBrZXk6ICdwYXRpZW50cy5mdWxsbmFtZScsXHJcbiAgICAgIHNvcnRlcjp0cnVlLFxyXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxyXG4gICAgICBmaXhlZDonbGVmdCcsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmVkaXQnLCBcclxuICAgICAgICB7IGlkOiByZWNvcmQuaWQgfSl9PntyZWNvcmQucGF0aWVudENvZGV9IC0ge3JlY29yZC5wYXRpZW50TmFtZX0gLSB7cmVjb3JkLnJvb21Db2RlfSAtIHtyZWNvcmQuYmVkQ29kZX08L2E+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogdChcImhlYWx0aFN0YXR1c2VzLmRhdGVcIiksXHJcbiAgICAgIGRhdGFJbmRleDogJ2RhdGUnLFxyXG4gICAgICBrZXk6ICdkYXRlJyxcclxuICAgICAgc29ydGVyOnRydWUsXHJcbiAgICAgIGZpbHRlckRhdGU6IHRydWUsXHJcbiAgICAgIGZpeGVkOidsZWZ0JyxcclxuICAgICAgd2lkdGg6ICc5JScsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e2Zvcm1hdGVyRGF0ZSh0ZXh0KX08L2Rpdj5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KCdkb2N0b3InKSxcclxuICAgICAgZGF0YUluZGV4OiAnZG9jdG9yTmFtZScsXHJcbiAgICAgIGtleTogJ3VzZXJzLmZ1bGxuYW1lJyxcclxuICAgICAgc29ydGVyOnRydWUsXHJcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXHJcbiAgICAgIHJlbmRlcjogKHRleHQ6IHN0cmluZywgcmVjb3JkOiBhbnkpID0+IDxkaXY+e3JlY29yZC5kb2N0b3JDb2RlfSAtIHtyZWNvcmQuZG9jdG9yTmFtZX08L2Rpdj5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwiaGVhbHRoU3RhdHVzZXMud2VpZ2h0XCIpICsgXCIgKEtnKVwiLFxyXG4gICAgICBkYXRhSW5kZXg6ICd3ZWlnaHQnLFxyXG4gICAgICBrZXk6ICd3ZWlnaHQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJoZWFsdGhTdGF0dXNlcy5ibG9vZFByZXNzdXJlXCIpICsgXCIgKG1tSGcpXCIsXHJcbiAgICAgIGRhdGFJbmRleDogJ2Jsb29kUHJlc3N1cmUnLFxyXG4gICAgICBrZXk6ICdibG9vZFByZXNzdXJlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwiaGVhbHRoU3RhdHVzZXMuYmxvb2RTdWdhclwiKSArIFwiIChtZy9kTClcIixcclxuICAgICAgZGF0YUluZGV4OiAnYmxvb2RTdWdhcicsXHJcbiAgICAgIGtleTogJ2Jsb29kU3VnYXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJoZWFsdGhTdGF0dXNlcy5oZWFydFJhdGVcIikgKyBcIiAoQlBNKVwiLFxyXG4gICAgICBkYXRhSW5kZXg6ICdoZWFydFJhdGUnLFxyXG4gICAgICBrZXk6ICdoZWFydFJhdGUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHQoXCJub3RlXCIpLFxyXG4gICAgICBkYXRhSW5kZXg6ICdub3RlJyxcclxuICAgICAga2V5OiAnbm90ZScsXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3Rpb24gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEhpZGRlbkRlbGV0ZUJ0bihmYWxzZSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRIaWRkZW5EZWxldGVCdG4odHJ1ZSlcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKGRhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IHtcclxuICAgIGxldCBbZXJyb3IsIGhlYWx0aHNdOiBhbnlbXSA9IGF3YWl0IHRvKGhlYWx0aFNlcnZpY2UuaW5kZXgodmFsdWVzKSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7IGNvZGUsIG1lc3NhZ2UgfSA9IGVycm9yXHJcbiAgICAgIG5vdGlmeSh0KGBlcnJvcnM6JHtjb2RlfWApLCB0KG1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICAgIHJldHVybiBoZWFsdGhzXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8oaGVhbHRoU2VydmljZS5kZWxldGUoeyBpZHM6IHNlbGVjdGVkSWRzIH0pKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoYCR7ZXJyb3IubWVzc2FnZX1gKSwgJ2Vycm9yJylcclxuICAgIH1cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmREZWxldGVkXCIpKTtcclxuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQucmVsb2FkKClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKFtdKVxyXG4gICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJEZWxldGVEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17b25EZWxldGV9XHJcbiAgICAgICAgdGl0bGU9e3QoJ2RlbGV0ZUl0ZW0nKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLmRlbGV0ZUNvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIDxCdXR0b24gaGlkZGVuPXshY3JlYXRlUGVyfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmNyZWF0ZVwiKX0gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9J2J0bi10b3AnPlxyXG4gICAgICAgIDxQbHVzQ2lyY2xlT3V0bGluZWQgLz5cclxuICAgICAgICB7dCgnY3JlYXRlJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPEJ1dHRvbiBkYW5nZXIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdygpIH19IGNsYXNzTmFtZT0nYnRuLXRvcCcgaGlkZGVuPXtoaWRkZW5EZWxldGVCdG4gfHwgIWRlbGV0ZVBlcn0+XHJcbiAgICAgICAgPERlbGV0ZU91dGxpbmVkIC8+XHJcbiAgICAgICAge3QoJ2RlbGV0ZScpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgXHJcbiAgICAgIDxHcmlkVGFibGVcclxuICAgICAgICByZWY9e3RhYmxlUmVmfVxyXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgZGF0YT17aGVhbHRoc31cclxuICAgICAgICByb3dTZWxlY3Rpb249e3tzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkSWRzLCBvbkNoYW5nZTogKGRhdGE6IGFueVtdKSA9PiBvbkNoYW5nZVNlbGVjdGlvbihkYXRhKSB9fVxyXG4gICAgICAgIGZldGNoRGF0YT17ZmV0Y2hEYXRhfVxyXG4gICAgICAgIHRvdGFsPXt0b3RhbH1cclxuICAgICAgICBzY3JvbGw9e3sgeDoxNTAwIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHtyZW5kZXJEZWxldGVEaWFsb2coKX1cclxuICAgIDwvZGl2PlxyXG4gIDwvTGF5b3V0PlxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBhbnkpID0+IHtcclxuICBsZXQgaGVhbHRoU2VydmljZSA9IG5ldyBIZWFsdGhTZXJ2aWNlKGN0eClcclxuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBmaWx0ZXJzOiBbXSxcclxuICAgIHNvcnRpbmc6IFtdXHJcbiAgfVxyXG4gIGxldCBxdWVyeSA9IGN0eC5xdWVyeVxyXG4gIGxldCBmaWx0ZXJzID0gR3JpZFRhYmxlSGVscGVyLmdldE9wdGlvbnMocXVlcnksIGRlZmF1bHRPcHRpb25zKTtcclxuICBsZXQgW2Vycm9yLCBoZWFsdGhzXTogYW55W10gPSBhd2FpdCB0byhoZWFsdGhTZXJ2aWNlLmluZGV4KGZpbHRlcnMpKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnLCdlcnJvcnMnXSxcclxuICAgIGVycm9yOiBlcnJvcixcclxuICAgIGhlYWx0aHM6IHVzZUJhc2VIb29rLmdldERhdGEoaGVhbHRocywgXCJkYXRhXCIsIFtdKSxcclxuICAgIHRvdGFsOiB1c2VCYXNlSG9vay5nZXREYXRhKGhlYWx0aHMsIFwidG90YWxcIiwgMCksXHJcbiAgICBkZWZhdWx0UXVlcnk6IHtcclxuICAgICAgZmlsdGVyczogR3JpZFRhYmxlSGVscGVyLm1ha2VRdWVyeShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5JbmRleC5wZXJtaXNzaW9ucyA9IHtcclxuICBcImRvY3Rvci5oZWFsdGhTdGF0dXNlc1wiOiBcIlJcIixcclxuICBcIm51cnNlLmhlYWx0aFN0YXR1c2VzXCI6IFwiUlwiXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IHsgZ2V0QnJlYWRjcnVtYnMsIHJvdXRlIGFzIG1ha2VVcmwgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIlxyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG59XHJcblxyXG5jb25zdCBicmVhZENydW1iQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICAgICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgYnJlYWRDdW1icyA9IFtdXHJcbiAgICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gICAgbGV0IHJvdXRlczogUm91dGVbXSA9IGdldEJyZWFkY3J1bWJzKHJvdXRlTmFtZSlcclxuICAgIGlmIChyb3V0ZXNbMF0gJiYgcm91dGVzWzBdLm5hbWUgIT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIpIHtcclxuICAgICAgICByb3V0ZXMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdmcm9udGVuZC5hZG1pbi5ob21lJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGxpbmtQcm9wcyA9IG1ha2VVcmwocm91dGUubmFtZSlcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPnsgcm91dGUubmFtZSA9PSBcImZyb250ZW5kLmFkbWluLmhvbWVcIiA/IDxIb21lRmlsbGVkIC8+IDogdChyb3V0ZS5uYW1lKSB9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgYnJlYWRDdW1icy5wdXNoKDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtyb3V0ZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHt0KHJvdXRlLm5hbWUpfVxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWIuSXRlbT4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8QnJlYWRjcnVtYj57YnJlYWRDdW1ic308L0JyZWFkY3J1bWI+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBicmVhZENydW1iQ29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcclxuXHJcbmNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzaG93KGRhdGEgPSBudWxsKSB7XHJcbiAgICBsZXQgeyB0aXRsZSwgY29udGVudCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGl0bGUgPSB0aXRsZSB8fCBcIlRpdGxlXCJcclxuICAgIGNvbnRlbnQgPSBjb250ZW50IHx8IFwiQ29udGVudFwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XHJcbiAgICBjb25maXJtKHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICBvbk9rOiB0aGlzLm9uU3VibWl0LFxyXG4gICAgICBvbkNhbmNlbDogdGhpcy5vbkNhbmNlbCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodHlwZW9mIG9uQ2FuY2VsID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgb25DYW5jZWwodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHR5cGVvZiBvblN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGF3YWl0IG9uU3VibWl0KHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybURpYWxvZzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwic2V0U3RvcmVcIil7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9XHJcbiAgICBfLnNldChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucGF0aCwgYWN0aW9uLnBheWxvYWQudmFsdWUpXHJcbiAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlXHJcbn1cclxuXHJcbi8qIGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHN0b3JlOiBzdG9yZVJlZHVjZXJcclxufSkgKi9cclxuXHJcbmNvbnN0IHNldFN0b3JlID0gKHBhdGgsIHZhbHVlKSA9PiAoe1xyXG4gIHR5cGU6ICdzZXRTdG9yZScsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcGF0aCxcclxuICAgIHZhbHVlXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9IChpbml0U3RhdGUgPSB7fSwgb3B0aW9ucykgPT4ge1xyXG4gIGxldCBkZXZUb29sRXh0ZW5zaW9ucyA9ICghb3B0aW9ucy5pc1NlcnZlciAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpIDogdW5kZWZpbmVkXHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRTdGF0ZSwgZGV2VG9vbEV4dGVuc2lvbnMpXHJcbn1cclxuZXhwb3J0IHtcclxuICBtYWtlU3RvcmUsXHJcbiAgc2V0U3RvcmVcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmNvbnN0IHsgUmFuZ2VQaWNrZXIgfSA9IERhdGVQaWNrZXI7XHJcblxyXG5jbGFzcyBGaWx0ZXJEYXRlUGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZXMgPSAoZGF0ZVN0cmluZ3MpID0+IHtcclxuICAgICAgICBpZighZGF0ZVN0cmluZ3MpIGRhdGVTdHJpbmdzID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgICAgICBpZiAoIWRhdGVTdHJpbmdzKSByZXR1cm4ge31cclxuICAgICAgICBpZiAoIWRhdGVTdHJpbmdzWzBdKSBkYXRlU3RyaW5nc1swXSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmKCFkYXRlU3RyaW5nc1sxXSkgZGF0ZVN0cmluZ3NbMV0gPSB1bmRlZmluZWRcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRlU3RyaW5nczogZGF0ZVN0cmluZ3MsXHJcbiAgICAgICAgICAgIGRhdGVzOiBbXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nc1swXSA/IG1vbWVudChkYXRlU3RyaW5nc1swXSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBkYXRlU3RyaW5nc1sxXSA/IG1vbWVudChkYXRlU3RyaW5nc1sxXSkgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGRhdGVzLCBkYXRlU3RyaW5ncykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKGRhdGVTdHJpbmdzKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZVN0cmluZ3M6Jyd9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3MgJiYgdGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1swXSAmJiB0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzFdKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJ2JldHdlZW4nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1swXSkuc3RhcnRPZihcImRheXNcIikuYWRkKDE0LCdoJykudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1sxXSkuZW5kT2YoXCJkYXlzXCIpLmFkZCgxNCwnaCcpLnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPFJhbmdlUGlja2VyXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFsbG93RW1wdHk9e3RydWUsIHRydWV9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1NnB4XCIsIG1hcmdpbkJvdHRvbTogOCwgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRhdGVQaWNrZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlbGVjdCwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IElucHV0R3JvdXAgPSBJbnB1dC5Hcm91cDtcclxuXHJcbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlczogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlczogdmFsdWVzIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlcyAmJiB0aGlzLnN0YXRlLnZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICdpbicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZXNcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgLyogZmlsdGVycyA9IHRoaXMuc3RhdGUudmFsdWVzLm1hcCh2YWx1ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICc9JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KSkgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wdGlvbnMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMub3B0aW9ucykgcmV0dXJuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IDxPcHRpb24ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9IGxhYmVsPXtvcHRpb24ubGFiZWx9ID57b3B0aW9uLmxhYmVsfTwvT3B0aW9uPilcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgb3B0aW9ucywgc2VhcmNoQnRuVGV4dCwgY2xlYXJCdG5UZXh0LCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dDbGVhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIG9wdGlvbkZpbHRlclByb3A9XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI1MHB4JywgbWFyZ2luQm90dG9tOiA4LCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck9wdGlvbnMoKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJbnB1dCwgU2VsZWN0LCBJbnB1dE51bWJlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdFxyXG5cclxuY2xhc3MgRmlsdGVySW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiksXHJcbiAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgXCJjb250YWluc1wiXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpICE9IF8uZ2V0KHByZXZQcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVTZWFyY2ggIT0gdGhpcy5wcm9wcy5jb2x1bW4udmlzaWJsZVNlYXJjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVTZWFyY2ggPSB0aGlzLnByb3BzLmNvbHVtbi52aXNpYmxlU2VhcmNoXHJcbiAgICAgICAgICAgIHRoaXMucmVmSW5wdXQuaW5wdXQuc2VsZWN0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOicnfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMuc3RhdGUub3BlcmF0b3IsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3BlcmF0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcyA9IHt9LCBoaWRlT3BlcmF0b3IsIG9wZXJhdG9yIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGhpZGVPcGVyYXRvcikgcmV0dXJuXHJcbiAgICAgICAgbGV0IG9wZXJhdG9ycyA9IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJjb250YWluc1wiLCBsYWJlbDogbWVzc2FnZXNbJ2NvbnRhaW5zJ10gfHwgXCJDb250YWluc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiPVwiLCBsYWJlbDogbWVzc2FnZXNbJ2VxdWFsJ10gfHwgXCJFcXVhbHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcInN0YXJ0V2l0aHNcIiwgbGFiZWw6IG1lc3NhZ2VzWydzdGFydFdpdGhzJ10gfHwgXCJTdGFydFdpdGhzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJlbmRXaXRoc1wiLCBsYWJlbDogbWVzc2FnZXNbJ2VuZFdpdGhzJ10gfHwgXCJFbmRXaXRoc1wiIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBvcGVyYXRvcnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj1cIiwgbGFiZWw6ICc9JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI+XCIsIGxhYmVsOiAnPicgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPFwiLCBsYWJlbDogJzwnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj49XCIsIGxhYmVsOiAnPj0nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIjw9XCIsIGxhYmVsOiAnPD0nIH1cclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wZXJhdG9yID0gb3BlcmF0b3IgfHwgb3BlcmF0b3JzWzBdLnZhbHVlXHJcblxyXG4gICAgICAgIHJldHVybiA8U2VsZWN0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdE9wZXJhdG9yfSBzdHlsZT17eyB3aWR0aDogOTAgfX0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVyYXRvcjogdmFsdWUgfSl9PlxyXG4gICAgICAgICAgICB7b3BlcmF0b3JzLm1hcChvcGVyYXRvciA9PiA8T3B0aW9uIHZhbHVlPXtvcGVyYXRvci52YWx1ZX0ga2V5PXtvcGVyYXRvci52YWx1ZX0+e29wZXJhdG9yLmxhYmVsfTwvT3B0aW9uPil9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCBoaWRlT3BlcmF0b3IsIHR5cGUsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgQ29tcG9uZW50ID0gSW5wdXRcclxuICAgICAgICBpZih0eXBlID09IFwibnVtYmVyXCIpIENvbXBvbmVudCA9IElucHV0TnVtYmVyXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT17dGhpcy5yZW5kZXJPcGVyYXRvcigpfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBtYXJnaW5Cb3R0b206IDgsIGRpc3BsYXk6ICdibG9jaycgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcklucHV0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSYWRpbywgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBHcm91cCB9ID0gUmFkaW87XHJcblxyXG5jbGFzcyBGaWx0ZXJDaGVjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGVja2VkID0gKGNoZWNrZWQpID0+IHtcclxuICAgICAgICBpZihjaGVja2VkID09IHVuZGVmaW5lZCkgY2hlY2tlZCA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldENoZWNrZWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOnVuZGVmaW5lZH0sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jaGVja2VkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICc9JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNoZWNrZWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgICAgICAgPEdyb3VwXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjb2x1bW4ub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIG1hcmdpbkJvdHRvbTogOCwgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsZWFyfSBkYW5nZXIgPkNsZWFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNoZWNrIiwiaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgYWRkUXVlcnkgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LWhpZ2hsaWdodC13b3Jkc1wiO1xyXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBGaWx0ZXJJbnB1dCBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvSW5wdXQnXHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyJ1xyXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uJ1xyXG5cclxuY2xhc3MgR3JpZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFByb3BzID0ge1xyXG4gICAgICAgICAgICBib3JkZXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc2l6ZTogJ21pZGRsZScsXHJcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGhhc0RhdGE6IHRydWUsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVsb2FkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7fVxyXG4gICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnByb3BzLnRvdGFsIHx8IDEwMFxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJvcHMuZGF0YVxyXG4gICAgICAgIHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UgPSB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEto4bufaSB04bqhbyBjw6FjIG9wdGlvbnMgdOG7qyBxdWVyeSB0csOqbiB1cmxcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBHcmlkVGFibGUuZ2V0RGF0YUZyb21RdWVyeShxdWVyeSwgdGhpcy5wcm9wcylcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBkZWZhdWx0T3B0aW9ucy5wYWdlU2l6ZSB8fCA1MCxcclxuICAgICAgICAgICAgcGFnZTogZGVmYXVsdE9wdGlvbnMucGFnZSB8fCAwLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnM7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvblRvQ29sdW1ucyhkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGzhuqFpIGThu68gbGnhu4d1IHThu6sgcXVlcnkgxJHhu5VpIHNhbmcgxJHDum5nIGZvcm1hdCBj4bunYSBjb2x1bW4gdHJvbmcgYW50ZFxyXG4gICAgICovXHJcbiAgICBkZWZhdWx0T3B0aW9uVG9Db2x1bW5zID0gKGRlZmF1bHRPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAvL3NldCBmaWVsZFxyXG4gICAgICAgICAgICBpZighY29sdW1uLmZpZWxkKSBjb2x1bW4uZmllbGQgPSBjb2x1bW4ua2V5XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc29ydCA9IGRlZmF1bHRPcHRpb25zLnNvcnRpbmcuZmluZChpdGVtID0+IGl0ZW0uZmllbGQgPT09IGNvbHVtbi5maWVsZCk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBkaXJlY3Rpb24gfSA9IHNvcnQ7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gZGlyZWN0aW9uID09PSBcImFzY1wiID8gJ2FzY2VuZCcgOiAnZGVzY2VuZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSBkZWZhdWx0T3B0aW9ucy5maWx0ZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0uZmllbGQgPT09IGNvbHVtbi5maWVsZCk7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlcmVkVmFsdWUgPSBbLi4uZmlsdGVyc107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLmZpbHRlcmVkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyYWJsZTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnaW5wdXQnKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBkZWxldGUgY29sdW1uLmZpbHRlcmFibGU7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2RhdGUnKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdjaGVjaycpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6ICF0aGlzLnN0YXRlLnJlbG9hZH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgLy91cGRhdGUgZGF0YSB0cm9uZyB0csaw4budbmcgaOG7o3AgxJHhu5VpIHThu6sgcHJvcHMgYsOqbiBuZ2/DoGlcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmRhdGEpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5KSAhPSBKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMucm91dGVyLnF1ZXJ5KSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkOiAhdGhpcy5zdGF0ZS5yZWxvYWR9KSAvL2No4buJIGPhuqduIHJlbmRlciBs4bqhaSB2aWV3XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWtlUXVlcnkob3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHsgZmlsdGVycyA9IFtdLCBzb3J0aW5nID0gW10sIHBhZ2VTaXplLCBwYWdlIH0gPSBvcHRpb25zXHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICBmOiBbXSxcclxuICAgICAgICAgICAgczoge30sXHJcbiAgICAgICAgICAgIHBzOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgcDogcGFnZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcXVlcnlPYmouZi5wdXNoKFtmaWx0ZXIuZmllbGQsIGZpbHRlci5vcGVyYXRvciB8fCAnY29udGFpbnMnLCBmaWx0ZXIudmFsdWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBzb3J0IG9mIHNvcnRpbmcpIHtcclxuICAgICAgICAgICAgcXVlcnlPYmouc1tzb3J0LmZpZWxkXSA9IHNvcnQuZGlyZWN0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEtoYWkgYsOhbyBjw6FjIGZ1bmN0aW9uIGNobyBkcm9wZG93biBzZWFyY2ggYm94XHJcbiAgICAgKi9cclxuICAgIGdldENvbHVtblNlYXJjaFByb3BzID0gKGNvbHVtbix0eXBlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsdGVyRHJvcGRvd246ICh7IGNvbmZpcm0sIHNldFNlbGVjdGVkS2V5cyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29uZmlybUZuYyA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENvbHVtbiA9IHRoaXMuY29sdW1ucy5maW5kKGMgPT4gYy5kYXRhSW5kZXggPT09IGNvbHVtbi5kYXRhSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXlzKHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5yZW5kZXJGaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLnJlbmRlckZpbHRlcih7IGNvbHVtbiwgY29uZmlybTogY29uZmlybUZuYywgcmVmIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2RhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2NoZWNrJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbHRlckljb246IGZpbHRlcmVkID0+IChcclxuICAgICAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogZmlsdGVyZWQgPyBcIiMxODkwZmZcIiA6IHVuZGVmaW5lZCB9fSAvPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBvbkZpbHRlckRyb3Bkb3duVmlzaWJsZUNoYW5nZTogdmlzaWJsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpc2libGUgJiYgY29sdW1uLnZpc2libGVTZWFyY2ggIT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi52aXNpYmxlU2VhcmNoID0gdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5vblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbHVtbi52aXNpYmxlU2VhcmNoID0gdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLnBhZ2luYXRpb25cclxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlKHsgcGFnZVNpemUsIGN1cnJlbnQ6IHBhZ2UgfSwge30sIHt9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIFRhYmxlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mZXRjaERhdGEgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5idWlsZEZldGNoRGF0YSgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeU9wdGlvbnMgPSBHcmlkVGFibGUubWFrZVF1ZXJ5KHBhcmFtcylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFyYW1zLCBxdWVyeU9wdGlvbnMpXHJcbiAgICAgICAgICAgIGFkZFF1ZXJ5KHsgZmlsdGVyczogcXVlcnlPcHRpb25zIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5wcm9wcy5mZXRjaERhdGEocGFyYW1zKSB8fCB7fVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnRvdGFsICE9IHVuZGVmaW5lZCkgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBfLmdldChyZXN1bHQsICdkYXRhJywgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBmaWx0ZXIgdOG7qyB0YWJsZSB2w6BvIGJp4bq/biB0aGlzLmNvbHVtbnMgxJHhu4MgY29udHJvbGxlZFxyXG4gICAgICovXHJcbiAgICBzZXRGaWx0ZXJzVG9Db2x1bW5zID0gKGZpbHRlcnMgPSB7fSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlciA9IGZpbHRlcnNbY29sdW1uLmZpZWxkXTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLmZpbHRlcmVkVmFsdWUgPSBmaWx0ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLmZpbHRlcmVkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNvcnRlclRvQ29sdW1ucyA9IChzb3J0ZXIgPSB7fSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5rZXkgPT0gc29ydGVyLmNvbHVtbktleSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLnNvcnRPcmRlciA9IHNvcnRlci5vcmRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uc29ydE9yZGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHNldFBhZ2luYXRpb24gPSAocGFnaW5hdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2luYXRpb24uY3VycmVudCAtIDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZVRhYmxlQ2hhbmdlID0gYXN5bmMgKHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RmlsdGVyc1RvQ29sdW1ucyhmaWx0ZXJzKTtcclxuICAgICAgICB0aGlzLnNldFNvcnRlclRvQ29sdW1ucyhzb3J0ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5ID0ge30sIGRlZmF1bHRPcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSBxdWVyeS5maWx0ZXJzIHx8IHt9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdWVyeS5maWx0ZXJzID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeU9iaiA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZShxdWVyeS5maWx0ZXJzKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmaWx0ZXJzIHBhcmFtcyBpbnZhbGlkIGZvcm1hdC5gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcXVlcnlPYmopIHJldHVybiB7fVxyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gcXVlcnlPYmouZiB8fCBbXVxyXG4gICAgICAgIGxldCBzb3J0aW5nID0gcXVlcnlPYmoucyB8fCB7fVxyXG4gICAgICAgIGxldCBxdWVyeU91dCA9IHtcclxuICAgICAgICAgICAgZmlsdGVyczogZGVmYXVsdE9wdGlvbnMuZmlsdGVycyB8fCBbXSxcclxuICAgICAgICAgICAgc29ydGluZzogZGVmYXVsdE9wdGlvbnMuc29ydGluZyB8fCBbXSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHF1ZXJ5T2JqLnBzIHx8IGRlZmF1bHRPcHRpb25zLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiBxdWVyeU9iai5wIHx8IGRlZmF1bHRPcHRpb25zLnBhZ2VcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgICBxdWVyeU91dC5maWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpbHRlclswXSxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJbMV0sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyWzJdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHNvcnRpbmcpIHtcclxuICAgICAgICAgICAgcXVlcnlPdXQuc29ydGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogc29ydGluZ1tmaWVsZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWVyeU91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0T3B0aW9ucyhxdWVyeSwgZGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAocXVlcnkgJiYgT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCA+IDApIHJldHVybiB0aGlzLmdldERhdGFGcm9tUXVlcnkocXVlcnksIGRlZmF1bHRPcHRpb25zKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgZGF0YSB04burIHRoaXMuY29sdW1ucyDEkeG7gyBraOG7m3AgduG7m2kgZm9ybWF0IHRyw6puIHNlcnZlclxyXG4gICAgICovXHJcbiAgICBidWlsZEZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXSxcclxuICAgICAgICAgICAgc29ydGluZzogW10sXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnaW5hdGlvbi5wYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmZpbHRlcnMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLmZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1uLmZpbHRlcmVkVmFsdWVcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLnNvcnRPcmRlcikge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNvcnRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGNvbHVtbi5zb3J0T3JkZXIgPT0gXCJhc2NlbmRcIiA/IFwiYXNjXCIgOiBcImRlc2NcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJhbXNcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFnaW5hdGlvbiA9IChwYWdpbmF0aW9uID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCB7IHBhZ2VTaXplLCBwYWdlIH0gPSB0aGlzLnBhZ2luYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucGFnaW5hdGlvbixcclxuICAgICAgICAgICAgdG90YWw6IHRoaXMudG90YWwsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplIHx8IDUwLFxyXG4gICAgICAgICAgICBjdXJyZW50OiBwYWdlICsgMSxcclxuICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IFsnMicsICcxMCcsICc1MCcsICcxMDAnLCAnMjAwJywgJzUwMCddXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGhhc0RhdGEgPSB0cnVlLCBkYXRhID0gW10sIGVsbGlwc2lzLCBmZXRjaERhdGEsIGNvbHVtbnMsIHBhZ2luYXRpb24sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLmluaXRpYWxQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAvLyB0YWJsZUxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogOTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0ZpcnN0Um93T25DaGFuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtoYXNEYXRhID8gdGhpcy5kYXRhLm1hcChyb3cgPT4gKHsgLi4ucm93LCBrZXk6IHJvdy5pZCB9KSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLmdldFBhZ2luYXRpb24ocGFnaW5hdGlvbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkVGFibGUiLCJpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcclxuaW1wb3J0IFJlYWN0LCB7IFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEdyaWRUYWJsZVdpdGhSb3V0ZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogYW55LCByZWY6IGFueSkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0cmV0dXJuIDxUYWJsZSByZWY9e3JlZn0gcm91dGVyPXtyb3V0ZXJ9IHsuLi5wcm9wc30gLz5cclxufSkgYXMgYW55XHJcblxyXG5HcmlkVGFibGVXaXRoUm91dGVyLmdldE9wdGlvbnMgPSBUYWJsZS5nZXRPcHRpb25zXHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIuZ2V0RGF0YUZyb21RdWVyeSA9IFRhYmxlLmdldERhdGFGcm9tUXVlcnlcclxuR3JpZFRhYmxlV2l0aFJvdXRlci5tYWtlUXVlcnkgPSBUYWJsZS5tYWtlUXVlcnlcclxuXHJcbmNvbnN0IEdyaWRUYWJsZUhlbHBlciA9IHtcclxuICAgIGdldE9wdGlvbnM6IFRhYmxlLmdldE9wdGlvbnMsXHJcbiAgICBnZXREYXRhRnJvbVF1ZXJ5OiBUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5LFxyXG4gICAgbWFrZVF1ZXJ5OiBUYWJsZS5tYWtlUXVlcnlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHcmlkVGFibGVXaXRoUm91dGVyXHJcbmV4cG9ydCB7XHJcbiAgICBHcmlkVGFibGVIZWxwZXJcclxufSIsIi8vIGltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xyXG5pbXBvcnQgVGFibGUsIHtHcmlkVGFibGVIZWxwZXJ9IGZyb20gJy4vVGFibGVUc3gnXHJcbmltcG9ydCBGaWx0ZXJJbnB1dCBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvSW5wdXQnXHJcbmltcG9ydCBGaWx0ZXJEcm9wZG93biBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRHJvcGRvd24nXHJcbmltcG9ydCBGaWx0ZXJEYXRlUGlja2VyIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyJ1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRhYmxlIGFzIEdyaWRUYWJsZSxcclxuICAgIEdyaWRUYWJsZUhlbHBlcixcclxuICAgIEZpbHRlcklucHV0LFxyXG4gICAgRmlsdGVyRHJvcGRvd24sXHJcbiAgICBGaWx0ZXJEYXRlUGlja2VyXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAndGhlbWVzL21vZHVsZXMvSTE4bidcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldFN0b3JlIGFzIHNldFN0b3JlQWN0aW9uIH0gZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvU3RvcmUnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCdcclxuaW50ZXJmYWNlIEJhc2VCb29rIHtcclxuICAgIHVzZVNlbGVjdG9yOiBGdW5jdGlvbixcclxuICAgIHJvdXRlcjogYW55LFxyXG4gICAgdDogRnVuY3Rpb24sXHJcbiAgICBzZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICBnZXRTdG9yZTogRnVuY3Rpb24sXHJcbiAgICByZWRpcmVjdDogRnVuY3Rpb24sXHJcbiAgICBnZXREYXRhOiBGdW5jdGlvbixcclxuICAgIG5vdGlmeTogRnVuY3Rpb24sXHJcbiAgICBnZXRBdXRoOiBGdW5jdGlvblxyXG4gICAgZ2V0Q29va2llczogRnVuY3Rpb24sXHJcbiAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnOiBGdW5jdGlvblxyXG59XHJcbmNvbnN0IHVzZUJhc2VIb29rcyA9ICAoeyBsYW5nID0gWydjb21tb24nLCAncGFnZXMnLCAnZXJyb3JzJ10sfSA6IHsgbGFuZz86IHN0cmluZ1tdLCB9ID0ge30pOiBCYXNlQm9vayA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgSTE4biA9IHVzZVRyYW5zbGF0aW9uKGxhbmcpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgc2V0U3RvcmUgPSBhc3luYyAocGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goc2V0U3RvcmVBY3Rpb24ocGF0aCwgdmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0b3JlID0gKHBhdGg6IHN0cmluZyk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBfLmdldChzdGF0ZSwgcGF0aCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVkaXJlY3QgPSAocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcsIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBuZXh0Um91dGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbmV4dFJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogcm91dGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgYXM6IHJvdXRlTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzLCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RpZnkgPSAobWVzc2FnZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nID0gJycsIHR5cGU6IFwic3VjY2Vzc1wiIHwgXCJlcnJvclwiIHwgXCJ3YXJuaW5nXCIgPSBcInN1Y2Nlc3NcIik6IHZvaWQgPT4ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVyYXRpb246IDQgLy9zZWNvbmRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRBdXRoID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hdXRoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29va2llcyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuY29va2llcylcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFB1YmxpY1J1bnRpbWVDb25maWcgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnB1YmxpY1J1bnRpbWVDb25maWcpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VTZWxlY3RvcixcclxuICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgdDogSTE4bi50LFxyXG4gICAgICAgIHNldFN0b3JlLFxyXG4gICAgICAgIGdldFN0b3JlLFxyXG4gICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgIGdldERhdGEsXHJcbiAgICAgICAgbm90aWZ5LFxyXG4gICAgICAgIGdldEF1dGgsXHJcbiAgICAgICAgZ2V0Q29va2llcyxcclxuICAgICAgICBnZXRQdWJsaWNSdW50aW1lQ29uZmlnXHJcbiAgICB9O1xyXG59XHJcblxyXG51c2VCYXNlSG9va3MuZ2V0RGF0YSA9ICAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUJhc2VIb29rcyIsImltcG9ydCB1c2VCYXNlSG9vayBmcm9tICcuL0Jhc2VIb29rcydcclxuaW1wb3J0IHtjaGVja1Blcm1pc3Npb259IGZyb20gJy4uL3V0aWxzL1Blcm1pc3Npb24nXHJcblxyXG4gIFxyXG5jb25zdCBQZXJtaXNzaW9uSG9vayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0QXV0aCB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fVxyXG4gICAgY29uc3QgdXNlclBlcm1pc3Npb25zID0gYXV0aC5wZXJtaXNzaW9ucyB8fCB7fVxyXG5cclxuICAgIGNvbnN0IGdldFVzZXJQZXJtaXNzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VyUGVybWlzc2lvbnNcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgX2NoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrUGVybWlzc2lvbihwZXJtaXNzaW9ucywgdXNlclBlcm1pc3Npb25zKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRVc2VyUGVybWlzc2lvbixcclxuICAgICAgICBjaGVja1Blcm1pc3Npb246IF9jaGVja1Blcm1pc3Npb25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVybWlzc2lvbkhvb2siLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQsIERyYXdlciwgQmFja1RvcCwgUm93LCBDb2wsIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vYWRtaW4vU2lkZWJhclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2FkbWluL0hlYWRlclwiO1xyXG5jb25zdCBUSEVNRSA9IFwibGlnaHRcIjtcclxuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcInRoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYlwiO1xyXG5pbXBvcnQgeyBQbHVzQ2lyY2xlT3V0bGluZWQsIERlbGV0ZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB1c2VCYXNlSG9va3MgZnJvbSBcInRoZW1lcy9ob29rcy9CYXNlSG9va3NcIjtcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSBcInRoZW1lcy9fcm91dGVzLmpzb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuY29uc3QgeyBUaXRsZSwgVGV4dCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNvbnN0IHsgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5jb25zdCBBZG1pbiA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpO1xyXG5cclxuICBjb25zdCBvbkNvbGxhcHNlQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQodmFsdWUpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlU2l6ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyO1xyXG4gICAgc2V0SXNNb2JpbGUobW9iaWxlKTtcclxuICAgIHNldENvbGxhcHNlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gICAgdXBkYXRlU2l6ZSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZVNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzO1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV07XHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKCkgfHwgXCJcIjtcclxuICAvLyBjb25zb2xlLmxvZyhyb3V0ZU5hbWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cHVibGljUnVudGltZUNvbmZpZy5TSVRFX05BTUV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuVElUTEV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkRFU0NSSVBUSU9OfS8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099IC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cIm51cnNpbmctaG9tZS1pY29uXCIgaHJlZj17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfT48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2IGlkPVwiYWRtaW5cIj5cclxuICAgICAgPExheW91dCBoYXNTaWRlcj17dHJ1ZX0+XHJcbiAgICAgICAge2lzTW9iaWxlID8gKFxyXG4gICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGVcclxuICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXN0cm95T25DbG9zZT17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gb25Db2xsYXBzZUNoYW5nZShmYWxzZSl9XHJcbiAgICAgICAgICAgIHZpc2libGU9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICBjb2xsYXBzZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicHJpbWFyeUxheW91dFwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgIDxDb250ZW50IGNsYXNzTmFtZT17YG1haW4tbGF5b3V0ICR7Y29sbGFwc2VkID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY29sbGFwc2VkPXtjb2xsYXBzZWR9IG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9IGRpc2FibGVkU2VhcmNoPXtwcm9wcy5kaXNhYmxlZFNlYXJjaH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWJzXCI+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0udGl0bGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS5kZXNjcmlwdGlvbmBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezl9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYi1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZENydW1iIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICA8Rm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPsKpIHttb21lbnQoKS55ZWFyKCl9IEhhY3RlY2g8L0Zvb3Rlcj5cclxuICAgICAgICAgIDxCYWNrVG9wXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJiYWNrVG9wXCJ9XHJcbiAgICAgICAgICAgIHRhcmdldD17KCkgPT5cclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW1hcnlMYXlvdXRcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG5cclxuKX07XHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIGNyZWF0ZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgTGF5b3V0LCBBdmF0YXIsIEJ1dHRvbiwgSW5wdXQsIFBvcG92ZXIsIFJvdywgQ29sLCBBdXRvQ29tcGxldGUsIEZvcm0sIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCwgTWVudUZvbGRPdXRsaW5lZCwgUG93ZXJvZmZPdXRsaW5lZCwgXHJcbiAgU2V0dGluZ0ZpbGxlZCwgVXNlck91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCBDb25maXJtRGlhbG9nIGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZyc7XHJcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2VcIlxyXG5pbXBvcnQgUGF0aWVudFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlXCJcclxuaW1wb3J0IEJlZFNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL0JlZFNlcnZpY2VcIlxyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuaW1wb3J0IHRvIGZyb20gJ2F3YWl0LXRvLWpzJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dFxyXG5cclxuY29uc3QgQWRtaW5IZWFkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgdCwgbm90aWZ5LCByZWRpcmVjdCwgc2V0U3RvcmUsIGdldEF1dGgsIGdldFN0b3JlLCBnZXRDb29raWVzLCBnZXREYXRhICB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpXHJcbiAgY29uc3QgcGF0aWVudFNlcnZpY2UgPSBuZXcgUGF0aWVudFNlcnZpY2UoKVxyXG4gIGNvbnN0IGJlZFNlcnZpY2UgPSBuZXcgQmVkU2VydmljZSgpXHJcbiAgY29uc3QgW3BhdGllbnRzLCBzZXRQYXRpZW50c10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYmVkcywgc2V0QmVkc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSkgLy8gY2hhbmdlIHBhc3N3b3JkXHJcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoKSB8fCB7fTtcclxuICBjb25zdCBjb29raWVPYmplY3QgPSBnZXRDb29raWVzKClcclxuICBjb25zdCBjb25maXJtUmVmID0gY3JlYXRlUmVmPENvbmZpcm1EaWFsb2c+KClcclxuICBjb25zdCBoYW5kbGVDbGlja01lbnUgPSAoZTogYW55KSA9PiB7IH1cclxuICBjb25zdCByZWRpcmVjdExvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvb2tpZU9iamVjdClcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd0b2tlbicsIHsgcGF0aDogJy8nfSlcclxuICAgIGF3YWl0IGNvb2tpZXMucmVtb3ZlKCd1c2VyJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgcmV0dXJuIGF3YWl0IHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWNvb2tpZU9iamVjdC50b2tlbiB8fCAhY29va2llT2JqZWN0LnVzZXIpIHtcclxuICAgICAgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBcclxuICBsZXQgb3B0aW9uc1BhdGllbnRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zQmVkczogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc1VzZXJzOiBhbnkgPSBbXVxyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VhcmNoID0gYXN5bmMgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGxldCBmaWx0ZXJQYXRpZW50cyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJCZWRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcInJvb21Db2RlXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlclVzZXJzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IFtlcnJVc2VycywgdXNlcnNdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLmluZGV4KGZpbHRlclVzZXJzKSlcclxuICAgIGxldCBkYXRhVXNlcnMgPSBfLmdldCh1c2VycywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVVzZXJzLmxlbmd0aCl7XHJcbiAgICAgIHNldFVzZXJzKGRhdGFVc2VycylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyclBhdGllbnRzLCBwYXRpZW50c106IGFueVtdID0gYXdhaXQgdG8ocGF0aWVudFNlcnZpY2UuaW5kZXgoZmlsdGVyUGF0aWVudHMpKVxyXG4gICAgbGV0IGRhdGFQYXRpZW50cyA9IF8uZ2V0KHBhdGllbnRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhUGF0aWVudHMubGVuZ3RoKXtcclxuICAgICAgc2V0UGF0aWVudHMoZGF0YVBhdGllbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyQmVkcywgYmVkc106IGFueVtdID0gYXdhaXQgdG8oYmVkU2VydmljZS5pbmRleChmaWx0ZXJCZWRzKSlcclxuICAgIGxldCBkYXRhQmVkcyA9IF8uZ2V0KGJlZHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFCZWRzLmxlbmd0aCl7XHJcbiAgICAgIHNldEJlZHMoZGF0YUJlZHMpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgY29uc3Qgb25CbHVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcnMoW10pXHJcbiAgICBzZXRCZWRzKFtdKVxyXG4gICAgc2V0UGF0aWVudHMoW10pXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHJlbmRlckNvbmZpcm1EaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17cmVkaXJlY3RMb2dpbn1cclxuICAgICAgICB0aXRsZT17dCgnc2lnbm91dCcpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2Uuc2lnbm91dENvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSBhc3luYyAoZGF0YTogYW55KTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKVxyXG4gICAgbGV0IHZhbHVlcyA9IHsgaWQ6IGF1dGguaWQsIG9sZFBhc3N3b3JkOiBkYXRhLm9sZFBhc3N3b3JkLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9XHJcblxyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS51c2VyVXBkYXRlUGFzc3dvcmQodmFsdWVzKSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5vdGlmeSh0KGBlcnJvcnM6JHtlcnJvci5jb2RlfWApLCB0KGVycm9yLm1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmRVcGRhdGVkXCIpKVxyXG4gIH1cclxuXHJcbiAgLy92YWxpZGF0ZSBpbnB1dCBwYXNzd29yZFxyXG4gIGNvbnN0IHZhbGlkYXRvclBhc3N3b3JkID0gKHsgZ2V0RmllbGRWYWx1ZSB9OiB7IGdldEZpZWxkVmFsdWU6IEZ1bmN0aW9uIH0pID0+ICh7XHJcbiAgICB2YWxpZGF0b3I6IChydWxlOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QodCgnZm9ybS5yZVBhc3N3b3JkJykpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlckNoYW5nZVBhc3NNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb3JtQ2hhbmdlUGFzc3dvcmRdID0gRm9ybS51c2VGb3JtKClcclxuICAgIHJldHVybiAoPEZvcm0gZm9ybT17Zm9ybUNoYW5nZVBhc3N3b3JkfSBuYW1lPVwiZm9ybUNoYW5nZVBhc3N3b3JkXCJcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIG9sZFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHJlcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIH19XHJcbiAgICAgIG9uRmluaXNoPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHsgZm9ybUNoYW5nZVBhc3N3b3JkLnN1Ym1pdCgpOyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJvbGRQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicmVwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yUGFzc3dvcmRcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJSaWdodENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8UG93ZXJvZmZPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgb25DbGljaz17KCkgPT4geyBpZiAoY29uZmlybVJlZi5jdXJyZW50KSBjb25maXJtUmVmLmN1cnJlbnQuc2hvdygpIH19PjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGljb249ezxTZXR0aW5nRmlsbGVkIHNwaW4gLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiICBvbkNsaWNrPXsoKSA9PiB7IHNldE1vZGFsVmlzaWJsZSh0cnVlKSB9fSA+PC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcblxyXG4gIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IG1lbnVJY29uUHJvcHMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwidHJpZ2dlclwiLFxyXG4gICAgb25DbGljazogKCkgPT4gb25Db2xsYXBzZUNoYW5nZSghY29sbGFwc2VkKVxyXG4gIH1cclxuICBsZXQgaGVhZGVyQ2xhc3MgPSBcImhlYWRlclwiXHJcbiAgaWYgKGNvbGxhcHNlZCkgaGVhZGVyQ2xhc3MgKz0gJyBjb2xsYXBzZWQnXHJcblxyXG4gIGNvbnN0IGFjY291bnRQb3B1cCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzgsIDhdfT5cclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17N30gbGc9ezd9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiXCJ9IHNpemU9ezEwMH0gc2hhcGU9XCJzcXVhcmVcIj5cclxuICAgICAgICAgICAgICAgIHthdXRoLmZ1bGxuYW1lfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgIHsvKiA8QXZhdGFyIHNpemU9ezY0fSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD4gXHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezE3fSBsZz17MTd9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCd1c2VybmFtZScpfTwvYj46IDxpPnthdXRoLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxiPnt0KCdmdWxsbmFtZScpfTwvYj46IDxpPnthdXRoLmZ1bGxuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ2VtYWlsJyl9PC9iPjogPGk+e2F1dGguZW1haWwgPyBhdXRoLmVtYWlsIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdwaG9uZScpfTwvYj46IDxpPnthdXRoLnBob25lID8gYXV0aC5waG9uZSA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJUaXRsZSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9YW50ZFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgbW9yZVxyXG4gICAgICAgIDwvYT4gKi99XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJJdGVtID0gKHRpdGxlOiBzdHJpbmcsIGxpbms6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHRpdGxlLFxyXG4gICAgICBsYWJlbDogKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtsaW5rfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBwYXRpZW50cy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1BhdGllbnRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHBhdGllbnRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIGJlZHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNCZWRzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5yb29tQ29kZX0gLSAke2l0ZW0uYmVkSWR9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BiZWRzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gIHVzZXJzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zVXNlcnMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfSAtICR7aXRlbS51c2VybmFtZX1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YHVzZXJzLyR7aXRlbS5pZH0vZWRpdGB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gWGVtIGNoaSB0aeG6v3QgPC9hPlxyXG4gICAgKSlcclxuICB9KVxyXG4gXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ3BhdGllbnQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNQYXRpZW50cyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdiZWQnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNCZWRzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnZW1wbG95ZWUnKSksXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNVc2Vyc1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwMHB4XCIsIGRpc3BsYXk6ICdpbmxpbmUnIH19PlxyXG4gICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lPVwiY2VydGFpbi1jYXRlZ29yeS1zZWFyY2gtZHJvcGRvd25cIlxyXG4gICAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPXszNTB9IC8vIHdpZHRoIGRyb3Bkb3duXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBhbnkpID0+IG9uQ2hhbmdlU2VhcmNoKHZhbHVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gb25CbHVyU2VhcmNoKCl9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzUwIH19IC8vIHdpZHRoIGlucHV0IFNlYXJjaFxyXG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgIGRpc2FibGVkID0ge3Byb3BzLmRpc2FibGVkU2VhcmNoPyB0cnVlIDogZmFsc2UgfSAvLyBkaXNhYmxlIGlucHV0IHNlYXJjaFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5TZWFyY2ggc2l6ZT1cImxhcmdlXCIgcGxhY2Vob2xkZXI9e3QoXCJzZWFyY2hcIil9IC8+XHJcbiAgICAgICAgPC9BdXRvQ29tcGxldGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPEhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2hlYWRlckNsYXNzfT5cclxuICAgICAge2NvbGxhcHNlZCBcclxuICAgICAgPyA8TWVudVVuZm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz4gXHJcbiAgICAgIDogPE1lbnVGb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPn1cclxuICAgICAgXHJcbiAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPXt0KCdwZXJzb25hbEluZm8nKX0gY29udGVudD17YWNjb3VudFBvcHVwKCl9PlxyXG4gICAgICAgIDxCdXR0b24gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+XHJcbiAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgXHJcbiAgICAgIHsvKiA8QnV0dG9uIGljb249ezxCZWxsT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPiAqL31cclxuICAgICAgey8qIDxTZWFyY2hcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlTDrG0ga2nhur9tLi4uXCJcclxuICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1zZWFyY2hcIlxyXG4gICAgICAvPiAqL31cclxuICAgICAge3JlbmRlclNlYXJjaCgpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHRDb250YWluZXInPntyZW5kZXJSaWdodENvbnRlbnQoKX08L2Rpdj5cclxuXHJcbiAgICA8L0hlYWRlcj5cclxuICAgIHtyZW5kZXJDb25maXJtRGlhbG9nKCl9XHJcbiAgICB7cmVuZGVyQ2hhbmdlUGFzc01vZGFsKCl9XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5IZWFkZXIiLCJcclxuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5pbXBvcnQgc2lkZWJhciBmcm9tICd0aGVtZXMvc2lkZWJhcidcclxuaW1wb3J0IHsgZ2V0U2lkZWJhclNlbGVjdGVkcyB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF9yb3V0ZXMgZnJvbSAndGhlbWVzL19yb3V0ZXMuanNvbidcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tICd0aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2snXHJcblxyXG5jb25zdCBNZW51Q29tcG9uZW50ID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICBjb25zdCB7Y2hlY2tQZXJtaXNzaW9ufSA9IHVzZVBlcm1pc3Npb25Ib29rKClcclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgZm9yIChsZXQgcm91dGVOYW1lIGluIHJvdXRlRGF0YSkge1xyXG4gICAgICBsZXQgcm91dGVFbGVtZW50ID0gcm91dGVEYXRhW3JvdXRlTmFtZV1cclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlTWVudXMgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiZ3JvdXBcIikge1xyXG4gICAgICAgICAgbGV0IGNoaWxkcmVuID0gZ2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKVxyXG4gICAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cFxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pfVxyXG4gICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZighY2hlY2tQZXJtaXNzaW9uKGl0ZW0ucGVybWlzc2lvbnMpKSByZXR1cm5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TWVudS5JdGVtIGtleT17aXRlbS5yb3V0ZU5hbWV9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KGl0ZW0ucm91dGVOYW1lKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgKTtcclxuICAgIH0pLmZpbHRlcigobWVudTphbnkpID0+IG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aGVtZSwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRSZWFkeSwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcclxuICBjb25zdCBjdXJyZW50Um91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICBjb25zdCBicmVhZGN1bXMgPSBnZXRTaWRlYmFyU2VsZWN0ZWRzKGN1cnJlbnRSb3V0ZU5hbWUpXHJcbiAgbGV0IHJvdXRlck5hbWVzID0gYnJlYWRjdW1zLm1hcCgoYnJlYWRjdW06IGFueSkgPT4gYnJlYWRjdW0ucm91dGVOYW1lKVxyXG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IHJvdXRlck5hbWVzLnBvcCgpXHJcbiAgcmV0dXJuIDxNZW51XHJcbiAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgIHRoZW1lPXt0aGVtZX1cclxuICAgIGRlZmF1bHRPcGVuS2V5cz17cm91dGVyTmFtZXN9XHJcbiAgICBzZWxlY3RlZEtleXM9e3NlbGVjdGVkS2V5c31cclxuICAgIG9uQ2xpY2s9e1xyXG4gICAgICBpc01vYmlsZVxyXG4gICAgICAgID8gKCkgPT4ge1xyXG4gICAgICAgICAgb25Db2xsYXBzZUNoYW5nZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gICAgey4uLm90aGVyUHJvcHN9XHJcbiAgPlxyXG4gICAge2dlbmVyYXRlTWVudXMoc2lkZWJhcil9XHJcbiAgPC9NZW51PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEF2YXRhciwgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuZnVuY3Rpb24gbnVtRm9ybWF0dGVyKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZihudW0gPiA5OTkgJiYgbnVtIDwgMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMCkudG9GaXhlZCgxKSArICdLJzsgLy8gY29udmVydCB0byBLIGZvciBudW1iZXIgZnJvbSA+IDEwMDAgPCAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPiAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwMDAwKS50b0ZpeGVkKDEpICsgJ00nOyAvLyBjb252ZXJ0IHRvIE0gZm9yIG51bWJlciBmcm9tID4gMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtIDwgOTAwKXtcclxuICAgICAgICByZXR1cm4gbnVtOyAvLyBpZiB2YWx1ZSA8IDEwMDAsIG5vdGhpbmcgdG8gZG9cclxuICAgIH1cclxufVxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRDb29raWVzLCByZWRpcmVjdCwgdCwgZ2V0RGF0YSwgZ2V0QXV0aCwgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2soKVxyXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuICAgIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKClcclxuICAgIGNvbnN0IHByb2ZpbGVJbmZvID0ge1xyXG4gICAgICAgIGNvbXBhbnlMb2dvOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxPR08sXHJcbiAgICAgICAgZ3JvdXBOYW1lOiBcIk5ow6JuIHZpw6puXCIsXHJcbiAgICAgICAgdXNlckZ1bGxuYW1lOiBcIkRpw6ptIFRo4buLIFF14buzbmhcIixcclxuICAgICAgICBjb21wYW55TmFtZTogXCJWaeG7h24gZMaw4buhbmcgbMOjbyBIxrDhu5tuZyBExrDGoW5nXCIsXHJcbiAgICAgICAgY29tcGFueUFkZHJlc3M6IFwiU+G7kSAzOSwgbmfDtSA3NCwgxJDGsOG7nW5nIER1eSBUw6JuLCBRdeG6rW4gQ+G6p3UgR2nhuqV5LCBIw6AgTuG7mWlcIixcclxuICAgICAgICB0b2RheToge30sXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXByb2ZpbGVcIj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs4MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gc3JjPXtwcm9maWxlSW5mby5jb21wYW55TG9nb30gY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtY29tcGFueU5hbWVcIj57cHJvZmlsZUluZm8uY29tcGFueU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYWRkcmVzc1wiPntwcm9maWxlSW5mby5jb21wYW55QWRkcmVzc308L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlckluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLW5hbWVcIj57cHJvZmlsZUluZm8udXNlckZ1bGxuYW1lfTwvc3Bhbj4gLSA8c3BhbiBjbGFzc05hbWU9XCJwcm9maWxlLWdyb3VwTmFtZVwiPntwcm9maWxlSW5mby5ncm91cE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICBcclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsyMn0gb2Zmc2V0PXsxfT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cInByb2ZpbGUtZW5kTGluZVwiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSdcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCwgVXNlck91dGxpbmVkLCBIb21lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMnO1xyXG5jb25zdCBUSEVNRSA9ICdsaWdodCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGUnXHJcblxyXG5jb25zdCBzaWRlQmFyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgY29sbGFwc2VkLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdGhlbWUgfSA9IHByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgICB3aWR0aD17MjU2fVxyXG4gICAgICAgICAgICBjb2xsYXBzZWRXaWR0aD17MH1cclxuICAgICAgICAgICAgdHJpZ2dlcj17bnVsbH1cclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgdGhlbWU9e1RIRU1FfVxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxyXG4gICAgICAgICAgICBjb2xsYXBzZWQ9e2NvbGxhcHNlZH1cclxuICAgICAgICAgICAgLy9vbkJyZWFrcG9pbnQ9eyFpc01vYmlsZSAmJiBvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfSAvPlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVCYXI7XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChkZWZhdWx0Q29va2llKSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGRlZmF1bHRDb29raWUpXHJcbiAgcmV0dXJuIGNvb2tpZXNcclxufSIsImNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3Qge3B1YmxpY1J1bnRpbWVDb25maWd9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCBOZXh0STE4TmV4dEluc3RhbmNlID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TlM6ICdjb21tb24nLFxyXG4gIGRlZmF1bHRMYW5ndWFnZTogcHVibGljUnVudGltZUNvbmZpZy5MQU5HLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJ10sXHJcbiAgbG9jYWxlUGF0aDogXCJsYW5nXCIsXHJcbiAgYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZSxcclxuICBzZXJ2ZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2VcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTmV4dEkxOE5leHRJbnN0YW5jZSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcbmltcG9ydCBSZXF1ZXN0RXhjZXB0aW9uIGZyb20gJy4vUmVxdWVzdEV4Y2VwdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGNvb2tpZXNTdHJpbmcpIHtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzU3RyaW5nXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoY29va2llc1N0cmluZykuZ2V0KCd0b2tlbicpXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHRoaXMuaGFuZGxlR2xvYmFsLmJpbmQodGhpcyksIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3IuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWwocmVzcG9uc2UpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKSB7XHJcbiAgICAgIHJlc3BvbnNlID0gdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsRXJyb3IoZXJyb3IpIHtcclxuICAgIGlmICh0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2spIHtcclxuICAgICAgZXJyb3IgPSB0aGlzLmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2soZXJyb3IpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JcclxuICB9XHJcblxyXG4gIGdldEFwcFVybCgpIHtcclxuICAgIC8vcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9cIlxyXG4gICAgcmV0dXJuIHB1YmxpY1J1bnRpbWVDb25maWcuQVBJX0hPU1RcclxuICB9XHJcbiAgYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KSB7XHJcblxyXG4gIH1cclxuICBhZnRlclJlcXVlc3QocmVzdWx0KSB7XHJcbiAgICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oLTEsIFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiKVxyXG4gICAgY29uc3QgY29kZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmNvZGVcIiwgLTEpXHJcbiAgICBjb25zdCBtZXNzYWdlID0gXy5nZXQocmVzdWx0LCBcImRhdGEubWVzc2FnZVwiLCBcIlwiKVxyXG4gICAgY29uc3QgZGF0YSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLmRhdGFcIilcclxuICAgIGlmIChjb2RlICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbihjb2RlLCBtZXNzYWdlLCBkYXRhKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldCh1cmwsIGRhdGEgPSB7fSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwdXQodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBkZWxldGUodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxufSIsImNsYXNzIFJlcXVlc3RFeGNlcHRpb257XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU9XCJcIiwgbWVzc2FnZSA9IFwiXCIsIGRhdGEpIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0RXhjZXB0aW9uO1xyXG4iLCJjb25zdCBVcmxQYXR0ZXJuID0gcmVxdWlyZSgndXJsLXBhdHRlcm4nKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKCdxdWVyeS1zdHJpbmcnKTtcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi9fcm91dGVzJ1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmNsYXNzIFJvdXRlIHtcclxuICAgIHN0YXRpYyBtYWtlVXJsKG5hbWUsIHBhcmFtcykge1xyXG4gICAgICAgIGxldCByb3V0ZUluZm8gPSByb3V0ZUNvbmZpZ1tuYW1lXVxyXG4gICAgICAgIGlmICghcm91dGVJbmZvKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUm91dGUgJHtuYW1lfSBub3QgZm91bmRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhdHRlcm4gPSBuZXcgVXJsUGF0dGVybihyb3V0ZUluZm8udXJsKTtcclxuICAgICAgICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBhc1VybCA9IHBhdHRlcm4uc3RyaW5naWZ5KHBhcmFtcykgLy9saW5rIGhp4buDbiB0aOG7iyB0csOqbiB0csOsbmggZHV54buHdFxyXG4gICAgICAgICAgICBsZXQgaHJlZiA9IGFzVXJsIC8vbGluayB0aOG6rXQgdHJvbmcgL3BhZ2VzXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUluZm8uYWN0aW9uLnN1YnN0cigwLCA2KSA9PT0gXCJwYWdlcy9cIikge1xyXG4gICAgICAgICAgICAgICAgaHJlZiA9IHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDUpXHJcbiAgICAgICAgICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgPyR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGAmJHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzOiBhc1VybCxcclxuICAgICAgICAgICAgICAgIGhyZWY6IGhyZWZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUXVlcnkocXVlcnksIHNoYWxsb3cgPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHJldHVybjtcclxuICAgICAgICBsZXQgYXNQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgbGV0IG9sZFF1ZXJ5ID0gUm91dGVyLnJvdXRlci5xdWVyeVxyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHtcclxuICAgICAgICAgICAgLi4ub2xkUXVlcnksXHJcbiAgICAgICAgICAgIC4uLnF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShxdWVyeU9iaikgPT0gSlNPTi5zdHJpbmdpZnkob2xkUXVlcnkpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nQXBwZW5kID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHF1ZXJ5T2JqKVxyXG4gICAgICAgICAgICAvKiBpZihxdWVyeVN0cmluZ0FwcGVuZCl7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBSb3V0ZXIucm91dGVyLnF1ZXJ5ID0gcXVlcnlPYmpcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IFJvdXRlci5yb3V0ZXIucGF0aG5hbWUsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9ialxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gKHJvdXRlTmFtZSwgcm91dGVzLCByb3V0ZVBhdGhzID0gW10pID0+IHtcclxuICAgICAgICBsZXQgc2lkZWJhclNlbGVjdGVkTmFtZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdLnNpZGViYXIgOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXJvdXRlcykgcm91dGVzID0gc2lkZWJhclxyXG4gICAgICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgICAgICBpZiAocm91dGUucm91dGVOYW1lID09PSBzaWRlYmFyU2VsZWN0ZWROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZVBhdGhzLnB1c2gocm91dGUpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlUGF0aHNcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0U2lkZWJhclNlbGVjdGVkcyhzaWRlYmFyU2VsZWN0ZWROYW1lLCByb3V0ZS5jaGlsZHJlbiwgWy4uLnJvdXRlUGF0aHMsIHJvdXRlXSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCkgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QnJlYWRjcnVtYnMgPSAocm91dGVOYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICByZXN1bHQudW5zaGlmdChyb3V0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocm91dGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbLi4udGhpcy5nZXRCcmVhZGNydW1icyhyb3V0ZS5wYXJlbnQpLCAuLi5yZXN1bHRdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCByb3V0ZSA9IFJvdXRlLm1ha2VVcmxcclxuY29uc3QgYWRkUXVlcnkgPSBSb3V0ZS5hZGRRdWVyeVxyXG5jb25zdCBnZXRCcmVhZGNydW1icyA9IFJvdXRlLmdldEJyZWFkY3J1bWJzXHJcbmNvbnN0IGdldFNpZGViYXJTZWxlY3RlZHMgPSBSb3V0ZS5nZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlO1xyXG5leHBvcnQge1xyXG4gICAgcm91dGUsXHJcbiAgICBhZGRRdWVyeSxcclxuICAgIGdldEJyZWFkY3J1bWJzLFxyXG4gICAgZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICd0aGVtZXMvbW9kdWxlcy9SZXF1ZXN0J1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuY2xhc3MgQmFzZUFwaXtcclxuICBjb29raWVzOiBDb29raWVzXHJcbiAgUmVxdWVzdDogUmVxdWVzdFxyXG4gIG5hbWU6IHN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCkge1xyXG4gICAgY29uc3QgY29va2llc09iaiA9IGNvbnRleHQgPyBuZXh0Q29va2llKGNvbnRleHQpOiB7fVxyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llcyhjb29raWVzT2JqKTtcclxuICAgIHRoaXMuUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvb2tpZXNPYmopXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUNhbGxiYWNrXHJcbiAgICB0aGlzLlJlcXVlc3QuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFja1xyXG4gICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICB9XHJcbiAgZ2xvYmFsSGFuZGxlQ2FsbGJhY2sgPSAocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgbGV0IHN0YXR1cyA9IF8uZ2V0KGVycm9yLCBcInJlc3BvbnNlLnN0YXR1c1wiLCAtMSk7XHJcbiAgICBpZihzdGF0dXMgPT09IC0xKXtcclxuICAgICAgLy9ub3RpZnkoXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIsIFwiZXJyb3JcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ0b2tlblwiKVxyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidXNlclwiKVxyXG4gICAgICBpZiAod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvbG9naW5cIil7XHJcbiAgICAgICAgLy9ub3RpZnkoXCJMb2dpbiBzZXNzaW9uIGV4cGlyZWQhXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4ubG9naW5cIilcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIC8vbG9naW4gc2NyZWVuLiBraMO0bmcgbMOgbSBnw6wgY+G6oy5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICByb3V0ZShyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgcmV0dXJuIHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgfVxyXG5cclxuICByZWRpcmVjdChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk/OiBhbnkpe1xyXG4gICAgbGV0IG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICBSb3V0ZXIucHVzaChuZXh0Um91dGUuaHJlZiwgbmV4dFJvdXRlLmFzKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5kZXgoZGF0YT86IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmluZGV4YCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnN0b3JlYCxkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGV0YWlsKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRldGFpbGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGVkaXQoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlKGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LmRlbGV0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZGVsZXRlKHVybCwgZGF0YSlcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQXBpIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIEJlZCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAnYmVkcyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgSGVhbHRoU3RhdHVzIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdoZWFsdGhTdGF0dXNlcyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhTdGF0dXMiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgUGF0aWVudCBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAncGF0aWVudHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2Vycyc7IC8va+G6vyB0aOG7q2EgQ1JVRCB04burIHRo4bqxbmcgY2hhXHJcbiAgfVxyXG4gIGFzeW5jIGxvZ2luKHsgZGF0YSB9OiB7ZGF0YToge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9fSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShcImFwaS5sb2dpblwiKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKSB8fCB7fVxyXG4gICAgICAvL3N1Y2Nlc3NcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3Rva2VuJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ0b2tlblwiLCB1bmRlZmluZWQpLCB7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jb29raWVzLnNldCgndXNlcicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidXNlclwiLCB7fSkse1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIilcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgdXNlclVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51c2VyVXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHNlYXJjaChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zZWFyY2hgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIiwiaW1wb3J0IHtcclxuICBIb21lT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFVzZXJncm91cEFkZE91dGxpbmVkLFxyXG4gIFRlYW1PdXRsaW5lZCxcclxuICBTY2hlZHVsZU91dGxpbmVkLFxyXG4gIFNvbHV0aW9uT3V0bGluZWQsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lZCxcclxuICBWZXJpZmllZE91dGxpbmVkLFxyXG4gIEluc2VydFJvd1JpZ2h0T3V0bGluZWQsXHJcbiAgTGF5b3V0T3V0bGluZWQsXHJcbiAgQ2FycnlPdXRPdXRsaW5lZCxcclxuICBMaW5lQ2hhcnRPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhciA9IFtcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SG9tZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnJvb21zLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SW5zZXJ0Um93UmlnaHRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5iZWRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8TGF5b3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucGF0aWVudHMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYXNzaWdubWVudFwiLFxyXG4gICAgaWNvbjogPFNjaGVkdWxlT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLm51cnNlQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8Q2FsZW5kYXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hZG1pbnNJbmRleFwiLFxyXG4gICAgaWNvbjogPFRlYW1PdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJHcm91cHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VXNlcmdyb3VwQWRkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlclBlcm1pc3Npb25zLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFZlcmlmaWVkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNcIixcclxuICAgIGljb246IDxDYXJyeU91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljcy5oZWFsdGhTdGF0dXNcIixcclxuICAgICAgICBpY29uOiA8TGluZUNoYXJ0T3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xyXG4iLCJpbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vX3JvdXRlcy5qc29uJ1xyXG5cclxuY29uc3QgY2hhclRvTnVtID0geyBDOiA4LCBSOiA0LCBVOiAyLCBEOiAxIH1cclxuY29uc3QgY3J1ZFRvRGVjID0gKHRleHQ6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5yZWR1Y2UoKHRvdGFsOiBudW1iZXIsIGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJykgPT4gdG90YWwgKyBjaGFyVG9OdW1bY2hhcl0sIDApXHJcblxyXG59XHJcbmNvbnN0IGRlY1RvQ3J1ZCA9IChkZWM6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnXHJcbiAgICBmb3IgKGNoYXIgaW4gY2hhclRvTnVtKSB7XHJcbiAgICAgICAgaWYgKChkZWMgJiBjaGFyVG9OdW1bY2hhcl0pID09IGNoYXJUb051bVtjaGFyXSkgcmVzdWx0ICs9IGNoYXJcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaGFzUGVybWlzc2lvbiA9IChyZXF1aXJlUGVybWlzc2lvbjogbnVtYmVyLCB1c2VyUGVybWlzc2lvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHVzZXJQZXJtaXNzaW9uICYgcmVxdWlyZVBlcm1pc3Npb24pID09PSByZXF1aXJlUGVybWlzc2lvblxyXG4gIH1cclxuXHJcbmNvbnN0IGNoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55LCB1c2VyUGVybWlzc2lvbnM6IGFueSwgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmKCFwZXJtaXNzaW9ucykgcmV0dXJuIHRydWVcclxuICAgIGxldCBwZXJtaXNzaW9uQXJyYXkgPSBbXVxyXG4gICAgZm9yIChsZXQgcGVybWlzc2lvbiBpbiBwZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVQZXJtaXNzaW9uID0gY3J1ZFRvRGVjKHBlcm1pc3Npb25zW3Blcm1pc3Npb25dKTtcclxuICAgICAgICBjb25zdCByb290UGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1tcInJvb3RcIl0gfHwgMFxyXG4gICAgICAgIGxldCB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1twZXJtaXNzaW9uXSB8fCAwXHJcbiAgICAgICAgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbiB8IHJvb3RQZXJtaXNzaW9uXHJcbiAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24ocmVxdWlyZVBlcm1pc3Npb24sIHVzZXJQZXJtaXNzaW9uKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBwZXJtaXNzaW9uQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24sXHJcbiAgICAgICAgICAgIHJlcXVpcmVQZXJtaXNzaW9uOiBkZWNUb0NydWQocmVxdWlyZVBlcm1pc3Npb24pLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbjogZGVjVG9DcnVkKHVzZXJQZXJtaXNzaW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoIXNob3dFcnJvcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbkFycmF5XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2hlY2tQZXJtaXNzaW9uLFxyXG4gICAgaGFzUGVybWlzc2lvbixcclxuICAgIGNydWRUb0RlYyxcclxuICAgIGRlY1RvQ3J1ZFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdhaXQtdG8tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtYmFzZTY0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==