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

  var allPosts = _ref.allPosts;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RzIiwiYWxsUG9zdHMiLCJ1c2VTdGF0ZSIsInBvc3RzIiwic2V0UG9zdHMiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwiaGFuZGxlQ2xpY2tUYWciLCJlIiwidGFnIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwiZmlsdGVyIiwicG9zdCIsInRhZ3MiLCJpbmNsdWRlcyIsImFsbFRhZ3MiLCJtYXAiLCJzbHVnIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTGlzdENvbnRhaW5lciIsInNlY3Rpb24iLCJMaXN0IiwidWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUNELFFBQUQsQ0FEUDtBQUFBLE1BQ3BCRSxLQURvQjtBQUFBLE1BQ2JDLFFBRGE7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRW5CRyxXQUZtQjtBQUFBLE1BRU5DLGNBRk07O0FBSTNCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzFCLFFBQU1DLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFNBQXJCO0FBQ0FMLGtCQUFjLENBQUNELFdBQVcsS0FBS0ksR0FBaEIsR0FBc0JBLEdBQXRCLEdBQTRCLEVBQTdCLENBQWQ7QUFDQUwsWUFBUSxDQUNOLENBQUNDLFdBQUQsR0FDRUosUUFERixHQUVFQSxRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTixHQUFuQixDQUFKO0FBQUEsS0FBcEIsQ0FISSxDQUFSO0FBS0QsR0FSRDs7QUFVQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQsb0JBQWU7QUFBRU8sYUFBTyxFQUFQQSxPQUFGO0FBQVdYLGlCQUFXLEVBQVhBLFdBQVg7QUFBd0JFLG9CQUFjLEVBQWRBO0FBQXhCLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsYUFBRDtBQUFBLDZCQUNFLHFFQUFDLElBQUQ7QUFBQSxrQkFDSUosS0FBSyxDQUFDYyxHQUFOLENBQVUsVUFBQUosSUFBSTtBQUFBLDhCQUFJLHFFQUFDLGdFQUFEO0FBQWMsZ0JBQUksRUFBRUE7QUFBcEIsYUFBK0JBLElBQUksQ0FBQ0ssSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBQWQ7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBeEJRbEIsSzs7S0FBQUEsSzs7QUF5Qk1BLG9FQUFmLEUsQ0FFQTs7QUEyQkE7QUFDQSxJQUFNbUIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdIQUFmO01BQU1GLFM7QUFVTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLE9BQVY7QUFBQTtBQUFBO0FBQUEsaURBQW5CO01BQU1ELGE7QUFNTixJQUFNRSxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkRBQVY7TUFBTUQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy45MTllZGFhYzYxZGUxYzZlMzk3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5pbXBvcnQgUG9zdExpc3RJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtJ1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXRlZ29yeSdcclxuXHJcbmZ1bmN0aW9uIFBvc3RzKHsgYWxsUG9zdHMgfSkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoYWxsUG9zdHMpXHJcbiAgY29uc3QgWyBzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWcgXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja1RhZyA9IGUgPT4ge1xyXG4gICAgY29uc3QgdGFnID0gZS50YXJnZXQuaW5uZXJUZXh0XHJcbiAgICBzZXRTZWxlY3RlZFRhZyhzZWxlY3RlZFRhZyAhPT0gdGFnID8gdGFnIDogJycpXHJcbiAgICBzZXRQb3N0cyhcclxuICAgICAgIXNlbGVjdGVkVGFnXHJcbiAgICAgID8gYWxsUG9zdHNcclxuICAgICAgOiBhbGxQb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LnRhZ3MuaW5jbHVkZXModGFnKSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Q2F0ZWdvcnkgeyAuLi57IGFsbFRhZ3MsIHNlbGVjdGVkVGFnLCBoYW5kbGVDbGlja1RhZyB9IH0gLz5cclxuICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICB7IHBvc3RzLm1hcChwb3N0ID0+IDxQb3N0TGlzdEl0ZW0gcG9zdD17cG9zdH0ga2V5PXtwb3N0LnNsdWd9IC8+KSB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0xpc3RDb250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzXHJcblxyXG4vLyBzdGF0aWNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoWydzbHVnJywgJ3RpdGxlJywgJ2RhdGUnLCAndGFncyddKVxyXG4gIGNvbnN0IGFsbFRhZ3MgPSBnZXRBbGxUYWdzKGFsbFBvc3RzKVxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhbGxQb3N0cyxcclxuICAgICAgYWxsVGFnc1xyXG4gICAgfVxyXG4gIH1cclxufSBcclxuXHJcbmZ1bmN0aW9uIGdldEFsbFRhZ3MoYWxsUG9zdHMpIHtcclxuICBjb25zdCBtYXAgPSBuZXcgTWFwKClcclxuXHJcbiAgZm9yIChsZXQgcG9zdCBvZiBhbGxQb3N0cykge1xyXG4gICAgZm9yIChsZXQgdGFnIG9mIHBvc3QudGFncykge1xyXG4gICAgICBtYXBbdGFnXSA9IG1hcFt0YWddID8gbWFwW3RhZ10gKyAxIDogMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hcFxyXG4gIC5rZXlzKG1hcClcclxuICAuc29ydCgoYSwgYikgPT4gbWFwW2JdIC0gbWFwW2FdKVxyXG59XHJcblxyXG4vLyBzdHlsZVxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=