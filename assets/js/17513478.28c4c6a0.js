"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="Basic usage",l={unversionedId:"learn/client-usage",id:"version-0.3/learn/client-usage",title:"Basic usage",description:"Compiling the code",source:"@site/versioned_docs/version-0.3/learn/client-usage.md",sourceDirName:"learn",slug:"/learn/client-usage",permalink:"/docs/learn/client-usage",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698048071,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"TAPLE Client",permalink:"/docs/learn/taple-client"},next:{title:"TAPLE Client configuration",permalink:"/docs/learn/client-config"}},s={},p=[{value:"Compiling the code",id:"compiling-the-code",level:2},{value:"Running a node",id:"running-a-node",level:2},{value:"REST API",id:"rest-api",level:3},{value:"Database Backups",id:"database-backups",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,i.kt)("h2",{id:"compiling-the-code"},"Compiling the code"),(0,i.kt)("p",null,"Rust versi\xf3n 1.67 or higher is required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone -b release-0.3 https://github.com/opencanarias/taple-client.git\n$ cd taple-client\n$ sudo apt install -y libprotobuf-dev protobuf-compiler cmake\n$ rustup target add wasm32-unknown-unknown\n$ cargo install --path client\n$ taple-client --version\n")),(0,i.kt)("p",null,"However, if you prefer, you can run TAPLE-Client through the docker images without compiling the code."),(0,i.kt)("h2",{id:"running-a-node"},"Running a node"),(0,i.kt)("p",null,"The minimum parameters required to start a Taple node are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret Key"),": This is the private key that the node will possess at the time of initialisation and represents its identity within the network. It can be generated using ",(0,i.kt)("inlineCode",{parentName:"li"},"taple-keygen"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Listen Addr"),": ",(0,i.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/fundamentals/addressing/"},"Multiaddr")," representing the network interfaces through which the node will listen for incoming connections. If no value is set, the default value will be ",(0,i.kt)("inlineCode",{parentName:"li"},"/ip4/0.0.0.0/tcp/40040"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"0.0.0.0")," represents that the node will listen on all available network interfaces, While ",(0,i.kt)("inlineCode",{parentName:"li"},"40040")," indicates the listening port. However, we can specify the interface and port as we see fit, for example, ",(0,i.kt)("inlineCode",{parentName:"li"},"/ip4/0.0.0.0/tcp/50000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Known Node"),": Multiaddr representing known nodes at startup. Except for the first one, all other nodes in the network must specify at least one known node.")),(0,i.kt)("p",null,"For more information about all the available options to start our node, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/client-config"},"this section"),"."),(0,i.kt)("p",null,"We then start by generating our cryptographic material to identify the node. For this we use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/client-tools#taple-keygen"},"taple-keygen")," tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Basic usage example"',title:'"Basic',usage:!0,'example"':!0},"taple-keygen\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"controller_id: EOZZyrorTvTioKsOP8PcGCngSF0b49ZuRlie5xtkuyOU\npeer_id: 12D3KooWDhATtx42CRiKBCPJt9EgcwaLzwemK4m9SbyRHfJtNE7W\nprivate_key: b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e\n")),(0,i.kt)("p",null,"Now, to start our first node, we must execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running binary"',title:'"Running','binary"':!0},'taple-client \\\n  -k b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \\\n  --network.listen-addr "/ip4/0.0.0.0/tcp/50000"\n')),(0,i.kt)("p",null,"If you prefer to run TAPLE-Client through its docker image, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running docker image"',title:'"Running',docker:!0,'image"':!0},"docker run \\\n  -p 50000:50000 \\\n  -e TAPLE_ID_PRIVATE_KEY=b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \\\n  -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \\\n  opencanarias/taple-client:0.3\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The TAPLE Client docker image sets, by default, an internal path to the container itself to host the database. In a production environment you will need to set an external path to the container to host the database in order not to lose the information. For this you will need to set the configuration variable ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/client-config#database-path"},"DB_PATH"),".")),(0,i.kt)("h3",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"Each node with TAPLE-Client has the capability to expose its REST API, ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/taple-client#api-rest"},"as mentioned earlier"),". It is not mandatory, but it might be necessary depending on the role our node plays within the use case. We can achieve this by using the following three parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"http"),": Enables the ",(0,i.kt)("em",{parentName:"li"},"API REST"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"http.port"),": Sets the communication port for the API REST; if not specified, it defaults to 3000."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"http.doc"),": Exposes the documentation of the API REST in ",(0,i.kt)("a",{parentName:"li",href:"https://swagger.io/specification/"},"OpenAPI")," format.")),(0,i.kt)("p",null,"Now, we will proceed to start the node. However, before doing so, we must ensure that we have turned off the nodes from the previous steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Enabling API REST"',title:'"Enabling',API:!0,'REST"':!0},'taple-client \\\n  -k b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \\\n  --network.listen-addr "/ip4/0.0.0.0/tcp/50000" \\\n  --http \\\n  --http.port 3000 \\\n  --http.doc\n')),(0,i.kt)("p",null,"If the previous node has been successfully initialized, you can access the node's documentation through ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/doc"},"this link"),"."),(0,i.kt)("admonition",{title:"Exposing services",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We note that the REST API is likely useful for your internal network. However, if you choose to expose the REST API endpoint publicly, you should deploy an additional authentication or rate-limiting mechanism to prevent abuse. Remember that event requests, if not signed, will be signed with the node's own identity. ")),(0,i.kt)("h3",{id:"database-backups"},"Database Backups"),(0,i.kt)("p",null,"To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because ",(0,i.kt)("strong",{parentName:"p"},"TAPLE Client")," is using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/google/leveldb"},"LevelDB"))," as database, in which hot backups are not supported so far."),(0,i.kt)("p",null,"In this ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/learn/client-config#environment-variables"},"section")),", you can find the definition of the different environment variables including ",(0,i.kt)("inlineCode",{parentName:"p"},"TAPLE_DB_PATH")," which represents the path where the database is located."))}u.isMDXComponent=!0}}]);