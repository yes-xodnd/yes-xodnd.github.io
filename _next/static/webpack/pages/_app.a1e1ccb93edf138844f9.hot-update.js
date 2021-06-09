webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\Header.js";

function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Content, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "TAEWOONG PARK."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Frontend Devlog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://github.com/yes-xodnd/",
            rel: "noopener noreferrer",
            target: "_black",
            children: "GITHUB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
          onClick: handleClickEmail,
          children: "E-MAIL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://github.com/yes-xodnd/portfolio/",
            rel: "noopener noreferrer",
            target: "_black",
            children: "PORTFOLIO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = Header;

function handleClickEmail() {
  navigator.clipboard.writeText('taewoong_park@naver.com');
  alert('메일 주소가 클립보드에 복사되었습니다.');
} // style


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1isb4n6-0"
})(["padding:1rem;background:white;border-bottom:1px solid black;"]);
_c2 = Container;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Content",
  componentId: "sc-1isb4n6-1"
})(["display:flex;justify-content:space-between;align-items:center;margin:auto;max-width:1024px;"]);
_c3 = Content;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__TitleContainer",
  componentId: "sc-1isb4n6-2"
})(["h1{font-size:", ";margin:0;}p{margin:0;color:grey;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.lg;
});
_c4 = TitleContainer;
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__List",
  componentId: "sc-1isb4n6-3"
})(["margin:0;display:flex;flex-direction:column;gap:0.5rem;list-style:none;@media screen and (min-width:768px){flex-direction:row;}"]);
_c5 = List;
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__ListItem",
  componentId: "sc-1isb4n6-4"
})(["padding:0.5rem;border-radius:5px;font-size:", ";font-weight:bolder;&:hover{cursor:pointer;color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.sm;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primary;
});
_c6 = ListItem;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Content");
$RefreshReg$(_c4, "TitleContainer");
$RefreshReg$(_c5, "List");
$RefreshReg$(_c6, "ListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImhhbmRsZUNsaWNrRW1haWwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIkNvbnRlbnQiLCJkaXYiLCJUaXRsZUNvbnRhaW5lciIsInRoZW1lIiwiZm9udCIsImxnIiwiTGlzdCIsInVsIiwiTGlzdEl0ZW0iLCJsaSIsInNtIiwiY29sb3IiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixzQkFDRSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0UscUVBQUMsT0FBRDtBQUFBLDhCQUNFLHFFQUFDLGNBQUQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMsSUFBRDtBQUFBLGdDQUNFLHFFQUFDLFFBQUQ7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMsK0JBRFA7QUFFRSxlQUFHLEVBQUMscUJBRk47QUFHRSxrQkFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0UscUVBQUMsUUFBRDtBQUFVLGlCQUFPLEVBQUVDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFLHFFQUFDLFFBQUQ7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMseUNBRFA7QUFFRSxlQUFHLEVBQUMscUJBRk47QUFHRSxrQkFBTSxFQUFDLFFBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDtLQWxDdUJELE07O0FBb0N4QixTQUFTQyxnQkFBVCxHQUE0QjtBQUMxQkMsV0FBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4Qix5QkFBOUI7QUFDQUMsT0FBSyxDQUFDLHVCQUFELENBQUw7QUFDRCxDLENBR0Q7OztBQUNBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxvRUFBZjtNQUFNRixTO0FBTU4sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUFiO01BQU1ELE87QUFRTixJQUFNRSxjQUFjLEdBQUdKLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsNERBRUg7QUFBQSxNQUFHRSxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBMUI7QUFBQSxDQUZHLENBQXBCO01BQU1ILGM7QUFhTixJQUFNSSxJQUFJLEdBQUdSLHlEQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUlBQVY7TUFBTUQsSTtBQVlOLElBQU1FLFFBQVEsR0FBR1YseURBQU0sQ0FBQ1csRUFBVjtBQUFBO0FBQUE7QUFBQSwrR0FHQztBQUFBLE1BQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxFQUExQjtBQUFBLENBSEQsRUFRRDtBQUFBLE1BQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1EsS0FBTixDQUFZQyxPQUEzQjtBQUFBLENBUkMsQ0FBZDtNQUFNSixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTFlMWNjYjkzZWRmMTM4ODQ0ZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgVEFFV09PTkcgUEFSSy5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cD5Gcm9udGVuZCBEZXZsb2c8L3A+XHJcbiAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS95ZXMteG9kbmQvXCJcclxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhY2tcIj5cclxuICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja0VtYWlsfT5FLU1BSUw8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veWVzLXhvZG5kL3BvcnRmb2xpby9cIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgICAgIFBPUlRGT0xJT1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Db250ZW50PlxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tFbWFpbCgpIHtcclxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgndGFld29vbmdfcGFya0BuYXZlci5jb20nKVxyXG4gIGFsZXJ0KCfrqZTsnbwg7KO87IaM6rCAIO2BtOumveuztOuTnOyXkCDrs7XsgqzrkJjsl4jsirXri4jri6QuJylcclxufVxyXG5cclxuXHJcbi8vIHN0eWxlXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAyNHB4O1xyXG5gXHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQubGd9O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQuc219O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IucHJpbWFyeSB9O1xyXG4gIH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=