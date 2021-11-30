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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/twind/css/css.cjs":
/*!****************************************!*\
  !*** ./node_modules/twind/css/css.cjs ***!
  \****************************************/
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

// src/css/index.ts
__markAsModule(exports);
__export(exports, {
  animation: () => animation,
  apply: () => import__2.apply,
  css: () => css,
  keyframes: () => keyframes,
  screen: () => screen,
  setup: () => import__2.setup,
  theme: () => import__2.theme,
  tw: () => import__2.tw
});
var import__ = __toModule(__webpack_require__(/*! ../twind.cjs */ "./node_modules/twind/twind.cjs"));

// src/internal/util.ts
var join = (parts, separator = "-") => parts.join(separator);
var tail = (array, startIndex = 1) => array.slice(startIndex);
var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context) => {
  while (typeof value == "function") {
    value = value(context);
  }
  return value;
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
var buildMediaQuery = (screen2) => {
  if (!Array.isArray(screen2)) {
    screen2 = [screen2];
  }
  return "@media " + join(screen2.map((screen3) => {
    if (typeof screen3 == "string") {
      screen3 = {min: screen3};
    }
    return screen3.raw || join(Object.keys(screen3).map((feature) => `(${feature}-width:${screen3[feature]})`), " and ");
  }), ",");
};

// src/css/index.ts
var import__2 = __toModule(__webpack_require__(/*! ../twind.cjs */ "./node_modules/twind/twind.cjs"));
var translate = (tokens, context) => {
  const collect = (target, token) => Array.isArray(token) ? token.reduce(collect, target) : merge(target, evalThunk(token, context), context);
  return tokens.reduce(collect, {});
};
var newRule = /\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi;
var ruleClean = /\/\*[\s\S]*?\*\/|\s+|\n/gm;
var decorate = (selectors, currentBlock) => selectors.reduceRight((rules, selector) => ({[selector]: rules}), currentBlock);
var saveBlock = (rules, selectors, currentBlock) => {
  if (currentBlock) {
    rules.push(decorate(selectors, currentBlock));
  }
};
var interleave = (strings, interpolations, context) => {
  let buffer = strings[0];
  const result = [];
  for (let index = 0; index < interpolations.length; ) {
    const interpolation = evalThunk(interpolations[index], context);
    if (interpolation && typeof interpolation == "object") {
      result.push(buffer, interpolation);
      buffer = strings[++index];
    } else {
      buffer += (interpolation || "") + strings[++index];
    }
  }
  result.push(buffer);
  return result;
};
var astish = (values, context) => {
  const selectors = [];
  const rules = [];
  let currentBlock;
  let match;
  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    if (typeof value == "string") {
      while (match = newRule.exec(value.replace(ruleClean, " "))) {
        if (!match[0])
          continue;
        if (match[4]) {
          currentBlock = saveBlock(rules, selectors, currentBlock);
          selectors.pop();
        }
        if (match[3]) {
          currentBlock = saveBlock(rules, selectors, currentBlock);
          selectors.push(match[3]);
        } else if (!match[4]) {
          if (!currentBlock)
            currentBlock = {};
          const value2 = match[2] && /\S/.test(match[2]) ? match[2] : values[++index];
          if (value2) {
            if (match[1] == "@apply") {
              merge(currentBlock, evalThunk(import__.apply(value2), context), context);
            } else {
              currentBlock[match[1]] = value2;
            }
          }
        }
      }
    } else {
      currentBlock = saveBlock(rules, selectors, currentBlock);
      rules.push(decorate(selectors, value));
    }
  }
  saveBlock(rules, selectors, currentBlock);
  return rules;
};
var cssFactory = (tokens, context) => translate(Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw) ? astish(interleave(tokens[0], tokens.slice(1), context), context) : tokens, context);
var css = (...tokens) => import__.directive(cssFactory, tokens);
var keyframesFactory = (tokens, context) => {
  const waypoints = cssFactory(tokens, context);
  const id = import__.hash(JSON.stringify(waypoints));
  context.tw(() => ({[`@keyframes ${id}`]: waypoints}));
  return id;
};
var keyframes = (...tokens) => import__.directive(keyframesFactory, tokens);
var animation = (value, waypoints) => waypoints === void 0 ? (...args) => animation(value, keyframes(...args)) : css({
  ...value && typeof value == "object" ? value : {animation: value},
  animationName: typeof waypoints == "function" ? waypoints : keyframes(waypoints)
});
var screenFactory = ({size, rules}, context) => {
  const media = buildMediaQuery(context.theme("screens", size));
  return rules === void 0 ? media : {
    [media]: typeof rules == "function" ? evalThunk(rules, context) : cssFactory([rules], context)
  };
};
var screen = (size, rules) => import__.directive(screenFactory, {size, rules});
//# sourceMappingURL=css.cjs.map


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

/***/ "./src/components/button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/button/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = (_ref) => {
  let {
    primary,
    modifier,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["primary", "modifier", "children"]);

  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700` : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", _objectSpread(_objectSpread({
    type: "button",
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`${baseStyle} ${styles} ${modifier !== null && modifier !== void 0 ? modifier : ``}`)
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/cases-section/index.tsx":
/*!************************************************!*\
  !*** ./src/components/cases-section/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/cases-section/index.tsx";



const ParticleBg = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {
  params: {
    particles: {
      shape: {
        type: 'images',
        image: [{
          src: 'public/images/suzuka.png',
          height: 20,
          width: 20
        }, {
          src: 'public/images/silverstone.png',
          height: 20,
          width: 20
        }, {
          src: 'spain.png',
          height: 20,
          width: 20
        }, {
          src: 'suzuka.png',
          height: 20,
          width: 20
        }]
      }
    }
  }
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

const articles = [{
  title: `Real Time Dashboard`,
  desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
  image: `/images/lapdash.png`,
  alt: `Proident pariatur est.`
}, {
  title: `Laptime Leaderboard`,
  desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
  image: `/images/lapleaderboad.png`,
  alt: `Proident pariatur est.`
}, {
  title: `Your data, your project`,
  desc: `Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.`,
  image: `/images/case-3.webp`,
  alt: `Proident pariatur est.`
}];

const CasesSection = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full min-h-screen bg-gray-900 relative`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`absolute left-0 top-0 h-screen w-full overflow-hidden`),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticleBg, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-white text-4xl lg:text-7xl font-bold text-center`),
        children: "How will you race?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-white text-gray-400 text-center text-xl mt-12`),
        children: "Lapper.gg Enables you to race to do more with your racing data"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mx-auto pt-24`),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full flex flex-wrap justify-around`),
          children: articles.map(article => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-64 z-20`),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: article.image,
                alt: article.alt,
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-full w-full object-cover overflow-hidden rounded`),
                width: 400,
                height: 300
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`uppercase text-sm text-gray-700 text-center pb-1`),
                children: article.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-gray-500 text-center pb-1 text-sm`),
                children: article.desc
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, undefined)]
          }, article.title, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 44,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (CasesSection);

/***/ }),

/***/ "./src/components/feature-section/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/feature-section/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_svg_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/svg/check.svg */ "./src/constants/svg/check.svg");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/feature-section/index.tsx";



const FeatureSection = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`bg-white pb-6`),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`container mx-auto px-6 p-6 bg-white`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mb-16 text-center`),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-base text-indigo-600 font-semibold tracking-wide uppercase`),
          children: "Features"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`),
          children: "How we change the game"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex flex-wrap my-12`),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex items-center mb-6`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_constants_svg_check_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: 20,
              height: 20,
              fill: "currentColor",
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-6 w-6 text-indigo-500`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`ml-4 text-xl`),
              children: "Realtime Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`leading-loose text-gray-500`),
            children: "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex items-center mb-6`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_constants_svg_check_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: 20,
              height: 20,
              fill: "currentColor",
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-6 w-6 text-indigo-500`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`ml-4 text-xl`),
              children: "Laptime Lobby Leaderboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`leading-loose text-gray-500 `),
            children: "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center mb-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_constants_svg_check_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
              width: 20,
              height: 20,
              fill: "currentColor",
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-6 w-6 text-indigo-500`)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`ml-4 text-xl`),
              children: "No accounts necessary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`leading-loose text-gray-500`),
            children: "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FeatureSection);

/***/ }),

/***/ "./src/components/footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/footer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/footer/index.tsx";

const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
const resourceLinks = [`Get started`, `Guides`, `Tools`, `Case studies`, `Solutions`, `FAQs`, `Help Center`, `Training`, `Other resources`];

const Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`bg-white border-t border-gray-400 pt-14 pb-16`),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mb-14 flex items-center w-full`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-12 w-12 mr-4`),
        src: "logo.svg",
        alt: "logo",
        width: 48,
        height: 48
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-4xl text-indigo-500 font-bold`),
        children: "LAPPER.GG"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind/css */ "./node_modules/twind/css/css.cjs");
/* harmony import */ var twind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/button */ "./src/components/button/index.tsx");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/header/index.tsx";


const headerStyle = twind_css__WEBPACK_IMPORTED_MODULE_1__["css"]`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
  className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(headerStyle),
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`),
      children: "Download. Connect. Compete."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-xl mx-auto`),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`),
        children: "Laptime lobbies for a competitive Forza experiance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mt-10 flex justify-center items-center w-full mx-auto`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primary: true,
        children: "Host a lobby"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mx-2`),
        children: "or"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: "Join one"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex justify-center w-full`),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mt-4 w-full`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`font-mono uppercase text-center font-medium text-sm text-gray-600`),
        children: "Powered by"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex items-center justify-center mx-auto flex-wrap`),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: Object(twind_css__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-40 w-40`),
          src: "fathym.svg",
          alt: "fathym logo",
          height: 200
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/list-section/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/list-section/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/list-section/index.tsx";

const listItems = [{
  title: `Download`,
  description: `Download the realtime dashboard to your computer to see stats and connect to other racers`
}, {
  title: `Connect`,
  description: `Host a lobby and get a code to share with your friends, or if your given a code join a lobby and enter the code to start competing`
}, {
  title: `Compete`,
  description: `Hop into a race and see how your laptimes stack up against your teammates`
}];

const ListSection = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`lg:py-28 pt-28 overflow-hidden`),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mb-16 text-center`),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`),
        children: "How this all works"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex flex-wrap -mx-8 items-center`),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full lg:w-1/2 px-8`),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`space-y-12`),
          children: listItems.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex -mx-4`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`px-4`),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`),
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`px-4`),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`my-4 text-xl font-semibold`),
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`text-gray-500 leading-loose`),
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, undefined)]
          }, item.title, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full lg:w-1/2 px-8`),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "dash.svg",
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 20,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ListSection);

/***/ }),

/***/ "./src/components/navigation/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/navigation/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/button */ "./src/components/button/index.tsx");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/navigation/index.tsx";



const secondaryLinks = [{
  label: `Tutorial`,
  href: `/`
}, {
  label: `Join`,
  href: `/`
}, {
  label: `Host`,
  href: `/`
}];

const MenuButton = ({
  toggleMenu,
  showMenu
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
  type: "button",
  "aria-controls": "mobile-menu",
  "aria-expanded": showMenu,
  onClick: toggleMenu,
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`p-2 text-gray-400`),
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`sr-only`),
    children: "Open menu"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-6 w-6`),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    width: 24,
    height: 24,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6 18L18 6M6 6l12 12"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-6 w-6`),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    width: 24,
    height: 24,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 6h16M4 12h16M4 18h16"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 31,
  columnNumber: 3
}, undefined);

const MobileMenu = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`md:hidden`),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`pt-4 pb-3 border-t border-gray-400`),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`px-2 space-y-1`),
      children: secondaryLinks.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: link.href,
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`block px-3 py-2 text-base font-medium text-gray-500`),
        children: link.label
      }, `mobile-${link.label}`, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 70,
  columnNumber: 3
}, undefined);

const Navigation = () => {
  const {
    0: showMenu,
    1: setShowMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`bg-white`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex items-center justify-between h-24`),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex items-center`),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex-shrink-0`),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`h-12 w-12`),
              src: "logo.svg",
              alt: "logo",
              width: 48,
              height: 48
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`hidden md:block`),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`ml-10 flex items-baseline space-x-4`),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-center leading-snug text-gray-800`),
                children: "Lapper.gg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`hidden md:block`),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`ml-4 flex items-center md:ml-6`),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              modifier: "border-0 mr-2",
              children: "Tutorial"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              modifier: "border-0 mr-2",
              children: "Join"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              modifier: "border-0 mr-2",
              children: "Host"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              primary: true,
              children: "Download"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`-mr-2 flex md:hidden`),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MenuButton, {
            showMenu: showMenu,
            toggleMenu: toggleMenu
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), showMenu ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MobileMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/page/index.tsx":
/*!***************************************!*\
  !*** ./src/components/page/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navigation */ "./src/components/navigation/index.tsx");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/page/index.tsx";




const Page = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/logo.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_3__["tw"])(`min-h-screen flex flex-col`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/video-section/index.tsx":
/*!************************************************!*\
  !*** ./src/components/video-section/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! twind */ "./node_modules/twind/twind.cjs");
/* harmony import */ var twind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(twind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_svg_play_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/svg/play.svg */ "./src/constants/svg/play.svg");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/components/video-section/index.tsx";



