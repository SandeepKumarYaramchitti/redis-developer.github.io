(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return o})),t.d(i,"metadata",(function(){return c})),t.d(i,"toc",(function(){return d})),t.d(i,"default",(function(){return p}));var s=t(3),r=t(7),a=(t(0),t(182)),n=t(184),o=(t(187),t(188),t(183),{id:"index-redisinsight",title:"RedisInsight",sidebar_label:"Overview",slug:"/explore/redisinsight"}),c={unversionedId:"explore/redisinsight/index-redisinsight",id:"explore/redisinsight/index-redisinsight",isDocsHomePage:!1,title:"RedisInsight",description:"<RedisCard",source:"@site/docs/explore/redisinsight/index-redisinsight.mdx",slug:"/explore/redisinsight",permalink:"/explore/redisinsight",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/index-redisinsight.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Explore Your Data",permalink:"/explore"},next:{title:"RedisInsight",permalink:"/explore/redisinsight/getting-started"}},d=[],l={toc:d};function p(e){var i=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,t,{components:i,mdxType:"MDXLayout"}),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Getting Started",imgPath:"redisinsight.png",description:"Install RedisInsight on Mac, Linux, Docker & Kubernetes",preview:"redisinsight.png",page:"/explore/redisinsight/getting-started",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Browser Tool",imgPath:"redisinsight.png",description:"Explore keys in your Redis database in real-time",preview:"redisinsight.png",page:"/explore/redisinsight/browser",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Slowlog Analysis",description:"Troubleshoot performance issue in your Redis server",page:"/explore/redisinsight/slowlog",mdxType:"RedisCard"}))),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Memory Analysis",description:"Improve your application performance",page:"/explore/redisinsight/memoryanalyzer",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Cluster Management",imgPath:"redisinsight.png",description:"A GUI to manage your Redis Cluster with ease",preview:"redisinsight.png",page:"/explore/redisinsight/cluster",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Using Redis Streams",imgPath:"redisinsight.png",description:"A Real-time data processing & effective managing data consumption ",preview:"redisinsight.png",page:"/explore/redisinsight/streams",mdxType:"RedisCard"}))),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Profiler Analysis Tool",description:"Analyze Your Redis commands using Profiler Analysis tool",page:"/explore/redisinsight/profiler",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"RedisGraph Browser Tool",imgPath:"",description:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool",preview:"redisinsight.png",page:"/explore/redisinsight/redisgraph",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"RedisGears Browser Tool",imgPath:"redisinsight.png",description:"Writing Your Serverless function using RedisGears browser tool",preview:"redisinsight.png",page:"/explore/redisinsight/redisgears",mdxType:"RedisCard"}))),Object(a.b)("div",{class:"row"},Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"RedisTimeSeries Browser Tool",description:"Managing time-series data using RedisTimeSeries Browser Tool",page:"/explore/redisinsight/redistimeseries",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"RediSearch Browser Tool",imgPath:"",description:"Unified Search and Analytics using RediSearch Browser tool",preview:"redisinsight.png",page:"/explore/redisinsight/redisearch",mdxType:"RedisCard"})),Object(a.b)("div",{class:"col"},Object(a.b)(n.a,{title:"Autodiscover Elasticache",imgPath:"",description:"Autodiscover Amazon Elasticache instances using RedisInsight",preview:"redisinsight.png",page:"/explore/redisinsight/autodiscover",mdxType:"RedisCard"}))))}p.isMDXComponent=!0},184:function(e,i,t){"use strict";var s=t(0),r=t.n(s),a=t(182),n=t(190);t(183),t(55);i.a=function(e){var i=r.a.useState(!1),t=i[0],s=i[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!t)}})))),t&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(a.a,{components:n.a},e.children)))}},185:function(e,i,t){"use strict";var s=t(0),r=t(186);i.a=function(){var e=Object(s.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},186:function(e,i,t){"use strict";var s=t(0),r=Object(s.createContext)(void 0);i.a=r},187:function(e,i,t){"use strict";var s=t(0),r=t.n(s),a=t(185),n=t(189),o=t(56),c=t.n(o),d=37,l=39;i.a=function(e){var i=e.lazy,t=e.block,o=e.defaultValue,p=e.values,u=e.groupId,g=e.className,m=Object(a.a)(),b=m.tabGroupChoices,h=m.setTabGroupChoices,v=Object(s.useState)(o),f=v[0],x=v[1],O=s.Children.toArray(e.children);if(null!=u){var j=b[u];null!=j&&j!==f&&p.some((function(e){return e.value===j}))&&x(j)}var w=function(e){x(e),null!=u&&h(u,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},g)},p.map((function(e){var i=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===i,className:Object(n.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===i}),key:i,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,i,t){switch(t.keyCode){case l:!function(e,i){var t=e.indexOf(i)+1;e[t]?e[t].focus():e[0].focus()}(e,i);break;case d:!function(e,i){var t=e.indexOf(i)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,i)}}(y,e.target,e)},onFocus:function(){return w(i)},onClick:function(){w(i)}},t)}))),i?Object(s.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,i){return Object(s.cloneElement)(e,{key:i,hidden:e.props.value!==f})}))))}},188:function(e,i,t){"use strict";var s=t(3),r=t(0),a=t.n(r);i.a=function(e){var i=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",Object(s.a)({role:"tabpanel"},{hidden:t,className:r}),i)}}}]);