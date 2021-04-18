webpackHotUpdate_N_E("pages/posts",{

/***/ "./src/pages/posts/index.js":
/*!**********************************!*\
  !*** ./src/pages/posts/index.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var C_Users_taew0_Desktop_coding_github_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostListItem */ "./src/components/PostListItem.js");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Category */ "./src/components/Category.js");



var _jsxFileName = "C:\\Users\\taew0\\Desktop\\coding\\github\\blog\\src\\pages\\posts\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_taew0_Desktop_coding_github_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Posts(_ref) {
  _s();

  var _this = this;

  var allPosts = _ref.allPosts,
      allTags = _ref.allTags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(allPosts),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      selectedTag = _useState2[0],
      setSelectedTag = _useState2[1];

  var handleClickTag = function handleClickTag(e) {
    var tag = e.target.innerText;
    setSelectedTag(selectedTag !== tag ? tag : '');
    setPosts(!selectedTag ? allPosts : allPosts.filter(function (post) {
      return post.tags.includes(tag);
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Category__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, {
      allTags: allTags,
      selectedTag: selectedTag,
      handleClickTag: handleClickTag
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ListContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(List, {
        children: posts.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_PostListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            post: post
          }, post.slug, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 31
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Posts, "F5q2f/5eXdteOMyLm6cbR8ejw5Y=");

_c = Posts;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Posts); // static

// style
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "posts__Container",
  componentId: "sc-1g1yhzp-0"
})(["display:flex;flex-direction:column;padding:1rem;@media screen and (min-width:560px){flex-direction:row;}"]);
_c2 = Container;
var ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "posts__ListContainer",
  componentId: "sc-1g1yhzp-1"
})(["width:100%;max-width:768px;margin:0 auto;"]);
_c3 = ListContainer;
var List = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "posts__List",
  componentId: "sc-1g1yhzp-2"
})(["width:100%;margin:0 auto;padding:0;list-style:none;"]);
_c4 = List;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Posts");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "ListContainer");
$RefreshReg$(_c4, "List");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RzIiwiYWxsUG9zdHMiLCJhbGxUYWdzIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsImhhbmRsZUNsaWNrVGFnIiwiZSIsInRhZyIsInRhcmdldCIsImlubmVyVGV4dCIsImZpbHRlciIsInBvc3QiLCJ0YWdzIiwiaW5jbHVkZXMiLCJtYXAiLCJzbHVnIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTGlzdENvbnRhaW5lciIsInNlY3Rpb24iLCJMaXN0IiwidWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBc0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDRixRQUFELENBREU7QUFBQSxNQUM3QkcsS0FENkI7QUFBQSxNQUN0QkMsUUFEc0I7O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsRUFBRCxDQUZaO0FBQUEsTUFFNUJHLFdBRjRCO0FBQUEsTUFFZkMsY0FGZTs7QUFJcEMsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUk7QUFDMUIsUUFBTUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsU0FBckI7QUFDQUwsa0JBQWMsQ0FBQ0QsV0FBVyxLQUFLSSxHQUFoQixHQUFzQkEsR0FBdEIsR0FBNEIsRUFBN0IsQ0FBZDtBQUNBTCxZQUFRLENBQ04sQ0FBQ0MsV0FBRCxHQUNFTCxRQURGLEdBRUVBLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJOLEdBQW5CLENBQUo7QUFBQSxLQUFwQixDQUhJLENBQVI7QUFLRCxHQVJEOztBQVVBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyw0REFBRCxvQkFBZTtBQUFFUixhQUFPLEVBQVBBLE9BQUY7QUFBV0ksaUJBQVcsRUFBWEEsV0FBWDtBQUF3QkUsb0JBQWMsRUFBZEE7QUFBeEIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxhQUFEO0FBQUEsNkJBQ0UscUVBQUMsSUFBRDtBQUFBLGtCQUNJSixLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFBSCxJQUFJO0FBQUEsOEJBQUkscUVBQUMsZ0VBQUQ7QUFBYyxnQkFBSSxFQUFFQTtBQUFwQixhQUErQkEsSUFBSSxDQUFDSSxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBZDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0F4QlFsQixLOztLQUFBQSxLOztBQXlCTUEsb0VBQWYsRSxDQUVBOztBQXlCQTtBQUNBLElBQU1tQixTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0hBQWY7TUFBTUYsUztBQVVOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSxpREFBbkI7TUFBTUQsYTtBQU1OLElBQU1FLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSwyREFBVjtNQUFNRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmQ2YjQ5MWVhNzRhYTcyNmUxNTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXHJcbmltcG9ydCBQb3N0TGlzdEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0TGlzdEl0ZW0nXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhdGVnb3J5J1xyXG5cclxuZnVuY3Rpb24gUG9zdHMoeyBhbGxQb3N0cywgYWxsVGFncyB9KSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShhbGxQb3N0cylcclxuICBjb25zdCBbIHNlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZyBdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrVGFnID0gZSA9PiB7XHJcbiAgICBjb25zdCB0YWcgPSBlLnRhcmdldC5pbm5lclRleHRcclxuICAgIHNldFNlbGVjdGVkVGFnKHNlbGVjdGVkVGFnICE9PSB0YWcgPyB0YWcgOiAnJylcclxuICAgIHNldFBvc3RzKFxyXG4gICAgICAhc2VsZWN0ZWRUYWdcclxuICAgICAgPyBhbGxQb3N0c1xyXG4gICAgICA6IGFsbFBvc3RzLmZpbHRlcihwb3N0ID0+IHBvc3QudGFncy5pbmNsdWRlcyh0YWcpKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxDYXRlZ29yeSB7IC4uLnsgYWxsVGFncywgc2VsZWN0ZWRUYWcsIGhhbmRsZUNsaWNrVGFnIH0gfSAvPlxyXG4gICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHsgcG9zdHMubWFwKHBvc3QgPT4gPFBvc3RMaXN0SXRlbSBwb3N0PXtwb3N0fSBrZXk9e3Bvc3Quc2x1Z30gLz4pIH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICkgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHNcclxuXHJcbi8vIHN0YXRpY1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgYWxsUG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnLCAndGl0bGUnLCAnZGF0ZScsICd0YWdzJ10pXHJcbiAgY29uc3QgYWxsVGFncyA9IGdldEFsbFRhZ3MoYWxsUG9zdHMpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFsbFBvc3RzLFxyXG4gICAgICBhbGxUYWdzXHJcbiAgICB9XHJcbiAgfVxyXG59IFxyXG5cclxuZnVuY3Rpb24gZ2V0QWxsVGFncyhhbGxQb3N0cykge1xyXG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKVxyXG5cclxuICBmb3IgKGxldCBwb3N0IG9mIGFsbFBvc3RzKSB7XHJcbiAgICBmb3IgKGxldCB0YWcgb2YgcG9zdC50YWdzKSB7XHJcbiAgICAgIG1hcFt0YWddID0gbWFwW3RhZ10gPyBtYXBbdGFnXSArIDEgOiAxXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gWyAuLi5tYXAua2V5cygpIF0uc29ydCgoYSwgYikgPT4gbWFwW2JdIC0gbWFwW2FdKVxyXG59XHJcblxyXG4vLyBzdHlsZVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=