const PlayButton = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
  type: "button",
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`),
  "aria-label": "play video",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_constants_svg_play_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

const VideoSection = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`bg-gradient-to-b from-red to-pink shadow-inner`),
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`max-w-7xl mx-auto`),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`flex flex-col max-w-4xl mx-auto pt-28`),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`w-full`),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(twind__WEBPACK_IMPORTED_MODULE_1__["tw"])(`relative shadow-2xl mx-6 lg:mx-0`),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
            loop: true,
            autoPlay: true,
            muted: true,
            src: "vid.mp4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (VideoSection);

/***/ }),

/***/ "./src/constants/svg/check.svg":
/*!*************************************!*\
  !*** ./src/constants/svg/check.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"
});

function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCheck);

/***/ }),

/***/ "./src/constants/svg/play.svg":
/*!************************************!*\
  !*** ./src/constants/svg/play.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M10 17l6-5-6-5z"
});

function SvgPlay(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlay);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/page */ "./src/components/page/index.tsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ "./src/components/header/index.tsx");
/* harmony import */ var _components_video_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/video-section */ "./src/components/video-section/index.tsx");
/* harmony import */ var _components_list_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/list-section */ "./src/components/list-section/index.tsx");
/* harmony import */ var _components_feature_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/feature-section */ "./src/components/feature-section/index.tsx");
/* harmony import */ var _components_cases_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/cases-section */ "./src/components/cases-section/index.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/footer */ "./src/components/footer/index.tsx");

var _jsxFileName = "/home/jackpenhale/forza/landing-page/next-startd/src/pages/index.tsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
      title: "STARTD - Template",
      description: "A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_video_section__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_feature_section__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_list_section__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cases_section__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R3aW5kL2Nzcy9jc3MuY2pzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90d2luZC90d2luZC5janMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXNlcy1zZWN0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLXNlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LXNlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZGVvLXNlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvc3ZnL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3N2Zy9wbGF5LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXJ0aWNsZXMtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZS12ZW5kb3JpemVyXCIiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJpbWFyeSIsIm1vZGlmaWVyIiwiY2hpbGRyZW4iLCJyZXN0IiwiYmFzZVN0eWxlIiwic3R5bGVzIiwidHciLCJQYXJ0aWNsZUJnIiwicGFydGljbGVzIiwic2hhcGUiLCJ0eXBlIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFydGljbGVzIiwidGl0bGUiLCJkZXNjIiwiYWx0IiwiQ2FzZXNTZWN0aW9uIiwibWFwIiwiYXJ0aWNsZSIsIkZlYXR1cmVTZWN0aW9uIiwicHJvZHVjdExpbmtzIiwiYWJvdXRMaW5rcyIsInJlc291cmNlTGlua3MiLCJGb290ZXIiLCJoZWFkZXJTdHlsZSIsImNzcyIsIkhlYWRlciIsImxpc3RJdGVtcyIsImRlc2NyaXB0aW9uIiwiTGlzdFNlY3Rpb24iLCJpdGVtIiwiaW5kZXgiLCJzZWNvbmRhcnlMaW5rcyIsImxhYmVsIiwiaHJlZiIsIk1lbnVCdXR0b24iLCJ0b2dnbGVNZW51Iiwic2hvd01lbnUiLCJNb2JpbGVNZW51IiwibGluayIsIk5hdmlnYXRpb24iLCJzZXRTaG93TWVudSIsInVzZVN0YXRlIiwiUGFnZSIsIlBsYXlCdXR0b24iLCJWaWRlb1NlY3Rpb24iLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FB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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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ZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX21hcmtBc01vZHVsZSA9ICh0YXJnZXQpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7Z2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWV9KTtcbn07XG52YXIgX19leHBvcnRTdGFyID0gKHRhcmdldCwgbW9kdWxlMiwgZGVzYykgPT4ge1xuICBpZiAobW9kdWxlMiAmJiB0eXBlb2YgbW9kdWxlMiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbW9kdWxlMiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKG1vZHVsZTIpKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0YXJnZXQsIGtleSkgJiYga2V5ICE9PSBcImRlZmF1bHRcIilcbiAgICAgICAgX19kZWZQcm9wKHRhcmdldCwga2V5LCB7Z2V0OiAoKSA9PiBtb2R1bGUyW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MobW9kdWxlMiwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgX190b01vZHVsZSA9IChtb2R1bGUyKSA9PiB7XG4gIGlmIChtb2R1bGUyICYmIG1vZHVsZTIuX19lc01vZHVsZSlcbiAgICByZXR1cm4gbW9kdWxlMjtcbiAgcmV0dXJuIF9fZXhwb3J0U3RhcihfX21hcmtBc01vZHVsZShfX2RlZlByb3AobW9kdWxlMiAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZHVsZTIpKSA6IHt9LCBcImRlZmF1bHRcIiwge3ZhbHVlOiBtb2R1bGUyLCBlbnVtZXJhYmxlOiB0cnVlfSkpLCBtb2R1bGUyKTtcbn07XG5cbi8vIHNyYy9jc3MvaW5kZXgudHNcbl9fbWFya0FzTW9kdWxlKGV4cG9ydHMpO1xuX19leHBvcnQoZXhwb3J0cywge1xuICBhbmltYXRpb246ICgpID0+IGFuaW1hdGlvbixcbiAgYXBwbHk6ICgpID0+IGltcG9ydF9fMi5hcHBseSxcbiAgY3NzOiAoKSA9PiBjc3MsXG4gIGtleWZyYW1lczogKCkgPT4ga2V5ZnJhbWVzLFxuICBzY3JlZW46ICgpID0+IHNjcmVlbixcbiAgc2V0dXA6ICgpID0+IGltcG9ydF9fMi5zZXR1cCxcbiAgdGhlbWU6ICgpID0+IGltcG9ydF9fMi50aGVtZSxcbiAgdHc6ICgpID0+IGltcG9ydF9fMi50d1xufSk7XG52YXIgaW1wb3J0X18gPSBfX3RvTW9kdWxlKHJlcXVpcmUoXCIuLi90d2luZC5janNcIikpO1xuXG4vLyBzcmMvaW50ZXJuYWwvdXRpbC50c1xudmFyIGpvaW4gPSAocGFydHMsIHNlcGFyYXRvciA9IFwiLVwiKSA9PiBwYXJ0cy5qb2luKHNlcGFyYXRvcik7XG52YXIgdGFpbCA9IChhcnJheSwgc3RhcnRJbmRleCA9IDEpID0+IGFycmF5LnNsaWNlKHN0YXJ0SW5kZXgpO1xudmFyIGh5cGhlbmF0ZSA9ICh2YWx1ZSkgPT4gdmFsdWUucmVwbGFjZSgvW0EtWl0vZywgXCItJCZcIikudG9Mb3dlckNhc2UoKTtcbnZhciBldmFsVGh1bmsgPSAodmFsdWUsIGNvbnRleHQpID0+IHtcbiAgd2hpbGUgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YWx1ZSA9IHZhbHVlKGNvbnRleHQpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgbWVyZ2UgPSAodGFyZ2V0LCBzb3VyY2UsIGNvbnRleHQpID0+IHNvdXJjZSA/IE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKCh0YXJnZXQyLCBrZXkpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBldmFsVGh1bmsoc291cmNlW2tleV0sIGNvbnRleHQpO1xuICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGFyZ2V0MltrZXldID0gbWVyZ2UodGFyZ2V0MltrZXldIHx8IHt9LCB2YWx1ZSwgY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0MltoeXBoZW5hdGUoa2V5KV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0Mjtcbn0sIHRhcmdldCkgOiB0YXJnZXQ7XG52YXIgZXNjYXBlID0gdHlwZW9mIENTUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBDU1MuZXNjYXBlIHx8ICgoY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGZpcnN0Q29kZVVuaXQgPSBjbGFzc05hbWUuY2hhckNvZGVBdCgwKTtcbiAgbGV0IGZpcnN0Q2hhciA9IFwiXCI7XG4gIGlmIChmaXJzdENvZGVVbml0ID49IDQ4ICYmIGZpcnN0Q29kZVVuaXQgPD0gNTcpIHtcbiAgICBmaXJzdENoYXIgPSBcIlxcXFxcIiArIGZpcnN0Q29kZVVuaXQudG9TdHJpbmcoMTYpICsgXCIgXCI7XG4gICAgY2xhc3NOYW1lID0gdGFpbChjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBmaXJzdENoYXIgKyBjbGFzc05hbWUucmVwbGFjZSgvWyEuLzojXS9nLCBcIlxcXFwkJlwiKTtcbn0pO1xudmFyIGJ1aWxkTWVkaWFRdWVyeSA9IChzY3JlZW4yKSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzY3JlZW4yKSkge1xuICAgIHNjcmVlbjIgPSBbc2NyZWVuMl07XG4gIH1cbiAgcmV0dXJuIFwiQG1lZGlhIFwiICsgam9pbihzY3JlZW4yLm1hcCgoc2NyZWVuMykgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2NyZWVuMyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICBzY3JlZW4zID0ge21pbjogc2NyZWVuM307XG4gICAgfVxuICAgIHJldHVybiBzY3JlZW4zLnJhdyB8fCBqb2luKE9iamVjdC5rZXlzKHNjcmVlbjMpLm1hcCgoZmVhdHVyZSkgPT4gYCgke2ZlYXR1cmV9LXdpZHRoOiR7c2NyZWVuM1tmZWF0dXJlXX0pYCksIFwiIGFuZCBcIik7XG4gIH0pLCBcIixcIik7XG59O1xuXG4vLyBzcmMvY3NzL2luZGV4LnRzXG52YXIgaW1wb3J0X18yID0gX190b01vZHVsZShyZXF1aXJlKFwiLi4vdHdpbmQuY2pzXCIpKTtcbnZhciB0cmFuc2xhdGUgPSAodG9rZW5zLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IGNvbGxlY3QgPSAodGFyZ2V0LCB0b2tlbikgPT4gQXJyYXkuaXNBcnJheSh0b2tlbikgPyB0b2tlbi5yZWR1Y2UoY29sbGVjdCwgdGFyZ2V0KSA6IG1lcmdlKHRhcmdldCwgZXZhbFRodW5rKHRva2VuLCBjb250ZXh0KSwgY29udGV4dCk7XG4gIHJldHVybiB0b2tlbnMucmVkdWNlKGNvbGxlY3QsIHt9KTtcbn07XG52YXIgbmV3UnVsZSA9IC9cXHMqKD86KFtcXHctJUBdKylcXHMqOj9cXHMqKFteeztdKz8pXFxzKig/Ojt8JHx9KXwoW147fXtdKj8pXFxzKnspfCh9KS9naTtcbnZhciBydWxlQ2xlYW4gPSAvXFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXHMrfFxcbi9nbTtcbnZhciBkZWNvcmF0ZSA9IChzZWxlY3RvcnMsIGN1cnJlbnRCbG9jaykgPT4gc2VsZWN0b3JzLnJlZHVjZVJpZ2h0KChydWxlcywgc2VsZWN0b3IpID0+ICh7W3NlbGVjdG9yXTogcnVsZXN9KSwgY3VycmVudEJsb2NrKTtcbnZhciBzYXZlQmxvY2sgPSAocnVsZXMsIHNlbGVjdG9ycywgY3VycmVudEJsb2NrKSA9PiB7XG4gIGlmIChjdXJyZW50QmxvY2spIHtcbiAgICBydWxlcy5wdXNoKGRlY29yYXRlKHNlbGVjdG9ycywgY3VycmVudEJsb2NrKSk7XG4gIH1cbn07XG52YXIgaW50ZXJsZWF2ZSA9IChzdHJpbmdzLCBpbnRlcnBvbGF0aW9ucywgY29udGV4dCkgPT4ge1xuICBsZXQgYnVmZmVyID0gc3RyaW5nc1swXTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnRlcnBvbGF0aW9ucy5sZW5ndGg7ICkge1xuICAgIGNvbnN0IGludGVycG9sYXRpb24gPSBldmFsVGh1bmsoaW50ZXJwb2xhdGlvbnNbaW5kZXhdLCBjb250ZXh0KTtcbiAgICBpZiAoaW50ZXJwb2xhdGlvbiAmJiB0eXBlb2YgaW50ZXJwb2xhdGlvbiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXN1bHQucHVzaChidWZmZXIsIGludGVycG9sYXRpb24pO1xuICAgICAgYnVmZmVyID0gc3RyaW5nc1srK2luZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IChpbnRlcnBvbGF0aW9uIHx8IFwiXCIpICsgc3RyaW5nc1srK2luZGV4XTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goYnVmZmVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgYXN0aXNoID0gKHZhbHVlcywgY29udGV4dCkgPT4ge1xuICBjb25zdCBzZWxlY3RvcnMgPSBbXTtcbiAgY29uc3QgcnVsZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnRCbG9jaztcbiAgbGV0IG1hdGNoO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHdoaWxlIChtYXRjaCA9IG5ld1J1bGUuZXhlYyh2YWx1ZS5yZXBsYWNlKHJ1bGVDbGVhbiwgXCIgXCIpKSkge1xuICAgICAgICBpZiAoIW1hdGNoWzBdKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICBjdXJyZW50QmxvY2sgPSBzYXZlQmxvY2socnVsZXMsIHNlbGVjdG9ycywgY3VycmVudEJsb2NrKTtcbiAgICAgICAgICBzZWxlY3RvcnMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgY3VycmVudEJsb2NrID0gc2F2ZUJsb2NrKHJ1bGVzLCBzZWxlY3RvcnMsIGN1cnJlbnRCbG9jayk7XG4gICAgICAgICAgc2VsZWN0b3JzLnB1c2gobWF0Y2hbM10pO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXRjaFs0XSkge1xuICAgICAgICAgIGlmICghY3VycmVudEJsb2NrKVxuICAgICAgICAgICAgY3VycmVudEJsb2NrID0ge307XG4gICAgICAgICAgY29uc3QgdmFsdWUyID0gbWF0Y2hbMl0gJiYgL1xcUy8udGVzdChtYXRjaFsyXSkgPyBtYXRjaFsyXSA6IHZhbHVlc1srK2luZGV4XTtcbiAgICAgICAgICBpZiAodmFsdWUyKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hbMV0gPT0gXCJAYXBwbHlcIikge1xuICAgICAgICAgICAgICBtZXJnZShjdXJyZW50QmxvY2ssIGV2YWxUaHVuayhpbXBvcnRfXy5hcHBseSh2YWx1ZTIpLCBjb250ZXh0KSwgY29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjdXJyZW50QmxvY2tbbWF0Y2hbMV1dID0gdmFsdWUyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50QmxvY2sgPSBzYXZlQmxvY2socnVsZXMsIHNlbGVjdG9ycywgY3VycmVudEJsb2NrKTtcbiAgICAgIHJ1bGVzLnB1c2goZGVjb3JhdGUoc2VsZWN0b3JzLCB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuICBzYXZlQmxvY2socnVsZXMsIHNlbGVjdG9ycywgY3VycmVudEJsb2NrKTtcbiAgcmV0dXJuIHJ1bGVzO1xufTtcbnZhciBjc3NGYWN0b3J5ID0gKHRva2VucywgY29udGV4dCkgPT4gdHJhbnNsYXRlKEFycmF5LmlzQXJyYXkodG9rZW5zWzBdKSAmJiBBcnJheS5pc0FycmF5KHRva2Vuc1swXS5yYXcpID8gYXN0aXNoKGludGVybGVhdmUodG9rZW5zWzBdLCB0b2tlbnMuc2xpY2UoMSksIGNvbnRleHQpLCBjb250ZXh0KSA6IHRva2VucywgY29udGV4dCk7XG52YXIgY3NzID0gKC4uLnRva2VucykgPT4gaW1wb3J0X18uZGlyZWN0aXZlKGNzc0ZhY3RvcnksIHRva2Vucyk7XG52YXIga2V5ZnJhbWVzRmFjdG9yeSA9ICh0b2tlbnMsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qgd2F5cG9pbnRzID0gY3NzRmFjdG9yeSh0b2tlbnMsIGNvbnRleHQpO1xuICBjb25zdCBpZCA9IGltcG9ydF9fLmhhc2goSlNPTi5zdHJpbmdpZnkod2F5cG9pbnRzKSk7XG4gIGNvbnRleHQudHcoKCkgPT4gKHtbYEBrZXlmcmFtZXMgJHtpZH1gXTogd2F5cG9pbnRzfSkpO1xuICByZXR1cm4gaWQ7XG59O1xudmFyIGtleWZyYW1lcyA9ICguLi50b2tlbnMpID0+IGltcG9ydF9fLmRpcmVjdGl2ZShrZXlmcmFtZXNGYWN0b3J5LCB0b2tlbnMpO1xudmFyIGFuaW1hdGlvbiA9ICh2YWx1ZSwgd2F5cG9pbnRzKSA9PiB3YXlwb2ludHMgPT09IHZvaWQgMCA/ICguLi5hcmdzKSA9PiBhbmltYXRpb24odmFsdWUsIGtleWZyYW1lcyguLi5hcmdzKSkgOiBjc3Moe1xuICAuLi52YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiA/IHZhbHVlIDoge2FuaW1hdGlvbjogdmFsdWV9LFxuICBhbmltYXRpb25OYW1lOiB0eXBlb2Ygd2F5cG9pbnRzID09IFwiZnVuY3Rpb25cIiA/IHdheXBvaW50cyA6IGtleWZyYW1lcyh3YXlwb2ludHMpXG59KTtcbnZhciBzY3JlZW5GYWN0b3J5ID0gKHtzaXplLCBydWxlc30sIGNvbnRleHQpID0+IHtcbiAgY29uc3QgbWVkaWEgPSBidWlsZE1lZGlhUXVlcnkoY29udGV4dC50aGVtZShcInNjcmVlbnNcIiwgc2l6ZSkpO1xuICByZXR1cm4gcnVsZXMgPT09IHZvaWQgMCA/IG1lZGlhIDoge1xuICAgIFttZWRpYV06IHR5cGVvZiBydWxlcyA9PSBcImZ1bmN0aW9uXCIgPyBldmFsVGh1bmsocnVsZXMsIGNvbnRleHQpIDogY3NzRmFjdG9yeShbcnVsZXNdLCBjb250ZXh0KVxuICB9O1xufTtcbnZhciBzY3JlZW4gPSAoc2l6ZSwgcnVsZXMpID0+IGltcG9ydF9fLmRpcmVjdGl2ZShzY3JlZW5GYWN0b3J5LCB7c2l6ZSwgcnVsZXN9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy5janMubWFwXG4iLCJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHt2YWx1ZTogdHJ1ZX0pO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZX0pO1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGFyZ2V0LCBtb2R1bGUyLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUyICYmIHR5cGVvZiBtb2R1bGUyID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBtb2R1bGUyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlMikpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRhcmdldCwga2V5KSAmJiBrZXkgIT09IFwiZGVmYXVsdFwiKVxuICAgICAgICBfX2RlZlByb3AodGFyZ2V0LCBrZXksIHtnZXQ6ICgpID0+IG1vZHVsZTJba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhtb2R1bGUyLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGV9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX3RvTW9kdWxlID0gKG1vZHVsZTIpID0+IHtcbiAgaWYgKG1vZHVsZTIgJiYgbW9kdWxlMi5fX2VzTW9kdWxlKVxuICAgIHJldHVybiBtb2R1bGUyO1xuICByZXR1cm4gX19leHBvcnRTdGFyKF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUyICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kdWxlMikpIDoge30sIFwiZGVmYXVsdFwiLCB7dmFsdWU6IG1vZHVsZTIsIGVudW1lcmFibGU6IHRydWV9KSksIG1vZHVsZTIpO1xufTtcblxuLy8gc3JjL2luZGV4LnRzXG5fX21hcmtBc01vZHVsZShleHBvcnRzKTtcbl9fZXhwb3J0KGV4cG9ydHMsIHtcbiAgYXBwbHk6ICgpID0+IGFwcGx5LFxuICBhdXRvcHJlZml4OiAoKSA9PiBhdXRvcHJlZml4LFxuICBjcmVhdGU6ICgpID0+IGNyZWF0ZSxcbiAgY3Nzb21TaGVldDogKCkgPT4gY3Nzb21TaGVldCxcbiAgZGlyZWN0aXZlOiAoKSA9PiBkaXJlY3RpdmUsXG4gIGhhc2g6ICgpID0+IGN5cmIzMixcbiAgbW9kZTogKCkgPT4gbW9kZSxcbiAgbm9wcmVmaXg6ICgpID0+IG5vcHJlZml4LFxuICBzZXR1cDogKCkgPT4gc2V0dXAsXG4gIHNpbGVudDogKCkgPT4gc2lsZW50LFxuICBzdHJpY3Q6ICgpID0+IHN0cmljdCxcbiAgdGhlbWU6ICgpID0+IHRoZW1lLFxuICB0dzogKCkgPT4gdHcsXG4gIHZvaWRTaGVldDogKCkgPT4gdm9pZFNoZWV0LFxuICB3YXJuOiAoKSA9PiB3YXJuXG59KTtcblxuLy8gc3JjL2ludGVybmFsL3V0aWwudHNcbnZhciBpbmNsdWRlcyA9ICh2YWx1ZSwgc2VhcmNoKSA9PiAhIX52YWx1ZS5pbmRleE9mKHNlYXJjaCk7XG52YXIgam9pbiA9IChwYXJ0cywgc2VwYXJhdG9yID0gXCItXCIpID0+IHBhcnRzLmpvaW4oc2VwYXJhdG9yKTtcbnZhciBqb2luVHJ1dGh5ID0gKHBhcnRzLCBzZXBhcmF0b3IpID0+IGpvaW4ocGFydHMuZmlsdGVyKEJvb2xlYW4pLCBzZXBhcmF0b3IpO1xudmFyIHRhaWwgPSAoYXJyYXksIHN0YXJ0SW5kZXggPSAxKSA9PiBhcnJheS5zbGljZShzdGFydEluZGV4KTtcbnZhciBpZGVudGl0eSA9ICh2YWx1ZSkgPT4gdmFsdWU7XG52YXIgbm9vcCA9ICgpID0+IHtcbn07XG52YXIgY2FwaXRhbGl6ZSA9ICh2YWx1ZSkgPT4gdmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHRhaWwodmFsdWUpO1xudmFyIGh5cGhlbmF0ZSA9ICh2YWx1ZSkgPT4gdmFsdWUucmVwbGFjZSgvW0EtWl0vZywgXCItJCZcIikudG9Mb3dlckNhc2UoKTtcbnZhciBldmFsVGh1bmsgPSAodmFsdWUsIGNvbnRleHQpID0+IHtcbiAgd2hpbGUgKHR5cGVvZiB2YWx1ZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YWx1ZSA9IHZhbHVlKGNvbnRleHQpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgZW5zdXJlTWF4U2l6ZSA9IChtYXAsIG1heCkgPT4ge1xuICBpZiAobWFwLnNpemUgPiBtYXgpIHtcbiAgICBtYXAuZGVsZXRlKG1hcC5rZXlzKCkubmV4dCgpLnZhbHVlKTtcbiAgfVxufTtcbnZhciBtZXJnZSA9ICh0YXJnZXQsIHNvdXJjZSwgY29udGV4dCkgPT4gc291cmNlID8gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoKHRhcmdldDIsIGtleSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGV2YWxUaHVuayhzb3VyY2Vba2V5XSwgY29udGV4dCk7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0YXJnZXQyW2tleV0gPSBtZXJnZSh0YXJnZXQyW2tleV0gfHwge30sIHZhbHVlLCBjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQyW2h5cGhlbmF0ZShrZXkpXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0YXJnZXQyO1xufSwgdGFyZ2V0KSA6IHRhcmdldDtcbnZhciBlc2NhcGUgPSB0eXBlb2YgQ1NTICE9PSBcInVuZGVmaW5lZFwiICYmIENTUy5lc2NhcGUgfHwgKChjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZmlyc3RDb2RlVW5pdCA9IGNsYXNzTmFtZS5jaGFyQ29kZUF0KDApO1xuICBsZXQgZmlyc3RDaGFyID0gXCJcIjtcbiAgaWYgKGZpcnN0Q29kZVVuaXQgPj0gNDggJiYgZmlyc3RDb2RlVW5pdCA8PSA1Nykge1xuICAgIGZpcnN0Q2hhciA9IFwiXFxcXFwiICsgZmlyc3RDb2RlVW5pdC50b1N0cmluZygxNikgKyBcIiBcIjtcbiAgICBjbGFzc05hbWUgPSB0YWlsKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIGZpcnN0Q2hhciArIGNsYXNzTmFtZS5yZXBsYWNlKC9bIS4vOiNdL2csIFwiXFxcXCQmXCIpO1xufSk7XG52YXIgYnVpbGRNZWRpYVF1ZXJ5ID0gKHNjcmVlbikgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyZWVuKSkge1xuICAgIHNjcmVlbiA9IFtzY3JlZW5dO1xuICB9XG4gIHJldHVybiBcIkBtZWRpYSBcIiArIGpvaW4oc2NyZWVuLm1hcCgoc2NyZWVuMikgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2NyZWVuMiA9PSBcInN0cmluZ1wiKSB7XG4gICAgICBzY3JlZW4yID0ge21pbjogc2NyZWVuMn07XG4gICAgfVxuICAgIHJldHVybiBzY3JlZW4yLnJhdyB8fCBqb2luKE9iamVjdC5rZXlzKHNjcmVlbjIpLm1hcCgoZmVhdHVyZSkgPT4gYCgke2ZlYXR1cmV9LXdpZHRoOiR7c2NyZWVuMltmZWF0dXJlXX0pYCksIFwiIGFuZCBcIik7XG4gIH0pLCBcIixcIik7XG59O1xudmFyIGN5cmIzMiA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgaCA9IDk7XG4gIGZvciAobGV0IGluZGV4ID0gdmFsdWUubGVuZ3RoOyBpbmRleC0tOyApIHtcbiAgICBoID0gTWF0aC5pbXVsKGggXiB2YWx1ZS5jaGFyQ29kZUF0KGluZGV4KSwgMTU5NzMzNDY3Nyk7XG4gIH1cbiAgcmV0dXJuIFwidHctXCIgKyAoKGggXiBoID4+PiA5KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufTtcbnZhciBzb3J0ZWRJbnNlcnRpb25JbmRleCA9IChhcnJheSwgZWxlbWVudCkgPT4ge1xuICBsZXQgaGlnaCA9IGFycmF5Lmxlbmd0aDtcbiAgaWYgKGhpZ2ggPT09IDApXG4gICAgcmV0dXJuIDA7XG4gIGZvciAobGV0IGxvdyA9IDA7IGxvdyA8IGhpZ2g7ICkge1xuICAgIGNvbnN0IHBpdm90ID0gaGlnaCArIGxvdyA+PiAxO1xuICAgIGlmIChhcnJheVtwaXZvdF0gPD0gZWxlbWVudCkge1xuICAgICAgbG93ID0gcGl2b3QgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWdoID0gcGl2b3Q7XG4gICAgfVxuICB9XG4gIHJldHVybiBoaWdoO1xufTtcblxuLy8gc3JjL3R3aW5kL3BhcnNlLnRzXG52YXIgZ3JvdXBpbmdzO1xudmFyIHJ1bGVzO1xudmFyIHN0YXJ0R3JvdXBpbmcgPSAodmFsdWUgPSBcIlwiKSA9PiB7XG4gIGdyb3VwaW5ncy5wdXNoKHZhbHVlKTtcbiAgcmV0dXJuIFwiXCI7XG59O1xudmFyIGVuZEdyb3VwaW5nID0gKGlzV2hpdGVzcGFjZSkgPT4ge1xuICBncm91cGluZ3MubGVuZ3RoID0gTWF0aC5tYXgoZ3JvdXBpbmdzLmxhc3RJbmRleE9mKFwiXCIpICsgfn5pc1doaXRlc3BhY2UsIDApO1xufTtcbnZhciBvbmx5UHJlZml4ZXMgPSAocykgPT4gcyAmJiBzWzBdICE9PSBcIjpcIjtcbnZhciBvbmx5VmFyaWFudHMgPSAocykgPT4gc1swXSA9PT0gXCI6XCI7XG52YXIgYWRkUnVsZSA9IChkaXJlY3RpdmUyLCBuZWdhdGUsIGltcG9ydGFudCkgPT4ge1xuICBydWxlcy5wdXNoKHtcbiAgICB2OiBncm91cGluZ3MuZmlsdGVyKG9ubHlWYXJpYW50cyksXG4gICAgZDogZGlyZWN0aXZlMixcbiAgICBuOiBuZWdhdGUsXG4gICAgaTogaW1wb3J0YW50LFxuICAgICQ6IFwiXCJcbiAgfSk7XG59O1xudmFyIHNhdmVSdWxlID0gKGJ1ZmZlcikgPT4ge1xuICBjb25zdCBuZWdhdGUgPSBidWZmZXJbMF0gPT09IFwiLVwiO1xuICBpZiAobmVnYXRlKSB7XG4gICAgYnVmZmVyID0gdGFpbChidWZmZXIpO1xuICB9XG4gIGNvbnN0IGltcG9ydGFudCA9IGJ1ZmZlcltidWZmZXIubGVuZ3RoIC0gMV0gPT09IFwiIVwiO1xuICBpZiAoaW1wb3J0YW50KSB7XG4gICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKDAsIC0xKTtcbiAgfVxuICBjb25zdCBwcmVmaXggPSBqb2luKGdyb3VwaW5ncy5maWx0ZXIob25seVByZWZpeGVzKSk7XG4gIGFkZFJ1bGUoYnVmZmVyID09PSBcIiZcIiA/IHByZWZpeCA6IChwcmVmaXggJiYgcHJlZml4ICsgXCItXCIpICsgYnVmZmVyLCBuZWdhdGUsIGltcG9ydGFudCk7XG4gIHJldHVybiBcIlwiO1xufTtcbnZhciBwYXJzZVN0cmluZyA9ICh0b2tlbiwgaXNWYXJpYW50KSA9PiB7XG4gIGxldCBjaGFyO1xuICBsZXQgYnVmZmVyID0gXCJcIjtcbiAgZm9yIChsZXQgcG9zaXRpb24yID0gMDsgcG9zaXRpb24yIDwgdG9rZW4ubGVuZ3RoOyApIHtcbiAgICBzd2l0Y2ggKGNoYXIgPSB0b2tlbltwb3NpdGlvbjIrK10pIHtcbiAgICAgIGNhc2UgXCI6XCI6XG4gICAgICAgIGJ1ZmZlciA9IGJ1ZmZlciAmJiBzdGFydEdyb3VwaW5nKFwiOlwiICsgKHRva2VuW3Bvc2l0aW9uMl0gPT09IGNoYXIgPyB0b2tlbltwb3NpdGlvbjIrK10gOiBcIlwiKSArIGJ1ZmZlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIihcIjpcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyICYmIHN0YXJ0R3JvdXBpbmcoYnVmZmVyKTtcbiAgICAgICAgc3RhcnRHcm91cGluZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIpXCI6XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgY2FzZSBcIlx0XCI6XG4gICAgICBjYXNlIFwiXFxuXCI6XG4gICAgICBjYXNlIFwiXFxyXCI6XG4gICAgICAgIGJ1ZmZlciA9IGJ1ZmZlciAmJiBzYXZlUnVsZShidWZmZXIpO1xuICAgICAgICBlbmRHcm91cGluZyhjaGFyICE9PSBcIilcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnVmZmVyICs9IGNoYXI7XG4gICAgfVxuICB9XG4gIGlmIChidWZmZXIpIHtcbiAgICBpZiAoaXNWYXJpYW50KSB7XG4gICAgICBzdGFydEdyb3VwaW5nKFwiOlwiICsgYnVmZmVyKTtcbiAgICB9IGVsc2UgaWYgKGJ1ZmZlci5zbGljZSgtMSkgPT09IFwiLVwiKSB7XG4gICAgICBzdGFydEdyb3VwaW5nKGJ1ZmZlci5zbGljZSgwLCAtMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYXZlUnVsZShidWZmZXIpO1xuICAgIH1cbiAgfVxufTtcbnZhciBwYXJzZUdyb3VwZWRUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBzdGFydEdyb3VwaW5nKCk7XG4gIHBhcnNlVG9rZW4odG9rZW4pO1xuICBlbmRHcm91cGluZygpO1xufTtcbnZhciBwYXJzZUdyb3VwID0gKGtleSwgdG9rZW4pID0+IHtcbiAgaWYgKHRva2VuKSB7XG4gICAgc3RhcnRHcm91cGluZygpO1xuICAgIGNvbnN0IGlzVmFyaWFudCA9IGluY2x1ZGVzKFwidGJ1XCIsICh0eXBlb2YgdG9rZW4pWzFdKTtcbiAgICBwYXJzZVN0cmluZyhrZXksIGlzVmFyaWFudCk7XG4gICAgaWYgKGlzVmFyaWFudCkge1xuICAgICAgcGFyc2VHcm91cGVkVG9rZW4odG9rZW4pO1xuICAgIH1cbiAgICBlbmRHcm91cGluZygpO1xuICB9XG59O1xudmFyIHBhcnNlVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdG9rZW4pIHtcbiAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICBwYXJzZVN0cmluZyh0b2tlbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIGFkZFJ1bGUodG9rZW4pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW4pKSB7XG4gICAgICAgIHRva2VuLmZvckVhY2gocGFyc2VHcm91cGVkVG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbikge1xuICAgICAgICBPYmplY3Qua2V5cyh0b2tlbikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgcGFyc2VHcm91cChrZXksIHRva2VuW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxufTtcbnZhciBzdGF0aWNzQ2FjaGVzID0gbmV3IFdlYWtNYXAoKTtcbnZhciBidWlsZFN0YXRpY3MgPSAoc3RyaW5ncykgPT4ge1xuICBsZXQgc3RhdGljcyA9IHN0YXRpY3NDYWNoZXMuZ2V0KHN0cmluZ3MpO1xuICBpZiAoIXN0YXRpY3MpIHtcbiAgICBsZXQgc2xvd01vZGVJbmRleCA9IE5hTjtcbiAgICBsZXQgYnVmZmVyID0gXCJcIjtcbiAgICBzdGF0aWNzID0gc3RyaW5ncy5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHNsb3dNb2RlSW5kZXggIT09IHNsb3dNb2RlSW5kZXggJiYgaW5jbHVkZXMoXCI6LShcIiwgKHN0cmluZ3NbaW5kZXggKyAxXSB8fCBcIlwiKVswXSkpIHtcbiAgICAgICAgc2xvd01vZGVJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID49IHNsb3dNb2RlSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChpbnRlcnBvbGF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSBzbG93TW9kZUluZGV4KSB7XG4gICAgICAgICAgICBidWZmZXIgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidWZmZXIgKz0gdG9rZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSBpbnRlcnBvbGF0aW9uO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgcGFyc2VTdHJpbmcoYnVmZmVyKTtcbiAgICAgICAgICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICBwYXJzZVRva2VuKGludGVycG9sYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggPT09IHN0cmluZ3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcGFyc2VTdHJpbmcoYnVmZmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCBzdGF0aWNSdWxlcyA9IHJ1bGVzID0gW107XG4gICAgICBwYXJzZVN0cmluZyh0b2tlbik7XG4gICAgICBjb25zdCBhY3RpdmVHcm91cGluZ3MgPSBbLi4uZ3JvdXBpbmdzXTtcbiAgICAgIHJ1bGVzID0gW107XG4gICAgICByZXR1cm4gKGludGVycG9sYXRpb24pID0+IHtcbiAgICAgICAgcnVsZXMucHVzaCguLi5zdGF0aWNSdWxlcyk7XG4gICAgICAgIGdyb3VwaW5ncyA9IFsuLi5hY3RpdmVHcm91cGluZ3NdO1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgIHBhcnNlVG9rZW4oaW50ZXJwb2xhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgc3RhdGljc0NhY2hlcy5zZXQoc3RyaW5ncywgc3RhdGljcyk7XG4gIH1cbiAgcmV0dXJuIHN0YXRpY3M7XG59O1xudmFyIHBhcnNlID0gKHRva2VucykgPT4ge1xuICBncm91cGluZ3MgPSBbXTtcbiAgcnVsZXMgPSBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5zWzBdKSAmJiBBcnJheS5pc0FycmF5KHRva2Vuc1swXS5yYXcpKSB7XG4gICAgYnVpbGRTdGF0aWNzKHRva2Vuc1swXSkuZm9yRWFjaCgoYXBwbHkyLCBpbmRleCkgPT4gYXBwbHkyKHRva2Vuc1tpbmRleCArIDFdKSk7XG4gIH0gZWxzZSB7XG4gICAgcGFyc2VUb2tlbih0b2tlbnMpO1xuICB9XG4gIHJldHVybiBydWxlcztcbn07XG5cbi8vIHNyYy90d2luZC9kaXJlY3RpdmUudHNcbnZhciBpc0Z1bmN0aW9uRnJlZTtcbnZhciBkZXRlY3RGdW5jdGlvbiA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgaXNGdW5jdGlvbkZyZWUgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIHN0cmluZ2lmeSA9IChkYXRhKSA9PiB7XG4gIGlzRnVuY3Rpb25GcmVlID0gdHJ1ZTtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgZGV0ZWN0RnVuY3Rpb24pO1xuICByZXR1cm4gaXNGdW5jdGlvbkZyZWUgJiYga2V5O1xufTtcbnZhciBjYWNoZUJ5RmFjdG9yeSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZGlyZWN0aXZlID0gKGZhY3RvcnksIGRhdGEpID0+IHtcbiAgY29uc3Qga2V5ID0gc3RyaW5naWZ5KGRhdGEpO1xuICBsZXQgZGlyZWN0aXZlMjtcbiAgaWYgKGtleSkge1xuICAgIHZhciBjYWNoZSA9IGNhY2hlQnlGYWN0b3J5LmdldChmYWN0b3J5KTtcbiAgICBpZiAoIWNhY2hlKSB7XG4gICAgICBjYWNoZUJ5RmFjdG9yeS5zZXQoZmFjdG9yeSwgY2FjaGUgPSBuZXcgTWFwKCkpO1xuICAgIH1cbiAgICBkaXJlY3RpdmUyID0gY2FjaGUuZ2V0KGtleSk7XG4gIH1cbiAgaWYgKCFkaXJlY3RpdmUyKSB7XG4gICAgZGlyZWN0aXZlMiA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgocGFyYW1zLCBjb250ZXh0KSA9PiB7XG4gICAgICBjb250ZXh0ID0gQXJyYXkuaXNBcnJheShwYXJhbXMpID8gY29udGV4dCA6IHBhcmFtcztcbiAgICAgIHJldHVybiBldmFsVGh1bmsoZmFjdG9yeShkYXRhLCBjb250ZXh0KSwgY29udGV4dCk7XG4gICAgfSwgXCJ0b0pTT05cIiwge1xuICAgICAgdmFsdWU6ICgpID0+IGtleSB8fCBkYXRhXG4gICAgfSk7XG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICBjYWNoZS5zZXQoa2V5LCBkaXJlY3RpdmUyKTtcbiAgICAgIGVuc3VyZU1heFNpemUoY2FjaGUsIDFlNCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaXJlY3RpdmUyO1xufTtcblxuLy8gc3JjL3R3aW5kL2FwcGx5LnRzXG52YXIgYXBwbHlGYWN0b3J5ID0gKHRva2Vucywge2Nzc30pID0+IGNzcyhwYXJzZSh0b2tlbnMpKTtcbnZhciBhcHBseSA9ICguLi50b2tlbnMpID0+IGRpcmVjdGl2ZShhcHBseUZhY3RvcnksIHRva2Vucyk7XG5cbi8vIHNyYy90d2luZC9oZWxwZXJzLnRzXG52YXIgcG9zaXRpb25zID0gKHJlc29sdmUpID0+ICh2YWx1ZSwgcG9zaXRpb24yLCBwcmVmaXgsIHN1ZmZpeCkgPT4ge1xuICBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gcG9zaXRpb24yICYmIHJlc29sdmUocG9zaXRpb24yKTtcbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0aWVzLnJlZHVjZSgoZGVjbGFyYXRpb25zLCBwcm9wZXJ0eTIpID0+IHtcbiAgICAgICAgZGVjbGFyYXRpb25zW2pvaW5UcnV0aHkoW3ByZWZpeCwgcHJvcGVydHkyLCBzdWZmaXhdKV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH1cbn07XG52YXIgY29ybmVycyA9IHBvc2l0aW9ucygoa2V5KSA9PiAoe1xuICB0OiBbXCJ0b3AtbGVmdFwiLCBcInRvcC1yaWdodFwiXSxcbiAgcjogW1widG9wLXJpZ2h0XCIsIFwiYm90dG9tLXJpZ2h0XCJdLFxuICBiOiBbXCJib3R0b20tbGVmdFwiLCBcImJvdHRvbS1yaWdodFwiXSxcbiAgbDogW1wiYm90dG9tLWxlZnRcIiwgXCJ0b3AtbGVmdFwiXSxcbiAgdGw6IFtcInRvcC1sZWZ0XCJdLFxuICB0cjogW1widG9wLXJpZ2h0XCJdLFxuICBibDogW1wiYm90dG9tLWxlZnRcIl0sXG4gIGJyOiBbXCJib3R0b20tcmlnaHRcIl1cbn0pW2tleV0pO1xudmFyIGV4cGFuZEVkZ2VzID0gKGtleSkgPT4ge1xuICBjb25zdCBwYXJ0cyA9ICh7eDogXCJsclwiLCB5OiBcInRiXCJ9W2tleV0gfHwga2V5IHx8IFwiXCIpLnNwbGl0KFwiXCIpLnNvcnQoKTtcbiAgZm9yIChsZXQgaW5kZXggPSBwYXJ0cy5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgIGlmICghKHBhcnRzW2luZGV4XSA9IHtcbiAgICAgIHQ6IFwidG9wXCIsXG4gICAgICByOiBcInJpZ2h0XCIsXG4gICAgICBiOiBcImJvdHRvbVwiLFxuICAgICAgbDogXCJsZWZ0XCJcbiAgICB9W3BhcnRzW2luZGV4XV0pKVxuICAgICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXJ0cy5sZW5ndGgpXG4gICAgcmV0dXJuIHBhcnRzO1xufTtcbnZhciBlZGdlcyA9IHBvc2l0aW9ucyhleHBhbmRFZGdlcyk7XG5cbi8vIHNyYy90d2luZC9wbHVnaW5zLnRzXG52YXIgXztcbnZhciBfXztcbnZhciAkO1xudmFyIHByb3BlcnR5ID0gKHByb3BlcnR5MikgPT4gKHBhcmFtcywgY29udGV4dCwgaWQpID0+ICh7XG4gIFtwcm9wZXJ0eTJdOiBpZCArICgoXyA9IGpvaW4ocGFyYW1zKSkgJiYgXCItXCIgKyBfKVxufSk7XG52YXIgcHJvcGVydHlWYWx1ZSA9IChwcm9wZXJ0eTIsIHNlcGFyYXRvcikgPT4gKHBhcmFtcywgY29udGV4dCwgaWQpID0+ICh7XG4gIFtwcm9wZXJ0eTIgfHwgaWRdOiBqb2luKHBhcmFtcywgc2VwYXJhdG9yKVxufSk7XG52YXIgdGhlbWVQcm9wZXJ0eSA9IChzZWN0aW9uKSA9PiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkKSA9PiAoe1xuICBbc2VjdGlvbiB8fCBpZF06IHRoZW1lMihzZWN0aW9uIHx8IGlkLCBwYXJhbXMpXG59KTtcbnZhciBhbGlhcyA9IChoYW5kbGVyLCBuYW1lKSA9PiAocGFyYW1zLCBjb250ZXh0KSA9PiBoYW5kbGVyKHBhcmFtcywgY29udGV4dCwgbmFtZSk7XG52YXIgZGlzcGxheSA9IHByb3BlcnR5KFwiZGlzcGxheVwiKTtcbnZhciBwb3NpdGlvbiA9IHByb3BlcnR5KFwicG9zaXRpb25cIik7XG52YXIgdGV4dFRyYW5zZm9ybSA9IHByb3BlcnR5KFwidGV4dFRyYW5zZm9ybVwiKTtcbnZhciB0ZXh0RGVjb3JhdGlvbiA9IHByb3BlcnR5KFwidGV4dERlY29yYXRpb25cIik7XG52YXIgZm9udFN0eWxlID0gcHJvcGVydHkoXCJmb250U3R5bGVcIik7XG52YXIgZm9udFZhcmlhbnROdW1lcmljID0gKGtleSkgPT4gKHBhcmFtcywgY29udGV4dCwgaWQpID0+ICh7XG4gIFtcIi0tdHctXCIgKyBrZXldOiBpZCxcbiAgZm9udFZhcmlhbnROdW1lcmljOiBcInZhcigtLXR3LW9yZGluYWwsLyohKi8gLyohKi8pIHZhcigtLXR3LXNsYXNoZWQtemVybywvKiEqLyAvKiEqLykgdmFyKC0tdHctbnVtZXJpYy1maWd1cmUsLyohKi8gLyohKi8pIHZhcigtLXR3LW51bWVyaWMtc3BhY2luZywvKiEqLyAvKiEqLykgdmFyKC0tdHctbnVtZXJpYy1mcmFjdGlvbiwvKiEqLyAvKiEqLylcIlxufSk7XG52YXIgaW5zZXQgPSAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkKSA9PiAoe1tpZF06IHRoZW1lMihcImluc2V0XCIsIHBhcmFtcyl9KTtcbnZhciBvcGFjaXR5UHJvcGVydHkgPSAocGFyYW1zLCB0aGVtZTIsIGlkLCBzZWN0aW9uID0gaWQpID0+ICh7XG4gIFtgLS10dy0ke2lkfS1vcGFjaXR5YF06IHRoZW1lMihzZWN0aW9uICsgXCJPcGFjaXR5XCIsIHRhaWwocGFyYW1zKSlcbn0pO1xudmFyIHBhcnNlQ29sb3JDb21wb25lbnQgPSAoY2hhcnMsIGZhY3RvcikgPT4gTWF0aC5yb3VuZChwYXJzZUludChjaGFycywgMTYpICogZmFjdG9yKTtcbnZhciBhc1JHQkEgPSAoY29sb3IsIG9wYWNpdHlQcm9wZXJ0eTIsIG9wYWNpdHlEZWZhdWx0KSA9PiB7XG4gIGlmIChjb2xvciAmJiBjb2xvclswXSA9PT0gXCIjXCIpIHtcbiAgICByZXR1cm4gYHJnYmEoJHtwYXJzZUNvbG9yQ29tcG9uZW50KGNvbG9yLnN1YnN0cigxLCBfID0gKGNvbG9yLmxlbmd0aCAtIDEpIC8gMyksICQgPSBbMTcsIDEsIDAuMDYyMjcyXVtfIC0gMV0pfSwke3BhcnNlQ29sb3JDb21wb25lbnQoY29sb3Iuc3Vic3RyKDEgKyBfLCBfKSwgJCl9LCR7cGFyc2VDb2xvckNvbXBvbmVudChjb2xvci5zdWJzdHIoMSArIDIgKiBfLCBfKSwgJCl9LCR7b3BhY2l0eVByb3BlcnR5MiA/IGB2YXIoLS10dy0ke29wYWNpdHlQcm9wZXJ0eTJ9JHtvcGFjaXR5RGVmYXVsdCA/IFwiLFwiICsgb3BhY2l0eURlZmF1bHQgOiBcIlwifSlgIDogb3BhY2l0eURlZmF1bHQgfHwgMX0pYDtcbiAgfVxuICByZXR1cm4gY29sb3I7XG59O1xudmFyIHdpdGhPcGFjaXR5RmFsbGJhY2sgPSAocHJvcGVydHkyLCBraW5kLCBjb2xvcikgPT4gY29sb3IgJiYgKF8gPSBhc1JHQkEoY29sb3IsIGtpbmQgKyBcIi1vcGFjaXR5XCIpKSAmJiBfICE9PSBjb2xvciA/IHtcbiAgW2AtLXR3LSR7a2luZH0tb3BhY2l0eWBdOiBcIjFcIixcbiAgW3Byb3BlcnR5Ml06IFtjb2xvciwgX11cbn0gOiB7W3Byb3BlcnR5Ml06IGNvbG9yfTtcbnZhciB0cmFuc3BhcmVudFRvID0gKGNvbG9yKSA9PiAoJCA9IGFzUkdCQShjb2xvciwgXCJcIiwgXCIwXCIpKSA9PT0gXyA/IFwidHJhbnNwYXJlbnRcIiA6ICQ7XG52YXIgcmV2ZXJzYWJsZUVkZ2UgPSAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkLCBzZWN0aW9uLCBwcmVmaXgsIHN1ZmZpeCkgPT4gKF8gPSB7eDogW1wicmlnaHRcIiwgXCJsZWZ0XCJdLCB5OiBbXCJib3R0b21cIiwgXCJ0b3BcIl19W3BhcmFtc1swXV0pICYmICgkID0gYC0tdHctJHtpZH0tJHtwYXJhbXNbMF19LXJldmVyc2VgKSA/IHBhcmFtc1sxXSA9PT0gXCJyZXZlcnNlXCIgPyB7XG4gIFskXTogXCIxXCJcbn0gOiB7XG4gIFskXTogXCIwXCIsXG4gIFtqb2luVHJ1dGh5KFtwcmVmaXgsIF9bMF0sIHN1ZmZpeF0pXTogKF9fID0gdGhlbWUyKHNlY3Rpb24sIHRhaWwocGFyYW1zKSkpICYmIGBjYWxjKCR7X199ICogdmFyKCR7JH0pKWAsXG4gIFtqb2luVHJ1dGh5KFtwcmVmaXgsIF9bMV0sIHN1ZmZpeF0pXTogX18gJiYgW19fLCBgY2FsYygke19ffSAqIGNhbGMoMSAtIHZhcigkeyR9KSkpYF1cbn0gOiB2b2lkIDA7XG52YXIgcGxhY2VIZWxwZXIgPSAocHJvcGVydHkyLCBwYXJhbXMpID0+ICh7XG4gIFtwcm9wZXJ0eTJdOiAoaW5jbHVkZXMoXCJ3dW5cIiwgKHBhcmFtc1swXSB8fCBcIlwiKVszXSkgPyBcInNwYWNlLVwiIDogXCJcIikgKyBwYXJhbXNbMF1cbn0pO1xudmFyIGNvbnRlbnRQbHVnaW5Gb3IgPSAocHJvcGVydHkyKSA9PiAocGFyYW1zKSA9PiBpbmNsdWRlcyhbXCJzdGFydFwiLCBcImVuZFwiXSwgcGFyYW1zWzBdKSA/IHtbcHJvcGVydHkyXTogYGZsZXgtJHtwYXJhbXNbMF19YH0gOiBwbGFjZUhlbHBlcihwcm9wZXJ0eTIsIHBhcmFtcyk7XG52YXIgZ3JpZFBsdWdpbiA9IChraW5kKSA9PiAocGFyYW1zKSA9PiB7XG4gIHN3aXRjaCAocGFyYW1zWzBdKSB7XG4gICAgY2FzZSBcImF1dG9cIjpcbiAgICAgIHJldHVybiB7W2BncmlkLSR7a2luZH1gXTogXCJhdXRvXCJ9O1xuICAgIGNhc2UgXCJzcGFuXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYGdyaWQtJHtraW5kfWBdOiBwYXJhbXNbMV0gPT09IFwiZnVsbFwiID8gXCIxIC8gLTFcIiA6IGBzcGFuICR7cGFyYW1zWzFdfSAvIHNwYW4gJHtwYXJhbXNbMV19YFxuICAgICAgfTtcbiAgICBjYXNlIFwic3RhcnRcIjpcbiAgICBjYXNlIFwiZW5kXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYGdyaWQtJHtraW5kfS0ke3BhcmFtc1swXX1gXTogcGFyYW1zWzFdXG4gICAgICB9O1xuICB9XG59O1xudmFyIGJvcmRlciA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+IHtcbiAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICBjYXNlIFwic29saWRcIjpcbiAgICBjYXNlIFwiZGFzaGVkXCI6XG4gICAgY2FzZSBcImRvdHRlZFwiOlxuICAgIGNhc2UgXCJkb3VibGVcIjpcbiAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJib3JkZXJTdHlsZVwiKShwYXJhbXMpO1xuICAgIGNhc2UgXCJjb2xsYXBzZVwiOlxuICAgIGNhc2UgXCJzZXBhcmF0ZVwiOlxuICAgICAgcmV0dXJuIHByb3BlcnR5VmFsdWUoXCJib3JkZXJDb2xsYXBzZVwiKShwYXJhbXMpO1xuICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICByZXR1cm4gb3BhY2l0eVByb3BlcnR5KHBhcmFtcywgdGhlbWUyLCBpZCk7XG4gIH1cbiAgcmV0dXJuIChfID0gdGhlbWUyKGlkICsgXCJXaWR0aFwiLCBwYXJhbXMsIFwiXCIpKSA/IHtib3JkZXJXaWR0aDogX30gOiB3aXRoT3BhY2l0eUZhbGxiYWNrKFwiYm9yZGVyQ29sb3JcIiwgaWQsIHRoZW1lMihpZCArIFwiQ29sb3JcIiwgcGFyYW1zKSk7XG59O1xudmFyIHRyYW5zZm9ybSA9IChncHUpID0+IChncHUgPyBcInRyYW5zbGF0ZTNkKHZhcigtLXR3LXRyYW5zbGF0ZS14LDApLHZhcigtLXR3LXRyYW5zbGF0ZS15LDApLDApXCIgOiBcInRyYW5zbGF0ZVgodmFyKC0tdHctdHJhbnNsYXRlLXgsMCkpIHRyYW5zbGF0ZVkodmFyKC0tdHctdHJhbnNsYXRlLXksMCkpXCIpICsgXCIgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSwwKSkgc2tld1godmFyKC0tdHctc2tldy14LDApKSBza2V3WSh2YXIoLS10dy1za2V3LXksMCkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14LDEpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSwxKSlcIjtcbnZhciB0cmFuc2Zvcm1YWUZ1bmN0aW9uID0gKHBhcmFtcywgY29udGV4dCwgaWQpID0+IChfID0gY29udGV4dC50aGVtZShpZCwgcGFyYW1zWzFdIHx8IHBhcmFtc1swXSkpICYmIHtcbiAgW2AtLXR3LSR7aWR9LXhgXTogcGFyYW1zWzBdICE9PSBcInlcIiAmJiBfLFxuICBbYC0tdHctJHtpZH0teWBdOiBwYXJhbXNbMF0gIT09IFwieFwiICYmIF8sXG4gIHRyYW5zZm9ybTogW2Ake2lkfSR7cGFyYW1zWzFdID8gcGFyYW1zWzBdLnRvVXBwZXJDYXNlKCkgOiBcIlwifSgke199KWAsIHRyYW5zZm9ybSgpXVxufTtcbnZhciBlZGdlc1BsdWdpbkZvciA9IChrZXkpID0+IChwYXJhbXMsIGNvbnRleHQsIGlkKSA9PiBpZFsxXSA/IGVkZ2VzKGNvbnRleHQudGhlbWUoa2V5LCBwYXJhbXMpLCBpZFsxXSwga2V5KSA6IHRoZW1lUHJvcGVydHkoa2V5KShwYXJhbXMsIGNvbnRleHQsIGlkKTtcbnZhciBwYWRkaW5nID0gZWRnZXNQbHVnaW5Gb3IoXCJwYWRkaW5nXCIpO1xudmFyIG1hcmdpbiA9IGVkZ2VzUGx1Z2luRm9yKFwibWFyZ2luXCIpO1xudmFyIG1pbk1heCA9IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+IChfID0ge3c6IFwid2lkdGhcIiwgaDogXCJoZWlnaHRcIn1bcGFyYW1zWzBdXSkgJiYge1xuICBbXyA9IGAke2lkfSR7Y2FwaXRhbGl6ZShfKX1gXTogdGhlbWUyKF8sIHRhaWwocGFyYW1zKSlcbn07XG52YXIgY29yZVBsdWdpbnMgPSB7XG4gIGdyb3VwOiAocGFyYW1zLCB7dGFnfSwgaWQpID0+IHRhZyhqb2luKFtpZCwgLi4ucGFyYW1zXSkpLFxuICBoaWRkZW46IGFsaWFzKGRpc3BsYXksIFwibm9uZVwiKSxcbiAgaW5saW5lOiBkaXNwbGF5LFxuICBibG9jazogZGlzcGxheSxcbiAgY29udGVudHM6IGRpc3BsYXksXG4gIGZsb3c6IGRpc3BsYXksXG4gIHRhYmxlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gaW5jbHVkZXMoW1wiYXV0b1wiLCBcImZpeGVkXCJdLCBwYXJhbXNbMF0pID8ge3RhYmxlTGF5b3V0OiBwYXJhbXNbMF19IDogZGlzcGxheShwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgZmxleChwYXJhbXMsIGNvbnRleHQsIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJyb3dcIjpcbiAgICAgIGNhc2UgXCJjb2xcIjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBqb2luKHBhcmFtc1swXSA9PT0gXCJjb2xcIiA/IFtcImNvbHVtblwiLCAuLi50YWlsKHBhcmFtcyldIDogcGFyYW1zKVxuICAgICAgICB9O1xuICAgICAgY2FzZSBcIm5vd3JhcFwiOlxuICAgICAgY2FzZSBcIndyYXBcIjpcbiAgICAgICAgcmV0dXJuIHtmbGV4V3JhcDogam9pbihwYXJhbXMpfTtcbiAgICAgIGNhc2UgXCJncm93XCI6XG4gICAgICBjYXNlIFwic2hyaW5rXCI6XG4gICAgICAgIHJldHVybiB7W2BmbGV4LSR7cGFyYW1zWzBdfWBdOiBwYXJhbXNbMV0gfHwgXCIxXCJ9O1xuICAgIH1cbiAgICByZXR1cm4gKF8gPSBjb250ZXh0LnRoZW1lKFwiZmxleFwiLCBwYXJhbXMsIFwiXCIpKSA/IHtmbGV4OiBffSA6IGRpc3BsYXkocGFyYW1zLCBjb250ZXh0LCBpZCk7XG4gIH0sXG4gIGdyaWQocGFyYW1zLCBjb250ZXh0LCBpZCkge1xuICAgIHN3aXRjaCAocGFyYW1zWzBdKSB7XG4gICAgICBjYXNlIFwiY29sc1wiOlxuICAgICAgY2FzZSBcInJvd3NcIjpcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sZW5ndGggPiAxICYmIHtcbiAgICAgICAgICBbYGdyaWQtdGVtcGxhdGUtJHtwYXJhbXNbMF0gPT09IFwiY29sc1wiID8gXCJjb2x1bW5zXCIgOiBwYXJhbXNbMF19YF06IHBhcmFtcy5sZW5ndGggPT09IDIgJiYgTnVtYmVyKHBhcmFtc1sxXSkgPyBgcmVwZWF0KCR7cGFyYW1zWzFdfSxtaW5tYXgoMCwxZnIpKWAgOiBqb2luKHRhaWwocGFyYW1zKSwgXCIgXCIpXG4gICAgICAgIH07XG4gICAgICBjYXNlIFwiZmxvd1wiOlxuICAgICAgICByZXR1cm4gcGFyYW1zLmxlbmd0aCA+IDEgJiYge1xuICAgICAgICAgIGdyaWRBdXRvRmxvdzogam9pbihwYXJhbXNbMV0gPT09IFwiY29sXCIgPyBbXCJjb2x1bW5cIiwgLi4udGFpbChwYXJhbXMsIDIpXSA6IHRhaWwocGFyYW1zKSwgXCIgXCIpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5KHBhcmFtcywgY29udGV4dCwgaWQpO1xuICB9LFxuICBhdXRvOiAocGFyYW1zKSA9PiBpbmNsdWRlcyhbXCJjb2xzXCIsIFwicm93c1wiXSwgcGFyYW1zWzBdKSAmJiAoXyA9IHBhcmFtcy5sZW5ndGggPT09IDIgPyB7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgbWluOiBcIm1pbi1jb250ZW50XCIsXG4gICAgbWF4OiBcIm1heC1jb250ZW50XCIsXG4gICAgZnI6IFwibWlubWF4KDAsMWZyKVwiXG4gIH1bcGFyYW1zWzFdXSB8fCBgbWlubWF4KDAsJHtwYXJhbXNbMV19KWAgOiBwYXJhbXMubGVuZ3RoID4gMiAmJiBgbWlubWF4KCR7am9pbih0YWlsKHBhcmFtcyksIFwiLFwiKX0pYCkgJiYge1xuICAgIFtgZ3JpZC1hdXRvLSR7cGFyYW1zWzBdID09PSBcImNvbHNcIiA/IFwiY29sdW1uc1wiIDogXCJyb3dzXCJ9YF06IF9cbiAgfSxcbiAgc3RhdGljOiBwb3NpdGlvbixcbiAgZml4ZWQ6IHBvc2l0aW9uLFxuICBhYnNvbHV0ZTogcG9zaXRpb24sXG4gIHJlbGF0aXZlOiBwb3NpdGlvbixcbiAgc3RpY2t5OiBwb3NpdGlvbixcbiAgdmlzaWJsZToge3Zpc2liaWxpdHk6IFwidmlzaWJsZVwifSxcbiAgaW52aXNpYmxlOiB7dmlzaWJpbGl0eTogXCJoaWRkZW5cIn0sXG4gIGFudGlhbGlhc2VkOiB7XG4gICAgV2Via2l0Rm9udFNtb290aGluZzogXCJhbnRpYWxpYXNlZFwiLFxuICAgIE1vek9zeEZvbnRTbW9vdGhpbmc6IFwiZ3JheXNjYWxlXCJcbiAgfSxcbiAgXCJzdWJwaXhlbC1hbnRpYWxpYXNlZFwiOiB7XG4gICAgV2Via2l0Rm9udFNtb290aGluZzogXCJhdXRvXCIsXG4gICAgTW96T3N4Rm9udFNtb290aGluZzogXCJhdXRvXCJcbiAgfSxcbiAgdHJ1bmNhdGU6IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwic3Itb25seVwiOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB3aWR0aDogXCIxcHhcIixcbiAgICBoZWlnaHQ6IFwiMXB4XCIsXG4gICAgcGFkZGluZzogXCIwXCIsXG4gICAgbWFyZ2luOiBcIi0xcHhcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIGNsaXA6IFwicmVjdCgwLDAsMCwwKVwiLFxuICAgIGJvcmRlcldpZHRoOiBcIjBcIlxuICB9LFxuICBcIm5vdC1zci1vbmx5XCI6IHtcbiAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICBwYWRkaW5nOiBcIjBcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIG92ZXJmbG93OiBcInZpc2libGVcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLFxuICAgIGNsaXA6IFwiYXV0b1wiXG4gIH0sXG4gIHJlc2l6ZTogKHBhcmFtcykgPT4gKHtcbiAgICByZXNpemU6IHt4OiBcInZlcnRpY2FsXCIsIHk6IFwiaG9yaXpvbnRhbFwifVtwYXJhbXNbMF1dIHx8IHBhcmFtc1swXSB8fCBcImJvdGhcIlxuICB9KSxcbiAgYm94OiAocGFyYW1zKSA9PiAoe1wiYm94LXNpemluZ1wiOiBgJHtwYXJhbXNbMF19LWJveGB9KSxcbiAgYXBwZWFyYW5jZTogcHJvcGVydHlWYWx1ZSgpLFxuICBjdXJzb3I6IHByb3BlcnR5VmFsdWUoKSxcbiAgZmxvYXQ6IHByb3BlcnR5VmFsdWUoKSxcbiAgY2xlYXI6IHByb3BlcnR5VmFsdWUoKSxcbiAgdG9wOiBpbnNldCxcbiAgcmlnaHQ6IGluc2V0LFxuICBib3R0b206IGluc2V0LFxuICBsZWZ0OiBpbnNldCxcbiAgaW5zZXQ6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSBleHBhbmRFZGdlcyhwYXJhbXNbMF0pKSA/IGVkZ2VzKHRoZW1lMihcImluc2V0XCIsIHRhaWwocGFyYW1zKSksIHBhcmFtc1swXSkgOiAoXyA9IHRoZW1lMihcImluc2V0XCIsIHBhcmFtcykpICYmIHtcbiAgICB0b3A6IF8sXG4gICAgcmlnaHQ6IF8sXG4gICAgYm90dG9tOiBfLFxuICAgIGxlZnQ6IF9cbiAgfSxcbiAgdW5kZXJsaW5lOiB0ZXh0RGVjb3JhdGlvbixcbiAgXCJsaW5lLXRocm91Z2hcIjogdGV4dERlY29yYXRpb24sXG4gIFwibm8tdW5kZXJsaW5lXCI6IGFsaWFzKHRleHREZWNvcmF0aW9uLCBcIm5vbmVcIiksXG4gIFwidGV4dC11bmRlcmxpbmVcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwidW5kZXJsaW5lXCIpLFxuICBcInRleHQtbm8tdW5kZXJsaW5lXCI6IGFsaWFzKHRleHREZWNvcmF0aW9uLCBcIm5vbmVcIiksXG4gIFwidGV4dC1saW5lLXRocm91Z2hcIjogYWxpYXModGV4dERlY29yYXRpb24sIFwibGluZS10aHJvdWdoXCIpLFxuICB1cHBlcmNhc2U6IHRleHRUcmFuc2Zvcm0sXG4gIGxvd2VyY2FzZTogdGV4dFRyYW5zZm9ybSxcbiAgY2FwaXRhbGl6ZTogdGV4dFRyYW5zZm9ybSxcbiAgXCJub3JtYWwtY2FzZVwiOiBhbGlhcyh0ZXh0VHJhbnNmb3JtLCBcIm5vbmVcIiksXG4gIFwidGV4dC1ub3JtYWwtY2FzZVwiOiBhbGlhcyh0ZXh0VHJhbnNmb3JtLCBcIm5vbmVcIiksXG4gIGl0YWxpYzogZm9udFN0eWxlLFxuICBcIm5vdC1pdGFsaWNcIjogYWxpYXMoZm9udFN0eWxlLCBcIm5vcm1hbFwiKSxcbiAgXCJmb250LWl0YWxpY1wiOiBhbGlhcyhmb250U3R5bGUsIFwiaXRhbGljXCIpLFxuICBcImZvbnQtbm90LWl0YWxpY1wiOiBhbGlhcyhmb250U3R5bGUsIFwibm9ybWFsXCIpLFxuICBmb250OiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSBjb250ZXh0LnRoZW1lKFwiZm9udEZhbWlseVwiLCBwYXJhbXMsIFwiXCIpKSA/IHtmb250RmFtaWx5OiBffSA6IHRoZW1lUHJvcGVydHkoXCJmb250V2VpZ2h0XCIpKHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBpdGVtczogKHBhcmFtcykgPT4gKHtcbiAgICBhbGlnbkl0ZW1zOiBpbmNsdWRlcyhbXCJzdGFydFwiLCBcImVuZFwiXSwgcGFyYW1zWzBdKSA/IGBmbGV4LSR7cGFyYW1zWzBdfWAgOiBqb2luKHBhcmFtcylcbiAgfSksXG4gIFwianVzdGlmeS1zZWxmXCI6IHByb3BlcnR5VmFsdWUoKSxcbiAgXCJqdXN0aWZ5LWl0ZW1zXCI6IHByb3BlcnR5VmFsdWUoKSxcbiAganVzdGlmeTogY29udGVudFBsdWdpbkZvcihcImp1c3RpZnlDb250ZW50XCIpLFxuICBjb250ZW50OiBjb250ZW50UGx1Z2luRm9yKFwiYWxpZ25Db250ZW50XCIpLFxuICBzZWxmOiBjb250ZW50UGx1Z2luRm9yKFwiYWxpZ25TZWxmXCIpLFxuICBwbGFjZTogKHBhcmFtcykgPT4gcGxhY2VIZWxwZXIoXCJwbGFjZS1cIiArIHBhcmFtc1swXSwgdGFpbChwYXJhbXMpKSxcbiAgb3ZlcnNjcm9sbDogKHBhcmFtcykgPT4gKHtcbiAgICBbXCJvdmVyc2Nyb2xsQmVoYXZpb3JcIiArIChwYXJhbXNbMV0gPyBcIi1cIiArIHBhcmFtc1swXSA6IFwiXCIpXTogcGFyYW1zWzFdIHx8IHBhcmFtc1swXVxuICB9KSxcbiAgY29sOiBncmlkUGx1Z2luKFwiY29sdW1uXCIpLFxuICByb3c6IGdyaWRQbHVnaW4oXCJyb3dcIiksXG4gIGR1cmF0aW9uOiB0aGVtZVByb3BlcnR5KFwidHJhbnNpdGlvbkR1cmF0aW9uXCIpLFxuICBkZWxheTogdGhlbWVQcm9wZXJ0eShcInRyYW5zaXRpb25EZWxheVwiKSxcbiAgdHJhY2tpbmc6IHRoZW1lUHJvcGVydHkoXCJsZXR0ZXJTcGFjaW5nXCIpLFxuICBsZWFkaW5nOiB0aGVtZVByb3BlcnR5KFwibGluZUhlaWdodFwiKSxcbiAgejogdGhlbWVQcm9wZXJ0eShcInpJbmRleFwiKSxcbiAgb3BhY2l0eTogdGhlbWVQcm9wZXJ0eSgpLFxuICBlYXNlOiB0aGVtZVByb3BlcnR5KFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIpLFxuICBwOiBwYWRkaW5nLFxuICBweTogcGFkZGluZyxcbiAgcHg6IHBhZGRpbmcsXG4gIHB0OiBwYWRkaW5nLFxuICBwcjogcGFkZGluZyxcbiAgcGI6IHBhZGRpbmcsXG4gIHBsOiBwYWRkaW5nLFxuICBtOiBtYXJnaW4sXG4gIG15OiBtYXJnaW4sXG4gIG14OiBtYXJnaW4sXG4gIG10OiBtYXJnaW4sXG4gIG1yOiBtYXJnaW4sXG4gIG1iOiBtYXJnaW4sXG4gIG1sOiBtYXJnaW4sXG4gIHc6IHRoZW1lUHJvcGVydHkoXCJ3aWR0aFwiKSxcbiAgaDogdGhlbWVQcm9wZXJ0eShcImhlaWdodFwiKSxcbiAgbWluOiBtaW5NYXgsXG4gIG1heDogbWluTWF4LFxuICBmaWxsOiB0aGVtZVByb3BlcnR5KCksXG4gIG9yZGVyOiB0aGVtZVByb3BlcnR5KCksXG4gIG9yaWdpbjogcHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybU9yaWdpblwiLCBcIiBcIiksXG4gIHNlbGVjdDogcHJvcGVydHlWYWx1ZShcInVzZXJTZWxlY3RcIiksXG4gIFwicG9pbnRlci1ldmVudHNcIjogcHJvcGVydHlWYWx1ZSgpLFxuICBhbGlnbjogcHJvcGVydHlWYWx1ZShcInZlcnRpY2FsQWxpZ25cIiksXG4gIHdoaXRlc3BhY2U6IHByb3BlcnR5VmFsdWUoXCJ3aGl0ZVNwYWNlXCIpLFxuICBcIm5vcm1hbC1udW1zXCI6IHtmb250VmFyaWFudE51bWVyaWM6IFwibm9ybWFsXCJ9LFxuICBvcmRpbmFsOiBmb250VmFyaWFudE51bWVyaWMoXCJvcmRpbmFsXCIpLFxuICBcInNsYXNoZWQtemVyb1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJzbGFzaGVkLXplcm9cIiksXG4gIFwibGluaW5nLW51bXNcIjogZm9udFZhcmlhbnROdW1lcmljKFwibnVtZXJpYy1maWd1cmVcIiksXG4gIFwib2xkc3R5bGUtbnVtc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZpZ3VyZVwiKSxcbiAgXCJwcm9wb3J0aW9uYWwtbnVtc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLXNwYWNpbmdcIiksXG4gIFwidGFidWxhci1udW1zXCI6IGZvbnRWYXJpYW50TnVtZXJpYyhcIm51bWVyaWMtc3BhY2luZ1wiKSxcbiAgXCJkaWFnb25hbC1mcmFjdGlvbnNcIjogZm9udFZhcmlhbnROdW1lcmljKFwibnVtZXJpYy1mcmFjdGlvblwiKSxcbiAgXCJzdGFja2VkLWZyYWN0aW9uc1wiOiBmb250VmFyaWFudE51bWVyaWMoXCJudW1lcmljLWZyYWN0aW9uXCIpLFxuICBvdmVyZmxvdzogKHBhcmFtcywgY29udGV4dCwgaWQpID0+IGluY2x1ZGVzKFtcImVsbGlwc2lzXCIsIFwiY2xpcFwiXSwgcGFyYW1zWzBdKSA/IHByb3BlcnR5VmFsdWUoXCJ0ZXh0T3ZlcmZsb3dcIikocGFyYW1zKSA6IHBhcmFtc1sxXSA/IHtbYG92ZXJmbG93LSR7cGFyYW1zWzBdfWBdOiBwYXJhbXNbMV19IDogcHJvcGVydHlWYWx1ZSgpKHBhcmFtcywgY29udGV4dCwgaWQpLFxuICB0cmFuc2Zvcm06IChwYXJhbXMpID0+IHBhcmFtc1swXSA9PT0gXCJub25lXCIgPyB7dHJhbnNmb3JtOiBcIm5vbmVcIn0gOiB7XG4gICAgXCItLXR3LXRyYW5zbGF0ZS14XCI6IFwiMFwiLFxuICAgIFwiLS10dy10cmFuc2xhdGUteVwiOiBcIjBcIixcbiAgICBcIi0tdHctcm90YXRlXCI6IFwiMFwiLFxuICAgIFwiLS10dy1za2V3LXhcIjogXCIwXCIsXG4gICAgXCItLXR3LXNrZXcteVwiOiBcIjBcIixcbiAgICBcIi0tdHctc2NhbGUteFwiOiBcIjFcIixcbiAgICBcIi0tdHctc2NhbGUteVwiOiBcIjFcIixcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybShwYXJhbXNbMF0gPT09IFwiZ3B1XCIpXG4gIH0sXG4gIHJvdGF0ZTogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IHRoZW1lMihcInJvdGF0ZVwiLCBwYXJhbXMpKSAmJiB7XG4gICAgXCItLXR3LXJvdGF0ZVwiOiBfLFxuICAgIHRyYW5zZm9ybTogW2Byb3RhdGUoJHtffSlgLCB0cmFuc2Zvcm0oKV1cbiAgfSxcbiAgc2NhbGU6IHRyYW5zZm9ybVhZRnVuY3Rpb24sXG4gIHRyYW5zbGF0ZTogdHJhbnNmb3JtWFlGdW5jdGlvbixcbiAgc2tldzogdHJhbnNmb3JtWFlGdW5jdGlvbixcbiAgZ2FwOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSB7eDogXCJjb2x1bW5cIiwgeTogXCJyb3dcIn1bcGFyYW1zWzBdXSkgPyB7W18gKyBcIkdhcFwiXTogY29udGV4dC50aGVtZShcImdhcFwiLCB0YWlsKHBhcmFtcykpfSA6IHRoZW1lUHJvcGVydHkoXCJnYXBcIikocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIHN0cm9rZTogKHBhcmFtcywgY29udGV4dCwgaWQpID0+IChfID0gY29udGV4dC50aGVtZShcInN0cm9rZVwiLCBwYXJhbXMsIFwiXCIpKSA/IHtzdHJva2U6IF99IDogdGhlbWVQcm9wZXJ0eShcInN0cm9rZVdpZHRoXCIpKHBhcmFtcywgY29udGV4dCwgaWQpLFxuICBvdXRsaW5lOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwib3V0bGluZVwiLCBwYXJhbXMpKSAmJiB7XG4gICAgb3V0bGluZTogX1swXSxcbiAgICBvdXRsaW5lT2Zmc2V0OiBfWzFdXG4gIH0sXG4gIGJyZWFrKHBhcmFtcykge1xuICAgIHN3aXRjaCAocGFyYW1zWzBdKSB7XG4gICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd29yZEJyZWFrOiBcIm5vcm1hbFwiLFxuICAgICAgICAgIG92ZXJmbG93V3JhcDogXCJub3JtYWxcIlxuICAgICAgICB9O1xuICAgICAgY2FzZSBcIndvcmRzXCI6XG4gICAgICAgIHJldHVybiB7b3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIn07XG4gICAgICBjYXNlIFwiYWxsXCI6XG4gICAgICAgIHJldHVybiB7d29yZEJyZWFrOiBcImJyZWFrLWFsbFwifTtcbiAgICB9XG4gIH0sXG4gIHRleHQocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgIGNhc2UgXCJqdXN0aWZ5XCI6XG4gICAgICAgIHJldHVybiB7dGV4dEFsaWduOiBwYXJhbXNbMF19O1xuICAgICAgY2FzZSBcInVwcGVyY2FzZVwiOlxuICAgICAgY2FzZSBcImxvd2VyY2FzZVwiOlxuICAgICAgY2FzZSBcImNhcGl0YWxpemVcIjpcbiAgICAgICAgcmV0dXJuIHRleHRUcmFuc2Zvcm0oW10sIF8sIHBhcmFtc1swXSk7XG4gICAgICBjYXNlIFwib3BhY2l0eVwiOlxuICAgICAgICByZXR1cm4gb3BhY2l0eVByb3BlcnR5KHBhcmFtcywgdGhlbWUyLCBpZCk7XG4gICAgfVxuICAgIGNvbnN0IGZvbnRTaXplID0gdGhlbWUyKFwiZm9udFNpemVcIiwgcGFyYW1zLCBcIlwiKTtcbiAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm9udFNpemUgPT0gXCJzdHJpbmdcIiA/IHtmb250U2l6ZX0gOiB7XG4gICAgICAgIGZvbnRTaXplOiBmb250U2l6ZVswXSxcbiAgICAgICAgLi4udHlwZW9mIGZvbnRTaXplWzFdID09IFwic3RyaW5nXCIgPyB7bGluZUhlaWdodDogZm9udFNpemVbMV19IDogZm9udFNpemVbMV1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3aXRoT3BhY2l0eUZhbGxiYWNrKFwiY29sb3JcIiwgXCJ0ZXh0XCIsIHRoZW1lMihcInRleHRDb2xvclwiLCBwYXJhbXMpKTtcbiAgfSxcbiAgYmcocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJmaXhlZFwiOlxuICAgICAgY2FzZSBcImxvY2FsXCI6XG4gICAgICBjYXNlIFwic2Nyb2xsXCI6XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZEF0dGFjaG1lbnRcIiwgXCIsXCIpKHBhcmFtcyk7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZFBvc2l0aW9uXCIsIFwiIFwiKShwYXJhbXMpO1xuICAgICAgY2FzZSBcIm5vXCI6XG4gICAgICAgIHJldHVybiBwYXJhbXNbMV0gPT09IFwicmVwZWF0XCIgJiYgcHJvcGVydHlWYWx1ZShcImJhY2tncm91bmRSZXBlYXRcIikocGFyYW1zKTtcbiAgICAgIGNhc2UgXCJhdXRvXCI6XG4gICAgICBjYXNlIFwiY292ZXJcIjpcbiAgICAgIGNhc2UgXCJjb250YWluXCI6XG4gICAgICAgIHJldHVybiBwcm9wZXJ0eVZhbHVlKFwiYmFja2dyb3VuZFNpemVcIikocGFyYW1zKTtcbiAgICAgIGNhc2UgXCJyZXBlYXRcIjpcbiAgICAgICAgcmV0dXJuIGluY2x1ZGVzKFwieHlcIiwgcGFyYW1zWzFdKSA/IHByb3BlcnR5VmFsdWUoXCJiYWNrZ3JvdW5kUmVwZWF0XCIpKHBhcmFtcykgOiB7XCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiBwYXJhbXNbMV0gfHwgcGFyYW1zWzBdfTtcbiAgICAgIGNhc2UgXCJvcGFjaXR5XCI6XG4gICAgICAgIHJldHVybiBvcGFjaXR5UHJvcGVydHkocGFyYW1zLCB0aGVtZTIsIGlkLCBcImJhY2tncm91bmRcIik7XG4gICAgICBjYXNlIFwiY2xpcFwiOlxuICAgICAgICByZXR1cm4ge2JhY2tncm91bmRDbGlwOiBwYXJhbXNbMV0gKyAocGFyYW1zWzFdID09PSBcInRleHRcIiA/IFwiXCIgOiBcIi1ib3hcIil9O1xuICAgICAgY2FzZSBcImdyYWRpZW50XCI6XG4gICAgICAgIGlmIChwYXJhbXNbMV0gPT09IFwidG9cIiAmJiAoXyA9IGV4cGFuZEVkZ2VzKHBhcmFtc1syXSkpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byAke2pvaW4oXywgXCIgXCIpfSx2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpYFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChfID0gdGhlbWUyKFwiYmFja2dyb3VuZEltYWdlXCIsIHBhcmFtcywgXCJcIikpID8ge2JhY2tncm91bmRJbWFnZTogX30gOiB3aXRoT3BhY2l0eUZhbGxiYWNrKFwiYmFja2dyb3VuZENvbG9yXCIsIFwiYmdcIiwgdGhlbWUyKFwiYmFja2dyb3VuZENvbG9yXCIsIHBhcmFtcykpO1xuICB9LFxuICBmcm9tOiAocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0pID0+IChfID0gdGhlbWUyKFwiZ3JhZGllbnRDb2xvclN0b3BzXCIsIHBhcmFtcykpICYmIHtcbiAgICBcIi0tdHctZ3JhZGllbnQtZnJvbVwiOiBfLFxuICAgIFwiLS10dy1ncmFkaWVudC1zdG9wc1wiOiBgdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksdmFyKC0tdHctZ3JhZGllbnQtdG8sJHt0cmFuc3BhcmVudFRvKF8pfSlgXG4gIH0sXG4gIHZpYTogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoXyA9IHRoZW1lMihcImdyYWRpZW50Q29sb3JTdG9wc1wiLCBwYXJhbXMpKSAmJiB7XG4gICAgXCItLXR3LWdyYWRpZW50LXN0b3BzXCI6IGB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwke199LHZhcigtLXR3LWdyYWRpZW50LXRvLCR7dHJhbnNwYXJlbnRUbyhfKX0pYFxuICB9LFxuICB0bzogKHBhcmFtcywge3RoZW1lOiB0aGVtZTJ9KSA9PiAoe1xuICAgIFwiLS10dy1ncmFkaWVudC10b1wiOiB0aGVtZTIoXCJncmFkaWVudENvbG9yU3RvcHNcIiwgcGFyYW1zKVxuICB9KSxcbiAgYm9yZGVyOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gZXhwYW5kRWRnZXMocGFyYW1zWzBdKSA/IGVkZ2VzKGNvbnRleHQudGhlbWUoXCJib3JkZXJXaWR0aFwiLCB0YWlsKHBhcmFtcykpLCBwYXJhbXNbMF0sIFwiYm9yZGVyXCIsIFwid2lkdGhcIikgOiBib3JkZXIocGFyYW1zLCBjb250ZXh0LCBpZCksXG4gIGRpdmlkZTogKHBhcmFtcywgY29udGV4dCwgaWQpID0+IChfID0gcmV2ZXJzYWJsZUVkZ2UocGFyYW1zLCBjb250ZXh0LCBpZCwgXCJkaXZpZGVXaWR0aFwiLCBcImJvcmRlclwiLCBcIndpZHRoXCIpIHx8IGJvcmRlcihwYXJhbXMsIGNvbnRleHQsIGlkKSkgJiYge1xuICAgIFwiJj46bm90KFtoaWRkZW5dKX46bm90KFtoaWRkZW5dKVwiOiBfXG4gIH0sXG4gIHNwYWNlOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gKF8gPSByZXZlcnNhYmxlRWRnZShwYXJhbXMsIGNvbnRleHQsIGlkLCBcInNwYWNlXCIsIFwibWFyZ2luXCIpKSAmJiB7XG4gICAgXCImPjpub3QoW2hpZGRlbl0pfjpub3QoW2hpZGRlbl0pXCI6IF9cbiAgfSxcbiAgcGxhY2Vob2xkZXI6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSwgaWQpID0+IChfID0gcGFyYW1zWzBdID09PSBcIm9wYWNpdHlcIiA/IG9wYWNpdHlQcm9wZXJ0eShwYXJhbXMsIHRoZW1lMiwgaWQpIDogd2l0aE9wYWNpdHlGYWxsYmFjayhcImNvbG9yXCIsIFwicGxhY2Vob2xkZXJcIiwgdGhlbWUyKFwicGxhY2Vob2xkZXJDb2xvclwiLCBwYXJhbXMpKSkgJiYge1xuICAgIFwiJjo6cGxhY2Vob2xkZXJcIjogX1xuICB9LFxuICBzaGFkb3c6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKF8gPSB0aGVtZTIoXCJib3hTaGFkb3dcIiwgcGFyYW1zKSkgJiYge1xuICAgIFwiOmdsb2JhbFwiOiB7XG4gICAgICBcIipcIjoge1xuICAgICAgICBcIi0tdHctc2hhZG93XCI6IFwiMCAwIHRyYW5zcGFyZW50XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiLS10dy1zaGFkb3dcIjogXyA9PT0gXCJub25lXCIgPyBcIjAgMCB0cmFuc3BhcmVudFwiIDogXyxcbiAgICBib3hTaGFkb3c6IFtcbiAgICAgIF8sXG4gICAgICBgdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LDAgMCB0cmFuc3BhcmVudCksdmFyKC0tdHctcmluZy1zaGFkb3csMCAwIHRyYW5zcGFyZW50KSx2YXIoLS10dy1zaGFkb3cpYFxuICAgIF1cbiAgfSxcbiAgYW5pbWF0ZTogKHBhcmFtcywge3RoZW1lOiB0aGVtZTIsIHRhZ30pID0+IHtcbiAgICBpZiAoJCA9IHRoZW1lMihcImFuaW1hdGlvblwiLCBwYXJhbXMpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9ICQuc3BsaXQoXCIgXCIpO1xuICAgICAgaWYgKChfID0gdGhlbWUyKFwia2V5ZnJhbWVzXCIsIHBhcnRzWzBdLCBfXyA9IHt9KSkgIT09IF9fKSB7XG4gICAgICAgIHJldHVybiAoJCA9IHRhZyhwYXJ0c1swXSkpICYmIHtcbiAgICAgICAgICBhbmltYXRpb246ICQgKyBcIiBcIiArIGpvaW4odGFpbChwYXJ0cyksIFwiIFwiKSxcbiAgICAgICAgICBbXCJAa2V5ZnJhbWVzIFwiICsgJF06IF9cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7YW5pbWF0aW9uOiAkfTtcbiAgICB9XG4gIH0sXG4gIHJpbmcocGFyYW1zLCB7dGhlbWU6IHRoZW1lMn0sIGlkKSB7XG4gICAgc3dpdGNoIChwYXJhbXNbMF0pIHtcbiAgICAgIGNhc2UgXCJpbnNldFwiOlxuICAgICAgICByZXR1cm4ge1wiLS10dy1yaW5nLWluc2V0XCI6IFwiaW5zZXRcIn07XG4gICAgICBjYXNlIFwib3BhY2l0eVwiOlxuICAgICAgICByZXR1cm4gb3BhY2l0eVByb3BlcnR5KHBhcmFtcywgdGhlbWUyLCBpZCk7XG4gICAgICBjYXNlIFwib2Zmc2V0XCI6XG4gICAgICAgIHJldHVybiAoXyA9IHRoZW1lMihcInJpbmdPZmZzZXRXaWR0aFwiLCB0YWlsKHBhcmFtcyksIFwiXCIpKSA/IHtcbiAgICAgICAgICBcIi0tdHctcmluZy1vZmZzZXQtd2lkdGhcIjogX1xuICAgICAgICB9IDoge1xuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC1jb2xvclwiOiB0aGVtZTIoXCJyaW5nT2Zmc2V0Q29sb3JcIiwgdGFpbChwYXJhbXMpKVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKF8gPSB0aGVtZTIoXCJyaW5nV2lkdGhcIiwgcGFyYW1zLCBcIlwiKSkgPyB7XG4gICAgICBcIi0tdHctcmluZy1vZmZzZXQtc2hhZG93XCI6IGB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpYCxcbiAgICAgIFwiLS10dy1yaW5nLXNoYWRvd1wiOiBgdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygke199ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKWAsXG4gICAgICBcImJveC1zaGFkb3dcIjogYHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksdmFyKC0tdHctcmluZy1zaGFkb3cpLHZhcigtLXR3LXNoYWRvdywwIDAgdHJhbnNwYXJlbnQpYCxcbiAgICAgIFwiOmdsb2JhbFwiOiB7XG4gICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgXCItLXR3LXJpbmctaW5zZXRcIjogXCJ2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLylcIixcbiAgICAgICAgICBcIi0tdHctcmluZy1vZmZzZXQtd2lkdGhcIjogdGhlbWUyKFwicmluZ09mZnNldFdpZHRoXCIsIFwiXCIsIFwiMHB4XCIpLFxuICAgICAgICAgIFwiLS10dy1yaW5nLW9mZnNldC1jb2xvclwiOiB0aGVtZTIoXCJyaW5nT2Zmc2V0Q29sb3JcIiwgXCJcIiwgXCIjZmZmXCIpLFxuICAgICAgICAgIFwiLS10dy1yaW5nLWNvbG9yXCI6IGFzUkdCQSh0aGVtZTIoXCJyaW5nQ29sb3JcIiwgXCJcIiwgXCIjOTNjNWZkXCIpLCBcInJpbmctb3BhY2l0eVwiLCB0aGVtZTIoXCJyaW5nT3BhY2l0eVwiLCBcIlwiLCBcIjAuNVwiKSksXG4gICAgICAgICAgXCItLXR3LXJpbmctb2Zmc2V0LXNoYWRvd1wiOiBcIjAgMCB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIFwiLS10dy1yaW5nLXNoYWRvd1wiOiBcIjAgMCB0cmFuc3BhcmVudFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IDoge1xuICAgICAgXCItLXR3LXJpbmctb3BhY2l0eVwiOiBcIjFcIixcbiAgICAgIFwiLS10dy1yaW5nLWNvbG9yXCI6IGFzUkdCQSh0aGVtZTIoXCJyaW5nQ29sb3JcIiwgcGFyYW1zKSwgXCJyaW5nLW9wYWNpdHlcIilcbiAgICB9O1xuICB9LFxuICBvYmplY3Q6IChwYXJhbXMpID0+IGluY2x1ZGVzKFtcImNvbnRhaW5cIiwgXCJjb3ZlclwiLCBcImZpbGxcIiwgXCJub25lXCIsIFwic2NhbGVcIl0sIHBhcmFtc1swXSkgPyBwcm9wZXJ0eVZhbHVlKFwib2JqZWN0Rml0XCIpKHBhcmFtcykgOiBwcm9wZXJ0eVZhbHVlKFwib2JqZWN0UG9zaXRpb25cIiwgXCIgXCIpKHBhcmFtcyksXG4gIGxpc3Q6IChwYXJhbXMpID0+IHByb3BlcnR5VmFsdWUoaW5jbHVkZXMoW1wiaW5zaWRlXCIsIFwib3V0c2lkZVwiXSwgcGFyYW1zWzBdKSA/IFwibGlzdFN0eWxlUG9zaXRpb25cIiA6IFwibGlzdFN0eWxlVHlwZVwiKShwYXJhbXMpLFxuICByb3VuZGVkOiAocGFyYW1zLCBjb250ZXh0LCBpZCkgPT4gY29ybmVycyhjb250ZXh0LnRoZW1lKFwiYm9yZGVyUmFkaXVzXCIsIHRhaWwocGFyYW1zKSwgXCJcIiksIHBhcmFtc1swXSwgXCJib3JkZXJcIiwgXCJyYWRpdXNcIikgfHwgdGhlbWVQcm9wZXJ0eShcImJvcmRlclJhZGl1c1wiKShwYXJhbXMsIGNvbnRleHQsIGlkKSxcbiAgXCJ0cmFuc2l0aW9uLW5vbmVcIjoge1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiOiBcIm5vbmVcIn0sXG4gIHRyYW5zaXRpb246IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4gKHtcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHRoZW1lMihcInRyYW5zaXRpb25Qcm9wZXJ0eVwiLCBwYXJhbXMpLFxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGhlbWUyKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCIsIFwiXCIpLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhlbWUyKFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwiXCIpXG4gIH0pLFxuICBjb250YWluZXI6IChwYXJhbXMsIHt0aGVtZTogdGhlbWUyfSkgPT4ge1xuICAgIGNvbnN0IHtzY3JlZW5zID0gdGhlbWUyKFwic2NyZWVuc1wiKSwgY2VudGVyLCBwYWRkaW5nOiBwYWRkaW5nMn0gPSB0aGVtZTIoXCJjb250YWluZXJcIik7XG4gICAgY29uc3QgcGFkZGluZ0ZvciA9IChzY3JlZW4pID0+IChfID0gcGFkZGluZzIgJiYgKHR5cGVvZiBwYWRkaW5nMiA9PSBcInN0cmluZ1wiID8gcGFkZGluZzIgOiBwYWRkaW5nMltzY3JlZW5dIHx8IHBhZGRpbmcyLkRFRkFVTFQpKSA/IHtcbiAgICAgIHBhZGRpbmdSaWdodDogXyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBfXG4gICAgfSA6IHt9O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzY3JlZW5zKS5yZWR1Y2UoKHJ1bGVzMiwgc2NyZWVuKSA9PiB7XG4gICAgICBpZiAoKCQgPSBzY3JlZW5zW3NjcmVlbl0pICYmIHR5cGVvZiAkID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcnVsZXMyW2J1aWxkTWVkaWFRdWVyeSgkKV0gPSB7XG4gICAgICAgICAgXCImXCI6IHtcbiAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6ICQsXG4gICAgICAgICAgICAuLi5wYWRkaW5nRm9yKHNjcmVlbilcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gcnVsZXMyO1xuICAgIH0sIHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIC4uLmNlbnRlciA/IHttYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wifSA6IHt9LFxuICAgICAgLi4ucGFkZGluZ0ZvcihcInhzXCIpXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIHNyYy90d2luZC9wcmVmbGlnaHQudHNcbnZhciBjcmVhdGVQcmVmbGlnaHQgPSAodGhlbWUyKSA9PiAoe1xuICBcIjpyb290XCI6IHt0YWJTaXplOiA0fSxcbiAgXCJib2R5LGJsb2NrcXVvdGUsZGwsZGQsaDEsaDIsaDMsaDQsaDUsaDYsaHIsZmlndXJlLHAscHJlLGZpZWxkc2V0LG9sLHVsXCI6IHttYXJnaW46IFwiMFwifSxcbiAgYnV0dG9uOiB7YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsIGJhY2tncm91bmRJbWFnZTogXCJub25lXCJ9LFxuICAnYnV0dG9uLFt0eXBlPVwiYnV0dG9uXCJdLFt0eXBlPVwicmVzZXRcIl0sW3R5cGU9XCJzdWJtaXRcIl0nOiB7V2Via2l0QXBwZWFyYW5jZTogXCJidXR0b25cIn0sXG4gIFwiYnV0dG9uOmZvY3VzXCI6IHtvdXRsaW5lOiBbXCIxcHggZG90dGVkXCIsIFwiNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yXCJdfSxcbiAgXCJmaWVsZHNldCxvbCx1bCxsZWdlbmRcIjoge3BhZGRpbmc6IFwiMFwifSxcbiAgXCJvbCx1bFwiOiB7bGlzdFN0eWxlOiBcIm5vbmVcIn0sXG4gIGh0bWw6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgIFdlYmtpdFRleHRTaXplQWRqdXN0OiBcIjEwMCVcIixcbiAgICBmb250RmFtaWx5OiB0aGVtZTIoXCJmb250RmFtaWx5LnNhbnNcIiwgXCJ1aS1zYW5zLXNlcmlmLHN5c3RlbS11aSxzYW5zLXNlcmlmXCIpXG4gIH0sXG4gIGJvZHk6IHtmb250RmFtaWx5OiBcImluaGVyaXRcIiwgbGluZUhlaWdodDogXCJpbmhlcml0XCJ9LFxuICBcIiosOjpiZWZvcmUsOjphZnRlclwiOiB7XG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICBib3JkZXI6IGAwIHNvbGlkICR7dGhlbWUyKFwiYm9yZGVyQ29sb3IuREVGQVVMVFwiLCBcImN1cnJlbnRDb2xvclwiKX1gXG4gIH0sXG4gIGhyOiB7aGVpZ2h0OiBcIjBcIiwgY29sb3I6IFwiaW5oZXJpdFwiLCBib3JkZXJUb3BXaWR0aDogXCIxcHhcIn0sXG4gIGltZzoge2JvcmRlclN0eWxlOiBcInNvbGlkXCJ9LFxuICB0ZXh0YXJlYToge3Jlc2l6ZTogXCJ2ZXJ0aWNhbFwifSxcbiAgXCJpbnB1dDo6cGxhY2Vob2xkZXIsdGV4dGFyZWE6OnBsYWNlaG9sZGVyXCI6IHtcbiAgICBvcGFjaXR5OiBcIjFcIixcbiAgICBjb2xvcjogdGhlbWUyKFwicGxhY2Vob2xkZXJDb2xvci5ERUZBVUxUXCIsIHRoZW1lMihcImNvbG9ycy5ncmF5LjQwMFwiLCBcIiNhMWExYWFcIikpXG4gIH0sXG4gICdidXR0b24sW3JvbGU9XCJidXR0b25cIl0nOiB7Y3Vyc29yOiBcInBvaW50ZXJcIn0sXG4gIHRhYmxlOiB7dGV4dEluZGVudDogXCIwXCIsIGJvcmRlckNvbG9yOiBcImluaGVyaXRcIiwgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIn0sXG4gIFwiaDEsaDIsaDMsaDQsaDUsaDZcIjoge2ZvbnRTaXplOiBcImluaGVyaXRcIiwgZm9udFdlaWdodDogXCJpbmhlcml0XCJ9LFxuICBhOiB7Y29sb3I6IFwiaW5oZXJpdFwiLCB0ZXh0RGVjb3JhdGlvbjogXCJpbmhlcml0XCJ9LFxuICBcImJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWFcIjoge1xuICAgIGZvbnRGYW1pbHk6IFwiaW5oZXJpdFwiLFxuICAgIGZvbnRTaXplOiBcIjEwMCVcIixcbiAgICBtYXJnaW46IFwiMFwiLFxuICAgIHBhZGRpbmc6IFwiMFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgIGNvbG9yOiBcImluaGVyaXRcIlxuICB9LFxuICBcImJ1dHRvbixzZWxlY3RcIjoge3RleHRUcmFuc2Zvcm06IFwibm9uZVwifSxcbiAgXCI6Oi1tb3otZm9jdXMtaW5uZXJcIjoge2JvcmRlclN0eWxlOiBcIm5vbmVcIiwgcGFkZGluZzogXCIwXCJ9LFxuICBcIjotbW96LWZvY3VzcmluZ1wiOiB7b3V0bGluZTogXCIxcHggZG90dGVkIEJ1dHRvblRleHRcIn0sXG4gIFwiOi1tb3otdWktaW52YWxpZFwiOiB7Ym94U2hhZG93OiBcIm5vbmVcIn0sXG4gIHByb2dyZXNzOiB7dmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwifSxcbiAgXCI6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXCI6IHtoZWlnaHQ6IFwiYXV0b1wifSxcbiAgJ1t0eXBlPVwic2VhcmNoXCJdJzoge1dlYmtpdEFwcGVhcmFuY2U6IFwidGV4dGZpZWxkXCIsIG91dGxpbmVPZmZzZXQ6IFwiLTJweFwifSxcbiAgXCI6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb25cIjoge1dlYmtpdEFwcGVhcmFuY2U6IFwibm9uZVwifSxcbiAgXCI6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uXCI6IHtXZWJraXRBcHBlYXJhbmNlOiBcImJ1dHRvblwiLCBmb250OiBcImluaGVyaXRcIn0sXG4gIHN1bW1hcnk6IHtkaXNwbGF5OiBcImxpc3QtaXRlbVwifSxcbiAgXCJhYmJyW3RpdGxlXVwiOiB7dGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lIGRvdHRlZFwifSxcbiAgXCJiLHN0cm9uZ1wiOiB7Zm9udFdlaWdodDogXCJib2xkZXJcIn0sXG4gIFwicHJlLGNvZGUsa2JkLHNhbXBcIjoge1xuICAgIGZvbnRGYW1pbHk6IHRoZW1lMihcImZvbnRGYW1pbHlcIiwgXCJtb25vXCIsIFwidWktbW9ub3NwYWNlLG1vbm9zcGFjZVwiKSxcbiAgICBmb250U2l6ZTogXCIxZW1cIlxuICB9LFxuICBcInN1YixzdXBcIjoge2ZvbnRTaXplOiBcIjc1JVwiLCBsaW5lSGVpZ2h0OiBcIjBcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwifSxcbiAgc3ViOiB7Ym90dG9tOiBcIi0wLjI1ZW1cIn0sXG4gIHN1cDoge3RvcDogXCItMC41ZW1cIn0sXG4gIFwiaW1nLHN2Zyx2aWRlbyxjYW52YXMsYXVkaW8saWZyYW1lLGVtYmVkLG9iamVjdFwiOiB7ZGlzcGxheTogXCJibG9ja1wiLCB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwifSxcbiAgXCJpbWcsdmlkZW9cIjoge21heFdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImF1dG9cIn1cbn0pO1xuXG4vLyBzcmMvdHdpbmQvdmFyaWFudHMudHNcbnZhciBjb3JlVmFyaWFudHMgPSB7XG4gIGRhcms6IFwiQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKVwiLFxuICBzdGlja3k6IFwiQHN1cHBvcnRzICgocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246c3RpY2t5KSlcIixcbiAgXCJtb3Rpb24tcmVkdWNlXCI6IFwiQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSlcIixcbiAgXCJtb3Rpb24tc2FmZVwiOiBcIkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjpuby1wcmVmZXJlbmNlKVwiLFxuICBmaXJzdDogXCImOmZpcnN0LWNoaWxkXCIsXG4gIGxhc3Q6IFwiJjpsYXN0LWNoaWxkXCIsXG4gIGV2ZW46IFwiJjpudGgtY2hpbGQoMm4pXCIsXG4gIG9kZDogXCImOm50aC1jaGlsZChvZGQpXCIsXG4gIGNoaWxkcmVuOiBcIiY+KlwiLFxuICBzaWJsaW5nczogXCImfipcIixcbiAgc2libGluZzogXCImKypcIixcbiAgb3ZlcnJpZGU6IFwiJiZcIlxufTtcblxuLy8gc3JjL2ludGVybmFsL2RvbS50c1xudmFyIFNUWUxFX0VMRU1FTlRfSUQgPSBcIl9fdHdpbmRcIjtcbnZhciBnZXRTdHlsZUVsZW1lbnQgPSAobm9uY2UpID0+IHtcbiAgbGV0IGVsZW1lbnQgPSBzZWxmW1NUWUxFX0VMRU1FTlRfSURdO1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpO1xuICAgIGVsZW1lbnQuaWQgPSBTVFlMRV9FTEVNRU5UX0lEO1xuICAgIG5vbmNlICYmIChlbGVtZW50Lm5vbmNlID0gbm9uY2UpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLy8gc3JjL3R3aW5kL3NoZWV0cy50c1xudmFyIGNzc29tU2hlZXQgPSAoe1xuICBub25jZSxcbiAgdGFyZ2V0ID0gZ2V0U3R5bGVFbGVtZW50KG5vbmNlKS5zaGVldFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IG9mZnNldCA9IHRhcmdldC5jc3NSdWxlcy5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0LFxuICAgIGluc2VydDogKHJ1bGUsIGluZGV4KSA9PiB0YXJnZXQuaW5zZXJ0UnVsZShydWxlLCBvZmZzZXQgKyBpbmRleClcbiAgfTtcbn07XG52YXIgdm9pZFNoZWV0ID0gKCkgPT4gKHtcbiAgdGFyZ2V0OiBudWxsLFxuICBpbnNlcnQ6IG5vb3Bcbn0pO1xuXG4vLyBzcmMvdHdpbmQvbW9kZXMudHNcbnZhciBtb2RlID0gKHJlcG9ydCkgPT4gKHtcbiAgdW5rbm93bihzZWN0aW9uLCBrZXkgPSBbXSwgb3B0aW9uYWwsIGNvbnRleHQpIHtcbiAgICBpZiAoIW9wdGlvbmFsKSB7XG4gICAgICB0aGlzLnJlcG9ydCh7aWQ6IFwiVU5LTk9XTl9USEVNRV9WQUxVRVwiLCBrZXk6IGpvaW4oW3NlY3Rpb24sIC4uLmtleV0sIFwiLlwiKX0sIGNvbnRleHQpO1xuICAgIH1cbiAgfSxcbiAgcmVwb3J0KHtpZCwgLi4uaW5mb30pIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFske2lkfV0gJHtKU09OLnN0cmluZ2lmeShpbmZvKX1gO1xuICAgIGNvbnN0IHN0YWNrID0gKG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjayB8fCBtZXNzYWdlKS5zcGxpdChcImF0IFwiKTtcbiAgICBmb3IgKGxldCBmcmFtZTsgKGZyYW1lID0gc3RhY2suc3BsaWNlKDEsIDEpWzBdKSAmJiAhLyhefFxcLikodHd8c2V0dXApIC8udGVzdChmcmFtZSk7ICkge1xuICAgIH1cbiAgICByZXR1cm4gcmVwb3J0KHN0YWNrLmpvaW4oXCJhdCBcIikpO1xuICB9XG59KTtcbnZhciB3YXJuID0gbW9kZSgobWVzc2FnZSkgPT4gY29uc29sZS53YXJuKG1lc3NhZ2UpKTtcbnZhciBzdHJpY3QgPSBtb2RlKChtZXNzYWdlKSA9PiB7XG4gIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn0pO1xudmFyIHNpbGVudCA9IG1vZGUobm9vcCk7XG5cbi8vIHNyYy90d2luZC9wcmVmaXgudHNcbnZhciBpbXBvcnRfc3R5bGVfdmVuZG9yaXplciA9IF9fdG9Nb2R1bGUocmVxdWlyZShcInN0eWxlLXZlbmRvcml6ZXJcIikpO1xudmFyIG5vcHJlZml4ID0gKHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCkgPT4gYCR7cHJvcGVydHkyfToke3ZhbHVlfSR7aW1wb3J0YW50ID8gXCIgIWltcG9ydGFudFwiIDogXCJcIn1gO1xudmFyIGF1dG9wcmVmaXggPSAocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KSA9PiB7XG4gIGxldCBjc3NUZXh0ID0gXCJcIjtcbiAgY29uc3QgcHJvcGVydHlBbGlhcyA9IGltcG9ydF9zdHlsZV92ZW5kb3JpemVyLmNzc1Byb3BlcnR5QWxpYXMocHJvcGVydHkyKTtcbiAgaWYgKHByb3BlcnR5QWxpYXMpXG4gICAgY3NzVGV4dCArPSBgJHtub3ByZWZpeChwcm9wZXJ0eUFsaWFzLCB2YWx1ZSwgaW1wb3J0YW50KX07YDtcbiAgbGV0IGZsYWdzID0gaW1wb3J0X3N0eWxlX3ZlbmRvcml6ZXIuY3NzUHJvcGVydHlQcmVmaXhGbGFncyhwcm9wZXJ0eTIpO1xuICBpZiAoZmxhZ3MgJiAxKVxuICAgIGNzc1RleHQgKz0gYC13ZWJraXQtJHtub3ByZWZpeChwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpfTtgO1xuICBpZiAoZmxhZ3MgJiAyKVxuICAgIGNzc1RleHQgKz0gYC1tb3otJHtub3ByZWZpeChwcm9wZXJ0eTIsIHZhbHVlLCBpbXBvcnRhbnQpfTtgO1xuICBpZiAoZmxhZ3MgJiA0KVxuICAgIGNzc1RleHQgKz0gYC1tcy0ke25vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCl9O2A7XG4gIGZsYWdzID0gaW1wb3J0X3N0eWxlX3ZlbmRvcml6ZXIuY3NzVmFsdWVQcmVmaXhGbGFncyhwcm9wZXJ0eTIsIHZhbHVlKTtcbiAgaWYgKGZsYWdzICYgMSlcbiAgICBjc3NUZXh0ICs9IGAke25vcHJlZml4KHByb3BlcnR5MiwgYC13ZWJraXQtJHt2YWx1ZX1gLCBpbXBvcnRhbnQpfTtgO1xuICBpZiAoZmxhZ3MgJiAyKVxuICAgIGNzc1RleHQgKz0gYCR7bm9wcmVmaXgocHJvcGVydHkyLCBgLW1vei0ke3ZhbHVlfWAsIGltcG9ydGFudCl9O2A7XG4gIGlmIChmbGFncyAmIDQpXG4gICAgY3NzVGV4dCArPSBgJHtub3ByZWZpeChwcm9wZXJ0eTIsIGAtbXMtJHt2YWx1ZX1gLCBpbXBvcnRhbnQpfTtgO1xuICBjc3NUZXh0ICs9IG5vcHJlZml4KHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCk7XG4gIHJldHVybiBjc3NUZXh0O1xufTtcblxuLy8gc3JjL3R3aW5kL3RoZW1lLnRzXG52YXIgcmF0aW9zID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGRvIHtcbiAgICBmb3IgKGxldCBkaXZpZGVuZCA9IDE7IGRpdmlkZW5kIDwgc3RhcnQ7IGRpdmlkZW5kKyspIHtcbiAgICAgIHJlc3VsdFtgJHtkaXZpZGVuZH0vJHtzdGFydH1gXSA9IE51bWJlcigoZGl2aWRlbmQgLyBzdGFydCAqIDEwMCkudG9GaXhlZCg2KSkgKyBcIiVcIjtcbiAgICB9XG4gIH0gd2hpbGUgKCsrc3RhcnQgPD0gZW5kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgZXhwb25lbnRpYWwgPSAoc3RvcCwgdW5pdCwgc3RhcnQgPSAwKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKDsgc3RhcnQgPD0gc3RvcDsgc3RhcnQgPSBzdGFydCAqIDIgfHwgMSkge1xuICAgIHJlc3VsdFtzdGFydF0gPSBzdGFydCArIHVuaXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgbGluZWFyID0gKHN0b3AsIHVuaXQgPSBcIlwiLCBkaXZpZGVCeSA9IDEsIHN0YXJ0ID0gMCwgc3RlcCA9IDEpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoOyBzdGFydCA8PSBzdG9wOyBzdGFydCArPSBzdGVwKSB7XG4gICAgcmVzdWx0W3N0YXJ0XSA9IHN0YXJ0IC8gZGl2aWRlQnkgKyB1bml0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIGFsaWFzMiA9IChzZWN0aW9uKSA9PiAodGhlbWUyKSA9PiB0aGVtZTIoc2VjdGlvbik7XG52YXIgdGhlbWVGYWN0b3J5ID0gKGFyZ3MsIHt0aGVtZTogdGhlbWUyfSkgPT4gdGhlbWUyKC4uLmFyZ3MpO1xudmFyIHRoZW1lID0gKC4uLmFyZ3MpID0+IGRpcmVjdGl2ZSh0aGVtZUZhY3RvcnksIGFyZ3MpO1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgc2NyZWVuczoge1xuICAgIHNtOiBcIjY0MHB4XCIsXG4gICAgbWQ6IFwiNzY4cHhcIixcbiAgICBsZzogXCIxMDI0cHhcIixcbiAgICB4bDogXCIxMjgwcHhcIixcbiAgICBcIjJ4bFwiOiBcIjE1MzZweFwiXG4gIH0sXG4gIGNvbG9yczoge1xuICAgIHRyYW5zcGFyZW50OiBcInRyYW5zcGFyZW50XCIsXG4gICAgY3VycmVudDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBibGFjazogXCIjMDAwXCIsXG4gICAgd2hpdGU6IFwiI2ZmZlwiLFxuICAgIGdyYXk6IHtcbiAgICAgIDUwOiBcIiNmOWZhZmJcIixcbiAgICAgIDEwMDogXCIjZjNmNGY2XCIsXG4gICAgICAyMDA6IFwiI2U1ZTdlYlwiLFxuICAgICAgMzAwOiBcIiNkMWQ1ZGJcIixcbiAgICAgIDQwMDogXCIjOWNhM2FmXCIsXG4gICAgICA1MDA6IFwiIzZiNzI4MFwiLFxuICAgICAgNjAwOiBcIiM0YjU1NjNcIixcbiAgICAgIDcwMDogXCIjMzc0MTUxXCIsXG4gICAgICA4MDA6IFwiIzFmMjkzN1wiLFxuICAgICAgOTAwOiBcIiMxMTE4MjdcIlxuICAgIH0sXG4gICAgcmVkOiB7XG4gICAgICA1MDogXCIjZmVmMmYyXCIsXG4gICAgICAxMDA6IFwiI2ZlZTJlMlwiLFxuICAgICAgMjAwOiBcIiNmZWNhY2FcIixcbiAgICAgIDMwMDogXCIjZmNhNWE1XCIsXG4gICAgICA0MDA6IFwiI2Y4NzE3MVwiLFxuICAgICAgNTAwOiBcIiNlZjQ0NDRcIixcbiAgICAgIDYwMDogXCIjZGMyNjI2XCIsXG4gICAgICA3MDA6IFwiI2I5MWMxY1wiLFxuICAgICAgODAwOiBcIiM5OTFiMWJcIixcbiAgICAgIDkwMDogXCIjN2YxZDFkXCJcbiAgICB9LFxuICAgIHllbGxvdzoge1xuICAgICAgNTA6IFwiI2ZmZmJlYlwiLFxuICAgICAgMTAwOiBcIiNmZWYzYzdcIixcbiAgICAgIDIwMDogXCIjZmRlNjhhXCIsXG4gICAgICAzMDA6IFwiI2ZjZDM0ZFwiLFxuICAgICAgNDAwOiBcIiNmYmJmMjRcIixcbiAgICAgIDUwMDogXCIjZjU5ZTBiXCIsXG4gICAgICA2MDA6IFwiI2Q5NzcwNlwiLFxuICAgICAgNzAwOiBcIiNiNDUzMDlcIixcbiAgICAgIDgwMDogXCIjOTI0MDBlXCIsXG4gICAgICA5MDA6IFwiIzc4MzUwZlwiXG4gICAgfSxcbiAgICBncmVlbjoge1xuICAgICAgNTA6IFwiI2VjZmRmNVwiLFxuICAgICAgMTAwOiBcIiNkMWZhZTVcIixcbiAgICAgIDIwMDogXCIjYTdmM2QwXCIsXG4gICAgICAzMDA6IFwiIzZlZTdiN1wiLFxuICAgICAgNDAwOiBcIiMzNGQzOTlcIixcbiAgICAgIDUwMDogXCIjMTBiOTgxXCIsXG4gICAgICA2MDA6IFwiIzA1OTY2OVwiLFxuICAgICAgNzAwOiBcIiMwNDc4NTdcIixcbiAgICAgIDgwMDogXCIjMDY1ZjQ2XCIsXG4gICAgICA5MDA6IFwiIzA2NGUzYlwiXG4gICAgfSxcbiAgICBibHVlOiB7XG4gICAgICA1MDogXCIjZWZmNmZmXCIsXG4gICAgICAxMDA6IFwiI2RiZWFmZVwiLFxuICAgICAgMjAwOiBcIiNiZmRiZmVcIixcbiAgICAgIDMwMDogXCIjOTNjNWZkXCIsXG4gICAgICA0MDA6IFwiIzYwYTVmYVwiLFxuICAgICAgNTAwOiBcIiMzYjgyZjZcIixcbiAgICAgIDYwMDogXCIjMjU2M2ViXCIsXG4gICAgICA3MDA6IFwiIzFkNGVkOFwiLFxuICAgICAgODAwOiBcIiMxZTQwYWZcIixcbiAgICAgIDkwMDogXCIjMWUzYThhXCJcbiAgICB9LFxuICAgIGluZGlnbzoge1xuICAgICAgNTA6IFwiI2VlZjJmZlwiLFxuICAgICAgMTAwOiBcIiNlMGU3ZmZcIixcbiAgICAgIDIwMDogXCIjYzdkMmZlXCIsXG4gICAgICAzMDA6IFwiI2E1YjRmY1wiLFxuICAgICAgNDAwOiBcIiM4MThjZjhcIixcbiAgICAgIDUwMDogXCIjNjM2NmYxXCIsXG4gICAgICA2MDA6IFwiIzRmNDZlNVwiLFxuICAgICAgNzAwOiBcIiM0MzM4Y2FcIixcbiAgICAgIDgwMDogXCIjMzczMGEzXCIsXG4gICAgICA5MDA6IFwiIzMxMmU4MVwiXG4gICAgfSxcbiAgICBwdXJwbGU6IHtcbiAgICAgIDUwOiBcIiNmNWYzZmZcIixcbiAgICAgIDEwMDogXCIjZWRlOWZlXCIsXG4gICAgICAyMDA6IFwiI2RkZDZmZVwiLFxuICAgICAgMzAwOiBcIiNjNGI1ZmRcIixcbiAgICAgIDQwMDogXCIjYTc4YmZhXCIsXG4gICAgICA1MDA6IFwiIzhiNWNmNlwiLFxuICAgICAgNjAwOiBcIiM3YzNhZWRcIixcbiAgICAgIDcwMDogXCIjNmQyOGQ5XCIsXG4gICAgICA4MDA6IFwiIzViMjFiNlwiLFxuICAgICAgOTAwOiBcIiM0YzFkOTVcIlxuICAgIH0sXG4gICAgcGluazoge1xuICAgICAgNTA6IFwiI2ZkZjJmOFwiLFxuICAgICAgMTAwOiBcIiNmY2U3ZjNcIixcbiAgICAgIDIwMDogXCIjZmJjZmU4XCIsXG4gICAgICAzMDA6IFwiI2Y5YThkNFwiLFxuICAgICAgNDAwOiBcIiNmNDcyYjZcIixcbiAgICAgIDUwMDogXCIjZWM0ODk5XCIsXG4gICAgICA2MDA6IFwiI2RiMjc3N1wiLFxuICAgICAgNzAwOiBcIiNiZTE4NWRcIixcbiAgICAgIDgwMDogXCIjOWQxNzRkXCIsXG4gICAgICA5MDA6IFwiIzgzMTg0M1wiXG4gICAgfVxuICB9LFxuICBzcGFjaW5nOiB7XG4gICAgcHg6IFwiMXB4XCIsXG4gICAgMDogXCIwcHhcIixcbiAgICAuLi5saW5lYXIoNCwgXCJyZW1cIiwgNCwgMC41LCAwLjUpLFxuICAgIC4uLmxpbmVhcigxMiwgXCJyZW1cIiwgNCwgNSksXG4gICAgMTQ6IFwiMy41cmVtXCIsXG4gICAgLi4ubGluZWFyKDY0LCBcInJlbVwiLCA0LCAxNiwgNCksXG4gICAgNzI6IFwiMThyZW1cIixcbiAgICA4MDogXCIyMHJlbVwiLFxuICAgIDk2OiBcIjI0cmVtXCJcbiAgfSxcbiAgZHVyYXRpb25zOiB7XG4gICAgNzU6IFwiNzVtc1wiLFxuICAgIDEwMDogXCIxMDBtc1wiLFxuICAgIDE1MDogXCIxNTBtc1wiLFxuICAgIDIwMDogXCIyMDBtc1wiLFxuICAgIDMwMDogXCIzMDBtc1wiLFxuICAgIDUwMDogXCI1MDBtc1wiLFxuICAgIDcwMDogXCI3MDBtc1wiLFxuICAgIDFlMzogXCIxMDAwbXNcIlxuICB9LFxuICBhbmltYXRpb246IHtcbiAgICBub25lOiBcIm5vbmVcIixcbiAgICBzcGluOiBcInNwaW4gMXMgbGluZWFyIGluZmluaXRlXCIsXG4gICAgcGluZzogXCJwaW5nIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpIGluZmluaXRlXCIsXG4gICAgcHVsc2U6IFwicHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZVwiLFxuICAgIGJvdW5jZTogXCJib3VuY2UgMXMgaW5maW5pdGVcIlxuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgbm9uZTogXCJub25lXCJcbiAgfSxcbiAgYmFja2dyb3VuZE9wYWNpdHk6IGFsaWFzMihcIm9wYWNpdHlcIiksXG4gIGJvcmRlckNvbG9yOiAodGhlbWUyKSA9PiAoe1xuICAgIC4uLnRoZW1lMihcImNvbG9yc1wiKSxcbiAgICBERUZBVUxUOiB0aGVtZTIoXCJjb2xvcnMuZ3JheS4yMDBcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgfSksXG4gIGJvcmRlck9wYWNpdHk6IGFsaWFzMihcIm9wYWNpdHlcIiksXG4gIGJvcmRlclJhZGl1czoge1xuICAgIG5vbmU6IFwiMHB4XCIsXG4gICAgc206IFwiMC4xMjVyZW1cIixcbiAgICBERUZBVUxUOiBcIjAuMjVyZW1cIixcbiAgICBtZDogXCIwLjM3NXJlbVwiLFxuICAgIGxnOiBcIjAuNXJlbVwiLFxuICAgIHhsOiBcIjAuNzVyZW1cIixcbiAgICBcIjJ4bFwiOiBcIjFyZW1cIixcbiAgICBcIjN4bFwiOiBcIjEuNXJlbVwiLFxuICAgIGZ1bGw6IFwiOTk5OXB4XCJcbiAgfSxcbiAgYm9yZGVyV2lkdGg6IHtcbiAgICBERUZBVUxUOiBcIjFweFwiLFxuICAgIC4uLmV4cG9uZW50aWFsKDgsIFwicHhcIilcbiAgfSxcbiAgYm94U2hhZG93OiB7XG4gICAgc206IFwiMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgIERFRkFVTFQ6IFwiMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgbWQ6IFwiMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXG4gICAgbGc6IFwiMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICB4bDogXCIwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxMHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDQpXCIsXG4gICAgXCIyeGxcIjogXCIwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXG4gICAgaW5uZXI6IFwiaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KVwiLFxuICAgIG5vbmU6IFwibm9uZVwiXG4gIH0sXG4gIGNvbnRhaW5lcjoge30sXG4gIGRpdmlkZUNvbG9yOiBhbGlhczIoXCJib3JkZXJDb2xvclwiKSxcbiAgZGl2aWRlT3BhY2l0eTogYWxpYXMyKFwiYm9yZGVyT3BhY2l0eVwiKSxcbiAgZGl2aWRlV2lkdGg6IGFsaWFzMihcImJvcmRlcldpZHRoXCIpLFxuICBmaWxsOiB7Y3VycmVudDogXCJjdXJyZW50Q29sb3JcIn0sXG4gIGZsZXg6IHtcbiAgICAxOiBcIjEgMSAwJVwiLFxuICAgIGF1dG86IFwiMSAxIGF1dG9cIixcbiAgICBpbml0aWFsOiBcIjAgMSBhdXRvXCIsXG4gICAgbm9uZTogXCJub25lXCJcbiAgfSxcbiAgZm9udEZhbWlseToge1xuICAgIHNhbnM6ICd1aS1zYW5zLXNlcmlmLHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxcIk5vdG8gU2Fuc1wiLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiLFwiTm90byBDb2xvciBFbW9qaVwiJy5zcGxpdChcIixcIiksXG4gICAgc2VyaWY6ICd1aS1zZXJpZixHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZicuc3BsaXQoXCIsXCIpLFxuICAgIG1vbm86ICd1aS1tb25vc3BhY2UsU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsXCJDb3VyaWVyIE5ld1wiLG1vbm9zcGFjZScuc3BsaXQoXCIsXCIpXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgeHM6IFtcIjAuNzVyZW1cIiwgXCIxcmVtXCJdLFxuICAgIHNtOiBbXCIwLjg3NXJlbVwiLCBcIjEuMjVyZW1cIl0sXG4gICAgYmFzZTogW1wiMXJlbVwiLCBcIjEuNXJlbVwiXSxcbiAgICBsZzogW1wiMS4xMjVyZW1cIiwgXCIxLjc1cmVtXCJdLFxuICAgIHhsOiBbXCIxLjI1cmVtXCIsIFwiMS43NXJlbVwiXSxcbiAgICBcIjJ4bFwiOiBbXCIxLjVyZW1cIiwgXCIycmVtXCJdLFxuICAgIFwiM3hsXCI6IFtcIjEuODc1cmVtXCIsIFwiMi4yNXJlbVwiXSxcbiAgICBcIjR4bFwiOiBbXCIyLjI1cmVtXCIsIFwiMi41cmVtXCJdLFxuICAgIFwiNXhsXCI6IFtcIjNyZW1cIiwgXCIxXCJdLFxuICAgIFwiNnhsXCI6IFtcIjMuNzVyZW1cIiwgXCIxXCJdLFxuICAgIFwiN3hsXCI6IFtcIjQuNXJlbVwiLCBcIjFcIl0sXG4gICAgXCI4eGxcIjogW1wiNnJlbVwiLCBcIjFcIl0sXG4gICAgXCI5eGxcIjogW1wiOHJlbVwiLCBcIjFcIl1cbiAgfSxcbiAgZm9udFdlaWdodDoge1xuICAgIHRoaW46IFwiMTAwXCIsXG4gICAgZXh0cmFsaWdodDogXCIyMDBcIixcbiAgICBsaWdodDogXCIzMDBcIixcbiAgICBub3JtYWw6IFwiNDAwXCIsXG4gICAgbWVkaXVtOiBcIjUwMFwiLFxuICAgIHNlbWlib2xkOiBcIjYwMFwiLFxuICAgIGJvbGQ6IFwiNzAwXCIsXG4gICAgZXh0cmFib2xkOiBcIjgwMFwiLFxuICAgIGJsYWNrOiBcIjkwMFwiXG4gIH0sXG4gIGdhcDogYWxpYXMyKFwic3BhY2luZ1wiKSxcbiAgZ3JhZGllbnRDb2xvclN0b3BzOiBhbGlhczIoXCJjb2xvcnNcIiksXG4gIGhlaWdodDogKHRoZW1lMikgPT4gKHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIC4uLnJhdGlvcygyLCA2KSxcbiAgICBmdWxsOiBcIjEwMCVcIixcbiAgICBzY3JlZW46IFwiMTAwdmhcIlxuICB9KSxcbiAgaW5zZXQ6ICh0aGVtZTIpID0+ICh7XG4gICAgYXV0bzogXCJhdXRvXCIsXG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKSxcbiAgICAuLi5yYXRpb3MoMiwgNCksXG4gICAgZnVsbDogXCIxMDAlXCJcbiAgfSksXG4gIGtleWZyYW1lczoge1xuICAgIHNwaW46IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgwZGVnKVwiXG4gICAgICB9LFxuICAgICAgdG86IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHBpbmc6IHtcbiAgICAgIFwiMCVcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICAgIH0sXG4gICAgICBcIjc1JSwxMDAlXCI6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDIpXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBwdWxzZToge1xuICAgICAgXCIwJSwxMDAlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICAgIH0sXG4gICAgICBcIjUwJVwiOiB7XG4gICAgICAgIG9wYWNpdHk6IFwiLjVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgYm91bmNlOiB7XG4gICAgICBcIjAlLCAxMDAlXCI6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTI1JSlcIixcbiAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAuOCwwLDEsMSlcIlxuICAgICAgfSxcbiAgICAgIFwiNTAlXCI6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IFwiY3ViaWMtYmV6aWVyKDAsMCwwLjIsMSlcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIHRpZ2h0ZXI6IFwiLTAuMDVlbVwiLFxuICAgIHRpZ2h0OiBcIi0wLjAyNWVtXCIsXG4gICAgbm9ybWFsOiBcIjBlbVwiLFxuICAgIHdpZGU6IFwiMC4wMjVlbVwiLFxuICAgIHdpZGVyOiBcIjAuMDVlbVwiLFxuICAgIHdpZGVzdDogXCIwLjFlbVwiXG4gIH0sXG4gIGxpbmVIZWlnaHQ6IHtcbiAgICBub25lOiBcIjFcIixcbiAgICB0aWdodDogXCIxLjI1XCIsXG4gICAgc251ZzogXCIxLjM3NVwiLFxuICAgIG5vcm1hbDogXCIxLjVcIixcbiAgICByZWxheGVkOiBcIjEuNjI1XCIsXG4gICAgbG9vc2U6IFwiMlwiLFxuICAgIC4uLmxpbmVhcigxMCwgXCJyZW1cIiwgNCwgMylcbiAgfSxcbiAgbWFyZ2luOiAodGhlbWUyKSA9PiAoe1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIilcbiAgfSksXG4gIG1heEhlaWdodDogKHRoZW1lMikgPT4gKHtcbiAgICAuLi50aGVtZTIoXCJzcGFjaW5nXCIpLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIHNjcmVlbjogXCIxMDB2aFwiXG4gIH0pLFxuICBtYXhXaWR0aDogKHRoZW1lMiwge2JyZWFrcG9pbnRzfSkgPT4gKHtcbiAgICBub25lOiBcIm5vbmVcIixcbiAgICAwOiBcIjByZW1cIixcbiAgICB4czogXCIyMHJlbVwiLFxuICAgIHNtOiBcIjI0cmVtXCIsXG4gICAgbWQ6IFwiMjhyZW1cIixcbiAgICBsZzogXCIzMnJlbVwiLFxuICAgIHhsOiBcIjM2cmVtXCIsXG4gICAgXCIyeGxcIjogXCI0MnJlbVwiLFxuICAgIFwiM3hsXCI6IFwiNDhyZW1cIixcbiAgICBcIjR4bFwiOiBcIjU2cmVtXCIsXG4gICAgXCI1eGxcIjogXCI2NHJlbVwiLFxuICAgIFwiNnhsXCI6IFwiNzJyZW1cIixcbiAgICBcIjd4bFwiOiBcIjgwcmVtXCIsXG4gICAgZnVsbDogXCIxMDAlXCIsXG4gICAgbWluOiBcIm1pbi1jb250ZW50XCIsXG4gICAgbWF4OiBcIm1heC1jb250ZW50XCIsXG4gICAgcHJvc2U6IFwiNjVjaFwiLFxuICAgIC4uLmJyZWFrcG9pbnRzKHRoZW1lMihcInNjcmVlbnNcIikpXG4gIH0pLFxuICBtaW5IZWlnaHQ6IHtcbiAgICAwOiBcIjBweFwiLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIHNjcmVlbjogXCIxMDB2aFwiXG4gIH0sXG4gIG1pbldpZHRoOiB7XG4gICAgMDogXCIwcHhcIixcbiAgICBmdWxsOiBcIjEwMCVcIixcbiAgICBtaW46IFwibWluLWNvbnRlbnRcIixcbiAgICBtYXg6IFwibWF4LWNvbnRlbnRcIlxuICB9LFxuICBvcGFjaXR5OiB7XG4gICAgLi4ubGluZWFyKDEwMCwgXCJcIiwgMTAwLCAwLCAxMCksXG4gICAgNTogXCIwLjA1XCIsXG4gICAgMjU6IFwiMC4yNVwiLFxuICAgIDc1OiBcIjAuNzVcIixcbiAgICA5NTogXCIwLjk1XCJcbiAgfSxcbiAgb3JkZXI6IHtcbiAgICBmaXJzdDogXCItOTk5OVwiLFxuICAgIGxhc3Q6IFwiOTk5OVwiLFxuICAgIG5vbmU6IFwiMFwiLFxuICAgIC4uLmxpbmVhcigxMiwgXCJcIiwgMSwgMSlcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG5vbmU6IFtcIjJweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBcIjJweFwiXSxcbiAgICB3aGl0ZTogW1wiMnB4IGRvdHRlZCB3aGl0ZVwiLCBcIjJweFwiXSxcbiAgICBibGFjazogW1wiMnB4IGRvdHRlZCBibGFja1wiLCBcIjJweFwiXVxuICB9LFxuICBwYWRkaW5nOiBhbGlhczIoXCJzcGFjaW5nXCIpLFxuICBwbGFjZWhvbGRlckNvbG9yOiBhbGlhczIoXCJjb2xvcnNcIiksXG4gIHBsYWNlaG9sZGVyT3BhY2l0eTogYWxpYXMyKFwib3BhY2l0eVwiKSxcbiAgcmluZ0NvbG9yOiAodGhlbWUyKSA9PiAoe1xuICAgIERFRkFVTFQ6IHRoZW1lMihcImNvbG9ycy5ibHVlLjUwMFwiLCBcIiMzYjgyZjZcIiksXG4gICAgLi4udGhlbWUyKFwiY29sb3JzXCIpXG4gIH0pLFxuICByaW5nT2Zmc2V0Q29sb3I6IGFsaWFzMihcImNvbG9yc1wiKSxcbiAgcmluZ09mZnNldFdpZHRoOiBleHBvbmVudGlhbCg4LCBcInB4XCIpLFxuICByaW5nT3BhY2l0eTogKHRoZW1lMikgPT4gKHtcbiAgICBERUZBVUxUOiBcIjAuNVwiLFxuICAgIC4uLnRoZW1lMihcIm9wYWNpdHlcIilcbiAgfSksXG4gIHJpbmdXaWR0aDoge1xuICAgIERFRkFVTFQ6IFwiM3B4XCIsXG4gICAgLi4uZXhwb25lbnRpYWwoOCwgXCJweFwiKVxuICB9LFxuICByb3RhdGU6IHtcbiAgICAuLi5leHBvbmVudGlhbCgyLCBcImRlZ1wiKSxcbiAgICAuLi5leHBvbmVudGlhbCgxMiwgXCJkZWdcIiwgMyksXG4gICAgLi4uZXhwb25lbnRpYWwoMTgwLCBcImRlZ1wiLCA0NSlcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICAwOiBcIjBcIixcbiAgICA1MDogXCIuNVwiLFxuICAgIDc1OiBcIi43NVwiLFxuICAgIC4uLmxpbmVhcigxMTAsIFwiXCIsIDEwMCwgOTAsIDUpLFxuICAgIDEyNTogXCIxLjI1XCIsXG4gICAgMTUwOiBcIjEuNVwiXG4gIH0sXG4gIHNrZXc6IHtcbiAgICAuLi5leHBvbmVudGlhbCgyLCBcImRlZ1wiKSxcbiAgICAuLi5leHBvbmVudGlhbCgxMiwgXCJkZWdcIiwgMylcbiAgfSxcbiAgc3BhY2U6IGFsaWFzMihcInNwYWNpbmdcIiksXG4gIHN0cm9rZToge1xuICAgIGN1cnJlbnQ6IFwiY3VycmVudENvbG9yXCJcbiAgfSxcbiAgc3Ryb2tlV2lkdGg6IGxpbmVhcigyKSxcbiAgdGV4dENvbG9yOiBhbGlhczIoXCJjb2xvcnNcIiksXG4gIHRleHRPcGFjaXR5OiBhbGlhczIoXCJvcGFjaXR5XCIpLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICh0aGVtZTIpID0+ICh7XG4gICAgREVGQVVMVDogXCIxNTBtc1wiLFxuICAgIC4uLnRoZW1lMihcImR1cmF0aW9uc1wiKVxuICB9KSxcbiAgdHJhbnNpdGlvbkRlbGF5OiBhbGlhczIoXCJkdXJhdGlvbnNcIiksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eToge1xuICAgIG5vbmU6IFwibm9uZVwiLFxuICAgIGFsbDogXCJhbGxcIixcbiAgICBERUZBVUxUOiBcImJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGZpbGwsc3Ryb2tlLG9wYWNpdHksYm94LXNoYWRvdyx0cmFuc2Zvcm1cIixcbiAgICBjb2xvcnM6IFwiYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2VcIixcbiAgICBvcGFjaXR5OiBcIm9wYWNpdHlcIixcbiAgICBzaGFkb3c6IFwiYm94LXNoYWRvd1wiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2Zvcm1cIlxuICB9LFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHtcbiAgICBERUZBVUxUOiBcImN1YmljLWJlemllcigwLjQsMCwwLjIsMSlcIixcbiAgICBsaW5lYXI6IFwibGluZWFyXCIsXG4gICAgaW46IFwiY3ViaWMtYmV6aWVyKDAuNCwwLDEsMSlcIixcbiAgICBvdXQ6IFwiY3ViaWMtYmV6aWVyKDAsMCwwLjIsMSlcIixcbiAgICBcImluLW91dFwiOiBcImN1YmljLWJlemllcigwLjQsMCwwLjIsMSlcIlxuICB9LFxuICB0cmFuc2xhdGU6ICh0aGVtZTIpID0+ICh7XG4gICAgLi4udGhlbWUyKFwic3BhY2luZ1wiKSxcbiAgICAuLi5yYXRpb3MoMiwgNCksXG4gICAgZnVsbDogXCIxMDAlXCJcbiAgfSksXG4gIHdpZHRoOiAodGhlbWUyKSA9PiAoe1xuICAgIGF1dG86IFwiYXV0b1wiLFxuICAgIC4uLnRoZW1lMihcInNwYWNpbmdcIiksXG4gICAgLi4ucmF0aW9zKDIsIDYpLFxuICAgIC4uLnJhdGlvcygxMiwgMTIpLFxuICAgIHNjcmVlbjogXCIxMDB2d1wiLFxuICAgIGZ1bGw6IFwiMTAwJVwiLFxuICAgIG1pbjogXCJtaW4tY29udGVudFwiLFxuICAgIG1heDogXCJtYXgtY29udGVudFwiXG4gIH0pLFxuICB6SW5kZXg6IHtcbiAgICBhdXRvOiBcImF1dG9cIixcbiAgICAuLi5saW5lYXIoNTAsIFwiXCIsIDEsIDAsIDEwKVxuICB9XG59O1xudmFyIGZsYXR0ZW5Db2xvclBhbGV0dGUgPSAoY29sb3JzLCB0YXJnZXQgPSB7fSwgcHJlZml4ID0gW10pID0+IHtcbiAgT2JqZWN0LmtleXMoY29sb3JzKS5mb3JFYWNoKChwcm9wZXJ0eTIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1twcm9wZXJ0eTJdO1xuICAgIGlmIChwcm9wZXJ0eTIgPT09IFwiREVGQVVMVFwiKSB7XG4gICAgICB0YXJnZXRbam9pbihwcmVmaXgpXSA9IHZhbHVlO1xuICAgICAgdGFyZ2V0W2pvaW4ocHJlZml4LCBcIi5cIildID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IFsuLi5wcmVmaXgsIHByb3BlcnR5Ml07XG4gICAgdGFyZ2V0W2pvaW4oa2V5KV0gPSB2YWx1ZTtcbiAgICB0YXJnZXRbam9pbihrZXksIFwiLlwiKV0gPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgIGZsYXR0ZW5Db2xvclBhbGV0dGUodmFsdWUsIHRhcmdldCwga2V5KTtcbiAgICB9XG4gIH0sIHRhcmdldCk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIHJlc29sdmVDb250ZXh0ID0ge1xuICBuZWdhdGl2ZTogKCkgPT4gKHt9KSxcbiAgYnJlYWtwb2ludHM6IChzY3JlZW5zKSA9PiBPYmplY3Qua2V5cyhzY3JlZW5zKS5maWx0ZXIoKGtleSkgPT4gdHlwZW9mIHNjcmVlbnNba2V5XSA9PSBcInN0cmluZ1wiKS5yZWR1Y2UoKHRhcmdldCwga2V5KSA9PiB7XG4gICAgdGFyZ2V0W1wic2NyZWVuLVwiICsga2V5XSA9IHNjcmVlbnNba2V5XTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LCB7fSlcbn07XG52YXIgbWFrZVRoZW1lUmVzb2x2ZXIgPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCB0aGVtZTIgPSB7Li4uZGVmYXVsdFRoZW1lLCAuLi5jb25maWd9O1xuICBjb25zdCBkZXJlZiA9ICh0aGVtZTMsIHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBiYXNlID0gdGhlbWUzICYmIHRoZW1lM1tzZWN0aW9uXTtcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBiYXNlID09IFwiZnVuY3Rpb25cIiA/IGJhc2UocmVzb2x2ZSwgcmVzb2x2ZUNvbnRleHQpIDogYmFzZTtcbiAgICByZXR1cm4gdmFsdWUgJiYgc2VjdGlvbiA9PT0gXCJjb2xvcnNcIiA/IGZsYXR0ZW5Db2xvclBhbGV0dGUodmFsdWUpIDogdmFsdWU7XG4gIH07XG4gIGNvbnN0IHJlc29sdmUgPSAoc2VjdGlvbiwga2V5LCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgICBjb25zdCBrZXlwYXRoID0gc2VjdGlvbi5zcGxpdChcIi5cIik7XG4gICAgc2VjdGlvbiA9IGtleXBhdGhbMF07XG4gICAgaWYgKGtleXBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0ga2V5O1xuICAgICAga2V5ID0gam9pbih0YWlsKGtleXBhdGgpLCBcIi5cIik7XG4gICAgfVxuICAgIGxldCBiYXNlID0gY2FjaGUuZ2V0KHNlY3Rpb24pO1xuICAgIGlmICghYmFzZSkge1xuICAgICAgY2FjaGUuc2V0KHNlY3Rpb24sIGJhc2UgPSB7XG4gICAgICAgIC4uLmRlcmVmKHRoZW1lMiwgc2VjdGlvbiksXG4gICAgICAgIC4uLmRlcmVmKHRoZW1lMi5leHRlbmQsIHNlY3Rpb24pXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGJhc2VbKEFycmF5LmlzQXJyYXkoa2V5KSA/IGpvaW4oa2V5KSA6IGtleSkgfHwgXCJERUZBVUxUXCJdO1xuICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhaW5jbHVkZXMoW1wiZm9udFNpemVcIiwgXCJvdXRsaW5lXCJdLCBzZWN0aW9uKSA/IGpvaW4odmFsdWUsIFwiLFwiKSA6IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfTtcbiAgcmV0dXJuIHJlc29sdmU7XG59O1xuXG4vLyBzcmMvdHdpbmQvdHJhbnNsYXRlLnRzXG52YXIgdHJhbnNsYXRlID0gKHBsdWdpbnMsIGNvbnRleHQpID0+IChydWxlLCBpc1RyYW5zbGF0aW5nKSA9PiB7XG4gIGlmICh0eXBlb2YgcnVsZS5kID09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBydWxlLmQoY29udGV4dCk7XG4gIH1cbiAgY29uc3QgcGFyYW1ldGVycyA9IHJ1bGUuZC5zcGxpdChcIi1cIik7XG4gIGlmICghaXNUcmFuc2xhdGluZyAmJiBwYXJhbWV0ZXJzWzBdID09PSBcInR3XCIgJiYgcnVsZS4kID09PSBydWxlLmQpIHtcbiAgICByZXR1cm4gcnVsZS4kO1xuICB9XG4gIGZvciAobGV0IGluZGV4ID0gcGFyYW1ldGVycy5sZW5ndGg7IGluZGV4OyBpbmRleC0tKSB7XG4gICAgY29uc3QgaWQgPSBqb2luKHBhcmFtZXRlcnMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICBjb25zdCBwbHVnaW4gPSBwbHVnaW5zW2lkXTtcbiAgICBpZiAocGx1Z2luKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHBsdWdpbiA9PSBcImZ1bmN0aW9uXCIgPyBwbHVnaW4odGFpbChwYXJhbWV0ZXJzLCBpbmRleCksIGNvbnRleHQsIGlkKSA6IHR5cGVvZiBwbHVnaW4gPT0gXCJzdHJpbmdcIiA/IGNvbnRleHRbaXNUcmFuc2xhdGluZyA/IFwiY3NzXCIgOiBcInR3XCJdKHBsdWdpbikgOiBwbHVnaW47XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvdHdpbmQvZGVjb3JhdGUudHNcbnZhciBfMjtcbnZhciBHUk9VUF9SRSA9IC9eOihncm91cCg/Oig/IS1mb2N1cykuKz8pKiktKC4rKSQvO1xudmFyIGRlY29yYXRlID0gKGRhcmtNb2RlLCB2YXJpYW50cywge3RoZW1lOiB0aGVtZTIsIHRhZ30pID0+IHtcbiAgY29uc3QgYXBwbHlWYXJpYW50ID0gKHRyYW5zbGF0aW9uLCB2YXJpYW50KSA9PiB7XG4gICAgaWYgKF8yID0gdGhlbWUyKFwic2NyZWVuc1wiLCB0YWlsKHZhcmlhbnQpLCBcIlwiKSkge1xuICAgICAgcmV0dXJuIHtbYnVpbGRNZWRpYVF1ZXJ5KF8yKV06IHRyYW5zbGF0aW9ufTtcbiAgICB9XG4gICAgaWYgKHZhcmlhbnQgPT09IFwiOmRhcmtcIiAmJiBkYXJrTW9kZSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICByZXR1cm4ge1tgLmRhcmsgJmBdOiB0cmFuc2xhdGlvbn07XG4gICAgfVxuICAgIGlmIChfMiA9IEdST1VQX1JFLmV4ZWModmFyaWFudCkpIHtcbiAgICAgIHJldHVybiB7W2AuJHtlc2NhcGUodGFnKF8yWzFdKSl9OiR7XzJbMl19ICZgXTogdHJhbnNsYXRpb259O1xuICAgIH1cbiAgICByZXR1cm4ge1t2YXJpYW50c1t0YWlsKHZhcmlhbnQpXSB8fCBcIiZcIiArIHZhcmlhbnRdOiB0cmFuc2xhdGlvbn07XG4gIH07XG4gIHJldHVybiAodHJhbnNsYXRpb24sIHJ1bGUpID0+IHJ1bGUudi5yZWR1Y2VSaWdodChhcHBseVZhcmlhbnQsIHRyYW5zbGF0aW9uKTtcbn07XG5cbi8vIHNyYy90d2luZC9wcmVzZWRlbmNlLnRzXG52YXIgXzM7XG52YXIgcmVzcG9uc2l2ZVByZWNlZGVuY2UgPSAoY3NzKSA9PiAoKChfMyA9IC8oPzpefG1pbi13aWR0aDogKikoXFxkKyg/Oi5cXGQrKT8pKHApPy8uZXhlYyhjc3MpKSA/ICtfM1sxXSAvIChfM1syXSA/IDE1IDogMSkgLyAxMCA6IDApICYgMzEpIDw8IDIyO1xudmFyIHNlcGVyYXRvclByZWNlZGVuY2UgPSAoc3RyaW5nKSA9PiB7XG4gIF8zID0gMDtcbiAgZm9yIChsZXQgaW5kZXggPSBzdHJpbmcubGVuZ3RoOyBpbmRleC0tOyApIHtcbiAgICBfMyArPSBpbmNsdWRlcyhcIi06LFwiLCBzdHJpbmdbaW5kZXhdKTtcbiAgfVxuICByZXR1cm4gXzM7XG59O1xudmFyIGF0UnVsZVByZXNlZGVuY2UgPSAoY3NzKSA9PiAoc2VwZXJhdG9yUHJlY2VkZW5jZShjc3MpICYgMTUpIDw8IDE4O1xudmFyIFBSRUNFREVOQ0VTX0JZX1BTRVVET19DTEFTUyA9IFtcbiAgXCJyc3RcIixcbiAgXCJzdFwiLFxuICBcImVuXCIsXG4gIFwiZFwiLFxuICBcIm5rXCIsXG4gIFwic2l0ZWRcIixcbiAgXCJwdHlcIixcbiAgXCJlY2tlZFwiLFxuICBcImN1cy13XCIsXG4gIFwidmVyXCIsXG4gIFwiY3VzXCIsXG4gIFwiY3VzLXZcIixcbiAgXCJ0aXZlXCIsXG4gIFwic2FibGVcIixcbiAgXCJhZC1vblwiLFxuICBcInRpb25hXCIsXG4gIFwicXVpcmVcIlxuXTtcbnZhciBwc2V1ZG9QcmVjZWRlbmNlID0gKHBzZXVkb0NsYXNzKSA9PiAxIDw8ICh+KF8zID0gUFJFQ0VERU5DRVNfQllfUFNFVURPX0NMQVNTLmluZGV4T2YocHNldWRvQ2xhc3MucmVwbGFjZShHUk9VUF9SRSwgXCI6JDJcIikuc2xpY2UoMywgOCkpKSA/IF8zIDogMTcpO1xudmFyIG1ha2VWYXJpYW50UHJlc2VkZW5jZUNhbGN1bGF0b3IgPSAodGhlbWUyLCB2YXJpYW50cykgPT4gKHByZXNlZGVuY2UsIHZhcmlhbnQpID0+IHByZXNlZGVuY2UgfCAoKF8zID0gdGhlbWUyKFwic2NyZWVuc1wiLCB0YWlsKHZhcmlhbnQpLCBcIlwiKSkgPyAxIDw8IDI3IHwgcmVzcG9uc2l2ZVByZWNlZGVuY2UoYnVpbGRNZWRpYVF1ZXJ5KF8zKSkgOiB2YXJpYW50ID09PSBcIjpkYXJrXCIgPyAxIDw8IDMwIDogKF8zID0gdmFyaWFudHNbdmFyaWFudF0gfHwgdmFyaWFudClbMF0gPT09IFwiQFwiID8gYXRSdWxlUHJlc2VkZW5jZShfMykgOiBwc2V1ZG9QcmVjZWRlbmNlKHZhcmlhbnQpKTtcbnZhciBkZWNsYXJhdGlvblByb3BlcnR5UHJlY2VkZW5jZSA9IChwcm9wZXJ0eTIpID0+IHByb3BlcnR5MlswXSA9PT0gXCItXCIgPyAwIDogc2VwZXJhdG9yUHJlY2VkZW5jZShwcm9wZXJ0eTIpICsgKChfMyA9IC9eKD86KGJvcmRlci0oPyF3fGN8c3R5KXxbdGxicl0uezIsNH1tPyR8Yy57N30kKXwoW2ZsXS57NX1sfGcuezh9JHxwbCkpLy5leGVjKHByb3BlcnR5MikpID8gKyEhXzNbMV0gfHwgLSEhXzNbMl0gOiAwKSArIDE7XG5cbi8vIHNyYy90d2luZC9zZXJpYWxpemUudHNcbnZhciBzdHJpbmdpZnlCbG9jayA9IChib2R5LCBzZWxlY3RvcikgPT4gc2VsZWN0b3IgKyBcIntcIiArIGJvZHkgKyBcIn1cIjtcbnZhciBMYXllcjtcbihmdW5jdGlvbihMYXllcjIpIHtcbiAgTGF5ZXIyW0xheWVyMltcImJhc2VcIl0gPSAwXSA9IFwiYmFzZVwiO1xuICBMYXllcjJbTGF5ZXIyW1wiY29tcG9uZW50c1wiXSA9IDFdID0gXCJjb21wb25lbnRzXCI7XG4gIExheWVyMltMYXllcjJbXCJ1dGlsaXRpZXNcIl0gPSAyXSA9IFwidXRpbGl0aWVzXCI7XG4gIExheWVyMltMYXllcjJbXCJjc3NcIl0gPSAzXSA9IFwiY3NzXCI7XG59KShMYXllciB8fCAoTGF5ZXIgPSB7fSkpO1xudmFyIHNlcmlhbGl6ZSA9IChwcmVmaXgsIHZhcmlhbnRzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHt0aGVtZTogdGhlbWUyLCB0YWd9ID0gY29udGV4dDtcbiAgY29uc3QgdGFnVmFyID0gKF80LCBwcm9wZXJ0eTIpID0+IFwiLS1cIiArIHRhZyhwcm9wZXJ0eTIpO1xuICBjb25zdCB0YWdWYXJzID0gKHZhbHVlKSA9PiBgJHt2YWx1ZX1gLnJlcGxhY2UoLy0tKHR3LVtcXHctXSspXFxiL2csIHRhZ1Zhcik7XG4gIGNvbnN0IHN0cmluZ2lmeURlY2xhcmF0aW9uID0gKHByb3BlcnR5MiwgdmFsdWUsIGltcG9ydGFudCkgPT4ge1xuICAgIHByb3BlcnR5MiA9IHRhZ1ZhcnMocHJvcGVydHkyKTtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBqb2luKHZhbHVlLmZpbHRlcihCb29sZWFuKS5tYXAoKHZhbHVlMikgPT4gcHJlZml4KHByb3BlcnR5MiwgdGFnVmFycyh2YWx1ZTIpLCBpbXBvcnRhbnQpKSwgXCI7XCIpIDogcHJlZml4KHByb3BlcnR5MiwgdGFnVmFycyh2YWx1ZSksIGltcG9ydGFudCk7XG4gIH07XG4gIGxldCBydWxlczI7XG4gIGNvbnN0IHN0cmluZ2lmeTMgPSAoYXRSdWxlcywgc2VsZWN0b3IsIHByZXNlZGVuY2UsIGNzcywgaW1wb3J0YW50KSA9PiB7XG4gICAgbGV0IGRlY2xhcmF0aW9ucyA9IFwiXCI7XG4gICAgbGV0IG1heFByb3BlcnR5UHJlc2VkZW5jZSA9IDA7XG4gICAgbGV0IG51bWJlck9mRGVjbGFyYXRpb25zID0gMDtcbiAgICBpZiAoXCJAYXBwbHlcIiBpbiBjc3MpIHtcbiAgICAgIGNzcyA9IG1lcmdlKGV2YWxUaHVuayhhcHBseShjc3NbXCJAYXBwbHlcIl0pLCBjb250ZXh0KSwgey4uLmNzcywgXCJAYXBwbHlcIjogdm9pZCAwfSwgY29udGV4dCk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGNzcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2YWxUaHVuayhjc3Nba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoaW5jbHVkZXMoXCJyZ1wiLCAodHlwZW9mIHZhbHVlKVs1XSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBcIlwiICYmIGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgcHJvcGVydHkyID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICAgICAgbnVtYmVyT2ZEZWNsYXJhdGlvbnMgKz0gMTtcbiAgICAgICAgICBtYXhQcm9wZXJ0eVByZXNlZGVuY2UgPSBNYXRoLm1heChtYXhQcm9wZXJ0eVByZXNlZGVuY2UsIGRlY2xhcmF0aW9uUHJvcGVydHlQcmVjZWRlbmNlKHByb3BlcnR5MikpO1xuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IChkZWNsYXJhdGlvbnMgJiYgZGVjbGFyYXRpb25zICsgXCI7XCIpICsgc3RyaW5naWZ5RGVjbGFyYXRpb24ocHJvcGVydHkyLCB2YWx1ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoa2V5WzBdID09PSBcIkBcIikge1xuICAgICAgICAgIGlmIChrZXlbMV0gPT09IFwiZlwiKSB7XG4gICAgICAgICAgICBzdHJpbmdpZnkzKFtdLCBrZXksIDAsIHZhbHVlLCBpbXBvcnRhbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoa2V5WzFdID09PSBcImtcIikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNpemUgPSBydWxlczIubGVuZ3RoO1xuICAgICAgICAgICAgc3RyaW5naWZ5MyhbXSwgXCJcIiwgMCwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgICAgICBjb25zdCB3YXlwb2ludHMgPSBydWxlczIuc3BsaWNlKGN1cnJlbnRTaXplLCBydWxlczIubGVuZ3RoIC0gY3VycmVudFNpemUpO1xuICAgICAgICAgICAgcnVsZXMyLnB1c2goe1xuICAgICAgICAgICAgICByOiBzdHJpbmdpZnlCbG9jayhqb2luKHdheXBvaW50cy5tYXAoKHApID0+IHAuciksIFwiXCIpLCBrZXkpLFxuICAgICAgICAgICAgICBwOiB3YXlwb2ludHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAucCwgMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoa2V5LnNsaWNlKDEsIDgpID09IFwic2NyZWVuIFwiKSB7XG4gICAgICAgICAgICAgIGtleSA9IGJ1aWxkTWVkaWFRdWVyeShjb250ZXh0LnRoZW1lKFwic2NyZWVuc1wiLCB0YWlsKGtleSwgOCkudHJpbSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmdpZnkzKFsuLi5hdFJ1bGVzLCBrZXldLCBzZWxlY3RvciwgcHJlc2VkZW5jZSB8IHJlc3BvbnNpdmVQcmVjZWRlbmNlKGtleSkgfCBhdFJ1bGVQcmVzZWRlbmNlKGtleSksIHZhbHVlLCBpbXBvcnRhbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiOmdsb2JhbFwiKSB7XG4gICAgICAgICAgc3RyaW5naWZ5MyhbXSwgXCJcIiwgMCwgdmFsdWUsIGltcG9ydGFudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyaW5naWZ5MyhhdFJ1bGVzLCBzZWxlY3RvciA/IHNlbGVjdG9yLnJlcGxhY2UoLyhbXixdKSsvZywgKHNlbGVjdG9yUGFydCkgPT4ga2V5LnJlcGxhY2UoLyhbXixdKSsvZywgKGtleVBhcnQpID0+IGluY2x1ZGVzKGtleVBhcnQsIFwiJlwiKSA/IGtleVBhcnQucmVwbGFjZSgvJi9nLCBzZWxlY3RvclBhcnQpIDogKHNlbGVjdG9yUGFydCAmJiBzZWxlY3RvclBhcnQgKyBcIiBcIikgKyBrZXlQYXJ0KSkgOiBrZXksIHByZXNlZGVuY2UsIHZhbHVlLCBpbXBvcnRhbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKG51bWJlck9mRGVjbGFyYXRpb25zKSB7XG4gICAgICBydWxlczIucHVzaCh7XG4gICAgICAgIHI6IGF0UnVsZXMucmVkdWNlUmlnaHQoc3RyaW5naWZ5QmxvY2ssIHN0cmluZ2lmeUJsb2NrKGRlY2xhcmF0aW9ucywgc2VsZWN0b3IpKSxcbiAgICAgICAgcDogcHJlc2VkZW5jZSAqICgxIDw8IDgpICsgKChNYXRoLm1heCgwLCAxNSAtIG51bWJlck9mRGVjbGFyYXRpb25zKSAmIDE1KSA8PCA0IHwgKG1heFByb3BlcnR5UHJlc2VkZW5jZSB8fCAxNSkgJiAxNSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdmFyaWFudFByZXNlZGVuY2UgPSBtYWtlVmFyaWFudFByZXNlZGVuY2VDYWxjdWxhdG9yKHRoZW1lMiwgdmFyaWFudHMpO1xuICByZXR1cm4gKGNzcywgY2xhc3NOYW1lLCBydWxlLCBsYXllciA9IDApID0+IHtcbiAgICBsYXllciA8PD0gMjg7XG4gICAgcnVsZXMyID0gW107XG4gICAgc3RyaW5naWZ5MyhbXSwgY2xhc3NOYW1lID8gXCIuXCIgKyBlc2NhcGUoY2xhc3NOYW1lKSA6IFwiXCIsIHJ1bGUgPyBydWxlLnYucmVkdWNlUmlnaHQodmFyaWFudFByZXNlZGVuY2UsIGxheWVyKSA6IGxheWVyLCBjc3MsIHJ1bGUgJiYgcnVsZS5pKTtcbiAgICByZXR1cm4gcnVsZXMyO1xuICB9O1xufTtcblxuLy8gc3JjL3R3aW5kL2luamVjdC50c1xudmFyIGluamVjdCA9IChzaGVldCwgbW9kZTIsIGluaXQsIGNvbnRleHQpID0+IHtcbiAgbGV0IHNvcnRlZFByZWNlZGVuY2VzO1xuICBpbml0KCh2YWx1ZSA9IFtdKSA9PiBzb3J0ZWRQcmVjZWRlbmNlcyA9IHZhbHVlKTtcbiAgbGV0IGluc2VydGVkUnVsZXM7XG4gIGluaXQoKHZhbHVlID0gbmV3IFNldCgpKSA9PiBpbnNlcnRlZFJ1bGVzID0gdmFsdWUpO1xuICByZXR1cm4gKHtyOiBjc3MsIHA6IHByZXNlZGVuY2V9KSA9PiB7XG4gICAgaWYgKCFpbnNlcnRlZFJ1bGVzLmhhcyhjc3MpKSB7XG4gICAgICBpbnNlcnRlZFJ1bGVzLmFkZChjc3MpO1xuICAgICAgY29uc3QgaW5kZXggPSBzb3J0ZWRJbnNlcnRpb25JbmRleChzb3J0ZWRQcmVjZWRlbmNlcywgcHJlc2VkZW5jZSk7XG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnQoY3NzLCBpbmRleCk7XG4gICAgICAgIHNvcnRlZFByZWNlZGVuY2VzLnNwbGljZShpbmRleCwgMCwgcHJlc2VkZW5jZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIS86LVttd29dLy50ZXN0KGNzcykpIHtcbiAgICAgICAgICBtb2RlMi5yZXBvcnQoe2lkOiBcIklOSkVDVF9DU1NfRVJST1JcIiwgY3NzLCBlcnJvcn0sIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLy8gc3JjL3R3aW5kL2NvbmZpZ3VyZS50c1xudmFyIHNhbml0aXplID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUsIGRpc2FibGVkLCBlbmFibGVkID0gZGVmYXVsdFZhbHVlKSA9PiB2YWx1ZSA9PT0gZmFsc2UgPyBkaXNhYmxlZCA6IHZhbHVlID09PSB0cnVlID8gZW5hYmxlZCA6IHZhbHVlIHx8IGRlZmF1bHRWYWx1ZTtcbnZhciBsb2FkTW9kZSA9IChtb2RlMikgPT4gKHR5cGVvZiBtb2RlMiA9PSBcInN0cmluZ1wiID8ge3Q6IHN0cmljdCwgYTogd2FybiwgaTogc2lsZW50fVttb2RlMlsxXV0gOiBtb2RlMikgfHwgd2FybjtcbnZhciBzdHJpbmdpZnlWYXJpYW50ID0gKHNlbGVjdG9yLCB2YXJpYW50KSA9PiBzZWxlY3RvciArICh2YXJpYW50WzFdID09PSBcIjpcIiA/IHRhaWwodmFyaWFudCwgMikgKyBcIjpcIiA6IHRhaWwodmFyaWFudCkpICsgXCI6XCI7XG52YXIgc3RyaW5naWZ5MiA9IChydWxlLCBkaXJlY3RpdmUyID0gcnVsZS5kKSA9PiB0eXBlb2YgZGlyZWN0aXZlMiA9PSBcImZ1bmN0aW9uXCIgPyBcIlwiIDogcnVsZS52LnJlZHVjZShzdHJpbmdpZnlWYXJpYW50LCBcIlwiKSArIChydWxlLm4gPyBcIi1cIiA6IFwiXCIpICsgZGlyZWN0aXZlMiArIChydWxlLmkgPyBcIiFcIiA6IFwiXCIpO1xudmFyIENPTVBPTkVOVF9QUk9QUyA9IHtfOiB7dmFsdWU6IFwiXCIsIHdyaXRhYmxlOiB0cnVlfX07XG52YXIgY29uZmlndXJlID0gKGNvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IHRoZW1lMiA9IG1ha2VUaGVtZVJlc29sdmVyKGNvbmZpZy50aGVtZSk7XG4gIGNvbnN0IG1vZGUyID0gbG9hZE1vZGUoY29uZmlnLm1vZGUpO1xuICBjb25zdCBoYXNoID0gc2FuaXRpemUoY29uZmlnLmhhc2gsIGZhbHNlLCBmYWxzZSwgY3lyYjMyKTtcbiAgbGV0IGFjdGl2ZVJ1bGUgPSB7djogW119O1xuICBsZXQgdHJhbnNsYXRlRGVwdGggPSAwO1xuICBjb25zdCBsYXN0VHJhbnNsYXRpb25zID0gW107XG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgdHc6ICguLi50b2tlbnMpID0+IHByb2Nlc3ModG9rZW5zKSxcbiAgICB0aGVtZTogKHNlY3Rpb24sIGtleSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gICAgICBpZiAoa2V5ICE9IG51bGwgJiYgIWtleS5sZW5ndGgpIHtcbiAgICAgICAga2V5ID0gXCJERUZBVUxUXCI7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoZW1lMihzZWN0aW9uLCBrZXksIGRlZmF1bHRWYWx1ZSkgfHwgbW9kZTIudW5rbm93bihzZWN0aW9uLCBrZXkgPT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBrZXkuc3BsaXQoXCIuXCIpLCBkZWZhdWx0VmFsdWUgIT0gbnVsbCwgY29udGV4dCk7XG4gICAgICByZXR1cm4gYWN0aXZlUnVsZS5uICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiID8gYGNhbGMoJHt2YWx1ZX0gKiAtMSlgIDogdmFsdWU7XG4gICAgfSxcbiAgICB0YWc6ICh2YWx1ZSkgPT4gaGFzaCA/IGhhc2godmFsdWUpIDogdmFsdWUsXG4gICAgY3NzOiAocnVsZXMyKSA9PiB7XG4gICAgICB0cmFuc2xhdGVEZXB0aCsrO1xuICAgICAgY29uc3QgbGFzdFRyYW5zbGF0aW9uc0luZGV4ID0gbGFzdFRyYW5zbGF0aW9ucy5sZW5ndGg7XG4gICAgICB0cnkge1xuICAgICAgICA7XG4gICAgICAgICh0eXBlb2YgcnVsZXMyID09IFwic3RyaW5nXCIgPyBwYXJzZShbcnVsZXMyXSkgOiBydWxlczIpLmZvckVhY2goY29udmVydCk7XG4gICAgICAgIGNvbnN0IGNzcyA9IE9iamVjdC5jcmVhdGUobnVsbCwgQ09NUE9ORU5UX1BST1BTKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBsYXN0VHJhbnNsYXRpb25zSW5kZXg7IGluZGV4IDwgbGFzdFRyYW5zbGF0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGxhc3RUcmFuc2xhdGlvbnNbaW5kZXhdO1xuICAgICAgICAgIGlmICh0cmFuc2xhdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdHJhbnNsYXRpb24pIHtcbiAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgIG1lcmdlKGNzcywgdHJhbnNsYXRpb24sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgY3NzLl8gKz0gKGNzcy5fICYmIFwiIFwiKSArIHRyYW5zbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbGFzdFRyYW5zbGF0aW9ucy5sZW5ndGggPSBsYXN0VHJhbnNsYXRpb25zSW5kZXg7XG4gICAgICAgIHRyYW5zbGF0ZURlcHRoLS07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCB0cmFuc2xhdGUyID0gdHJhbnNsYXRlKHsuLi5jb3JlUGx1Z2lucywgLi4uY29uZmlnLnBsdWdpbnN9LCBjb250ZXh0KTtcbiAgY29uc3QgZG9UcmFuc2xhdGUgPSAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHBhcmVudFJ1bGUgPSBhY3RpdmVSdWxlO1xuICAgIGFjdGl2ZVJ1bGUgPSBydWxlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZXZhbFRodW5rKHRyYW5zbGF0ZTIocnVsZSksIGNvbnRleHQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBhY3RpdmVSdWxlID0gcGFyZW50UnVsZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHZhcmlhbnRzID0gey4uLmNvcmVWYXJpYW50cywgLi4uY29uZmlnLnZhcmlhbnRzfTtcbiAgY29uc3QgZGVjb3JhdGUyID0gZGVjb3JhdGUoY29uZmlnLmRhcmtNb2RlIHx8IFwibWVkaWFcIiwgdmFyaWFudHMsIGNvbnRleHQpO1xuICBjb25zdCBzZXJpYWxpemUyID0gc2VyaWFsaXplKHNhbml0aXplKGNvbmZpZy5wcmVmaXgsIGF1dG9wcmVmaXgsIG5vcHJlZml4KSwgdmFyaWFudHMsIGNvbnRleHQpO1xuICBjb25zdCBzaGVldCA9IGNvbmZpZy5zaGVldCB8fCAodHlwZW9mIHdpbmRvdyA9PSBcInVuZGVmaW5lZFwiID8gdm9pZFNoZWV0KCkgOiBjc3NvbVNoZWV0KGNvbmZpZykpO1xuICBjb25zdCB7aW5pdCA9IChjYWxsYmFjaykgPT4gY2FsbGJhY2soKX0gPSBzaGVldDtcbiAgY29uc3QgaW5qZWN0MiA9IGluamVjdChzaGVldCwgbW9kZTIsIGluaXQsIGNvbnRleHQpO1xuICBsZXQgaWRUb0NsYXNzTmFtZTtcbiAgaW5pdCgodmFsdWUgPSBuZXcgTWFwKCkpID0+IGlkVG9DbGFzc05hbWUgPSB2YWx1ZSk7XG4gIGNvbnN0IGlubGluZURpcmVjdGl2ZU5hbWUgPSBuZXcgV2Vha01hcCgpO1xuICBjb25zdCBldmFsdWF0ZUZ1bmN0aW9ucyA9IChrZXksIHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiID8gSlNPTi5zdHJpbmdpZnkodmFsdWUoY29udGV4dCksIGV2YWx1YXRlRnVuY3Rpb25zKSA6IHZhbHVlO1xuICBjb25zdCBjb252ZXJ0ID0gKHJ1bGUpID0+IHtcbiAgICBpZiAoIXRyYW5zbGF0ZURlcHRoICYmIGFjdGl2ZVJ1bGUudi5sZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSB7Li4ucnVsZSwgdjogWy4uLmFjdGl2ZVJ1bGUudiwgLi4ucnVsZS52XSwgJDogXCJcIn07XG4gICAgfVxuICAgIGlmICghcnVsZS4kKSB7XG4gICAgICBydWxlLiQgPSBzdHJpbmdpZnkyKHJ1bGUsIGlubGluZURpcmVjdGl2ZU5hbWUuZ2V0KHJ1bGUuZCkpO1xuICAgIH1cbiAgICBsZXQgY2xhc3NOYW1lID0gdHJhbnNsYXRlRGVwdGggPyBudWxsIDogaWRUb0NsYXNzTmFtZS5nZXQocnVsZS4kKTtcbiAgICBpZiAoY2xhc3NOYW1lID09IG51bGwpIHtcbiAgICAgIGxldCB0cmFuc2xhdGlvbiA9IGRvVHJhbnNsYXRlKHJ1bGUpO1xuICAgICAgaWYgKCFydWxlLiQpIHtcbiAgICAgICAgcnVsZS4kID0gY3lyYjMyKEpTT04uc3RyaW5naWZ5KHRyYW5zbGF0aW9uLCBldmFsdWF0ZUZ1bmN0aW9ucykpO1xuICAgICAgICBpbmxpbmVEaXJlY3RpdmVOYW1lLnNldChydWxlLmQsIHJ1bGUuJCk7XG4gICAgICAgIHJ1bGUuJCA9IHN0cmluZ2lmeTIocnVsZSwgcnVsZS4kKTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2xhdGlvbiAmJiB0eXBlb2YgdHJhbnNsYXRpb24gPT0gXCJvYmplY3RcIikge1xuICAgICAgICB0cmFuc2xhdGlvbiA9IGRlY29yYXRlMih0cmFuc2xhdGlvbiwgcnVsZSk7XG4gICAgICAgIGlmICh0cmFuc2xhdGVEZXB0aCkge1xuICAgICAgICAgIGxhc3RUcmFuc2xhdGlvbnMucHVzaCh0cmFuc2xhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGF5ZXIgPSB0eXBlb2YgcnVsZS5kID09IFwiZnVuY3Rpb25cIiA/IHR5cGVvZiB0cmFuc2xhdGlvbi5fID09IFwic3RyaW5nXCIgPyAxIDogMyA6IDI7XG4gICAgICAgICAgY2xhc3NOYW1lID0gaGFzaCB8fCB0eXBlb2YgcnVsZS5kID09IFwiZnVuY3Rpb25cIiA/IChoYXNoIHx8IGN5cmIzMikobGF5ZXIgKyBydWxlLiQpIDogcnVsZS4kO1xuICAgICAgICAgIHNlcmlhbGl6ZTIodHJhbnNsYXRpb24sIGNsYXNzTmFtZSwgcnVsZSwgbGF5ZXIpLmZvckVhY2goaW5qZWN0Mik7XG4gICAgICAgICAgaWYgKHRyYW5zbGF0aW9uLl8pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRyYW5zbGF0aW9uLl87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRyYW5zbGF0aW9uID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSB0cmFuc2xhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBydWxlLiQ7XG4gICAgICAgICAgbW9kZTIucmVwb3J0KHtpZDogXCJVTktOT1dOX0RJUkVDVElWRVwiLCBydWxlOiBjbGFzc05hbWV9LCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNsYXRlRGVwdGggJiYgdHlwZW9mIHJ1bGUuZCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgbGFzdFRyYW5zbGF0aW9ucy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdHJhbnNsYXRlRGVwdGgpIHtcbiAgICAgICAgaWRUb0NsYXNzTmFtZS5zZXQocnVsZS4kLCBjbGFzc05hbWUpO1xuICAgICAgICBlbnN1cmVNYXhTaXplKGlkVG9DbGFzc05hbWUsIDNlNCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH07XG4gIGNvbnN0IHByb2Nlc3MgPSAodG9rZW5zKSA9PiBwYXJzZSh0b2tlbnMpLm1hcChjb252ZXJ0KS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIGNvbnN0IHByZWZsaWdodCA9IHNhbml0aXplKGNvbmZpZy5wcmVmbGlnaHQsIGlkZW50aXR5LCBmYWxzZSk7XG4gIGlmIChwcmVmbGlnaHQpIHtcbiAgICBjb25zdCBjc3MgPSBjcmVhdGVQcmVmbGlnaHQodGhlbWUyKTtcbiAgICBjb25zdCBzdHlsZXMgPSBzZXJpYWxpemUyKHR5cGVvZiBwcmVmbGlnaHQgPT0gXCJmdW5jdGlvblwiID8gZXZhbFRodW5rKHByZWZsaWdodChjc3MsIGNvbnRleHQpLCBjb250ZXh0KSB8fCBjc3MgOiB7Li4uY3NzLCAuLi5wcmVmbGlnaHR9KTtcbiAgICBpbml0KChpbmplY3RlZCA9IChzdHlsZXMuZm9yRWFjaChpbmplY3QyKSwgdHJ1ZSkpID0+IGluamVjdGVkKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGluaXQ6ICgpID0+IG1vZGUyLnJlcG9ydCh7aWQ6IFwiTEFURV9TRVRVUF9DQUxMXCJ9LCBjb250ZXh0KSxcbiAgICBwcm9jZXNzXG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvaW5zdGFuY2UudHNcbnZhciBjcmVhdGUgPSAoY29uZmlnKSA9PiB7XG4gIGxldCBwcm9jZXNzID0gKHRva2VucykgPT4ge1xuICAgIGluaXQoKTtcbiAgICByZXR1cm4gcHJvY2Vzcyh0b2tlbnMpO1xuICB9O1xuICBsZXQgaW5pdCA9IChjb25maWcyKSA9PiB7XG4gICAgO1xuICAgICh7cHJvY2VzcywgaW5pdH0gPSBjb25maWd1cmUoY29uZmlnMikpO1xuICB9O1xuICBpZiAoY29uZmlnKVxuICAgIGluaXQoY29uZmlnKTtcbiAgbGV0IGNvbnRleHQ7XG4gIGNvbnN0IGZyb21Db250ZXh0ID0gKGtleSkgPT4gKCkgPT4ge1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgcHJvY2VzcyhbXG4gICAgICAgIChfNCkgPT4ge1xuICAgICAgICAgIGNvbnRleHQgPSBfNDtcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0W2tleV07XG4gIH07XG4gIHJldHVybiB7XG4gICAgdHc6IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCguLi50b2tlbnMpID0+IHByb2Nlc3ModG9rZW5zKSwge1xuICAgICAgdGhlbWU6IHtcbiAgICAgICAgZ2V0OiBmcm9tQ29udGV4dChcInRoZW1lXCIpXG4gICAgICB9XG4gICAgfSksXG4gICAgc2V0dXA6IChjb25maWcyKSA9PiBpbml0KGNvbmZpZzIpXG4gIH07XG59O1xuXG4vLyBzcmMvdHdpbmQvZGVmYXVsdC50c1xudmFyIHt0dywgc2V0dXB9ID0gY3JlYXRlKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10d2luZC5janMubWFwXG4iLCJpbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcblxuaW50ZXJmYWNlIElCdXR0b24ge1xuICBwcmltYXJ5PzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbW9kaWZpZXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IHByaW1hcnksIG1vZGlmaWVyLCBjaGlsZHJlbiwgLi4ucmVzdCB9OiBJQnV0dG9uKSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZSA9IGBmb250LXNhbnMgZm9udC1tZWRpdW0gcHktMiBweC00IGJvcmRlciByb3VuZGVkYDtcbiAgY29uc3Qgc3R5bGVzID0gcHJpbWFyeVxuICAgID8gYGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBib3JkZXItaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNzAwYFxuICAgIDogYGJnLXdoaXRlIHRleHQtZ3JheS02MDAgYm9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwYDtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17dHcoYCR7YmFzZVN0eWxlfSAke3N0eWxlc30gJHttb2RpZmllciA/PyBgYH1gKX0gey4uLnJlc3R9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHsgdHcgfSBmcm9tICd0d2luZCc7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XG5pbXBvcnQgQXJyb3cgZnJvbSAnQC9jb25zdGFudHMvc3ZnL2Fycm93LnN2Zyc7XG5cbmNvbnN0IFBhcnRpY2xlQmcgPSAoKSA9PiAoXG4gIDxQYXJ0aWNsZXMgXG4gIHBhcmFtcz17e1xuICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgIGltYWdlOiBbXG4gICAgICAgICAgICAgICAgICB7c3JjOiAncHVibGljL2ltYWdlcy9zdXp1a2EucG5nJywgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwfSxcbiAgICAgICAgICAgICAgICAgIHtzcmM6ICdwdWJsaWMvaW1hZ2VzL3NpbHZlcnN0b25lLnBuZycsIGhlaWdodDogMjAsIHdpZHRoOiAyMH0sXG4gICAgICAgICAgICAgICAgICB7c3JjOiAnc3BhaW4ucG5nJywgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwfSxcbiAgICAgICAgICAgICAgICAgIHtzcmM6ICdzdXp1a2EucG5nJywgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfX0gLz5cbik7XG5cbmNvbnN0IGFydGljbGVzID0gW1xuICB7XG4gICAgdGl0bGU6IGBSZWFsIFRpbWUgRGFzaGJvYXJkYCxcbiAgICBkZXNjOiBgTGFib3JlIGR1aXMgcGFyaWF0dXIgZXN0IGV4ZXJjaXRhdGlvbiBsYWJvcmlzIGN1cGlkYXRhdCBhbWV0IGNpbGx1bS4gQW1ldCBuaXNpIHVsbGFtY28uYCxcbiAgICBpbWFnZTogYC9pbWFnZXMvbGFwZGFzaC5wbmdgLFxuICAgIGFsdDogYFByb2lkZW50IHBhcmlhdHVyIGVzdC5gLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBMYXB0aW1lIExlYWRlcmJvYXJkYCxcbiAgICBkZXNjOiBgTGFib3JlIGR1aXMgcGFyaWF0dXIgZXN0IGV4ZXJjaXRhdGlvbiBsYWJvcmlzIGN1cGlkYXRhdCBhbWV0IGNpbGx1bS4gQW1ldCBuaXNpIHVsbGFtY28uYCxcbiAgICBpbWFnZTogYC9pbWFnZXMvbGFwbGVhZGVyYm9hZC5wbmdgLFxuICAgIGFsdDogYFByb2lkZW50IHBhcmlhdHVyIGVzdC5gLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBZb3VyIGRhdGEsIHlvdXIgcHJvamVjdGAsXG4gICAgZGVzYzogYExhYm9yZSBkdWlzIHBhcmlhdHVyIGVzdCBleGVyY2l0YXRpb24gbGFib3JpcyBjdXBpZGF0YXQgYW1ldCBjaWxsdW0uIEFtZXQgbmlzaSB1bGxhbWNvLmAsXG4gICAgaW1hZ2U6IGAvaW1hZ2VzL2Nhc2UtMy53ZWJwYCxcbiAgICBhbHQ6IGBQcm9pZGVudCBwYXJpYXR1ciBlc3QuYCxcbiAgfSxcbl07XG5cbmNvbnN0IENhc2VzU2VjdGlvbiA9ICgpID0+IChcbiAgPHNlY3Rpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGB3LWZ1bGwgbWluLWgtc2NyZWVuIGJnLWdyYXktOTAwIHJlbGF0aXZlYCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgaC1zY3JlZW4gdy1mdWxsIG92ZXJmbG93LWhpZGRlbmApfT5cbiAgICAgICAgPFBhcnRpY2xlQmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYXgtdy03eGwgbXgtNCBsZzpteC1hdXRvIHB0LTIwIGxnOnB0LTQwYCl9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXt0dyhgdGV4dC13aGl0ZSB0ZXh0LTR4bCBsZzp0ZXh0LTd4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJgKX0+SG93IHdpbGwgeW91IHJhY2U/PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgdGV4dC13aGl0ZSB0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyIHRleHQteGwgbXQtMTJgKX0+XG4gICAgICAgICBMYXBwZXIuZ2cgRW5hYmxlcyB5b3UgdG8gcmFjZSB0byBkbyBtb3JlIHdpdGggeW91ciByYWNpbmcgZGF0YVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbXgtYXV0byBwdC0yNGApfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYHctZnVsbCBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWFyb3VuZGApfT5cbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3R3KFxuICAgICAgICAgICAgICAgICAgYHhsOnctMS8zIHNtOnctNS8xMiBzbTptYXgtdy14cyByZWxhdGl2ZSBtYi0zMiBsZzptYi0yMFxuICAgICAgICAgICAgICAgICAgICAgIHhsOm1heC13LXNtIGxnOnctMS8yIHctMTEvMTIgbXgtYXV0byBzbTpteC0wIGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTEwNWAsXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgaC02NCB6LTIwYCl9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS5hbHR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHcoYGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkYCl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYHAtNCBzaGFkb3ctbGcgdy1mdWxsIG14LWF1dG8gLW10LTggYmctd2hpdGUgcm91bmRlZC1iIHotMzAgcmVsYXRpdmVgKX0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3R3KGB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIHRleHQtY2VudGVyIHBiLTFgKX0+e2FydGljbGUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgdGV4dC1ncmF5LTUwMCB0ZXh0LWNlbnRlciBwYi0xIHRleHQtc21gKX0+e2FydGljbGUuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENhc2VzU2VjdGlvbjtcbiIsImltcG9ydCB7IHR3IH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IENoZWNrIGZyb20gJ0AvY29uc3RhbnRzL3N2Zy9jaGVjay5zdmcnO1xuXG5jb25zdCBGZWF0dXJlU2VjdGlvbiA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXt0dyhgYmctd2hpdGUgcGItNmApfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1heC13LTd4bCBteC1hdXRvIHAtNCBzbTpwLTYgbGc6cC04YCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBjb250YWluZXIgbXgtYXV0byBweC02IHAtNiBiZy13aGl0ZWApfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYi0xNiB0ZXh0LWNlbnRlcmApfT5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPXt0dyhgdGV4dC1iYXNlIHRleHQtaW5kaWdvLTYwMCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlYCl9PkZlYXR1cmVzPC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3R3KGBtdC0yIHRleHQtNXhsIGxnOnRleHQtN3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwYCl9PlxuICAgICAgICAgICAgSG93IHdlIGNoYW5nZSB0aGUgZ2FtZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBmbGV4LXdyYXAgbXktMTJgKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGB3LWZ1bGwgYm9yZGVyLWIgbWQ6dy0xLzIgbWQ6Ym9yZGVyLXIgbGc6dy0xLzMgcC04YCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4IGl0ZW1zLWNlbnRlciBtYi02YCl9PlxuICAgICAgICAgICAgICA8Q2hlY2sgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPXt0dyhgaC02IHctNiB0ZXh0LWluZGlnby01MDBgKX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtbC00IHRleHQteGxgKX0+UmVhbHRpbWUgRGFzaGJvYXJkPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dHcoYGxlYWRpbmctbG9vc2UgdGV4dC1ncmF5LTUwMGApfT5cbiAgICAgICAgICAgICAgQ29uc2VjdGV0dXIgcGFyaWF0dXIgaXJ1cmUgZXhlcmNpdGF0aW9uIHNpdCBhbWV0IGlkIGNvbnNlY3RldHVyIGNvbnNlY3RldHVybWFnbmEgZXQgTG9yZW0gbGFib3JlIHF1aVxuICAgICAgICAgICAgICB2ZWxpdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYHctZnVsbCBib3JkZXItYiBtZDp3LTEvMiBsZzp3LTEvMyBsZzpib3JkZXItciBwLThgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggaXRlbXMtY2VudGVyIG1iLTZgKX0+XG4gICAgICAgICAgICAgIDxDaGVjayB3aWR0aD17MjB9IGhlaWdodD17MjB9IGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9e3R3KGBoLTYgdy02IHRleHQtaW5kaWdvLTUwMGApfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1sLTQgdGV4dC14bGApfT5MYXB0aW1lIExvYmJ5IExlYWRlcmJvYXJkPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17dHcoYGxlYWRpbmctbG9vc2UgdGV4dC1ncmF5LTUwMCBgKX0+XG4gICAgICAgICAgICAgIExhYm9yZSBkdWlzIHBhcmlhdHVyIGVzdCBleGVyY2l0YXRpb24gbGFib3JpcyBjdXBpZGF0YXQgYW1ldCBjaWxsdW0uIEFtZXQgbmlzaSB1bGxhbWNvLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgdy1mdWxsIGJvcmRlci1iIG1kOnctMS8yIG1kOmJvcmRlci1yIGxnOnctMS8zIGxnOmJvcmRlci1yLTAgcC04YCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgICAgIDxDaGVjayB3aWR0aD17MjB9IGhlaWdodD17MjB9IGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9e3R3KGBoLTYgdy02IHRleHQtaW5kaWdvLTUwMGApfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1sLTQgdGV4dC14bGApfT5ObyBhY2NvdW50cyBuZWNlc3Nhcnk8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgbGVhZGluZy1sb29zZSB0ZXh0LWdyYXktNTAwYCl9PlxuICAgICAgICAgICAgICBFbGl0IGRlc2VydW50IG5pc2kgZXNzZSBkdWlzIGN1cGlkYXRhdCBwcm9pZGVudCBzaXQgbWluaW0gbW9sbGl0IG9mZmljaWEgcGFyaWF0dXIgaW5jaWRpZHVudCBpbiB0ZW1wb3IuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVTZWN0aW9uO1xuIiwiaW1wb3J0IHsgdHcgfSBmcm9tICd0d2luZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuXG5jb25zdCBwcm9kdWN0TGlua3MgPSBbYEZlYXR1cmVzYCwgYEN1c3RvbWVyc2AsIGBQbGF0Zm9ybWAsIGBQcmljaW5nYCwgYEVudGVycHJpc2VgLCBgV2hhdCdzIG5ldz9gXTtcbmNvbnN0IGFib3V0TGlua3MgPSBbYEFib3V0IFVzYCwgYENhcmVlcnNgLCBgTGVhZGVyc2hpcGAsIGBCbG9nYCwgYEV2ZW50c2AsIGBQcmVzc2BdO1xuY29uc3QgcmVzb3VyY2VMaW5rcyA9IFtcbiAgYEdldCBzdGFydGVkYCxcbiAgYEd1aWRlc2AsXG4gIGBUb29sc2AsXG4gIGBDYXNlIHN0dWRpZXNgLFxuICBgU29sdXRpb25zYCxcbiAgYEZBUXNgLFxuICBgSGVscCBDZW50ZXJgLFxuICBgVHJhaW5pbmdgLFxuICBgT3RoZXIgcmVzb3VyY2VzYCxcbl07XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9e3R3KGBiZy13aGl0ZSBib3JkZXItdCBib3JkZXItZ3JheS00MDAgcHQtMTQgcGItMTZgKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYXgtdy03eGwgbXgtYXV0byB0ZXh0LWdyYXktNDAwIHB4LTggbGc6cHgtMCBmbGV4IGZsZXgtd3JhcGApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWItMTQgZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsYCl9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17dHcoYGgtMTIgdy0xMiBtci00YCl9IHNyYz1cImxvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgdGV4dC00eGwgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZGApfT5MQVBQRVIuR0c8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IHsgdHcsIGNzcyB9IGZyb20gJ3R3aW5kL2Nzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuXG5cblxuY29uc3QgaGVhZGVyU3R5bGUgPSBjc3NgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2cmVtKTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlciBjbGFzc05hbWU9e3R3KGhlYWRlclN0eWxlKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYXgtdy00eGwgbXgtYXV0byBweS0xNiBweC0xNCBzbTpweC02IGxnOnB4LThgKX0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXt0dyhgZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTh4bCB0ZXh0LWNlbnRlciBsZWFkaW5nLXNudWcgdGV4dC1ncmF5LTgwMGApfT5cbiAgICAgICAgRG93bmxvYWQuIENvbm5lY3QuIENvbXBldGUuXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYXgtdy14bCBteC1hdXRvYCl9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3R3KGBtdC0xMCB0ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyIHRleHQteGwgbGc6dGV4dC0zeGxgKX0+XG4gICAgICAgICAgTGFwdGltZSBsb2JiaWVzIGZvciBhIGNvbXBldGl0aXZlIEZvcnphIGV4cGVyaWFuY2UgXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtdC0xMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbXgtYXV0b2ApfT5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5Pkhvc3QgYSBsb2JieTwvQnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R3KGBteC0yYCl9Pm9yPC9zcGFuPlxuICAgICAgICA8QnV0dG9uPkpvaW4gb25lPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsYCl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtdC00IHctZnVsbGApfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LXNtIHRleHQtZ3JheS02MDBgKX0+UG93ZXJlZCBieTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIGZsZXgtd3JhcGApfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3R3KGBoLTQwIHctNDBgKX0gc3JjPVwiZmF0aHltLnN2Z1wiIGFsdD1cImZhdGh5bSBsb2dvXCJoZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9oZWFkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCBGZWF0dXJlU3ZnIGZyb20gJ0AvY29uc3RhbnRzL3N2Zy9mZWF0dXJlcy5zdmcnO1xuXG5jb25zdCBsaXN0SXRlbXMgPSBbXG4gIHtcbiAgICB0aXRsZTogYERvd25sb2FkYCxcbiAgICBkZXNjcmlwdGlvbjogYERvd25sb2FkIHRoZSByZWFsdGltZSBkYXNoYm9hcmQgdG8geW91ciBjb21wdXRlciB0byBzZWUgc3RhdHMgYW5kIGNvbm5lY3QgdG8gb3RoZXIgcmFjZXJzYCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgQ29ubmVjdGAsXG4gICAgZGVzY3JpcHRpb246IGBIb3N0IGEgbG9iYnkgYW5kIGdldCBhIGNvZGUgdG8gc2hhcmUgd2l0aCB5b3VyIGZyaWVuZHMsIG9yIGlmIHlvdXIgZ2l2ZW4gYSBjb2RlIGpvaW4gYSBsb2JieSBhbmQgZW50ZXIgdGhlIGNvZGUgdG8gc3RhcnQgY29tcGV0aW5nYCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgQ29tcGV0ZWAsXG4gICAgZGVzY3JpcHRpb246IGBIb3AgaW50byBhIHJhY2UgYW5kIHNlZSBob3cgeW91ciBsYXB0aW1lcyBzdGFjayB1cCBhZ2FpbnN0IHlvdXIgdGVhbW1hdGVzYCxcbiAgfSxcbl07XG5cbmNvbnN0IExpc3RTZWN0aW9uID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3R3KGBsZzpweS0yOCBwdC0yOCBvdmVyZmxvdy1oaWRkZW5gKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3R3KGBtYXgtdy03eGwgbXgtYXV0byBwLTQgc206cC02IGxnOnAtOCBiZy13aGl0ZWApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWItMTYgdGV4dC1jZW50ZXJgKX0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17dHcoYG10LTIgcGItNCB0ZXh0LTV4bCBsZzp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMGApfT5cbiAgICAgICAgICBIb3cgdGhpcyBhbGwgd29ya3NcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggZmxleC13cmFwIC1teC04IGl0ZW1zLWNlbnRlcmApfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGB3LWZ1bGwgbGc6dy0xLzIgcHgtOGApfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt0dyhgc3BhY2UteS0xMmApfT5cbiAgICAgICAgICAgIHtsaXN0SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0dyhgZmxleCAtbXgtNGApfSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHgtNGApfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dHcoYGZsZXggdy0xNiBoLTE2IG14LWF1dG8gaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgZm9udC1ib2xkIHJvdW5kZWQtZnVsbFxuICAgICAgICAgICAgICAgICAgICAgIGJnLWJsdWUtNTAgdGV4dC1ibHVlLTUwMGApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHgtNGApfT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3R3KGBteS00IHRleHQteGwgZm9udC1zZW1pYm9sZGApfT57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0dyhgdGV4dC1ncmF5LTUwMCBsZWFkaW5nLWxvb3NlYCl9PntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYHctZnVsbCBsZzp3LTEvMiBweC04YCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbGc6bWItMTIgbGc6bWItMCBwYi0xMiBsZzpwYi0wIG10LTE2IGxnOm10LTAgbXgtNiBsZzpteC0wYCl9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiZGFzaC5zdmdcIiBhbHQ9XCJsb2dvXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0U2VjdGlvbjtcbiIsImltcG9ydCB7IHR3IH0gZnJvbSAndHdpbmQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuXG5pbnRlcmZhY2UgSU1lbnVCdXR0b24ge1xuICB0b2dnbGVNZW51OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG4gIHNob3dNZW51OiBib29sZWFuO1xufVxuXG50eXBlIExpbmsgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn07XG5cbmNvbnN0IHNlY29uZGFyeUxpbmtzID0gW1xuICB7XG4gICAgbGFiZWw6IGBUdXRvcmlhbGAsXG4gICAgaHJlZjogYC9gLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGBKb2luYCxcbiAgICBocmVmOiBgL2AsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogYEhvc3RgLFxuICAgIGhyZWY6IGAvYCxcbiAgfSxcbl07XG5cbmNvbnN0IE1lbnVCdXR0b24gPSAoeyB0b2dnbGVNZW51LCBzaG93TWVudSB9OiBJTWVudUJ1dHRvbikgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcbiAgICBhcmlhLWV4cGFuZGVkPXtzaG93TWVudX1cbiAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgIGNsYXNzTmFtZT17dHcoYHAtMiB0ZXh0LWdyYXktNDAwYCl9XG4gID5cbiAgICA8c3BhbiBjbGFzc05hbWU9e3R3KGBzci1vbmx5YCl9Pk9wZW4gbWVudTwvc3Bhbj5cbiAgICB7c2hvd01lbnUgPyAoXG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzTmFtZT17dHcoYGgtNiB3LTZgKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgID5cbiAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgKSA6IChcbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXt0dyhgaC02IHctNmApfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgPlxuICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICApfVxuICA8L2J1dHRvbj5cbik7XG5cbmNvbnN0IE1vYmlsZU1lbnUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWQ6aGlkZGVuYCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHQtNCBwYi0zIGJvcmRlci10IGJvcmRlci1ncmF5LTQwMGApfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcHgtMiBzcGFjZS15LTFgKX0+XG4gICAgICAgIHtzZWNvbmRhcnlMaW5rcy5tYXAoKGxpbms6IExpbmspID0+IChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAga2V5PXtgbW9iaWxlLSR7bGluay5sYWJlbH1gfVxuICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0dyhgYmxvY2sgcHgtMyBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwYCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TWVudSwgc2V0U2hvd01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0U2hvd01lbnUoIXNob3dNZW51KTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXt0dyhgYmctd2hpdGVgKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04YCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTI0YCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgZmxleCBpdGVtcy1jZW50ZXJgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXgtc2hyaW5rLTBgKX0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXt0dyhgaC0xMiB3LTEyYCl9IHNyYz1cImxvZ28uc3ZnXCIgYWx0PVwibG9nb1wiIHdpZHRoPXs0OH0gaGVpZ2h0PXs0OH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBoaWRkZW4gbWQ6YmxvY2tgKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTRgKX0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3R3KGBmb250LXNhbnMgZm9udC1ib2xkIHRleHQtMnhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsIHRleHQtY2VudGVyIGxlYWRpbmctc251ZyB0ZXh0LWdyYXktODAwYCl9PlxuICAgICAgICAgICAgICAgIExhcHBlci5nZzwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGBoaWRkZW4gbWQ6YmxvY2tgKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYG1sLTQgZmxleCBpdGVtcy1jZW50ZXIgbWQ6bWwtNmApfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBtb2RpZmllcj1cImJvcmRlci0wIG1yLTJcIj5UdXRvcmlhbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG1vZGlmaWVyPVwiYm9yZGVyLTAgbXItMlwiPkpvaW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBtb2RpZmllcj1cImJvcmRlci0wIG1yLTJcIj5Ib3N0PC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5Eb3dubG9hZDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R3KGAtbXItMiBmbGV4IG1kOmhpZGRlbmApfT5cbiAgICAgICAgICAgIDxNZW51QnV0dG9uIHNob3dNZW51PXtzaG93TWVudX0gdG9nZ2xlTWVudT17dG9nZ2xlTWVudX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93TWVudSA/IDxNb2JpbGVNZW51IC8+IDogbnVsbH1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdHcgfSBmcm9tICd0d2luZCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBQYWdlID0gKHsgY2hpbGRyZW4gfTogSVByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnN2Z1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2xgKX0+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgeyB0dyB9IGZyb20gJ3R3aW5kJztcbmltcG9ydCBQcmVmZXJlbmNlcyBmcm9tICdAL2NvbnN0YW50cy9zdmcvcHJlZmVyZW5jZXMuc3ZnJztcbmltcG9ydCBQbGF5IGZyb20gJ0AvY29uc3RhbnRzL3N2Zy9wbGF5LnN2Zyc7XG5cbmNvbnN0IFBsYXlCdXR0b24gPSAoKSA9PiAoXG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzc05hbWU9e3R3KFxuICAgICAgYHctNjQgbGc6dy1hdXRvIGFic29sdXRlIHRvcC1mdWxsIGxlZnQtMS8yIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zZm9ybVxuICAgICAgLXRyYW5zbGF0ZS15LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJnLXdoaXRlIHJvdW5kZWQtZnVsbCBmb250LW1lZGl1bSBncm91cCBwLTQgc2hhZG93LXhsYCxcbiAgICApfVxuICAgIGFyaWEtbGFiZWw9XCJwbGF5IHZpZGVvXCJcbiAgPlxuICAgIDxQbGF5IGNsYXNzTmFtZT17dHcoYHctNiBoLTYgZmlsbC1jdXJyZW50IHRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ibHVlLTYwMCBmbGV4LXNocmluay0wYCl9IC8+XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgVmlkZW9TZWN0aW9uID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e3R3KGBiZy1ncmFkaWVudC10by1iIGZyb20tcmVkIHRvLXBpbmsgc2hhZG93LWlubmVyYCl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgbWF4LXctN3hsIG14LWF1dG9gKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHcoYGZsZXggZmxleC1jb2wgbWF4LXctNHhsIG14LWF1dG8gcHQtMjhgKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgdy1mdWxsYCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0dyhgcmVsYXRpdmUgc2hhZG93LTJ4bCBteC02IGxnOm14LTBgKX0+XG4gICAgICAgICAgICA8dmlkZW8gbG9vcCBhdXRvUGxheSBtdXRlZCBzcmM9XCJ2aWQubXA0XCIgPjwvdmlkZW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvU2VjdGlvbjtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2IDNDOC44IDMgMyA4LjggMyAxNnM1LjggMTMgMTMgMTMgMTMtNS44IDEzLTEzYzAtMS4zOTgtLjE4OC0yLjc5My0uNjg4LTQuMDk0TDI2LjY4OCAxMy41Yy4yLjguMzEzIDEuNjAyLjMxMyAyLjUgMCA2LjEwMi00Ljg5OCAxMS0xMSAxMVM1IDIyLjEwMiA1IDE2IDkuODk4IDUgMTYgNWMzIDAgNS42OTUgMS4xOTUgNy41OTQgMy4wOTRMMjUgNi42ODhDMjIuNyA0LjM4NiAxOS41IDMgMTYgM3ptMTEuMjgxIDQuMjgxTDE2IDE4LjU2M2wtNC4yODEtNC4yODItMS40MzggMS40MzggNSA1IC43MTkuNjg3LjcxOS0uNjg3IDEyLTEyelwiXG59KTtcblxuZnVuY3Rpb24gU3ZnQ2hlY2socHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCJcbiAgfSwgcHJvcHMpLCBfcmVmKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnQ2hlY2s7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMjJjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMxNy41MjMgMiAxMiAyIDIgNi40NzcgMiAxMnM0LjQ3NyAxMCAxMCAxMHptMCAyQzUuMzczIDI0IDAgMTguNjI3IDAgMTJTNS4zNzMgMCAxMiAwczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyelwiXG59KTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTAgMTdsNi01LTYtNXpcIlxufSk7XG5cbmZ1bmN0aW9uIFN2Z1BsYXkocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcmVmLCBfcmVmMik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1BsYXk7IiwiaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCBQYWdlIGZyb20gJ0AvY29tcG9uZW50cy9wYWdlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgVmlkZW9TZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy92aWRlby1zZWN0aW9uJztcbmltcG9ydCBMaXN0U2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvbGlzdC1zZWN0aW9uJztcbmltcG9ydCBGZWF0dXJlU2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvZmVhdHVyZS1zZWN0aW9uJztcbmltcG9ydCBDYXNlc1NlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL2Nhc2VzLXNlY3Rpb24nO1xuaW1wb3J0IFNvY2lhbFByb29mIGZyb20gJ0AvY29tcG9uZW50cy9zb2NpYWwtcHJvb2YnO1xuaW1wb3J0IFByaWNpbmdUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvcHJpY2luZy10YWJsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9XCJTVEFSVEQgLSBUZW1wbGF0ZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQSBUeXBlU2NyaXB0L05leHQuanMgdGhlbWUgdGhhdCBpbmNsdWRlcyBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIGJ1aWxkIGFtYXppbmcgbGFuZGluZyBwYWdlIVwiXG4gICAgICAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxWaWRlb1NlY3Rpb24gLz5cbiAgICAgICAgPEZlYXR1cmVTZWN0aW9uIC8+XG4gICAgICAgIDxMaXN0U2VjdGlvbiAvPlxuICAgICAgICA8Q2FzZXNTZWN0aW9uIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9QYWdlPlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBhcnRpY2xlcy1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGUtdmVuZG9yaXplclwiKTsiXSwic291cmNlUm9vdCI6IiJ9