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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    const updateBoard = (idx)=>{\n        if (!boardState[idx]) {\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkWinner = ()=>{\n        for (let combination of winningCombinations){\n            if (combination.every((index)=>board[index] === \"X\" || board[index] === \"O\")) setWinner(true);\n        }\n        WINNING_COMBO.map((bd)=>{\n            const [a, b, c] = bd;\n            if (boardStatea[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {\n                setWinner(true);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"krT4jHbzdpJFAMmonRZ8ffBNQoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxXQUFXO0lBQ2Y7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7Q0FDVjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDekUsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMLElBQUkscUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxRQUFRLHNCQUFzQjtJQUVuRSxNQUFNVSxjQUFjLENBQUNDO1FBQ25CLElBQUksQ0FBQ0wsVUFBVSxDQUFDSyxJQUFJLEVBQUU7WUFDcEIsSUFBSUMsUUFBUVIsYUFBYSxPQUFPLE1BQU07WUFDdENHLGNBQWM7Z0JBQUUsR0FBR0QsVUFBVTtnQkFBRSxDQUFDSyxJQUFJLEVBQUVDO1lBQU07WUFDNUNQLFlBQVksQ0FBQ0Q7UUFDZjtJQUNGO0lBRUEsTUFBTVMsY0FBYztRQUNsQixLQUFLLElBQUlDLGVBQWVDLG9CQUFxQjtZQUMzQyxJQUNFRCxZQUFZRSxLQUFLLENBQ2YsQ0FBQ0MsUUFBVUMsS0FBSyxDQUFDRCxNQUFNLEtBQUssT0FBT0MsS0FBSyxDQUFDRCxNQUFNLEtBQUssTUFHdERSLFVBQVU7UUFDZDtRQUNBVSxjQUFjQyxHQUFHLENBQUMsQ0FBQ0M7WUFDakIsTUFBTSxDQUFDQyxHQUFHQyxHQUFHQyxFQUFFLEdBQUdIO1lBQ2xCLElBQ0VJLFdBQVcsQ0FBQ0gsRUFBRSxJQUNkaEIsVUFBVSxDQUFDZ0IsRUFBRSxLQUFLaEIsVUFBVSxDQUFDaUIsRUFBRSxJQUMvQmpCLFVBQVUsQ0FBQ2dCLEVBQUUsS0FBS2hCLFVBQVUsQ0FBQ2tCLEVBQUUsRUFDL0I7Z0JBQ0FmLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0Y7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0U7c0NBQUd6QixhQUFhLE9BQU8saUJBQWlCOzs7Ozs7Ozs7OztrQ0FFM0MsOERBQUNzQjt3QkFBSUMsV0FBVTtrQ0FDWjsrQkFBSUcsTUFBTTt5QkFBRyxDQUFDVixHQUFHLENBQUMsQ0FBQ1csR0FBR3BCOzRCQUNyQixxQkFDRSw4REFBQ2U7Z0NBRUNDLFdBQVU7Z0NBQ1ZLLFNBQVM7b0NBQ1B0QixZQUFZQztnQ0FDZDswQ0FFQ0wsVUFBVSxDQUFDSyxJQUFJOytCQU5YQTs7Ozs7d0JBU1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBdkV3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB3aW5Db21icyA9IFtcbiAgWzAsIDEsIDJdLFxuICBbMywgNCwgNV0sXG4gIFs2LCA3LCA4XSxcbiAgWzAsIDMsIDZdLFxuICBbMSwgNCwgN10sXG4gIFsyLCA1LCA4XSxcbiAgWzAsIDQsIDhdLFxuICBbMiwgNCwgNl0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlclR1cm4sIHNldFVzZXJUdXJuXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzdGF0ZSBvZiB0aGUgdXNlciB0dXJuXG4gIGNvbnN0IFtib2FyZFN0YXRlLCBzZXRCb2FyZFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAwOiBcIlwiLFxuICAgIDE6IFwiXCIsXG4gICAgMjogXCJcIixcbiAgICAzOiBcIlwiLFxuICAgIDQ6IFwiXCIsXG4gICAgNTogXCJcIixcbiAgICA2OiBcIlwiLFxuICAgIDc6IFwiXCIsXG4gICAgODogXCJcIixcbiAgfSk7IC8vIHN0YXRlIG9mIGVhY2ggY2VsbFxuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBzdGF0ZSBvZiB0aGUgd2lubmVyXG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAoaWR4KSA9PiB7XG4gICAgaWYgKCFib2FyZFN0YXRlW2lkeF0pIHtcbiAgICAgIGxldCB2YWx1ZSA9IHVzZXJUdXJuID09PSB0cnVlID8gXCJYXCIgOiBcIk9cIjtcbiAgICAgIHNldEJvYXJkU3RhdGUoeyAuLi5ib2FyZFN0YXRlLCBbaWR4XTogdmFsdWUgfSk7XG4gICAgICBzZXRVc2VyVHVybighdXNlclR1cm4pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja1dpbm5lciA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBjb21iaW5hdGlvbiBvZiB3aW5uaW5nQ29tYmluYXRpb25zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbWJpbmF0aW9uLmV2ZXJ5KFxuICAgICAgICAgIChpbmRleCkgPT4gYm9hcmRbaW5kZXhdID09PSBcIlhcIiB8fCBib2FyZFtpbmRleF0gPT09IFwiT1wiXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgc2V0V2lubmVyKHRydWUpO1xuICAgIH1cbiAgICBXSU5OSU5HX0NPTUJPLm1hcCgoYmQpID0+IHtcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGJkO1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZFN0YXRlYVthXSAmJlxuICAgICAgICBib2FyZFN0YXRlW2FdID09PSBib2FyZFN0YXRlW2JdICYmXG4gICAgICAgIGJvYXJkU3RhdGVbYV0gPT09IGJvYXJkU3RhdGVbY11cbiAgICAgICkge1xuICAgICAgICBzZXRXaW5uZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xIG1iLTQgZm9udC1ib2xkXCI+XG4gICAgICAgIDxoMT5UcmVzIGVuIFJheWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbWItMlwiPlxuICAgICAgICAgIDxwPnt1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiRXMgdHUgdHVybm8hXCIgOiBcIlR1cm5vIGRlIGxhIElBXCJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDMsMWZyKV0gZ2FwLTJcIj5cbiAgICAgICAgICB7Wy4uLkFycmF5KDkpXS5tYXAoKHYsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjZWVlXSBzaGFkb3ctWzBweF80cHhfI2RkZF0gdGV4dC1jZW50ZXIgdGV4dC1bNjRweF0gbGVhZGluZy1bMTAwcHhdIGZvbnQtW2JvbGRdIHctWzEwMHB4XSBoLVsxMDBweF0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQoaWR4KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JvYXJkU3RhdGVbaWR4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2luQ29tYnMiLCJIb21lIiwidXNlclR1cm4iLCJzZXRVc2VyVHVybiIsImJvYXJkU3RhdGUiLCJzZXRCb2FyZFN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwidXBkYXRlQm9hcmQiLCJpZHgiLCJ2YWx1ZSIsImNoZWNrV2lubmVyIiwiY29tYmluYXRpb24iLCJ3aW5uaW5nQ29tYmluYXRpb25zIiwiZXZlcnkiLCJpbmRleCIsImJvYXJkIiwiV0lOTklOR19DT01CTyIsIm1hcCIsImJkIiwiYSIsImIiLCJjIiwiYm9hcmRTdGF0ZWEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJBcnJheSIsInYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});