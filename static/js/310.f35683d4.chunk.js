(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{81:function(n,e,t){"use strict";t.d(e,{Df:function(){return l},Dt:function(){return d},TP:function(){return f},XT:function(){return u},tx:function(){return s},zv:function(){return p}});var r=t(861),o=t(757),a=t.n(o),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="b687de23fc0b495d34f2b135cc7089d8",u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(n){return n?"http://image.tmdb.org/t/p/w300/"+n:"https://www.carnival.com.au/_ui/responsive/ccl/assets/images/notfound_placeholder.svg"}},174:function(n,e,t){"use strict";t.d(e,{O:function(){return m}});var r,o,a=t(7),i=t.n(a),c=t(168),u=t(444),s=t(87),p=u.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  font-size: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n  margin-top: 10px;\n"]))),f=(0,u.ZP)(s.rU)(o||(o=(0,c.Z)(["\n  display: flex;\n  text-decoration: none;\n  color: grey;\n  font-size: 20px;\n\n  transform: scale(1);\n\n  transition-property: transform, color;\n  transition-duration: 250ms;\n  transition-timing-function: linear;\n\n  :hover {\n    color: #ff7f50;\n    transform: scale(0.97);\n  }\n"]))),l=t(689),d=t(184),m=function(n){var e=n.movies,t=(0,l.TH)();return(0,d.jsx)(p,{children:e.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})};m.propType={movies:i().arrayOf(i().shape({id:i().number.isRequired,title:i().string.isRequired}).isRequired).isRequired}},310:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r,o,a,i=t(439),c=t(791),u=t(87),s=t(81),p=t(168),f=t(444),l=f.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n"]))),d=f.ZP.input(o||(o=(0,p.Z)(["\n  border: 1px solid lightsteelblue;\n  border-radius: 20px;\n  width: 500px;\n  font-size: inherit;\n  padding: 0 5px;\n  outline: none;\n"]))),m=f.ZP.button(a||(a=(0,p.Z)(["\n  display: block;\n  width: 150px;\n  height: 40px;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 20px;\n  background-color: lightsteelblue;\n  color: grey;\n\n  cursor: pointer;\n\n  transition-property: background-color, color;\n  transition-duration: 250ms;\n  transition-timing-function: linear;\n\n  :hover {\n    background-color: #ff7f50;\n    color: white;\n  }\n"]))),h=t(174),g=t(184),v=function(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,u.lr)(),a=(0,i.Z)(o,2),p=a[0],f=a[1],v=p.get("name");(0,c.useEffect)((function(){v&&(0,s.XT)(v).then((function(n){if(0===n.total_results)return r([]),window.alert("Nothing Found! Please repeat your request!");r(n.results)})).catch((function(n){return console.log("error.message",n.message)}))}),[v]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(l,{onSubmit:function(n){n.preventDefault();var e=n.target.movie.value.toLowerCase();if(""===e.trim())return window.alert("You need enter something!");f({name:e}),n.currentTarget.reset()},children:[(0,g.jsx)(d,{type:"text",name:"movie",autoComplete:"off",placeholder:"Search movies"}),(0,g.jsx)(m,{type:"submit",children:"Search"})]}),t.length>0&&(0,g.jsx)(h.O,{movies:t})]})}},888:function(n,e,t){"use strict";var r=t(47);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=310.f35683d4.chunk.js.map