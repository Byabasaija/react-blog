(this["webpackJsonpreact-ssr-blog"]=this["webpackJsonpreact-ssr-blog"]||[]).push([[0],{28:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n,r=c(0),i=c.n(r),s=c(17),j=c.n(s),o=c(8),l=(c(28),c(18)),b=c(2),d=c(19),h=c(1),a=function(){return Object(h.jsx)("h1",{children:"Home"})},u=function(){return Object(h.jsx)("h1",{children:"About"})},O=c(23),x=function(){var e=Object(r.useState)(window&&window.preloadedArticles),t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(r.useEffect)((function(){window&&!window.preloadedArticles&&(console.log("no preloaded articles found, loading from server"),fetch("api/articles").then((function(e){return e.json()})).then((function(e){return n(e)})))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Articles"}),c&&c.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:e.title}),Object(h.jsxs)("p",{children:["by ",e.author]})]},e.title)}))]})},f=d.a.h1(n||(n=Object(l.a)(["\n  color: green;\n  font-size: 50px;\n"]))),p=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{children:"Server-Side Rendering Example"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:"/articles",children:"Articles"})})]}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(a,{})}),Object(h.jsx)(b.a,{path:"/about",children:Object(h.jsx)(u,{})}),Object(h.jsx)(b.a,{path:"/articles",children:Object(h.jsx)(x,{})})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};j.a.hydrate(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(p,{})})}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.6dd1c4ed.chunk.js.map