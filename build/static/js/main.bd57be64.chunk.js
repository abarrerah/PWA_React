(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(15),r=n.n(c),s=n(3),i=n.n(s),u=n(4),p=n(6),o=n(16),h=n.n(o),j=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"8702d0948ca6c9aeaf376193f6cddd1e"}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(40),n(0)),l=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({}),s=Object(p.a)(r,2),o=s[0],h=s[1],l=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,j(n);case 3:a=e.sent,h(a),c("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)("input",{type:"text",className:"search",placeholder:"Search...",value:n,onChange:function(e){return c(e.target.value)},onKeyPress:l}),o.main&&Object(d.jsxs)("div",{className:"city",children:[Object(d.jsxs)("h2",{className:"city-name",children:[Object(d.jsx)("span",{children:o.name}),Object(d.jsx)("sup",{children:o.sys.country})]}),Object(d.jsxs)("div",{className:"city-temp",children:[Math.round(o.main.temp),Object(d.jsx)("sup",{children:"\xb0C"})]}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),alt:o.weather[0].description}),Object(d.jsx)("p",{children:o.weather[0].description})]})]})]})};r.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bd57be64.chunk.js.map