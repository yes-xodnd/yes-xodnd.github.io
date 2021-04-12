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

    if (getComputedStyle(target).visibility = 'visible') {
      target.visibility = 'hidden';
    } else {
      target.visibility = 'visible';
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    onClick: clickHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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

/***/ }),

/***/ "./src/lib/debounce.js":
/*!*****************************!*\
  !*** ./src/lib/debounce.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timer;
  return function (e) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      return fn(e);
    }, t);
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZGVib3VuY2UuanMiXSwibmFtZXMiOlsiQnV0dG9uU2Nyb2xsVXAiLCJjbGlja0hhbmRsZXIiLCJzY3JvbGxUbyIsInNjcm9sbEhhbmRsZXIiLCJkZWJvdW5jZSIsImUiLCJ0YXJnZXQiLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImZuIiwidCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFFdkMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsWUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBR0MsNkRBQVEsQ0FBQyxVQUFBQyxDQUFDLEVBQUk7QUFBQSxRQUMxQkMsTUFEMEIsR0FDZkQsQ0FEZSxDQUMxQkMsTUFEMEI7O0FBRWxDLFFBQUlDLGdCQUFnQixDQUFDRCxNQUFELENBQWhCLENBQXlCRSxVQUF6QixHQUFzQyxTQUExQyxFQUFxRDtBQUNuREYsWUFBTSxDQUFDRSxVQUFQLEdBQW9CLFFBQXBCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLFlBQU0sQ0FBQ0UsVUFBUCxHQUFvQixTQUFwQjtBQUNEO0FBQ0YsR0FQNkIsQ0FBOUI7QUFVQSxzQkFDRSxxRUFBQyxNQUFEO0FBQVEsV0FBTyxFQUFFUCxZQUFqQjtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7S0FyQnVCRCxjO0FBdUJ4QixJQUFNUyxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsMkxBQVo7TUFBTUYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQk47QUFBQTtBQUFlLFNBQVNMLFFBQVQsQ0FBa0JRLEVBQWxCLEVBQWdDO0FBQUEsTUFBVkMsQ0FBVSx1RUFBTixJQUFNO0FBQzdDLE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFULENBQUMsRUFBSTtBQUNWLFFBQUlTLEtBQUosRUFBV0MsWUFBWSxDQUFDRCxLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRSxVQUFVLENBQUM7QUFBQSxhQUFNSixFQUFFLENBQUNQLENBQUQsQ0FBUjtBQUFBLEtBQUQsRUFBY1EsQ0FBZCxDQUFsQjtBQUNELEdBSEQ7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU1ZjZhMmY3NzJlNTEwMzE4OTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vbGliL2RlYm91bmNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2Nyb2xsVXAoKSB7XHJcblxyXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IGRlYm91bmNlKGUgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcclxuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkudmlzaWJpbGl0eSA9ICd2aXNpYmxlJykge1xyXG4gICAgICB0YXJnZXQudmlzaWJpbGl0eSA9ICdoaWRkZW4nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXQudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9ID5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4sIHQgPSAxMDAwKSB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuIGUgPT4ge1xyXG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gZm4oZSksIHQpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==