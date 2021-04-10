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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
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
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "slug__Date",
  componentId: "sc-1wxmvdm-0"
})(["font-size:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.sm;
});
_c2 = Date;
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "slug__Header",
  componentId: "sc-1wxmvdm-1"
})(["border-bottom:1px solid ", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.darkgrey;
});
_c3 = Header;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "slug__Title",
  componentId: "sc-1wxmvdm-2"
})(["margin:0;"]);
_c4 = Title;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "slug__Content",
  componentId: "sc-1wxmvdm-3"
})(["line-height:1.8rem;a{color:", ";text-decoration:none;&:hover{text-decoration:underline;}&:visited{color:", ";}}img{display:block;width:60%;margin:2rem auto;padding:1rem;border:1px solid ", "}h2{margin-top:3rem;}code:not([class]){padding:0.2rem 0.4rem;background-color:", ";border-radius:3px;}blockquote{margin:0;padding:0.5rem 1rem 0.5rem 3rem;border-left:3px solid ", ";background:", ";font-size:", ";}", ""], function (_ref4) {
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
_c5 = Content;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Date");
$RefreshReg$(_c3, "Header");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "Content");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJkYXRlRm9ybWF0IiwiZGF0ZSIsIl9faHRtbCIsImNvbnRlbnQiLCJEYXRlIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJmb250Iiwic20iLCJIZWFkZXIiLCJjb2xvciIsImRhcmtncmV5IiwiVGl0bGUiLCJoMSIsIkNvbnRlbnQiLCJhcnRpY2xlIiwiYmx1ZSIsImxpZ2h0Z3JleSIsImdyZWVuIiwiY29kZUhpZ2hsaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNyQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLE1BQUQ7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQUEsa0JBQVNBLElBQUksQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsa0JBQVFDLCtEQUFVLENBQUNGLElBQUksQ0FBQ0csSUFBTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxPQUFEO0FBQVMsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFSixJQUFJLENBQUNLO0FBQWY7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsQyxDQUVEOztLQVp3Qk4sSTtBQStDeEI7QUFDQSxJQUFNTyxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQ0s7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBMUI7QUFBQSxDQURMLENBQVY7TUFBTUwsSTtBQUtOLElBQU1NLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzQ0FDaUI7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsUUFBM0I7QUFBQSxDQURqQixDQUFaO01BQU1GLE07QUFJTixJQUFNRyxLQUFLLEdBQUdSLHlEQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUJBQVg7TUFBTUQsSztBQUlOLElBQU1FLE9BQU8sR0FBR1YseURBQU0sQ0FBQ1csT0FBVjtBQUFBO0FBQUE7QUFBQSxnYUFJQTtBQUFBLE1BQUdULEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksS0FBTixDQUFZTSxJQUEzQjtBQUFBLENBSkEsRUFZRTtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksS0FBTixDQUFZTSxJQUEzQjtBQUFBLENBWkYsRUFvQlc7QUFBQSxNQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNJLEtBQU4sQ0FBWU8sU0FBM0I7QUFBQSxDQXBCWCxFQTJCVztBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksS0FBTixDQUFZTyxTQUEzQjtBQUFBLENBM0JYLEVBaUNnQjtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksS0FBTixDQUFZUSxLQUEzQjtBQUFBLENBakNoQixFQWtDSztBQUFBLE1BQUdaLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksS0FBTixDQUFZTyxTQUEzQjtBQUFBLENBbENMLEVBbUNJO0FBQUEsTUFBR1gsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQTFCO0FBQUEsQ0FuQ0osRUFzQ1RXLDZEQXRDUyxDQUFiO01BQU1MLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjVhYTNiZDA2ODlmMDg1YTA0ZTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZ2V0UG9zdEJ5U2x1ZyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXHJcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tICcuLi8uLi9saWIvbWFya2Rvd24nXHJcbmltcG9ydCBkYXRlRm9ybWF0IGZyb20gJy4uLy4uL2xpYi9kYXRlRm9ybWF0J1xyXG5pbXBvcnQgY29kZUhpZ2hsaWdodCBmcm9tICcuLi8uLi9zdHlsZXMvY29kZUhpZ2hsaWdodCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPnsgcG9zdC50aXRsZSB9PC9UaXRsZT5cclxuICAgICAgICA8RGF0ZT57IGRhdGVGb3JtYXQocG9zdC5kYXRlKSB9PC9EYXRlPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQgfX0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbi8vIG5leHRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xyXG4gICAgJ3RpdGxlJyxcclxuICAgICdkYXRlJyxcclxuICAgICdjb250ZW50JyxcclxuICBdKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmNvbnRlbnQpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0OiB7XHJcbiAgICAgICAgLi4ucG9zdCxcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFsnc2x1ZyddKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBvc3RzLm1hcCgoeyBzbHVnIH0pID0+IHtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBzdHlsZVxyXG5jb25zdCBEYXRlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5zbSB9O1xyXG4gIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xyXG5gXHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmRhcmtncmV5IH07XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIG1hcmdpbjogMDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYmx1ZSB9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJsdWUgfTtcclxuICAgIH1cclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IubGlnaHRncmV5IH1cclxuICB9XHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICB9XHJcbiAgY29kZTpub3QoW2NsYXNzXSkge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpZ2h0Z3JleSB9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuICBibG9ja3F1b3RlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbSAzcmVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmdyZWVuIH07XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpZ2h0Z3JleSB9O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQuc20gfTtcclxuICB9XHJcblxyXG4gICR7Y29kZUhpZ2hsaWdodH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=