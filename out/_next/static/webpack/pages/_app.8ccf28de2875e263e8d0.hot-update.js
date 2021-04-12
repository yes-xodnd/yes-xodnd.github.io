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
    t: 3000
  };
  var timer;
  return function (e) {
    if (!timer) {
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
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsidGhyb3R0bGUiLCJmbiIsIm9wdGlvbnMiLCJvbkluaXQiLCJ0IiwidGltZXIiLCJlIiwic2V0VGltZW91dCIsIkJ1dHRvblNjcm9sbFVwIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidG9nZ2xlVmlzaWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsInRhcmdldCIsImN1cnJlbnQiLCJpc1Zpc2libGUiLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsInN0eWxlIiwiQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxFQUFELEVBQThDO0FBQUEsTUFBekNDLE9BQXlDLHVFQUEvQjtBQUFFQyxVQUFNLEVBQUUsS0FBVjtBQUFpQkMsS0FBQyxFQUFFO0FBQXBCLEdBQStCO0FBQzdELE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWLFFBQUksQ0FBQ0QsS0FBTCxFQUFZO0FBQ1ZBLFdBQUssR0FBR0UsVUFBVSxDQUFDLFlBQU07QUFDdkJOLFVBQUUsQ0FBQ0ssQ0FBRCxDQUFGO0FBQ0FELGFBQUssR0FBRyxJQUFSO0FBQ0QsT0FIaUIsRUFHZkgsT0FBTyxDQUFDRSxDQUhPLENBQWxCO0FBSUQ7QUFDRixHQVBEO0FBUUQsQ0FWRDs7QUFZZSxTQUFTSSxjQUFULEdBQTBCO0FBQUE7O0FBQ3ZDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR1osUUFBUSxDQUFDYSxhQUFELEVBQWdCO0FBQUVWLFlBQU0sRUFBRTtBQUFWLEtBQWhCLENBQTdCO0FBQ0FXLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hFLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsWUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1MLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFNTSxNQUFNLEdBQUdWLFNBQVMsQ0FBQ1csT0FBekI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLGdCQUFnQixDQUFDSCxNQUFELENBQWhCLENBQXlCSSxVQUF6QixLQUF3QyxTQUExRDtBQUNBSixVQUFNLENBQUNLLEtBQVAsQ0FBYUQsVUFBYixHQUEwQkYsU0FBUyxHQUFHLFFBQUgsR0FBYyxTQUFqRDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsTUFBRDtBQUFRLE9BQUcsRUFBRVosU0FBYjtBQUF3QixXQUFPLEVBQUVRLFdBQWpDO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0EzQnVCVCxjOztLQUFBQSxjO0FBNkJ4QixJQUFNaUIsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44Y2NmMjhkZTI4NzVlMjYzZThkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCB0aHJvdHRsZSA9IChmbiwgb3B0aW9ucyA9IHsgb25Jbml0OiBmYWxzZSwgdDogMzAwMCB9KSA9PiB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuIGUgPT4ge1xyXG4gICAgaWYgKCF0aW1lcikge1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGZuKGUpXHJcbiAgICAgICAgdGltZXIgPSBudWxsXHJcbiAgICAgIH0sIG9wdGlvbnMudClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvblNjcm9sbFVwKCkge1xyXG4gIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdGhyb3R0bGUodG9nZ2xlVmlzaWJsZSwgeyBvbkluaXQ6IHRydWUgfSlcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxUbygwLCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBidXR0b25SZWYuY3VycmVudFxyXG4gICAgY29uc3QgaXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJ1xyXG4gICAgdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gcmVmPXtidXR0b25SZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==