(this["webpackJsonpphoto-search-api"]=this["webpackJsonpphoto-search-api"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),a=n.n(r),s=n(11),o=n.n(s),i=(n(20),n(3)),u=n(9),b=n.n(u),j=n(10),l=n(12);n(22);var h=n(13),f=n(14);var p=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),u=o[0],p=o[1],O=Object(r.useState)(1),d=Object(i.a)(O,2),g=d[0],m=d[1],x=function(e,t){var n=Object(r.useState)(!0),c=Object(i.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),h=u[0],f=u[1],p=Object(r.useState)([]),O=Object(i.a)(p,2),d=O[0],g=O[1],m=Object(r.useState)(!1),x=Object(i.a)(m,2),v=x[0],S=x[1];return Object(r.useEffect)((function(){g([])}),[e]),Object(r.useEffect)((function(){s(!0),f(!1);var n=new AbortController,c=n.signal;return fetch("".concat("https://api.unsplash.com/search/photos/?client_id","=").concat("BJD0Ft5i5Qwk6bmbM5zaeFqR3c8uNVz0DZRBxojk4fo","&page=").concat(t,"&per_page=10&content_filter=high&query=").concat(e),{method:"get",signal:c}).then(function(){var e=Object(l.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,g((function(e){return[].concat(Object(j.a)(e),Object(j.a)(n.results))})),S(n.results.length>0),!t.ok){e.next=9;break}s(!1),e.next=10;break;case 9:return e.abrupt("return",Promise.reject(n));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){c.aborted||f(!0)})),function(){return n.abort()}}),[e,t]),{loading:a,error:h,photos:d,hasMore:v}}(n,g),v=x.photos,S=x.error,k=x.hasMore,w=x.loading,y=Object(r.useRef)(),C=Object(r.useCallback)((function(e){w||(y.current&&y.current.disconnect(),y.current=new IntersectionObserver((function(e){e[0].isIntersecting&&k&&m((function(e){return e+1}))})),e&&y.current.observe(e))}),[w,k]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"form-wrap",children:[Object(c.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),a(u),p("")},children:[Object(c.jsx)("input",{className:"input-search",value:u,onChange:function(e){p(e.target.value),m(1)},type:"text",placeholder:"Search for a Photo"}),Object(c.jsx)("button",{className:"search-button",type:"submit",children:Object(c.jsx)(h.a,{icon:f.a})})]}),n?Object(c.jsx)("p",{children:'Search results for "'.concat(n,'"')}):Object(c.jsx)("p",{children:"Please enter a search term"})]}),v&&v.map((function(e,t){return v.length===t+1?Object(c.jsx)("img",{ref:C,src:e.urls.full,alt:e.alt_description,style:{maxWidth:"100%"}},e.id):Object(c.jsx)("img",{src:e.urls.full,alt:e.alt_description,style:{maxWidth:"100%"}},e.id)})),Object(c.jsx)("div",{children:w&&"Loading"}),Object(c.jsx)("div",{children:S&&"Error"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.a91d768c.chunk.js.map