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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [xTurn, setXTurn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // state of the turn\n    const [boardState, setBoardState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\",\n        4: \"\",\n        5: \"\",\n        6: \"\",\n        7: \"\",\n        8: \"\"\n    }); // state of each cell\n    const updateBoard = (idx)=>{\n        if (!boardData[idx]) {\n            let value = xTurn === true ? \"X\" : \"O\";\n            setBoardData({\n                ...boardData,\n                [idx]: value\n            });\n            setXTurn(!xTurn);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tic Tac Toe\"\n            }, void 0, false, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center text-2xl font-semibold\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: xTurn === true ? \"X Turn\" : \"O Turn\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-[repeat(3,1fr)] gap-2\",\n                        children: [\n                            ...Array(9)\n                        ].map((v, idx)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg\",\n                                onClick: ()=>{\n                                    updateBoard(idx);\n                                },\n                                children: boardData[idx]\n                            }, idx, false, {\n                                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alejandro/Desktop/tic-tac-toe/app/page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"9xSWWEiluTEqG/dZAsGgb9Z0RwA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQUVsQixTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLE9BQU8sb0JBQW9CO0lBQzlELE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUMzQyxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7SUFDTCxJQUFJLHFCQUFxQjtJQUV6QixNQUFNTSxjQUFjLENBQUNDO1FBQ25CLElBQUksQ0FBQ0MsU0FBUyxDQUFDRCxJQUFJLEVBQUU7WUFDbkIsSUFBSUUsUUFBUVAsVUFBVSxPQUFPLE1BQU07WUFDbkNRLGFBQWE7Z0JBQUUsR0FBR0YsU0FBUztnQkFBRSxDQUFDRCxJQUFJLEVBQUVFO1lBQU07WUFDMUNOLFNBQVMsQ0FBQ0Q7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ0M7c0NBQUdaLFVBQVUsT0FBTyxXQUFXOzs7Ozs7Ozs7OztrQ0FFbEMsOERBQUNTO3dCQUFJRSxXQUFVO2tDQUNaOytCQUFJRSxNQUFNO3lCQUFHLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHVjs0QkFDckIscUJBQ0UsOERBQUNJO2dDQUVDRSxXQUFVO2dDQUNWSyxTQUFTO29DQUNQWixZQUFZQztnQ0FDZDswQ0FFQ0MsU0FBUyxDQUFDRCxJQUFJOytCQU5WQTs7Ozs7d0JBU1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBL0N3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3hUdXJuLCBzZXRYVHVybl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gc3RhdGUgb2YgdGhlIHR1cm5cbiAgY29uc3QgW2JvYXJkU3RhdGUsIHNldEJvYXJkU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIDA6IFwiXCIsXG4gICAgMTogXCJcIixcbiAgICAyOiBcIlwiLFxuICAgIDM6IFwiXCIsXG4gICAgNDogXCJcIixcbiAgICA1OiBcIlwiLFxuICAgIDY6IFwiXCIsXG4gICAgNzogXCJcIixcbiAgICA4OiBcIlwiLFxuICB9KTsgLy8gc3RhdGUgb2YgZWFjaCBjZWxsXG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAoaWR4KSA9PiB7XG4gICAgaWYgKCFib2FyZERhdGFbaWR4XSkge1xuICAgICAgbGV0IHZhbHVlID0geFR1cm4gPT09IHRydWUgPyBcIlhcIiA6IFwiT1wiO1xuICAgICAgc2V0Qm9hcmREYXRhKHsgLi4uYm9hcmREYXRhLCBbaWR4XTogdmFsdWUgfSk7XG4gICAgICBzZXRYVHVybigheFR1cm4pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGljIFRhYyBUb2U8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICA8cD57eFR1cm4gPT09IHRydWUgPyBcIlggVHVyblwiIDogXCJPIFR1cm5cIn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMywxZnIpXSBnYXAtMlwiPlxuICAgICAgICAgIHtbLi4uQXJyYXkoOSldLm1hcCgodiwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNlZWVdIHNoYWRvdy1bMHB4XzRweF8jZGRkXSB0ZXh0LWNlbnRlciB0ZXh0LVs2NHB4XSBsZWFkaW5nLVsxMDBweF0gZm9udC1bYm9sZF0gdy1bMTAwcHhdIGgtWzEwMHB4XSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZChpZHgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Ym9hcmREYXRhW2lkeF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJ4VHVybiIsInNldFhUdXJuIiwiYm9hcmRTdGF0ZSIsInNldEJvYXJkU3RhdGUiLCJ1cGRhdGVCb2FyZCIsImlkeCIsImJvYXJkRGF0YSIsInZhbHVlIiwic2V0Qm9hcmREYXRhIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJwIiwiQXJyYXkiLCJtYXAiLCJ2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});