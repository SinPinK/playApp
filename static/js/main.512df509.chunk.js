(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(30),s=c.n(i),l=(c(43),c(5)),j=(c(44),c(15)),r=c.n(j),b=c(38),o=c(2),O=c(16),u=c(10),p=c(87),x=c(17),h=c(86),d=c(88),v=c(3),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=(t[0],t[1],n.a.useState(!1)),i=Object(l.a)(c,2),s=(i[0],i[1],n.a.useState(!0)),j=Object(l.a)(s,2),r=(j[0],j[1],Object(a.useState)({status_code:"null",id:"null"})),b=Object(l.a)(r,2),o=(b[0],b[1],Object(a.useState)([])),f=Object(l.a)(o,2),g=f[0],m=f[1],w=Object(a.useState)({withVariablesInReturn:!0,variables:{serviceName:{value:"",type:"string"},numberOfDays:{value:"",type:"string"},finalPrice:{value:"",type:"string"}}}),S=Object(l.a)(w,2),y=S[0],D=S[1];return Object(a.useEffect)((function(){var e="";for(var t in g)e=e+t+" "+g[t]+"  \n";D(Object(u.a)(Object(u.a)({},y),{},{variables:Object(u.a)(Object(u.a)({},y.variables),{},{serviceDescription:Object(u.a)(Object(u.a)({},y.variables.serviceDescription),{},{value:e})})}))}),[g]),Object(v.jsx)(a.Fragment,{children:Object(v.jsxs)(p.a,{cols:"12",gap:"xs",xAlign:"left",breakpoint:{xs:{colgap:"xs"},m:{colgap:"m"}},children:[Object(v.jsx)(p.b,{col:"12",row:"3"}),Object(v.jsx)(p.b,{col:"1"}),Object(v.jsx)(p.b,{col:"8",children:Object(v.jsx)(h.a,{id:"serviceName",style:{marginLeft:"0px",marginTop:"5px",marginBottom:"5px"},width:"full",size:"m",onChange:function(e){m(Object(u.a)(Object(u.a)({},g),{},Object(O.a)({},e.name,e.value))),console.log("ID: ",e," value: ",e.value)},value:g.serviceName,type:"text",placeholder:"",view:"default"})}),Object(v.jsx)(p.b,{col:"3"}),Object(v.jsx)(p.b,{col:"12",row:"3"}),Object(v.jsx)(p.b,{col:"1",row:"4"}),Object(v.jsx)(p.b,{col:"4",row:"4",children:Object(v.jsx)(d.a,{verticalSpace:"xl",horizontalSpace:"xl",children:Object(v.jsx)("form",{children:Object(v.jsx)(p.a,{col:"12",children:Object(v.jsx)(p.b,{col:"3",children:Object(v.jsx)(x.a,{as:"p",view:"secondary",font:"serif",size:"m",weight:"bold",lineHeight:"s",align:"left",children:"\u0423\u0441\u043b\u0443\u0433\u0430"})})})})})})]})})};var g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=(t[0],t[1]);return Object(a.useEffect)((function(){r()({method:"GET",url:"http://127.0.0.1:8000/api/test-api/"}).then((function(e){c(e.data)}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Hello from React to Django"}),Object(v.jsx)(b.a,{children:Object(v.jsx)(o.c,{children:Object(v.jsx)(o.a,{path:"/calculateservice/",element:Object(v.jsx)(f,{})})})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),m()}},[[76,1,2]]]);
//# sourceMappingURL=main.512df509.chunk.js.map