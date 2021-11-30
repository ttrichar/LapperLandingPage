module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.eager || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...(scriptLoader.defer || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: file,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files),  false && false,  false && /*#__PURE__*/false, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", {
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPreNextScripts() {
    const {
      scriptLoader
    } = this.context;
    return (scriptLoader.eager || []).map(file => {
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, file, {
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      return /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && this.getPreNextScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/twind/server/server.cjs":
/*!**********************************************!*\
  !*** ./node_modules/twind/server/server.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// src/server/index.ts
__markAsModule(exports);
__export(exports, {
  asyncVirtualSheet: () => asyncVirtualSheet,
  getStyleTag: () => import_sheets2.getStyleTag,
  getStyleTagProperties: () => import_sheets2.getStyleTagProperties,
  shim: () => import_server.shim,
  virtualSheet: () => import_sheets2.virtualSheet
});
var import_async_hooks = __toModule(__webpack_require__(/*! async_hooks */ "async_hooks"));
var import_sheets = __toModule(__webpack_require__(/*! ../sheets/sheets.cjs */ "./node_modules/twind/sheets/sheets.cjs"));
var import_sheets2 = __toModule(__webpack_require__(/*! ../sheets/sheets.cjs */ "./node_modules/twind/sheets/sheets.cjs"));
var import_server = __toModule(__webpack_require__(/*! ../shim/server/server.cjs */ "./node_modules/twind/shim/server/server.cjs"));
var asyncVirtualSheet = () => {
  const sheet = import_sheets.virtualSheet();
  const initial = sheet.reset();
  const store = new Map();
  const asyncHook = import_async_hooks.createHook({
    init(asyncId, type, triggerAsyncId) {
      const snapshot = store.get(triggerAsyncId);
      if (snapshot) {
        store.set(asyncId, snapshot);
      }
    },
    before(asyncId) {
      const snapshot = store.get(asyncId);
      if (snapshot) {
        sheet.reset(snapshot.state);
      }
    },
    after(asyncId) {
      const snapshot = store.get(asyncId);
      if (snapshot) {
        snapshot.state = sheet.reset(initial);
      }
    },
    destroy(asyncId) {
      store.delete(asyncId);
    }
  }).enable();
  return {
    get target() {
      return sheet.target;
    },
    insert: sheet.insert,
    init: sheet.init,
    reset: () => {
      const asyncId = import_async_hooks.executionAsyncId();
      const snapshot = store.get(asyncId);
      if (snapshot) {
        snapshot.state = void 0;
      } else {
        store.set(asyncId, {state: void 0});
      }
      sheet.reset();
    },
    enable: () => asyncHook.enable(),
    disable: () => asyncHook.disable()
  };
};
//# sourceMappingURL=server.cjs.map


/***/ }),

/***/ "./node_modules/twind/sheets/sheets.cjs":
/*!**********************************************!*\
  !*** ./node_modules/twind/sheets/sheets.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// src/sheets/index.ts
__markAsModule(exports);
__export(exports, {
  domSheet: () => domSheet,
  getStyleTag: () => getStyleTag,
  getStyleTagProperties: () => getStyleTagProperties,
  virtualSheet: () => virtualSheet
});

// src/internal/dom.ts
var STYLE_ELEMENT_ID = "__twind";
var getStyleElement = (nonce) => {
  let element = self[STYLE_ELEMENT_ID];
  if (!element) {
    element = document.head.appendChild(document.createElement("style"));
    element.id = STYLE_ELEMENT_ID;
    nonce && (element.nonce = nonce);
    element.appendChild(document.createTextNode(""));
  }
  return element;
};

// src/sheets/index.ts
var domSheet = ({
  nonce,
  target = getStyleElement(nonce)
} = {}) => {
  const offset = target.childNodes.length;
  return {
    target,
    insert: (rule, index) => target.insertBefore(document.createTextNode(rule), target.childNodes[offset + index])
  };
};
var createStorage = () => {
  const callbacks = [];
  let state = [];
  const invoke = (callback, index) => state[index] = callback(state[index]);
  return {
    init: (callback) => invoke(callback, callbacks.push(callback) - 1),
    reset: (snapshot = []) => {
      ;
      [snapshot, state] = [state, snapshot];
      callbacks.forEach(invoke);
      return snapshot;
    }
  };
};
var virtualSheet = () => {
  const storage = createStorage();
  let target;
  storage.init((value = []) => target = value);
  return {
    ...storage,
    get target() {
      return [...target];
    },
    insert: (rule, index) => target.splice(index, 0, rule)
  };
};
var getStyleTagProperties = (sheet) => ({
  id: STYLE_ELEMENT_ID,
  textContent: (Array.isArray(sheet) ? sheet : sheet.target).join("")
});
var getStyleTag = (sheet, attributes) => {
  const {id, textContent} = getStyleTagProperties(sheet);
  attributes = {...attributes, id};
  return `<style${Object.keys(attributes).reduce((attrs, key) => `${attrs} ${key}=${JSON.stringify(attributes[key])}`, "")}>${textContent}</style>`;
};
//# sourceMappingURL=sheets.cjs.map


/***/ }),

/***/ "./node_modules/twind/shim/server/server.cjs":
/*!***************************************************!*\
  !*** ./node_modules/twind/shim/server/server.cjs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// src/shim/server/index.ts
__markAsModule(exports);
__export(exports, {
  getStyleTag: () => import_sheets.getStyleTag,
  getStyleTagProperties: () => import_sheets.getStyleTagProperties,
  shim: () => shim,
  virtualSheet: () => import_sheets.virtualSheet
});
var htmlparser2 = __toModule(__webpack_require__(/*! htmlparser2 */ "htmlparser2"));
var import__ = __toModule(__webpack_require__(/*! ../../twind.cjs */ "./node_modules/twind/twind.cjs"));
var import_sheets = __toModule(__webpack_require__(/*! ../../sheets/sheets.cjs */ "./node_modules/twind/sheets/sheets.cjs"));
var {Tokenizer} = htmlparser2.default || htmlparser2;
var noop = () => void 0;
var shim = (markup, options = {}) => {
  const {tw = import__.tw} = typeof options == "function" ? {tw: options} : options;
  let lastAttribName = "";
  let lastChunkStart = 0;
  const chunks = [];
  const tokenizer = new Tokenizer({
    decodeEntities: false,
    xmlMode: false
  }, {
    onattribend: noop,
    onattribdata: (value) => {
      if (lastAttribName === "class") {
        const currentIndex = tokenizer.getAbsoluteIndex();
        const startIndex = currentIndex - value.length;
        const parsedClassNames = tw(value);
        if (parsedClassNames !== value) {
          chunks.push(markup.slice(lastChunkStart, startIndex));
          chunks.push(parsedClassNames);
          lastChunkStart = currentIndex;
        }
      }
      lastAttribName = "";
    },
    onattribname: (name) => {
      lastAttribName = name;
    },
    oncdata: noop,
    onclosetag: noop,
    oncomment: noop,
    ondeclaration: noop,
    onend: noop,
    onerror: noop,
    onopentagend: noop,
    onopentagname: noop,
    onprocessinginstruction: noop,
    onselfclosingtag: noop,
    ontext: noop
  });
  tokenizer.end(markup);
  if (!chunks.length) {
    return markup;
  }
  return chunks.join("") + markup.slice(lastChunkStart || 0, markup.length);
};
//# sourceMappingURL=server.cjs.map


/***/ }),

/***/ "./node_modules/twind/twind.cjs":
/*!**************************************!*\
  !*** ./node_modules/twind/twind.cjs ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// src/index.ts
__markAsModule(exports);
__export(exports, {
  apply: () => apply,
  autoprefix: () => autoprefix,
  create: () => create,
  cssomSheet: () => cssomSheet,
  directive: () => directive,
  hash: () => cyrb32,
  mode: () => mode,
  noprefix: () => noprefix,
  setup: () => setup,
  silent: () => silent,
  strict: () => strict,
  theme: () => theme,
  tw: () => tw,
  voidSheet: () => voidSheet,
  warn: () => warn
});

// src/internal/util.ts
var includes = (value, search) => !!~value.indexOf(search);
var join = (parts, separator = "-") => parts.join(separator);
var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
var tail = (array, startIndex = 1) => array.slice(startIndex);
var identity = (value) => value;
var noop = () => {
};
var capitalize = (value) => value[0].toUpperCase() + tail(value);
var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context) => {
  while (typeof value == "function") {
    value = value(context);
  }
  return value;
};
var ensureMaxSize = (map, max) => {
  if (map.size > max) {
    map.delete(map.keys().next().value);
  }
};
var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
  const value = evalThunk(source[key], context);
  if (value && typeof value == "object" && !Array.isArray(value)) {
    target2[key] = merge(target2[key] || {}, value, context);
  } else {
    target2[hyphenate(key)] = value;
  }
  return target2;
}, target) : target;
var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => {
  const firstCodeUnit = className.charCodeAt(0);
  let firstChar = "";
  if (firstCodeUnit >= 48 && firstCodeUnit <= 57) {
    firstChar = "\\" + firstCodeUnit.toString(16) + " ";
    className = tail(className);
  }
  return firstChar + className.replace(/[!./:#]/g, "\\$&");
});
var buildMediaQuery = (screen) => {
  if (!Array.isArray(screen)) {
    screen = [screen];
  }
  return "@media " + join(screen.map((screen2) => {
    if (typeof screen2 == "string") {
      screen2 = {min: screen2};
    }
    return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
  }), ",");
};
var cyrb32 = (value) => {
  let h = 9;
  for (let index = value.length; index--; ) {
    h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
  }
  return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
};
var sortedInsertionIndex = (array, element) => {
  let high = array.length;
  if (high === 0)
    return 0;
  for (let low = 0; low < high; ) {
    const pivot = high + low >> 1;
    if (array[pivot] <= element) {
      low = pivot + 1;
    } else {
      high = pivot;
    }
  }
  return high;
};

// src/twind/parse.ts
var groupings;
var rules;
var startGrouping = (value = "") => {
  groupings.push(value);
  return "";
};
var endGrouping = (isWhitespace) => {
  groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
};
var onlyPrefixes = (s) => s && s[0] !== ":";
var onlyVariants = (s) => s[0] === ":";
var addRule = (directive2, negate, important) => {
  rules.push({
    v: groupings.filter(onlyVariants),
    d: directive2,
    n: negate,
    i: important,
    $: ""
  });
};
var saveRule = (buffer) => {
  const negate = buffer[0] === "-";
  if (negate) {
    buffer = tail(buffer);
  }
  const important = buffer[buffer.length - 1] === "!";
  if (important) {
    buffer = buffer.slice(0, -1);
  }
  const prefix = join(groupings.filter(onlyPrefixes));
  addRule(buffer === "&" ? prefix : (prefix && prefix + "-") + buffer, negate, important);
  return "";
};
var parseString = (token, isVariant) => {
  let char;
  let buffer = "";
  for (let position2 = 0; position2 < token.length; ) {
    switch (char = token[position2++]) {
      case ":":
        buffer = buffer && startGrouping(":" + (token[position2] === char ? token[position2++] : "") + buffer);
        break;
      case "(":
        buffer = buffer && startGrouping(buffer);
        startGrouping();
        break;
      case ")":
      case " ":
      case "	":
      case "\n":
      case "\r":
        buffer = buffer && saveRule(buffer);
        endGrouping(char !== ")");
        break;
      default:
        buffer += char;
    }
  }
  if (buffer) {
    if (isVariant) {
      startGrouping(":" + buffer);
    } else if (buffer.slice(-1) === "-") {
      startGrouping(buffer.slice(0, -1));
    } else {
      saveRule(buffer);
    }
  }
};
var parseGroupedToken = (token) => {
  startGrouping();
  parseToken(token);
  endGrouping();
};
var parseGroup = (key, token) => {
  if (token) {
    startGrouping();
    const isVariant = includes("tbu", (typeof token)[1]);
    parseString(key, isVariant);
    if (isVariant) {
      parseGroupedToken(token);
    }
    endGrouping();
  }
};
var parseToken = (token) => {
  switch (typeof token) {
    case "string":
      parseString(token);
      break;
    case "function":
      addRule(token);
      break;
    case "object":
      if (Array.isArray(token)) {
        token.forEach(parseGroupedToken);
      } else if (token) {
        Object.keys(token).forEach((key) => {
          parseGroup(key, token[key]);
        });
      }
  }
};
var staticsCaches = new WeakMap();
var buildStatics = (strings) => {
  let statics = staticsCaches.get(strings);
  if (!statics) {
    let slowModeIndex = NaN;
    let buffer = "";
    statics = strings.map((token, index) => {
      if (slowModeIndex !== slowModeIndex && includes(":-(", (strings[index + 1] || "")[0])) {
        slowModeIndex = index;
      }
      if (index >= slowModeIndex) {
        return (interpolation) => {
          if (index === slowModeIndex) {
            buffer = "";
          }
          buffer += token;
          if (typeof interpolation == "string") {
            buffer += interpolation;
          } else if (interpolation) {
            parseString(buffer);
            buffer = "";
            parseToken(interpolation);
          }
          if (index === strings.length - 1) {
            parseString(buffer);
          }
        };
      }
      const staticRules = rules = [];
      parseString(token);
      const activeGroupings = [...groupings];
      rules = [];
      return (interpolation) => {
        rules.push(...staticRules);
        groupings = [...activeGroupings];
        if (interpolation) {
          parseToken(interpolation);
        }
      };
    });
    staticsCaches.set(strings, statics);
  }
  return statics;
};
var parse = (tokens) => {
  groupings = [];
  rules = [];
  if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
    buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
  } else {
    parseToken(tokens);
  }
  return rules;
};

// src/twind/directive.ts
var isFunctionFree;
var detectFunction = (key, value) => {
  if (typeof value == "function") {
    isFunctionFree = false;
  }
  return value;
};
var stringify = (data) => {
  isFunctionFree = true;
  const key = JSON.stringify(data, detectFunction);
  return isFunctionFree && key;
};
var cacheByFactory = new WeakMap();
var directive = (factory, data) => {
  const key = stringify(data);
  let directive2;
  if (key) {
    var cache = cacheByFactory.get(factory);
    if (!cache) {
      cacheByFactory.set(factory, cache = new Map());
    }
    directive2 = cache.get(key);
  }
  if (!directive2) {
    directive2 = Object.defineProperty((params, context) => {
      context = Array.isArray(params) ? context : params;
      return evalThunk(factory(data, context), context);
    }, "toJSON", {
      value: () => key || data
    });
    if (cache) {
      cache.set(key, directive2);
      ensureMaxSize(cache, 1e4);
    }
  }
  return directive2;
};

// src/twind/apply.ts
var applyFactory = (tokens, {css}) => css(parse(tokens));
var apply = (...tokens) => directive(applyFactory, tokens);

// src/twind/helpers.ts
var positions = (resolve) => (value, position2, prefix, suffix) => {
  if (value) {
    const properties = position2 && resolve(position2);
    if (properties && properties.length > 0) {
      return properties.reduce((declarations, property2) => {
        declarations[joinTruthy([prefix, property2, suffix])] = value;
        return declarations;
      }, {});
    }
  }
};
var corners = positions((key) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[key]);
var expandEdges = (key) => {
  const parts = ({x: "lr", y: "tb"}[key] || key || "").split("").sort();
  for (let index = parts.length; index--; ) {
    if (!(parts[index] = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left"
    }[parts[index]]))
      return;
  }
  if (parts.length)
    return parts;
};
var edges = positions(expandEdges);

// src/twind/plugins.ts
var _;
var __;
var $;
var property = (property2) => (params, context, id) => ({
  [property2]: id + ((_ = join(params)) && "-" + _)
});
var propertyValue = (property2, separator) => (params, context, id) => ({
  [property2 || id]: join(params, separator)
});
var themeProperty = (section) => (params, {theme: theme2}, id) => ({
  [section || id]: theme2(section || id, params)
});
var alias = (handler, name) => (params, context) => handler(params, context, name);
var display = property("display");
var position = property("position");
var textTransform = property("textTransform");
var textDecoration = property("textDecoration");
var fontStyle = property("fontStyle");
var fontVariantNumeric = (key) => (params, context, id) => ({
  ["--tw-" + key]: id,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
});
var inset = (params, {theme: theme2}, id) => ({[id]: theme2("inset", params)});
var opacityProperty = (params, theme2, id, section = id) => ({
  [`--tw-${id}-opacity`]: theme2(section + "Opacity", tail(params))
});
var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
var asRGBA = (color, opacityProperty2, opacityDefault) => {
  if (color && color[0] === "#") {
    return `rgba(${parseColorComponent(color.substr(1, _ = (color.length - 1) / 3), $ = [17, 1, 0.062272][_ - 1])},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
  }
  return color;
};
var withOpacityFallback = (property2, kind, color) => color && (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
  [`--tw-${kind}-opacity`]: "1",
  [property2]: [color, _]
} : {[property2]: color};
var transparentTo = (color) => ($ = asRGBA(color, "", "0")) === _ ? "transparent" : $;
var reversableEdge = (params, {theme: theme2}, id, section, prefix, suffix) => (_ = {x: ["right", "left"], y: ["bottom", "top"]}[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] === "reverse" ? {
  [$]: "1"
} : {
  [$]: "0",
  [joinTruthy([prefix, _[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
  [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
} : void 0;
var placeHelper = (property2, params) => ({
  [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
});
var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? {[property2]: `flex-${params[0]}`} : placeHelper(property2, params);
var gridPlugin = (kind) => (params) => {
  switch (params[0]) {
    case "auto":
      return {[`grid-${kind}`]: "auto"};
    case "span":
      return {
        [`grid-${kind}`]: params[1] === "full" ? "1 / -1" : `span ${params[1]} / span ${params[1]}`
      };
    case "start":
    case "end":
      return {
        [`grid-${kind}-${params[0]}`]: params[1]
      };
  }
};
var border = (params, {theme: theme2}, id) => {
  switch (params[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return propertyValue("borderStyle")(params);
    case "collapse":
    case "separate":
      return propertyValue("borderCollapse")(params);
    case "opacity":
      return opacityProperty(params, theme2, id);
  }
  return (_ = theme2(id + "Width", params, "")) ? {borderWidth: _} : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
};
var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
var transformXYFunction = (params, context, id) => (_ = context.theme(id, params[1] || params[0])) && {
  [`--tw-${id}-x`]: params[0] !== "y" && _,
  [`--tw-${id}-y`]: params[0] !== "x" && _,
  transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
};
var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
var padding = edgesPluginFor("padding");
var margin = edgesPluginFor("margin");
var minMax = (params, {theme: theme2}, id) => (_ = {w: "width", h: "height"}[params[0]]) && {
  [_ = `${id}${capitalize(_)}`]: theme2(_, tail(params))
};
var corePlugins = {
  group: (params, {tag}, id) => tag(join([id, ...params])),
  hidden: alias(display, "none"),
  inline: display,
  block: display,
  contents: display,
  flow: display,
  table: (params, context, id) => includes(["auto", "fixed"], params[0]) ? {tableLayout: params[0]} : display(params, context, id),
  flex(params, context, id) {
    switch (params[0]) {
      case "row":
      case "col":
        return {
          flexDirection: join(params[0] === "col" ? ["column", ...tail(params)] : params)
        };
      case "nowrap":
      case "wrap":
        return {flexWrap: join(params)};
      case "grow":
      case "shrink":
        return {[`flex-${params[0]}`]: params[1] || "1"};
    }
    return (_ = context.theme("flex", params, "")) ? {flex: _} : display(params, context, id);
  },
  grid(params, context, id) {
    switch (params[0]) {
      case "cols":
      case "rows":
        return params.length > 1 && {
          [`grid-template-${params[0] === "cols" ? "columns" : params[0]}`]: params.length === 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params), " ")
        };
      case "flow":
        return params.length > 1 && {
          gridAutoFlow: join(params[1] === "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
        };
    }
    return display(params, context, id);
  },
  auto: (params) => includes(["cols", "rows"], params[0]) && (_ = params.length === 2 ? {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  }[params[1]] || `minmax(0,${params[1]})` : params.length > 2 && `minmax(${join(tail(params), ",")})`) && {
    [`grid-auto-${params[0] === "cols" ? "columns" : "rows"}`]: _
  },
  static: position,
  fixed: position,
  absolute: position,
  relative: position,
  sticky: position,
  visible: {visibility: "visible"},
  invisible: {visibility: "hidden"},
  antialiased: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "subpixel-antialiased": {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  },
  truncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  "sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  },
  "not-sr-only": {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  },
  resize: (params) => ({
    resize: {x: "vertical", y: "horizontal"}[params[0]] || params[0] || "both"
  }),
  box: (params) => ({"box-sizing": `${params[0]}-box`}),
  appearance: propertyValue(),
  cursor: propertyValue(),
  float: propertyValue(),
  clear: propertyValue(),
  top: inset,
  right: inset,
  bottom: inset,
  left: inset,
  inset: (params, {theme: theme2}) => (_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
    top: _,
    right: _,
    bottom: _,
    left: _
  },
  underline: textDecoration,
  "line-through": textDecoration,
  "no-underline": alias(textDecoration, "none"),
  "text-underline": alias(textDecoration, "underline"),
  "text-no-underline": alias(textDecoration, "none"),
  "text-line-through": alias(textDecoration, "line-through"),
  uppercase: textTransform,
  lowercase: textTransform,
  capitalize: textTransform,
  "normal-case": alias(textTransform, "none"),
  "text-normal-case": alias(textTransform, "none"),
  italic: fontStyle,
  "not-italic": alias(fontStyle, "normal"),
  "font-italic": alias(fontStyle, "italic"),
  "font-not-italic": alias(fontStyle, "normal"),
  font: (params, context, id) => (_ = context.theme("fontFamily", params, "")) ? {fontFamily: _} : themeProperty("fontWeight")(params, context, id),
  items: (params) => ({
    alignItems: includes(["start", "end"], params[0]) ? `flex-${params[0]}` : join(params)
  }),
  "justify-self": propertyValue(),
  "justify-items": propertyValue(),
  justify: contentPluginFor("justifyContent"),
  content: contentPluginFor("alignContent"),
  self: contentPluginFor("alignSelf"),
  place: (params) => placeHelper("place-" + params[0], tail(params)),
  overscroll: (params) => ({
    ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
  }),
  col: gridPlugin("column"),
  row: gridPlugin("row"),
  duration: themeProperty("transitionDuration"),
  delay: themeProperty("transitionDelay"),
  tracking: themeProperty("letterSpacing"),
  leading: themeProperty("lineHeight"),
  z: themeProperty("zIndex"),
  opacity: themeProperty(),
  ease: themeProperty("transitionTimingFunction"),
  p: padding,
  py: padding,
  px: padding,
  pt: padding,
  pr: padding,
  pb: padding,
  pl: padding,
  m: margin,
  my: margin,
  mx: margin,
  mt: margin,
  mr: margin,
  mb: margin,
  ml: margin,
  w: themeProperty("width"),
  h: themeProperty("height"),
  min: minMax,
  max: minMax,
  fill: themeProperty(),
  order: themeProperty(),
  origin: propertyValue("transformOrigin", " "),
  select: propertyValue("userSelect"),
  "pointer-events": propertyValue(),
  align: propertyValue("verticalAlign"),
  whitespace: propertyValue("whiteSpace"),
  "normal-nums": {fontVariantNumeric: "normal"},
  ordinal: fontVariantNumeric("ordinal"),
  "slashed-zero": fontVariantNumeric("slashed-zero"),
  "lining-nums": fontVariantNumeric("numeric-figure"),
  "oldstyle-nums": fontVariantNumeric("numeric-figure"),
  "proportional-nums": fontVariantNumeric("numeric-spacing"),
  "tabular-nums": fontVariantNumeric("numeric-spacing"),
  "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
  "stacked-fractions": fontVariantNumeric("numeric-fraction"),
  overflow: (params, context, id) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? {[`overflow-${params[0]}`]: params[1]} : propertyValue()(params, context, id),
  transform: (params) => params[0] === "none" ? {transform: "none"} : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: transform(params[0] === "gpu")
  },
  rotate: (params, {theme: theme2}) => (_ = theme2("rotate", params)) && {
    "--tw-rotate": _,
    transform: [`rotate(${_})`, transform()]
  },
  scale: transformXYFunction,
  translate: transformXYFunction,
  skew: transformXYFunction,
  gap: (params, context, id) => (_ = {x: "column", y: "row"}[params[0]]) ? {[_ + "Gap"]: context.theme("gap", tail(params))} : themeProperty("gap")(params, context, id),
  stroke: (params, context, id) => (_ = context.theme("stroke", params, "")) ? {stroke: _} : themeProperty("strokeWidth")(params, context, id),
  outline: (params, {theme: theme2}) => (_ = theme2("outline", params)) && {
    outline: _[0],
    outlineOffset: _[1]
  },
  break(params) {
    switch (params[0]) {
      case "normal":
        return {
          wordBreak: "normal",
          overflowWrap: "normal"
        };
      case "words":
        return {overflowWrap: "break-word"};
      case "all":
        return {wordBreak: "break-all"};
    }
  },
  text(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return {textAlign: params[0]};
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return textTransform([], _, params[0]);
      case "opacity":
        return opacityProperty(params, theme2, id);
    }
    const fontSize = theme2("fontSize", params, "");
    if (fontSize) {
      return typeof fontSize == "string" ? {fontSize} : {
        fontSize: fontSize[0],
        ...typeof fontSize[1] == "string" ? {lineHeight: fontSize[1]} : fontSize[1]
      };
    }
    return withOpacityFallback("color", "text", theme2("textColor", params));
  },
  bg(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return propertyValue("backgroundAttachment", ",")(params);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return propertyValue("backgroundPosition", " ")(params);
      case "no":
        return params[1] === "repeat" && propertyValue("backgroundRepeat")(params);
      case "auto":
      case "cover":
      case "contain":
        return propertyValue("backgroundSize")(params);
      case "repeat":
        return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : {"background-repeat": params[1] || params[0]};
      case "opacity":
        return opacityProperty(params, theme2, id, "background");
      case "clip":
        return {backgroundClip: params[1] + (params[1] === "text" ? "" : "-box")};
      case "gradient":
        if (params[1] === "to" && (_ = expandEdges(params[2]))) {
          return {
            backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
          };
        }
    }
    return (_ = theme2("backgroundImage", params, "")) ? {backgroundImage: _} : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
  },
  from: (params, {theme: theme2}) => (_ = theme2("gradientColorStops", params)) && {
    "--tw-gradient-from": _,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
  },
  via: (params, {theme: theme2}) => (_ = theme2("gradientColorStops", params)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
  },
  to: (params, {theme: theme2}) => ({
    "--tw-gradient-to": theme2("gradientColorStops", params)
  }),
  border: (params, context, id) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
  divide: (params, context, id) => (_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
    "&>:not([hidden])~:not([hidden])": _
  },
  space: (params, context, id) => (_ = reversableEdge(params, context, id, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": _
  },
  placeholder: (params, {theme: theme2}, id) => (_ = params[0] === "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
    "&::placeholder": _
  },
  shadow: (params, {theme: theme2}) => (_ = theme2("boxShadow", params)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": _ === "none" ? "0 0 transparent" : _,
    boxShadow: [
      _,
      `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
    ]
  },
  animate: (params, {theme: theme2, tag}) => {
    if ($ = theme2("animation", params)) {
      const parts = $.split(" ");
      if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) {
        return ($ = tag(parts[0])) && {
          animation: $ + " " + join(tail(parts), " "),
          ["@keyframes " + $]: _
        };
      }
      return {animation: $};
    }
  },
  ring(params, {theme: theme2}, id) {
    switch (params[0]) {
      case "inset":
        return {"--tw-ring-inset": "inset"};
      case "opacity":
        return opacityProperty(params, theme2, id);
      case "offset":
        return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
          "--tw-ring-offset-width": _
        } : {
          "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
        };
    }
    return (_ = theme2("ringWidth", params, "")) ? {
      "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      "box-shadow": `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
    };
  },
  object: (params) => includes(["contain", "cover", "fill", "none", "scale"], params[0]) ? propertyValue("objectFit")(params) : propertyValue("objectPosition", " ")(params),
  list: (params) => propertyValue(includes(["inside", "outside"], params[0]) ? "listStylePosition" : "listStyleType")(params),
  rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
  "transition-none": {"transition-property": "none"},
  transition: (params, {theme: theme2}) => ({
    transitionProperty: theme2("transitionProperty", params),
    transitionTimingFunction: theme2("transitionTimingFunction", ""),
    transitionDuration: theme2("transitionDuration", "")
  }),
  container: (params, {theme: theme2}) => {
    const {screens = theme2("screens"), center, padding: padding2} = theme2("container");
    const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
      paddingRight: _,
      paddingLeft: _
    } : {};
    return Object.keys(screens).reduce((rules2, screen) => {
      if (($ = screens[screen]) && typeof $ == "string") {
        rules2[buildMediaQuery($)] = {
          "&": {
            "max-width": $,
            ...paddingFor(screen)
          }
        };
      }
      return rules2;
    }, {
      width: "100%",
      ...center ? {marginRight: "auto", marginLeft: "auto"} : {},
      ...paddingFor("xs")
    });
  }
};

// src/twind/preflight.ts
var createPreflight = (theme2) => ({
  ":root": {tabSize: 4},
  "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {margin: "0"},
  button: {backgroundColor: "transparent", backgroundImage: "none"},
  'button,[type="button"],[type="reset"],[type="submit"]': {WebkitAppearance: "button"},
  "button:focus": {outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]},
  "fieldset,ol,ul,legend": {padding: "0"},
  "ol,ul": {listStyle: "none"},
  html: {
    lineHeight: "1.5",
    WebkitTextSizeAdjust: "100%",
    fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
  },
  body: {fontFamily: "inherit", lineHeight: "inherit"},
  "*,::before,::after": {
    boxSizing: "border-box",
    border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
  },
  hr: {height: "0", color: "inherit", borderTopWidth: "1px"},
  img: {borderStyle: "solid"},
  textarea: {resize: "vertical"},
  "input::placeholder,textarea::placeholder": {
    opacity: "1",
    color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
  },
  'button,[role="button"]': {cursor: "pointer"},
  table: {textIndent: "0", borderColor: "inherit", borderCollapse: "collapse"},
  "h1,h2,h3,h4,h5,h6": {fontSize: "inherit", fontWeight: "inherit"},
  a: {color: "inherit", textDecoration: "inherit"},
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    margin: "0",
    padding: "0",
    lineHeight: "inherit",
    color: "inherit"
  },
  "button,select": {textTransform: "none"},
  "::-moz-focus-inner": {borderStyle: "none", padding: "0"},
  ":-moz-focusring": {outline: "1px dotted ButtonText"},
  ":-moz-ui-invalid": {boxShadow: "none"},
  progress: {verticalAlign: "baseline"},
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {height: "auto"},
  '[type="search"]': {WebkitAppearance: "textfield", outlineOffset: "-2px"},
  "::-webkit-search-decoration": {WebkitAppearance: "none"},
  "::-webkit-file-upload-button": {WebkitAppearance: "button", font: "inherit"},
  summary: {display: "list-item"},
  "abbr[title]": {textDecoration: "underline dotted"},
  "b,strong": {fontWeight: "bolder"},
  "pre,code,kbd,samp": {
    fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
    fontSize: "1em"
  },
  "sub,sup": {fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline"},
  sub: {bottom: "-0.25em"},
  sup: {top: "-0.5em"},
  "img,svg,video,canvas,audio,iframe,embed,object": {display: "block", verticalAlign: "middle"},
  "img,video": {maxWidth: "100%", height: "auto"}
});

// src/twind/variants.ts
var coreVariants = {
  dark: "@media (prefers-color-scheme:dark)",
  sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
  "motion-reduce": "@media (prefers-reduced-motion:reduce)",
  "motion-safe": "@media (prefers-reduced-motion:no-preference)",
  first: "&:first-child",
  last: "&:last-child",
  even: "&:nth-child(2n)",
  odd: "&:nth-child(odd)",
  children: "&>*",
  siblings: "&~*",
  sibling: "&+*",
  override: "&&"
};

// src/internal/dom.ts
var STYLE_ELEMENT_ID = "__twind";
var getStyleElement = (nonce) => {
  let element = self[STYLE_ELEMENT_ID];
  if (!element) {
    element = document.head.appendChild(document.createElement("style"));
    element.id = STYLE_ELEMENT_ID;
    nonce && (element.nonce = nonce);
    element.appendChild(document.createTextNode(""));
  }
  return element;
};

// src/twind/sheets.ts
var cssomSheet = ({
  nonce,
  target = getStyleElement(nonce).sheet
} = {}) => {
  const offset = target.cssRules.length;
  return {
    target,
    insert: (rule, index) => target.insertRule(rule, offset + index)
  };
};
var voidSheet = () => ({
  target: null,
  insert: noop
});

// src/twind/modes.ts
var mode = (report) => ({
  unknown(section, key = [], optional, context) {
    if (!optional) {
      this.report({id: "UNKNOWN_THEME_VALUE", key: join([section, ...key], ".")}, context);
    }
  },
  report({id, ...info}) {
    const message = `[${id}] ${JSON.stringify(info)}`;
    const stack = (new Error(message).stack || message).split("at ");
    for (let frame; (frame = stack.splice(1, 1)[0]) && !/(^|\.)(tw|setup) /.test(frame); ) {
    }
    return report(stack.join("at "));
  }
});
var warn = mode((message) => console.warn(message));
var strict = mode((message) => {
  throw new Error(message);
});
var silent = mode(noop);

// src/twind/prefix.ts
var import_style_vendorizer = __toModule(__webpack_require__(/*! style-vendorizer */ "style-vendorizer"));
var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
var autoprefix = (property2, value, important) => {
  let cssText = "";
  const propertyAlias = import_style_vendorizer.cssPropertyAlias(property2);
  if (propertyAlias)
    cssText += `${noprefix(propertyAlias, value, important)};`;
  let flags = import_style_vendorizer.cssPropertyPrefixFlags(property2);
  if (flags & 1)
    cssText += `-webkit-${noprefix(property2, value, important)};`;
  if (flags & 2)
    cssText += `-moz-${noprefix(property2, value, important)};`;
  if (flags & 4)
    cssText += `-ms-${noprefix(property2, value, important)};`;
  flags = import_style_vendorizer.cssValuePrefixFlags(property2, value);
  if (flags & 1)
    cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
  if (flags & 2)
    cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
  if (flags & 4)
    cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
  cssText += noprefix(property2, value, important);
  return cssText;
};

