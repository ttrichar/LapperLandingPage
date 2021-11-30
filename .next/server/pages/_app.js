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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fontsource/inter/index.css":
/*!**************************************************!*\
  !*** ./node_modules/@fontsource/inter/index.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/inter */ "./node_modules/@fontsource/inter/index.css");
/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _twind_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../twind.config */ "./src/twind.config.js");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






if (false) {}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R3aW5kL3R3aW5kLmNqcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3aW5kLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZS12ZW5kb3JpemVyXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImV4dGVuZCIsImZvbnRGYW1pbHkiLCJzYW5zIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlHQUFpRztBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcsY0FBYyxpQ0FBaUM7QUFDcEo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHlFQUF5RSxRQUFRLFNBQVMsaUJBQWlCO0FBQzNHLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixJQUFJO0FBQ2pDOztBQUVBO0FBQ0E7QUFD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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ZTtBQUNiQyxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBQ05DLGdCQUFVLEVBQUU7QUFDVkMsWUFBSSxFQUFHO0FBQ2Y7QUFDQTtBQUhrQjtBQUROO0FBREg7QUFETSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19tYXJrQXNNb2R1bGUgPSAodGFyZ2V0KSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIl9fZXNNb2R1bGVcIiwge3ZhbHVlOiB0cnVlfSk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwge2dldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlfSk7XG59O1xudmFyIF9fZXhwb3J0U3RhciA9ICh0YXJnZXQsIG1vZHVsZTIsIGRlc2MpID0+IHtcbiAgaWYgKG1vZHVsZTIgJiYgdHlwZW9mIG1vZHVsZTIgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG1vZHVsZTIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhtb2R1bGUyKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwge2dldDogKCkgPT4gbW9kdWxlMltrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKG1vZHVsZTIsIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZX0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fdG9Nb2R1bGUgPSAobW9kdWxlMikgPT4ge1xuICBpZiAobW9kdWxlMiAmJiBtb2R1bGUyLl9fZXNNb2R1bGUpXG4gICAgcmV0dXJuIG1vZHVsZTI7XG4gIHJldHVybiBfX2V4cG9ydFN0YXIoX19tYXJrQXNNb2R1bGUoX19kZWZQcm9wKG1vZHVsZTIgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUyKSkgOiB7fSwgXCJkZWZhdWx0XCIsIHt2YWx1ZTogbW9kdWxlMiwgZW51bWVyYWJsZTogdHJ1ZX0pKSwgbW9kdWxlMik7XG59O1xuXG4vLyBzcmMvaW5kZXgudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBhcHBseTogKCkgPT4gYXBwbHksXG4gIGF1dG9wcmVmaXg6ICgpID0+IGF1dG9wcmVmaXgsXG4gIGNyZWF0ZTogKCkgPT4gY3JlYXRlLFxuICBjc3NvbVNoZWV0OiAoKSA9PiBjc3NvbVNoZWV0LFxuICBkaXJlY3RpdmU6ICgpID0+IGRpcmVjdGl2ZSxcbiAgaGFzaDogKCkgPT4gY3lyYjMyLFxuICBtb2RlOiAoKSA9PiBtb2RlLFxuICBub3ByZWZpeDogKCkgPT4gbm9wcmVmaXgsXG4gIHNldHVwOiAoKSA9PiBzZXR1cCxcbiAgc2lsZW50OiAoKSA9PiBzaWxlbnQsXG4gIHN0cmljdDogKCkgPT4gc3RyaWN0LFxuICB0aGVtZTogKCkgPT4gdGhlbWUsXG4gIHR3OiAoKSA9PiB0dyxcbiAgdm9pZFNoZWV0OiAoKSA9PiB2b2lkU2hlZXQsXG4gIHdhcm46ICgpID0+IHdhcm5cbn0pO1xuXG4vLyBzcmMvaW50ZXJuYWwvdXRpbC50c1xudmFyIGluY2x1ZGVzID0gKHZhbHVlLCBzZWFyY2gpID0+ICEhfnZhbHVlLmluZGV4T2Yoc2VhcmNoKTtcbnZhciBqb2luID0gKHBhcnRzLCBzZXBhcmF0b3IgPSBcIi1cIikgPT4gcGFydHMuam9pbihzZXBhcmF0b3IpO1xudmFyIGpvaW5UcnV0aHkgPSAocGFydHMsIHNlcGFyYXRvcikgPT4gam9pbihwYXJ0cy5maWx0ZXIoQm9vbGVhbiksIHNlcGFyYXRvcik7XG52YXIgdGFpbCA9IChhcnJheSwgc3RhcnRJbmRleCA9IDEpID0+IGFycmF5LnNsaWNlKHN0YXJ0SW5kZXgpO1xudmFyIGlkZW50aXR5ID0gKHZhbHVlKSA9PiB2YWx1ZTtcbnZhciBub29wID0gKCkgPT4ge1xufTtcbnZhciBjYXBpdGFsaXplID0gKHZhbHVlKSA9PiB2YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgdGFpbCh2YWx1ZSk7XG52YXIgaHlwaGVuYXRlID0gKHZhbHVlKSA9PiB2YWx1ZS5yZXBsYWNlKC9bQS1aXS9nLCBcIi0kJlwiKS50b0xvd2VyQ2FzZSgpO1xudmFyIGV2YWxUaHVuayA9ICh2YWx1ZSwgY29udGV4dCkgPT4ge1xuICB3aGlsZSAodHlwZW9mIHZhbHVlID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhbHVlID0gdmFsdWUoY29udGV4dCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBlbnN1cmVNYXhTaXplID0gKG1hcCwgbWF4KSA9PiB7XG4gIGlmIChtYXAuc2l6ZSA+IG1heCkge1xuICAgIG1hcC5kZWxldGUobWFwLmtleXMoKS5uZXh0KCkudmFsdWUpO1xuICB9XG59O1xudmFyIG1lcmdlID0gKHRhcmdldCwgc291cmNlLCBjb250ZXh0KSA9PiBzb3VyY2UgPyBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZSgodGFyZ2V0Miwga2V5KSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZXZhbFRodW5rKHNvdXJjZVtrZXldLCBjb250ZXh0KTtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRhcmdldDJba2V5XSA9IG1lcmdlKHRhcmdldDJba2V5XSB8fCB7fSwgdmFsdWUsIGNvbnRleHQpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldDJbaHlwaGVuYXRlKGtleSldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDI7XG59LCB0YXJnZXQpIDogdGFyZ2V0O1xudmFyIGVzY2FwZSA9IHR5cGVvZiBDU1MgIT09IFwidW5kZWZpbmVkXCIgJiYgQ1NTLmVzY2FwZSB8fCAoKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBmaXJzdENvZGVVbml0ID0gY2xhc3NOYW1lLmNoYXJDb2RlQXQoMCk7XG4gIGxldCBmaXJzdENoYXIgPSBcIlwiO1xuICBpZiAoZmlyc3RDb2RlVW5pdCA+PSA0OCAmJiBmaXJzdENvZGVVbml0IDw9IDU3KSB7XG4gICAgZmlyc3RDaGFyID0gXCJcXFxcXCIgKyBmaXJzdENvZGVVbml0LnRvU3RyaW5nKDE2KSArIFwiIFwiO1xuICAgIGNsYXNzTmFtZSA9IHRhaWwoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZmlyc3RDaGFyICsgY2xhc3NOYW1lLnJlcGxhY2UoL1shLi86I10vZywgXCJcXFxcJCZcIik7XG59KTtcbnZhciBidWlsZE1lZGlhUXVlcnkgPSAoc2NyZWVuKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzY3JlZW4pKSB7XG4gICAgc2NyZWVuID0gW3NjcmVlbl07XG4gIH1cbiAgcmV0dXJuIFwiQG1lZGlhIFwiICsgam9pbihzY3JlZW4ubWFwKChzY3JlZW4yKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzY3JlZW4yID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHNjcmVlbjIgPSB7bWluOiBzY3JlZW4yfTtcbiAgICB9XG4gICAgcmV0dXJuIHNjcmVlbjIucmF3IHx8IGpvaW4oT2JqZWN0LmtleXMoc2NyZWVuMikubWFwKChmZWF0dXJlKSA9PiBgKCR7ZmVhdHVyZX0td2lkdGg6JHtzY3JlZW4yW2ZlYXR1cmVdfSlgKSwgXCIgYW5kIFwiKTtcbiAgfSksIFwiLFwiKTtcbn07XG52YXIgY3lyYjMyID0gKHZhbHVlKSA9PiB7XG4gIGxldCBoID0gOTtcbiAgZm9yIChsZXQgaW5kZXggPSB2YWx1ZS5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgIGggPSBNYXRoLmltdWwoaCBeIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpLCAxNTk3MzM0Njc3KTtcbiAgfVxuICByZXR1cm4gXCJ0dy1cIiArICgoaCBeIGggPj4+IDkpID4+PiAwKS50b1N0cmluZygzNik7XG59O1xudmFyIHNvcnRlZEluc2VydGlvbkluZGV4ID0gKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gIGxldCBoaWdoID0gYXJyYXkubGVuZ3RoO1xuICBpZiAoaGlnaCA9PT0gMClcbiAgICByZXR1cm4gMDtcbiAgZm9yIChsZXQgbG93ID0gMDsgbG93IDwgaGlnaDsgKSB7XG4gICAgY29uc3QgcGl2b3QgPSBoaWdoICsgbG93ID4+IDE7XG4gICAgaWYgKGFycmF5W3Bpdm90XSA8PSBlbGVtZW50KSB7XG4gICAgICBsb3cgPSBwaXZvdCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZ2ggPSBwaXZvdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGhpZ2g7XG59O1xuXG4vLyBzcmMvdHdpbmQvcGFyc2UudHNcbnZhciBncm91cGluZ3M7XG52YXIgcnVsZXM7XG52YXIgc3RhcnRHcm91cGluZyA9ICh2YWx1ZSA9IFwiXCIpID0+IHtcbiAgZ3JvdXBpbmdzLnB1c2godmFsdWUpO1xuICByZXR1cm4gXCJcIjtcbn07XG52YXIgZW5kR3JvdXBpbmcgPSAoaXNXaGl0ZXNwYWNlKSA9PiB7XG4gIGdyb3VwaW5ncy5sZW5ndGggPSBNYXRoLm1heChncm91cGluZ3MubGFzdEluZGV4T2YoXCJcIikgKyB+fmlzV2hpdGVzcGFjZSwgMCk7XG59O1xudmFyIG9ubHlQcmVmaXhlcyA9IChzKSA9PiBzICYmIHNbMF0gIT09IFwiOlwiO1xudmFyIG9ubHlWYXJpYW50cyA9IChzKSA9PiBzWzBdID09PSBcIjpcIjtcbnZhciBhZGRSdWxlID0gKGRpcmVjdGl2ZTIsIG5lZ2F0ZSwgaW1wb3J0YW50KSA9PiB7XG4gIHJ1bGVzLnB1c2goe1xuICAgIHY6IGdyb3VwaW5ncy5maWx0ZXIob25seVZhcmlhbnRzKSxcbiAgICBkOiBkaXJlY3RpdmUyLFxuICAgIG46IG5lZ2F0ZSxcbiAgICBpOiBpbXBvcnRhbnQsXG4gICAgJDogXCJcIlxuICB9KTtcbn07XG52YXIgc2F2ZVJ1bGUgPSAoYnVmZmVyKSA9PiB7XG4gIGNvbnN0IG5lZ2F0ZSA9IGJ1ZmZlclswXSA9PT0gXCItXCI7XG4gIGlmIChuZWdhdGUpIHtcbiAgICBidWZmZXIgPSB0YWlsKGJ1ZmZlcik7XG4gIH1cbiAgY29uc3QgaW1wb3J0YW50ID0gYnVmZmVyW2J1ZmZlci5sZW5ndGggLSAxXSA9PT0gXCIhXCI7XG4gIGlmIChpbXBvcnRhbnQpIHtcbiAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoMCwgLTEpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGpvaW4oZ3JvdXBpbmdzLmZpbHRlcihvbmx5UHJlZml4ZXMpKTtcbiAgYWRkUnVsZShidWZmZXIgPT09IFwiJlwiID8gcHJlZml4IDogKHByZWZpeCAmJiBwcmVmaXggKyBcIi1cIikgKyBidWZmZXIsIG5lZ2F0ZSwgaW1wb3J0YW50KTtcbiAgcmV0dXJuIFwiXCI7XG59O1xudmFyIHBhcnNlU3RyaW5nID0gKHRva2VuLCBpc1ZhcmlhbnQpID0+IHtcbiAgbGV0IGNoYXI7XG4gIGxldCBidWZmZXIgPSBcIlwiO1xuICBmb3IgKGxldCBwb3NpdGlvbjIgPSAwOyBwb3NpdGlvbjIgPCB0b2tlbi5sZW5ndGg7ICkge1xuICAgIHN3aXRjaCAoY2hhciA9IHRva2VuW3Bvc2l0aW9uMisrXSkge1xuICAgICAgY2FzZSBcIjpcIjpcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICYmIHN0YXJ0R3JvdXBpbmcoXCI6XCIgKyAodG9rZW5bcG9zaXRpb24yXSA9PT0gY2hhciA/IHRva2VuW3Bvc2l0aW9uMisrXSA6IFwiXCIpICsgYnVmZmVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiKFwiOlxuICAgICAgICBidWZmZXIgPSBidWZmZXIgJiYgc3RhcnRHcm91cGluZyhidWZmZXIpO1xuICAgICAgICBzdGFydEdyb3VwaW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIilcIjpcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICBjYXNlIFwiXHRcIjpcbiAgICAgIGNhc2UgXCJcXG5cIjpcbiAgICAgIGNhc2UgXCJcXHJcIjpcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICYmIHNhdmVSdWxlKGJ1ZmZlcik7XG4gICAgICAgIGVuZEdyb3VwaW5nKGNoYXIgIT09IFwiKVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBidWZmZXIgKz0gY2hhcjtcbiAgICB9XG4gIH1cbiAgaWYgKGJ1ZmZlcikge1xuICAgIGlmIChpc1ZhcmlhbnQpIHtcbiAgICAgIHN0YXJ0R3JvdXBpbmcoXCI6XCIgKyBidWZmZXIpO1xuICAgIH0gZWxzZSBpZiAoYnVmZmVyLnNsaWNlKC0xKSA9PT0gXCItXCIpIHtcbiAgICAgIHN0YXJ0R3JvdXBpbmcoYnVmZmVyLnNsaWNlKDAsIC0xKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdmVSdWxlKGJ1ZmZlcik7XG4gICAgfVxuICB9XG59O1xudmFyIHBhcnNlR3JvdXBlZFRva2VuID0gKHRva2VuKSA9PiB7XG4gIHN0YXJ0R3JvdXBpbmcoKTtcbiAgcGFyc2VUb2tlbih0b2tlbik7XG4gIGVuZEdyb3VwaW5nKCk7XG59O1xudmFyIHBhcnNlR3JvdXAgPSAoa2V5LCB0b2tlbikgPT4ge1xuICBpZiAodG9rZW4pIHtcbiAgICBzdGFydEdyb3VwaW5nKCk7XG4gICAgY29uc3QgaXNWYXJpYW50ID0gaW5jbHVkZXMoXCJ0YnVcIiwgKHR5cGVvZiB0b2tlbilbMV0pO1xuICAgIHBhcnNlU3RyaW5nKGtleSwgaXNWYXJpYW50KTtcbiAgICBpZiAoaXNWYXJpYW50KSB7XG4gICAgICBwYXJzZUdyb3VwZWRUb2tlbih0b2tlbik7XG4gICAgfVxuICAgIGVuZEdyb3VwaW5nKCk7XG4gIH1cbn07XG52YXIgcGFyc2VUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB0b2tlbikge1xuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgIHBhcnNlU3RyaW5nKHRva2VuKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgYWRkUnVsZSh0b2tlbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbikpIHtcbiAgICAgICAgdG9rZW4uZm9yRWFjaChwYXJzZUdyb3VwZWRUb2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRva2VuKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBwYXJzZUdyb3VwKGtleSwgdG9rZW5ba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG59O1xudmFyIHN0YXRpY3NDYWNoZXMgPSBuZXcgV2Vha01hcCgpO1xudmFyIGJ1aWxkU3RhdGljcyA9IChzdHJpbmdzKSA9PiB7XG4gIGxldCBzdGF0aWNzID0gc3RhdGljc0NhY2hlcy5nZXQoc3RyaW5ncyk7XG4gIGlmICghc3RhdGljcykge1xuICAgIGxldCBzbG93TW9kZUluZGV4ID0gTmFOO1xuICAgIGxldCBidWZmZXIgPSBcIlwiO1xuICAgIHN0YXRpY3MgPSBzdHJpbmdzLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc2xvd01vZGVJbmRleCAhPT0gc2xvd01vZGVJbmRleCAmJiBpbmNsdWRlcyhcIjotKFwiLCAoc3RyaW5nc1tpbmRleCArIDFdIHx8IFwiXCIpWzBdKSkge1xuICAgICAgICBzbG93TW9kZUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPj0gc2xvd01vZGVJbmRleCkge1xuICAgICAgICByZXR1cm4gKGludGVycG9sYXRpb24pID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHNsb3dNb2RlSW5kZXgpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1ZmZlciArPSB0b2tlbjtcbiAgICAgICAgICBpZiAodHlwZW9mIGludGVycG9sYXRpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgYnVmZmVyICs9IGludGVycG9sYXRpb247XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBwYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgYnVmZmVyID0gXCJcIjtcbiAgICAgICAgICAgIHBhcnNlVG9rZW4oaW50ZXJwb2xhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gc3RyaW5ncy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBwYXJzZVN0cmluZyhidWZmZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXRpY1J1bGVzID0gcnVsZXMgPSBbXTtcbiAgICAgIHBhcnNlU3RyaW5nKHRva2VuKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUdyb3VwaW5ncyA9IFsuLi5ncm91cGluZ3NdO1xuICAgICAgcnVsZXMgPSBbXTtcbiAgICAgIHJldHVybiAoaW50ZXJwb2xhdGlvbikgPT4ge1xuICAgICAgICBydWxlcy5wdXNoKC4uLnN0YXRpY1J1bGVzKTtcbiAgICAgICAgZ3JvdXBpbmdzID0gWy4uLmFjdGl2ZUdyb3VwaW5nc107XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgcGFyc2VUb2tlbihpbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzdGF0aWNzQ2FjaGVzLnNldChzdHJpbmdzLCBzdGF0aWNzKTtcbiAgfVxuICByZXR1cm4gc3RhdGljcztcbn07XG52YXIgcGFyc2UgPSAodG9rZW5zKSA9PiB7XG4gIGdyb3VwaW5ncyA9IFtdO1xuICBydWxlcyA9IFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnNbMF0pICYmIEFycmF5LmlzQXJyYXkodG9rZW5zWzBdLnJhdykpIHtcbiAgICBidWlsZFN0YXRpY3ModG9rZW5zWzBdKS5mb3JFYWNoKChhcHBseTIsIGluZGV4KSA9PiBhcHBseTIodG9rZW5zW2luZGV4ICsgMV0pKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZVRva2VuKHRva2Vucyk7XG4gIH1cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxuLy8gc3JjL3R3aW5kL2RpcmVjdGl2ZS50c1xudmFyIGlzRnVuY3Rpb25GcmVlO1xudmFyIGRldGVjdEZ1bmN0aW9uID0gKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBpc0Z1bmN0aW9uRnJlZSA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgc3RyaW5naWZ5ID0gKGRhdGEpID0+IHtcbiAgaXNGdW5jdGlvbkZyZWUgPSB0cnVlO1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShkYXRhLCBkZXRlY3RGdW5jdGlvbik7XG4gIHJldHVybiBpc0Z1bmN0aW9uRnJlZSAmJiBrZXk7XG59O1xudmFyIGNhY2hlQnlGYWN0b3J5ID0gbmV3IFdlYWtNYXAoKTtcbnZhciBkaXJlY3RpdmUgPSAoZmFjdG9yeSwgZGF0YSkgPT4ge1xuICBjb25zdCBrZXkgPSBzdHJpbmdpZnkoZGF0YSk7XG4gIGxldCBkaXJlY3RpdmUyO1xuICBpZiAoa2V5KSB7XG4gICAgdmFyIGNhY2hlID0gY2FjaGVCeUZhY3RvcnkuZ2V0KGZhY3RvcnkpO1xuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIGNhY2hlQnlGYWN0b3J5LnNldChmYWN0b3J5LCBjYWNoZSA9IG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIGRpcmVjdGl2ZTIgPSBjYWNoZS5nZXQoa2V5KTtcbiAgfVxuICBpZiAoIWRpcmVjdGl2ZTIpIHtcbiAgICBkaXJlY3RpdmUyID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KChwYXJhbXMsIGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnRleHQgPSBBcnJheS5pc0FycmF5KHBhcmFtcykgPyBjb250ZXh0IDogcGFyYW1zO1xuICAgICAgcmV0dXJuIGV2YWxUaHVuayhmYWN0b3J5KGRhdGEsIGNvbnRleHQpLCBjb250ZXh0KTtcbiAgICB9LCBcInRvSlNPTlwiLCB7XG4gICAgICB2YWx1ZTogKCkgPT4ga2V5IHx8IGRhdGFcbiAgICB9KTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIGNhY2hlLnNldChrZXksIGRpcmVjdGl2ZTIpO1xuICAgICAgZW5zdXJlTWF4U2l6ZShjYWNoZSwgMWU0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZTI7XG59O1xuXG4vLyBzcmMvdHdpbmQvYXBwbHkudHNcbnZhciBhcHBseUZhY3RvcnkgPSAodG9rZW5zLCB7Y3NzfSkgPT4gY3NzKHBhcnNlKHRva2VucykpO1xudmFyIGFwcGx5ID0gKC4uLnRva2VucykgPT4gZGlyZWN0aXZlKGFwcGx5RmFjdG9yeSwgdG9rZW5zKTtcblxuLy8gc3JjL3R3aW5kL2hlbHBlcnMudHNcbnZhciBwb3NpdGlvbnMgPSAocmVzb2x2ZSkgPT4gKHZhbHVlLCBwb3NpdGlvbjIsIHByZWZpeCwgc3VmZml4KSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwb3NpdGlvbjIgJiYgcmVzb2x2ZShwb3NpdGlvbjIpO1xuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHByb3BlcnRpZXMucmVkdWNlKChkZWNsYXJhdGlvbnMsIHByb3BlcnR5MikgPT4ge1xuICAgICAgICBkZWNsYXJhdGlvbnNbam9pblRydXRoeShbcHJlZml4LCBwcm9wZXJ0eTIsIHN1ZmZpeF0pXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfVxufTtcbnZhciBjb3JuZXJzID0gcG9zaXRpb25zKChrZXkpID0+ICh7XG4gIHQ6IFtcInRvcC1sZWZ0XCIsIFwidG9wLXJpZ2h0XCJdLFxuICByOiBbXCJ0b3AtcmlnaHRcIiwgXCJib3R0b20tcmlnaHRcIl0sXG4gIGI6IFtcImJvdHRvbS1sZWZ0XCIsIFwiYm90dG9tLXJpZ2h0XCJdLFxuICBsOiBbXCJib3R0b20tbGVmdFwiLCBcInRvcC1sZWZ0XCJdLFxuICB0bDogW1widG9wLWxlZnRcIl0sXG4gIHRyOiBbXCJ0b3AtcmlnaHRcIl0sXG4gIGJsOiBbXCJib3R0b20tbGVmdFwiXSxcbiAgYnI6IFtcImJvdHRvbS1yaWdodFwiXVxufSlba2V5XSk7XG52YXIgZXhwYW5kRWRnZXMgPSAoa2V5KSA9PiB7XG4gIGNvbnN0IHBhcnRzID0gKHt4OiBcImxyXCIsIHk6IFwidGJcIn1ba2V5XSB8fCBrZXkgfHwgXCJcIikuc3BsaXQoXCJcIikuc29ydCgpO1xuICBmb3IgKGxldCBpbmRleCA9IHBhcnRzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG4gICAgaWYgKCEocGFydHNbaW5kZXhdID0ge1xuICAgICAgdDogXCJ0b3BcIixcbiAgICAgIHI6IFwicmlnaHRcIixcbiAgICAgIGI6IFwiYm90dG9tXCIsXG4gICAgICBsOiBcImxlZnRcIlxuICAgIH1bcGFydHNbaW5kZXhdXSkpXG4gICAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcnRzLmxlbmd0aClcbiAgICByZXR1cm4gcGFydHM7XG59O1xudmFyIGVkZ2VzID0gcG9zaXRpb25zKGV4cGFuZEVkZ2VzKTtcblxuLy8gc3JjL3R3aW5kL3BsdWdpbnMudHNcbnZhciBfO1xudmFyIF9fO1xudmFyICQ7XG52YXIgcHJvcGVydHkgPSAocHJvcGVydHkyKSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW3Byb3BlcnR5Ml06IGlkICsgKChfID0gam9pbihwYXJhbXMpKSAmJiBcIi1cIiArIF8pXG59KTtcbnZhciBwcm9wZXJ0eVZhbHVlID0gKHByb3BlcnR5Miwgc2VwYXJhdG9yKSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW3Byb3BlcnR5MiB8fCBpZF06IGpvaW4ocGFyYW1zLCBzZXBhcmF0b3IpXG59KTtcbnZhciB0aGVtZVByb3BlcnR5ID0gKHNlY3Rpb24pID0+IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+ICh7XG4gIFtzZWN0aW9uIHx8IGlkXTogdGhlbWUyKHNlY3Rpb24gfHwgaWQsIHBhcmFtcylcbn0pO1xudmFyIGFsaWFzID0gKGhhbmRsZXIsIG5hbWUpID0+IChwYXJhbXMsIGNvbnRleHQpID0+IGhhbmRsZXIocGFyYW1zLCBjb250ZXh0LCBuYW1lKTtcbnZhciBkaXNwbGF5ID0gcHJvcGVydHkoXCJkaXNwbGF5XCIpO1xudmFyIHBvc2l0aW9uID0gcHJvcGVydHkoXCJwb3NpdGlvblwiKTtcbnZhciB0ZXh0VHJhbnNmb3JtID0gcHJvcGVydHkoXCJ0ZXh0VHJhbnNmb3JtXCIpO1xudmFyIHRleHREZWNvcmF0aW9uID0gcHJvcGVydHkoXCJ0ZXh0RGVjb3JhdGlvblwiKTtcbnZhciBmb250U3R5bGUgPSBwcm9wZXJ0eShcImZvbnRTdHlsZVwiKTtcbnZhciBmb250VmFyaWFudE51bWVyaWMgPSAoa2V5KSA9PiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKHtcbiAgW1wiLS10dy1cIiArIGtleV06IGlkLFxuICBmb250VmFyaWFudE51bWVyaWM6IFwidmFyKC0tdHctb3JkaW5hbCwvKiEqLyAvKiEqLykgdmFyKC0tdHctc2xhc2hlZC16ZXJvLC8qISovIC8qISovKSB2YXIoLS10dy1udW1lcmljLWZpZ3VyZSwvKiEqLyAvKiEqLykgdmFyKC0tdHctbnVtZXJpYy1zcGFjaW5nLC8qISovIC8qISovKSB2YXIoLS10dy1udW1lcmljLWZyYWN0aW9uLC8qISovIC8qISovKVwiXG59KTtcbnZhciBpbnNldCA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+ICh7W2lkXTogdGhlbWUyKFwiaW5zZXRcIiwgcGFyYW1zKX0pO1xudmFyIG9wYWNpdHlQcm9wZXJ0eSA9IChwYXJhbXMsIHRoZW1lMiwgaWQsIHNlY3Rpb24gPSBpZCkgPT4gKHtcbiAgW2AtLXR3LSR7aWR9LW9wYWNpdHlgXTogdGhlbWUyKHNlY3Rpb24gKyBcIk9wYWNpdHlcIiwgdGFpbChwYXJhbXMpKVxufSk7XG52YXIgcGFyc2VDb2xvckNvbXBvbmVudCA9IChjaGFycywgZmFjdG9yKSA9PiBNYXRoLnJvdW5kKHBhcnNlSW50KGNoYXJzLCAxNikgKiBmYWN0b3IpO1xudmFyIGFzUkdCQSA9IChjb2xvciwgb3BhY2l0eVByb3BlcnR5Miwgb3BhY2l0eURlZmF1bHQpID0+IHtcbiAgaWYgKGNvbG9yICYmIGNvbG9yWzBdID09PSBcIiNcIikge1xuICAgIHJldHVybiBgcmdiYSgke3BhcnNlQ29sb3JDb21wb25lbnQoY29sb3Iuc3Vic3RyKDEsIF8gPSAoY29sb3IubGVuZ3RoIC0gMSkgLyAzKSwgJCA9IFsxNywgMSwgMC4wNjIyNzJdW18gLSAxXSl9LCR7cGFyc2VDb2xvckNvbXBvbmVudChjb2xvci5zdWJzdHIoMSArIF8sIF8pLCAkKX0sJHtwYXJzZUNvbG9yQ29tcG9uZW50KGNvbG9yLnN1YnN0cigxICsgMiAqIF8sIF8pLCAkKX0sJHtvcGFjaXR5UHJvcGVydHkyID8gYHZhcigtLXR3LSR7b3BhY2l0eVByb3BlcnR5Mn0ke29wYWNpdHlEZWZhdWx0ID8gXCIsXCIgKyBvcGFjaXR5RGVmYXVsdCA6IFwiXCJ9KWAgOiBvcGFjaXR5RGVmYXVsdCB8fCAxfSlgO1xuICB9XG4gIHJldHVybiBjb2xvcjtcbn07XG52YXIgd2l0aE9wYWNpdHlGYWxsYmFjayA9IChwcm9wZXJ0eTIsIGtpbmQsIGNvbG9yKSA9PiBjb2xvciAmJiAoXyA9IGFzUkdCQShjb2xvciwga2luZCArIFwiLW9wYWNpdHlcIikpICYmIF8gIT09IGNvbG9yID8ge1xuICBbYC0tdHctJHtraW5kfS1vcGFjaXR5YF06IFwiMVwiLFxuICBbcHJvcGVydHkyXTogW2NvbG9yLCBfXVxufSA6IHtbcHJvcGVydHkyXTogY29sb3J9O1xudmFyIHRyYW5zcGFyZW50VG8gPSAoY29sb3IpID0+ICgkID0gYXNSR0JBKGNvbG9yLCBcIlwiLCBcIjBcIikpID09PSBfID8gXCJ0cmFuc3BhcmVudFwiIDogJDtcbnZhciByZXZlcnNhYmxlRWRnZSA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQsIHNlY3Rpb24sIHByZWZpeCwgc3VmZml4KSA9PiAoXyA9IHt4OiBbXCJyaWdodFwiLCBcImxlZnRcIl0sIHk6IFtcImJvdHRvbVwiLCBcInRvcFwiXX1bcGFyYW1zWzBdXSkgJiYgKCQgPSBgLS10dy0ke2lkfS0ke3BhcmFtc1swXX0tcmV2ZXJzZWApID8gcGFyYW1zWzFdID09PSBcInJldmVyc2VcIiA/IHtcbiAgWyRdOiBcIjFcIlxufSA6IHtcbiAgWyRdOiBcIjBcIixcbiAgW2pvaW5UcnV0aHkoW3ByZWZpeCwgX1swXSwgc3VmZml4XSldOiAoX18gPSB0aGVtZTIoc2VjdGlvbiwgdGFpbChwYXJhbXMpKSkgJiYgYGNhbGMoJHtfX30gKiB2YXIoJHskfSkpYCxcbiAgW2pvaW5UcnV0aHkoW3ByZWZpeCwgX1sxXSwgc3VmZml4XSldOiBfXyAmJiBbX18sIGBjYWxjKCR7X199ICogY2FsYygxIC0gdmFyKCR7JH0pKSlgXVxufSA6IHZvaWQgMDtcbnZhciBwbGFjZUhlbHBlciA9IChwcm9wZXJ0eTIsIHBhcmFtcykgPT4gKHtcbiAgW3Byb3BlcnR5Ml06IChpbmNsdWRlcyhcInd1blwiLCAocGFyYW1zWzBdIHx8IFwiXCIpWzNdKSA/IFwic3BhY2UtXCIgOiBcIlwiKSArIHBhcmFtc1swXVxufSk7XG52YXIgY29udGVudFBsdWdpbkZvciA9IChwcm9wZXJ0eTIpID0+IChwYXJhbXMpID0+IGluY2x1ZGVzKFtcInN0YXJ0XCIsIFwiZW5kXCJdLCBwYXJhbXNbMF0pID8ge1twcm9wZXJ0eTJdOiBgZmxleC0ke3BhcmFtc1swXX1gfSA6IHBsYWNlSGVscGVyKHByb3BlcnR5MiwgcGFyYW1zKTtcbnZhciBncmlkUGx1Z2luID0gKGtpbmQpID0+IChwYXJhbXMpID0+IHtcbiAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICBjYXNlIFwiYXV0b1wiOlxuICAgICAgcmV0dXJuIHtbYGdyaWQtJHtraW5kfWBdOiBcImF1dG9cIn07XG4gICAgY2FzZSBcInNwYW5cIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgZ3JpZC0ke2tpbmR9YF06IHBhcmFtc1sxXSA9PT0gXCJmdWxsXCIgPyBcIjEgLyAtMVwiIDogYHNwYW4gJHtwYXJhbXNbMV19IC8gc3BhbiAke3BhcmFtc1sxXX1gXG4gICAgICB9O1xuICAgIGNhc2UgXCJzdGFydFwiOlxuICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgZ3JpZC0ke2tpbmR9LSR7cGFyYW1zWzBdfWBdOiBwYXJhbXNbMV1cbiAgICAgIH07XG4gIH1cbn07XG52YXIgYm9yZGVyID0gKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4ge1xuICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgIGNhc2UgXCJzb2xpZFwiOlxuICAgIGNhc2UgXCJkYXNoZWRcIjpcbiAgICBjYXNlIFwiZG90dGVkXCI6XG4gICAgY2FzZSBcImRvdWJsZVwiOlxuICAgIGNhc2UgXCJub25lXCI6XG4gICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZShcImJvcmRlclN0eWxlXCIpKHBhcmFtcyk7XG4gICAgY2FzZSBcImNvbGxhcHNlXCI6XG4gICAgY2FzZSBcInNlcGFyYXRlXCI6XG4gICAgICByZXR1cm4gcHJvcGVydHlWYWx1ZShcImJvcmRlckNvbGxhcHNlXCIpKHBhcmFtcyk7XG4gICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgfVxuICByZXR1cm4gKF8gPSB0aGVtZTIoaWQgKyBcIldpZHRoXCIsIHBhcmFtcywgXCJcIikpID8ge2JvcmRlcldpZHRoOiBffSA6IHdpdGhPcGFjaXR5RmFsbGJhY2soXCJib3JkZXJDb2xvclwiLCBpZCwgdGhlbWUyKGlkICsgXCJDb2xvclwiLCBwYXJhbXMpKTtcbn07XG52YXIgdHJhbnNmb3JtID0gKGdwdSkgPT4gKGdwdSA/IFwidHJhbnNsYXRlM2QodmFyKC0tdHctdHJhbnNsYXRlLXgsMCksdmFyKC0tdHctdHJhbnNsYXRlLXksMCksMClcIiA6IFwidHJhbnNsYXRlWCh2YXIoLS10dy10cmFuc2xhdGUteCwwKSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSwwKSlcIikgKyBcIiByb3RhdGUodmFyKC0tdHctcm90YXRlLDApKSBza2V3WCh2YXIoLS10dy1za2V3LXgsMCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSwwKSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgsMSkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15LDEpKVwiO1xudmFyIHRyYW5zZm9ybVhZRnVuY3Rpb24gPSAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSBjb250ZXh0LnRoZW1lKGlkLCBwYXJhbXNbMV0gfHwgcGFyYW1zWzBdKSkgJiYge1xuICBbYC0tdHctJHtpZH0teGBdOiBwYXJhbXNbMF0gIT09IFwieVwiICYmIF8sXG4gIFtgLS10dy0ke2lkfS15YF06IHBhcmFtc1swXSAhPT0gXCJ4XCIgJiYgXyxcbiAgdHJhbnNmb3JtOiBbYCR7aWR9JHtwYXJhbXNbMV0gPyBwYXJhbXNbMF0udG9VcHBlckNhc2UoKSA6IFwiXCJ9KCR7X30pYCwgdHJhbnNmb3JtKCldXG59O1xudmFyIGVkZ2VzUGx1Z2luRm9yID0gKGtleSkgPT4gKHBhcmFtcywgY29udGV4dCwgaWQpID0+IGlkWzFdID8gZWRnZXMoY29udGV4dC50aGVtZShrZXksIHBhcmFtcyksIGlkWzFdLCBrZXkpIDogdGhlbWVQcm9wZXJ0eShrZXkpKHBhcmFtcywgY29udGV4dCwgaWQpO1xudmFyIHBhZGRpbmcgPSBlZGdlc1BsdWdpbkZvcihcInBhZGRpbmdcIik7XG52YXIgbWFyZ2luID0gZWRnZXNQbHVnaW5Gb3IoXCJtYXJnaW5cIik7XG52YXIgbWluTWF4ID0gKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4gKF8gPSB7dzogXCJ3aWR0aFwiLCBoOiBcImhlaWdodFwifVtwYXJhbXNbMF1dKSAmJiB7XG4gIFtfID0gYCR7aWR9JHtjYXBpdGFsaXplKF8pfWBdOiB0aGVtZTIoXywgdGFpbChwYXJhbXMpKVxufTtcbnZhciBjb3JlUGx1Z2lucyA9IHtcbiAgZ3JvdXA6IChwYXJhbXMsIHt0YWd9LCBpZCkgPT4gdGFnKGpvaW4oW2lkLCAuLi5wYXJhbXNdKSksXG4gIGhpZGRlbjogYWxpYXMoZGlzcGxheSwgXCJub25lXCIpLFxuICBpbmxpbmU6IGRpc3BsYXksXG4gIGJsb2NrOiBkaXNwbGF5LFxuICBjb250ZW50czogZGlzcGxheSxcbiAgZmxvdzogZGlzcGxheSxcbiAgdGFibGU6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBpbmNsdWRlcyhbXCJhdXRvXCIsIFwiZml4ZWRcIl0sIHBhcmFtc1swXSkgPyB7dGFibGVMYXlvdXQ6IHBhcmFtc1swXX0gOiBkaXNwbGF5KHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBmbGV4KHBhcmFtcywgY29udGV4dCwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcInJvd1wiOlxuICAgICAgY2FzZSBcImNvbFwiOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGpvaW4ocGFyYW1zWzBdID09PSBcImNvbFwiID8gW1wiY29sdW1uXCIsIC4uLnRhaWwocGFyYW1zKV0gOiBwYXJhbXMpXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwibm93cmFwXCI6XG4gICAgICBjYXNlIFwid3JhcFwiOlxuICAgICAgICByZXR1cm4ge2ZsZXhXcmFwOiBqb2luKHBhcmFtcyl9O1xuICAgICAgY2FzZSBcImdyb3dcIjpcbiAgICAgIGNhc2UgXCJzaHJpbmtcIjpcbiAgICAgICAgcmV0dXJuIHtbYGZsZXgtJHtwYXJhbXNbMF19YF06IHBhcmFtc1sxXSB8fCBcIjFcIn07XG4gICAgfVxuICAgIHJldHVybiAoXyA9IGNvbnRleHQudGhlbWUoXCJmbGV4XCIsIHBhcmFtcywgXCJcIikpID8ge2ZsZXg6IF99IDogZGlzcGxheShwYXJhbXMsIGNvbnRleHQsIGlkKTtcbiAgfSxcbiAgZ3JpZChwYXJhbXMsIGNvbnRleHQsIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJjb2xzXCI6XG4gICAgICBjYXNlIFwicm93c1wiOlxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDEgJiYge1xuICAgICAgICAgIFtgZ3JpZC10ZW1wbGF0ZS0ke3BhcmFtc1swXSA9PT0gXCJjb2xzXCIgPyBcImNvbHVtbnNcIiA6IHBhcmFtc1swXX1gXTogcGFyYW1zLmxlbmd0aCA9PT0gMiAmJiBOdW1iZXIocGFyYW1zWzFdKSA/IGByZXBlYXQoJHtwYXJhbXNbMV19LG1pbm1heCgwLDFmcikpYCA6IGpvaW4odGFpbChwYXJhbXMpLCBcIiBcIilcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJmbG93XCI6XG4gICAgICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID4gMSAmJiB7XG4gICAgICAgICAgZ3JpZEF1dG9GbG93OiBqb2luKHBhcmFtc1sxXSA9PT0gXCJjb2xcIiA/IFtcImNvbHVtblwiLCAuLi50YWlsKHBhcmFtcywgMildIDogdGFpbChwYXJhbXMpLCBcIiBcIilcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXkocGFyYW1zLCBjb250ZXh0LCBpZCk7XG4gIH0sXG4gIGF1dG86IChwYXJhbXMpID0+IGluY2x1ZGVzKFtcImNvbHNcIiwgXCJyb3dzXCJdLCBwYXJhbXNbMF0pICYmIChfID0gcGFyYW1zLmxlbmd0aCA9PT0gMiA/IHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICBtaW46IFwibWluLWNvbnRlbnRcIixcbiAgICBtYXg6IFwibWF4LWNvbnRlbnRcIixcbiAgICBmcjogXCJtaW5tYXgoMCwxZnIpXCJcbiAgfVtwYXJhbXNbMV1dIHx8IGBtaW5tYXgoMCwke3BhcmFtc1sxXX0pYCA6IHBhcmFtcy5sZW5ndGggPiAyICYmIGBtaW5tYXgoJHtqb2luKHRhaWwocGFyYW1zKSwgXCIsXCIpfSlgKSAmJiB7XG4gICAgW2BncmlkLWF1dG8tJHtwYXJhbXNbMF0gPT09IFwiY29sc1wiID8gXCJjb2x1bW5zXCIgOiBcInJvd3NcIn1gXTogX1xuICB9LFxuICBzdGF0aWM6IHBvc2l0aW9uLFxuICBmaXhlZDogcG9zaXRpb24sXG4gIGFic29sdXRlOiBwb3NpdGlvbixcbiAgcmVsYXRpdmU6IHBvc2l0aW9uLFxuICBzdGlja3k6IHBvc2l0aW9uLFxuICB2aXNpYmxlOiB7dmlzaWJpbGl0eTogXCJ2aXNpYmxlXCJ9LFxuICBpbnZpc2libGU6IHt2aXNpYmlsaXR5OiBcImhpZGRlblwifSxcbiAgYW50aWFsaWFzZWQ6IHtcbiAgICBXZWJraXRGb250U21vb3RoaW5nOiBcImFudGlhbGlhc2VkXCIsXG4gICAgTW96T3N4Rm9udFNtb290aGluZzogXCJncmF5c2NhbGVcIlxuICB9LFxuICBcInN1YnBpeGVsLWFudGlhbGlhc2VkXCI6IHtcbiAgICBXZWJraXRGb250U21vb3RoaW5nOiBcImF1dG9cIixcbiAgICBNb3pPc3hGb250U21vb3RoaW5nOiBcImF1dG9cIlxuICB9LFxuICB0cnVuY2F0ZToge1xuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJzci1vbmx5XCI6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHdpZHRoOiBcIjFweFwiLFxuICAgIGhlaWdodDogXCIxcHhcIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBtYXJnaW46IFwiLTFweFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgY2xpcDogXCJyZWN0KDAsMCwwLDApXCIsXG4gICAgYm9yZGVyV2lkdGg6IFwiMFwiXG4gIH0sXG4gIFwibm90LXNyLW9ubHlcIjoge1xuICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgb3ZlcmZsb3c6IFwidmlzaWJsZVwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm9ybWFsXCIsXG4gICAgY2xpcDogXCJhdXRvXCJcbiAgfSxcbiAgcmVzaXplOiAocGFyYW1zKSA9PiAoe1xuICAgIHJlc2l6ZToge3g6IFwidmVydGljYWxcIiwgeTogXCJob3Jpem9udGFsXCJ9W3BhcmFtc1swXV0gfHwgcGFyYW1zWzBdIHx8IFwiYm90aFwiXG4gIH0pLFxuICBib3g6IChwYXJhbXMpID0+ICh7XCJib3gtc2l6aW5nXCI6IGAke3BhcmFtc1swXX0tYm94YH0pLFxuICBhcHBlYXJhbmNlOiBwcm9wZXJ0eVZhbHVlKCksXG4gIGN1cnNvcjogcHJvcGVydHlWYWx1ZSgpLFxuICBmbG9hdDogcHJvcGVydHlWYWx1ZSgpLFxuICBjbGVhcjogcHJvcGVydHlWYWx1ZSgpLFxuICB0b3A6IGluc2V0LFxuICByaWdodDogaW5zZXQsXG4gIGJvdHRvbTogaW5zZXQsXG4gIGxlZnQ6IGluc2V0LFxuICBpbnNldDogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IGV4cGFuZEVkZ2VzKHBhcmFtc1swXSkpID8gZWRnZXModGhlbWUyKFwiaW5zZXRcIiwgdGFpbChwYXJhbXMpKSwgcGFyYW1zWzBdKSA6IChfID0gdGhlbWUyKFwiaW5zZXRcIiwgcGFyYW1zKSkgJiYge1xuICAgIHRvcDogXyxcbiAgICByaWdodDogXyxcbiAgICBib3R0b206IF8sXG4gICAgbGVmdDogX1xuICB9LFxuICB1bmRlcmxpbmU6IHRleHREZWNvcmF0aW9uLFxuICBcImxpbmUtdGhyb3VnaFwiOiB0ZXh0RGVjb3JhdGlvbixcbiAgXCJuby11bmRlcmxpbmVcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LXVuZGVybGluZVwiOiBhbGlhcyh0ZXh0RGVjb3JhdGlvbiwgXCJ1bmRlcmxpbmVcIiksXG4gIFwidGV4dC1uby11bmRlcmxpbmVcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LWxpbmUtdGhyb3VnaFwiOiBhbGlhcyh0ZXh0RGVjb3JhdGlvbiwgXCJsaW5lLXRocm91Z2hcIiksXG4gIHVwcGVyY2FzZTogdGV4dFRyYW5zZm9ybSxcbiAgbG93ZXJjYXNlOiB0ZXh0VHJhbnNmb3JtLFxuICBjYXBpdGFsaXplOiB0ZXh0VHJhbnNmb3JtLFxuICBcIm5vcm1hbC1jYXNlXCI6IGFsaWFzKHRleHRUcmFuc2Zvcm0sIFwibm9uZVwiKSxcbiAgXCJ0ZXh0LW5vcm1hbC1jYXNlXCI6IGFsaWFzKHRleHRUcmFuc2Zvcm0sIFwibm9uZVwiKSxcbiAgaXRhbGljOiBmb250U3R5bGUsXG4gIFwibm90LWl0YWxpY1wiOiBhbGlhcyhmb250U3R5bGUsIFwibm9ybWFsXCIpLFxuICBcImZvbnQtaXRhbGljXCI6IGFsaWFzKGZvbnRTdHlsZSwgXCJpdGFsaWNcIiksXG4gIFwiZm9udC1ub3QtaXRhbGljXCI6IGFsaWFzKGZvbnRTdHlsZSwgXCJub3JtYWxcIiksXG4gIGZvbnQ6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IGNvbnRleHQudGhlbWUoXCJmb250RmFtaWx5XCIsIHBhcmFtcywgXCJcIikpID8ge2ZvbnRGYW1pbHk6IF99IDogdGhlbWVQcm9wZXJ0eShcImZvbnRXZWlnaHRcIikocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIGl0ZW1zOiAocGFyYW1zKSA9PiAoe1xuICAgIGFsaWduSXRlbXM6IGluY2x1ZGVzKFtcInN0YXJ0XCIsIFwiZW5kXCJdLCBwYXJhbXNbMF0pID8gYGZsZXgtJHtwYXJhbXNbMF19YCA6IGpvaW4ocGFyYW1zKVxuICB9KSxcbiAgXCJqdXN0aWZ5LXNlbGZcIjogcHJvcGVydHlWYWx1ZSgpLFxuICBcImp1c3RpZnktaXRlbXNcIjogcHJvcGVydHlWYWx1ZSgpLFxuICBqdXN0aWZ5OiBjb250ZW50UGx1Z2luRm9yKFwianVzdGlmeUNvbnRlbnRcIiksXG4gIGNvbnRlbnQ6IGNvbnRlbnRQbHVnaW5Gb3IoXCJhbGlnbkNvbnRlbnRcIiksXG4gIHNlbGY6IGNvbnRlbnRQbHVnaW5Gb3IoXCJhbGlnblNlbGZcIiksXG4gIHBsYWNlOiAocGFyYW1zKSA9PiBwbGFjZUhlbHBlcihcInBsYWNlLVwiICsgcGFyYW1zWzBdLCB0YWlsKHBhcmFtcykpLFxuICBvdmVyc2Nyb2xsOiAocGFyYW1zKSA9PiAoe1xuICAgIFtcIm92ZXJzY3JvbGxCZWhhdmlvclwiICsgKHBhcmFtc1sxXSA/IFwiLVwiICsgcGFyYW1zWzBdIDogXCJcIildOiBwYXJhbXNbMV0gfHwgcGFyYW1zWzBdXG4gIH0pLFxuICBjb2w6IGdyaWRQbHVnaW4oXCJjb2x1bW5cIiksXG4gIHJvdzogZ3JpZFBsdWdpbihcInJvd1wiKSxcbiAgZHVyYXRpb246IHRoZW1lUHJvcGVydHkoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiksXG4gIGRlbGF5OiB0aGVtZVByb3BlcnR5KFwidHJhbnNpdGlvbkRlbGF5XCIpLFxuICB0cmFja2luZzogdGhlbWVQcm9wZXJ0eShcImxldHRlclNwYWNpbmdcIiksXG4gIGxlYWRpbmc6IHRoZW1lUHJvcGVydHkoXCJsaW5lSGVpZ2h0XCIpLFxuICB6OiB0aGVtZVByb3BlcnR5KFwiekluZGV4XCIpLFxuICBvcGFjaXR5OiB0aGVtZVByb3BlcnR5KCksXG4gIGVhc2U6IHRoZW1lUHJvcGVydHkoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIiksXG4gIHA6IHBhZGRpbmcsXG4gIHB5OiBwYWRkaW5nLFxuICBweDogcGFkZGluZyxcbiAgcHQ6IHBhZGRpbmcsXG4gIHByOiBwYWRkaW5nLFxuICBwYjogcGFkZGluZyxcbiAgcGw6IHBhZGRpbmcsXG4gIG06IG1hcmdpbixcbiAgbXk6IG1hcmdpbixcbiAgbXg6IG1hcmdpbixcbiAgbXQ6IG1hcmdpbixcbiAgbXI6IG1hcmdpbixcbiAgbWI6IG1hcmdpbixcbiAgbWw6IG1hcmdpbixcbiAgdzogdGhlbWVQcm9wZXJ0eShcIndpZHRoXCIpLFxuICBoOiB0aGVtZVByb3BlcnR5KFwiaGVpZ2h0XCIpLFxuICBtaW46IG1pbk1heCxcbiAgbWF4OiBtaW5NYXgsXG4gIGZpbGw6IHRoZW1lUHJvcGVydHkoKSxcbiAgb3JkZXI6IHRoZW1lUHJvcGVydHkoKSxcbiAgb3JpZ2luOiBwcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtT3JpZ2luXCIsIFwiIFwiKSxcbiAgc2VsZWN0OiBwcm9wZXJ0eVZhbHVlKFwidXNlclNlbGVjdFwiKSxcbiAgXCJwb2ludGVyLWV2ZW50c1wiOiBwcm9wZXJ0eVZhbHVlKCksXG4gIGFsaWduOiBwcm9wZXJ0eVZhbHVlKFwidmVydGljYWxBbGlnblwiKSxcbiAgd2hpdGVzcGFjZTogcHJvcGVydHlWYWx1ZShcIndoaXRlU3BhY2VcIiksXG4gIFwibm9ybWFsLW51bXNcIjoge2ZvbnRWYXJpYW50TnVtZXJpYzogXCJub3JtYWxcIn0sXG4gIG9yZGluYWw6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm9yZGluYWxcIiksXG4gIFwic2xhc2hlZC16ZXJvXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcInNsYXNoZWQtemVyb1wiKSxcbiAgXCJsaW5pbmctbnVtc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZpZ3VyZVwiKSxcbiAgXCJvbGRzdHlsZS1udW1zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtZmlndXJlXCIpLFxuICBcInByb3BvcnRpb25hbC1udW1zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtc3BhY2luZ1wiKSxcbiAgXCJ0YWJ1bGFyLW51bXNcIjogZm9udFZhcmlhbnROdW1lcmljKFwibnVtZXJpYy1zcGFjaW5nXCIpLFxuICBcImRpYWdvbmFsLWZyYWN0aW9uc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZyYWN0aW9uXCIpLFxuICBcInN0YWNrZWQtZnJhY3Rpb25zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtZnJhY3Rpb25cIiksXG4gIG92ZXJmbG93OiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gaW5jbHVkZXMoW1wiZWxsaXBzaXNcIiwgXCJjbGlwXCJdLCBwYXJhbXNbMF0pID8gcHJvcGVydHlWYWx1ZShcInRleHRPdmVyZmxvd1wiKShwYXJhbXMpIDogcGFyYW1zWzFdID8ge1tgb3ZlcmZsb3ctJHtwYXJhbXNbMF19YF06IHBhcmFtc1sxXX0gOiBwcm9wZXJ0eVZhbHVlKCkocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIHRyYW5zZm9ybTogKHBhcmFtcykgPT4gcGFyYW1zWzBdID09PSBcIm5vbmVcIiA/IHt0cmFuc2Zvcm06IFwibm9uZVwifSA6IHtcbiAgICBcIi0tdHctdHJhbnNsYXRlLXhcIjogXCIwXCIsXG4gICAgXCItLXR3LXRyYW5zbGF0ZS15XCI6IFwiMFwiLFxuICAgIFwiLS10dy1yb3RhdGVcIjogXCIwXCIsXG4gICAgXCItLXR3LXNrZXcteFwiOiBcIjBcIixcbiAgICBcIi0tdHctc2tldy15XCI6IFwiMFwiLFxuICAgIFwiLS10dy1zY2FsZS14XCI6IFwiMVwiLFxuICAgIFwiLS10dy1zY2FsZS15XCI6IFwiMVwiLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtKHBhcmFtc1swXSA9PT0gXCJncHVcIilcbiAgfSxcbiAgcm90YXRlOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwicm90YXRlXCIsIHBhcmFtcykpICYmIHtcbiAgICBcIi0tdHctcm90YXRlXCI6IF8sXG4gICAgdHJhbnNmb3JtOiBbYHJvdGF0ZSgke199KWAsIHRyYW5zZm9ybSgpXVxuICB9LFxuICBzY2FsZTogdHJhbnNmb3JtWFlGdW5jdGlvbixcbiAgdHJhbnNsYXRlOiB0cmFuc2Zvcm1YWUZ1bmN0aW9uLFxuICBza2V3OiB0cmFuc2Zvcm1YWUZ1bmN0aW9uLFxuICBnYXA6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IHt4OiBcImNvbHVtblwiLCB5OiBcInJvd1wifVtwYXJhbXNbMF1dKSA/IHtbXyArIFwiR2FwXCJdOiBjb250ZXh0LnRoZW1lKFwiZ2FwXCIsIHRhaWwocGFyYW1zKSl9IDogdGhlbWVQcm9wZXJ0eShcImdhcFwiKShwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgc3Ryb2tlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSBjb250ZXh0LnRoZW1lKFwic3Ryb2tlXCIsIHBhcmFtcywgXCJcIikpID8ge3N0cm9rZTogX30gOiB0aGVtZVByb3BlcnR5KFwic3Ryb2tlV2lkdGhcIikocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIG91dGxpbmU6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSB0aGVtZTIoXCJvdXRsaW5lXCIsIHBhcmFtcykpICYmIHtcbiAgICBvdXRsaW5lOiBfWzBdLFxuICAgIG91dGxpbmVPZmZzZXQ6IF9bMV1cbiAgfSxcbiAgYnJlYWsocGFyYW1zKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXG4gICAgICAgICAgb3ZlcmZsb3dXcmFwOiBcIm5vcm1hbFwiXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwid29yZHNcIjpcbiAgICAgICAgcmV0dXJuIHtvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwifTtcbiAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgcmV0dXJuIHt3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCJ9O1xuICAgIH1cbiAgfSxcbiAgdGV4dChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgY2FzZSBcImp1c3RpZnlcIjpcbiAgICAgICAgcmV0dXJuIHt0ZXh0QWxpZ246IHBhcmFtc1swXX07XG4gICAgICBjYXNlIFwidXBwZXJjYXNlXCI6XG4gICAgICBjYXNlIFwibG93ZXJjYXNlXCI6XG4gICAgICBjYXNlIFwiY2FwaXRhbGl6ZVwiOlxuICAgICAgICByZXR1cm4gdGV4dFRyYW5zZm9ybShbXSwgXywgcGFyYW1zWzBdKTtcbiAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgICB9XG4gICAgY29uc3QgZm9udFNpemUgPSB0aGVtZTIoXCJmb250U2l6ZVwiLCBwYXJhbXMsIFwiXCIpO1xuICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBmb250U2l6ZSA9PSBcInN0cmluZ1wiID8ge2ZvbnRTaXplfSA6IHtcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplWzBdLFxuICAgICAgICAuLi50eXBlb2YgZm9udFNpemVbMV0gPT0gXCJzdHJpbmdcIiA/IHtsaW5lSGVpZ2h0OiBmb250U2l6ZVsxXX0gOiBmb250U2l6ZVsxXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhPcGFjaXR5RmFsbGJhY2soXCJjb2xvclwiLCBcInRleHRcIiwgdGhlbWUyKFwidGV4dENvbG9yXCIsIHBhcmFtcykpO1xuICB9LFxuICBiZyhwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImZpeGVkXCI6XG4gICAgICBjYXNlIFwibG9jYWxcIjpcbiAgICAgIGNhc2UgXCJzY3JvbGxcIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kQXR0YWNobWVudFwiLCBcIixcIikocGFyYW1zKTtcbiAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kUG9zaXRpb25cIiwgXCIgXCIpKHBhcmFtcyk7XG4gICAgICBjYXNlIFwibm9cIjpcbiAgICAgICAgcmV0dXJuIHBhcmFtc1sxXSA9PT0gXCJyZXBlYXRcIiAmJiBwcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZFJlcGVhdFwiKShwYXJhbXMpO1xuICAgICAgY2FzZSBcImF1dG9cIjpcbiAgICAgIGNhc2UgXCJjb3ZlclwiOlxuICAgICAgY2FzZSBcImNvbnRhaW5cIjpcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kU2l6ZVwiKShwYXJhbXMpO1xuICAgICAgY2FzZSBcInJlcGVhdFwiOlxuICAgICAgICByZXR1cm4gaW5jbHVkZXMoXCJ4eVwiLCBwYXJhbXNbMV0pID8gcHJvcGVydHlWYWx1ZShcImJhY2tncm91bmRSZXBlYXRcIikocGFyYW1zKSA6IHtcImJhY2tncm91bmQtcmVwZWF0XCI6IHBhcmFtc1sxXSB8fCBwYXJhbXNbMF19O1xuICAgICAgY2FzZSBcIm9wYWNpdHlcIjpcbiAgICAgICAgcmV0dXJuIG9wYWNpdHlQcm9wZXJ0eShwYXJhbXMsIHRoZW1lMiwgaWQsIFwiYmFja2dyb3VuZFwiKTtcbiAgICAgIGNhc2UgXCJjbGlwXCI6XG4gICAgICAgIHJldHVybiB7YmFja2dyb3VuZENsaXA6IHBhcmFtc1sxXSArIChwYXJhbXNbMV0gPT09IFwidGV4dFwiID8gXCJcIiA6IFwiLWJveFwiKX07XG4gICAgICBjYXNlIFwiZ3JhZGllbnRcIjpcbiAgICAgICAgaWYgKHBhcmFtc1sxXSA9PT0gXCJ0b1wiICYmIChfID0gZXhwYW5kRWRnZXMocGFyYW1zWzJdKSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvICR7am9pbihfLCBcIiBcIil9LHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSlgXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKF8gPSB0aGVtZTIoXCJiYWNrZ3JvdW5kSW1hZ2VcIiwgcGFyYW1zLCBcIlwiKSkgPyB7YmFja2dyb3VuZEltYWdlOiBffSA6IHdpdGhPcGFjaXR5RmFsbGJhY2soXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJiZ1wiLCB0aGVtZTIoXCJiYWNrZ3JvdW5kQ29sb3JcIiwgcGFyYW1zKSk7XG4gIH0sXG4gIGZyb206IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSB0aGVtZTIoXCJncmFkaWVudENvbG9yU3RvcHNcIiwgcGFyYW1zKSkgJiYge1xuICAgIFwiLS10dy1ncmFkaWVudC1mcm9tXCI6IF8sXG4gICAgXCItLXR3LWdyYWRpZW50LXN0b3BzXCI6IGB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSx2YXIoLS10dy1ncmFkaWVudC10bywke3RyYW5zcGFyZW50VG8oXyl9KWBcbiAgfSxcbiAgdmlhOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwiZ3JhZGllbnRDb2xvclN0b3BzXCIsIHBhcmFtcykpICYmIHtcbiAgICBcIi0tdHctZ3JhZGllbnQtc3RvcHNcIjogYHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCR7X30sdmFyKC0tdHctZ3JhZGllbnQtdG8sJHt0cmFuc3BhcmVudFRvKF8pfSlgXG4gIH0sXG4gIHRvOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+ICh7XG4gICAgXCItLXR3LWdyYWRpZW50LXRvXCI6IHRoZW1lMihcImdyYWRpZW50Q29sb3JTdG9wc1wiLCBwYXJhbXMpXG4gIH0pLFxuICBib3JkZXI6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBleHBhbmRFZGdlcyhwYXJhbXNbMF0pID8gZWRnZXMoY29udGV4dC50aGVtZShcImJvcmRlcldpZHRoXCIsIHRhaWwocGFyYW1zKSksIHBhcmFtc1swXSwgXCJib3JkZXJcIiwgXCJ3aWR0aFwiKSA6IGJvcmRlcihwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgZGl2aWRlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSByZXZlcnNhYmxlRWRnZShwYXJhbXMsIGNvbnRleHQsIGlkLCBcImRpdmlkZVdpZHRoXCIsIFwiYm9yZGVyXCIsIFwid2lkdGhcIikgfHwgYm9yZGVyKHBhcmFtcywgY29udGV4dCwgaWQpKSAmJiB7XG4gICAgXCImPjpub3QoW2hpZGRlbl0pfjpub3QoW2hpZGRlbl0pXCI6IF9cbiAgfSxcbiAgc3BhY2U6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiAoXyA9IHJldmVyc2FibGVFZGdlKHBhcmFtcywgY29udGV4dCwgaWQsIFwic3BhY2VcIiwgXCJtYXJnaW5cIikpICYmIHtcbiAgICBcIiY+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSlcIjogX1xuICB9LFxuICBwbGFjZWhvbGRlcjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9LCBpZCkgPT4gKF8gPSBwYXJhbXNbMF0gPT09IFwib3BhY2l0eVwiID8gb3BhY2l0eVByb3BlcnR5KHBhcmFtcywgdGhlbWUyLCBpZCkgOiB3aXRoT3BhY2l0eUZhbGxiYWNrKFwiY29sb3JcIiwgXCJwbGFjZWhvbGRlclwiLCB0aGVtZTIoXCJwbGFjZWhvbGRlckNvbG9yXCIsIHBhcmFtcykpKSAmJiB7XG4gICAgXCImOjpwbGFjZWhvbGRlclwiOiBfXG4gIH0sXG4gIHNoYWRvdzogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IHRoZW1lMihcImJveFNoYWRvd1wiLCBwYXJhbXMpKSAmJiB7XG4gICAgXCI6Z2xvYmFsXCI6IHtcbiAgICAgIFwiKlwiOiB7XG4gICAgICAgIFwiLS10dy1zaGFkb3dcIjogXCIwIDAgdHJhbnNwYXJlbnRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgXCItLXR3LXNoYWRvd1wiOiBfID09PSBcIm5vbmVcIiA/IFwiMCAwIHRyYW5zcGFyZW50XCIgOiBfLFxuICAgIGJveFNoYWRvdzogW1xuICAgICAgXyxcbiAgICAgIGB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csMCAwIHRyYW5zcGFyZW50KSx2YXIoLS10dy1yaW5nLXNoYWRvdywwIDAgdHJhbnNwYXJlbnQpLHZhcigtLXR3LXNoYWRvdylgXG4gICAgXVxuICB9LFxuICBhbmltYXRlOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMiwgdGFnfSkgPT4ge1xuICAgIGlmICgkID0gdGhlbWUyKFwiYW5pbWF0aW9uXCIsIHBhcmFtcykpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gJC5zcGxpdChcIiBcIik7XG4gICAgICBpZiAoKF8gPSB0aGVtZTIoXCJrZXlmcmFtZXNcIiwgcGFydHNbMF0sIF9fID0ge30pKSAhPT0gX18pIHtcbiAgICAgICAgcmV0dXJuICgkID0gdGFnKHBhcnRzWzBdKSkgJiYge1xuICAgICAgICAgIGFuaW1hdGlvbjogJCArIFwiIFwiICsgam9pbih0YWlsKHBhcnRzKSwgXCIgXCIpLFxuICAgICAgICAgIFtcIkBrZXlmcmFtZXMgXCIgKyAkXTogX1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHthbmltYXRpb246ICR9O1xuICAgIH1cbiAgfSxcbiAgcmluZyhwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpIHtcbiAgICBzd2l0Y2ggKHBhcmFtc1swXSkge1xuICAgICAgY2FzZSBcImluc2V0XCI6XG4gICAgICAgIHJldHVybiB7XCItLXR3LXJpbmctaW5zZXRcIjogXCJpbnNldFwifTtcbiAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkKTtcbiAgICAgIGNhc2UgXCJvZmZzZXRcIjpcbiAgICAgICAgcmV0dXJuIChfID0gdGhlbWUyKFwicmluZ09mZnNldFdpZHRoXCIsIHRhaWwocGFyYW1zKSwgXCJcIikpID8ge1xuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC13aWR0aFwiOiBfXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgXCItLXR3LXJpbmctb2Zmc2V0LWNvbG9yXCI6IHRoZW1lMihcInJpbmdPZmZzZXRDb2xvclwiLCB0YWlsKHBhcmFtcykpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAoXyA9IHRoZW1lMihcInJpbmdXaWR0aFwiLCBwYXJhbXMsIFwiXCIpKSA/IHtcbiAgICAgIFwiLS10dy1yaW5nLW9mZnNldC1zaGFkb3dcIjogYHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSB2YXIoLS10dy1yaW5nLW9mZnNldC1jb2xvcilgLFxuICAgICAgXCItLXR3LXJpbmctc2hhZG93XCI6IGB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKCR7X30gKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpYCxcbiAgICAgIFwiYm94LXNoYWRvd1wiOiBgdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSx2YXIoLS10dy1yaW5nLXNoYWRvdyksdmFyKC0tdHctc2hhZG93LDAgMCB0cmFuc3BhcmVudClgLFxuICAgICAgXCI6Z2xvYmFsXCI6IHtcbiAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICBcIi0tdHctcmluZy1pbnNldFwiOiBcInZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKVwiLFxuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC13aWR0aFwiOiB0aGVtZTIoXCJyaW5nT2Zmc2V0V2lkdGhcIiwgXCJcIiwgXCIwcHhcIiksXG4gICAgICAgICAgXCItLXR3LXJpbmctb2Zmc2V0LWNvbG9yXCI6IHRoZW1lMihcInJpbmdPZmZzZXRDb2xvclwiLCBcIlwiLCBcIiNmZmZcIiksXG4gICAgICAgICAgXCItLXR3LXJpbmctY29sb3JcIjogYXNSR0JBKHRoZW1lMihcInJpbmdDb2xvclwiLCBcIlwiLCBcIiM5M2M1ZmRcIiksIFwicmluZy1vcGFjaXR5XCIsIHRoZW1lMihcInJpbmdPcGFjaXR5XCIsIFwiXCIsIFwiMC41XCIpKSxcbiAgICAgICAgICBcIi0tdHctcmluZy1vZmZzZXQtc2hhZG93XCI6IFwiMCAwIHRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgXCItLXR3LXJpbmctc2hhZG93XCI6IFwiMCAwIHRyYW5zcGFyZW50XCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gOiB7XG4gICAgICBcIi0tdHctcmluZy1vcGFjaXR5XCI6IFwiMVwiLFxuICAgICAgXCItLXR3LXJpbmctY29sb3JcIjogYXNSR0JBKHRoZW1lMihcInJpbmdDb2xvclwiLCBwYXJhbXMpLCBcInJpbmctb3BhY2l0eVwiKVxuICAgIH07XG4gIH0sXG4gIG9iamVjdDogKHBhcmFtcykgPT4gaW5jbHVkZXMoW1wiY29udGFpblwiLCBcImNvdmVyXCIsIFwiZmlsbFwiLCBcIm5vbmVcIiwgXCJzY2FsZVwiXSwgcGFyYW1zWzBdKSA/IHByb3BlcnR5VmFsdWUoXCJvYmplY3RGaXRcIikocGFyYW1zKSA6IHByb3BlcnR5VmFsdWUoXCJvYmplY3RQb3NpdGlvblwiLCBcIiBcIikocGFyYW1zKSxcbiAgbGlzdDogKHBhcmFtcykgPT4gcHJvcGVydHlWYWx1ZShpbmNsdWRlcyhbXCJpbnNpZGVcIiwgXCJvdXRzaWRlXCJdLCBwYXJhbXNbMF0pID8gXCJsaXN0U3R5bGVQb3NpdGlvblwiIDogXCJsaXN0U3R5bGVUeXBlXCIpKHBhcmFtcyksXG4gIHJvdW5kZWQ6IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBjb3JuZXJzKGNvbnRleHQudGhlbWUoXCJib3JkZXJSYWRpdXNcIiwgdGFpbChwYXJhbXMpLCBcIlwiKSwgcGFyYW1zWzBdLCBcImJvcmRlclwiLCBcInJhZGl1c1wiKSB8fCB0aGVtZVByb3BlcnR5KFwiYm9yZGVyUmFkaXVzXCIpKHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBcInRyYW5zaXRpb24tbm9uZVwiOiB7XCJ0cmFuc2l0aW9uLXByb3BlcnR5XCI6IFwibm9uZVwifSxcbiAgdHJhbnNpdGlvbjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoe1xuICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogdGhlbWUyKFwidHJhbnNpdGlvblByb3BlcnR5XCIsIHBhcmFtcyksXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aGVtZTIoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIiwgXCJcIiksXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGVtZTIoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJcIilcbiAgfSksXG4gIGNvbnRhaW5lcjogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiB7XG4gICAgY29uc3Qge3NjcmVlbnMgPSB0aGVtZTIoXCJzY3JlZW5zXCIpLCBjZW50ZXIsIHBhZGRpbmc6IHBhZGRpbmcyfSA9IHRoZW1lMihcImNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwYWRkaW5nRm9yID0gKHNjcmVlbikgPT4gKF8gPSBwYWRkaW5nMiAmJiAodHlwZW9mIHBhZGRpbmcyID09IFwic3RyaW5nXCIgPyBwYWRkaW5nMiA6IHBhZGRpbmcyW3NjcmVlbl0gfHwgcGFkZGluZzIuREVGQVVMVCkpID8ge1xuICAgICAgcGFkZGluZ1JpZ2h0OiBfLFxuICAgICAgcGFkZGluZ0xlZnQ6IF9cbiAgICB9IDoge307XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjcmVlbnMpLnJlZHVjZSgocnVsZXMyLCBzY3JlZW4pID0+IHtcbiAgICAgIGlmICgoJCA9IHNjcmVlbnNbc2NyZWVuXSkgJiYgdHlwZW9mICQgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBydWxlczJbYnVpbGRNZWRpYVF1ZXJ5KCQpXSA9IHtcbiAgICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogJCxcbiAgICAgICAgICAgIC4uLnBhZGRpbmdGb3Ioc2NyZWVuKVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlczI7XG4gICAgfSwge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgLi4uY2VudGVyID8ge21hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCJ9IDoge30sXG4gICAgICAuLi5wYWRkaW5nRm9yKFwieHNcIilcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gc3JjL3R3aW5kL3ByZWZsaWdodC50c1xudmFyIGNyZWF0ZVByZWZsaWdodCA9ICh0aGVtZTIpID0+ICh7XG4gIFwiOnJvb3RcIjoge3RhYlNpemU6IDR9LFxuICBcImJvZHksYmxvY2txdW90ZSxkbCxkZCxoMSxoMixoMyxoNCxoNSxoNixocixmaWd1cmUscCxwcmUsZmllbGRzZXQsb2wsdWxcIjoge21hcmdpbjogXCIwXCJ9LFxuICBidXR0b246IHtiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgYmFja2dyb3VuZEltYWdlOiBcIm5vbmVcIn0sXG4gICdidXR0b24sW3R5cGU9XCJidXR0b25cIl0sW3R5cGU9XCJyZXNldFwiXSxbdHlwZT1cInN1Ym1pdFwiXSc6IHtXZWJraXRBcHBlYXJhbmNlOiBcImJ1dHRvblwifSxcbiAgXCJidXR0b246Zm9jdXNcIjoge291dGxpbmU6IFtcIjFweCBkb3R0ZWRcIiwgXCI1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIl19LFxuICBcImZpZWxkc2V0LG9sLHVsLGxlZ2VuZFwiOiB7cGFkZGluZzogXCIwXCJ9LFxuICBcIm9sLHVsXCI6IHtsaXN0U3R5bGU6IFwibm9uZVwifSxcbiAgaHRtbDoge1xuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXG4gICAgV2Via2l0VGV4dFNpemVBZGp1c3Q6IFwiMTAwJVwiLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lMihcImZvbnRGYW1pbHkuc2Fuc1wiLCBcInVpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLHNhbnMtc2VyaWZcIilcbiAgfSxcbiAgYm9keToge2ZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLCBsaW5lSGVpZ2h0OiBcImluaGVyaXRcIn0sXG4gIFwiKiw6OmJlZm9yZSw6OmFmdGVyXCI6IHtcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIGJvcmRlcjogYDAgc29saWQgJHt0aGVtZTIoXCJib3JkZXJDb2xvci5ERUZBVUxUXCIsIFwiY3VycmVudENvbG9yXCIpfWBcbiAgfSxcbiAgaHI6IHtoZWlnaHQ6IFwiMFwiLCBjb2xvcjogXCJpbmhlcml0XCIsIGJvcmRlclRvcFdpZHRoOiBcIjFweFwifSxcbiAgaW1nOiB7Ym9yZGVyU3R5bGU6IFwic29saWRcIn0sXG4gIHRleHRhcmVhOiB7cmVzaXplOiBcInZlcnRpY2FsXCJ9LFxuICBcImlucHV0OjpwbGFjZWhvbGRlcix0ZXh0YXJlYTo6cGxhY2Vob2xkZXJcIjoge1xuICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgIGNvbG9yOiB0aGVtZTIoXCJwbGFjZWhvbGRlckNvbG9yLkRFRkFVTFRcIiwgdGhlbWUyKFwiY29sb3JzLmdyYXkuNDAwXCIsIFwiI2ExYTFhYVwiKSlcbiAgfSxcbiAgJ2J1dHRvbixbcm9sZT1cImJ1dHRvblwiXSc6IHtjdXJzb3I6IFwicG9pbnRlclwifSxcbiAgdGFibGU6IHt0ZXh0SW5kZW50OiBcIjBcIiwgYm9yZGVyQ29sb3I6IFwiaW5oZXJpdFwiLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwifSxcbiAgXCJoMSxoMixoMyxoNCxoNSxoNlwiOiB7Zm9udFNpemU6IFwiaW5oZXJpdFwiLCBmb250V2VpZ2h0OiBcImluaGVyaXRcIn0sXG4gIGE6IHtjb2xvcjogXCJpbmhlcml0XCIsIHRleHREZWNvcmF0aW9uOiBcImluaGVyaXRcIn0sXG4gIFwiYnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYVwiOiB7XG4gICAgZm9udEZhbWlseTogXCJpbmhlcml0XCIsXG4gICAgZm9udFNpemU6IFwiMTAwJVwiLFxuICAgIG1hcmdpbjogXCIwXCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgbGluZUhlaWdodDogXCJpbmhlcml0XCIsXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiXG4gIH0sXG4gIFwiYnV0dG9uLHNlbGVjdFwiOiB7dGV4dFRyYW5zZm9ybTogXCJub25lXCJ9LFxuICBcIjo6LW1vei1mb2N1cy1pbm5lclwiOiB7Ym9yZGVyU3R5bGU6IFwibm9uZVwiLCBwYWRkaW5nOiBcIjBcIn0sXG4gIFwiOi1tb3otZm9jdXNyaW5nXCI6IHtvdXRsaW5lOiBcIjFweCBkb3R0ZWQgQnV0dG9uVGV4dFwifSxcbiAgXCI6LW1vei11aS1pbnZhbGlkXCI6IHtib3hTaGFkb3c6IFwibm9uZVwifSxcbiAgcHJvZ3Jlc3M6IHt2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJ9LFxuICBcIjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiw6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIjoge2hlaWdodDogXCJhdXRvXCJ9LFxuICAnW3R5cGU9XCJzZWFyY2hcIl0nOiB7V2Via2l0QXBwZWFyYW5jZTogXCJ0ZXh0ZmllbGRcIiwgb3V0bGluZU9mZnNldDogXCItMnB4XCJ9LFxuICBcIjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvblwiOiB7V2Via2l0QXBwZWFyYW5jZTogXCJub25lXCJ9LFxuICBcIjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b25cIjoge1dlYmtpdEFwcGVhcmFuY2U6IFwiYnV0dG9uXCIsIGZvbnQ6IFwiaW5oZXJpdFwifSxcbiAgc3VtbWFyeToge2Rpc3BsYXk6IFwibGlzdC1pdGVtXCJ9LFxuICBcImFiYnJbdGl0bGVdXCI6IHt0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmUgZG90dGVkXCJ9LFxuICBcImIsc3Ryb25nXCI6IHtmb250V2VpZ2h0OiBcImJvbGRlclwifSxcbiAgXCJwcmUsY29kZSxrYmQsc2FtcFwiOiB7XG4gICAgZm9udEZhbWlseTogdGhlbWUyKFwiZm9udEZhbWlseVwiLCBcIm1vbm9cIiwgXCJ1aS1tb25vc3BhY2UsbW9ub3NwYWNlXCIpLFxuICAgIGZvbnRTaXplOiBcIjFlbVwiXG4gIH0sXG4gIFwic3ViLHN1cFwiOiB7Zm9udFNpemU6IFwiNzUlXCIsIGxpbmVIZWlnaHQ6IFwiMFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJ9LFxuICBzdWI6IHtib3R0b206IFwiLTAuMjVlbVwifSxcbiAgc3VwOiB7dG9wOiBcIi0wLjVlbVwifSxcbiAgXCJpbWcsc3ZnLHZpZGVvLGNhbnZhcyxhdWRpbyxpZnJhbWUsZW1iZWQsb2JqZWN0XCI6IHtkaXNwbGF5OiBcImJsb2NrXCIsIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJ9LFxuICBcImltZyx2aWRlb1wiOiB7bWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wifVxufSk7XG5cbi8vIHNyYy90d2luZC92YXJpYW50cy50c1xudmFyIGNvcmVWYXJpYW50cyA9IHtcbiAgZGFyazogXCJAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOmRhcmspXCIsXG4gIHN0aWNreTogXCJAc3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjpzdGlja3kpKVwiLFxuICBcIm1vdGlvbi1yZWR1Y2VcIjogXCJAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKVwiLFxuICBcIm1vdGlvbi1zYWZlXCI6IFwiQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOm5vLXByZWZlcmVuY2UpXCIsXG4gIGZpcnN0OiBcIiY6Zmlyc3QtY2hpbGRcIixcbiAgbGFzdDogXCImOmxhc3QtY2hpbGRcIixcbiAgZXZlbjogXCImOm50aC1jaGlsZCgybilcIixcbiAgb2RkOiBcIiY6bnRoLWNoaWxkKG9kZClcIixcbiAgY2hpbGRyZW46IFwiJj4qXCIsXG4gIHNpYmxpbmdzOiBcIiZ+KlwiLFxuICBzaWJsaW5nOiBcIiYrKlwiLFxuICBvdmVycmlkZTogXCImJlwiXG59O1xuXG4vLyBzcmMvaW50ZXJuYWwvZG9tLnRzXG52YXIgU1RZTEVfRUxFTUVOVF9JRCA9IFwiX190d2luZFwiO1xudmFyIGdldFN0eWxlRWxlbWVudCA9IChub25jZSkgPT4ge1xuICBsZXQgZWxlbWVudCA9IHNlbGZbU1RZTEVfRUxFTUVOVF9JRF07XG4gIGlmICghZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSk7XG4gICAgZWxlbWVudC5pZCA9IFNUWUxFX0VMRU1FTlRfSUQ7XG4gICAgbm9uY2UgJiYgKGVsZW1lbnQubm9uY2UgPSBub25jZSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBzcmMvdHdpbmQvc2hlZXRzLnRzXG52YXIgY3Nzb21TaGVldCA9ICh7XG4gIG5vbmNlLFxuICB0YXJnZXQgPSBnZXRTdHlsZUVsZW1lbnQobm9uY2UpLnNoZWV0XG59ID0ge30pID0+IHtcbiAgY29uc3Qgb2Zmc2V0ID0gdGFyZ2V0LmNzc1J1bGVzLmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQsXG4gICAgaW5zZXJ0OiAocnVsZSwgaW5kZXgpID0+IHRhcmdldC5pbnNlcnRSdWxlKHJ1bGUsIG9mZnNldCArIGluZGV4KVxuICB9O1xufTtcbnZhciB2b2lkU2hlZXQgPSAoKSA9PiAoe1xuICB0YXJnZXQ6IG51bGwsXG4gIGluc2VydDogbm9vcFxufSk7XG5cbi8vIHNyYy90d2luZC9tb2Rlcy50c1xudmFyIG1vZGUgPSAocmVwb3J0KSA9PiAoe1xuICB1bmtub3duKHNlY3Rpb24sIGtleSA9IFtdLCBvcHRpb25hbCwgY29udGV4dCkge1xuICAgIGlmICghb3B0aW9uYWwpIHtcbiAgICAgIHRoaXMucmVwb3J0KHtpZDogXCJVTktOT1dOX1RIRU1FX1ZBTFVFXCIsIGtleTogam9pbihbc2VjdGlvbiwgLi4ua2V5XSwgXCIuXCIpfSwgY29udGV4dCk7XG4gICAgfVxuICB9LFxuICByZXBvcnQoe2lkLCAuLi5pbmZvfSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgWyR7aWR9XSAke0pTT04uc3RyaW5naWZ5KGluZm8pfWA7XG4gICAgY29uc3Qgc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrIHx8IG1lc3NhZ2UpLnNwbGl0KFwiYXQgXCIpO1xuICAgIGZvciAobGV0IGZyYW1lOyAoZnJhbWUgPSBzdGFjay5zcGxpY2UoMSwgMSlbMF0pICYmICEvKF58XFwuKSh0d3xzZXR1cCkgLy50ZXN0KGZyYW1lKTsgKSB7XG4gICAgfVxuICAgIHJldHVybiByZXBvcnQoc3RhY2suam9pbihcImF0IFwiKSk7XG4gIH1cbn0pO1xudmFyIHdhcm4gPSBtb2RlKChtZXNzYWdlKSA9PiBjb25zb2xlLndhcm4obWVzc2FnZSkpO1xudmFyIHN0cmljdCA9IG1vZGUoKG1lc3NhZ2UpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufSk7XG52YXIgc2lsZW50ID0gbW9kZShub29wKTtcblxuLy8gc3JjL3R3aW5kL3ByZWZpeC50c1xudmFyIGltcG9ydF9zdHlsZV92ZW5kb3JpemVyID0gX190b01vZHVsZShyZXF1aXJlKFwic3R5bGUtdmVuZG9yaXplclwiKSk7XG52YXIgbm9wcmVmaXggPSAocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KSA9PiBgJHtwcm9wZXJ0eTJ9OiR7dmFsdWV9JHtpbXBvcnRhbnQgPyBcIiAhaW1wb3J0YW50XCIgOiBcIlwifWA7XG52YXIgYXV0b3ByZWZpeCA9IChwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpID0+IHtcbiAgbGV0IGNzc1RleHQgPSBcIlwiO1xuICBjb25zdCBwcm9wZXJ0eUFsaWFzID0gaW1wb3J0X3N0eWxlX3ZlbmRvcml6ZXIuY3NzUHJvcGVydHlBbGlhcyhwcm9wZXJ0eTIpO1xuICBpZiAocHJvcGVydHlBbGlhcylcbiAgICBjc3NUZXh0ICs9IGAke25vcHJlZml4KHByb3BlcnR5QWxpYXMsIHZhbHVlLCBpbXBvcnRhbnQpfTtgO1xuICBsZXQgZmxhZ3MgPSBpbXBvcnRfc3R5bGVfdmVuZG9yaXplci5jc3NQcm9wZXJ0eVByZWZpeEZsYWdzKHByb3BlcnR5Mik7XG4gIGlmIChmbGFncyAmIDEpXG4gICAgY3NzVGV4dCArPSBgLXdlYmtpdC0ke25vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDIpXG4gICAgY3NzVGV4dCArPSBgLW1vei0ke25vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDQpXG4gICAgY3NzVGV4dCArPSBgLW1zLSR7bm9wcmVmaXgocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KX07YDtcbiAgZmxhZ3MgPSBpbXBvcnRfc3R5bGVfdmVuZG9yaXplci5jc3NWYWx1ZVByZWZpeEZsYWdzKHByb3BlcnR5MiwgdmFsdWUpO1xuICBpZiAoZmxhZ3MgJiAxKVxuICAgIGNzc1RleHQgKz0gYCR7bm9wcmVmaXgocHJvcGVydHkyLCBgLXdlYmtpdC0ke3ZhbHVlfWAsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDIpXG4gICAgY3NzVGV4dCArPSBgJHtub3ByZWZpeChwcm9wZXJ0eTIsIGAtbW96LSR7dmFsdWV9YCwgaW1wb3J0YW50KX07YDtcbiAgaWYgKGZsYWdzICYgNClcbiAgICBjc3NUZXh0ICs9IGAke25vcHJlZml4KHByb3BlcnR5MiwgYC1tcy0ke3ZhbHVlfWAsIGltcG9ydGFudCl9O2A7XG4gIGNzc1RleHQgKz0gbm9wcmVmaXgocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgcmV0dXJuIGNzc1RleHQ7XG59O1xuXG4vLyBzcmMvdHdpbmQvdGhlbWUudHNcbnZhciByYXRpb3MgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZG8ge1xuICAgIGZvciAobGV0IGRpdmlkZW5kID0gMTsgZGl2aWRlbmQgPCBzdGFydDsgZGl2aWRlbmQrKykge1xuICAgICAgcmVzdWx0W2Ake2RpdmlkZW5kfS8ke3N0YXJ0fWBdID0gTnVtYmVyKChkaXZpZGVuZCAvIHN0YXJ0ICogMTAwKS50b0ZpeGVkKDYpKSArIFwiJVwiO1xuICAgIH1cbiAgfSB3aGlsZSAoKytzdGFydCA8PSBlbmQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBleHBvbmVudGlhbCA9IChzdG9wLCB1bml0LCBzdGFydCA9IDApID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoOyBzdGFydCA8PSBzdG9wOyBzdGFydCA9IHN0YXJ0ICogMiB8fCAxKSB7XG4gICAgcmVzdWx0W3N0YXJ0XSA9IHN0YXJ0ICsgdW5pdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBsaW5lYXIgPSAoc3RvcCwgdW5pdCA9IFwiXCIsIGRpdmlkZUJ5ID0gMSwgc3RhcnQgPSAwLCBzdGVwID0gMSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZm9yICg7IHN0YXJ0IDw9IHN0b3A7IHN0YXJ0ICs9IHN0ZXApIHtcbiAgICByZXN1bHRbc3RhcnRdID0gc3RhcnQgLyBkaXZpZGVCeSArIHVuaXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgYWxpYXMyID0gKHNlY3Rpb24pID0+ICh0aGVtZTIpID0+IHRoZW1lMihzZWN0aW9uKTtcbnZhciB0aGVtZUZhY3RvcnkgPSAoYXJncywge3RoZW1lOiB0aGVtZTJ9KSA9PiB0aGVtZTIoLi4uYXJncyk7XG52YXIgdGhlbWUgPSAoLi4uYXJncykgPT4gZGlyZWN0aXZlKHRoZW1lRmFjdG9yeSwgYXJncyk7XG52YXIgZGVmYXVsdFRoZW1lID0ge1xuICBzY3JlZW5zOiB7XG4gICAgc206IFwiNjQwcHhcIixcbiAgICBtZDogXCI3NjhweFwiLFxuICAgIGxnOiBcIjEwMjRweFwiLFxuICAgIHhsOiBcIjEyODBweFwiLFxuICAgIFwiMnhsXCI6IFwiMTUzNnB4XCJcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgdHJhbnNwYXJlbnQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICBjdXJyZW50OiBcImN1cnJlbnRDb2xvclwiLFxuICAgIGJsYWNrOiBcIiMwMDBcIixcbiAgICB3aGl0ZTogXCIjZmZmXCIsXG4gICAgZ3JheToge1xuICAgICAgNTA6IFwiI2Y5ZmFmYlwiLFxuICAgICAgMTAwOiBcIiNmM2Y0ZjZcIixcbiAgICAgIDIwMDogXCIjZTVlN2ViXCIsXG4gICAgICAzMDA6IFwiI2QxZDVkYlwiLFxuICAgICAgNDAwOiBcIiM5Y2EzYWZcIixcbiAgICAgIDUwMDogXCIjNmI3MjgwXCIsXG4gICAgICA2MDA6IFwiIzRiNTU2M1wiLFxuICAgICAgNzAwOiBcIiMzNzQxNTFcIixcbiAgICAgIDgwMDogXCIjMWYyOTM3XCIsXG4gICAgICA5MDA6IFwiIzExMTgyN1wiXG4gICAgfSxcbiAgICByZWQ6IHtcbiAgICAgIDUwOiBcIiNmZWYyZjJcIixcbiAgICAgIDEwMDogXCIjZmVlMmUyXCIsXG4gICAgICAyMDA6IFwiI2ZlY2FjYVwiLFxuICAgICAgMzAwOiBcIiNmY2E1YTVcIixcbiAgICAgIDQwMDogXCIjZjg3MTcxXCIsXG4gICAgICA1MDA6IFwiI2VmNDQ0NFwiLFxuICAgICAgNjAwOiBcIiNkYzI2MjZcIixcbiAgICAgIDcwMDogXCIjYjkxYzFjXCIsXG4gICAgICA4MDA6IFwiIzk5MWIxYlwiLFxuICAgICAgOTAwOiBcIiM3ZjFkMWRcIlxuICAgIH0sXG4gICAgeWVsbG93OiB7XG4gICAgICA1MDogXCIjZmZmYmViXCIsXG4gICAgICAxMDA6IFwiI2ZlZjNjN1wiLFxuICAgICAgMjAwOiBcIiNmZGU2OGFcIixcbiAgICAgIDMwMDogXCIjZmNkMzRkXCIsXG4gICAgICA0MDA6IFwiI2ZiYmYyNFwiLFxuICAgICAgNTAwOiBcIiNmNTllMGJcIixcbiAgICAgIDYwMDogXCIjZDk3NzA2XCIsXG4gICAgICA3MDA6IFwiI2I0NTMwOVwiLFxuICAgICAgODAwOiBcIiM5MjQwMGVcIixcbiAgICAgIDkwMDogXCIjNzgzNTBmXCJcbiAgICB9LFxuICAgIGdyZWVuOiB7XG4gICAgICA1MDogXCIjZWNmZGY1XCIsXG4gICAgICAxMDA6IFwiI2QxZmFlNVwiLFxuICAgICAgMjAwOiBcIiNhN2YzZDBcIixcbiAgICAgIDMwMDogXCIjNmVlN2I3XCIsXG4gICAgICA0MDA6IFwiIzM0ZDM5OVwiLFxuICAgICAgNTAwOiBcIiMxMGI5ODFcIixcbiAgICAgIDYwMDogXCIjMDU5NjY5XCIsXG4gICAgICA3MDA6IFwiIzA0Nzg1N1wiLFxuICAgICAgODAwOiBcIiMwNjVmNDZcIixcbiAgICAgIDkwMDogXCIjMDY0ZTNiXCJcbiAgICB9LFxuICAgIGJsdWU6IHtcbiAgICAgIDUwOiBcIiNlZmY2ZmZcIixcbiAgICAgIDEwMDogXCIjZGJlYWZlXCIsXG4gICAgICAyMDA6IFwiI2JmZGJmZVwiLFxuICAgICAgMzAwOiBcIiM5M2M1ZmRcIixcbiAgICAgIDQwMDogXCIjNjBhNWZhXCIsXG4gICAgICA1MDA6IFwiIzNiODJmNlwiLFxuICAgICAgNjAwOiBcIiMyNTYzZWJcIixcbiAgICAgIDcwMDogXCIjMWQ0ZWQ4XCIsXG4gICAgICA4MDA6IFwiIzFlNDBhZlwiLFxuICAgICAgOTAwOiBcIiMxZTNhOGFcIlxuICAgIH0sXG4gICAgaW5kaWdvOiB7XG4gICAgICA1MDogXCIjZWVmMmZmXCIsXG4gICAgICAxMDA6IFwiI2UwZTdmZlwiLFxuICAgICAgMjAwOiBcIiNjN2QyZmVcIixcbiAgICAgIDMwMDogXCIjYTViNGZjXCIsXG4gICAgICA0MDA6IFwiIzgxOGNmOFwiLFxuICAgICAgNTAwOiBcIiM2MzY2ZjFcIixcbiAgICAgIDYwMDogXCIjNGY0NmU1XCIsXG4gICAgICA3MDA6IFwiIzQzMzhjYVwiLFxuICAgICAgODAwOiBcIiMzNzMwYTNcIixcbiAgICAgIDkwMDogXCIjMzEyZTgxXCJcbiAgICB9LFxuICAgIHB1cnBsZToge1xuICAgICAgNTA6IFwiI2Y1ZjNmZlwiLFxuICAgICAgMTAwOiBcIiNlZGU5ZmVcIixcbiAgICAgIDIwMDogXCIjZGRkNmZlXCIsXG4gICAgICAzMDA6IFwiI2M0YjVmZFwiLFxuICAgICAgNDAwOiBcIiNhNzhiZmFcIixcbiAgICAgIDUwMDogXCIjOGI1Y2Y2XCIsXG4gICAgICA2MDA6IFwiIzdjM2FlZFwiLFxuICAgICAgNzAwOiBcIiM2ZDI4ZDlcIixcbiAgICAgIDgwMDogXCIjNWIyMWI2XCIsXG4gICAgICA5MDA6IFwiIzRjMWQ5NVwiXG4gICAgfSxcbiAgICBwaW5rOiB7XG4gICAgICA1MDogXCIjZmRmMmY4XCIsXG4gICAgICAxMDA6IFwiI2ZjZTdmM1wiLFxuICAgICAgMjAwOiBcIiNmYmNmZThcIixcbiAgICAgIDMwMDogXCIjZjlhOGQ0XCIsXG4gICAgICA0MDA6IFwiI2Y0NzJiNlwiLFxuICAgICAgNTAwOiBcIiNlYzQ4OTlcIixcbiAgICAgIDYwMDogXCIjZGIyNzc3XCIsXG4gICAgICA3MDA6IFwiI2JlMTg1ZFwiLFxuICAgICAgODAwOiBcIiM5ZDE3NGRcIixcbiAgICAgIDkwMDogXCIjODMxODQzXCJcbiAgICB9XG4gIH0sXG4gIHNwYWNpbmc6IHtcbiAgICBweDogXCIxcHhcIixcbiAgICAwOiBcIjBweFwiLFxuICAgIC4uLmxpbmVhcig0LCBcInJlbVwiLCA0LCAwLjUsIDAuNSksXG4gICAgLi4ubGluZWFyKDEyLCBcInJlbVwiLCA0LCA1KSxcbiAgICAxNDogXCIzLjVyZW1cIixcbiAgICAuLi5saW5lYXIoNjQsIFwicmVtXCIsIDQsIDE2LCA0KSxcbiAgICA3MjogXCIxOHJlbVwiLFxuICAgIDgwOiBcIjIwcmVtXCIsXG4gICAgOTY6IFwiMjRyZW1cIlxuICB9LFxuICBkdXJhdGlvbnM6IHtcbiAgICA3NTogXCI3NW1zXCIsXG4gICAgMTAwOiBcIjEwMG1zXCIsXG4gICAgMTUwOiBcIjE1MG1zXCIsXG4gICAgMjAwOiBcIjIwMG1zXCIsXG4gICAgMzAwOiBcIjMwMG1zXCIsXG4gICAgNTAwOiBcIjUwMG1zXCIsXG4gICAgNzAwOiBcIjcwMG1zXCIsXG4gICAgMWUzOiBcIjEwMDBtc1wiXG4gIH0sXG4gIGFuaW1hdGlvbjoge1xuICAgIG5vbmU6IFwibm9uZVwiLFxuICAgIHNwaW46IFwic3BpbiAxcyBsaW5lYXIgaW5maW5pdGVcIixcbiAgICBwaW5nOiBcInBpbmcgMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSkgaW5maW5pdGVcIixcbiAgICBwdWxzZTogXCJwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlXCIsXG4gICAgYm91bmNlOiBcImJvdW5jZSAxcyBpbmZpbml0ZVwiXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogYWxpYXMyKFwiY29sb3JzXCIpLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICBub25lOiBcIm5vbmVcIlxuICB9LFxuICBiYWNrZ3JvdW5kT3BhY2l0eTogYWxpYXMyKFwib3BhY2l0eVwiKSxcbiAgYm9yZGVyQ29sb3I6ICh0aGVtZTIpID0+ICh7XG4gICAgLi4udGhlbWUyKFwiY29sb3JzXCIpLFxuICAgIERFRkFVTFQ6IHRoZW1lMihcImNvbG9ycy5ncmF5LjIwMFwiLCBcImN1cnJlbnRDb2xvclwiKVxuICB9KSxcbiAgYm9yZGVyT3BhY2l0eTogYWxpYXMyKFwib3BhY2l0eVwiKSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgbm9uZTogXCIwcHhcIixcbiAgICBzbTogXCIwLjEyNXJlbVwiLFxuICAgIERFRkFVTFQ6IFwiMC4yNXJlbVwiLFxuICAgIG1kOiBcIjAuMzc1cmVtXCIsXG4gICAgbGc6IFwiMC41cmVtXCIsXG4gICAgeGw6IFwiMC43NXJlbVwiLFxuICAgIFwiMnhsXCI6IFwiMXJlbVwiLFxuICAgIFwiM3hsXCI6IFwiMS41cmVtXCIsXG4gICAgZnVsbDogXCI5OTk5cHhcIlxuICB9LFxuICBib3JkZXJXaWR0aDoge1xuICAgIERFRkFVTFQ6IFwiMXB4XCIsXG4gICAgLi4uZXhwb25lbnRpYWwoOCwgXCJweFwiKVxuICB9LFxuICBib3hTaGFkb3c6IHtcbiAgICBzbTogXCIwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpXCIsXG4gICAgREVGQVVMVDogXCIwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNilcIixcbiAgICBtZDogXCIwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNilcIixcbiAgICBsZzogXCIwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgIHhsOiBcIjAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNClcIixcbiAgICBcIjJ4bFwiOiBcIjAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIixcbiAgICBpbm5lcjogXCJpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgbm9uZTogXCJub25lXCJcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgZGl2aWRlQ29sb3I6IGFsaWFzMihcImJvcmRlckNvbG9yXCIpLFxuICBkaXZpZGVPcGFjaXR5OiBhbGlhczIoXCJib3JkZXJPcGFjaXR5XCIpLFxuICBkaXZpZGVXaWR0aDogYWxpYXMyKFwiYm9yZGVyV2lkdGhcIiksXG4gIGZpbGw6IHtjdXJyZW50OiBcImN1cnJlbnRDb2xvclwifSxcbiAgZmxleDoge1xuICAgIDE6IFwiMSAxIDAlXCIsXG4gICAgYXV0bzogXCIxIDEgYXV0b1wiLFxuICAgIGluaXRpYWw6IFwiMCAxIGF1dG9cIixcbiAgICBub25lOiBcIm5vbmVcIlxuICB9LFxuICBmb250RmFtaWx5OiB7XG4gICAgc2FuczogJ3VpLXNhbnMtc2VyaWYsc3lzdGVtLXVpLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCInLnNwbGl0KFwiLFwiKSxcbiAgICBzZXJpZjogJ3VpLXNlcmlmLEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmJy5zcGxpdChcIixcIiksXG4gICAgbW9ubzogJ3VpLW1vbm9zcGFjZSxTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlJy5zcGxpdChcIixcIilcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICB4czogW1wiMC43NXJlbVwiLCBcIjFyZW1cIl0sXG4gICAgc206IFtcIjAuODc1cmVtXCIsIFwiMS4yNXJlbVwiXSxcbiAgICBiYXNlOiBbXCIxcmVtXCIsIFwiMS41cmVtXCJdLFxuICAgIGxnOiBbXCIxLjEyNXJlbVwiLCBcIjEuNzVyZW1cIl0sXG4gICAgeGw6IFtcIjEuMjVyZW1cIiwgXCIxLjc1cmVtXCJdLFxuICAgIFwiMnhsXCI6IFtcIjEuNXJlbVwiLCBcIjJyZW1cIl0sXG4gICAgXCIzeGxcIjogW1wiMS44NzVyZW1cIiwgXCIyLjI1cmVtXCJdLFxuICAgIFwiNHhsXCI6IFtcIjIuMjVyZW1cIiwgXCIyLjVyZW1cIl0sXG4gICAgXCI1eGxcIjogW1wiM3JlbVwiLCBcIjFcIl0sXG4gICAgXCI2eGxcIjogW1wiMy43NXJlbVwiLCBcIjFcIl0sXG4gICAgXCI3eGxcIjogW1wiNC41cmVtXCIsIFwiMVwiXSxcbiAgICBcIjh4bFwiOiBbXCI2cmVtXCIsIFwiMVwiXSxcbiAgICBcIjl4bFwiOiBbXCI4cmVtXCIsIFwiMVwiXVxuICB9LFxuICBmb250V2VpZ2h0OiB7XG4gICAgdGhpbjogXCIxMDBcIixcbiAgICBleHRyYWxpZ2h0OiBcIjIwMFwiLFxuICAgIGxpZ2h0OiBcIjMwMFwiLFxuICAgIG5vcm1hbDogXCI0MDBcIixcbiAgICBtZWRpdW06IFwiNTAwXCIsXG4gICAgc2VtaWJvbGQ6IFwiNjAwXCIsXG4gICAgYm9sZDogXCI3MDBcIixcbiAgICBleHRyYWJvbGQ6IFwiODAwXCIsXG4gICAgYmxhY2s6IFwiOTAwXCJcbiAgfSxcbiAgZ2FwOiBhbGlhczIoXCJzcGFjaW5nXCIpLFxuICBncmFkaWVudENvbG9yU3RvcHM6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgaGVpZ2h0OiAodGhlbWUyKSA9PiAoe1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIiksXG4gICAgLi4ucmF0aW9zKDIsIDYpLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIHNjcmVlbjogXCIxMDB2aFwiXG4gIH0pLFxuICBpbnNldDogKHRoZW1lMikgPT4gKHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIC4uLnJhdGlvcygyLCA0KSxcbiAgICBmdWxsOiBcIjEwMCVcIlxuICB9KSxcbiAga2V5ZnJhbWVzOiB7XG4gICAgc3Bpbjoge1xuICAgICAgZnJvbToge1xuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCJcbiAgICAgIH0sXG4gICAgICB0bzoge1xuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcGluZzoge1xuICAgICAgXCIwJVwiOiB7XG4gICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjFcIlxuICAgICAgfSxcbiAgICAgIFwiNzUlLDEwMCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMilcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1bHNlOiB7XG4gICAgICBcIjAlLDEwMCVcIjoge1xuICAgICAgICBvcGFjaXR5OiBcIjFcIlxuICAgICAgfSxcbiAgICAgIFwiNTAlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogXCIuNVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBib3VuY2U6IHtcbiAgICAgIFwiMCUsIDEwMCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMjUlKVwiLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMC44LDAsMSwxKVwiXG4gICAgICB9LFxuICAgICAgXCI1MCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogXCJjdWJpYy1iZXppZXIoMCwwLDAuMiwxKVwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgdGlnaHRlcjogXCItMC4wNWVtXCIsXG4gICAgdGlnaHQ6IFwiLTAuMDI1ZW1cIixcbiAgICBub3JtYWw6IFwiMGVtXCIsXG4gICAgd2lkZTogXCIwLjAyNWVtXCIsXG4gICAgd2lkZXI6IFwiMC4wNWVtXCIsXG4gICAgd2lkZXN0OiBcIjAuMWVtXCJcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIG5vbmU6IFwiMVwiLFxuICAgIHRpZ2h0OiBcIjEuMjVcIixcbiAgICBzbnVnOiBcIjEuMzc1XCIsXG4gICAgbm9ybWFsOiBcIjEuNVwiLFxuICAgIHJlbGF4ZWQ6IFwiMS42MjVcIixcbiAgICBsb29zZTogXCIyXCIsXG4gICAgLi4ubGluZWFyKDEwLCBcInJlbVwiLCA0LCAzKVxuICB9LFxuICBtYXJnaW46ICh0aGVtZTIpID0+ICh7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKVxuICB9KSxcbiAgbWF4SGVpZ2h0OiAodGhlbWUyKSA9PiAoe1xuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIiksXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgc2NyZWVuOiBcIjEwMHZoXCJcbiAgfSksXG4gIG1heFdpZHRoOiAodGhlbWUyLCB7YnJlYWtwb2ludHN9KSA9PiAoe1xuICAgIG5vbmU6IFwibm9uZVwiLFxuICAgIDA6IFwiMHJlbVwiLFxuICAgIHhzOiBcIjIwcmVtXCIsXG4gICAgc206IFwiMjRyZW1cIixcbiAgICBtZDogXCIyOHJlbVwiLFxuICAgIGxnOiBcIjMycmVtXCIsXG4gICAgeGw6IFwiMzZyZW1cIixcbiAgICBcIjJ4bFwiOiBcIjQycmVtXCIsXG4gICAgXCIzeGxcIjogXCI0OHJlbVwiLFxuICAgIFwiNHhsXCI6IFwiNTZyZW1cIixcbiAgICBcIjV4bFwiOiBcIjY0cmVtXCIsXG4gICAgXCI2eGxcIjogXCI3MnJlbVwiLFxuICAgIFwiN3hsXCI6IFwiODByZW1cIixcbiAgICBmdWxsOiBcIjEwMCVcIixcbiAgICBtaW46IFwibWluLWNvbnRlbnRcIixcbiAgICBtYXg6IFwibWF4LWNvbnRlbnRcIixcbiAgICBwcm9zZTogXCI2NWNoXCIsXG4gICAgLi4uYnJlYWtwb2ludHModGhlbWUyKFwic2NyZWVuc1wiKSlcbiAgfSksXG4gIG1pbkhlaWdodDoge1xuICAgIDA6IFwiMHB4XCIsXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgc2NyZWVuOiBcIjEwMHZoXCJcbiAgfSxcbiAgbWluV2lkdGg6IHtcbiAgICAwOiBcIjBweFwiLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIG1pbjogXCJtaW4tY29udGVudFwiLFxuICAgIG1heDogXCJtYXgtY29udGVudFwiXG4gIH0sXG4gIG9wYWNpdHk6IHtcbiAgICAuLi5saW5lYXIoMTAwLCBcIlwiLCAxMDAsIDAsIDEwKSxcbiAgICA1OiBcIjAuMDVcIixcbiAgICAyNTogXCIwLjI1XCIsXG4gICAgNzU6IFwiMC43NVwiLFxuICAgIDk1OiBcIjAuOTVcIlxuICB9LFxuICBvcmRlcjoge1xuICAgIGZpcnN0OiBcIi05OTk5XCIsXG4gICAgbGFzdDogXCI5OTk5XCIsXG4gICAgbm9uZTogXCIwXCIsXG4gICAgLi4ubGluZWFyKDEyLCBcIlwiLCAxLCAxKVxuICB9LFxuICBvdXRsaW5lOiB7XG4gICAgbm9uZTogW1wiMnB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIFwiMnB4XCJdLFxuICAgIHdoaXRlOiBbXCIycHggZG90dGVkIHdoaXRlXCIsIFwiMnB4XCJdLFxuICAgIGJsYWNrOiBbXCIycHggZG90dGVkIGJsYWNrXCIsIFwiMnB4XCJdXG4gIH0sXG4gIHBhZGRpbmc6IGFsaWFzMihcInNwYWNpbmdcIiksXG4gIHBsYWNlaG9sZGVyQ29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgcGxhY2Vob2xkZXJPcGFjaXR5OiBhbGlhczIoXCJvcGFjaXR5XCIpLFxuICByaW5nQ29sb3I6ICh0aGVtZTIpID0+ICh7XG4gICAgREVGQVVMVDogdGhlbWUyKFwiY29sb3JzLmJsdWUuNTAwXCIsIFwiIzNiODJmNlwiKSxcbiAgICAuLi50aGVtZTIoXCJjb2xvcnNcIilcbiAgfSksXG4gIHJpbmdPZmZzZXRDb2xvcjogYWxpYXMyKFwiY29sb3JzXCIpLFxuICByaW5nT2Zmc2V0V2lkdGg6IGV4cG9uZW50aWFsKDgsIFwicHhcIiksXG4gIHJpbmdPcGFjaXR5OiAodGhlbWUyKSA9PiAoe1xuICAgIERFRkFVTFQ6IFwiMC41XCIsXG4gICAgLi4udGhlbWUyKFwib3BhY2l0eVwiKVxuICB9KSxcbiAgcmluZ1dpZHRoOiB7XG4gICAgREVGQVVMVDogXCIzcHhcIixcbiAgICAuLi5leHBvbmVudGlhbCg4LCBcInB4XCIpXG4gIH0sXG4gIHJvdGF0ZToge1xuICAgIC4uLmV4cG9uZW50aWFsKDIsIFwiZGVnXCIpLFxuICAgIC4uLmV4cG9uZW50aWFsKDEyLCBcImRlZ1wiLCAzKSxcbiAgICAuLi5leHBvbmVudGlhbCgxODAsIFwiZGVnXCIsIDQ1KVxuICB9LFxuICBzY2FsZToge1xuICAgIDA6IFwiMFwiLFxuICAgIDUwOiBcIi41XCIsXG4gICAgNzU6IFwiLjc1XCIsXG4gICAgLi4ubGluZWFyKDExMCwgXCJcIiwgMTAwLCA5MCwgNSksXG4gICAgMTI1OiBcIjEuMjVcIixcbiAgICAxNTA6IFwiMS41XCJcbiAgfSxcbiAgc2tldzoge1xuICAgIC4uLmV4cG9uZW50aWFsKDIsIFwiZGVnXCIpLFxuICAgIC4uLmV4cG9uZW50aWFsKDEyLCBcImRlZ1wiLCAzKVxuICB9LFxuICBzcGFjZTogYWxpYXMyKFwic3BhY2luZ1wiKSxcbiAgc3Ryb2tlOiB7XG4gICAgY3VycmVudDogXCJjdXJyZW50Q29sb3JcIlxuICB9LFxuICBzdHJva2VXaWR0aDogbGluZWFyKDIpLFxuICB0ZXh0Q29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgdGV4dE9wYWNpdHk6IGFsaWFzMihcIm9wYWNpdHlcIiksXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogKHRoZW1lMikgPT4gKHtcbiAgICBERUZBVUxUOiBcIjE1MG1zXCIsXG4gICAgLi4udGhlbWUyKFwiZHVyYXRpb25zXCIpXG4gIH0pLFxuICB0cmFuc2l0aW9uRGVsYXk6IGFsaWFzMihcImR1cmF0aW9uc1wiKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB7XG4gICAgbm9uZTogXCJub25lXCIsXG4gICAgYWxsOiBcImFsbFwiLFxuICAgIERFRkFVTFQ6IFwiYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2Usb3BhY2l0eSxib3gtc2hhZG93LHRyYW5zZm9ybVwiLFxuICAgIGNvbG9yczogXCJiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZVwiLFxuICAgIG9wYWNpdHk6IFwib3BhY2l0eVwiLFxuICAgIHNoYWRvdzogXCJib3gtc2hhZG93XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zZm9ybVwiXG4gIH0sXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjoge1xuICAgIERFRkFVTFQ6IFwiY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKVwiLFxuICAgIGxpbmVhcjogXCJsaW5lYXJcIixcbiAgICBpbjogXCJjdWJpYy1iZXppZXIoMC40LDAsMSwxKVwiLFxuICAgIG91dDogXCJjdWJpYy1iZXppZXIoMCwwLDAuMiwxKVwiLFxuICAgIFwiaW4tb3V0XCI6IFwiY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKVwiXG4gIH0sXG4gIHRyYW5zbGF0ZTogKHRoZW1lMikgPT4gKHtcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIC4uLnJhdGlvcygyLCA0KSxcbiAgICBmdWxsOiBcIjEwMCVcIlxuICB9KSxcbiAgd2lkdGg6ICh0aGVtZTIpID0+ICh7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKSxcbiAgICAuLi5yYXRpb3MoMiwgNiksXG4gICAgLi4ucmF0aW9zKDEyLCAxMiksXG4gICAgc2NyZWVuOiBcIjEwMHZ3XCIsXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgbWluOiBcIm1pbi1jb250ZW50XCIsXG4gICAgbWF4OiBcIm1heC1jb250ZW50XCJcbiAgfSksXG4gIHpJbmRleDoge1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLmxpbmVhcig1MCwgXCJcIiwgMSwgMCwgMTApXG4gIH1cbn07XG52YXIgZmxhdHRlbkNvbG9yUGFsZXR0ZSA9IChjb2xvcnMsIHRhcmdldCA9IHt9LCBwcmVmaXggPSBbXSkgPT4ge1xuICBPYmplY3Qua2V5cyhjb2xvcnMpLmZvckVhY2goKHByb3BlcnR5MikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3Byb3BlcnR5Ml07XG4gICAgaWYgKHByb3BlcnR5MiA9PT0gXCJERUZBVUxUXCIpIHtcbiAgICAgIHRhcmdldFtqb2luKHByZWZpeCldID0gdmFsdWU7XG4gICAgICB0YXJnZXRbam9pbihwcmVmaXgsIFwiLlwiKV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gWy4uLnByZWZpeCwgcHJvcGVydHkyXTtcbiAgICB0YXJnZXRbam9pbihrZXkpXSA9IHZhbHVlO1xuICAgIHRhcmdldFtqb2luKGtleSwgXCIuXCIpXSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgZmxhdHRlbkNvbG9yUGFsZXR0ZSh2YWx1ZSwgdGFyZ2V0LCBrZXkpO1xuICAgIH1cbiAgfSwgdGFyZ2V0KTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgcmVzb2x2ZUNvbnRleHQgPSB7XG4gIG5lZ2F0aXZlOiAoKSA9PiAoe30pLFxuICBicmVha3BvaW50czogKHNjcmVlbnMpID0+IE9iamVjdC5rZXlzKHNjcmVlbnMpLmZpbHRlcigoa2V5KSA9PiB0eXBlb2Ygc2NyZWVuc1trZXldID09IFwic3RyaW5nXCIpLnJlZHVjZSgodGFyZ2V0LCBrZXkpID0+IHtcbiAgICB0YXJnZXRbXCJzY3JlZW4tXCIgKyBrZXldID0gc2NyZWVuc1trZXldO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIHt9KVxufTtcbnZhciBtYWtlVGhlbWVSZXNvbHZlciA9IChjb25maWcpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRoZW1lMiA9IHsuLi5kZWZhdWx0VGhlbWUsIC4uLmNvbmZpZ307XG4gIGNvbnN0IGRlcmVmID0gKHRoZW1lMywgc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGJhc2UgPSB0aGVtZTMgJiYgdGhlbWUzW3NlY3Rpb25dO1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGJhc2UgPT0gXCJmdW5jdGlvblwiID8gYmFzZShyZXNvbHZlLCByZXNvbHZlQ29udGV4dCkgOiBiYXNlO1xuICAgIHJldHVybiB2YWx1ZSAmJiBzZWN0aW9uID09PSBcImNvbG9yc1wiID8gZmxhdHRlbkNvbG9yUGFsZXR0ZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgcmVzb2x2ZSA9IChzZWN0aW9uLCBrZXksIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGtleXBhdGggPSBzZWN0aW9uLnNwbGl0KFwiLlwiKTtcbiAgICBzZWN0aW9uID0ga2V5cGF0aFswXTtcbiAgICBpZiAoa2V5cGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSBrZXk7XG4gICAgICBrZXkgPSBqb2luKHRhaWwoa2V5cGF0aCksIFwiLlwiKTtcbiAgICB9XG4gICAgbGV0IGJhc2UgPSBjYWNoZS5nZXQoc2VjdGlvbik7XG4gICAgaWYgKCFiYXNlKSB7XG4gICAgICBjYWNoZS5zZXQoc2VjdGlvbiwgYmFzZSA9IHtcbiAgICAgICAgLi4uZGVyZWYodGhlbWUyLCBzZWN0aW9uKSxcbiAgICAgICAgLi4uZGVyZWYodGhlbWUyLmV4dGVuZCwgc2VjdGlvbilcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmFzZVsoQXJyYXkuaXNBcnJheShrZXkpID8gam9pbihrZXkpIDoga2V5KSB8fCBcIkRFRkFVTFRcIl07XG4gICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IEFycmF5LmlzQXJyYXkodmFsdWUpICYmICFpbmNsdWRlcyhbXCJmb250U2l6ZVwiLCBcIm91dGxpbmVcIl0sIHNlY3Rpb24pID8gam9pbih2YWx1ZSwgXCIsXCIpIDogdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9O1xuICByZXR1cm4gcmVzb2x2ZTtcbn07XG5cbi8vIHNyYy90d2luZC90cmFuc2xhdGUudHNcbnZhciB0cmFuc2xhdGUgPSAocGx1Z2lucywgY29udGV4dCkgPT4gKHJ1bGUsIGlzVHJhbnNsYXRpbmcpID0+IHtcbiAgaWYgKHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHJ1bGUuZChjb250ZXh0KTtcbiAgfVxuICBjb25zdCBwYXJhbWV0ZXJzID0gcnVsZS5kLnNwbGl0KFwiLVwiKTtcbiAgaWYgKCFpc1RyYW5zbGF0aW5nICYmIHBhcmFtZXRlcnNbMF0gPT09IFwidHdcIiAmJiBydWxlLiQgPT09IHJ1bGUuZCkge1xuICAgIHJldHVybiBydWxlLiQ7XG4gIH1cbiAgZm9yIChsZXQgaW5kZXggPSBwYXJhbWV0ZXJzLmxlbmd0aDsgaW5kZXg7IGluZGV4LS0pIHtcbiAgICBjb25zdCBpZCA9IGpvaW4ocGFyYW1ldGVycy5zbGljZSgwLCBpbmRleCkpO1xuICAgIGNvbnN0IHBsdWdpbiA9IHBsdWdpbnNbaWRdO1xuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcGx1Z2luID09IFwiZnVuY3Rpb25cIiA/IHBsdWdpbih0YWlsKHBhcmFtZXRlcnMsIGluZGV4KSwgY29udGV4dCwgaWQpIDogdHlwZW9mIHBsdWdpbiA9PSBcInN0cmluZ1wiID8gY29udGV4dFtpc1RyYW5zbGF0aW5nID8gXCJjc3NcIiA6IFwidHdcIl0ocGx1Z2luKSA6IHBsdWdpbjtcbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy90d2luZC9kZWNvcmF0ZS50c1xudmFyIF8yO1xudmFyIEdST1VQX1JFID0gL146KGdyb3VwKD86KD8hLWZvY3VzKS4rPykqKS0oLispJC87XG52YXIgZGVjb3JhdGUgPSAoZGFya01vZGUsIHZhcmlhbnRzLCB7dGhlbWU6IHRoZW1lMiwgdGFnfSkgPT4ge1xuICBjb25zdCBhcHBseVZhcmlhbnQgPSAodHJhbnNsYXRpb24sIHZhcmlhbnQpID0+IHtcbiAgICBpZiAoXzIgPSB0aGVtZTIoXCJzY3JlZW5zXCIsIHRhaWwodmFyaWFudCksIFwiXCIpKSB7XG4gICAgICByZXR1cm4ge1tidWlsZE1lZGlhUXVlcnkoXzIpXTogdHJhbnNsYXRpb259O1xuICAgIH1cbiAgICBpZiAodmFyaWFudCA9PT0gXCI6ZGFya1wiICYmIGRhcmtNb2RlID09PSBcImNsYXNzXCIpIHtcbiAgICAgIHJldHVybiB7W2AuZGFyayAmYF06IHRyYW5zbGF0aW9ufTtcbiAgICB9XG4gICAgaWYgKF8yID0gR1JPVVBfUkUuZXhlYyh2YXJpYW50KSkge1xuICAgICAgcmV0dXJuIHtbYC4ke2VzY2FwZSh0YWcoXzJbMV0pKX06JHtfMlsyXX0gJmBdOiB0cmFuc2xhdGlvbn07XG4gICAgfVxuICAgIHJldHVybiB7W3ZhcmlhbnRzW3RhaWwodmFyaWFudCldIHx8IFwiJlwiICsgdmFyaWFudF06IHRyYW5zbGF0aW9ufTtcbiAgfTtcbiAgcmV0dXJuICh0cmFuc2xhdGlvbiwgcnVsZSkgPT4gcnVsZS52LnJlZHVjZVJpZ2h0KGFwcGx5VmFyaWFudCwgdHJhbnNsYXRpb24pO1xufTtcblxuLy8gc3JjL3R3aW5kL3ByZXNlZGVuY2UudHNcbnZhciBfMztcbnZhciByZXNwb25zaXZlUHJlY2VkZW5jZSA9IChjc3MpID0+ICgoKF8zID0gLyg/Ol58bWluLXdpZHRoOiAqKShcXGQrKD86LlxcZCspPykocCk/Ly5leGVjKGNzcykpID8gK18zWzFdIC8gKF8zWzJdID8gMTUgOiAxKSAvIDEwIDogMCkgJiAzMSkgPDwgMjI7XG52YXIgc2VwZXJhdG9yUHJlY2VkZW5jZSA9IChzdHJpbmcpID0+IHtcbiAgXzMgPSAwO1xuICBmb3IgKGxldCBpbmRleCA9IHN0cmluZy5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgIF8zICs9IGluY2x1ZGVzKFwiLTosXCIsIHN0cmluZ1tpbmRleF0pO1xuICB9XG4gIHJldHVybiBfMztcbn07XG52YXIgYXRSdWxlUHJlc2VkZW5jZSA9IChjc3MpID0+IChzZXBlcmF0b3JQcmVjZWRlbmNlKGNzcykgJiAxNSkgPDwgMTg7XG52YXIgUFJFQ0VERU5DRVNfQllfUFNFVURPX0NMQVNTID0gW1xuICBcInJzdFwiLFxuICBcInN0XCIsXG4gIFwiZW5cIixcbiAgXCJkXCIsXG4gIFwibmtcIixcbiAgXCJzaXRlZFwiLFxuICBcInB0eVwiLFxuICBcImVja2VkXCIsXG4gIFwiY3VzLXdcIixcbiAgXCJ2ZXJcIixcbiAgXCJjdXNcIixcbiAgXCJjdXMtdlwiLFxuICBcInRpdmVcIixcbiAgXCJzYWJsZVwiLFxuICBcImFkLW9uXCIsXG4gIFwidGlvbmFcIixcbiAgXCJxdWlyZVwiXG5dO1xudmFyIHBzZXVkb1ByZWNlZGVuY2UgPSAocHNldWRvQ2xhc3MpID0+IDEgPDwgKH4oXzMgPSBQUkVDRURFTkNFU19CWV9QU0VVRE9fQ0xBU1MuaW5kZXhPZihwc2V1ZG9DbGFzcy5yZXBsYWNlKEdST1VQX1JFLCBcIjokMlwiKS5zbGljZSgzLCA4KSkpID8gXzMgOiAxNyk7XG52YXIgbWFrZVZhcmlhbnRQcmVzZWRlbmNlQ2FsY3VsYXRvciA9ICh0aGVtZTIsIHZhcmlhbnRzKSA9PiAocHJlc2VkZW5jZSwgdmFyaWFudCkgPT4gcHJlc2VkZW5jZSB8ICgoXzMgPSB0aGVtZTIoXCJzY3JlZW5zXCIsIHRhaWwodmFyaWFudCksIFwiXCIpKSA/IDEgPDwgMjcgfCByZXNwb25zaXZlUHJlY2VkZW5jZShidWlsZE1lZGlhUXVlcnkoXzMpKSA6IHZhcmlhbnQgPT09IFwiOmRhcmtcIiA/IDEgPDwgMzAgOiAoXzMgPSB2YXJpYW50c1t2YXJpYW50XSB8fCB2YXJpYW50KVswXSA9PT0gXCJAXCIgPyBhdFJ1bGVQcmVzZWRlbmNlKF8zKSA6IHBzZXVkb1ByZWNlZGVuY2UodmFyaWFudCkpO1xudmFyIGRlY2xhcmF0aW9uUHJvcGVydHlQcmVjZWRlbmNlID0gKHByb3BlcnR5MikgPT4gcHJvcGVydHkyWzBdID09PSBcIi1cIiA/IDAgOiBzZXBlcmF0b3JQcmVjZWRlbmNlKHByb3BlcnR5MikgKyAoKF8zID0gL14oPzooYm9yZGVyLSg/IXd8Y3xzdHkpfFt0bGJyXS57Miw0fW0/JHxjLns3fSQpfChbZmxdLns1fWx8Zy57OH0kfHBsKSkvLmV4ZWMocHJvcGVydHkyKSkgPyArISFfM1sxXSB8fCAtISFfM1syXSA6IDApICsgMTtcblxuLy8gc3JjL3R3aW5kL3NlcmlhbGl6ZS50c1xudmFyIHN0cmluZ2lmeUJsb2NrID0gKGJvZHksIHNlbGVjdG9yKSA9PiBzZWxlY3RvciArIFwie1wiICsgYm9keSArIFwifVwiO1xudmFyIExheWVyO1xuKGZ1bmN0aW9uKExheWVyMikge1xuICBMYXllcjJbTGF5ZXIyW1wiYmFzZVwiXSA9IDBdID0gXCJiYXNlXCI7XG4gIExheWVyMltMYXllcjJbXCJjb21wb25lbnRzXCJdID0gMV0gPSBcImNvbXBvbmVudHNcIjtcbiAgTGF5ZXIyW0xheWVyMltcInV0aWxpdGllc1wiXSA9IDJdID0gXCJ1dGlsaXRpZXNcIjtcbiAgTGF5ZXIyW0xheWVyMltcImNzc1wiXSA9IDNdID0gXCJjc3NcIjtcbn0pKExheWVyIHx8IChMYXllciA9IHt9KSk7XG52YXIgc2VyaWFsaXplID0gKHByZWZpeCwgdmFyaWFudHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qge3RoZW1lOiB0aGVtZTIsIHRhZ30gPSBjb250ZXh0O1xuICBjb25zdCB0YWdWYXIgPSAoXzQsIHByb3BlcnR5MikgPT4gXCItLVwiICsgdGFnKHByb3BlcnR5Mik7XG4gIGNvbnN0IHRhZ1ZhcnMgPSAodmFsdWUpID0+IGAke3ZhbHVlfWAucmVwbGFjZSgvLS0odHctW1xcdy1dKylcXGIvZywgdGFnVmFyKTtcbiAgY29uc3Qgc3RyaW5naWZ5RGVjbGFyYXRpb24gPSAocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KSA9PiB7XG4gICAgcHJvcGVydHkyID0gdGFnVmFycyhwcm9wZXJ0eTIpO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IGpvaW4odmFsdWUuZmlsdGVyKEJvb2xlYW4pLm1hcCgodmFsdWUyKSA9PiBwcmVmaXgocHJvcGVydHkyLCB0YWdWYXJzKHZhbHVlMiksIGltcG9ydGFudCkpLCBcIjtcIikgOiBwcmVmaXgocHJvcGVydHkyLCB0YWdWYXJzKHZhbHVlKSwgaW1wb3J0YW50KTtcbiAgfTtcbiAgbGV0IHJ1bGVzMjtcbiAgY29uc3Qgc3RyaW5naWZ5MyA9IChhdFJ1bGVzLCBzZWxlY3RvciwgcHJlc2VkZW5jZSwgY3NzLCBpbXBvcnRhbnQpID0+IHtcbiAgICBsZXQgZGVjbGFyYXRpb25zID0gXCJcIjtcbiAgICBsZXQgbWF4UHJvcGVydHlQcmVzZWRlbmNlID0gMDtcbiAgICBsZXQgbnVtYmVyT2ZEZWNsYXJhdGlvbnMgPSAwO1xuICAgIGlmIChcIkBhcHBseVwiIGluIGNzcykge1xuICAgICAgY3NzID0gbWVyZ2UoZXZhbFRodW5rKGFwcGx5KGNzc1tcIkBhcHBseVwiXSksIGNvbnRleHQpLCB7Li4uY3NzLCBcIkBhcHBseVwiOiB2b2lkIDB9LCBjb250ZXh0KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoY3NzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZhbFRodW5rKGNzc1trZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChpbmNsdWRlcyhcInJnXCIsICh0eXBlb2YgdmFsdWUpWzVdKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IFwiXCIgJiYga2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eTIgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgICAgICBudW1iZXJPZkRlY2xhcmF0aW9ucyArPSAxO1xuICAgICAgICAgIG1heFByb3BlcnR5UHJlc2VkZW5jZSA9IE1hdGgubWF4KG1heFByb3BlcnR5UHJlc2VkZW5jZSwgZGVjbGFyYXRpb25Qcm9wZXJ0eVByZWNlZGVuY2UocHJvcGVydHkyKSk7XG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gKGRlY2xhcmF0aW9ucyAmJiBkZWNsYXJhdGlvbnMgKyBcIjtcIikgKyBzdHJpbmdpZnlEZWNsYXJhdGlvbihwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmIChrZXlbMF0gPT09IFwiQFwiKSB7XG4gICAgICAgICAgaWYgKGtleVsxXSA9PT0gXCJmXCIpIHtcbiAgICAgICAgICAgIHN0cmluZ2lmeTMoW10sIGtleSwgMCwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXlbMV0gPT09IFwia1wiKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2l6ZSA9IHJ1bGVzMi5sZW5ndGg7XG4gICAgICAgICAgICBzdHJpbmdpZnkzKFtdLCBcIlwiLCAwLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgICAgIGNvbnN0IHdheXBvaW50cyA9IHJ1bGVzMi5zcGxpY2UoY3VycmVudFNpemUsIHJ1bGVzMi5sZW5ndGggLSBjdXJyZW50U2l6ZSk7XG4gICAgICAgICAgICBydWxlczIucHVzaCh7XG4gICAgICAgICAgICAgIHI6IHN0cmluZ2lmeUJsb2NrKGpvaW4od2F5cG9pbnRzLm1hcCgocCkgPT4gcC5yKSwgXCJcIiksIGtleSksXG4gICAgICAgICAgICAgIHA6IHdheXBvaW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5wLCAwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoMSwgOCkgPT0gXCJzY3JlZW4gXCIpIHtcbiAgICAgICAgICAgICAga2V5ID0gYnVpbGRNZWRpYVF1ZXJ5KGNvbnRleHQudGhlbWUoXCJzY3JlZW5zXCIsIHRhaWwoa2V5LCA4KS50cmltKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZ2lmeTMoWy4uLmF0UnVsZXMsIGtleV0sIHNlbGVjdG9yLCBwcmVzZWRlbmNlIHwgcmVzcG9uc2l2ZVByZWNlZGVuY2Uoa2V5KSB8IGF0UnVsZVByZXNlZGVuY2Uoa2V5KSwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCI6Z2xvYmFsXCIpIHtcbiAgICAgICAgICBzdHJpbmdpZnkzKFtdLCBcIlwiLCAwLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmdpZnkzKGF0UnVsZXMsIHNlbGVjdG9yID8gc2VsZWN0b3IucmVwbGFjZSgvKFteLF0pKy9nLCAoc2VsZWN0b3JQYXJ0KSA9PiBrZXkucmVwbGFjZSgvKFteLF0pKy9nLCAoa2V5UGFydCkgPT4gaW5jbHVkZXMoa2V5UGFydCwgXCImXCIpID8ga2V5UGFydC5yZXBsYWNlKC8mL2csIHNlbGVjdG9yUGFydCkgOiAoc2VsZWN0b3JQYXJ0ICYmIHNlbGVjdG9yUGFydCArIFwiIFwiKSArIGtleVBhcnQpKSA6IGtleSwgcHJlc2VkZW5jZSwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobnVtYmVyT2ZEZWNsYXJhdGlvbnMpIHtcbiAgICAgIHJ1bGVzMi5wdXNoKHtcbiAgICAgICAgcjogYXRSdWxlcy5yZWR1Y2VSaWdodChzdHJpbmdpZnlCbG9jaywgc3RyaW5naWZ5QmxvY2soZGVjbGFyYXRpb25zLCBzZWxlY3RvcikpLFxuICAgICAgICBwOiBwcmVzZWRlbmNlICogKDEgPDwgOCkgKyAoKE1hdGgubWF4KDAsIDE1IC0gbnVtYmVyT2ZEZWNsYXJhdGlvbnMpICYgMTUpIDw8IDQgfCAobWF4UHJvcGVydHlQcmVzZWRlbmNlIHx8IDE1KSAmIDE1KVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB2YXJpYW50UHJlc2VkZW5jZSA9IG1ha2VWYXJpYW50UHJlc2VkZW5jZUNhbGN1bGF0b3IodGhlbWUyLCB2YXJpYW50cyk7XG4gIHJldHVybiAoY3NzLCBjbGFzc05hbWUsIHJ1bGUsIGxheWVyID0gMCkgPT4ge1xuICAgIGxheWVyIDw8PSAyODtcbiAgICBydWxlczIgPSBbXTtcbiAgICBzdHJpbmdpZnkzKFtdLCBjbGFzc05hbWUgPyBcIi5cIiArIGVzY2FwZShjbGFzc05hbWUpIDogXCJcIiwgcnVsZSA/IHJ1bGUudi5yZWR1Y2VSaWdodCh2YXJpYW50UHJlc2VkZW5jZSwgbGF5ZXIpIDogbGF5ZXIsIGNzcywgcnVsZSAmJiBydWxlLmkpO1xuICAgIHJldHVybiBydWxlczI7XG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvaW5qZWN0LnRzXG52YXIgaW5qZWN0ID0gKHNoZWV0LCBtb2RlMiwgaW5pdCwgY29udGV4dCkgPT4ge1xuICBsZXQgc29ydGVkUHJlY2VkZW5jZXM7XG4gIGluaXQoKHZhbHVlID0gW10pID0+IHNvcnRlZFByZWNlZGVuY2VzID0gdmFsdWUpO1xuICBsZXQgaW5zZXJ0ZWRSdWxlcztcbiAgaW5pdCgodmFsdWUgPSBuZXcgU2V0KCkpID0+IGluc2VydGVkUnVsZXMgPSB2YWx1ZSk7XG4gIHJldHVybiAoe3I6IGNzcywgcDogcHJlc2VkZW5jZX0pID0+IHtcbiAgICBpZiAoIWluc2VydGVkUnVsZXMuaGFzKGNzcykpIHtcbiAgICAgIGluc2VydGVkUnVsZXMuYWRkKGNzcyk7XG4gICAgICBjb25zdCBpbmRleCA9IHNvcnRlZEluc2VydGlvbkluZGV4KHNvcnRlZFByZWNlZGVuY2VzLCBwcmVzZWRlbmNlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydChjc3MsIGluZGV4KTtcbiAgICAgICAgc29ydGVkUHJlY2VkZW5jZXMuc3BsaWNlKGluZGV4LCAwLCBwcmVzZWRlbmNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghLzotW213b10vLnRlc3QoY3NzKSkge1xuICAgICAgICAgIG1vZGUyLnJlcG9ydCh7aWQ6IFwiSU5KRUNUX0NTU19FUlJPUlwiLCBjc3MsIGVycm9yfSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvY29uZmlndXJlLnRzXG52YXIgc2FuaXRpemUgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQsIGVuYWJsZWQgPSBkZWZhdWx0VmFsdWUpID0+IHZhbHVlID09PSBmYWxzZSA/IGRpc2FibGVkIDogdmFsdWUgPT09IHRydWUgPyBlbmFibGVkIDogdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xudmFyIGxvYWRNb2RlID0gKG1vZGUyKSA9PiAodHlwZW9mIG1vZGUyID09IFwic3RyaW5nXCIgPyB7dDogc3RyaWN0LCBhOiB3YXJuLCBpOiBzaWxlbnR9W21vZGUyWzFdXSA6IG1vZGUyKSB8fCB3YXJuO1xudmFyIHN0cmluZ2lmeVZhcmlhbnQgPSAoc2VsZWN0b3IsIHZhcmlhbnQpID0+IHNlbGVjdG9yICsgKHZhcmlhbnRbMV0gPT09IFwiOlwiID8gdGFpbCh2YXJpYW50LCAyKSArIFwiOlwiIDogdGFpbCh2YXJpYW50KSkgKyBcIjpcIjtcbnZhciBzdHJpbmdpZnkyID0gKHJ1bGUsIGRpcmVjdGl2ZTIgPSBydWxlLmQpID0+IHR5cGVvZiBkaXJlY3RpdmUyID09IFwiZnVuY3Rpb25cIiA/IFwiXCIgOiBydWxlLnYucmVkdWNlKHN0cmluZ2lmeVZhcmlhbnQsIFwiXCIpICsgKHJ1bGUubiA/IFwiLVwiIDogXCJcIikgKyBkaXJlY3RpdmUyICsgKHJ1bGUuaSA/IFwiIVwiIDogXCJcIik7XG52YXIgQ09NUE9ORU5UX1BST1BTID0ge186IHt2YWx1ZTogXCJcIiwgd3JpdGFibGU6IHRydWV9fTtcbnZhciBjb25maWd1cmUgPSAoY29uZmlnID0ge30pID0+IHtcbiAgY29uc3QgdGhlbWUyID0gbWFrZVRoZW1lUmVzb2x2ZXIoY29uZmlnLnRoZW1lKTtcbiAgY29uc3QgbW9kZTIgPSBsb2FkTW9kZShjb25maWcubW9kZSk7XG4gIGNvbnN0IGhhc2ggPSBzYW5pdGl6ZShjb25maWcuaGFzaCwgZmFsc2UsIGZhbHNlLCBjeXJiMzIpO1xuICBsZXQgYWN0aXZlUnVsZSA9IHt2OiBbXX07XG4gIGxldCB0cmFuc2xhdGVEZXB0aCA9IDA7XG4gIGNvbnN0IGxhc3RUcmFuc2xhdGlvbnMgPSBbXTtcbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICB0dzogKC4uLnRva2VucykgPT4gcHJvY2Vzcyh0b2tlbnMpLFxuICAgIHRoZW1lOiAoc2VjdGlvbiwga2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICAgIGlmIChrZXkgIT0gbnVsbCAmJiAha2V5Lmxlbmd0aCkge1xuICAgICAgICBrZXkgPSBcIkRFRkFVTFRcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gdGhlbWUyKHNlY3Rpb24sIGtleSwgZGVmYXVsdFZhbHVlKSB8fCBtb2RlMi51bmtub3duKHNlY3Rpb24sIGtleSA9PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleSA6IGtleS5zcGxpdChcIi5cIiksIGRlZmF1bHRWYWx1ZSAhPSBudWxsLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiBhY3RpdmVSdWxlLm4gJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyBgY2FsYygke3ZhbHVlfSAqIC0xKWAgOiB2YWx1ZTtcbiAgICB9LFxuICAgIHRhZzogKHZhbHVlKSA9PiBoYXNoID8gaGFzaCh2YWx1ZSkgOiB2YWx1ZSxcbiAgICBjc3M6IChydWxlczIpID0+IHtcbiAgICAgIHRyYW5zbGF0ZURlcHRoKys7XG4gICAgICBjb25zdCBsYXN0VHJhbnNsYXRpb25zSW5kZXggPSBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aDtcbiAgICAgIHRyeSB7XG4gICAgICAgIDtcbiAgICAgICAgKHR5cGVvZiBydWxlczIgPT0gXCJzdHJpbmdcIiA/IHBhcnNlKFtydWxlczJdKSA6IHJ1bGVzMikuZm9yRWFjaChjb252ZXJ0KTtcbiAgICAgICAgY29uc3QgY3NzID0gT2JqZWN0LmNyZWF0ZShudWxsLCBDT01QT05FTlRfUFJPUFMpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RUcmFuc2xhdGlvbnNJbmRleDsgaW5kZXggPCBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbGFzdFRyYW5zbGF0aW9uc1tpbmRleF07XG4gICAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0cmFuc2xhdGlvbikge1xuICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgbWVyZ2UoY3NzLCB0cmFuc2xhdGlvbiwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjc3MuXyArPSAoY3NzLl8gJiYgXCIgXCIpICsgdHJhbnNsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBsYXN0VHJhbnNsYXRpb25zLmxlbmd0aCA9IGxhc3RUcmFuc2xhdGlvbnNJbmRleDtcbiAgICAgICAgdHJhbnNsYXRlRGVwdGgtLTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHRyYW5zbGF0ZTIgPSB0cmFuc2xhdGUoey4uLmNvcmVQbHVnaW5zLCAuLi5jb25maWcucGx1Z2luc30sIGNvbnRleHQpO1xuICBjb25zdCBkb1RyYW5zbGF0ZSA9IChydWxlKSA9PiB7XG4gICAgY29uc3QgcGFyZW50UnVsZSA9IGFjdGl2ZVJ1bGU7XG4gICAgYWN0aXZlUnVsZSA9IHJ1bGU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBldmFsVGh1bmsodHJhbnNsYXRlMihydWxlKSwgY29udGV4dCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGFjdGl2ZVJ1bGUgPSBwYXJlbnRSdWxlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdmFyaWFudHMgPSB7Li4uY29yZVZhcmlhbnRzLCAuLi5jb25maWcudmFyaWFudHN9O1xuICBjb25zdCBkZWNvcmF0ZTIgPSBkZWNvcmF0ZShjb25maWcuZGFya01vZGUgfHwgXCJtZWRpYVwiLCB2YXJpYW50cywgY29udGV4dCk7XG4gIGNvbnN0IHNlcmlhbGl6ZTIgPSBzZXJpYWxpemUoc2FuaXRpemUoY29uZmlnLnByZWZpeCwgYXV0b3ByZWZpeCwgbm9wcmVmaXgpLCB2YXJpYW50cywgY29udGV4dCk7XG4gIGNvbnN0IHNoZWV0ID0gY29uZmlnLnNoZWV0IHx8ICh0eXBlb2Ygd2luZG93ID09IFwidW5kZWZpbmVkXCIgPyB2b2lkU2hlZXQoKSA6IGNzc29tU2hlZXQoY29uZmlnKSk7XG4gIGNvbnN0IHtpbml0ID0gKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpfSA9IHNoZWV0O1xuICBjb25zdCBpbmplY3QyID0gaW5qZWN0KHNoZWV0LCBtb2RlMiwgaW5pdCwgY29udGV4dCk7XG4gIGxldCBpZFRvQ2xhc3NOYW1lO1xuICBpbml0KCh2YWx1ZSA9IG5ldyBNYXAoKSkgPT4gaWRUb0NsYXNzTmFtZSA9IHZhbHVlKTtcbiAgY29uc3QgaW5saW5lRGlyZWN0aXZlTmFtZSA9IG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IGV2YWx1YXRlRnVuY3Rpb25zID0gKGtleSwgdmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZShjb250ZXh0KSwgZXZhbHVhdGVGdW5jdGlvbnMpIDogdmFsdWU7XG4gIGNvbnN0IGNvbnZlcnQgPSAocnVsZSkgPT4ge1xuICAgIGlmICghdHJhbnNsYXRlRGVwdGggJiYgYWN0aXZlUnVsZS52Lmxlbmd0aCkge1xuICAgICAgcnVsZSA9IHsuLi5ydWxlLCB2OiBbLi4uYWN0aXZlUnVsZS52LCAuLi5ydWxlLnZdLCAkOiBcIlwifTtcbiAgICB9XG4gICAgaWYgKCFydWxlLiQpIHtcbiAgICAgIHJ1bGUuJCA9IHN0cmluZ2lmeTIocnVsZSwgaW5saW5lRGlyZWN0aXZlTmFtZS5nZXQocnVsZS5kKSk7XG4gICAgfVxuICAgIGxldCBjbGFzc05hbWUgPSB0cmFuc2xhdGVEZXB0aCA/IG51bGwgOiBpZFRvQ2xhc3NOYW1lLmdldChydWxlLiQpO1xuICAgIGlmIChjbGFzc05hbWUgPT0gbnVsbCkge1xuICAgICAgbGV0IHRyYW5zbGF0aW9uID0gZG9UcmFuc2xhdGUocnVsZSk7XG4gICAgICBpZiAoIXJ1bGUuJCkge1xuICAgICAgICBydWxlLiQgPSBjeXJiMzIoSlNPTi5zdHJpbmdpZnkodHJhbnNsYXRpb24sIGV2YWx1YXRlRnVuY3Rpb25zKSk7XG4gICAgICAgIGlubGluZURpcmVjdGl2ZU5hbWUuc2V0KHJ1bGUuZCwgcnVsZS4kKTtcbiAgICAgICAgcnVsZS4kID0gc3RyaW5naWZ5MihydWxlLCBydWxlLiQpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0aW9uICYmIHR5cGVvZiB0cmFuc2xhdGlvbiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRyYW5zbGF0aW9uID0gZGVjb3JhdGUyKHRyYW5zbGF0aW9uLCBydWxlKTtcbiAgICAgICAgaWYgKHRyYW5zbGF0ZURlcHRoKSB7XG4gICAgICAgICAgbGFzdFRyYW5zbGF0aW9ucy5wdXNoKHRyYW5zbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsYXllciA9IHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiID8gdHlwZW9mIHRyYW5zbGF0aW9uLl8gPT0gXCJzdHJpbmdcIiA/IDEgOiAzIDogMjtcbiAgICAgICAgICBjbGFzc05hbWUgPSBoYXNoIHx8IHR5cGVvZiBydWxlLmQgPT0gXCJmdW5jdGlvblwiID8gKGhhc2ggfHwgY3lyYjMyKShsYXllciArIHJ1bGUuJCkgOiBydWxlLiQ7XG4gICAgICAgICAgc2VyaWFsaXplMih0cmFuc2xhdGlvbiwgY2xhc3NOYW1lLCBydWxlLCBsYXllcikuZm9yRWFjaChpbmplY3QyKTtcbiAgICAgICAgICBpZiAodHJhbnNsYXRpb24uXykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgdHJhbnNsYXRpb24uXztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNsYXRpb24gPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHRyYW5zbGF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHJ1bGUuJDtcbiAgICAgICAgICBtb2RlMi5yZXBvcnQoe2lkOiBcIlVOS05PV05fRElSRUNUSVZFXCIsIHJ1bGU6IGNsYXNzTmFtZX0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2xhdGVEZXB0aCAmJiB0eXBlb2YgcnVsZS5kICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsYXN0VHJhbnNsYXRpb25zLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVEZXB0aCkge1xuICAgICAgICBpZFRvQ2xhc3NOYW1lLnNldChydWxlLiQsIGNsYXNzTmFtZSk7XG4gICAgICAgIGVuc3VyZU1heFNpemUoaWRUb0NsYXNzTmFtZSwgM2U0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfTtcbiAgY29uc3QgcHJvY2VzcyA9ICh0b2tlbnMpID0+IHBhcnNlKHRva2VucykubWFwKGNvbnZlcnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgY29uc3QgcHJlZmxpZ2h0ID0gc2FuaXRpemUoY29uZmlnLnByZWZsaWdodCwgaWRlbnRpdHksIGZhbHNlKTtcbiAgaWYgKHByZWZsaWdodCkge1xuICAgIGNvbnN0IGNzcyA9IGNyZWF0ZVByZWZsaWdodCh0aGVtZTIpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHNlcmlhbGl6ZTIodHlwZW9mIHByZWZsaWdodCA9PSBcImZ1bmN0aW9uXCIgPyBldmFsVGh1bmsocHJlZmxpZ2h0KGNzcywgY29udGV4dCksIGNvbnRleHQpIHx8IGNzcyA6IHsuLi5jc3MsIC4uLnByZWZsaWdodH0pO1xuICAgIGluaXQoKGluamVjdGVkID0gKHN0eWxlcy5mb3JFYWNoKGluamVjdDIpLCB0cnVlKSkgPT4gaW5qZWN0ZWQpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaW5pdDogKCkgPT4gbW9kZTIucmVwb3J0KHtpZDogXCJMQVRFX1NFVFVQX0NBTExcIn0sIGNvbnRleHQpLFxuICAgIHByb2Nlc3NcbiAgfTtcbn07XG5cbi8vIHNyYy90d2luZC9pbnN0YW5jZS50c1xudmFyIGNyZWF0ZSA9IChjb25maWcpID0+IHtcbiAgbGV0IHByb2Nlc3MgPSAodG9rZW5zKSA9PiB7XG4gICAgaW5pdCgpO1xuICAgIHJldHVybiBwcm9jZXNzKHRva2Vucyk7XG4gIH07XG4gIGxldCBpbml0ID0gKGNvbmZpZzIpID0+IHtcbiAgICA7XG4gICAgKHtwcm9jZXNzLCBpbml0fSA9IGNvbmZpZ3VyZShjb25maWcyKSk7XG4gIH07XG4gIGlmIChjb25maWcpXG4gICAgaW5pdChjb25maWcpO1xuICBsZXQgY29udGV4dDtcbiAgY29uc3QgZnJvbUNvbnRleHQgPSAoa2V5KSA9PiAoKSA9PiB7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBwcm9jZXNzKFtcbiAgICAgICAgKF80KSA9PiB7XG4gICAgICAgICAgY29udGV4dCA9IF80O1xuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRba2V5XTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0dzogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKC4uLnRva2VucykgPT4gcHJvY2Vzcyh0b2tlbnMpLCB7XG4gICAgICB0aGVtZToge1xuICAgICAgICBnZXQ6IGZyb21Db250ZXh0KFwidGhlbWVcIilcbiAgICAgIH1cbiAgICB9KSxcbiAgICBzZXR1cDogKGNvbmZpZzIpID0+IGluaXQoY29uZmlnMilcbiAgfTtcbn07XG5cbi8vIHNyYy90d2luZC9kZWZhdWx0LnRzXG52YXIge3R3LCBzZXR1cH0gPSBjcmVhdGUoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3aW5kLmNqcy5tYXBcbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXInO1xuXG5pbXBvcnQgeyBzZXR1cCB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCB0d2luZENvbmZpZyBmcm9tICcuLi90d2luZC5jb25maWcnO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gYHVuZGVmaW5lZGApIHtcbiAgc2V0dXAodHdpbmRDb25maWcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0aGVtZToge1xuICAgIGV4dGVuZDoge1xuICAgICAgZm9udEZhbWlseToge1xuICAgICAgICBzYW5zOiBgSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSxcbiAgICAgICAgICAgIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsXG4gICAgICAgICAgICBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCJgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZS12ZW5kb3JpemVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=