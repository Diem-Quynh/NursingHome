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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

/***/ "./pages/admin/userPermissions/index.tsx":
/*!***********************************************!*\
  !*** ./pages/admin/userPermissions/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var themes_layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! themes/layouts/Admin */ "./themes/layouts/Admin.tsx");
/* harmony import */ var themes_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! themes/components/Table */ "./themes/components/Table/index.tsx");
/* harmony import */ var themes_components_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! themes/components/Dialogs/ConfirmDialog */ "./themes/components/Dialogs/ConfirmDialog.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var themes_services_api_UserPermissionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! themes/services/api/UserPermissionService */ "./themes/services/api/UserPermissionService.ts");
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
  permissions,
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
  const permissionService = new themes_services_api_UserPermissionService__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const confirmRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const tableRef = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
  const {
    checkPermission
  } = Object(themes_hooks_PermissionHook__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const createPer = checkPermission({
    "root": "C"
  });
  const deletePer = checkPermission({
    "root": "D"
  });

  const renderCheckbox = (row, permission) => {
    const checked = (row.avalibleValue & permission) === permission;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      defaultChecked: checked,
      disabled: true
    });
  };

  const columns = [{
    title: t('userPermissions.key'),
    dataIndex: 'keyName',
    key: 'user_permissions.key',
    width: '18%',
    filterable: true,
    sorter: true,
    render: (text, record) => __jsx("a", {
      onClick: () => redirect('frontend.admin.userPermissions.edit', {
        id: record.id
      })
    }, record.keyName)
  }, {
    title: t('userPermissions.name'),
    dataIndex: 'name',
    key: 'user_permissions.name',
    filterable: true
  }, {
    title: t('group'),
    dataIndex: 'groupName',
    key: 'user_groups.name',
    sorter: true,
    filterable: true
  }, {
    title: t('description'),
    dataIndex: 'description',
    key: 'description'
  }, {
    title: t('userPermissions.avalibleValue'),
    children: [{
      title: t("create"),
      dataIndex: 'value',
      key: 'valueC',
      width: '6%',
      render: (value, row) => renderCheckbox(row, 8)
    }, {
      title: t("view"),
      dataIndex: 'value',
      key: 'valueR',
      width: '5%',
      render: (value, row) => renderCheckbox(row, 4)
    }, {
      title: t("edit"),
      dataIndex: 'value',
      key: 'valueU',
      width: '5%',
      render: (value, row) => renderCheckbox(row, 2)
    }, {
      title: t("delete"),
      dataIndex: 'value',
      key: 'valueD',
      width: '5%',
      render: (value, row) => renderCheckbox(row, 1)
    }]
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
    let [error, permissions] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(permissionService.index(values));

    if (error) {
      const {
        code,
        message
      } = error;
      notify(t(`errors:${code}`), t(message), 'error');
      return {};
    }

    return permissions;
  };

  const onDelete = async () => {
    let [error, result] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(permissionService.delete({
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
    className: "content",
    id: "permission"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    hidden: !createPer,
    onClick: () => redirect("frontend.admin.userPermissions.create"),
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
    data: permissions,
    rowSelection: {
      selectedRowKeys: selectedIds,
      onChange: data => onChangeSelection(data)
    },
    fetchData: fetchData,
    total: total
  }), renderDeleteDialog()));
};

Index.getInitialProps = async ctx => {
  let permissionService = new themes_services_api_UserPermissionService__WEBPACK_IMPORTED_MODULE_4__["default"](ctx);
  let defaultOptions = {
    filters: [],
    sorting: []
  };
  let query = ctx.query;
  let filters = themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].getOptions(query, defaultOptions);
  let [error, permissions] = await await_to_js__WEBPACK_IMPORTED_MODULE_5___default()(permissionService.index(filters));
  return {
    namespacesRequired: ['common', 'pages', 'menu', 'errors'],
    error: error,
    permissions: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(permissions, "data", []),
    total: themes_hooks_BaseHooks__WEBPACK_IMPORTED_MODULE_7__["default"].getData(permissions, "total", 0),
    defaultQuery: {
      filters: themes_components_Table__WEBPACK_IMPORTED_MODULE_1__["GridTableHelper"].makeQuery(filters)
    }
  };
};

Index.permissions = {
  "root": "R"
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

/***/ "./themes/services/api/UserPermissionService.ts":
/*!******************************************************!*\
  !*** ./themes/services/api/UserPermissionService.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseService */ "./themes/services/api/BaseService.ts");


class UserPermission extends _BaseService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context) {
    super(context);
    this.name = 'userPermissions'; //kế thừa CRUD từ thằng cha
  }

  async getByGroupId(data) {
    const url = this.route(`api.${this.name}.getByGroupId`, data).href;
    let result = await this.Request.get(url, data);
    return result;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserPermission);

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

