_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,n,t){t("GcxT"),e.exports=t("nOHt")},GcxT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("IlR1")}])},IlR1:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return y}));var r=t("nKUr"),o=t("rePB"),i=t("vOnD");var c={color:{primary:"lightseagreen",lightgrey:"rgb(245, 245, 245)",darkgrey:"rgb(50, 50, 50)"},font:{xs:"0.5rem",sm:"0.8rem",md:"1rem",lg:"1.6rem",xl:"2rem"}};function a(){var e,n,t=(e=["\n  @media (max-width: 768px) {\n    :root {\n      font-size: 12px;\n    }\n  }\n\n  body {\n    margin: auto;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  a {\n    color: black;\n    text-decoration: none;\n    \n    &:visited {\n      color: inherit;\n    }\n\n    &:hover {\n      color: ","\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var s=Object(i.b)(a(),c.color.primary);function l(){return Object(r.jsx)(u,{children:Object(r.jsxs)(f,{children:[Object(r.jsxs)("a",{href:"https://github.com/yes-xodnd",target:"_blank",rel:"noopener noreferrer ",children:[Object(r.jsx)("i",{"aria-hidden":!0,className:"fab fa-github"}),Object(r.jsx)("span",{children:"yes-xodnd"})]}),Object(r.jsx)("div",{children:"\u24d22021 ALL RIGHTS RESERVED"})]})})}var u=i.d.footer.withConfig({displayName:"Footer__Container",componentId:"qhytvz-0"})(["padding:2rem;border-top:1px solid black;color:grey;text-align:center;font-size:",";"],(function(e){return e.theme.font.sm})),f=i.d.div.withConfig({displayName:"Footer__Content",componentId:"qhytvz-1"})(["margin:auto;max-width:1024px;i{margin-right:0.5rem;}div{margin-top:0.5rem;}"]),d=t("YFqc"),p=t.n(d);function b(){return Object(r.jsx)(h,{children:Object(r.jsxs)(m,{children:[Object(r.jsx)(p.a,{href:"/",children:"YES-XODND BLOG"}),Object(r.jsxs)(v,{children:[Object(r.jsx)(p.a,{href:"/",children:"HOME"}),Object(r.jsx)(p.a,{href:"/posts",children:"POSTS"})]})]})})}var h=i.d.header.withConfig({displayName:"Header__Container",componentId:"sc-1isb4n6-0"})(["background:white;border-bottom:1px solid black;"]),m=i.d.div.withConfig({displayName:"Header__Content",componentId:"sc-1isb4n6-1"})(["display:flex;justify-content:space-between;padding:1rem;margin:auto;max-width:1024px;"]),v=(i.d.div.withConfig({displayName:"Header__Logo",componentId:"sc-1isb4n6-2"})([""]),i.d.nav.withConfig({displayName:"Header__Nav",componentId:"sc-1isb4n6-3"})(["display:flex;gap:1rem;"])),g=t("KEzq");function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e){var n=e.Component,t=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{}),Object(r.jsxs)(i.a,{theme:c,children:[Object(r.jsx)(b,{}),Object(r.jsx)("main",{children:Object(r.jsx)(n,O({},t))}),Object(r.jsx)(l,{}),Object(r.jsx)(g.a,{})]})]})}},KEzq:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("nKUr");function o(){return Object(r.jsx)(i,{onClick:function(){return scrollTo(0,0)},children:Object(r.jsx)("img",{src:"../../assets/icon/up.svg",alt:"up",title:"\ub9e8 \uc704\ub85c"})})}var i=t("vOnD").d.button.withConfig({displayName:"ButtonScrollUp__Button",componentId:"sc-1ue24uv-0"})(["position:fixed;right:3rem;bottom:3rem;width:2rem;height:2rem;border-radius:2px;border:1px solid black;background:white;visibility:visible;transition:200ms;&:hover{cursor:pointer;}"])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),c=t("elyg"),a=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,m=e.shallow,v=e.scroll,g=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var j=i.Children.only(b),O=j&&"object"===typeof j&&j.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),w=x[0],_=x[1],E=i.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,i.useEffect)((function(){var e=_&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,_,g,n,t]);var C={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,d,p,h,m,v,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var k="undefined"!==typeof g?g:t&&t.locale,I=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,k,t&&t.locales,t&&t.domainLocales);C.href=I||(0,c.addBasePath)((0,c.addLocale)(p,k,t&&t.defaultLocale))}return i.default.cloneElement(j,C)};n.default=f},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),i=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map}},[[0,0,1,2,3]]]);