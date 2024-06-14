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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [winnerCombo, setWinnerCombo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkResult(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx] && !winner) {\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkResult = (board)=>{\n        // board is filled\n        const allFilled = Object.values(board).every((cell)=>cell !== \"\");\n        for (let comb of winCombs){\n            const [a, b, c] = comb;\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setWinner(true);\n                setWinnerCombo([\n                    a,\n                    b,\n                    c\n                ]);\n                setTitle(\"\".concat(!userTurn ? \"Victoria!\" : \"Derrota!\"));\n                return;\n            }\n            if (allFilled && !winner) {\n                setTitle(\"Empate!\");\n            }\n        }\n    };\n    const reset = ()=>{\n        setBoardState({\n            0: \"\",\n            1: \"\",\n            2: \"\",\n            3: \"\",\n            4: \"\",\n            5: \"\",\n            6: \"\",\n            7: \"\",\n            8: \"\"\n        });\n        setUserTurn(true);\n        setWinner(false);\n        setWinnerCombo([]);\n        setTitle(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] \".concat(userTurn ? \"shadow-[0px_4px_#ddd]\" : \"shadow-none\", \" text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg \").concat(winnerCombo.includes(idx) ? \"bg-black text-white shadow-none\" : \"\"),\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[250px] shadow-[0px_0px_10px_0px_gray] flex flex-col items-center fixed bg-white -translate-x-2/4 -translate-y-2/4 transition-transform duration-[0.2s] p-6 rounded-2xl scale-0 left-2/4 top-1/4 \".concat(title ? \"-translate-x-2/4 -translate-y-2/4 scale-100\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white w-full h-9 text-lg font-semibold border-none rounded-md drop-shadow-xl hover:drop-shadow-none\",\n                        onClick: reset,\n                        children: \"Nuevo Juego\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UQM0SgrMthAxyfvy/lyWwijRNmE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSw4REFBQ2E7Z0NBRUNDLFdBQVcsYUFHVGxCLE9BRkFSLFdBQVcsMEJBQTBCLGVBQ3RDLHVHQUlBLE9BSENRLFlBQVl3QixRQUFRLENBQUNwQixPQUNqQixvQ0FDQTtnQ0FFTnFCLFNBQVM7b0NBQ1B0QixZQUFZQztnQ0FDZDswQ0FFQ1YsVUFBVSxDQUFDVSxJQUFJOytCQVpYQTs7Ozs7d0JBZVg7Ozs7Ozs7Ozs7OzswQkFJSiw4REFBQ2E7Z0JBQ0NDLFdBQVcsc01BRVYsT0FEQ3BCLFFBQVEsZ0RBQWdEOztrQ0FHMUQsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FBMEJwQjs7Ozs7O2tDQUN6Qyw4REFBQzRCO3dCQUNDUixXQUFVO3dCQUNWTyxTQUFTVDtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EvR3dCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB3aW5Db21icyA9IFtcbiAgWzAsIDEsIDJdLFxuICBbMywgNCwgNV0sXG4gIFs2LCA3LCA4XSxcbiAgWzAsIDMsIDZdLFxuICBbMSwgNCwgN10sXG4gIFsyLCA1LCA4XSxcbiAgWzAsIDQsIDhdLFxuICBbMiwgNCwgNl0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlclR1cm4sIHNldFVzZXJUdXJuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYm9hcmRTdGF0ZSwgc2V0Qm9hcmRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgMDogXCJcIixcbiAgICAxOiBcIlwiLFxuICAgIDI6IFwiXCIsXG4gICAgMzogXCJcIixcbiAgICA0OiBcIlwiLFxuICAgIDU6IFwiXCIsXG4gICAgNjogXCJcIixcbiAgICA3OiBcIlwiLFxuICAgIDg6IFwiXCIsXG4gIH0pOyAvLyBzdGF0ZSBvZiBlYWNoIGNlbGxcbiAgY29uc3QgW3dpbm5lciwgc2V0V2lubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3dpbm5lckNvbWJvLCBzZXRXaW5uZXJDb21ib10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1Jlc3VsdChib2FyZFN0YXRlKTtcbiAgfSwgW2JvYXJkU3RhdGVdKTtcblxuICBjb25zdCB1cGRhdGVCb2FyZCA9IChpZHgpID0+IHtcbiAgICBpZiAoIWJvYXJkU3RhdGVbaWR4XSAmJiAhd2lubmVyKSB7XG4gICAgICBsZXQgdmFsdWUgPSB1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiWFwiIDogXCJPXCI7XG4gICAgICBzZXRCb2FyZFN0YXRlKHsgLi4uYm9hcmRTdGF0ZSwgW2lkeF06IHZhbHVlIH0pO1xuICAgICAgc2V0VXNlclR1cm4oIXVzZXJUdXJuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tSZXN1bHQgPSAoYm9hcmQpID0+IHtcbiAgICAvLyBib2FyZCBpcyBmaWxsZWRcbiAgICBjb25zdCBhbGxGaWxsZWQgPSBPYmplY3QudmFsdWVzKGJvYXJkKS5ldmVyeSgoY2VsbCkgPT4gY2VsbCAhPT0gXCJcIik7XG4gICAgZm9yIChsZXQgY29tYiBvZiB3aW5Db21icykge1xuICAgICAgY29uc3QgW2EsIGIsIGNdID0gY29tYjtcbiAgICAgIGlmIChib2FyZFthXSAmJiBib2FyZFthXSA9PT0gYm9hcmRbYl0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2NdKSB7XG4gICAgICAgIHNldFdpbm5lcih0cnVlKTtcbiAgICAgICAgc2V0V2lubmVyQ29tYm8oW2EsIGIsIGNdKTtcbiAgICAgICAgc2V0VGl0bGUoYCR7IXVzZXJUdXJuID8gXCJWaWN0b3JpYSFcIiA6IFwiRGVycm90YSFcIn1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsbEZpbGxlZCAmJiAhd2lubmVyKSB7XG4gICAgICAgIHNldFRpdGxlKFwiRW1wYXRlIVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0Qm9hcmRTdGF0ZSh7XG4gICAgICAwOiBcIlwiLFxuICAgICAgMTogXCJcIixcbiAgICAgIDI6IFwiXCIsXG4gICAgICAzOiBcIlwiLFxuICAgICAgNDogXCJcIixcbiAgICAgIDU6IFwiXCIsXG4gICAgICA2OiBcIlwiLFxuICAgICAgNzogXCJcIixcbiAgICAgIDg6IFwiXCIsXG4gICAgfSk7XG4gICAgc2V0VXNlclR1cm4odHJ1ZSk7XG4gICAgc2V0V2lubmVyKGZhbHNlKTtcbiAgICBzZXRXaW5uZXJDb21ibyhbXSk7XG4gICAgc2V0VGl0bGUoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0xIG1iLTQgZm9udC1ib2xkXCI+XG4gICAgICAgIDxoMT5UcmVzIGVuIFJheWE8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbWItMlwiPlxuICAgICAgICAgIDxwPnt1c2VyVHVybiA9PT0gdHJ1ZSA/IFwiRXMgdHUgdHVybm8hXCIgOiBcIlR1cm5vIGRlIGxhIElBXCJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDMsMWZyKV0gZ2FwLTJcIj5cbiAgICAgICAgICB7Wy4uLkFycmF5KDkpXS5tYXAoKHYsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLVsjZWVlXSAke1xuICAgICAgICAgICAgICAgICAgdXNlclR1cm4gPyBcInNoYWRvdy1bMHB4XzRweF8jZGRkXVwiIDogXCJzaGFkb3ctbm9uZVwiXG4gICAgICAgICAgICAgICAgfSB0ZXh0LWNlbnRlciB0ZXh0LVs2NHB4XSBsZWFkaW5nLVsxMDBweF0gZm9udC1bYm9sZF0gdy1bMTAwcHhdIGgtWzEwMHB4XSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnICR7XG4gICAgICAgICAgICAgICAgICB3aW5uZXJDb21iby5pbmNsdWRlcyhpZHgpXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlIHNoYWRvdy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQoaWR4KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JvYXJkU3RhdGVbaWR4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHctWzI1MHB4XSBzaGFkb3ctWzBweF8wcHhfMTBweF8wcHhfZ3JheV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZml4ZWQgYmctd2hpdGUgLXRyYW5zbGF0ZS14LTIvNCAtdHJhbnNsYXRlLXktMi80IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLVswLjJzXSBwLTYgcm91bmRlZC0yeGwgc2NhbGUtMCBsZWZ0LTIvNCB0b3AtMS80ICR7XG4gICAgICAgICAgdGl0bGUgPyBcIi10cmFuc2xhdGUteC0yLzQgLXRyYW5zbGF0ZS15LTIvNCBzY2FsZS0xMDBcIiA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgdy1mdWxsIGgtOSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgYm9yZGVyLW5vbmUgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy14bCBob3Zlcjpkcm9wLXNoYWRvdy1ub25lXCJcbiAgICAgICAgICBvbkNsaWNrPXtyZXNldH1cbiAgICAgICAgPlxuICAgICAgICAgIE51ZXZvIEp1ZWdvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ3aW5Db21icyIsIkhvbWUiLCJ1c2VyVHVybiIsInNldFVzZXJUdXJuIiwiYm9hcmRTdGF0ZSIsInNldEJvYXJkU3RhdGUiLCJ3aW5uZXIiLCJzZXRXaW5uZXIiLCJ0aXRsZSIsInNldFRpdGxlIiwid2lubmVyQ29tYm8iLCJzZXRXaW5uZXJDb21ibyIsImNoZWNrUmVzdWx0IiwidXBkYXRlQm9hcmQiLCJpZHgiLCJ2YWx1ZSIsImJvYXJkIiwiYWxsRmlsbGVkIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJjZWxsIiwiY29tYiIsImEiLCJiIiwiYyIsInJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiQXJyYXkiLCJtYXAiLCJ2IiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});