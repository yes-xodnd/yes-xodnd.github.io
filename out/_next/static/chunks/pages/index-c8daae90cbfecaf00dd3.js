_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"1ksY":function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dateStyle:"medium"};return new Intl.DateTimeFormat("en-US",t).format(new Date(e))}n.d(t,"a",(function(){return r}))},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y}));var r=n("nKUr"),o=n("vOnD"),i=n("q1tI"),a=n("YFqc"),c=n.n(a),s=n("1ksY");function l(e){var t=e.post,n=t.slug,o=t.date,i=t.title,a=t.tags;return Object(r.jsxs)(d,{children:[Object(r.jsx)(m,{children:Object(s.a)(o)}),Object(r.jsx)(c.a,{href:"/posts/[slug].js",as:"/posts/".concat(n),children:Object(r.jsx)(p,{children:i})}),Object(r.jsx)(f,{tags:a})]},n)}var u=Object(i.memo)(l),f=function(e){var t=e.tags;return Object(r.jsx)(v,{children:t.map((function(e){return Object(r.jsx)(h,{children:e},e)}))})},d=o.d.li.withConfig({displayName:"PostListItem__ListItem",componentId:"sc-1rec0tb-0"})(["padding:1rem 2rem;transition:200ms;border:1px solid transparent;&:hover{border:1px solid black;a{color:",";}}"],(function(e){return e.theme.color.primary})),p=o.d.a.withConfig({displayName:"PostListItem__Title",componentId:"sc-1rec0tb-1"})(["word-break:keep-all;font-size:",";font-weight:bold;transition:150ms;&:hover{cursor:pointer;}"],(function(e){return e.theme.font.lg})),m=o.d.div.withConfig({displayName:"PostListItem__Date",componentId:"sc-1rec0tb-2"})(["font-size:0.8rem;color:grey;margin-left:3px;"]),v=o.d.div.withConfig({displayName:"PostListItem__TagsContainer",componentId:"sc-1rec0tb-3"})(["display:flex;padding:1rem 0;"]),h=o.d.div.withConfig({displayName:"PostListItem__TagBadge",componentId:"sc-1rec0tb-4"})(["margin-right:0.5rem;padding:0.2rem 0.5rem;border:1px solid lightgrey;border-radius:5px;font-size:",";transition:100ms;&:hover{cursor:pointer;background:",";color:white;}"],(function(e){return e.theme.font.sm}),(function(e){return e.theme.color.primary}));function g(e){var t=e.posts;return Object(r.jsx)(b,{children:t.map((function(e){return Object(r.jsx)(u,{post:e},e.slug)}))})}var b=o.d.ul.withConfig({displayName:"PostList__List",componentId:"qiqbj3-0"})(["width:100%;max-width:768px;margin:0 auto;padding:0;list-style:none;"]);var y=!0;t.default=function(e){var t=e.allPosts;return Object(r.jsx)(g,{posts:t})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=i.Children.only(m),_=y&&"object"===typeof y&&y.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),j=r(w,2),I=j[0],x=j[1],L=i.default.useCallback((function(e){I(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,I]);(0,i.useEffect)((function(){var e=x&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,x,b,t,n]);var O={ref:L,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,v,h,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof b?b:n&&n.locale,k=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);O.href=k||(0,a.addBasePath)((0,a.addLocale)(p,N,n&&n.defaultLocale))}return i.default.cloneElement(y,O)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,1,2,3]]]);