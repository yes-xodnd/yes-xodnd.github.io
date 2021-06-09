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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkListItem, {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkListItem, {
          onClick: handleClickEmail,
          children: "E-MAIL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkListItem, {
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
var LinkList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__LinkList",
  componentId: "sc-1isb4n6-3"
})(["margin:0;display:flex;flex-direction:column;gap:0.5rem;list-style:none;@media screen and (min-width:768px){flex-direction:row;}"]);
_c5 = LinkList;
var LinkListItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__LinkListItem",
  componentId: "sc-1isb4n6-4"
})(["padding:0.5rem;border-radius:5px;font-size:", ";font-weight:bolder;&:hover{cursor:pointer;color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.font.sm;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.primary;
});
_c6 = LinkListItem;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Content");
$RefreshReg$(_c4, "TitleContainer");
$RefreshReg$(_c5, "LinkList");
$RefreshReg$(_c6, "LinkListItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImhhbmRsZUNsaWNrRW1haWwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIkNvbnRlbnQiLCJkaXYiLCJUaXRsZUNvbnRhaW5lciIsInRoZW1lIiwiZm9udCIsImxnIiwiTGlua0xpc3QiLCJ1bCIsIkxpbmtMaXN0SXRlbSIsImxpIiwic20iLCJjb2xvciIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSwyQkFDRSxxRUFBQyxPQUFEO0FBQUEsOEJBQ0UscUVBQUMsY0FBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSxxRUFBQyxRQUFEO0FBQUEsZ0NBQ0UscUVBQUMsWUFBRDtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQywrQkFEUDtBQUVFLGVBQUcsRUFBQyxxQkFGTjtBQUdFLGtCQUFNLEVBQUMsUUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRSxxRUFBQyxZQUFEO0FBQWMsaUJBQU8sRUFBRUMsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBVUUscUVBQUMsWUFBRDtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyx5Q0FEUDtBQUVFLGVBQUcsRUFBQyxxQkFGTjtBQUdFLGtCQUFNLEVBQUMsUUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEO0tBbEN1QkQsTTs7QUFvQ3hCLFNBQVNDLGdCQUFULEdBQTRCO0FBQzFCQyxXQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCLHlCQUE5QjtBQUNBQyxPQUFLLENBQUMsdUJBQUQsQ0FBTDtBQUNELEMsQ0FHRDs7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUFmO01BQU1GLFM7QUFNTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUdBQWI7TUFBTUQsTztBQVFOLElBQU1FLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSw0REFFSDtBQUFBLE1BQUdFLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUExQjtBQUFBLENBRkcsQ0FBcEI7TUFBTUgsYztBQWFOLElBQU1JLFFBQVEsR0FBR1IseURBQU0sQ0FBQ1MsRUFBVjtBQUFBO0FBQUE7QUFBQSx1SUFBZDtNQUFNRCxRO0FBWU4sSUFBTUUsWUFBWSxHQUFHVix5REFBTSxDQUFDVyxFQUFWO0FBQUE7QUFBQTtBQUFBLCtHQUdIO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdNLEVBQTFCO0FBQUEsQ0FIRyxFQVFMO0FBQUEsTUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUSxLQUFOLENBQVlDLE9BQTNCO0FBQUEsQ0FSSyxDQUFsQjtNQUFNSixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDg0MjhhMzJmZDYxNTBjYjFkZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgVEFFV09PTkcgUEFSSy5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cD5Gcm9udGVuZCBEZXZsb2c8L3A+XHJcbiAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPExpbmtMaXN0PlxyXG4gICAgICAgICAgPExpbmtMaXN0SXRlbT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3llcy14b2RuZC9cIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbmtMaXN0SXRlbT5cclxuICAgICAgICAgIDxMaW5rTGlzdEl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2tFbWFpbH0+RS1NQUlMPC9MaW5rTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlua0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veWVzLXhvZG5kL3BvcnRmb2xpby9cIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFja1wiPlxyXG4gICAgICAgICAgICAgIFBPUlRGT0xJT1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbmtMaXN0SXRlbT5cclxuICAgICAgICA8L0xpbmtMaXN0PlxyXG4gICAgICA8L0NvbnRlbnQ+XHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGlja0VtYWlsKCkge1xyXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCd0YWV3b29uZ19wYXJrQG5hdmVyLmNvbScpXHJcbiAgYWxlcnQoJ+uplOydvCDso7zshozqsIAg7YG066a967O065Oc7JeQIOuzteyCrOuQmOyXiOyKteuLiOuLpC4nKVxyXG59XHJcblxyXG5cclxuLy8gc3R5bGVcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuYFxyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC5sZ307XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExpbmtMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtfTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLnByaW1hcnkgfTtcclxuICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9