/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Core Variables */
:root {
  --primary: #c2410c;
  --primary-hover: #9a3412;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-dark: #0f172a;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  line-height: 1.6;
  background-color: var(--bg-color);
  color: var(--text-dark);
  min-height: 100vh;
}

/* TOP NAV BAR ONLY (Targeting direct child header of body) */
body > header {
  width: 100%;
  background-color: #1e293b;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

body > header nav {
  display: flex;
  gap: 12px;
}

/* Nav Buttons */
body > header nav button,
.nav-btn {
  background: transparent;
  color: #cbd5e1;
  border: 1px solid #475569;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
}

body > header nav button:hover,
.nav-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

body > header nav button.active,
.nav-btn.active {
  background-color: var(--primary) !important;
  color: #ffffff !important;
  border-color: var(--primary) !important;
  box-shadow: 0 2px 8px rgba(194, 65, 12, 0.4);
}

/* MAIN CONTENT CONTAINER */
#content {
  max-width: 850px;
  width: 90%;
  margin: 32px auto;
}

/* HERO HEADER INSIDE HOMEPAGE (Stays light and clean!) */
.hero {
  background: transparent !important;
  box-shadow: none !important;
  text-align: center;
  margin-bottom: 32px;
  padding: 0;
}

.hero h1,
.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark) !important;
  margin-bottom: 8px;
}

.hero .tagline {
  font-size: 1.2rem;
  color: var(--text-muted) !important;
  font-style: italic;
}

/* CARDS & SECTIONS */
.main-card {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
  padding: 32px;
}

.hero-image {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 28px;
}

.about-us h2,
.contact-details h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text-dark);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 8px;
}

.about-us p,
.contact-details p {
  color: #334155;
  margin-bottom: 12px;
}

.info-box {
  margin-top: 24px;
  background-color: #fff7ed;
  border-left: 4px solid var(--primary);
  border-radius: 6px;
  padding: 16px 20px;
}

.info-box h3 {
  color: var(--primary-hover);
  margin-bottom: 8px;
}

/* MENU GRID */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.menu-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.menu-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.price {
  font-weight: 700;
  color: var(--primary);
  background: #fff7ed;
  padding: 2px 8px;
  border-radius: 4px;
}

/* CONTACT FORM */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid var(--primary);
}

