(this.webpackJsonpwhereami=this.webpackJsonpwhereami||[]).push([[0],{36:function(t,e,c){},55:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),a=c(28),i=c.n(a),s=c(17),r=c(71),l=c(78),j=c(72),h=c(73),b=(c(36),c(75)),u=c(77),d=c(79),x=c(80),O=c(81),g=c(76),m=c(39),p=c(2);function f(t){var e=t.locData,c=t.locFacts,n="https://api.mapbox.com/styles/v1/staswerno/ckwul5ede58pt14mkqz1m37et/tiles/256/{z}/{x}/{y}@2x?access_token=".concat("pk.eyJ1Ijoic3Rhc3dlcm5vIiwiYSI6ImNrd3VsMWNtaDFuazgybnJ0dDRuaW50MngifQ.WaBOHRssV7k6dUC4hJRDig"),o=m.DateTime.now(),a=e.location.country.toLowerCase(),i="https://flagcdn.com/w320/".concat(a,".jpg");return console.log(o.year),console.log(i),Object(p.jsxs)(b.a,{container:!0,spacing:3,mb:4,mr:1,justifyContent:"center",alignItems:"center",children:[Object(p.jsx)(b.a,{item:!0,children:Object(p.jsx)(u.a,{elevation:6,sx:{height:325,width:325},children:Object(p.jsxs)(r.a,{center:[e.location.lat,e.location.lng],zoom:13,scrollWheelZoom:!1,children:[Object(p.jsx)(l.a,{attribution:'\xa9 <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',url:n}),Object(p.jsx)(j.a,{position:[e.location.lat,e.location.lng],children:Object(p.jsx)(h.a,{children:"You are here."})})]})})}),Object(p.jsx)(b.a,{item:!0,children:Object(p.jsxs)(d.a,{sx:{width:325,height:325},elevation:6,square:!0,children:[Object(p.jsx)(x.a,{component:"img",height:"140",image:i,alt:"flag"}),Object(p.jsxs)(O.a,{children:[Object(p.jsxs)(g.a,{gutterBottom:!0,variant:"h6",component:"div",textAlign:"center",children:["Your IP is ",e.ip]}),Object(p.jsxs)(g.a,{gutterBottom:!0,variant:"body1",color:"text.secondary",textAlign:"center",children:["You are in ",Object(p.jsxs)("strong",{children:[e.location.city,","]})," ",Object(p.jsx)("strong",{children:c.name}),". ",Object(p.jsx)("br",{}),"Which is in ",Object(p.jsx)("strong",{children:c.region})," btw."," "]}),Object(p.jsxs)(g.a,{variant:"body2",color:"text.secondary",textAlign:"center",children:["You requested this information on: ",Object(p.jsx)("br",{})," ",Object(p.jsxs)("strong",{children:[o.year,"/",o.month,"/",o.day,Object(p.jsx)("br",{}),o.hour,":",o.minute,":",o.second]})]})]})]})})]})}var y=function(){var t=Object(n.useState)(!0),e=Object(s.a)(t,2),c=e[0],o=e[1],a=Object(n.useState)(!1),i=Object(s.a)(a,2),r=i[0],l=i[1],j=Object(n.useState)({}),h=Object(s.a)(j,2),b=h[0],u=h[1],d=Object(n.useState)({}),x=Object(s.a)(d,2),O=x[0],m=x[1],y="https://geo.ipify.org/api/v2/country,city?apiKey=".concat("at_5f6bofQyKCl74CrJGwUIzR3X41LSe");return Object(n.useEffect)((function(){l(!1),fetch(y).then((function(t){return t.json()})).then((function(t){u(t),o(!1)})).catch((function(){return l(!0)}))}),[]),Object(n.useEffect)((function(){if(Object.keys(b).length>0){console.log(b),console.log(b.location.country);var t=b.location.country,e="http://api.countrylayer.com/v2/alpha/".concat(t,"?access_key=").concat("caabb475ec153cd3da9ba52216664212");l(!1),fetch(e).then((function(t){return t.json()})).then((function(t){o(!1),m(t)})).catch((function(){return l(!0)}))}}),[b]),console.log("65",b),Object(p.jsx)("div",{className:"App",children:r?Object(p.jsx)("div",{children:Object(p.jsx)(g.a,{children:"something went wrong :( the api may have reached its request limit"})}):c?Object(p.jsx)("div",{children:Object(p.jsx)(g.a,{children:"loading"})}):Object(p.jsx)(f,{locData:b,locFacts:O})})};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5c00f50d.chunk.js.map