"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ranking/page",{

/***/ "(app-pages-browser)/./src/app/ranking/page.js":
/*!*********************************!*\
  !*** ./src/app/ranking/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Component; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Button */ \"(app-pages-browser)/./src/components/Button.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Component() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const playAgain = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 md:px-6 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col md:flex-row items-center justify-between mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold mb-4 md:mb-0\",\n                    children: \"Ranking\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border rounded-lg overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full table-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"w-[200px] px-4 py-3 text-left font-bold\",\n                                        children: \"Jugador\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-3 text-right font-bold\",\n                                        children: \"Victorias\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-3 text-right font-bold\",\n                                        children: \"Derrotas\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-3 text-right font-bold\",\n                                        children: \"Empates\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        className: \"px-4 py-3 text-right font-bold\",\n                                        children: \"PJs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 font-medium\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center gap-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"U\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                            lineNumber: 36,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                        lineNumber: 35,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"Usuario\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"24\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"12\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"42\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center gap-3\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: \"IA\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                            lineNumber: 50,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: \"IA\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"18\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"15\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"9\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-4 py-3 text-right\",\n                                            children: \"42\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Volver a Jugar\",\n                action: playAgain\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/src/app/ranking/page.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Component, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Component;\nvar _c;\n$RefreshReg$(_c, \"Component\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmFua2luZy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV5QztBQUNHO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNQyxTQUFTRiwwREFBU0E7SUFFeEIsTUFBTUcsWUFBWTtRQUNoQkQsT0FBT0UsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBeUI7Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFNRixXQUFVOztzQ0FDZiw4REFBQ0c7c0NBQ0MsNEVBQUNDOztrREFDQyw4REFBQ0M7d0NBQUdMLFdBQVU7a0RBQTBDOzs7Ozs7a0RBR3hELDhEQUFDSzt3Q0FBR0wsV0FBVTtrREFBaUM7Ozs7OztrREFDL0MsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUFpQzs7Ozs7O2tEQUMvQyw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQWlDOzs7Ozs7a0RBQy9DLDhEQUFDSzt3Q0FBR0wsV0FBVTtrREFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUduRCw4REFBQ007OzhDQUNDLDhEQUFDRjs7c0RBQ0MsOERBQUNHOzRDQUFHUCxXQUFVO3NEQUNaLDRFQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNEO3dEQUFJQyxXQUFVO2tFQUNiLDRFQUFDUTtzRUFBSzs7Ozs7Ozs7Ozs7a0VBRVIsOERBQUNBO2tFQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHViw4REFBQ0Q7NENBQUdQLFdBQVU7c0RBQXVCOzs7Ozs7c0RBQ3JDLDhEQUFDTzs0Q0FBR1AsV0FBVTtzREFBdUI7Ozs7OztzREFDckMsOERBQUNPOzRDQUFHUCxXQUFVO3NEQUF1Qjs7Ozs7O3NEQUNyQyw4REFBQ087NENBQUdQLFdBQVU7c0RBQXVCOzs7Ozs7Ozs7Ozs7OENBRXZDLDhEQUFDSTs7c0RBQ0MsOERBQUNHOzRDQUFHUCxXQUFVO3NEQUNaLDRFQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNEO3dEQUFJQyxXQUFVO2tFQUNiLDRFQUFDUTtzRUFBSzs7Ozs7Ozs7Ozs7a0VBRVIsOERBQUNBO2tFQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHViw4REFBQ0Q7NENBQUdQLFdBQVU7c0RBQXVCOzs7Ozs7c0RBQ3JDLDhEQUFDTzs0Q0FBR1AsV0FBVTtzREFBdUI7Ozs7OztzREFDckMsOERBQUNPOzRDQUFHUCxXQUFVO3NEQUF1Qjs7Ozs7O3NEQUNyQyw4REFBQ087NENBQUdQLFdBQVU7c0RBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0MsOERBQUNQLDBEQUFNQTtnQkFBQ2dCLE1BQUs7Z0JBQWlCQyxRQUFRYjs7Ozs7Ozs7Ozs7O0FBRzVDO0dBNUR3QkY7O1FBQ1BELHNEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmFua2luZy9wYWdlLmpzPzNlNDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTYgcHktOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1iLTQgbWQ6bWItMFwiPlJhbmtpbmc8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRhYmxlLWF1dG9cIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3LVsyMDBweF0gcHgtNCBweS0zIHRleHQtbGVmdCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBKdWdhZG9yXG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodCBmb250LWJvbGRcIj5WaWN0b3JpYXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtcmlnaHQgZm9udC1ib2xkXCI+RGVycm90YXM8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtcmlnaHQgZm9udC1ib2xkXCI+RW1wYXRlczwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodCBmb250LWJvbGRcIj5QSnM8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOCByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTgwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5VPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Vc3VhcmlvPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtcmlnaHRcIj4yNDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodFwiPjEyPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXJpZ2h0XCI+NjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodFwiPjQyPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIGRhcms6YmctZ3JheS04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+SUE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPklBPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0zIHRleHQtcmlnaHRcIj4xODwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodFwiPjE1PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMyB0ZXh0LXJpZ2h0XCI+OTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC00IHB5LTMgdGV4dC1yaWdodFwiPjQyPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwiVm9sdmVyIGEgSnVnYXJcIiBhY3Rpb249e3BsYXlBZ2Fpbn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJDb21wb25lbnQiLCJyb3V0ZXIiLCJwbGF5QWdhaW4iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwidGQiLCJzcGFuIiwidGV4dCIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ranking/page.js\n"));

/***/ })

});