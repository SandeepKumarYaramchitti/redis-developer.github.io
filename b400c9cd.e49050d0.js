(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1118:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/datadog-redis-72238fc1934a27dd98a2373a6a4f46ff.png"},1119:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-3502a8e4ff44d81c3eb542d52d7fa7bc.png"},1120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-370159a1aba409e22e29deb1967cdbc1.png"},1121:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-830146bed95ab4febee08dae923dc2cd.png"},1122:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-0a02980b029d4bed60135e65bf2275f7.png"},1123:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-9c19bf3e7977d28a7816018677f963ff.png"},1124:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-18d31671a3065c117018d4e47421c240.png"},1125:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-1f11634da146326ff2020ce275ec3cbf.png"},1126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image8-6745b061b39203811c7c33242078f01f.png"},1127:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image10-dd0f1dd3ee6350a01f38356fda628e78.png"},1128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-6b80ce4b9427660a1b75a63bb58c1209.png"},1129:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image12-e1688bffed20cea575c8998a7d236e83.png"},1130:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-7962d3f8f76e42b6caaf9ab841906e8e.png"},1131:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image14-aff4ae25cdc6e7f5a580f78524e379d9.png"},274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(363)),s={id:"index-datadog",title:"Redis Enterprise Observability with Datadog",sidebar_label:"Redis Enterprise Observability with Datadog",slug:"/explore/datadog",authors:["ajeet","christian"]},o={unversionedId:"explore/datadog/index-datadog",id:"explore/datadog/index-datadog",isDocsHomePage:!1,title:"Redis Enterprise Observability with Datadog",description:"Datadog",source:"@site/docs/explore/datadog/index-datadog.mdx",slug:"/explore/datadog",permalink:"/explore/datadog",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/datadog/index-datadog.mdx",version:"current",lastUpdatedAt:1651581191,sidebar_label:"Redis Enterprise Observability with Datadog",sidebar:"docs",previous:{title:"How to create Grafana Dashboards for Redis Enterprise cluster  in 5 Minutes",permalink:"/explore/redisexplorer"},next:{title:"Redis Modules in a Docker Container",permalink:"/explore/redismod"}},c=[{value:"Why Datadog?",id:"why-datadog",children:[]},{value:"Key Performance Indicators",id:"key-performance-indicators",children:[]},{value:"1. Latency",id:"1-latency",children:[]},{value:"2. Memory Usage Percentage",id:"2-memory-usage-percentage",children:[]},{value:"3. Cache Hit Rate",id:"3-cache-hit-rate",children:[]},{value:"4. Evictions",id:"4-evictions",children:[]},{value:"Secondary Indicators",id:"secondary-indicators",children:[]},{value:"1. Network Traffic",id:"1-network-traffic",children:[]},{value:"2. Connection Count",id:"2-connection-count",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Quickstart Guide:",id:"quickstart-guide",children:[]},{value:"Step 1. Set Up a Datadog Agent",id:"step-1-set-up-a-datadog-agent",children:[]},{value:"Step 2. Launch the Datadog agent on the Master node",id:"step-2-launch-the-datadog-agent-on-the-master-node",children:[]},{value:"Step 3. Configuring Datadog configuration file",id:"step-3-configuring-datadog-configuration-file",children:[]},{value:"Step 4. Restart the Datadog Agent service",id:"step-4-restart-the-datadog-agent-service",children:[]},{value:"Step 5. Viewing the Datadog UI",id:"step-5-viewing-the-datadog-ui",children:[]},{value:"Step 6. Verifying the Datadog Agent Status",id:"step-6-verifying-the-datadog-agent-status",children:[]},{value:"Redis Enterprise Cluster Top View",id:"redis-enterprise-cluster-top-view",children:[]},{value:"References:",id:"references",children:[]}]}],l={toc:c};function b(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Datadog",src:a(1118).default})),Object(i.b)("p",null,"Devops and SRE practitioners are already keenly aware of the importance of system reliability, as it\u2019s one of the shared goals in every high performing organization. Defining clear reliability targets based on solid data is crucial for productive collaboration between developers and SREs. This need spans the entire infrastructure from application to backend database services."),Object(i.b)("p",null,"Service Level Objectives (SLOs) provide a powerful interface for all teams to set clear performance and reliability goals based on Service Level Indicators (SLIs) or data points. A good model is to think of the SLIs as the data and the SLO as the information one uses to make critical decisions."),Object(i.b)("p",null,"Further Read: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos"}),"https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos")," "),Object(i.b)("h4",{id:"redis"},"Redis"),Object(i.b)("p",null,"Redis is a popular multi-model NoSQL database server that provides in-memory data access speeds for search, messaging, streaming, caching, and graph\u2014amongst other capabilities. Highly performant sites such as Twitter, Snapchat, Freshworks, GitHub, Docker, Pinterest, and Stack Overflow all look to Redis to move data in real time."),Object(i.b)("p",null,"Redis SLOs can be broken down into three main categories:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Category"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Definition"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example SLO"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example SLI"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Throughput"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of operations being pushed through the service in a given time period"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"System should be capable of performing 200M  operations per second"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redisenterprise.total_req")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Latency"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Elapsed time it takes for an operation"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Average write latency should not exceed 1 millisecond"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redis_enterprise.avg_latency")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Capacity"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Memory/storage/network limits of the underlying data source"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Database should have 20% memory overhead available to handle bursts"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redisenterprise.used_memory_percent")))),Object(i.b)("h3",{id:"why-datadog"},"Why Datadog?"),Object(i.b)("p",null,"Running your own performance data platform is time consuming and difficult. Datadog provides an excellent platform with an open source agent to collect metrics and allows them to be displayed easily and alerted upon when necessary."),Object(i.b)("p",null,"Datadog allows you to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Collect metrics from various infrastructure components out of the box"),Object(i.b)("li",{parentName:"ul"},"Display that data in easy to read dashboards"),Object(i.b)("li",{parentName:"ul"},"Monitoring performance metrics and alerting accordingly"),Object(i.b)("li",{parentName:"ul"},"Correlate log entries with metrics to quickly drill down to root causes"),Object(i.b)("li",{parentName:"ul"},"Distributed tracing")),Object(i.b)("h3",{id:"key-performance-indicators"},"Key Performance Indicators"),Object(i.b)("h3",{id:"1-latency"},"1. Latency"),Object(i.b)("h4",{id:"definition"},"Definition"),Object(i.b)("h5",{id:"redisenterpriseavg_latency-unit-microseconds"},"redisenterprise.avg_latency (unit: microseconds)"),Object(i.b)("p",null,"This is the average amount of time that a request takes to return from the time that it first hits the Redis Enterprise proxy until the response is returned. It does not include the full time from the remote client\u2019s perspective."),Object(i.b)("h5",{id:"characteristics"},"Characteristics"),Object(i.b)("p",null,"Since Redis is popular due to performance, generally you would expect most operations to return in single digit milliseconds. Tune any alerts to match your SLA. It\u2019s generally recommended that you also measure Redis operation latency at the client side to make it easier to determine if a server slow down or an increase in network latency is the culprit in any performance issues."),Object(i.b)("h5",{id:"possible-causes"},"Possible Causes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cause"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Factors"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Spike in requests"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check both the Network Traffic and Operations Per Second metrics to determine if there is a corresponding increase")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slow-running queries"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check the slow logs in the Redis Enterprise UI for the database")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Insufficient compute resources"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check to see if the CPU Usage, Memory Usage Percentage, or Evictions are increasing")))),Object(i.b)("h5",{id:"remediation"},"Remediation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Action"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Increase resources"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The database can be scaled up online by going to the Web UI and enabling clustering on the database. In extreme cases, more nodes can be added to the cluster and resources rebalanced")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inefficient queries"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Redis allows you to view slow logs with a tunable threshold. It can be viewed either in the Redis Enterprise UI or by running:   ",Object(i.b)("inlineCode",{parentName:"td"},"redis-cli -h HOST -p PORT -a PASSWORD SLOWLOG GET 100"))))),Object(i.b)("h3",{id:"2-memory-usage-percentage"},"2. Memory Usage Percentage"),Object(i.b)("h4",{id:"definition-1"},"Definition"),Object(i.b)("h5",{id:"redisenterprisememory_usage_percent-unit-percentage"},"redisenterprise.memory_usage_percent (unit: percentage)"),Object(i.b)("p",null,"This is the percentage of used memory over the memory limit set for the database."),Object(i.b)("h5",{id:"characteristics-1"},"Characteristics"),Object(i.b)("p",null,"In Redis Enterprise, all databases have a maximum memory limit set to ensure isolation in a multi-tenant environment. This is also highly recommended when running open source Redis. Be aware that Redis does not immediately free memory upon key deletion. Depending on the size of the database, generally between 80-95% is a safe threshold."),Object(i.b)("h5",{id:"possible-causes-1"},"Possible Causes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cause"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Factors"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible spike in activity"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check both the Network Traffic and Operations Per Second metrics to determine if there is a corresponding increase")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Database sized incorrectly"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View the Memory Usage raw bytes over time to see if a usage pattern has changed")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Incorrect retention policies"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check to see if keys are being Evicted or Expired")))),Object(i.b)("h5",{id:"remediation-1"},"Remediation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Action"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Increase resources"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The database memory limit can be raised online with no downtime through either the Redis Enterprise UI or the API")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Retention Policy"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In a caching use case, setting a TTL for unused data to expire is often helpful. In addition, Eviction policies can be set, however, these may often not be able to keep up in extremely high throughput environments with very tight resource constraints")))),Object(i.b)("h3",{id:"3-cache-hit-rate"},"3. Cache Hit Rate"),Object(i.b)("h5",{id:"definition-2"},"Definition"),Object(i.b)("h5",{id:"redisenterprisecache_hit_rate-unit-percent"},"redisenterprise.cache_hit_rate (unit: percent)"),Object(i.b)("p",null,"This is the percentage of time that Redis is accessing a key that already exists."),Object(i.b)("h5",{id:"characteristics-2"},"Characteristics"),Object(i.b)("p",null,"This metric is useful only in the caching use case and should be ignored for all other use cases. There are tradeoffs between the freshness of the data in the cache and efficacy of the cache mitigating traffic to any backend data service. These tradeoffs should be considered carefully when determining the threshold for alerting."),Object(i.b)("h5",{id:"possible-causes-2"},"Possible Causes"),Object(i.b)("p",null,"This is highly specific to the application caching with no general rules that are applicable in the majority of cases."),Object(i.b)("h5",{id:"remediation-2"},"Remediation"),Object(i.b)("p",null,"Note that Redis commands return information on whether or not a key or field already exists. For example, the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/hset"}),"HSET")," command returns the number of fields in the hash that were added."),Object(i.b)("h3",{id:"4-evictions"},"4. Evictions"),Object(i.b)("h5",{id:"definition-3"},"Definition"),Object(i.b)("h5",{id:"redisenterpriseevicted_objects-unit-count"},"redisenterprise.evicted_objects (unit: count)"),Object(i.b)("p",null,"This is the count of items that have been evicted from the database."),Object(i.b)("h5",{id:"characteristics-3"},"Characteristics"),Object(i.b)("p",null,"Eviction occurs when the database is close to capacity. In this condition, the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.redis.com/latest/rs/administering/database-operations/eviction-policy/"}),"eviction policy")," starts to take effect. While ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.io/commands/expire"}),"Expiration")," is fairly common in the caching use case, Eviction from the cache should generally be a matter of concern. At very high throughput and very restricted resource use cases, sometimes the eviction sweeps cannot keep up with memory pressure. Relying on Eviction as a memory management technique should be considered carefully."),Object(i.b)("h5",{id:"possible-causes-3"},"Possible Causes"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#possible-causes-1"}),"See Memory Usage Percentage Possible Causes")),Object(i.b)("h5",{id:"remediation-3"},"Remediation"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#remediation-1"}),"See Memory Usage Percentage Remediation")),Object(i.b)("h3",{id:"secondary-indicators"},"Secondary Indicators"),Object(i.b)("h3",{id:"1-network-traffic"},"1. Network Traffic"),Object(i.b)("h5",{id:"definition-4"},"Definition"),Object(i.b)("h5",{id:"redisenterpriseingress_bytesredisenterpriseegress_bytes-unit-bytes"},"redisenterprise.ingress_bytes/redisenterprise.egress_bytes (unit: bytes)"),Object(i.b)("p",null,"Counters for the network traffic coming into the database and out from the database."),Object(i.b)("h5",{id:"characteristics-4"},"Characteristics"),Object(i.b)("p",null,"While these two metrics will not help you pinpoint a root cause, network traffic is an excellent leading indicator of trouble. Changes in network traffic patterns indicate corresponding changes in database behavior and further investigation is usually warranted."),Object(i.b)("h3",{id:"2-connection-count"},"2. Connection Count"),Object(i.b)("h5",{id:"definition-5"},"Definition"),Object(i.b)("h5",{id:"redisenterpriseconns-unit-count"},"redisenterprise.conns (unit: count)"),Object(i.b)("p",null,"The number of current client connections to the database."),Object(i.b)("h5",{id:"characteristics-5"},"Characteristics"),Object(i.b)("p",null,"This metric should be monitored with both a minimum and maximum number of connections. The minimum number of connections not being met is an excellent indicator of either networking or application configuration errors. The maximum number of connections being exceeded may indicate a need to tune the database."),Object(i.b)("h5",{id:"possible-causes-4"},"Possible Causes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cause"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Factors"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum clients not met"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Incorrect client configuration, network firewall, or network issues")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum connections exceeded"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Client library is not releasing connections or an increase in the number of clients")))),Object(i.b)("h5",{id:"remediation-4"},"Remediation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Action"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clients Misconfigured"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Confirm client configurations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Networking issue"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Issue the PING command from a client node TELNET to the endpoint")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Too many connections"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Be sure that you are using pooling on your client library and that your pools are sized accordingly")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Too many connections"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using rladmin, run: tune proxy PROXY_NUMBER threads VALUE threads VALUE")))),Object(i.b)("p",null,"You can access the complete list of metrics ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/metadata.csv"}),"here"),"."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Follow the steps below to set up the Datadog agent to monitor your Redis Enterprise cluster, as well as database metrics:"),Object(i.b)("h3",{id:"quickstart-guide"},"Quickstart Guide:"),Object(i.b)("h4",{id:"prerequisites"},"Prerequisites:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redis.com/latest/rs/installing-upgrading/"}),"Follow this link")," to setup your Redis Enterprise cluster and database"),Object(i.b)("li",{parentName:"ul"},"Setup a Read-only user account by logging into your Redis Enterprise instance and visiting the \u201cAccess Control\u201d section")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1119).default})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a new user account with Cluster View Permissions.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1120).default})),Object(i.b)("h3",{id:"step-1-set-up-a-datadog-agent"},"Step 1. Set Up a Datadog Agent"),Object(i.b)("p",null,"Before we jump into the installation, let\u2019s look at the various modes that you can run the Datadog agent in:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"External Monitor Mode"),Object(i.b)("li",{parentName:"ul"},"Localhost Mode ")),Object(i.b)("h4",{id:"external-monitor-mode"},"External Monitor Mode"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1121).default})),Object(i.b)("p",null,"In external monitor mode, a Datadog agent running outside of the cluster can monitor multiple Redis Enterprise clusters, as shown in the diagram above."),Object(i.b)("h4",{id:"localhost-mode"},"Localhost Mode"),Object(i.b)("p",null,"Using localhost mode, the integration can be installed on every node of a Redis Enterprise cluster. This allows the user to correlate OS level metrics with Redis-specific metrics for faster root cause analysis. Only the  Redis Enterprise cluster leader will submit metrics and events to Datadog. In the event of a migration of the cluster leader, the new cluster leader will begin to submit data to Datadog."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1122).default})),Object(i.b)("p",null,"For this demo, we will be leveraging localhost mode as we just have two nodes to configure."),Object(i.b)("h3",{id:"step-2-launch-the-datadog-agent-on-the-master-node"},"Step 2. Launch the Datadog agent on the Master node"),Object(i.b)("p",null,"Pick up your preferred OS distribution and install the Datadog agent"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1123).default})),Object(i.b)("p",null,"Run the following command to install the integration wheel with the Agent. Replace the integration version with 1.0.1."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," datadog-agent integration install -t datadog-redisenterprise==<INTEGRATION_VERSION>\n")),Object(i.b)("h3",{id:"step-3-configuring-datadog-configuration-file"},"Step 3. Configuring Datadog configuration file"),Object(i.b)("p",null,"Copy the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/datadog_checks/redisenterprise/data/conf.yaml.example"}),"sample configuration")," and update the required sections to collect data from your Redis Enterprise cluster:"),Object(i.b)("h4",{id:"for-localhost-mode"},"For Localhost Mode"),Object(i.b)("p",null,"The following minimal configuration should be added to the Enterprise Master node."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," sudo vim /etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," #################################################################\n #  Base configuration\n init_config:\n\n instances:\n  - host: localhost\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n")),Object(i.b)("p",null,"Similarly, you need to add the edit the configuration file for the Enterprise Follower to add the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," sudo vim /etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  #################################################################\n  #  Base configuration\n  init_config:\n\n  instances:\n    - host: localhost\n      username: user@example.com\n      password: secretPassword\n      port: 9443\n")),Object(i.b)("h4",{id:"for-external-monitor-mode"},"For External Monitor Mode"),Object(i.b)("p",null,"The following configuration should be added to the Monitor node"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"#  Base configuration\ninit_config:\n\ninstances:\n  - host: cluster1.fqdn\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n\n  - host: cluster2.fqdn\n    username: user@example.com\n    password: secretPassword\n    port: 9443\n")),Object(i.b)("h3",{id:"step-4-restart-the-datadog-agent-service"},"Step 4. Restart the Datadog Agent service"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," sudo service datadog-agent restart\n")),Object(i.b)("h3",{id:"step-5-viewing-the-datadog-ui"},"Step 5. Viewing the Datadog UI"),Object(i.b)("p",null,"Find the Redis Enterprise Integration under the Integration Menu:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1124).default})),Object(i.b)("p",null,"Displaying the host reporting data to Datadog:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1125).default})),Object(i.b)("p",null,"Listing the Redis Enterprise dashboards:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1126).default})),Object(i.b)("p",null,"Host details under Datadog Infrastructure list:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1127).default})),Object(i.b)("p",null,"Datadog dashboard displaying host metrics of the 1st host (CPU, Memory Usage, Load Average etc):"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1128).default})),Object(i.b)("p",null,"Datadog dashboard displaying host metrics of the 2nd host:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1129).default})),Object(i.b)("h3",{id:"step-6-verifying-the-datadog-agent-status"},"Step 6. Verifying the Datadog Agent Status"),Object(i.b)("p",null,"Running the ",Object(i.b)("inlineCode",{parentName:"p"},"datadog-agent")," command shows that the Redis Enterprise integration is working correctly."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," sudo datadog-agent status\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redisenterprise (1.0.1)\n  -----------------------\n    Instance ID: redisenterprise:ef4cd60aadac5744 [OK]\n    Configuration Source: file:/etc/datadog-agent/conf.d/redisenterprise.d/conf.yaml\n    Total Runs: 2\n    Metric Samples: Last Run: 0, Total: 0\n    Events: Last Run: 0, Total: 0\n    Service Checks: Last Run: 0, Total: 0\n    Average Execution Time : 46ms\n    Last Execution Date : 2021-10-28 17:27:10 UTC (1635442030000)\n    Last Successful Execution Date : 2021-10-28 17:27:10 UTC (1635442030000)\n\n")),Object(i.b)("h3",{id:"redis-enterprise-cluster-top-view"},"Redis Enterprise Cluster Top View"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1130).default})),Object(i.b)("p",null,"Let\u2019s run a memory benchmark tool called redis-benchmark to simulate an arbitrary number of clients connecting at the same time and performing actions on the server, measuring how long it takes for the requests to be completed."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," memtier_benchmark --server localhost -p 19701 -a password\n [RUN #1] Preparing benchmark client...\n [RUN #1] Launching threads now...\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1131).default})),Object(i.b)("p",null,"This command instructs memtier_benchmark to connect to your Redis Enterprise database and generates a load doing the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Write objects only, no reads."),Object(i.b)("li",{parentName:"ul"},"Each object is 500 bytes."),Object(i.b)("li",{parentName:"ul"},"Each object has random data in the value."),Object(i.b)("li",{parentName:"ul"},"Each key has a random pattern, then a colon, followed by a random pattern.")),Object(i.b)("p",null,"Run this command until it fills up your database to where you want it for testing. The easiest way to check is on the database metrics page."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," memtier_benchmark --server localhost -p 19701 -a Oracle9ias12# -R -n allkeys -d 500 --key-pattern=P:P --ratio=1:0\n setting requests to 50001\n [RUN #1] Preparing benchmark client...\n [RUN #1] Launching threads now...\n")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(442).default})),Object(i.b)("p",null,"The Datadog Events Stream shows an instant view of your infrastructure and services events to help you troubleshoot issues happening now or in the past. The event stream displays the most recent events generated by your infrastructure and the associated monitors, as shown in the diagram below."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(442).default})),Object(i.b)("h3",{id:"references"},"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.datadoghq.com/integrations/redisenterprise/"}),"https://docs.datadoghq.com/integrations/redisenterprise/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/datadog_checks/redisenterprise/data/conf.yaml.example"}),"Datadog Sample Configuration")," for Redis Enterprise "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/DataDog/integrations-extras/blob/master/redisenterprise/metadata.csv"}),"Complete List of Performance Metrics"))))}b.isMDXComponent=!0},363:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},442:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image15-f22887c33eb24634cd301ab9f933f0ae.png"}}]);