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
/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/debounce */ "./src/lib/debounce.js");


var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\ButtonScrollUp.js",
    _s = $RefreshSig$();




function ButtonScrollUp() {
  _s();

  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var handleClick = function handleClick() {
    scrollTo(0, 0);
  };

  var handleScroll = Object(_lib_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    var target = buttonRef.current;
    if (!target) return;
    target.visibility = (getComputedStyle(target).visibility = 'visible') ? 'hidden' : 'visible';
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
    ref: buttonRef,
    onClick: handleClick,
    onScroll: handleScroll,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "../../assets/icon/up.svg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2Nyb2xsVXAuanMiXSwibmFtZXMiOlsiQnV0dG9uU2Nyb2xsVXAiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwic2Nyb2xsVG8iLCJkZWJvdW5jZSIsInRhcmdldCIsImN1cnJlbnQiLCJ2aXNpYmlsaXR5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3ZDLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNYRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxZQUFyQztBQUNELEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQVFBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFlBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSCxZQUFZLEdBQUdJLDZEQUFRLENBQUMsWUFBTTtBQUNsQyxRQUFNQyxNQUFNLEdBQUdWLFNBQVMsQ0FBQ1csT0FBekI7QUFDQSxRQUFJLENBQUNELE1BQUwsRUFBYTtBQUViQSxVQUFNLENBQUNFLFVBQVAsR0FBb0IsQ0FBQ0MsZ0JBQWdCLENBQUNILE1BQUQsQ0FBaEIsQ0FBeUJFLFVBQXpCLEdBQXNDLFNBQXZDLElBQ0EsUUFEQSxHQUVBLFNBRnBCO0FBR0QsR0FQNEIsQ0FBN0I7QUFTQSxzQkFDRSxxRUFBQyxNQUFEO0FBQ0UsT0FBRyxFQUFFWixTQURQO0FBRUUsV0FBTyxFQUFFTyxXQUZYO0FBR0UsWUFBUSxFQUFFRixZQUhaO0FBQUEsMkJBSUU7QUFBSyxTQUFHLEVBQUMsMEJBQVQ7QUFBb0MsU0FBRyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0FoQ3VCTixjOztLQUFBQSxjO0FBa0N4QixJQUFNZSxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsMkxBQVo7TUFBTUYsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZiYTY2MGRlYTc2OTY3NjI3YTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL2xpYi9kZWJvdW5jZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvblNjcm9sbFVwKCkge1xyXG4gIGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uUmVmLmN1cnJlbnRcclxuICAgIGlmICghdGFyZ2V0KSByZXR1cm5cclxuICAgIFxyXG4gICAgdGFyZ2V0LnZpc2liaWxpdHkgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLnZpc2liaWxpdHkgPSAndmlzaWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICd2aXNpYmxlJ1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIHJlZj17YnV0dG9uUmVmfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ljb24vdXAuc3ZnXCIgYWx0PVwiXCIvPlxyXG4gICAgPC9CdXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogM3JlbTtcclxuICBib3R0b206IDNyZW07XHJcblxyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7ICBcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=