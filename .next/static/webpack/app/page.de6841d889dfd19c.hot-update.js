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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    const [draw, setDraw] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of draw\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [winnerCombo, setWinnerCombo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // state of the winning cells combo\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkResult(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx] && !winner) {\n            //will check whether specify idx is empty or not\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkResult = (board)=>{\n        // board is filled\n        const allFilled = Object.values(board).every((cell)=>cell !== \"\");\n        for (let comb of winCombs){\n            const [a, b, c] = comb;\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setWinner(true);\n                setWinnerCombo([\n                    a,\n                    b,\n                    c\n                ]);\n                setModalTitle(\"Player \".concat(!xTurn ? \"X\" : \"O\", \" Won!!!\"));\n            }\n            if (allFilled && !winner) {\n                setDraw(true);\n                setTitle(\"Empate!\");\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Game Draw: \".concat(draw)\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O1awY2ltxfyYWlqj1eSd+rN70HY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQ1ZNLFNBQVM7b0NBQ1B0QixZQUFZQztnQ0FDZDswQ0FFQ1osVUFBVSxDQUFDWSxJQUFJOytCQU5YQTs7Ozs7d0JBU1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBNUV3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB3aW5Db21icyA9IFtcbiAgWzAsIDEsIDJdLFxuICBbMywgNCwgNV0sXG4gIFs2LCA3LCA4XSxcbiAgWzAsIDMsIDZdLFxuICBbMSwgNCwgN10sXG4gIFsyLCA1LCA4XSxcbiAgWzAsIDQsIDhdLFxuICBbMiwgNCwgNl0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlclR1cm4sIHNldFVzZXJUdXJuXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzdGF0ZSBvZiB0aGUgdXNlciB0dXJuXG4gIGNvbnN0IFtib2FyZFN0YXRlLCBzZXRCb2FyZFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAwOiBcIlwiLFxuICAgIDE6IFwiXCIsXG4gICAgMjogXCJcIixcbiAgICAzOiBcIlwiLFxuICAgIDQ6IFwiXCIsXG4gICAgNTogXCJcIixcbiAgICA2OiBcIlwiLFxuICAgIDc6IFwiXCIsXG4gICAgODogXCJcIixcbiAgfSk7IC8vIHN0YXRlIG9mIGVhY2ggY2VsbFxuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBzdGF0ZSBvZiB0aGUgd2lubmVyXG4gIGNvbnN0IFtkcmF3LCBzZXREcmF3XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gc3RhdGUgb2YgZHJhd1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbd2lubmVyQ29tYm8sIHNldFdpbm5lckNvbWJvXSA9IHVzZVN0YXRlKFtdKTsgLy8gc3RhdGUgb2YgdGhlIHdpbm5pbmcgY2VsbHMgY29tYm9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrUmVzdWx0KGJvYXJkU3RhdGUpO1xuICB9LCBbYm9hcmRTdGF0ZV0pO1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGlkeCkgPT4ge1xuICAgIGlmICghYm9hcmRTdGF0ZVtpZHhdICYmICF3aW5uZXIpIHtcbiAgICAgIC8vd2lsbCBjaGVjayB3aGV0aGVyIHNwZWNpZnkgaWR4IGlzIGVtcHR5IG9yIG5vdFxuICAgICAgbGV0IHZhbHVlID0gdXNlclR1cm4gPT09IHRydWUgPyBcIlhcIiA6IFwiT1wiO1xuICAgICAgc2V0Qm9hcmRTdGF0ZSh7IC4uLmJvYXJkU3RhdGUsIFtpZHhdOiB2YWx1ZSB9KTtcbiAgICAgIHNldFVzZXJUdXJuKCF1c2VyVHVybik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrUmVzdWx0ID0gKGJvYXJkKSA9PiB7XG4gICAgLy8gYm9hcmQgaXMgZmlsbGVkXG4gICAgY29uc3QgYWxsRmlsbGVkID0gT2JqZWN0LnZhbHVlcyhib2FyZCkuZXZlcnkoKGNlbGwpID0+IGNlbGwgIT09IFwiXCIpO1xuICAgIGZvciAobGV0IGNvbWIgb2Ygd2luQ29tYnMpIHtcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGNvbWI7XG4gICAgICBpZiAoYm9hcmRbYV0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2JdICYmIGJvYXJkW2FdID09PSBib2FyZFtjXSkge1xuICAgICAgICBzZXRXaW5uZXIodHJ1ZSk7XG4gICAgICAgIHNldFdpbm5lckNvbWJvKFthLCBiLCBjXSk7XG4gICAgICAgIHNldE1vZGFsVGl0bGUoYFBsYXllciAkeyF4VHVybiA/IFwiWFwiIDogXCJPXCJ9IFdvbiEhIWApO1xuICAgICAgfVxuICAgICAgaWYgKGFsbEZpbGxlZCAmJiAhd2lubmVyKSB7XG4gICAgICAgIHNldERyYXcodHJ1ZSk7XG4gICAgICAgIHNldFRpdGxlKFwiRW1wYXRlIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xIG1iLTQgZm9udC1ib2xkXCI+XG4gICAgICAgIDxoMT5UcmVzIGVuIFJheWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbWItMlwiPlxuICAgICAgICAgIDxwPnt1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiRXMgdHUgdHVybm8hXCIgOiBcIlR1cm5vIGRlIGxhIElBXCJ9PC9wPlxuICAgICAgICAgIDxwPntgR2FtZSBEcmF3OiAke2RyYXd9YH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMywxZnIpXSBnYXAtMlwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOSldLm1hcCgodiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNlZWVdIHNoYWRvdy1bMHB4XzRweF8jZGRkXSB0ZXh0LWNlbnRlciB0ZXh0LVs2NHB4XSBsZWFkaW5nLVsxMDBweF0gZm9udC1bYm9sZF0gdy1bMTAwcHhdIGgtWzEwMHB4XSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChpZHgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Ym9hcmRTdGF0ZVtpZHhdfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5Db21icyIsIkhvbWUiLCJ1c2VyVHVybiIsInNldFVzZXJUdXJuIiwiYm9hcmRTdGF0ZSIsInNldEJvYXJkU3RhdGUiLCJ3aW5uZXIiLCJzZXRXaW5uZXIiLCJkcmF3Iiwic2V0RHJhdyIsInRpdGxlIiwic2V0VGl0bGUiLCJ3aW5uZXJDb21ibyIsInNldFdpbm5lckNvbWJvIiwiY2hlY2tSZXN1bHQiLCJ1cGRhdGVCb2FyZCIsImlkeCIsInZhbHVlIiwiYm9hcmQiLCJhbGxGaWxsZWQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsImNlbGwiLCJjb21iIiwiYSIsImIiLCJjIiwic2V0TW9kYWxUaXRsZSIsInhUdXJuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiQXJyYXkiLCJtYXAiLCJ2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});