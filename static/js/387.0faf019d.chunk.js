"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{81:function(n,e,t){t.d(e,{Df:function(){return l},TP:function(){return f},XT:function(){return o},tx:function(){return s},zv:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="b687de23fc0b495d34f2b135cc7089d8",o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},387:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a,c=t(439),u=t(81),i=t(791),o=t(689),s=t(168),p=t(444),f=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center;\n  width: 100%;\n  margin-top: 10px;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: calc((100% - 60px) / 4);\n"]))),d=t(184),h=function(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,o.UO)().movieId;(0,i.useEffect)((function(){(0,u.zv)(a).then((function(n){r(n.cast)})).catch((function(n){return console.log("error.message",n.message)}))}),[a]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f,{children:t.map((function(n){var e=n.id,t=n.name,r=n.profile_path,a=n.character;return(0,d.jsxs)(l,{children:[(0,d.jsx)("img",{width:"150px",src:"".concat("http://image.tmdb.org/t/p/w300/").concat(r),alt:t}),(0,d.jsxs)("b",{children:["Name:",t]}),(0,d.jsxs)("p",{children:["Role: ",a]})]},e)}))})})}}}]);
//# sourceMappingURL=387.0faf019d.chunk.js.map