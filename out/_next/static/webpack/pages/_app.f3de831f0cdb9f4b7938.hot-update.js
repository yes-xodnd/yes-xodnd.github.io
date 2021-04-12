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
  var timer = null;
  console.log(options);
  return function (e) {
    if (!timer) {
      console.log(timer);
      timer = setTimeout(function () {
        fn(e);
        timer = null;
      }, 3000);
      console.log(timer);
    }
  };
};

function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  throttle();
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
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsidGhyb3R0bGUiLCJmbiIsIm9wdGlvbnMiLCJvbkluaXQiLCJ0IiwidGltZXIiLCJjb25zb2xlIiwibG9nIiwiZSIsInNldFRpbWVvdXQiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInRvZ2dsZVZpc2libGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJ0YXJnZXQiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJzdHlsZSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRCxFQUE4QztBQUFBLE1BQXpDQyxPQUF5Qyx1RUFBL0I7QUFBRUMsVUFBTSxFQUFFLEtBQVY7QUFBaUJDLEtBQUMsRUFBRTtBQUFwQixHQUErQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUcsSUFBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWjtBQUNBLFNBQU8sVUFBQU0sQ0FBQyxFQUFJO0FBQ1YsUUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUEsV0FBSyxHQUFHSSxVQUFVLENBQUMsWUFBTTtBQUN2QlIsVUFBRSxDQUFDTyxDQUFELENBQUY7QUFDQUgsYUFBSyxHQUFHLElBQVI7QUFDRCxPQUhpQixFQUdmLElBSGUsQ0FBbEI7QUFJQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBVEQ7QUFVRCxDQWJEOztBQWVlLFNBQVNLLGNBQVQsR0FBMEI7QUFBQTs7QUFDdkMsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFFQVosVUFBUTtBQUVSYSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUdkLFFBQVEsQ0FBQ2UsYUFBRCxFQUFnQjtBQUFFWixZQUFNLEVBQUU7QUFBVixLQUFoQixDQUE3QjtBQUNBYSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYRSxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFlBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsUUFBTU0sTUFBTSxHQUFHVixTQUFTLENBQUNXLE9BQXpCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxnQkFBZ0IsQ0FBQ0gsTUFBRCxDQUFoQixDQUF5QkksVUFBekIsS0FBd0MsU0FBMUQ7QUFDQUosVUFBTSxDQUFDSyxLQUFQLENBQWFELFVBQWIsR0FBMEJGLFNBQVMsR0FBRyxRQUFILEdBQWMsU0FBakQ7QUFDRCxHQUpEOztBQU1BLHNCQUNFLHFFQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUVaLFNBQWI7QUFBd0IsV0FBTyxFQUFFUSxXQUFqQztBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBN0J1QlQsYzs7S0FBQUEsYztBQStCeEIsSUFBTWlCLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSwyTEFBWjtNQUFNRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjNkZTgzMWYwY2RiOWY0Yjc5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgdGhyb3R0bGUgPSAoZm4sIG9wdGlvbnMgPSB7IG9uSW5pdDogZmFsc2UsIHQ6IDMwMDAgfSkgPT4ge1xyXG4gIGxldCB0aW1lciA9IG51bGxcclxuICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gIHJldHVybiBlID0+IHtcclxuICAgIGlmICghdGltZXIpIHtcclxuICAgICAgY29uc29sZS5sb2codGltZXIpXHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZm4oZSlcclxuICAgICAgICB0aW1lciA9IG51bGxcclxuICAgICAgfSwgMzAwMClcclxuICAgICAgY29uc29sZS5sb2codGltZXIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TY3JvbGxVcCgpIHtcclxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdGhyb3R0bGUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdGhyb3R0bGUodG9nZ2xlVmlzaWJsZSwgeyBvbkluaXQ6IHRydWUgfSlcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxUbygwLCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBidXR0b25SZWYuY3VycmVudFxyXG4gICAgY29uc3QgaXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJ1xyXG4gICAgdGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSBpc1Zpc2libGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gcmVmPXtidXR0b25SZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaWNvbi91cC5zdmdcIiBhbHQ9XCJcIi8+XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAzcmVtO1xyXG4gIGJvdHRvbTogM3JlbTtcclxuXHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgIFxyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==