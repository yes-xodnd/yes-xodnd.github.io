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




var debounce = function debounce(onInit, onTimerEnd) {
  var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var timer;
  return function (e) {
    if (!timer) onInit(e);
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      onTimerEnd(e);
      timer = null;
    }, t);
  };
};

function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleScroll = debounce(hideButton, showButton, 300);
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var handleClick = function handleClick() {
    scrollTo(0, 0);
  };

  var showButton = function showButton() {
    return buttonRef.current.style.visibility = 'visible';
  };

  var hideButton = function hideButton() {
    return buttonRef.current.style.visibility = 'hidden';
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    ref: buttonRef,
    onClick: handleClick,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJvbkluaXQiLCJvblRpbWVyRW5kIiwidCIsInRpbWVyIiwiZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImhpZGVCdXR0b24iLCJzaG93QnV0dG9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsInNjcm9sbFRvIiwiY3VycmVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQWtDO0FBQUEsTUFBYkMsQ0FBYSx1RUFBVCxJQUFTO0FBQ2pELE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWLFFBQUksQ0FBQ0QsS0FBTCxFQUFZSCxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUNaLFFBQUlELEtBQUosRUFBV0UsWUFBWSxDQUFDRixLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRyxVQUFVLENBQUMsWUFBTTtBQUN2QkwsZ0JBQVUsQ0FBQ0csQ0FBRCxDQUFWO0FBQ0FELFdBQUssR0FBRyxJQUFSO0FBQ0QsS0FIaUIsRUFHZkQsQ0FIZSxDQUFsQjtBQUlELEdBUEQ7QUFRRCxDQVZEOztBQVllLFNBQVNLLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHWixRQUFRLENBQUNhLFVBQUQsRUFBYUMsVUFBYixFQUF5QixHQUF6QixDQUE3QjtBQUNBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYRyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFlBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTCxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1MLFNBQVMsQ0FBQ1csT0FBVixDQUFrQkMsS0FBbEIsQ0FBd0JDLFVBQXhCLEdBQXFDLFNBQTNDO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTVQsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNSixTQUFTLENBQUNXLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCQyxVQUF4QixHQUFxQyxRQUEzQztBQUFBLEdBQW5COztBQUVBLHNCQUNFLHFFQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUViLFNBQWI7QUFBd0IsV0FBTyxFQUFFUyxXQUFqQztBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBeEJ1QlYsYzs7S0FBQUEsYztBQTBCeEIsSUFBTWUsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mZjQwMDRkM2E4NTVmZGNiOGQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBkZWJvdW5jZSA9IChvbkluaXQsIG9uVGltZXJFbmQsIHQgPSAxMDAwKSA9PiB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuIGUgPT4ge1xyXG4gICAgaWYgKCF0aW1lcikgb25Jbml0KGUpXHJcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uVGltZXJFbmQoZSlcclxuICAgICAgdGltZXIgPSBudWxsXHJcbiAgICB9LCB0KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2Nyb2xsVXAoKSB7XHJcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSBkZWJvdW5jZShoaWRlQnV0dG9uLCBzaG93QnV0dG9uLCAzMDApXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93QnV0dG9uID0gKCkgPT4gYnV0dG9uUmVmLmN1cnJlbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gIGNvbnN0IGhpZGVCdXR0b24gPSAoKSA9PiBidXR0b25SZWYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gcmVmPXtidXR0b25SZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==