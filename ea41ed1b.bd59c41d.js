(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return r})),t.d(i,"metadata",(function(){return c})),t.d(i,"toc",(function(){return n})),t.d(i,"default",(function(){return p}));var s=t(3),a=t(7),o=(t(0),t(182)),d=t(184),r={id:"index-howtos",title:"HowTos & Tutorials",sidebar_label:"Redis HowTos",slug:"/howtos"},c={unversionedId:"howtos/overview/index-howtos",id:"howtos/overview/index-howtos",isDocsHomePage:!1,title:"HowTos & Tutorials",description:"HowTos",source:"@site/docs/howtos/overview/index-overview.mdx",slug:"/howtos",permalink:"/howtos",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/overview/index-overview.mdx",version:"current",sidebar_label:"Redis HowTos"},n=[{value:"HowTos",id:"howtos",children:[]},{value:"Tutorials",id:"tutorials",children:[]}],l={toc:n};function p(e){var i=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},l,t,{components:i,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"howtos"},"HowTos"),Object(o.b)("p",null,"This page holds a catalog with dozens of ready-to-use app listings from Redis Labs. Now it is easy to build, test and  deploy software that runs using Redis."),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Rate Limiting",imgPath:"ratelimiting.png",description:"How to build a Rate Limter using Redis",preview:"ratelimiting.png",page:"/howtos/ratelimiting/",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Shopping Cart",description:"Implementing a Shopping Cart using NodeJS & RedisJSON",page:"/howtos/shoppingcart/",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Movies Database",description:"How to search and list Movies database using RediSearch",page:"/howtos/moviesdatabase/getting-started",mdxType:"RedisCard"}))),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Leaderboard",description:"Building a Real-Time Leaderboard using Reds",page:"/howtos/leaderboard",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Fraud Detection",description:"Building Fraud Detection using Redis",page:"/howtos/frauddetection",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Caching",description:"How to cache REST API responses Using Redis & NodeJS",page:"/howtos/caching",mdxType:"RedisCard"}))),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Chat Application",description:"Building a Chat application using Redis",page:"/howtos/chatapp",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Analytics Dashboard app",description:"How to build an Analytics dashboard app using Redis",page:"/howtos/analytics",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Redis Popup Store",description:"How to build a Popup Store using RedisGears and RedisTimeSeries",page:"/howtos/popupstore",mdxType:"RedisCard"}))),Object(o.b)("h2",{id:"tutorials"},"Tutorials"),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Redisearch Tutorial",description:"Getting Started with Redisearch",page:"/howtos/redisearch",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"RedisJSON Tutorial",description:"Getting Started with RedisJSON",page:"/howtos/redisjson",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"RedisTimeSeries Tutorial",description:"Getting Started with RedisTimeSeries",page:"/howtos/redistimeseries",mdxType:"RedisCard"}))),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"RedisGraph Tutorial",description:"Getting Started with RedisGraph",page:"/howtos/redisgraph",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"RedisBloom",description:"Getting Started with RedisBloom",page:"/howtos/redisbloom",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"RedisGears",description:"Getting Started with RedisGears",page:"/howtos/redisgears",mdxType:"RedisCard"}))),Object(o.b)("div",{class:"row"},Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Python based application on Heroku using Redis",description:"How to build Python based Rate Limiting application on Heroku using Redis",page:"/howtos/herokupython",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"NodeJS based application on Heroku using Redis",description:"How to build NodeJS based Rate Limiting application on Heroku using Redis",page:"/howtos/herokunodejs",mdxType:"RedisCard"})),Object(o.b)("div",{class:"col"},Object(o.b)(d.a,{title:"Java based application on Heroku using Redis",description:"How to build Java based application on Heroku using Redis",page:"/howtos/herokujava",mdxType:"RedisCard"}))))}p.isMDXComponent=!0},184:function(e,i,t){"use strict";var s=t(0),a=t.n(s),o=t(182),d=t(190);t(183),t(55);i.a=function(e){var i=a.a.useState(!1),t=i[0],s=i[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!t)}})))),t&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(o.a,{components:d.a},e.children)))}}}]);