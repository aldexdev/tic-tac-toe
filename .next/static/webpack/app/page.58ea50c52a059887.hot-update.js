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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst winCombs = [\n    [\n        0,\n        1,\n        2\n    ],\n    [\n        3,\n        4,\n        5\n    ],\n    [\n        6,\n        7,\n        8\n    ],\n    [\n        0,\n        3,\n        6\n    ],\n    [\n        1,\n        4,\n        7\n    ],\n    [\n        2,\n        5,\n        8\n    ],\n    [\n        0,\n        4,\n        8\n    ],\n    [\n        2,\n        4,\n        6\n    ]\n];\nfunction Home() {\n    _s();\n    const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the user turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const [winner, setWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of the winner\n    const [draw, setDraw] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // state of draw\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [winnerCombo, setWinnerCombo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // state of the winning cells combo\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkResult(boardState);\n    }, [\n        boardState\n    ]);\n    const updateBoard = (idx)=>{\n        if (!boardState[idx] && !winner) {\n            //will check whether specify idx is empty or not\n            let value = userTurn === true ? \"X\" : \"O\";\n            setBoardState({\n                ...boardState,\n                [idx]: value\n            });\n            setUserTurn(!userTurn);\n        }\n    };\n    const checkResult = (board)=>{\n        // board is filled\n        const allFilled = Object.values(board).every((cell)=>cell !== \"\");\n        for (let comb of winCombs){\n            const [a, b, c] = comb;\n            if (board[a] && board[a] === board[b] && board[a] === board[c]) {\n                setWinner(true);\n                setWinnerCombo([\n                    a,\n                    b,\n                    c\n                ]);\n                setTitle(\"\".concat(!userTurn ? \"Victoria!\" : \"Derrota!\"));\n                return;\n            }\n            // REVISAAAAAR\n            if (allFilled && !winner) {\n                setDraw(true);\n                setTitle(\"Empate!\");\n            }\n        }\n    };\n    const reset = ()=>{\n        setBoardData({\n            0: \"\",\n            1: \"\",\n            2: \"\",\n            3: \"\",\n            4: \"\",\n            5: \"\",\n            6: \"\",\n            7: \"\",\n            8: \"\"\n        });\n        setUserTurn(true);\n        setWinner(false);\n        setWinnerCombo([]);\n        setDraw(false);\n        setTitle(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-1 mb-4 font-bold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Tres en Raya\"\n                }, void 0, false, {\n                    fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: userTurn === true ? \"Es tu turno!\" : \"Turno de la IA\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Game Draw: \".concat(draw)\n                            }, void 0, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg \".concat(winnerCombo.includes(idx) ? \"bg-[aquamarine] shadow-none\" : \"\"),\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardState[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[250px] shadow-[0px_0px_10px_0px_gray] flex flex-col items-center fixed bg-white -translate-x-2/4 -translate-y-2/4 transition-transform duration-[0.2s] p-6 rounded-2xl scale-0 left-2/4 top-2/4 \".concat(title ? \"-translate-x-2/4 -translate-y-2/4 scale-100\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[aquamarine] w-full h-9 text-lg font-semibold border-none rounded-md drop-shadow-lg hover:drop-shadow-none\",\n                        onClick: reset,\n                        children: \"New Game\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O1awY2ltxfyYWlqj1eSd+rN70HY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUU0QztBQUU1QyxNQUFNRSxXQUFXO0lBQ2Y7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDVDtRQUFDO1FBQUc7UUFBRztLQUFFO0lBQ1Q7UUFBQztRQUFHO1FBQUc7S0FBRTtJQUNUO1FBQUM7UUFBRztRQUFHO0tBQUU7Q0FDVjtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsT0FBTyx5QkFBeUI7SUFDekUsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO1FBQzNDLEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMLElBQUkscUJBQXFCO0lBQ3pCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxRQUFRLHNCQUFzQjtJQUNuRSxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsUUFBUSxnQkFBZ0I7SUFDekQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsbUNBQW1DO0lBRXZGQyxnREFBU0EsQ0FBQztRQUNSZSxZQUFZVjtJQUNkLEdBQUc7UUFBQ0E7S0FBVztJQUVmLE1BQU1XLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSSxDQUFDWixVQUFVLENBQUNZLElBQUksSUFBSSxDQUFDVixRQUFRO1lBQy9CLGdEQUFnRDtZQUNoRCxJQUFJVyxRQUFRZixhQUFhLE9BQU8sTUFBTTtZQUN0Q0csY0FBYztnQkFBRSxHQUFHRCxVQUFVO2dCQUFFLENBQUNZLElBQUksRUFBRUM7WUFBTTtZQUM1Q2QsWUFBWSxDQUFDRDtRQUNmO0lBQ0Y7SUFFQSxNQUFNWSxjQUFjLENBQUNJO1FBQ25CLGtCQUFrQjtRQUNsQixNQUFNQyxZQUFZQyxPQUFPQyxNQUFNLENBQUNILE9BQU9JLEtBQUssQ0FBQyxDQUFDQyxPQUFTQSxTQUFTO1FBQ2hFLEtBQUssSUFBSUMsUUFBUXhCLFNBQVU7WUFDekIsTUFBTSxDQUFDeUIsR0FBR0MsR0FBR0MsRUFBRSxHQUFHSDtZQUNsQixJQUFJTixLQUFLLENBQUNPLEVBQUUsSUFBSVAsS0FBSyxDQUFDTyxFQUFFLEtBQUtQLEtBQUssQ0FBQ1EsRUFBRSxJQUFJUixLQUFLLENBQUNPLEVBQUUsS0FBS1AsS0FBSyxDQUFDUyxFQUFFLEVBQUU7Z0JBQzlEcEIsVUFBVTtnQkFDVk0sZUFBZTtvQkFBQ1k7b0JBQUdDO29CQUFHQztpQkFBRTtnQkFDeEJoQixTQUFTLEdBQXdDLE9BQXJDLENBQUNULFdBQVcsY0FBYztnQkFDdEM7WUFDRjtZQUNBLGNBQWM7WUFDZCxJQUFJaUIsYUFBYSxDQUFDYixRQUFRO2dCQUN4QkcsUUFBUTtnQkFDUkUsU0FBUztZQUNYO1FBQ0Y7SUFDRjtJQUVBLE1BQU1pQixRQUFRO1FBQ1pDLGFBQWE7WUFDWCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7WUFDSCxHQUFHO1lBQ0gsR0FBRztZQUNILEdBQUc7UUFDTDtRQUNBMUIsWUFBWTtRQUNaSSxVQUFVO1FBQ1ZNLGVBQWUsRUFBRTtRQUNqQkosUUFBUTtRQUNSRSxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ21COzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0Y7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFOzBDQUFHL0IsYUFBYSxPQUFPLGlCQUFpQjs7Ozs7OzBDQUN6Qyw4REFBQytCOzBDQUFHLGNBQW1CLE9BQUx6Qjs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ3NCO3dCQUFJQyxXQUFVO2tDQUNaOytCQUFJRyxNQUFNO3lCQUFHLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHcEI7NEJBQ3JCLHFCQUNFLDhEQUFDYztnQ0FFQ0MsV0FBVyxxSUFFVixPQURDbkIsWUFBWXlCLFFBQVEsQ0FBQ3JCLE9BQU8sZ0NBQWdDO2dDQUU5RHNCLFNBQVM7b0NBQ1B2QixZQUFZQztnQ0FDZDswQ0FFQ1osVUFBVSxDQUFDWSxJQUFJOytCQVJYQTs7Ozs7d0JBV1g7Ozs7Ozs7Ozs7OzswQkFJSiw4REFBQ2M7Z0JBQ0NDLFdBQVcsc01BRVYsT0FEQ3JCLFFBQVEsZ0RBQWdEOztrQ0FHMUQsOERBQUNvQjt3QkFBSUMsV0FBVTtrQ0FBMEJyQjs7Ozs7O2tDQUN6Qyw4REFBQzZCO3dCQUNDUixXQUFVO3dCQUNWTyxTQUFTVjtrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FqSHdCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB3aW5Db21icyA9IFtcbiAgWzAsIDEsIDJdLFxuICBbMywgNCwgNV0sXG4gIFs2LCA3LCA4XSxcbiAgWzAsIDMsIDZdLFxuICBbMSwgNCwgN10sXG4gIFsyLCA1LCA4XSxcbiAgWzAsIDQsIDhdLFxuICBbMiwgNCwgNl0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlclR1cm4sIHNldFVzZXJUdXJuXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBzdGF0ZSBvZiB0aGUgdXNlciB0dXJuXG4gIGNvbnN0IFtib2FyZFN0YXRlLCBzZXRCb2FyZFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAwOiBcIlwiLFxuICAgIDE6IFwiXCIsXG4gICAgMjogXCJcIixcbiAgICAzOiBcIlwiLFxuICAgIDQ6IFwiXCIsXG4gICAgNTogXCJcIixcbiAgICA2OiBcIlwiLFxuICAgIDc6IFwiXCIsXG4gICAgODogXCJcIixcbiAgfSk7IC8vIHN0YXRlIG9mIGVhY2ggY2VsbFxuICBjb25zdCBbd2lubmVyLCBzZXRXaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBzdGF0ZSBvZiB0aGUgd2lubmVyXG4gIGNvbnN0IFtkcmF3LCBzZXREcmF3XSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gc3RhdGUgb2YgZHJhd1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbd2lubmVyQ29tYm8sIHNldFdpbm5lckNvbWJvXSA9IHVzZVN0YXRlKFtdKTsgLy8gc3RhdGUgb2YgdGhlIHdpbm5pbmcgY2VsbHMgY29tYm9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrUmVzdWx0KGJvYXJkU3RhdGUpO1xuICB9LCBbYm9hcmRTdGF0ZV0pO1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGlkeCkgPT4ge1xuICAgIGlmICghYm9hcmRTdGF0ZVtpZHhdICYmICF3aW5uZXIpIHtcbiAgICAgIC8vd2lsbCBjaGVjayB3aGV0aGVyIHNwZWNpZnkgaWR4IGlzIGVtcHR5IG9yIG5vdFxuICAgICAgbGV0IHZhbHVlID0gdXNlclR1cm4gPT09IHRydWUgPyBcIlhcIiA6IFwiT1wiO1xuICAgICAgc2V0Qm9hcmRTdGF0ZSh7IC4uLmJvYXJkU3RhdGUsIFtpZHhdOiB2YWx1ZSB9KTtcbiAgICAgIHNldFVzZXJUdXJuKCF1c2VyVHVybik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrUmVzdWx0ID0gKGJvYXJkKSA9PiB7XG4gICAgLy8gYm9hcmQgaXMgZmlsbGVkXG4gICAgY29uc3QgYWxsRmlsbGVkID0gT2JqZWN0LnZhbHVlcyhib2FyZCkuZXZlcnkoKGNlbGwpID0+IGNlbGwgIT09IFwiXCIpO1xuICAgIGZvciAobGV0IGNvbWIgb2Ygd2luQ29tYnMpIHtcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGNvbWI7XG4gICAgICBpZiAoYm9hcmRbYV0gJiYgYm9hcmRbYV0gPT09IGJvYXJkW2JdICYmIGJvYXJkW2FdID09PSBib2FyZFtjXSkge1xuICAgICAgICBzZXRXaW5uZXIodHJ1ZSk7XG4gICAgICAgIHNldFdpbm5lckNvbWJvKFthLCBiLCBjXSk7XG4gICAgICAgIHNldFRpdGxlKGAkeyF1c2VyVHVybiA/IFwiVmljdG9yaWEhXCIgOiBcIkRlcnJvdGEhXCJ9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFJFVklTQUFBQUFSXG4gICAgICBpZiAoYWxsRmlsbGVkICYmICF3aW5uZXIpIHtcbiAgICAgICAgc2V0RHJhdyh0cnVlKTtcbiAgICAgICAgc2V0VGl0bGUoXCJFbXBhdGUhXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBzZXRCb2FyZERhdGEoe1xuICAgICAgMDogXCJcIixcbiAgICAgIDE6IFwiXCIsXG4gICAgICAyOiBcIlwiLFxuICAgICAgMzogXCJcIixcbiAgICAgIDQ6IFwiXCIsXG4gICAgICA1OiBcIlwiLFxuICAgICAgNjogXCJcIixcbiAgICAgIDc6IFwiXCIsXG4gICAgICA4OiBcIlwiLFxuICAgIH0pO1xuICAgIHNldFVzZXJUdXJuKHRydWUpO1xuICAgIHNldFdpbm5lcihmYWxzZSk7XG4gICAgc2V0V2lubmVyQ29tYm8oW10pO1xuICAgIHNldERyYXcoZmFsc2UpO1xuICAgIHNldFRpdGxlKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMSBtYi00IGZvbnQtYm9sZFwiPlxuICAgICAgICA8aDE+VHJlcyBlbiBSYXlhPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG1iLTJcIj5cbiAgICAgICAgICA8cD57dXNlclR1cm4gPT09IHRydWUgPyBcIkVzIHR1IHR1cm5vIVwiIDogXCJUdXJubyBkZSBsYSBJQVwifTwvcD5cbiAgICAgICAgICA8cD57YEdhbWUgRHJhdzogJHtkcmF3fWB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDMsMWZyKV0gZ2FwLTJcIj5cbiAgICAgICAgICB7Wy4uLkFycmF5KDkpXS5tYXAoKHYsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLVsjZWVlXSBzaGFkb3ctWzBweF80cHhfI2RkZF0gdGV4dC1jZW50ZXIgdGV4dC1bNjRweF0gbGVhZGluZy1bMTAwcHhdIGZvbnQtW2JvbGRdIHctWzEwMHB4XSBoLVsxMDBweF0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyAke1xuICAgICAgICAgICAgICAgICAgd2lubmVyQ29tYm8uaW5jbHVkZXMoaWR4KSA/IFwiYmctW2FxdWFtYXJpbmVdIHNoYWRvdy1ub25lXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlQm9hcmQoaWR4KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JvYXJkU3RhdGVbaWR4XX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHctWzI1MHB4XSBzaGFkb3ctWzBweF8wcHhfMTBweF8wcHhfZ3JheV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZml4ZWQgYmctd2hpdGUgLXRyYW5zbGF0ZS14LTIvNCAtdHJhbnNsYXRlLXktMi80IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLVswLjJzXSBwLTYgcm91bmRlZC0yeGwgc2NhbGUtMCBsZWZ0LTIvNCB0b3AtMi80ICR7XG4gICAgICAgICAgdGl0bGUgPyBcIi10cmFuc2xhdGUteC0yLzQgLXRyYW5zbGF0ZS15LTIvNCBzY2FsZS0xMDBcIiA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVthcXVhbWFyaW5lXSB3LWZ1bGwgaC05IHRleHQtbGcgZm9udC1zZW1pYm9sZCBib3JkZXItbm9uZSByb3VuZGVkLW1kIGRyb3Atc2hhZG93LWxnIGhvdmVyOmRyb3Atc2hhZG93LW5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0fVxuICAgICAgICA+XG4gICAgICAgICAgTmV3IEdhbWVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIndpbkNvbWJzIiwiSG9tZSIsInVzZXJUdXJuIiwic2V0VXNlclR1cm4iLCJib2FyZFN0YXRlIiwic2V0Qm9hcmRTdGF0ZSIsIndpbm5lciIsInNldFdpbm5lciIsImRyYXciLCJzZXREcmF3IiwidGl0bGUiLCJzZXRUaXRsZSIsIndpbm5lckNvbWJvIiwic2V0V2lubmVyQ29tYm8iLCJjaGVja1Jlc3VsdCIsInVwZGF0ZUJvYXJkIiwiaWR4IiwidmFsdWUiLCJib2FyZCIsImFsbEZpbGxlZCIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiY2VsbCIsImNvbWIiLCJhIiwiYiIsImMiLCJyZXNldCIsInNldEJvYXJkRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIkFycmF5IiwibWFwIiwidiIsImluY2x1ZGVzIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});