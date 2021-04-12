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
      console.log(timer);
      timer = null;
      console.log(timer);
    }, t);
  };
};

var throttle = function throttle() {
  var timer;
  return function (e) {
    if (timer) return;
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
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJvbkluaXQiLCJvblRpbWVyRW5kIiwidCIsInRpbWVyIiwiZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwidGhyb3R0bGUiLCJCdXR0b25TY3JvbGxVcCIsImJ1dHRvblJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImhpZGVCdXR0b24iLCJzaG93QnV0dG9uIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsInNjcm9sbFRvIiwiY3VycmVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQWtDO0FBQUEsTUFBYkMsQ0FBYSx1RUFBVCxJQUFTO0FBQ2pELE1BQUlDLEtBQUo7QUFDQSxTQUFPLFVBQUFDLENBQUMsRUFBSTtBQUNWLFFBQUksQ0FBQ0QsS0FBTCxFQUFZSCxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUNaLFFBQUlELEtBQUosRUFBV0UsWUFBWSxDQUFDRixLQUFELENBQVo7QUFDWEEsU0FBSyxHQUFHRyxVQUFVLENBQUMsWUFBTTtBQUN2QkwsZ0JBQVUsQ0FBQ0csQ0FBRCxDQUFWO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0FBLFdBQUssR0FBRyxJQUFSO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0QsS0FMaUIsRUFLZkQsQ0FMZSxDQUFsQjtBQU1ELEdBVEQ7QUFVRCxDQVpEOztBQWNBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBSU4sS0FBSjtBQUNBLFNBQU8sVUFBQUMsQ0FBQyxFQUFJO0FBQ1YsUUFBSUQsS0FBSixFQUFXO0FBRVosR0FIRDtBQUlELENBTkQ7O0FBUWUsU0FBU08sY0FBVCxHQUEwQjtBQUFBOztBQUN2QyxNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUdmLFFBQVEsQ0FBQ2dCLFVBQUQsRUFBYUMsVUFBYixFQUF5QixHQUF6QixDQUE3QjtBQUNBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYRyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQztBQUNELEtBRkQ7QUFHRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFlBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTCxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1MLFNBQVMsQ0FBQ1csT0FBVixDQUFrQkMsS0FBbEIsQ0FBd0JDLFVBQXhCLEdBQXFDLFNBQTNDO0FBQUEsR0FBbkI7O0FBQ0EsTUFBTVQsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNSixTQUFTLENBQUNXLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCQyxVQUF4QixHQUFxQyxRQUEzQztBQUFBLEdBQW5COztBQUVBLHNCQUNFLHFFQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUViLFNBQWI7QUFBd0IsV0FBTyxFQUFFUyxXQUFqQztBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFDLDBCQUFUO0FBQW9DLFNBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBeEJ1QlYsYzs7S0FBQUEsYztBQTBCeEIsSUFBTWUsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJMQUFaO01BQU1GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41YTU3YzEyZDZjNGJlYjU3ZTg1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBkZWJvdW5jZSA9IChvbkluaXQsIG9uVGltZXJFbmQsIHQgPSAxMDAwKSA9PiB7XHJcbiAgbGV0IHRpbWVyXHJcbiAgcmV0dXJuIGUgPT4ge1xyXG4gICAgaWYgKCF0aW1lcikgb25Jbml0KGUpXHJcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcilcclxuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uVGltZXJFbmQoZSlcclxuICAgICAgY29uc29sZS5sb2codGltZXIpICAgICAgXHJcbiAgICAgIHRpbWVyID0gbnVsbFxyXG4gICAgICBjb25zb2xlLmxvZyh0aW1lcikgICAgICAgICAgICBcclxuICAgIH0sIHQpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB0aHJvdHRsZSA9ICgpID0+IHtcclxuICBsZXQgdGltZXJcclxuICByZXR1cm4gZSA9PiB7XHJcbiAgICBpZiAodGltZXIpIHJldHVyblxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25TY3JvbGxVcCgpIHtcclxuICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IGRlYm91bmNlKGhpZGVCdXR0b24sIHNob3dCdXR0b24sIDMwMClcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGxUbygwLCAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dCdXR0b24gPSAoKSA9PiBidXR0b25SZWYuY3VycmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXHJcbiAgY29uc3QgaGlkZUJ1dHRvbiA9ICgpID0+IGJ1dHRvblJlZi5jdXJyZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiByZWY9e2J1dHRvblJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pY29uL3VwLnN2Z1wiIGFsdD1cIlwiLz5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDNyZW07XHJcbiAgYm90dG9tOiAzcmVtO1xyXG5cclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlOyAgXHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9