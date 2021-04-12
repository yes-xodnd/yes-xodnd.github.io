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




var throttle = function throttle(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    onInit: false,
    t: 1000
  };
  var timer;
  return function (e) {
    if (!timer) {
      if (options.onInit) fn(e);
      timer = setTimeout(function () {
        fn(e);
        timer = null;
      }, options.t);
    }
  };
};

function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleScroll = throttle(toggleVisible, {
      onInit: true
    });
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
    target.style.visibility = isVisible ? 'hidden' : 'visible';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    ref: buttonRef,
    onClick: handleClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsidGhyb3R0bGUiLCJmbiIsIm9wdGlvbnMiLCJvbkluaXQiLCJ0IiwidGltZXIiLCJlIiwic2V0VGltZW91dCIsIkJ1dHRvblNjcm9sbFVwIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidG9nZ2xlVmlzaWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsInRhcmdldCIsImN1cnJlbnQiLCJpc1Zpc2libGUiLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsInN0eWxlIiwiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFELEVBQThDO0FBQUEsTUFBekNDLE9BQXlDLHVFQUEvQjtBQUFFQyxVQUFNLEVBQUUsS0FBVjtBQUFpQkMsS0FBQyxFQUFFO0FBQXBCLEdBQStCO0FBQzdELE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWLFFBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1YsVUFBSUgsT0FBTyxDQUFDQyxNQUFaLEVBQW9CRixFQUFFLENBQUNLLENBQUQsQ0FBRjtBQUNwQkQsV0FBSyxHQUFHRSxVQUFVLENBQUMsWUFBTTtBQUN2Qk4sVUFBRSxDQUFDSyxDQUFELENBQUY7QUFDQUQsYUFBSyxHQUFHLElBQVI7QUFDRCxPQUhpQixFQUdmSCxPQUFPLENBQUNFLENBSE8sQ0FBbEI7QUFJRDtBQUNGLEdBUkQ7QUFTRCxDQVhEOztBQWFlLFNBQVNJLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHWixRQUFRLENBQUNhLGFBQUQsRUFBZ0I7QUFBRVYsWUFBTSxFQUFFO0FBQVYsS0FBaEIsQ0FBN0I7QUFDQVcsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDWEUsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osWUFBckM7QUFDRCxLQUZEO0FBR0QsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxZQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUwsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1NLE1BQU0sR0FBR1YsU0FBUyxDQUFDVyxPQUF6QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsZ0JBQWdCLENBQUNILE1BQUQsQ0FBaEIsQ0FBeUJJLFVBQXpCLEtBQXdDLFNBQTFEO0FBQ0FKLFVBQU0sQ0FBQ0ssS0FBUCxDQUFhRCxVQUFiLEdBQTBCRixTQUFTLEdBQUcsUUFBSCxHQUFjLFNBQWpEO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRSxxRUFBQyxNQUFEO0FBQVEsT0FBRyxFQUFFWixTQUFiO0FBQXdCLFdBQU8sRUFBRVEsV0FBakM7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBQywwQkFBVDtBQUFvQyxTQUFHLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTNCdUJULGM7O0tBQUFBLGM7QUE2QnhCLElBQU1pQixNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsMkxBQVo7TUFBTUYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkzMmQ0ZGJiMGExOTA4YTFkYTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IHRocm90dGxlID0gKGZuLCBvcHRpb25zID0geyBvbkluaXQ6IGZhbHNlLCB0OiAxMDAwIH0pID0+IHtcclxuICBsZXQgdGltZXJcclxuICByZXR1cm4gZSA9PiB7XHJcbiAgICBpZiAoIXRpbWVyKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLm9uSW5pdCkgZm4oZSlcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmbihlKVxyXG4gICAgICAgIHRpbWVyID0gbnVsbFxyXG4gICAgICB9LCBvcHRpb25zLnQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TY3JvbGxVcCgpIHtcclxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHRocm90dGxlKHRvZ2dsZVZpc2libGUsIHsgb25Jbml0OiB0cnVlIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uUmVmLmN1cnJlbnRcclxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS52aXNpYmlsaXR5ID09PSAndmlzaWJsZSdcclxuICAgIHRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gaXNWaXNpYmxlID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHJlZj17YnV0dG9uUmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ljb24vdXAuc3ZnXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDNyZW07XHJcblxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7ICBcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=