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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWinner(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx]) {\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkWinner = (board)=>{\n        for (let comb of winCombs){\n            if (comb.every((index)=>board[index] === \"X\" || board[index] === \"O\")) setWinner(true);\n        }\n    // WINNING_COMBO.map((bd) => {\n    //   const [a, b, c] = bd;\n    //   if (\n    //     boardStatea[a] &&\n    //     boardState[a] === boardState[b] &&\n    //     boardState[a] === boardState[c]\n    //   ) {\n    //     setWinner(true);\n    //   }\n    // });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jBsWpYWKCrkLOTos+Nw+TgDLxa0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxXQUFXO0lBQ2Y7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7Q0FDVjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDekUsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMLElBQUkscUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxRQUFRLHNCQUFzQjtJQUVuRUMsZ0RBQVNBLENBQUM7UUFDUlMsWUFBWUo7SUFDZCxHQUFHO1FBQUNBO0tBQVc7SUFFZixNQUFNSyxjQUFjLENBQUNDO1FBQ25CLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxJQUFJLEVBQUU7WUFDcEIsSUFBSUMsUUFBUVQsYUFBYSxPQUFPLE1BQU07WUFDdENHLGNBQWM7Z0JBQUUsR0FBR0QsVUFBVTtnQkFBRSxDQUFDTSxJQUFJLEVBQUVDO1lBQU07WUFDNUNSLFlBQVksQ0FBQ0Q7UUFDZjtJQUNGO0lBRUEsTUFBTU0sY0FBYyxDQUFDSTtRQUNuQixLQUFLLElBQUlDLFFBQVFiLFNBQVU7WUFDekIsSUFBSWEsS0FBS0MsS0FBSyxDQUFDLENBQUNDLFFBQVVILEtBQUssQ0FBQ0csTUFBTSxLQUFLLE9BQU9ILEtBQUssQ0FBQ0csTUFBTSxLQUFLLE1BQ2pFUixVQUFVO1FBQ2Q7SUFDQSw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixNQUFNO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTtzQ0FBR2pCLGFBQWEsT0FBTyxpQkFBaUI7Ozs7Ozs7Ozs7O2tDQUUzQyw4REFBQ2M7d0JBQUlDLFdBQVU7a0NBQ1o7K0JBQUlHLE1BQU07eUJBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdaOzRCQUNyQixxQkFDRSw4REFBQ007Z0NBRUNDLFdBQVU7Z0NBQ1ZNLFNBQVM7b0NBQ1BkLFlBQVlDO2dDQUNkOzBDQUVDTixVQUFVLENBQUNNLElBQUk7K0JBTlhBOzs7Ozt3QkFTWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0F2RXdCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHdpbkNvbWJzID0gW1xuICBbMCwgMSwgMl0sXG4gIFszLCA0LCA1XSxcbiAgWzYsIDcsIDhdLFxuICBbMCwgMywgNl0sXG4gIFsxLCA0LCA3XSxcbiAgWzIsIDUsIDhdLFxuICBbMCwgNCwgOF0sXG4gIFsyLCA0LCA2XSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2VyVHVybiwgc2V0VXNlclR1cm5dID0gdXNlU3RhdGUodHJ1ZSk7IC8vIHN0YXRlIG9mIHRoZSB1c2VyIHR1cm5cbiAgY29uc3QgW2JvYXJkU3RhdGUsIHNldEJvYXJkU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIDA6IFwiXCIsXG4gICAgMTogXCJcIixcbiAgICAyOiBcIlwiLFxuICAgIDM6IFwiXCIsXG4gICAgNDogXCJcIixcbiAgICA1OiBcIlwiLFxuICAgIDY6IFwiXCIsXG4gICAgNzogXCJcIixcbiAgICA4OiBcIlwiLFxuICB9KTsgLy8gc3RhdGUgb2YgZWFjaCBjZWxsXG4gIGNvbnN0IFt3aW5uZXIsIHNldFdpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIHN0YXRlIG9mIHRoZSB3aW5uZXJcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrV2lubmVyKGJvYXJkU3RhdGUpO1xuICB9LCBbYm9hcmRTdGF0ZV0pO1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGlkeCkgPT4ge1xuICAgIGlmICghYm9hcmRTdGF0ZVtpZHhdKSB7XG4gICAgICBsZXQgdmFsdWUgPSB1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiWFwiIDogXCJPXCI7XG4gICAgICBzZXRCb2FyZFN0YXRlKHsgLi4uYm9hcmRTdGF0ZSwgW2lkeF06IHZhbHVlIH0pO1xuICAgICAgc2V0VXNlclR1cm4oIXVzZXJUdXJuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tXaW5uZXIgPSAoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBjb21iIG9mIHdpbkNvbWJzKSB7XG4gICAgICBpZiAoY29tYi5ldmVyeSgoaW5kZXgpID0+IGJvYXJkW2luZGV4XSA9PT0gXCJYXCIgfHwgYm9hcmRbaW5kZXhdID09PSBcIk9cIikpXG4gICAgICAgIHNldFdpbm5lcih0cnVlKTtcbiAgICB9XG4gICAgLy8gV0lOTklOR19DT01CTy5tYXAoKGJkKSA9PiB7XG4gICAgLy8gICBjb25zdCBbYSwgYiwgY10gPSBiZDtcbiAgICAvLyAgIGlmIChcbiAgICAvLyAgICAgYm9hcmRTdGF0ZWFbYV0gJiZcbiAgICAvLyAgICAgYm9hcmRTdGF0ZVthXSA9PT0gYm9hcmRTdGF0ZVtiXSAmJlxuICAgIC8vICAgICBib2FyZFN0YXRlW2FdID09PSBib2FyZFN0YXRlW2NdXG4gICAgLy8gICApIHtcbiAgICAvLyAgICAgc2V0V2lubmVyKHRydWUpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMSBtYi00IGZvbnQtYm9sZFwiPlxuICAgICAgICA8aDE+VHJlcyBlbiBSYXlhPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG1iLTJcIj5cbiAgICAgICAgICA8cD57dXNlclR1cm4gPT09IHRydWUgPyBcIkVzIHR1IHR1cm5vIVwiIDogXCJUdXJubyBkZSBsYSBJQVwifTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgzLDFmcildIGdhcC0yXCI+XG4gICAgICAgICAge1suLi5BcnJheSg5KV0ubWFwKCh2LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI2VlZV0gc2hhZG93LVswcHhfNHB4XyNkZGRdIHRleHQtY2VudGVyIHRleHQtWzY0cHhdIGxlYWRpbmctWzEwMHB4XSBmb250LVtib2xkXSB3LVsxMDBweF0gaC1bMTAwcHhdIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvYXJkKGlkeCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtib2FyZFN0YXRlW2lkeF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIndpbkNvbWJzIiwiSG9tZSIsInVzZXJUdXJuIiwic2V0VXNlclR1cm4iLCJib2FyZFN0YXRlIiwic2V0Qm9hcmRTdGF0ZSIsIndpbm5lciIsInNldFdpbm5lciIsImNoZWNrV2lubmVyIiwidXBkYXRlQm9hcmQiLCJpZHgiLCJ2YWx1ZSIsImJvYXJkIiwiY29tYiIsImV2ZXJ5IiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJBcnJheSIsIm1hcCIsInYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});