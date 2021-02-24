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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./pages/admin/rooms/index.tsx":
/*!*************************************!*\
  !*** ./pages/admin/rooms/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_RoomService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/RoomService */ "./themes/services/api/RoomService.ts");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! await-to-js */ "await-to-js");
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(await_to_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! themes/hooks/BaseHooks */ "./themes/hooks/BaseHooks.tsx");
/* harmony import */ var themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! themes/hooks/PermissionHook */ "./themes/hooks/PermissionHook.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;











const Index = ({
  rooms,
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
  const roomService = new themes_services_api_RoomService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    "admin.rooms": "C"
  });
  const deletePer = checkPermission({
    "admin.rooms": "D"
  });
  const columns = [{
    title: t("code"),
    dataIndex: 'code',
    key: 'code',
    width: '20%',
    sorter: true,
    filterable: true,
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.rooms.edit', {
        id: record.id
      })
    }, record.code)
  }, {
    title: t('rooms.bedNumber'),
    dataIndex: 'bedNumber',
    key: 'bedNumber',
    width: '20%',
    sorter: true
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
    let [error, rooms] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(roomService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return rooms;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(roomService.delete({
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
    onClick: () => redirect("frontend.admin.rooms.create"),
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
    data: rooms,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let roomService = new themes_services_api_RoomService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, rooms] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(roomService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    rooms: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(rooms, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(rooms, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "admin.rooms": "R"
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

/***/ 8:
/*!*******************************************!*\
  !*** multi ./pages/admin/rooms/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\rooms\index.tsx */"./pages/admin/rooms/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vcm9vbXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0JyZWFkY3VtYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9TdG9yZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9EYXRlUGlja2VyLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9TZWFyY2hDb21wb25lbnRzL1JhZGlvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvVGFibGVUc3gudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvQmFzZUhvb2tzLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvaG9va3MvUGVybWlzc2lvbkhvb2sudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL0FkbWluLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL01lbnUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1Byb2ZpbGUudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9sYXlvdXRzL2FkbWluL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvSTE4bi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL1JlcXVlc3RFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmFzZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NlcnZpY2VzL2FwaS9Sb29tU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy91dGlscy9QZXJtaXNzaW9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3YWl0LXRvLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1iYXNlNjRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhpZ2hsaWdodC13b3Jkc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuaXZlcnNhbC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtcGF0dGVyblwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJyb29tcyIsInRvdGFsIiwidCIsInJlZGlyZWN0Iiwic2V0U3RvcmUiLCJnZXRBdXRoIiwiZ2V0U3RvcmUiLCJ1c2VCYXNlSG9vayIsImhpZGRlbkRlbGV0ZUJ0biIsInNldEhpZGRlbkRlbGV0ZUJ0biIsInVzZVN0YXRlIiwic2VsZWN0ZWRJZHMiLCJzZXRTZWxlY3RlZElkcyIsInJvb21TZXJ2aWNlIiwiUm9vbVNlcnZpY2UiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwidGFibGVSZWYiLCJjaGVja1Blcm1pc3Npb24iLCJ1c2VQZXJtaXNzaW9uSG9vayIsImNyZWF0ZVBlciIsImRlbGV0ZVBlciIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsIndpZHRoIiwic29ydGVyIiwiZmlsdGVyYWJsZSIsInRleHQiLCJyZWNvcmQiLCJpZCIsImNvZGUiLCJvbkNoYW5nZVNlbGVjdGlvbiIsImxlbmd0aCIsImZldGNoRGF0YSIsInZhbHVlcyIsInRvIiwiaW5kZXgiLCJvbkRlbGV0ZSIsImRlbGV0ZSIsImlkcyIsImN1cnJlbnQiLCJyZW5kZXJEZWxldGVEaWFsb2ciLCJzaG93Iiwic2VsZWN0ZWRSb3dLZXlzIiwib25DaGFuZ2UiLCJkZWZhdWx0T3B0aW9ucyIsImZpbHRlcnMiLCJzb3J0aW5nIiwiR3JpZFRhYmxlSGVscGVyIiwiZ2V0T3B0aW9ucyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsImdldERhdGEiLCJkZWZhdWx0UXVlcnkiLCJtYWtlUXVlcnkiLCJwZXJtaXNzaW9ucyIsImJyZWFkQ3J1bWJDb21wb25lbnQiLCJsYW5nIiwiZ2V0Um91dGVOYW1lIiwicm91dGVQYXRoIiwicm91dGVEYXRhIiwiX3JvdXRlcyIsInJvdXRlTmFtZSIsInJvdXRlRWxlbWVudCIsImFjdGlvbiIsInN1YnN0ciIsImJyZWFkQ3VtYnMiLCJyb3V0ZXMiLCJnZXRCcmVhZGNydW1icyIsInVuc2hpZnQiLCJsaW5rUHJvcHMiLCJtYWtlVXJsIiwiY29uZmlybSIsIk1vZGFsIiwiQ29uZmlybURpYWxvZyIsIm9uQ2FuY2VsIiwic3RhdGUiLCJvblN1Ym1pdCIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsIm9uT2siLCJyZWR1Y2VyIiwidHlwZSIsIl8iLCJwYXlsb2FkIiwibWFrZVN0b3JlIiwiaW5pdFN0YXRlIiwiZGV2VG9vbEV4dGVuc2lvbnMiLCJpc1NlcnZlciIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJ1bmRlZmluZWQiLCJjcmVhdGVTdG9yZSIsIlJhbmdlUGlja2VyIiwiRGF0ZVBpY2tlciIsIkZpbHRlckRhdGVQaWNrZXIiLCJkYXRlU3RyaW5ncyIsImNvbHVtbiIsImRhdGVzIiwibW9tZW50IiwiZ2V0RGF0ZXMiLCJvcGVyYXRvciIsInN0YXJ0T2YiLCJhZGQiLCJ0b0lTT1N0cmluZyIsImVuZE9mIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlcmVkVmFsdWUiLCJvdGhlclByb3BzIiwicGFkZGluZyIsInJlZklucHV0IiwibWFyZ2luQm90dG9tIiwiY2xlYXIiLCJPcHRpb24iLCJTZWxlY3QiLCJJbnB1dEdyb3VwIiwiSW5wdXQiLCJHcm91cCIsIkZpbHRlckRyb3Bkb3duIiwicmVuZGVyT3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImxhYmVsIiwic2VhcmNoQnRuVGV4dCIsImNsZWFyQnRuVGV4dCIsImRpc3BsYXkiLCJGaWx0ZXJJbnB1dCIsInZpc2libGVTZWFyY2giLCJpbnB1dCIsInNlbGVjdCIsInJlbmRlck9wZXJhdG9yIiwibWVzc2FnZXMiLCJoaWRlT3BlcmF0b3IiLCJvcGVyYXRvcnMiLCJkZWZhdWx0T3BlcmF0b3IiLCJJbnB1dE51bWJlciIsIlJhZGlvIiwiRmlsdGVyQ2hlY2siLCJjaGVja2VkIiwiZ2V0Q2hlY2tlZCIsIkdyaWRUYWJsZSIsInNvcnQiLCJmaW5kIiwiaXRlbSIsImRpcmVjdGlvbiIsInNvcnRPcmRlciIsImZpbHRlciIsImdldENvbHVtblNlYXJjaFByb3BzIiwiZmlsdGVyRGF0ZSIsImZpbHRlckNoZWNrIiwiZmlsdGVyRHJvcGRvd24iLCJzZXRTZWxlY3RlZEtleXMiLCJjb25maXJtRm5jIiwiY3VycmVudENvbHVtbiIsImMiLCJyZW5kZXJGaWx0ZXIiLCJmaWx0ZXJJY29uIiwiZmlsdGVyZWQiLCJjb2xvciIsIm9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwidmlzaWJsZSIsInBhZ2VTaXplIiwicGFnaW5hdGlvbiIsImhhbmRsZVRhYmxlQ2hhbmdlIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJzZXRGaWx0ZXJzVG9Db2x1bW5zIiwic2V0U29ydGVyVG9Db2x1bW5zIiwic2V0UGFnaW5hdGlvbiIsInBvc2l0aW9uIiwic2hvd1NpemVDaGFuZ2VyIiwicGFnZVNpemVPcHRpb25zIiwiYm9yZGVyZWQiLCJzaXplIiwic2hvd0hlYWRlciIsImhhc0RhdGEiLCJsb2FkaW5nIiwiYmluZCIsImluaXQiLCJnZXREYXRhRnJvbVF1ZXJ5IiwiZGVmYXVsdE9wdGlvblRvQ29sdW1ucyIsImNvbXBvbmVudERpZE1vdW50IiwicXVlcnlPYmoiLCJmIiwicyIsInBzIiwiQmFzZTY0IiwiZW5jb2RlIiwiYnVpbGRGZXRjaERhdGEiLCJxdWVyeU9wdGlvbnMiLCJhZGRRdWVyeSIsInBhcnNlIiwiRXJyb3IiLCJxdWVyeU91dCIsImtleXMiLCJlbGxpcHNpcyIsIngiLCJzY3JvbGxUb0ZpcnN0Um93T25DaGFuZ2UiLCJyb3ciLCJnZXRQYWdpbmF0aW9uIiwiR3JpZFRhYmxlV2l0aFJvdXRlciIsImZvcndhcmRSZWYiLCJ1c2VSb3V0ZXIiLCJUYWJsZSIsInVzZUJhc2VIb29rcyIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRTdG9yZUFjdGlvbiIsInVzZVNlbGVjdG9yIiwibmV4dFJvdXRlIiwib2JqIiwiZGVmYXVsdFZhbHVlIiwiZGVzY3JpcHRpb24iLCJub3RpZmljYXRpb24iLCJkdXJhdGlvbiIsImF1dGgiLCJnZXRDb29raWVzIiwiY29va2llcyIsImdldFB1YmxpY1J1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiUGVybWlzc2lvbkhvb2siLCJ1c2VyUGVybWlzc2lvbnMiLCJnZXRVc2VyUGVybWlzc2lvbiIsIl9jaGVja1Blcm1pc3Npb24iLCJUSEVNRSIsIlRpdGxlIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwiQWRtaW4iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwib25Db2xsYXBzZUNoYW5nZSIsImxvZyIsInVwZGF0ZVNpemUiLCJtb2JpbGUiLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTSVRFX05BTUUiLCJUSVRMRSIsIkRFU0NSSVBUSU9OIiwiTE9HTyIsImhlaWdodCIsImRpc2FibGVkU2VhcmNoIiwieWVhciIsInF1ZXJ5U2VsZWN0b3IiLCJIZWFkZXIiLCJTdWJNZW51IiwiTWVudSIsIlNlYXJjaCIsIkFkbWluSGVhZGVyIiwidXNlclNlcnZpY2UiLCJVc2VyU2VydmljZSIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJjb29raWVPYmplY3QiLCJoYW5kbGVDbGlja01lbnUiLCJyZWRpcmVjdExvZ2luIiwiQ29va2llcyIsInJlbW92ZSIsInRva2VuIiwidXNlciIsIm9wdGlvbnNQYXRpZW50cyIsIm9wdGlvbnNCZWRzIiwib3B0aW9uc1VzZXJzIiwib25DaGFuZ2VTZWFyY2giLCJmaWx0ZXJQYXRpZW50cyIsImZpbHRlckJlZHMiLCJmaWx0ZXJVc2VycyIsImVyclVzZXJzIiwiZGF0YVVzZXJzIiwiZXJyUGF0aWVudHMiLCJkYXRhUGF0aWVudHMiLCJlcnJCZWRzIiwiZGF0YUJlZHMiLCJvbkJsdXJTZWFyY2giLCJyZW5kZXJDb25maXJtRGlhbG9nIiwib25DaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJ1c2VyVXBkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0b3JQYXNzd29yZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVuZGVyQ2hhbmdlUGFzc01vZGFsIiwiZm9ybUNoYW5nZVBhc3N3b3JkIiwiRm9ybSIsInVzZUZvcm0iLCJyZXBhc3N3b3JkIiwic3VibWl0Iiwic3BhbiIsInJlcXVpcmVkIiwicmVuZGVyUmlnaHRDb250ZW50IiwibWVudUljb25Qcm9wcyIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzIiwiYWNjb3VudFBvcHVwIiwiZnVsbG5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJyZW5kZXJUaXRsZSIsInJlbmRlckl0ZW0iLCJsaW5rIiwianVzdGlmeUNvbnRlbnQiLCJmbG9hdCIsInJvb21Db2RlIiwiYmVkSWQiLCJyZW5kZXJTZWFyY2giLCJNZW51Q29tcG9uZW50IiwiZ2VuZXJhdGVNZW51cyIsImljb24iLCJtZW51IiwidGhlbWUiLCJ0UmVhZHkiLCJjdXJyZW50Um91dGVOYW1lIiwiYnJlYWRjdW1zIiwiZ2V0U2lkZWJhclNlbGVjdGVkcyIsInJvdXRlck5hbWVzIiwiYnJlYWRjdW0iLCJzZWxlY3RlZEtleXMiLCJwb3AiLCJzaWRlYmFyIiwibnVtRm9ybWF0dGVyIiwibnVtIiwidG9GaXhlZCIsIlByb2ZpbGUiLCJwcm9maWxlSW5mbyIsImNvbXBhbnlMb2dvIiwiZ3JvdXBOYW1lIiwidXNlckZ1bGxuYW1lIiwiY29tcGFueU5hbWUiLCJjb21wYW55QWRkcmVzcyIsInRvZGF5IiwiU2lkZXIiLCJzaWRlQmFyIiwiZGVmYXVsdENvb2tpZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdCIsImdldENvbmZpZyIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJkZWZhdWx0TlMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJMQU5HIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVxdWVzdCIsImNvb2tpZXNTdHJpbmciLCJoYW5kbGVHbG9iYWxDYWxsYmFjayIsImhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2siLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlR2xvYmFsIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicG9zdCIsInB1dCIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwicm91dGVDb25maWciLCJwYXR0ZXJuIiwiYXNVcmwiLCJpbmRleE9mIiwibG9jYXRpb24iLCJvbGRRdWVyeSIsInF1ZXJ5U3RyaW5nQXBwZW5kIiwicm91dGVQYXRocyIsInNpZGViYXJTZWxlY3RlZE5hbWUiLCJwYXJlbnQiLCJCYXNlQXBpIiwiY29udGV4dCIsInN0YXR1cyIsImNvb2tpZXNPYmoiLCJuZXh0Q29va2llIiwiZ2xvYmFsSGFuZGxlQ2FsbGJhY2siLCJnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrIiwiY3JlYXRlIiwiZGV0YWlsIiwiZWRpdCIsIkJlZCIsIlBhdGllbnQiLCJSb29tIiwiVXNlciIsImxvZ2luIiwidXBkYXRlUGFzc3dvcmQiLCJzZWFyY2giLCJyb3V0ZVBhcmFtcyIsImNoYXJUb051bSIsIkMiLCJSIiwiVSIsIkQiLCJjcnVkVG9EZWMiLCJ0b1VwcGVyQ2FzZSIsInNwbGl0IiwicmVkdWNlIiwiY2hhciIsImRlY1RvQ3J1ZCIsImRlYyIsImhhc1Blcm1pc3Npb24iLCJyZXF1aXJlUGVybWlzc2lvbiIsInVzZXJQZXJtaXNzaW9uIiwic2hvd0Vycm9yIiwicGVybWlzc2lvbkFycmF5IiwicGVybWlzc2lvbiIsInJvb3RQZXJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBOztBQUNBOztBQUVBOztBQUtBOztBQUNBOztBQUVBLHVCQUF3QztBQUN0QyxRQUFNQSxHQUFHLEdBQUcsNkJBQVosSUFBWSxDQUFaO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLGdCQUFNLFdBQU4saUJBQU0sR0FBTixTQUFmLElBQWUsQ0FBZjtBQUVBLFNBQ0UsQ0FBQ0QsR0FBRyxDQUFKLFFBQWNBLEdBQUcsQ0FBSEEsYUFBaUJDLE1BQU0sQ0FBdkJELFlBQW9DQSxHQUFHLENBQUhBLFNBQWFDLE1BQU0sQ0FEdkU7QUFRRjs7QUFBQSx1Q0FBOEU7QUFDNUUsTUFBSUMsUUFBb0IsR0FBeEI7QUFDQSxNQUFJQyxNQUE4QixHQUFsQztBQUNBLE1BQUlDLFVBQStCLEdBQW5DO0FBQ0EsU0FBTyxjQUF5QjtBQUM5QixRQUFJQSxVQUFVLElBQUlDLElBQUksS0FBbEJELFlBQW1DRSxFQUFFLEtBQXpDLFFBQXNEO0FBQ3BEO0FBR0Y7O0FBQUEsVUFBTUMsTUFBTSxHQUFHQyxVQUFVLE9BQXpCLEVBQXlCLENBQXpCO0FBQ0FOLFlBQVEsR0FBUkE7QUFDQUMsVUFBTSxHQUFOQTtBQUNBQyxjQUFVLEdBQVZBO0FBQ0E7QUFURjtBQWFGOztBQUFBLHdCQUFxQztBQUNuQyxTQUFPSixHQUFHLElBQUksZUFBUEEsV0FBaUMsaUNBQWpDQSxHQUFpQyxDQUFqQ0EsR0FBUDtBQWFGOztBQUFBO0FBQ0EsTUFBTVMsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDQyxTQUFoQyxHQURGO0FBRUEsTUFBTUMsVUFBMkMsR0FBakQ7O0FBRUEsdUJBQXlEO0FBQ3ZEO0FBQ0EsZ0JBQWM7QUFDWjtBQUdGLEdBTnVELENBTXZEOzs7QUFDQSxNQUFJLENBQUosc0JBQTJCO0FBQ3pCO0FBR0Y7O0FBQUEsU0FBUUMsUUFBUSxHQUFHLHlCQUNoQkMsT0FBRCxJQUFhO0FBQ1hBLFdBQU8sQ0FBUEEsUUFBaUJDLEtBQUQsSUFBVztBQUN6QixVQUFJLENBQUNOLFNBQVMsQ0FBVEEsSUFBY00sS0FBSyxDQUF4QixNQUFLTixDQUFMLEVBQWtDO0FBQ2hDO0FBR0Y7O0FBQUEsWUFBTU8sRUFBRSxHQUFHUCxTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBOUIsTUFBV04sQ0FBWDs7QUFDQSxVQUFJTSxLQUFLLENBQUxBLGtCQUF3QkEsS0FBSyxDQUFMQSxvQkFBNUIsR0FBeUQ7QUFDdkRGLGdCQUFRLENBQVJBLFVBQW1CRSxLQUFLLENBQXhCRjtBQUNBSixpQkFBUyxDQUFUQSxPQUFpQk0sS0FBSyxDQUF0Qk47QUFDQU8sVUFBRTtBQUVMO0FBWERGO0FBRmUsS0FlakI7QUFBRUcsY0FBVSxFQWZkO0FBZUUsR0FmaUIsQ0FBbkI7QUFtQkY7O0FBQUEsTUFBTUMscUJBQXFCLEdBQUcsWUFBaUM7QUFDN0QsUUFBTUwsUUFBUSxHQUFHTSxXQUFqQjs7QUFDQSxNQUFJLENBQUosVUFBZTtBQUNiLFdBQU8sTUFBTSxDQUFiO0FBR0ZOOztBQUFBQSxVQUFRLENBQVJBO0FBQ0FKLFdBQVMsQ0FBVEE7QUFDQSxTQUFPLE1BQU07QUFDWCxRQUFJO0FBQ0ZJLGNBQVEsQ0FBUkE7QUFDQSxLQUZGLENBRUUsWUFBWTtBQUNaTyxhQUFPLENBQVBBO0FBRUZYOztBQUFBQSxhQUFTLENBQVRBO0FBTkY7QUFSRjs7QUFrQkEsbUJBQW1CWSxnQkFBbkIsQ0FBd0M7QUFHdENDLGFBQVcsUUFBbUI7QUFDNUI7QUFENEIsU0FGOUJDLENBRThCOztBQUFBLDRCQVlYLE1BQU0sQ0FaSzs7QUFBQSxzQkFpRGpCQyxpQkFBaUIsQ0FBQyxrQkFBa0I7QUFDL0MsYUFBTztBQUNMbkIsWUFBSSxFQUFFLDBCQUFZb0IsU0FBUyxDQUR0QixJQUNzQixDQUFyQixDQUREO0FBRUxuQixVQUFFLEVBQUVvQixNQUFNLEdBQUcsMEJBQVlELFNBQVMsQ0FBeEIsTUFBd0IsQ0FBckIsQ0FBSCxHQUZaO0FBQU8sT0FBUDtBQWxENEIsS0FpREEsQ0FqREE7O0FBQUEsdUJBd0RmRSxDQUFELElBQStCO0FBQzNDLFlBQU07QUFBQTtBQUFBO0FBQUEsVUFBdUJBLENBQUMsQ0FBOUI7O0FBQ0EsVUFDRUMsUUFBUSxLQUFSQSxRQUNFQyxNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDQUYsQ0FBQyxDQURGLE9BQUNFLElBRUFGLENBQUMsQ0FGRixPQUFDRSxJQUdBRixDQUFDLENBSEYsUUFBQ0UsSUFJQ0YsQ0FBQyxDQUFEQSxlQUFpQkEsQ0FBQyxDQUFEQSxzQkFOdEIsQ0FDRUMsQ0FERixFQU9FO0FBQ0E7QUFDQTtBQUdGOztBQUFBLFVBQUk7QUFBQTtBQUFBO0FBQUEsVUFBZSxnQkFBZ0IsV0FBaEIsTUFBaUMsV0FBcEQsRUFBbUIsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDRSxPQUFPLENBQVosSUFBWSxDQUFaLEVBQW9CO0FBQ2xCO0FBQ0E7QUFHRjs7QUFBQSxZQUFNO0FBQUE7QUFBQSxVQUFlbkIsTUFBTSxDQUEzQjtBQUNBTixVQUFJLEdBQUcsNEJBQVBBLElBQU8sQ0FBUEE7QUFDQUMsUUFBRSxHQUFHQSxFQUFFLEdBQUcsNEJBQUgsRUFBRyxDQUFILEdBQVBBO0FBRUFxQixPQUFDLENBQURBLGlCQXpCMkMsQ0EyQjNDOztBQUNBLFVBQUk7QUFBQTtBQUFBLFVBQWEsS0FBakI7O0FBQ0EsVUFBSUksTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxjQUFNLEdBQUd6QixFQUFFLENBQUZBLGVBQVR5QjtBQUdGLE9BakMyQyxDQWlDM0M7OztBQUNBQyxzQkFBTyxpQ0FBUEEsa0JBQTBEO0FBQ3hEQyxlQUFPLEVBQUUsV0FEWEQ7QUFBMEQsT0FBMURBLE9BRVNFLE9BQUQsSUFBc0I7QUFDNUIsWUFBSSxDQUFKLFNBQWM7O0FBQ2Qsb0JBQVk7QUFDVnZCLGdCQUFNLENBQU5BO0FBQ0F3QixrQkFBUSxDQUFSQTtBQUVIO0FBUkRIO0FBMUY0Qjs7QUFFNUIsY0FBMkM7QUFDekMsVUFBSUksS0FBSyxDQUFULFVBQW9CO0FBQ2xCaEIsZUFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUEsYUFBU2dCLEtBQUssQ0FBTEEsYUFBVDtBQUtGQzs7QUFBQUEsc0JBQW9CLEdBQVM7QUFDM0I7QUFHRkM7O0FBQUFBLFVBQVEsR0FBYTtBQUNuQixVQUFNO0FBQUE7QUFBQSxRQUFlM0IsTUFBTSxDQUEzQjtBQUNBLFVBQU07QUFBRU4sVUFBSSxFQUFOO0FBQW9CQyxRQUFFLEVBQXRCO0FBQUEsUUFBcUMsZ0JBQ3pDLFdBRHlDLE1BRXpDLFdBRkYsRUFBMkMsQ0FBM0M7QUFJQSxVQUFNaUMsWUFBWSxHQUFHLDRCQUFyQixVQUFxQixDQUFyQjtBQUNBLFdBQU8sZUFBZUMsUUFBUSxHQUFHLDRCQUFILFFBQUcsQ0FBSCxHQUE5QixZQUFPLENBQVA7QUFHRkM7O0FBQUFBLFdBQVMsTUFBcUI7QUFDNUIsUUFBSSx5Q0FBeUNDLEdBQUcsQ0FBaEQsU0FBMEQ7QUFDeEQ7QUFFQSxZQUFNQyxZQUFZLEdBQ2hCL0IsVUFBVSxDQUNSLHNCQUNFO0FBSE4sU0FFSSxDQURRLENBRFo7O0FBT0EsVUFBSSxDQUFKLGNBQW1CO0FBQ2pCLGdDQUF3Qk0scUJBQXFCLE1BQU0sTUFBTTtBQUN2RDtBQURGLFNBQTZDLENBQTdDO0FBSUg7QUFDRjtBQUVELEdBbERzQyxDQWtEdEM7QUFDQTs7O0FBcURBMEIsVUFBUSxVQUFrQztBQUN4QyxRQUFJLENBQUMsS0FBTCxDQUFJLFFBQUosRUFBOEMsT0FETixDQUV4Qzs7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBZCxRQUFjLEVBQWQsQ0FId0MsQ0FJeEM7QUFDQTtBQUNBOztBQUNBYiw2QkFBZ0JhLEtBQUs7QUFBQztBQUF0QmIsS0FBcUIsQ0FBckJBLEVBQXFDYSxLQUFLO0FBQUM7QUFBM0NiLEtBQTBDLENBQTFDQSxpQkFDR2MsR0FBRCxJQUFTO0FBQ1AsZ0JBQTJDO0FBQ3pDO0FBQ0E7QUFFSDtBQU5IZDs7QUFRQSxjQUFVLENBQ1IsS0FBSyxDQUFMLE1BQ0U7QUFGSixPQUNFLENBRFEsQ0FBVjtBQVFGZTs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsUUFBSTtBQUFBO0FBQUEsUUFBZSxLQUFuQjtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBZSxnQkFBZ0IsV0FBaEIsTUFBaUMsV0FBdEQsRUFBcUIsQ0FBckIsQ0FGTyxDQUdQOztBQUNBLFFBQUksb0JBQUosVUFBa0M7QUFDaENDLGNBQVEsZ0JBQUcsd0NBQVhBLFFBQVcsQ0FBWEE7QUFHRixLQVJPLENBUVA7OztBQUNBLFVBQU1DLEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxVQUFNZCxLQUtMLEdBQUc7QUFDRk0sU0FBRyxFQUFHUyxFQUFELElBQWE7QUFDaEI7O0FBRUEsWUFBSUYsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxjQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGlCQUFLLENBQUxBO0FBRUg7QUFDRjtBQVZDO0FBV0ZHLGtCQUFZLEVBQUd6QixDQUFELElBQXlCO0FBQ3JDLFlBQUlzQixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLGlCQUFuQixZQUFtRTtBQUNqRUEsZUFBSyxDQUFMQTtBQUVGOztBQUFBLHNCQUFjO0FBQUVJLGtCQUFRLEVBQXhCO0FBQWMsU0FBZDtBQWZBO0FBaUJGQyxhQUFPLEVBQUczQixDQUFELElBQXlCO0FBQ2hDLFlBQUlzQixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLFlBQW5CLFlBQThEO0FBQzVEQSxlQUFLLENBQUxBO0FBRUY7O0FBQUEsWUFBSSxDQUFDdEIsQ0FBQyxDQUFOLGtCQUF5QjtBQUN2QjtBQUVIO0FBN0JIO0FBS0ksS0FMSixDQVZPLENBMENQO0FBQ0E7O0FBQ0EsUUFDRSx1QkFDQ3NCLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUYxQyxLQUV5QixDQUZ6QixFQUdFO0FBQ0FiLFdBQUssQ0FBTEEsT0FBYTlCLEVBQUUsSUFBZjhCO0FBR0YsS0FuRE8sQ0FtRFA7QUFDQTs7O0FBQ0EsUUFBSW1CLEtBQUosRUFBOEMsRUFZOUM7O0FBQUEsV0FBT0MsbUNBQVAsS0FBT0EsQ0FBUDtBQWhNb0M7O0FBQUE7O0FBb014QyxVQUE0QztBQUMxQyxRQUFNQyxJQUFJLEdBQUcscUJBQVNyQyxPQUFPLENBQTdCLEtBQWEsQ0FBYixDQUQwQyxDQUcxQzs7QUFDQSxRQUFNc0MsU0FBUyxHQUFHQyxtQkFBTyxDQUF6Qiw4QkFBeUIsQ0FBekI7O0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxtQkFBTyxDQUFyQiwwQ0FBcUIsQ0FBckIsQ0FMMEMsQ0FNMUM7OztBQUNBRSxNQUFJLENBQUpBLFlBQWlCRCxLQUFLLENBQUM7QUFDckJ2RCxRQUFJLEVBQUVxRCxTQUFTLENBQVRBLFVBQW9CLENBQUNBLFNBQVMsQ0FBVixRQUFtQkEsU0FBUyxDQUFoREEsTUFBb0IsQ0FBcEJBLEVBRGU7QUFFckJwRCxNQUFFLEVBQUVvRCxTQUFTLENBQVRBLFVBQW9CLENBQUNBLFNBQVMsQ0FBVixRQUFtQkEsU0FBUyxDQUYvQixNQUVHLENBQXBCQSxDQUZpQjtBQUdyQmQsWUFBUSxFQUFFYyxTQUFTLENBSEU7QUFJckJJLFdBQU8sRUFBRUosU0FBUyxDQUpHO0FBS3JCekIsV0FBTyxFQUFFeUIsU0FBUyxDQUxHO0FBTXJCSyxZQUFRLEVBQUVMLFNBQVMsQ0FORTtBQU9yQjNCLFVBQU0sRUFBRTJCLFNBQVMsQ0FQSTtBQVFyQlYsWUFBUSxFQUFFVSxTQUFTLENBQVRBLFVBQW9CLENBQzVCQSxTQUFTLENBRG1CLFNBRTVCLHFCQUFrQztBQUNoQyxZQUFNTSxLQUFLLEdBQUc1QixLQUFLLENBQW5CLFFBQW1CLENBQW5COztBQUVBLFVBQUksaUJBQUosVUFBK0I7QUFDN0JxQixZQUFJLENBQUpBLGlJQUFJLENBQUpBO0FBS0Y7O0FBQUE7QUFYTUMsS0FBb0IsQ0FBcEJBLEVBUlpHO0FBQXVCLEdBQUQsQ0FBdEJBOzs7ZUF5QmFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pWZjs7QUFDQTs7Ozs7QUFDQTs7QUFxSEE7OztBQXhIQTs7QUFtQkEsTUFBTUksZUFBb0MsR0FBRztBQUMzQ0MsUUFBTSxFQURxQztBQUM3QjtBQUNkQyxnQkFBYyxFQUY2Qjs7QUFHM0NDLE9BQUssS0FBaUI7QUFDcEIsUUFBSSxLQUFKLFFBQWlCLE9BQU9wRCxFQUFQOztBQUNqQixlQUFtQyxFQUdwQztBQVJIOztBQUE2QyxDQUE3QyxDLENBV0E7O0FBQ0EsTUFBTXFELGlCQUFpQixHQUFHLHFFQUExQixVQUEwQixDQUExQjtBQVNBLE1BQU1DLFlBQVksR0FBRywwR0FBckIsb0JBQXFCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0RBQXpCLGdCQUF5QixDQUF6QixDLENBU0E7O0FBQ0FDLE1BQU0sQ0FBTkEsMENBQWlEO0FBQy9DQyxLQUFHLEdBQUc7QUFDSixXQUFPekMsaUJBQVA7QUFGSndDOztBQUFpRCxDQUFqREE7QUFNQUgsaUJBQWlCLENBQWpCQSxRQUEyQkssS0FBRCxJQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0FGLFFBQU0sQ0FBTkEsdUNBQThDO0FBQzVDQyxPQUFHLEdBQUc7QUFDSixZQUFNUCxNQUFNLEdBQUdTLFNBQWY7QUFDQSxhQUFPVCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpNOztBQUE4QyxHQUE5Q0E7QUFMRkg7QUFhQSxnQkFBZ0IsQ0FBaEIsUUFBMEJLLEtBQUQsSUFBVztBQUNsQztBQUNBOztBQUFFVCxpQkFBRCxPQUFDQSxHQUFpQyxDQUFDLEdBQUQsU0FBb0I7QUFDckQsVUFBTUMsTUFBTSxHQUFHUyxTQUFmO0FBQ0EsV0FBT1QsTUFBTSxDQUFOQSxLQUFNLENBQU5BLENBQWMsR0FBckIsSUFBT0EsQ0FBUDtBQUZELEdBQUNEO0FBRko7QUFRQSxZQUFZLENBQVosUUFBc0JXLEtBQUQsSUFBVztBQUM5QixpQkFBZSxDQUFmLE1BQXNCLE1BQU07QUFDMUIsc0NBQXdCLENBQUMsR0FBRCxTQUFhO0FBQ25DLFlBQU1DLFVBQVUsR0FBSSxLQUFJRCxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTUUsZ0JBQWdCLEdBQXRCOztBQUNBLFVBQUlBLGdCQUFnQixDQUFwQixVQUFvQixDQUFwQixFQUFrQztBQUNoQyxZQUFJO0FBQ0ZBLDBCQUFnQixDQUFoQkEsVUFBZ0IsQ0FBaEJBLENBQTZCLEdBQTdCQTtBQUNBLFNBRkYsQ0FFRSxZQUFZO0FBQ1o7QUFDQTFELGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDeUQsVUFBdER6RCxJQUZZLENBR1o7O0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRTBCLEdBQUcsQ0FBQ2lDLE9BQVEsS0FBSWpDLEdBQUcsQ0FBQ2tDLEtBQXJDNUQ7QUFFSDtBQUNGO0FBZkQ7QUFERjtBQURGOztBQXFCQSxxQkFBNkI7QUFDM0IsTUFBSSxDQUFDNkMsZUFBZSxDQUFwQixRQUE2QjtBQUMzQixVQUFNYyxPQUFPLEdBQ1gsZ0NBREY7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUY7O0FBQUEsU0FBT2QsZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPVCwwQkFBaUJ5QixlQUF4QixhQUFPekIsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU0wQixZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEakIsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSWpDLFNBQUosUUFBVyxHQUFwQ2lDLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0NqRCxFQUFELElBQVFBLEVBQS9DaUQ7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNa0IsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQlosTUFBTSxDQUFOQSxXQUFrQlcsT0FBTyxDQUE5Q0MsUUFBOEMsQ0FBekJaLENBQXJCWSxDQUR5QyxDQUNpQjs7QUFDMUQ7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FibUUsQ0FhbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCcEQsaUJBQWxCb0Q7QUFFQWIsa0JBQWdCLENBQWhCQSxRQUEwQkcsS0FBRCxJQUFXO0FBQ2xDVSxZQUFRLENBQVJBLEtBQVEsQ0FBUkEsR0FBa0IsQ0FBQyxHQUFELFNBQW9CO0FBQ3BDLGFBQU9ELE9BQU8sQ0FBUEEsS0FBTyxDQUFQQSxDQUFlLEdBQXRCLElBQU9BLENBQVA7QUFERkM7QUFERmI7QUFNQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0Q7O0FBRUE7O0FBV2UsdUNBSytCO0FBQzVDLG9DQUF1QztBQUNyQyx3QkFBTztBQUFtQixZQUFNLEVBQUUsWUFBM0IsU0FBMkI7QUFBM0IsT0FBUCxLQUFPLEVBQVA7QUFHRjs7QUFBQSxtQkFBaUIsQ0FBakIsa0JBQW9DYyxpQkFBaUIsQ0FBQ0MsZUFBdEQsQ0FDQTtBQURBO0FBRUVDLG1CQUFELG9CQUFDQSxHQUFpREYsaUJBQUQsQ0FBakQsbUJBQUNFOztBQUNGLFlBQTJDO0FBQ3pDLFVBQU1DLElBQUksR0FDUkgsaUJBQWlCLENBQWpCQSxlQUFpQ0EsaUJBQWlCLENBQWxEQSxRQURGO0FBRUFFLHFCQUFpQixDQUFqQkEsY0FBaUMsY0FBYUMsSUFBOUNEO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOzs7Ozs7O0FBWUE7QUFDQTtBQUNBOztBQVVlLGdCQUE2QjtBQUMxQyxRQUFNRSxHQUErQixHQUFHakIsTUFBTSxDQUFOQSxPQUF4QyxJQUF3Q0EsQ0FBeEM7QUFFQSxTQUFPO0FBQ0xrQixNQUFFLGdCQUFpQztBQUNqQztBQUFDLE9BQUNELEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxLQUFjQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsR0FBZixFQUFDQSxDQUFEO0FBRkU7O0FBS0xFLE9BQUcsZ0JBQWlDO0FBQ2xDLFVBQUlGLEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiO0FBQ0FBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVZJOztBQVlMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCSSxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBZEw7O0FBQU8sR0FBUDtBQW1CRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEOztBQUNBOztBQUNBOztBQVFBOztBQUNBOztBQUNBOzs7Ozs7QUFoQkE7QUFBQTtBQUNBOzs7QUFpQkEsTUFBTUMsUUFBUSxHQUFJdkMsVUFBbEI7O0FBRU8sMkJBQTJDO0FBQ2hELFNBQU93QyxJQUFJLENBQUpBLDBCQUErQkQsUUFBUSxHQUF2Q0MsT0FBUDtBQUdLOztBQUFBLDJCQUEyQztBQUNoRCxTQUFPQSxJQUFJLENBQUpBLDBCQUNIQSxJQUFJLENBQUpBLE9BQVlELFFBQVEsQ0FBcEJDLFdBREdBLE1BQVA7QUFLRjs7QUFBQSx1QkFBdUM7QUFDckMsU0FBT0EsSUFBSSxDQUFKQSxzQkFBUDtBQUdGOztBQUFBLE1BQU1DLFlBQVksR0FBSUQsSUFBRCxJQUNuQkUsT0FBTyxDQUFDLFNBQVNGLElBQUksS0FBYixpQkFEVixJQUNTLENBRFQ7O0FBaURBLDREQUtFO0FBQ0EsTUFBSUcsUUFBUSxHQUFHQyxjQUFjLE9BQTdCOztBQUNBLHlCQUFxQztBQUNuQyxXQUFPLEtBQUssQ0FDVixpQ0FBcUI7QUFDbkJDLGNBQVEsRUFBRUMsV0FBVyxFQUNuQjtBQUNDLHFCQUFjQyxhQUFhLENBQUNDLE9BQVEsR0FBRUMsV0FBVyxVQUhqQyxPQUNFLENBREY7QUFEWDtBQUNXLEtBQXJCLENBRFUsRUFRVjtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsaUJBQVcsRUFwQlI7QUFRTCxLQVJVLENBQUwsTUFzQkNDLEdBQUQsSUFBUztBQUNkLFVBQUksQ0FBQ0EsR0FBRyxDQUFSLElBQWE7QUFDWCxZQUFJLGtCQUFrQkEsR0FBRyxDQUFIQSxVQUF0QixLQUF5QztBQUN2QyxpQkFBT0MsV0FBUDtBQUVGOztBQUFBLGNBQU0sVUFBTiw2QkFBTSxDQUFOO0FBRUY7O0FBQUEsYUFBT0QsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE3QkYsS0FBTyxDQUFQO0FBaUNGOztBQUFBLFNBQU8sV0FBVyxHQUFYLEtBQ0VFLElBQUQsSUFBVTtBQUNkLFdBQU81RixFQUFFLEdBQUdBLEVBQUUsQ0FBTCxJQUFLLENBQUwsR0FBVDtBQUZHLFdBSUc4QixHQUFELElBQWdCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBSixnQkFBcUI7QUFDbkI7QUFBRUEsU0FBRCxLQUFDQSxHQUFELGlCQUFDQTtBQUVKOztBQUFBO0FBWEosR0FBTyxDQUFQO0FBZWE7O0FBQUEsTUFBTWQsTUFBTixDQUFtQztBQU9oRDs7O0FBSUE7QUFhQVYsYUFBVywwQkFJVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBdUJUO0FBQUEsU0E5Q0Z1RixLQThDRTtBQUFBLFNBN0NGVCxRQTZDRTtBQUFBLFNBNUNGVSxLQTRDRTtBQUFBLFNBM0NGQyxNQTJDRTtBQUFBLFNBMUNGakIsUUEwQ0U7QUFBQSxTQXJDRmtCLFVBcUNFO0FBQUEsU0FuQ0ZDLEdBbUNFLEdBbkNrQyxFQW1DbEM7QUFBQSxTQWxDRkMsR0FrQ0U7QUFBQSxTQWpDRkMsR0FpQ0U7QUFBQSxTQWhDRkMsVUFnQ0U7QUFBQSxTQS9CRkMsSUErQkU7QUFBQSxTQTlCRkMsTUE4QkU7QUFBQSxTQTdCRkMsUUE2QkU7QUFBQSxTQTVCRkMsS0E0QkU7QUFBQSxTQTNCRkMsVUEyQkU7O0FBQUEsc0JBdUVZOUYsQ0FBRCxJQUE0QjtBQUN2QyxVQUFJLENBQUNBLENBQUMsQ0FBTixPQUFjO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFBO0FBQUE7QUFBQSxZQUFOO0FBQ0EseUNBRUUsaUNBQXFCO0FBQUE7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRixPQXBCdUMsQ0FvQnZDO0FBQ0E7OztBQUNBLFVBQ0VBLENBQUMsQ0FBREEsU0FDQSxLQURBQSxTQUVBQSxDQUFDLENBQURBLGFBQWUsS0FGZkEsVUFHQSxpQkFBTUEsQ0FBQyxDQUFEQSxNQUFOLGtCQUFnQyxLQUpsQyxVQUtFO0FBQ0E7QUFHRixPQS9CdUMsQ0ErQnZDO0FBQ0E7OztBQUNBLFVBQUksYUFBYSxDQUFDLFVBQVVBLENBQUMsQ0FBN0IsS0FBa0IsQ0FBbEIsRUFBc0M7QUFDcEM7QUFHRjs7QUFBQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBdUJBLENBQUMsQ0FBOUI7O0FBQ0EsZ0JBQTJDO0FBQ3pDLFlBQUksOEJBQThCLGNBQWxDLGFBQTZEO0FBQzNEUCxpQkFBTyxDQUFQQTtBQUlIO0FBQ0Q7O0FBQUE7QUFwSEE7O0FBQUEsMEJBbW5CZ0IyRixNQUFELElBQXFDO0FBQ3BELFlBQU1YLFFBQVEsR0FBR0osWUFBWSxDQUFDLHlCQUE5QixRQUE2QixDQUE3QjtBQUVBLGFBQU96QyxTQUNIbUUsU0FER25FLEdBRUhvRSxhQUFhLGlCQUdYLEtBSFcsT0FJVmYsSUFBRCxJQUFXLHFCQU5qQixJQUVpQixDQUZqQjtBQXRuQkE7O0FBQUEsMEJBZ29CZ0JHLE1BQUQsSUFBcUM7QUFDcEQsVUFBSTtBQUFBO0FBQUE7QUFBQSxVQUFzQix5QkFBMUIsSUFBMEIsQ0FBMUI7QUFDQVgsY0FBUSxHQUFHSixZQUFZLENBQXZCSSxRQUF1QixDQUF2QkE7QUFDQSxhQUFPdUIsYUFBYSxrQkFBa0IsS0FBdEMsS0FBb0IsQ0FBcEI7QUFub0JBLE9BQ0E7OztBQUNBLGlCQUFhMUIsT0FBTyxDQUFwQixTQUFvQixDQUFwQixDQUZBLENBSUE7O0FBQ0EseUJBTEEsQ0FNQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSUcsU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCaEUsYUFBSyxFQUZ1QjtBQUFBO0FBSTVCd0YsZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FKVDtBQUs1QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FMdkM7QUFBOEIsT0FBOUI7QUFTRjs7QUFBQSwrQkFBMkI7QUFBRXhHLGVBQVMsRUFBdEM7QUFBMkIsS0FBM0IsQ0FuQkEsQ0FxQkE7QUFDQTs7QUFDQSxrQkFBY1csTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkEzQkEsQ0E0QkE7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QnNFLGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkFwQ0EsQ0FxQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLGVBQW1DLEVBZXBDO0FBRUQsR0EzR2dELENBMkdoRDs7O0FBQ0EsdUNBQXFEO0FBQ25ELFFBQUkvQyxLQUFKLEVBQThDLEVBQTlDLE1BSU87QUFDTDtBQUVIO0FBa0REd0U7O0FBQUFBLFFBQU0sYUFBMEI7QUFDOUIsVUFBTTFHLFNBQXdCLEdBQUcyRyxHQUFHLENBQUhBLFdBQWpDO0FBQ0EsVUFBTXBCLElBQUksR0FBRyxnQkFBYixLQUFhLENBQWI7O0FBQ0EsUUFBSSxDQUFKLE1BQVc7QUFDVCxZQUFNLFVBQVcsb0NBQW1DQyxLQUFwRCxFQUFNLENBQU47QUFHRjs7QUFBQSxVQUFNb0IsT0FBTyxHQUFHekQsTUFBTSxDQUFOQSxpQkFBd0I7QUFBQTtBQUV0Q29ELGFBQU8sRUFBRUksR0FBRyxDQUYwQjtBQUd0Q0YsYUFBTyxFQUFFRSxHQUFHLENBSGQ7QUFBd0MsS0FBeEJ4RCxDQUFoQjtBQUtBLHFDQVo4QixDQWM5Qjs7QUFDQSxRQUFJcUMsS0FBSyxLQUFULFNBQXVCO0FBQ3JCLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQTtBQUdGOztBQUFBLFFBQUlBLEtBQUssS0FBSyxLQUFkLE9BQTBCO0FBQ3hCO0FBRUg7QUFFRHFCOztBQUFBQSxRQUFNLEdBQVM7QUFDYnZILFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7OztBQUdBd0gsTUFBSSxHQUFHO0FBQ0x4SCxVQUFNLENBQU5BO0FBR0Y7QUFBQTs7Ozs7Ozs7QUFNQXlILE1BQUksTUFBVzlILEVBQU8sR0FBbEIsS0FBMEIrSCxPQUFPLEdBQWpDLElBQXdDO0FBQzFDLFdBQU8sa0NBQVAsT0FBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7Ozs7QUFNQXZFLFNBQU8sTUFBV3hELEVBQU8sR0FBbEIsS0FBMEIrSCxPQUFPLEdBQWpDLElBQXdDO0FBQzdDLFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0ZDOztBQUFBQSxRQUFNLDZCQUtjO0FBQ2xCLFdBQU8sWUFBWSxxQkFBcUI7QUFDdEMsVUFBSSxDQUFDRCxPQUFPLENBQVosSUFBaUI7QUFDZjtBQUVGLE9BSnNDLENBSXRDOzs7QUFDQSxVQUFJRSxPQUFKLElBQVE7QUFDTkMsbUJBQVcsQ0FBWEE7QUFHRixPQVRzQyxDQVN0QztBQUNBOzs7QUFDQSxVQUFJeEksR0FBRyxHQUFHLDJCQUEyQixpQ0FBM0IsSUFBMkIsQ0FBM0IsR0FBVjtBQUNBLFVBQUlNLEVBQUUsR0FBRywwQkFBMEIsaUNBQTFCLEdBQTBCLENBQTFCLEdBQVQ7QUFFQU4sU0FBRyxHQUFHcUcsV0FBVyxDQUFqQnJHLEdBQWlCLENBQWpCQTtBQUNBTSxRQUFFLEdBQUcrRixXQUFXLENBQWhCL0YsRUFBZ0IsQ0FBaEJBLENBZnNDLENBaUJ0QztBQUNBOztBQUNBLFVBQUlpRCxLQUFKLEVBQThDLEVBUzlDOztBQUFBLGtDQTVCc0MsQ0E4QnRDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSSxDQUFDOEUsT0FBTyxDQUFSLE1BQWUscUJBQW5CLEVBQW1CLENBQW5CLEVBQTZDO0FBQzNDO0FBQ0FyRyxjQUFNLENBQU5BO0FBQ0E7QUFDQTtBQUNBQSxjQUFNLENBQU5BO0FBQ0EsZUFBT3lHLE9BQU8sQ0FBZCxJQUFjLENBQWQ7QUFHRjs7QUFBQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBZ0Msc0JBQXRDLElBQXNDLENBQXRDOztBQUVBLFVBQUksYUFBSixVQUEyQjtBQUN6QixrQkFBMkM7QUFDekMsZ0JBQU0sVUFDSCxrQ0FBaUN6SSxHQURwQyxvREFBTSxDQUFOO0FBSUY7O0FBQUEsZUFBT3lJLE9BQU8sQ0FBZCxLQUFjLENBQWQ7QUFHRixPQXhEc0MsQ0F3RHRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQUksQ0FBQyxjQUFMLEVBQUssQ0FBTCxFQUF3QjtBQUN0QkMsY0FBTSxHQUFOQTtBQUdGOztBQUFBLFlBQU03QixLQUFLLEdBQUdaLE9BQU8sQ0FBckIsUUFBcUIsQ0FBckI7QUFDQSxZQUFNO0FBQUVoRSxlQUFPLEdBQVQ7QUFBQSxVQUFOOztBQUVBLFVBQUksK0JBQUosS0FBSSxDQUFKLEVBQTJCO0FBQ3pCLGNBQU07QUFBRW1FLGtCQUFRLEVBQVY7QUFBQSxZQUEyQixpQkFBakMsRUFBaUMsQ0FBakM7QUFDQSxjQUFNdUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLGNBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7O0FBQ0EsWUFBSSxDQUFKLFlBQWlCO0FBQ2YsZ0JBQU1DLGFBQWEsR0FBR3JFLE1BQU0sQ0FBTkEsS0FBWW1FLFVBQVUsQ0FBdEJuRSxlQUNuQnNFLEtBQUQsSUFBVyxDQUFDaEMsS0FBSyxDQURuQixLQUNtQixDQURHdEMsQ0FBdEI7O0FBSUEsY0FBSXFFLGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixzQkFBMkM7QUFDekN6SCxxQkFBTyxDQUFQQSxLQUNFLDZEQUFDLEdBQ0UsZUFBY3lILGFBQWEsQ0FBYkEsVUFGbkJ6SDtBQVFGOztBQUFBLG1CQUFPMkgsTUFBTSxDQUNYLFVBQ0csOEJBQTZCQyxVQUFXLDhDQUE2Q25DLEtBQXRGLEtBQUMsR0FGTCwrREFDRSxDQURXLENBQWI7QUFPSDtBQXRCRCxlQXNCTztBQUNMO0FBQ0FyQyxnQkFBTSxDQUFOQTtBQUVIO0FBRUR4Qzs7QUFBQUEsWUFBTSxDQUFOQSxvQ0FwR3NDLENBc0d0Qzs7QUFDQSxrRUFDR2lILFNBQUQsSUFBZTtBQUNiLGNBQU07QUFBQTtBQUFBLFlBQU47O0FBRUEsWUFBSUMsS0FBSyxJQUFJQSxLQUFLLENBQWxCLFdBQThCO0FBQzVCLGlCQUFPVCxPQUFPLENBQWQsS0FBYyxDQUFkO0FBR0Z6Rzs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBOztBQUVBLGtCQUEyQztBQUN6QyxnQkFBTW1ILE9BQVksR0FBRyx5QkFBckI7QUFDRXhJLGdCQUFELEtBQUNBLENBQUQsYUFBQ0EsR0FDQXdJLE9BQU8sQ0FBUEEsb0JBQTRCQSxPQUFPLENBQW5DQSx1QkFDQSxDQUFFRixTQUFTLENBQVYsU0FBQ0EsQ0FGSCxlQUFDdEk7QUFLSjs7QUFBQSw2REFBcUQsTUFBTTtBQUN6RCxxQkFBVztBQUNUcUIsa0JBQU0sQ0FBTkE7QUFDQTtBQUdGQTs7QUFBQUEsZ0JBQU0sQ0FBTkE7QUFDQSxpQkFBT3lHLE9BQU8sQ0FBZCxJQUFjLENBQWQ7QUFQRjtBQWxCSjtBQXZHRixLQUFPLENBQVA7QUF3SUZXOztBQUFBQSxhQUFXLGtCQUlUZixPQUFPLEdBSkUsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBTzFILE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDUyxlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU9ULE1BQU0sQ0FBTkEsUUFBUCxNQUFPQSxDQUFQLEtBQUosYUFBbUQ7QUFDakRTLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJzSCxNQUF6Q3RIO0FBQ0E7QUFFSDtBQUVEOztBQUFBLFFBQUlzSCxNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBREY7QUFDRSxPQURGLEVBTUU7QUFDQTtBQUNBO0FBUkY7QUFhSDtBQUVEVzs7QUFBQUEsY0FBWSw2QkFLVnBILE9BQWdCLEdBTE4sT0FNVTtBQUNwQixVQUFNcUgsZUFBZSxHQUFHLGdCQUF4QixLQUF3QixDQUF4QixDQURvQixDQUdwQjtBQUNBOztBQUNBLFFBQUlySCxPQUFPLElBQVBBLG1CQUE4QixlQUFsQyxPQUF3RDtBQUN0RCxhQUFPeUYsT0FBTyxDQUFQQSxRQUFQLGVBQU9BLENBQVA7QUFHRjs7QUFBQSxVQUFNNkIsV0FBVyxHQUFHLHdCQUdmO0FBQ0gsYUFBTyxZQUFhZCxPQUFELElBQWE7QUFDOUIsWUFBSTNGLEdBQUcsQ0FBSEEsOEJBQUosZUFBcUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBbkMsZ0JBQU0sQ0FBTkEsbUJBUG1ELENBU25EO0FBQ0E7O0FBQ0FtQyxhQUFHLENBQUhBLGlCQVhtRCxDQVluRDs7QUFDQSxpQkFBTzJGLE9BQU8sQ0FBQztBQUFFUyxpQkFBSyxFQUF0QjtBQUFlLFdBQUQsQ0FBZDtBQUdGOztBQUFBLFlBQUlwRyxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQSxpQkFBTzJGLE9BQU8sQ0FBQztBQUFFUyxpQkFBSyxFQUF0QjtBQUFlLFdBQUQsQ0FBZDtBQUdGVDs7QUFBQUEsZUFBTyxDQUNMLG9DQUNTL0IsR0FBRCxJQUFTO0FBQ2IsZ0JBQU07QUFBRThDLGdCQUFJLEVBQU47QUFBQSxjQUFOO0FBQ0EsZ0JBQU1QLFNBQW9CLEdBQUc7QUFBQTtBQUE3QjtBQUE2QixXQUE3QjtBQUNBLGlCQUFPLFlBQWFSLE9BQUQsSUFBYTtBQUM5Qiw0Q0FBZ0M7QUFBQTtBQUFBO0FBQWhDO0FBQWdDLGFBQWhDLE9BS0dyRyxLQUFELElBQVc7QUFDVDZHLHVCQUFTLENBQVRBO0FBQ0FBLHVCQUFTLENBQVRBO0FBQ0FSLHFCQUFPLENBQVBBLFNBQU8sQ0FBUEE7QUFSSixlQVVHZ0IsTUFBRCxJQUFZO0FBQ1ZySSxxQkFBTyxDQUFQQTtBQUlBNkgsdUJBQVMsQ0FBVEE7QUFDQUEsdUJBQVMsQ0FBVEE7QUFDQVIscUJBQU8sQ0FBUEEsU0FBTyxDQUFQQTtBQWpCSjtBQURGLFdBQU8sQ0FBUDtBQUpKLGlCQTJCVTNGLEdBQUQsSUFBU3lHLFdBQVcsTUE1Qi9CZCxJQTRCK0IsQ0EzQjdCLENBREssQ0FBUEE7QUF0QkYsT0FBTyxDQUFQO0FBSkY7O0FBMkRBLFdBQVEsWUFBWSxxQkFBcUI7QUFDdkMsMkJBQXFCO0FBQ25CLGVBQU9BLE9BQU8sQ0FBZCxlQUFjLENBQWQ7QUFHRjs7QUFBQSxzQ0FDRy9CLEdBQUQsSUFDRStCLE9BQU8sQ0FBQztBQUNOcEgsaUJBQVMsRUFBRXFGLEdBQUcsQ0FEUjtBQUVOa0IsZUFBTyxFQUFFbEIsR0FBRyxDQUFIQSxJQUZIO0FBR05vQixlQUFPLEVBQUVwQixHQUFHLENBQUhBLElBTGY7QUFFWSxPQUFELENBRlg7QUFMSyxLQUFDLEVBQUQsSUFBQyxDQWVDdUMsU0FBRCxJQUEwQjtBQUM5QixZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUJ0RixtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDK0Ysa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEdEQsUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQSxhQUFPLGNBQXlCLE1BQzlCd0IsT0FBTyxHQUNILG9CQURHLEVBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sRUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRWYsY0FBTSxFQVhUO0FBUUMsT0FIRixDQUxDLE9BY0MzRSxLQUFELElBQVc7QUFDaEI2RyxpQkFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFqQkYsT0FBTyxDQUFQO0FBM0JHLEtBQUMsRUFBRCxLQUFDLENBQVIsV0FBUSxDQUFSO0FBa0RGVTs7QUFBQUEsS0FBRyxtQ0FNYztBQUNmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFlBQVAsSUFBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSUFDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQnZKLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUl3SixPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVczSixFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJNEosSUFBSSxLQUFSLElBQWlCO0FBQ2Z2SixZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTXdKLElBQUksR0FBR2hJLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUmdJLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR2pJLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWaUksWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRjtBQUFBOzs7Ozs7OztBQU1BekgsVUFBUSxNQUVObUUsTUFBYyxHQUZSLEtBR05zQixPQUF3QixHQUhsQixJQUlTO0FBQ2YsV0FBTyxZQUFZLHFCQUFxQjtBQUN0QyxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXlCLGlCQUEvQixHQUErQixDQUEvQjs7QUFFQSxVQUFJLGFBQUosVUFBMkI7QUFDekIsa0JBQTJDO0FBQ3pDLGdCQUFNLFVBQ0gsa0NBQWlDckksR0FEcEMsb0RBQU0sQ0FBTjtBQUlGOztBQUFBO0FBR0YsT0Fac0MsQ0FZdEM7OztBQUNBLGdCQUEyQztBQUN6QztBQUVGOztBQUFBLFlBQU02RyxLQUFLLEdBQUdMLFdBQVcsQ0FBQ1AsT0FBTyxDQUFqQyxRQUFpQyxDQUFSLENBQXpCO0FBQ0F5QixhQUFPLENBQVBBLElBQVksQ0FDVixrQ0FBa0NsQixXQUFXLENBRG5DLE1BQ21DLENBQTdDLENBRFUsRUFFVixnQkFBZ0I2QixPQUFPLENBQVBBLHdCQUFoQixZQUZGWCxLQUVFLENBRlUsQ0FBWkEsT0FHUSxNQUFNZSxPQUhkZjtBQWpCRixLQUFPLENBQVA7QUF3QkY7O0FBQUEsOEJBQTJEO0FBQ3pELFFBQUk0QyxTQUFTLEdBQWI7O0FBQ0EsVUFBTUMsTUFBTSxHQUFJLFdBQVcsTUFBTTtBQUMvQkQsZUFBUyxHQUFUQTtBQURGOztBQUdBekQsU0FBSyxHQUFHTCxXQUFXLENBQW5CSyxLQUFtQixDQUFuQkE7QUFFQSxVQUFNMkQsZUFBZSxHQUFHLE1BQU0seUJBQTlCLEtBQThCLENBQTlCOztBQUVBLG1CQUFlO0FBQ2IsWUFBTXRCLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUNyQyxLQUQxQyxHQUFtQixDQUFuQjtBQUdBcUMsV0FBSyxDQUFMQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSXFCLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUE7QUFHRkU7O0FBQUFBLFVBQVEsS0FBc0M7QUFDNUMsUUFBSUgsU0FBUyxHQUFiOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CRCxlQUFTLEdBQVRBO0FBREY7O0FBR0E7QUFDQSxXQUFPSSxFQUFFLEdBQUZBLEtBQVc5RCxJQUFELElBQVU7QUFDekIsVUFBSTJELE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNekgsR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU80SCxDQUFQO0FBa0NGcEY7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFakUsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU1zSixPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdEQxRyxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRjJHOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWixZQUFNbEosQ0FBQyxHQUFHLFVBQVYsaUJBQVUsQ0FBVjtBQUNFQSxPQUFELFVBQUNBLEdBQUQsSUFBQ0E7QUFDRkssWUFBTSxDQUFOQTtBQUNBO0FBQ0E7QUFFSDtBQUVEOEk7O0FBQUFBLFFBQU0sT0FBaUM7QUFDckMsV0FBTyxlQUFlLHlCQUF0QixTQUFPLENBQVA7QUEvc0I4Qzs7QUFBQTs7O0FBQTdCOUksTSxDQXNCWnNGLE1BdEJZdEYsR0FzQlUsb0JBdEJWQSxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDM0lyQjs7QUFDQSxNQUFNK0ksVUFBVSxHQUFoQjs7QUFFTywrQkFBZ0Q7QUFDckQsU0FBT0EsVUFBVSxDQUFWQSxLQUFQLEtBQU9BLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hNLHFDQUF1RTtBQUM1RSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFRM0UsUUFBRCxJQUF5QztBQUM5QyxVQUFNd0MsVUFBVSxHQUFHb0MsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUluQyxLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPb0Msa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNcEksR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNcUksTUFBa0QsR0FBeEQ7QUFFQTNHLFVBQU0sQ0FBTkEscUJBQTZCNEcsUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNQyxDQUFDLEdBQUczQyxVQUFVLENBQUN5QyxDQUFDLENBQXRCLEdBQW9CLENBQXBCOztBQUNBLFVBQUlFLENBQUMsS0FBTCxXQUFxQjtBQUNuQkosY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNJLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0J4SyxLQUFELElBQVdrSyxNQUFNLENBRG5CLEtBQ21CLENBQWxDTSxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDSixNQUFNLENBRFBJLENBQ08sQ0FBUCxDQURBQSxHQUVBSixNQUFNLENBSlZFLENBSVUsQ0FKVkE7QUFNSDtBQVZEM0c7QUFXQTtBQTlCRjtBQWdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7dUNDcENEO0FBQ0E7O0FBQ0EsMEJBQWtDO0FBQ2hDLFNBQU9nSCxHQUFHLENBQUhBLGdDQUFQLE1BQU9BLENBQVA7QUFHSzs7QUFBQSx3Q0FNTDtBQUNBO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQyxXQUFXLENBQUNDLGVBQWUsQ0FBZkEsc0JBQWpDLEdBQWdDLENBQWhDO0FBRUEsUUFBTUwsTUFBaUUsR0FBdkU7QUFDQSxNQUFJTSxVQUFVLEdBQWQ7QUFFQSxRQUFNQyxrQkFBa0IsR0FBRyxZQUFZLENBQVosdUNBRXpCLFdBQVc7QUFDVCxVQUFNQyxVQUFVLEdBQUcsb0JBQW5CLEVBQW1CLENBQW5COztBQUNBLG9CQUFnQjtBQUNkQyxRQUFFLEdBQUdBLEVBQUUsQ0FBRkEsU0FBWSxDQUFqQkEsQ0FBS0EsQ0FBTEE7QUFFRjs7QUFBQSxVQUFNQyxVQUFVLEdBQUcsa0JBQW5CLEVBQW1CLENBQW5COztBQUNBLG9CQUFnQjtBQUNkRCxRQUFFLEdBQUdBLEVBQUUsQ0FBRkEsTUFBTEEsQ0FBS0EsQ0FBTEE7QUFFRjs7QUFBQSxVQUFNLENBQ0osRUFDRTtBQUFBLEtBREYseUNBREksQ0FJSjtBQUpJLEtBQU4sR0FLSTtBQUFFRSxTQUFHLEVBQUVMLFVBQVA7QUFBcUJNLFlBQU0sRUFML0I7QUFLSSxLQUxKO0FBTUEsV0FBT0YsVUFBVSxHQUFJRixVQUFVLG1CQUFkLFdBQWpCO0FBakJKLEdBQTJCLENBQTNCO0FBcUJBLDhCQTVCQSxDQThCQTtBQUNBOztBQUNBLFlBQW1DO0FBQ2pDSywyQkFBdUIsR0FBR1YsWUFBWSxDQUFaQSx1Q0FFeEIsV0FBVztBQUNULFlBQU1PLFVBQVUsR0FBRyxrQkFBbkIsRUFBbUIsQ0FBbkI7QUFDQSxZQUFNSSxHQUFHLEdBQUcsRUFDVjtBQUFBLE9BRFUsNERBQVosRUFBWSxDQUFaO0FBS0EsYUFBT0osVUFBVSxHQUNaLE9BQU1OLFdBQVcsS0FETCxVQUVaLE9BQU1BLFdBQVcsS0FGdEI7QUFUSlMsS0FBMEJWLENBQTFCVTtBQWdCRjs7QUFBQSxTQUFPO0FBQ0xuQixNQUFFLEVBQUUsV0FBVywyQkFBWCxXQURDLEdBQ0QsQ0FEQztBQUFBO0FBR0xxQixjQUFVLEVBQUVGLHVCQUF1QixHQUM5QixJQUFHQSx1QkFEMkIsWUFIckM7QUFBTyxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVEO0FBNk9BOzs7OztBQUdPLHNCQUVGO0FBQ0gsTUFBSUcsSUFBSSxHQUFSO0FBQ0E7QUFFQSxTQUFRLENBQUMsR0FBRCxTQUFvQjtBQUMxQixRQUFJLENBQUosTUFBVztBQUNUQSxVQUFJLEdBQUpBO0FBQ0EvTCxZQUFNLEdBQUdtSyxFQUFFLENBQUMsR0FBWm5LLElBQVcsQ0FBWEE7QUFFRjs7QUFBQTtBQUxGO0FBU0s7O0FBQUEsNkJBQTZCO0FBQ2xDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUErQkksTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRTRMLFFBQVMsS0FBSUMsUUFBUyxHQUFFQyxJQUFJLEdBQUcsTUFBSCxPQUFnQixFQUF0RDtBQUdLOztBQUFBLGtCQUFrQjtBQUN2QixRQUFNO0FBQUE7QUFBQSxNQUFXOUwsTUFBTSxDQUF2QjtBQUNBLFFBQU1WLE1BQU0sR0FBR3lNLGlCQUFmO0FBQ0EsU0FBT3JNLElBQUksQ0FBSkEsVUFBZUosTUFBTSxDQUE1QixNQUFPSSxDQUFQO0FBR0s7O0FBQUEsbUNBQXdEO0FBQzdELFNBQU8sNENBRUhnQixTQUFTLENBQVRBLGVBQXlCQSxTQUFTLENBQWxDQSxRQUZKO0FBS0s7O0FBQUEsd0JBQXdDO0FBQzdDLFNBQU9xRixHQUFHLENBQUhBLFlBQWdCQSxHQUFHLENBQTFCO0FBR0s7O0FBQUEsNkNBSWtEO0FBQ3ZELFlBQTJDO0FBQUE7O0FBQ3pDLDBCQUFJaUcsR0FBRyxDQUFQLDREQUFJQSxlQUFKLGlCQUFvQztBQUNsQyxZQUFNNUgsT0FBTyxHQUFJLElBQUc2SCxjQUFjLEtBQWxDO0FBR0EsWUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVIO0FBQ0QsR0FUdUQsQ0FTdkQ7OztBQUNBLFFBQU1sRyxHQUFHLEdBQUdrRSxHQUFHLENBQUhBLE9BQVlBLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFIQSxJQUFuQzs7QUFFQSxNQUFJLENBQUMrQixHQUFHLENBQVIsaUJBQTBCO0FBQ3hCLFFBQUkvQixHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBbEIsV0FBOEI7QUFDNUI7QUFDQSxhQUFPO0FBQ0xpQyxpQkFBUyxFQUFFLE1BQU1DLG1CQUFtQixDQUFDbEMsR0FBRyxDQUFKLFdBQWdCQSxHQUFHLENBRHpELEdBQ3NDO0FBRC9CLE9BQVA7QUFJRjs7QUFBQTtBQUdGOztBQUFBLFFBQU14SSxLQUFLLEdBQUcsTUFBTXVLLEdBQUcsQ0FBSEEsZ0JBQXBCLEdBQW9CQSxDQUFwQjs7QUFFQSxNQUFJakcsR0FBRyxJQUFJcUcsU0FBUyxDQUFwQixHQUFvQixDQUFwQixFQUEyQjtBQUN6QjtBQUdGOztBQUFBLE1BQUksQ0FBSixPQUFZO0FBQ1YsVUFBTWhJLE9BQU8sR0FBSSxJQUFHNkgsY0FBYyxLQUVoQywrREFBOER4SyxLQUZoRTtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJb0MsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQ29HLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0N4SixhQUFPLENBQVBBLEtBQ0csR0FBRXdMLGNBQWMsS0FEbkJ4TDtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNNEwsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsNENBR0c7QUFDUixZQUE0QztBQUMxQyxRQUFJaE4sR0FBRyxLQUFIQSxRQUFnQixlQUFwQixVQUE2QztBQUMzQ3dFLFlBQU0sQ0FBTkEsa0JBQTBCNEgsR0FBRCxJQUFTO0FBQ2hDLFlBQUlZLGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDNUwsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0RnTCxHQUR2RGhMO0FBSUg7QUFORG9EO0FBUUg7QUFFRDs7QUFBQSxTQUFPLHNCQUFQLE9BQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU15SSxFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTTFFLEVBQUUsR0FDYjBFLEVBQUUsSUFDRixPQUFPekUsV0FBVyxDQUFsQixTQURBeUUsY0FFQSxPQUFPekUsV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7QUM5V1AsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNEZBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0wRSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUF3RDtBQUNwRSxRQUFNO0FBQUVDLEtBQUY7QUFBS3ZDLFVBQUw7QUFBYXdDLFlBQWI7QUFBdUJDLFlBQXZCO0FBQWlDQyxXQUFqQztBQUEwQ0M7QUFBMUMsTUFBdURDLHNFQUFXLEVBQXhFO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NDLHNEQUFRLENBQUMsSUFBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTUcsV0FBVyxHQUFHLElBQUlDLHVFQUFKLEVBQXBCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHMUssNENBQUssQ0FBQzJLLFNBQU4sRUFBbkI7QUFDQSxRQUFNQyxRQUFRLEdBQUc1Syw0Q0FBSyxDQUFDMkssU0FBTixFQUFqQjtBQUNBLFFBQU07QUFBRUU7QUFBRixNQUFzQkMsMkVBQWlCLEVBQTdDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixlQUFlLENBQUM7QUFDaEMsbUJBQWU7QUFEaUIsR0FBRCxDQUFqQztBQUdBLFFBQU1HLFNBQVMsR0FBR0gsZUFBZSxDQUFDO0FBQ2hDLG1CQUFlO0FBRGlCLEdBQUQsQ0FBakM7QUFHQSxRQUFNSSxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxTQUFLLEVBQUVyQixDQUFDLENBQUMsTUFBRCxDQURWO0FBRUVzQixhQUFTLEVBQUUsTUFGYjtBQUdFdkMsT0FBRyxFQUFFLE1BSFA7QUFJRXdDLFNBQUssRUFBRSxLQUpUO0FBS0VDLFVBQU0sRUFBRSxJQUxWO0FBTUVDLGNBQVUsRUFBRSxJQU5kO0FBT0UvTCxVQUFNLEVBQUUsQ0FBQ2dNLElBQUQsRUFBZUMsTUFBZixLQUNOO0FBQUcsYUFBTyxFQUFFLE1BQU0xQixRQUFRLENBQUMsMkJBQUQsRUFBOEI7QUFBRTJCLFVBQUUsRUFBRUQsTUFBTSxDQUFDQztBQUFiLE9BQTlCO0FBQTFCLE9BQTZFRCxNQUFNLENBQUNFLElBQXBGO0FBUkosR0FEYyxFQVdkO0FBQ0VSLFNBQUssRUFBRXJCLENBQUMsQ0FBQyxpQkFBRCxDQURWO0FBRUVzQixhQUFTLEVBQUUsV0FGYjtBQUdFdkMsT0FBRyxFQUFFLFdBSFA7QUFJRXdDLFNBQUssRUFBRSxLQUpUO0FBS0VDLFVBQU0sRUFBRTtBQUxWLEdBWGMsRUFrQmQ7QUFDRUgsU0FBSyxFQUFFckIsQ0FBQyxDQUFDLE1BQUQsQ0FEVjtBQUVFc0IsYUFBUyxFQUFFLE1BRmI7QUFHRXZDLE9BQUcsRUFBRTtBQUhQLEdBbEJjLENBQWhCOztBQXlCQSxRQUFNK0MsaUJBQWlCLEdBQUl2SSxJQUFELElBQWU7QUFDdkMsUUFBSUEsSUFBSSxDQUFDd0ksTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CeEIsd0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUNELEtBRkQsTUFHSztBQUNIQSx3QkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0Q7O0FBQ0RHLGtCQUFjLENBQUNuSCxJQUFELENBQWQ7QUFDRCxHQVJEOztBQVVBLFFBQU15SSxTQUFTLEdBQUcsTUFBT0MsTUFBUCxJQUF1QjtBQUN2QyxRQUFJLENBQUNwRyxLQUFELEVBQVFpRSxLQUFSLElBQXdCLE1BQU1vQyxrREFBRSxDQUFDdkIsV0FBVyxDQUFDd0IsS0FBWixDQUFrQkYsTUFBbEIsQ0FBRCxDQUFwQzs7QUFDQSxRQUFJcEcsS0FBSixFQUFXO0FBQ1QsWUFBTTtBQUFFZ0csWUFBRjtBQUFRbks7QUFBUixVQUFvQm1FLEtBQTFCO0FBQ0E0QixZQUFNLENBQUN1QyxDQUFDLENBQUUsVUFBUzZCLElBQUssRUFBaEIsQ0FBRixFQUFzQjdCLENBQUMsQ0FBQ3RJLE9BQUQsQ0FBdkIsRUFBa0MsT0FBbEMsQ0FBTjtBQUNBLGFBQU8sRUFBUDtBQUNEOztBQUNELFdBQU9vSSxLQUFQO0FBQ0QsR0FSRDs7QUFVQSxRQUFNc0MsUUFBUSxHQUFHLFlBQVk7QUFDM0IsUUFBSSxDQUFDdkcsS0FBRCxFQUFRM0ksTUFBUixJQUF5QixNQUFNZ1Asa0RBQUUsQ0FBQ3ZCLFdBQVcsQ0FBQzBCLE1BQVosQ0FBbUI7QUFBRUMsU0FBRyxFQUFFN0I7QUFBUCxLQUFuQixDQUFELENBQXJDOztBQUNBLFFBQUk1RSxLQUFKLEVBQVc7QUFDVCxhQUFPNEIsTUFBTSxDQUFDdUMsQ0FBQyxDQUFFLFVBQVNuRSxLQUFLLENBQUNnRyxJQUFLLEVBQXRCLENBQUYsRUFBNEI3QixDQUFDLENBQUUsR0FBRW5FLEtBQUssQ0FBQ25FLE9BQVEsRUFBbEIsQ0FBN0IsRUFBbUQsT0FBbkQsQ0FBYjtBQUNEOztBQUNEK0YsVUFBTSxDQUFDdUMsQ0FBQyxDQUFDLHVCQUFELENBQUYsQ0FBTjs7QUFDQSxRQUFJZSxRQUFRLENBQUN3QixPQUFULEtBQXFCLElBQXpCLEVBQStCO0FBQzdCeEIsY0FBUSxDQUFDd0IsT0FBVCxDQUFpQjFILE1BQWpCO0FBQ0Q7O0FBQ0Q2RixrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBSCxzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsR0FYRDs7QUFhQSxRQUFNaUMsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixXQUNFLE1BQUMsK0VBQUQ7QUFDRSxTQUFHLEVBQUUzQixVQURQO0FBRUUsY0FBUSxFQUFFdUIsUUFGWjtBQUdFLFdBQUssRUFBRXBDLENBQUMsQ0FBQyxZQUFELENBSFY7QUFJRSxhQUFPLEVBQUVBLENBQUMsQ0FBQyx1QkFBRDtBQUpaLE1BREY7QUFRRCxHQVREOztBQVdBLFNBQU8sTUFBQyw0REFBRCxRQUNMO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLDJDQUFEO0FBQVEsVUFBTSxFQUFFLENBQUNrQixTQUFqQjtBQUE0QixXQUFPLEVBQUUsTUFBTWpCLFFBQVEsQ0FBQyw2QkFBRCxDQUFuRDtBQUFvRixRQUFJLEVBQUMsU0FBekY7QUFBbUcsYUFBUyxFQUFDO0FBQTdHLEtBQ0UsTUFBQyxvRUFBRCxPQURGLEVBRUdELENBQUMsQ0FBQyxRQUFELENBRkosQ0FERixFQU1FLE1BQUMsMkNBQUQ7QUFBUSxVQUFNLE1BQWQ7QUFBZSxXQUFPLEVBQUUsTUFBTTtBQUFFLFVBQUlhLFVBQVUsQ0FBQzBCLE9BQWYsRUFBd0IxQixVQUFVLENBQUMwQixPQUFYLENBQW1CRSxJQUFuQjtBQUEyQixLQUFuRjtBQUFxRixhQUFTLEVBQUMsU0FBL0Y7QUFBeUcsVUFBTSxFQUFFbkMsZUFBZSxJQUFJLENBQUNhO0FBQXJJLEtBQ0UsTUFBQyxnRUFBRCxPQURGLEVBRUduQixDQUFDLENBQUMsUUFBRCxDQUZKLENBTkYsRUFXRSxNQUFDLGlFQUFEO0FBQ0UsT0FBRyxFQUFFZSxRQURQO0FBRUUsV0FBTyxFQUFFSyxPQUZYO0FBR0UsUUFBSSxFQUFFdEIsS0FIUjtBQUlFLGdCQUFZLEVBQUU7QUFBQzRDLHFCQUFlLEVBQUVqQyxXQUFsQjtBQUErQmtDLGNBQVEsRUFBR3BKLElBQUQsSUFBaUJ1SSxpQkFBaUIsQ0FBQ3ZJLElBQUQ7QUFBM0UsS0FKaEI7QUFLRSxhQUFTLEVBQUV5SSxTQUxiO0FBTUUsU0FBSyxFQUFFakM7QUFOVCxJQVhGLEVBbUJHeUMsa0JBQWtCLEVBbkJyQixDQURLLENBQVA7QUF1QkQsQ0ExR0Q7O0FBNEdBM0MsS0FBSyxDQUFDNUgsZUFBTixHQUF3QixNQUFPc0YsR0FBUCxJQUFvQjtBQUMxQyxNQUFJb0QsV0FBVyxHQUFHLElBQUlDLHVFQUFKLENBQWdCckQsR0FBaEIsQ0FBbEI7QUFDQSxNQUFJcUYsY0FBYyxHQUFHO0FBQ25CQyxXQUFPLEVBQUUsRUFEVTtBQUVuQkMsV0FBTyxFQUFFO0FBRlUsR0FBckI7QUFJQSxNQUFJckosS0FBSyxHQUFHOEQsR0FBRyxDQUFDOUQsS0FBaEI7QUFDQSxNQUFJb0osT0FBTyxHQUFHRSx1RUFBZSxDQUFDQyxVQUFoQixDQUEyQnZKLEtBQTNCLEVBQWtDbUosY0FBbEMsQ0FBZDtBQUNBLE1BQUksQ0FBQy9HLEtBQUQsRUFBUWlFLEtBQVIsSUFBd0IsTUFBTW9DLGtEQUFFLENBQUN2QixXQUFXLENBQUN3QixLQUFaLENBQWtCVSxPQUFsQixDQUFELENBQXBDO0FBQ0EsU0FBTztBQUNMSSxzQkFBa0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCLENBRGY7QUFFTHBILFNBQUssRUFBRUEsS0FGRjtBQUdMaUUsU0FBSyxFQUFFTyw4REFBVyxDQUFDNkMsT0FBWixDQUFvQnBELEtBQXBCLEVBQTJCLE1BQTNCLEVBQW1DLEVBQW5DLENBSEY7QUFJTEMsU0FBSyxFQUFFTSw4REFBVyxDQUFDNkMsT0FBWixDQUFvQnBELEtBQXBCLEVBQTJCLE9BQTNCLEVBQW9DLENBQXBDLENBSkY7QUFLTHFELGdCQUFZLEVBQUU7QUFDWk4sYUFBTyxFQUFFRSx1RUFBZSxDQUFDSyxTQUFoQixDQUEwQlAsT0FBMUI7QUFERztBQUxULEdBQVA7QUFTRCxDQWxCRDs7QUFtQkFoRCxLQUFLLENBQUN3RCxXQUFOLEdBQW9CO0FBQ2xCLGlCQUFlO0FBREcsQ0FBcEI7QUFHZXhELG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxNQUFNeUQsbUJBQW1CLEdBQUcsTUFBTTtBQUM5QixRQUFNO0FBQUV6TSxVQUFGO0FBQVVtSixLQUFWO0FBQWFDO0FBQWIsTUFBMEJJLHNFQUFXLENBQUM7QUFBRWtELFFBQUksRUFBRSxDQUFDLE1BQUQ7QUFBUixHQUFELENBQTNDOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNO0FBQ3ZCLFVBQU1DLFNBQVMsR0FBRzVNLE1BQU0sQ0FBQ2tDLFFBQXpCO0FBQ0EsVUFBTTJLLFNBQWMsR0FBR0MsK0NBQXZCOztBQUNBLFNBQUssSUFBSUMsU0FBVCxJQUFzQkYsU0FBdEIsRUFBaUM7QUFDN0IsVUFBSUcsWUFBWSxHQUFHSCxTQUFTLENBQUNFLFNBQUQsQ0FBNUI7QUFDQSxVQUFJLENBQUNDLFlBQVksQ0FBQ0MsTUFBbEIsRUFBMEI7QUFDMUIsVUFBSUQsWUFBWSxDQUFDQyxNQUFiLENBQW9CQyxNQUFwQixDQUEyQixDQUEzQixNQUFrQ04sU0FBdEMsRUFBaUQsT0FBT0csU0FBUDtBQUNwRDtBQUNKLEdBUkQ7O0FBU0EsTUFBSUksVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUosU0FBUyxHQUFHSixZQUFZLEVBQTlCO0FBQ0EsTUFBSVMsTUFBZSxHQUFHQyxtRUFBYyxDQUFDTixTQUFELENBQXBDOztBQUNBLE1BQUlLLE1BQU0sQ0FBQyxDQUFELENBQU4sSUFBYUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVOUwsSUFBVixJQUFrQixxQkFBbkMsRUFBMEQ7QUFDdEQ4TCxVQUFNLENBQUNFLE9BQVAsQ0FBZTtBQUNYaE0sVUFBSSxFQUFFO0FBREssS0FBZjtBQUdIOztBQUNELE9BQUssSUFBSXFCLEtBQVQsSUFBa0J5SyxNQUFsQixFQUEwQjtBQUN0QixRQUFJO0FBQ0EsVUFBSUcsU0FBUyxHQUFHQywwREFBTyxDQUFDN0ssS0FBSyxDQUFDckIsSUFBUCxDQUF2QjtBQUNBNkwsZ0JBQVUsQ0FBQ2pKLElBQVgsQ0FBZ0IsTUFBQywrQ0FBRCxDQUFZLElBQVo7QUFBaUIsV0FBRyxFQUFFdkIsS0FBSyxDQUFDckI7QUFBNUIsU0FDWixNQUFDLGdEQUFELEVBQVVpTSxTQUFWLEVBQ0ksaUJBQUs1SyxLQUFLLENBQUNyQixJQUFOLElBQWMscUJBQWQsR0FBc0MsTUFBQyw0REFBRCxPQUF0QyxHQUF1RDZILENBQUMsQ0FBQ3hHLEtBQUssQ0FBQ3JCLElBQVAsQ0FBN0QsQ0FESixDQURZLENBQWhCO0FBS0gsS0FQRCxDQVFBLE9BQU03RCxDQUFOLEVBQVM7QUFDTDBQLGdCQUFVLENBQUNqSixJQUFYLENBQWdCLE1BQUMsK0NBQUQsQ0FBWSxJQUFaO0FBQWlCLFdBQUcsRUFBRXZCLEtBQUssQ0FBQ3JCO0FBQTVCLFNBQ1g2SCxDQUFDLENBQUN4RyxLQUFLLENBQUNyQixJQUFQLENBRFUsQ0FBaEI7QUFHSDtBQUNKOztBQUVELFNBQU8sTUFBQywrQ0FBRCxRQUFhNkwsVUFBYixDQUFQO0FBRUgsQ0FyQ0Q7O0FBdUNlVixrRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBLE1BQU07QUFBRWdCO0FBQUYsSUFBY0MsMENBQXBCOztBQUVBLE1BQU1DLGFBQU4sU0FBNEJyTyw0Q0FBSyxDQUFDbkMsU0FBbEMsQ0FBNEM7QUFDMUNDLGFBQVcsR0FBRztBQUNaOztBQURZLHNDQW1CSCxNQUFNO0FBQ2YsWUFBTTtBQUFFd1E7QUFBRixVQUFlLEtBQUsxUCxLQUExQjs7QUFDQSxVQUFJLE9BQU8wUCxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDQSxnQkFBUSxDQUFDLEtBQUtDLEtBQUwsQ0FBV25MLElBQVosQ0FBUjtBQUNEO0FBQ0YsS0F4QmE7O0FBQUEsc0NBMEJILFlBQVk7QUFDckIsWUFBTTtBQUFFb0w7QUFBRixVQUFlLEtBQUs1UCxLQUExQjs7QUFDQSxVQUFJLE9BQU80UCxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDLGNBQU1BLFFBQVEsQ0FBQyxLQUFLRCxLQUFMLENBQVduTCxJQUFaLENBQWQ7QUFDRDtBQUNGLEtBL0JhOztBQUVaLFNBQUttTCxLQUFMLEdBQWEsRUFBYjtBQUVEOztBQUVEakMsTUFBSSxDQUFDbEosSUFBSSxHQUFHLElBQVIsRUFBYztBQUNoQixRQUFJO0FBQUU4SCxXQUFGO0FBQVN1RDtBQUFULFFBQXFCLEtBQUs3UCxLQUE5QjtBQUNBc00sU0FBSyxHQUFHQSxLQUFLLElBQUksT0FBakI7QUFDQXVELFdBQU8sR0FBR0EsT0FBTyxJQUFJLFNBQXJCO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQUV0TCxVQUFJLEVBQUVBO0FBQVIsS0FBZDtBQUNBK0ssV0FBTyxDQUFDO0FBQ05qRCxXQUFLLEVBQUVBLEtBREQ7QUFFTnVELGFBQU8sRUFBRUEsT0FGSDtBQUdORSxVQUFJLEVBQUUsS0FBS0gsUUFITDtBQUlORixjQUFRLEVBQUUsS0FBS0E7QUFKVCxLQUFELENBQVA7QUFNRDs7QUFnQkQvTyxRQUFNLEdBQUc7QUFDUCxXQUNFLGtCQURGO0FBSUQ7O0FBdkN5Qzs7QUEwQzdCOE8sNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBOztBQUVBLE1BQU1PLE9BQU8sR0FBRyxDQUFDTCxLQUFLLEdBQUcsRUFBVCxFQUFhWixNQUFiLEtBQXdCO0FBQ3RDLE1BQUdBLE1BQU0sQ0FBQ2tCLElBQVAsS0FBZ0IsVUFBbkIsRUFBOEI7QUFDNUJOLFNBQUsscUJBQ0FBLEtBREEsQ0FBTDs7QUFHQU8saURBQUMsQ0FBQzNJLEdBQUYsQ0FBTW9JLEtBQU4sRUFBYVosTUFBTSxDQUFDb0IsT0FBUCxDQUFleE0sSUFBNUIsRUFBa0NvTCxNQUFNLENBQUNvQixPQUFQLENBQWV2TyxLQUFqRDs7QUFDQSxXQUFPK04sS0FBUDtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVREO0FBV0E7Ozs7O0FBSUEsTUFBTXhFLFFBQVEsR0FBRyxDQUFDeEgsSUFBRCxFQUFPL0IsS0FBUCxNQUFrQjtBQUNqQ3FPLE1BQUksRUFBRSxVQUQyQjtBQUVqQ0UsU0FBTyxFQUFFO0FBQ1B4TSxRQURPO0FBRVAvQjtBQUZPO0FBRndCLENBQWxCLENBQWpCOztBQVFBLE1BQU13TyxTQUFTLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEVBQWIsRUFBaUJwSyxPQUFqQixLQUE2QjtBQUM3QyxNQUFJcUssaUJBQWlCLEdBQUksQ0FBQ3JLLE9BQU8sQ0FBQ3NLLFFBQVQsSUFBcUJoUyxNQUFNLENBQUNpUyw0QkFBN0IsR0FBNkRqUyxNQUFNLENBQUNpUyw0QkFBUCxFQUE3RCxHQUFxR0MsU0FBN0g7QUFDQSxTQUFPQyx5REFBVyxDQUFDVixPQUFELEVBQVVLLFNBQVYsRUFBcUJDLGlCQUFyQixDQUFsQjtBQUNELENBSEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVLO0FBQUYsSUFBa0JDLCtDQUF4Qjs7QUFFQSxNQUFNQyxnQkFBTixTQUErQnpQLDRDQUFLLENBQUNuQyxTQUFyQyxDQUErQztBQUMzQ0MsYUFBVyxDQUFDYyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOOztBQURlLHNDQWVQOFEsV0FBRCxJQUFpQjtBQUN4QixVQUFHLENBQUNBLFdBQUosRUFBaUJBLFdBQVcsR0FBR1osNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTSxLQUFLckMsS0FBTCxDQUFXK1EsTUFBakIsRUFBeUIsd0JBQXpCLEVBQW1ELEVBQW5ELENBQWQ7QUFDakIsVUFBSSxDQUFDRCxXQUFMLEVBQWtCLE9BQU8sRUFBUDtBQUNsQixVQUFJLENBQUNBLFdBQVcsQ0FBQyxDQUFELENBQWhCLEVBQXFCQSxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCTCxTQUFqQjtBQUNyQixVQUFHLENBQUNLLFdBQVcsQ0FBQyxDQUFELENBQWYsRUFBb0JBLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJMLFNBQWpCO0FBQ3BCLGFBQU87QUFDSEssbUJBQVcsRUFBRUEsV0FEVjtBQUVIRSxhQUFLLEVBQUUsQ0FDSEYsV0FBVyxDQUFDLENBQUQsQ0FBWCxHQUFpQkcsNkNBQU0sQ0FBQ0gsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUF2QixHQUEwQ0wsU0FEdkMsRUFFSEssV0FBVyxDQUFDLENBQUQsQ0FBWCxHQUFpQkcsNkNBQU0sQ0FBQ0gsV0FBVyxDQUFDLENBQUQsQ0FBWixDQUF2QixHQUEwQ0wsU0FGdkM7QUFGSixPQUFQO0FBT0gsS0EzQmtCOztBQUFBLHNDQTRCUixDQUFDTyxLQUFELEVBQVFGLFdBQVIsS0FBd0I7QUFDL0IsV0FBS2hCLFFBQUwsbUJBQ08sS0FBS29CLFFBQUwsQ0FBY0osV0FBZCxDQURQLEdBRUcsTUFBTTtBQUNELGFBQUtsQixRQUFMO0FBQ1AsT0FKRDtBQUtILEtBbENrQjs7QUFBQSxtQ0FvQ1gsTUFBTTtBQUNWLFdBQUtFLFFBQUwsQ0FBYztBQUFDZ0IsbUJBQVcsRUFBQztBQUFiLE9BQWQsRUFBZ0MsTUFBTTtBQUFDLGFBQUtsQixRQUFMO0FBQWdCLE9BQXZEO0FBQ0gsS0F0Q2tCOztBQUFBLHNDQXdDUixNQUFNO0FBQ2IsWUFBTTtBQUFFbUIsY0FBRjtBQUFVeEI7QUFBVixVQUFzQixLQUFLdlAsS0FBakM7QUFDQSxVQUFJOE4sT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsVUFBSSxLQUFLNkIsS0FBTCxDQUFXbUIsV0FBWCxJQUEwQixLQUFLbkIsS0FBTCxDQUFXbUIsV0FBWCxDQUF1QixDQUF2QixDQUExQixJQUF1RCxLQUFLbkIsS0FBTCxDQUFXbUIsV0FBWCxDQUF1QixDQUF2QixDQUEzRCxFQUFzRjtBQUNsRmhELGVBQU8sQ0FBQzlILElBQVIsQ0FBYTtBQUNUMUQsZUFBSyxFQUFFeU8sTUFBTSxDQUFDek8sS0FETDtBQUVUNk8sa0JBQVEsRUFBRSxLQUFLblIsS0FBTCxDQUFXbVIsUUFBWCxJQUF1QixTQUZ4QjtBQUdUdlAsZUFBSyxFQUFFLENBQ0hxUCw2Q0FBTSxDQUFDLEtBQUt0QixLQUFMLENBQVdtQixXQUFYLENBQXVCLENBQXZCLENBQUQsQ0FBTixDQUFrQ00sT0FBbEMsQ0FBMEMsTUFBMUMsRUFBa0RDLEdBQWxELENBQXNELEVBQXRELEVBQXlELEdBQXpELEVBQThEQyxXQUE5RCxFQURHLEVBRUhMLDZDQUFNLENBQUMsS0FBS3RCLEtBQUwsQ0FBV21CLFdBQVgsQ0FBdUIsQ0FBdkIsQ0FBRCxDQUFOLENBQWtDUyxLQUFsQyxDQUF3QyxNQUF4QyxFQUFnREYsR0FBaEQsQ0FBb0QsRUFBcEQsRUFBdUQsR0FBdkQsRUFBNERDLFdBQTVELEVBRkc7QUFIRSxTQUFiO0FBUUg7O0FBQ0QvQixhQUFPLENBQUN6QixPQUFELENBQVA7QUFDSCxLQXREa0I7O0FBRWYsU0FBSzZCLEtBQUwscUJBQ08sS0FBS3VCLFFBQUwsRUFEUDtBQUdIOztBQUVETSxvQkFBa0IsQ0FBQ0MsU0FBRCxFQUFZO0FBQzFCLFFBQUlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixTQUFTLENBQUNWLE1BQVYsQ0FBaUJhLGFBQWhDLEtBQWtERixJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLM1IsS0FBTCxDQUFXK1EsTUFBWCxDQUFrQmEsYUFBakMsQ0FBdEQsRUFBdUc7QUFDbkcsV0FBSzlCLFFBQUwsbUJBQ08sS0FBS29CLFFBQUwsRUFEUDtBQUdIO0FBQ0o7O0FBMENEdlEsUUFBTSxHQUFHO0FBQ0wsd0JBQTJDLEtBQUtYLEtBQWhEO0FBQUEsVUFBTTtBQUFFdVAsYUFBRjtBQUFXd0I7QUFBWCxLQUFOO0FBQUEsVUFBNEJjLFVBQTVCOztBQUNBLFdBQU87QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVg7QUFBWixPQUNILE1BQUMsV0FBRCxlQUNRRCxVQURSO0FBRUksZ0JBQVUsR0FBRSxNQUFNLElBQVIsQ0FGZDtBQUdJLFNBQUcsRUFBRXZSLEdBQUcsSUFBSSxLQUFLeVIsUUFBTCxHQUFnQnpSLEdBSGhDO0FBSUksV0FBSyxFQUFFLEtBQUtxUCxLQUFMLENBQVdxQixLQUp0QjtBQUtJLGNBQVEsRUFBRSxLQUFLcEQsUUFMbkI7QUFNSSxrQkFBWSxFQUFFLEtBQUtnQyxRQU52QjtBQU9JLFdBQUssRUFBRTtBQUFFcEQsYUFBSyxFQUFFLE9BQVQ7QUFBa0J3RixvQkFBWSxFQUFFO0FBQWhDO0FBUFgsT0FERyxFQVVILE1BQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUUsS0FBS0MsS0FBdEI7QUFBNkIsWUFBTTtBQUFuQyxlQVZHLENBQVA7QUFZSDs7QUF0RTBDOztBQXlFaENwQiwrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVxQjtBQUFGLElBQWFDLDJDQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0MsMENBQUssQ0FBQ0MsS0FBekI7O0FBRUEsTUFBTUMsY0FBTixTQUE2Qm5SLDRDQUFLLENBQUNuQyxTQUFuQyxDQUE2QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2pDO0FBQ0ppTyxZQUFNLEVBQUVnRCw2Q0FBQyxDQUFDN04sR0FBRixDQUFNLEtBQUtyQyxLQUFMLENBQVcrUSxNQUFqQixFQUF3Qix3QkFBeEIsRUFBa0QsRUFBbEQ7QUFESixLQURpQzs7QUFBQSxzQ0FhN0I3RCxNQUFELElBQVk7QUFDbkIsV0FBSzRDLFFBQUwsQ0FBYztBQUFFNUMsY0FBTSxFQUFFQTtBQUFWLE9BQWQ7QUFDSCxLQWZ3Qzs7QUFBQSxzQ0FpQjlCLE1BQU07QUFDYixZQUFNO0FBQUU2RCxjQUFGO0FBQVV4QjtBQUFWLFVBQXNCLEtBQUt2UCxLQUFqQztBQUNBLFVBQUk4TixPQUFPLEdBQUcsRUFBZDs7QUFDQSxVQUFJLEtBQUs2QixLQUFMLENBQVd6QyxNQUFYLElBQXFCLEtBQUt5QyxLQUFMLENBQVd6QyxNQUFYLENBQWtCRixNQUFsQixHQUEyQixDQUFwRCxFQUF1RDtBQUNuRGMsZUFBTyxHQUFHLENBQUM7QUFDUHhMLGVBQUssRUFBRXlPLE1BQU0sQ0FBQ3pPLEtBRFA7QUFFUDZPLGtCQUFRLEVBQUUsS0FBS25SLEtBQUwsQ0FBV21SLFFBQVgsSUFBdUIsSUFGMUI7QUFHUHZQLGVBQUssRUFBRSxLQUFLK04sS0FBTCxDQUFXekM7QUFIWCxTQUFELENBQVY7QUFLQTs7Ozs7QUFLSDs7QUFDRHFDLGFBQU8sQ0FBQ3pCLE9BQUQsQ0FBUDtBQUNILEtBakN3QztBQUFBOztBQUt6QzBELG9CQUFrQixDQUFDQyxTQUFELEVBQVk7QUFDMUIsUUFBSUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFNBQVMsQ0FBQ1YsTUFBVixDQUFpQmEsYUFBaEMsS0FBa0RGLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUszUixLQUFMLENBQVcrUSxNQUFYLENBQWtCYSxhQUFqQyxDQUF0RCxFQUF1RztBQUNuRyxVQUFJMUUsTUFBTSxHQUFHZ0QsNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTSxLQUFLckMsS0FBTCxDQUFXK1EsTUFBakIsRUFBd0Isd0JBQXhCLEVBQWtELEVBQWxELENBQWI7O0FBQ0EsV0FBS2pCLFFBQUwsQ0FBYztBQUNWNUMsY0FBTSxFQUFFQTtBQURFLE9BQWQ7QUFHSDtBQUNKOztBQXVCRHNGLGVBQWEsR0FBRztBQUNaLFFBQUcsQ0FBQyxLQUFLeFMsS0FBTCxDQUFXaUcsT0FBZixFQUF3QjtBQUN4QixXQUFPLEtBQUtqRyxLQUFMLENBQVdpRyxPQUFYLENBQW1Cd00sR0FBbkIsQ0FBdUJDLE1BQU0sSUFBSSxNQUFDLE1BQUQ7QUFBUSxTQUFHLEVBQUVBLE1BQU0sQ0FBQzlRLEtBQXBCO0FBQTJCLFdBQUssRUFBRThRLE1BQU0sQ0FBQzlRLEtBQXpDO0FBQWdELFdBQUssRUFBRThRLE1BQU0sQ0FBQ0M7QUFBOUQsT0FBdUVELE1BQU0sQ0FBQ0MsS0FBOUUsQ0FBakMsQ0FBUDtBQUNIOztBQUNEaFMsUUFBTSxHQUFHO0FBQ0wsd0JBQWlGLEtBQUtYLEtBQXRGO0FBQUEsVUFBTTtBQUFFdVAsYUFBRjtBQUFXd0IsWUFBWDtBQUFtQjlLLGFBQW5CO0FBQTRCMk0sbUJBQTVCO0FBQTJDQztBQUEzQyxLQUFOO0FBQUEsVUFBa0VoQixVQUFsRTs7QUFDQSxXQUFPO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYO0FBQVosT0FDSCxNQUFDLDJDQUFEO0FBQ0ksVUFBSSxFQUFDO0FBRFQsT0FFUUQsVUFGUjtBQUdJLGdCQUFVLEVBQUUsSUFIaEI7QUFJSSxlQUFTLEVBQUUsSUFKZjtBQUtJLFNBQUcsRUFBRXZSLEdBQUcsSUFBSSxLQUFLeVIsUUFBTCxHQUFnQnpSLEdBTGhDO0FBTUksV0FBSyxFQUFFLEtBQUtxUCxLQUFMLENBQVd6QyxNQU50QjtBQU9JLGNBQVEsRUFBRSxLQUFLVSxRQVBuQjtBQVFJLFlBQU0sRUFBRSxLQUFLZ0MsUUFSakI7QUFTSSxzQkFBZ0IsRUFBQyxPQVRyQjtBQVVJLFdBQUssRUFBRTtBQUFFcEQsYUFBSyxFQUFFLE9BQVQ7QUFBa0J3RixvQkFBWSxFQUFFLENBQWhDO0FBQW1DYyxlQUFPLEVBQUU7QUFBNUM7QUFWWCxRQWFLLEtBQUtOLGFBQUwsRUFiTCxDQURHLENBQVA7QUFpQkg7O0FBMUR3Qzs7QUE2RDlCRCw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVMO0FBQUYsSUFBYUMsMkNBQW5COztBQUVBLE1BQU1ZLFdBQU4sU0FBMEIzUiw0Q0FBSyxDQUFDbkMsU0FBaEMsQ0FBMEM7QUFBQTtBQUFBOztBQUFBLG1DQUM5QjtBQUNKMkMsV0FBSyxFQUFFc08sNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTSxLQUFLckMsS0FBTCxDQUFXK1EsTUFBakIsRUFBeUIsd0JBQXpCLENBREg7QUFFSkksY0FBUSxFQUFFLEtBQUtuUixLQUFMLENBQVdtUixRQUFYLElBQXVCO0FBRjdCLEtBRDhCOztBQUFBLHNDQWlCMUI1UixDQUFELElBQU87QUFDZCxXQUFLdVEsUUFBTCxDQUFjO0FBQUVsTyxhQUFLLEVBQUVyQyxDQUFDLENBQUNFLE1BQUYsQ0FBU21DO0FBQWxCLE9BQWQ7QUFDSCxLQW5CcUM7O0FBQUEsbUNBcUI5QixNQUFNO0FBQ1YsV0FBS2tPLFFBQUwsQ0FBYztBQUFDbE8sYUFBSyxFQUFDO0FBQVAsT0FBZCxFQUEwQixNQUFNO0FBQUMsYUFBS2dPLFFBQUw7QUFBZ0IsT0FBakQ7QUFDSCxLQXZCcUM7O0FBQUEsc0NBeUIzQixNQUFNO0FBQ2IsWUFBTTtBQUFFbUIsY0FBRjtBQUFVeEI7QUFBVixVQUFzQixLQUFLdlAsS0FBakM7QUFDQSxVQUFJOE4sT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsVUFBSSxLQUFLNkIsS0FBTCxDQUFXL04sS0FBZixFQUFzQjtBQUNsQmtNLGVBQU8sQ0FBQzlILElBQVIsQ0FBYTtBQUNUMUQsZUFBSyxFQUFFeU8sTUFBTSxDQUFDek8sS0FETDtBQUVUNk8sa0JBQVEsRUFBRSxLQUFLeEIsS0FBTCxDQUFXd0IsUUFGWjtBQUdUdlAsZUFBSyxFQUFFLEtBQUsrTixLQUFMLENBQVcvTjtBQUhULFNBQWI7QUFLSDs7QUFDRDJOLGFBQU8sQ0FBQ3pCLE9BQUQsQ0FBUDtBQUNILEtBcENxQztBQUFBOztBQU10QzBELG9CQUFrQixDQUFDQyxTQUFELEVBQVk7QUFDMUIsUUFBSXZCLDZDQUFDLENBQUM3TixHQUFGLENBQU0sS0FBS3JDLEtBQUwsQ0FBVytRLE1BQWpCLEVBQXlCLHdCQUF6QixLQUFzRGIsNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTW9QLFNBQVMsQ0FBQ1YsTUFBaEIsRUFBd0Isd0JBQXhCLENBQTFELEVBQTZHO0FBQ3pHLFdBQUtqQixRQUFMLENBQWM7QUFDVmxPLGFBQUssRUFBRXNPLDZDQUFDLENBQUM3TixHQUFGLENBQU0sS0FBS3JDLEtBQUwsQ0FBVytRLE1BQWpCLEVBQXlCLHdCQUF6QjtBQURHLE9BQWQ7QUFHSDs7QUFDRCxRQUFJLEtBQUtpQyxhQUFMLElBQXNCLEtBQUtoVCxLQUFMLENBQVcrUSxNQUFYLENBQWtCaUMsYUFBNUMsRUFBMkQ7QUFDdkQsV0FBS0EsYUFBTCxHQUFxQixLQUFLaFQsS0FBTCxDQUFXK1EsTUFBWCxDQUFrQmlDLGFBQXZDO0FBQ0EsV0FBS2pCLFFBQUwsQ0FBY2tCLEtBQWQsQ0FBb0JDLE1BQXBCO0FBQ0g7QUFDSjs7QUFzQkRDLGdCQUFjLEdBQUc7QUFDYixVQUFNO0FBQUVDLGNBQVEsR0FBRyxFQUFiO0FBQWlCQyxrQkFBakI7QUFBK0JsQztBQUEvQixRQUE0QyxLQUFLblIsS0FBdkQ7QUFFQSxRQUFJcVQsWUFBSixFQUFrQjtBQUNsQixRQUFJQyxTQUFTLEdBQUcsQ0FDWjtBQUFFMVIsV0FBSyxFQUFFLFVBQVQ7QUFBcUIrUSxXQUFLLEVBQUVTLFFBQVEsQ0FBQyxVQUFELENBQVIsSUFBd0I7QUFBcEQsS0FEWSxFQUVaO0FBQUV4UixXQUFLLEVBQUUsR0FBVDtBQUFjK1EsV0FBSyxFQUFFUyxRQUFRLENBQUMsT0FBRCxDQUFSLElBQXFCO0FBQTFDLEtBRlksRUFHWjtBQUFFeFIsV0FBSyxFQUFFLFlBQVQ7QUFBdUIrUSxXQUFLLEVBQUVTLFFBQVEsQ0FBQyxZQUFELENBQVIsSUFBMEI7QUFBeEQsS0FIWSxFQUlaO0FBQUV4UixXQUFLLEVBQUUsVUFBVDtBQUFxQitRLFdBQUssRUFBRVMsUUFBUSxDQUFDLFVBQUQsQ0FBUixJQUF3QjtBQUFwRCxLQUpZLENBQWhCOztBQU1BLFFBQUksS0FBS3BULEtBQUwsQ0FBV2lRLElBQVgsSUFBbUIsUUFBdkIsRUFBaUM7QUFDN0JxRCxlQUFTLEdBQUcsQ0FDUjtBQUFFMVIsYUFBSyxFQUFFLEdBQVQ7QUFBYytRLGFBQUssRUFBRTtBQUFyQixPQURRLEVBRVI7QUFBRS9RLGFBQUssRUFBRSxHQUFUO0FBQWMrUSxhQUFLLEVBQUU7QUFBckIsT0FGUSxFQUdSO0FBQUUvUSxhQUFLLEVBQUUsR0FBVDtBQUFjK1EsYUFBSyxFQUFFO0FBQXJCLE9BSFEsRUFJUjtBQUFFL1EsYUFBSyxFQUFFLElBQVQ7QUFBZStRLGFBQUssRUFBRTtBQUF0QixPQUpRLEVBS1I7QUFBRS9RLGFBQUssRUFBRSxJQUFUO0FBQWUrUSxhQUFLLEVBQUU7QUFBdEIsT0FMUSxDQUFaO0FBUUg7O0FBQ0QsVUFBTVksZUFBZSxHQUFHcEMsUUFBUSxJQUFJbUMsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhMVIsS0FBakQ7QUFFQSxXQUFPLE1BQUMsMkNBQUQ7QUFBUSxrQkFBWSxFQUFFMlIsZUFBdEI7QUFBdUMsV0FBSyxFQUFFO0FBQUUvRyxhQUFLLEVBQUU7QUFBVCxPQUE5QztBQUE2RCxjQUFRLEVBQUU1SyxLQUFLLElBQUksS0FBS2tPLFFBQUwsQ0FBYztBQUFFcUIsZ0JBQVEsRUFBRXZQO0FBQVosT0FBZDtBQUFoRixPQUNGMFIsU0FBUyxDQUFDYixHQUFWLENBQWN0QixRQUFRLElBQUksTUFBQyxNQUFEO0FBQVEsV0FBSyxFQUFFQSxRQUFRLENBQUN2UCxLQUF4QjtBQUErQixTQUFHLEVBQUV1UCxRQUFRLENBQUN2UDtBQUE3QyxPQUFxRHVQLFFBQVEsQ0FBQ3dCLEtBQTlELENBQTFCLENBREUsQ0FBUDtBQUdIOztBQUVEaFMsUUFBTSxHQUFHO0FBQ0wsd0JBQStELEtBQUtYLEtBQXBFO0FBQUEsVUFBTTtBQUFFdVAsYUFBRjtBQUFXd0IsWUFBWDtBQUFtQnNDLGtCQUFuQjtBQUFpQ3BEO0FBQWpDLEtBQU47QUFBQSxVQUFnRDRCLFVBQWhEOztBQUNBLFFBQUk1UyxTQUFTLEdBQUdvVCwwQ0FBaEI7QUFDQSxRQUFHcEMsSUFBSSxJQUFJLFFBQVgsRUFBcUJoUixTQUFTLEdBQUd1VSxnREFBWjtBQUNyQixXQUFPO0FBQUssV0FBSyxFQUFFO0FBQUUxQixlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0gsTUFBQyxTQUFELGVBQ1FELFVBRFI7QUFFSSxpQkFBVyxFQUFFLEtBQUtzQixjQUFMLEVBRmpCO0FBR0ksU0FBRyxFQUFFN1MsR0FBRyxJQUFJLEtBQUt5UixRQUFMLEdBQWdCelIsR0FIaEM7QUFJSSxXQUFLLEVBQUUsS0FBS3FQLEtBQUwsQ0FBVy9OLEtBSnRCO0FBS0ksY0FBUSxFQUFFLEtBQUtnTSxRQUxuQjtBQU1JLGtCQUFZLEVBQUUsS0FBS2dDLFFBTnZCO0FBT0ksZ0JBQVUsTUFQZDtBQVFJLFdBQUssRUFBRTtBQUFFcEQsYUFBSyxFQUFFLE9BQVQ7QUFBa0J3RixvQkFBWSxFQUFFLENBQWhDO0FBQW1DYyxlQUFPLEVBQUU7QUFBNUM7QUFSWCxPQURHLEVBV0gsTUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRSxLQUFLYixLQUF0QjtBQUE2QixZQUFNO0FBQW5DLGVBWEcsQ0FBUDtBQWFIOztBQWxGcUM7O0FBcUYzQmMsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFBRVQ7QUFBRixJQUFZbUIsMENBQWxCOztBQUVBLE1BQU1DLFdBQU4sU0FBMEJ0Uyw0Q0FBSyxDQUFDbkMsU0FBaEMsQ0FBMEM7QUFDdENDLGFBQVcsQ0FBQ2MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSx3Q0FlTDJULE9BQUQsSUFBYTtBQUN0QixVQUFHQSxPQUFPLElBQUlsRCxTQUFkLEVBQXlCa0QsT0FBTyxHQUFHekQsNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTSxLQUFLckMsS0FBTCxDQUFXK1EsTUFBakIsRUFBeUIsd0JBQXpCLEVBQW1ETixTQUFuRCxDQUFWO0FBQ3pCLGFBQU87QUFDSGtELGVBQU8sRUFBRUE7QUFETixPQUFQO0FBR0gsS0FwQmtCOztBQUFBLHNDQXNCUHBVLENBQUQsSUFBTztBQUNkLFdBQUt1USxRQUFMLG1CQUNPLEtBQUs4RCxVQUFMLENBQWdCclUsQ0FBQyxDQUFDRSxNQUFGLENBQVNtQyxLQUF6QixDQURQLEdBRUcsTUFBTTtBQUNELGFBQUtnTyxRQUFMO0FBQ1AsT0FKRDtBQUtILEtBNUJrQjs7QUFBQSxtQ0E4QlgsTUFBTTtBQUNWLFdBQUtFLFFBQUwsQ0FBYztBQUFDNkQsZUFBTyxFQUFDbEQ7QUFBVCxPQUFkLEVBQW1DLE1BQU07QUFBQyxhQUFLYixRQUFMO0FBQWdCLE9BQTFEO0FBQ0gsS0FoQ2tCOztBQUFBLHNDQWtDUixNQUFNO0FBQ2IsWUFBTTtBQUFFbUIsY0FBRjtBQUFVeEI7QUFBVixVQUFzQixLQUFLdlAsS0FBakM7QUFDQSxVQUFJOE4sT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsVUFBSSxLQUFLNkIsS0FBTCxDQUFXZ0UsT0FBWCxJQUFzQmxELFNBQTFCLEVBQXFDO0FBQ2pDM0MsZUFBTyxDQUFDOUgsSUFBUixDQUFhO0FBQ1QxRCxlQUFLLEVBQUV5TyxNQUFNLENBQUN6TyxLQURMO0FBRVQ2TyxrQkFBUSxFQUFFLEtBQUtuUixLQUFMLENBQVdtUixRQUFYLElBQXVCLEdBRnhCO0FBR1R2UCxlQUFLLEVBQUUsS0FBSytOLEtBQUwsQ0FBV2dFO0FBSFQsU0FBYjtBQUtIOztBQUNEcEUsYUFBTyxDQUFDekIsT0FBRCxDQUFQO0FBQ0gsS0E3Q2tCOztBQUVmLFNBQUs2QixLQUFMLHFCQUNPLEtBQUtpRSxVQUFMLEVBRFA7QUFHSDs7QUFFRHBDLG9CQUFrQixDQUFDQyxTQUFELEVBQVk7QUFDMUIsUUFBSUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFNBQVMsQ0FBQ1YsTUFBVixDQUFpQmEsYUFBaEMsS0FBa0RGLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUszUixLQUFMLENBQVcrUSxNQUFYLENBQWtCYSxhQUFqQyxDQUF0RCxFQUF1RztBQUNuRyxXQUFLOUIsUUFBTCxtQkFDTyxLQUFLOEQsVUFBTCxFQURQO0FBR0g7QUFDSjs7QUFpQ0RqVCxRQUFNLEdBQUc7QUFDTCx3QkFBMkMsS0FBS1gsS0FBaEQ7QUFBQSxVQUFNO0FBQUV1UCxhQUFGO0FBQVd3QjtBQUFYLEtBQU47QUFBQSxVQUE0QmMsVUFBNUI7O0FBQ0EsV0FBTztBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWDtBQUFaLE9BQ0gsTUFBQyxLQUFELGVBQ1FELFVBRFI7QUFFSSxTQUFHLEVBQUV2UixHQUFHLElBQUksS0FBS3lSLFFBQUwsR0FBZ0J6UixHQUZoQztBQUdJLFdBQUssRUFBRSxLQUFLcVAsS0FBTCxDQUFXZ0UsT0FIdEI7QUFJSSxjQUFRLEVBQUUsS0FBSy9GLFFBSm5CO0FBS0ksYUFBTyxFQUFFbUQsTUFBTSxDQUFDOUssT0FMcEI7QUFNSSxXQUFLLEVBQUU7QUFBRXVHLGFBQUssRUFBRSxPQUFUO0FBQWtCd0Ysb0JBQVksRUFBRTtBQUFoQztBQU5YLE9BREcsRUFTSCxNQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFLEtBQUtDLEtBQXRCO0FBQTZCLFlBQU07QUFBbkMsZUFURyxDQUFQO0FBV0g7O0FBNURxQzs7QUErRDNCeUIsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxTQUFOLFNBQXdCelMsNENBQUssQ0FBQ25DLFNBQTlCLENBQXdDO0FBQ3BDQyxhQUFXLENBQUNjLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsb0RBcUNPNk4sY0FBRCxJQUFvQjtBQUN6QyxXQUFLeEIsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYW9HLEdBQWIsQ0FBaUIxQixNQUFNLElBQUk7QUFDdEM7QUFDQSxZQUFHLENBQUNBLE1BQU0sQ0FBQ3pPLEtBQVgsRUFBa0J5TyxNQUFNLENBQUN6TyxLQUFQLEdBQWV5TyxNQUFNLENBQUMvRyxHQUF0QjtBQUVsQixZQUFJOEosSUFBSSxHQUFHakcsY0FBYyxDQUFDRSxPQUFmLENBQXVCZ0csSUFBdkIsQ0FBNEJDLElBQUksSUFBSUEsSUFBSSxDQUFDMVIsS0FBTCxLQUFleU8sTUFBTSxDQUFDek8sS0FBMUQsQ0FBWDs7QUFDQSxZQUFJd1IsSUFBSixFQUFVO0FBQ04sY0FBSTtBQUFFRztBQUFGLGNBQWdCSCxJQUFwQjtBQUNBL0MsZ0JBQU0sQ0FBQ21ELFNBQVAsR0FBbUJELFNBQVMsS0FBSyxLQUFkLEdBQXNCLFFBQXRCLEdBQWlDLFNBQXBEO0FBQ0g7O0FBQ0QsWUFBSW5HLE9BQU8sR0FBR0QsY0FBYyxDQUFDQyxPQUFmLENBQXVCcUcsTUFBdkIsQ0FBOEJILElBQUksSUFBSUEsSUFBSSxDQUFDMVIsS0FBTCxLQUFleU8sTUFBTSxDQUFDek8sS0FBNUQsQ0FBZDs7QUFDQSxZQUFJd0wsT0FBTyxDQUFDZCxNQUFaLEVBQW9CO0FBQ2hCK0QsZ0JBQU0sQ0FBQ2EsYUFBUCxHQUF1QixDQUFDLEdBQUc5RCxPQUFKLENBQXZCO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsaUJBQU9pRCxNQUFNLENBQUNhLGFBQWQ7QUFDSDs7QUFDRCxZQUFJYixNQUFNLENBQUNyRSxVQUFYLEVBQXVCO0FBQ25CO0FBQ0FxRSxnQkFBTSxtQ0FBUUEsTUFBUixHQUFtQixLQUFLcUQsb0JBQUwsQ0FBMEJyRCxNQUExQixFQUFpQyxPQUFqQyxDQUFuQixDQUFOO0FBQ0g7O0FBQ0QsWUFBSUEsTUFBTSxDQUFDc0QsVUFBWCxFQUF1QjtBQUNuQjtBQUNBdEQsZ0JBQU0sbUNBQVFBLE1BQVIsR0FBbUIsS0FBS3FELG9CQUFMLENBQTBCckQsTUFBMUIsRUFBaUMsTUFBakMsQ0FBbkIsQ0FBTjtBQUNIOztBQUNELFlBQUlBLE1BQU0sQ0FBQ3VELFdBQVgsRUFBd0I7QUFDcEJ2RCxnQkFBTSxtQ0FBUUEsTUFBUixHQUFtQixLQUFLcUQsb0JBQUwsQ0FBMEJyRCxNQUExQixFQUFpQyxPQUFqQyxDQUFuQixDQUFOO0FBQ0g7O0FBQ0QsZUFBT0EsTUFBUDtBQUNILE9BNUJjLENBQWY7QUE2QkgsS0FuRWtCOztBQUFBLGtEQXdHSSxDQUFDQSxNQUFELEVBQVFkLElBQVIsS0FBaUI7QUFDcEMsVUFBSTNQLEdBQUcsR0FBR2MsNENBQUssQ0FBQzJLLFNBQU4sRUFBVjtBQUNBLGFBQU87QUFDSHdJLHNCQUFjLEVBQUUsQ0FBQztBQUFFaEYsaUJBQUY7QUFBV2lGO0FBQVgsU0FBRCxLQUFrQztBQUM5QyxjQUFJQyxVQUFVLEdBQUl2SCxNQUFELElBQVk7QUFDekIsZ0JBQUl3SCxhQUFhLEdBQUcsS0FBS3JJLE9BQUwsQ0FBYTBILElBQWIsQ0FBa0JZLENBQUMsSUFBSUEsQ0FBQyxDQUFDcEksU0FBRixLQUFnQndFLE1BQU0sQ0FBQ3hFLFNBQTlDLENBQXBCO0FBQ0FpSSwyQkFBZSxDQUFDdEgsTUFBRCxDQUFmO0FBQ0FxQyxtQkFBTztBQUNQLGlCQUFLekosTUFBTDtBQUNILFdBTEQ7O0FBTUEsY0FBSWlMLE1BQU0sQ0FBQzZELFlBQVgsRUFBeUI7QUFDckIsbUJBQU83RCxNQUFNLENBQUM2RCxZQUFQLENBQW9CO0FBQUU3RCxvQkFBRjtBQUFVeEIscUJBQU8sRUFBRWtGLFVBQW5CO0FBQStCblU7QUFBL0IsYUFBcEIsQ0FBUDtBQUNIOztBQUNELGNBQUcyUCxJQUFJLElBQUksT0FBWCxFQUNJLE9BQU8sTUFBQywrREFBRDtBQUNILGtCQUFNLEVBQUVjLE1BREw7QUFFSCxlQUFHLEVBQUV6USxHQUZGO0FBR0gsbUJBQU8sRUFBRW1VO0FBSE4sWUFBUDtBQUtKLGNBQUd4RSxJQUFJLElBQUksTUFBWCxFQUNJLE9BQU8sTUFBQyxvRUFBRDtBQUNILGtCQUFNLEVBQUVjLE1BREw7QUFFSCxlQUFHLEVBQUV6USxHQUZGO0FBR0gsbUJBQU8sRUFBRW1VO0FBSE4sWUFBUDtBQUtKLGNBQUd4RSxJQUFJLElBQUksT0FBWCxFQUNJLE9BQU8sTUFBQyxzRUFBRDtBQUNILGtCQUFNLEVBQUVjLE1BREw7QUFFSCxlQUFHLEVBQUV6USxHQUZGO0FBR0gsbUJBQU8sRUFBRW1VO0FBSE4sWUFBUDtBQU1QLFNBOUJFO0FBK0JISSxrQkFBVSxFQUFFQyxRQUFRLElBQ2hCLE1BQUMsZ0VBQUQ7QUFBZ0IsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUVELFFBQVEsR0FBRyxTQUFILEdBQWVyRTtBQUFoQztBQUF2QixVQWhDRDtBQWtDSHVFLHFDQUE2QixFQUFFQyxPQUFPLElBQUk7QUFDdEMsY0FBSSxDQUFDQSxPQUFELElBQVlsRSxNQUFNLENBQUNpQyxhQUFQLElBQXdCaUMsT0FBeEMsRUFBaUQ7QUFDN0NsRSxrQkFBTSxDQUFDaUMsYUFBUCxHQUF1QmlDLE9BQXZCOztBQUNBLGdCQUFJM1UsR0FBRyxDQUFDa04sT0FBUixFQUFpQjtBQUNibE4saUJBQUcsQ0FBQ2tOLE9BQUosQ0FBWW9DLFFBQVo7QUFDSDtBQUNKOztBQUNEbUIsZ0JBQU0sQ0FBQ2lDLGFBQVAsR0FBdUJpQyxPQUF2QjtBQUVIO0FBM0NFLE9BQVA7QUE2Q0gsS0F2SmtCOztBQUFBLHNDQXlKUixZQUFZO0FBQ25CLFVBQUk7QUFBRUMsZ0JBQUY7QUFBWTlOO0FBQVosVUFBcUIsS0FBSytOLFVBQTlCO0FBQ0EsWUFBTSxLQUFLQyxpQkFBTCxDQUF1QjtBQUFFRixnQkFBRjtBQUFZMUgsZUFBTyxFQUFFcEc7QUFBckIsT0FBdkIsRUFBb0QsRUFBcEQsRUFBd0QsRUFBeEQsQ0FBTjtBQUNILEtBNUprQjs7QUFBQSxpREFvTEcsQ0FBQzBHLE9BQU8sR0FBRyxFQUFYLEtBQWtCO0FBQ3BDLFdBQUt6QixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhb0csR0FBYixDQUFpQjFCLE1BQU0sSUFBSTtBQUN0QyxZQUFJb0QsTUFBTSxHQUFHckcsT0FBTyxDQUFDaUQsTUFBTSxDQUFDek8sS0FBUixDQUFwQjs7QUFDQSxZQUFJNlIsTUFBSixFQUFZO0FBQ1JwRCxnQkFBTSxDQUFDYSxhQUFQLEdBQXVCdUMsTUFBdkI7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBT3BELE1BQU0sQ0FBQ2EsYUFBZDtBQUNIOztBQUNELGVBQU9iLE1BQVA7QUFDSCxPQVJjLENBQWY7QUFTSCxLQTlMa0I7O0FBQUEsZ0RBZ01FLENBQUN0RSxNQUFNLEdBQUcsRUFBVixLQUFpQjtBQUNsQyxXQUFLSixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhb0csR0FBYixDQUFpQjFCLE1BQU0sSUFBSTtBQUN0QyxZQUFJQSxNQUFNLENBQUMvRyxHQUFQLElBQWN5QyxNQUFNLENBQUM0SSxTQUF6QixFQUFvQztBQUNoQ3RFLGdCQUFNLENBQUNtRCxTQUFQLEdBQW1CekgsTUFBTSxDQUFDNkksS0FBMUI7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBT3ZFLE1BQU0sQ0FBQ21ELFNBQWQ7QUFDSDs7QUFDRCxlQUFPbkQsTUFBUDtBQUNILE9BUGMsQ0FBZjtBQVFILEtBek1rQjs7QUFBQSwyQ0EwTUZvRSxVQUFELElBQWdCO0FBQzVCLFdBQUtBLFVBQUwsR0FBa0I7QUFDZEQsZ0JBQVEsRUFBRUMsVUFBVSxDQUFDRCxRQURQO0FBRWQ5TixZQUFJLEVBQUUrTixVQUFVLENBQUMzSCxPQUFYLEdBQXFCO0FBRmIsT0FBbEI7QUFJSCxLQS9Na0I7O0FBQUEsK0NBa05DLE9BQU8ySCxVQUFQLEVBQW1CckgsT0FBbkIsRUFBNEJyQixNQUE1QixLQUF1QztBQUN2RCxXQUFLOEksbUJBQUwsQ0FBeUJ6SCxPQUF6QjtBQUNBLFdBQUswSCxrQkFBTCxDQUF3Qi9JLE1BQXhCO0FBQ0EsV0FBS2dKLGFBQUwsQ0FBbUJOLFVBQW5CO0FBQ0EsV0FBS3JQLE1BQUw7QUFDSCxLQXZOa0I7O0FBQUEsNENBc1FGLE1BQU07QUFDbkIsVUFBSWlELE1BQU0sR0FBRztBQUNUK0UsZUFBTyxFQUFFLEVBREE7QUFFVEMsZUFBTyxFQUFFLEVBRkE7QUFHVG1ILGdCQUFRLEVBQUUsS0FBS0MsVUFBTCxDQUFnQkQsUUFIakI7QUFJVDlOLFlBQUksRUFBRSxLQUFLK04sVUFBTCxDQUFnQi9OO0FBSmIsT0FBYjtBQU9BLFdBQUtpRixPQUFMLENBQWFvRyxHQUFiLENBQWlCMUIsTUFBTSxJQUFJO0FBQ3ZCLFlBQUlBLE1BQU0sQ0FBQ2EsYUFBWCxFQUEwQjtBQUN0QjdJLGdCQUFNLENBQUMrRSxPQUFQLEdBQWlCLENBQ2IsR0FBRy9FLE1BQU0sQ0FBQytFLE9BREcsRUFFYixHQUFHaUQsTUFBTSxDQUFDYSxhQUZHLENBQWpCO0FBSUg7O0FBQ0QsWUFBSWIsTUFBTSxDQUFDbUQsU0FBWCxFQUFzQjtBQUNsQm5MLGdCQUFNLENBQUNnRixPQUFQLENBQWUvSCxJQUFmLENBQW9CO0FBQ2hCMUQsaUJBQUssRUFBRXlPLE1BQU0sQ0FBQ3pPLEtBREU7QUFFaEIyUixxQkFBUyxFQUFFbEQsTUFBTSxDQUFDbUQsU0FBUCxJQUFvQixRQUFwQixHQUErQixLQUEvQixHQUF1QztBQUZsQyxXQUFwQjtBQUlIO0FBQ0osT0FiRDtBQWNBLGFBQU9uTCxNQUFQO0FBRUgsS0E5UmtCOztBQUFBLDJDQWdTSCxDQUFDb00sVUFBVSxHQUFHLEVBQWQsS0FBcUI7QUFDakMsWUFBTTtBQUFFRCxnQkFBRjtBQUFZOU47QUFBWixVQUFxQixLQUFLK04sVUFBaEM7QUFDQSw2Q0FDT0EsVUFEUDtBQUVJbkssYUFBSyxFQUFFLEtBQUtBLEtBRmhCO0FBR0kwSyxnQkFBUSxFQUFFLFFBSGQ7QUFJSVIsZ0JBQVEsRUFBRUEsUUFBUSxJQUFJLEVBSjFCO0FBS0kxSCxlQUFPLEVBQUVwRyxJQUFJLEdBQUcsQ0FMcEI7QUFNSXVPLHVCQUFlLEVBQUUsSUFOckI7QUFPSUMsdUJBQWUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixLQUFsQixFQUF5QixLQUF6QixFQUFnQyxLQUFoQztBQVByQjtBQVNILEtBM1NrQjs7QUFFZixTQUFLblEsWUFBTCxHQUFvQjtBQUNoQm9RLGNBQVEsRUFBRSxJQURNO0FBRWhCQyxVQUFJLEVBQUUsUUFGVTtBQUdoQkMsZ0JBQVUsRUFBRSxJQUhJO0FBSWhCQyxhQUFPLEVBQUU7QUFKTyxLQUFwQjtBQU9BLFNBQUtyRyxLQUFMLEdBQWE7QUFDVHNHLGFBQU8sRUFBRSxLQURBO0FBRVRuUSxZQUFNLEVBQUU7QUFGQyxLQUFiO0FBSUEsU0FBS3FQLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLbkssS0FBTCxHQUFhLEtBQUtoTCxLQUFMLENBQVdnTCxLQUFYLElBQW9CLEdBQWpDO0FBQ0EsU0FBS3hHLElBQUwsR0FBWSxLQUFLeEUsS0FBTCxDQUFXd0UsSUFBdkI7QUFDQSxTQUFLNFEsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJjLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0g7QUFFRDs7Ozs7QUFHQUMsTUFBSSxHQUFHO0FBQ0gsVUFBTXpSLEtBQUssR0FBRyxLQUFLMUUsS0FBTCxDQUFXOEIsTUFBWCxDQUFrQjRDLEtBQWhDO0FBQ0EsVUFBTW1KLGNBQWMsR0FBR2dHLFNBQVMsQ0FBQ3VDLGdCQUFWLENBQTJCMVIsS0FBM0IsRUFBa0MsS0FBSzFFLEtBQXZDLENBQXZCO0FBQ0EsU0FBS21WLFVBQUwsR0FBa0I7QUFDZEQsY0FBUSxFQUFFckgsY0FBYyxDQUFDcUgsUUFBZixJQUEyQixFQUR2QjtBQUVkOU4sVUFBSSxFQUFFeUcsY0FBYyxDQUFDekcsSUFBZixJQUF1QjtBQUZmLEtBQWxCO0FBSUEsU0FBS2lGLE9BQUwsR0FBZSxLQUFLck0sS0FBTCxDQUFXcU0sT0FBMUI7QUFFQSxTQUFLZ0ssc0JBQUwsQ0FBNEJ4SSxjQUE1QjtBQUNIO0FBRUQ7Ozs7O0FBa0NBeUksbUJBQWlCLEdBQUc7QUFDaEIsU0FBS0gsSUFBTDtBQUNBLFNBQUtyRyxRQUFMLENBQWM7QUFBQ2hLLFlBQU0sRUFBRSxDQUFDLEtBQUs2SixLQUFMLENBQVc3SjtBQUFyQixLQUFkO0FBQ0g7O0FBQ0QwTCxvQkFBa0IsQ0FBQ0MsU0FBRCxFQUFZO0FBQzFCO0FBQ0EsUUFBSUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLFNBQVMsQ0FBQ2pOLElBQXpCLE1BQW1Da04sSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBSzNSLEtBQUwsQ0FBV3dFLElBQTFCLENBQXZDLEVBQXdFO0FBQ3BFLFdBQUtBLElBQUwsR0FBWSxLQUFLeEUsS0FBTCxDQUFXd0UsSUFBdkI7QUFDSDs7QUFDRCxRQUFJa04sSUFBSSxDQUFDQyxTQUFMLENBQWUsS0FBSzNSLEtBQUwsQ0FBVzhCLE1BQVgsQ0FBa0I0QyxLQUFqQyxLQUEyQ2dOLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixTQUFTLENBQUMzUCxNQUFWLENBQWlCNEMsS0FBaEMsQ0FBL0MsRUFBdUY7QUFDbkYsV0FBS3lSLElBQUw7QUFDQSxXQUFLckcsUUFBTCxDQUFjO0FBQUNoSyxjQUFNLEVBQUUsQ0FBQyxLQUFLNkosS0FBTCxDQUFXN0o7QUFBckIsT0FBZCxFQUZtRixDQUV2QztBQUMvQztBQUNKOztBQUVELFNBQU91SSxTQUFQLENBQWlCcEksT0FBakIsRUFBMEI7QUFDdEIsVUFBTTtBQUFFNkgsYUFBTyxHQUFHLEVBQVo7QUFBZ0JDLGFBQU8sR0FBRyxFQUExQjtBQUE4Qm1ILGNBQTlCO0FBQXdDOU47QUFBeEMsUUFBaURuQixPQUF2RDtBQUNBLFFBQUlzUSxRQUFRLEdBQUc7QUFDWEMsT0FBQyxFQUFFLEVBRFE7QUFFWEMsT0FBQyxFQUFFLEVBRlE7QUFHWEMsUUFBRSxFQUFFeEIsUUFITztBQUlYL1YsT0FBQyxFQUFFaUk7QUFKUSxLQUFmOztBQU9BLFNBQUssSUFBSStNLE1BQVQsSUFBbUJyRyxPQUFuQixFQUE0QjtBQUN4QnlJLGNBQVEsQ0FBQ0MsQ0FBVCxDQUFXeFEsSUFBWCxDQUFnQixDQUFDbU8sTUFBTSxDQUFDN1IsS0FBUixFQUFlNlIsTUFBTSxDQUFDaEQsUUFBUCxJQUFtQixVQUFsQyxFQUE4Q2dELE1BQU0sQ0FBQ3ZTLEtBQXJELENBQWhCO0FBQ0g7O0FBQ0QsU0FBSyxJQUFJa1MsSUFBVCxJQUFpQi9GLE9BQWpCLEVBQTBCO0FBQ3RCd0ksY0FBUSxDQUFDRSxDQUFULENBQVczQyxJQUFJLENBQUN4UixLQUFoQixJQUF5QndSLElBQUksQ0FBQ0csU0FBOUI7QUFDSDs7QUFDRCxXQUFPMEMsZ0RBQU0sQ0FBQ0MsTUFBUCxDQUFjbEYsSUFBSSxDQUFDQyxTQUFMLENBQWU0RSxRQUFmLENBQWQsQ0FBUDtBQUNIO0FBRUQ7Ozs7O0FBeURBOzs7QUFHQSxRQUFNelEsTUFBTixHQUFlO0FBQ1gsU0FBS2dLLFFBQUwsQ0FBYztBQUFFbUcsYUFBTyxFQUFFO0FBQVgsS0FBZDs7QUFDQSxRQUFJLE9BQU8sS0FBS2pXLEtBQUwsQ0FBV2lOLFNBQWxCLEtBQWdDLFVBQXBDLEVBQWdEO0FBQzVDLFlBQU1sRSxNQUFNLEdBQUcsS0FBSzhOLGNBQUwsRUFBZjtBQUVBLFlBQU1DLFlBQVksR0FBR2pELFNBQVMsQ0FBQ3hGLFNBQVYsQ0FBb0J0RixNQUFwQixDQUFyQixDQUg0QyxDQUk1Qzs7QUFDQWdPLG1FQUFRLENBQUM7QUFBRWpKLGVBQU8sRUFBRWdKO0FBQVgsT0FBRCxDQUFSO0FBRUEsVUFBSTNZLE1BQU0sR0FBRyxPQUFNLEtBQUs2QixLQUFMLENBQVdpTixTQUFYLENBQXFCbEUsTUFBckIsQ0FBTixLQUFzQyxFQUFuRDtBQUNBLFVBQUk1SyxNQUFNLENBQUM2TSxLQUFQLElBQWdCeUYsU0FBcEIsRUFBK0IsS0FBS3pGLEtBQUwsR0FBYTdNLE1BQU0sQ0FBQzZNLEtBQXBCO0FBQy9CLFdBQUt4RyxJQUFMLEdBQVkwTCw2Q0FBQyxDQUFDN04sR0FBRixDQUFNbEUsTUFBTixFQUFjLE1BQWQsRUFBc0IsRUFBdEIsQ0FBWjtBQUNIOztBQUNELFNBQUsyUixRQUFMLENBQWM7QUFBRW1HLGFBQU8sRUFBRTtBQUFYLEtBQWQ7QUFDSDtBQUVEOzs7OztBQXdDQSxTQUFPRyxnQkFBUCxDQUF3QjFSLEtBQUssR0FBRyxFQUFoQyxFQUFvQ21KLGNBQWMsR0FBRyxFQUFyRCxFQUF5RDtBQUNyRCxRQUFJMEksUUFBUSxHQUFHN1IsS0FBSyxDQUFDb0osT0FBTixJQUFpQixFQUFoQzs7QUFDQSxRQUFJLE9BQU9wSixLQUFLLENBQUNvSixPQUFiLElBQXdCLFFBQTVCLEVBQXNDO0FBQ2xDLFVBQUk7QUFDQXlJLGdCQUFRLEdBQUc3RSxJQUFJLENBQUNzRixLQUFMLENBQVdMLGdEQUFNLENBQUM5TixNQUFQLENBQWNuRSxLQUFLLENBQUNvSixPQUFwQixDQUFYLENBQVg7QUFDSCxPQUZELENBR0EsT0FBT3ZPLENBQVAsRUFBVTtBQUNOLGNBQU0sSUFBSTBYLEtBQUosQ0FBVyxnQ0FBWCxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxRQUFJLENBQUNWLFFBQUwsRUFBZSxPQUFPLEVBQVA7QUFDZixRQUFJekksT0FBTyxHQUFHeUksUUFBUSxDQUFDQyxDQUFULElBQWMsRUFBNUI7QUFDQSxRQUFJekksT0FBTyxHQUFHd0ksUUFBUSxDQUFDRSxDQUFULElBQWMsRUFBNUI7QUFDQSxRQUFJUyxRQUFRLEdBQUc7QUFDWHBKLGFBQU8sRUFBRUQsY0FBYyxDQUFDQyxPQUFmLElBQTBCLEVBRHhCO0FBRVhDLGFBQU8sRUFBRUYsY0FBYyxDQUFDRSxPQUFmLElBQTBCLEVBRnhCO0FBR1htSCxjQUFRLEVBQUVxQixRQUFRLENBQUNHLEVBQVQsSUFBZTdJLGNBQWMsQ0FBQ3FILFFBSDdCO0FBSVg5TixVQUFJLEVBQUVtUCxRQUFRLENBQUNwWCxDQUFULElBQWMwTyxjQUFjLENBQUN6RztBQUp4QixLQUFmOztBQU9BLFNBQUssSUFBSStNLE1BQVQsSUFBbUJyRyxPQUFuQixFQUE0QjtBQUN4Qm9KLGNBQVEsQ0FBQ3BKLE9BQVQsQ0FBaUI5SCxJQUFqQixDQUFzQjtBQUNsQjFELGFBQUssRUFBRTZSLE1BQU0sQ0FBQyxDQUFELENBREs7QUFFbEJoRCxnQkFBUSxFQUFFZ0QsTUFBTSxDQUFDLENBQUQsQ0FGRTtBQUdsQnZTLGFBQUssRUFBRXVTLE1BQU0sQ0FBQyxDQUFEO0FBSEssT0FBdEI7QUFLSDs7QUFDRCxTQUFLLElBQUk3UixLQUFULElBQWtCeUwsT0FBbEIsRUFBMkI7QUFDdkJtSixjQUFRLENBQUNuSixPQUFULENBQWlCL0gsSUFBakIsQ0FBc0I7QUFDbEIxRCxhQUFLLEVBQUVBLEtBRFc7QUFFbEIyUixpQkFBUyxFQUFFbEcsT0FBTyxDQUFDekwsS0FBRDtBQUZBLE9BQXRCO0FBSUg7O0FBRUQsV0FBTzRVLFFBQVA7QUFDSDs7QUFFRCxTQUFPakosVUFBUCxDQUFrQnZKLEtBQWxCLEVBQXlCbUosY0FBekIsRUFBeUM7QUFDckMsUUFBSW5KLEtBQUssSUFBSXRDLE1BQU0sQ0FBQytVLElBQVAsQ0FBWXpTLEtBQVosRUFBbUJzSSxNQUFuQixHQUE0QixDQUF6QyxFQUE0QyxPQUFPLEtBQUtvSixnQkFBTCxDQUFzQjFSLEtBQXRCLEVBQTZCbUosY0FBN0IsQ0FBUDtBQUM1QyxXQUFPQSxjQUFQO0FBQ0g7QUFFRDs7Ozs7QUEwQ0FsTixRQUFNLEdBQUc7QUFDTCx3QkFBK0YsS0FBS1gsS0FBcEc7QUFBQSxVQUFNO0FBQUVnVyxhQUFPLEdBQUcsSUFBWjtBQUFrQnhSLFVBQUksR0FBRyxFQUF6QjtBQUE2QjRTLGNBQTdCO0FBQXVDbkssZUFBdkM7QUFBa0RaLGFBQWxEO0FBQTJEOEk7QUFBM0QsS0FBTjtBQUFBLFVBQWdGdEQsVUFBaEY7O0FBQ0EsV0FDSSxtQkFDSSxNQUFDLDBDQUFELGVBQ1EsS0FBS3BNLFlBRGI7QUFFSTtBQUNBLFlBQU0sRUFBRTtBQUNKNFIsU0FBQyxFQUFFLEdBREM7QUFFSkMsZ0NBQXdCLEVBQUU7QUFGdEI7QUFIWixPQU9RekYsVUFQUjtBQVFJLGFBQU8sRUFBRSxLQUFLeEYsT0FSbEI7QUFTSSxnQkFBVSxFQUFFMkosT0FBTyxHQUFHLEtBQUt4UixJQUFMLENBQVVpTyxHQUFWLENBQWM4RSxHQUFHLG9DQUFVQSxHQUFWO0FBQWV2TixXQUFHLEVBQUV1TixHQUFHLENBQUMxSztBQUF4QixRQUFqQixDQUFILEdBQXFELElBVDVFO0FBVUksY0FBUSxFQUFFLEtBQUt1SSxpQkFWbkI7QUFXSSxhQUFPLEVBQUUsS0FBS3pGLEtBQUwsQ0FBV3NHLE9BWHhCO0FBWUksZ0JBQVUsRUFBRSxLQUFLdUIsYUFBTCxDQUFtQnJDLFVBQW5CO0FBWmhCLE9BREosQ0FESjtBQWtCSDs7QUFsVW1DOztBQXFVekJ0Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hWQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNEQsbUJBQW1CLEdBQUdyVyw0Q0FBSyxDQUFDc1csVUFBTixDQUFpQixDQUFDMVgsS0FBRCxFQUFhTSxHQUFiLEtBQTBCO0FBQ3RFLFFBQU13QixNQUFNLEdBQUc2Viw2REFBUyxFQUF4QjtBQUNBLFNBQU8sTUFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRXJYLEdBQVo7QUFBaUIsVUFBTSxFQUFFd0I7QUFBekIsS0FBcUM5QixLQUFyQyxFQUFQO0FBQ0EsQ0FIMkIsQ0FBNUI7QUFLQXlYLG1CQUFtQixDQUFDeEosVUFBcEIsR0FBaUMySiw4Q0FBSyxDQUFDM0osVUFBdkM7QUFDQXdKLG1CQUFtQixDQUFDckIsZ0JBQXBCLEdBQXVDd0IsOENBQUssQ0FBQ3hCLGdCQUE3QztBQUNBcUIsbUJBQW1CLENBQUNwSixTQUFwQixHQUFnQ3VKLDhDQUFLLENBQUN2SixTQUF0QztBQUVBLE1BQU1MLGVBQWUsR0FBRztBQUNwQkMsWUFBVSxFQUFFMkosOENBQUssQ0FBQzNKLFVBREU7QUFFcEJtSSxrQkFBZ0IsRUFBRXdCLDhDQUFLLENBQUN4QixnQkFGSjtBQUdwQi9ILFdBQVMsRUFBRXVKLDhDQUFLLENBQUN2SjtBQUhHLENBQXhCO0FBS2VvSixrRkFBZjs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxNQUFNSSxZQUFZLEdBQUksQ0FBQztBQUFFckosTUFBSSxHQUFHLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsUUFBcEI7QUFBVCxJQUFrRSxFQUFuRSxLQUFvRjtBQUN0RyxRQUFNMU0sTUFBTSxHQUFHNlYsNkRBQVMsRUFBeEI7QUFDQSxRQUFNRyxJQUFJLEdBQUdDLDBFQUFjLENBQUN2SixJQUFELENBQTNCO0FBQ0EsUUFBTXdKLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsUUFBTTlNLFFBQVEsR0FBRyxPQUFPeEgsSUFBUCxFQUFxQi9CLEtBQXJCLEtBQWtEO0FBQy9ELFdBQU9vVyxRQUFRLENBQUNFLHdFQUFjLENBQUN2VSxJQUFELEVBQU8vQixLQUFQLENBQWYsQ0FBZjtBQUNILEdBRkQ7O0FBSUEsUUFBTXlKLFFBQVEsR0FBSTFILElBQUQsSUFBdUI7QUFDcEMsV0FBT3dVLCtEQUFXLENBQUV4SSxLQUFELElBQWdCTyw2Q0FBQyxDQUFDN04sR0FBRixDQUFNc04sS0FBTixFQUFhaE0sSUFBYixDQUFqQixDQUFsQjtBQUNILEdBRkQ7O0FBSUEsUUFBTXVILFFBQVEsR0FBRyxDQUFDMkQsU0FBRCxFQUFvQm5LLEtBQXBCLEVBQW1DN0UsT0FBZ0IsR0FBRyxLQUF0RCxLQUFzRTtBQUNuRixRQUFJdVksU0FBSjs7QUFDQSxRQUFJO0FBQ0FBLGVBQVMsR0FBRzNULDREQUFLLENBQUNvSyxTQUFELEVBQVluSyxLQUFaLENBQWpCO0FBQ0gsS0FGRCxDQUdBLE9BQU9uRixDQUFQLEVBQVU7QUFDTjZZLGVBQVMsR0FBRztBQUNSbmEsWUFBSSxFQUFFNFEsU0FERTtBQUVSM1EsVUFBRSxFQUFFMlE7QUFGSSxPQUFaO0FBSUg7O0FBRUQvTSxVQUFNLENBQUNrRSxJQUFQLENBQVlvUyxTQUFTLENBQUNuYSxJQUF0QixFQUE0Qm1hLFNBQVMsQ0FBQ2xhLEVBQXRDLEVBQTBDO0FBQ3RDMkI7QUFEc0MsS0FBMUM7QUFHSCxHQWZEOztBQWdCQSxRQUFNc08sT0FBTyxHQUFHLENBQUNrSyxHQUFELEVBQVcxVSxJQUFYLEVBQXlCMlUsWUFBaUIsR0FBRzdILFNBQTdDLEtBQWdFO0FBQzVFLFFBQUk3TyxLQUFLLEdBQUdzTyw2Q0FBQyxDQUFDN04sR0FBRixDQUFNZ1csR0FBTixFQUFXMVUsSUFBWCxFQUFpQjJVLFlBQWpCLENBQVo7O0FBQ0EsUUFBSTFXLEtBQUssSUFBSSxJQUFiLEVBQW1CLE9BQU8wVyxZQUFQO0FBQ25CLFdBQU8xVyxLQUFQO0FBQ0gsR0FKRDs7QUFNQSxRQUFNOEcsTUFBTSxHQUFHLENBQUMvRixPQUFELEVBQWtCNFYsV0FBbUIsR0FBRyxFQUF4QyxFQUE0Q3RJLElBQXFDLEdBQUcsU0FBcEYsS0FBd0c7QUFDbkh1SSxxREFBWSxDQUFDdkksSUFBRCxDQUFaLENBQW1CO0FBQ2Z0TixhQUFPLEVBQUVBLE9BRE07QUFFZjRWLGlCQUFXLEVBQUVBLFdBRkU7QUFHZkUsY0FBUSxFQUFFLENBSEssQ0FHSDs7QUFIRyxLQUFuQjtBQUtILEdBTkQ7O0FBUUEsUUFBTXJOLE9BQU8sR0FBRyxNQUFXO0FBQ3ZCLFdBQU8rTSwrREFBVyxDQUFFeEksS0FBRCxJQUFnQkEsS0FBSyxDQUFDK0ksSUFBdkIsQ0FBbEI7QUFDSCxHQUZEOztBQUdBLFFBQU1DLFVBQVUsR0FBRyxNQUFXO0FBQzFCLFdBQU9SLCtEQUFXLENBQUV4SSxLQUFELElBQWdCQSxLQUFLLENBQUNpSixPQUF2QixDQUFsQjtBQUNILEdBRkQ7O0FBR0EsUUFBTUMsc0JBQXNCLEdBQUcsTUFBVztBQUN0QyxXQUFPViwrREFBVyxDQUFFeEksS0FBRCxJQUFnQkEsS0FBSyxDQUFDbUosbUJBQXZCLENBQWxCO0FBQ0gsR0FGRDs7QUFJQSxTQUFPO0FBQ0hYLHdFQURHO0FBRUhyVyxVQUZHO0FBR0htSixLQUFDLEVBQUU2TSxJQUFJLENBQUM3TSxDQUhMO0FBSUhFLFlBSkc7QUFLSEUsWUFMRztBQU1ISCxZQU5HO0FBT0hpRCxXQVBHO0FBUUh6RixVQVJHO0FBU0gwQyxXQVRHO0FBVUh1TixjQVZHO0FBV0hFO0FBWEcsR0FBUDtBQWFILENBbEVEOztBQW9FQWhCLFlBQVksQ0FBQzFKLE9BQWIsR0FBd0IsQ0FBQ2tLLEdBQUQsRUFBVzFVLElBQVgsRUFBeUIyVSxZQUFpQixHQUFHN0gsU0FBN0MsS0FBZ0U7QUFDcEYsTUFBSTdPLEtBQUssR0FBR3NPLDZDQUFDLENBQUM3TixHQUFGLENBQU1nVyxHQUFOLEVBQVcxVSxJQUFYLEVBQWlCMlUsWUFBakIsQ0FBWjs7QUFDQSxNQUFJMVcsS0FBSyxJQUFJLElBQWIsRUFBbUIsT0FBTzBXLFlBQVA7QUFDbkIsU0FBTzFXLEtBQVA7QUFDSCxDQUpEOztBQU1laVcsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBR0EsTUFBTWtCLGNBQWMsR0FBRyxNQUFNO0FBQ3pCLFFBQU07QUFBRTNOO0FBQUYsTUFBY0UsMERBQVcsRUFBL0I7QUFDQSxRQUFNb04sSUFBSSxHQUFHdE4sT0FBTyxNQUFNLEVBQTFCO0FBQ0EsUUFBTTROLGVBQWUsR0FBR04sSUFBSSxDQUFDcEssV0FBTCxJQUFvQixFQUE1Qzs7QUFFQSxRQUFNMkssaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixXQUFPRCxlQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNRSxnQkFBZ0IsR0FBSTVLLFdBQUQsSUFBc0I7QUFDM0MsV0FBT3JDLHlFQUFlLENBQUNxQyxXQUFELEVBQWMwSyxlQUFkLENBQXRCO0FBQ0gsR0FGRDs7QUFHQSxTQUFPO0FBQ0hDLHFCQURHO0FBRUhoTixtQkFBZSxFQUFFaU47QUFGZCxHQUFQO0FBSUgsQ0FoQkQ7O0FBa0JlSCw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsTUFBTUksS0FBSyxHQUFHLE9BQWQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTtBQUFFQyxPQUFGO0FBQVNDO0FBQVQsSUFBa0JDLCtDQUF4QjtBQUVBLE1BQU07QUFBRUMsU0FBRjtBQUFXQztBQUFYLElBQXNCQywyQ0FBNUI7O0FBRUEsTUFBTUMsS0FBSyxHQUFJMVosS0FBRCxJQUFnQjtBQUM1QixRQUFNO0FBQUU4QixVQUFGO0FBQVVtSjtBQUFWLE1BQWdCNE0sc0VBQVksRUFBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQzhCLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCbk8sc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNvTyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQnJPLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBRW9OO0FBQUYsTUFBNkJoQixzRUFBWSxFQUEvQztBQUNBLFFBQU1pQixtQkFBbUIsR0FBR0Qsc0JBQXNCLEVBQWxEOztBQUVBLFFBQU1rQixnQkFBZ0IsR0FBSW5ZLEtBQUQsSUFBb0I7QUFDM0M1QyxXQUFPLENBQUNnYixHQUFSLENBQVlwWSxLQUFaO0FBQ0FnWSxnQkFBWSxDQUFDaFksS0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxRQUFNcVksVUFBVSxHQUFHLE1BQU07QUFDdkIsVUFBTUMsTUFBTSxHQUFHM2IsTUFBTSxDQUFDNGIsVUFBUCxHQUFvQixHQUFuQztBQUNBTCxlQUFXLENBQUNJLE1BQUQsQ0FBWDtBQUNBTixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSkQ7O0FBTUFRLHlEQUFTLENBQUMsTUFBTSxDQUFFLENBQVQsQ0FBVDtBQUVBQSx5REFBUyxDQUFDLE1BQU07QUFDZDdiLFVBQU0sQ0FBQzhiLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixVQUFsQztBQUNBQSxjQUFVO0FBQ1YsV0FBTyxNQUFNMWIsTUFBTSxDQUFDK2IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLFVBQXJDLENBQWI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFFBQU14TCxZQUFZLEdBQUcsTUFBTTtBQUN6QixVQUFNQyxTQUFTLEdBQUc1TSxNQUFNLENBQUNrQyxRQUF6QjtBQUNBLFVBQU0ySyxTQUFjLEdBQUdDLCtDQUF2Qjs7QUFDQSxTQUFLLElBQUlDLFNBQVQsSUFBc0JGLFNBQXRCLEVBQWlDO0FBQy9CLFVBQUlHLFlBQVksR0FBR0gsU0FBUyxDQUFDRSxTQUFELENBQTVCO0FBQ0EsVUFBSSxDQUFDQyxZQUFZLENBQUNDLE1BQWxCLEVBQTBCO0FBQzFCLFVBQUlELFlBQVksQ0FBQ0MsTUFBYixDQUFvQkMsTUFBcEIsQ0FBMkIsQ0FBM0IsTUFBa0NOLFNBQXRDLEVBQWlELE9BQU9HLFNBQVA7QUFDbEQ7QUFDRixHQVJEOztBQVNBLFFBQU1BLFNBQVMsR0FBR0osWUFBWSxNQUFNLEVBQXBDLENBbEM0QixDQW1DNUI7O0FBRUEsU0FDQSxNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLE1BQUMsZ0RBQUQsUUFDRSxxQkFBUXFLLG1CQUFtQixDQUFDeUIsU0FBNUIsQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFDLFVBQWY7QUFBMEIsV0FBTyxFQUFFekIsbUJBQW1CLENBQUMwQjtBQUF2RCxJQUZGLEVBR0U7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFFMUIsbUJBQW1CLENBQUMyQjtBQUE3RCxJQUhGLEVBSUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUUzQixtQkFBbUIsQ0FBQzRCO0FBQXZELElBSkYsRUFLRTtBQUFNLE9BQUcsRUFBQyxtQkFBVjtBQUE4QixRQUFJLEVBQUU1QixtQkFBbUIsQ0FBQzRCO0FBQXhELElBTEYsQ0FERixFQVFFO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRSxNQUFDLDJDQUFEO0FBQVEsWUFBUSxFQUFFO0FBQWxCLEtBQ0diLFFBQVEsR0FDUCxNQUFDLDJDQUFEO0FBQ0UsZ0JBQVksTUFEZDtBQUVFLFlBQVEsRUFBRSxLQUZaO0FBR0Usa0JBQWMsRUFBRSxJQUhsQjtBQUlFLFdBQU8sRUFBRSxNQUFNRSxnQkFBZ0IsQ0FBQyxLQUFELENBSmpDO0FBS0UsV0FBTyxFQUFFSixTQUxYO0FBTUUsYUFBUyxFQUFDLE1BTlo7QUFPRSxhQUFTLEVBQUU7QUFDVDdILGFBQU8sRUFBRSxDQURBO0FBRVQ2SSxZQUFNLEVBQUU7QUFGQztBQVBiLEtBWUUsTUFBQyxzREFBRDtBQUNFLGFBQVMsRUFBQyxRQURaO0FBRUUsYUFBUyxFQUFFLEtBRmI7QUFHRSxvQkFBZ0IsRUFBRVosZ0JBSHBCO0FBSUUsU0FBSyxFQUFFWixLQUpUO0FBS0UsWUFBUSxFQUFFVTtBQUxaLElBWkYsQ0FETyxHQXNCUCxNQUFDLHNEQUFEO0FBQ0UsYUFBUyxFQUFDLFFBRFo7QUFFRSxhQUFTLEVBQUVGLFNBRmI7QUFHRSxvQkFBZ0IsRUFBRUksZ0JBSHBCO0FBSUUsU0FBSyxFQUFFWixLQUpUO0FBS0UsWUFBUSxFQUFFVTtBQUxaLElBdkJKLEVBZ0NFLE1BQUMsMkNBQUQsUUFDRTtBQUFLLE1BQUUsRUFBQztBQUFSLElBREYsRUFHRSxNQUFDLE9BQUQ7QUFBUyxhQUFTLEVBQUcsZUFBY0YsU0FBUyxHQUFHLFdBQUgsR0FBaUIsRUFBRztBQUFoRSxLQUNFLE1BQUMscURBQUQ7QUFBUSxhQUFTLEVBQUVBLFNBQW5CO0FBQThCLG9CQUFnQixFQUFFSSxnQkFBaEQ7QUFBa0Usa0JBQWMsRUFBRS9aLEtBQUssQ0FBQzRhO0FBQXhGLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyx3Q0FBRCxRQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUU7QUFBekIsS0FDRSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUU7QUFBZCxLQUNHNWEsS0FBSyxDQUFDc00sS0FBTixJQUNDckIsQ0FBQyxDQUNFLFNBQVE0RCxTQUFTLENBQUNuTixPQUFWLENBQ1AsaUJBRE8sRUFFUCxFQUZPLENBR1AsUUFKSCxDQUZMLENBREYsRUFXRSxNQUFDLElBQUQsUUFDRzFCLEtBQUssQ0FBQ3VZLFdBQU4sSUFDQ3ROLENBQUMsQ0FDRSxTQUFRNEQsU0FBUyxDQUFDbk4sT0FBVixDQUNQLGlCQURPLEVBRVAsRUFGTyxDQUdQLGNBSkgsQ0FGTCxDQVhGLENBREYsRUF1QkUsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRTtBQUF6QixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxNQUFDLG1FQUFELE9BREYsQ0FERixDQXZCRixDQURGLENBRkYsRUFpQ0cxQixLQUFLLENBQUNZLFFBakNULENBSEYsRUFzQ0UsTUFBQyxNQUFEO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGNBQThCcVEsNkNBQU0sR0FBRzRKLElBQVQsRUFBOUIsYUF0Q0YsRUF1Q0UsTUFBQyw0Q0FBRDtBQUNFLGFBQVMsRUFBRSxTQURiO0FBRUUsVUFBTSxFQUFFLE1BQ045YSxRQUFRLENBQUMrYSxhQUFULENBQXVCLGdCQUF2QjtBQUhKLElBdkNGLENBaENGLENBREYsQ0FSRixDQURBO0FBNEZBLENBaklGOztBQWtJZXBCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU07QUFBRXFCO0FBQUYsSUFBYXRCLDJDQUFuQjtBQUNBLE1BQU07QUFBRXVCO0FBQUYsSUFBY0MseUNBQXBCO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWE3SSwwQ0FBbkI7O0FBRUEsTUFBTThJLFdBQVcsR0FBSW5iLEtBQUQsSUFBZ0I7QUFDbEMsUUFBTTtBQUFFaUwsS0FBRjtBQUFLdkMsVUFBTDtBQUFhd0MsWUFBYjtBQUF1QkMsWUFBdkI7QUFBaUNDLFdBQWpDO0FBQTBDQyxZQUExQztBQUFvRHNOLGNBQXBEO0FBQWdFeEs7QUFBaEUsTUFBNkU3QyxzRUFBVyxFQUE5RjtBQUNBLFFBQU04UCxXQUFXLEdBQUcsSUFBSUMsdUVBQUosRUFBcEI7QUFDQSxRQUFNQyxjQUFjLEdBQUcsSUFBSUMsMEVBQUosRUFBdkI7QUFDQSxRQUFNQyxVQUFVLEdBQUcsSUFBSUMsc0VBQUosRUFBbkI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQnZhLDRDQUFLLENBQUNxSyxRQUFOLENBQWUsRUFBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ21RLElBQUQsRUFBT0MsT0FBUCxJQUFrQnphLDRDQUFLLENBQUNxSyxRQUFOLENBQWUsRUFBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ3FRLEtBQUQsRUFBUUMsUUFBUixJQUFvQjNhLDRDQUFLLENBQUNxSyxRQUFOLENBQWUsRUFBZixDQUExQjtBQUNBLFFBQU07QUFBQSxPQUFDdVEsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0N4USxzREFBUSxDQUFDLEtBQUQsQ0FBaEQsQ0FSa0MsQ0FRc0I7O0FBQ3hELFFBQU1pTixJQUFJLEdBQUd0TixPQUFPLE1BQU0sRUFBMUI7QUFDQSxRQUFNOFEsWUFBWSxHQUFHdkQsVUFBVSxFQUEvQjtBQUNBLFFBQU03TSxVQUFVLEdBQUdDLHVEQUFTLEVBQTVCOztBQUNBLFFBQU1vUSxlQUFlLEdBQUk1YyxDQUFELElBQVksQ0FBRyxDQUF2Qzs7QUFDQSxRQUFNNmMsYUFBYSxHQUFHLFlBQVk7QUFDaEMsVUFBTXhELE9BQU8sR0FBRyxJQUFJeUQsdURBQUosQ0FBWUgsWUFBWixDQUFoQjtBQUNBLFVBQU10RCxPQUFPLENBQUMwRCxNQUFSLENBQWUsT0FBZixFQUF3QjtBQUFFM1ksVUFBSSxFQUFFO0FBQVIsS0FBeEIsQ0FBTjtBQUNBLFVBQU1pVixPQUFPLENBQUMwRCxNQUFSLENBQWUsTUFBZixFQUF1QjtBQUFFM1ksVUFBSSxFQUFFO0FBQVIsS0FBdkIsQ0FBTjtBQUNBLFdBQU8sTUFBTXVILFFBQVEsQ0FBQyxzQkFBRCxDQUFyQjtBQUNELEdBTEQ7O0FBTUFrUCx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUM4QixZQUFZLENBQUNLLEtBQWQsSUFBdUIsQ0FBQ0wsWUFBWSxDQUFDTSxJQUF6QyxFQUErQztBQUM3Q3RSLGNBQVEsQ0FBQyxzQkFBRCxDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsTUFBSXVSLGVBQW9CLEdBQUcsRUFBM0I7QUFDQSxNQUFJQyxXQUFnQixHQUFHLEVBQXZCO0FBQ0EsTUFBSUMsWUFBaUIsR0FBRyxFQUF4Qjs7QUFFQSxRQUFNQyxjQUFjLEdBQUcsTUFBT2hiLEtBQVAsSUFBc0I7QUFDM0MsUUFBSWliLGNBQWMsR0FBRztBQUNuQi9PLGFBQU8sRUFBRSxDQUFDO0FBQ1J4TCxhQUFLLEVBQUUsVUFEQztBQUVSNk8sZ0JBQVEsRUFBRSxVQUZGO0FBR1J2UCxhQUFLLEVBQUVBO0FBSEMsT0FBRCxDQURVO0FBTW5CbU0sYUFBTyxFQUFFLEVBTlU7QUFPbkJtSCxjQUFRLEVBQUUsQ0FQUztBQVFuQjlOLFVBQUksRUFBRTtBQVJhLEtBQXJCO0FBVUEsUUFBSTBWLFVBQVUsR0FBRztBQUNmaFAsYUFBTyxFQUFFLENBQUM7QUFDUnhMLGFBQUssRUFBRSxVQURDO0FBRVI2TyxnQkFBUSxFQUFFLFVBRkY7QUFHUnZQLGFBQUssRUFBRUE7QUFIQyxPQUFELENBRE07QUFNZm1NLGFBQU8sRUFBRSxFQU5NO0FBT2ZtSCxjQUFRLEVBQUUsQ0FQSztBQVFmOU4sVUFBSSxFQUFFO0FBUlMsS0FBakI7QUFVQSxRQUFJMlYsV0FBVyxHQUFHO0FBQ2hCalAsYUFBTyxFQUFFLENBQUM7QUFDUnhMLGFBQUssRUFBRSxVQURDO0FBRVI2TyxnQkFBUSxFQUFFLFVBRkY7QUFHUnZQLGFBQUssRUFBRUE7QUFIQyxPQUFELENBRE87QUFNaEJtTSxhQUFPLEVBQUUsRUFOTztBQU9oQm1ILGNBQVEsRUFBRSxDQVBNO0FBUWhCOU4sVUFBSSxFQUFFO0FBUlUsS0FBbEI7QUFVQSxRQUFJLENBQUM0VixRQUFELEVBQVdsQixLQUFYLElBQTJCLE1BQU0zTyxrREFBRSxDQUFDaU8sV0FBVyxDQUFDaE8sS0FBWixDQUFrQjJQLFdBQWxCLENBQUQsQ0FBdkM7O0FBQ0EsUUFBSUUsU0FBUyxHQUFHL00sOENBQUMsQ0FBQzdOLEdBQUYsQ0FBTXlaLEtBQU4sRUFBYSxNQUFiLEVBQXFCLEVBQXJCLENBQWhCOztBQUNBLFFBQUdtQixTQUFTLENBQUNqUSxNQUFiLEVBQW9CO0FBQ2xCK08sY0FBUSxDQUFDa0IsU0FBRCxDQUFSO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDQyxXQUFELEVBQWN4QixRQUFkLElBQWlDLE1BQU12TyxrREFBRSxDQUFDbU8sY0FBYyxDQUFDbE8sS0FBZixDQUFxQnlQLGNBQXJCLENBQUQsQ0FBN0M7O0FBQ0EsUUFBSU0sWUFBWSxHQUFHak4sOENBQUMsQ0FBQzdOLEdBQUYsQ0FBTXFaLFFBQU4sRUFBZ0IsTUFBaEIsRUFBd0IsRUFBeEIsQ0FBbkI7O0FBQ0EsUUFBR3lCLFlBQVksQ0FBQ25RLE1BQWhCLEVBQXVCO0FBQ3JCMk8saUJBQVcsQ0FBQ3dCLFlBQUQsQ0FBWDtBQUNEOztBQUVELFFBQUksQ0FBQ0MsT0FBRCxFQUFVeEIsSUFBVixJQUF5QixNQUFNek8sa0RBQUUsQ0FBQ3FPLFVBQVUsQ0FBQ3BPLEtBQVgsQ0FBaUIwUCxVQUFqQixDQUFELENBQXJDOztBQUNBLFFBQUlPLFFBQVEsR0FBR25OLDhDQUFDLENBQUM3TixHQUFGLENBQU11WixJQUFOLEVBQVksTUFBWixFQUFvQixFQUFwQixDQUFmOztBQUNBLFFBQUd5QixRQUFRLENBQUNyUSxNQUFaLEVBQW1CO0FBQ2pCNk8sYUFBTyxDQUFDd0IsUUFBRCxDQUFQO0FBQ0Q7QUFJRixHQW5ERDs7QUFvREEsUUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekJ2QixZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FGLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQUYsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNELEdBSkQ7O0FBTUEsUUFBTTRCLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsV0FDRSxNQUFDLCtFQUFEO0FBQ0UsU0FBRyxFQUFFelIsVUFEUDtBQUVFLGNBQVEsRUFBRXNRLGFBRlo7QUFHRSxXQUFLLEVBQUVuUixDQUFDLENBQUMsU0FBRCxDQUhWO0FBSUUsYUFBTyxFQUFFQSxDQUFDLENBQUMsd0JBQUQ7QUFKWixNQURGO0FBUUQsR0FURDs7QUFXQSxRQUFNdVMsZ0JBQWdCLEdBQUcsTUFBT2haLElBQVAsSUFBb0M7QUFDM0R4RixXQUFPLENBQUNnYixHQUFSLENBQVl4VixJQUFaO0FBQ0F5WCxtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBLFFBQUkvTyxNQUFNLEdBQUc7QUFBRUwsUUFBRSxFQUFFNkwsSUFBSSxDQUFDN0wsRUFBWDtBQUFlNFEsaUJBQVcsRUFBRWpaLElBQUksQ0FBQ2laLFdBQWpDO0FBQThDQyxjQUFRLEVBQUVsWixJQUFJLENBQUNrWjtBQUE3RCxLQUFiO0FBRUEsUUFBSSxDQUFDNVcsS0FBRCxFQUFRM0ksTUFBUixJQUF5QixNQUFNZ1Asa0RBQUUsQ0FBQ2lPLFdBQVcsQ0FBQ3VDLGtCQUFaLENBQStCelEsTUFBL0IsQ0FBRCxDQUFyQzs7QUFDQSxRQUFJcEcsS0FBSixFQUFXO0FBQ1QsYUFBTzRCLE1BQU0sQ0FBQ3VDLENBQUMsQ0FBRSxVQUFTbkUsS0FBSyxDQUFDZ0csSUFBSyxFQUF0QixDQUFGLEVBQTRCN0IsQ0FBQyxDQUFDbkUsS0FBSyxDQUFDbkUsT0FBUCxDQUE3QixFQUE4QyxPQUE5QyxDQUFiO0FBQ0Q7O0FBRUQrRixVQUFNLENBQUN1QyxDQUFDLENBQUMsdUJBQUQsQ0FBRixDQUFOO0FBQ0QsR0FYRCxDQWxHa0MsQ0ErR2xDOzs7QUFDQSxRQUFNMlMsaUJBQWlCLEdBQUcsQ0FBQztBQUFFQztBQUFGLEdBQUQsTUFBcUQ7QUFDN0VDLGFBQVMsRUFBRSxDQUFDQyxJQUFELEVBQVluYyxLQUFaLEtBQTJCO0FBQ3BDLFVBQUksQ0FBQ0EsS0FBRCxJQUFVaWMsYUFBYSxDQUFDLFVBQUQsQ0FBYixLQUE4QmpjLEtBQTVDLEVBQW1EO0FBQ2pELGVBQU8wRCxPQUFPLENBQUNlLE9BQVIsRUFBUDtBQUNEOztBQUNELGFBQU9mLE9BQU8sQ0FBQ3FCLE1BQVIsQ0FBZXNFLENBQUMsQ0FBQyxpQkFBRCxDQUFoQixDQUFQO0FBQ0Q7QUFONEUsR0FBckQsQ0FBMUI7O0FBU0EsUUFBTStTLHFCQUFxQixHQUFHLE1BQU07QUFDbEMsVUFBTSxDQUFDQyxrQkFBRCxJQUF1QkMseUNBQUksQ0FBQ0MsT0FBTCxFQUE3QjtBQUNBLFdBQVEsTUFBQyx5Q0FBRDtBQUFNLFVBQUksRUFBRUYsa0JBQVo7QUFBZ0MsVUFBSSxFQUFDLG9CQUFyQztBQUNOLG1CQUFhLEVBQUU7QUFDYlIsbUJBQVcsRUFBRSxFQURBO0FBRWJDLGdCQUFRLEVBQUUsRUFGRztBQUdiVSxrQkFBVSxFQUFFO0FBSEMsT0FEVDtBQU1OLGNBQVEsRUFBRVo7QUFOSixPQVFOLE1BQUMsMENBQUQ7QUFDRSxjQUFRLEVBQUUsS0FEWjtBQUVFLGFBQU8sRUFBRXhCLFlBRlg7QUFHRSxjQUFRLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQsQ0FIakM7QUFJRSxVQUFJLEVBQUUsTUFBTTtBQUFFZ0MsMEJBQWtCLENBQUNJLE1BQW5CO0FBQThCO0FBSjlDLE9BTUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFLLEVBQUVwVCxDQUFDLENBQUMsYUFBRCxDQURWO0FBRUUsY0FBUSxFQUFFO0FBQUVxVCxZQUFJLEVBQUU7QUFBUixPQUZaO0FBR0UsZ0JBQVUsRUFBRTtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUhkO0FBSUUsVUFBSSxFQUFDLGFBSlA7QUFLRSxXQUFLLEVBQUUsQ0FDTDtBQUFFQyxnQkFBUSxFQUFFLElBQVo7QUFBa0I1YixlQUFPLEVBQUVzSSxDQUFDLENBQUMsZUFBRDtBQUE1QixPQURLO0FBTFQsT0FTRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLGlCQUFXLEVBQUVBLENBQUMsQ0FBQyxhQUFELENBRGhCO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxlQUFTLEVBQUU7QUFIYixNQVRGLENBTkYsRUFxQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFLLEVBQUVBLENBQUMsQ0FBQyxVQUFELENBRFY7QUFFRSxjQUFRLEVBQUU7QUFBRXFULFlBQUksRUFBRTtBQUFSLE9BRlo7QUFHRSxnQkFBVSxFQUFFO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BSGQ7QUFJRSxVQUFJLEVBQUMsVUFKUDtBQUtFLFdBQUssRUFBRSxDQUNMO0FBQUVDLGdCQUFRLEVBQUUsSUFBWjtBQUFrQjViLGVBQU8sRUFBRXNJLENBQUMsQ0FBQyxlQUFEO0FBQTVCLE9BREs7QUFMVCxPQVNFLE1BQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0UsaUJBQVcsRUFBRUEsQ0FBQyxDQUFDLFVBQUQsQ0FEaEI7QUFFRSxVQUFJLEVBQUM7QUFGUCxNQVRGLENBckJGLEVBbUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsV0FBSyxFQUFFQSxDQUFDLENBQUMsWUFBRCxDQURWO0FBRUUsY0FBUSxFQUFFO0FBQUVxVCxZQUFJLEVBQUU7QUFBUixPQUZaO0FBR0UsZ0JBQVUsRUFBRTtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUhkO0FBSUUsVUFBSSxFQUFDLFlBSlA7QUFLRSxXQUFLLEVBQUUsQ0FDTDtBQUFFQyxnQkFBUSxFQUFFLElBQVo7QUFBa0I1YixlQUFPLEVBQUVzSSxDQUFDLENBQUMsZUFBRDtBQUE1QixPQURLLEVBRUwyUyxpQkFGSztBQUxULE9BVUUsTUFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxpQkFBVyxFQUFFM1MsQ0FBQyxDQUFDLFlBQUQ7QUFEaEIsTUFWRixDQW5DRixDQVJNLENBQVI7QUE0REQsR0E5REQ7O0FBZ0VBLFFBQU11VCxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFdBQU8sbUJBQ0wsTUFBQywyQ0FBRDtBQUFRLFVBQUksRUFBRSxNQUFDLGtFQUFELE9BQWQ7QUFBb0MsVUFBSSxFQUFDLE1BQXpDO0FBQWdELGVBQVMsRUFBQyxZQUExRDtBQUF1RSxhQUFPLEVBQUUsTUFBTTtBQUFFLFlBQUkxUyxVQUFVLENBQUMwQixPQUFmLEVBQXdCMUIsVUFBVSxDQUFDMEIsT0FBWCxDQUFtQkUsSUFBbkI7QUFBMkI7QUFBM0ksTUFESyxFQUVMLE1BQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUUsTUFBQywrREFBRDtBQUFlLFlBQUk7QUFBbkIsUUFBZDtBQUFzQyxVQUFJLEVBQUMsTUFBM0M7QUFBa0QsZUFBUyxFQUFDLFlBQTVEO0FBQTBFLGFBQU8sRUFBRSxNQUFNO0FBQUV1Tyx1QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUF1QjtBQUFsSCxNQUZLLENBQVA7QUFJRCxHQUxEOztBQU9BLFFBQU07QUFBRXRDLGFBQUY7QUFBYUk7QUFBYixNQUFrQy9aLEtBQXhDO0FBQ0EsUUFBTXllLGFBQWEsR0FBRztBQUNwQkMsYUFBUyxFQUFFLFNBRFM7QUFFcEJ4ZCxXQUFPLEVBQUUsTUFBTTZZLGdCQUFnQixDQUFDLENBQUNKLFNBQUY7QUFGWCxHQUF0QjtBQUlBLE1BQUlnRixXQUFXLEdBQUcsUUFBbEI7QUFDQSxNQUFJaEYsU0FBSixFQUFlZ0YsV0FBVyxJQUFJLFlBQWY7O0FBRWYsUUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekIsV0FBTyxNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNMO0FBQUssV0FBSyxFQUFFO0FBQUVwUyxhQUFLLEVBQUU7QUFBVDtBQUFaLE9BQ0UsTUFBQyx3Q0FBRDtBQUFLLFlBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBQWIsT0FDRSxNQUFDLHdDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFO0FBQXhCLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFLE1BQUMsMkNBQUQ7QUFDRSxVQUFJLEVBQUUsTUFBQyw4REFBRCxPQURSO0FBRUUsU0FBRyxFQUFFLEVBRlA7QUFFVyxVQUFJLEVBQUUsR0FGakI7QUFFc0IsV0FBSyxFQUFDO0FBRjVCLE9BR0drTSxJQUFJLENBQUNtRyxRQUhSLENBREYsQ0FERixDQURGLEVBV0UsTUFBQyx3Q0FBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRTtBQUF6QixPQUNFLE1BQUMsd0NBQUQsUUFDRSxpQkFBSTVULENBQUMsQ0FBQyxVQUFELENBQUwsQ0FERixRQUMwQixpQkFBSXlOLElBQUksQ0FBQ29HLFFBQVQsQ0FEMUIsQ0FERixFQUlFLE1BQUMsd0NBQUQsUUFDQSxpQkFBSTdULENBQUMsQ0FBQyxVQUFELENBQUwsQ0FEQSxRQUN3QixpQkFBSXlOLElBQUksQ0FBQ21HLFFBQVQsQ0FEeEIsQ0FKRixFQU9FLE1BQUMsd0NBQUQsUUFDRSxpQkFBSTVULENBQUMsQ0FBQyxPQUFELENBQUwsQ0FERixRQUN1QixpQkFBSXlOLElBQUksQ0FBQ3FHLEtBQUwsR0FBYXJHLElBQUksQ0FBQ3FHLEtBQWxCLEdBQTBCOVQsQ0FBQyxDQUFDLFFBQUQsQ0FBL0IsQ0FEdkIsQ0FQRixFQVVFLE1BQUMsd0NBQUQsUUFDRSxpQkFBSUEsQ0FBQyxDQUFDLE9BQUQsQ0FBTCxDQURGLFFBQ3VCLGlCQUFJeU4sSUFBSSxDQUFDc0csS0FBTCxHQUFhdEcsSUFBSSxDQUFDc0csS0FBbEIsR0FBMEIvVCxDQUFDLENBQUMsUUFBRCxDQUEvQixDQUR2QixDQVZGLENBWEYsQ0FERixDQURLLENBQVA7QUE4QkQsR0EvQkQ7O0FBZ0NBLFFBQU1nVSxXQUFXLEdBQUkzUyxLQUFELElBQW1CO0FBQ3JDLFdBQ0Usb0JBQ0dBLEtBREgsQ0FERjtBQWFELEdBZEQ7O0FBZUEsUUFBTTRTLFVBQVUsR0FBRyxDQUFDNVMsS0FBRCxFQUFnQjZTLElBQWhCLEtBQThCO0FBQy9DLFdBQU87QUFDTHZkLFdBQUssRUFBRTBLLEtBREY7QUFFTHFHLFdBQUssRUFDSDtBQUNFLGFBQUssRUFBRTtBQUNMRyxpQkFBTyxFQUFFLE1BREo7QUFFTHNNLHdCQUFjLEVBQUU7QUFGWDtBQURULFNBTUc5UyxLQU5ILEVBT0Usb0JBQ0c2UyxJQURILENBUEY7QUFIRyxLQUFQO0FBZ0JELEdBakJEOztBQW1CQXpELFVBQVEsQ0FBQ2pKLEdBQVQsQ0FBYSxDQUFDdUIsSUFBRCxFQUFZNUcsS0FBWixLQUE4QjtBQUN6Q3FQLG1CQUFlLENBQUN6VyxJQUFoQixDQUFxQmtaLFVBQVUsQ0FDNUIsR0FBRWxMLElBQUksQ0FBQzZLLFFBQVMsRUFEWSxFQUU3QjtBQUFHLFdBQUssRUFBRTtBQUFFUSxhQUFLLEVBQUU7QUFBVCxPQUFWO0FBQThCLFVBQUksRUFBRyxZQUFXckwsSUFBSSxDQUFDbkgsRUFBRyxPQUF4RDtBQUFnRSxZQUFNLEVBQUMsUUFBdkU7QUFBZ0YsU0FBRyxFQUFDO0FBQXBGLDZCQUY2QixDQUEvQjtBQUlELEdBTEQ7QUFNQStPLE1BQUksQ0FBQ25KLEdBQUwsQ0FBUyxDQUFDdUIsSUFBRCxFQUFZNUcsS0FBWixLQUE4QjtBQUNyQ3NQLGVBQVcsQ0FBQzFXLElBQVosQ0FBaUJrWixVQUFVLENBQ3hCLEdBQUVsTCxJQUFJLENBQUNzTCxRQUFTLE1BQUt0TCxJQUFJLENBQUN1TCxLQUFNLEVBRFIsRUFFekI7QUFBRyxXQUFLLEVBQUU7QUFBRUYsYUFBSyxFQUFFO0FBQVQsT0FBVjtBQUE4QixVQUFJLEVBQUcsUUFBT3JMLElBQUksQ0FBQ25ILEVBQUcsT0FBcEQ7QUFBNEQsWUFBTSxFQUFDLFFBQW5FO0FBQTRFLFNBQUcsRUFBQztBQUFoRiw2QkFGeUIsQ0FBM0I7QUFJRCxHQUxEO0FBTUFpUCxPQUFLLENBQUNySixHQUFOLENBQVUsQ0FBQ3VCLElBQUQsRUFBWTVHLEtBQVosS0FBOEI7QUFDdEN1UCxnQkFBWSxDQUFDM1csSUFBYixDQUFrQmtaLFVBQVUsQ0FDekIsR0FBRWxMLElBQUksQ0FBQzZLLFFBQVMsTUFBSzdLLElBQUksQ0FBQzhLLFFBQVMsRUFEVixFQUUxQjtBQUFHLFdBQUssRUFBRTtBQUFFTyxhQUFLLEVBQUU7QUFBVCxPQUFWO0FBQThCLFVBQUksRUFBRyxTQUFRckwsSUFBSSxDQUFDbkgsRUFBRyxPQUFyRDtBQUE2RCxZQUFNLEVBQUMsUUFBcEU7QUFBNkUsU0FBRyxFQUFDO0FBQWpGLDZCQUYwQixDQUE1QjtBQUlELEdBTEQ7QUFPQSxRQUFNNUcsT0FBTyxHQUFHLENBQ2Q7QUFDRTBNLFNBQUssRUFBRXNNLFdBQVcsQ0FBQ2hVLENBQUMsQ0FBQyxTQUFELENBQUYsQ0FEcEI7QUFFRWhGLFdBQU8sRUFBRXdXO0FBRlgsR0FEYyxFQUtkO0FBQ0U5SixTQUFLLEVBQUVzTSxXQUFXLENBQUNoVSxDQUFDLENBQUMsS0FBRCxDQUFGLENBRHBCO0FBRUVoRixXQUFPLEVBQUV5VztBQUZYLEdBTGMsRUFTZDtBQUNFL0osU0FBSyxFQUFFc00sV0FBVyxDQUFDaFUsQ0FBQyxDQUFDLFVBQUQsQ0FBRixDQURwQjtBQUVFaEYsV0FBTyxFQUFFMFc7QUFGWCxHQVRjLENBQWhCOztBQWVBLFFBQU02QyxZQUFZLEdBQUcsTUFBTTtBQUN6QixXQUNFO0FBQUssV0FBSyxFQUFFO0FBQUU3RSxjQUFNLEVBQUUsT0FBVjtBQUFtQjdILGVBQU8sRUFBRTtBQUE1QjtBQUFaLE9BQ0UsTUFBQyxpREFBRDtBQUNFLHVCQUFpQixFQUFDLGtDQURwQjtBQUVFLDhCQUF3QixFQUFFLEdBRjVCLENBRWlDO0FBRmpDO0FBR0UsY0FBUSxFQUFHbFIsS0FBRCxJQUFnQmdiLGNBQWMsQ0FBQ2hiLEtBQUQsQ0FIMUM7QUFJRSxZQUFNLEVBQUUsTUFBTTBiLFlBQVksRUFKNUI7QUFLRSxXQUFLLEVBQUU7QUFBRTlRLGFBQUssRUFBRTtBQUFULE9BTFQsQ0FLeUI7QUFMekI7QUFNRSxhQUFPLEVBQUV2RyxPQU5YO0FBT0UsY0FBUSxFQUFJakcsS0FBSyxDQUFDNGEsY0FBTixHQUFzQixJQUF0QixHQUE2QixLQVAzQyxDQU9tRDs7QUFQbkQsT0FTRSxNQUFDLDBDQUFELENBQU8sTUFBUDtBQUFjLFVBQUksRUFBQyxPQUFuQjtBQUEyQixpQkFBVyxFQUFFM1AsQ0FBQyxDQUFDLFFBQUQ7QUFBekMsTUFURixDQURGLENBREY7QUFlRCxHQWhCRDs7QUFrQkEsU0FBTyxNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNMLE1BQUMsTUFBRDtBQUNFLGFBQVMsRUFBRTBUO0FBRGIsS0FFR2hGLFNBQVMsR0FDUixNQUFDLG9FQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFNUUsV0FBSyxFQUFFO0FBQVQ7QUFBM0IsS0FBa0QwSixhQUFsRCxFQURRLEdBRVIsTUFBQyxrRUFBRDtBQUFrQixTQUFLLEVBQUU7QUFBRTFKLFdBQUssRUFBRTtBQUFUO0FBQXpCLEtBQWdEMEosYUFBaEQsRUFKSixFQU1FLE1BQUMsNENBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBNEIsU0FBSyxFQUFFeFQsQ0FBQyxDQUFDLGNBQUQsQ0FBcEM7QUFBc0QsV0FBTyxFQUFFMlQsWUFBWTtBQUEzRSxLQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUUsTUFBQyw4REFBRCxPQUFkO0FBQWdDLFFBQUksRUFBQyxNQUFyQztBQUE0QyxhQUFTLEVBQUM7QUFBdEQsSUFERixDQU5GLEVBZ0JHWSxZQUFZLEVBaEJmLEVBaUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBaUNoQixrQkFBa0IsRUFBbkQsQ0FqQkYsQ0FESyxFQXFCSmpCLG1CQUFtQixFQXJCZixFQXNCSlMscUJBQXFCLEVBdEJqQixDQUFQO0FBd0JELENBdFZEOztBQXdWZTdDLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzV0E7QUFDQTtBQUNBLE1BQU07QUFBRUg7QUFBRixJQUFjQyx5Q0FBcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU13RSxhQUFhLEdBQUl6ZixLQUFELElBQWdCO0FBQ3BDLFFBQU07QUFBRThCLFVBQUY7QUFBVW1KLEtBQVY7QUFBYUM7QUFBYixNQUEwQkksc0VBQVcsQ0FBQztBQUFFa0QsUUFBSSxFQUFFLENBQUMsTUFBRDtBQUFSLEdBQUQsQ0FBM0M7QUFDQSxRQUFNO0FBQUN2QztBQUFELE1BQW9CQywyRUFBaUIsRUFBM0M7O0FBQ0EsUUFBTXVDLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFVBQU1DLFNBQVMsR0FBRzVNLE1BQU0sQ0FBQ2tDLFFBQXpCO0FBQ0EsVUFBTTJLLFNBQWMsR0FBR0MsK0NBQXZCOztBQUNBLFNBQUssSUFBSUMsU0FBVCxJQUFzQkYsU0FBdEIsRUFBaUM7QUFDL0IsVUFBSUcsWUFBWSxHQUFHSCxTQUFTLENBQUNFLFNBQUQsQ0FBNUI7QUFDQSxVQUFJLENBQUNDLFlBQVksQ0FBQ0MsTUFBbEIsRUFBMEI7QUFDMUIsVUFBSUQsWUFBWSxDQUFDQyxNQUFiLENBQW9CQyxNQUFwQixDQUEyQixDQUEzQixNQUFrQ04sU0FBdEMsRUFBaUQsT0FBT0csU0FBUDtBQUNsRDtBQUNGLEdBUkQ7O0FBVUEsUUFBTTZRLGFBQWEsR0FBSWxiLElBQUQsSUFBZTtBQUNuQyxXQUFPQSxJQUFJLENBQUNpTyxHQUFMLENBQVV1QixJQUFELElBQWU7QUFDN0IsVUFBSUEsSUFBSSxDQUFDcFQsUUFBVCxFQUFtQjtBQUNqQixZQUFJb1QsSUFBSSxDQUFDL0QsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLGNBQUlyUCxRQUFRLEdBQUc4ZSxhQUFhLENBQUMxTCxJQUFJLENBQUNwVCxRQUFOLENBQTVCO0FBQ0EsY0FBSSxDQUFDQSxRQUFRLENBQUNvTSxNQUFkLEVBQXNCO0FBQ3RCLGlCQUNFLE1BQUMseUNBQUQsQ0FBTSxTQUFOO0FBQ0UsZUFBRyxFQUFFZ0gsSUFBSSxDQUFDbkYsU0FEWjtBQUVFLGlCQUFLLEVBQ0gsTUFBQyw4Q0FBRCxRQUNHbUYsSUFBSSxDQUFDMkwsSUFBTCxHQUFXM0wsSUFBSSxDQUFDMkwsSUFBaEIsR0FBc0IsRUFEekIsRUFFRSxvQkFBTzFVLENBQUMsQ0FBQytJLElBQUksQ0FBQ25GLFNBQU4sQ0FBUixDQUZGO0FBSEosYUFTR2pPLFFBVEgsQ0FERjtBQWFELFNBaEJELE1BaUJLO0FBQ0gsaUJBQ0UsTUFBQyxPQUFEO0FBQ0UsZUFBRyxFQUFFb1QsSUFBSSxDQUFDbkYsU0FEWjtBQUVFLGlCQUFLLEVBQ0gsTUFBQyw4Q0FBRCxRQUNHbUYsSUFBSSxDQUFDMkwsSUFBTCxHQUFXM0wsSUFBSSxDQUFDMkwsSUFBaEIsR0FBc0IsRUFEekIsRUFFRSxvQkFBTzFVLENBQUMsQ0FBQytJLElBQUksQ0FBQ25GLFNBQU4sQ0FBUixDQUZGO0FBSEosYUFTRzZRLGFBQWEsQ0FBQzFMLElBQUksQ0FBQ3BULFFBQU4sQ0FUaEIsQ0FERjtBQWFEO0FBQ0Y7O0FBQ0QsVUFBRyxDQUFDcUwsZUFBZSxDQUFDK0gsSUFBSSxDQUFDMUYsV0FBTixDQUFuQixFQUF1QztBQUN2QyxhQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBRyxFQUFFMEYsSUFBSSxDQUFDbkYsU0FBckI7QUFBZ0MsZUFBTyxFQUFFLE1BQU0zRCxRQUFRLENBQUM4SSxJQUFJLENBQUNuRixTQUFOO0FBQXZELFNBRUdtRixJQUFJLENBQUMyTCxJQUFMLEdBQVczTCxJQUFJLENBQUMyTCxJQUFoQixHQUFzQixFQUZ6QixFQUdFLG9CQUFPMVUsQ0FBQyxDQUFDK0ksSUFBSSxDQUFDbkYsU0FBTixDQUFSLENBSEYsQ0FERjtBQU9ELEtBM0NNLEVBMkNKc0YsTUEzQ0ksQ0EyQ0l5TCxJQUFELElBQWNBLElBM0NqQixDQUFQO0FBNENELEdBN0NEOztBQStDQSxRQUFNO0FBQUVDLFNBQUY7QUFBUzlGLG9CQUFUO0FBQTJCRixZQUEzQjtBQUFxQ2lHO0FBQXJDLE1BQStEOWYsS0FBckU7QUFBQSxRQUFzRDZSLFVBQXRELDRCQUFxRTdSLEtBQXJFOztBQUNBLFFBQU0rZixnQkFBZ0IsR0FBR3RSLFlBQVksRUFBckM7QUFDQSxRQUFNdVIsU0FBUyxHQUFHQyx3RUFBbUIsQ0FBQ0YsZ0JBQUQsQ0FBckM7QUFDQSxNQUFJRyxXQUFXLEdBQUdGLFNBQVMsQ0FBQ3ZOLEdBQVYsQ0FBZTBOLFFBQUQsSUFBbUJBLFFBQVEsQ0FBQ3RSLFNBQTFDLENBQWxCO0FBQ0EsUUFBTXVSLFlBQVksR0FBR0YsV0FBVyxDQUFDRyxHQUFaLEVBQXJCO0FBQ0EsU0FBTyxNQUFDLHlDQUFEO0FBQ0wsUUFBSSxFQUFDLFFBREE7QUFFTCxTQUFLLEVBQUVSLEtBRkY7QUFHTCxtQkFBZSxFQUFFSyxXQUhaO0FBSUwsZ0JBQVksRUFBRUUsWUFKVDtBQUtMLFdBQU8sRUFDTHZHLFFBQVEsR0FDSixNQUFNO0FBQ05FLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRCxLQUhLLEdBSUp0SjtBQVZELEtBWURvQixVQVpDLEdBY0o2TixhQUFhLENBQUNZLHNEQUFELENBZFQsQ0FBUDtBQWdCRCxDQWpGRDs7QUFtRmViLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTYyxZQUFULENBQXNCQyxHQUF0QixFQUFtQztBQUMvQixNQUFHQSxHQUFHLEdBQUcsR0FBTixJQUFhQSxHQUFHLEdBQUcsT0FBdEIsRUFBOEI7QUFDMUIsV0FBTyxDQUFDQSxHQUFHLEdBQUMsSUFBTCxFQUFXQyxPQUFYLENBQW1CLENBQW5CLElBQXdCLEdBQS9CLENBRDBCLENBQ1U7QUFDdkMsR0FGRCxNQUVNLElBQUdELEdBQUcsR0FBRyxPQUFULEVBQWlCO0FBQ25CLFdBQU8sQ0FBQ0EsR0FBRyxHQUFDLE9BQUwsRUFBY0MsT0FBZCxDQUFzQixDQUF0QixJQUEyQixHQUFsQyxDQURtQixDQUNvQjtBQUMxQyxHQUZLLE1BRUEsSUFBR0QsR0FBRyxHQUFHLEdBQVQsRUFBYTtBQUNmLFdBQU9BLEdBQVAsQ0FEZSxDQUNIO0FBQ2Y7QUFDSjs7QUFDRCxNQUFNRSxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUUvSCxjQUFGO0FBQWN6TixZQUFkO0FBQXdCRCxLQUF4QjtBQUEyQmtELFdBQTNCO0FBQW9DL0MsV0FBcEM7QUFBNkN5TjtBQUE3QyxNQUF3RXZOLHNFQUFXLEVBQXpGO0FBQ0EsUUFBTW9OLElBQUksR0FBR3ROLE9BQU8sRUFBcEI7QUFDQSxRQUFNME4sbUJBQW1CLEdBQUdELHNCQUFzQixFQUFsRDtBQUNBLFFBQU04SCxXQUFXLEdBQUc7QUFDaEJDLGVBQVcsRUFBRTlILG1CQUFtQixDQUFDNEIsSUFEakI7QUFFaEJtRyxhQUFTLEVBQUUsV0FGSztBQUdoQkMsZ0JBQVksRUFBRSxnQkFIRTtBQUloQkMsZUFBVyxFQUFFLDRCQUpHO0FBS2hCQyxrQkFBYyxFQUFFLHFEQUxBO0FBTWhCQyxTQUFLLEVBQUU7QUFOUyxHQUFwQjtBQVNBLFNBQU87QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNILE1BQUMsd0NBQUQsUUFDSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0ksTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBRSxFQUFkO0FBQWtCLFFBQUksRUFBRSxNQUFDLDhEQUFELE9BQXhCO0FBQTBDLE9BQUcsRUFBRU4sV0FBVyxDQUFDQyxXQUEzRDtBQUF3RSxhQUFTLEVBQUM7QUFBbEYsSUFESixDQURKLENBREosQ0FERyxFQVFILE1BQUMsd0NBQUQsUUFDSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQXNDRCxXQUFXLENBQUNJLFdBQWxELENBREosRUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQWtDSixXQUFXLENBQUNLLGNBQTlDLENBRkosQ0FESixDQVJHLEVBb0JILE1BQUMsd0NBQUQsUUFDSSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFNLEVBQUU7QUFBckIsS0FDSSxNQUFDLDRDQUFEO0FBQVMsYUFBUyxFQUFDO0FBQW5CLElBREosQ0FESixDQXBCRyxDQUFQO0FBNEJILENBekNEOztBQTJDZU4sc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBRUEsTUFBTXZILEtBQUssR0FBRyxPQUFkO0FBRUEsTUFBTTtBQUFFNEIsUUFBRjtBQUFVbUcsT0FBVjtBQUFpQjNIO0FBQWpCLElBQTZCRSwyQ0FBbkM7QUFDQTs7QUFFQSxNQUFNMEgsT0FBTyxHQUFJbmhCLEtBQUQsSUFBZ0I7QUFDNUIsUUFBTTtBQUFFMlosYUFBRjtBQUFhSSxvQkFBYjtBQUErQkYsWUFBL0I7QUFBeUNnRztBQUF6QyxNQUFtRDdmLEtBQXpEO0FBQ0EsU0FDSSxNQUFDLEtBQUQ7QUFDSSxTQUFLLEVBQUUsR0FEWDtBQUVJLGtCQUFjLEVBQUUsQ0FGcEI7QUFHSSxXQUFPLEVBQUUsSUFIYjtBQUlJLGNBQVUsRUFBQyxJQUpmO0FBS0ksU0FBSyxFQUFFbVosS0FMWDtBQU1JLGVBQVcsTUFOZjtBQU9JLGFBQVMsRUFBRVEsU0FQZixDQVFJOztBQVJKLEtBVUksbUJBQ0ksTUFBQyx3Q0FBRCxRQUNJLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUU7QUFBWCxLQUNJLE1BQUMsZ0RBQUQsT0FESixDQURKLENBREosQ0FWSixFQWlCSSxNQUFDLDZDQUFEO0FBQ0ksU0FBSyxFQUFFa0csS0FEWDtBQUVJLG9CQUFnQixFQUFFOUYsZ0JBRnRCO0FBR0ksWUFBUSxFQUFFRjtBQUhkLElBakJKLENBREo7QUF3QkgsQ0ExQkQ7O0FBMkJlc0gsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBR2dCQyw0RUFBRCxJQUFtQjtBQUNoQyxRQUFNeEksT0FBTyxHQUFHLElBQUl5RCx1REFBSixDQUFZK0UsYUFBWixDQUFoQjtBQUNBLFNBQU94SSxPQUFQO0FBQ0QsQ0FIRCxFOzs7Ozs7Ozs7OztBQ0hBLE1BQU15SSxXQUFXLEdBQUc5ZixtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0IrZixPQUE1Qzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdoZ0IsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCK2YsT0FBekM7O0FBQ0EsTUFBTTtBQUFDeEk7QUFBRCxJQUF3QnlJLFNBQVMsRUFBdkM7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUFJSCxXQUFKLENBQWdCO0FBQzFDSSxXQUFTLEVBQUUsUUFEK0I7QUFFMUNDLGlCQUFlLEVBQUU1SSxtQkFBbUIsQ0FBQzZJLElBRks7QUFHMUNDLGdCQUFjLEVBQUUsQ0FBQyxJQUFELENBSDBCO0FBSTFDQyxZQUFVLEVBQUUsTUFKOEI7QUFLMUNDLDBCQUF3QixFQUFFLEtBTGdCO0FBTTFDQyx5QkFBdUIsRUFBRTtBQU5pQixDQUFoQixDQUE1QjtBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJULG1CQUFqQixDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUQsU0FBUyxHQUFHaGdCLG1CQUFPLENBQUMsZ0NBQUQsQ0FBUCxDQUF1QitmLE9BQXpDOztBQUNBLE1BQU07QUFBRXhJO0FBQUYsSUFBMEJ5SSxTQUFTLEVBQXpDO0FBQ0E7QUFFZSxNQUFNVyxPQUFOLENBQWM7QUFDM0JoakIsYUFBVyxDQUFDaWpCLGFBQUQsRUFBZ0I7QUFDekIsU0FBS0Msb0JBQUwsR0FBNEIzUixTQUE1QjtBQUNBLFNBQUs0Uix5QkFBTCxHQUFpQzVSLFNBQWpDO0FBQ0EsU0FBS21JLE9BQUwsR0FBZXVKLGFBQWY7QUFDQSxVQUFNNUYsS0FBSyxHQUFHM0Qsc0VBQU8sQ0FBQ3VKLGFBQUQsQ0FBUCxDQUF1QjlmLEdBQXZCLENBQTJCLE9BQTNCLENBQWQ7QUFDQWlnQixnREFBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWtELFVBQVNsRyxLQUFNLEVBQWpFO0FBQ0ErRixnREFBSyxDQUFDSSxZQUFOLENBQW1CQyxRQUFuQixDQUE0QkMsR0FBNUIsQ0FBZ0MsS0FBS0MsWUFBTCxDQUFrQjNNLElBQWxCLENBQXVCLElBQXZCLENBQWhDLEVBQThELEtBQUs0TSxpQkFBTCxDQUF1QjVNLElBQXZCLENBQTRCLElBQTVCLENBQTlEO0FBQ0Q7O0FBRUQyTSxjQUFZLENBQUNGLFFBQUQsRUFBVztBQUNyQixRQUFJLEtBQUtQLG9CQUFULEVBQStCO0FBQzdCTyxjQUFRLEdBQUcsS0FBS1Asb0JBQUwsQ0FBMEJPLFFBQTFCLENBQVg7QUFDRDs7QUFDRCxXQUFPQSxRQUFQO0FBQ0Q7O0FBRURHLG1CQUFpQixDQUFDaGMsS0FBRCxFQUFRO0FBQ3ZCLFFBQUksS0FBS3ViLHlCQUFULEVBQW9DO0FBQ2xDdmIsV0FBSyxHQUFHLEtBQUt1Yix5QkFBTCxDQUErQnZiLEtBQS9CLENBQVI7QUFDRDs7QUFDRCxXQUFPQSxLQUFQO0FBQ0Q7O0FBRURpYyxXQUFTLEdBQUc7QUFDVjtBQUNBLFdBQU9qSyxtQkFBbUIsQ0FBQ2tLLFFBQTNCO0FBQ0Q7O0FBQ0RDLGVBQWEsQ0FBQztBQUFFcmxCLE9BQUY7QUFBTzRHO0FBQVAsR0FBRCxFQUFnQixDQUU1Qjs7QUFDRDBlLGNBQVksQ0FBQy9rQixNQUFELEVBQVM7QUFDbkIsUUFBSSxDQUFDQSxNQUFMLEVBQWEsTUFBTSxJQUFJZ2xCLHdEQUFKLENBQXFCLENBQUMsQ0FBdEIsRUFBeUIsMkJBQXpCLENBQU47O0FBQ2IsVUFBTXJXLElBQUksR0FBR29ELDZDQUFDLENBQUM3TixHQUFGLENBQU1sRSxNQUFOLEVBQWMsV0FBZCxFQUEyQixDQUFDLENBQTVCLENBQWI7O0FBQ0EsVUFBTXdFLE9BQU8sR0FBR3VOLDZDQUFDLENBQUM3TixHQUFGLENBQU1sRSxNQUFOLEVBQWMsY0FBZCxFQUE4QixFQUE5QixDQUFoQjs7QUFDQSxVQUFNcUcsSUFBSSxHQUFHMEwsNkNBQUMsQ0FBQzdOLEdBQUYsQ0FBTWxFLE1BQU4sRUFBYyxXQUFkLENBQWI7O0FBQ0EsUUFBSTJPLElBQUksSUFBSSxHQUFaLEVBQWlCO0FBQ2YsWUFBTSxJQUFJcVcsd0RBQUosQ0FBcUJyVyxJQUFyQixFQUEyQm5LLE9BQTNCLEVBQW9DNkIsSUFBcEMsQ0FBTjtBQUNEOztBQUNELFdBQU9BLElBQVA7QUFDRDs7QUFFRCxRQUFNbkMsR0FBTixDQUFVekUsR0FBVixFQUFlNEcsSUFBSSxHQUFHLEVBQXRCLEVBQTBCO0FBQ3hCLFNBQUt5ZSxhQUFMLENBQW1CO0FBQUVybEIsU0FBRjtBQUFPNEc7QUFBUCxLQUFuQjtBQUNBLFFBQUlyRyxNQUFNLEdBQUcsTUFBTW1rQiw0Q0FBSyxDQUFDamdCLEdBQU4sQ0FBVSxLQUFLMGdCLFNBQUwsS0FBbUJubEIsR0FBN0IsRUFBa0M7QUFBRW1MLFlBQU0sRUFBRXZFO0FBQVYsS0FBbEMsQ0FBbkI7QUFDQSxXQUFPLEtBQUswZSxZQUFMLENBQWtCL2tCLE1BQWxCLENBQVA7QUFDRDs7QUFDRCxRQUFNaWxCLElBQU4sQ0FBV3hsQixHQUFYLEVBQWdCNEcsSUFBaEIsRUFBc0I7QUFDcEIsU0FBS3llLGFBQUwsQ0FBbUI7QUFBRXJsQixTQUFGO0FBQU80RztBQUFQLEtBQW5CO0FBQ0EsUUFBSXJHLE1BQU0sR0FBRyxNQUFNbWtCLDRDQUFLLENBQUNjLElBQU4sQ0FBVyxLQUFLTCxTQUFMLEtBQW1CbmxCLEdBQTlCLEVBQW1DNEcsSUFBbkMsQ0FBbkI7QUFDQSxXQUFPLEtBQUswZSxZQUFMLENBQWtCL2tCLE1BQWxCLENBQVA7QUFDRDs7QUFDRCxRQUFNa2xCLEdBQU4sQ0FBVXpsQixHQUFWLEVBQWU0RyxJQUFmLEVBQXFCO0FBQ25CLFNBQUt5ZSxhQUFMLENBQW1CO0FBQUVybEIsU0FBRjtBQUFPNEc7QUFBUCxLQUFuQjtBQUNBLFFBQUlyRyxNQUFNLEdBQUcsTUFBTW1rQiw0Q0FBSyxDQUFDZSxHQUFOLENBQVUsS0FBS04sU0FBTCxLQUFtQm5sQixHQUE3QixFQUFrQzRHLElBQWxDLENBQW5CO0FBQ0EsV0FBTyxLQUFLMGUsWUFBTCxDQUFrQi9rQixNQUFsQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBTW1QLE1BQU4sQ0FBYTFQLEdBQWIsRUFBa0I0RyxJQUFsQixFQUF3QjtBQUN0QixTQUFLeWUsYUFBTCxDQUFtQjtBQUFFcmxCLFNBQUY7QUFBTzRHO0FBQVAsS0FBbkI7QUFDQSxRQUFJckcsTUFBTSxHQUFHLE1BQU1ta0IsNENBQUssQ0FBQ2hWLE1BQU4sQ0FBYSxLQUFLeVYsU0FBTCxLQUFtQm5sQixHQUFoQyxFQUFxQztBQUFFbUwsWUFBTSxFQUFFdkU7QUFBVixLQUFyQyxDQUFuQjtBQUNBLFdBQU8sS0FBSzBlLFlBQUwsQ0FBa0Iva0IsTUFBbEIsQ0FBUDtBQUNEOztBQTdEMEIsQzs7Ozs7Ozs7Ozs7QUNQN0IsTUFBTWdsQixnQkFBTixDQUFzQjtBQUVwQmprQixhQUFXLENBQUM0TixJQUFJLEdBQUMsRUFBTixFQUFVbkssT0FBTyxHQUFHLEVBQXBCLEVBQXdCNkIsSUFBeEIsRUFBOEI7QUFDdkMsU0FBS3NJLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtuSyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLNkIsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBTm1COztBQVN0QndkLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtCLGdCQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsTUFBTUcsVUFBVSxHQUFHL2hCLG1CQUFPLENBQUMsZ0NBQUQsQ0FBMUI7O0FBQ0EsTUFBTWdpQixXQUFXLEdBQUdoaUIsbUJBQU8sQ0FBQyxrQ0FBRCxDQUEzQjs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTWlpQixLQUFOLENBQVk7QUFDUixTQUFPbFUsT0FBUCxDQUFlbE0sSUFBZixFQUFxQjJGLE1BQXJCLEVBQTZCO0FBQ3pCLFFBQUlsQyxTQUFTLEdBQUc0YyxvQ0FBVyxDQUFDcmdCLElBQUQsQ0FBM0I7O0FBQ0EsUUFBSSxDQUFDeUQsU0FBTCxFQUFnQjtBQUNaO0FBQ0EsWUFBTW9RLEtBQUssQ0FBRSxTQUFRN1QsSUFBSyxZQUFmLENBQVg7QUFDSDs7QUFDRCxRQUFJc2dCLE9BQU8sR0FBRyxJQUFJSixVQUFKLENBQWV6YyxTQUFTLENBQUNqSixHQUF6QixDQUFkO0FBQ0EsUUFBSThHLEtBQUssR0FBRzZlLFdBQVcsQ0FBQzVSLFNBQVosQ0FBc0I1SSxNQUF0QixDQUFaOztBQUNBLFFBQUk7QUFDQSxVQUFJNGEsS0FBSyxHQUFHRCxPQUFPLENBQUMvUixTQUFSLENBQWtCNUksTUFBbEIsQ0FBWixDQURBLENBQ3NDOztBQUN0QyxVQUFJOUssSUFBSSxHQUFHMGxCLEtBQVgsQ0FGQSxDQUVpQjs7QUFDakIsVUFBSTljLFNBQVMsQ0FBQ2tJLE1BQVYsQ0FBaUJDLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLE1BQWtDLFFBQXRDLEVBQWdEO0FBQzVDL1EsWUFBSSxHQUFHNEksU0FBUyxDQUFDa0ksTUFBVixDQUFpQkMsTUFBakIsQ0FBd0IsQ0FBeEIsQ0FBUDs7QUFDQSxZQUFJL1EsSUFBSSxDQUFDMmxCLE9BQUwsQ0FBYSxHQUFiLE1BQXNCLENBQUMsQ0FBM0IsRUFBOEI7QUFDMUIzbEIsY0FBSSxJQUFLLElBQUd5RyxLQUFNLEVBQWxCO0FBQ0gsU0FGRCxNQUVPO0FBQ0h6RyxjQUFJLElBQUssSUFBR3lHLEtBQU0sRUFBbEI7QUFDSDtBQUNKOztBQUNELGFBQU87QUFDSHhHLFVBQUUsRUFBRXlsQixLQUREO0FBRUgxbEIsWUFBSSxFQUFFQTtBQUZILE9BQVA7QUFLSCxLQWhCRCxDQWdCRSxPQUFPc0IsQ0FBUCxFQUFVO0FBQ1I7QUFDQSxZQUFNQSxDQUFOO0FBQ0g7QUFDSjs7QUFFRCxTQUFPd1gsUUFBUCxDQUFnQnJTLEtBQWhCLEVBQXVCN0UsT0FBTyxHQUFHLElBQWpDLEVBQXVDO0FBQ25DLFFBQUksSUFBSixFQUFzQjtBQUN0QixRQUFJOEUsTUFBTSxHQUFHcEcsTUFBTSxDQUFDc2xCLFFBQVAsQ0FBZ0I3ZixRQUE3QjtBQUNBLFFBQUk4ZixRQUFRLEdBQUdsa0Isa0RBQU0sQ0FBQ2tDLE1BQVAsQ0FBYzRDLEtBQTdCOztBQUNBLFFBQUk2UixRQUFRLG1DQUNMdU4sUUFESyxHQUVMcGYsS0FGSyxDQUFaOztBQUlBLFFBQUlnTixJQUFJLENBQUNDLFNBQUwsQ0FBZTRFLFFBQWYsS0FBNEI3RSxJQUFJLENBQUNDLFNBQUwsQ0FBZW1TLFFBQWYsQ0FBaEMsRUFBMEQ7QUFDMUQsUUFBSUMsaUJBQWlCLEdBQUdSLFdBQVcsQ0FBQzVSLFNBQVosQ0FBc0I0RSxRQUF0QixDQUF4QjtBQUNJOzs7Ozs7Ozs7Ozs7O0FBWUozVyxzREFBTSxDQUFDb0csSUFBUCxDQUFZO0FBQ1JoQyxjQUFRLEVBQUVwRSxrREFBTSxDQUFDa0MsTUFBUCxDQUFja0MsUUFEaEI7QUFFUlUsV0FBSyxFQUFFNlI7QUFGQyxLQUFaLEVBR0c7QUFDQ3ZTLGNBQVEsRUFBRVcsTUFEWDtBQUVDRCxXQUFLLEVBQUU2UjtBQUZSLEtBSEgsRUFNRztBQUNDMVcsYUFBTyxFQUFFQTtBQURWLEtBTkg7QUFTSDs7QUE5RE87O2dCQUFOMmpCLEsseUJBZ0UyQixDQUFDM1UsU0FBRCxFQUFZSyxNQUFaLEVBQW9COFUsVUFBVSxHQUFHLEVBQWpDLEtBQXdDO0FBQ2pFLE1BQUlDLG1CQUFtQixHQUFHUixvQ0FBVyxDQUFDNVUsU0FBRCxDQUFYLEdBQXlCNFUsb0NBQVcsQ0FBQzVVLFNBQUQsQ0FBWCxDQUF1QnlSLE9BQWhELEdBQTBEN1AsU0FBcEY7QUFDQSxNQUFJLENBQUN2QixNQUFMLEVBQWFBLE1BQU0sR0FBR29SLGdEQUFUOztBQUNiLE9BQUssSUFBSTdiLEtBQVQsSUFBa0J5SyxNQUFsQixFQUEwQjtBQUN0QixRQUFJekssS0FBSyxDQUFDb0ssU0FBTixLQUFvQm9WLG1CQUF4QixFQUE2QztBQUN6Q0QsZ0JBQVUsQ0FBQ2hlLElBQVgsQ0FBZ0J2QixLQUFoQjtBQUVBLGFBQU91ZixVQUFQO0FBQ0gsS0FKRCxNQUlPLElBQUl2ZixLQUFLLENBQUM3RCxRQUFWLEVBQW9CO0FBQ3ZCLFVBQUl6QyxNQUFNLEdBekVwQnFsQixLQXlFdUIsQ0FBS3ZELG1CQUFMLENBQXlCZ0UsbUJBQXpCLEVBQThDeGYsS0FBSyxDQUFDN0QsUUFBcEQsRUFBOEQsQ0FBQyxHQUFHb2pCLFVBQUosRUFBZ0J2ZixLQUFoQixDQUE5RCxDQUFiO0FBQ0EsVUFBSXRHLE1BQU0sSUFBSUEsTUFBTSxDQUFDNk8sTUFBckIsRUFBNkIsT0FBTzdPLE1BQVA7QUFDaEM7QUFDSjs7QUFDRCxTQUFPLEVBQVA7QUFDSCxDOztnQkE5RUNxbEIsSyxvQkFnRnVCM1UsU0FBRCxJQUFlO0FBQ25DLE1BQUkxUSxNQUFNLEdBQUcsRUFBYjtBQUNBLFFBQU1zRyxLQUFLLEdBQUdnZixvQ0FBVyxDQUFDNVUsU0FBRCxDQUFYLEdBQXlCNFUsb0NBQVcsQ0FBQzVVLFNBQUQsQ0FBcEMsR0FBa0Q0QixTQUFoRTs7QUFDQSxNQUFJaE0sS0FBSixFQUFXO0FBQ1B0RyxVQUFNLENBQUNpUixPQUFQLENBQWUzSyxLQUFmOztBQUVBLFFBQUlBLEtBQUssQ0FBQ3lmLE1BQVYsRUFBa0I7QUFDZC9sQixZQUFNLEdBQUcsQ0FBQyxHQXZGcEJxbEIsS0F1RnVCLENBQUtyVSxjQUFMLENBQW9CMUssS0FBSyxDQUFDeWYsTUFBMUIsQ0FBSixFQUF1QyxHQUFHL2xCLE1BQTFDLENBQVQ7QUFDSDtBQUNKOztBQUNELFNBQU9BLE1BQVA7QUFDSCxDOztBQUdMLE1BQU1zRyxLQUFLLEdBQUcrZSxLQUFLLENBQUNsVSxPQUFwQjtBQUNBLE1BQU15SCxRQUFRLEdBQUd5TSxLQUFLLENBQUN6TSxRQUF2QjtBQUNBLE1BQU01SCxjQUFjLEdBQUdxVSxLQUFLLENBQUNyVSxjQUE3QjtBQUNBLE1BQU04USxtQkFBbUIsR0FBR3VELEtBQUssQ0FBQ3ZELG1CQUFsQztBQUNleGIsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBLE1BQU0wZixPQUFOLENBQWE7QUFLWGpsQixhQUFXLENBQUNrbEIsT0FBRCxFQUFvQjtBQUFBOztBQUFBOztBQUFBOztBQUFBLHFDQVNyQixDQUFDL0wsR0FBRCxFQUFXMVUsSUFBWCxFQUF5QjJVLFlBQXpCLEtBQStDO0FBQ3ZELGFBQU9wSSw2Q0FBQyxDQUFDN04sR0FBRixDQUFNZ1csR0FBTixFQUFXMVUsSUFBWCxFQUFpQjJVLFlBQWpCLENBQVA7QUFDRCxLQVg4Qjs7QUFBQSxrREFZUHFLLFFBQUQsSUFBd0I7QUFDN0MsYUFBT0EsUUFBUDtBQUNELEtBZDhCOztBQUFBLHVEQWdCRjdiLEtBQUQsSUFBZ0I7QUFDMUMsVUFBSXVkLE1BQU0sR0FBR25VLDZDQUFDLENBQUM3TixHQUFGLENBQU15RSxLQUFOLEVBQWEsaUJBQWIsRUFBZ0MsQ0FBQyxDQUFqQyxDQUFiOztBQUNBLFVBQUd1ZCxNQUFNLEtBQUssQ0FBQyxDQUFmLEVBQWlCLENBQ2Y7QUFDRCxPQUZELE1BR0ssSUFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDdkIsYUFBS3pMLE9BQUwsQ0FBYTBELE1BQWIsQ0FBb0IsT0FBcEI7QUFDQSxhQUFLMUQsT0FBTCxDQUFhMEQsTUFBYixDQUFvQixNQUFwQjs7QUFDQSxZQUFJL2QsTUFBTSxJQUFJQSxNQUFNLENBQUNzbEIsUUFBUCxDQUFnQjdmLFFBQWhCLEtBQTZCLFFBQTNDLEVBQW9EO0FBQ2xEO0FBQ0EsZUFBS2tILFFBQUwsQ0FBYyxzQkFBZDtBQUNELFNBSEQsTUFJSSxDQUNGO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPcEUsS0FBSyxDQUFDNmIsUUFBYjtBQUNELEtBakM4Qjs7QUFDN0IsVUFBTTJCLFVBQVUsR0FBR0YsT0FBTyxHQUFHRyxtREFBVSxDQUFDSCxPQUFELENBQWIsR0FBd0IsRUFBbEQ7QUFDQSxTQUFLeEwsT0FBTCxHQUFlQSxzRUFBTyxDQUFDMEwsVUFBRCxDQUF0QjtBQUNBLFNBQUtwQyxPQUFMLEdBQWUsSUFBSUEsOERBQUosQ0FBWW9DLFVBQVosQ0FBZjtBQUNBLFNBQUtwQyxPQUFMLENBQWFFLG9CQUFiLEdBQW9DLEtBQUtvQyxvQkFBekM7QUFDQSxTQUFLdEMsT0FBTCxDQUFhRyx5QkFBYixHQUF5QyxLQUFLb0MseUJBQTlDO0FBQ0EsU0FBS3JoQixJQUFMLEdBQVksRUFBWjtBQUNEOztBQTRCRHFCLE9BQUssQ0FBQ29LLFNBQUQsRUFBb0JuSyxLQUFwQixFQUFnQztBQUNuQyxXQUFPRCw0REFBSyxDQUFDb0ssU0FBRCxFQUFZbkssS0FBWixDQUFaO0FBQ0Q7O0FBRUR3RyxVQUFRLENBQUMyRCxTQUFELEVBQW9CbkssS0FBcEIsRUFBZ0M7QUFDdEMsUUFBSTBULFNBQVMsR0FBRzNULDREQUFLLENBQUNvSyxTQUFELEVBQVluSyxLQUFaLENBQXJCO0FBQ0E5RSxzREFBTSxDQUFDb0csSUFBUCxDQUFZb1MsU0FBUyxDQUFDbmEsSUFBdEIsRUFBNEJtYSxTQUFTLENBQUNsYSxFQUF0QztBQUNEOztBQUVELFFBQU1rUCxLQUFOLENBQVk1SSxJQUFaLEVBQXVCO0FBQ3JCLFVBQU01RyxHQUFHLEdBQUcsS0FBSzZHLEtBQUwsQ0FBWSxPQUFNLEtBQUtyQixJQUFLLFFBQTVCLEVBQXFDb0IsSUFBckMsRUFBMkN2RyxJQUF2RDtBQUNBLFdBQU8sTUFBTSxLQUFLaWtCLE9BQUwsQ0FBYTdmLEdBQWIsQ0FBaUJ6RSxHQUFqQixFQUFzQjRHLElBQXRCLENBQWI7QUFDRDs7QUFFRCxRQUFNa2dCLE1BQU4sQ0FBYWxnQixJQUFiLEVBQXVCO0FBQ3JCLFVBQU01RyxHQUFHLEdBQUcsS0FBSzZHLEtBQUwsQ0FBWSxPQUFNLEtBQUtyQixJQUFLLFFBQTVCLEVBQW9Db0IsSUFBcEMsRUFBMEN2RyxJQUF0RDtBQUNBLFdBQU8sTUFBTSxLQUFLaWtCLE9BQUwsQ0FBYWtCLElBQWIsQ0FBa0J4bEIsR0FBbEIsRUFBdUI0RyxJQUF2QixDQUFiO0FBQ0Q7O0FBRUQsUUFBTW1nQixNQUFOLENBQWFuZ0IsSUFBYixFQUF1QjtBQUNyQixVQUFNNUcsR0FBRyxHQUFHLEtBQUs2RyxLQUFMLENBQVksT0FBTSxLQUFLckIsSUFBSyxTQUE1QixFQUFzQ29CLElBQXRDLEVBQTRDdkcsSUFBeEQ7QUFDQSxXQUFPLE1BQU0sS0FBS2lrQixPQUFMLENBQWE3ZixHQUFiLENBQWlCekUsR0FBakIsRUFBc0I0RyxJQUF0QixDQUFiO0FBQ0Q7O0FBRUQsUUFBTW9nQixJQUFOLENBQVdwZ0IsSUFBWCxFQUFxQjtBQUNuQixVQUFNNUcsR0FBRyxHQUFHLEtBQUs2RyxLQUFMLENBQVksT0FBTSxLQUFLckIsSUFBSyxTQUE1QixFQUFzQ29CLElBQXRDLEVBQTRDdkcsSUFBeEQ7QUFDQSxXQUFPLE1BQU0sS0FBS2lrQixPQUFMLENBQWFtQixHQUFiLENBQWlCemxCLEdBQWpCLEVBQXNCNEcsSUFBdEIsQ0FBYjtBQUNEOztBQUVELFFBQU04SSxNQUFOLENBQWE5SSxJQUFiLEVBQXVCO0FBQ3JCLFVBQU01RyxHQUFHLEdBQUcsS0FBSzZHLEtBQUwsQ0FBWSxPQUFNLEtBQUtyQixJQUFLLFNBQTVCLEVBQXNDb0IsSUFBdEMsRUFBNEN2RyxJQUF4RDtBQUNBLFdBQU8sTUFBTSxLQUFLaWtCLE9BQUwsQ0FBYTVVLE1BQWIsQ0FBb0IxUCxHQUFwQixFQUF5QjRHLElBQXpCLENBQWI7QUFDRDs7QUF4RVU7O0FBNEVFMmYsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTs7QUFFQSxNQUFNVSxHQUFOLFNBQWtCVixvREFBbEIsQ0FBMEI7QUFDeEJqbEIsYUFBVyxDQUFDa2xCLE9BQUQsRUFBbUI7QUFDNUIsVUFBTUEsT0FBTjtBQUNBLFNBQUtoaEIsSUFBTCxHQUFZLE1BQVo7QUFDRDs7QUFKdUI7O0FBT1h5aEIsa0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBOztBQUVBLE1BQU1DLE9BQU4sU0FBc0JYLG9EQUF0QixDQUE4QjtBQUM1QmpsQixhQUFXLENBQUNrbEIsT0FBRCxFQUFtQjtBQUM1QixVQUFNQSxPQUFOO0FBQ0EsU0FBS2hoQixJQUFMLEdBQVksVUFBWjtBQUNEOztBQUoyQjs7QUFPZjBoQixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUMsSUFBTixTQUFtQlosb0RBQW5CLENBQTJCO0FBQ3pCamxCLGFBQVcsQ0FBQ2tsQixPQUFELEVBQW1CO0FBQzVCLFVBQU1BLE9BQU47QUFDQSxTQUFLaGhCLElBQUwsR0FBWSxPQUFaO0FBQ0Q7O0FBSndCOztBQU9aMmhCLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQyxJQUFOLFNBQW1CYixvREFBbkIsQ0FBMkI7QUFDekJqbEIsYUFBVyxDQUFDa2xCLE9BQUQsRUFBbUI7QUFDNUIsVUFBTUEsT0FBTjtBQUNBLFNBQUtoaEIsSUFBTCxHQUFZLE9BQVosQ0FGNEIsQ0FFUDtBQUN0Qjs7QUFDRCxRQUFNNmhCLEtBQU4sQ0FBWTtBQUFFemdCO0FBQUYsR0FBWixFQUFvRTtBQUNsRSxVQUFNNUcsR0FBRyxHQUFHLEtBQUs2RyxLQUFMLENBQVcsV0FBWCxFQUF3QnhHLElBQXBDO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLE9BQU0sS0FBSytqQixPQUFMLENBQWFrQixJQUFiLENBQWtCeGxCLEdBQWxCLEVBQXVCNEcsSUFBdkIsQ0FBTixLQUFzQyxFQUFuRCxDQUZrRSxDQUdoRTs7QUFDRixTQUFLb1UsT0FBTCxDQUFhclIsR0FBYixDQUFpQixPQUFqQixFQUEwQixLQUFLNEcsT0FBTCxDQUFhaFEsTUFBYixFQUFxQixPQUFyQixFQUE4QnNTLFNBQTlCLENBQTFCLEVBQW9FO0FBQ2xFOU0sVUFBSSxFQUFFO0FBRDRELEtBQXBFO0FBR0EsU0FBS2lWLE9BQUwsQ0FBYXJSLEdBQWIsQ0FBaUIsTUFBakIsRUFBeUIsS0FBSzRHLE9BQUwsQ0FBYWhRLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsRUFBN0IsQ0FBekIsRUFBMEQ7QUFDeER3RixVQUFJLEVBQUU7QUFEa0QsS0FBMUQ7QUFHQSxTQUFLdUgsUUFBTCxDQUFjLGdDQUFkO0FBQ0EsV0FBTy9NLE1BQVA7QUFDRDs7QUFDRCxRQUFNK21CLGNBQU4sQ0FBcUIxZ0IsSUFBckIsRUFBMkQ7QUFDekQsVUFBTTVHLEdBQUcsR0FBRyxLQUFLNkcsS0FBTCxDQUFZLE9BQU0sS0FBS3JCLElBQUssaUJBQTVCLEVBQThDb0IsSUFBOUMsRUFBb0R2RyxJQUFoRTtBQUNBLFFBQUlFLE1BQU0sR0FBRyxNQUFNLEtBQUsrakIsT0FBTCxDQUFhbUIsR0FBYixDQUFpQnpsQixHQUFqQixFQUFzQjRHLElBQXRCLENBQW5CO0FBQ0EsV0FBT3JHLE1BQU0sQ0FBQ3FHLElBQWQ7QUFDRDs7QUFDRCxRQUFNbVosa0JBQU4sQ0FBeUJuWixJQUF6QixFQUErRDtBQUM3RCxVQUFNNUcsR0FBRyxHQUFHLEtBQUs2RyxLQUFMLENBQVksT0FBTSxLQUFLckIsSUFBSyxxQkFBNUIsRUFBa0RvQixJQUFsRCxFQUF3RHZHLElBQXBFO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLE1BQU0sS0FBSytqQixPQUFMLENBQWFtQixHQUFiLENBQWlCemxCLEdBQWpCLEVBQXNCNEcsSUFBdEIsQ0FBbkI7QUFDQSxXQUFPckcsTUFBTSxDQUFDcUcsSUFBZDtBQUNEOztBQUNELFFBQU0yZ0IsTUFBTixDQUFhM2dCLElBQWIsRUFBdUI7QUFDckIsVUFBTTVHLEdBQUcsR0FBRyxLQUFLNkcsS0FBTCxDQUFZLE9BQU0sS0FBS3JCLElBQUssU0FBNUIsRUFBc0NvQixJQUF0QyxFQUE0Q3ZHLElBQXhEO0FBQ0EsV0FBTyxNQUFNLEtBQUtpa0IsT0FBTCxDQUFhN2YsR0FBYixDQUFpQnpFLEdBQWpCLEVBQXNCNEcsSUFBdEIsQ0FBYjtBQUNEOztBQS9Cd0I7O0FBa0Nad2dCLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFlQSxNQUFNMUUsT0FBTyxHQUFHLENBQ2Q7QUFDRXpSLFdBQVMsRUFBRSxnQ0FEYjtBQUVFOFEsTUFBSSxFQUFFLE1BQUMsOERBQUQsT0FGUjtBQUdFeUYsYUFBVyxFQUFFO0FBSGYsQ0FEYyxFQU1kO0FBQ0V2VyxXQUFTLEVBQUUsNEJBRGI7QUFFRThRLE1BQUksRUFBRSxNQUFDLDhEQUFELE9BRlI7QUFHRXlGLGFBQVcsRUFBRSxFQUhmLENBSUU7O0FBSkYsQ0FOYyxFQVlkO0FBQ0V2VyxXQUFTLEVBQUUsNEJBRGI7QUFFRThRLE1BQUksRUFBRSxNQUFDLHdFQUFELE9BRlI7QUFHRXlGLGFBQVcsRUFBRSxFQUhmLENBSUU7O0FBSkYsQ0FaYyxFQWtCZDtBQUNFdlcsV0FBUyxFQUFFLDJCQURiO0FBRUU4USxNQUFJLEVBQUUsTUFBQyxnRUFBRCxPQUZSO0FBR0V5RixhQUFXLEVBQUUsRUFIZixDQUlFOztBQUpGLENBbEJjLEVBd0JkO0FBQ0V2VyxXQUFTLEVBQUUsK0JBRGI7QUFFRThRLE1BQUksRUFBRSxNQUFDLDhEQUFELE9BRlI7QUFHRXlGLGFBQVcsRUFBRSxFQUhmLENBSUU7O0FBSkYsQ0F4QmMsRUE4QmQ7QUFDRXZXLFdBQVMsRUFBRSwyQkFEYjtBQUVFOFEsTUFBSSxFQUFFLE1BQUMsa0VBQUQsT0FGUjtBQUdFeUYsYUFBVyxFQUFFLEVBSGY7QUFJRW5WLE1BQUksRUFBRSxLQUpSO0FBS0VyUCxVQUFRLEVBQUUsQ0FDUjtBQUNFaU8sYUFBUyxFQUFFLHdDQURiO0FBRUU4USxRQUFJLEVBQUUsTUFBQyxrRUFBRCxPQUZSO0FBR0V5RixlQUFXLEVBQUU7QUFIZixHQURRLEVBTVI7QUFDRXZXLGFBQVMsRUFBRSx1Q0FEYjtBQUVFOFEsUUFBSSxFQUFFLE1BQUMsa0VBQUQsT0FGUjtBQUdFeUYsZUFBVyxFQUFFO0FBSGYsR0FOUTtBQUxaLENBOUJjLEVBZ0RkO0FBQ0V2VyxXQUFTLEVBQUUscUNBRGI7QUFFRThRLE1BQUksRUFBRSxNQUFDLGtFQUFELE9BRlI7QUFHRXlGLGFBQVcsRUFBRSxFQUhmLENBSUU7O0FBSkYsQ0FoRGMsRUFzRGQ7QUFDRXZXLFdBQVMsRUFBRSw0QkFEYjtBQUVFOFEsTUFBSSxFQUFFLE1BQUMsOERBQUQsT0FGUjtBQUdFeUYsYUFBVyxFQUFFLEVBSGY7QUFJRW5WLE1BQUksRUFBRSxLQUpSO0FBS0VyUCxVQUFRLEVBQUUsQ0FDUjtBQUNFaU8sYUFBUyxFQUFFLGlDQURiO0FBRUU4USxRQUFJLEVBQUUsTUFBQyxzRUFBRCxPQUZSO0FBR0V5RixlQUFXLEVBQUU7QUFIZixHQURRLEVBTVI7QUFDRXZXLGFBQVMsRUFBRSxzQ0FEYjtBQUVFOFEsUUFBSSxFQUFFLE1BQUMsa0VBQUQsT0FGUjtBQUdFeUYsZUFBVyxFQUFFO0FBSGYsR0FOUTtBQUxaLENBdERjLEVBd0VkO0FBQ0V2VyxXQUFTLEVBQUUsMEJBRGI7QUFFRThRLE1BQUksRUFBRSxNQUFDLGtFQUFELE9BRlI7QUFHRXlGLGFBQVcsRUFBRSxFQUhmO0FBSUVuVixNQUFJLEVBQUUsS0FKUjtBQUtFclAsVUFBUSxFQUFFLENBQ1I7QUFDRWlPLGFBQVMsRUFBRSx3Q0FEYjtBQUVFOFEsUUFBSSxFQUFFLE1BQUMsbUVBQUQsT0FGUjtBQUdFeUYsZUFBVyxFQUFFO0FBSGYsR0FEUTtBQUxaLENBeEVjLENBQWhCO0FBdUZlOUUsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNK0UsU0FBUyxHQUFHO0FBQUVDLEdBQUMsRUFBRSxDQUFMO0FBQVFDLEdBQUMsRUFBRSxDQUFYO0FBQWNDLEdBQUMsRUFBRSxDQUFqQjtBQUFvQkMsR0FBQyxFQUFFO0FBQXZCLENBQWxCOztBQUNBLE1BQU1DLFNBQVMsR0FBSS9ZLElBQUQsSUFBZTtBQUM3QixTQUFPQSxJQUFJLENBQUNnWixXQUFMLEdBQW1CQyxLQUFuQixDQUF5QixFQUF6QixFQUE2QkMsTUFBN0IsQ0FBb0MsQ0FBQzdhLEtBQUQsRUFBZ0I4YSxJQUFoQixLQUFnRDlhLEtBQUssR0FBR3FhLFNBQVMsQ0FBQ1MsSUFBRCxDQUFyRyxFQUE2RyxDQUE3RyxDQUFQO0FBRUgsQ0FIRDs7QUFJQSxNQUFNQyxTQUFTLEdBQUlDLEdBQUQsSUFBaUI7QUFDL0IsTUFBSTduQixNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUkybkIsSUFBSjs7QUFDQSxPQUFLQSxJQUFMLElBQWFULFNBQWIsRUFBd0I7QUFDcEIsUUFBSSxDQUFDVyxHQUFHLEdBQUdYLFNBQVMsQ0FBQ1MsSUFBRCxDQUFoQixLQUEyQlQsU0FBUyxDQUFDUyxJQUFELENBQXhDLEVBQWdEM25CLE1BQU0sSUFBSTJuQixJQUFWO0FBQ25EOztBQUNELFNBQU8zbkIsTUFBUDtBQUNILENBUEQ7O0FBU0EsTUFBTThuQixhQUFhLEdBQUcsQ0FBQ0MsaUJBQUQsRUFBNEJDLGNBQTVCLEtBQXVEO0FBQ3pFLFNBQU8sQ0FBQ0EsY0FBYyxHQUFHRCxpQkFBbEIsTUFBeUNBLGlCQUFoRDtBQUNELENBRkg7O0FBSUEsTUFBTWphLGVBQWUsR0FBRyxDQUFDcUMsV0FBRCxFQUFtQjBLLGVBQW5CLEVBQXlDb04sU0FBa0IsR0FBRyxLQUE5RCxLQUF3RTtBQUM1RixNQUFHLENBQUM5WCxXQUFKLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixNQUFJK1gsZUFBZSxHQUFHLEVBQXRCOztBQUNBLE9BQUssSUFBSUMsVUFBVCxJQUF1QmhZLFdBQXZCLEVBQW9DO0FBQ2hDLFVBQU00WCxpQkFBaUIsR0FBR1IsU0FBUyxDQUFDcFgsV0FBVyxDQUFDZ1ksVUFBRCxDQUFaLENBQW5DO0FBQ0EsVUFBTUMsY0FBYyxHQUFHdk4sZUFBZSxDQUFDLE1BQUQsQ0FBZixJQUEyQixDQUFsRDtBQUNBLFFBQUltTixjQUFjLEdBQUduTixlQUFlLENBQUNzTixVQUFELENBQWYsSUFBK0IsQ0FBcEQ7QUFDQUgsa0JBQWMsR0FBR0EsY0FBYyxHQUFHSSxjQUFsQztBQUNBLFFBQUlOLGFBQWEsQ0FBQ0MsaUJBQUQsRUFBb0JDLGNBQXBCLENBQWpCLEVBQXNELE9BQU8sSUFBUDtBQUN0REUsbUJBQWUsQ0FBQ3JnQixJQUFoQixDQUFxQjtBQUNqQnNnQixnQkFBVSxFQUFFQSxVQURLO0FBRWpCSix1QkFBaUIsRUFBRUgsU0FBUyxDQUFDRyxpQkFBRCxDQUZYO0FBR2pCQyxvQkFBYyxFQUFFSixTQUFTLENBQUNJLGNBQUQ7QUFIUixLQUFyQjtBQUtIOztBQUNELE1BQUksQ0FBQ0MsU0FBTCxFQUFnQixPQUFPLEtBQVA7QUFDaEIsU0FBTztBQUNIdGYsU0FBSyxFQUFFLElBREo7QUFFSHdILGVBQVcsRUFBRStYO0FBRlYsR0FBUDtBQUtILENBckJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxccm9vbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBMYXlvdXQgZnJvbSAndGhlbWVzL2xheW91dHMvQWRtaW4nXHJcbmltcG9ydCB7IEdyaWRUYWJsZSwgR3JpZFRhYmxlSGVscGVyLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSb29tU2VydmljZSBmcm9tICd0aGVtZXMvc2VydmljZXMvYXBpL1Jvb21TZXJ2aWNlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tIFwidGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rXCI7XHJcbmltcG9ydCB7UGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyByb29tcywgdG90YWwgfTogeyByb29tczogUm9vbVtdLCB0b3RhbDogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCBbaGlkZGVuRGVsZXRlQnRuLCBzZXRIaWRkZW5EZWxldGVCdG5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRJZHMsIHNldFNlbGVjdGVkSWRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IHJvb21TZXJ2aWNlID0gbmV3IFJvb21TZXJ2aWNlKClcclxuICBjb25zdCBjb25maXJtUmVmID0gUmVhY3QuY3JlYXRlUmVmPENvbmZpcm1EaWFsb2c+KClcclxuICBjb25zdCB0YWJsZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxHcmlkVGFibGU+KClcclxuICBjb25zdCB7IGNoZWNrUGVybWlzc2lvbiB9ID0gdXNlUGVybWlzc2lvbkhvb2soKTtcclxuICBjb25zdCBjcmVhdGVQZXIgPSBjaGVja1Blcm1pc3Npb24oe1xyXG4gICAgXCJhZG1pbi5yb29tc1wiOiBcIkNcIlxyXG4gIH0pXHJcbiAgY29uc3QgZGVsZXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwiYWRtaW4ucm9vbXNcIjogXCJEXCJcclxuICB9KVxyXG4gIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwiY29kZVwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnY29kZScsXHJcbiAgICAgIGtleTogJ2NvZGUnLFxyXG4gICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgIHNvcnRlcjogdHJ1ZSxcclxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgcmVuZGVyOiAodGV4dDogc3RyaW5nLCByZWNvcmQ6IGFueSkgPT5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ucm9vbXMuZWRpdCcsIHsgaWQ6IHJlY29yZC5pZCB9KX0+e3JlY29yZC5jb2RlfTwvYT5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KCdyb29tcy5iZWROdW1iZXInKSxcclxuICAgICAgZGF0YUluZGV4OiAnYmVkTnVtYmVyJyxcclxuICAgICAga2V5OiAnYmVkTnVtYmVyJyxcclxuICAgICAgd2lkdGg6ICcyMCUnLFxyXG4gICAgICBzb3J0ZXI6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiB0KFwibm90ZVwiKSxcclxuICAgICAgZGF0YUluZGV4OiAnbm90ZScsXHJcbiAgICAgIGtleTogJ25vdGUnLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0aW9uID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRIaWRkZW5EZWxldGVCdG4oZmFsc2UpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZElkcyhkYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiB7XHJcbiAgICBsZXQgW2Vycm9yLCByb29tc106IGFueVtdID0gYXdhaXQgdG8ocm9vbVNlcnZpY2UuaW5kZXgodmFsdWVzKSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7IGNvZGUsIG1lc3NhZ2UgfSA9IGVycm9yXHJcbiAgICAgIG5vdGlmeSh0KGBlcnJvcnM6JHtjb2RlfWApLCB0KG1lc3NhZ2UpLCAnZXJyb3InKVxyXG4gICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICAgIHJldHVybiByb29tc1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHJvb21TZXJ2aWNlLmRlbGV0ZSh7IGlkczogc2VsZWN0ZWRJZHMgfSkpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBub3RpZnkodChgZXJyb3JzOiR7ZXJyb3IuY29kZX1gKSwgdChgJHtlcnJvci5tZXNzYWdlfWApLCAnZXJyb3InKVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KHQoXCJtZXNzYWdlLnJlY29yZERlbGV0ZWRcIikpO1xyXG4gICAgaWYgKHRhYmxlUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgdGFibGVSZWYuY3VycmVudC5yZWxvYWQoKVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRJZHMoW10pXHJcbiAgICBzZXRIaWRkZW5EZWxldGVCdG4odHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckRlbGV0ZURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtvbkRlbGV0ZX1cclxuICAgICAgICB0aXRsZT17dCgnZGVsZXRlSXRlbScpfVxyXG4gICAgICAgIGNvbnRlbnQ9e3QoJ21lc3NhZ2UuZGVsZXRlQ29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPEJ1dHRvbiBoaWRkZW49eyFjcmVhdGVQZXJ9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4ucm9vbXMuY3JlYXRlXCIpfSB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT0nYnRuLXRvcCc+XHJcbiAgICAgICAgPFBsdXNDaXJjbGVPdXRsaW5lZCAvPlxyXG4gICAgICAgIHt0KCdjcmVhdGUnKX1cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8QnV0dG9uIGRhbmdlciBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0gY2xhc3NOYW1lPSdidG4tdG9wJyBoaWRkZW49e2hpZGRlbkRlbGV0ZUJ0biB8fCAhZGVsZXRlUGVyfT5cclxuICAgICAgICA8RGVsZXRlT3V0bGluZWQgLz5cclxuICAgICAgICB7dCgnZGVsZXRlJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgPEdyaWRUYWJsZVxyXG4gICAgICAgIHJlZj17dGFibGVSZWZ9XHJcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICBkYXRhPXtyb29tc31cclxuICAgICAgICByb3dTZWxlY3Rpb249e3tzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkSWRzLCBvbkNoYW5nZTogKGRhdGE6IGFueVtdKSA9PiBvbkNoYW5nZVNlbGVjdGlvbihkYXRhKSB9fVxyXG4gICAgICAgIGZldGNoRGF0YT17ZmV0Y2hEYXRhfVxyXG4gICAgICAgIHRvdGFsPXt0b3RhbH1cclxuICAgICAgLz5cclxuICAgICAge3JlbmRlckRlbGV0ZURpYWxvZygpfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IGFueSkgPT4ge1xyXG4gIGxldCByb29tU2VydmljZSA9IG5ldyBSb29tU2VydmljZShjdHgpXHJcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZmlsdGVyczogW10sXHJcbiAgICBzb3J0aW5nOiBbXVxyXG4gIH1cclxuICBsZXQgcXVlcnkgPSBjdHgucXVlcnlcclxuICBsZXQgZmlsdGVycyA9IEdyaWRUYWJsZUhlbHBlci5nZXRPcHRpb25zKHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgbGV0IFtlcnJvciwgcm9vbXNdOiBhbnlbXSA9IGF3YWl0IHRvKHJvb21TZXJ2aWNlLmluZGV4KGZpbHRlcnMpKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnLCAnZXJyb3JzJ10sXHJcbiAgICBlcnJvcjogZXJyb3IsXHJcbiAgICByb29tczogdXNlQmFzZUhvb2suZ2V0RGF0YShyb29tcywgXCJkYXRhXCIsIFtdKSxcclxuICAgIHRvdGFsOiB1c2VCYXNlSG9vay5nZXREYXRhKHJvb21zLCBcInRvdGFsXCIsIDApLFxyXG4gICAgZGVmYXVsdFF1ZXJ5OiB7XHJcbiAgICAgIGZpbHRlcnM6IEdyaWRUYWJsZUhlbHBlci5tYWtlUXVlcnkoZmlsdGVycylcclxuICAgIH1cclxuICB9XHJcbn1cclxuSW5kZXgucGVybWlzc2lvbnMgPSB7XHJcbiAgXCJhZG1pbi5yb29tc1wiOiBcIlJcIlxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleCIsImltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiXHJcbmltcG9ydCB7IGdldEJyZWFkY3J1bWJzLCByb3V0ZSBhcyBtYWtlVXJsIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCJcclxuaW50ZXJmYWNlIFJvdXRlIHtcclxuICAgIG5hbWU6IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgYnJlYWRDcnVtYkNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gICAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlc1xyXG4gICAgICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgICAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGJyZWFkQ3VtYnMgPSBbXVxyXG4gICAgY29uc3Qgcm91dGVOYW1lID0gZ2V0Um91dGVOYW1lKClcclxuICAgIGxldCByb3V0ZXM6IFJvdXRlW10gPSBnZXRCcmVhZGNydW1icyhyb3V0ZU5hbWUpXHJcbiAgICBpZiAocm91dGVzWzBdICYmIHJvdXRlc1swXS5uYW1lICE9IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiKSB7XHJcbiAgICAgICAgcm91dGVzLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICBuYW1lOiAnZnJvbnRlbmQuYWRtaW4uaG9tZScsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZvciAobGV0IHJvdXRlIG9mIHJvdXRlcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5rUHJvcHMgPSBtYWtlVXJsKHJvdXRlLm5hbWUpXHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayB7Li4ubGlua1Byb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT57IHJvdXRlLm5hbWUgPT0gXCJmcm9udGVuZC5hZG1pbi5ob21lXCIgPyA8SG9tZUZpbGxlZCAvPiA6IHQocm91dGUubmFtZSkgfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGJyZWFkQ3VtYnMucHVzaCg8QnJlYWRjcnVtYi5JdGVtIGtleT17cm91dGUubmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7dChyb3V0ZS5uYW1lKX1cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iLkl0ZW0+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJyZWFkY3J1bWI+e2JyZWFkQ3VtYnN9PC9CcmVhZGNydW1iPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWRDcnVtYkNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IHsgY29uZmlybSB9ID0gTW9kYWw7XHJcblxyXG5jbGFzcyBDb25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2hvdyhkYXRhID0gbnVsbCkge1xyXG4gICAgbGV0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcclxuICAgIHRpdGxlID0gdGl0bGUgfHwgXCJUaXRsZVwiXHJcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIkNvbnRlbnRcIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xyXG4gICAgY29uZmlybSh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgY29udGVudDogY29udGVudCxcclxuICAgICAgb25PazogdGhpcy5vblN1Ym1pdCxcclxuICAgICAgb25DYW5jZWw6IHRoaXMub25DYW5jZWwsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvbkNhbmNlbCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKHR5cGVvZiBvbkNhbmNlbCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIG9uQ2FuY2VsKHRoaXMuc3RhdGUuZGF0YSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICh0eXBlb2Ygb25TdWJtaXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBhd2FpdCBvblN1Ym1pdCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EaWFsb2c7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gIGlmKGFjdGlvbi50eXBlID09PSBcInNldFN0b3JlXCIpe1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfVxyXG4gICAgXy5zZXQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnBhdGgsIGFjdGlvbi5wYXlsb2FkLnZhbHVlKVxyXG4gICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZVxyXG59XHJcblxyXG4vKiBjb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzdG9yZTogc3RvcmVSZWR1Y2VyXHJcbn0pICovXHJcblxyXG5jb25zdCBzZXRTdG9yZSA9IChwYXRoLCB2YWx1ZSkgPT4gKHtcclxuICB0eXBlOiAnc2V0U3RvcmUnLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHBhdGgsXHJcbiAgICB2YWx1ZVxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoaW5pdFN0YXRlID0ge30sIG9wdGlvbnMpID0+IHtcclxuICBsZXQgZGV2VG9vbEV4dGVuc2lvbnMgPSAoIW9wdGlvbnMuaXNTZXJ2ZXIgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18pID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSA6IHVuZGVmaW5lZFxyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0U3RhdGUsIGRldlRvb2xFeHRlbnNpb25zKVxyXG59XHJcbmV4cG9ydCB7XHJcbiAgbWFrZVN0b3JlLFxyXG4gIHNldFN0b3JlXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5jb25zdCB7IFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xyXG5cclxuY2xhc3MgRmlsdGVyRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmdldERhdGVzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVzID0gKGRhdGVTdHJpbmdzKSA9PiB7XHJcbiAgICAgICAgaWYoIWRhdGVTdHJpbmdzKSBkYXRlU3RyaW5ncyA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICAgICAgaWYgKCFkYXRlU3RyaW5ncykgcmV0dXJuIHt9XHJcbiAgICAgICAgaWYgKCFkYXRlU3RyaW5nc1swXSkgZGF0ZVN0cmluZ3NbMF0gPSB1bmRlZmluZWRcclxuICAgICAgICBpZighZGF0ZVN0cmluZ3NbMV0pIGRhdGVTdHJpbmdzWzFdID0gdW5kZWZpbmVkXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGF0ZVN0cmluZ3M6IGRhdGVTdHJpbmdzLFxyXG4gICAgICAgICAgICBkYXRlczogW1xyXG4gICAgICAgICAgICAgICAgZGF0ZVN0cmluZ3NbMF0gPyBtb21lbnQoZGF0ZVN0cmluZ3NbMF0pIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZVN0cmluZ3NbMV0gPyBtb21lbnQoZGF0ZVN0cmluZ3NbMV0pIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9IChkYXRlcywgZGF0ZVN0cmluZ3MpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcyhkYXRlU3RyaW5ncylcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGVTdHJpbmdzOicnfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzICYmIHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMF0gJiYgdGhpcy5zdGF0ZS5kYXRlU3RyaW5nc1sxXSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8ICdiZXR3ZWVuJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMF0pLnN0YXJ0T2YoXCJkYXlzXCIpLmFkZCgxNCwnaCcpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9tZW50KHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMV0pLmVuZE9mKFwiZGF5c1wiKS5hZGQoMTQsJ2gnKS50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0VtcHR5PXt0cnVlLCB0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTZweFwiLCBtYXJnaW5Cb3R0b206IDgsIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEYXRlUGlja2VyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZWxlY3QsIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCBJbnB1dEdyb3VwID0gSW5wdXQuR3JvdXA7XHJcblxyXG5jbGFzcyBGaWx0ZXJEcm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZXM6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkgIT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVyZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCBbXSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHZhbHVlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IHZhbHVlcyB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZXMgJiYgdGhpcy5zdGF0ZS52YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzID0gW3tcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnaW4nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVzXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIC8qIGZpbHRlcnMgPSB0aGlzLnN0YXRlLnZhbHVlcy5tYXAodmFsdWUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnPScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfSkpICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJPcHRpb25zKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLm9wdGlvbnMpIHJldHVyblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiA8T3B0aW9uIGtleT17b3B0aW9uLnZhbHVlfSB2YWx1ZT17b3B0aW9uLnZhbHVlfSBsYWJlbD17b3B0aW9uLmxhYmVsfSA+e29wdGlvbi5sYWJlbH08L09wdGlvbj4pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIG9wdGlvbnMsIHNlYXJjaEJ0blRleHQsIGNsZWFyQnRuVGV4dCwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25GaWx0ZXJQcm9wPVwibGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcsIG1hcmdpbkJvdHRvbTogOCwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcm9wZG93biIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCwgSW5wdXROdW1iZXIsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcclxuXHJcbmNsYXNzIEZpbHRlcklucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHZhbHVlOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpLFxyXG4gICAgICAgIG9wZXJhdG9yOiB0aGlzLnByb3BzLm9wZXJhdG9yIHx8IFwiY29udGFpbnNcIlxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSAhPSBfLmdldChwcmV2UHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aXNpYmxlU2VhcmNoICE9IHRoaXMucHJvcHMuY29sdW1uLnZpc2libGVTZWFyY2gpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlU2VhcmNoID0gdGhpcy5wcm9wcy5jb2x1bW4udmlzaWJsZVNlYXJjaFxyXG4gICAgICAgICAgICB0aGlzLnJlZklucHV0LmlucHV0LnNlbGVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTonJ30sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGNvbHVtbi5maWVsZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLnN0YXRlLm9wZXJhdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlybShmaWx0ZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wZXJhdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgPSB7fSwgaGlkZU9wZXJhdG9yLCBvcGVyYXRvciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChoaWRlT3BlcmF0b3IpIHJldHVyblxyXG4gICAgICAgIGxldCBvcGVyYXRvcnMgPSBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiY29udGFpbnNcIiwgbGFiZWw6IG1lc3NhZ2VzWydjb250YWlucyddIHx8IFwiQ29udGFpbnNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcIj1cIiwgbGFiZWw6IG1lc3NhZ2VzWydlcXVhbCddIHx8IFwiRXF1YWxzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzdGFydFdpdGhzXCIsIGxhYmVsOiBtZXNzYWdlc1snc3RhcnRXaXRocyddIHx8IFwiU3RhcnRXaXRoc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZW5kV2l0aHNcIiwgbGFiZWw6IG1lc3NhZ2VzWydlbmRXaXRocyddIHx8IFwiRW5kV2l0aHNcIiB9LFxyXG4gICAgICAgIF1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgb3BlcmF0b3JzID0gW1xyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI9XCIsIGxhYmVsOiAnPScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPlwiLCBsYWJlbDogJz4nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIjxcIiwgbGFiZWw6ICc8JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI+PVwiLCBsYWJlbDogJz49JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI8PVwiLCBsYWJlbDogJzw9JyB9XHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcGVyYXRvciA9IG9wZXJhdG9yIHx8IG9wZXJhdG9yc1swXS52YWx1ZVxyXG5cclxuICAgICAgICByZXR1cm4gPFNlbGVjdCBkZWZhdWx0VmFsdWU9e2RlZmF1bHRPcGVyYXRvcn0gc3R5bGU9e3sgd2lkdGg6IDkwIH19IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlcmF0b3I6IHZhbHVlIH0pfT5cclxuICAgICAgICAgICAge29wZXJhdG9ycy5tYXAob3BlcmF0b3IgPT4gPE9wdGlvbiB2YWx1ZT17b3BlcmF0b3IudmFsdWV9IGtleT17b3BlcmF0b3IudmFsdWV9PntvcGVyYXRvci5sYWJlbH08L09wdGlvbj4pfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgaGlkZU9wZXJhdG9yLCB0eXBlLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IENvbXBvbmVudCA9IElucHV0XHJcbiAgICAgICAgaWYodHlwZSA9PSBcIm51bWJlclwiKSBDb21wb25lbnQgPSBJbnB1dE51bWJlclxyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWRkb25CZWZvcmU9e3RoaXMucmVuZGVyT3BlcmF0b3IoKX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjUwcHhcIiwgbWFyZ2luQm90dG9tOiA4LCBkaXNwbGF5OiAnYmxvY2snIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJJbnB1dCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmFkaW8sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IHsgR3JvdXAgfSA9IFJhZGlvO1xyXG5cclxuY2xhc3MgRmlsdGVyQ2hlY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hlY2tlZCA9IChjaGVja2VkKSA9PiB7XHJcbiAgICAgICAgaWYoY2hlY2tlZCA9PSB1bmRlZmluZWQpIGNoZWNrZWQgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXRDaGVja2VkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDp1bmRlZmluZWR9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2hlY2tlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnPScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jaGVja2VkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpcm0sIGNvbHVtbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDggfX0+XHJcbiAgICAgICAgICAgIDxHcm91cFxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2hlY2tlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29sdW1uLm9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBtYXJnaW5Cb3R0b206IDgsIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbGVhcn0gZGFuZ2VyID5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDaGVjayIsImltcG9ydCB7IFNlYXJjaE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGFkZFF1ZXJ5IH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIjtcclxuaW1wb3J0IHsgQmFzZTY0IH0gZnJvbSAnanMtYmFzZTY0JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgRmlsdGVySW5wdXQgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0lucHV0J1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRGF0ZVBpY2tlcidcclxuaW1wb3J0IFJhZGlvIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9SYWRpb0J1dHRvbidcclxuXHJcbmNsYXNzIEdyaWRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgYm9yZGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNpemU6ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBoYXNEYXRhOiB0cnVlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbG9hZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge31cclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5wcm9wcy50b3RhbCB8fCAxMDBcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGFcclxuICAgICAgICB0aGlzLmhhbmRsZVRhYmxlQ2hhbmdlID0gdGhpcy5oYW5kbGVUYWJsZUNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLaOG7n2kgdOG6oW8gY8OhYyBvcHRpb25zIHThu6sgcXVlcnkgdHLDqm4gdXJsXHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnByb3BzLnJvdXRlci5xdWVyeVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gR3JpZFRhYmxlLmdldERhdGFGcm9tUXVlcnkocXVlcnksIHRoaXMucHJvcHMpXHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogZGVmYXVsdE9wdGlvbnMucGFnZVNpemUgfHwgNTAsXHJcbiAgICAgICAgICAgIHBhZ2U6IGRlZmF1bHRPcHRpb25zLnBhZ2UgfHwgMCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zO1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25Ub0NvbHVtbnMoZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBs4bqhaSBk4buvIGxp4buHdSB04burIHF1ZXJ5IMSR4buVaSBzYW5nIMSRw7puZyBmb3JtYXQgY+G7p2EgY29sdW1uIHRyb25nIGFudGRcclxuICAgICAqL1xyXG4gICAgZGVmYXVsdE9wdGlvblRvQ29sdW1ucyA9IChkZWZhdWx0T3B0aW9ucykgPT4ge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgLy9zZXQgZmllbGRcclxuICAgICAgICAgICAgaWYoIWNvbHVtbi5maWVsZCkgY29sdW1uLmZpZWxkID0gY29sdW1uLmtleVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNvcnQgPSBkZWZhdWx0T3B0aW9ucy5zb3J0aW5nLmZpbmQoaXRlbSA9PiBpdGVtLmZpZWxkID09PSBjb2x1bW4uZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAoc29ydCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHsgZGlyZWN0aW9uIH0gPSBzb3J0O1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLnNvcnRPcmRlciA9IGRpcmVjdGlvbiA9PT0gXCJhc2NcIiA/ICdhc2NlbmQnIDogJ2Rlc2NlbmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzID0gZGVmYXVsdE9wdGlvbnMuZmlsdGVycy5maWx0ZXIoaXRlbSA9PiBpdGVtLmZpZWxkID09PSBjb2x1bW4uZmllbGQpO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXJlZFZhbHVlID0gWy4uLmZpbHRlcnNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJlZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBkZWxldGUgY29sdW1uLmZpbHRlcmFibGU7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2lucHV0JykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJhYmxlO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdkYXRlJykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnY2hlY2snKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVsb2FkOiAhdGhpcy5zdGF0ZS5yZWxvYWR9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIC8vdXBkYXRlIGRhdGEgdHJvbmcgdHLGsOG7nW5nIGjhu6NwIMSR4buVaSB04burIHByb3BzIGLDqm4gbmdvw6BpXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5kYXRhKSAhPT0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5kYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLnJvdXRlci5xdWVyeSkgIT0gSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLnJvdXRlci5xdWVyeSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSkgLy9jaOG7iSBj4bqnbiByZW5kZXIgbOG6oWkgdmlld1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVF1ZXJ5KG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCB7IGZpbHRlcnMgPSBbXSwgc29ydGluZyA9IFtdLCBwYWdlU2l6ZSwgcGFnZSB9ID0gb3B0aW9uc1xyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHtcclxuICAgICAgICAgICAgZjogW10sXHJcbiAgICAgICAgICAgIHM6IHt9LFxyXG4gICAgICAgICAgICBwczogcGFnZVNpemUsXHJcbiAgICAgICAgICAgIHA6IHBhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T2JqLmYucHVzaChbZmlsdGVyLmZpZWxkLCBmaWx0ZXIub3BlcmF0b3IgfHwgJ2NvbnRhaW5zJywgZmlsdGVyLnZhbHVlXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgc29ydCBvZiBzb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T2JqLnNbc29ydC5maWVsZF0gPSBzb3J0LmRpcmVjdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQmFzZTY0LmVuY29kZShKU09OLnN0cmluZ2lmeShxdWVyeU9iaikpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBLaGFpIGLDoW8gY8OhYyBmdW5jdGlvbiBjaG8gZHJvcGRvd24gc2VhcmNoIGJveFxyXG4gICAgICovXHJcbiAgICBnZXRDb2x1bW5TZWFyY2hQcm9wcyA9IChjb2x1bW4sdHlwZSkgPT4ge1xyXG4gICAgICAgIGxldCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRyb3Bkb3duOiAoeyBjb25maXJtLCBzZXRTZWxlY3RlZEtleXMgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmZpcm1GbmMgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRDb2x1bW4gPSB0aGlzLmNvbHVtbnMuZmluZChjID0+IGMuZGF0YUluZGV4ID09PSBjb2x1bW4uZGF0YUluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkS2V5cyh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4ucmVuZGVyRmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5yZW5kZXJGaWx0ZXIoeyBjb2x1bW4sIGNvbmZpcm06IGNvbmZpcm1GbmMsIHJlZiB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8RmlsdGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdkYXRlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlID09ICdjaGVjaycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm09e2NvbmZpcm1GbmN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWx0ZXJJY29uOiBmaWx0ZXJlZCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IGZpbHRlcmVkID8gXCIjMTg5MGZmXCIgOiB1bmRlZmluZWQgfX0gLz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgb25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2U6IHZpc2libGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2aXNpYmxlICYmIGNvbHVtbi52aXNpYmxlU2VhcmNoICE9IHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4udmlzaWJsZVNlYXJjaCA9IHZpc2libGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQub25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4udmlzaWJsZVNlYXJjaCA9IHZpc2libGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgeyBwYWdlU2l6ZSwgcGFnZSB9ID0gdGhpcy5wYWdpbmF0aW9uXHJcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVUYWJsZUNoYW5nZSh7IHBhZ2VTaXplLCBjdXJyZW50OiBwYWdlIH0sIHt9LCB7fSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbG9hZCBUYWJsZVxyXG4gICAgICovXHJcbiAgICBhc3luYyByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuZmV0Y2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuYnVpbGRGZXRjaERhdGEoKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zID0gR3JpZFRhYmxlLm1ha2VRdWVyeShwYXJhbXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcywgcXVlcnlPcHRpb25zKVxyXG4gICAgICAgICAgICBhZGRRdWVyeSh7IGZpbHRlcnM6IHF1ZXJ5T3B0aW9ucyB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvcHMuZmV0Y2hEYXRhKHBhcmFtcykgfHwge31cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC50b3RhbCAhPSB1bmRlZmluZWQpIHRoaXMudG90YWwgPSByZXN1bHQudG90YWxcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gXy5nZXQocmVzdWx0LCAnZGF0YScsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZmlsdGVyIHThu6sgdGFibGUgdsOgbyBiaeG6v24gdGhpcy5jb2x1bW5zIMSR4buDIGNvbnRyb2xsZWRcclxuICAgICAqL1xyXG4gICAgc2V0RmlsdGVyc1RvQ29sdW1ucyA9IChmaWx0ZXJzID0ge30pID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBmaWx0ZXJzW2NvbHVtbi5maWVsZF07XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXJlZFZhbHVlID0gZmlsdGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRTb3J0ZXJUb0NvbHVtbnMgPSAoc29ydGVyID0ge30pID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4ua2V5ID09IHNvcnRlci5jb2x1bW5LZXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5zb3J0T3JkZXIgPSBzb3J0ZXIub3JkZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY29sdW1uLnNvcnRPcmRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRQYWdpbmF0aW9uID0gKHBhZ2luYXRpb24pID0+IHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiBwYWdpbmF0aW9uLmN1cnJlbnQgLSAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVUYWJsZUNoYW5nZSA9IGFzeW5jIChwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIpID0+IHtcclxuICAgICAgICB0aGlzLnNldEZpbHRlcnNUb0NvbHVtbnMoZmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5zZXRTb3J0ZXJUb0NvbHVtbnMoc29ydGVyKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb24ocGFnaW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGF0YUZyb21RdWVyeShxdWVyeSA9IHt9LCBkZWZhdWx0T3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0gcXVlcnkuZmlsdGVycyB8fCB7fVxyXG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnkuZmlsdGVycyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlPYmogPSBKU09OLnBhcnNlKEJhc2U2NC5kZWNvZGUocXVlcnkuZmlsdGVycykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmlsdGVycyBwYXJhbXMgaW52YWxpZCBmb3JtYXQuYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXF1ZXJ5T2JqKSByZXR1cm4ge31cclxuICAgICAgICBsZXQgZmlsdGVycyA9IHF1ZXJ5T2JqLmYgfHwgW11cclxuICAgICAgICBsZXQgc29ydGluZyA9IHF1ZXJ5T2JqLnMgfHwge31cclxuICAgICAgICBsZXQgcXVlcnlPdXQgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IGRlZmF1bHRPcHRpb25zLmZpbHRlcnMgfHwgW10sXHJcbiAgICAgICAgICAgIHNvcnRpbmc6IGRlZmF1bHRPcHRpb25zLnNvcnRpbmcgfHwgW10sXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBxdWVyeU9iai5wcyB8fCBkZWZhdWx0T3B0aW9ucy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogcXVlcnlPYmoucCB8fCBkZWZhdWx0T3B0aW9ucy5wYWdlXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcclxuICAgICAgICAgICAgcXVlcnlPdXQuZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWx0ZXJbMF0sXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogZmlsdGVyWzFdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpbHRlclsyXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBzb3J0aW5nKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T3V0LnNvcnRpbmcucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHNvcnRpbmdbZmllbGRdXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVlcnlPdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE9wdGlvbnMocXVlcnksIGRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHF1ZXJ5ICYmIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5nZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucylcclxuICAgICAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIGRhdGEgdOG7qyB0aGlzLmNvbHVtbnMgxJHhu4Mga2jhu5twIHbhu5tpIGZvcm1hdCB0csOqbiBzZXJ2ZXJcclxuICAgICAqL1xyXG4gICAgYnVpbGRGZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgZmlsdGVyczogW10sXHJcbiAgICAgICAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb24ucGFnZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcmVkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5maWx0ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcy5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5maWx0ZXJlZFZhbHVlXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5zb3J0T3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zb3J0aW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjb2x1bW4uc29ydE9yZGVyID09IFwiYXNjZW5kXCIgPyBcImFzY1wiIDogXCJkZXNjXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gcGFyYW1zXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFBhZ2luYXRpb24gPSAocGFnaW5hdGlvbiA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBwYWdlU2l6ZSwgcGFnZSB9ID0gdGhpcy5wYWdpbmF0aW9uO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnBhZ2luYXRpb24sXHJcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSB8fCA1MCxcclxuICAgICAgICAgICAgY3VycmVudDogcGFnZSArIDEsXHJcbiAgICAgICAgICAgIHNob3dTaXplQ2hhbmdlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFnZVNpemVPcHRpb25zOiBbJzInLCAnMTAnLCAnNTAnLCAnMTAwJywgJzIwMCcsICc1MDAnXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBoYXNEYXRhID0gdHJ1ZSwgZGF0YSA9IFtdLCBlbGxpcHNpcywgZmV0Y2hEYXRhLCBjb2x1bW5zLCBwYWdpbmF0aW9uLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5pbml0aWFsUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFibGVMYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDkwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9GaXJzdFJvd09uQ2hhbmdlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17aGFzRGF0YSA/IHRoaXMuZGF0YS5tYXAocm93ID0+ICh7IC4uLnJvdywga2V5OiByb3cuaWQgfSkpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUYWJsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17dGhpcy5nZXRQYWdpbmF0aW9uKHBhZ2luYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFRhYmxlIiwiaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXHJcbmltcG9ydCBSZWFjdCwgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBHcmlkVGFibGVXaXRoUm91dGVyID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IGFueSwgcmVmOiBhbnkpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdHJldHVybiA8VGFibGUgcmVmPXtyZWZ9IHJvdXRlcj17cm91dGVyfSB7Li4ucHJvcHN9IC8+XHJcbn0pIGFzIGFueVxyXG5cclxuR3JpZFRhYmxlV2l0aFJvdXRlci5nZXRPcHRpb25zID0gVGFibGUuZ2V0T3B0aW9uc1xyXG5HcmlkVGFibGVXaXRoUm91dGVyLmdldERhdGFGcm9tUXVlcnkgPSBUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5XHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIubWFrZVF1ZXJ5ID0gVGFibGUubWFrZVF1ZXJ5XHJcblxyXG5jb25zdCBHcmlkVGFibGVIZWxwZXIgPSB7XHJcbiAgICBnZXRPcHRpb25zOiBUYWJsZS5nZXRPcHRpb25zLFxyXG4gICAgZ2V0RGF0YUZyb21RdWVyeTogVGFibGUuZ2V0RGF0YUZyb21RdWVyeSxcclxuICAgIG1ha2VRdWVyeTogVGFibGUubWFrZVF1ZXJ5XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR3JpZFRhYmxlV2l0aFJvdXRlclxyXG5leHBvcnQge1xyXG4gICAgR3JpZFRhYmxlSGVscGVyXHJcbn0iLCIvLyBpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcclxuaW1wb3J0IFRhYmxlLCB7R3JpZFRhYmxlSGVscGVyfSBmcm9tICcuL1RhYmxlVHN4J1xyXG5pbXBvcnQgRmlsdGVySW5wdXQgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0lucHV0J1xyXG5pbXBvcnQgRmlsdGVyRHJvcGRvd24gZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgRmlsdGVyRGF0ZVBpY2tlciBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvRGF0ZVBpY2tlcidcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBUYWJsZSBhcyBHcmlkVGFibGUsXHJcbiAgICBHcmlkVGFibGVIZWxwZXIsXHJcbiAgICBGaWx0ZXJJbnB1dCxcclxuICAgIEZpbHRlckRyb3Bkb3duLFxyXG4gICAgRmlsdGVyRGF0ZVBpY2tlclxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3RoZW1lcy9tb2R1bGVzL0kxOG4nXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRTdG9yZSBhcyBzZXRTdG9yZUFjdGlvbiB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1N0b3JlJ1xyXG5pbXBvcnQgcm91dGUgZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnXHJcbmludGVyZmFjZSBCYXNlQm9vayB7XHJcbiAgICB1c2VTZWxlY3RvcjogRnVuY3Rpb24sXHJcbiAgICByb3V0ZXI6IGFueSxcclxuICAgIHQ6IEZ1bmN0aW9uLFxyXG4gICAgc2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0U3RvcmU6IEZ1bmN0aW9uLFxyXG4gICAgcmVkaXJlY3Q6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0RGF0YTogRnVuY3Rpb24sXHJcbiAgICBub3RpZnk6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0QXV0aDogRnVuY3Rpb25cclxuICAgIGdldENvb2tpZXM6IEZ1bmN0aW9uLFxyXG4gICAgZ2V0UHVibGljUnVudGltZUNvbmZpZzogRnVuY3Rpb25cclxufVxyXG5jb25zdCB1c2VCYXNlSG9va3MgPSAgKHsgbGFuZyA9IFsnY29tbW9uJywgJ3BhZ2VzJywgJ2Vycm9ycyddLH0gOiB7IGxhbmc/OiBzdHJpbmdbXSwgfSA9IHt9KTogQmFzZUJvb2sgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IEkxOG4gPSB1c2VUcmFuc2xhdGlvbihsYW5nKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHNldFN0b3JlID0gYXN5bmMgKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN0b3JlQWN0aW9uKHBhdGgsIHZhbHVlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdG9yZSA9IChwYXRoOiBzdHJpbmcpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gXy5nZXQoc3RhdGUsIHBhdGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZGlyZWN0ID0gKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeTogc3RyaW5nLCBzaGFsbG93OiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgbmV4dFJvdXRlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHJvdXRlKHJvdXRlTmFtZSwgcXVlcnkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG5leHRSb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IHJvdXRlTmFtZSxcclxuICAgICAgICAgICAgICAgIGFzOiByb3V0ZU5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcywge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldERhdGEgPSAob2JqOiBhbnksIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiBhbnkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5ID0gKG1lc3NhZ2U6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyA9ICcnLCB0eXBlOiBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiID0gXCJzdWNjZXNzXCIpOiB2b2lkID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0IC8vc2Vjb25kXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0QXV0aCA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYXV0aClcclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvb2tpZXMgPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmNvb2tpZXMpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wdWJsaWNSdW50aW1lQ29uZmlnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlU2VsZWN0b3IsXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHQ6IEkxOG4udCxcclxuICAgICAgICBzZXRTdG9yZSxcclxuICAgICAgICBnZXRTdG9yZSxcclxuICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICBnZXREYXRhLFxyXG4gICAgICAgIG5vdGlmeSxcclxuICAgICAgICBnZXRBdXRoLFxyXG4gICAgICAgIGdldENvb2tpZXMsXHJcbiAgICAgICAgZ2V0UHVibGljUnVudGltZUNvbmZpZ1xyXG4gICAgfTtcclxufVxyXG5cclxudXNlQmFzZUhvb2tzLmdldERhdGEgPSAgKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VCYXNlSG9va3MiLCJpbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAnLi9CYXNlSG9va3MnXHJcbmltcG9ydCB7Y2hlY2tQZXJtaXNzaW9ufSBmcm9tICcuLi91dGlscy9QZXJtaXNzaW9uJ1xyXG5cclxuICBcclxuY29uc3QgUGVybWlzc2lvbkhvb2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldEF1dGggfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge31cclxuICAgIGNvbnN0IHVzZXJQZXJtaXNzaW9ucyA9IGF1dGgucGVybWlzc2lvbnMgfHwge31cclxuXHJcbiAgICBjb25zdCBnZXRVc2VyUGVybWlzc2lvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlclBlcm1pc3Npb25zXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IF9jaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja1Blcm1pc3Npb24ocGVybWlzc2lvbnMsIHVzZXJQZXJtaXNzaW9ucylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VXNlclBlcm1pc3Npb24sXHJcbiAgICAgICAgY2hlY2tQZXJtaXNzaW9uOiBfY2hlY2tQZXJtaXNzaW9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3Npb25Ib29rIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0LCBEcmF3ZXIsIEJhY2tUb3AsIFJvdywgQ29sLCBUeXBvZ3JhcGh5IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2FkbWluL1NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9hZG1pbi9IZWFkZXJcIjtcclxuY29uc3QgVEhFTUUgPSBcImxpZ2h0XCI7XHJcbmltcG9ydCBCcmVhZENydW1iIGZyb20gXCJ0aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWJcIjtcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2tzIGZyb20gXCJ0aGVtZXMvaG9va3MvQmFzZUhvb2tzXCI7XHJcbmltcG9ydCBfcm91dGVzIGZyb20gXCJ0aGVtZXMvX3JvdXRlcy5qc29uXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuXHJcbmNvbnN0IHsgVGl0bGUsIFRleHQgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5jb25zdCB7IENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgQWRtaW4gPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0IH0gPSB1c2VCYXNlSG9va3MoKTtcclxuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZ2V0UHVibGljUnVudGltZUNvbmZpZyB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKTtcclxuXHJcbiAgY29uc3Qgb25Db2xsYXBzZUNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZVNpemUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2JpbGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MjtcclxuICAgIHNldElzTW9iaWxlKG1vYmlsZSk7XHJcbiAgICBzZXRDb2xsYXBzZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICAgIHVwZGF0ZVNpemUoKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVTaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZTtcclxuICAgIGNvbnN0IHJvdXRlRGF0YTogYW55ID0gX3JvdXRlcztcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdO1xyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpIHx8IFwiXCI7XHJcbiAgLy8gY29uc29sZS5sb2cocm91dGVOYW1lKVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3B1YmxpY1J1bnRpbWVDb25maWcuU0lURV9OQU1FfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwdWJsaWNSdW50aW1lQ29uZmlnLlRJVExFfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5ERVNDUklQVElPTn0vPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5MT0dPfSAvPlxyXG4gICAgICA8bGluayByZWw9XCJudXJzaW5nLWhvbWUtaWNvblwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30+PC9saW5rPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBpZD1cImFkbWluXCI+XHJcbiAgICAgIDxMYXlvdXQgaGFzU2lkZXI9e3RydWV9PlxyXG4gICAgICAgIHtpc01vYmlsZSA/IChcclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgbWFza0Nsb3NhYmxlXHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzdHJveU9uQ2xvc2U9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IG9uQ29sbGFwc2VDaGFuZ2UoZmFsc2UpfVxyXG4gICAgICAgICAgICB2aXNpYmxlPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICBib2R5U3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgY29sbGFwc2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInByaW1hcnlMYXlvdXRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e2BtYWluLWxheW91dCAke2NvbGxhcHNlZCA/IFwiY29sbGFwc2VkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfSBkaXNhYmxlZFNlYXJjaD17cHJvcHMuZGlzYWJsZWRTZWFyY2h9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1ic1wiPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17MTV9PlxyXG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LnRpdGxlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICB0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgcGFnZXM6JHtyb3V0ZU5hbWUucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImZyb250ZW5kLmFkbWluLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0uZGVzY3JpcHRpb25gXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBsZz17MTJ9IHhsPXs5fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGN1bWItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRDcnVtYiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgPEZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj7CqSB7bW9tZW50KCkueWVhcigpfSBIYWN0ZWNoPC9Gb290ZXI+XHJcbiAgICAgICAgICA8QmFja1RvcFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiYmFja1RvcFwifVxyXG4gICAgICAgICAgICB0YXJnZXQ9eygpID0+XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5TGF5b3V0XCIpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbil9O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBjcmVhdGVSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIExheW91dCwgQXZhdGFyLCBCdXR0b24sIElucHV0LCBQb3BvdmVyLCBSb3csIENvbCwgQXV0b0NvbXBsZXRlLCBGb3JtLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBcclxuICBNZW51VW5mb2xkT3V0bGluZWQsIE1lbnVGb2xkT3V0bGluZWQsIFBvd2Vyb2ZmT3V0bGluZWQsIFxyXG4gIFNldHRpbmdGaWxsZWQsIFVzZXJPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9EaWFsb2dzL0NvbmZpcm1EaWFsb2cnO1xyXG5pbXBvcnQgVXNlclNlcnZpY2UgZnJvbSAgXCJ0aGVtZXMvc2VydmljZXMvYXBpL1VzZXJTZXJ2aWNlXCJcclxuaW1wb3J0IFBhdGllbnRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9QYXRpZW50U2VydmljZVwiXHJcbmltcG9ydCBCZWRTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9CZWRTZXJ2aWNlXCJcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnXHJcbmltcG9ydCB0byBmcm9tICdhd2FpdC10by1qcydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuXHJcbmNvbnN0IHsgSGVhZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudVxyXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXRcclxuXHJcbmNvbnN0IEFkbWluSGVhZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSwgZ2V0Q29va2llcywgZ2V0RGF0YSAgfSA9IHVzZUJhc2VIb29rKCk7XHJcbiAgY29uc3QgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKVxyXG4gIGNvbnN0IHBhdGllbnRTZXJ2aWNlID0gbmV3IFBhdGllbnRTZXJ2aWNlKClcclxuICBjb25zdCBiZWRTZXJ2aWNlID0gbmV3IEJlZFNlcnZpY2UoKVxyXG4gIGNvbnN0IFtwYXRpZW50cywgc2V0UGF0aWVudHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2JlZHMsIHNldEJlZHNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpIC8vIGNoYW5nZSBwYXNzd29yZFxyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKCkgfHwge307XHJcbiAgY29uc3QgY29va2llT2JqZWN0ID0gZ2V0Q29va2llcygpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IGNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tNZW51ID0gKGU6IGFueSkgPT4geyB9XHJcbiAgY29uc3QgcmVkaXJlY3RMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhjb29raWVPYmplY3QpXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndG9rZW4nLCB7IHBhdGg6ICcvJ30pXHJcbiAgICBhd2FpdCBjb29raWVzLnJlbW92ZSgndXNlcicsIHsgcGF0aDogJy8nfSlcclxuICAgIHJldHVybiBhd2FpdCByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFjb29raWVPYmplY3QudG9rZW4gfHwgIWNvb2tpZU9iamVjdC51c2VyKSB7XHJcbiAgICAgIHJlZGlyZWN0KCdmcm9udGVuZC5hZG1pbi5sb2dpbicpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgbGV0IG9wdGlvbnNQYXRpZW50czogYW55ID0gW11cclxuICBsZXQgb3B0aW9uc0JlZHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNVc2VyczogYW55ID0gW11cclxuICBcclxuICBjb25zdCBvbkNoYW5nZVNlYXJjaCA9IGFzeW5jICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBsZXQgZmlsdGVyUGF0aWVudHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyQmVkcyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJyb29tQ29kZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBmaWx0ZXJVc2VycyA9IHtcclxuICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICBmaWVsZDogXCJmdWxsbmFtZVwiLFxyXG4gICAgICAgIG9wZXJhdG9yOiBcImNvbnRhaW5zXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgcGFnZVNpemU6IDUsXHJcbiAgICAgIHBhZ2U6IDBcclxuICAgIH1cclxuICAgIGxldCBbZXJyVXNlcnMsIHVzZXJzXTogYW55W10gPSBhd2FpdCB0byh1c2VyU2VydmljZS5pbmRleChmaWx0ZXJVc2VycykpXHJcbiAgICBsZXQgZGF0YVVzZXJzID0gXy5nZXQodXNlcnMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFVc2Vycy5sZW5ndGgpe1xyXG4gICAgICBzZXRVc2VycyhkYXRhVXNlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJQYXRpZW50cywgcGF0aWVudHNdOiBhbnlbXSA9IGF3YWl0IHRvKHBhdGllbnRTZXJ2aWNlLmluZGV4KGZpbHRlclBhdGllbnRzKSlcclxuICAgIGxldCBkYXRhUGF0aWVudHMgPSBfLmdldChwYXRpZW50cywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YVBhdGllbnRzLmxlbmd0aCl7XHJcbiAgICAgIHNldFBhdGllbnRzKGRhdGFQYXRpZW50cylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgW2VyckJlZHMsIGJlZHNdOiBhbnlbXSA9IGF3YWl0IHRvKGJlZFNlcnZpY2UuaW5kZXgoZmlsdGVyQmVkcykpXHJcbiAgICBsZXQgZGF0YUJlZHMgPSBfLmdldChiZWRzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhQmVkcy5sZW5ndGgpe1xyXG4gICAgICBzZXRCZWRzKGRhdGFCZWRzKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIGNvbnN0IG9uQmx1clNlYXJjaCA9ICgpID0+IHtcclxuICAgIHNldFVzZXJzKFtdKVxyXG4gICAgc2V0QmVkcyhbXSlcclxuICAgIHNldFBhdGllbnRzKFtdKVxyXG4gIH1cclxuICBcclxuICBjb25zdCByZW5kZXJDb25maXJtRGlhbG9nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbmZpcm1EaWFsb2dcclxuICAgICAgICByZWY9e2NvbmZpcm1SZWZ9XHJcbiAgICAgICAgb25TdWJtaXQ9e3JlZGlyZWN0TG9naW59XHJcbiAgICAgICAgdGl0bGU9e3QoJ3NpZ25vdXQnKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLnNpZ25vdXRDb25maXJtJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gYXN5bmMgKGRhdGE6IGFueSk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSlcclxuICAgIGxldCB2YWx1ZXMgPSB7IGlkOiBhdXRoLmlkLCBvbGRQYXNzd29yZDogZGF0YS5vbGRQYXNzd29yZCwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfVxyXG5cclxuICAgIGxldCBbZXJyb3IsIHJlc3VsdF06IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UudXNlclVwZGF0ZVBhc3N3b3JkKHZhbHVlcykpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBub3RpZnkodChgZXJyb3JzOiR7ZXJyb3IuY29kZX1gKSwgdChlcnJvci5tZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkodChcIm1lc3NhZ2UucmVjb3JkVXBkYXRlZFwiKSlcclxuICB9XHJcblxyXG4gIC8vdmFsaWRhdGUgaW5wdXQgcGFzc3dvcmRcclxuICBjb25zdCB2YWxpZGF0b3JQYXNzd29yZCA9ICh7IGdldEZpZWxkVmFsdWUgfTogeyBnZXRGaWVsZFZhbHVlOiBGdW5jdGlvbiB9KSA9PiAoe1xyXG4gICAgdmFsaWRhdG9yOiAocnVsZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHQoJ2Zvcm0ucmVQYXNzd29yZCcpKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCByZW5kZXJDaGFuZ2VQYXNzTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybUNoYW5nZVBhc3N3b3JkXSA9IEZvcm0udXNlRm9ybSgpXHJcbiAgICByZXR1cm4gKDxGb3JtIGZvcm09e2Zvcm1DaGFuZ2VQYXNzd29yZH0gbmFtZT1cImZvcm1DaGFuZ2VQYXNzd29yZFwiXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBvbGRQYXNzd29yZDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICByZXBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICB9fVxyXG4gICAgICBvbkZpbmlzaD17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgID5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICBvbk9rPXsoKSA9PiB7IGZvcm1DaGFuZ2VQYXNzd29yZC5zdWJtaXQoKTsgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwib2xkUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiB0KCdmb3JtLnJlcXVpcmVkJykgfVxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbGFiZWw9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cInJlcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH0sXHJcbiAgICAgICAgICAgIHZhbGlkYXRvclBhc3N3b3JkXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcInJlUGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyUmlnaHRDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFBvd2Vyb2ZmT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiIG9uQ2xpY2s9eygpID0+IHsgaWYgKGNvbmZpcm1SZWYuY3VycmVudCkgY29uZmlybVJlZi5jdXJyZW50LnNob3coKSB9fT48L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBpY29uPXs8U2V0dGluZ0ZpbGxlZCBzcGluIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiAgb25DbGljaz17KCkgPT4geyBzZXRNb2RhbFZpc2libGUodHJ1ZSkgfX0gPjwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBtZW51SWNvblByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInRyaWdnZXJcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IG9uQ29sbGFwc2VDaGFuZ2UoIWNvbGxhcHNlZClcclxuICB9XHJcbiAgbGV0IGhlYWRlckNsYXNzID0gXCJoZWFkZXJcIlxyXG4gIGlmIChjb2xsYXBzZWQpIGhlYWRlckNsYXNzICs9ICcgY29sbGFwc2VkJ1xyXG5cclxuICBjb25zdCBhY2NvdW50UG9wdXAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1s4LCA4XX0+XHJcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezd9IGxnPXs3fT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59IFxyXG4gICAgICAgICAgICAgICAgc3JjPXtcIlwifSBzaXplPXsxMDB9IHNoYXBlPVwic3F1YXJlXCI+XHJcbiAgICAgICAgICAgICAgICB7YXV0aC5mdWxsbmFtZX1cclxuICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICB7LyogPEF2YXRhciBzaXplPXs2NH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+IFxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXsxN30gbGc9ezE3fT5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgndXNlcm5hbWUnKX08L2I+OiA8aT57YXV0aC51c2VybmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Yj57dCgnZnVsbG5hbWUnKX08L2I+OiA8aT57YXV0aC5mdWxsbmFtZX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxiPnt0KCdlbWFpbCcpfTwvYj46IDxpPnthdXRoLmVtYWlsID8gYXV0aC5lbWFpbCA6IHQoXCJ1cGRhdGVcIil9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgncGhvbmUnKX08L2I+OiA8aT57YXV0aC5waG9uZSA/IGF1dGgucGhvbmUgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyVGl0bGUgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIHsvKiA8YVxyXG4gICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPWFudGRcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIG1vcmVcclxuICAgICAgICA8L2E+ICovfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySXRlbSA9ICh0aXRsZTogc3RyaW5nLCBsaW5rOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiB0aXRsZSxcclxuICAgICAgbGFiZWw6IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7bGlua31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcGF0aWVudHMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNQYXRpZW50cy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2BwYXRpZW50cy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICBiZWRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zQmVkcy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0ucm9vbUNvZGV9IC0gJHtpdGVtLmJlZElkfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgYmVkcy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuICB1c2Vycy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc1VzZXJzLnB1c2gocmVuZGVySXRlbShcclxuICAgICAgYCR7aXRlbS5mdWxsbmFtZX0gLSAke2l0ZW0udXNlcm5hbWV9YCwgXHJcbiAgICAgIDxhIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGhyZWY9e2B1c2Vycy8ke2l0ZW0uaWR9L2VkaXRgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IFhlbSBjaGkgdGnhur90IDwvYT5cclxuICAgICkpXHJcbiAgfSlcclxuIFxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdwYXRpZW50JykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zUGF0aWVudHMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgnYmVkJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zQmVkc1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2VtcGxveWVlJykpLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zVXNlcnNcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByZW5kZXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCI5MDBweFwiLCBkaXNwbGF5OiAnaW5saW5lJyB9fT5cclxuICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzTmFtZT1cImNlcnRhaW4tY2F0ZWdvcnktc2VhcmNoLWRyb3Bkb3duXCJcclxuICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD17MzUwfSAvLyB3aWR0aCBkcm9wZG93blxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogYW55KSA9PiBvbkNoYW5nZVNlYXJjaCh2YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IG9uQmx1clNlYXJjaCgpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDM1MCB9fSAvLyB3aWR0aCBpbnB1dCBTZWFyY2hcclxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICBkaXNhYmxlZCA9IHtwcm9wcy5kaXNhYmxlZFNlYXJjaD8gdHJ1ZSA6IGZhbHNlIH0gLy8gZGlzYWJsZSBpbnB1dCBzZWFyY2hcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIHNpemU9XCJsYXJnZVwiIHBsYWNlaG9sZGVyPXt0KFwic2VhcmNoXCIpfSAvPlxyXG4gICAgICAgIDwvQXV0b0NvbXBsZXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxIZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc30+XHJcbiAgICAgIHtjb2xsYXBzZWQgXHJcbiAgICAgID8gPE1lbnVVbmZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+IFxyXG4gICAgICA6IDxNZW51Rm9sZE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZcIiB9fSB7Li4ubWVudUljb25Qcm9wc30gLz59XHJcbiAgICAgIFxyXG4gICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT17dCgncGVyc29uYWxJbmZvJyl9IGNvbnRlbnQ9e2FjY291bnRQb3B1cCgpfT5cclxuICAgICAgICA8QnV0dG9uIGljb249ezxVc2VyT3V0bGluZWQgLz59IHR5cGU9XCJsaW5rXCIgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0blwiPjwvQnV0dG9uPlxyXG4gICAgICA8L1BvcG92ZXI+XHJcbiAgICAgIFxyXG4gICAgICB7LyogPEJ1dHRvbiBpY29uPXs8QmVsbE91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj4gKi99XHJcbiAgICAgIHsvKiA8U2VhcmNoXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bS4uLlwiXHJcbiAgICAgICAgb25TZWFyY2g9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXItc2VhcmNoXCJcclxuICAgICAgLz4gKi99XHJcbiAgICAgIHtyZW5kZXJTZWFyY2goKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0Q29udGFpbmVyJz57cmVuZGVyUmlnaHRDb250ZW50KCl9PC9kaXY+XHJcblxyXG4gICAgPC9IZWFkZXI+XHJcbiAgICB7cmVuZGVyQ29uZmlybURpYWxvZygpfVxyXG4gICAge3JlbmRlckNoYW5nZVBhc3NNb2RhbCgpfVxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluSGVhZGVyIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAndGhlbWVzL3NpZGViYXInXHJcbmltcG9ydCB7IGdldFNpZGViYXJTZWxlY3RlZHMgfSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBfcm91dGVzIGZyb20gJ3RoZW1lcy9fcm91dGVzLmpzb24nXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgdXNlUGVybWlzc2lvbkhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rJ1xyXG5cclxuY29uc3QgTWVudUNvbXBvbmVudCA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyByb3V0ZXIsIHQsIHJlZGlyZWN0IH0gPSB1c2VCYXNlSG9vayh7IGxhbmc6IFsnbWVudSddIH0pXHJcbiAgY29uc3Qge2NoZWNrUGVybWlzc2lvbn0gPSB1c2VQZXJtaXNzaW9uSG9vaygpXHJcbiAgY29uc3QgZ2V0Um91dGVOYW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVQYXRoID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgIGZvciAobGV0IHJvdXRlTmFtZSBpbiByb3V0ZURhdGEpIHtcclxuICAgICAgbGV0IHJvdXRlRWxlbWVudCA9IHJvdXRlRGF0YVtyb3V0ZU5hbWVdXHJcbiAgICAgIGlmICghcm91dGVFbGVtZW50LmFjdGlvbikgY29udGludWU7XHJcbiAgICAgIGlmIChyb3V0ZUVsZW1lbnQuYWN0aW9uLnN1YnN0cig1KSA9PT0gcm91dGVQYXRoKSByZXR1cm4gcm91dGVOYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZU1lbnVzID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcImdyb3VwXCIpIHtcclxuICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGdlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbilcclxuICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVudS5JdGVtR3JvdXBcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5yb3V0ZU5hbWV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5pY29uPyBpdGVtLmljb246ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Z2VuZXJhdGVNZW51cyhpdGVtLmNoaWxkcmVuKX1cclxuICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWNoZWNrUGVybWlzc2lvbihpdGVtLnBlcm1pc3Npb25zKSkgcmV0dXJuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9e2l0ZW0ucm91dGVOYW1lfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChpdGVtLnJvdXRlTmFtZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9KS5maWx0ZXIoKG1lbnU6YW55KSA9PiBtZW51KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdGhlbWUsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0UmVhZHksIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzXHJcbiAgY29uc3QgY3VycmVudFJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgY29uc3QgYnJlYWRjdW1zID0gZ2V0U2lkZWJhclNlbGVjdGVkcyhjdXJyZW50Um91dGVOYW1lKVxyXG4gIGxldCByb3V0ZXJOYW1lcyA9IGJyZWFkY3Vtcy5tYXAoKGJyZWFkY3VtOiBhbnkpID0+IGJyZWFkY3VtLnJvdXRlTmFtZSlcclxuICBjb25zdCBzZWxlY3RlZEtleXMgPSByb3V0ZXJOYW1lcy5wb3AoKVxyXG4gIHJldHVybiA8TWVudVxyXG4gICAgbW9kZT1cImlubGluZVwiXHJcbiAgICB0aGVtZT17dGhlbWV9XHJcbiAgICBkZWZhdWx0T3BlbktleXM9e3JvdXRlck5hbWVzfVxyXG4gICAgc2VsZWN0ZWRLZXlzPXtzZWxlY3RlZEtleXN9XHJcbiAgICBvbkNsaWNrPXtcclxuICAgICAgaXNNb2JpbGVcclxuICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2UodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgOiB1bmRlZmluZWRcclxuICAgIH1cclxuICAgIHsuLi5vdGhlclByb3BzfVxyXG4gID5cclxuICAgIHtnZW5lcmF0ZU1lbnVzKHNpZGViYXIpfVxyXG4gIDwvTWVudT5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmZ1bmN0aW9uIG51bUZvcm1hdHRlcihudW06IG51bWJlcikge1xyXG4gICAgaWYobnVtID4gOTk5ICYmIG51bSA8IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDApLnRvRml4ZWQoMSkgKyAnSyc7IC8vIGNvbnZlcnQgdG8gSyBmb3IgbnVtYmVyIGZyb20gPiAxMDAwIDwgMSBtaWxsaW9uIFxyXG4gICAgfWVsc2UgaWYobnVtID4gMTAwMDAwMCl7XHJcbiAgICAgICAgcmV0dXJuIChudW0vMTAwMDAwMCkudG9GaXhlZCgxKSArICdNJzsgLy8gY29udmVydCB0byBNIGZvciBudW1iZXIgZnJvbSA+IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA8IDkwMCl7XHJcbiAgICAgICAgcmV0dXJuIG51bTsgLy8gaWYgdmFsdWUgPCAxMDAwLCBub3RoaW5nIHRvIGRvXHJcbiAgICB9XHJcbn1cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZ2V0Q29va2llcywgcmVkaXJlY3QsIHQsIGdldERhdGEsIGdldEF1dGgsIGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rKClcclxuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbiAgICBjb25zdCBwdWJsaWNSdW50aW1lQ29uZmlnID0gZ2V0UHVibGljUnVudGltZUNvbmZpZygpXHJcbiAgICBjb25zdCBwcm9maWxlSW5mbyA9IHtcclxuICAgICAgICBjb21wYW55TG9nbzogcHVibGljUnVudGltZUNvbmZpZy5MT0dPLFxyXG4gICAgICAgIGdyb3VwTmFtZTogXCJOaMOibiB2acOqblwiLFxyXG4gICAgICAgIHVzZXJGdWxsbmFtZTogXCJEacOqbSBUaOG7iyBRdeG7s25oXCIsXHJcbiAgICAgICAgY29tcGFueU5hbWU6IFwiVmnhu4duIGTGsOG7oW5nIGzDo28gSMaw4bubbmcgRMawxqFuZ1wiLFxyXG4gICAgICAgIGNvbXBhbnlBZGRyZXNzOiBcIlPhu5EgMzksIG5nw7UgNzQsIMSQxrDhu51uZyBEdXkgVMOibiwgUXXhuq1uIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpXCIsXHJcbiAgICAgICAgdG9kYXk6IHt9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1wcm9maWxlXCI+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17ODB9IGljb249ezxVc2VyT3V0bGluZWQgLz59IHNyYz17cHJvZmlsZUluZm8uY29tcGFueUxvZ299IGNsYXNzTmFtZT1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWNvbXBhbnlOYW1lXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWFkZHJlc3NcIj57cHJvZmlsZUluZm8uY29tcGFueUFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7LyogPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1uYW1lXCI+e3Byb2ZpbGVJbmZvLnVzZXJGdWxsbmFtZX08L3NwYW4+IC0gPHNwYW4gY2xhc3NOYW1lPVwicHJvZmlsZS1ncm91cE5hbWVcIj57cHJvZmlsZUluZm8uZ3JvdXBOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD4gKi99XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz17MjJ9IG9mZnNldD17MX0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJwcm9maWxlLWVuZExpbmVcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGF5b3V0LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXHJcbmltcG9ydCB7IEhvbWVGaWxsZWQsIFVzZXJPdXRsaW5lZCwgSG9tZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zJztcclxuY29uc3QgVEhFTUUgPSAnbGlnaHQnXHJcblxyXG5jb25zdCB7IEhlYWRlciwgU2lkZXIsIENvbnRlbnQgfSA9IExheW91dDtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJ1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbGxhcHNlZCwgb25Db2xsYXBzZUNoYW5nZSwgaXNNb2JpbGUsIHRoZW1lIH0gPSBwcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2lkZXJcclxuICAgICAgICAgICAgd2lkdGg9ezI1Nn1cclxuICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg9ezB9XHJcbiAgICAgICAgICAgIHRyaWdnZXI9e251bGx9XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ9XCJsZ1wiXHJcbiAgICAgICAgICAgIHRoZW1lPXtUSEVNRX1cclxuICAgICAgICAgICAgY29sbGFwc2libGVcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICAgIC8vb25CcmVha3BvaW50PXshaXNNb2JpbGUgJiYgb25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX0gLz5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaWRlQmFyO1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZGVmYXVsdENvb2tpZSkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhkZWZhdWx0Q29va2llKVxyXG4gIHJldHVybiBjb29raWVzXHJcbn0iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0XHJcbmNvbnN0IHtwdWJsaWNSdW50aW1lQ29uZmlnfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgTmV4dEkxOE5leHRJbnN0YW5jZSA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdE5TOiAnY29tbW9uJyxcclxuICBkZWZhdWx0TGFuZ3VhZ2U6IHB1YmxpY1J1bnRpbWVDb25maWcuTEFORyxcclxuICBvdGhlckxhbmd1YWdlczogWydlbiddLFxyXG4gIGxvY2FsZVBhdGg6IFwibGFuZ1wiLFxyXG4gIGJyb3dzZXJMYW5ndWFnZURldGVjdGlvbjogZmFsc2UsXHJcbiAgc2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5leHRJMThOZXh0SW5zdGFuY2UiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5pbXBvcnQgUmVxdWVzdEV4Y2VwdGlvbiBmcm9tICcuL1JlcXVlc3RFeGNlcHRpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcclxuICBjb25zdHJ1Y3Rvcihjb29raWVzU3RyaW5nKSB7XHJcbiAgICB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb29raWVzID0gY29va2llc1N0cmluZ1xyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWVzKGNvb2tpZXNTdHJpbmcpLmdldCgndG9rZW4nKVxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSh0aGlzLmhhbmRsZUdsb2JhbC5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZUdsb2JhbEVycm9yLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlR2xvYmFsKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjaykge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2socmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbEVycm9yKGVycm9yKSB7XHJcbiAgICBpZiAodGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKSB7XHJcbiAgICAgIGVycm9yID0gdGhpcy5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrKGVycm9yKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbiAgfVxyXG5cclxuICBnZXRBcHBVcmwoKSB7XHJcbiAgICAvL3JldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvXCJcclxuICAgIHJldHVybiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9IT1NUXHJcbiAgfVxyXG4gIGJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSkge1xyXG5cclxuICB9XHJcbiAgYWZ0ZXJSZXF1ZXN0KHJlc3VsdCkge1xyXG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKC0xLCBcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIilcclxuICAgIGNvbnN0IGNvZGUgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5jb2RlXCIsIC0xKVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IF8uZ2V0KHJlc3VsdCwgXCJkYXRhLm1lc3NhZ2VcIiwgXCJcIilcclxuICAgIGNvbnN0IGRhdGEgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5kYXRhXCIpXHJcbiAgICBpZiAoY29kZSAhPSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IFJlcXVlc3RFeGNlcHRpb24oY29kZSwgbWVzc2FnZSwgZGF0YSlcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQodXJsLCBkYXRhID0ge30pIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHBvc3QodXJsLCBkYXRhKSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgcHV0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbiAgYXN5bmMgZGVsZXRlKHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKHRoaXMuZ2V0QXBwVXJsKCkgKyB1cmwsIHsgcGFyYW1zOiBkYXRhIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJSZXF1ZXN0KHJlc3VsdClcclxuICB9XHJcbn0iLCJjbGFzcyBSZXF1ZXN0RXhjZXB0aW9ue1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlPVwiXCIsIG1lc3NhZ2UgPSBcIlwiLCBkYXRhKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEV4Y2VwdGlvbjtcclxuIiwiY29uc3QgVXJsUGF0dGVybiA9IHJlcXVpcmUoJ3VybC1wYXR0ZXJuJyk7XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgncXVlcnktc3RyaW5nJyk7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4vX3JvdXRlcydcclxuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBzdGF0aWMgbWFrZVVybChuYW1lLCBwYXJhbXMpIHtcclxuICAgICAgICBsZXQgcm91dGVJbmZvID0gcm91dGVDb25maWdbbmFtZV1cclxuICAgICAgICBpZiAoIXJvdXRlSW5mbykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFJvdXRlICR7bmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gbmV3IFVybFBhdHRlcm4ocm91dGVJbmZvLnVybCk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgYXNVcmwgPSBwYXR0ZXJuLnN0cmluZ2lmeShwYXJhbXMpIC8vbGluayBoaeG7g24gdGjhu4sgdHLDqm4gdHLDrG5oIGR1eeG7h3RcclxuICAgICAgICAgICAgbGV0IGhyZWYgPSBhc1VybCAvL2xpbmsgdGjhuq10IHRyb25nIC9wYWdlc1xyXG4gICAgICAgICAgICBpZiAocm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoMCwgNikgPT09IFwicGFnZXMvXCIpIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSByb3V0ZUluZm8uYWN0aW9uLnN1YnN0cig1KVxyXG4gICAgICAgICAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignPycpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYD8ke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZiArPSBgJiR7cXVlcnl9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhczogYXNVcmwsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBocmVmXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFF1ZXJ5KHF1ZXJ5LCBzaGFsbG93ID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFzUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxyXG4gICAgICAgIGxldCBvbGRRdWVyeSA9IFJvdXRlci5yb3V0ZXIucXVlcnlcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLm9sZFF1ZXJ5LFxyXG4gICAgICAgICAgICAuLi5xdWVyeVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopID09IEpTT04uc3RyaW5naWZ5KG9sZFF1ZXJ5KSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZ0FwcGVuZCA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShxdWVyeU9iailcclxuICAgICAgICAgICAgLyogaWYocXVlcnlTdHJpbmdBcHBlbmQpe1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhc1BhdGgsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgUm91dGVyLnJvdXRlci5xdWVyeSA9IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBSb3V0ZXIucm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmosXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlPYmpcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IChyb3V0ZU5hbWUsIHJvdXRlcywgcm91dGVQYXRocyA9IFtdKSA9PiB7XHJcbiAgICAgICAgbGV0IHNpZGViYXJTZWxlY3RlZE5hbWUgPSByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdID8gcm91dGVDb25maWdbcm91dGVOYW1lXS5zaWRlYmFyIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCFyb3V0ZXMpIHJvdXRlcyA9IHNpZGViYXJcclxuICAgICAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJvdXRlLnJvdXRlTmFtZSA9PT0gc2lkZWJhclNlbGVjdGVkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGVQYXRocy5wdXNoKHJvdXRlKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZVBhdGhzXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldFNpZGViYXJTZWxlY3RlZHMoc2lkZWJhclNlbGVjdGVkTmFtZSwgcm91dGUuY2hpbGRyZW4sIFsuLi5yb3V0ZVBhdGhzLCByb3V0ZV0pXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGgpIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJyZWFkY3J1bWJzID0gKHJvdXRlTmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gOiB1bmRlZmluZWRcclxuICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQocm91dGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnRoaXMuZ2V0QnJlYWRjcnVtYnMocm91dGUucGFyZW50KSwgLi4ucmVzdWx0XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3Qgcm91dGUgPSBSb3V0ZS5tYWtlVXJsXHJcbmNvbnN0IGFkZFF1ZXJ5ID0gUm91dGUuYWRkUXVlcnlcclxuY29uc3QgZ2V0QnJlYWRjcnVtYnMgPSBSb3V0ZS5nZXRCcmVhZGNydW1ic1xyXG5jb25zdCBnZXRTaWRlYmFyU2VsZWN0ZWRzID0gUm91dGUuZ2V0U2lkZWJhclNlbGVjdGVkc1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZTtcclxuZXhwb3J0IHtcclxuICAgIHJvdXRlLFxyXG4gICAgYWRkUXVlcnksXHJcbiAgICBnZXRCcmVhZGNydW1icyxcclxuICAgIGdldFNpZGViYXJTZWxlY3RlZHNcclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAndGhlbWVzL21vZHVsZXMvUmVxdWVzdCdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAndGhlbWVzL21vZHVsZXMvQ29va2llcyc7XHJcbmltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcydcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuXHJcbmNsYXNzIEJhc2VBcGl7XHJcbiAgY29va2llczogQ29va2llc1xyXG4gIFJlcXVlc3Q6IFJlcXVlc3RcclxuICBuYW1lOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNPYmogPSBjb250ZXh0ID8gbmV4dENvb2tpZShjb250ZXh0KToge31cclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXMoY29va2llc09iaik7XHJcbiAgICB0aGlzLlJlcXVlc3QgPSBuZXcgUmVxdWVzdChjb29raWVzT2JqKVxyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbENhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVDYWxsYmFja1xyXG4gICAgdGhpcy5SZXF1ZXN0LmhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2sgPSB0aGlzLmdsb2JhbEhhbmRsZUVycm9yQ2FsbGJhY2tcclxuICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gXy5nZXQob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpXHJcbiAgfVxyXG4gIGdsb2JhbEhhbmRsZUNhbGxiYWNrID0gKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrID0gKGVycm9yOiBhbnkpID0+IHtcclxuICAgIGxldCBzdGF0dXMgPSBfLmdldChlcnJvciwgXCJyZXNwb25zZS5zdGF0dXNcIiwgLTEpO1xyXG4gICAgaWYoc3RhdHVzID09PSAtMSl7XHJcbiAgICAgIC8vbm90aWZ5KFwiVW5hYmxlIGNvbm5lY3QgdG8gc2VydmVyIVwiLCBcImVycm9yXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICB0aGlzLmNvb2tpZXMucmVtb3ZlKFwidG9rZW5cIilcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInVzZXJcIilcclxuICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2xvZ2luXCIpe1xyXG4gICAgICAgIC8vbm90aWZ5KFwiTG9naW4gc2Vzc2lvbiBleHBpcmVkIVwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdChcImZyb250ZW5kLmFkbWluLmxvZ2luXCIpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAvL2xvZ2luIHNjcmVlbi4ga2jDtG5nIGzDoG0gZ8OsIGPhuqMuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvci5yZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgcm91dGUocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIHJldHVybiByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gIH1cclxuXHJcbiAgcmVkaXJlY3Qocm91dGVOYW1lOiBzdHJpbmcsIHF1ZXJ5PzogYW55KXtcclxuICAgIGxldCBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgUm91dGVyLnB1c2gobmV4dFJvdXRlLmhyZWYsIG5leHRSb3V0ZS5hcylcclxuICB9XHJcblxyXG4gIGFzeW5jIGluZGV4KGRhdGE/OiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5pbmRleGAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QuZ2V0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zdG9yZWAsZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRldGFpbChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZXRhaWxgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBlZGl0KGRhdGE6IGFueSl7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlKGBhcGkuJHt0aGlzLm5hbWV9LnVwZGF0ZWAsIGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZShkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5kZWxldGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmRlbGV0ZSh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUFwaSIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBCZWQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ2JlZHMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVkIiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuXHJcbmNsYXNzIFBhdGllbnQgZXh0ZW5kcyBCYXNlQXBpIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0PzogQ29udGV4dCl7XHJcbiAgICBzdXBlcihjb250ZXh0KVxyXG4gICAgdGhpcy5uYW1lID0gJ3BhdGllbnRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGllbnQiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgUm9vbSBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAncm9vbXMnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbSIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2Vycyc7IC8va+G6vyB0aOG7q2EgQ1JVRCB04burIHRo4bqxbmcgY2hhXHJcbiAgfVxyXG4gIGFzeW5jIGxvZ2luKHsgZGF0YSB9OiB7ZGF0YToge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9fSkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShcImFwaS5sb2dpblwiKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnBvc3QodXJsLCBkYXRhKSB8fCB7fVxyXG4gICAgICAvL3N1Y2Nlc3NcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3Rva2VuJywgdGhpcy5nZXREYXRhKHJlc3VsdCwgXCJ0b2tlblwiLCB1bmRlZmluZWQpLCB7XHJcbiAgICAgIHBhdGg6IFwiL1wiXHJcbiAgICB9KVxyXG4gICAgdGhpcy5jb29raWVzLnNldCgndXNlcicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidXNlclwiLCB7fSkse1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5kYXNoYm9hcmQuaW5kZXhcIilcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIGFzeW5jIHVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVQYXNzd29yZGAsIGRhdGEpLmhyZWZcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLlJlcXVlc3QucHV0KHVybCwgZGF0YSlcclxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICB9XHJcbiAgYXN5bmMgdXNlclVwZGF0ZVBhc3N3b3JkKGRhdGE6IHsgaWQ6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZ30pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51c2VyVXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHNlYXJjaChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5zZWFyY2hgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIiwiaW1wb3J0IHtcclxuICBIb21lT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFVzZXJncm91cEFkZE91dGxpbmVkLFxyXG4gIFRlYW1PdXRsaW5lZCxcclxuICBTY2hlZHVsZU91dGxpbmVkLFxyXG4gIFNvbHV0aW9uT3V0bGluZWQsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lZCxcclxuICBWZXJpZmllZE91dGxpbmVkLFxyXG4gIEluc2VydFJvd1JpZ2h0T3V0bGluZWQsXHJcbiAgTGF5b3V0T3V0bGluZWQsXHJcbiAgQ2FycnlPdXRPdXRsaW5lZCxcclxuICBMaW5lQ2hhcnRPdXRsaW5lZFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3Qgc2lkZWJhciA9IFtcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SG9tZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnJvb21zLmluZGV4XCIsXHJcbiAgICBpY29uOiA8SW5zZXJ0Um93UmlnaHRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5iZWRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8TGF5b3V0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4ucGF0aWVudHMuaW5kZXhcIixcclxuICAgIGljb246IDxVc2VyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYXNzaWdubWVudFwiLFxyXG4gICAgaWNvbjogPFNjaGVkdWxlT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5kb2N0b3JBc3NpZ25tZW50cy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxTb2x1dGlvbk91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLm51cnNlQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmhlYWx0aFN0YXR1c2VzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8Q2FsZW5kYXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5hZG1pbnNJbmRleFwiLFxyXG4gICAgaWNvbjogPFRlYW1PdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJHcm91cHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8VXNlcmdyb3VwQWRkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4udXNlclBlcm1pc3Npb25zLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFZlcmlmaWVkT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5zdGF0aXN0aWNcIixcclxuICAgIGljb246IDxDYXJyeU91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljcy5oZWFsdGhTdGF0dXNcIixcclxuICAgICAgICBpY29uOiA8TGluZUNoYXJ0T3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xyXG4iLCJpbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vX3JvdXRlcy5qc29uJ1xyXG5cclxuY29uc3QgY2hhclRvTnVtID0geyBDOiA4LCBSOiA0LCBVOiAyLCBEOiAxIH1cclxuY29uc3QgY3J1ZFRvRGVjID0gKHRleHQ6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKS5zcGxpdChcIlwiKS5yZWR1Y2UoKHRvdGFsOiBudW1iZXIsIGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJykgPT4gdG90YWwgKyBjaGFyVG9OdW1bY2hhcl0sIDApXHJcblxyXG59XHJcbmNvbnN0IGRlY1RvQ3J1ZCA9IChkZWM6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2hhcjogJ0MnIHwgJ1InIHwgJ1UnIHwgJ0QnXHJcbiAgICBmb3IgKGNoYXIgaW4gY2hhclRvTnVtKSB7XHJcbiAgICAgICAgaWYgKChkZWMgJiBjaGFyVG9OdW1bY2hhcl0pID09IGNoYXJUb051bVtjaGFyXSkgcmVzdWx0ICs9IGNoYXJcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaGFzUGVybWlzc2lvbiA9IChyZXF1aXJlUGVybWlzc2lvbjogbnVtYmVyLCB1c2VyUGVybWlzc2lvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHVzZXJQZXJtaXNzaW9uICYgcmVxdWlyZVBlcm1pc3Npb24pID09PSByZXF1aXJlUGVybWlzc2lvblxyXG4gIH1cclxuXHJcbmNvbnN0IGNoZWNrUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uczogYW55LCB1c2VyUGVybWlzc2lvbnM6IGFueSwgc2hvd0Vycm9yOiBib29sZWFuID0gZmFsc2UpID0+IHtcclxuICAgIGlmKCFwZXJtaXNzaW9ucykgcmV0dXJuIHRydWVcclxuICAgIGxldCBwZXJtaXNzaW9uQXJyYXkgPSBbXVxyXG4gICAgZm9yIChsZXQgcGVybWlzc2lvbiBpbiBwZXJtaXNzaW9ucykge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVQZXJtaXNzaW9uID0gY3J1ZFRvRGVjKHBlcm1pc3Npb25zW3Blcm1pc3Npb25dKTtcclxuICAgICAgICBjb25zdCByb290UGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1tcInJvb3RcIl0gfHwgMFxyXG4gICAgICAgIGxldCB1c2VyUGVybWlzc2lvbiA9IHVzZXJQZXJtaXNzaW9uc1twZXJtaXNzaW9uXSB8fCAwXHJcbiAgICAgICAgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbiB8IHJvb3RQZXJtaXNzaW9uXHJcbiAgICAgICAgaWYgKGhhc1Blcm1pc3Npb24ocmVxdWlyZVBlcm1pc3Npb24sIHVzZXJQZXJtaXNzaW9uKSkgcmV0dXJuIHRydWVcclxuICAgICAgICBwZXJtaXNzaW9uQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb246IHBlcm1pc3Npb24sXHJcbiAgICAgICAgICAgIHJlcXVpcmVQZXJtaXNzaW9uOiBkZWNUb0NydWQocmVxdWlyZVBlcm1pc3Npb24pLFxyXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbjogZGVjVG9DcnVkKHVzZXJQZXJtaXNzaW9uKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoIXNob3dFcnJvcikgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBwZXJtaXNzaW9uczogcGVybWlzc2lvbkFycmF5XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY2hlY2tQZXJtaXNzaW9uLFxyXG4gICAgaGFzUGVybWlzc2lvbixcclxuICAgIGNydWRUb0RlYyxcclxuICAgIGRlY1RvQ3J1ZFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdhaXQtdG8tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtYmFzZTY0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oaWdobGlnaHQtd29yZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsLXBhdHRlcm5cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==