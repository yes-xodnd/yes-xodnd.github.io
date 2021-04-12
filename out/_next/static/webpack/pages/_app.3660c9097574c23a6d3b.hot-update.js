webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/ButtonScrollUp.js":
/*!******************************************!*\
  !*** ./src/components/ButtonScrollUp.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonScrollUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/debounce */ "./src/lib/debounce.js");

var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\ButtonScrollUp.js";


function ButtonScrollUp() {
  var clickHandler = function clickHandler() {
    scrollTo(0, 0);
  };

  var scrollHandler = Object(_lib_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(function (e) {
    var target = e.target;
    target.visibility = (getComputedStyle(target).visibility = 'visible') ? 'hidden' : 'visible';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    onClick: clickHandler,
    onScroll: scrollHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
_c = ButtonScrollUp;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ButtonScrollUp__Button",
  componentId: "sc-1ue24uv-0"
})(["position:fixed;right:3rem;bottom:3rem;width:2rem;height:2rem;border-radius:2px;border:1px solid black;background:white;visibility:visible;transition:200ms;&:hover{cursor:pointer;}"]);
_c2 = Button;

var _c, _c2;

$RefreshReg$(_c, "ButtonScrollUp");
$RefreshReg$(_c2, "Button");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiQnV0dG9uU2Nyb2xsVXAiLCJjbGlja0hhbmRsZXIiLCJzY3JvbGxUbyIsInNjcm9sbEhhbmRsZXIiLCJkZWJvdW5jZSIsImUiLCJ0YXJnZXQiLCJ2aXNpYmlsaXR5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFFdkMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsWUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBR0MsNkRBQVEsQ0FBQyxVQUFBQyxDQUFDLEVBQUk7QUFBQSxRQUMxQkMsTUFEMEIsR0FDZkQsQ0FEZSxDQUMxQkMsTUFEMEI7QUFFbENBLFVBQU0sQ0FBQ0MsVUFBUCxHQUFvQixDQUFDQyxnQkFBZ0IsQ0FBQ0YsTUFBRCxDQUFoQixDQUF5QkMsVUFBekIsR0FBc0MsU0FBdkMsSUFDQSxRQURBLEdBRUEsU0FGcEI7QUFHRCxHQUw2QixDQUE5QjtBQU9BLHNCQUNFLHFFQUFDLE1BQUQ7QUFDRSxXQUFPLEVBQUVOLFlBRFg7QUFFRSxZQUFRLEVBQUVFLGFBRlo7QUFBQSwyQkFHRTtBQUFLLFNBQUcsRUFBQywwQkFBVDtBQUFvQyxTQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO0tBcEJ1QkgsYztBQXNCeEIsSUFBTVMsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNjYwYzkwOTc1NzRjMjNhNmQzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL2xpYi9kZWJvdW5jZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvblNjcm9sbFVwKCkge1xyXG5cclxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxUbygwLCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSBkZWJvdW5jZShlID0+IHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlXHJcbiAgICB0YXJnZXQudmlzaWJpbGl0eSA9IChnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkudmlzaWJpbGl0eSA9ICd2aXNpYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgID8gJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgIDogJ3Zpc2libGUnXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgb25DbGljaz17Y2xpY2tIYW5kbGVyfVxyXG4gICAgICBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ljb24vdXAuc3ZnXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDNyZW07XHJcblxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7ICBcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=