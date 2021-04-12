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
})(["border-top:1px solid lightgrey;border-bottom:1px solid lightgrey;padding:1rem 0;"]);
_c3 = Header;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "slug__Title",
  componentId: "sc-1wxmvdm-2"
})(["margin:0;margin-bottom:1rem;font-size:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.lg;
});
_c4 = Title;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "slug__Date",
  componentId: "sc-1wxmvdm-3"
})(["font-size:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.sm;
});
_c5 = Date;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "slug__Content",
  componentId: "sc-1wxmvdm-4"
})(["line-height:1.8rem;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}&:visited{color:", ";}}img{display:block;width:90%;margin:2rem auto;padding:1rem;border:1px solid ", "}h2{margin-top:3rem;}code:not([class]){padding:0.2rem 0.4rem;background-color:", ";border-radius:3px;}blockquote{margin:0;padding:0.5rem 1rem 0.5rem 3rem;border-left:3px solid ", ";background:", ";font-size:", ";}", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.blue;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.blue;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.lightgrey;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.lightgrey;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.green;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.lightgrey;
}, function (_ref10) {
  var theme = _ref10.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsIl9faHRtbCIsImNvbnRlbnQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiSGVhZGVyIiwiZGl2IiwiVGl0bGUiLCJoMSIsInRoZW1lIiwiZm9udCIsImxnIiwiRGF0ZSIsInNtIiwiQ29udGVudCIsImFydGljbGUiLCJjb2xvciIsImJsdWUiLCJsaWdodGdyZXkiLCJncmVlbiIsImNvZGVIaWdobGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLE1BQUQ7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQUEsa0JBQVNBLElBQUksQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsa0JBQVFDLCtEQUFVLENBQUNGLElBQUksQ0FBQ0csSUFBTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxPQUFEO0FBQVMsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFSixJQUFJLENBQUNLO0FBQWY7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsQyxDQUVEOztLQVp3Qk4sSTtBQStDeEI7QUFDQSxJQUFNTyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE9BQVY7QUFBQTtBQUFBO0FBQUEsdUJBQWY7TUFBTUYsUztBQUlOLElBQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFBWjtNQUFNRCxNO0FBTU4sSUFBTUUsS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUdJO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQTFCO0FBQUEsQ0FISixDQUFYO01BQU1KLEs7QUFNTixJQUFNSyxJQUFJLEdBQUdULHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQ0s7QUFBQSxNQUFHRyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQU4sQ0FBV0csRUFBMUI7QUFBQSxDQURMLENBQVY7TUFBTUQsSTtBQUtOLElBQU1FLE9BQU8sR0FBR1gseURBQU0sQ0FBQ1ksT0FBVjtBQUFBO0FBQUE7QUFBQSxnYUFJQTtBQUFBLE1BQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxJQUEzQjtBQUFBLENBSkEsRUFZRTtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxJQUEzQjtBQUFBLENBWkYsRUFvQlc7QUFBQSxNQUFHUixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNPLEtBQU4sQ0FBWUUsU0FBM0I7QUFBQSxDQXBCWCxFQTJCVztBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZRSxTQUEzQjtBQUFBLENBM0JYLEVBaUNnQjtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZRyxLQUEzQjtBQUFBLENBakNoQixFQWtDSztBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sS0FBTixDQUFZRSxTQUEzQjtBQUFBLENBbENMLEVBbUNJO0FBQUEsTUFBR1QsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdHLEVBQTFCO0FBQUEsQ0FuQ0osRUFzQ1RPLDZEQXRDUyxDQUFiO01BQU1OLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLmRiNWM4ZjhkODg0MGE3Yzc4NWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0UG9zdEJ5U2x1ZyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXHJcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tICcuLi8uLi9saWIvbWFya2Rvd24nXHJcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gJy4uLy4uL2xpYi9kYXRlRm9ybWF0J1xyXG5pbXBvcnQgY29kZUhpZ2hsaWdodCBmcm9tICcuLi8uLi9zdHlsZXMvY29kZUhpZ2hsaWdodCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8VGl0bGU+eyBwb3N0LnRpdGxlIH08L1RpdGxlPlxyXG4gICAgICAgIDxEYXRlPnsgZGF0ZUZvcm1hdChwb3N0LmRhdGUpIH08L0RhdGU+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGVudCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBuZXh0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFtcclxuICAgICd0aXRsZScsXHJcbiAgICAnZGF0ZScsXHJcbiAgICAnY29udGVudCcsXHJcbiAgXSlcclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDoge1xyXG4gICAgICAgIC4uLnBvc3QsXHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnXSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHsgc2x1ZyB9KSA9PiB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuLy8gc3R5bGVcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG5gXHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LmxnIH07XHJcbmBcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtIH07XHJcbiAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICBsaW5lLWhlaWdodDogMS44cmVtO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJsdWUgfTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOnZpc2l0ZWQge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ibHVlIH07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpZ2h0Z3JleSB9XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgfVxyXG4gIGNvZGU6bm90KFtjbGFzc10pIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjRyZW0gO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5saWdodGdyZXkgfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgYmxvY2txdW90ZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gM3JlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ncmVlbiB9O1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5saWdodGdyZXkgfTtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtIH07XHJcbiAgfVxyXG5cclxuICAke2NvZGVIaWdobGlnaHR9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9