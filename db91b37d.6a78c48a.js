(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{160:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return d})),i.d(t,"default",(function(){return o}));var a=i(3),s=i(7),n=(i(0),i(178)),r=(i(183),i(184),i(179),i(180),{id:"index-redisgears",title:"Writing Your Serverless function using RedisGears browser tool",sidebar_label:"Writing Your Serverless Function using RedisInsight",slug:"/explore/redisinsight/redisgears"}),l={unversionedId:"explore/redisinsight/redisgears/index-redisgears",id:"explore/redisinsight/redisgears/index-redisgears",isDocsHomePage:!1,title:"Writing Your Serverless function using RedisGears browser tool",description:"RedisInsight has built-in support for Redis Modules like RedisJSON, RediSearch, RedisGraph, Streams, RedisTimeSeries, and RedisGears. RedisGears enables reactive programming at the database level. It's like using lambda functions, but with a dramatically lower latency, and with much less encoding/decoding overhead.",source:"@site/docs/explore/redisinsight/redisgears/index-redisgears.mdx",slug:"/explore/redisinsight/redisgears",permalink:"/explore/redisinsight/redisgears",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redisgears/index-redisgears.mdx",version:"current",sidebar_label:"Writing Your Serverless Function using RedisInsight",sidebar:"docs",previous:{title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool",permalink:"/explore/redisinsight/redisgraph"},next:{title:"Redis Modules in a Docker Container",permalink:"/explore/redismod"}},d=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",children:[]},{value:"Step 2. Run RedisInsight",id:"step-2-run-redisinsight",children:[]},{value:"Step 3.  Clone the repository",id:"step-3--clone-the-repository",children:[]},{value:"Step 4. Download the IMDB data",id:"step-4-download-the-imdb-data",children:[]},{value:"Step 5. Execute the script",id:"step-5-execute-the-script",children:[]},{value:"Step 6. Accessing RedisInsight",id:"step-6-accessing-redisinsight",children:[]},{value:"Step 7. Add the below script:",id:"step-7-add-the-below-script",children:[]},{value:"Additional References",id:"additional-references",children:[]}],c={toc:d};function o(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"RedisInsight has built-in support for Redis Modules like RedisJSON, RediSearch, RedisGraph, Streams, RedisTimeSeries, and RedisGears. RedisGears enables reactive programming at the database level. It's like using lambda functions, but with a dramatically lower latency, and with much less encoding/decoding overhead. "),Object(n.b)("p",null,"Support for RedisGears was first introduced in RedisInsight v1.5.0. RedisInsights allows you:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Explore the latest executed functions and analyze the results or errors. "),Object(n.b)("li",{parentName:"ul"},"Manage registered functions and get execution summary. "),Object(n.b)("li",{parentName:"ul"},"Code, build and execute functions.")),Object(n.b)("p",null,"RedisGears is a dynamic framework that enables developers to write and execute ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://oss.redislabs.com/redisgears/functions.html"}),"functions")," that implement data flows in Redis, while abstracting away the data\u2019s distribution and deployment. These capabilities enable efficient data processing using multiple models in Redis with infinite programmability, while remaining simple to use in any environment."),Object(n.b)("p",null,"Follow the below steps to get started with the RedisInsight browser tool for RedisGears."),Object(n.b)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/explore/redismod"}),"Follow this link to run Redis container with RedisGears modules enabled ")),Object(n.b)("h2",{id:"step-2-run-redisinsight"},"Step 2. Run RedisInsight"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"Follow this link to setup RedisInsight")," on your local machine"),Object(n.b)("h2",{id:"step-3--clone-the-repository"},"Step 3.  Clone the repository"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git clone https://github.com/RedisGears/ImdbExample\n$ cd ImdbExample\n")),Object(n.b)("h2",{id:"step-4-download-the-imdb-data"},"Step 4. Download the IMDB data"),Object(n.b)("p",null,"Download the data from this link and extract it to the current directory: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://datasets.imdbws.com/title.basics.tsv.gz"}),"https://datasets.imdbws.com/title.basics.tsv.gz")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"$ wget https://datasets.imdbws.com/title.basics.tsv.gz\n$ gunzip title.basics.tsv.gz\n")),Object(n.b)("h2",{id:"step-5-execute-the-script"},"Step 5. Execute the script"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"$ python3 UploadImdb.py -H localhost -P 6379\n\npython3 UploadImdb.py -H 192.168.1.9 -P 6379\n/Users/ajeetraina/projects/redis-datasets/redisgears/ImdbExample/UploadImdb.py:27: DeprecationWarning: Pipeline.hmset() is deprecated. Use Pipeline.hset() instead.\n  pipe.hmset(d['tconst'], d)\ndone\n")),Object(n.b)("h2",{id:"step-6-accessing-redisinsight"},"Step 6. Accessing RedisInsight"),Object(n.b)("p",null,"Choose \u201cRedisGears\u201d on the left menu."),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:i(511).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"step-7-add-the-below-script"},"Step 7. Add the below script:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"GB('KeysOnlyReader').map(lambda x: execute('hget', x, 'genres')).flatmap(lambda x: x.split(',')).countby().run()\n")),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:i(512).default,title:"image_tooltip"})),Object(n.b)("p",null,Object(n.b)("img",{alt:"alt_text",src:i(513).default,title:"image_tooltip"})),Object(n.b)("h2",{id:"additional-references"},"Additional References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/redisgears"}),"RedisGears Tutorials")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/frauddetection"}),"How to build a Fraud Detection System using RedisGears and RedisBloom")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/howtos/nlp"}),"Building a Pipeline for Natural Language Processing using RedisGears"))))}o.isMDXComponent=!0},180:function(e,t,i){"use strict";var a=i(0),s=i.n(a),n=i(178),r=i(186);i(179),i(55);t.a=function(e){var t=s.a.useState(!1),i=t[0],a=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return a(!i)}})))),i&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(n.a,{components:r.a},e.children)))}},181:function(e,t,i){"use strict";var a=i(0),s=i(182);t.a=function(){var e=Object(a.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},182:function(e,t,i){"use strict";var a=i(0),s=Object(a.createContext)(void 0);t.a=s},183:function(e,t,i){"use strict";var a=i(0),s=i.n(a),n=i(181),r=i(185),l=i(56),d=i.n(l),c=37,o=39;t.a=function(e){var t=e.lazy,i=e.block,l=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(n.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],v=a.Children.toArray(e.children);if(null!=p){var w=h[p];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&j(w)}var R=function(e){j(e),null!=p&&g(p,e)},x=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":i},b)},u.map((function(e){var t=e.value,i=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,i){switch(i.keyCode){case o:!function(e,t){var i=e.indexOf(t)+1;e[i]?e[i].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var i=e.indexOf(t)-1;e[i]?e[i].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},i)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},184:function(e,t,i){"use strict";var a=i(3),s=i(0),n=i.n(s);t.a=function(e){var t=e.children,i=e.hidden,s=e.className;return n.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:i,className:s}),t)}},511:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image1-bf17443d38f017aaea1d3a6faca57bda.png"},512:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image2-9a1b7403d2c91877ffc9983f57a13c95.png"},513:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/image3-de7e8a991a7dc9ff006d34ad4c3e3fde.png"}}]);