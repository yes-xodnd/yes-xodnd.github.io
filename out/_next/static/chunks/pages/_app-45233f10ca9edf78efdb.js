_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("IlR1")}])},IlR1:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var r=t("nKUr"),o=t("vOnD");function i(){var e,n,t=(e=["\n  @media (max-width: 768px) {\n    :root {\n      font-size: 12px;\n    }\n  }\n\n  body {\n    margin: auto;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  a {\n    color: black;\n    text-decoration: none;\n    \n    &:visited {\n      color: inherit;\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return i=function(){return t},t}var c=Object(o.b)(i()),a={color:{primary:"cornflowerblue",lightgrey:"rgb(245, 245, 245)",darkgrey:"rgb(50, 50, 50)"},font:{sm:"0.8rem",md:"1rem",lg:"1.6rem"}},s=t("rePB"),l=t("YFqc"),u=t.n(l);function f(){return Object(r.jsx)("nav",{children:Object(r.jsxs)(d,{children:[Object(r.jsx)(p,{children:Object(r.jsx)(u.a,{href:"/",children:"HOME"})}),Object(r.jsx)(p,{children:Object(r.jsx)(u.a,{href:"/posts",children:"POSTS"})})]})})}var d=o.d.ul.withConfig({displayName:"Nav__List",componentId:"sc-1mo3uz2-0"})(["list-style:none;margin:0;"]),p=o.d.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1mo3uz2-1"})(["display:inline-block;margin-left:1rem;"]);function b(){return Object(r.jsx)(m,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(u.a,{href:"/",children:"YES-XODND BLOG."}),Object(r.jsx)(f,{})]})})}var m=o.d.header.withConfig({displayName:"Header__Container",componentId:"sc-13fiemu-0"})(["border-bottom:1px solid black;"]),h=o.d.div.withConfig({displayName:"Header__Content",componentId:"sc-13fiemu-1"})(["display:flex;justify-content:space-between;padding:2rem;margin:auto;max-width:1024px;"]);function v(){return Object(r.jsx)(j,{children:Object(r.jsx)(g,{children:"\u24d22021 ALL RIGHTS RESERVED"})})}var j=o.d.footer.withConfig({displayName:"Footer__Container",componentId:"qhytvz-0"})(["padding:1.5rem 2rem;color:grey;text-align:center;font-size:",";"],(function(e){return e.theme.font.sm})),g=o.d.div.withConfig({displayName:"Footer__Content",componentId:"qhytvz-1"})(["margin:auto;max-width:1024px;"]);function O(){return Object(r.jsx)(y,{onClick:function(){return scrollTo(0,0)},children:Object(r.jsx)("img",{src:"../../assets/icon/up.svg",alt:"up",title:"\ub9e8 \uc704\ub85c"})})}var y=o.d.button.withConfig({displayName:"ButtonScrollUp__Button",componentId:"sc-1ue24uv-0"})(["position:fixed;right:3rem;bottom:3rem;width:2rem;height:2rem;border-radius:2px;border:1px solid black;background:white;visibility:visible;transition:200ms;&:hover{cursor:pointer;}"]);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e){var n=e.Component,t=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(C,{children:Object(r.jsx)(n,w({},t))}),Object(r.jsx)(v,{}),Object(r.jsx)(O,{})]})}var C=o.d.main.withConfig({displayName:"Layout__Main",componentId:"sc-1l83v77-0"})(["max-width:1024px;margin:3rem auto 10rem;"]);function E(e){var n=e.Component,t=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c,{}),Object(r.jsx)(o.a,{theme:a,children:Object(r.jsx)(_,{Component:n,pageProps:t})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),c=t("elyg"),a=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,m=e.replace,h=e.shallow,v=e.scroll,j=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var g=i.Children.only(b),O=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),w=x[0],_=x[1],C=i.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,i.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof j?j:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,_,j,n,t]);var E={ref:C,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,d,p,m,h,v,j)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof j?j:t&&t.locale,N=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);E.href=N||(0,c.addBasePath)((0,c.addLocale)(p,I,t&&t.defaultLocale))}return i.default.cloneElement(g,E)};n.default=f},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),i=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map}},[[0,0,1,2,3]]]);