(this["webpackJsonpvertical-tabs"]=this["webpackJsonpvertical-tabs"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(5),s=c.n(r),a=(c(11),c(4)),i=c.n(a),j=c(6),u=c(2),o=c(0);var b=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),b=a[0],l=a[1],d=Object(n.useState)(0),h=Object(u.a)(d,2),O=h[0],p=h[1],x=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,l(c),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Work Experience"}),c?Object(o.jsx)("p",{className:"loading",children:"Loading..."}):Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"left",children:b.map((function(e,t){return Object(o.jsx)("button",{onClick:function(){return p(t)},className:"btn ".concat(t===O&&"btn-active"),children:e.company},e.id)}))}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:b[O].title}),Object(o.jsx)("h3",{children:b[O].company}),Object(o.jsx)("p",{className:"date",children:b[O].dates}),Object(o.jsx)("ul",{children:b[O].duties.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]})]})]})};s.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9496193.chunk.js.map