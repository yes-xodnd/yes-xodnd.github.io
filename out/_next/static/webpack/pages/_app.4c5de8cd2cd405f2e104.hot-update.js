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
    console.log(isVisible);
    target.style.visibility = isVisible ? 'hidden' : 'visible';
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
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJmbiIsInQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInRvZ2dsZVZpc2libGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJ0YXJnZXQiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBa0I7QUFBQSxNQUFiQyxDQUFhLHVFQUFULElBQVM7QUFDakMsTUFBSUMsS0FBSjtBQUNBLFNBQU8sWUFBTTtBQUNYLFFBQUlBLEtBQUosRUFBV0MsWUFBWSxDQUFDRCxLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRSxVQUFVLENBQUNKLEVBQUQsRUFBS0MsQ0FBTCxDQUFsQjtBQUNELEdBSEQ7QUFJRCxDQU5EOztBQVFlLFNBQVNJLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHVixRQUFRLENBQUNXLGFBQUQsQ0FBN0I7QUFDQUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEUsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxZQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUwsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1NLE1BQU0sR0FBR1YsU0FBUyxDQUFDVyxPQUF6QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsZ0JBQWdCLENBQUNILE1BQUQsQ0FBaEIsQ0FBeUJJLFVBQXpCLEtBQXdDLFNBQTFEO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaO0FBQ0FGLFVBQU0sQ0FBQ08sS0FBUCxDQUFhSCxVQUFiLEdBQTBCRixTQUFTLEdBQUcsUUFBSCxHQUFjLFNBQWpEO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRSxxRUFBQyxNQUFEO0FBQ0UsT0FBRyxFQUFFWixTQURQO0FBRUUsV0FBTyxFQUFFUSxXQUZYO0FBR0UsWUFBUSxFQUFFSixhQUhaO0FBQUEsMkJBSUU7QUFBSyxTQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0EvQnVCTCxjOztLQUFBQSxjO0FBaUN4QixJQUFNbUIsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40YzVkZThjZDJjZDQwNWYyZTEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBkZWJvdW5jZSA9IChmbiwgdCA9IDEwMDApID0+IHtcclxuICBsZXQgdGltZXJcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIHQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TY3JvbGxVcCgpIHtcclxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IGRlYm91bmNlKHRvZ2dsZVZpc2libGUpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uUmVmLmN1cnJlbnRcclxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS52aXNpYmlsaXR5ID09PSAndmlzaWJsZSdcclxuICAgIGNvbnNvbGUubG9nKGlzVmlzaWJsZSkgIFxyXG4gICAgdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgcmVmPXtidXR0b25SZWZ9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICBvblNjcm9sbD17dG9nZ2xlVmlzaWJsZX0+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ljb24vdXAuc3ZnXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDNyZW07XHJcblxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7ICBcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=