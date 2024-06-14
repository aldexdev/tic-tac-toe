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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    });\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [winnerCombo, setWinnerCombo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkResult(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx] && !winner) {\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkResult = (board)=>{\n        // board is filled\n        const allFilled = Object.values(board).every((cell)=>cell !== \"\");\n        for (let comb of winCombs){\n            const [a, b, c] = comb;\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setWinner(true);\n                setWinnerCombo([\n                    a,\n                    b,\n                    c\n                ]);\n                setTitle(\"\".concat(!userTurn ? \"Victoria!\" : \"Derrota!\"));\n                return;\n            }\n            if (allFilled && !winner) {\n                setTitle(\"Empate!\");\n            }\n        }\n    };\n    const reset = ()=>{\n        setBoardState({\n            0: \"\",\n            1: \"\",\n            2: \"\",\n            3: \"\",\n            4: \"\",\n            5: \"\",\n            6: \"\",\n            7: \"\",\n            8: \"\"\n        });\n        setUserTurn(true);\n        setWinner(false);\n        setWinnerCombo([]);\n        setTitle(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm mb-2 \".concat(!winner ? \"text-green-600\" : \"text-red-600\"),\n                                children: \"\".concat(!winner ? \"Juego en progreso\" : \"Partida finalizada\")\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] \".concat(userTurn ? \"shadow-[0px_4px_#ddd]\" : \"shadow-none\", \" text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg \").concat(winnerCombo.includes(idx) ? \"bg-black text-white shadow-none\" : \"\"),\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            winner ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[250px] flex flex-col items-center fixed p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white w-full h-9 text-lg font-semibold border-none rounded-md drop-shadow-[0px_4px_#ddd] hover:drop-shadow-none\",\n                        onClick: reset,\n                        children: \"Nuevo Juego\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UQM0SgrMthAxyfvy/lyWwijRNmE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXZDLDhEQUFDcUI7d0JBQUlDLFdBQVU7a0NBQ1o7K0JBQUlHLE1BQU07eUJBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUduQjs0QkFDckIscUJBQ0UsOERBQUNhO2dDQUVDQyxXQUFXLGFBR1RsQixPQUZBUixXQUFXLDBCQUEwQixlQUN0Qyx1R0FJQSxPQUhDUSxZQUFZd0IsUUFBUSxDQUFDcEIsT0FDakIsb0NBQ0E7Z0NBRU5xQixTQUFTO29DQUNQdEIsWUFBWUM7Z0NBQ2Q7MENBRUNWLFVBQVUsQ0FBQ1UsSUFBSTsrQkFaWEE7Ozs7O3dCQWVYOzs7Ozs7Ozs7Ozs7WUFHSFIsdUJBQ0MsOERBQUNxQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUEwQnBCOzs7Ozs7a0NBQ3ZDLDhEQUFDNEI7d0JBQ0NSLFdBQVU7d0JBQ1ZPLFNBQVNUO2tDQUNWOzs7Ozs7Ozs7Ozt1QkFJRDs7Ozs7OztBQUdWO0dBakh3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3Qgd2luQ29tYnMgPSBbXG4gIFswLCAxLCAyXSxcbiAgWzMsIDQsIDVdLFxuICBbNiwgNywgOF0sXG4gIFswLCAzLCA2XSxcbiAgWzEsIDQsIDddLFxuICBbMiwgNSwgOF0sXG4gIFswLCA0LCA4XSxcbiAgWzIsIDQsIDZdLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJUdXJuLCBzZXRVc2VyVHVybl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2JvYXJkU3RhdGUsIHNldEJvYXJkU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIDA6IFwiXCIsXG4gICAgMTogXCJcIixcbiAgICAyOiBcIlwiLFxuICAgIDM6IFwiXCIsXG4gICAgNDogXCJcIixcbiAgICA1OiBcIlwiLFxuICAgIDY6IFwiXCIsXG4gICAgNzogXCJcIixcbiAgICA4OiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3dpbm5lckNvbWJvLCBzZXRXaW5uZXJDb21ib10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Jlc3VsdChib2FyZFN0YXRlKTtcbiAgfSwgW2JvYXJkU3RhdGVdKTtcblxuICBjb25zdCB1cGRhdGVCb2FyZCA9IChpZHgpID0+IHtcbiAgICBpZiAoIWJvYXJkU3RhdGVbaWR4XSAmJiAhd2lubmVyKSB7XG4gICAgICBsZXQgdmFsdWUgPSB1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiWFwiIDogXCJPXCI7XG4gICAgICBzZXRCb2FyZFN0YXRlKHsgLi4uYm9hcmRTdGF0ZSwgW2lkeF06IHZhbHVlIH0pO1xuICAgICAgc2V0VXNlclR1cm4oIXVzZXJUdXJuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tSZXN1bHQgPSAoYm9hcmQpID0+IHtcbiAgICAvLyBib2FyZCBpcyBmaWxsZWRcbiAgICBjb25zdCBhbGxGaWxsZWQgPSBPYmplY3QudmFsdWVzKGJvYXJkKS5ldmVyeSgoY2VsbCkgPT4gY2VsbCAhPT0gXCJcIik7XG4gICAgZm9yIChsZXQgY29tYiBvZiB3aW5Db21icykge1xuICAgICAgY29uc3QgW2EsIGIsIGNdID0gY29tYjtcbiAgICAgIGlmIChib2FyZFthXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbYl0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2NdKSB7XG4gICAgICAgIHNldFdpbm5lcih0cnVlKTtcbiAgICAgICAgc2V0V2lubmVyQ29tYm8oW2EsIGIsIGNdKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7IXVzZXJUdXJuID8gXCJWaWN0b3JpYSFcIiA6IFwiRGVycm90YSFcIn1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsbEZpbGxlZCAmJiAhd2lubmVyKSB7XG4gICAgICAgIHNldFRpdGxlKFwiRW1wYXRlIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0Qm9hcmRTdGF0ZSh7XG4gICAgICAwOiBcIlwiLFxuICAgICAgMTogXCJcIixcbiAgICAgIDI6IFwiXCIsXG4gICAgICAzOiBcIlwiLFxuICAgICAgNDogXCJcIixcbiAgICAgIDU6IFwiXCIsXG4gICAgICA2OiBcIlwiLFxuICAgICAgNzogXCJcIixcbiAgICAgIDg6IFwiXCIsXG4gICAgfSk7XG4gICAgc2V0VXNlclR1cm4odHJ1ZSk7XG4gICAgc2V0V2lubmVyKGZhbHNlKTtcbiAgICBzZXRXaW5uZXJDb21ibyhbXSk7XG4gICAgc2V0VGl0bGUoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xIG1iLTQgZm9udC1ib2xkXCI+XG4gICAgICAgIDxoMT5UcmVzIGVuIFJheWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbWItMlwiPlxuICAgICAgICAgIDxwPnt1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiRXMgdHUgdHVybm8hXCIgOiBcIlR1cm5vIGRlIGxhIElBXCJ9PC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIG1iLTIgJHtcbiAgICAgICAgICAgICAgIXdpbm5lciA/IFwidGV4dC1ncmVlbi02MDBcIiA6IFwidGV4dC1yZWQtNjAwXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID57YCR7IXdpbm5lciA/IFwiSnVlZ28gZW4gcHJvZ3Jlc29cIiA6IFwiUGFydGlkYSBmaW5hbGl6YWRhXCJ9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMywxZnIpXSBnYXAtMlwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOSldLm1hcCgodiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmctWyNlZWVdICR7XG4gICAgICAgICAgICAgICAgICB1c2VyVHVybiA/IFwic2hhZG93LVswcHhfNHB4XyNkZGRdXCIgOiBcInNoYWRvdy1ub25lXCJcbiAgICAgICAgICAgICAgICB9IHRleHQtY2VudGVyIHRleHQtWzY0cHhdIGxlYWRpbmctWzEwMHB4XSBmb250LVtib2xkXSB3LVsxMDBweF0gaC1bMTAwcHhdIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgJHtcbiAgICAgICAgICAgICAgICAgIHdpbm5lckNvbWJvLmluY2x1ZGVzKGlkeClcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJsYWNrIHRleHQtd2hpdGUgc2hhZG93LW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChpZHgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Ym9hcmRTdGF0ZVtpZHhdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7d2lubmVyID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI1MHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBmaXhlZCBwLTZcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlIHctZnVsbCBoLTkgdGV4dC1sZyBmb250LXNlbWlib2xkIGJvcmRlci1ub25lIHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctWzBweF80cHhfI2RkZF0gaG92ZXI6ZHJvcC1zaGFkb3ctbm9uZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtyZXNldH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOdWV2byBKdWVnb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2luQ29tYnMiLCJIb21lIiwidXNlclR1cm4iLCJzZXRVc2VyVHVybiIsImJvYXJkU3RhdGUiLCJzZXRCb2FyZFN0YXRlIiwid2lubmVyIiwic2V0V2lubmVyIiwidGl0bGUiLCJzZXRUaXRsZSIsIndpbm5lckNvbWJvIiwic2V0V2lubmVyQ29tYm8iLCJjaGVja1Jlc3VsdCIsInVwZGF0ZUJvYXJkIiwiaWR4IiwidmFsdWUiLCJib2FyZCIsImFsbEZpbGxlZCIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiY2VsbCIsImNvbWIiLCJhIiwiYiIsImMiLCJyZXNldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIkFycmF5IiwibWFwIiwidiIsImluY2x1ZGVzIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});