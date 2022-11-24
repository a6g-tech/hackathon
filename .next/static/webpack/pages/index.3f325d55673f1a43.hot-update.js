/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./models/adapters/lens.ts":
/*!*********************************!*\
  !*** ./models/adapters/lens.ts ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./models/profiles.tsx":
/*!*****************************!*\
  !*** ./models/profiles.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileType\": function() { return /* binding */ ProfileType; },\n/* harmony export */   \"profileTypeToAdapterMap\": function() { return /* binding */ profileTypeToAdapterMap; },\n/* harmony export */   \"useProfiles\": function() { return /* binding */ useProfiles; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _adapters_lens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapters/lens */ \"./models/adapters/lens.ts\");\n/* harmony import */ var _adapters_lens__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adapters_lens__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nvar ProfileType;\n(function(ProfileType) {\n    ProfileType[\"lens\"] = \"lens\";\n    ProfileType[\"cc\"] = \"cc\";\n})(ProfileType || (ProfileType = {}));\nconst profileTypeToAdapterMap = {\n    [ProfileType.lens]: (_adapters_lens__WEBPACK_IMPORTED_MODULE_1___default())\n};\nconst useProfiles = (props)=>{\n    _s();\n    const [profiles, setProfiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const refetch = ()=>{\n        props.activeProfileTypes.map((activeProfileType)=>profileTypeToAdapterMap[activeProfileType].getProfiles());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    // props.enabled && refetch;\n    }, []);\n    return {\n        refetch,\n        profiles\n    };\n};\n_s(useProfiles, \"U6ddyJEDNWmntgnrXHeW1rXvb3s=\");\nuseProfiles.defaultProps = {\n    enabled: true,\n    activeProfileTypes: [\n        ProfileType.lens,\n        ProfileType.cc\n    ]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useProfiles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvcHJvZmlsZXMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNUO0lBSW5DO1VBQUtJLFdBQVc7SUFBWEEsWUFDVkMsVUFBQUE7SUFEVUQsWUFFVkUsUUFBQUE7R0FGVUYsZ0JBQUFBO0FBU0wsTUFBTUcsMEJBQTBCO0lBQ3JDLENBQUNILFlBQVlDLElBQUksQ0FBQyxFQUFFRix1REFBV0E7QUFFakMsRUFBRTtBQVFLLE1BQU1LLGNBQWMsQ0FBQ0MsUUFBa0I7O0lBQzVDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBYSxFQUFFO0lBRXZELE1BQU1VLFVBQVUsSUFBTTtRQUNwQkgsTUFBTUksa0JBQWtCLENBQUVDLEdBQUcsQ0FBQyxDQUFDQyxvQkFDN0JSLHVCQUF1QixDQUFDUSxrQkFBa0IsQ0FBQ0MsV0FBVztJQUUxRDtJQUVBZixnREFBU0EsQ0FBQyxJQUFNO0lBQ2QsNEJBQTRCO0lBQzlCLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFDTFc7UUFDQUY7SUFDRjtBQUNGLEVBQUU7R0FqQldGO0FBbUJiQSxZQUFZUyxZQUFZLEdBQUc7SUFDekJDLFNBQVMsSUFBSTtJQUNiTCxvQkFBb0I7UUFBQ1QsWUFBWUMsSUFBSTtRQUFFRCxZQUFZRSxFQUFFO0tBQUM7QUFDeEQ7QUFFQSwrREFBZUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2RlbHMvcHJvZmlsZXMudHN4PzAwMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMZW5zQWRhcHRlciBmcm9tIFwiLi9hZGFwdGVycy9sZW5zXCI7XG5pbXBvcnQgQ0NBcGkgZnJvbSBcIi4uL2FwaS9jY1wiO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gXCJAd2FnbWkvY29yZS9kaXN0L2RlY2xhcmF0aW9ucy9zcmMvdHlwZXNcIjtcblxuZXhwb3J0IGVudW0gUHJvZmlsZVR5cGUge1xuICBsZW5zID0gXCJsZW5zXCIsXG4gIGNjID0gXCJjY1wiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9maWxlIHtcbiAgdHlwZTogUHJvZmlsZVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlVHlwZVRvQWRhcHRlck1hcCA9IHtcbiAgW1Byb2ZpbGVUeXBlLmxlbnNdOiBMZW5zQWRhcHRlcixcbiAgLy8gICBbUHJvZmlsZVR5cGUuY2NdOiBDQ0FwaSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgYWRkcmVzczogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgYWN0aXZlUHJvZmlsZVR5cGVzPzogUHJvZmlsZVR5cGVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVByb2ZpbGVzID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW3Byb2ZpbGVzLCBzZXRQcm9maWxlc10gPSB1c2VTdGF0ZTxJUHJvZmlsZVtdPihbXSk7XG5cbiAgY29uc3QgcmVmZXRjaCA9ICgpID0+IHtcbiAgICBwcm9wcy5hY3RpdmVQcm9maWxlVHlwZXMhLm1hcCgoYWN0aXZlUHJvZmlsZVR5cGUpID0+XG4gICAgICBwcm9maWxlVHlwZVRvQWRhcHRlck1hcFthY3RpdmVQcm9maWxlVHlwZV0uZ2V0UHJvZmlsZXMoKVxuICAgICk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBwcm9wcy5lbmFibGVkICYmIHJlZmV0Y2g7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ge1xuICAgIHJlZmV0Y2gsXG4gICAgcHJvZmlsZXMsXG4gIH07XG59O1xuXG51c2VQcm9maWxlcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGVuYWJsZWQ6IHRydWUsXG4gIGFjdGl2ZVByb2ZpbGVUeXBlczogW1Byb2ZpbGVUeXBlLmxlbnMsIFByb2ZpbGVUeXBlLmNjXSxcbn0gYXMgSVByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VQcm9maWxlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGVuc0FkYXB0ZXIiLCJQcm9maWxlVHlwZSIsImxlbnMiLCJjYyIsInByb2ZpbGVUeXBlVG9BZGFwdGVyTWFwIiwidXNlUHJvZmlsZXMiLCJwcm9wcyIsInByb2ZpbGVzIiwic2V0UHJvZmlsZXMiLCJyZWZldGNoIiwiYWN0aXZlUHJvZmlsZVR5cGVzIiwibWFwIiwiYWN0aXZlUHJvZmlsZVR5cGUiLCJnZXRQcm9maWxlcyIsImRlZmF1bHRQcm9wcyIsImVuYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/profiles.tsx\n"));

/***/ })

});