(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),r=(n(0),n(308)),s={id:"index-gettingstarted",title:"RedisAI Tutorial",sidebar_label:"RedisAI Tutorial",slug:"/howtos/redisai/getting-started",authors:["ajeet"]},o={unversionedId:"howtos/redisai/getting-started/index-gettingstarted",id:"howtos/redisai/getting-started/index-gettingstarted",isDocsHomePage:!1,title:"RedisAI Tutorial",description:"RedisAI is a Redis module for executing deep learning/machine learning models and managing their data. It provides tensors as a data type and deep learning model execution on CPUs and GPUs. RedisAI turns Redis Enterprise into a full-fledged deep  learning runtime.The RedisAI module is seamlessly plugged into Redis. It is a scalable platform that addresses the unique requirements for both AI training and AI inference in one server. It provides a complete software platform that allows data scientists to easily deploy and manage AI solutions for enterprise applications.",source:"@site/docs/howtos/redisai/getting-started/index-gettingstarted.mdx",slug:"/howtos/redisai/getting-started",permalink:"/howtos/redisai/getting-started",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisai/getting-started/index-gettingstarted.mdx",version:"current",sidebar_label:"RedisAI Tutorial",sidebar:"docs",previous:{title:"RedisAI Tutorial",permalink:"/howtos/redisai/"},next:{title:"How E-Commerce Websites Can Improve Market Basket Analysis with RedisAI and RedisGears",permalink:"/howtos/redisai/market-basket-analysis"}},l=[{value:"Step 1. Installing RedisAI",id:"step-1-installing-redisai",children:[]},{value:"Step 2. Setup Python Environment",id:"step-2-setup-python-environment",children:[]},{value:"Step 3. Install PIP",id:"step-3-install-pip",children:[]},{value:"Step 4. Clone the repository",id:"step-4-clone-the-repository",children:[]},{value:"Step 5. Install the dependencies",id:"step-5-install-the-dependencies",children:[]},{value:"Step 6. Build the ONNX Model",id:"step-6-build-the-onnx-model",children:[]},{value:"Step 7: Deploy the Model into RedisAI",id:"step-7-deploy-the-model-into-redisai",children:[]},{value:"Step 8. Make Some Predictions",id:"step-8-make-some-predictions",children:[]},{value:"Step 9. Set the input tensor",id:"step-9-set-the-input-tensor",children:[]},{value:"Step 10. Display TENSORGET in BLOB format",id:"step-10-display-tensorget-in-blob-format",children:[]},{value:"Step 11. Check the predictions",id:"step-11-check-the-predictions",children:[]},{value:"Step 12. Display TENSORGET META information",id:"step-12-display-tensorget-meta-information",children:[]},{value:"Step 13. Display TENSORGET META information with tensor values",id:"step-13-display-tensorget-meta-information-with-tensor-values",children:[]},{value:"Step 14. Run the model",id:"step-14-run-the-model",children:[]},{value:"Step 15. Make the prediction",id:"step-15-make-the-prediction",children:[]},{value:"References",id:"references",children:[]},{value:"Redis University",id:"redis-university",children:[]}],d={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RedisAI is a Redis module for executing deep learning/machine learning models and managing their data. It provides tensors as a data type and deep learning model execution on CPUs and GPUs. RedisAI turns Redis Enterprise into a full-fledged deep  learning runtime.The RedisAI module is seamlessly plugged into Redis. It is a scalable platform that addresses the unique requirements for both AI training and AI inference in one server. It provides a complete software platform that allows data scientists to easily deploy and manage AI solutions for enterprise applications. "),Object(r.b)("p",null,"The platform combines popular open source deep learning frameworks (PyTorch, ONNXRuntime, and TensorFlow), software libraries, and Redis modules like RedisGears, RedisTimeSeries, and more. With RedisAI, AI application developers no longer have to worry about tuning databases for performance. Requiring no added infrastructure, RedisAI lets you run your inference engine where the data lives, decreasing latency. "),Object(r.b)("p",null,"Below is an interesting example of Iris (a genus of species of flowering plants with showy flowers) classification based on measurement of width and length of sepal/petals that makes up input tensors and how to load these measurements into RedisAI:"),Object(r.b)("h3",{id:"step-1-installing-redisai"},"Step 1. Installing RedisAI"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," docker run \\\n   -p 6379:6379 \\\n   redislabs/redismod \\\n   --loadmodule /usr/lib/redis/modules/redisai.so \\\n     ONNX redisai_onnxruntime/redisai_onnxruntime.so\n")),Object(r.b)("p",null,"You will see that ONNX backend getting loaded as shown below in the results."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," 1:C 09 Jun 2021 12:28:47.985 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\n 1:C 09 Jun 2021 12:28:47.985 # Redis version=6.0.1, bits=64, commit=00000000, modified=0, pid=1, just started\n 1:C 09 Jun 2021 12:28:47.985 # Configuration loaded\n 1:M 09 Jun 2021 12:28:47.987 * Running mode=standalone, port=6379.\n 1:M 09 Jun 2021 12:28:47.987 # Server initialized\n 1:M 09 Jun 2021 12:28:47.987 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.\n 1:M 09 Jun 2021 12:28:47.989 * <ai> Redis version found by RedisAI: 6.0.1 - oss\n 1:M 09 Jun 2021 12:28:47.989 * <ai> RedisAI version 10003, git_sha=7f808a934dff121e188cb76fdfcc3eb1f9ec7cbf\n 1:M 09 Jun 2021 12:28:48.011 * <ai> ONNX backend loaded from /usr/lib/redis/modules/backends/redisai_onnxruntime/redisai_onnxruntime.so\n 1:M 09 Jun 2021 12:28:48.011 * Module 'ai' loaded from /usr/lib/redis/modules/redisai.so\n 1:M 09 Jun 2021 12:28:48.011 * Ready to accept connections\n")),Object(r.b)("p",null,"You can verify if the RedisAI module is loaded or not by running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," 127.0.0.1:6379> info modules\n # Modules\n module:name=ai,ver=10003,api=1,filters=0,usedby=[],using=[],options=[]\n\n # ai_git\n ai_git_sha:7f808a934dff121e188cb76fdfcc3eb1f9ec7cbf\n\n # ai_load_time_configs\n ai_threads_per_queue:1\n ai_inter_op_parallelism:0\n ai_intra_op_parallelism:0\n")),Object(r.b)("h3",{id:"step-2-setup-python-environment"},"Step 2. Setup Python Environment"),Object(r.b)("p",null,"Ensure that Python3.8+ is installed."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," brew install python\n")),Object(r.b)("p",null,"Create a Python virtual environment and activate it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," python3 -m venv venv\n . ./venv/bin/activate\n")),Object(r.b)("h3",{id:"step-3-install-pip"},"Step 3. Install PIP"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," pip install --upgrade pip\n")),Object(r.b)("h3",{id:"step-4-clone-the-repository"},"Step 4. Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redisai-iris\n")),Object(r.b)("h3",{id:"step-5-install-the-dependencies"},"Step 5. Install the dependencies"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," pip install -r requirements.txt\n")),Object(r.b)("h3",{id:"step-6-build-the-onnx-model"},"Step 6. Build the ONNX Model"),Object(r.b)("p",null,"RedisAI supports DL/ML identifiers and their respective backend libraries, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"TF: The TensorFlow backend"),Object(r.b)("li",{parentName:"ul"},"TFLITE: The TensorFlow Lite backend"),Object(r.b)("li",{parentName:"ul"},"TORCH: The PyTorch backend"),Object(r.b)("li",{parentName:"ul"},"ONNX: ONNXRuntime backend")),Object(r.b)("p",null,"A complete list of supported backends is in the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.redis.com/latest/modules/redisai/release-notes/redisai-1.0-release-notes/"}),"release notes for each version"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," python build.py\n")),Object(r.b)("h3",{id:"step-7-deploy-the-model-into-redisai"},"Step 7: Deploy the Model into RedisAI"),Object(r.b)("p",null,"A Model is a Deep Learning or Machine Learning frozen graph that was generated by some framework. The RedisAI Model data structure represents a DL/ML model that is stored in the database and can be run. Models, like any other Redis and RedisAI data structures, are identified by keys. A Model\u2019s key is created using the ",Object(r.b)("inlineCode",{parentName:"p"},"AI.MODELSET")," command and requires the graph payload serialized as a protobuf for input."),Object(r.b)("p",null,"NOTE: This requires redis-cli. If you don't have redis-cli, I've found the easiest way to get it is to download, build, and install Redis itself. Details can be found at ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/topics/quickstart"}),"the Redis quickstart page")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -x AI.MODELSET iris ONNX CPU BLOB < iris.onnx\n")),Object(r.b)("h3",{id:"step-8-make-some-predictions"},"Step 8. Make Some Predictions"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisai/commands/#aitensorset"}),"The ",Object(r.b)("inlineCode",{parentName:"a"},"AI.TENSORSET")," command")," stores a tensor as the value of a key."),Object(r.b)("p",null,"Launch redis-cli:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli\n")),Object(r.b)("h3",{id:"step-9-set-the-input-tensor"},"Step 9. Set the input tensor"),Object(r.b)("p",null,"This will set the key 'iris' to the 2x4 RedisAI tensor (i.e. 2 sets of inputs of 4 values each)."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," AI.TENSORSET iris:in FLOAT 2 4 VALUES 5.0 3.4 1.6 0.4 6.0 2.2 5.0 1.5\n")),Object(r.b)("p",null,"where, "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"iris:in refers to the tensor's key name,"),Object(r.b)("li",{parentName:"ul"},"FLOAT is a tensor's data type"),Object(r.b)("li",{parentName:"ul"},"{5.0 3.4 1.6 0.4} refers to 1st item with 4 features"),Object(r.b)("li",{parentName:"ul"},"{6.0 2.2 5.0 1.5} refers to 2nd item with 4 features")),Object(r.b)("h3",{id:"step-10-display-tensorget-in-blob-format"},"Step 10. Display TENSORGET in BLOB format"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AI.TENSORGET")," command returns a tensor stored as key's value.\nThe BLOB indicates that data is in binary format and is provided via the subsequent data argument"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli AI.TENSORGET iris:in BLOB\n "\\x00\\x00\\xa0@\\x9a\\x99Y@\\xcd\\xcc\\xcc?\\xcd\\xcc\\xcc>\\x00\\x00\\xc0@\\xcd\\xcc\\x0c@\\x00\\x00\\xa0@\\x00\\x00\\xc0?"\n')),Object(r.b)("h3",{id:"step-11-check-the-predictions"},"Step 11. Check the predictions"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli AI.TENSORGET iris:in VALUES\n 1) "5"\n 2) "3.4000000953674316"\n 3) "1.6000000238418579"\n 4) "0.40000000596046448"\n 5) "6"\n 6) "2.2000000476837158"\n 7) "5"\n 8) "1.5"\n')),Object(r.b)("h3",{id:"step-12-display-tensorget-meta-information"},"Step 12. Display TENSORGET META information"),Object(r.b)("p",null,"The META used with ",Object(r.b)("inlineCode",{parentName:"p"},"AI.TENSORGET")," returns the tensor's metadata as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli AI.TENSORGET iris:in META\n   1) "dtype"\n   2) "FLOAT"\n   3) "shape"\n   4) 1) (integer) 2\n      2) (integer) 4\n\n')),Object(r.b)("h3",{id:"step-13-display-tensorget-meta-information-with-tensor-values"},"Step 13. Display TENSORGET META information with tensor values"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'  redis-cli AI.TENSORGET iris:in META VALUES\n 1) "dtype"\n 2) "FLOAT"\n 3) "shape"\n 4) 1) (integer) 2\n    2) (integer) 4\n 5) "values"\n 6) 1) "5"\n    2) "3.4000000953674316"\n    3) "1.6000000238418579"\n    4) "0.40000000596046448"\n    5) "6"\n    6) "2.2000000476837158"\n    7) "5"\n    8) "1.5"\n')),Object(r.b)("h3",{id:"step-14-run-the-model"},"Step 14. Run the model"),Object(r.b)("p",null,"Define inputs for the loaded model."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli AI.MODELRUN iris INPUTS iris:in OUTPUTS iris:inferences iris:scores\n OK\n")),Object(r.b)("h3",{id:"step-15-make-the-prediction"},"Step 15. Make the prediction"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),' redis-cli AI.TENSORGET iris:inferences VALUES META\n 1) "dtype"\n 2) "INT64"\n 3) "shape"\n 4) 1) (integer) 2\n 5) "values"\n 6) 1) (integer) 0\n 2) (integer) 2\n')),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/redis-developer/redisai-iris"}),"Sample IRIS Classification Source Code")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redisai/"}),"RedisAI - A Server for Machine and Deep Learning Models"))),Object(r.b)("h3",{id:"redis-university"},"Redis University"),Object(r.b)("h4",{id:"redisai-explained"},"RedisAI Explained"),Object(r.b)("div",{class:"text--center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gbiqF-eyTW4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("h4",{id:"redisai-from-the-command-line"},"RedisAI from the Command Line"),Object(r.b)("div",{class:"text--center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-w6rxLyoJdA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}c.isMDXComponent=!0},308:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),c=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(s,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(m,o(o({ref:t},d),{},{components:n})):a.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);