.submit-btn {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.submit-btn:hover {
  background-color: var(--primary-hover);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;EACnB,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE;;;cAGY;EACZ,gBAAgB;EAChB,iCAAiC;EACjC,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA,6DAA6D;AAC7D;EACE,WAAW;EACX,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,yCAAyC;EACzC,gBAAgB;EAChB,MAAM;EACN,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA,gBAAgB;AAChB;;EAEE,uBAAuB;EACvB,cAAc;EACd,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;;EAEE,0CAA0C;EAC1C,cAAc;AAChB;;AAEA;;EAEE,2CAA2C;EAC3C,yBAAyB;EACzB,uCAAuC;EACvC,4CAA4C;AAC9C;;AAEA,2BAA2B;AAC3B;EACE,gBAAgB;EAChB,UAAU;EACV,iBAAiB;AACnB;;AAEA,yDAAyD;AACzD;EACE,kCAAkC;EAClC,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA,qBAAqB;AACrB;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,0CAA0C;EAC1C,qCAAqC;EACrC,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,qCAAqC;EACrC,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,qCAAqC;EACrC,aAAa;EACb,kBAAkB;EAClB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;EAClB,qCAAqC;EACrC,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;EAChC,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC","sourcesContent":["/* Core Variables */\r\n:root {\r\n  --primary: #c2410c;\r\n  --primary-hover: #9a3412;\r\n  --bg-color: #f8fafc;\r\n  --card-bg: #ffffff;\r\n  --text-dark: #0f172a;\r\n  --text-muted: #64748b;\r\n  --border-color: #e2e8f0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family:\r\n    system-ui,\r\n    -apple-system,\r\n    sans-serif;\r\n  line-height: 1.6;\r\n  background-color: var(--bg-color);\r\n  color: var(--text-dark);\r\n  min-height: 100vh;\r\n}\r\n\r\n/* TOP NAV BAR ONLY (Targeting direct child header of body) */\r\nbody > header {\r\n  width: 100%;\r\n  background-color: #1e293b;\r\n  padding: 16px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 100;\r\n}\r\n\r\nbody > header nav {\r\n  display: flex;\r\n  gap: 12px;\r\n}\r\n\r\n/* Nav Buttons */\r\nbody > header nav button,\r\n.nav-btn {\r\n  background: transparent;\r\n  color: #cbd5e1;\r\n  border: 1px solid #475569;\r\n  padding: 8px 22px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nbody > header nav button:hover,\r\n.nav-btn:hover {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  color: #ffffff;\r\n}\r\n\r\nbody > header nav button.active,\r\n.nav-btn.active {\r\n  background-color: var(--primary) !important;\r\n  color: #ffffff !important;\r\n  border-color: var(--primary) !important;\r\n  box-shadow: 0 2px 8px rgba(194, 65, 12, 0.4);\r\n}\r\n\r\n/* MAIN CONTENT CONTAINER */\r\n#content {\r\n  max-width: 850px;\r\n  width: 90%;\r\n  margin: 32px auto;\r\n}\r\n\r\n/* HERO HEADER INSIDE HOMEPAGE (Stays light and clean!) */\r\n.hero {\r\n  background: transparent !important;\r\n  box-shadow: none !important;\r\n  text-align: center;\r\n  margin-bottom: 32px;\r\n  padding: 0;\r\n}\r\n\r\n.hero h1,\r\n.page-title {\r\n  font-size: 2.5rem;\r\n  font-weight: 800;\r\n  color: var(--text-dark) !important;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.hero .tagline {\r\n  font-size: 1.2rem;\r\n  color: var(--text-muted) !important;\r\n  font-style: italic;\r\n}\r\n\r\n/* CARDS & SECTIONS */\r\n.main-card {\r\n  background: var(--card-bg);\r\n  border-radius: 12px;\r\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\r\n  border: 1px solid var(--border-color);\r\n  padding: 32px;\r\n}\r\n\r\n.hero-image {\r\n  width: 100%;\r\n  height: 360px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  margin-bottom: 28px;\r\n}\r\n\r\n.about-us h2,\r\n.contact-details h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 12px;\r\n  color: var(--text-dark);\r\n  border-bottom: 2px solid var(--border-color);\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.about-us p,\r\n.contact-details p {\r\n  color: #334155;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.info-box {\r\n  margin-top: 24px;\r\n  background-color: #fff7ed;\r\n  border-left: 4px solid var(--primary);\r\n  border-radius: 6px;\r\n  padding: 16px 20px;\r\n}\r\n\r\n.info-box h3 {\r\n  color: var(--primary-hover);\r\n  margin-bottom: 8px;\r\n}\r\n\r\n/* MENU GRID */\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n  gap: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.menu-card {\r\n  background: var(--card-bg);\r\n  border: 1px solid var(--border-color);\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.menu-card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.price {\r\n  font-weight: 700;\r\n  color: var(--primary);\r\n  background: #fff7ed;\r\n  padding: 2px 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* CONTACT FORM */\r\n.contact-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.contact-form input,\r\n.contact-form textarea {\r\n  padding: 10px 14px;\r\n  border: 1px solid var(--border-color);\r\n  border-radius: 6px;\r\n  font-family: inherit;\r\n  font-size: 1rem;\r\n}\r\n\r\n.contact-form input:focus,\r\n.contact-form textarea:focus {\r\n  outline: 2px solid var(--primary);\r\n}\r\n\r\n.submit-btn {\r\n  background-color: var(--primary);\r\n  color: white;\r\n  border: none;\r\n  padding: 12px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n}\r\n\r\n.submit-btn:hover {\r\n  background-color: var(--primary-hover);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/assets/Restaurant.jpg"
/*!***********************************!*\
  !*** ./src/assets/Restaurant.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c45362ece4e3bdff8e7a.jpg";

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.classList.add("page-title");
  container.appendChild(heading);

  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("main-card");

  contactWrapper.innerHTML = `
    <div class="contact-details">
      <h2>Get in Touch</h2>
      <p>📞 <strong>Phone:</strong> (555) 123-4567</p>
      <p>✉️ <strong>Email:</strong> reservations@savoryfork.com</p>
      <p>📍 <strong>Address:</strong> 123 Culinary Way, Flavor Town</p>
    </div>
    
    <form class="contact-form" onsubmit="event.preventDefault();">
      <h3>Send a Message</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message..." rows="4" required></textarea>
      <button type="submit" class="submit-btn">Send</button>
    </form>
  `;

  container.appendChild(contactWrapper);
  return container;
}


/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHomepage: () => (/* binding */ loadHomepage)
/* harmony export */ });
/* harmony import */ var _assets_Restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Restaurant.jpg */ "./src/assets/Restaurant.jpg");


