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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/debounce */ "./src/lib/debounce.js");


var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\ButtonScrollUp.js",
    _s = $RefreshSig$();




function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var handleClick = function handleClick() {
    scrollTo(0, 0);
  };

  var handleScroll = Object(_lib_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    var target = buttonRef.current;
    if (!target) return;
    console.log(target);
    target.visibility = (getComputedStyle(target).visibility = 'visible') ? 'hidden' : 'visible';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    ref: buttonRef,
    onClick: handleClick,
    onScroll: handleScroll,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(ButtonScrollUp, "PyOyHPIzTUj62NAf35stQiG1Ma8=");

_c = ButtonScrollUp;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiQnV0dG9uU2Nyb2xsVXAiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJkZWJvdW5jZSIsInRhcmdldCIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwidmlzaWJpbGl0eSIsImdldENvbXB1dGVkU3R5bGUiLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUN2QyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxZQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUgsWUFBWSxHQUFHSSw2REFBUSxDQUFDLFlBQU07QUFDbEMsUUFBTUMsTUFBTSxHQUFHVixTQUFTLENBQUNXLE9BQXpCO0FBQ0EsUUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFFYkUsV0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQUEsVUFBTSxDQUFDSSxVQUFQLEdBQW9CLENBQUNDLGdCQUFnQixDQUFDTCxNQUFELENBQWhCLENBQXlCSSxVQUF6QixHQUFzQyxTQUF2QyxJQUNBLFFBREEsR0FFQSxTQUZwQjtBQUdELEdBUjRCLENBQTdCO0FBVUEsc0JBQ0UscUVBQUMsTUFBRDtBQUNFLE9BQUcsRUFBRWQsU0FEUDtBQUVFLFdBQU8sRUFBRU8sV0FGWDtBQUdFLFlBQVEsRUFBRUYsWUFIWjtBQUFBLDJCQUlFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBakN1Qk4sYzs7S0FBQUEsYztBQW1DeEIsSUFBTWlCLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSwyTEFBWjtNQUFNRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzljZWU3ZTEyYWEwYmFhNWU2ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vbGliL2RlYm91bmNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2Nyb2xsVXAoKSB7XHJcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBidXR0b25SZWYuY3VycmVudFxyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVyblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhcmdldClcclxuICAgIHRhcmdldC52aXNpYmlsaXR5ID0gKGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAndmlzaWJsZSdcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICByZWY9e2J1dHRvblJlZn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pY29uL3VwLnN2Z1wiIGFsdD1cIlwiLz5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDNyZW07XHJcbiAgYm90dG9tOiAzcmVtO1xyXG5cclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlOyAgXHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9