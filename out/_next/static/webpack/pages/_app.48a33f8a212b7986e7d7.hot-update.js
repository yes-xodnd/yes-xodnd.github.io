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
    console.log(toggle);
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
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsidGhyb3R0bGUiLCJmbiIsIm9wdGlvbnMiLCJvbkluaXQiLCJ0IiwidGltZXIiLCJlIiwic2V0VGltZW91dCIsIkJ1dHRvblNjcm9sbFVwIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwidG9nZ2xlVmlzaWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGUiLCJ0YXJnZXQiLCJjdXJyZW50IiwiaXNWaXNpYmxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInZpc2liaWxpdHkiLCJzdHlsZSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRCxFQUE4QztBQUFBLE1BQXpDQyxPQUF5Qyx1RUFBL0I7QUFBRUMsVUFBTSxFQUFFLEtBQVY7QUFBaUJDLEtBQUMsRUFBRTtBQUFwQixHQUErQjtBQUM3RCxNQUFJQyxLQUFKO0FBQ0EsU0FBTyxVQUFBQyxDQUFDLEVBQUk7QUFDVixRQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLFVBQUlILE9BQU8sQ0FBQ0MsTUFBWixFQUFvQkYsRUFBRSxDQUFDSyxDQUFELENBQUY7QUFDcEJELFdBQUssR0FBR0UsVUFBVSxDQUFDLFlBQU07QUFDdkJOLFVBQUUsQ0FBQ0ssQ0FBRCxDQUFGO0FBQ0FELGFBQUssR0FBRyxJQUFSO0FBQ0QsT0FIaUIsRUFHZkgsT0FBTyxDQUFDRSxDQUhPLENBQWxCO0FBSUQ7QUFDRixHQVJEO0FBU0QsQ0FYRDs7QUFhZSxTQUFTSSxjQUFULEdBQTBCO0FBQUE7O0FBQ3ZDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFlBQVksR0FBR1osUUFBUSxDQUFDYSxhQUFELEVBQWdCO0FBQUVWLFlBQU0sRUFBRTtBQUFWLEtBQWhCLENBQTdCO0FBQ0FXLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hFLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNKLFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsWUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1MLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQk0sV0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFDQSxRQUFNQyxNQUFNLEdBQUdiLFNBQVMsQ0FBQ2MsT0FBekI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLGdCQUFnQixDQUFDSCxNQUFELENBQWhCLENBQXlCSSxVQUF6QixLQUF3QyxTQUExRDtBQUNBSixVQUFNLENBQUNLLEtBQVAsQ0FBYUQsVUFBYixHQUEwQkYsU0FBUyxHQUFHLFFBQUgsR0FBYyxTQUFqRDtBQUNELEdBTEQ7O0FBT0Esc0JBQ0UscUVBQUMsTUFBRDtBQUFRLE9BQUcsRUFBRWYsU0FBYjtBQUF3QixXQUFPLEVBQUVRLFdBQWpDO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0E1QnVCVCxjOztLQUFBQSxjO0FBOEJ4QixJQUFNb0IsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40OGEzM2Y4YTIxMmI3OTg2ZTdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCB0aHJvdHRsZSA9IChmbiwgb3B0aW9ucyA9IHsgb25Jbml0OiBmYWxzZSwgdDogMzAwMCB9KSA9PiB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuIGUgPT4ge1xyXG4gICAgaWYgKCF0aW1lcikge1xyXG4gICAgICBpZiAob3B0aW9ucy5vbkluaXQpIGZuKGUpXHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZm4oZSlcclxuICAgICAgICB0aW1lciA9IG51bGxcclxuICAgICAgfSwgb3B0aW9ucy50KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2Nyb2xsVXAoKSB7XHJcbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSB0aHJvdHRsZSh0b2dnbGVWaXNpYmxlLCB7IG9uSW5pdDogdHJ1ZSB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRvZ2dsZSlcclxuICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvblJlZi5jdXJyZW50XHJcbiAgICBjb25zdCBpc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnXHJcbiAgICB0YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9IGlzVmlzaWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiByZWY9e2J1dHRvblJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pY29uL3VwLnN2Z1wiIGFsdD1cIlwiLz5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDNyZW07XHJcbiAgYm90dG9tOiAzcmVtO1xyXG5cclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlOyAgXHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9