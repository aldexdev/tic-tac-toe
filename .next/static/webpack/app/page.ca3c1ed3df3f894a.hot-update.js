"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst WINNING_COMBO = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    const updateBoard = (idx)=>{\n        if (!boardState[idx]) {\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkWinner = ()=>{\n        for (let combination of winningCombinations){\n            if (combination.every((index)=>board[index] === \"X\" || board[index] === \"O\")) setWinner(true);\n        }\n        WINNING_COMBO.map((bd)=>{\n            const [a, b, c] = bd;\n            if (boardStatea[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {\n                setWinner(true);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"krT4jHbzdpJFAMmonRZ8ffBNQoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQUVqQyxNQUFNQyxnQkFBZ0I7SUFDcEI7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7Q0FDVjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDekUsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzNDLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMLElBQUkscUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQyxRQUFRLHNCQUFzQjtJQUVuRSxNQUFNUyxjQUFjLENBQUNDO1FBQ25CLElBQUksQ0FBQ0wsVUFBVSxDQUFDSyxJQUFJLEVBQUU7WUFDcEIsSUFBSUMsUUFBUVIsYUFBYSxPQUFPLE1BQU07WUFDdENHLGNBQWM7Z0JBQUUsR0FBR0QsVUFBVTtnQkFBRSxDQUFDSyxJQUFJLEVBQUVDO1lBQU07WUFDNUNQLFlBQVksQ0FBQ0Q7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQixLQUFLLElBQUlDLGVBQWVDLG9CQUFxQjtZQUMzQyxJQUNFRCxZQUFZRSxLQUFLLENBQ2YsQ0FBQ0MsUUFBVUMsS0FBSyxDQUFDRCxNQUFNLEtBQUssT0FBT0MsS0FBSyxDQUFDRCxNQUFNLEtBQUssTUFHdERSLFVBQVU7UUFDZDtRQUNBUCxjQUFjaUIsR0FBRyxDQUFDLENBQUNDO1lBQ2pCLE1BQU0sQ0FBQ0MsR0FBR0MsR0FBR0MsRUFBRSxHQUFHSDtZQUNsQixJQUNFSSxXQUFXLENBQUNILEVBQUUsSUFDZGYsVUFBVSxDQUFDZSxFQUFFLEtBQUtmLFVBQVUsQ0FBQ2dCLEVBQUUsSUFDL0JoQixVQUFVLENBQUNlLEVBQUUsS0FBS2YsVUFBVSxDQUFDaUIsRUFBRSxFQUMvQjtnQkFDQWQsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZ0I7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTtzQ0FBR3hCLGFBQWEsT0FBTyxpQkFBaUI7Ozs7Ozs7Ozs7O2tDQUUzQyw4REFBQ3FCO3dCQUFJQyxXQUFVO2tDQUNaOytCQUFJRyxNQUFNO3lCQUFHLENBQUNWLEdBQUcsQ0FBQyxDQUFDVyxHQUFHbkI7NEJBQ3JCLHFCQUNFLDhEQUFDYztnQ0FFQ0MsV0FBVTtnQ0FDVkssU0FBUztvQ0FDUHJCLFlBQVlDO2dDQUNkOzBDQUVDTCxVQUFVLENBQUNLLElBQUk7K0JBTlhBOzs7Ozt3QkFTWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0F2RXdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBXSU5OSU5HX0NPTUJPID0gW1xuICBbMCwgMSwgMl0sXG4gIFszLCA0LCA1XSxcbiAgWzYsIDcsIDhdLFxuICBbMCwgMywgNl0sXG4gIFsxLCA0LCA3XSxcbiAgWzIsIDUsIDhdLFxuICBbMCwgNCwgOF0sXG4gIFsyLCA0LCA2XSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2VyVHVybiwgc2V0VXNlclR1cm5dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHN0YXRlIG9mIHRoZSB1c2VyIHR1cm5cbiAgY29uc3QgW2JvYXJkU3RhdGUsIHNldEJvYXJkU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIDA6IFwiXCIsXG4gICAgMTogXCJcIixcbiAgICAyOiBcIlwiLFxuICAgIDM6IFwiXCIsXG4gICAgNDogXCJcIixcbiAgICA1OiBcIlwiLFxuICAgIDY6IFwiXCIsXG4gICAgNzogXCJcIixcbiAgICA4OiBcIlwiLFxuICB9KTsgLy8gc3RhdGUgb2YgZWFjaCBjZWxsXG4gIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHN0YXRlIG9mIHRoZSB3aW5uZXJcblxuICBjb25zdCB1cGRhdGVCb2FyZCA9IChpZHgpID0+IHtcbiAgICBpZiAoIWJvYXJkU3RhdGVbaWR4XSkge1xuICAgICAgbGV0IHZhbHVlID0gdXNlclR1cm4gPT09IHRydWUgPyBcIlhcIiA6IFwiT1wiO1xuICAgICAgc2V0Qm9hcmRTdGF0ZSh7IC4uLmJvYXJkU3RhdGUsIFtpZHhdOiB2YWx1ZSB9KTtcbiAgICAgIHNldFVzZXJUdXJuKCF1c2VyVHVybik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2lubmVyID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGNvbWJpbmF0aW9uIG9mIHdpbm5pbmdDb21iaW5hdGlvbnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY29tYmluYXRpb24uZXZlcnkoXG4gICAgICAgICAgKGluZGV4KSA9PiBib2FyZFtpbmRleF0gPT09IFwiWFwiIHx8IGJvYXJkW2luZGV4XSA9PT0gXCJPXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICBzZXRXaW5uZXIodHJ1ZSk7XG4gICAgfVxuICAgIFdJTk5JTkdfQ09NQk8ubWFwKChiZCkgPT4ge1xuICAgICAgY29uc3QgW2EsIGIsIGNdID0gYmQ7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkU3RhdGVhW2FdICYmXG4gICAgICAgIGJvYXJkU3RhdGVbYV0gPT09IGJvYXJkU3RhdGVbYl0gJiZcbiAgICAgICAgYm9hcmRTdGF0ZVthXSA9PT0gYm9hcmRTdGF0ZVtjXVxuICAgICAgKSB7XG4gICAgICAgIHNldFdpbm5lcih0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTEgbWItNCBmb250LWJvbGRcIj5cbiAgICAgICAgPGgxPlRyZXMgZW4gUmF5YTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtYi0yXCI+XG4gICAgICAgICAgPHA+e3VzZXJUdXJuID09PSB0cnVlID8gXCJFcyB0dSB0dXJubyFcIiA6IFwiVHVybm8gZGUgbGEgSUFcIn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMywxZnIpXSBnYXAtMlwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOSldLm1hcCgodiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNlZWVdIHNoYWRvdy1bMHB4XzRweF8jZGRkXSB0ZXh0LWNlbnRlciB0ZXh0LVs2NHB4XSBsZWFkaW5nLVsxMDBweF0gZm9udC1bYm9sZF0gdy1bMTAwcHhdIGgtWzEwMHB4XSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChpZHgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Ym9hcmRTdGF0ZVtpZHhdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJXSU5OSU5HX0NPTUJPIiwiSG9tZSIsInVzZXJUdXJuIiwic2V0VXNlclR1cm4iLCJib2FyZFN0YXRlIiwic2V0Qm9hcmRTdGF0ZSIsIndpbm5lciIsInNldFdpbm5lciIsInVwZGF0ZUJvYXJkIiwiaWR4IiwidmFsdWUiLCJjaGVja1dpbm5lciIsImNvbWJpbmF0aW9uIiwid2lubmluZ0NvbWJpbmF0aW9ucyIsImV2ZXJ5IiwiaW5kZXgiLCJib2FyZCIsIm1hcCIsImJkIiwiYSIsImIiLCJjIiwiYm9hcmRTdGF0ZWEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJBcnJheSIsInYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});