function loadHomepage() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  // 1. Hero Section
  const heroHeader = document.createElement("header");
  heroHeader.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "Welcome to The Savory Fork";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Crafted flavors, cozy vibes, and unforgettable meals.";

  heroHeader.appendChild(title);
  heroHeader.appendChild(tagline);

  // 2. Main Card Container
  const mainCard = document.createElement("main");
  mainCard.classList.add("main-card");

  // Hero Image
  const image = document.createElement("img");
  image.src = _assets_Restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
  image.alt = "Restaurant interior ambiance";
  image.classList.add("hero-image");

  // About Section
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-us");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Our Kitchen";

  const para1 = document.createElement("p");
  para1.textContent =
    "At The Savory Fork, we believe that great food brings people together. Founded in 2024, our kitchen prepares every dish with locally sourced, fresh ingredients combined with a passion for bold, rich flavors.";

  const para2 = document.createElement("p");
  para2.textContent =
    "Whether you're stopping by for a quick lunch or enjoying a long evening with friends, we invite you to relax and enjoy an extraordinary dining experience with us.";

  aboutSection.appendChild(aboutTitle);
  aboutSection.appendChild(para1);
  aboutSection.appendChild(para2);

  // Info / Hours Section
  const infoSection = document.createElement("section");
  infoSection.classList.add("info-box");

  const infoTitle = document.createElement("h3");
  infoTitle.textContent = "Hours & Location";

  const hours1 = document.createElement("p");
  hours1.innerHTML = "<strong>Mon – Thu:</strong> 11:00 AM – 10:00 PM";

  const hours2 = document.createElement("p");
  hours2.innerHTML = "<strong>Fri – Sun:</strong> 11:00 AM – 11:00 PM";

  const location = document.createElement("p");
  location.innerHTML =
    "<strong>Location:</strong> 123 Culinary Way, Flavor Town";

  infoSection.appendChild(infoTitle);
  infoSection.appendChild(hours1);
  infoSection.appendChild(hours2);
  infoSection.appendChild(location);

  // Assemble Main Card
  mainCard.appendChild(image);
  mainCard.appendChild(aboutSection);
  mainCard.appendChild(infoSection);

  // Append sections to container
  container.appendChild(heroHeader);
  container.appendChild(mainCard);

  return container;
}


/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  heading.classList.add("page-title");
  container.appendChild(heading);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const menuItems = [
    {
      name: "Truffle Mushroom Risotto",
      description:
        "Arborio rice, wild mushrooms, black truffle oil, and aged Parmesan.",
      price: "$22",
    },
    {
      name: "Wood-Fired Ribeye",
      description:
        "12oz grass-fed beef cooked over oak wood, served with rosemary butter.",
      price: "$34",
    },
    {
      name: "Artisanal Wood-Fired Pizza",
      description:
        "Fresh mozzarella, San Marzano tomato sauce, fresh basil, olive oil.",
      price: "$18",
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, paired with vanilla bean gelato.",
      price: "$10",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
      <div class="menu-card-header">
        <h3>${item.name}</h3>
        <span class="price">${item.price}</span>
      </div>
      <p>${item.description}</p>
    `;

    menuGrid.appendChild(card);
  });

  container.appendChild(menuGrid);
  return container;
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const content = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");

// Clear existing content and render new tab
function switchTab(renderFunction, activeBtnId) {
  content.innerHTML = "";
  content.appendChild(renderFunction());

  // Update active state on nav buttons
  navButtons.forEach((btn) => {
    if (btn.id === activeBtnId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Event Listeners
document.getElementById("home-btn").addEventListener("click", () => {
  switchTab(_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage, "home-btn");
});

document.getElementById("menu-btn").addEventListener("click", () => {
  switchTab(_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu, "menu-btn");
});

document.getElementById("contact-btn").addEventListener("click", () => {
  switchTab(_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact, "contact-btn");
});

// Initial Load
switchTab(_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomepage, "home-btn");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map