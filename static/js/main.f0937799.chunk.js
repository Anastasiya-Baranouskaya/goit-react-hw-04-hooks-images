(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),s=(n(17),n(18),n(10)),i=n(3),l=(n(19),n(20),n(21),n(5)),u=n(9),j=n.n(u),b=n(11),d="https://pixabay.com/api/",m="23089683-10e6383e94187ff47334541d4";function h(){return(h=Object(b.a)(j.a.mark((function e(t,n){var c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(d,"?q=").concat(t,"&page=").concat(n,"&key=").concat(m,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=1,e.next=4,fetch(c);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.hits);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var f=n(1);function O(e){var t=e.clearRender,n=e.onValueSubmit,a=e.onPageSubmit,r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],u=o[1],j=Object(c.useState)(1),b=Object(i.a)(j,2),d=b[0],m=b[1];return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===s.trim())return l.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!"),void t();n(s),u(""),a(d)},children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",value:s,onChange:function(e){u(e.target.value.toLowerCase()),m(1)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}function g(e){var t=e.onClose,n=e.largeImageURL,c=e.webformatURL;return Object(f.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return t(n)},children:Object(f.jsx)("img",{src:c,"data-source":n,alt:"pictures",className:"ImageGalleryItem-image"})})}function p(e){var t=e.onClick;return Object(f.jsx)("div",{className:"Button-div",children:Object(f.jsx)("button",{className:"Button",type:"button",onClick:t,children:"LoadMore"})})}function v(e){var t=e.arr,n=e.onClose,c=e.handleClick;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,c=e.webformatURL,a=e.largeImageURL;return Object(f.jsx)(g,{webformatURL:c,largeImageURL:a,onClose:n},t)}))}),t.length%12===0&&Object(f.jsx)(p,{onClick:c})]})}var x=document.querySelector("#modal-root");function S(e){var t=e.onClose,n=e.largeImageURL;Object(c.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:n,alt:n})})}),x)}var C=n(12),y=n.n(C);n(44);function k(){return Object(f.jsx)(y.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:3e3})}function w(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(i.a)(r,2),u=o[0],j=o[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=d[0],g=d[1],p=Object(c.useState)("idle"),x=Object(i.a)(p,2),C=x[0],y=x[1],w=Object(c.useState)(!1),L=Object(i.a)(w,2),N=L[0],I=L[1],R=Object(c.useState)(""),U=Object(i.a)(R,2),E=U[0],F=U[1];Object(c.useEffect)((function(){n&&(y("pending"),function(e,t){return h.apply(this,arguments)}(n,u).then((function(e){if(0!==e.length)return g(1===u?e:function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))}),void y("resolved");l.b.warn("\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),y("idle")})).catch((function(e){console.log(e),y("error")})).finally((function(){B()})))}),[n,u]);var B=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},G=function(e){I(!N),F(e)};return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{onValueSubmit:a,clearRender:function(){y("idle")},onPageSubmit:j}),Object(f.jsx)(l.a,{theme:"colored",autoClose:2e3}),"idle"===C&&Object(f.jsx)("p",{children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"pending"===C&&Object(f.jsx)("div",{className:"Loader",children:Object(f.jsx)(k,{})}),"resolved"===C&&Object(f.jsx)(v,{arr:m,handleClick:function(){j((function(e){return e+1})),console.log("arr in HandleClick:",m),console.log("page in handleClick:",u)},onClose:G}),N&&Object(f.jsx)(S,{onClose:G,largeImageURL:E})]})}o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f0937799.chunk.js.map