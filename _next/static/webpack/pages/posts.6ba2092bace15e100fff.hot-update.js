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
    var newSelectedTag = selectedTag === tag ? '' : tag;
    setSelectedTag(newSelectedTag);
    setPosts(!newSelectedTag ? allPosts : allPosts.filter(function (post) {
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
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ListContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(List, {
        children: posts.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_PostListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            post: post
          }, post.slug, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 31
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
})(["display:flex;flex-direction:column;margin:3rem 1rem 0;@media screen and (min-width:768px){flex-direction:row;}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RzIiwiYWxsUG9zdHMiLCJhbGxUYWdzIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsImhhbmRsZUNsaWNrVGFnIiwiZSIsInRhZyIsInRhcmdldCIsImlubmVyVGV4dCIsIm5ld1NlbGVjdGVkVGFnIiwiZmlsdGVyIiwicG9zdCIsInRhZ3MiLCJpbmNsdWRlcyIsIm1hcCIsInNsdWciLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJMaXN0Q29udGFpbmVyIiwic2VjdGlvbiIsIkxpc3QiLCJ1bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUFzQztBQUFBOztBQUFBOztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUNGLFFBQUQsQ0FERTtBQUFBLE1BQzdCRyxLQUQ2QjtBQUFBLE1BQ3RCQyxRQURzQjs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUU1QkcsV0FGNEI7QUFBQSxNQUVmQyxjQUZlOztBQUlwQyxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUMxQixRQUFNQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxTQUFyQjtBQUNBLFFBQU1DLGNBQWMsR0FBR1AsV0FBVyxLQUFLSSxHQUFoQixHQUFzQixFQUF0QixHQUEyQkEsR0FBbEQ7QUFDQUgsa0JBQWMsQ0FBQ00sY0FBRCxDQUFkO0FBQ0FSLFlBQVEsQ0FDTixDQUFDUSxjQUFELEdBQ0VaLFFBREYsR0FFRUEsUUFBUSxDQUFDYSxNQUFULENBQWdCLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlAsR0FBbkIsQ0FBSjtBQUFBLEtBQXBCLENBSEksQ0FBUjtBQUtELEdBVEQ7O0FBV0Esc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLDREQUFELG9CQUFlO0FBQUVSLGFBQU8sRUFBUEEsT0FBRjtBQUFXSSxpQkFBVyxFQUFYQSxXQUFYO0FBQXdCRSxvQkFBYyxFQUFkQTtBQUF4QixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGFBQUQ7QUFBQSw2QkFDRSxxRUFBQyxJQUFEO0FBQUEsa0JBQ0lKLEtBQUssQ0FBQ2MsR0FBTixDQUFVLFVBQUFILElBQUk7QUFBQSw4QkFBSSxxRUFBQyxnRUFBRDtBQUFjLGdCQUFJLEVBQUVBO0FBQXBCLGFBQStCQSxJQUFJLENBQUNJLElBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFkO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQXpCUW5CLEs7O0tBQUFBLEs7O0FBMEJNQSxvRUFBZixFLENBRUE7O0FBd0JBO0FBQ0EsSUFBTW9CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzSEFBZjtNQUFNRixTO0FBVU4sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxPQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUFuQjtNQUFNRCxhO0FBTU4sSUFBTUUsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJEQUFWO01BQU1ELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuNmJhMjA5MmJhY2UxNWUxMDBmZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuaW1wb3J0IFBvc3RMaXN0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RMaXN0SXRlbSdcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2F0ZWdvcnknXHJcblxyXG5mdW5jdGlvbiBQb3N0cyh7IGFsbFBvc3RzLCBhbGxUYWdzIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKGFsbFBvc3RzKVxyXG4gIGNvbnN0IFsgc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnIF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tUYWcgPSBlID0+IHtcclxuICAgIGNvbnN0IHRhZyA9IGUudGFyZ2V0LmlubmVyVGV4dFxyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRUYWcgPSBzZWxlY3RlZFRhZyA9PT0gdGFnID8gJycgOiB0YWdcclxuICAgIHNldFNlbGVjdGVkVGFnKG5ld1NlbGVjdGVkVGFnKVxyXG4gICAgc2V0UG9zdHMoXHJcbiAgICAgICFuZXdTZWxlY3RlZFRhZ1xyXG4gICAgICA/IGFsbFBvc3RzXHJcbiAgICAgIDogYWxsUG9zdHMuZmlsdGVyKHBvc3QgPT4gcG9zdC50YWdzLmluY2x1ZGVzKHRhZykpXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPENhdGVnb3J5IHsgLi4ueyBhbGxUYWdzLCBzZWxlY3RlZFRhZywgaGFuZGxlQ2xpY2tUYWcgfSB9IC8+XHJcbiAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgeyBwb3N0cy5tYXAocG9zdCA9PiA8UG9zdExpc3RJdGVtIHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5zbHVnfSAvPikgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKSBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1xyXG5cclxuLy8gc3RhdGljXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFsnc2x1ZycsICd0aXRsZScsICdkYXRlJywgJ3RhZ3MnXSlcclxuICBjb25zdCBhbGxUYWdzID0gZ2V0QWxsVGFncyhhbGxQb3N0cylcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYWxsUG9zdHMsXHJcbiAgICAgIGFsbFRhZ3NcclxuICAgIH1cclxuICB9XHJcbn0gXHJcblxyXG5mdW5jdGlvbiBnZXRBbGxUYWdzKGFsbFBvc3RzKSB7XHJcbiAgY29uc3QgbWFwID0ge31cclxuXHJcbiAgZm9yIChsZXQgcG9zdCBvZiBhbGxQb3N0cykge1xyXG4gICAgZm9yIChsZXQgdGFnIG9mIHBvc3QudGFncykge1xyXG4gICAgICBtYXBbdGFnXSA9IG1hcFt0YWddID8gbWFwW3RhZ10gKyAxIDogMVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5zb3J0KChhLCBiKSA9PiBtYXBbYl0gLSBtYXBbYV0pXHJcbn1cclxuXHJcbi8vIHN0eWxlXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogM3JlbSAxcmVtIDA7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNzY4cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==