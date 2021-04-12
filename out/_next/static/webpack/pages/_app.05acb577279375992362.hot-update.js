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


var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\ButtonScrollUp.js",
    _s = $RefreshSig$();




var debounce = function debounce(fn) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, t);
  };
};

function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleScroll = debounce(toggleVisible);
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var handleClick = function handleClick() {
    scrollTo(0, 0);
  };

  var toggleVisible = function toggleVisible() {
    var target = buttonRef.current;
    var isVisible = getComputedStyle(target).visibility === 'visible';
    target.visibility = isVisible ? 'hidden' : 'visible';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    ref: buttonRef,
    onClick: handleClick,
    onScroll: toggleVisible,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJmbiIsInQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInRvZ2dsZVZpc2libGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJ0YXJnZXQiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBa0I7QUFBQSxNQUFiQyxDQUFhLHVFQUFULElBQVM7QUFDakMsTUFBSUMsS0FBSjtBQUNBLFNBQU8sWUFBTTtBQUNYLFFBQUlBLEtBQUosRUFBV0MsWUFBWSxDQUFDRCxLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRSxVQUFVLENBQUNKLEVBQUQsRUFBS0MsQ0FBTCxDQUFsQjtBQUNELEdBSEQ7QUFJRCxDQU5EOztBQVFlLFNBQVNJLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHVixRQUFRLENBQUNXLGFBQUQsQ0FBN0I7QUFDQUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEUsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxZQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUwsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1NLE1BQU0sR0FBR1YsU0FBUyxDQUFDVyxPQUF6QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsZ0JBQWdCLENBQUNILE1BQUQsQ0FBaEIsQ0FBeUJJLFVBQXpCLEtBQXdDLFNBQTFEO0FBQ0FKLFVBQU0sQ0FBQ0ksVUFBUCxHQUFvQkYsU0FBUyxHQUFHLFFBQUgsR0FBYyxTQUEzQztBQUNELEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsTUFBRDtBQUNFLE9BQUcsRUFBRVosU0FEUDtBQUVFLFdBQU8sRUFBRVEsV0FGWDtBQUdFLFlBQVEsRUFBRUosYUFIWjtBQUFBLDJCQUlFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBOUJ1QkwsYzs7S0FBQUEsYztBQWdDeEIsSUFBTWdCLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSwyTEFBWjtNQUFNRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDVhY2I1NzcyNzkzNzU5OTIzNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgZGVib3VuY2UgPSAoZm4sIHQgPSAxMDAwKSA9PiB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZuLCB0KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2Nyb2xsVXAoKSB7XHJcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSBkZWJvdW5jZSh0b2dnbGVWaXNpYmxlKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvblJlZi5jdXJyZW50XHJcbiAgICBjb25zdCBpc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnXHJcbiAgICB0YXJnZXQudmlzaWJpbGl0eSA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICByZWY9e2J1dHRvblJlZn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIG9uU2Nyb2xsPXt0b2dnbGVWaXNpYmxlfT5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==