/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar navbar = document.querySelector('.navbar');\nvar h3 = document.querySelector('h3');\nvar nextPage = \"\";\nnavbar.addEventListener('click', function (event) {\n  if (event.target.tagName === 'BUTTON') {\n    var header = event.target.textContent;\n    document.querySelector('h2').textContent = header;\n    fetch(\"https://swapi.dev/api/\".concat(header.charAt(0).toLowerCase() + header.slice(1), \"/\")).then(function (response) {\n      if (!response.ok) {\n        throw new Error('Error');\n      }\n      return response.json();\n    }).then(function (result) {\n      document.querySelector('.content').innerHTML = '';\n      showElements(result);\n      if (result.next !== null) {\n        h3.classList.remove('hidden');\n      } else {\n        h3.classList.add('hidden');\n      }\n    })[\"catch\"](function (error) {\n      console.error('Error:', error);\n    });\n  }\n});\nh3.addEventListener('click', function () {\n  fetch(\"\".concat(nextPage)).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Error');\n    }\n    return response.json();\n  }).then(function (result) {\n    showElements(result);\n    if (result.next !== null) {\n      h3.classList.remove('hidden');\n    } else {\n      h3.classList.add('hidden');\n    }\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n  });\n});\ndocument.querySelector('.content').addEventListener('click', function (event) {\n  if (event.target.hasAttribute('url')) {\n    var url = event.target.getAttribute('url');\n    fetch(url).then(function (response) {\n      if (!response.ok) {\n        throw new Error('Error');\n      }\n      return response.json();\n    }).then(function (result) {\n      createModal(result);\n    })[\"catch\"](function (error) {\n      console.error('Error:', error);\n    });\n  }\n});\nfunction createModal(result) {\n  var modal = document.getElementById('modal');\n  modal.classList.remove('hidden');\n  var modalContent = document.createElement('div');\n  modalContent.classList.add('modal-content');\n  var closeButton = document.createElement('span');\n  closeButton.classList.add('close-btn');\n  closeButton.textContent = '×';\n  var nameHeader = document.createElement('h2');\n  nameHeader.textContent = result.name;\n  modalContent.appendChild(closeButton);\n  modalContent.appendChild(nameHeader);\n  createNewElementsInModal(result, modalContent);\n  modal.appendChild(modalContent);\n  closeButton.addEventListener('click', function () {\n    modal.classList.add('hidden');\n    modalContent.remove();\n  });\n}\n;\nfunction createNewElementsInModal(object, modalContent) {\n  var keys = Object.keys(object);\n  var _loop = function _loop() {\n    var key = _keys[_i];\n    if (key !== 'url' && key !== 'created' && key !== 'edited') {\n      var value = object[key];\n      if (Array.isArray(value) && value.length > 0 && /^https:\\/\\/swapi\\.dev\\/api\\//.test(value[0])) {\n        Promise.all(value.map(function (item) {\n          return getItemName(item);\n        })).then(function (results) {\n          var createdElement = document.createElement('p');\n          createdElement.innerHTML = \"<strong>\".concat((key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' '), \":</strong> \").concat(results.join(', '));\n          modalContent.appendChild(createdElement);\n        });\n      } else if (/^https:\\/\\/swapi\\.dev\\/api\\//.test(value)) {\n        getItemName(value).then(function (result) {\n          var createdElement = document.createElement('p');\n          createdElement.innerHTML = \"<strong>\".concat((key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' '), \":</strong> \").concat(result);\n          modalContent.appendChild(createdElement);\n        });\n      } else {\n        var createdElement = document.createElement('p');\n        createdElement.innerHTML = \"<strong>\".concat((key.charAt(0).toUpperCase() + key.slice(1)).replace(/_/g, ' '), \":</strong> \").concat(value);\n        modalContent.appendChild(createdElement);\n      }\n    }\n  };\n  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {\n    _loop();\n  }\n}\nfunction getItemName(item) {\n  return fetch(item).then(function (response) {\n    if (!response.ok) {\n      throw new Error('Error');\n    }\n    return response.json();\n  }).then(function (result) {\n    var firstKey = Object.keys(result)[0];\n    return result[firstKey];\n  })[\"catch\"](function (error) {\n    console.error('Error:', error);\n    return 'Error loading data';\n  });\n}\nfunction showElements(result) {\n  var elements = result.results;\n  var _iterator = _createForOfIteratorHelper(elements),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var element = _step.value;\n      showElement(element);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  nextPage = result.next;\n}\nfunction showElement(element) {\n  var card = document.createElement('div');\n  card.classList.add('card');\n  card.setAttribute('url', element.url);\n  var name = document.createElement('p');\n  name.classList.add('name');\n  var nameText = document.createElement('strong');\n  nameText.textContent = \"Name: \";\n  var nameValue = document.createElement('span');\n  nameValue.textContent = element.name;\n  name.appendChild(nameText);\n  name.appendChild(nameValue);\n  card.appendChild(name);\n  document.querySelector('.content').appendChild(card);\n}\n\n//# sourceURL=webpack://22.1/./src/app.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://22.1/./styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;