/***/ 15:
/*!*****************************************************!*\
  !*** multi ./pages/admin/userPermissions/index.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\nursinghome_github\pages\admin\userPermissions\index.tsx */"./pages/admin/userPermissions/index.tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vdXNlclBlcm1pc3Npb25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9CcmVhZGN1bWIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvU3RvcmUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1NlYXJjaENvbXBvbmVudHMvRGF0ZVBpY2tlci5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9Ecm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9JbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvU2VhcmNoQ29tcG9uZW50cy9SYWRpb0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4Iiwid2VicGFjazovLy8uL3RoZW1lcy9jb21wb25lbnRzL1RhYmxlL1RhYmxlVHN4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvY29tcG9uZW50cy9UYWJsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2hvb2tzL0Jhc2VIb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9BZG1pbi50c3giLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2xheW91dHMvYWRtaW4vSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9Qcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbGF5b3V0cy9hZG1pbi9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9Db29raWVzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9tb2R1bGVzL0kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL21vZHVsZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvbW9kdWxlcy9SZXF1ZXN0RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL0Jhc2VTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvc2VydmljZXMvYXBpL1BhdGllbnRTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL3V0aWxzL1Blcm1pc3Npb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdhaXQtdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWJhc2U2NFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybC1wYXR0ZXJuXCIiXSwibmFtZXMiOlsidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJwYXRobmFtZSIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJkYXRhIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCIsInBlcm1pc3Npb25zIiwidG90YWwiLCJ0IiwicmVkaXJlY3QiLCJzZXRTdG9yZSIsImdldEF1dGgiLCJnZXRTdG9yZSIsInVzZUJhc2VIb29rIiwiaGlkZGVuRGVsZXRlQnRuIiwic2V0SGlkZGVuRGVsZXRlQnRuIiwidXNlU3RhdGUiLCJzZWxlY3RlZElkcyIsInNldFNlbGVjdGVkSWRzIiwicGVybWlzc2lvblNlcnZpY2UiLCJVc2VyUGVybWlzc2lvblNlcnZpY2UiLCJjb25maXJtUmVmIiwiY3JlYXRlUmVmIiwidGFibGVSZWYiLCJjaGVja1Blcm1pc3Npb24iLCJ1c2VQZXJtaXNzaW9uSG9vayIsImNyZWF0ZVBlciIsImRlbGV0ZVBlciIsInJlbmRlckNoZWNrYm94Iiwicm93IiwicGVybWlzc2lvbiIsImNoZWNrZWQiLCJhdmFsaWJsZVZhbHVlIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwid2lkdGgiLCJmaWx0ZXJhYmxlIiwic29ydGVyIiwidGV4dCIsInJlY29yZCIsImlkIiwia2V5TmFtZSIsIm9uQ2hhbmdlU2VsZWN0aW9uIiwibGVuZ3RoIiwiZmV0Y2hEYXRhIiwidmFsdWVzIiwidG8iLCJpbmRleCIsImNvZGUiLCJvbkRlbGV0ZSIsImRlbGV0ZSIsImlkcyIsImN1cnJlbnQiLCJyZW5kZXJEZWxldGVEaWFsb2ciLCJzaG93Iiwic2VsZWN0ZWRSb3dLZXlzIiwib25DaGFuZ2UiLCJkZWZhdWx0T3B0aW9ucyIsImZpbHRlcnMiLCJzb3J0aW5nIiwiR3JpZFRhYmxlSGVscGVyIiwiZ2V0T3B0aW9ucyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsImdldERhdGEiLCJkZWZhdWx0UXVlcnkiLCJtYWtlUXVlcnkiLCJicmVhZENydW1iQ29tcG9uZW50IiwibGFuZyIsImdldFJvdXRlTmFtZSIsInJvdXRlUGF0aCIsInJvdXRlRGF0YSIsIl9yb3V0ZXMiLCJyb3V0ZU5hbWUiLCJyb3V0ZUVsZW1lbnQiLCJhY3Rpb24iLCJzdWJzdHIiLCJicmVhZEN1bWJzIiwicm91dGVzIiwiZ2V0QnJlYWRjcnVtYnMiLCJ1bnNoaWZ0IiwibGlua1Byb3BzIiwibWFrZVVybCIsImNvbmZpcm0iLCJNb2RhbCIsIkNvbmZpcm1EaWFsb2ciLCJvbkNhbmNlbCIsInN0YXRlIiwib25TdWJtaXQiLCJjb250ZW50Iiwic2V0U3RhdGUiLCJvbk9rIiwicmVkdWNlciIsInR5cGUiLCJfIiwicGF5bG9hZCIsIm1ha2VTdG9yZSIsImluaXRTdGF0ZSIsImRldlRvb2xFeHRlbnNpb25zIiwiaXNTZXJ2ZXIiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwidW5kZWZpbmVkIiwiY3JlYXRlU3RvcmUiLCJSYW5nZVBpY2tlciIsIkRhdGVQaWNrZXIiLCJGaWx0ZXJEYXRlUGlja2VyIiwiZGF0ZVN0cmluZ3MiLCJjb2x1bW4iLCJkYXRlcyIsIm1vbWVudCIsImdldERhdGVzIiwib3BlcmF0b3IiLCJzdGFydE9mIiwiYWRkIiwidG9JU09TdHJpbmciLCJlbmRPZiIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZFZhbHVlIiwib3RoZXJQcm9wcyIsInBhZGRpbmciLCJyZWZJbnB1dCIsIm1hcmdpbkJvdHRvbSIsImNsZWFyIiwiT3B0aW9uIiwiU2VsZWN0IiwiSW5wdXRHcm91cCIsIklucHV0IiwiR3JvdXAiLCJGaWx0ZXJEcm9wZG93biIsInJlbmRlck9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJsYWJlbCIsInNlYXJjaEJ0blRleHQiLCJjbGVhckJ0blRleHQiLCJkaXNwbGF5IiwiRmlsdGVySW5wdXQiLCJ2aXNpYmxlU2VhcmNoIiwiaW5wdXQiLCJzZWxlY3QiLCJyZW5kZXJPcGVyYXRvciIsIm1lc3NhZ2VzIiwiaGlkZU9wZXJhdG9yIiwib3BlcmF0b3JzIiwiZGVmYXVsdE9wZXJhdG9yIiwiSW5wdXROdW1iZXIiLCJSYWRpbyIsIkZpbHRlckNoZWNrIiwiZ2V0Q2hlY2tlZCIsIkdyaWRUYWJsZSIsInNvcnQiLCJmaW5kIiwiaXRlbSIsImRpcmVjdGlvbiIsInNvcnRPcmRlciIsImZpbHRlciIsImdldENvbHVtblNlYXJjaFByb3BzIiwiZmlsdGVyRGF0ZSIsImZpbHRlckNoZWNrIiwiZmlsdGVyRHJvcGRvd24iLCJzZXRTZWxlY3RlZEtleXMiLCJjb25maXJtRm5jIiwiY3VycmVudENvbHVtbiIsImMiLCJyZW5kZXJGaWx0ZXIiLCJmaWx0ZXJJY29uIiwiZmlsdGVyZWQiLCJjb2xvciIsIm9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlIiwidmlzaWJsZSIsInBhZ2VTaXplIiwicGFnaW5hdGlvbiIsImhhbmRsZVRhYmxlQ2hhbmdlIiwiY29sdW1uS2V5Iiwib3JkZXIiLCJzZXRGaWx0ZXJzVG9Db2x1bW5zIiwic2V0U29ydGVyVG9Db2x1bW5zIiwic2V0UGFnaW5hdGlvbiIsInBvc2l0aW9uIiwic2hvd1NpemVDaGFuZ2VyIiwicGFnZVNpemVPcHRpb25zIiwiYm9yZGVyZWQiLCJzaXplIiwic2hvd0hlYWRlciIsImhhc0RhdGEiLCJsb2FkaW5nIiwiYmluZCIsImluaXQiLCJnZXREYXRhRnJvbVF1ZXJ5IiwiZGVmYXVsdE9wdGlvblRvQ29sdW1ucyIsImNvbXBvbmVudERpZE1vdW50IiwicXVlcnlPYmoiLCJmIiwicyIsInBzIiwiQmFzZTY0IiwiZW5jb2RlIiwiYnVpbGRGZXRjaERhdGEiLCJxdWVyeU9wdGlvbnMiLCJhZGRRdWVyeSIsInBhcnNlIiwiRXJyb3IiLCJxdWVyeU91dCIsImtleXMiLCJlbGxpcHNpcyIsIngiLCJzY3JvbGxUb0ZpcnN0Um93T25DaGFuZ2UiLCJnZXRQYWdpbmF0aW9uIiwiR3JpZFRhYmxlV2l0aFJvdXRlciIsImZvcndhcmRSZWYiLCJ1c2VSb3V0ZXIiLCJUYWJsZSIsInVzZUJhc2VIb29rcyIsIkkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzZXRTdG9yZUFjdGlvbiIsInVzZVNlbGVjdG9yIiwibmV4dFJvdXRlIiwib2JqIiwiZGVmYXVsdFZhbHVlIiwiZGVzY3JpcHRpb24iLCJub3RpZmljYXRpb24iLCJkdXJhdGlvbiIsImF1dGgiLCJnZXRDb29raWVzIiwiY29va2llcyIsImdldFB1YmxpY1J1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiUGVybWlzc2lvbkhvb2siLCJ1c2VyUGVybWlzc2lvbnMiLCJnZXRVc2VyUGVybWlzc2lvbiIsIl9jaGVja1Blcm1pc3Npb24iLCJUSEVNRSIsIlRpdGxlIiwiVGV4dCIsIlR5cG9ncmFwaHkiLCJDb250ZW50IiwiRm9vdGVyIiwiTGF5b3V0IiwiQWRtaW4iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwib25Db2xsYXBzZUNoYW5nZSIsImxvZyIsInVwZGF0ZVNpemUiLCJtb2JpbGUiLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTSVRFX05BTUUiLCJUSVRMRSIsIkRFU0NSSVBUSU9OIiwiTE9HTyIsImhlaWdodCIsImRpc2FibGVkU2VhcmNoIiwieWVhciIsInF1ZXJ5U2VsZWN0b3IiLCJIZWFkZXIiLCJTdWJNZW51IiwiTWVudSIsIlNlYXJjaCIsIkFkbWluSGVhZGVyIiwidXNlclNlcnZpY2UiLCJVc2VyU2VydmljZSIsInBhdGllbnRTZXJ2aWNlIiwiUGF0aWVudFNlcnZpY2UiLCJiZWRTZXJ2aWNlIiwiQmVkU2VydmljZSIsInBhdGllbnRzIiwic2V0UGF0aWVudHMiLCJiZWRzIiwic2V0QmVkcyIsInVzZXJzIiwic2V0VXNlcnMiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJjb29raWVPYmplY3QiLCJoYW5kbGVDbGlja01lbnUiLCJyZWRpcmVjdExvZ2luIiwiQ29va2llcyIsInJlbW92ZSIsInRva2VuIiwidXNlciIsIm9wdGlvbnNQYXRpZW50cyIsIm9wdGlvbnNCZWRzIiwib3B0aW9uc1VzZXJzIiwib25DaGFuZ2VTZWFyY2giLCJmaWx0ZXJQYXRpZW50cyIsImZpbHRlckJlZHMiLCJmaWx0ZXJVc2VycyIsImVyclVzZXJzIiwiZGF0YVVzZXJzIiwiZXJyUGF0aWVudHMiLCJkYXRhUGF0aWVudHMiLCJlcnJCZWRzIiwiZGF0YUJlZHMiLCJvbkJsdXJTZWFyY2giLCJyZW5kZXJDb25maXJtRGlhbG9nIiwib25DaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJ1c2VyVXBkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0b3JQYXNzd29yZCIsImdldEZpZWxkVmFsdWUiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVuZGVyQ2hhbmdlUGFzc01vZGFsIiwiZm9ybUNoYW5nZVBhc3N3b3JkIiwiRm9ybSIsInVzZUZvcm0iLCJyZXBhc3N3b3JkIiwic3VibWl0Iiwic3BhbiIsInJlcXVpcmVkIiwicmVuZGVyUmlnaHRDb250ZW50IiwibWVudUljb25Qcm9wcyIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzIiwiYWNjb3VudFBvcHVwIiwiZnVsbG5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGhvbmUiLCJyZW5kZXJUaXRsZSIsInJlbmRlckl0ZW0iLCJsaW5rIiwianVzdGlmeUNvbnRlbnQiLCJmbG9hdCIsInJvb21Db2RlIiwiYmVkSWQiLCJyZW5kZXJTZWFyY2giLCJNZW51Q29tcG9uZW50IiwiZ2VuZXJhdGVNZW51cyIsImljb24iLCJtZW51IiwidGhlbWUiLCJ0UmVhZHkiLCJjdXJyZW50Um91dGVOYW1lIiwiYnJlYWRjdW1zIiwiZ2V0U2lkZWJhclNlbGVjdGVkcyIsInJvdXRlck5hbWVzIiwiYnJlYWRjdW0iLCJzZWxlY3RlZEtleXMiLCJwb3AiLCJzaWRlYmFyIiwibnVtRm9ybWF0dGVyIiwibnVtIiwidG9GaXhlZCIsIlByb2ZpbGUiLCJwcm9maWxlSW5mbyIsImNvbXBhbnlMb2dvIiwiZ3JvdXBOYW1lIiwidXNlckZ1bGxuYW1lIiwiY29tcGFueU5hbWUiLCJjb21wYW55QWRkcmVzcyIsInRvZGF5IiwiU2lkZXIiLCJzaWRlQmFyIiwiZGVmYXVsdENvb2tpZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdCIsImdldENvbmZpZyIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJkZWZhdWx0TlMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJMQU5HIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwiYnJvd3Nlckxhbmd1YWdlRGV0ZWN0aW9uIiwic2VydmVyTGFuZ3VhZ2VEZXRlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiUmVxdWVzdCIsImNvb2tpZXNTdHJpbmciLCJoYW5kbGVHbG9iYWxDYWxsYmFjayIsImhhbmRsZUdsb2JhbEVycm9yQ2FsbGJhY2siLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlR2xvYmFsIiwiaGFuZGxlR2xvYmFsRXJyb3IiLCJnZXRBcHBVcmwiLCJBUElfSE9TVCIsImJlZm9yZVJlcXVlc3QiLCJhZnRlclJlcXVlc3QiLCJSZXF1ZXN0RXhjZXB0aW9uIiwicG9zdCIsInB1dCIsIlVybFBhdHRlcm4iLCJxdWVyeVN0cmluZyIsIlJvdXRlIiwicm91dGVDb25maWciLCJwYXR0ZXJuIiwiYXNVcmwiLCJpbmRleE9mIiwibG9jYXRpb24iLCJvbGRRdWVyeSIsInF1ZXJ5U3RyaW5nQXBwZW5kIiwicm91dGVQYXRocyIsInNpZGViYXJTZWxlY3RlZE5hbWUiLCJwYXJlbnQiLCJCYXNlQXBpIiwiY29udGV4dCIsInN0YXR1cyIsImNvb2tpZXNPYmoiLCJuZXh0Q29va2llIiwiZ2xvYmFsSGFuZGxlQ2FsbGJhY2siLCJnbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrIiwiY3JlYXRlIiwiZGV0YWlsIiwiZWRpdCIsIkJlZCIsIlBhdGllbnQiLCJVc2VyUGVybWlzc2lvbiIsImdldEJ5R3JvdXBJZCIsIlVzZXIiLCJsb2dpbiIsInVwZGF0ZVBhc3N3b3JkIiwic2VhcmNoIiwicm91dGVQYXJhbXMiLCJjaGFyVG9OdW0iLCJDIiwiUiIsIlUiLCJEIiwiY3J1ZFRvRGVjIiwidG9VcHBlckNhc2UiLCJzcGxpdCIsInJlZHVjZSIsImNoYXIiLCJkZWNUb0NydWQiLCJkZWMiLCJoYXNQZXJtaXNzaW9uIiwicmVxdWlyZVBlcm1pc3Npb24iLCJ1c2VyUGVybWlzc2lvbiIsInNob3dFcnJvciIsInBlcm1pc3Npb25BcnJheSIsInJvb3RQZXJtaXNzaW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FB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QUNDLGlCQUFELEVBQW9CQyxjQUFwQixDQUFqQixFQUFzRCxPQUFPLElBQVA7QUFDdERFLG1CQUFlLENBQUN6Z0IsSUFBaEIsQ0FBcUI7QUFDakJ1RyxnQkFBVSxFQUFFQSxVQURLO0FBRWpCK1osdUJBQWlCLEVBQUVILFNBQVMsQ0FBQ0csaUJBQUQsQ0FGWDtBQUdqQkMsb0JBQWMsRUFBRUosU0FBUyxDQUFDSSxjQUFEO0FBSFIsS0FBckI7QUFLSDs7QUFDRCxNQUFJLENBQUNDLFNBQUwsRUFBZ0IsT0FBTyxLQUFQO0FBQ2hCLFNBQU87QUFDSDFmLFNBQUssRUFBRSxJQURKO0FBRUhpRSxlQUFXLEVBQUUwYjtBQUZWLEdBQVA7QUFLSCxDQXJCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWRtaW5cXHVzZXJQZXJtaXNzaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBMYXlvdXQgZnJvbSAndGhlbWVzL2xheW91dHMvQWRtaW4nXHJcbmltcG9ydCB7IEdyaWRUYWJsZSwgR3JpZFRhYmxlSGVscGVyLCBGaWx0ZXJJbnB1dCB9IGZyb20gJ3RoZW1lcy9jb21wb25lbnRzL1RhYmxlJztcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVXNlclBlcm1pc3Npb25TZXJ2aWNlIGZyb20gJ3RoZW1lcy9zZXJ2aWNlcy9hcGkvVXNlclBlcm1pc3Npb25TZXJ2aWNlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VQZXJtaXNzaW9uSG9vayBmcm9tIFwidGhlbWVzL2hvb2tzL1Blcm1pc3Npb25Ib29rXCI7XHJcbmltcG9ydCB7UGx1c0NpcmNsZU91dGxpbmVkLCBEZWxldGVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBwZXJtaXNzaW9ucywgdG90YWwgfTogeyBwZXJtaXNzaW9uczogUGVybWlzc2lvbltdLCB0b3RhbDogbnVtYmVyIH0pID0+IHtcclxuICBjb25zdCB7IHQsIG5vdGlmeSwgcmVkaXJlY3QsIHNldFN0b3JlLCBnZXRBdXRoLCBnZXRTdG9yZSB9ID0gdXNlQmFzZUhvb2soKTtcclxuICBjb25zdCBbaGlkZGVuRGVsZXRlQnRuLCBzZXRIaWRkZW5EZWxldGVCdG5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRJZHMsIHNldFNlbGVjdGVkSWRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IHBlcm1pc3Npb25TZXJ2aWNlID0gbmV3IFVzZXJQZXJtaXNzaW9uU2VydmljZSgpXHJcbiAgY29uc3QgY29uZmlybVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxDb25maXJtRGlhbG9nPigpXHJcbiAgY29uc3QgdGFibGVSZWYgPSBSZWFjdC5jcmVhdGVSZWY8R3JpZFRhYmxlPigpXHJcbiAgY29uc3QgeyBjaGVja1Blcm1pc3Npb24gfSA9IHVzZVBlcm1pc3Npb25Ib29rKCk7XHJcbiAgY29uc3QgY3JlYXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwicm9vdFwiOiBcIkNcIlxyXG4gIH0pXHJcbiAgY29uc3QgZGVsZXRlUGVyID0gY2hlY2tQZXJtaXNzaW9uKHtcclxuICAgIFwicm9vdFwiOiBcIkRcIlxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHJlbmRlckNoZWNrYm94ID0gKHJvdzogYW55LCBwZXJtaXNzaW9uOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrZWQgPSAocm93LmF2YWxpYmxlVmFsdWUgJiBwZXJtaXNzaW9uKSA9PT0gcGVybWlzc2lvblxyXG4gICAgcmV0dXJuIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD17Y2hlY2tlZH0gZGlzYWJsZWQgPjwvQ2hlY2tib3g+XHJcbiAgfVxyXG5cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogdCgndXNlclBlcm1pc3Npb25zLmtleScpLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2tleU5hbWUnLFxyXG4gICAgICAgIGtleTogJ3VzZXJfcGVybWlzc2lvbnMua2V5JyxcclxuICAgICAgICB3aWR0aDogJzE4JScsXHJcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBzb3J0ZXI6IHRydWUsXHJcbiAgICAgICAgcmVuZGVyOiAodGV4dDogc3RyaW5nLCByZWNvcmQ6IGFueSkgPT5cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4udXNlclBlcm1pc3Npb25zLmVkaXQnLCB7IGlkOiByZWNvcmQuaWQgfSl9PntyZWNvcmQua2V5TmFtZX08L2E+XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogdCgndXNlclBlcm1pc3Npb25zLm5hbWUnKSxcclxuICAgICAgICBkYXRhSW5kZXg6ICduYW1lJyxcclxuICAgICAgICBrZXk6ICd1c2VyX3Blcm1pc3Npb25zLm5hbWUnLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiB0KCdncm91cCcpLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2dyb3VwTmFtZScsXHJcbiAgICAgICAga2V5OiAndXNlcl9ncm91cHMubmFtZScsXHJcbiAgICAgICAgc29ydGVyOiB0cnVlLFxyXG4gICAgICAgIGZpbHRlcmFibGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiB0KCdkZXNjcmlwdGlvbicpLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBrZXk6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogdCgndXNlclBlcm1pc3Npb25zLmF2YWxpYmxlVmFsdWUnKSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogdChcImNyZWF0ZVwiKSxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAndmFsdWUnLFxyXG4gICAgICAgICAgICBrZXk6ICd2YWx1ZUMnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzYlJyxcclxuICAgICAgICAgICAgcmVuZGVyOiAodmFsdWU6IGFueSwgcm93OiBhbnkpID0+IHJlbmRlckNoZWNrYm94KHJvdywgOClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0KFwidmlld1wiKSxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAndmFsdWUnLFxyXG4gICAgICAgICAgICBrZXk6ICd2YWx1ZVInLFxyXG4gICAgICAgICAgICB3aWR0aDogJzUlJyxcclxuICAgICAgICAgICAgcmVuZGVyOiAodmFsdWU6IGFueSwgcm93OiBhbnkpID0+IHJlbmRlckNoZWNrYm94KHJvdywgNClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0KFwiZWRpdFwiKSxcclxuICAgICAgICAgICAgZGF0YUluZGV4OiAndmFsdWUnLFxyXG4gICAgICAgICAgICBrZXk6ICd2YWx1ZVUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzUlJyxcclxuICAgICAgICAgICAgcmVuZGVyOiAodmFsdWU6IGFueSwgcm93OiBhbnkpID0+IHJlbmRlckNoZWNrYm94KHJvdywgMilcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0KFwiZGVsZXRlXCIpLFxyXG4gICAgICAgICAgICBkYXRhSW5kZXg6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIGtleTogJ3ZhbHVlRCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNSUnLFxyXG4gICAgICAgICAgICByZW5kZXI6ICh2YWx1ZTogYW55LCByb3c6IGFueSkgPT4gcmVuZGVyQ2hlY2tib3gocm93LCAxKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICBdO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVNlbGVjdGlvbiA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0SGlkZGVuRGVsZXRlQnRuKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEhpZGRlbkRlbGV0ZUJ0bih0cnVlKVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWRJZHMoZGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4ge1xyXG4gICAgbGV0IFtlcnJvciwgcGVybWlzc2lvbnNdOiBhbnlbXSA9IGF3YWl0IHRvKHBlcm1pc3Npb25TZXJ2aWNlLmluZGV4KHZhbHVlcykpXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgeyBjb2RlLCBtZXNzYWdlIH0gPSBlcnJvclxyXG4gICAgICBub3RpZnkodChgZXJyb3JzOiR7Y29kZX1gKSwgdChtZXNzYWdlKSwgJ2Vycm9yJylcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGVybWlzc2lvbnNcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IFtlcnJvciwgcmVzdWx0XTogYW55W10gPSBhd2FpdCB0byhwZXJtaXNzaW9uU2VydmljZS5kZWxldGUoeyBpZHM6IHNlbGVjdGVkSWRzIH0pKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoYCR7ZXJyb3IubWVzc2FnZX1gKSwgJ2Vycm9yJylcclxuICAgIH1cclxuICAgIG5vdGlmeSh0KFwibWVzc2FnZS5yZWNvcmREZWxldGVkXCIpKTtcclxuICAgIGlmICh0YWJsZVJlZi5jdXJyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIHRhYmxlUmVmLmN1cnJlbnQucmVsb2FkKClcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkSWRzKFtdKVxyXG4gICAgc2V0SGlkZGVuRGVsZXRlQnRuKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJEZWxldGVEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29uZmlybURpYWxvZ1xyXG4gICAgICAgIHJlZj17Y29uZmlybVJlZn1cclxuICAgICAgICBvblN1Ym1pdD17b25EZWxldGV9XHJcbiAgICAgICAgdGl0bGU9e3QoJ2RlbGV0ZUl0ZW0nKX1cclxuICAgICAgICBjb250ZW50PXt0KCdtZXNzYWdlLmRlbGV0ZUNvbmZpcm0nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgaWQ9XCJwZXJtaXNzaW9uXCI+XHJcbiAgICAgIDxCdXR0b24gaGlkZGVuPXshY3JlYXRlUGVyfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5jcmVhdGVcIil9IHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPSdidG4tdG9wJz5cclxuICAgICAgICA8UGx1c0NpcmNsZU91dGxpbmVkIC8+XHJcbiAgICAgICAge3QoJ2NyZWF0ZScpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxCdXR0b24gZGFuZ2VyIG9uQ2xpY2s9eygpID0+IHsgaWYgKGNvbmZpcm1SZWYuY3VycmVudCkgY29uZmlybVJlZi5jdXJyZW50LnNob3coKSB9fSBjbGFzc05hbWU9J2J0bi10b3AnIGhpZGRlbj17aGlkZGVuRGVsZXRlQnRuIHx8ICFkZWxldGVQZXJ9PlxyXG4gICAgICAgIDxEZWxldGVPdXRsaW5lZCAvPlxyXG4gICAgICAgIHt0KCdkZWxldGUnKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIFxyXG4gICAgICA8R3JpZFRhYmxlXHJcbiAgICAgICAgcmVmPXt0YWJsZVJlZn1cclxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgIGRhdGE9e3Blcm1pc3Npb25zfVxyXG4gICAgICAgIHJvd1NlbGVjdGlvbj17e3NlbGVjdGVkUm93S2V5czogc2VsZWN0ZWRJZHMsIG9uQ2hhbmdlOiAoZGF0YTogYW55W10pID0+IG9uQ2hhbmdlU2VsZWN0aW9uKGRhdGEpIH19XHJcbiAgICAgICAgZmV0Y2hEYXRhPXtmZXRjaERhdGF9XHJcbiAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAvPlxyXG4gICAgICB7cmVuZGVyRGVsZXRlRGlhbG9nKCl9XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IHBlcm1pc3Npb25TZXJ2aWNlID0gbmV3IFVzZXJQZXJtaXNzaW9uU2VydmljZShjdHgpXHJcbiAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZmlsdGVyczogW10sXHJcbiAgICBzb3J0aW5nOiBbXVxyXG4gIH1cclxuICBsZXQgcXVlcnkgPSBjdHgucXVlcnlcclxuICBsZXQgZmlsdGVycyA9IEdyaWRUYWJsZUhlbHBlci5nZXRPcHRpb25zKHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgbGV0IFtlcnJvciwgcGVybWlzc2lvbnNdOiBhbnlbXSA9IGF3YWl0IHRvKHBlcm1pc3Npb25TZXJ2aWNlLmluZGV4KGZpbHRlcnMpKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ3BhZ2VzJywgJ21lbnUnLCdlcnJvcnMnXSxcclxuICAgIGVycm9yOiBlcnJvcixcclxuICAgIHBlcm1pc3Npb25zOiB1c2VCYXNlSG9vay5nZXREYXRhKHBlcm1pc3Npb25zLCBcImRhdGFcIiwgW10pLFxyXG4gICAgdG90YWw6IHVzZUJhc2VIb29rLmdldERhdGEocGVybWlzc2lvbnMsIFwidG90YWxcIiwgMCksXHJcbiAgICBkZWZhdWx0UXVlcnk6IHtcclxuICAgICAgZmlsdGVyczogR3JpZFRhYmxlSGVscGVyLm1ha2VRdWVyeShmaWx0ZXJzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5JbmRleC5wZXJtaXNzaW9ucyA9IHtcclxuICBcInJvb3RcIjogXCJSXCJcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJpbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgeyBnZXRCcmVhZGNydW1icywgcm91dGUgYXMgbWFrZVVybCB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHsgSG9tZUZpbGxlZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiXHJcbmludGVyZmFjZSBSb3V0ZSB7XHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbn1cclxuXHJcbmNvbnN0IGJyZWFkQ3J1bWJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHJvdXRlciwgdCwgcmVkaXJlY3QgfSA9IHVzZUJhc2VIb29rKHsgbGFuZzogWydtZW51J10gfSlcclxuICAgIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWVcclxuICAgICAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXNcclxuICAgICAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICAgICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBicmVhZEN1bWJzID0gW11cclxuICAgIGNvbnN0IHJvdXRlTmFtZSA9IGdldFJvdXRlTmFtZSgpXHJcbiAgICBsZXQgcm91dGVzOiBSb3V0ZVtdID0gZ2V0QnJlYWRjcnVtYnMocm91dGVOYW1lKVxyXG4gICAgaWYgKHJvdXRlc1swXSAmJiByb3V0ZXNbMF0ubmFtZSAhPSBcImZyb250ZW5kLmFkbWluLmhvbWVcIikge1xyXG4gICAgICAgIHJvdXRlcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ2Zyb250ZW5kLmFkbWluLmhvbWUnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgbGlua1Byb3BzID0gbWFrZVVybChyb3V0ZS5uYW1lKVxyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgey4uLmxpbmtQcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+eyByb3V0ZS5uYW1lID09IFwiZnJvbnRlbmQuYWRtaW4uaG9tZVwiID8gPEhvbWVGaWxsZWQgLz4gOiB0KHJvdXRlLm5hbWUpIH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBicmVhZEN1bWJzLnB1c2goPEJyZWFkY3J1bWIuSXRlbSBrZXk9e3JvdXRlLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAge3Qocm91dGUubmFtZSl9XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYi5JdGVtPilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxCcmVhZGNydW1iPnticmVhZEN1bWJzfTwvQnJlYWRjcnVtYj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFkQ3J1bWJDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xyXG5cclxuY2xhc3MgQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNob3coZGF0YSA9IG51bGwpIHtcclxuICAgIGxldCB7IHRpdGxlLCBjb250ZW50IH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aXRsZSA9IHRpdGxlIHx8IFwiVGl0bGVcIlxyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJDb250ZW50XCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgIGNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgIG9uT2s6IHRoaXMub25TdWJtaXQsXHJcbiAgICAgIG9uQ2FuY2VsOiB0aGlzLm9uQ2FuY2VsLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25DYW5jZWwgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmICh0eXBlb2Ygb25DYW5jZWwgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICBvbkNhbmNlbCh0aGlzLnN0YXRlLmRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodHlwZW9mIG9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgYXdhaXQgb25TdWJtaXQodGhpcy5zdGF0ZS5kYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtRGlhbG9nOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICBpZihhY3Rpb24udHlwZSA9PT0gXCJzZXRTdG9yZVwiKXtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH1cclxuICAgIF8uc2V0KHN0YXRlLCBhY3Rpb24ucGF5bG9hZC5wYXRoLCBhY3Rpb24ucGF5bG9hZC52YWx1ZSlcclxuICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxuICByZXR1cm4gc3RhdGVcclxufVxyXG5cclxuLyogY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgc3RvcmU6IHN0b3JlUmVkdWNlclxyXG59KSAqL1xyXG5cclxuY29uc3Qgc2V0U3RvcmUgPSAocGF0aCwgdmFsdWUpID0+ICh7XHJcbiAgdHlwZTogJ3NldFN0b3JlJyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBwYXRoLFxyXG4gICAgdmFsdWVcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGluaXRTdGF0ZSA9IHt9LCBvcHRpb25zKSA9PiB7XHJcbiAgbGV0IGRldlRvb2xFeHRlbnNpb25zID0gKCFvcHRpb25zLmlzU2VydmVyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgOiB1bmRlZmluZWRcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdFN0YXRlLCBkZXZUb29sRXh0ZW5zaW9ucylcclxufVxyXG5leHBvcnQge1xyXG4gIG1ha2VTdG9yZSxcclxuICBzZXRTdG9yZVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuY29uc3QgeyBSYW5nZVBpY2tlciB9ID0gRGF0ZVBpY2tlcjtcclxuXHJcbmNsYXNzIEZpbHRlckRhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5nZXREYXRlcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlcyA9IChkYXRlU3RyaW5ncykgPT4ge1xyXG4gICAgICAgIGlmKCFkYXRlU3RyaW5ncykgZGF0ZVN0cmluZ3MgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIsIFtdKVxyXG4gICAgICAgIGlmICghZGF0ZVN0cmluZ3MpIHJldHVybiB7fVxyXG4gICAgICAgIGlmICghZGF0ZVN0cmluZ3NbMF0pIGRhdGVTdHJpbmdzWzBdID0gdW5kZWZpbmVkXHJcbiAgICAgICAgaWYoIWRhdGVTdHJpbmdzWzFdKSBkYXRlU3RyaW5nc1sxXSA9IHVuZGVmaW5lZFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGVTdHJpbmdzOiBkYXRlU3RyaW5ncyxcclxuICAgICAgICAgICAgZGF0ZXM6IFtcclxuICAgICAgICAgICAgICAgIGRhdGVTdHJpbmdzWzBdID8gbW9tZW50KGRhdGVTdHJpbmdzWzBdKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGRhdGVTdHJpbmdzWzFdID8gbW9tZW50KGRhdGVTdHJpbmdzWzFdKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UgPSAoZGF0ZXMsIGRhdGVTdHJpbmdzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGF0ZXMoZGF0ZVN0cmluZ3MpXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbGVhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRlU3RyaW5nczonJ30sICgpID0+IHt0aGlzLm9uU3VibWl0KCl9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY29sdW1uLCBjb25maXJtIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kYXRlU3RyaW5ncyAmJiB0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzBdICYmIHRoaXMuc3RhdGUuZGF0ZVN0cmluZ3NbMV0pIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCAnYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzBdKS5zdGFydE9mKFwiZGF5c1wiKS5hZGQoMTQsJ2gnKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCh0aGlzLnN0YXRlLmRhdGVTdHJpbmdzWzFdKS5lbmRPZihcImRheXNcIikuYWRkKDE0LCdoJykudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8UmFuZ2VQaWNrZXJcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgYWxsb3dFbXB0eT17dHJ1ZSwgdHJ1ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHRoaXMucmVmSW5wdXQgPSByZWZ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25QcmVzc0VudGVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjU2cHhcIiwgbWFyZ2luQm90dG9tOiA4LCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRGF0ZVBpY2tlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2VsZWN0LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgSW5wdXRHcm91cCA9IElucHV0Lkdyb3VwO1xyXG5cclxuY2xhc3MgRmlsdGVyRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWVzOiBfLmdldCh0aGlzLnByb3BzLmNvbHVtbixcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29sdW1uLmZpbHRlcmVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBfLmdldCh0aGlzLnByb3BzLmNvbHVtbixcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIiwgW10pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiB2YWx1ZXMgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWVzICYmIHRoaXMuc3RhdGUudmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycyA9IFt7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJ2luJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlc1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAvKiBmaWx0ZXJzID0gdGhpcy5zdGF0ZS52YWx1ZXMubWFwKHZhbHVlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJz0nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pKSAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyT3B0aW9ucygpIHtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5vcHRpb25zKSByZXR1cm5cclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gPE9wdGlvbiBrZXk9e29wdGlvbi52YWx1ZX0gdmFsdWU9e29wdGlvbi52YWx1ZX0gbGFiZWw9e29wdGlvbi5sYWJlbH0gPntvcHRpb24ubGFiZWx9PC9PcHRpb24+KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlybSwgY29sdW1uLCBvcHRpb25zLCBzZWFyY2hCdG5UZXh0LCBjbGVhckJ0blRleHQsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uRmlsdGVyUHJvcD1cImxhYmVsXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjUwcHgnLCBtYXJnaW5Cb3R0b206IDgsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG5cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3B0aW9ucygpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRHJvcGRvd24iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBTZWxlY3QsIElucHV0TnVtYmVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcblxyXG5jbGFzcyBGaWx0ZXJJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiKSxcclxuICAgICAgICBvcGVyYXRvcjogdGhpcy5wcm9wcy5vcGVyYXRvciB8fCBcImNvbnRhaW5zXCJcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICAgICAgaWYgKF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIikgIT0gXy5nZXQocHJldlByb3BzLmNvbHVtbiwgXCJmaWx0ZXJlZFZhbHVlWzBdLnZhbHVlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IF8uZ2V0KHRoaXMucHJvcHMuY29sdW1uLCBcImZpbHRlcmVkVmFsdWVbMF0udmFsdWVcIilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZVNlYXJjaCAhPSB0aGlzLnByb3BzLmNvbHVtbi52aXNpYmxlU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZVNlYXJjaCA9IHRoaXMucHJvcHMuY29sdW1uLnZpc2libGVTZWFyY2hcclxuICAgICAgICAgICAgdGhpcy5yZWZJbnB1dC5pbnB1dC5zZWxlY3QoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6Jyd9LCAoKSA9PiB7dGhpcy5vblN1Ym1pdCgpfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbHVtbiwgY29uZmlybSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiBjb2x1bW4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogdGhpcy5zdGF0ZS5vcGVyYXRvcixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpcm0oZmlsdGVycylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJPcGVyYXRvcigpIHtcclxuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzID0ge30sIGhpZGVPcGVyYXRvciwgb3BlcmF0b3IgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaGlkZU9wZXJhdG9yKSByZXR1cm5cclxuICAgICAgICBsZXQgb3BlcmF0b3JzID0gW1xyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImNvbnRhaW5zXCIsIGxhYmVsOiBtZXNzYWdlc1snY29udGFpbnMnXSB8fCBcIkNvbnRhaW5zXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCI9XCIsIGxhYmVsOiBtZXNzYWdlc1snZXF1YWwnXSB8fCBcIkVxdWFsc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic3RhcnRXaXRoc1wiLCBsYWJlbDogbWVzc2FnZXNbJ3N0YXJ0V2l0aHMnXSB8fCBcIlN0YXJ0V2l0aHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImVuZFdpdGhzXCIsIGxhYmVsOiBtZXNzYWdlc1snZW5kV2l0aHMnXSB8fCBcIkVuZFdpdGhzXCIgfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIG9wZXJhdG9ycyA9IFtcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPVwiLCBsYWJlbDogJz0nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIj5cIiwgbGFiZWw6ICc+JyB9LFxyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogXCI8XCIsIGxhYmVsOiAnPCcgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPj1cIiwgbGFiZWw6ICc+PScgfSxcclxuICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiPD1cIiwgbGFiZWw6ICc8PScgfVxyXG5cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWZhdWx0T3BlcmF0b3IgPSBvcGVyYXRvciB8fCBvcGVyYXRvcnNbMF0udmFsdWVcclxuXHJcbiAgICAgICAgcmV0dXJuIDxTZWxlY3QgZGVmYXVsdFZhbHVlPXtkZWZhdWx0T3BlcmF0b3J9IHN0eWxlPXt7IHdpZHRoOiA5MCB9fSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZXJhdG9yOiB2YWx1ZSB9KX0+XHJcbiAgICAgICAgICAgIHtvcGVyYXRvcnMubWFwKG9wZXJhdG9yID0+IDxPcHRpb24gdmFsdWU9e29wZXJhdG9yLnZhbHVlfSBrZXk9e29wZXJhdG9yLnZhbHVlfT57b3BlcmF0b3IubGFiZWx9PC9PcHRpb24+KX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIGhpZGVPcGVyYXRvciwgdHlwZSwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGxldCBDb21wb25lbnQgPSBJbnB1dFxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJudW1iZXJcIikgQ29tcG9uZW50ID0gSW5wdXROdW1iZXJcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB7Li4ub3RoZXJQcm9wc31cclxuICAgICAgICAgICAgICAgIGFkZG9uQmVmb3JlPXt0aGlzLnJlbmRlck9wZXJhdG9yKCl9XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnJlZklucHV0ID0gcmVmfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIG1hcmdpbkJvdHRvbTogOCwgZGlzcGxheTogJ2Jsb2NrJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVySW5wdXQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJhZGlvLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCB7IEdyb3VwIH0gPSBSYWRpbztcclxuXHJcbmNsYXNzIEZpbHRlckNoZWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNvbHVtbi5maWx0ZXJlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoZWNrZWQgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgICAgIGlmKGNoZWNrZWQgPT0gdW5kZWZpbmVkKSBjaGVja2VkID0gXy5nZXQodGhpcy5wcm9wcy5jb2x1bW4sIFwiZmlsdGVyZWRWYWx1ZVswXS52YWx1ZVwiLCB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q2hlY2tlZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6dW5kZWZpbmVkfSwgKCkgPT4ge3RoaXMub25TdWJtaXQoKX0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb2x1bW4sIGNvbmZpcm0gfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNoZWNrZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IHRoaXMucHJvcHMub3BlcmF0b3IgfHwgJz0nLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY2hlY2tlZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maXJtKGZpbHRlcnMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maXJtLCBjb2x1bW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA4IH19PlxyXG4gICAgICAgICAgICA8R3JvdXBcclxuICAgICAgICAgICAgICAgIHsuLi5vdGhlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4gdGhpcy5yZWZJbnB1dCA9IHJlZn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbHVtbi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiwgbWFyZ2luQm90dG9tOiA4LCB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xlYXJ9IGRhbmdlciA+Q2xlYXI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ2hlY2siLCJpbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBhZGRRdWVyeSB9IGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIaWdobGlnaHRlciBmcm9tIFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCI7XHJcbmltcG9ydCB7IEJhc2U2NCB9IGZyb20gJ2pzLWJhc2U2NCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IEZpbHRlcklucHV0IGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9JbnB1dCdcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0RhdGVQaWNrZXInXHJcbmltcG9ydCBSYWRpbyBmcm9tICcuL1NlYXJjaENvbXBvbmVudHMvUmFkaW9CdXR0b24nXHJcblxyXG5jbGFzcyBHcmlkVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGJvcmRlcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzaXplOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgaGFzRGF0YTogdHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWxvYWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHt9XHJcbiAgICAgICAgdGhpcy50b3RhbCA9IHRoaXMucHJvcHMudG90YWwgfHwgMTAwXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUYWJsZUNoYW5nZSA9IHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2jhu59pIHThuqFvIGPDoWMgb3B0aW9ucyB04burIHF1ZXJ5IHRyw6puIHVybFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnlcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IEdyaWRUYWJsZS5nZXREYXRhRnJvbVF1ZXJ5KHF1ZXJ5LCB0aGlzLnByb3BzKVxyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHtcclxuICAgICAgICAgICAgcGFnZVNpemU6IGRlZmF1bHRPcHRpb25zLnBhZ2VTaXplIHx8IDUwLFxyXG4gICAgICAgICAgICBwYWdlOiBkZWZhdWx0T3B0aW9ucy5wYWdlIHx8IDAsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucztcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9uVG9Db2x1bW5zKGRlZmF1bHRPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgbOG6oWkgZOG7ryBsaeG7h3UgdOG7qyBxdWVyeSDEkeG7lWkgc2FuZyDEkcO6bmcgZm9ybWF0IGPhu6dhIGNvbHVtbiB0cm9uZyBhbnRkXHJcbiAgICAgKi9cclxuICAgIGRlZmF1bHRPcHRpb25Ub0NvbHVtbnMgPSAoZGVmYXVsdE9wdGlvbnMpID0+IHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgIC8vc2V0IGZpZWxkXHJcbiAgICAgICAgICAgIGlmKCFjb2x1bW4uZmllbGQpIGNvbHVtbi5maWVsZCA9IGNvbHVtbi5rZXlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBzb3J0ID0gZGVmYXVsdE9wdGlvbnMuc29ydGluZy5maW5kKGl0ZW0gPT4gaXRlbS5maWVsZCA9PT0gY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB7IGRpcmVjdGlvbiB9ID0gc29ydDtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5zb3J0T3JkZXIgPSBkaXJlY3Rpb24gPT09IFwiYXNjXCIgPyAnYXNjZW5kJyA6ICdkZXNjZW5kJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmlsdGVycyA9IGRlZmF1bHRPcHRpb25zLmZpbHRlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5maWVsZCA9PT0gY29sdW1uLmZpZWxkKTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRWYWx1ZSA9IFsuLi5maWx0ZXJzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyZWRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgZGVsZXRlIGNvbHVtbi5maWx0ZXJhYmxlO1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0geyAuLi5jb2x1bW4sIC4uLnRoaXMuZ2V0Q29sdW1uU2VhcmNoUHJvcHMoY29sdW1uLCdpbnB1dCcpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlckRhdGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyYWJsZTtcclxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IHsgLi4uY29sdW1uLCAuLi50aGlzLmdldENvbHVtblNlYXJjaFByb3BzKGNvbHVtbiwnZGF0ZScpIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlckNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4gPSB7IC4uLmNvbHVtbiwgLi4udGhpcy5nZXRDb2x1bW5TZWFyY2hQcm9wcyhjb2x1bW4sJ2NoZWNrJykgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDogIXRoaXMuc3RhdGUucmVsb2FkfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgICAvL3VwZGF0ZSBkYXRhIHRyb25nIHRyxrDhu51uZyBo4bujcCDEkeG7lWkgdOG7qyBwcm9wcyBiw6puIG5nb8OgaVxyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcmV2UHJvcHMuZGF0YSkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkpICE9IEpTT04uc3RyaW5naWZ5KHByZXZQcm9wcy5yb3V0ZXIucXVlcnkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZWxvYWQ6ICF0aGlzLnN0YXRlLnJlbG9hZH0pIC8vY2jhu4kgY+G6p24gcmVuZGVyIGzhuqFpIHZpZXdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1ha2VRdWVyeShvcHRpb25zKSB7XHJcbiAgICAgICAgY29uc3QgeyBmaWx0ZXJzID0gW10sIHNvcnRpbmcgPSBbXSwgcGFnZVNpemUsIHBhZ2UgfSA9IG9wdGlvbnNcclxuICAgICAgICBsZXQgcXVlcnlPYmogPSB7XHJcbiAgICAgICAgICAgIGY6IFtdLFxyXG4gICAgICAgICAgICBzOiB7fSxcclxuICAgICAgICAgICAgcHM6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICBwOiBwYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWx0ZXIgb2YgZmlsdGVycykge1xyXG4gICAgICAgICAgICBxdWVyeU9iai5mLnB1c2goW2ZpbHRlci5maWVsZCwgZmlsdGVyLm9wZXJhdG9yIHx8ICdjb250YWlucycsIGZpbHRlci52YWx1ZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHNvcnQgb2Ygc29ydGluZykge1xyXG4gICAgICAgICAgICBxdWVyeU9iai5zW3NvcnQuZmllbGRdID0gc29ydC5kaXJlY3Rpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEJhc2U2NC5lbmNvZGUoSlNPTi5zdHJpbmdpZnkocXVlcnlPYmopKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2hhaSBiw6FvIGPDoWMgZnVuY3Rpb24gY2hvIGRyb3Bkb3duIHNlYXJjaCBib3hcclxuICAgICAqL1xyXG4gICAgZ2V0Q29sdW1uU2VhcmNoUHJvcHMgPSAoY29sdW1uLHR5cGUpID0+IHtcclxuICAgICAgICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEcm9wZG93bjogKHsgY29uZmlybSwgc2V0U2VsZWN0ZWRLZXlzIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25maXJtRm5jID0gKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q29sdW1uID0gdGhpcy5jb2x1bW5zLmZpbmQoYyA9PiBjLmRhdGFJbmRleCA9PT0gY29sdW1uLmRhdGFJbmRleClcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEtleXModmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLnJlbmRlckZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ucmVuZGVyRmlsdGVyKHsgY29sdW1uLCBjb25maXJtOiBjb25maXJtRm5jLCByZWYgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZpbHRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnZGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybT17Y29uZmlybUZuY31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnY2hlY2snKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtPXtjb25maXJtRm5jfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVySWNvbjogZmlsdGVyZWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7IGNvbG9yOiBmaWx0ZXJlZCA/IFwiIzE4OTBmZlwiIDogdW5kZWZpbmVkIH19IC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB2aXNpYmxlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdmlzaWJsZSAmJiBjb2x1bW4udmlzaWJsZVNlYXJjaCAhPSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnZpc2libGVTZWFyY2ggPSB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50Lm9uU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sdW1uLnZpc2libGVTZWFyY2ggPSB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHsgcGFnZVNpemUsIHBhZ2UgfSA9IHRoaXMucGFnaW5hdGlvblxyXG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlVGFibGVDaGFuZ2UoeyBwYWdlU2l6ZSwgY3VycmVudDogcGFnZSB9LCB7fSwge30pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxvYWQgVGFibGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmZldGNoRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmJ1aWxkRmV0Y2hEYXRhKClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IEdyaWRUYWJsZS5tYWtlUXVlcnkocGFyYW1zKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJhbXMsIHF1ZXJ5T3B0aW9ucylcclxuICAgICAgICAgICAgYWRkUXVlcnkoeyBmaWx0ZXJzOiBxdWVyeU9wdGlvbnMgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnByb3BzLmZldGNoRGF0YShwYXJhbXMpIHx8IHt9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQudG90YWwgIT0gdW5kZWZpbmVkKSB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IF8uZ2V0KHJlc3VsdCwgJ2RhdGEnLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZpbHRlciB04burIHRhYmxlIHbDoG8gYmnhur9uIHRoaXMuY29sdW1ucyDEkeG7gyBjb250cm9sbGVkXHJcbiAgICAgKi9cclxuICAgIHNldEZpbHRlcnNUb0NvbHVtbnMgPSAoZmlsdGVycyA9IHt9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyID0gZmlsdGVyc1tjb2x1bW4uZmllbGRdO1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uZmlsdGVyZWRWYWx1ZSA9IGZpbHRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb2x1bW4uZmlsdGVyZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U29ydGVyVG9Db2x1bW5zID0gKHNvcnRlciA9IHt9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmtleSA9PSBzb3J0ZXIuY29sdW1uS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4uc29ydE9yZGVyID0gc29ydGVyLm9yZGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbHVtbi5zb3J0T3JkZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0UGFnaW5hdGlvbiA9IChwYWdpbmF0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0ge1xyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogcGFnaW5hdGlvbi5jdXJyZW50IC0gMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlVGFibGVDaGFuZ2UgPSBhc3luYyAocGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJzVG9Db2x1bW5zKGZpbHRlcnMpO1xyXG4gICAgICAgIHRoaXMuc2V0U29ydGVyVG9Db2x1bW5zKHNvcnRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uKHBhZ2luYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldERhdGFGcm9tUXVlcnkocXVlcnkgPSB7fSwgZGVmYXVsdE9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHF1ZXJ5LmZpbHRlcnMgfHwge31cclxuICAgICAgICBpZiAodHlwZW9mIHF1ZXJ5LmZpbHRlcnMgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5T2JqID0gSlNPTi5wYXJzZShCYXNlNjQuZGVjb2RlKHF1ZXJ5LmZpbHRlcnMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZpbHRlcnMgcGFyYW1zIGludmFsaWQgZm9ybWF0LmApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFxdWVyeU9iaikgcmV0dXJuIHt9XHJcbiAgICAgICAgbGV0IGZpbHRlcnMgPSBxdWVyeU9iai5mIHx8IFtdXHJcbiAgICAgICAgbGV0IHNvcnRpbmcgPSBxdWVyeU9iai5zIHx8IHt9XHJcbiAgICAgICAgbGV0IHF1ZXJ5T3V0ID0ge1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiBkZWZhdWx0T3B0aW9ucy5maWx0ZXJzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiBkZWZhdWx0T3B0aW9ucy5zb3J0aW5nIHx8IFtdLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcXVlcnlPYmoucHMgfHwgZGVmYXVsdE9wdGlvbnMucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5T2JqLnAgfHwgZGVmYXVsdE9wdGlvbnMucGFnZVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGZvciAobGV0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5T3V0LmZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogZmlsdGVyWzBdLFxyXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6IGZpbHRlclsxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWx0ZXJbMl1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gc29ydGluZykge1xyXG4gICAgICAgICAgICBxdWVyeU91dC5zb3J0aW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzb3J0aW5nW2ZpZWxkXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5T3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRPcHRpb25zKHF1ZXJ5LCBkZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgIGlmIChxdWVyeSAmJiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoID4gMCkgcmV0dXJuIHRoaXMuZ2V0RGF0YUZyb21RdWVyeShxdWVyeSwgZGVmYXVsdE9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZCBkYXRhIHThu6sgdGhpcy5jb2x1bW5zIMSR4buDIGto4bubcCB24bubaSBmb3JtYXQgdHLDqm4gc2VydmVyXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkRmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdLFxyXG4gICAgICAgICAgICBzb3J0aW5nOiBbXSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdpbmF0aW9uLnBhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sdW1ucy5tYXAoY29sdW1uID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbi5maWx0ZXJlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuZmlsdGVycyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMuZmlsdGVycyxcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW4uZmlsdGVyZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uc29ydE9yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc29ydGluZy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogY29sdW1uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogY29sdW1uLnNvcnRPcmRlciA9PSBcImFzY2VuZFwiID8gXCJhc2NcIiA6IFwiZGVzY1wiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtc1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYWdpbmF0aW9uID0gKHBhZ2luYXRpb24gPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcGFnZVNpemUsIHBhZ2UgfSA9IHRoaXMucGFnaW5hdGlvbjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wYWdpbmF0aW9uLFxyXG4gICAgICAgICAgICB0b3RhbDogdGhpcy50b3RhbCxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUgfHwgNTAsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IHBhZ2UgKyAxLFxyXG4gICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplT3B0aW9uczogWycyJywgJzEwJywgJzUwJywgJzEwMCcsICcyMDAnLCAnNTAwJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaGFzRGF0YSA9IHRydWUsIGRhdGEgPSBbXSwgZWxsaXBzaXMsIGZldGNoRGF0YSwgY29sdW1ucywgcGFnaW5hdGlvbiwgLi4ub3RoZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuaW5pdGlhbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlTGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiA5MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvRmlyc3RSb3dPbkNoYW5nZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm90aGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17dGhpcy5jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2hhc0RhdGEgPyB0aGlzLmRhdGEubWFwKHJvdyA9PiAoeyAuLi5yb3csIGtleTogcm93LmlkIH0pKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGFibGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMuZ2V0UGFnaW5hdGlvbihwYWdpbmF0aW9uKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRUYWJsZSIsImltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgR3JpZFRhYmxlV2l0aFJvdXRlciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBhbnksIHJlZjogYW55KSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRyZXR1cm4gPFRhYmxlIHJlZj17cmVmfSByb3V0ZXI9e3JvdXRlcn0gey4uLnByb3BzfSAvPlxyXG59KSBhcyBhbnlcclxuXHJcbkdyaWRUYWJsZVdpdGhSb3V0ZXIuZ2V0T3B0aW9ucyA9IFRhYmxlLmdldE9wdGlvbnNcclxuR3JpZFRhYmxlV2l0aFJvdXRlci5nZXREYXRhRnJvbVF1ZXJ5ID0gVGFibGUuZ2V0RGF0YUZyb21RdWVyeVxyXG5HcmlkVGFibGVXaXRoUm91dGVyLm1ha2VRdWVyeSA9IFRhYmxlLm1ha2VRdWVyeVxyXG5cclxuY29uc3QgR3JpZFRhYmxlSGVscGVyID0ge1xyXG4gICAgZ2V0T3B0aW9uczogVGFibGUuZ2V0T3B0aW9ucyxcclxuICAgIGdldERhdGFGcm9tUXVlcnk6IFRhYmxlLmdldERhdGFGcm9tUXVlcnksXHJcbiAgICBtYWtlUXVlcnk6IFRhYmxlLm1ha2VRdWVyeVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdyaWRUYWJsZVdpdGhSb3V0ZXJcclxuZXhwb3J0IHtcclxuICAgIEdyaWRUYWJsZUhlbHBlclxyXG59IiwiLy8gaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnXHJcbmltcG9ydCBUYWJsZSwge0dyaWRUYWJsZUhlbHBlcn0gZnJvbSAnLi9UYWJsZVRzeCdcclxuaW1wb3J0IEZpbHRlcklucHV0IGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9JbnB1dCdcclxuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gJy4vU2VhcmNoQ29tcG9uZW50cy9Ecm9wZG93bidcclxuaW1wb3J0IEZpbHRlckRhdGVQaWNrZXIgZnJvbSAnLi9TZWFyY2hDb21wb25lbnRzL0RhdGVQaWNrZXInXHJcblxyXG5leHBvcnQge1xyXG4gICAgVGFibGUgYXMgR3JpZFRhYmxlLFxyXG4gICAgR3JpZFRhYmxlSGVscGVyLFxyXG4gICAgRmlsdGVySW5wdXQsXHJcbiAgICBGaWx0ZXJEcm9wZG93bixcclxuICAgIEZpbHRlckRhdGVQaWNrZXJcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICd0aGVtZXMvbW9kdWxlcy9JMThuJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0U3RvcmUgYXMgc2V0U3RvcmVBY3Rpb24gfSBmcm9tICd0aGVtZXMvY29tcG9uZW50cy9TdG9yZSdcclxuaW1wb3J0IHJvdXRlIGZyb20gJ3RoZW1lcy9yb3V0ZSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5pbnRlcmZhY2UgQmFzZUJvb2sge1xyXG4gICAgdXNlU2VsZWN0b3I6IEZ1bmN0aW9uLFxyXG4gICAgcm91dGVyOiBhbnksXHJcbiAgICB0OiBGdW5jdGlvbixcclxuICAgIHNldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIGdldFN0b3JlOiBGdW5jdGlvbixcclxuICAgIHJlZGlyZWN0OiBGdW5jdGlvbixcclxuICAgIGdldERhdGE6IEZ1bmN0aW9uLFxyXG4gICAgbm90aWZ5OiBGdW5jdGlvbixcclxuICAgIGdldEF1dGg6IEZ1bmN0aW9uXHJcbiAgICBnZXRDb29raWVzOiBGdW5jdGlvbixcclxuICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWc6IEZ1bmN0aW9uXHJcbn1cclxuY29uc3QgdXNlQmFzZUhvb2tzID0gICh7IGxhbmcgPSBbJ2NvbW1vbicsICdwYWdlcycsICdlcnJvcnMnXSx9IDogeyBsYW5nPzogc3RyaW5nW10sIH0gPSB7fSk6IEJhc2VCb29rID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBJMThuID0gdXNlVHJhbnNsYXRpb24obGFuZylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBzZXRTdG9yZSA9IGFzeW5jIChwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzZXRTdG9yZUFjdGlvbihwYXRoLCB2YWx1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RvcmUgPSAocGF0aDogc3RyaW5nKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IF8uZ2V0KHN0YXRlLCBwYXRoKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWRpcmVjdCA9IChyb3V0ZU5hbWU6IHN0cmluZywgcXVlcnk6IHN0cmluZywgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IG5leHRSb3V0ZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSByb3V0ZShyb3V0ZU5hbWUsIHF1ZXJ5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuZXh0Um91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiByb3V0ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBhczogcm91dGVOYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMsIHtcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXREYXRhID0gKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55ID0gdW5kZWZpbmVkKTogYW55ID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJywgdHlwZTogXCJzdWNjZXNzXCIgfCBcImVycm9yXCIgfCBcIndhcm5pbmdcIiA9IFwic3VjY2Vzc1wiKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNCAvL3NlY29uZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEF1dGggPSAoKTogYW55ID0+IHtcclxuICAgICAgICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRDb29raWVzID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5jb29raWVzKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHVibGljUnVudGltZUNvbmZpZyA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucHVibGljUnVudGltZUNvbmZpZylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVNlbGVjdG9yLFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICB0OiBJMThuLnQsXHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmUsXHJcbiAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgZ2V0RGF0YSxcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgZ2V0QXV0aCxcclxuICAgICAgICBnZXRDb29raWVzLFxyXG4gICAgICAgIGdldFB1YmxpY1J1bnRpbWVDb25maWdcclxuICAgIH07XHJcbn1cclxuXHJcbnVzZUJhc2VIb29rcy5nZXREYXRhID0gIChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IGFueSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBfLmdldChvYmosIHBhdGgsIGRlZmF1bHRWYWx1ZSlcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQmFzZUhvb2tzIiwiaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJy4vQmFzZUhvb2tzJ1xyXG5pbXBvcnQge2NoZWNrUGVybWlzc2lvbn0gZnJvbSAnLi4vdXRpbHMvUGVybWlzc2lvbidcclxuXHJcbiAgXHJcbmNvbnN0IFBlcm1pc3Npb25Ib29rID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRBdXRoIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9XHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbnMgPSBhdXRoLnBlcm1pc3Npb25zIHx8IHt9XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlclBlcm1pc3Npb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJQZXJtaXNzaW9uc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfY2hlY2tQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25zOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tQZXJtaXNzaW9uKHBlcm1pc3Npb25zLCB1c2VyUGVybWlzc2lvbnMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXJQZXJtaXNzaW9uLFxyXG4gICAgICAgIGNoZWNrUGVybWlzc2lvbjogX2NoZWNrUGVybWlzc2lvblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJtaXNzaW9uSG9vayIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgRHJhd2VyLCBCYWNrVG9wLCBSb3csIENvbCwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9hZG1pbi9TaWRlYmFyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vYWRtaW4vSGVhZGVyXCI7XHJcbmNvbnN0IFRIRU1FID0gXCJsaWdodFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtYiBmcm9tIFwidGhlbWVzL2NvbXBvbmVudHMvQnJlYWRjdW1iXCI7XHJcbmltcG9ydCB7IFBsdXNDaXJjbGVPdXRsaW5lZCwgRGVsZXRlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHVzZUJhc2VIb29rcyBmcm9tIFwidGhlbWVzL2hvb2tzL0Jhc2VIb29rc1wiO1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tIFwidGhlbWVzL19yb3V0ZXMuanNvblwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG5jb25zdCB7IFRpdGxlLCBUZXh0IH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY29uc3QgeyBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEFkbWluID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBjb25zdCB7IHJvdXRlciwgdCB9ID0gdXNlQmFzZUhvb2tzKCk7XHJcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGdldFB1YmxpY1J1bnRpbWVDb25maWcgfSA9IHVzZUJhc2VIb29rcygpO1xyXG4gIGNvbnN0IHB1YmxpY1J1bnRpbWVDb25maWcgPSBnZXRQdWJsaWNSdW50aW1lQ29uZmlnKCk7XHJcblxyXG4gIGNvbnN0IG9uQ29sbGFwc2VDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHNldENvbGxhcHNlZCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCB1cGRhdGVTaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA5OTI7XHJcbiAgICBzZXRJc01vYmlsZShtb2JpbGUpO1xyXG4gICAgc2V0Q29sbGFwc2VkKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgICB1cGRhdGVTaXplKCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlU2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRSb3V0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZVBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICBjb25zdCByb3V0ZURhdGE6IGFueSA9IF9yb3V0ZXM7XHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXTtcclxuICAgICAgaWYgKCFyb3V0ZUVsZW1lbnQuYWN0aW9uKSBjb250aW51ZTtcclxuICAgICAgaWYgKHJvdXRlRWxlbWVudC5hY3Rpb24uc3Vic3RyKDUpID09PSByb3V0ZVBhdGgpIHJldHVybiByb3V0ZU5hbWU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKSB8fCBcIlwiO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJvdXRlTmFtZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPntwdWJsaWNSdW50aW1lQ29uZmlnLlNJVEVfTkFNRX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cHVibGljUnVudGltZUNvbmZpZy5USVRMRX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuREVTQ1JJUFRJT059Lz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3B1YmxpY1J1bnRpbWVDb25maWcuTE9HT30gLz5cclxuICAgICAgPGxpbmsgcmVsPVwibnVyc2luZy1ob21lLWljb25cIiBocmVmPXtwdWJsaWNSdW50aW1lQ29uZmlnLkxPR099PjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXYgaWQ9XCJhZG1pblwiPlxyXG4gICAgICA8TGF5b3V0IGhhc1NpZGVyPXt0cnVlfT5cclxuICAgICAgICB7aXNNb2JpbGUgPyAoXHJcbiAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIG1hc2tDbG9zYWJsZVxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc3Ryb3lPbkNsb3NlPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKGZhbHNlKX1cclxuICAgICAgICAgICAgdmlzaWJsZT17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgYm9keVN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgIGNvbGxhcHNlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgICAgaXNNb2JpbGU9e2lzTW9iaWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlPXtvbkNvbGxhcHNlQ2hhbmdlfVxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGlzTW9iaWxlPXtpc01vYmlsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJwcmltYXJ5TGF5b3V0XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtgbWFpbi1sYXlvdXQgJHtjb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPEhlYWRlciBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZUNoYW5nZT17b25Db2xsYXBzZUNoYW5nZX0gZGlzYWJsZWRTZWFyY2g9e3Byb3BzLmRpc2FibGVkU2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3VtYnNcIj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGxnPXsxMn0geGw9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBwYWdlczoke3JvdXRlTmFtZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJvbnRlbmQuYWRtaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfS50aXRsZWBcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHBhZ2VzOiR7cm91dGVOYW1lLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcm9udGVuZC5hZG1pbi5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9LmRlc2NyaXB0aW9uYFxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbGc9ezEyfSB4bD17OX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWRjdW1iLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+wqkge21vbWVudCgpLnllYXIoKX0gSGFjdGVjaDwvRm9vdGVyPlxyXG4gICAgICAgICAgPEJhY2tUb3BcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJhY2tUb3BcIn1cclxuICAgICAgICAgICAgdGFyZ2V0PXsoKSA9PlxyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpbWFyeUxheW91dFwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4pfTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgY3JlYXRlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51LCBMYXlvdXQsIEF2YXRhciwgQnV0dG9uLCBJbnB1dCwgUG9wb3ZlciwgUm93LCBDb2wsIEF1dG9Db21wbGV0ZSwgRm9ybSwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgXHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLCBNZW51Rm9sZE91dGxpbmVkLCBQb3dlcm9mZk91dGxpbmVkLCBcclxuICBTZXR0aW5nRmlsbGVkLCBVc2VyT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAndGhlbWVzL2NvbXBvbmVudHMvRGlhbG9ncy9Db25maXJtRGlhbG9nJztcclxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gIFwidGhlbWVzL3NlcnZpY2VzL2FwaS9Vc2VyU2VydmljZVwiXHJcbmltcG9ydCBQYXRpZW50U2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvUGF0aWVudFNlcnZpY2VcIlxyXG5pbXBvcnQgQmVkU2VydmljZSBmcm9tICBcInRoZW1lcy9zZXJ2aWNlcy9hcGkvQmVkU2VydmljZVwiXHJcbmltcG9ydCB1c2VCYXNlSG9vayBmcm9tICd0aGVtZXMvaG9va3MvQmFzZUhvb2tzJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5pbXBvcnQgdG8gZnJvbSAnYXdhaXQtdG8tanMnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnVcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0XHJcblxyXG5jb25zdCBBZG1pbkhlYWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyB0LCBub3RpZnksIHJlZGlyZWN0LCBzZXRTdG9yZSwgZ2V0QXV0aCwgZ2V0U3RvcmUsIGdldENvb2tpZXMsIGdldERhdGEgIH0gPSB1c2VCYXNlSG9vaygpO1xyXG4gIGNvbnN0IHVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKClcclxuICBjb25zdCBwYXRpZW50U2VydmljZSA9IG5ldyBQYXRpZW50U2VydmljZSgpXHJcbiAgY29uc3QgYmVkU2VydmljZSA9IG5ldyBCZWRTZXJ2aWNlKClcclxuICBjb25zdCBbcGF0aWVudHMsIHNldFBhdGllbnRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtiZWRzLCBzZXRCZWRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKSAvLyBjaGFuZ2UgcGFzc3dvcmRcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpIHx8IHt9O1xyXG4gIGNvbnN0IGNvb2tpZU9iamVjdCA9IGdldENvb2tpZXMoKVxyXG4gIGNvbnN0IGNvbmZpcm1SZWYgPSBjcmVhdGVSZWY8Q29uZmlybURpYWxvZz4oKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWVudSA9IChlOiBhbnkpID0+IHsgfVxyXG4gIGNvbnN0IHJlZGlyZWN0TG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoY29va2llT2JqZWN0KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3Rva2VuJywgeyBwYXRoOiAnLyd9KVxyXG4gICAgYXdhaXQgY29va2llcy5yZW1vdmUoJ3VzZXInLCB7IHBhdGg6ICcvJ30pXHJcbiAgICByZXR1cm4gYXdhaXQgcmVkaXJlY3QoJ2Zyb250ZW5kLmFkbWluLmxvZ2luJylcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghY29va2llT2JqZWN0LnRva2VuIHx8ICFjb29raWVPYmplY3QudXNlcikge1xyXG4gICAgICByZWRpcmVjdCgnZnJvbnRlbmQuYWRtaW4ubG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGxldCBvcHRpb25zUGF0aWVudHM6IGFueSA9IFtdXHJcbiAgbGV0IG9wdGlvbnNCZWRzOiBhbnkgPSBbXVxyXG4gIGxldCBvcHRpb25zVXNlcnM6IGFueSA9IFtdXHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2ggPSBhc3luYyAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgbGV0IGZpbHRlclBhdGllbnRzID0ge1xyXG4gICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgIGZpZWxkOiBcImZ1bGxuYW1lXCIsXHJcbiAgICAgICAgb3BlcmF0b3I6IFwiY29udGFpbnNcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHNvcnRpbmc6IFtdLFxyXG4gICAgICBwYWdlU2l6ZTogNSxcclxuICAgICAgcGFnZTogMFxyXG4gICAgfVxyXG4gICAgbGV0IGZpbHRlckJlZHMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwicm9vbUNvZGVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgZmlsdGVyVXNlcnMgPSB7XHJcbiAgICAgIGZpbHRlcnM6IFt7XHJcbiAgICAgICAgZmllbGQ6IFwiZnVsbG5hbWVcIixcclxuICAgICAgICBvcGVyYXRvcjogXCJjb250YWluc1wiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgc29ydGluZzogW10sXHJcbiAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICBwYWdlOiAwXHJcbiAgICB9XHJcbiAgICBsZXQgW2VyclVzZXJzLCB1c2Vyc106IGFueVtdID0gYXdhaXQgdG8odXNlclNlcnZpY2UuaW5kZXgoZmlsdGVyVXNlcnMpKVxyXG4gICAgbGV0IGRhdGFVc2VycyA9IF8uZ2V0KHVzZXJzLCBcImRhdGFcIiwgW10pXHJcbiAgICBpZihkYXRhVXNlcnMubGVuZ3RoKXtcclxuICAgICAgc2V0VXNlcnMoZGF0YVVzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBbZXJyUGF0aWVudHMsIHBhdGllbnRzXTogYW55W10gPSBhd2FpdCB0byhwYXRpZW50U2VydmljZS5pbmRleChmaWx0ZXJQYXRpZW50cykpXHJcbiAgICBsZXQgZGF0YVBhdGllbnRzID0gXy5nZXQocGF0aWVudHMsIFwiZGF0YVwiLCBbXSlcclxuICAgIGlmKGRhdGFQYXRpZW50cy5sZW5ndGgpe1xyXG4gICAgICBzZXRQYXRpZW50cyhkYXRhUGF0aWVudHMpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IFtlcnJCZWRzLCBiZWRzXTogYW55W10gPSBhd2FpdCB0byhiZWRTZXJ2aWNlLmluZGV4KGZpbHRlckJlZHMpKVxyXG4gICAgbGV0IGRhdGFCZWRzID0gXy5nZXQoYmVkcywgXCJkYXRhXCIsIFtdKVxyXG4gICAgaWYoZGF0YUJlZHMubGVuZ3RoKXtcclxuICAgICAgc2V0QmVkcyhkYXRhQmVkcylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICBjb25zdCBvbkJsdXJTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VycyhbXSlcclxuICAgIHNldEJlZHMoW10pXHJcbiAgICBzZXRQYXRpZW50cyhbXSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcmVuZGVyQ29uZmlybURpYWxvZyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb25maXJtRGlhbG9nXHJcbiAgICAgICAgcmVmPXtjb25maXJtUmVmfVxyXG4gICAgICAgIG9uU3VibWl0PXtyZWRpcmVjdExvZ2lufVxyXG4gICAgICAgIHRpdGxlPXt0KCdzaWdub3V0Jyl9XHJcbiAgICAgICAgY29udGVudD17dCgnbWVzc2FnZS5zaWdub3V0Q29uZmlybScpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IGFzeW5jIChkYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpXHJcbiAgICBsZXQgdmFsdWVzID0geyBpZDogYXV0aC5pZCwgb2xkUGFzc3dvcmQ6IGRhdGEub2xkUGFzc3dvcmQsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH1cclxuXHJcbiAgICBsZXQgW2Vycm9yLCByZXN1bHRdOiBhbnlbXSA9IGF3YWl0IHRvKHVzZXJTZXJ2aWNlLnVzZXJVcGRhdGVQYXNzd29yZCh2YWx1ZXMpKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbm90aWZ5KHQoYGVycm9yczoke2Vycm9yLmNvZGV9YCksIHQoZXJyb3IubWVzc2FnZSksICdlcnJvcicpXHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KHQoXCJtZXNzYWdlLnJlY29yZFVwZGF0ZWRcIikpXHJcbiAgfVxyXG5cclxuICAvL3ZhbGlkYXRlIGlucHV0IHBhc3N3b3JkXHJcbiAgY29uc3QgdmFsaWRhdG9yUGFzc3dvcmQgPSAoeyBnZXRGaWVsZFZhbHVlIH06IHsgZ2V0RmllbGRWYWx1ZTogRnVuY3Rpb24gfSkgPT4gKHtcclxuICAgIHZhbGlkYXRvcjogKHJ1bGU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0KCdmb3JtLnJlUGFzc3dvcmQnKSk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2hhbmdlUGFzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm1DaGFuZ2VQYXNzd29yZF0gPSBGb3JtLnVzZUZvcm0oKVxyXG4gICAgcmV0dXJuICg8Rm9ybSBmb3JtPXtmb3JtQ2hhbmdlUGFzc3dvcmR9IG5hbWU9XCJmb3JtQ2hhbmdlUGFzc3dvcmRcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgcmVwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgb25GaW5pc2g9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgb25Paz17KCkgPT4geyBmb3JtQ2hhbmdlUGFzc3dvcmQuc3VibWl0KCk7IH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNyB9fVxyXG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNyB9fVxyXG4gICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9XHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcIm9sZFBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA3IH19XHJcbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDE3IH19XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogdCgnZm9ybS5yZXF1aXJlZCcpIH1cclxuICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPXt0KFwicmVQYXNzd29yZFwiKX1cclxuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDcgfX1cclxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTcgfX1cclxuICAgICAgICAgIG5hbWU9XCJyZXBhc3N3b3JkXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IHQoJ2Zvcm0ucmVxdWlyZWQnKSB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JQYXNzd29yZFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoXCJyZVBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvRm9ybT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclJpZ2h0Q29udGVudCA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8QnV0dG9uIGljb249ezxQb3dlcm9mZk91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIiBvbkNsaWNrPXsoKSA9PiB7IGlmIChjb25maXJtUmVmLmN1cnJlbnQpIGNvbmZpcm1SZWYuY3VycmVudC5zaG93KCkgfX0+PC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gaWNvbj17PFNldHRpbmdGaWxsZWQgc3BpbiAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCIgIG9uQ2xpY2s9eygpID0+IHsgc2V0TW9kYWxWaXNpYmxlKHRydWUpIH19ID48L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UgfSA9IHByb3BzXHJcbiAgY29uc3QgbWVudUljb25Qcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJ0cmlnZ2VyXCIsXHJcbiAgICBvbkNsaWNrOiAoKSA9PiBvbkNvbGxhcHNlQ2hhbmdlKCFjb2xsYXBzZWQpXHJcbiAgfVxyXG4gIGxldCBoZWFkZXJDbGFzcyA9IFwiaGVhZGVyXCJcclxuICBpZiAoY29sbGFwc2VkKSBoZWFkZXJDbGFzcyArPSAnIGNvbGxhcHNlZCdcclxuXHJcbiAgY29uc3QgYWNjb3VudFBvcHVwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0MDBweFwiIH19PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbOCwgOF19PlxyXG4gICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs3fSBsZz17N30+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBcclxuICAgICAgICAgICAgICAgIHNyYz17XCJcIn0gc2l6ZT17MTAwfSBzaGFwZT1cInNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgICAge2F1dGguZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgey8qIDxBdmF0YXIgc2l6ZT17NjR9IGljb249ezxVc2VyT3V0bGluZWQgLz59IC8+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17MTd9IGxnPXsxN30+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3VzZXJuYW1lJyl9PC9iPjogPGk+e2F1dGgudXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGI+e3QoJ2Z1bGxuYW1lJyl9PC9iPjogPGk+e2F1dGguZnVsbG5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Yj57dCgnZW1haWwnKX08L2I+OiA8aT57YXV0aC5lbWFpbCA/IGF1dGguZW1haWwgOiB0KFwidXBkYXRlXCIpfTwvaT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPGI+e3QoJ3Bob25lJyl9PC9iPjogPGk+e2F1dGgucGhvbmUgPyBhdXRoLnBob25lIDogdChcInVwZGF0ZVwiKX08L2k+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclRpdGxlID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgICB7LyogPGFcclxuICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1hbnRkXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBtb3JlXHJcbiAgICAgICAgPC9hPiAqL31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAodGl0bGU6IHN0cmluZywgbGluazogYW55KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogdGl0bGUsXHJcbiAgICAgIGxhYmVsOiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2xpbmt9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHBhdGllbnRzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBvcHRpb25zUGF0aWVudHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLmZ1bGxuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgcGF0aWVudHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgYmVkcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgb3B0aW9uc0JlZHMucHVzaChyZW5kZXJJdGVtKFxyXG4gICAgICBgJHtpdGVtLnJvb21Db2RlfSAtICR7aXRlbS5iZWRJZH1gLCBcclxuICAgICAgPGEgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHJlZj17YGJlZHMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiAgdXNlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIG9wdGlvbnNVc2Vycy5wdXNoKHJlbmRlckl0ZW0oXHJcbiAgICAgIGAke2l0ZW0uZnVsbG5hbWV9IC0gJHtpdGVtLnVzZXJuYW1lfWAsIFxyXG4gICAgICA8YSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBocmVmPXtgdXNlcnMvJHtpdGVtLmlkfS9lZGl0YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBYZW0gY2hpIHRp4bq/dCA8L2E+XHJcbiAgICApKVxyXG4gIH0pXHJcbiBcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogcmVuZGVyVGl0bGUodCgncGF0aWVudCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1BhdGllbnRzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IHJlbmRlclRpdGxlKHQoJ2JlZCcpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc0JlZHNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiByZW5kZXJUaXRsZSh0KCdlbXBsb3llZScpKSxcclxuICAgICAgb3B0aW9uczogb3B0aW9uc1VzZXJzXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiOTAwcHhcIiwgZGlzcGxheTogJ2lubGluZScgfX0+XHJcbiAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWU9XCJjZXJ0YWluLWNhdGVnb3J5LXNlYXJjaC1kcm9wZG93blwiXHJcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg9ezM1MH0gLy8gd2lkdGggZHJvcGRvd25cclxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IGFueSkgPT4gb25DaGFuZ2VTZWFyY2godmFsdWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkJsdXJTZWFyY2goKX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzNTAgfX0gLy8gd2lkdGggaW5wdXQgU2VhcmNoXHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgZGlzYWJsZWQgPSB7cHJvcHMuZGlzYWJsZWRTZWFyY2g/IHRydWUgOiBmYWxzZSB9IC8vIGRpc2FibGUgaW5wdXQgc2VhcmNoXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPElucHV0LlNlYXJjaCBzaXplPVwibGFyZ2VcIiBwbGFjZWhvbGRlcj17dChcInNlYXJjaFwiKX0gLz5cclxuICAgICAgICA8L0F1dG9Db21wbGV0ZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8SGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3N9PlxyXG4gICAgICB7Y29sbGFwc2VkIFxyXG4gICAgICA/IDxNZW51VW5mb2xkT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiI2ZmZlwiIH19IHsuLi5tZW51SWNvblByb3BzfSAvPiBcclxuICAgICAgOiA8TWVudUZvbGRPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX0gey4uLm1lbnVJY29uUHJvcHN9IC8+fVxyXG4gICAgICBcclxuICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9e3QoJ3BlcnNvbmFsSW5mbycpfSBjb250ZW50PXthY2NvdW50UG9wdXAoKX0+XHJcbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8VXNlck91dGxpbmVkIC8+fSB0eXBlPVwibGlua1wiIGNsYXNzTmFtZT1cImhlYWRlci1idG5cIj48L0J1dHRvbj5cclxuICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICBcclxuICAgICAgey8qIDxCdXR0b24gaWNvbj17PEJlbGxPdXRsaW5lZCAvPn0gdHlwZT1cImxpbmtcIiBjbGFzc05hbWU9XCJoZWFkZXItYnRuXCI+PC9CdXR0b24+ICovfVxyXG4gICAgICB7LyogPFNlYXJjaFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVMOsbSBraeG6v20uLi5cIlxyXG4gICAgICAgIG9uU2VhcmNoPXt2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLXNlYXJjaFwiXHJcbiAgICAgIC8+ICovfVxyXG4gICAgICB7cmVuZGVyU2VhcmNoKCl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodENvbnRhaW5lcic+e3JlbmRlclJpZ2h0Q29udGVudCgpfTwvZGl2PlxyXG5cclxuICAgIDwvSGVhZGVyPlxyXG4gICAge3JlbmRlckNvbmZpcm1EaWFsb2coKX1cclxuICAgIHtyZW5kZXJDaGFuZ2VQYXNzTW9kYWwoKX1cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhlYWRlciIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJ3RoZW1lcy9zaWRlYmFyJ1xyXG5pbXBvcnQgeyBnZXRTaWRlYmFyU2VsZWN0ZWRzIH0gZnJvbSAndGhlbWVzL3JvdXRlJ1xyXG5pbXBvcnQgX3JvdXRlcyBmcm9tICd0aGVtZXMvX3JvdXRlcy5qc29uJ1xyXG5pbXBvcnQgdXNlQmFzZUhvb2sgZnJvbSAndGhlbWVzL2hvb2tzL0Jhc2VIb29rcydcclxuaW1wb3J0IHVzZVBlcm1pc3Npb25Ib29rIGZyb20gJ3RoZW1lcy9ob29rcy9QZXJtaXNzaW9uSG9vaydcclxuXHJcbmNvbnN0IE1lbnVDb21wb25lbnQgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHsgcm91dGVyLCB0LCByZWRpcmVjdCB9ID0gdXNlQmFzZUhvb2soeyBsYW5nOiBbJ21lbnUnXSB9KVxyXG4gIGNvbnN0IHtjaGVja1Blcm1pc3Npb259ID0gdXNlUGVybWlzc2lvbkhvb2soKVxyXG4gIGNvbnN0IGdldFJvdXRlTmFtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlUGF0aCA9IHJvdXRlci5wYXRobmFtZVxyXG4gICAgY29uc3Qgcm91dGVEYXRhOiBhbnkgPSBfcm91dGVzXHJcbiAgICBmb3IgKGxldCByb3V0ZU5hbWUgaW4gcm91dGVEYXRhKSB7XHJcbiAgICAgIGxldCByb3V0ZUVsZW1lbnQgPSByb3V0ZURhdGFbcm91dGVOYW1lXVxyXG4gICAgICBpZiAoIXJvdXRlRWxlbWVudC5hY3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAocm91dGVFbGVtZW50LmFjdGlvbi5zdWJzdHIoNSkgPT09IHJvdXRlUGF0aCkgcmV0dXJuIHJvdXRlTmFtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVNZW51cyA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJncm91cFwiKSB7XHJcbiAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBnZW5lcmF0ZU1lbnVzKGl0ZW0uY2hpbGRyZW4pXHJcbiAgICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnJvdXRlTmFtZX1cclxuICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KGl0ZW0ucm91dGVOYW1lKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ucm91dGVOYW1lfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbj8gaXRlbS5pY29uOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoaXRlbS5yb3V0ZU5hbWUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2dlbmVyYXRlTWVudXMoaXRlbS5jaGlsZHJlbil9XHJcbiAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFjaGVja1Blcm1pc3Npb24oaXRlbS5wZXJtaXNzaW9ucykpIHJldHVyblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLnJvdXRlTmFtZX0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QoaXRlbS5yb3V0ZU5hbWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLmljb24/IGl0ZW0uaWNvbjogJyd9XHJcbiAgICAgICAgICA8c3Bhbj57dChpdGVtLnJvdXRlTmFtZSl9PC9zcGFuPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfSkuZmlsdGVyKChtZW51OmFueSkgPT4gbWVudSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRoZW1lLCBvbkNvbGxhcHNlQ2hhbmdlLCBpc01vYmlsZSwgdFJlYWR5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGN1cnJlbnRSb3V0ZU5hbWUgPSBnZXRSb3V0ZU5hbWUoKVxyXG4gIGNvbnN0IGJyZWFkY3VtcyA9IGdldFNpZGViYXJTZWxlY3RlZHMoY3VycmVudFJvdXRlTmFtZSlcclxuICBsZXQgcm91dGVyTmFtZXMgPSBicmVhZGN1bXMubWFwKChicmVhZGN1bTogYW55KSA9PiBicmVhZGN1bS5yb3V0ZU5hbWUpXHJcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gcm91dGVyTmFtZXMucG9wKClcclxuICByZXR1cm4gPE1lbnVcclxuICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgdGhlbWU9e3RoZW1lfVxyXG4gICAgZGVmYXVsdE9wZW5LZXlzPXtyb3V0ZXJOYW1lc31cclxuICAgIHNlbGVjdGVkS2V5cz17c2VsZWN0ZWRLZXlzfVxyXG4gICAgb25DbGljaz17XHJcbiAgICAgIGlzTW9iaWxlXHJcbiAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICBvbkNvbGxhcHNlQ2hhbmdlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICB7Li4ub3RoZXJQcm9wc31cclxuICA+XHJcbiAgICB7Z2VuZXJhdGVNZW51cyhzaWRlYmFyKX1cclxuICA8L01lbnU+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHVzZUJhc2VIb29rIGZyb20gJ3RoZW1lcy9ob29rcy9CYXNlSG9va3MnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5mdW5jdGlvbiBudW1Gb3JtYXR0ZXIobnVtOiBudW1iZXIpIHtcclxuICAgIGlmKG51bSA+IDk5OSAmJiBudW0gPCAxMDAwMDAwKXtcclxuICAgICAgICByZXR1cm4gKG51bS8xMDAwKS50b0ZpeGVkKDEpICsgJ0snOyAvLyBjb252ZXJ0IHRvIEsgZm9yIG51bWJlciBmcm9tID4gMTAwMCA8IDEgbWlsbGlvbiBcclxuICAgIH1lbHNlIGlmKG51bSA+IDEwMDAwMDApe1xyXG4gICAgICAgIHJldHVybiAobnVtLzEwMDAwMDApLnRvRml4ZWQoMSkgKyAnTSc7IC8vIGNvbnZlcnQgdG8gTSBmb3IgbnVtYmVyIGZyb20gPiAxIG1pbGxpb24gXHJcbiAgICB9ZWxzZSBpZihudW0gPCA5MDApe1xyXG4gICAgICAgIHJldHVybiBudW07IC8vIGlmIHZhbHVlIDwgMTAwMCwgbm90aGluZyB0byBkb1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGdldENvb2tpZXMsIHJlZGlyZWN0LCB0LCBnZXREYXRhLCBnZXRBdXRoLCBnZXRQdWJsaWNSdW50aW1lQ29uZmlnIH0gPSB1c2VCYXNlSG9vaygpXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgcHVibGljUnVudGltZUNvbmZpZyA9IGdldFB1YmxpY1J1bnRpbWVDb25maWcoKVxyXG4gICAgY29uc3QgcHJvZmlsZUluZm8gPSB7XHJcbiAgICAgICAgY29tcGFueUxvZ286IHB1YmxpY1J1bnRpbWVDb25maWcuTE9HTyxcclxuICAgICAgICBncm91cE5hbWU6IFwiTmjDom4gdmnDqm5cIixcclxuICAgICAgICB1c2VyRnVsbG5hbWU6IFwiRGnDqm0gVGjhu4sgUXXhu7NuaFwiLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiBcIlZp4buHbiBkxrDhu6FuZyBsw6NvIEjGsOG7m25nIETGsMahbmdcIixcclxuICAgICAgICBjb21wYW55QWRkcmVzczogXCJT4buRIDM5LCBuZ8O1IDc0LCDEkMaw4budbmcgRHV5IFTDom4sIFF14bqtbiBD4bqndSBHaeG6pXksIEjDoCBO4buZaVwiLFxyXG4gICAgICAgIHRvZGF5OiB7fSxcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItcHJvZmlsZVwiPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezgwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fSBzcmM9e3Byb2ZpbGVJbmZvLmNvbXBhbnlMb2dvfSBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1jb21wYW55TmFtZVwiPntwcm9maWxlSW5mby5jb21wYW55TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1hZGRyZXNzXCI+e3Byb2ZpbGVJbmZvLmNvbXBhbnlBZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtbmFtZVwiPntwcm9maWxlSW5mby51c2VyRnVsbG5hbWV9PC9zcGFuPiAtIDxzcGFuIGNsYXNzTmFtZT1cInByb2ZpbGUtZ3JvdXBOYW1lXCI+e3Byb2ZpbGVJbmZvLmdyb3VwTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezIyfSBvZmZzZXQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwicHJvZmlsZS1lbmRMaW5lXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExheW91dCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xyXG5pbXBvcnQgeyBIb21lRmlsbGVkLCBVc2VyT3V0bGluZWQsIEhvbWVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucyc7XHJcbmNvbnN0IFRIRU1FID0gJ2xpZ2h0J1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSdcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb2xsYXBzZWQsIG9uQ29sbGFwc2VDaGFuZ2UsIGlzTW9iaWxlLCB0aGVtZSB9ID0gcHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICAgIHdpZHRoPXsyNTZ9XHJcbiAgICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPXswfVxyXG4gICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxyXG4gICAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgICB0aGVtZT17VEhFTUV9XHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXHJcbiAgICAgICAgICAgIGNvbGxhcHNlZD17Y29sbGFwc2VkfVxyXG4gICAgICAgICAgICAvL29uQnJlYWtwb2ludD17IWlzTW9iaWxlICYmIG9uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgIG9uQ29sbGFwc2VDaGFuZ2U9e29uQ29sbGFwc2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17aXNNb2JpbGV9IC8+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2lkZUJhcjtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRDb29raWUpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoZGVmYXVsdENvb2tpZSlcclxuICByZXR1cm4gY29va2llc1xyXG59IiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdFxyXG5jb25zdCB7cHVibGljUnVudGltZUNvbmZpZ30gPSBnZXRDb25maWcoKTtcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHROUzogJ2NvbW1vbicsXHJcbiAgZGVmYXVsdExhbmd1YWdlOiBwdWJsaWNSdW50aW1lQ29uZmlnLkxBTkcsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZW4nXSxcclxuICBsb2NhbGVQYXRoOiBcImxhbmdcIixcclxuICBicm93c2VyTGFuZ3VhZ2VEZXRlY3Rpb246IGZhbHNlLFxyXG4gIHNlcnZlckxhbmd1YWdlRGV0ZWN0aW9uOiBmYWxzZVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOZXh0STE4TmV4dEluc3RhbmNlIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgY29va2llcyBmcm9tICd0aGVtZXMvbW9kdWxlcy9Db29raWVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHRcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuaW1wb3J0IFJlcXVlc3RFeGNlcHRpb24gZnJvbSAnLi9SZXF1ZXN0RXhjZXB0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoY29va2llc1N0cmluZykge1xyXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXNTdHJpbmdcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llcyhjb29raWVzU3RyaW5nKS5nZXQoJ3Rva2VuJylcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVHbG9iYWwuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVHbG9iYWxFcnJvci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUdsb2JhbChyZXNwb25zZSkge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsQ2FsbGJhY2spIHtcclxuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZUdsb2JhbENhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfVxyXG5cclxuICBoYW5kbGVHbG9iYWxFcnJvcihlcnJvcikge1xyXG4gICAgaWYgKHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjaykge1xyXG4gICAgICBlcnJvciA9IHRoaXMuaGFuZGxlR2xvYmFsRXJyb3JDYWxsYmFjayhlcnJvcilcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG4gIH1cclxuXHJcbiAgZ2V0QXBwVXJsKCkge1xyXG4gICAgLy9yZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL1wiXHJcbiAgICByZXR1cm4gcHVibGljUnVudGltZUNvbmZpZy5BUElfSE9TVFxyXG4gIH1cclxuICBiZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pIHtcclxuXHJcbiAgfVxyXG4gIGFmdGVyUmVxdWVzdChyZXN1bHQpIHtcclxuICAgIGlmICghcmVzdWx0KSB0aHJvdyBuZXcgUmVxdWVzdEV4Y2VwdGlvbigtMSwgXCJVbmFibGUgY29ubmVjdCB0byBzZXJ2ZXIhXCIpXHJcbiAgICBjb25zdCBjb2RlID0gXy5nZXQocmVzdWx0LCBcImRhdGEuY29kZVwiLCAtMSlcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBfLmdldChyZXN1bHQsIFwiZGF0YS5tZXNzYWdlXCIsIFwiXCIpXHJcbiAgICBjb25zdCBkYXRhID0gXy5nZXQocmVzdWx0LCBcImRhdGEuZGF0YVwiKVxyXG4gICAgaWYgKGNvZGUgIT0gMjAwKSB7XHJcbiAgICAgIHRocm93IG5ldyBSZXF1ZXN0RXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UsIGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0KHVybCwgZGF0YSA9IHt9KSB7XHJcbiAgICB0aGlzLmJlZm9yZVJlcXVlc3QoeyB1cmwsIGRhdGEgfSlcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodGhpcy5nZXRBcHBVcmwoKSArIHVybCwgeyBwYXJhbXM6IGRhdGEgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5hZnRlclJlcXVlc3QocmVzdWx0KVxyXG4gIH1cclxuICBhc3luYyBwb3N0KHVybCwgZGF0YSkge1xyXG4gICAgdGhpcy5iZWZvcmVSZXF1ZXN0KHsgdXJsLCBkYXRhIH0pXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIHB1dCh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dCh0aGlzLmdldEFwcFVybCgpICsgdXJsLCBkYXRhKTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG4gIGFzeW5jIGRlbGV0ZSh1cmwsIGRhdGEpIHtcclxuICAgIHRoaXMuYmVmb3JlUmVxdWVzdCh7IHVybCwgZGF0YSB9KVxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmRlbGV0ZSh0aGlzLmdldEFwcFVybCgpICsgdXJsLCB7IHBhcmFtczogZGF0YSB9KTtcclxuICAgIHJldHVybiB0aGlzLmFmdGVyUmVxdWVzdChyZXN1bHQpXHJcbiAgfVxyXG59IiwiY2xhc3MgUmVxdWVzdEV4Y2VwdGlvbntcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZT1cIlwiLCBtZXNzYWdlID0gXCJcIiwgZGF0YSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3RFeGNlcHRpb247XHJcbiIsImNvbnN0IFVybFBhdHRlcm4gPSByZXF1aXJlKCd1cmwtcGF0dGVybicpO1xyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuL19yb3V0ZXMnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuY2xhc3MgUm91dGUge1xyXG4gICAgc3RhdGljIG1ha2VVcmwobmFtZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IHJvdXRlSW5mbyA9IHJvdXRlQ29uZmlnW25hbWVdXHJcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSb3V0ZSAke25hbWV9IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0dGVybiA9IG5ldyBVcmxQYXR0ZXJuKHJvdXRlSW5mby51cmwpO1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGFzVXJsID0gcGF0dGVybi5zdHJpbmdpZnkocGFyYW1zKSAvL2xpbmsgaGnhu4NuIHRo4buLIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIGxldCBocmVmID0gYXNVcmwgLy9saW5rIHRo4bqtdCB0cm9uZyAvcGFnZXNcclxuICAgICAgICAgICAgaWYgKHJvdXRlSW5mby5hY3Rpb24uc3Vic3RyKDAsIDYpID09PSBcInBhZ2VzL1wiKSB7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gcm91dGVJbmZvLmFjdGlvbi5zdWJzdHIoNSlcclxuICAgICAgICAgICAgICAgIGlmIChocmVmLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmICs9IGA/JHtxdWVyeX1gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgKz0gYCYke3F1ZXJ5fWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXM6IGFzVXJsLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogaHJlZlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGRRdWVyeShxdWVyeSwgc2hhbGxvdyA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc1BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgICBsZXQgb2xkUXVlcnkgPSBSb3V0ZXIucm91dGVyLnF1ZXJ5XHJcbiAgICAgICAgbGV0IHF1ZXJ5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5vbGRRdWVyeSxcclxuICAgICAgICAgICAgLi4ucXVlcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKSA9PSBKU09OLnN0cmluZ2lmeShvbGRRdWVyeSkpIHJldHVybjtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmdBcHBlbmQgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnlPYmopXHJcbiAgICAgICAgICAgIC8qIGlmKHF1ZXJ5U3RyaW5nQXBwZW5kKXtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeU9iaixcclxuICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYXNQYXRoLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogc2hhbGxvdyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFJvdXRlci5yb3V0ZXIucXVlcnkgPSBxdWVyeU9ialxyXG4gICAgICAgICAgICB9ICovXHJcbiAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogUm91dGVyLnJvdXRlci5wYXRobmFtZSxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGFzUGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzaGFsbG93OiBzaGFsbG93LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNpZGViYXJTZWxlY3RlZHMgPSAocm91dGVOYW1lLCByb3V0ZXMsIHJvdXRlUGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgICAgIGxldCBzaWRlYmFyU2VsZWN0ZWROYW1lID0gcm91dGVDb25maWdbcm91dGVOYW1lXSA/IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0uc2lkZWJhciA6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghcm91dGVzKSByb3V0ZXMgPSBzaWRlYmFyXHJcbiAgICAgICAgZm9yIChsZXQgcm91dGUgb2Ygcm91dGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5yb3V0ZU5hbWUgPT09IHNpZGViYXJTZWxlY3RlZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aHMucHVzaChyb3V0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVQYXRoc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXRTaWRlYmFyU2VsZWN0ZWRzKHNpZGViYXJTZWxlY3RlZE5hbWUsIHJvdXRlLmNoaWxkcmVuLCBbLi4ucm91dGVQYXRocywgcm91dGVdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoKSByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRCcmVhZGNydW1icyA9IChyb3V0ZU5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlQ29uZmlnW3JvdXRlTmFtZV0gPyByb3V0ZUNvbmZpZ1tyb3V0ZU5hbWVdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KHJvdXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFsuLi50aGlzLmdldEJyZWFkY3J1bWJzKHJvdXRlLnBhcmVudCksIC4uLnJlc3VsdF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IHJvdXRlID0gUm91dGUubWFrZVVybFxyXG5jb25zdCBhZGRRdWVyeSA9IFJvdXRlLmFkZFF1ZXJ5XHJcbmNvbnN0IGdldEJyZWFkY3J1bWJzID0gUm91dGUuZ2V0QnJlYWRjcnVtYnNcclxuY29uc3QgZ2V0U2lkZWJhclNlbGVjdGVkcyA9IFJvdXRlLmdldFNpZGViYXJTZWxlY3RlZHNcclxuZXhwb3J0IGRlZmF1bHQgcm91dGU7XHJcbmV4cG9ydCB7XHJcbiAgICByb3V0ZSxcclxuICAgIGFkZFF1ZXJ5LFxyXG4gICAgZ2V0QnJlYWRjcnVtYnMsXHJcbiAgICBnZXRTaWRlYmFyU2VsZWN0ZWRzXHJcbn0iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ3RoZW1lcy9tb2R1bGVzL1JlcXVlc3QnXHJcbmltcG9ydCByb3V0ZSBmcm9tICd0aGVtZXMvcm91dGUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWVzIGZyb20gJ3RoZW1lcy9tb2R1bGVzL0Nvb2tpZXMnO1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcblxyXG5jbGFzcyBCYXNlQXBpe1xyXG4gIGNvb2tpZXM6IENvb2tpZXNcclxuICBSZXF1ZXN0OiBSZXF1ZXN0XHJcbiAgbmFtZTogc3RyaW5nXHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb29raWVzT2JqID0gY29udGV4dCA/IG5leHRDb29raWUoY29udGV4dCk6IHt9XHJcbiAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzKGNvb2tpZXNPYmopO1xyXG4gICAgdGhpcy5SZXF1ZXN0ID0gbmV3IFJlcXVlc3QoY29va2llc09iailcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxDYWxsYmFjayA9IHRoaXMuZ2xvYmFsSGFuZGxlQ2FsbGJhY2tcclxuICAgIHRoaXMuUmVxdWVzdC5oYW5kbGVHbG9iYWxFcnJvckNhbGxiYWNrID0gdGhpcy5nbG9iYWxIYW5kbGVFcnJvckNhbGxiYWNrXHJcbiAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSA9IChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKVxyXG4gIH1cclxuICBnbG9iYWxIYW5kbGVDYWxsYmFjayA9IChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsSGFuZGxlRXJyb3JDYWxsYmFjayA9IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICBsZXQgc3RhdHVzID0gXy5nZXQoZXJyb3IsIFwicmVzcG9uc2Uuc3RhdHVzXCIsIC0xKTtcclxuICAgIGlmKHN0YXR1cyA9PT0gLTEpe1xyXG4gICAgICAvL25vdGlmeShcIlVuYWJsZSBjb25uZWN0IHRvIHNlcnZlciFcIiwgXCJlcnJvclwiKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnJlbW92ZShcInRva2VuXCIpXHJcbiAgICAgIHRoaXMuY29va2llcy5yZW1vdmUoXCJ1c2VyXCIpXHJcbiAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiKXtcclxuICAgICAgICAvL25vdGlmeShcIkxvZ2luIHNlc3Npb24gZXhwaXJlZCFcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIHRoaXMucmVkaXJlY3QoXCJmcm9udGVuZC5hZG1pbi5sb2dpblwiKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgLy9sb2dpbiBzY3JlZW4uIGtow7RuZyBsw6BtIGfDrCBj4bqjLlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3IucmVzcG9uc2VcclxuICB9XHJcblxyXG4gIHJvdXRlKHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICByZXR1cm4gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICB9XHJcblxyXG4gIHJlZGlyZWN0KHJvdXRlTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSl7XHJcbiAgICBsZXQgbmV4dFJvdXRlID0gcm91dGUocm91dGVOYW1lLCBxdWVyeSlcclxuICAgIFJvdXRlci5wdXNoKG5leHRSb3V0ZS5ocmVmLCBuZXh0Um91dGUuYXMpXHJcbiAgfVxyXG5cclxuICBhc3luYyBpbmRleChkYXRhPzogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uaW5kZXhgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBjcmVhdGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc3RvcmVgLGRhdGEpLmhyZWZcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLlJlcXVlc3QucG9zdCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXRhaWwoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGV0YWlsYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZWRpdChkYXRhOiBhbnkpe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS51cGRhdGVgLCBkYXRhKS5ocmVmXHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGUoZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uZGVsZXRlYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5kZWxldGUodXJsLCBkYXRhKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGkiLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgQmVkIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdiZWRzJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZCIsImltcG9ydCBCYXNlQXBpIGZyb20gJy4vQmFzZVNlcnZpY2UnXHJcblxyXG5jbGFzcyBQYXRpZW50IGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICdwYXRpZW50cyc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRpZW50IiwiaW1wb3J0IEJhc2VBcGkgZnJvbSAnLi9CYXNlU2VydmljZSdcclxuaW1wb3J0IHsgZ3JvdXAgfSBmcm9tICdjb25zb2xlJztcclxuXHJcbmNsYXNzIFVzZXJQZXJtaXNzaW9uIGV4dGVuZHMgQmFzZUFwaSB7XHJcbiAgY29uc3RydWN0b3IoY29udGV4dD86IENvbnRleHQpe1xyXG4gICAgc3VwZXIoY29udGV4dClcclxuICAgIHRoaXMubmFtZSA9ICd1c2VyUGVybWlzc2lvbnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBnZXRCeUdyb3VwSWQoZGF0YToge2dyb3VwSWQ6IG51bWJlcn0pe1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZShgYXBpLiR7dGhpcy5uYW1lfS5nZXRCeUdyb3VwSWRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LmdldCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclBlcm1pc3Npb24iLCJpbXBvcnQgQmFzZUFwaSBmcm9tICcuL0Jhc2VTZXJ2aWNlJ1xyXG5cclxuY2xhc3MgVXNlciBleHRlbmRzIEJhc2VBcGkge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ/OiBDb250ZXh0KXtcclxuICAgIHN1cGVyKGNvbnRleHQpXHJcbiAgICB0aGlzLm5hbWUgPSAndXNlcnMnOyAvL2vhur8gdGjhu6thIENSVUQgdOG7qyB0aOG6sW5nIGNoYVxyXG4gIH1cclxuICBhc3luYyBsb2dpbih7IGRhdGEgfToge2RhdGE6IHt1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nfX0pIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoXCJhcGkubG9naW5cIikuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wb3N0KHVybCwgZGF0YSkgfHwge31cclxuICAgICAgLy9zdWNjZXNzXHJcbiAgICB0aGlzLmNvb2tpZXMuc2V0KCd0b2tlbicsIHRoaXMuZ2V0RGF0YShyZXN1bHQsIFwidG9rZW5cIiwgdW5kZWZpbmVkKSwge1xyXG4gICAgICBwYXRoOiBcIi9cIlxyXG4gICAgfSlcclxuICAgIHRoaXMuY29va2llcy5zZXQoJ3VzZXInLCB0aGlzLmdldERhdGEocmVzdWx0LCBcInVzZXJcIiwge30pLHtcclxuICAgICAgcGF0aDogXCIvXCJcclxuICAgIH0pXHJcbiAgICB0aGlzLnJlZGlyZWN0KFwiZnJvbnRlbmQuYWRtaW4uZGFzaGJvYXJkLmluZGV4XCIpXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXBkYXRlUGFzc3dvcmRgLCBkYXRhKS5ocmVmXHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5SZXF1ZXN0LnB1dCh1cmwsIGRhdGEpXHJcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XHJcbiAgfVxyXG4gIGFzeW5jIHVzZXJVcGRhdGVQYXNzd29yZChkYXRhOiB7IGlkOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmd9KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0udXNlclVwZGF0ZVBhc3N3b3JkYCwgZGF0YSkuaHJlZlxyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuUmVxdWVzdC5wdXQodXJsLCBkYXRhKVxyXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gIH1cclxuICBhc3luYyBzZWFyY2goZGF0YTogYW55KXtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUoYGFwaS4ke3RoaXMubmFtZX0uc2VhcmNoYCwgZGF0YSkuaHJlZlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuUmVxdWVzdC5nZXQodXJsLCBkYXRhKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciIsImltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBVc2VyZ3JvdXBBZGRPdXRsaW5lZCxcclxuICBUZWFtT3V0bGluZWQsXHJcbiAgU2NoZWR1bGVPdXRsaW5lZCxcclxuICBTb2x1dGlvbk91dGxpbmVkLFxyXG4gIENhbGVuZGFyT3V0bGluZWQsXHJcbiAgVmVyaWZpZWRPdXRsaW5lZCxcclxuICBJbnNlcnRSb3dSaWdodE91dGxpbmVkLFxyXG4gIExheW91dE91dGxpbmVkLFxyXG4gIENhcnJ5T3V0T3V0bGluZWQsXHJcbiAgTGluZUNoYXJ0T3V0bGluZWRcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmRhc2hib2FyZC5pbmRleFwiLFxyXG4gICAgaWNvbjogPEhvbWVPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2Vycy5pbmRleFwiLFxyXG4gICAgaWNvbjogPFVzZXJPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgLy8gdHlwZTogXCJzdWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5yb29tcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPEluc2VydFJvd1JpZ2h0T3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYmVkcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPExheW91dE91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnBhdGllbnRzLmluZGV4XCIsXHJcbiAgICBpY29uOiA8VXNlck91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAvLyB0eXBlOiBcInN1YlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLmFzc2lnbm1lbnRcIixcclxuICAgIGljb246IDxTY2hlZHVsZU91dGxpbmVkIC8+LFxyXG4gICAgcm91dGVQYXJhbXM6IHt9LFxyXG4gICAgdHlwZTogXCJzdWJcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uZG9jdG9yQXNzaWdubWVudHMuaW5kZXhcIixcclxuICAgICAgICBpY29uOiA8U29sdXRpb25PdXRsaW5lZCAvPixcclxuICAgICAgICByb3V0ZVBhcmFtczoge31cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5udXJzZUFzc2lnbm1lbnRzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFNvbHV0aW9uT3V0bGluZWQgLz4sXHJcbiAgICAgICAgcm91dGVQYXJhbXM6IHt9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi5oZWFsdGhTdGF0dXNlcy5pbmRleFwiLFxyXG4gICAgaWNvbjogPENhbGVuZGFyT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge31cclxuICAgIC8vIHR5cGU6IFwic3ViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uYWRtaW5zSW5kZXhcIixcclxuICAgIGljb246IDxUZWFtT3V0bGluZWQgLz4sXHJcbiAgICByb3V0ZVBhcmFtczoge30sXHJcbiAgICB0eXBlOiBcInN1YlwiLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHJvdXRlTmFtZTogXCJmcm9udGVuZC5hZG1pbi51c2VyR3JvdXBzLmluZGV4XCIsXHJcbiAgICAgICAgaWNvbjogPFVzZXJncm91cEFkZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnVzZXJQZXJtaXNzaW9ucy5pbmRleFwiLFxyXG4gICAgICAgIGljb246IDxWZXJpZmllZE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZU5hbWU6IFwiZnJvbnRlbmQuYWRtaW4uc3RhdGlzdGljXCIsXHJcbiAgICBpY29uOiA8Q2FycnlPdXRPdXRsaW5lZCAvPixcclxuICAgIHJvdXRlUGFyYW1zOiB7fSxcclxuICAgIHR5cGU6IFwic3ViXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcm91dGVOYW1lOiBcImZyb250ZW5kLmFkbWluLnN0YXRpc3RpY3MuaGVhbHRoU3RhdHVzXCIsXHJcbiAgICAgICAgaWNvbjogPExpbmVDaGFydE91dGxpbmVkIC8+LFxyXG4gICAgICAgIHJvdXRlUGFyYW1zOiB7fVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcclxuIiwiaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL19yb3V0ZXMuanNvbidcclxuXHJcbmNvbnN0IGNoYXJUb051bSA9IHsgQzogOCwgUjogNCwgVTogMiwgRDogMSB9XHJcbmNvbnN0IGNydWRUb0RlYyA9ICh0ZXh0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCkuc3BsaXQoXCJcIikucmVkdWNlKCh0b3RhbDogbnVtYmVyLCBjaGFyOiAnQycgfCAnUicgfCAnVScgfCAnRCcpID0+IHRvdGFsICsgY2hhclRvTnVtW2NoYXJdLCAwKVxyXG5cclxufVxyXG5jb25zdCBkZWNUb0NydWQgPSAoZGVjOiBudW1iZXIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgbGV0IGNoYXI6ICdDJyB8ICdSJyB8ICdVJyB8ICdEJ1xyXG4gICAgZm9yIChjaGFyIGluIGNoYXJUb051bSkge1xyXG4gICAgICAgIGlmICgoZGVjICYgY2hhclRvTnVtW2NoYXJdKSA9PSBjaGFyVG9OdW1bY2hhcl0pIHJlc3VsdCArPSBjaGFyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmNvbnN0IGhhc1Blcm1pc3Npb24gPSAocmVxdWlyZVBlcm1pc3Npb246IG51bWJlciwgdXNlclBlcm1pc3Npb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICh1c2VyUGVybWlzc2lvbiAmIHJlcXVpcmVQZXJtaXNzaW9uKSA9PT0gcmVxdWlyZVBlcm1pc3Npb25cclxuICB9XHJcblxyXG5jb25zdCBjaGVja1Blcm1pc3Npb24gPSAocGVybWlzc2lvbnM6IGFueSwgdXNlclBlcm1pc3Npb25zOiBhbnksIHNob3dFcnJvcjogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZighcGVybWlzc2lvbnMpIHJldHVybiB0cnVlXHJcbiAgICBsZXQgcGVybWlzc2lvbkFycmF5ID0gW11cclxuICAgIGZvciAobGV0IHBlcm1pc3Npb24gaW4gcGVybWlzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlUGVybWlzc2lvbiA9IGNydWRUb0RlYyhwZXJtaXNzaW9uc1twZXJtaXNzaW9uXSk7XHJcbiAgICAgICAgY29uc3Qgcm9vdFBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbXCJyb290XCJdIHx8IDBcclxuICAgICAgICBsZXQgdXNlclBlcm1pc3Npb24gPSB1c2VyUGVybWlzc2lvbnNbcGVybWlzc2lvbl0gfHwgMFxyXG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlclBlcm1pc3Npb24gfCByb290UGVybWlzc2lvblxyXG4gICAgICAgIGlmIChoYXNQZXJtaXNzaW9uKHJlcXVpcmVQZXJtaXNzaW9uLCB1c2VyUGVybWlzc2lvbikpIHJldHVybiB0cnVlXHJcbiAgICAgICAgcGVybWlzc2lvbkFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwZXJtaXNzaW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlUGVybWlzc2lvbjogZGVjVG9DcnVkKHJlcXVpcmVQZXJtaXNzaW9uKSxcclxuICAgICAgICAgICAgdXNlclBlcm1pc3Npb246IGRlY1RvQ3J1ZCh1c2VyUGVybWlzc2lvbilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKCFzaG93RXJyb3IpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHBlcm1pc3Npb25BcnJheVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNoZWNrUGVybWlzc2lvbixcclxuICAgIGhhc1Blcm1pc3Npb24sXHJcbiAgICBjcnVkVG9EZWMsXHJcbiAgICBkZWNUb0NydWRcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3YWl0LXRvLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWJhc2U2NFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGlnaGxpZ2h0LXdvcmRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuaXZlcnNhbC1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1wYXR0ZXJuXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=