// src/twind/theme.ts
var ratios = (start, end) => {
  const result = {};
  do {
    for (let dividend = 1; dividend < start; dividend++) {
      result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
    }
  } while (++start <= end);
  return result;
};
var exponential = (stop, unit, start = 0) => {
  const result = {};
  for (; start <= stop; start = start * 2 || 1) {
    result[start] = start + unit;
  }
  return result;
};
var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1) => {
  const result = {};
  for (; start <= stop; start += step) {
    result[start] = start / divideBy + unit;
  }
  return result;
};
var alias2 = (section) => (theme2) => theme2(section);
var themeFactory = (args, {theme: theme2}) => theme2(...args);
var theme = (...args) => directive(themeFactory, args);
var defaultTheme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    yellow: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    green: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    }
  },
  spacing: {
    px: "1px",
    0: "0px",
    ...linear(4, "rem", 4, 0.5, 0.5),
    ...linear(12, "rem", 4, 5),
    14: "3.5rem",
    ...linear(64, "rem", 4, 16, 4),
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite"
  },
  backgroundColor: alias2("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: alias2("opacity"),
  borderColor: (theme2) => ({
    ...theme2("colors"),
    DEFAULT: theme2("colors.gray.200", "currentColor")
  }),
  borderOpacity: alias2("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px"
  },
  borderWidth: {
    DEFAULT: "1px",
    ...exponential(8, "px")
  },
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none"
  },
  container: {},
  divideColor: alias2("borderColor"),
  divideOpacity: alias2("borderOpacity"),
  divideWidth: alias2("borderWidth"),
  fill: {current: "currentColor"},
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: ["0.75rem", "1rem"],
    sm: ["0.875rem", "1.25rem"],
    base: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "1.75rem"],
    "2xl": ["1.5rem", "2rem"],
    "3xl": ["1.875rem", "2.25rem"],
    "4xl": ["2.25rem", "2.5rem"],
    "5xl": ["3rem", "1"],
    "6xl": ["3.75rem", "1"],
    "7xl": ["4.5rem", "1"],
    "8xl": ["6rem", "1"],
    "9xl": ["8rem", "1"]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gap: alias2("spacing"),
  gradientColorStops: alias2("colors"),
  height: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 6),
    full: "100%",
    screen: "100vh"
  }),
  inset: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 4),
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    ...linear(10, "rem", 4, 3)
  },
  margin: (theme2) => ({
    auto: "auto",
    ...theme2("spacing")
  }),
  maxHeight: (theme2) => ({
    ...theme2("spacing"),
    full: "100%",
    screen: "100vh"
  }),
  maxWidth: (theme2, {breakpoints}) => ({
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    prose: "65ch",
    ...breakpoints(theme2("screens"))
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content"
  },
  opacity: {
    ...linear(100, "", 100, 0, 10),
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    first: "-9999",
    last: "9999",
    none: "0",
    ...linear(12, "", 1, 1)
  },
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: alias2("spacing"),
  placeholderColor: alias2("colors"),
  placeholderOpacity: alias2("opacity"),
  ringColor: (theme2) => ({
    DEFAULT: theme2("colors.blue.500", "#3b82f6"),
    ...theme2("colors")
  }),
  ringOffsetColor: alias2("colors"),
  ringOffsetWidth: exponential(8, "px"),
  ringOpacity: (theme2) => ({
    DEFAULT: "0.5",
    ...theme2("opacity")
  }),
  ringWidth: {
    DEFAULT: "3px",
    ...exponential(8, "px")
  },
  rotate: {
    ...exponential(2, "deg"),
    ...exponential(12, "deg", 3),
    ...exponential(180, "deg", 45)
  },
  scale: {
    0: "0",
    50: ".5",
    75: ".75",
    ...linear(110, "", 100, 90, 5),
    125: "1.25",
    150: "1.5"
  },
  skew: {
    ...exponential(2, "deg"),
    ...exponential(12, "deg", 3)
  },
  space: alias2("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: linear(2),
  textColor: alias2("colors"),
  textOpacity: alias2("opacity"),
  transitionDuration: (theme2) => ({
    DEFAULT: "150ms",
    ...theme2("durations")
  }),
  transitionDelay: alias2("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
    colors: "background-color,border-color,color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: (theme2) => ({
    ...theme2("spacing"),
    ...ratios(2, 4),
    full: "100%"
  }),
  width: (theme2) => ({
    auto: "auto",
    ...theme2("spacing"),
    ...ratios(2, 6),
    ...ratios(12, 12),
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: {
    auto: "auto",
    ...linear(50, "", 1, 0, 10)
  }
};
var flattenColorPalette = (colors, target = {}, prefix = []) => {
  Object.keys(colors).forEach((property2) => {
    const value = colors[property2];
    if (property2 === "DEFAULT") {
      target[join(prefix)] = value;
      target[join(prefix, ".")] = value;
    }
    const key = [...prefix, property2];
    target[join(key)] = value;
    target[join(key, ".")] = value;
    if (value && typeof value == "object") {
      flattenColorPalette(value, target, key);
    }
  }, target);
  return target;
};
var resolveContext = {
  negative: () => ({}),
  breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
    target["screen-" + key] = screens[key];
    return target;
  }, {})
};
var makeThemeResolver = (config) => {
  const cache = new Map();
  const theme2 = {...defaultTheme, ...config};
  const deref = (theme3, section) => {
    const base = theme3 && theme3[section];
    const value = typeof base == "function" ? base(resolve, resolveContext) : base;
    return value && section === "colors" ? flattenColorPalette(value) : value;
  };
  const resolve = (section, key, defaultValue) => {
    const keypath = section.split(".");
    section = keypath[0];
    if (keypath.length > 1) {
      defaultValue = key;
      key = join(tail(keypath), ".");
    }
    let base = cache.get(section);
    if (!base) {
      cache.set(section, base = {
        ...deref(theme2, section),
        ...deref(theme2.extend, section)
      });
    }
    if (key != null) {
      const value = base[(Array.isArray(key) ? join(key) : key) || "DEFAULT"];
      return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline"], section) ? join(value, ",") : value;
    }
    return base;
  };
  return resolve;
};

// src/twind/translate.ts
var translate = (plugins, context) => (rule, isTranslating) => {
  if (typeof rule.d == "function") {
    return rule.d(context);
  }
  const parameters = rule.d.split("-");
  if (!isTranslating && parameters[0] === "tw" && rule.$ === rule.d) {
    return rule.$;
  }
  for (let index = parameters.length; index; index--) {
    const id = join(parameters.slice(0, index));
    const plugin = plugins[id];
    if (plugin) {
      return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
    }
  }
};

