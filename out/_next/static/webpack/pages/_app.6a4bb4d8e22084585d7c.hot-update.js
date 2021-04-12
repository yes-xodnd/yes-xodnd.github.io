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
    window.addEventListener('scroll', toggleVisible);
    return function () {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  var handleClick = function handleClick() {
    scrollTo(0, 0);
  };

  var toggleVisible = function toggleVisible() {
    var target = buttonRef.current;
    console.log(getComputedStyle(target)); // if (getComputedStyle(target).visibility = 'visible') {
    //   target.visibility = 'hidden'
    // } else {
    // }
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
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJmbiIsInQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVWaXNpYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJ0YXJnZXQiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImdldENvbXB1dGVkU3R5bGUiLCJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQsRUFBa0I7QUFBQSxNQUFiQyxDQUFhLHVFQUFULElBQVM7QUFDakMsTUFBSUMsS0FBSjtBQUNBLFNBQU8sWUFBTTtBQUNYLFFBQUlBLEtBQUosRUFBV0MsWUFBWSxDQUFDRCxLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRSxVQUFVLENBQUNKLEVBQUQsRUFBS0MsQ0FBTCxDQUFsQjtBQUNELEdBSEQ7QUFJRCxDQU5EOztBQVFlLFNBQVNJLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsWUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1ILGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFNSSxNQUFNLEdBQUdULFNBQVMsQ0FBQ1UsT0FBekI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQUFnQixDQUFDSixNQUFELENBQTVCLEVBRjBCLENBSTFCO0FBQ0E7QUFDQTtBQUVBO0FBQ0QsR0FURDs7QUFXQSxzQkFDRSxxRUFBQyxNQUFEO0FBQ0UsT0FBRyxFQUFFVCxTQURQO0FBRUUsV0FBTyxFQUFFTyxXQUZYO0FBR0UsWUFBUSxFQUFFRixhQUhaO0FBQUEsMkJBSUU7QUFBSyxTQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0FsQ3VCTixjOztLQUFBQSxjO0FBb0N4QixJQUFNZSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsMkxBQVo7TUFBTUYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZhNGJiNGQ4ZTIyMDg0NTg1ZDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IGRlYm91bmNlID0gKGZuLCB0ID0gMTAwMCkgPT4ge1xyXG4gIGxldCB0aW1lclxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHRpbWVyID0gc2V0VGltZW91dChmbiwgdClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvblNjcm9sbFVwKCkge1xyXG4gIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2libGUpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2libGUpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uUmVmLmN1cnJlbnRcclxuICAgIGNvbnNvbGUubG9nKGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSlcclxuXHJcbiAgICAvLyBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLnZpc2liaWxpdHkgPSAndmlzaWJsZScpIHtcclxuICAgIC8vICAgdGFyZ2V0LnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICByZWY9e2J1dHRvblJlZn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIG9uU2Nyb2xsPXt0b2dnbGVWaXNpYmxlfT5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==