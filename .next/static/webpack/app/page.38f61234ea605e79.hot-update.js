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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkWinner(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx] && !won) {\n            //will check whether specify idx is empty or not\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardData({\n                ...boardData,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkWinner = (board)=>{\n        for (let comb of winCombs){\n            if (comb.every((index)=>board[index] === \"X\" || board[index] === \"O\")) setWinner(true);\n        }\n    // WINNING_COMBO.map((bd) => {\n    //   const [a, b, c] = bd;\n    //   if (\n    //     boardStatea[a] &&\n    //     boardState[a] === boardState[b] &&\n    //     boardState[a] === boardState[c]\n    //   ) {\n    //     setWinner(true);\n    //   }\n    // });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Game Won: \".concat(winner)\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"jBsWpYWKCrkLOTos+Nw+TgDLxa0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxXQUFXO0lBQ2Y7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7Q0FDVjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDekUsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMLElBQUkscUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxRQUFRLHNCQUFzQjtJQUVuRUMsZ0RBQVNBLENBQUM7UUFDUlMsWUFBWUo7SUFDZCxHQUFHO1FBQUNBO0tBQVc7SUFFZixNQUFNSyxjQUFjLENBQUNDO1FBQ25CLElBQUksQ0FBQ04sVUFBVSxDQUFDTSxJQUFJLElBQUksQ0FBQ0MsS0FBSztZQUM1QixnREFBZ0Q7WUFDaEQsSUFBSUMsUUFBUVYsYUFBYSxPQUFPLE1BQU07WUFDdENXLGFBQWE7Z0JBQUUsR0FBR0MsU0FBUztnQkFBRSxDQUFDSixJQUFJLEVBQUVFO1lBQU07WUFDMUNULFlBQVksQ0FBQ0Q7UUFDZjtJQUNGO0lBRUEsTUFBTU0sY0FBYyxDQUFDTztRQUNuQixLQUFLLElBQUlDLFFBQVFoQixTQUFVO1lBQ3pCLElBQUlnQixLQUFLQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVUgsS0FBSyxDQUFDRyxNQUFNLEtBQUssT0FBT0gsS0FBSyxDQUFDRyxNQUFNLEtBQUssTUFDakVYLFVBQVU7UUFDZDtJQUNBLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULHdCQUF3QjtJQUN4Qix5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLE1BQU07SUFDUjtJQUVBLHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTswQ0FBR3BCLGFBQWEsT0FBTyxpQkFBaUI7Ozs7OzswQ0FDekMsOERBQUNvQjswQ0FBRyxhQUFvQixPQUFQaEI7Ozs7Ozs7Ozs7OztrQ0FFbkIsOERBQUNhO3dCQUFJQyxXQUFVO2tDQUNaOytCQUFJRyxNQUFNO3lCQUFHLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHZjs0QkFDckIscUJBQ0UsOERBQUNTO2dDQUVDQyxXQUFVO2dDQUNWTSxTQUFTO29DQUNQakIsWUFBWUM7Z0NBQ2Q7MENBRUNOLFVBQVUsQ0FBQ00sSUFBSTsrQkFOWEE7Ozs7O3dCQVNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQXpFd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgd2luQ29tYnMgPSBbXG4gIFswLCAxLCAyXSxcbiAgWzMsIDQsIDVdLFxuICBbNiwgNywgOF0sXG4gIFswLCAzLCA2XSxcbiAgWzEsIDQsIDddLFxuICBbMiwgNSwgOF0sXG4gIFswLCA0LCA4XSxcbiAgWzIsIDQsIDZdLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJUdXJuLCBzZXRVc2VyVHVybl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gc3RhdGUgb2YgdGhlIHVzZXIgdHVyblxuICBjb25zdCBbYm9hcmRTdGF0ZSwgc2V0Qm9hcmRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgMDogXCJcIixcbiAgICAxOiBcIlwiLFxuICAgIDI6IFwiXCIsXG4gICAgMzogXCJcIixcbiAgICA0OiBcIlwiLFxuICAgIDU6IFwiXCIsXG4gICAgNjogXCJcIixcbiAgICA3OiBcIlwiLFxuICAgIDg6IFwiXCIsXG4gIH0pOyAvLyBzdGF0ZSBvZiBlYWNoIGNlbGxcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gc3RhdGUgb2YgdGhlIHdpbm5lclxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tXaW5uZXIoYm9hcmRTdGF0ZSk7XG4gIH0sIFtib2FyZFN0YXRlXSk7XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAoaWR4KSA9PiB7XG4gICAgaWYgKCFib2FyZFN0YXRlW2lkeF0gJiYgIXdvbikge1xuICAgICAgLy93aWxsIGNoZWNrIHdoZXRoZXIgc3BlY2lmeSBpZHggaXMgZW1wdHkgb3Igbm90XG4gICAgICBsZXQgdmFsdWUgPSB1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiWFwiIDogXCJPXCI7XG4gICAgICBzZXRCb2FyZERhdGEoeyAuLi5ib2FyZERhdGEsIFtpZHhdOiB2YWx1ZSB9KTtcbiAgICAgIHNldFVzZXJUdXJuKCF1c2VyVHVybik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrV2lubmVyID0gKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgY29tYiBvZiB3aW5Db21icykge1xuICAgICAgaWYgKGNvbWIuZXZlcnkoKGluZGV4KSA9PiBib2FyZFtpbmRleF0gPT09IFwiWFwiIHx8IGJvYXJkW2luZGV4XSA9PT0gXCJPXCIpKVxuICAgICAgICBzZXRXaW5uZXIodHJ1ZSk7XG4gICAgfVxuICAgIC8vIFdJTk5JTkdfQ09NQk8ubWFwKChiZCkgPT4ge1xuICAgIC8vICAgY29uc3QgW2EsIGIsIGNdID0gYmQ7XG4gICAgLy8gICBpZiAoXG4gICAgLy8gICAgIGJvYXJkU3RhdGVhW2FdICYmXG4gICAgLy8gICAgIGJvYXJkU3RhdGVbYV0gPT09IGJvYXJkU3RhdGVbYl0gJiZcbiAgICAvLyAgICAgYm9hcmRTdGF0ZVthXSA9PT0gYm9hcmRTdGF0ZVtjXVxuICAgIC8vICAgKSB7XG4gICAgLy8gICAgIHNldFdpbm5lcih0cnVlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTEgbWItNCBmb250LWJvbGRcIj5cbiAgICAgICAgPGgxPlRyZXMgZW4gUmF5YTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtYi0yXCI+XG4gICAgICAgICAgPHA+e3VzZXJUdXJuID09PSB0cnVlID8gXCJFcyB0dSB0dXJubyFcIiA6IFwiVHVybm8gZGUgbGEgSUFcIn08L3A+XG4gICAgICAgICAgPHA+e2BHYW1lIFdvbjogJHt3aW5uZXJ9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMywxZnIpXSBnYXAtMlwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOSldLm1hcCgodiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNlZWVdIHNoYWRvdy1bMHB4XzRweF8jZGRkXSB0ZXh0LWNlbnRlciB0ZXh0LVs2NHB4XSBsZWFkaW5nLVsxMDBweF0gZm9udC1bYm9sZF0gdy1bMTAwcHhdIGgtWzEwMHB4XSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChpZHgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Ym9hcmRTdGF0ZVtpZHhdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5Db21icyIsIkhvbWUiLCJ1c2VyVHVybiIsInNldFVzZXJUdXJuIiwiYm9hcmRTdGF0ZSIsInNldEJvYXJkU3RhdGUiLCJ3aW5uZXIiLCJzZXRXaW5uZXIiLCJjaGVja1dpbm5lciIsInVwZGF0ZUJvYXJkIiwiaWR4Iiwid29uIiwidmFsdWUiLCJzZXRCb2FyZERhdGEiLCJib2FyZERhdGEiLCJib2FyZCIsImNvbWIiLCJldmVyeSIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiQXJyYXkiLCJtYXAiLCJ2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});