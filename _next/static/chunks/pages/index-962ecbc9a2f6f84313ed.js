_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RXBc:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("YFqc"),c=t.n(o),a=t("q1tI");n.default=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){e.current.dispatchEvent(new Event("click",{bubbles:!0}))})),Object(r.jsx)(c.a,{href:"/posts",children:Object(r.jsx)("div",{ref:e})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),l={};function f(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,E=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var w=c.Children.only(v),_=w&&"object"===typeof w&&w.ref,g=(0,i.useIntersection)({rootMargin:"200px"}),m=r(g,2),L=m[0],M=m[1],R=c.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);(0,c.useEffect)((function(){var e=M&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof E?E:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,M,E,n,t]);var k={ref:R,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,b,y,E)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var I="undefined"!==typeof E?E:t&&t.locale,O=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);k.href=O||(0,a.addBasePath)((0,a.addLocale)(p,I,t&&t.defaultLocale))}return c.default.cloneElement(w,k)};n.default=s},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var u=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RXBc")}])}},[["vlRD",0,1,2]]]);