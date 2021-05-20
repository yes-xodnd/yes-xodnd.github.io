webpackHotUpdate_N_E("pages/posts",{

/***/ "./src/components/TagList.js":
/*!***********************************!*\
  !*** ./src/components/TagList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\components\\TagList.js",
    _s = $RefreshSig$();




function TagList(_ref) {
  _s();

  var _this = this;

  var allTags = _ref.allTags,
      selectedTag = _ref.selectedTag,
      handleClickTag = _ref.handleClickTag;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isVisible = _useState[0],
      setVisible = _useState[1];

  var toggleVisible = function toggleVisible() {
    return setVisible(!isVisible);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setVisible(screen.width > 768 ? true : false);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ToggleButton, {
      onClick: toggleVisible,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "TAGS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
        className: "fas fa-caret-up",
        isVisible: isVisible,
        "aria-hidden": true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(List, {
      isVisible: isVisible,
      children: allTags.map(function (_ref2) {
        var tag = _ref2.tagName,
            count = _ref2.count;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
          onClick: handleClickTag(tag),
          isSelected: selectedTag === tag,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PostCount, {
            children: count
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)]
        }, tag, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(TagList, "fz57Ngh2XlOLF1qvLHN0U/eJjIM=");

_c = TagList;
/* harmony default export */ __webpack_exports__["default"] = (TagList);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "TagList__Container",
  componentId: "sc-10c5eze-0"
})(["position:relative;background:white;font-size:", ";@media screen and (min-width:768px){width:fit-content;min-width:200px;}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.font.sm;
});
_c2 = Container;
var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "TagList__ToggleButton",
  componentId: "sc-10c5eze-1"
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem;border-bottom:1px solid black;&:hover{cursor:pointer;}"]);
_c3 = ToggleButton;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].i.withConfig({
  displayName: "TagList__Icon",
  componentId: "sc-10c5eze-2"
})(["transform:rotateX(", ");"], function (_ref4) {
  var isVisible = _ref4.isVisible;
  return isVisible ? '0deg' : '180deg';
});
_c4 = Icon;
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "TagList__List",
  componentId: "sc-10c5eze-3"
})(["position:absolute;top:3.3rem;max-width:1024px;width:100%;margin:0;padding:0;list-style:none;background-color:white;border-bottom:1px solid black;transition:200ms;transform:", ";opacity:", ";transform-origin:top;@media screen and (min-width:768px){position:static;width:auto;}"], function (_ref5) {
  var isVisible = _ref5.isVisible;
  return isVisible ? 'scaleY(1)' : 'scaleY(0)';
}, function (_ref6) {
  var isVisible = _ref6.isVisible;
  return isVisible ? '1' : '0';
});
_c5 = List;
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "TagList__ListItem",
  componentId: "sc-10c5eze-4"
})(["display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;transition:200ms;color:", ";&:hover{cursor:pointer;background-color:", ";}"], function (_ref7) {
  var theme = _ref7.theme,
      isSelected = _ref7.isSelected;
  return isSelected ? theme.color.primary : 'inherit';
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.lightgrey;
});
_c6 = ListItem;
var PostCount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "TagList__PostCount",
  componentId: "sc-10c5eze-5"
})(["font-size:", ";margin-left:0.5rem;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.font.xs;
});
_c7 = PostCount;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "TagList");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "ToggleButton");
$RefreshReg$(_c4, "Icon");
$RefreshReg$(_c5, "List");
$RefreshReg$(_c6, "ListItem");
$RefreshReg$(_c7, "PostCount");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFnTGlzdC5qcyJdLCJuYW1lcyI6WyJUYWdMaXN0IiwiYWxsVGFncyIsInNlbGVjdGVkVGFnIiwiaGFuZGxlQ2xpY2tUYWciLCJ1c2VTdGF0ZSIsImlzVmlzaWJsZSIsInNldFZpc2libGUiLCJ0b2dnbGVWaXNpYmxlIiwidXNlRWZmZWN0Iiwic2NyZWVuIiwid2lkdGgiLCJtYXAiLCJ0YWciLCJ0YWdOYW1lIiwiY291bnQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwidGhlbWUiLCJmb250Iiwic20iLCJUb2dnbGVCdXR0b24iLCJkaXYiLCJJY29uIiwiaSIsIkxpc3QiLCJ1bCIsIkxpc3RJdGVtIiwibGkiLCJpc1NlbGVjdGVkIiwiY29sb3IiLCJwcmltYXJ5IiwibGlnaHRncmV5IiwiUG9zdENvdW50Iiwic3BhbiIsInhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsT0FBMkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUF4Q0MsT0FBd0MsUUFBeENBLE9BQXdDO0FBQUEsTUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7O0FBQUEsa0JBQ3ZCQyxzREFBUSxDQUFDLEtBQUQsQ0FEZTtBQUFBLE1BQ2pEQyxTQURpRDtBQUFBLE1BQ3RDQyxVQURzQzs7QUFFekQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU1ELFVBQVUsQ0FBQyxDQUFDRCxTQUFGLENBQWhCO0FBQUEsR0FBdEI7O0FBRUFHLHlEQUFTLENBQUM7QUFBQSxXQUFNRixVQUFVLENBQUNHLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLEdBQWYsR0FBcUIsSUFBckIsR0FBNEIsS0FBN0IsQ0FBaEI7QUFBQSxHQUFELEVBQXNELEVBQXRELENBQVQ7QUFHQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0UscUVBQUMsWUFBRDtBQUFjLGFBQU8sRUFBRUgsYUFBdkI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsSUFBRDtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFFRSxpQkFBUyxFQUFFRixTQUZiO0FBR0U7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyxJQUFEO0FBQU0sZUFBUyxFQUFFQSxTQUFqQjtBQUFBLGdCQUNJSixPQUFPLENBQUNVLEdBQVIsQ0FBWTtBQUFBLFlBQVlDLEdBQVosU0FBR0MsT0FBSDtBQUFBLFlBQWlCQyxLQUFqQixTQUFpQkEsS0FBakI7QUFBQSw0QkFDWixxRUFBQyxRQUFEO0FBQ0MsaUJBQU8sRUFBRVgsY0FBYyxDQUFDUyxHQUFELENBRHhCO0FBRUMsb0JBQVUsRUFBRVYsV0FBVyxLQUFLVSxHQUY3QjtBQUFBLGtDQUlFO0FBQUEsc0JBQVFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLHFFQUFDLFNBQUQ7QUFBQSxzQkFBYUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FHTUYsR0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBWjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlCRDs7R0FoQ1FaLE87O0tBQUFBLE87QUFpQ01BLHNFQUFmO0FBR0EsSUFBTWUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLGtJQUdBO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQTFCO0FBQUEsQ0FIQSxDQUFmO01BQU1MLFM7QUFXTixJQUFNTSxZQUFZLEdBQUdMLHlEQUFNLENBQUNNLEdBQVY7QUFBQTtBQUFBO0FBQUEseUlBQWxCO01BQU1ELFk7QUFZTixJQUFNRSxJQUFJLEdBQUdQLHlEQUFNLENBQUNRLENBQVY7QUFBQTtBQUFBO0FBQUEsaUNBQ2E7QUFBQSxNQUFHbkIsU0FBSCxTQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQVMsR0FBRyxNQUFILEdBQVksUUFBeEM7QUFBQSxDQURiLENBQVY7TUFBTWtCLEk7QUFJTixJQUFNRSxJQUFJLEdBQUdULHlEQUFNLENBQUNVLEVBQVY7QUFBQTtBQUFBO0FBQUEsNFJBYUs7QUFBQSxNQUFHckIsU0FBSCxTQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQVMsR0FBRyxXQUFILEdBQWlCLFdBQTdDO0FBQUEsQ0FiTCxFQWNHO0FBQUEsTUFBR0EsU0FBSCxTQUFHQSxTQUFIO0FBQUEsU0FBbUJBLFNBQVMsR0FBRyxHQUFILEdBQVMsR0FBckM7QUFBQSxDQWRILENBQVY7TUFBTW9CLEk7QUF1Qk4sSUFBTUUsUUFBUSxHQUFHWCx5REFBTSxDQUFDWSxFQUFWO0FBQUE7QUFBQTtBQUFBLHFLQU9IO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVVcsVUFBVixTQUFVQSxVQUFWO0FBQUEsU0FBMkJBLFVBQVUsR0FDMUNYLEtBQUssQ0FBQ1ksS0FBTixDQUFZQyxPQUQ4QixHQUUxQyxTQUZLO0FBQUEsQ0FQRyxFQWVVO0FBQUEsTUFBR2IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDWSxLQUFOLENBQVlFLFNBQTNCO0FBQUEsQ0FmVixDQUFkO01BQU1MLFE7QUFtQk4sSUFBTU0sU0FBUyxHQUFHakIseURBQU0sQ0FBQ2tCLElBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQ0E7QUFBQSxNQUFHaEIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdnQixFQUExQjtBQUFBLENBREEsQ0FBZjtNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjk1MjBkY2M2ZTUwMzMwYmM3NzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZnVuY3Rpb24gVGFnTGlzdCh7IGFsbFRhZ3MsIHNlbGVjdGVkVGFnLCBoYW5kbGVDbGlja1RhZyB9KSB7XHJcbiAgY29uc3QgWyBpc1Zpc2libGUsIHNldFZpc2libGUgXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiBzZXRWaXNpYmxlKCFpc1Zpc2libGUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRWaXNpYmxlKHNjcmVlbi53aWR0aCA+IDc2OCA/IHRydWUgOiBmYWxzZSksIFtdKVxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFRvZ2dsZUJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVWaXNpYmxlfT5cclxuICAgICAgICA8c3Bhbj5UQUdTPC9zcGFuPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtY2FyZXQtdXBcIlxyXG4gICAgICAgICAgaXNWaXNpYmxlPXtpc1Zpc2libGV9XHJcbiAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDxMaXN0IGlzVmlzaWJsZT17aXNWaXNpYmxlfT5cclxuICAgICAgICB7IGFsbFRhZ3MubWFwKCh7IHRhZ05hbWU6IHRhZywgY291bnQgfSkgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tUYWcodGFnKX1cclxuICAgICAgICAgICBpc1NlbGVjdGVkPXtzZWxlY3RlZFRhZyA9PT0gdGFnfVxyXG4gICAgICAgICAgIGtleT17dGFnfSA+XHJcbiAgICAgICAgICAgIDxzcGFuPnsgdGFnIH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxQb3N0Q291bnQ+eyBjb3VudCB9PC9Qb3N0Q291bnQ+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpIH1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhZ0xpc3Q7XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnNtIH07XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7ICAgXHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgVG9nZ2xlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEljb24gPSBzdHlsZWQuaWBcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoJHsoeyBpc1Zpc2libGUgfSkgPT4gaXNWaXNpYmxlID8gJzBkZWcnIDogJzE4MGRlZyd9KTtcclxuYFxyXG5cclxuY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzLjNyZW07XHJcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG5cclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICB0cmFuc2Zvcm06ICR7KHsgaXNWaXNpYmxlIH0pID0+IGlzVmlzaWJsZSA/ICdzY2FsZVkoMSknIDogJ3NjYWxlWSgwKSd9O1xyXG4gIG9wYWNpdHk6ICR7KHsgaXNWaXNpYmxlIH0pID0+IGlzVmlzaWJsZSA/ICcxJyA6ICcwJ307XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lLCBpc1NlbGVjdGVkIH0pID0+IGlzU2VsZWN0ZWRcclxuICAgID8gdGhlbWUuY29sb3IucHJpbWFyeVxyXG4gICAgOiAnaW5oZXJpdCdcclxuICB9O1xyXG5cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmxpZ2h0Z3JleX07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0Q291bnQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC54c307XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=