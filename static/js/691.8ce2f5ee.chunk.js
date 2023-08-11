"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[691],{242:function(e,t,n){n.d(t,{Df:function(){return i},P1:function(){return s},TP:function(){return p},jP:function(){return f},zv:function(){return l}});var r=n(165),a=n(861),c=n(243),u="4e3245caeda8ef69d01617b402f558a4",o="https://api.themoviedb.org/3",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(u),e.prev=1,e.next=4,c.Z.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),alert("Oops, something went wrong...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t),e.prev=1,e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),alert("Oops, something went wrong...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"?api_key=").concat(u),e.prev=1,e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),alert("Oops, something went wrong...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u),e.prev=1,e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data.cast);case 8:e.prev=8,e.t0=e.catch(1),alert("Oops, something went wrong...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u),e.prev=1,e.next=4,c.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(1),alert("Oops, something went wrong...");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},11:function(e,t,n){n.d(t,{G:function(){return f}});var r,a,c=n(689),u=n(168),o=n(822),i=n(87),s=o.Z.li(r||(r=(0,u.Z)(["\n    list-style: none;\n    display:flex;\n"]))),p=(0,o.Z)(i.rU)(a||(a=(0,u.Z)(["\n    text-decoration:none;\n    color: #111111;\n    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ;\n    &:hover{\n    color: #e5990c;\n    }\n"]))),l=n(184),f=function(e){var t=e.movie,n=(0,c.TH)();return(0,l.jsx)(s,{children:(0,l.jsxs)(p,{state:{from:n},to:"/movies/"+t.id,children:[(0,l.jsx)("img",{src:"http://image.tmdb.org/t/p/w500/"+t.poster_path,alt:t.title,width:100,height:150}),t.title]})})}},691:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a,c=n(439),u=n(87),o=n(791),i=n(242),s=n(11),p=n(168),l=n(822),f=l.Z.input(r||(r=(0,p.Z)(["\n    width: 400px;\n    height: 30px;\n    border: 0.4px solid #b1adad;\n    border-radius:8px 0px 0px 8px;\n"]))),h=l.Z.button(a||(a=(0,p.Z)(["\n    width:70px;\n    height: 33px;\n    border:none;\n    border-radius:0px 8px 8px 0px;\n    background-color:#e5990c;\n    color:#fff;\n"]))),d=n(184),v=function(){var e=(0,o.useState)({}),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,o.useState)(null),p=(0,c.Z)(a,2),l=p[0],v=p[1],m=(0,u.lr)(),x=(0,c.Z)(m,2),g=x[0],w=x[1],Z=g.get("query"),b=n.results;(0,o.useEffect)((function(){Z&&(0,i.P1)(Z).then((function(e){return r(e)})).catch((function(e){return v(e.message)}))}),[Z]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.filmName.value;w({query:t})},children:[(0,d.jsx)(f,{type:"text",required:!0,placeholder:"Enter film name...",name:"filmName",defaultValue:null!==Z&&void 0!==Z?Z:""}),(0,d.jsx)(h,{type:"submit",children:"Search"})]})}),(0,d.jsxs)("div",{children:[null!==l&&(0,d.jsxs)("p",{children:["Oops, something went wrong... Error: ",l]}),(0,d.jsx)("ul",{children:Array.isArray(b)&&b.length>0&&b.map((function(e){return(0,d.jsx)(s.G,{movie:e},e.id)}))})]})]})}}}]);
//# sourceMappingURL=691.8ce2f5ee.chunk.js.map