// src/twind/decorate.ts
var _2;
var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
var decorate = (darkMode, variants, {theme: theme2, tag}) => {
  const applyVariant = (translation, variant) => {
    if (_2 = theme2("screens", tail(variant), "")) {
      return {[buildMediaQuery(_2)]: translation};
    }
    if (variant === ":dark" && darkMode === "class") {
      return {[`.dark &`]: translation};
    }
    if (_2 = GROUP_RE.exec(variant)) {
      return {[`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation};
    }
    return {[variants[tail(variant)] || "&" + variant]: translation};
  };
  return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
};

// src/twind/presedence.ts
var _3;
var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
var seperatorPrecedence = (string) => {
  _3 = 0;
  for (let index = string.length; index--; ) {
    _3 += includes("-:,", string[index]);
  }
  return _3;
};
var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
var PRECEDENCES_BY_PSEUDO_CLASS = [
  "rst",
  "st",
  "en",
  "d",
  "nk",
  "sited",
  "pty",
  "ecked",
  "cus-w",
  "ver",
  "cus",
  "cus-v",
  "tive",
  "sable",
  "ad-on",
  "tiona",
  "quire"
];
var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant === ":dark" ? 1 << 30 : (_3 = variants[variant] || variant)[0] === "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
var declarationPropertyPrecedence = (property2) => property2[0] === "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;

// src/twind/serialize.ts
var stringifyBlock = (body, selector) => selector + "{" + body + "}";
var Layer;
(function(Layer2) {
  Layer2[Layer2["base"] = 0] = "base";
  Layer2[Layer2["components"] = 1] = "components";
  Layer2[Layer2["utilities"] = 2] = "utilities";
  Layer2[Layer2["css"] = 3] = "css";
})(Layer || (Layer = {}));
var serialize = (prefix, variants, context) => {
  const {theme: theme2, tag} = context;
  const tagVar = (_4, property2) => "--" + tag(property2);
  const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
  const stringifyDeclaration = (property2, value, important) => {
    property2 = tagVars(property2);
    return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
  };
  let rules2;
  const stringify3 = (atRules, selector, presedence, css, important) => {
    let declarations = "";
    let maxPropertyPresedence = 0;
    let numberOfDeclarations = 0;
    if ("@apply" in css) {
      css = merge(evalThunk(apply(css["@apply"]), context), {...css, "@apply": void 0}, context);
    }
    Object.keys(css).forEach((key) => {
      const value = evalThunk(css[key], context);
      if (includes("rg", (typeof value)[5]) || Array.isArray(value)) {
        if (value !== "" && key.length > 1) {
          const property2 = hyphenate(key);
          numberOfDeclarations += 1;
          maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
          declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
        }
      } else if (value) {
        if (key[0] === "@") {
          if (key[1] === "f") {
            stringify3([], key, 0, value, important);
          } else if (key[1] === "k") {
            const currentSize = rules2.length;
            stringify3([], "", 0, value, important);
            const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
            rules2.push({
              r: stringifyBlock(join(waypoints.map((p) => p.r), ""), key),
              p: waypoints.reduce((sum, p) => sum + p.p, 0)
            });
          } else {
            if (key.slice(1, 8) == "screen ") {
              key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
            }
            stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
          }
        } else if (key === ":global") {
          stringify3([], "", 0, value, important);
        } else {
          stringify3(atRules, selector ? selector.replace(/([^,])+/g, (selectorPart) => key.replace(/([^,])+/g, (keyPart) => includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart)) : key, presedence, value, important);
        }
      }
    });
    if (numberOfDeclarations) {
      rules2.push({
        r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
        p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
      });
    }
  };
  const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
  return (css, className, rule, layer = 0) => {
    layer <<= 28;
    rules2 = [];
    stringify3([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
    return rules2;
  };
};

// src/twind/inject.ts
var inject = (sheet, mode2, init, context) => {
  let sortedPrecedences;
  init((value = []) => sortedPrecedences = value);
  let insertedRules;
  init((value = new Set()) => insertedRules = value);
  return ({r: css, p: presedence}) => {
    if (!insertedRules.has(css)) {
      insertedRules.add(css);
      const index = sortedInsertionIndex(sortedPrecedences, presedence);
      try {
        sheet.insert(css, index);
        sortedPrecedences.splice(index, 0, presedence);
      } catch (error) {
        if (!/:-[mwo]/.test(css)) {
          mode2.report({id: "INJECT_CSS_ERROR", css, error}, context);
        }
      }
    }
  };
};

// src/twind/configure.ts
var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
var loadMode = (mode2) => (typeof mode2 == "string" ? {t: strict, a: warn, i: silent}[mode2[1]] : mode2) || warn;
var stringifyVariant = (selector, variant) => selector + (variant[1] === ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
var stringify2 = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.n ? "-" : "") + directive2 + (rule.i ? "!" : "");
var COMPONENT_PROPS = {_: {value: "", writable: true}};
var configure = (config = {}) => {
  const theme2 = makeThemeResolver(config.theme);
  const mode2 = loadMode(config.mode);
  const hash = sanitize(config.hash, false, false, cyrb32);
  let activeRule = {v: []};
  let translateDepth = 0;
  const lastTranslations = [];
  const context = {
    tw: (...tokens) => process(tokens),
    theme: (section, key, defaultValue) => {
      if (key != null && !key.length) {
        key = "DEFAULT";
      }
      const value = theme2(section, key, defaultValue) || mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
      return activeRule.n && value && typeof value == "string" ? `calc(${value} * -1)` : value;
    },
    tag: (value) => hash ? hash(value) : value,
    css: (rules2) => {
      translateDepth++;
      const lastTranslationsIndex = lastTranslations.length;
      try {
        ;
        (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
        const css = Object.create(null, COMPONENT_PROPS);
        for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
          const translation = lastTranslations[index];
          if (translation) {
            switch (typeof translation) {
              case "object":
                merge(css, translation, context);
                break;
              case "string":
                css._ += (css._ && " ") + translation;
            }
          }
        }
        return css;
      } finally {
        lastTranslations.length = lastTranslationsIndex;
        translateDepth--;
      }
    }
  };
  const translate2 = translate({...corePlugins, ...config.plugins}, context);
  const doTranslate = (rule) => {
    const parentRule = activeRule;
    activeRule = rule;
    try {
      return evalThunk(translate2(rule), context);
    } finally {
      activeRule = parentRule;
    }
  };
  const variants = {...coreVariants, ...config.variants};
  const decorate2 = decorate(config.darkMode || "media", variants, context);
  const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
  const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
  const {init = (callback) => callback()} = sheet;
  const inject2 = inject(sheet, mode2, init, context);
  let idToClassName;
  init((value = new Map()) => idToClassName = value);
  const inlineDirectiveName = new WeakMap();
  const evaluateFunctions = (key, value) => typeof value == "function" ? JSON.stringify(value(context), evaluateFunctions) : value;
  const convert = (rule) => {
    if (!translateDepth && activeRule.v.length) {
      rule = {...rule, v: [...activeRule.v, ...rule.v], $: ""};
    }
    if (!rule.$) {
      rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
    }
    let className = translateDepth ? null : idToClassName.get(rule.$);
    if (className == null) {
      let translation = doTranslate(rule);
      if (!rule.$) {
        rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
        inlineDirectiveName.set(rule.d, rule.$);
        rule.$ = stringify2(rule, rule.$);
      }
      if (translation && typeof translation == "object") {
        translation = decorate2(translation, rule);
        if (translateDepth) {
          lastTranslations.push(translation);
        } else {
          const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
          className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
          serialize2(translation, className, rule, layer).forEach(inject2);
          if (translation._) {
            className += " " + translation._;
          }
        }
      } else {
        if (typeof translation == "string") {
          className = translation;
        } else {
          className = rule.$;
          mode2.report({id: "UNKNOWN_DIRECTIVE", rule: className}, context);
        }
        if (translateDepth && typeof rule.d !== "function") {
          lastTranslations.push(className);
        }
      }
      if (!translateDepth) {
        idToClassName.set(rule.$, className);
        ensureMaxSize(idToClassName, 3e4);
      }
    }
    return className;
  };
  const process = (tokens) => parse(tokens).map(convert).filter(Boolean).join(" ");
  const preflight = sanitize(config.preflight, identity, false);
  if (preflight) {
    const css = createPreflight(theme2);
    const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : {...css, ...preflight});
    init((injected = (styles.forEach(inject2), true)) => injected);
  }
  return {
    init: () => mode2.report({id: "LATE_SETUP_CALL"}, context),
    process
  };
};

// src/twind/instance.ts
var create = (config) => {
  let process = (tokens) => {
    init();
    return process(tokens);
  };
  let init = (config2) => {
    ;
    ({process, init} = configure(config2));
  };
  if (config)
    init(config);
  let context;
  const fromContext = (key) => () => {
    if (!context) {
      process([
        (_4) => {
          context = _4;
          return "";
        }
      ]);
    }
    return context[key];
  };
  return {
    tw: Object.defineProperties((...tokens) => process(tokens), {
      theme: {
        get: fromContext("theme")
      }
    }),
    setup: (config2) => init(config2)
  };
};

// src/twind/default.ts
var {tw, setup} = create();
//# sourceMappingURL=twind.cjs.map


/***/ }),

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var twind_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! twind/server */ "./node_modules/twind/server/server.cjs");
/* harmony import */ var twind_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(twind_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _twind_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../twind.config */ "./src/twind.config.js");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/pages/_document.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sheet = Object(twind_server__WEBPACK_IMPORTED_MODULE_4__["asyncVirtualSheet"])();
Object(twind__WEBPACK_IMPORTED_MODULE_3__["setup"])(_objectSpread(_objectSpread({}, _twind_config__WEBPACK_IMPORTED_MODULE_5__["default"]), {}, {
  sheet
}));

class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps(ctx) {
    sheet.reset();
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
    const {
      id,
      textContent
    } = Object(twind_server__WEBPACK_IMPORTED_MODULE_4__["getStyleTagProperties"])(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent
      }
    };
    return _objectSpread(_objectSpread({}, initialProps), {}, {
      styles: [// eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...initialProps.styles, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](`style`, styleProps)]
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          async: true,
          src: "https://scripts.simpleanalyticscdn.com/latest.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./src/twind.config.js":
/*!*****************************!*\
  !*** ./src/twind.config.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
      }
    }
  }
});

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./src/pages/_document.tsx");


/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async_hooks");

/***/ }),

/***/ "htmlparser2":
/*!******************************!*\
  !*** external "htmlparser2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("htmlparser2");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "style-vendorizer":
/*!***********************************!*\
  !*** external "style-vendorizer" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("style-vendorizer");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90d2luZC9zZXJ2ZXIvc2VydmVyLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHdpbmQvc2hlZXRzL3NoZWV0cy5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R3aW5kL3NoaW0vc2VydmVyL3NlcnZlci5janMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R3aW5kL3R3aW5kLmNqcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdHdpbmQuY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jX2hvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHRtbHBhcnNlcjJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZS12ZW5kb3JpemVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJzaGFyZWRGaWxlcyIsInBhZ2VGaWxlcyIsImluQW1wTW9kZSIsImFsbEZpbGVzIiwiQ29tcG9uZW50IiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY3R4Iiwic3R5bGVzIiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJwcm9jZXNzIiwiRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwiZ2V0Q3NzTGlua3MiLCJjc3NGaWxlcyIsImYiLCJ1bm1hbmdlZEZpbGVzIiwiZHluYW1pY0Nzc0ZpbGVzIiwiZGVkdXBlIiwiZHluYW1pY0ltcG9ydHMiLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImZpbGUiLCJpc1NoYXJlZEZpbGUiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwic2NyaXB0TG9hZGVyIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsIlJlYWN0IiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInVybCIsIm5ld1Byb3BzIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJ1bnN0YWJsZV9Kc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwiaGVhZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwiY29uc29sZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwidHlwZSIsIk9iamVjdCIsInByb3AiLCJfX05FWFRfREFUQV9fIiwicGFnZSIsImN1clN0eWxlcyIsIkFycmF5IiwiaGFzU3R5bGVzIiwiZWwiLCJnZXREb2N1bWVudEZpbGVzIiwiX19odG1sIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImhlYWRUYWdzIiwiSGVhZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwibm9uY2UiLCJQcm9wVHlwZXMiLCJjcm9zc09yaWdpbiIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsImdldFByZU5leHRTY3JpcHRzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJidWlsZE1hbmlmZXN0IiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImVyciIsImFtcERldkZpbGVzIiwiTmV4dFNjcmlwdCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCIsInNoZWV0IiwiYXN5bmNWaXJ0dWFsU2hlZXQiLCJzZXR1cCIsInR3aW5kQ29uZmlnIiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsInJlc2V0IiwiaW5pdGlhbFByb3BzIiwiaWQiLCJ0ZXh0Q29udGVudCIsImdldFN0eWxlVGFnUHJvcGVydGllcyIsInN0eWxlUHJvcHMiLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsInRoZW1lIiwiZXh0ZW5kIiwiZm9udEZhbWlseSIsInNhbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztR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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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QUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVdEOztBQXBDK0I7O0FBdUNuQnVGLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFlO0FBQ2JVLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFDTkMsZ0JBQVUsRUFBRTtBQUNWQyxZQUFJLEVBQUc7QUFDZjtBQUNBO0FBSGtCO0FBRE47QUFESDtBQURNLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGVkdXBlPFQgZXh0ZW5kcyB7IGZpbGU6IHN0cmluZyB9PihidW5kbGVzOiBUW10pOiBUW10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGtlcHQ6IFRbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBidW5kbGUgb2YgYnVuZGxlcykge1xuICAgIGlmIChmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKSBjb250aW51ZVxuICAgIGZpbGVzLmFkZChidW5kbGUuZmlsZSlcbiAgICBrZXB0LnB1c2goYnVuZGxlKVxuICB9XG4gIHJldHVybiBrZXB0XG59XG5cbnR5cGUgRG9jdW1lbnRGaWxlcyA9IHtcbiAgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgYWxsRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3QsXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGluQW1wTW9kZTogYm9vbGVhblxuKTogRG9jdW1lbnRGaWxlcyB7XG4gIGNvbnN0IHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCAnL19hcHAnKVxuICBjb25zdCBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gaW5BbXBNb2RlXG4gICAgPyBbXVxuICAgIDogZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKVxuXG4gIHJldHVybiB7XG4gICAgc2hhcmVkRmlsZXMsXG4gICAgcGFnZUZpbGVzLFxuICAgIGFsbEZpbGVzOiBbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsIC4uLnBhZ2VGaWxlc10pXSxcbiAgfVxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgc3RhdGljIGhlYWRUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaGVhZC10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuXG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudENvbXBvbmVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wc30+XG4gICAgICAgIDxEb2N1bWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIGNvbnN0IHNoYXJlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpXG5cbiAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgIGxldCB1bm1hbmdlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW10pXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IGRlZHVwZShcbiAgICAgIGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZikgPT4gZi5maWxlLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgKS5tYXAoKGYpID0+IGYuZmlsZSlcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGxldCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuXG4gICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjc3NMaW5rRWxlbWVudHMucHVzaChcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgKSB7XG4gICAgICBjc3NMaW5rRWxlbWVudHMgPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoXG4gICAgICAgIGNzc0xpbmtFbGVtZW50c1xuICAgICAgKSBhcyBSZWFjdEVsZW1lbnRbXVxuICAgIH1cblxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBzY3JpcHRMb2FkZXIsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICB9KVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLihzY3JpcHRMb2FkZXIuZWFnZXIgfHwgW10pLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZS5zcmN9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17ZmlsZS5zcmN9XG4gICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSksXG4gICAgICAuLi4oc2NyaXB0TG9hZGVyLmRlZmVyIHx8IFtdKS5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtmaWxlfVxuICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApKSxcbiAgICBdXG4gIH1cblxuICBtYWtlU3R5bGVzaGVldEluZXJ0KG5vZGU6IFJlYWN0Tm9kZSk6IFJlYWN0Tm9kZVtdIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgdW5zdGFibGVfSnNQcmVsb2FkLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuICAgIGNvbnN0IGRpc2FibGVKc1ByZWxvYWQgPSB1bnN0YWJsZV9Kc1ByZWxvYWQgPT09IGZhbHNlXG5cbiAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHRcbiAgICBsZXQgY3NzUHJlbG9hZHM6IEFycmF5PEpTWC5FbGVtZW50PiA9IFtdXG4gICAgbGV0IG90aGVySGVhZEVsZW1lbnRzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXVxuICAgIGlmIChoZWFkKSB7XG4gICAgICBoZWFkLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMgJiZcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ3JlbCddID09PSAncHJlbG9hZCcgJiZcbiAgICAgICAgICBjLnByb3BzWydhcyddID09PSAnc3R5bGUnXG4gICAgICAgICkge1xuICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjICYmIG90aGVySGVhZEVsZW1lbnRzLnB1c2goYylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGhlYWQgPSBjc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpXG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQ/LnByb3BzPy5bJ2RhdGEtcmVhY3QtaGVsbWV0J11cbiAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgaWYgKGNoaWxkPy50eXBlID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXRpdGxlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgY2hpbGQ/LnR5cGUgPT09ICdtZXRhJyAmJlxuICAgICAgICAgICAgY2hpbGQ/LnByb3BzPy5uYW1lID09PSAndmlld3BvcnQnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgIWluQW1wTW9kZVxuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8aGVhZCB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0XG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6YmxvY2t9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aGVhZH1cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwibmV4dC1oZWFkLWNvdW50XCJcbiAgICAgICAgICBjb250ZW50PXtSZWFjdC5DaGlsZHJlbi5jb3VudChoZWFkIHx8IFtdKS50b1N0cmluZygpfVxuICAgICAgICAvPlxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHshcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAoXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJlxuICAgICAgICAgICAgICAhZGlzYWJsZUpzUHJlbG9hZCAmJlxuICAgICAgICAgICAgICB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiZcbiAgICAgICAgICAgICAgIWRpc2FibGVKc1ByZWxvYWQgJiZcbiAgICAgICAgICAgICAgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgKFxuICAgICAgICAgICAgICA8bm9zY3JpcHQgZGF0YS1uLWNzcz17dGhpcy5wcm9wcy5ub25jZSA/PyAnJ30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbCwgZG9jQ29tcG9uZW50c1JlbmRlcmVkIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlXG5cbiAgaWYgKGluQW1wTW9kZSkgcmV0dXJuIDw+e0FNUF9SRU5ERVJfVEFSR0VUfTwvPlxuICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxufVxuXG5leHBvcnQgY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxPcmlnaW5Qcm9wcz4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaXNEZXZlbG9wbWVudCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gKHNjcmlwdExvYWRlci5lYWdlciB8fCBbXSkubWFwKChmaWxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB7Li4uZmlsZX1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IFJlYWRvbmx5PERvY3VtZW50UHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxcbiAgICAgIGluQW1wTW9kZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGFyZ2V0LCBtb2R1bGUyLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUyICYmIHR5cGVvZiBtb2R1bGUyID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBtb2R1bGUyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlMikpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRhcmdldCwga2V5KSAmJiBrZXkgIT09IFwiZGVmYXVsdFwiKVxuICAgICAgICBfX2RlZlByb3AodGFyZ2V0LCBrZXksIHtnZXQ6ICgpID0+IG1vZHVsZTJba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhtb2R1bGUyLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZTIpID0+IHtcbiAgaWYgKG1vZHVsZTIgJiYgbW9kdWxlMi5fX2VzTW9kdWxlKVxuICAgIHJldHVybiBtb2R1bGUyO1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUyICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kdWxlMikpIDoge30sIFwiZGVmYXVsdFwiLCB7dmFsdWU6IG1vZHVsZTIsIGVudW1lcmFibGU6IHRydWV9KSksIG1vZHVsZTIpO1xufTtcblxuLy8gc3JjL3NlcnZlci9pbmRleC50c1xuX19tYXJrQXNNb2R1bGUoZXhwb3J0cyk7XG5fX2V4cG9ydChleHBvcnRzLCB7XG4gIGFzeW5jVmlydHVhbFNoZWV0OiAoKSA9PiBhc3luY1ZpcnR1YWxTaGVldCxcbiAgZ2V0U3R5bGVUYWc6ICgpID0+IGltcG9ydF9zaGVldHMyLmdldFN0eWxlVGFnLFxuICBnZXRTdHlsZVRhZ1Byb3BlcnRpZXM6ICgpID0+IGltcG9ydF9zaGVldHMyLmdldFN0eWxlVGFnUHJvcGVydGllcyxcbiAgc2hpbTogKCkgPT4gaW1wb3J0X3NlcnZlci5zaGltLFxuICB2aXJ0dWFsU2hlZXQ6ICgpID0+IGltcG9ydF9zaGVldHMyLnZpcnR1YWxTaGVldFxufSk7XG52YXIgaW1wb3J0X2FzeW5jX2hvb2tzID0gX190b01vZHVsZShyZXF1aXJlKFwiYXN5bmNfaG9va3NcIikpO1xudmFyIGltcG9ydF9zaGVldHMgPSBfX3RvTW9kdWxlKHJlcXVpcmUoXCIuLi9zaGVldHMvc2hlZXRzLmNqc1wiKSk7XG52YXIgaW1wb3J0X3NoZWV0czIgPSBfX3RvTW9kdWxlKHJlcXVpcmUoXCIuLi9zaGVldHMvc2hlZXRzLmNqc1wiKSk7XG52YXIgaW1wb3J0X3NlcnZlciA9IF9fdG9Nb2R1bGUocmVxdWlyZShcIi4uL3NoaW0vc2VydmVyL3NlcnZlci5janNcIikpO1xudmFyIGFzeW5jVmlydHVhbFNoZWV0ID0gKCkgPT4ge1xuICBjb25zdCBzaGVldCA9IGltcG9ydF9zaGVldHMudmlydHVhbFNoZWV0KCk7XG4gIGNvbnN0IGluaXRpYWwgPSBzaGVldC5yZXNldCgpO1xuICBjb25zdCBzdG9yZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgYXN5bmNIb29rID0gaW1wb3J0X2FzeW5jX2hvb2tzLmNyZWF0ZUhvb2soe1xuICAgIGluaXQoYXN5bmNJZCwgdHlwZSwgdHJpZ2dlckFzeW5jSWQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gc3RvcmUuZ2V0KHRyaWdnZXJBc3luY0lkKTtcbiAgICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgICBzdG9yZS5zZXQoYXN5bmNJZCwgc25hcHNob3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlKGFzeW5jSWQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gc3RvcmUuZ2V0KGFzeW5jSWQpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHNoZWV0LnJlc2V0KHNuYXBzaG90LnN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyKGFzeW5jSWQpIHtcbiAgICAgIGNvbnN0IHNuYXBzaG90ID0gc3RvcmUuZ2V0KGFzeW5jSWQpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHNuYXBzaG90LnN0YXRlID0gc2hlZXQucmVzZXQoaW5pdGlhbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95KGFzeW5jSWQpIHtcbiAgICAgIHN0b3JlLmRlbGV0ZShhc3luY0lkKTtcbiAgICB9XG4gIH0pLmVuYWJsZSgpO1xuICByZXR1cm4ge1xuICAgIGdldCB0YXJnZXQoKSB7XG4gICAgICByZXR1cm4gc2hlZXQudGFyZ2V0O1xuICAgIH0sXG4gICAgaW5zZXJ0OiBzaGVldC5pbnNlcnQsXG4gICAgaW5pdDogc2hlZXQuaW5pdCxcbiAgICByZXNldDogKCkgPT4ge1xuICAgICAgY29uc3QgYXN5bmNJZCA9IGltcG9ydF9hc3luY19ob29rcy5leGVjdXRpb25Bc3luY0lkKCk7XG4gICAgICBjb25zdCBzbmFwc2hvdCA9IHN0b3JlLmdldChhc3luY0lkKTtcbiAgICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgICBzbmFwc2hvdC5zdGF0ZSA9IHZvaWQgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChhc3luY0lkLCB7c3RhdGU6IHZvaWQgMH0pO1xuICAgICAgfVxuICAgICAgc2hlZXQucmVzZXQoKTtcbiAgICB9LFxuICAgIGVuYWJsZTogKCkgPT4gYXN5bmNIb29rLmVuYWJsZSgpLFxuICAgIGRpc2FibGU6ICgpID0+IGFzeW5jSG9vay5kaXNhYmxlKClcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXJ2ZXIuY2pzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7Z2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWV9KTtcbn07XG5cbi8vIHNyYy9zaGVldHMvaW5kZXgudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBkb21TaGVldDogKCkgPT4gZG9tU2hlZXQsXG4gIGdldFN0eWxlVGFnOiAoKSA9PiBnZXRTdHlsZVRhZyxcbiAgZ2V0U3R5bGVUYWdQcm9wZXJ0aWVzOiAoKSA9PiBnZXRTdHlsZVRhZ1Byb3BlcnRpZXMsXG4gIHZpcnR1YWxTaGVldDogKCkgPT4gdmlydHVhbFNoZWV0XG59KTtcblxuLy8gc3JjL2ludGVybmFsL2RvbS50c1xudmFyIFNUWUxFX0VMRU1FTlRfSUQgPSBcIl9fdHdpbmRcIjtcbnZhciBnZXRTdHlsZUVsZW1lbnQgPSAobm9uY2UpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBzZWxmW1NUWUxFX0VMRU1FTlRfSURdO1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpO1xuICAgIGVsZW1lbnQuaWQgPSBTVFlMRV9FTEVNRU5UX0lEO1xuICAgIG5vbmNlICYmIChlbGVtZW50Lm5vbmNlID0gbm9uY2UpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLy8gc3JjL3NoZWV0cy9pbmRleC50c1xudmFyIGRvbVNoZWV0ID0gKHtcbiAgbm9uY2UsXG4gIHRhcmdldCA9IGdldFN0eWxlRWxlbWVudChub25jZSlcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBvZmZzZXQgPSB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0LFxuICAgIGluc2VydDogKHJ1bGUsIGluZGV4KSA9PiB0YXJnZXQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpLCB0YXJnZXQuY2hpbGROb2Rlc1tvZmZzZXQgKyBpbmRleF0pXG4gIH07XG59O1xudmFyIGNyZWF0ZVN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbGxiYWNrcyA9IFtdO1xuICBsZXQgc3RhdGUgPSBbXTtcbiAgY29uc3QgaW52b2tlID0gKGNhbGxiYWNrLCBpbmRleCkgPT4gc3RhdGVbaW5kZXhdID0gY2FsbGJhY2soc3RhdGVbaW5kZXhdKTtcbiAgcmV0dXJuIHtcbiAgICBpbml0OiAoY2FsbGJhY2spID0+IGludm9rZShjYWxsYmFjaywgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spIC0gMSksXG4gICAgcmVzZXQ6IChzbmFwc2hvdCA9IFtdKSA9PiB7XG4gICAgICA7XG4gICAgICBbc25hcHNob3QsIHN0YXRlXSA9IFtzdGF0ZSwgc25hcHNob3RdO1xuICAgICAgY2FsbGJhY2tzLmZvckVhY2goaW52b2tlKTtcbiAgICAgIHJldHVybiBzbmFwc2hvdDtcbiAgICB9XG4gIH07XG59O1xudmFyIHZpcnR1YWxTaGVldCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZVN0b3JhZ2UoKTtcbiAgbGV0IHRhcmdldDtcbiAgc3RvcmFnZS5pbml0KCh2YWx1ZSA9IFtdKSA9PiB0YXJnZXQgPSB2YWx1ZSk7XG4gIHJldHVybiB7XG4gICAgLi4uc3RvcmFnZSxcbiAgICBnZXQgdGFyZ2V0KCkge1xuICAgICAgcmV0dXJuIFsuLi50YXJnZXRdO1xuICAgIH0sXG4gICAgaW5zZXJ0OiAocnVsZSwgaW5kZXgpID0+IHRhcmdldC5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpXG4gIH07XG59O1xudmFyIGdldFN0eWxlVGFnUHJvcGVydGllcyA9IChzaGVldCkgPT4gKHtcbiAgaWQ6IFNUWUxFX0VMRU1FTlRfSUQsXG4gIHRleHRDb250ZW50OiAoQXJyYXkuaXNBcnJheShzaGVldCkgPyBzaGVldCA6IHNoZWV0LnRhcmdldCkuam9pbihcIlwiKVxufSk7XG52YXIgZ2V0U3R5bGVUYWcgPSAoc2hlZXQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3Qge2lkLCB0ZXh0Q29udGVudH0gPSBnZXRTdHlsZVRhZ1Byb3BlcnRpZXMoc2hlZXQpO1xuICBhdHRyaWJ1dGVzID0gey4uLmF0dHJpYnV0ZXMsIGlkfTtcbiAgcmV0dXJuIGA8c3R5bGUke09iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZSgoYXR0cnMsIGtleSkgPT4gYCR7YXR0cnN9ICR7a2V5fT0ke0pTT04uc3RyaW5naWZ5KGF0dHJpYnV0ZXNba2V5XSl9YCwgXCJcIil9PiR7dGV4dENvbnRlbnR9PC9zdHlsZT5gO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoZWV0cy5janMubWFwXG4iLCJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGFyZ2V0LCBtb2R1bGUyLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUyICYmIHR5cGVvZiBtb2R1bGUyID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBtb2R1bGUyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlMikpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRhcmdldCwga2V5KSAmJiBrZXkgIT09IFwiZGVmYXVsdFwiKVxuICAgICAgICBfX2RlZlByb3AodGFyZ2V0LCBrZXksIHtnZXQ6ICgpID0+IG1vZHVsZTJba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhtb2R1bGUyLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZTIpID0+IHtcbiAgaWYgKG1vZHVsZTIgJiYgbW9kdWxlMi5fX2VzTW9kdWxlKVxuICAgIHJldHVybiBtb2R1bGUyO1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUyICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kdWxlMikpIDoge30sIFwiZGVmYXVsdFwiLCB7dmFsdWU6IG1vZHVsZTIsIGVudW1lcmFibGU6IHRydWV9KSksIG1vZHVsZTIpO1xufTtcblxuLy8gc3JjL3NoaW0vc2VydmVyL2luZGV4LnRzXG5fX21hcmtBc01vZHVsZShleHBvcnRzKTtcbl9fZXhwb3J0KGV4cG9ydHMsIHtcbiAgZ2V0U3R5bGVUYWc6ICgpID0+IGltcG9ydF9zaGVldHMuZ2V0U3R5bGVUYWcsXG4gIGdldFN0eWxlVGFnUHJvcGVydGllczogKCkgPT4gaW1wb3J0X3NoZWV0cy5nZXRTdHlsZVRhZ1Byb3BlcnRpZXMsXG4gIHNoaW06ICgpID0+IHNoaW0sXG4gIHZpcnR1YWxTaGVldDogKCkgPT4gaW1wb3J0X3NoZWV0cy52aXJ0dWFsU2hlZXRcbn0pO1xudmFyIGh0bWxwYXJzZXIyID0gX190b01vZHVsZShyZXF1aXJlKFwiaHRtbHBhcnNlcjJcIikpO1xudmFyIGltcG9ydF9fID0gX190b01vZHVsZShyZXF1aXJlKFwiLi4vLi4vdHdpbmQuY2pzXCIpKTtcbnZhciBpbXBvcnRfc2hlZXRzID0gX190b01vZHVsZShyZXF1aXJlKFwiLi4vLi4vc2hlZXRzL3NoZWV0cy5janNcIikpO1xudmFyIHtUb2tlbml6ZXJ9ID0gaHRtbHBhcnNlcjIuZGVmYXVsdCB8fCBodG1scGFyc2VyMjtcbnZhciBub29wID0gKCkgPT4gdm9pZCAwO1xudmFyIHNoaW0gPSAobWFya3VwLCBvcHRpb25zID0ge30pID0+IHtcbiAgY29uc3Qge3R3ID0gaW1wb3J0X18udHd9ID0gdHlwZW9mIG9wdGlvbnMgPT0gXCJmdW5jdGlvblwiID8ge3R3OiBvcHRpb25zfSA6IG9wdGlvbnM7XG4gIGxldCBsYXN0QXR0cmliTmFtZSA9IFwiXCI7XG4gIGxldCBsYXN0Q2h1bmtTdGFydCA9IDA7XG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBjb25zdCB0b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKHtcbiAgICBkZWNvZGVFbnRpdGllczogZmFsc2UsXG4gICAgeG1sTW9kZTogZmFsc2VcbiAgfSwge1xuICAgIG9uYXR0cmliZW5kOiBub29wLFxuICAgIG9uYXR0cmliZGF0YTogKHZhbHVlKSA9PiB7XG4gICAgICBpZiAobGFzdEF0dHJpYk5hbWUgPT09IFwiY2xhc3NcIikge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0b2tlbml6ZXIuZ2V0QWJzb2x1dGVJbmRleCgpO1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gdmFsdWUubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXJzZWRDbGFzc05hbWVzID0gdHcodmFsdWUpO1xuICAgICAgICBpZiAocGFyc2VkQ2xhc3NOYW1lcyAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBjaHVua3MucHVzaChtYXJrdXAuc2xpY2UobGFzdENodW5rU3RhcnQsIHN0YXJ0SW5kZXgpKTtcbiAgICAgICAgICBjaHVua3MucHVzaChwYXJzZWRDbGFzc05hbWVzKTtcbiAgICAgICAgICBsYXN0Q2h1bmtTdGFydCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGFzdEF0dHJpYk5hbWUgPSBcIlwiO1xuICAgIH0sXG4gICAgb25hdHRyaWJuYW1lOiAobmFtZSkgPT4ge1xuICAgICAgbGFzdEF0dHJpYk5hbWUgPSBuYW1lO1xuICAgIH0sXG4gICAgb25jZGF0YTogbm9vcCxcbiAgICBvbmNsb3NldGFnOiBub29wLFxuICAgIG9uY29tbWVudDogbm9vcCxcbiAgICBvbmRlY2xhcmF0aW9uOiBub29wLFxuICAgIG9uZW5kOiBub29wLFxuICAgIG9uZXJyb3I6IG5vb3AsXG4gICAgb25vcGVudGFnZW5kOiBub29wLFxuICAgIG9ub3BlbnRhZ25hbWU6IG5vb3AsXG4gICAgb25wcm9jZXNzaW5naW5zdHJ1Y3Rpb246IG5vb3AsXG4gICAgb25zZWxmY2xvc2luZ3RhZzogbm9vcCxcbiAgICBvbnRleHQ6IG5vb3BcbiAgfSk7XG4gIHRva2VuaXplci5lbmQobWFya3VwKTtcbiAgaWYgKCFjaHVua3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfVxuICByZXR1cm4gY2h1bmtzLmpvaW4oXCJcIikgKyBtYXJrdXAuc2xpY2UobGFzdENodW5rU3RhcnQgfHwgMCwgbWFya3VwLmxlbmd0aCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VydmVyLmNqcy5tYXBcbiIsInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19tYXJrQXNNb2R1bGUgPSAodGFyZ2V0KSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwge2dldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlfSk7XG59O1xudmFyIF9fZXhwb3J0U3RhciA9ICh0YXJnZXQsIG1vZHVsZTIsIGRlc2MpID0+IHtcbiAgaWYgKG1vZHVsZTIgJiYgdHlwZW9mIG1vZHVsZTIgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG1vZHVsZTIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhtb2R1bGUyKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwge2dldDogKCkgPT4gbW9kdWxlMltrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKG1vZHVsZTIsIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZX0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fdG9Nb2R1bGUgPSAobW9kdWxlMikgPT4ge1xuICBpZiAobW9kdWxlMiAmJiBtb2R1bGUyLl9fZXNNb2R1bGUpXG4gICAgcmV0dXJuIG1vZHVsZTI7XG4gIHJldHVybiBfX2V4cG9ydFN0YXIoX19tYXJrQXNNb2R1bGUoX19kZWZQcm9wKG1vZHVsZTIgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUyKSkgOiB7fSwgXCJkZWZhdWx0XCIsIHt2YWx1ZTogbW9kdWxlMiwgZW51bWVyYWJsZTogdHJ1ZX0pKSwgbW9kdWxlMik7XG59O1xuXG4vLyBzcmMvaW5kZXgudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBhcHBseTogKCkgPT4gYXBwbHksXG4gIGF1dG9wcmVmaXg6ICgpID0+IGF1dG9wcmVmaXgsXG4gIGNyZWF0ZTogKCkgPT4gY3JlYXRlLFxuICBjc3NvbVNoZWV0OiAoKSA9PiBjc3NvbVNoZWV0LFxuICBkaXJlY3RpdmU6ICgpID0+IGRpcmVjdGl2ZSxcbiAgaGFzaDogKCkgPT4gY3lyYjMyLFxuICBtb2RlOiAoKSA9PiBtb2RlLFxuICBub3ByZWZpeDogKCkgPT4gbm9wcmVmaXgsXG4gIHNldHVwOiAoKSA9PiBzZXR1cCxcbiAgc2lsZW50OiAoKSA9PiBzaWxlbnQsXG4gIHN0cmljdDogKCkgPT4gc3RyaWN0LFxuICB0aGVtZTogKCkgPT4gdGhlbWUsXG4gIHR3OiAoKSA9PiB0dyxcbiAgdm9pZFNoZWV0OiAoKSA9PiB2b2lkU2hlZXQsXG4gIHdhcm46ICgpID0+IHdhcm5cbn0pO1xuXG4vLyBzcmMvaW50ZXJuYWwvdXRpbC50c1xudmFyIGluY2x1ZGVzID0gKHZhbHVlLCBzZWFyY2gpID0+ICEhfnZhbHVlLmluZGV4T2Yoc2VhcmNoKTtcbnZhciBqb2luID0gKHBhcnRzLCBzZXBhcmF0b3IgPSBcIi1cIikgPT4gcGFydHMuam9pbihzZXBhcmF0b3IpO1xudmFyIGpvaW5UcnV0aHkgPSAocGFydHMsIHNlcGFyYXRvcikgPT4gam9pbihwYXJ0cy5maWx0ZXIoQm9vbGVhbiksIHNlcGFyYXRvcik7XG52YXIgdGFpbCA9IChhcnJheSwgc3RhcnRJbmRleCA9IDEpID0+IGFycmF5LnNsaWNlKHN0YXJ0SW5kZXgpO1xudmFyIGlkZW50aXR5ID0gKHZhbHVlKSA9PiB2YWx1ZTtcbnZhciBub29wID0gKCkgPT4ge1xufTtcbnZhciBjYXBpdGFsaXplID0gKHZhbHVlKSA9PiB2YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgdGFpbCh2YWx1ZSk7XG52YXIgaHlwaGVuYXRlID0gKHZhbHVlKSA9PiB2YWx1ZS5yZXBsYWNlKC9bQS1aXS9nLCBcIi0kJlwiKS50b0xvd2VyQ2FzZSgpO1xudmFyIGV2YWxUaHVuayA9ICh2YWx1ZSwgY29udGV4dCkgPT4ge1xuICB3aGlsZSAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhbHVlID0gdmFsdWUoY29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBlbnN1cmVNYXhTaXplID0gKG1hcCwgbWF4KSA9PiB7XG4gIGlmIChtYXAuc2l6ZSA+IG1heCkge1xuICAgIG1hcC5kZWxldGUobWFwLmtleXMoKS5uZXh0KCkudmFsdWUpO1xuICB9XG59O1xudmFyIG1lcmdlID0gKHRhcmdldCwgc291cmNlLCBjb250ZXh0KSA9PiBzb3VyY2UgPyBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZSgodGFyZ2V0Miwga2V5KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZXZhbFRodW5rKHNvdXJjZVtrZXldLCBjb250ZXh0KTtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRhcmdldDJba2V5XSA9IG1lcmdlKHRhcmdldDJba2V5XSB8fCB7fSwgdmFsdWUsIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldDJbaHlwaGVuYXRlKGtleSldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDI7XG59LCB0YXJnZXQpIDogdGFyZ2V0O1xudmFyIGVzY2FwZSA9IHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgQ1NTLmVzY2FwZSB8fCAoKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBmaXJzdENvZGVVbml0ID0gY2xhc3NOYW1lLmNoYXJDb2RlQXQoMCk7XG4gIGxldCBmaXJzdENoYXIgPSBcIlwiO1xuICBpZiAoZmlyc3RDb2RlVW5pdCA+PSA0OCAmJiBmaXJzdENvZGVVbml0IDw9IDU3KSB7XG4gICAgZmlyc3RDaGFyID0gXCJcXFxcXCIgKyBmaXJzdENvZGVVbml0LnRvU3RyaW5nKDE2KSArIFwiIFwiO1xuICAgIGNsYXNzTmFtZSA9IHRhaWwoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZmlyc3RDaGFyICsgY2xhc3NOYW1lLnJlcGxhY2UoL1shLi86I10vZywgXCJcXFxcJCZcIik7XG59KTtcbnZhciBidWlsZE1lZGlhUXVlcnkgPSAoc2NyZWVuKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzY3JlZW4pKSB7XG4gICAgc2NyZWVuID0gW3NjcmVlbl07XG4gIH1cbiAgcmV0dXJuIFwiQG1lZGlhIFwiICsgam9pbihzY3JlZW4ubWFwKChzY3JlZW4yKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JlZW4yID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHNjcmVlbjIgPSB7bWluOiBzY3JlZW4yfTtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmVlbjIucmF3IHx8IGpvaW4oT2JqZWN0LmtleXMoc2NyZWVuMikubWFwKChmZWF0dXJlKSA9PiBgKCR7ZmVhdHVyZX0td2lkdGg6JHtzY3JlZW4yW2ZlYXR1cmVdfSlgKSwgXCIgYW5kIFwiKTtcbiAgfSksIFwiLFwiKTtcbn07XG52YXIgY3lyYjMyID0gKHZhbHVlKSA9PiB7XG4gIGxldCBoID0gOTtcbiAgZm9yIChsZXQgaW5kZXggPSB2YWx1ZS5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgIGggPSBNYXRoLmltdWwoaCBeIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpLCAxNTk3MzM0Njc3KTtcbiAgfVxuICByZXR1cm4gXCJ0dy1cIiArICgoaCBeIGggPj4+IDkpID4+PiAwKS50b1N0cmluZygzNik7XG59O1xudmFyIHNvcnRlZEluc2VydGlvbkluZGV4ID0gKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gIGxldCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICBpZiAoaGlnaCA9PT0gMClcbiAgICByZXR1cm4gMDtcbiAgZm9yIChsZXQgbG93ID0gMDsgbG93IDwgaGlnaDsgKSB7XG4gICAgY29uc3QgcGl2b3QgPSBoaWdoICsgbG93ID4+IDE7XG4gICAgaWYgKGFycmF5W3Bpdm90XSA8PSBlbGVtZW50KSB7XG4gICAgICBsb3cgPSBwaXZvdCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2ggPSBwaXZvdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGhpZ2g7XG59O1xuXG4vLyBzcmMvdHdpbmQvcGFyc2UudHNcbnZhciBncm91cGluZ3M7XG52YXIgcnVsZXM7XG52YXIgc3RhcnRHcm91cGluZyA9ICh2YWx1ZSA9IFwiXCIpID0+IHtcbiAgZ3JvdXBpbmdzLnB1c2godmFsdWUpO1xuICByZXR1cm4gXCJcIjtcbn07XG52YXIgZW5kR3JvdXBpbmcgPSAoaXNXaGl0ZXNwYWNlKSA9PiB7XG4gIGdyb3VwaW5ncy5sZW5ndGggPSBNYXRoLm1heChncm91cGluZ3MubGFzdEluZGV4T2YoXCJcIikgKyB+fmlzV2hpdGVzcGFjZSwgMCk7XG59O1xudmFyIG9ubHlQcmVmaXhlcyA9IChzKSA9PiBzICYmIHNbMF0gIT09IFwiOlwiO1xudmFyIG9ubHlWYXJpYW50cyA9IChzKSA9PiBzWzBdID09PSBcIjpcIjtcbnZhciBhZGRSdWxlID0gKGRpcmVjdGl2ZTIsIG5lZ2F0ZSwgaW1wb3J0YW50KSA9PiB7XG4gIHJ1bGVzLnB1c2goe1xuICAgIHY6IGdyb3VwaW5ncy5maWx0ZXIob25seVZhcmlhbnRzKSxcbiAgICBkOiBkaXJlY3RpdmUyLFxuICAgIG46IG5lZ2F0ZSxcbiAgICBpOiBpbXBvcnRhbnQsXG4gICAgJDogXCJcIlxuICB9KTtcbn07XG52YXIgc2F2ZVJ1bGUgPSAoYnVmZmVyKSA9PiB7XG4gIGNvbnN0IG5lZ2F0ZSA9IGJ1ZmZlclswXSA9PT0gXCItXCI7XG4gIGlmIChuZWdhdGUpIHtcbiAgICBidWZmZXIgPSB0YWlsKGJ1ZmZlcik7XG4gIH1cbiAgY29uc3QgaW1wb3J0YW50ID0gYnVmZmVyW2J1ZmZlci5sZW5ndGggLSAxXSA9PT0gXCIhXCI7XG4gIGlmIChpbXBvcnRhbnQpIHtcbiAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoMCwgLTEpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGpvaW4oZ3JvdXBpbmdzLmZpbHRlcihvbmx5UHJlZml4ZXMpKTtcbiAgYWRkUnVsZShidWZmZXIgPT09IFwiJlwiID8gcHJlZml4IDogKHByZWZpeCAmJiBwcmVmaXggKyBcIi1cIikgKyBidWZmZXIsIG5lZ2F0ZSwgaW1wb3J0YW50KTtcbiAgcmV0dXJuIFwiXCI7XG59O1xudmFyIHBhcnNlU3RyaW5nID0gKHRva2VuLCBpc1ZhcmlhbnQpID0+IHtcbiAgbGV0IGNoYXI7XG4gIGxldCBidWZmZXIgPSBcIlwiO1xuICBmb3IgKGxldCBwb3NpdGlvbjIgPSAwOyBwb3NpdGlvbjIgPCB0b2tlbi5sZW5ndGg7ICkge1xuICAgIHN3aXRjaCAoY2hhciA9IHRva2VuW3Bvc2l0aW9uMisrXSkge1xuICAgICAgY2FzZSBcIjpcIjpcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICYmIHN0YXJ0R3JvdXBpbmcoXCI6XCIgKyAodG9rZW5bcG9zaXRpb24yXSA9PT0gY2hhciA/IHRva2VuW3Bvc2l0aW9uMisrXSA6IFwiXCIpICsgYnVmZmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiKFwiOlxuICAgICAgICBidWZmZXIgPSBidWZmZXIgJiYgc3RhcnRHcm91cGluZyhidWZmZXIpO1xuICAgICAgICBzdGFydEdyb3VwaW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIilcIjpcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICBjYXNlIFwiXHRcIjpcbiAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgIGNhc2UgXCJcXHJcIjpcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICYmIHNhdmVSdWxlKGJ1ZmZlcik7XG4gICAgICAgIGVuZEdyb3VwaW5nKGNoYXIgIT09IFwiKVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBidWZmZXIgKz0gY2hhcjtcbiAgICB9XG4gIH1cbiAgaWYgKGJ1ZmZlcikge1xuICAgIGlmIChpc1ZhcmlhbnQpIHtcbiAgICAgIHN0YXJ0R3JvdXBpbmcoXCI6XCIgKyBidWZmZXIpO1xuICAgIH0gZWxzZSBpZiAoYnVmZmVyLnNsaWNlKC0xKSA9PT0gXCItXCIpIHtcbiAgICAgIHN0YXJ0R3JvdXBpbmcoYnVmZmVyLnNsaWNlKDAsIC0xKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdmVSdWxlKGJ1ZmZlcik7XG4gICAgfVxuICB9XG59O1xudmFyIHBhcnNlR3JvdXBlZFRva2VuID0gKHRva2VuKSA9PiB7XG4gIHN0YXJ0R3JvdXBpbmcoKTtcbiAgcGFyc2VUb2tlbih0b2tlbik7XG4gIGVuZEdyb3VwaW5nKCk7XG59O1xudmFyIHBhcnNlR3JvdXAgPSAoa2V5LCB0b2tlbikgPT4ge1xuICBpZiAodG9rZW4pIHtcbiAgICBzdGFydEdyb3VwaW5nKCk7XG4gICAgY29uc3QgaXNWYXJpYW50ID0gaW5jbHVkZXMoXCJ0YnVcIiwgKHR5cGVvZiB0b2tlbilbMV0pO1xuICAgIHBhcnNlU3RyaW5nKGtleSwgaXNWYXJpYW50KTtcbiAgICBpZiAoaXNWYXJpYW50KSB7XG4gICAgICBwYXJzZUdyb3VwZWRUb2tlbih0b2tlbik7XG4gICAgfVxuICAgIGVuZEdyb3VwaW5nKCk7XG4gIH1cbn07XG52YXIgcGFyc2VUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB0b2tlbikge1xuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIHBhcnNlU3RyaW5nKHRva2VuKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgYWRkUnVsZSh0b2tlbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbikpIHtcbiAgICAgICAgdG9rZW4uZm9yRWFjaChwYXJzZUdyb3VwZWRUb2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRva2VuKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBwYXJzZUdyb3VwKGtleSwgdG9rZW5ba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG59O1xudmFyIHN0YXRpY3NDYWNoZXMgPSBuZXcgV2Vha01hcCgpO1xudmFyIGJ1aWxkU3RhdGljcyA9IChzdHJpbmdzKSA9PiB7XG4gIGxldCBzdGF0aWNzID0gc3RhdGljc0NhY2hlcy5nZXQoc3RyaW5ncyk7XG4gIGlmICghc3RhdGljcykge1xuICAgIGxldCBzbG93TW9kZUluZGV4ID0gTmFOO1xuICAgIGxldCBidWZmZXIgPSBcIlwiO1xuICAgIHN0YXRpY3MgPSBzdHJpbmdzLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc2xvd01vZGVJbmRleCAhPT0gc2xvd01vZGVJbmRleCAmJiBpbmNsdWRlcyhcIjotKFwiLCAoc3RyaW5nc1tpbmRleCArIDFdIHx8IFwiXCIpWzBdKSkge1xuICAgICAgICBzbG93TW9kZUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPj0gc2xvd01vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gKGludGVycG9sYXRpb24pID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHNsb3dNb2RlSW5kZXgpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1ZmZlciArPSB0b2tlbjtcbiAgICAgICAgICBpZiAodHlwZW9mIGludGVycG9sYXRpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgYnVmZmVyICs9IGludGVycG9sYXRpb247XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBwYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIHBhcnNlVG9rZW4oaW50ZXJwb2xhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gc3RyaW5ncy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBwYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRpY1J1bGVzID0gcnVsZXMgPSBbXTtcbiAgICAgIHBhcnNlU3RyaW5nKHRva2VuKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUdyb3VwaW5ncyA9IFsuLi5ncm91cGluZ3NdO1xuICAgICAgcnVsZXMgPSBbXTtcbiAgICAgIHJldHVybiAoaW50ZXJwb2xhdGlvbikgPT4ge1xuICAgICAgICBydWxlcy5wdXNoKC4uLnN0YXRpY1J1bGVzKTtcbiAgICAgICAgZ3JvdXBpbmdzID0gWy4uLmFjdGl2ZUdyb3VwaW5nc107XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgcGFyc2VUb2tlbihpbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzdGF0aWNzQ2FjaGVzLnNldChzdHJpbmdzLCBzdGF0aWNzKTtcbiAgfVxuICByZXR1cm4gc3RhdGljcztcbn07XG52YXIgcGFyc2UgPSAodG9rZW5zKSA9PiB7XG4gIGdyb3VwaW5ncyA9IFtdO1xuICBydWxlcyA9IFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnNbMF0pICYmIEFycmF5LmlzQXJyYXkodG9rZW5zWzBdLnJhdykpIHtcbiAgICBidWlsZFN0YXRpY3ModG9rZW5zWzBdKS5mb3JFYWNoKChhcHBseTIsIGluZGV4KSA9PiBhcHBseTIodG9rZW5zW2luZGV4ICsgMV0pKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZVRva2VuKHRva2Vucyk7XG4gIH1cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxuLy8gc3JjL3R3aW5kL2RpcmVjdGl2ZS50c1xudmFyIGlzRnVuY3Rpb25GcmVlO1xudmFyIGRldGVjdEZ1bmN0aW9uID0gKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBpc0Z1bmN0aW9uRnJlZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgc3RyaW5naWZ5ID0gKGRhdGEpID0+IHtcbiAgaXNGdW5jdGlvbkZyZWUgPSB0cnVlO1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhLCBkZXRlY3RGdW5jdGlvbik7XG4gIHJldHVybiBpc0Z1bmN0aW9uRnJlZSAmJiBrZXk7XG59O1xudmFyIGNhY2hlQnlGYWN0b3J5ID0gbmV3IFdlYWtNYXAoKTtcbnZhciBkaXJlY3RpdmUgPSAoZmFjdG9yeSwgZGF0YSkgPT4ge1xuICBjb25zdCBrZXkgPSBzdHJpbmdpZnkoZGF0YSk7XG4gIGxldCBkaXJlY3RpdmUyO1xuICBpZiAoa2V5KSB7XG4gICAgdmFyIGNhY2hlID0gY2FjaGVCeUZhY3RvcnkuZ2V0KGZhY3RvcnkpO1xuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIGNhY2hlQnlGYWN0b3J5LnNldChmYWN0b3J5LCBjYWNoZSA9IG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIGRpcmVjdGl2ZTIgPSBjYWNoZS5nZXQoa2V5KTtcbiAgfVxuICBpZiAoIWRpcmVjdGl2ZTIpIHtcbiAgICBkaXJlY3RpdmUyID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KChwYXJhbXMsIGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnRleHQgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBjb250ZXh0IDogcGFyYW1zO1xuICAgICAgcmV0dXJuIGV2YWxUaHVuayhmYWN0b3J5KGRhdGEsIGNvbnRleHQpLCBjb250ZXh0KTtcbiAgICB9LCBcInRvSlNPTlwiLCB7XG4gICAgICB2YWx1ZTogKCkgPT4ga2V5IHx8IGRhdGFcbiAgICB9KTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIGNhY2hlLnNldChrZXksIGRpcmVjdGl2ZTIpO1xuICAgICAgZW5zdXJlTWF4U2l6ZShjYWNoZSwgMWU0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZTI7XG59O1xuXG4vLyBzcmMvdHdpbmQvYXBwbHkudHNcbnZhciBhcHBseUZhY3RvcnkgPSAodG9rZW5zLCB7Y3NzfSkgPT4gY3NzKHBhcnNlKHRva2VucykpO1xudmFyIGFwcGx5ID0gKC4uLnRva2VucykgPT4gZGlyZWN0aXZlKGFwcGx5RmFjdG9yeSwgdG9rZW5zKTtcblxuLy8gc3JjL3R3aW5kL2hlbHBlcnMudHNcbnZhciBwb3NpdGlvbnMgPSAocmVzb2x2ZSkgPT4gKHZhbHVlLCBwb3NpdGlvbjIsIHByZWZpeCwgc3VmZml4KSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwb3NpdGlvbjIgJiYgcmVzb2x2ZShwb3NpdGlvbjIpO1xuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChkZWNsYXJhdGlvbnMsIHByb3BlcnR5MikgPT4ge1xuICAgICAgICBkZWNsYXJhdGlvbnNbam9pblRydXRoeShbcHJlZml4LCBwcm9wZXJ0eTIsIHN1ZmZpeF0pXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfVxufTtcbnZhciBjb3JuZXJzID0gcG9zaXRpb25zKChrZXkpID0+ICh7XG4gIHQ6IFtcInRvcC1sZWZ0XCIsIFwidG9wLXJpZ2h0XCJdLFxuICByOiBbXCJ0b3AtcmlnaHRcIiwgXCJib3R0b20tcmlnaHRcIl0sXG4gIGI6IFtcImJvdHRvbS1sZWZ0XCIsIFwiYm90dG9tLXJpZ2h0XCJdLFxuICBsOiBbXCJib3R0b20tbGVmdFwiLCBcInRvcC1sZWZ0XCJdLFxuICB0bDogW1widG9wLWxlZnRcIl0sXG4gIHRyOiBbXCJ0b3AtcmlnaHRcIl0sXG4gIGJsOiBbXCJib3R0b20tbGVmdFwiXSxcbiAgYnI6IFtcImJvdHRvbS1yaWdodFwiXVxufSlba2V5XSk7XG52YXIgZXhwYW5kRWRnZXMgPSAoa2V5KSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gKHt4OiBcImxyXCIsIHk6IFwidGJcIn1ba2V5XSB8fCBrZXkgfHwgXCJcIikuc3BsaXQoXCJcIikuc29ydCgpO1xuICBmb3IgKGxldCBpbmRleCA9IHBhcnRzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG4gICAgaWYgKCEocGFydHNbaW5kZXhdID0ge1xuICAgICAgdDogXCJ0b3BcIixcbiAgICAgIHI6IFwicmlnaHRcIixcbiAgICAgIGI6IFwiYm90dG9tXCIsXG4gICAgICBsOiBcImxlZnRcIlxuICAgIH1bcGFydHNbaW5kZXhdXSkpXG4gICAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aClcbiAgICByZXR1cm4gcGFydHM7XG59O1xudmFyIGVkZ2VzID0gcG9zaXRpb25zKGV4cGFuZEVkZ2VzKTtcblxuLy8gc3JjL3R3aW5kL3BsdWdpbnMudHNcbnZhciBfO1xudmFyIF9fO1xudmFyICQ7XG52YXIgcHJvcGVydHkgPSAocHJvcGVydHkyKSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW3Byb3BlcnR5Ml06IGlkICsgKChfID0gam9pbihwYXJhbXMpKSAmJiBcIi1cIiArIF8pXG59KTtcbnZhciBwcm9wZXJ0eVZhbHVlID0gKHByb3BlcnR5Miwgc2VwYXJhdG9yKSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW3Byb3BlcnR5MiB8fCBpZF06IGpvaW4ocGFyYW1zLCBzZXBhcmF0b3IpXG59KTtcbnZhciB0aGVtZVByb3BlcnR5ID0gKHNlY3Rpb24pID0+IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+ICh7XG4gIFtzZWN0aW9uIHx8IGlkXTogdGhlbWUyKHNlY3Rpb24gfHwgaWQsIHBhcmFtcylcbn0pO1xudmFyIGFsaWFzID0gKGhhbmRsZXIsIG5hbWUpID0+IChwYXJhbXMsIGNvbnRleHQpID0+IGhhbmRsZXIocGFyYW1zLCBjb250ZXh0LCBuYW1lKTtcbnZhciBkaXNwbGF5ID0gcHJvcGVydHkoXCJkaXNwbGF5XCIpO1xudmFyIHBvc2l0aW9uID0gcHJvcGVydHkoXCJwb3NpdGlvblwiKTtcbnZhciB0ZXh0VHJhbnNmb3JtID0gcHJvcGVydHkoXCJ0ZXh0VHJhbnNmb3JtXCIpO1xudmFyIHRleHREZWNvcmF0aW9uID0gcHJvcGVydHkoXCJ0ZXh0RGVjb3JhdGlvblwiKTtcbnZhciBmb250U3R5bGUgPSBwcm9wZXJ0eShcImZvbnRTdHlsZVwiKTtcbnZhciBmb250VmFyaWFudE51bWVyaWMgPSAoa2V5KSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW1wiLS10dy1cIiArIGtleV06IGlkLFxuICBmb250VmFyaWFudE51bWVyaWM6IFwidmFyKC0tdHctb3JkaW5hbCwvKiEqLyAvKiEqLykgdmFyKC0tdHctc2xhc2hlZC16ZXJvLC8qISovIC8qISovKSB2YXIoLS10dy1udW1lcmljLWZpZ3VyZSwvKiEqLyAvKiEqLykgdmFyKC0tdHctbnVtZXJpYy1zcGFjaW5nLC8qISovIC8qISovKSB2YXIoLS10dy1udW1lcmljLWZyYWN0aW9uLC8qISovIC8qISovKVwiXG59KTtcbnZhciBpbnNldCA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+ICh7W2lkXTogdGhlbWUyKFwiaW5zZXRcIiwgcGFyYW1zKX0pO1xudmFyIG9wYWNpdHlQcm9wZXJ0eSA9IChwYXJhbXMsIHRoZW1lMiwgaWQsIHNlY3Rpb24gPSBpZCkgPT4gKHtcbiAgW2AtLXR3LSR7aWR9LW9wYWNpdHlgXTogdGhlbWUyKHNlY3Rpb24gKyBcIk9wYWNpdHlcIiwgdGFpbChwYXJhbXMpKVxufSk7XG52YXIgcGFyc2VDb2xvckNvbXBvbmVudCA9IChjaGFycywgZmFjdG9yKSA9PiBNYXRoLnJvdW5kKHBhcnNlSW50KGNoYXJzLCAxNikgKiBmYWN0b3IpO1xudmFyIGFzUkdCQSA9IChjb2xvciwgb3BhY2l0eVByb3BlcnR5Miwgb3BhY2l0eURlZmF1bHQpID0+IHtcbiAgaWYgKGNvbG9yICYmIGNvbG9yWzBdID09PSBcIiNcIikge1xuICAgIHJldHVybiBgcmdiYSgke3BhcnNlQ29sb3JDb21wb25lbnQoY29sb3Iuc3Vic3RyKDEsIF8gPSAoY29sb3IubGVuZ3RoIC0gMSkgLyAzKSwgJCA9IFsxNywgMSwgMC4wNjIyNzJdW18gLSAxXSl9LCR7cGFyc2VDb2xvckNvbXBvbmVudChjb2xvci5zdWJzdHIoMSArIF8sIF8pLCAkKX0sJHtwYXJzZUNvbG9yQ29tcG9uZW50KGNvbG9yLnN1YnN0cigxICsgMiAqIF8sIF8pLCAkKX0sJHtvcGFjaXR5UHJvcGVydHkyID8gYHZhcigtLXR3LSR7b3BhY2l0eVByb3BlcnR5Mn0ke29wYWNpdHlEZWZhdWx0ID8gXCIsXCIgKyBvcGFjaXR5RGVmYXVsdCA6IFwiXCJ9KWAgOiBvcGFjaXR5RGVmYXVsdCB8fCAxfSlgO1xuICB9XG4gIHJldHVybiBjb2xvcjtcbn07XG52YXIgd2l0aE9wYWNpdHlGYWxsYmFjayA9IChwcm9wZXJ0eTIsIGtpbmQsIGNvbG9yKSA9PiBjb2xvciAmJiAoXyA9IGFzUkdCQShjb2xvciwga2luZCArIFwiLW9wYWNpdHlcIikpICYmIF8gIT09IGNvbG9yID8ge1xuICBbYC0tdHctJHtraW5kfS1vcGFjaXR5YF06IFwiMVwiLFxuICBbcHJvcGVydHkyXTogW2NvbG9yLCBfXVxufSA6IHtbcHJvcGVydHkyXTogY29sb3J9O1xudmFyIHRyYW5zcGFyZW50VG8gPSAoY29sb3IpID0+ICgkID0gYXNSR0JBKGNvbG9yLCBcIlwiLCBcIjBcIikpID09PSBfID8gXCJ0cmFuc3BhcmVudFwiIDogJDtcbnZhciByZXZlcnNhYmxlRWRnZSA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQsIHNlY3Rpb24sIHByZWZpeCwgc3VmZml4KSA9PiAoXyA9IHt4OiBbXCJyaWdodFwiLCBcImxlZnRcIl0sIHk6IFtcImJvdHRvbVwiLCBcInRvcFwiXX1bcGFyYW1zWzBdXSkgJiYgKCQgPSBgLS10dy0ke2lkfS0ke3BhcmFtc1swXX0tcmV2ZXJzZWApID8gcGFyYW1zWzFdID09PSBcInJldmVyc2VcIiA/IHtcbiAgWyRdOiBcIjFcIlxufSA6IHtcbiAgWyRdOiBcIjBcIixcbiAgW2pvaW5UcnV0aHkoW3ByZWZpeCwgX1swXSwgc3VmZml4XSldOiAoX18gPSB0aGVtZTIoc2VjdGlvbiwgdGFpbChwYXJhbXMpKSkgJiYgYGNhbGMoJHtfX30gKiB2YXIoJHskfSkpYCxcbiAgW2pvaW5UcnV0aHkoW3ByZWZpeCwgX1sxXSwgc3VmZml4XSldOiBfXyAmJiBbX18sIGBjYWxjKCR7X199ICogY2FsYygxIC0gdmFyKCR7JH0pKSlgXVxufSA6IHZvaWQgMDtcbnZhciBwbGFjZUhlbHBlciA9IChwcm9wZXJ0eTIsIHBhcmFtcykgPT4gKHtcbiAgW3Byb3BlcnR5Ml06IChpbmNsdWRlcyhcInd1blwiLCAocGFyYW1zWzBdIHx8IFwiXCIpWzNdKSA/IFwic3BhY2UtXCIgOiBcIlwiKSArIHBhcmFtc1swXVxufSk7XG52YXIgY29udGVudFBsdWdpbkZvciA9IChwcm9wZXJ0eTIpID0+IChwYXJhbXMpID0+IGluY2x1ZGVzKFtcInN0YXJ0XCIsIFwiZW5kXCJdLCBwYXJhbXNbMF0pID8ge1twcm9wZXJ0eTJdOiBgZmxleC0ke3BhcmFtc1swXX1gfSA6IHBsYWNlSGVscGVyKHByb3BlcnR5MiwgcGFyYW1zKTtcbnZhciBncmlkUGx1Z2luID0gKGtpbmQpID0+IChwYXJhbXMpID0+IHtcbiAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICBjYXNlIFwiYXV0b1wiOlxuICAgICAgcmV0dXJuIHtbYGdyaWQtJHtraW5kfWBdOiBcImF1dG9cIn07XG4gICAgY2FzZSBcInNwYW5cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgZ3JpZC0ke2tpbmR9YF06IHBhcmFtc1sxXSA9PT0gXCJmdWxsXCIgPyBcIjEgLyAtMVwiIDogYHNwYW4gJHtwYXJhbXNbMV19IC8gc3BhbiAke3BhcmFtc1sxXX1gXG4gICAgICB9O1xuICAgIGNhc2UgXCJzdGFydFwiOlxuICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgZ3JpZC0ke2tpbmR9LSR7cGFyYW1zWzBdfWBdOiBwYXJhbXNbMV1cbiAgICAgIH07XG4gIH1cbn07XG52YXIgYm9yZGVyID0gKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4ge1xuICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgIGNhc2UgXCJzb2xpZFwiOlxuICAgIGNhc2UgXCJkYXNoZWRcIjpcbiAgICBjYXNlIFwiZG90dGVkXCI6XG4gICAgY2FzZSBcImRvdWJsZVwiOlxuICAgIGNhc2UgXCJub25lXCI6XG4gICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZShcImJvcmRlclN0eWxlXCIpKHBhcmFtcyk7XG4gICAgY2FzZSBcImNvbGxhcHNlXCI6XG4gICAgY2FzZSBcInNlcGFyYXRlXCI6XG4gICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZShcImJvcmRlckNvbGxhcHNlXCIpKHBhcmFtcyk7XG4gICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgfVxuICByZXR1cm4gKF8gPSB0aGVtZTIoaWQgKyBcIldpZHRoXCIsIHBhcmFtcywgXCJcIikpID8ge2JvcmRlcldpZHRoOiBffSA6IHdpdGhPcGFjaXR5RmFsbGJhY2soXCJib3JkZXJDb2xvclwiLCBpZCwgdGhlbWUyKGlkICsgXCJDb2xvclwiLCBwYXJhbXMpKTtcbn07XG52YXIgdHJhbnNmb3JtID0gKGdwdSkgPT4gKGdwdSA/IFwidHJhbnNsYXRlM2QodmFyKC0tdHctdHJhbnNsYXRlLXgsMCksdmFyKC0tdHctdHJhbnNsYXRlLXksMCksMClcIiA6IFwidHJhbnNsYXRlWCh2YXIoLS10dy10cmFuc2xhdGUteCwwKSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSwwKSlcIikgKyBcIiByb3RhdGUodmFyKC0tdHctcm90YXRlLDApKSBza2V3WCh2YXIoLS10dy1za2V3LXgsMCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSwwKSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgsMSkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15LDEpKVwiO1xudmFyIHRyYW5zZm9ybVhZRnVuY3Rpb24gPSAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSBjb250ZXh0LnRoZW1lKGlkLCBwYXJhbXNbMV0gfHwgcGFyYW1zWzBdKSkgJiYge1xuICBbYC0tdHctJHtpZH0teGBdOiBwYXJhbXNbMF0gIT09IFwieVwiICYmIF8sXG4gIFtgLS10dy0ke2lkfS15YF06IHBhcmFtc1swXSAhPT0gXCJ4XCIgJiYgXyxcbiAgdHJhbnNmb3JtOiBbYCR7aWR9JHtwYXJhbXNbMV0gPyBwYXJhbXNbMF0udG9VcHBlckNhc2UoKSA6IFwiXCJ9KCR7X30pYCwgdHJhbnNmb3JtKCldXG59O1xudmFyIGVkZ2VzUGx1Z2luRm9yID0gKGtleSkgPT4gKHBhcmFtcywgY29udGV4dCwgaWQpID0+IGlkWzFdID8gZWRnZXMoY29udGV4dC50aGVtZShrZXksIHBhcmFtcyksIGlkWzFdLCBrZXkpIDogdGhlbWVQcm9wZXJ0eShrZXkpKHBhcmFtcywgY29udGV4dCwgaWQpO1xudmFyIHBhZGRpbmcgPSBlZGdlc1BsdWdpbkZvcihcInBhZGRpbmdcIik7XG52YXIgbWFyZ2luID0gZWRnZXNQbHVnaW5Gb3IoXCJtYXJnaW5cIik7XG52YXIgbWluTWF4ID0gKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4gKF8gPSB7dzogXCJ3aWR0aFwiLCBoOiBcImhlaWdodFwifVtwYXJhbXNbMF1dKSAmJiB7XG4gIFtfID0gYCR7aWR9JHtjYXBpdGFsaXplKF8pfWBdOiB0aGVtZTIoXywgdGFpbChwYXJhbXMpKVxufTtcbnZhciBjb3JlUGx1Z2lucyA9IHtcbiAgZ3JvdXA6IChwYXJhbXMsIHt0YWd9LCBpZCkgPT4gdGFnKGpvaW4oW2lkLCAuLi5wYXJhbXNdKSksXG4gIGhpZGRlbjogYWxpYXMoZGlzcGxheSwgXCJub25lXCIpLFxuICBpbmxpbmU6IGRpc3BsYXksXG4gIGJsb2NrOiBkaXNwbGF5LFxuICBjb250ZW50czogZGlzcGxheSxcbiAgZmxvdzogZGlzcGxheSxcbiAgdGFibGU6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBpbmNsdWRlcyhbXCJhdXRvXCIsIFwiZml4ZWRcIl0sIHBhcmFtc1swXSkgPyB7dGFibGVMYXlvdXQ6IHBhcmFtc1swXX0gOiBkaXNwbGF5KHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBmbGV4KHBhcmFtcywgY29udGV4dCwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcInJvd1wiOlxuICAgICAgY2FzZSBcImNvbFwiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGpvaW4ocGFyYW1zWzBdID09PSBcImNvbFwiID8gW1wiY29sdW1uXCIsIC4uLnRhaWwocGFyYW1zKV0gOiBwYXJhbXMpXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwibm93cmFwXCI6XG4gICAgICBjYXNlIFwid3JhcFwiOlxuICAgICAgICByZXR1cm4ge2ZsZXhXcmFwOiBqb2luKHBhcmFtcyl9O1xuICAgICAgY2FzZSBcImdyb3dcIjpcbiAgICAgIGNhc2UgXCJzaHJpbmtcIjpcbiAgICAgICAgcmV0dXJuIHtbYGZsZXgtJHtwYXJhbXNbMF19YF06IHBhcmFtc1sxXSB8fCBcIjFcIn07XG4gICAgfVxuICAgIHJldHVybiAoXyA9IGNvbnRleHQudGhlbWUoXCJmbGV4XCIsIHBhcmFtcywgXCJcIikpID8ge2ZsZXg6IF99IDogZGlzcGxheShwYXJhbXMsIGNvbnRleHQsIGlkKTtcbiAgfSxcbiAgZ3JpZChwYXJhbXMsIGNvbnRleHQsIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJjb2xzXCI6XG4gICAgICBjYXNlIFwicm93c1wiOlxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDEgJiYge1xuICAgICAgICAgIFtgZ3JpZC10ZW1wbGF0ZS0ke3BhcmFtc1swXSA9PT0gXCJjb2xzXCIgPyBcImNvbHVtbnNcIiA6IHBhcmFtc1swXX1gXTogcGFyYW1zLmxlbmd0aCA9PT0gMiAmJiBOdW1iZXIocGFyYW1zWzFdKSA/IGByZXBlYXQoJHtwYXJhbXNbMV19LG1pbm1heCgwLDFmcikpYCA6IGpvaW4odGFpbChwYXJhbXMpLCBcIiBcIilcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJmbG93XCI6XG4gICAgICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID4gMSAmJiB7XG4gICAgICAgICAgZ3JpZEF1dG9GbG93OiBqb2luKHBhcmFtc1sxXSA9PT0gXCJjb2xcIiA/IFtcImNvbHVtblwiLCAuLi50YWlsKHBhcmFtcywgMildIDogdGFpbChwYXJhbXMpLCBcIiBcIilcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXkocGFyYW1zLCBjb250ZXh0LCBpZCk7XG4gIH0sXG4gIGF1dG86IChwYXJhbXMpID0+IGluY2x1ZGVzKFtcImNvbHNcIiwgXCJyb3dzXCJdLCBwYXJhbXNbMF0pICYmIChfID0gcGFyYW1zLmxlbmd0aCA9PT0gMiA/IHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICBtaW46IFwibWluLWNvbnRlbnRcIixcbiAgICBtYXg6IFwibWF4LWNvbnRlbnRcIixcbiAgICBmcjogXCJtaW5tYXgoMCwxZnIpXCJcbiAgfVtwYXJhbXNbMV1dIHx8IGBtaW5tYXgoMCwke3BhcmFtc1sxXX0pYCA6IHBhcmFtcy5sZW5ndGggPiAyICYmIGBtaW5tYXgoJHtqb2luKHRhaWwocGFyYW1zKSwgXCIsXCIpfSlgKSAmJiB7XG4gICAgW2BncmlkLWF1dG8tJHtwYXJhbXNbMF0gPT09IFwiY29sc1wiID8gXCJjb2x1bW5zXCIgOiBcInJvd3NcIn1gXTogX1xuICB9LFxuICBzdGF0aWM6IHBvc2l0aW9uLFxuICBmaXhlZDogcG9zaXRpb24sXG4gIGFic29sdXRlOiBwb3NpdGlvbixcbiAgcmVsYXRpdmU6IHBvc2l0aW9uLFxuICBzdGlja3k6IHBvc2l0aW9uLFxuICB2aXNpYmxlOiB7dmlzaWJpbGl0eTogXCJ2aXNpYmxlXCJ9LFxuICBpbnZpc2libGU6IHt2aXNpYmlsaXR5OiBcImhpZGRlblwifSxcbiAgYW50aWFsaWFzZWQ6IHtcbiAgICBXZWJraXRGb250U21vb3RoaW5nOiBcImFudGlhbGlhc2VkXCIsXG4gICAgTW96T3N4Rm9udFNtb290aGluZzogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcInN1YnBpeGVsLWFudGlhbGlhc2VkXCI6IHtcbiAgICBXZWJraXRGb250U21vb3RoaW5nOiBcImF1dG9cIixcbiAgICBNb3pPc3hGb250U21vb3RoaW5nOiBcImF1dG9cIlxuICB9LFxuICB0cnVuY2F0ZToge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJzci1vbmx5XCI6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHdpZHRoOiBcIjFweFwiLFxuICAgIGhlaWdodDogXCIxcHhcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBtYXJnaW46IFwiLTFweFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgY2xpcDogXCJyZWN0KDAsMCwwLDApXCIsXG4gICAgYm9yZGVyV2lkdGg6IFwiMFwiXG4gIH0sXG4gIFwibm90LXNyLW9ubHlcIjoge1xuICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm9ybWFsXCIsXG4gICAgY2xpcDogXCJhdXRvXCJcbiAgfSxcbiAgcmVzaXplOiAocGFyYW1zKSA9PiAoe1xuICAgIHJlc2l6ZToge3g6IFwidmVydGljYWxcIiwgeTogXCJob3Jpem9udGFsXCJ9W3BhcmFtc1swXV0gfHwgcGFyYW1zWzBdIHx8IFwiYm90aFwiXG4gIH0pLFxuICBib3g6IChwYXJhbXMpID0+ICh7XCJib3gtc2l6aW5nXCI6IGAke3BhcmFtc1swXX0tYm94YH0pLFxuICBhcHBlYXJhbmNlOiBwcm9wZXJ0eVZhbHVlKCksXG4gIGN1cnNvcjogcHJvcGVydHlWYWx1ZSgpLFxuICBmbG9hdDogcHJvcGVydHlWYWx1ZSgpLFxuICBjbGVhcjogcHJvcGVydHlWYWx1ZSgpLFxuICB0b3A6IGluc2V0LFxuICByaWdodDogaW5zZXQsXG4gIGJvdHRvbTogaW5zZXQsXG4gIGxlZnQ6IGluc2V0LFxuICBpbnNldDogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IGV4cGFuZEVkZ2VzKHBhcmFtc1swXSkpID8gZWRnZXModGhlbWUyKFwiaW5zZXRcIiwgdGFpbChwYXJhbXMpKSwgcGFyYW1zWzBdKSA6IChfID0gdGhlbWUyKFwiaW5zZXRcIiwgcGFyYW1zKSkgJiYge1xuICAgIHRvcDogXyxcbiAgICByaWdodDogXyxcbiAgICBib3R0b206IF8sXG4gICAgbGVmdDogX1xuICB9LFxuICB1bmRlcmxpbmU6IHRleHREZWNvcmF0aW9uLFxuICBcImxpbmUtdGhyb3VnaFwiOiB0ZXh0RGVjb3JhdGlvbixcbiAgXCJuby11bmRlcmxpbmVcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LXVuZGVybGluZVwiOiBhbGlhcyh0ZXh0RGVjb3JhdGlvbiwgXCJ1bmRlcmxpbmVcIiksXG4gIFwidGV4dC1uby11bmRlcmxpbmVcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LWxpbmUtdGhyb3VnaFwiOiBhbGlhcyh0ZXh0RGVjb3JhdGlvbiwgXCJsaW5lLXRocm91Z2hcIiksXG4gIHVwcGVyY2FzZTogdGV4dFRyYW5zZm9ybSxcbiAgbG93ZXJjYXNlOiB0ZXh0VHJhbnNmb3JtLFxuICBjYXBpdGFsaXplOiB0ZXh0VHJhbnNmb3JtLFxuICBcIm5vcm1hbC1jYXNlXCI6IGFsaWFzKHRleHRUcmFuc2Zvcm0sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LW5vcm1hbC1jYXNlXCI6IGFsaWFzKHRleHRUcmFuc2Zvcm0sIFwibm9uZVwiKSxcbiAgaXRhbGljOiBmb250U3R5bGUsXG4gIFwibm90LWl0YWxpY1wiOiBhbGlhcyhmb250U3R5bGUsIFwibm9ybWFsXCIpLFxuICBcImZvbnQtaXRhbGljXCI6IGFsaWFzKGZvbnRTdHlsZSwgXCJpdGFsaWNcIiksXG4gIFwiZm9udC1ub3QtaXRhbGljXCI6IGFsaWFzKGZvbnRTdHlsZSwgXCJub3JtYWxcIiksXG4gIGZvbnQ6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IGNvbnRleHQudGhlbWUoXCJmb250RmFtaWx5XCIsIHBhcmFtcywgXCJcIikpID8ge2ZvbnRGYW1pbHk6IF99IDogdGhlbWVQcm9wZXJ0eShcImZvbnRXZWlnaHRcIikocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIGl0ZW1zOiAocGFyYW1zKSA9PiAoe1xuICAgIGFsaWduSXRlbXM6IGluY2x1ZGVzKFtcInN0YXJ0XCIsIFwiZW5kXCJdLCBwYXJhbXNbMF0pID8gYGZsZXgtJHtwYXJhbXNbMF19YCA6IGpvaW4ocGFyYW1zKVxuICB9KSxcbiAgXCJqdXN0aWZ5LXNlbGZcIjogcHJvcGVydHlWYWx1ZSgpLFxuICBcImp1c3RpZnktaXRlbXNcIjogcHJvcGVydHlWYWx1ZSgpLFxuICBqdXN0aWZ5OiBjb250ZW50UGx1Z2luRm9yKFwianVzdGlmeUNvbnRlbnRcIiksXG4gIGNvbnRlbnQ6IGNvbnRlbnRQbHVnaW5Gb3IoXCJhbGlnbkNvbnRlbnRcIiksXG4gIHNlbGY6IGNvbnRlbnRQbHVnaW5Gb3IoXCJhbGlnblNlbGZcIiksXG4gIHBsYWNlOiAocGFyYW1zKSA9PiBwbGFjZUhlbHBlcihcInBsYWNlLVwiICsgcGFyYW1zWzBdLCB0YWlsKHBhcmFtcykpLFxuICBvdmVyc2Nyb2xsOiAocGFyYW1zKSA9PiAoe1xuICAgIFtcIm92ZXJzY3JvbGxCZWhhdmlvclwiICsgKHBhcmFtc1sxXSA/IFwiLVwiICsgcGFyYW1zWzBdIDogXCJcIildOiBwYXJhbXNbMV0gfHwgcGFyYW1zWzBdXG4gIH0pLFxuICBjb2w6IGdyaWRQbHVnaW4oXCJjb2x1bW5cIiksXG4gIHJvdzogZ3JpZFBsdWdpbihcInJvd1wiKSxcbiAgZHVyYXRpb246IHRoZW1lUHJvcGVydHkoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiksXG4gIGRlbGF5OiB0aGVtZVByb3BlcnR5KFwidHJhbnNpdGlvbkRlbGF5XCIpLFxuICB0cmFja2luZzogdGhlbWVQcm9wZXJ0eShcImxldHRlclNwYWNpbmdcIiksXG4gIGxlYWRpbmc6IHRoZW1lUHJvcGVydHkoXCJsaW5lSGVpZ2h0XCIpLFxuICB6OiB0aGVtZVByb3BlcnR5KFwiekluZGV4XCIpLFxuICBvcGFjaXR5OiB0aGVtZVByb3BlcnR5KCksXG4gIGVhc2U6IHRoZW1lUHJvcGVydHkoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIiksXG4gIHA6IHBhZGRpbmcsXG4gIHB5OiBwYWRkaW5nLFxuICBweDogcGFkZGluZyxcbiAgcHQ6IHBhZGRpbmcsXG4gIHByOiBwYWRkaW5nLFxuICBwYjogcGFkZGluZyxcbiAgcGw6IHBhZGRpbmcsXG4gIG06IG1hcmdpbixcbiAgbXk6IG1hcmdpbixcbiAgbXg6IG1hcmdpbixcbiAgbXQ6IG1hcmdpbixcbiAgbXI6IG1hcmdpbixcbiAgbWI6IG1hcmdpbixcbiAgbWw6IG1hcmdpbixcbiAgdzogdGhlbWVQcm9wZXJ0eShcIndpZHRoXCIpLFxuICBoOiB0aGVtZVByb3BlcnR5KFwiaGVpZ2h0XCIpLFxuICBtaW46IG1pbk1heCxcbiAgbWF4OiBtaW5NYXgsXG4gIGZpbGw6IHRoZW1lUHJvcGVydHkoKSxcbiAgb3JkZXI6IHRoZW1lUHJvcGVydHkoKSxcbiAgb3JpZ2luOiBwcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtT3JpZ2luXCIsIFwiIFwiKSxcbiAgc2VsZWN0OiBwcm9wZXJ0eVZhbHVlKFwidXNlclNlbGVjdFwiKSxcbiAgXCJwb2ludGVyLWV2ZW50c1wiOiBwcm9wZXJ0eVZhbHVlKCksXG4gIGFsaWduOiBwcm9wZXJ0eVZhbHVlKFwidmVydGljYWxBbGlnblwiKSxcbiAgd2hpdGVzcGFjZTogcHJvcGVydHlWYWx1ZShcIndoaXRlU3BhY2VcIiksXG4gIFwibm9ybWFsLW51bXNcIjoge2ZvbnRWYXJpYW50TnVtZXJpYzogXCJub3JtYWxcIn0sXG4gIG9yZGluYWw6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm9yZGluYWxcIiksXG4gIFwic2xhc2hlZC16ZXJvXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcInNsYXNoZWQtemVyb1wiKSxcbiAgXCJsaW5pbmctbnVtc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZpZ3VyZVwiKSxcbiAgXCJvbGRzdHlsZS1udW1zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtZmlndXJlXCIpLFxuICBcInByb3BvcnRpb25hbC1udW1zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtc3BhY2luZ1wiKSxcbiAgXCJ0YWJ1bGFyLW51bXNcIjogZm9udFZhcmlhbnROdW1lcmljKFwibnVtZXJpYy1zcGFjaW5nXCIpLFxuICBcImRpYWdvbmFsLWZyYWN0aW9uc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZyYWN0aW9uXCIpLFxuICBcInN0YWNrZWQtZnJhY3Rpb25zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtZnJhY3Rpb25cIiksXG4gIG92ZXJmbG93OiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gaW5jbHVkZXMoW1wiZWxsaXBzaXNcIiwgXCJjbGlwXCJdLCBwYXJhbXNbMF0pID8gcHJvcGVydHlWYWx1ZShcInRleHRPdmVyZmxvd1wiKShwYXJhbXMpIDogcGFyYW1zWzFdID8ge1tgb3ZlcmZsb3ctJHtwYXJhbXNbMF19YF06IHBhcmFtc1sxXX0gOiBwcm9wZXJ0eVZhbHVlKCkocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIHRyYW5zZm9ybTogKHBhcmFtcykgPT4gcGFyYW1zWzBdID09PSBcIm5vbmVcIiA/IHt0cmFuc2Zvcm06IFwibm9uZVwifSA6IHtcbiAgICBcIi0tdHctdHJhbnNsYXRlLXhcIjogXCIwXCIsXG4gICAgXCItLXR3LXRyYW5zbGF0ZS15XCI6IFwiMFwiLFxuICAgIFwiLS10dy1yb3RhdGVcIjogXCIwXCIsXG4gICAgXCItLXR3LXNrZXcteFwiOiBcIjBcIixcbiAgICBcIi0tdHctc2tldy15XCI6IFwiMFwiLFxuICAgIFwiLS10dy1zY2FsZS14XCI6IFwiMVwiLFxuICAgIFwiLS10dy1zY2FsZS15XCI6IFwiMVwiLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtKHBhcmFtc1swXSA9PT0gXCJncHVcIilcbiAgfSxcbiAgcm90YXRlOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwicm90YXRlXCIsIHBhcmFtcykpICYmIHtcbiAgICBcIi0tdHctcm90YXRlXCI6IF8sXG4gICAgdHJhbnNmb3JtOiBbYHJvdGF0ZSgke199KWAsIHRyYW5zZm9ybSgpXVxuICB9LFxuICBzY2FsZTogdHJhbnNmb3JtWFlGdW5jdGlvbixcbiAgdHJhbnNsYXRlOiB0cmFuc2Zvcm1YWUZ1bmN0aW9uLFxuICBza2V3OiB0cmFuc2Zvcm1YWUZ1bmN0aW9uLFxuICBnYXA6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IHt4OiBcImNvbHVtblwiLCB5OiBcInJvd1wifVtwYXJhbXNbMF1dKSA/IHtbXyArIFwiR2FwXCJdOiBjb250ZXh0LnRoZW1lKFwiZ2FwXCIsIHRhaWwocGFyYW1zKSl9IDogdGhlbWVQcm9wZXJ0eShcImdhcFwiKShwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgc3Ryb2tlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSBjb250ZXh0LnRoZW1lKFwic3Ryb2tlXCIsIHBhcmFtcywgXCJcIikpID8ge3N0cm9rZTogX30gOiB0aGVtZVByb3BlcnR5KFwic3Ryb2tlV2lkdGhcIikocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIG91dGxpbmU6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSB0aGVtZTIoXCJvdXRsaW5lXCIsIHBhcmFtcykpICYmIHtcbiAgICBvdXRsaW5lOiBfWzBdLFxuICAgIG91dGxpbmVPZmZzZXQ6IF9bMV1cbiAgfSxcbiAgYnJlYWsocGFyYW1zKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXG4gICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcIm5vcm1hbFwiXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwid29yZHNcIjpcbiAgICAgICAgcmV0dXJuIHtvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwifTtcbiAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgcmV0dXJuIHt3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCJ9O1xuICAgIH1cbiAgfSxcbiAgdGV4dChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY2FzZSBcImp1c3RpZnlcIjpcbiAgICAgICAgcmV0dXJuIHt0ZXh0QWxpZ246IHBhcmFtc1swXX07XG4gICAgICBjYXNlIFwidXBwZXJjYXNlXCI6XG4gICAgICBjYXNlIFwibG93ZXJjYXNlXCI6XG4gICAgICBjYXNlIFwiY2FwaXRhbGl6ZVwiOlxuICAgICAgICByZXR1cm4gdGV4dFRyYW5zZm9ybShbXSwgXywgcGFyYW1zWzBdKTtcbiAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgICB9XG4gICAgY29uc3QgZm9udFNpemUgPSB0aGVtZTIoXCJmb250U2l6ZVwiLCBwYXJhbXMsIFwiXCIpO1xuICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmb250U2l6ZSA9PSBcInN0cmluZ1wiID8ge2ZvbnRTaXplfSA6IHtcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplWzBdLFxuICAgICAgICAuLi50eXBlb2YgZm9udFNpemVbMV0gPT0gXCJzdHJpbmdcIiA/IHtsaW5lSGVpZ2h0OiBmb250U2l6ZVsxXX0gOiBmb250U2l6ZVsxXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhPcGFjaXR5RmFsbGJhY2soXCJjb2xvclwiLCBcInRleHRcIiwgdGhlbWUyKFwidGV4dENvbG9yXCIsIHBhcmFtcykpO1xuICB9LFxuICBiZyhwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImZpeGVkXCI6XG4gICAgICBjYXNlIFwibG9jYWxcIjpcbiAgICAgIGNhc2UgXCJzY3JvbGxcIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kQXR0YWNobWVudFwiLCBcIixcIikocGFyYW1zKTtcbiAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kUG9zaXRpb25cIiwgXCIgXCIpKHBhcmFtcyk7XG4gICAgICBjYXNlIFwibm9cIjpcbiAgICAgICAgcmV0dXJuIHBhcmFtc1sxXSA9PT0gXCJyZXBlYXRcIiAmJiBwcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZFJlcGVhdFwiKShwYXJhbXMpO1xuICAgICAgY2FzZSBcImF1dG9cIjpcbiAgICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgY2FzZSBcImNvbnRhaW5cIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kU2l6ZVwiKShwYXJhbXMpO1xuICAgICAgY2FzZSBcInJlcGVhdFwiOlxuICAgICAgICByZXR1cm4gaW5jbHVkZXMoXCJ4eVwiLCBwYXJhbXNbMV0pID8gcHJvcGVydHlWYWx1ZShcImJhY2tncm91bmRSZXBlYXRcIikocGFyYW1zKSA6IHtcImJhY2tncm91bmQtcmVwZWF0XCI6IHBhcmFtc1sxXSB8fCBwYXJhbXNbMF19O1xuICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgcmV0dXJuIG9wYWNpdHlQcm9wZXJ0eShwYXJhbXMsIHRoZW1lMiwgaWQsIFwiYmFja2dyb3VuZFwiKTtcbiAgICAgIGNhc2UgXCJjbGlwXCI6XG4gICAgICAgIHJldHVybiB7YmFja2dyb3VuZENsaXA6IHBhcmFtc1sxXSArIChwYXJhbXNbMV0gPT09IFwidGV4dFwiID8gXCJcIiA6IFwiLWJveFwiKX07XG4gICAgICBjYXNlIFwiZ3JhZGllbnRcIjpcbiAgICAgICAgaWYgKHBhcmFtc1sxXSA9PT0gXCJ0b1wiICYmIChfID0gZXhwYW5kRWRnZXMocGFyYW1zWzJdKSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvICR7am9pbihfLCBcIiBcIil9LHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSlgXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKF8gPSB0aGVtZTIoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgcGFyYW1zLCBcIlwiKSkgPyB7YmFja2dyb3VuZEltYWdlOiBffSA6IHdpdGhPcGFjaXR5RmFsbGJhY2soXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJiZ1wiLCB0aGVtZTIoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgcGFyYW1zKSk7XG4gIH0sXG4gIGZyb206IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSB0aGVtZTIoXCJncmFkaWVudENvbG9yU3RvcHNcIiwgcGFyYW1zKSkgJiYge1xuICAgIFwiLS10dy1ncmFkaWVudC1mcm9tXCI6IF8sXG4gICAgXCItLXR3LWdyYWRpZW50LXN0b3BzXCI6IGB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSx2YXIoLS10dy1ncmFkaWVudC10bywke3RyYW5zcGFyZW50VG8oXyl9KWBcbiAgfSxcbiAgdmlhOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwiZ3JhZGllbnRDb2xvclN0b3BzXCIsIHBhcmFtcykpICYmIHtcbiAgICBcIi0tdHctZ3JhZGllbnQtc3RvcHNcIjogYHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCR7X30sdmFyKC0tdHctZ3JhZGllbnQtdG8sJHt0cmFuc3BhcmVudFRvKF8pfSlgXG4gIH0sXG4gIHRvOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+ICh7XG4gICAgXCItLXR3LWdyYWRpZW50LXRvXCI6IHRoZW1lMihcImdyYWRpZW50Q29sb3JTdG9wc1wiLCBwYXJhbXMpXG4gIH0pLFxuICBib3JkZXI6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBleHBhbmRFZGdlcyhwYXJhbXNbMF0pID8gZWRnZXMoY29udGV4dC50aGVtZShcImJvcmRlcldpZHRoXCIsIHRhaWwocGFyYW1zKSksIHBhcmFtc1swXSwgXCJib3JkZXJcIiwgXCJ3aWR0aFwiKSA6IGJvcmRlcihwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgZGl2aWRlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSByZXZlcnNhYmxlRWRnZShwYXJhbXMsIGNvbnRleHQsIGlkLCBcImRpdmlkZVdpZHRoXCIsIFwiYm9yZGVyXCIsIFwid2lkdGhcIikgfHwgYm9yZGVyKHBhcmFtcywgY29udGV4dCwgaWQpKSAmJiB7XG4gICAgXCImPjpub3QoW2hpZGRlbl0pfjpub3QoW2hpZGRlbl0pXCI6IF9cbiAgfSxcbiAgc3BhY2U6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IHJldmVyc2FibGVFZGdlKHBhcmFtcywgY29udGV4dCwgaWQsIFwic3BhY2VcIiwgXCJtYXJnaW5cIikpICYmIHtcbiAgICBcIiY+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSlcIjogX1xuICB9LFxuICBwbGFjZWhvbGRlcjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4gKF8gPSBwYXJhbXNbMF0gPT09IFwib3BhY2l0eVwiID8gb3BhY2l0eVByb3BlcnR5KHBhcmFtcywgdGhlbWUyLCBpZCkgOiB3aXRoT3BhY2l0eUZhbGxiYWNrKFwiY29sb3JcIiwgXCJwbGFjZWhvbGRlclwiLCB0aGVtZTIoXCJwbGFjZWhvbGRlckNvbG9yXCIsIHBhcmFtcykpKSAmJiB7XG4gICAgXCImOjpwbGFjZWhvbGRlclwiOiBfXG4gIH0sXG4gIHNoYWRvdzogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IHRoZW1lMihcImJveFNoYWRvd1wiLCBwYXJhbXMpKSAmJiB7XG4gICAgXCI6Z2xvYmFsXCI6IHtcbiAgICAgIFwiKlwiOiB7XG4gICAgICAgIFwiLS10dy1zaGFkb3dcIjogXCIwIDAgdHJhbnNwYXJlbnRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCItLXR3LXNoYWRvd1wiOiBfID09PSBcIm5vbmVcIiA/IFwiMCAwIHRyYW5zcGFyZW50XCIgOiBfLFxuICAgIGJveFNoYWRvdzogW1xuICAgICAgXyxcbiAgICAgIGB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csMCAwIHRyYW5zcGFyZW50KSx2YXIoLS10dy1yaW5nLXNoYWRvdywwIDAgdHJhbnNwYXJlbnQpLHZhcigtLXR3LXNoYWRvdylgXG4gICAgXVxuICB9LFxuICBhbmltYXRlOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMiwgdGFnfSkgPT4ge1xuICAgIGlmICgkID0gdGhlbWUyKFwiYW5pbWF0aW9uXCIsIHBhcmFtcykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gJC5zcGxpdChcIiBcIik7XG4gICAgICBpZiAoKF8gPSB0aGVtZTIoXCJrZXlmcmFtZXNcIiwgcGFydHNbMF0sIF9fID0ge30pKSAhPT0gX18pIHtcbiAgICAgICAgcmV0dXJuICgkID0gdGFnKHBhcnRzWzBdKSkgJiYge1xuICAgICAgICAgIGFuaW1hdGlvbjogJCArIFwiIFwiICsgam9pbih0YWlsKHBhcnRzKSwgXCIgXCIpLFxuICAgICAgICAgIFtcIkBrZXlmcmFtZXMgXCIgKyAkXTogX1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHthbmltYXRpb246ICR9O1xuICAgIH1cbiAgfSxcbiAgcmluZyhwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImluc2V0XCI6XG4gICAgICAgIHJldHVybiB7XCItLXR3LXJpbmctaW5zZXRcIjogXCJpbnNldFwifTtcbiAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgICAgIGNhc2UgXCJvZmZzZXRcIjpcbiAgICAgICAgcmV0dXJuIChfID0gdGhlbWUyKFwicmluZ09mZnNldFdpZHRoXCIsIHRhaWwocGFyYW1zKSwgXCJcIikpID8ge1xuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC13aWR0aFwiOiBfXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgXCItLXR3LXJpbmctb2Zmc2V0LWNvbG9yXCI6IHRoZW1lMihcInJpbmdPZmZzZXRDb2xvclwiLCB0YWlsKHBhcmFtcykpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAoXyA9IHRoZW1lMihcInJpbmdXaWR0aFwiLCBwYXJhbXMsIFwiXCIpKSA/IHtcbiAgICAgIFwiLS10dy1yaW5nLW9mZnNldC1zaGFkb3dcIjogYHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcilgLFxuICAgICAgXCItLXR3LXJpbmctc2hhZG93XCI6IGB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKCR7X30gKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpYCxcbiAgICAgIFwiYm94LXNoYWRvd1wiOiBgdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSx2YXIoLS10dy1yaW5nLXNoYWRvdyksdmFyKC0tdHctc2hhZG93LDAgMCB0cmFuc3BhcmVudClgLFxuICAgICAgXCI6Z2xvYmFsXCI6IHtcbiAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICBcIi0tdHctcmluZy1pbnNldFwiOiBcInZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKVwiLFxuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC13aWR0aFwiOiB0aGVtZTIoXCJyaW5nT2Zmc2V0V2lkdGhcIiwgXCJcIiwgXCIwcHhcIiksXG4gICAgICAgICAgXCItLXR3LXJpbmctb2Zmc2V0LWNvbG9yXCI6IHRoZW1lMihcInJpbmdPZmZzZXRDb2xvclwiLCBcIlwiLCBcIiNmZmZcIiksXG4gICAgICAgICAgXCItLXR3LXJpbmctY29sb3JcIjogYXNSR0JBKHRoZW1lMihcInJpbmdDb2xvclwiLCBcIlwiLCBcIiM5M2M1ZmRcIiksIFwicmluZy1vcGFjaXR5XCIsIHRoZW1lMihcInJpbmdPcGFjaXR5XCIsIFwiXCIsIFwiMC41XCIpKSxcbiAgICAgICAgICBcIi0tdHctcmluZy1vZmZzZXQtc2hhZG93XCI6IFwiMCAwIHRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgXCItLXR3LXJpbmctc2hhZG93XCI6IFwiMCAwIHRyYW5zcGFyZW50XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gOiB7XG4gICAgICBcIi0tdHctcmluZy1vcGFjaXR5XCI6IFwiMVwiLFxuICAgICAgXCItLXR3LXJpbmctY29sb3JcIjogYXNSR0JBKHRoZW1lMihcInJpbmdDb2xvclwiLCBwYXJhbXMpLCBcInJpbmctb3BhY2l0eVwiKVxuICAgIH07XG4gIH0sXG4gIG9iamVjdDogKHBhcmFtcykgPT4gaW5jbHVkZXMoW1wiY29udGFpblwiLCBcImNvdmVyXCIsIFwiZmlsbFwiLCBcIm5vbmVcIiwgXCJzY2FsZVwiXSwgcGFyYW1zWzBdKSA/IHByb3BlcnR5VmFsdWUoXCJvYmplY3RGaXRcIikocGFyYW1zKSA6IHByb3BlcnR5VmFsdWUoXCJvYmplY3RQb3NpdGlvblwiLCBcIiBcIikocGFyYW1zKSxcbiAgbGlzdDogKHBhcmFtcykgPT4gcHJvcGVydHlWYWx1ZShpbmNsdWRlcyhbXCJpbnNpZGVcIiwgXCJvdXRzaWRlXCJdLCBwYXJhbXNbMF0pID8gXCJsaXN0U3R5bGVQb3NpdGlvblwiIDogXCJsaXN0U3R5bGVUeXBlXCIpKHBhcmFtcyksXG4gIHJvdW5kZWQ6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBjb3JuZXJzKGNvbnRleHQudGhlbWUoXCJib3JkZXJSYWRpdXNcIiwgdGFpbChwYXJhbXMpLCBcIlwiKSwgcGFyYW1zWzBdLCBcImJvcmRlclwiLCBcInJhZGl1c1wiKSB8fCB0aGVtZVByb3BlcnR5KFwiYm9yZGVyUmFkaXVzXCIpKHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBcInRyYW5zaXRpb24tbm9uZVwiOiB7XCJ0cmFuc2l0aW9uLXByb3BlcnR5XCI6IFwibm9uZVwifSxcbiAgdHJhbnNpdGlvbjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoe1xuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogdGhlbWUyKFwidHJhbnNpdGlvblByb3BlcnR5XCIsIHBhcmFtcyksXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aGVtZTIoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIiwgXCJcIiksXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGVtZTIoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJcIilcbiAgfSksXG4gIGNvbnRhaW5lcjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiB7XG4gICAgY29uc3Qge3NjcmVlbnMgPSB0aGVtZTIoXCJzY3JlZW5zXCIpLCBjZW50ZXIsIHBhZGRpbmc6IHBhZGRpbmcyfSA9IHRoZW1lMihcImNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwYWRkaW5nRm9yID0gKHNjcmVlbikgPT4gKF8gPSBwYWRkaW5nMiAmJiAodHlwZW9mIHBhZGRpbmcyID09IFwic3RyaW5nXCIgPyBwYWRkaW5nMiA6IHBhZGRpbmcyW3NjcmVlbl0gfHwgcGFkZGluZzIuREVGQVVMVCkpID8ge1xuICAgICAgcGFkZGluZ1JpZ2h0OiBfLFxuICAgICAgcGFkZGluZ0xlZnQ6IF9cbiAgICB9IDoge307XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjcmVlbnMpLnJlZHVjZSgocnVsZXMyLCBzY3JlZW4pID0+IHtcbiAgICAgIGlmICgoJCA9IHNjcmVlbnNbc2NyZWVuXSkgJiYgdHlwZW9mICQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBydWxlczJbYnVpbGRNZWRpYVF1ZXJ5KCQpXSA9IHtcbiAgICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogJCxcbiAgICAgICAgICAgIC4uLnBhZGRpbmdGb3Ioc2NyZWVuKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlczI7XG4gICAgfSwge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgLi4uY2VudGVyID8ge21hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCJ9IDoge30sXG4gICAgICAuLi5wYWRkaW5nRm9yKFwieHNcIilcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL3R3aW5kL3ByZWZsaWdodC50c1xudmFyIGNyZWF0ZVByZWZsaWdodCA9ICh0aGVtZTIpID0+ICh7XG4gIFwiOnJvb3RcIjoge3RhYlNpemU6IDR9LFxuICBcImJvZHksYmxvY2txdW90ZSxkbCxkZCxoMSxoMixoMyxoNCxoNSxoNixocixmaWd1cmUscCxwcmUsZmllbGRzZXQsb2wsdWxcIjoge21hcmdpbjogXCIwXCJ9LFxuICBidXR0b246IHtiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgYmFja2dyb3VuZEltYWdlOiBcIm5vbmVcIn0sXG4gICdidXR0b24sW3R5cGU9XCJidXR0b25cIl0sW3R5cGU9XCJyZXNldFwiXSxbdHlwZT1cInN1Ym1pdFwiXSc6IHtXZWJraXRBcHBlYXJhbmNlOiBcImJ1dHRvblwifSxcbiAgXCJidXR0b246Zm9jdXNcIjoge291dGxpbmU6IFtcIjFweCBkb3R0ZWRcIiwgXCI1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIl19LFxuICBcImZpZWxkc2V0LG9sLHVsLGxlZ2VuZFwiOiB7cGFkZGluZzogXCIwXCJ9LFxuICBcIm9sLHVsXCI6IHtsaXN0U3R5bGU6IFwibm9uZVwifSxcbiAgaHRtbDoge1xuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgV2Via2l0VGV4dFNpemVBZGp1c3Q6IFwiMTAwJVwiLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lMihcImZvbnRGYW1pbHkuc2Fuc1wiLCBcInVpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLHNhbnMtc2VyaWZcIilcbiAgfSxcbiAgYm9keToge2ZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIn0sXG4gIFwiKiw6OmJlZm9yZSw6OmFmdGVyXCI6IHtcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIGJvcmRlcjogYDAgc29saWQgJHt0aGVtZTIoXCJib3JkZXJDb2xvci5ERUZBVUxUXCIsIFwiY3VycmVudENvbG9yXCIpfWBcbiAgfSxcbiAgaHI6IHtoZWlnaHQ6IFwiMFwiLCBjb2xvcjogXCJpbmhlcml0XCIsIGJvcmRlclRvcFdpZHRoOiBcIjFweFwifSxcbiAgaW1nOiB7Ym9yZGVyU3R5bGU6IFwic29saWRcIn0sXG4gIHRleHRhcmVhOiB7cmVzaXplOiBcInZlcnRpY2FsXCJ9LFxuICBcImlucHV0OjpwbGFjZWhvbGRlcix0ZXh0YXJlYTo6cGxhY2Vob2xkZXJcIjoge1xuICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgIGNvbG9yOiB0aGVtZTIoXCJwbGFjZWhvbGRlckNvbG9yLkRFRkFVTFRcIiwgdGhlbWUyKFwiY29sb3JzLmdyYXkuNDAwXCIsIFwiI2ExYTFhYVwiKSlcbiAgfSxcbiAgJ2J1dHRvbixbcm9sZT1cImJ1dHRvblwiXSc6IHtjdXJzb3I6IFwicG9pbnRlclwifSxcbiAgdGFibGU6IHt0ZXh0SW5kZW50OiBcIjBcIiwgYm9yZGVyQ29sb3I6IFwiaW5oZXJpdFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwifSxcbiAgXCJoMSxoMixoMyxoNCxoNSxoNlwiOiB7Zm9udFNpemU6IFwiaW5oZXJpdFwiLCBmb250V2VpZ2h0OiBcImluaGVyaXRcIn0sXG4gIGE6IHtjb2xvcjogXCJpbmhlcml0XCIsIHRleHREZWNvcmF0aW9uOiBcImluaGVyaXRcIn0sXG4gIFwiYnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYVwiOiB7XG4gICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgZm9udFNpemU6IFwiMTAwJVwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIFwiYnV0dG9uLHNlbGVjdFwiOiB7dGV4dFRyYW5zZm9ybTogXCJub25lXCJ9LFxuICBcIjo6LW1vei1mb2N1cy1pbm5lclwiOiB7Ym9yZGVyU3R5bGU6IFwibm9uZVwiLCBwYWRkaW5nOiBcIjBcIn0sXG4gIFwiOi1tb3otZm9jdXNyaW5nXCI6IHtvdXRsaW5lOiBcIjFweCBkb3R0ZWQgQnV0dG9uVGV4dFwifSxcbiAgXCI6LW1vei11aS1pbnZhbGlkXCI6IHtib3hTaGFkb3c6IFwibm9uZVwifSxcbiAgcHJvZ3Jlc3M6IHt2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJ9LFxuICBcIjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiw6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIjoge2hlaWdodDogXCJhdXRvXCJ9LFxuICAnW3R5cGU9XCJzZWFyY2hcIl0nOiB7V2Via2l0QXBwZWFyYW5jZTogXCJ0ZXh0ZmllbGRcIiwgb3V0bGluZU9mZnNldDogXCItMnB4XCJ9LFxuICBcIjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvblwiOiB7V2Via2l0QXBwZWFyYW5jZTogXCJub25lXCJ9LFxuICBcIjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b25cIjoge1dlYmtpdEFwcGVhcmFuY2U6IFwiYnV0dG9uXCIsIGZvbnQ6IFwiaW5oZXJpdFwifSxcbiAgc3VtbWFyeToge2Rpc3BsYXk6IFwibGlzdC1pdGVtXCJ9LFxuICBcImFiYnJbdGl0bGVdXCI6IHt0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmUgZG90dGVkXCJ9LFxuICBcImIsc3Ryb25nXCI6IHtmb250V2VpZ2h0OiBcImJvbGRlclwifSxcbiAgXCJwcmUsY29kZSxrYmQsc2FtcFwiOiB7XG4gICAgZm9udEZhbWlseTogdGhlbWUyKFwiZm9udEZhbWlseVwiLCBcIm1vbm9cIiwgXCJ1aS1tb25vc3BhY2UsbW9ub3NwYWNlXCIpLFxuICAgIGZvbnRTaXplOiBcIjFlbVwiXG4gIH0sXG4gIFwic3ViLHN1cFwiOiB7Zm9udFNpemU6IFwiNzUlXCIsIGxpbmVIZWlnaHQ6IFwiMFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJ9LFxuICBzdWI6IHtib3R0b206IFwiLTAuMjVlbVwifSxcbiAgc3VwOiB7dG9wOiBcIi0wLjVlbVwifSxcbiAgXCJpbWcsc3ZnLHZpZGVvLGNhbnZhcyxhdWRpbyxpZnJhbWUsZW1iZWQsb2JqZWN0XCI6IHtkaXNwbGF5OiBcImJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9LFxuICBcImltZyx2aWRlb1wiOiB7bWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifVxufSk7XG5cbi8vIHNyYy90d2luZC92YXJpYW50cy50c1xudmFyIGNvcmVWYXJpYW50cyA9IHtcbiAgZGFyazogXCJAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspXCIsXG4gIHN0aWNreTogXCJAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjpzdGlja3kpKVwiLFxuICBcIm1vdGlvbi1yZWR1Y2VcIjogXCJAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKVwiLFxuICBcIm1vdGlvbi1zYWZlXCI6IFwiQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOm5vLXByZWZlcmVuY2UpXCIsXG4gIGZpcnN0OiBcIiY6Zmlyc3QtY2hpbGRcIixcbiAgbGFzdDogXCImOmxhc3QtY2hpbGRcIixcbiAgZXZlbjogXCImOm50aC1jaGlsZCgybilcIixcbiAgb2RkOiBcIiY6bnRoLWNoaWxkKG9kZClcIixcbiAgY2hpbGRyZW46IFwiJj4qXCIsXG4gIHNpYmxpbmdzOiBcIiZ+KlwiLFxuICBzaWJsaW5nOiBcIiYrKlwiLFxuICBvdmVycmlkZTogXCImJlwiXG59O1xuXG4vLyBzcmMvaW50ZXJuYWwvZG9tLnRzXG52YXIgU1RZTEVfRUxFTUVOVF9JRCA9IFwiX190d2luZFwiO1xudmFyIGdldFN0eWxlRWxlbWVudCA9IChub25jZSkgPT4ge1xuICBsZXQgZWxlbWVudCA9IHNlbGZbU1RZTEVfRUxFTUVOVF9JRF07XG4gIGlmICghZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSk7XG4gICAgZWxlbWVudC5pZCA9IFNUWUxFX0VMRU1FTlRfSUQ7XG4gICAgbm9uY2UgJiYgKGVsZW1lbnQubm9uY2UgPSBub25jZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBzcmMvdHdpbmQvc2hlZXRzLnRzXG52YXIgY3Nzb21TaGVldCA9ICh7XG4gIG5vbmNlLFxuICB0YXJnZXQgPSBnZXRTdHlsZUVsZW1lbnQobm9uY2UpLnNoZWV0XG59ID0ge30pID0+IHtcbiAgY29uc3Qgb2Zmc2V0ID0gdGFyZ2V0LmNzc1J1bGVzLmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQsXG4gICAgaW5zZXJ0OiAocnVsZSwgaW5kZXgpID0+IHRhcmdldC5pbnNlcnRSdWxlKHJ1bGUsIG9mZnNldCArIGluZGV4KVxuICB9O1xufTtcbnZhciB2b2lkU2hlZXQgPSAoKSA9PiAoe1xuICB0YXJnZXQ6IG51bGwsXG4gIGluc2VydDogbm9vcFxufSk7XG5cbi8vIHNyYy90d2luZC9tb2Rlcy50c1xudmFyIG1vZGUgPSAocmVwb3J0KSA9PiAoe1xuICB1bmtub3duKHNlY3Rpb24sIGtleSA9IFtdLCBvcHRpb25hbCwgY29udGV4dCkge1xuICAgIGlmICghb3B0aW9uYWwpIHtcbiAgICAgIHRoaXMucmVwb3J0KHtpZDogXCJVTktOT1dOX1RIRU1FX1ZBTFVFXCIsIGtleTogam9pbihbc2VjdGlvbiwgLi4ua2V5XSwgXCIuXCIpfSwgY29udGV4dCk7XG4gICAgfVxuICB9LFxuICByZXBvcnQoe2lkLCAuLi5pbmZvfSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgWyR7aWR9XSAke0pTT04uc3RyaW5naWZ5KGluZm8pfWA7XG4gICAgY29uc3Qgc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrIHx8IG1lc3NhZ2UpLnNwbGl0KFwiYXQgXCIpO1xuICAgIGZvciAobGV0IGZyYW1lOyAoZnJhbWUgPSBzdGFjay5zcGxpY2UoMSwgMSlbMF0pICYmICEvKF58XFwuKSh0d3xzZXR1cCkgLy50ZXN0KGZyYW1lKTsgKSB7XG4gICAgfVxuICAgIHJldHVybiByZXBvcnQoc3RhY2suam9pbihcImF0IFwiKSk7XG4gIH1cbn0pO1xudmFyIHdhcm4gPSBtb2RlKChtZXNzYWdlKSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSkpO1xudmFyIHN0cmljdCA9IG1vZGUoKG1lc3NhZ2UpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufSk7XG52YXIgc2lsZW50ID0gbW9kZShub29wKTtcblxuLy8gc3JjL3R3aW5kL3ByZWZpeC50c1xudmFyIGltcG9ydF9zdHlsZV92ZW5kb3JpemVyID0gX190b01vZHVsZShyZXF1aXJlKFwic3R5bGUtdmVuZG9yaXplclwiKSk7XG52YXIgbm9wcmVmaXggPSAocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KSA9PiBgJHtwcm9wZXJ0eTJ9OiR7dmFsdWV9JHtpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifWA7XG52YXIgYXV0b3ByZWZpeCA9IChwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpID0+IHtcbiAgbGV0IGNzc1RleHQgPSBcIlwiO1xuICBjb25zdCBwcm9wZXJ0eUFsaWFzID0gaW1wb3J0X3N0eWxlX3ZlbmRvcml6ZXIuY3NzUHJvcGVydHlBbGlhcyhwcm9wZXJ0eTIpO1xuICBpZiAocHJvcGVydHlBbGlhcylcbiAgICBjc3NUZXh0ICs9IGAke25vcHJlZml4KHByb3BlcnR5QWxpYXMsIHZhbHVlLCBpbXBvcnRhbnQpfTtgO1xuICBsZXQgZmxhZ3MgPSBpbXBvcnRfc3R5bGVfdmVuZG9yaXplci5jc3NQcm9wZXJ0eVByZWZpeEZsYWdzKHByb3BlcnR5Mik7XG4gIGlmIChmbGFncyAmIDEpXG4gICAgY3NzVGV4dCArPSBgLXdlYmtpdC0ke25vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDIpXG4gICAgY3NzVGV4dCArPSBgLW1vei0ke25vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDQpXG4gICAgY3NzVGV4dCArPSBgLW1zLSR7bm9wcmVmaXgocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KX07YDtcbiAgZmxhZ3MgPSBpbXBvcnRfc3R5bGVfdmVuZG9yaXplci5jc3NWYWx1ZVByZWZpeEZsYWdzKHByb3BlcnR5MiwgdmFsdWUpO1xuICBpZiAoZmxhZ3MgJiAxKVxuICAgIGNzc1RleHQgKz0gYCR7bm9wcmVmaXgocHJvcGVydHkyLCBgLXdlYmtpdC0ke3ZhbHVlfWAsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDIpXG4gICAgY3NzVGV4dCArPSBgJHtub3ByZWZpeChwcm9wZXJ0eTIsIGAtbW96LSR7dmFsdWV9YCwgaW1wb3J0YW50KX07YDtcbiAgaWYgKGZsYWdzICYgNClcbiAgICBjc3NUZXh0ICs9IGAke25vcHJlZml4KHByb3BlcnR5MiwgYC1tcy0ke3ZhbHVlfWAsIGltcG9ydGFudCl9O2A7XG4gIGNzc1RleHQgKz0gbm9wcmVmaXgocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgcmV0dXJuIGNzc1RleHQ7XG59O1xuXG4vLyBzcmMvdHdpbmQvdGhlbWUudHNcbnZhciByYXRpb3MgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZG8ge1xuICAgIGZvciAobGV0IGRpdmlkZW5kID0gMTsgZGl2aWRlbmQgPCBzdGFydDsgZGl2aWRlbmQrKykge1xuICAgICAgcmVzdWx0W2Ake2RpdmlkZW5kfS8ke3N0YXJ0fWBdID0gTnVtYmVyKChkaXZpZGVuZCAvIHN0YXJ0ICogMTAwKS50b0ZpeGVkKDYpKSArIFwiJVwiO1xuICAgIH1cbiAgfSB3aGlsZSAoKytzdGFydCA8PSBlbmQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBleHBvbmVudGlhbCA9IChzdG9wLCB1bml0LCBzdGFydCA9IDApID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoOyBzdGFydCA8PSBzdG9wOyBzdGFydCA9IHN0YXJ0ICogMiB8fCAxKSB7XG4gICAgcmVzdWx0W3N0YXJ0XSA9IHN0YXJ0ICsgdW5pdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBsaW5lYXIgPSAoc3RvcCwgdW5pdCA9IFwiXCIsIGRpdmlkZUJ5ID0gMSwgc3RhcnQgPSAwLCBzdGVwID0gMSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZm9yICg7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0ICs9IHN0ZXApIHtcbiAgICByZXN1bHRbc3RhcnRdID0gc3RhcnQgLyBkaXZpZGVCeSArIHVuaXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgYWxpYXMyID0gKHNlY3Rpb24pID0+ICh0aGVtZTIpID0+IHRoZW1lMihzZWN0aW9uKTtcbnZhciB0aGVtZUZhY3RvcnkgPSAoYXJncywge3RoZW1lOiB0aGVtZTJ9KSA9PiB0aGVtZTIoLi4uYXJncyk7XG52YXIgdGhlbWUgPSAoLi4uYXJncykgPT4gZGlyZWN0aXZlKHRoZW1lRmFjdG9yeSwgYXJncyk7XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBzY3JlZW5zOiB7XG4gICAgc206IFwiNjQwcHhcIixcbiAgICBtZDogXCI3NjhweFwiLFxuICAgIGxnOiBcIjEwMjRweFwiLFxuICAgIHhsOiBcIjEyODBweFwiLFxuICAgIFwiMnhsXCI6IFwiMTUzNnB4XCJcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgdHJhbnNwYXJlbnQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICBjdXJyZW50OiBcImN1cnJlbnRDb2xvclwiLFxuICAgIGJsYWNrOiBcIiMwMDBcIixcbiAgICB3aGl0ZTogXCIjZmZmXCIsXG4gICAgZ3JheToge1xuICAgICAgNTA6IFwiI2Y5ZmFmYlwiLFxuICAgICAgMTAwOiBcIiNmM2Y0ZjZcIixcbiAgICAgIDIwMDogXCIjZTVlN2ViXCIsXG4gICAgICAzMDA6IFwiI2QxZDVkYlwiLFxuICAgICAgNDAwOiBcIiM5Y2EzYWZcIixcbiAgICAgIDUwMDogXCIjNmI3MjgwXCIsXG4gICAgICA2MDA6IFwiIzRiNTU2M1wiLFxuICAgICAgNzAwOiBcIiMzNzQxNTFcIixcbiAgICAgIDgwMDogXCIjMWYyOTM3XCIsXG4gICAgICA5MDA6IFwiIzExMTgyN1wiXG4gICAgfSxcbiAgICByZWQ6IHtcbiAgICAgIDUwOiBcIiNmZWYyZjJcIixcbiAgICAgIDEwMDogXCIjZmVlMmUyXCIsXG4gICAgICAyMDA6IFwiI2ZlY2FjYVwiLFxuICAgICAgMzAwOiBcIiNmY2E1YTVcIixcbiAgICAgIDQwMDogXCIjZjg3MTcxXCIsXG4gICAgICA1MDA6IFwiI2VmNDQ0NFwiLFxuICAgICAgNjAwOiBcIiNkYzI2MjZcIixcbiAgICAgIDcwMDogXCIjYjkxYzFjXCIsXG4gICAgICA4MDA6IFwiIzk5MWIxYlwiLFxuICAgICAgOTAwOiBcIiM3ZjFkMWRcIlxuICAgIH0sXG4gICAgeWVsbG93OiB7XG4gICAgICA1MDogXCIjZmZmYmViXCIsXG4gICAgICAxMDA6IFwiI2ZlZjNjN1wiLFxuICAgICAgMjAwOiBcIiNmZGU2OGFcIixcbiAgICAgIDMwMDogXCIjZmNkMzRkXCIsXG4gICAgICA0MDA6IFwiI2ZiYmYyNFwiLFxuICAgICAgNTAwOiBcIiNmNTllMGJcIixcbiAgICAgIDYwMDogXCIjZDk3NzA2XCIsXG4gICAgICA3MDA6IFwiI2I0NTMwOVwiLFxuICAgICAgODAwOiBcIiM5MjQwMGVcIixcbiAgICAgIDkwMDogXCIjNzgzNTBmXCJcbiAgICB9LFxuICAgIGdyZWVuOiB7XG4gICAgICA1MDogXCIjZWNmZGY1XCIsXG4gICAgICAxMDA6IFwiI2QxZmFlNVwiLFxuICAgICAgMjAwOiBcIiNhN2YzZDBcIixcbiAgICAgIDMwMDogXCIjNmVlN2I3XCIsXG4gICAgICA0MDA6IFwiIzM0ZDM5OVwiLFxuICAgICAgNTAwOiBcIiMxMGI5ODFcIixcbiAgICAgIDYwMDogXCIjMDU5NjY5XCIsXG4gICAgICA3MDA6IFwiIzA0Nzg1N1wiLFxuICAgICAgODAwOiBcIiMwNjVmNDZcIixcbiAgICAgIDkwMDogXCIjMDY0ZTNiXCJcbiAgICB9LFxuICAgIGJsdWU6IHtcbiAgICAgIDUwOiBcIiNlZmY2ZmZcIixcbiAgICAgIDEwMDogXCIjZGJlYWZlXCIsXG4gICAgICAyMDA6IFwiI2JmZGJmZVwiLFxuICAgICAgMzAwOiBcIiM5M2M1ZmRcIixcbiAgICAgIDQwMDogXCIjNjBhNWZhXCIsXG4gICAgICA1MDA6IFwiIzNiODJmNlwiLFxuICAgICAgNjAwOiBcIiMyNTYzZWJcIixcbiAgICAgIDcwMDogXCIjMWQ0ZWQ4XCIsXG4gICAgICA4MDA6IFwiIzFlNDBhZlwiLFxuICAgICAgOTAwOiBcIiMxZTNhOGFcIlxuICAgIH0sXG4gICAgaW5kaWdvOiB7XG4gICAgICA1MDogXCIjZWVmMmZmXCIsXG4gICAgICAxMDA6IFwiI2UwZTdmZlwiLFxuICAgICAgMjAwOiBcIiNjN2QyZmVcIixcbiAgICAgIDMwMDogXCIjYTViNGZjXCIsXG4gICAgICA0MDA6IFwiIzgxOGNmOFwiLFxuICAgICAgNTAwOiBcIiM2MzY2ZjFcIixcbiAgICAgIDYwMDogXCIjNGY0NmU1XCIsXG4gICAgICA3MDA6IFwiIzQzMzhjYVwiLFxuICAgICAgODAwOiBcIiMzNzMwYTNcIixcbiAgICAgIDkwMDogXCIjMzEyZTgxXCJcbiAgICB9LFxuICAgIHB1cnBsZToge1xuICAgICAgNTA6IFwiI2Y1ZjNmZlwiLFxuICAgICAgMTAwOiBcIiNlZGU5ZmVcIixcbiAgICAgIDIwMDogXCIjZGRkNmZlXCIsXG4gICAgICAzMDA6IFwiI2M0YjVmZFwiLFxuICAgICAgNDAwOiBcIiNhNzhiZmFcIixcbiAgICAgIDUwMDogXCIjOGI1Y2Y2XCIsXG4gICAgICA2MDA6IFwiIzdjM2FlZFwiLFxuICAgICAgNzAwOiBcIiM2ZDI4ZDlcIixcbiAgICAgIDgwMDogXCIjNWIyMWI2XCIsXG4gICAgICA5MDA6IFwiIzRjMWQ5NVwiXG4gICAgfSxcbiAgICBwaW5rOiB7XG4gICAgICA1MDogXCIjZmRmMmY4XCIsXG4gICAgICAxMDA6IFwiI2ZjZTdmM1wiLFxuICAgICAgMjAwOiBcIiNmYmNmZThcIixcbiAgICAgIDMwMDogXCIjZjlhOGQ0XCIsXG4gICAgICA0MDA6IFwiI2Y0NzJiNlwiLFxuICAgICAgNTAwOiBcIiNlYzQ4OTlcIixcbiAgICAgIDYwMDogXCIjZGIyNzc3XCIsXG4gICAgICA3MDA6IFwiI2JlMTg1ZFwiLFxuICAgICAgODAwOiBcIiM5ZDE3NGRcIixcbiAgICAgIDkwMDogXCIjODMxODQzXCJcbiAgICB9XG4gIH0sXG4gIHNwYWNpbmc6IHtcbiAgICBweDogXCIxcHhcIixcbiAgICAwOiBcIjBweFwiLFxuICAgIC4uLmxpbmVhcig0LCBcInJlbVwiLCA0LCAwLjUsIDAuNSksXG4gICAgLi4ubGluZWFyKDEyLCBcInJlbVwiLCA0LCA1KSxcbiAgICAxNDogXCIzLjVyZW1cIixcbiAgICAuLi5saW5lYXIoNjQsIFwicmVtXCIsIDQsIDE2LCA0KSxcbiAgICA3MjogXCIxOHJlbVwiLFxuICAgIDgwOiBcIjIwcmVtXCIsXG4gICAgOTY6IFwiMjRyZW1cIlxuICB9LFxuICBkdXJhdGlvbnM6IHtcbiAgICA3NTogXCI3NW1zXCIsXG4gICAgMTAwOiBcIjEwMG1zXCIsXG4gICAgMTUwOiBcIjE1MG1zXCIsXG4gICAgMjAwOiBcIjIwMG1zXCIsXG4gICAgMzAwOiBcIjMwMG1zXCIsXG4gICAgNTAwOiBcIjUwMG1zXCIsXG4gICAgNzAwOiBcIjcwMG1zXCIsXG4gICAgMWUzOiBcIjEwMDBtc1wiXG4gIH0sXG4gIGFuaW1hdGlvbjoge1xuICAgIG5vbmU6IFwibm9uZVwiLFxuICAgIHNwaW46IFwic3BpbiAxcyBsaW5lYXIgaW5maW5pdGVcIixcbiAgICBwaW5nOiBcInBpbmcgMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgaW5maW5pdGVcIixcbiAgICBwdWxzZTogXCJwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlXCIsXG4gICAgYm91bmNlOiBcImJvdW5jZSAxcyBpbmZpbml0ZVwiXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogYWxpYXMyKFwiY29sb3JzXCIpLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICBub25lOiBcIm5vbmVcIlxuICB9LFxuICBiYWNrZ3JvdW5kT3BhY2l0eTogYWxpYXMyKFwib3BhY2l0eVwiKSxcbiAgYm9yZGVyQ29sb3I6ICh0aGVtZTIpID0+ICh7XG4gICAgLi4udGhlbWUyKFwiY29sb3JzXCIpLFxuICAgIERFRkFVTFQ6IHRoZW1lMihcImNvbG9ycy5ncmF5LjIwMFwiLCBcImN1cnJlbnRDb2xvclwiKVxuICB9KSxcbiAgYm9yZGVyT3BhY2l0eTogYWxpYXMyKFwib3BhY2l0eVwiKSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgbm9uZTogXCIwcHhcIixcbiAgICBzbTogXCIwLjEyNXJlbVwiLFxuICAgIERFRkFVTFQ6IFwiMC4yNXJlbVwiLFxuICAgIG1kOiBcIjAuMzc1cmVtXCIsXG4gICAgbGc6IFwiMC41cmVtXCIsXG4gICAgeGw6IFwiMC43NXJlbVwiLFxuICAgIFwiMnhsXCI6IFwiMXJlbVwiLFxuICAgIFwiM3hsXCI6IFwiMS41cmVtXCIsXG4gICAgZnVsbDogXCI5OTk5cHhcIlxuICB9LFxuICBib3JkZXJXaWR0aDoge1xuICAgIERFRkFVTFQ6IFwiMXB4XCIsXG4gICAgLi4uZXhwb25lbnRpYWwoOCwgXCJweFwiKVxuICB9LFxuICBib3hTaGFkb3c6IHtcbiAgICBzbTogXCIwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpXCIsXG4gICAgREVGQVVMVDogXCIwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNilcIixcbiAgICBtZDogXCIwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNilcIixcbiAgICBsZzogXCIwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgIHhsOiBcIjAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNClcIixcbiAgICBcIjJ4bFwiOiBcIjAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcbiAgICBpbm5lcjogXCJpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgbm9uZTogXCJub25lXCJcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgZGl2aWRlQ29sb3I6IGFsaWFzMihcImJvcmRlckNvbG9yXCIpLFxuICBkaXZpZGVPcGFjaXR5OiBhbGlhczIoXCJib3JkZXJPcGFjaXR5XCIpLFxuICBkaXZpZGVXaWR0aDogYWxpYXMyKFwiYm9yZGVyV2lkdGhcIiksXG4gIGZpbGw6IHtjdXJyZW50OiBcImN1cnJlbnRDb2xvclwifSxcbiAgZmxleDoge1xuICAgIDE6IFwiMSAxIDAlXCIsXG4gICAgYXV0bzogXCIxIDEgYXV0b1wiLFxuICAgIGluaXRpYWw6IFwiMCAxIGF1dG9cIixcbiAgICBub25lOiBcIm5vbmVcIlxuICB9LFxuICBmb250RmFtaWx5OiB7XG4gICAgc2FuczogJ3VpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCInLnNwbGl0KFwiLFwiKSxcbiAgICBzZXJpZjogJ3VpLXNlcmlmLEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmJy5zcGxpdChcIixcIiksXG4gICAgbW9ubzogJ3VpLW1vbm9zcGFjZSxTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlJy5zcGxpdChcIixcIilcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICB4czogW1wiMC43NXJlbVwiLCBcIjFyZW1cIl0sXG4gICAgc206IFtcIjAuODc1cmVtXCIsIFwiMS4yNXJlbVwiXSxcbiAgICBiYXNlOiBbXCIxcmVtXCIsIFwiMS41cmVtXCJdLFxuICAgIGxnOiBbXCIxLjEyNXJlbVwiLCBcIjEuNzVyZW1cIl0sXG4gICAgeGw6IFtcIjEuMjVyZW1cIiwgXCIxLjc1cmVtXCJdLFxuICAgIFwiMnhsXCI6IFtcIjEuNXJlbVwiLCBcIjJyZW1cIl0sXG4gICAgXCIzeGxcIjogW1wiMS44NzVyZW1cIiwgXCIyLjI1cmVtXCJdLFxuICAgIFwiNHhsXCI6IFtcIjIuMjVyZW1cIiwgXCIyLjVyZW1cIl0sXG4gICAgXCI1eGxcIjogW1wiM3JlbVwiLCBcIjFcIl0sXG4gICAgXCI2eGxcIjogW1wiMy43NXJlbVwiLCBcIjFcIl0sXG4gICAgXCI3eGxcIjogW1wiNC41cmVtXCIsIFwiMVwiXSxcbiAgICBcIjh4bFwiOiBbXCI2cmVtXCIsIFwiMVwiXSxcbiAgICBcIjl4bFwiOiBbXCI4cmVtXCIsIFwiMVwiXVxuICB9LFxuICBmb250V2VpZ2h0OiB7XG4gICAgdGhpbjogXCIxMDBcIixcbiAgICBleHRyYWxpZ2h0OiBcIjIwMFwiLFxuICAgIGxpZ2h0OiBcIjMwMFwiLFxuICAgIG5vcm1hbDogXCI0MDBcIixcbiAgICBtZWRpdW06IFwiNTAwXCIsXG4gICAgc2VtaWJvbGQ6IFwiNjAwXCIsXG4gICAgYm9sZDogXCI3MDBcIixcbiAgICBleHRyYWJvbGQ6IFwiODAwXCIsXG4gICAgYmxhY2s6IFwiOTAwXCJcbiAgfSxcbiAgZ2FwOiBhbGlhczIoXCJzcGFjaW5nXCIpLFxuICBncmFkaWVudENvbG9yU3RvcHM6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgaGVpZ2h0OiAodGhlbWUyKSA9PiAoe1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIiksXG4gICAgLi4ucmF0aW9zKDIsIDYpLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIHNjcmVlbjogXCIxMDB2aFwiXG4gIH0pLFxuICBpbnNldDogKHRoZW1lMikgPT4gKHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIC4uLnJhdGlvcygyLCA0KSxcbiAgICBmdWxsOiBcIjEwMCVcIlxuICB9KSxcbiAga2V5ZnJhbWVzOiB7XG4gICAgc3Bpbjoge1xuICAgICAgZnJvbToge1xuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCJcbiAgICAgIH0sXG4gICAgICB0bzoge1xuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGluZzoge1xuICAgICAgXCIwJVwiOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjFcIlxuICAgICAgfSxcbiAgICAgIFwiNzUlLDEwMCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMilcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1bHNlOiB7XG4gICAgICBcIjAlLDEwMCVcIjoge1xuICAgICAgICBvcGFjaXR5OiBcIjFcIlxuICAgICAgfSxcbiAgICAgIFwiNTAlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogXCIuNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBib3VuY2U6IHtcbiAgICAgIFwiMCUsIDEwMCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMjUlKVwiLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMC44LDAsMSwxKVwiXG4gICAgICB9LFxuICAgICAgXCI1MCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMCwwLDAuMiwxKVwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgdGlnaHRlcjogXCItMC4wNWVtXCIsXG4gICAgdGlnaHQ6IFwiLTAuMDI1ZW1cIixcbiAgICBub3JtYWw6IFwiMGVtXCIsXG4gICAgd2lkZTogXCIwLjAyNWVtXCIsXG4gICAgd2lkZXI6IFwiMC4wNWVtXCIsXG4gICAgd2lkZXN0OiBcIjAuMWVtXCJcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIG5vbmU6IFwiMVwiLFxuICAgIHRpZ2h0OiBcIjEuMjVcIixcbiAgICBzbnVnOiBcIjEuMzc1XCIsXG4gICAgbm9ybWFsOiBcIjEuNVwiLFxuICAgIHJlbGF4ZWQ6IFwiMS42MjVcIixcbiAgICBsb29zZTogXCIyXCIsXG4gICAgLi4ubGluZWFyKDEwLCBcInJlbVwiLCA0LCAzKVxuICB9LFxuICBtYXJnaW46ICh0aGVtZTIpID0+ICh7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKVxuICB9KSxcbiAgbWF4SGVpZ2h0OiAodGhlbWUyKSA9PiAoe1xuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIiksXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgc2NyZWVuOiBcIjEwMHZoXCJcbiAgfSksXG4gIG1heFdpZHRoOiAodGhlbWUyLCB7YnJlYWtwb2ludHN9KSA9PiAoe1xuICAgIG5vbmU6IFwibm9uZVwiLFxuICAgIDA6IFwiMHJlbVwiLFxuICAgIHhzOiBcIjIwcmVtXCIsXG4gICAgc206IFwiMjRyZW1cIixcbiAgICBtZDogXCIyOHJlbVwiLFxuICAgIGxnOiBcIjMycmVtXCIsXG4gICAgeGw6IFwiMzZyZW1cIixcbiAgICBcIjJ4bFwiOiBcIjQycmVtXCIsXG4gICAgXCIzeGxcIjogXCI0OHJlbVwiLFxuICAgIFwiNHhsXCI6IFwiNTZyZW1cIixcbiAgICBcIjV4bFwiOiBcIjY0cmVtXCIsXG4gICAgXCI2eGxcIjogXCI3MnJlbVwiLFxuICAgIFwiN3hsXCI6IFwiODByZW1cIixcbiAgICBmdWxsOiBcIjEwMCVcIixcbiAgICBtaW46IFwibWluLWNvbnRlbnRcIixcbiAgICBtYXg6IFwibWF4LWNvbnRlbnRcIixcbiAgICBwcm9zZTogXCI2NWNoXCIsXG4gICAgLi4uYnJlYWtwb2ludHModGhlbWUyKFwic2NyZWVuc1wiKSlcbiAgfSksXG4gIG1pbkhlaWdodDoge1xuICAgIDA6IFwiMHB4XCIsXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgc2NyZWVuOiBcIjEwMHZoXCJcbiAgfSxcbiAgbWluV2lkdGg6IHtcbiAgICAwOiBcIjBweFwiLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIG1pbjogXCJtaW4tY29udGVudFwiLFxuICAgIG1heDogXCJtYXgtY29udGVudFwiXG4gIH0sXG4gIG9wYWNpdHk6IHtcbiAgICAuLi5saW5lYXIoMTAwLCBcIlwiLCAxMDAsIDAsIDEwKSxcbiAgICA1OiBcIjAuMDVcIixcbiAgICAyNTogXCIwLjI1XCIsXG4gICAgNzU6IFwiMC43NVwiLFxuICAgIDk1OiBcIjAuOTVcIlxuICB9LFxuICBvcmRlcjoge1xuICAgIGZpcnN0OiBcIi05OTk5XCIsXG4gICAgbGFzdDogXCI5OTk5XCIsXG4gICAgbm9uZTogXCIwXCIsXG4gICAgLi4ubGluZWFyKDEyLCBcIlwiLCAxLCAxKVxuICB9LFxuICBvdXRsaW5lOiB7XG4gICAgbm9uZTogW1wiMnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIFwiMnB4XCJdLFxuICAgIHdoaXRlOiBbXCIycHggZG90dGVkIHdoaXRlXCIsIFwiMnB4XCJdLFxuICAgIGJsYWNrOiBbXCIycHggZG90dGVkIGJsYWNrXCIsIFwiMnB4XCJdXG4gIH0sXG4gIHBhZGRpbmc6IGFsaWFzMihcInNwYWNpbmdcIiksXG4gIHBsYWNlaG9sZGVyQ29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgcGxhY2Vob2xkZXJPcGFjaXR5OiBhbGlhczIoXCJvcGFjaXR5XCIpLFxuICByaW5nQ29sb3I6ICh0aGVtZTIpID0+ICh7XG4gICAgREVGQVVMVDogdGhlbWUyKFwiY29sb3JzLmJsdWUuNTAwXCIsIFwiIzNiODJmNlwiKSxcbiAgICAuLi50aGVtZTIoXCJjb2xvcnNcIilcbiAgfSksXG4gIHJpbmdPZmZzZXRDb2xvcjogYWxpYXMyKFwiY29sb3JzXCIpLFxuICByaW5nT2Zmc2V0V2lkdGg6IGV4cG9uZW50aWFsKDgsIFwicHhcIiksXG4gIHJpbmdPcGFjaXR5OiAodGhlbWUyKSA9PiAoe1xuICAgIERFRkFVTFQ6IFwiMC41XCIsXG4gICAgLi4udGhlbWUyKFwib3BhY2l0eVwiKVxuICB9KSxcbiAgcmluZ1dpZHRoOiB7XG4gICAgREVGQVVMVDogXCIzcHhcIixcbiAgICAuLi5leHBvbmVudGlhbCg4LCBcInB4XCIpXG4gIH0sXG4gIHJvdGF0ZToge1xuICAgIC4uLmV4cG9uZW50aWFsKDIsIFwiZGVnXCIpLFxuICAgIC4uLmV4cG9uZW50aWFsKDEyLCBcImRlZ1wiLCAzKSxcbiAgICAuLi5leHBvbmVudGlhbCgxODAsIFwiZGVnXCIsIDQ1KVxuICB9LFxuICBzY2FsZToge1xuICAgIDA6IFwiMFwiLFxuICAgIDUwOiBcIi41XCIsXG4gICAgNzU6IFwiLjc1XCIsXG4gICAgLi4ubGluZWFyKDExMCwgXCJcIiwgMTAwLCA5MCwgNSksXG4gICAgMTI1OiBcIjEuMjVcIixcbiAgICAxNTA6IFwiMS41XCJcbiAgfSxcbiAgc2tldzoge1xuICAgIC4uLmV4cG9uZW50aWFsKDIsIFwiZGVnXCIpLFxuICAgIC4uLmV4cG9uZW50aWFsKDEyLCBcImRlZ1wiLCAzKVxuICB9LFxuICBzcGFjZTogYWxpYXMyKFwic3BhY2luZ1wiKSxcbiAgc3Ryb2tlOiB7XG4gICAgY3VycmVudDogXCJjdXJyZW50Q29sb3JcIlxuICB9LFxuICBzdHJva2VXaWR0aDogbGluZWFyKDIpLFxuICB0ZXh0Q29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgdGV4dE9wYWNpdHk6IGFsaWFzMihcIm9wYWNpdHlcIiksXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogKHRoZW1lMikgPT4gKHtcbiAgICBERUZBVUxUOiBcIjE1MG1zXCIsXG4gICAgLi4udGhlbWUyKFwiZHVyYXRpb25zXCIpXG4gIH0pLFxuICB0cmFuc2l0aW9uRGVsYXk6IGFsaWFzMihcImR1cmF0aW9uc1wiKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB7XG4gICAgbm9uZTogXCJub25lXCIsXG4gICAgYWxsOiBcImFsbFwiLFxuICAgIERFRkFVTFQ6IFwiYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2Usb3BhY2l0eSxib3gtc2hhZG93LHRyYW5zZm9ybVwiLFxuICAgIGNvbG9yczogXCJiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZVwiLFxuICAgIG9wYWNpdHk6IFwib3BhY2l0eVwiLFxuICAgIHNoYWRvdzogXCJib3gtc2hhZG93XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zZm9ybVwiXG4gIH0sXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjoge1xuICAgIERFRkFVTFQ6IFwiY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKVwiLFxuICAgIGxpbmVhcjogXCJsaW5lYXJcIixcbiAgICBpbjogXCJjdWJpYy1iZXppZXIoMC40LDAsMSwxKVwiLFxuICAgIG91dDogXCJjdWJpYy1iZXppZXIoMCwwLDAuMiwxKVwiLFxuICAgIFwiaW4tb3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKVwiXG4gIH0sXG4gIHRyYW5zbGF0ZTogKHRoZW1lMikgPT4gKHtcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIC4uLnJhdGlvcygyLCA0KSxcbiAgICBmdWxsOiBcIjEwMCVcIlxuICB9KSxcbiAgd2lkdGg6ICh0aGVtZTIpID0+ICh7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKSxcbiAgICAuLi5yYXRpb3MoMiwgNiksXG4gICAgLi4ucmF0aW9zKDEyLCAxMiksXG4gICAgc2NyZWVuOiBcIjEwMHZ3XCIsXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgbWluOiBcIm1pbi1jb250ZW50XCIsXG4gICAgbWF4OiBcIm1heC1jb250ZW50XCJcbiAgfSksXG4gIHpJbmRleDoge1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLmxpbmVhcig1MCwgXCJcIiwgMSwgMCwgMTApXG4gIH1cbn07XG52YXIgZmxhdHRlbkNvbG9yUGFsZXR0ZSA9IChjb2xvcnMsIHRhcmdldCA9IHt9LCBwcmVmaXggPSBbXSkgPT4ge1xuICBPYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goKHByb3BlcnR5MikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3Byb3BlcnR5Ml07XG4gICAgaWYgKHByb3BlcnR5MiA9PT0gXCJERUZBVUxUXCIpIHtcbiAgICAgIHRhcmdldFtqb2luKHByZWZpeCldID0gdmFsdWU7XG4gICAgICB0YXJnZXRbam9pbihwcmVmaXgsIFwiLlwiKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gWy4uLnByZWZpeCwgcHJvcGVydHkyXTtcbiAgICB0YXJnZXRbam9pbihrZXkpXSA9IHZhbHVlO1xuICAgIHRhcmdldFtqb2luKGtleSwgXCIuXCIpXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgZmxhdHRlbkNvbG9yUGFsZXR0ZSh2YWx1ZSwgdGFyZ2V0LCBrZXkpO1xuICAgIH1cbiAgfSwgdGFyZ2V0KTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgcmVzb2x2ZUNvbnRleHQgPSB7XG4gIG5lZ2F0aXZlOiAoKSA9PiAoe30pLFxuICBicmVha3BvaW50czogKHNjcmVlbnMpID0+IE9iamVjdC5rZXlzKHNjcmVlbnMpLmZpbHRlcigoa2V5KSA9PiB0eXBlb2Ygc2NyZWVuc1trZXldID09IFwic3RyaW5nXCIpLnJlZHVjZSgodGFyZ2V0LCBrZXkpID0+IHtcbiAgICB0YXJnZXRbXCJzY3JlZW4tXCIgKyBrZXldID0gc2NyZWVuc1trZXldO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KVxufTtcbnZhciBtYWtlVGhlbWVSZXNvbHZlciA9IChjb25maWcpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRoZW1lMiA9IHsuLi5kZWZhdWx0VGhlbWUsIC4uLmNvbmZpZ307XG4gIGNvbnN0IGRlcmVmID0gKHRoZW1lMywgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGJhc2UgPSB0aGVtZTMgJiYgdGhlbWUzW3NlY3Rpb25dO1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGJhc2UgPT0gXCJmdW5jdGlvblwiID8gYmFzZShyZXNvbHZlLCByZXNvbHZlQ29udGV4dCkgOiBiYXNlO1xuICAgIHJldHVybiB2YWx1ZSAmJiBzZWN0aW9uID09PSBcImNvbG9yc1wiID8gZmxhdHRlbkNvbG9yUGFsZXR0ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgcmVzb2x2ZSA9IChzZWN0aW9uLCBrZXksIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGtleXBhdGggPSBzZWN0aW9uLnNwbGl0KFwiLlwiKTtcbiAgICBzZWN0aW9uID0ga2V5cGF0aFswXTtcbiAgICBpZiAoa2V5cGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXk7XG4gICAgICBrZXkgPSBqb2luKHRhaWwoa2V5cGF0aCksIFwiLlwiKTtcbiAgICB9XG4gICAgbGV0IGJhc2UgPSBjYWNoZS5nZXQoc2VjdGlvbik7XG4gICAgaWYgKCFiYXNlKSB7XG4gICAgICBjYWNoZS5zZXQoc2VjdGlvbiwgYmFzZSA9IHtcbiAgICAgICAgLi4uZGVyZWYodGhlbWUyLCBzZWN0aW9uKSxcbiAgICAgICAgLi4uZGVyZWYodGhlbWUyLmV4dGVuZCwgc2VjdGlvbilcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmFzZVsoQXJyYXkuaXNBcnJheShrZXkpID8gam9pbihrZXkpIDoga2V5KSB8fCBcIkRFRkFVTFRcIl07XG4gICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpICYmICFpbmNsdWRlcyhbXCJmb250U2l6ZVwiLCBcIm91dGxpbmVcIl0sIHNlY3Rpb24pID8gam9pbih2YWx1ZSwgXCIsXCIpIDogdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9O1xuICByZXR1cm4gcmVzb2x2ZTtcbn07XG5cbi8vIHNyYy90d2luZC90cmFuc2xhdGUudHNcbnZhciB0cmFuc2xhdGUgPSAocGx1Z2lucywgY29udGV4dCkgPT4gKHJ1bGUsIGlzVHJhbnNsYXRpbmcpID0+IHtcbiAgaWYgKHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHJ1bGUuZChjb250ZXh0KTtcbiAgfVxuICBjb25zdCBwYXJhbWV0ZXJzID0gcnVsZS5kLnNwbGl0KFwiLVwiKTtcbiAgaWYgKCFpc1RyYW5zbGF0aW5nICYmIHBhcmFtZXRlcnNbMF0gPT09IFwidHdcIiAmJiBydWxlLiQgPT09IHJ1bGUuZCkge1xuICAgIHJldHVybiBydWxlLiQ7XG4gIH1cbiAgZm9yIChsZXQgaW5kZXggPSBwYXJhbWV0ZXJzLmxlbmd0aDsgaW5kZXg7IGluZGV4LS0pIHtcbiAgICBjb25zdCBpZCA9IGpvaW4ocGFyYW1ldGVycy5zbGljZSgwLCBpbmRleCkpO1xuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbaWRdO1xuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcGx1Z2luID09IFwiZnVuY3Rpb25cIiA/IHBsdWdpbih0YWlsKHBhcmFtZXRlcnMsIGluZGV4KSwgY29udGV4dCwgaWQpIDogdHlwZW9mIHBsdWdpbiA9PSBcInN0cmluZ1wiID8gY29udGV4dFtpc1RyYW5zbGF0aW5nID8gXCJjc3NcIiA6IFwidHdcIl0ocGx1Z2luKSA6IHBsdWdpbjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy90d2luZC9kZWNvcmF0ZS50c1xudmFyIF8yO1xudmFyIEdST1VQX1JFID0gL146KGdyb3VwKD86KD8hLWZvY3VzKS4rPykqKS0oLispJC87XG52YXIgZGVjb3JhdGUgPSAoZGFya01vZGUsIHZhcmlhbnRzLCB7dGhlbWU6IHRoZW1lMiwgdGFnfSkgPT4ge1xuICBjb25zdCBhcHBseVZhcmlhbnQgPSAodHJhbnNsYXRpb24sIHZhcmlhbnQpID0+IHtcbiAgICBpZiAoXzIgPSB0aGVtZTIoXCJzY3JlZW5zXCIsIHRhaWwodmFyaWFudCksIFwiXCIpKSB7XG4gICAgICByZXR1cm4ge1tidWlsZE1lZGlhUXVlcnkoXzIpXTogdHJhbnNsYXRpb259O1xuICAgIH1cbiAgICBpZiAodmFyaWFudCA9PT0gXCI6ZGFya1wiICYmIGRhcmtNb2RlID09PSBcImNsYXNzXCIpIHtcbiAgICAgIHJldHVybiB7W2AuZGFyayAmYF06IHRyYW5zbGF0aW9ufTtcbiAgICB9XG4gICAgaWYgKF8yID0gR1JPVVBfUkUuZXhlYyh2YXJpYW50KSkge1xuICAgICAgcmV0dXJuIHtbYC4ke2VzY2FwZSh0YWcoXzJbMV0pKX06JHtfMlsyXX0gJmBdOiB0cmFuc2xhdGlvbn07XG4gICAgfVxuICAgIHJldHVybiB7W3ZhcmlhbnRzW3RhaWwodmFyaWFudCldIHx8IFwiJlwiICsgdmFyaWFudF06IHRyYW5zbGF0aW9ufTtcbiAgfTtcbiAgcmV0dXJuICh0cmFuc2xhdGlvbiwgcnVsZSkgPT4gcnVsZS52LnJlZHVjZVJpZ2h0KGFwcGx5VmFyaWFudCwgdHJhbnNsYXRpb24pO1xufTtcblxuLy8gc3JjL3R3aW5kL3ByZXNlZGVuY2UudHNcbnZhciBfMztcbnZhciByZXNwb25zaXZlUHJlY2VkZW5jZSA9IChjc3MpID0+ICgoKF8zID0gLyg/Ol58bWluLXdpZHRoOiAqKShcXGQrKD86LlxcZCspPykocCk/Ly5leGVjKGNzcykpID8gK18zWzFdIC8gKF8zWzJdID8gMTUgOiAxKSAvIDEwIDogMCkgJiAzMSkgPDwgMjI7XG52YXIgc2VwZXJhdG9yUHJlY2VkZW5jZSA9IChzdHJpbmcpID0+IHtcbiAgXzMgPSAwO1xuICBmb3IgKGxldCBpbmRleCA9IHN0cmluZy5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgIF8zICs9IGluY2x1ZGVzKFwiLTosXCIsIHN0cmluZ1tpbmRleF0pO1xuICB9XG4gIHJldHVybiBfMztcbn07XG52YXIgYXRSdWxlUHJlc2VkZW5jZSA9IChjc3MpID0+IChzZXBlcmF0b3JQcmVjZWRlbmNlKGNzcykgJiAxNSkgPDwgMTg7XG52YXIgUFJFQ0VERU5DRVNfQllfUFNFVURPX0NMQVNTID0gW1xuICBcInJzdFwiLFxuICBcInN0XCIsXG4gIFwiZW5cIixcbiAgXCJkXCIsXG4gIFwibmtcIixcbiAgXCJzaXRlZFwiLFxuICBcInB0eVwiLFxuICBcImVja2VkXCIsXG4gIFwiY3VzLXdcIixcbiAgXCJ2ZXJcIixcbiAgXCJjdXNcIixcbiAgXCJjdXMtdlwiLFxuICBcInRpdmVcIixcbiAgXCJzYWJsZVwiLFxuICBcImFkLW9uXCIsXG4gIFwidGlvbmFcIixcbiAgXCJxdWlyZVwiXG5dO1xudmFyIHBzZXVkb1ByZWNlZGVuY2UgPSAocHNldWRvQ2xhc3MpID0+IDEgPDwgKH4oXzMgPSBQUkVDRURFTkNFU19CWV9QU0VVRE9fQ0xBU1MuaW5kZXhPZihwc2V1ZG9DbGFzcy5yZXBsYWNlKEdST1VQX1JFLCBcIjokMlwiKS5zbGljZSgzLCA4KSkpID8gXzMgOiAxNyk7XG52YXIgbWFrZVZhcmlhbnRQcmVzZWRlbmNlQ2FsY3VsYXRvciA9ICh0aGVtZTIsIHZhcmlhbnRzKSA9PiAocHJlc2VkZW5jZSwgdmFyaWFudCkgPT4gcHJlc2VkZW5jZSB8ICgoXzMgPSB0aGVtZTIoXCJzY3JlZW5zXCIsIHRhaWwodmFyaWFudCksIFwiXCIpKSA/IDEgPDwgMjcgfCByZXNwb25zaXZlUHJlY2VkZW5jZShidWlsZE1lZGlhUXVlcnkoXzMpKSA6IHZhcmlhbnQgPT09IFwiOmRhcmtcIiA/IDEgPDwgMzAgOiAoXzMgPSB2YXJpYW50c1t2YXJpYW50XSB8fCB2YXJpYW50KVswXSA9PT0gXCJAXCIgPyBhdFJ1bGVQcmVzZWRlbmNlKF8zKSA6IHBzZXVkb1ByZWNlZGVuY2UodmFyaWFudCkpO1xudmFyIGRlY2xhcmF0aW9uUHJvcGVydHlQcmVjZWRlbmNlID0gKHByb3BlcnR5MikgPT4gcHJvcGVydHkyWzBdID09PSBcIi1cIiA/IDAgOiBzZXBlcmF0b3JQcmVjZWRlbmNlKHByb3BlcnR5MikgKyAoKF8zID0gL14oPzooYm9yZGVyLSg/IXd8Y3xzdHkpfFt0bGJyXS57Miw0fW0/JHxjLns3fSQpfChbZmxdLns1fWx8Zy57OH0kfHBsKSkvLmV4ZWMocHJvcGVydHkyKSkgPyArISFfM1sxXSB8fCAtISFfM1syXSA6IDApICsgMTtcblxuLy8gc3JjL3R3aW5kL3NlcmlhbGl6ZS50c1xudmFyIHN0cmluZ2lmeUJsb2NrID0gKGJvZHksIHNlbGVjdG9yKSA9PiBzZWxlY3RvciArIFwie1wiICsgYm9keSArIFwifVwiO1xudmFyIExheWVyO1xuKGZ1bmN0aW9uKExheWVyMikge1xuICBMYXllcjJbTGF5ZXIyW1wiYmFzZVwiXSA9IDBdID0gXCJiYXNlXCI7XG4gIExheWVyMltMYXllcjJbXCJjb21wb25lbnRzXCJdID0gMV0gPSBcImNvbXBvbmVudHNcIjtcbiAgTGF5ZXIyW0xheWVyMltcInV0aWxpdGllc1wiXSA9IDJdID0gXCJ1dGlsaXRpZXNcIjtcbiAgTGF5ZXIyW0xheWVyMltcImNzc1wiXSA9IDNdID0gXCJjc3NcIjtcbn0pKExheWVyIHx8IChMYXllciA9IHt9KSk7XG52YXIgc2VyaWFsaXplID0gKHByZWZpeCwgdmFyaWFudHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qge3RoZW1lOiB0aGVtZTIsIHRhZ30gPSBjb250ZXh0O1xuICBjb25zdCB0YWdWYXIgPSAoXzQsIHByb3BlcnR5MikgPT4gXCItLVwiICsgdGFnKHByb3BlcnR5Mik7XG4gIGNvbnN0IHRhZ1ZhcnMgPSAodmFsdWUpID0+IGAke3ZhbHVlfWAucmVwbGFjZSgvLS0odHctW1xcdy1dKylcXGIvZywgdGFnVmFyKTtcbiAgY29uc3Qgc3RyaW5naWZ5RGVjbGFyYXRpb24gPSAocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KSA9PiB7XG4gICAgcHJvcGVydHkyID0gdGFnVmFycyhwcm9wZXJ0eTIpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IGpvaW4odmFsdWUuZmlsdGVyKEJvb2xlYW4pLm1hcCgodmFsdWUyKSA9PiBwcmVmaXgocHJvcGVydHkyLCB0YWdWYXJzKHZhbHVlMiksIGltcG9ydGFudCkpLCBcIjtcIikgOiBwcmVmaXgocHJvcGVydHkyLCB0YWdWYXJzKHZhbHVlKSwgaW1wb3J0YW50KTtcbiAgfTtcbiAgbGV0IHJ1bGVzMjtcbiAgY29uc3Qgc3RyaW5naWZ5MyA9IChhdFJ1bGVzLCBzZWxlY3RvciwgcHJlc2VkZW5jZSwgY3NzLCBpbXBvcnRhbnQpID0+IHtcbiAgICBsZXQgZGVjbGFyYXRpb25zID0gXCJcIjtcbiAgICBsZXQgbWF4UHJvcGVydHlQcmVzZWRlbmNlID0gMDtcbiAgICBsZXQgbnVtYmVyT2ZEZWNsYXJhdGlvbnMgPSAwO1xuICAgIGlmIChcIkBhcHBseVwiIGluIGNzcykge1xuICAgICAgY3NzID0gbWVyZ2UoZXZhbFRodW5rKGFwcGx5KGNzc1tcIkBhcHBseVwiXSksIGNvbnRleHQpLCB7Li4uY3NzLCBcIkBhcHBseVwiOiB2b2lkIDB9LCBjb250ZXh0KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoY3NzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZhbFRodW5rKGNzc1trZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChpbmNsdWRlcyhcInJnXCIsICh0eXBlb2YgdmFsdWUpWzVdKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIgJiYga2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eTIgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgICBudW1iZXJPZkRlY2xhcmF0aW9ucyArPSAxO1xuICAgICAgICAgIG1heFByb3BlcnR5UHJlc2VkZW5jZSA9IE1hdGgubWF4KG1heFByb3BlcnR5UHJlc2VkZW5jZSwgZGVjbGFyYXRpb25Qcm9wZXJ0eVByZWNlZGVuY2UocHJvcGVydHkyKSk7XG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gKGRlY2xhcmF0aW9ucyAmJiBkZWNsYXJhdGlvbnMgKyBcIjtcIikgKyBzdHJpbmdpZnlEZWNsYXJhdGlvbihwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmIChrZXlbMF0gPT09IFwiQFwiKSB7XG4gICAgICAgICAgaWYgKGtleVsxXSA9PT0gXCJmXCIpIHtcbiAgICAgICAgICAgIHN0cmluZ2lmeTMoW10sIGtleSwgMCwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXlbMV0gPT09IFwia1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2l6ZSA9IHJ1bGVzMi5sZW5ndGg7XG4gICAgICAgICAgICBzdHJpbmdpZnkzKFtdLCBcIlwiLCAwLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgICAgIGNvbnN0IHdheXBvaW50cyA9IHJ1bGVzMi5zcGxpY2UoY3VycmVudFNpemUsIHJ1bGVzMi5sZW5ndGggLSBjdXJyZW50U2l6ZSk7XG4gICAgICAgICAgICBydWxlczIucHVzaCh7XG4gICAgICAgICAgICAgIHI6IHN0cmluZ2lmeUJsb2NrKGpvaW4od2F5cG9pbnRzLm1hcCgocCkgPT4gcC5yKSwgXCJcIiksIGtleSksXG4gICAgICAgICAgICAgIHA6IHdheXBvaW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5wLCAwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoMSwgOCkgPT0gXCJzY3JlZW4gXCIpIHtcbiAgICAgICAgICAgICAga2V5ID0gYnVpbGRNZWRpYVF1ZXJ5KGNvbnRleHQudGhlbWUoXCJzY3JlZW5zXCIsIHRhaWwoa2V5LCA4KS50cmltKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZ2lmeTMoWy4uLmF0UnVsZXMsIGtleV0sIHNlbGVjdG9yLCBwcmVzZWRlbmNlIHwgcmVzcG9uc2l2ZVByZWNlZGVuY2Uoa2V5KSB8IGF0UnVsZVByZXNlZGVuY2Uoa2V5KSwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCI6Z2xvYmFsXCIpIHtcbiAgICAgICAgICBzdHJpbmdpZnkzKFtdLCBcIlwiLCAwLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmdpZnkzKGF0UnVsZXMsIHNlbGVjdG9yID8gc2VsZWN0b3IucmVwbGFjZSgvKFteLF0pKy9nLCAoc2VsZWN0b3JQYXJ0KSA9PiBrZXkucmVwbGFjZSgvKFteLF0pKy9nLCAoa2V5UGFydCkgPT4gaW5jbHVkZXMoa2V5UGFydCwgXCImXCIpID8ga2V5UGFydC5yZXBsYWNlKC8mL2csIHNlbGVjdG9yUGFydCkgOiAoc2VsZWN0b3JQYXJ0ICYmIHNlbGVjdG9yUGFydCArIFwiIFwiKSArIGtleVBhcnQpKSA6IGtleSwgcHJlc2VkZW5jZSwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobnVtYmVyT2ZEZWNsYXJhdGlvbnMpIHtcbiAgICAgIHJ1bGVzMi5wdXNoKHtcbiAgICAgICAgcjogYXRSdWxlcy5yZWR1Y2VSaWdodChzdHJpbmdpZnlCbG9jaywgc3RyaW5naWZ5QmxvY2soZGVjbGFyYXRpb25zLCBzZWxlY3RvcikpLFxuICAgICAgICBwOiBwcmVzZWRlbmNlICogKDEgPDwgOCkgKyAoKE1hdGgubWF4KDAsIDE1IC0gbnVtYmVyT2ZEZWNsYXJhdGlvbnMpICYgMTUpIDw8IDQgfCAobWF4UHJvcGVydHlQcmVzZWRlbmNlIHx8IDE1KSAmIDE1KVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB2YXJpYW50UHJlc2VkZW5jZSA9IG1ha2VWYXJpYW50UHJlc2VkZW5jZUNhbGN1bGF0b3IodGhlbWUyLCB2YXJpYW50cyk7XG4gIHJldHVybiAoY3NzLCBjbGFzc05hbWUsIHJ1bGUsIGxheWVyID0gMCkgPT4ge1xuICAgIGxheWVyIDw8PSAyODtcbiAgICBydWxlczIgPSBbXTtcbiAgICBzdHJpbmdpZnkzKFtdLCBjbGFzc05hbWUgPyBcIi5cIiArIGVzY2FwZShjbGFzc05hbWUpIDogXCJcIiwgcnVsZSA/IHJ1bGUudi5yZWR1Y2VSaWdodCh2YXJpYW50UHJlc2VkZW5jZSwgbGF5ZXIpIDogbGF5ZXIsIGNzcywgcnVsZSAmJiBydWxlLmkpO1xuICAgIHJldHVybiBydWxlczI7XG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvaW5qZWN0LnRzXG52YXIgaW5qZWN0ID0gKHNoZWV0LCBtb2RlMiwgaW5pdCwgY29udGV4dCkgPT4ge1xuICBsZXQgc29ydGVkUHJlY2VkZW5jZXM7XG4gIGluaXQoKHZhbHVlID0gW10pID0+IHNvcnRlZFByZWNlZGVuY2VzID0gdmFsdWUpO1xuICBsZXQgaW5zZXJ0ZWRSdWxlcztcbiAgaW5pdCgodmFsdWUgPSBuZXcgU2V0KCkpID0+IGluc2VydGVkUnVsZXMgPSB2YWx1ZSk7XG4gIHJldHVybiAoe3I6IGNzcywgcDogcHJlc2VkZW5jZX0pID0+IHtcbiAgICBpZiAoIWluc2VydGVkUnVsZXMuaGFzKGNzcykpIHtcbiAgICAgIGluc2VydGVkUnVsZXMuYWRkKGNzcyk7XG4gICAgICBjb25zdCBpbmRleCA9IHNvcnRlZEluc2VydGlvbkluZGV4KHNvcnRlZFByZWNlZGVuY2VzLCBwcmVzZWRlbmNlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydChjc3MsIGluZGV4KTtcbiAgICAgICAgc29ydGVkUHJlY2VkZW5jZXMuc3BsaWNlKGluZGV4LCAwLCBwcmVzZWRlbmNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghLzotW213b10vLnRlc3QoY3NzKSkge1xuICAgICAgICAgIG1vZGUyLnJlcG9ydCh7aWQ6IFwiSU5KRUNUX0NTU19FUlJPUlwiLCBjc3MsIGVycm9yfSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvY29uZmlndXJlLnRzXG52YXIgc2FuaXRpemUgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQsIGVuYWJsZWQgPSBkZWZhdWx0VmFsdWUpID0+IHZhbHVlID09PSBmYWxzZSA/IGRpc2FibGVkIDogdmFsdWUgPT09IHRydWUgPyBlbmFibGVkIDogdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xudmFyIGxvYWRNb2RlID0gKG1vZGUyKSA9PiAodHlwZW9mIG1vZGUyID09IFwic3RyaW5nXCIgPyB7dDogc3RyaWN0LCBhOiB3YXJuLCBpOiBzaWxlbnR9W21vZGUyWzFdXSA6IG1vZGUyKSB8fCB3YXJuO1xudmFyIHN0cmluZ2lmeVZhcmlhbnQgPSAoc2VsZWN0b3IsIHZhcmlhbnQpID0+IHNlbGVjdG9yICsgKHZhcmlhbnRbMV0gPT09IFwiOlwiID8gdGFpbCh2YXJpYW50LCAyKSArIFwiOlwiIDogdGFpbCh2YXJpYW50KSkgKyBcIjpcIjtcbnZhciBzdHJpbmdpZnkyID0gKHJ1bGUsIGRpcmVjdGl2ZTIgPSBydWxlLmQpID0+IHR5cGVvZiBkaXJlY3RpdmUyID09IFwiZnVuY3Rpb25cIiA/IFwiXCIgOiBydWxlLnYucmVkdWNlKHN0cmluZ2lmeVZhcmlhbnQsIFwiXCIpICsgKHJ1bGUubiA/IFwiLVwiIDogXCJcIikgKyBkaXJlY3RpdmUyICsgKHJ1bGUuaSA/IFwiIVwiIDogXCJcIik7XG52YXIgQ09NUE9ORU5UX1BST1BTID0ge186IHt2YWx1ZTogXCJcIiwgd3JpdGFibGU6IHRydWV9fTtcbnZhciBjb25maWd1cmUgPSAoY29uZmlnID0ge30pID0+IHtcbiAgY29uc3QgdGhlbWUyID0gbWFrZVRoZW1lUmVzb2x2ZXIoY29uZmlnLnRoZW1lKTtcbiAgY29uc3QgbW9kZTIgPSBsb2FkTW9kZShjb25maWcubW9kZSk7XG4gIGNvbnN0IGhhc2ggPSBzYW5pdGl6ZShjb25maWcuaGFzaCwgZmFsc2UsIGZhbHNlLCBjeXJiMzIpO1xuICBsZXQgYWN0aXZlUnVsZSA9IHt2OiBbXX07XG4gIGxldCB0cmFuc2xhdGVEZXB0aCA9IDA7XG4gIGNvbnN0IGxhc3RUcmFuc2xhdGlvbnMgPSBbXTtcbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICB0dzogKC4uLnRva2VucykgPT4gcHJvY2Vzcyh0b2tlbnMpLFxuICAgIHRoZW1lOiAoc2VjdGlvbiwga2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICAgIGlmIChrZXkgIT0gbnVsbCAmJiAha2V5Lmxlbmd0aCkge1xuICAgICAgICBrZXkgPSBcIkRFRkFVTFRcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gdGhlbWUyKHNlY3Rpb24sIGtleSwgZGVmYXVsdFZhbHVlKSB8fCBtb2RlMi51bmtub3duKHNlY3Rpb24sIGtleSA9PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleSA6IGtleS5zcGxpdChcIi5cIiksIGRlZmF1bHRWYWx1ZSAhPSBudWxsLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBhY3RpdmVSdWxlLm4gJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyBgY2FsYygke3ZhbHVlfSAqIC0xKWAgOiB2YWx1ZTtcbiAgICB9LFxuICAgIHRhZzogKHZhbHVlKSA9PiBoYXNoID8gaGFzaCh2YWx1ZSkgOiB2YWx1ZSxcbiAgICBjc3M6IChydWxlczIpID0+IHtcbiAgICAgIHRyYW5zbGF0ZURlcHRoKys7XG4gICAgICBjb25zdCBsYXN0VHJhbnNsYXRpb25zSW5kZXggPSBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aDtcbiAgICAgIHRyeSB7XG4gICAgICAgIDtcbiAgICAgICAgKHR5cGVvZiBydWxlczIgPT0gXCJzdHJpbmdcIiA/IHBhcnNlKFtydWxlczJdKSA6IHJ1bGVzMikuZm9yRWFjaChjb252ZXJ0KTtcbiAgICAgICAgY29uc3QgY3NzID0gT2JqZWN0LmNyZWF0ZShudWxsLCBDT01QT05FTlRfUFJPUFMpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RUcmFuc2xhdGlvbnNJbmRleDsgaW5kZXggPCBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbGFzdFRyYW5zbGF0aW9uc1tpbmRleF07XG4gICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0cmFuc2xhdGlvbikge1xuICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgbWVyZ2UoY3NzLCB0cmFuc2xhdGlvbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjc3MuXyArPSAoY3NzLl8gJiYgXCIgXCIpICsgdHJhbnNsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aCA9IGxhc3RUcmFuc2xhdGlvbnNJbmRleDtcbiAgICAgICAgdHJhbnNsYXRlRGVwdGgtLTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHRyYW5zbGF0ZTIgPSB0cmFuc2xhdGUoey4uLmNvcmVQbHVnaW5zLCAuLi5jb25maWcucGx1Z2luc30sIGNvbnRleHQpO1xuICBjb25zdCBkb1RyYW5zbGF0ZSA9IChydWxlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50UnVsZSA9IGFjdGl2ZVJ1bGU7XG4gICAgYWN0aXZlUnVsZSA9IHJ1bGU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBldmFsVGh1bmsodHJhbnNsYXRlMihydWxlKSwgY29udGV4dCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGFjdGl2ZVJ1bGUgPSBwYXJlbnRSdWxlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdmFyaWFudHMgPSB7Li4uY29yZVZhcmlhbnRzLCAuLi5jb25maWcudmFyaWFudHN9O1xuICBjb25zdCBkZWNvcmF0ZTIgPSBkZWNvcmF0ZShjb25maWcuZGFya01vZGUgfHwgXCJtZWRpYVwiLCB2YXJpYW50cywgY29udGV4dCk7XG4gIGNvbnN0IHNlcmlhbGl6ZTIgPSBzZXJpYWxpemUoc2FuaXRpemUoY29uZmlnLnByZWZpeCwgYXV0b3ByZWZpeCwgbm9wcmVmaXgpLCB2YXJpYW50cywgY29udGV4dCk7XG4gIGNvbnN0IHNoZWV0ID0gY29uZmlnLnNoZWV0IHx8ICh0eXBlb2Ygd2luZG93ID09IFwidW5kZWZpbmVkXCIgPyB2b2lkU2hlZXQoKSA6IGNzc29tU2hlZXQoY29uZmlnKSk7XG4gIGNvbnN0IHtpbml0ID0gKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpfSA9IHNoZWV0O1xuICBjb25zdCBpbmplY3QyID0gaW5qZWN0KHNoZWV0LCBtb2RlMiwgaW5pdCwgY29udGV4dCk7XG4gIGxldCBpZFRvQ2xhc3NOYW1lO1xuICBpbml0KCh2YWx1ZSA9IG5ldyBNYXAoKSkgPT4gaWRUb0NsYXNzTmFtZSA9IHZhbHVlKTtcbiAgY29uc3QgaW5saW5lRGlyZWN0aXZlTmFtZSA9IG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IGV2YWx1YXRlRnVuY3Rpb25zID0gKGtleSwgdmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZShjb250ZXh0KSwgZXZhbHVhdGVGdW5jdGlvbnMpIDogdmFsdWU7XG4gIGNvbnN0IGNvbnZlcnQgPSAocnVsZSkgPT4ge1xuICAgIGlmICghdHJhbnNsYXRlRGVwdGggJiYgYWN0aXZlUnVsZS52Lmxlbmd0aCkge1xuICAgICAgcnVsZSA9IHsuLi5ydWxlLCB2OiBbLi4uYWN0aXZlUnVsZS52LCAuLi5ydWxlLnZdLCAkOiBcIlwifTtcbiAgICB9XG4gICAgaWYgKCFydWxlLiQpIHtcbiAgICAgIHJ1bGUuJCA9IHN0cmluZ2lmeTIocnVsZSwgaW5saW5lRGlyZWN0aXZlTmFtZS5nZXQocnVsZS5kKSk7XG4gICAgfVxuICAgIGxldCBjbGFzc05hbWUgPSB0cmFuc2xhdGVEZXB0aCA/IG51bGwgOiBpZFRvQ2xhc3NOYW1lLmdldChydWxlLiQpO1xuICAgIGlmIChjbGFzc05hbWUgPT0gbnVsbCkge1xuICAgICAgbGV0IHRyYW5zbGF0aW9uID0gZG9UcmFuc2xhdGUocnVsZSk7XG4gICAgICBpZiAoIXJ1bGUuJCkge1xuICAgICAgICBydWxlLiQgPSBjeXJiMzIoSlNPTi5zdHJpbmdpZnkodHJhbnNsYXRpb24sIGV2YWx1YXRlRnVuY3Rpb25zKSk7XG4gICAgICAgIGlubGluZURpcmVjdGl2ZU5hbWUuc2V0KHJ1bGUuZCwgcnVsZS4kKTtcbiAgICAgICAgcnVsZS4kID0gc3RyaW5naWZ5MihydWxlLCBydWxlLiQpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0aW9uICYmIHR5cGVvZiB0cmFuc2xhdGlvbiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRyYW5zbGF0aW9uID0gZGVjb3JhdGUyKHRyYW5zbGF0aW9uLCBydWxlKTtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZURlcHRoKSB7XG4gICAgICAgICAgbGFzdFRyYW5zbGF0aW9ucy5wdXNoKHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsYXllciA9IHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiID8gdHlwZW9mIHRyYW5zbGF0aW9uLl8gPT0gXCJzdHJpbmdcIiA/IDEgOiAzIDogMjtcbiAgICAgICAgICBjbGFzc05hbWUgPSBoYXNoIHx8IHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiID8gKGhhc2ggfHwgY3lyYjMyKShsYXllciArIHJ1bGUuJCkgOiBydWxlLiQ7XG4gICAgICAgICAgc2VyaWFsaXplMih0cmFuc2xhdGlvbiwgY2xhc3NOYW1lLCBydWxlLCBsYXllcikuZm9yRWFjaChpbmplY3QyKTtcbiAgICAgICAgICBpZiAodHJhbnNsYXRpb24uXykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgdHJhbnNsYXRpb24uXztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHRyYW5zbGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHJ1bGUuJDtcbiAgICAgICAgICBtb2RlMi5yZXBvcnQoe2lkOiBcIlVOS05PV05fRElSRUNUSVZFXCIsIHJ1bGU6IGNsYXNzTmFtZX0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2xhdGVEZXB0aCAmJiB0eXBlb2YgcnVsZS5kICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsYXN0VHJhbnNsYXRpb25zLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVEZXB0aCkge1xuICAgICAgICBpZFRvQ2xhc3NOYW1lLnNldChydWxlLiQsIGNsYXNzTmFtZSk7XG4gICAgICAgIGVuc3VyZU1heFNpemUoaWRUb0NsYXNzTmFtZSwgM2U0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfTtcbiAgY29uc3QgcHJvY2VzcyA9ICh0b2tlbnMpID0+IHBhcnNlKHRva2VucykubWFwKGNvbnZlcnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgY29uc3QgcHJlZmxpZ2h0ID0gc2FuaXRpemUoY29uZmlnLnByZWZsaWdodCwgaWRlbnRpdHksIGZhbHNlKTtcbiAgaWYgKHByZWZsaWdodCkge1xuICAgIGNvbnN0IGNzcyA9IGNyZWF0ZVByZWZsaWdodCh0aGVtZTIpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHNlcmlhbGl6ZTIodHlwZW9mIHByZWZsaWdodCA9PSBcImZ1bmN0aW9uXCIgPyBldmFsVGh1bmsocHJlZmxpZ2h0KGNzcywgY29udGV4dCksIGNvbnRleHQpIHx8IGNzcyA6IHsuLi5jc3MsIC4uLnByZWZsaWdodH0pO1xuICAgIGluaXQoKGluamVjdGVkID0gKHN0eWxlcy5mb3JFYWNoKGluamVjdDIpLCB0cnVlKSkgPT4gaW5qZWN0ZWQpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5pdDogKCkgPT4gbW9kZTIucmVwb3J0KHtpZDogXCJMQVRFX1NFVFVQX0NBTExcIn0sIGNvbnRleHQpLFxuICAgIHByb2Nlc3NcbiAgfTtcbn07XG5cbi8vIHNyYy90d2luZC9pbnN0YW5jZS50c1xudmFyIGNyZWF0ZSA9IChjb25maWcpID0+IHtcbiAgbGV0IHByb2Nlc3MgPSAodG9rZW5zKSA9PiB7XG4gICAgaW5pdCgpO1xuICAgIHJldHVybiBwcm9jZXNzKHRva2Vucyk7XG4gIH07XG4gIGxldCBpbml0ID0gKGNvbmZpZzIpID0+IHtcbiAgICA7XG4gICAgKHtwcm9jZXNzLCBpbml0fSA9IGNvbmZpZ3VyZShjb25maWcyKSk7XG4gIH07XG4gIGlmIChjb25maWcpXG4gICAgaW5pdChjb25maWcpO1xuICBsZXQgY29udGV4dDtcbiAgY29uc3QgZnJvbUNvbnRleHQgPSAoa2V5KSA9PiAoKSA9PiB7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBwcm9jZXNzKFtcbiAgICAgICAgKF80KSA9PiB7XG4gICAgICAgICAgY29udGV4dCA9IF80O1xuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRba2V5XTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0dzogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKC4uLnRva2VucykgPT4gcHJvY2Vzcyh0b2tlbnMpLCB7XG4gICAgICB0aGVtZToge1xuICAgICAgICBnZXQ6IGZyb21Db250ZXh0KFwidGhlbWVcIilcbiAgICAgIH1cbiAgICB9KSxcbiAgICBzZXR1cDogKGNvbmZpZzIpID0+IGluaXQoY29uZmlnMilcbiAgfTtcbn07XG5cbi8vIHNyYy90d2luZC9kZWZhdWx0LnRzXG52YXIge3R3LCBzZXR1cH0gPSBjcmVhdGUoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3aW5kLmNqcy5tYXBcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEb2N1bWVudCwgeyBEb2N1bWVudENvbnRleHQsIEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcbmltcG9ydCB7IHNldHVwIH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IHsgYXN5bmNWaXJ0dWFsU2hlZXQsIGdldFN0eWxlVGFnUHJvcGVydGllcyB9IGZyb20gJ3R3aW5kL3NlcnZlcic7XG5pbXBvcnQgdHdpbmRDb25maWcgZnJvbSAnLi4vdHdpbmQuY29uZmlnJztcblxuY29uc3Qgc2hlZXQgPSBhc3luY1ZpcnR1YWxTaGVldCgpO1xuXG5zZXR1cCh7IC4uLnR3aW5kQ29uZmlnLCBzaGVldCB9KTtcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCkge1xuICAgIHNoZWV0LnJlc2V0KCk7XG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgY29uc3QgeyBpZCwgdGV4dENvbnRlbnQgfSA9IGdldFN0eWxlVGFnUHJvcGVydGllcyhzaGVldCk7XG4gICAgY29uc3Qgc3R5bGVQcm9wcyA9IHtcbiAgICAgIGlkLFxuICAgICAga2V5OiBpZCxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogdGV4dENvbnRlbnQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW5pdGlhbFByb3BzLFxuICAgICAgc3R5bGVzOiBbXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAuLi5pbml0aWFsUHJvcHMuc3R5bGVzLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGBzdHlsZWAsIHN0eWxlUHJvcHMpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3NjcmlwdHMuc2ltcGxlYW5hbHl0aWNzY2RuLmNvbS9sYXRlc3QuanNcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGhlbWU6IHtcbiAgICBleHRlbmQ6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHtcbiAgICAgICAgc2FuczogYEludGVyLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sXG4gICAgICAgICAgICBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLFxuICAgICAgICAgICAgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY19ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1scGFyc2VyMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZS12ZW5kb3JpemVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=