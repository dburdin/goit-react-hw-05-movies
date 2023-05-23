(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[841],{81:function(n,e,t){"use strict";t.d(e,{Df:function(){return l},TP:function(){return f},XT:function(){return u},tx:function(){return s},zv:function(){return p}});var r=t(861),o=t(757),a=t.n(o),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="b687de23fc0b495d34f2b135cc7089d8",u=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},841:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r,o,a,i,c,u=t(439),s=t(791),p=t(87),f=t(689),l=t(81),d=t(168),m=t(444),h=m.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n"]))),g=m.ZP.input(o||(o=(0,d.Z)(["\n  border: 1px solid lightsteelblue;\n  border-radius: 20px;\n  width: 500px;\n  font-size: inherit;\n  padding: 0 5px;\n  outline: none;\n"]))),v=m.ZP.button(a||(a=(0,d.Z)(["\n  display: block;\n  width: 150px;\n  height: 40px;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 20px;\n  background-color: lightsteelblue;\n  color: grey;\n\n  cursor: pointer;\n\n  transition-property: background-color, color;\n  transition-duration: 250ms;\n  transition-timing-function: linear;\n\n  :hover {\n    background-color: #ff7f50;\n    color: white;\n  }\n"]))),x=t(7),y=t.n(x),b=m.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  font-size: 20px;\n  flex-direction: column;\n  gap: 10px;\n  padding: 5px;\n"]))),w=(0,m.ZP)(p.rU)(c||(c=(0,d.Z)(["\n  display: flex;\n  text-decoration: none;\n  color: grey;\n  font-size: 20px;\n\n  transform: scale(1);\n\n  transition-property: transform, color;\n  transition-duration: 250ms;\n  transition-timing-function: linear;\n\n  :hover {\n    color: #ff7f50;\n    transform: scale(0.97);\n  }\n"]))),k=t(184),Z=function(n){var e=n.movies,t=n.location;return(0,k.jsx)(b,{children:e.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(w,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})};Z.propType={movies:y().arrayOf(y().shape({id:y().number.isRequired,title:y().string.isRequired}).isRequired).isRequired,location:y().object.isRequired};var _=function(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,p.lr)(),a=(0,u.Z)(o,2),i=a[0],c=a[1],d=(0,f.TH)(),m=i.get("name");(0,s.useEffect)((function(){m&&(0,l.XT)(m).then((function(n){if(0===n.total_results)return r([]),window.alert("Nothing Found! Please repeat your request!");r(n.results)})).catch((function(n){return console.log("error.message",n.message)}))}),[m]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.movie.value.toLowerCase();if(""===e.trim())return window.alert("You need enter something!");c({name:e}),n.currentTarget.reset()},children:[(0,k.jsx)(g,{type:"text",name:"movie",autoComplete:"off",placeholder:"Search movies"}),(0,k.jsx)(v,{type:"submit",children:"Search"})]}),t.length>0&&(0,k.jsx)(Z,{movies:t,location:d})]})}},888:function(n,e,t){"use strict";var r=t(47);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=841.f5532eff.chunk.js.map