webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dateFormat */ "./lib/dateFormat.js");
/* harmony import */ var _styles_codeHighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/codeHighlight */ "./styles/codeHighlight.js");

var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\pages\\posts\\[slug].js";



var __N_SSG = true;
function Post(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        children: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Date, {
        children: Object(_lib_dateFormat__WEBPACK_IMPORTED_MODULE_2__["default"])(post.date)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Content, {
      dangerouslySetInnerHTML: {
        __html: post.content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
} // next

_c = Post;
// style
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "slug__Container",
  componentId: "sc-1wxmvdm-0"
})(["padding:0 2rem;"]);
_c2 = Container;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "slug__Header",
  componentId: "sc-1wxmvdm-1"
})(["border-bottom:1px solid lightgrey;padding:1rem 0;"]);
_c3 = Header;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "slug__Title",
  componentId: "sc-1wxmvdm-2"
})(["margin:0;margin-bottom:1rem;"]);
_c4 = Title;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "slug__Date",
  componentId: "sc-1wxmvdm-3"
})(["font-size:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.sm;
});
_c5 = Date;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "slug__Content",
  componentId: "sc-1wxmvdm-4"
})(["line-height:1.8rem;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}&:visited{color:", ";}}img{display:block;width:90%;margin:2rem auto;padding:1rem;border:1px solid ", "}h2{margin-top:3rem;}code:not([class]){padding:0.2rem 0.4rem;background-color:", ";border-radius:3px;}blockquote{margin:0;padding:0.5rem 1rem 0.5rem 3rem;border-left:3px solid ", ";background:", ";font-size:", ";}", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.blue;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.blue;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.lightgrey;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.lightgrey;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.green;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.lightgrey;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.sm;
}, _styles_codeHighlight__WEBPACK_IMPORTED_MODULE_3__["default"]);
_c6 = Content;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Header");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "Date");
$RefreshReg$(_c6, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsIl9faHRtbCIsImNvbnRlbnQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiSGVhZGVyIiwiZGl2IiwiVGl0bGUiLCJoMSIsIkRhdGUiLCJ0aGVtZSIsImZvbnQiLCJzbSIsIkNvbnRlbnQiLCJhcnRpY2xlIiwiY29sb3IiLCJibHVlIiwibGlnaHRncmV5IiwiZ3JlZW4iLCJjb2RlSGlnaGxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQXdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3JDLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFBLGtCQUFTQSxJQUFJLENBQUNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLGtCQUFRQywrREFBVSxDQUFDRixJQUFJLENBQUNHLElBQU47QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMsT0FBRDtBQUFTLDZCQUF1QixFQUFFO0FBQUVDLGNBQU0sRUFBRUosSUFBSSxDQUFDSztBQUFmO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEMsQ0FFRDs7S0Fad0JOLEk7QUErQ3hCO0FBQ0EsSUFBTU8sU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUFmO01BQU1GLFM7QUFJTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseURBQVo7TUFBTUQsTTtBQUtOLElBQU1FLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSxvQ0FBWDtNQUFNRCxLO0FBS04sSUFBTUUsSUFBSSxHQUFHTix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUNLO0FBQUEsTUFBR0ksS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQTFCO0FBQUEsQ0FETCxDQUFWO01BQU1ILEk7QUFLTixJQUFNSSxPQUFPLEdBQUdWLHlEQUFNLENBQUNXLE9BQVY7QUFBQTtBQUFBO0FBQUEsZ2FBSUE7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsSUFBM0I7QUFBQSxDQUpBLEVBWUU7QUFBQSxNQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsSUFBM0I7QUFBQSxDQVpGLEVBb0JXO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxLQUFOLENBQVlFLFNBQTNCO0FBQUEsQ0FwQlgsRUEyQlc7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUUsU0FBM0I7QUFBQSxDQTNCWCxFQWlDZ0I7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUcsS0FBM0I7QUFBQSxDQWpDaEIsRUFrQ0s7QUFBQSxNQUFHUixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLEtBQU4sQ0FBWUUsU0FBM0I7QUFBQSxDQWxDTCxFQW1DSTtBQUFBLE1BQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUExQjtBQUFBLENBbkNKLEVBc0NUTyw2REF0Q1MsQ0FBYjtNQUFNTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS42ODZmMzM2ODZmMzVmYjNjZTQ2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMsIGdldFBvc3RCeVNsdWcgfSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSAnLi4vLi4vbGliL21hcmtkb3duJ1xyXG5pbXBvcnQgZGF0ZUZvcm1hdCBmcm9tICcuLi8uLi9saWIvZGF0ZUZvcm1hdCdcclxuaW1wb3J0IGNvZGVIaWdobGlnaHQgZnJvbSAnLi4vLi4vc3R5bGVzL2NvZGVIaWdobGlnaHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPnsgcG9zdC50aXRsZSB9PC9UaXRsZT5cclxuICAgICAgICA8RGF0ZT57IGRhdGVGb3JtYXQocG9zdC5kYXRlKSB9PC9EYXRlPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuLy8gbmV4dFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXHJcbiAgICAndGl0bGUnLFxyXG4gICAgJ2RhdGUnLFxyXG4gICAgJ2NvbnRlbnQnLFxyXG4gIF0pXHJcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICAuLi5wb3N0LFxyXG4gICAgICAgIGNvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBvc3RzID0gZ2V0QWxsUG9zdHMoWydzbHVnJ10pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcG9zdHMubWFwKCh7IHNsdWcgfSkgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbi8vIHN0eWxlXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuYFxyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuYFxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbmBcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtIH07XHJcbiAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJsdWUgfTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ibHVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpZ2h0Z3JleSB9XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgfVxyXG4gIGNvZGU6bm90KFtjbGFzc10pIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW0gO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5saWdodGdyZXkgfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgYmxvY2txdW90ZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gM3JlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ncmVlbiB9O1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5saWdodGdyZXkgfTtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtIH07XHJcbiAgfVxyXG5cclxuICAke2NvZGVIaWdobGlnaHR9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9