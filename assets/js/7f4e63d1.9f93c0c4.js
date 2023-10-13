"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="TAPLE Client configuration",s={unversionedId:"learn/taple-client",id:"version-0.1/learn/taple-client",title:"TAPLE Client configuration",description:"The configuration of a TAPLE node can be done at different levels, each of which overwrites the previous one in case of conflict. The order, and consequently the list of existing options, is as follows:",source:"@site/versioned_docs/version-0.1/learn/taple-client.md",sourceDirName:"learn",slug:"/learn/taple-client",permalink:"/docs/0.1/learn/taple-client",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Description",permalink:"/docs/0.1/learn/taple-core"},next:{title:"Backups",permalink:"/docs/0.1/learn/backups"}},l={},p=[{value:"Configuration by file",id:"configuration-by-file",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Input parameters",id:"input-parameters",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"taple-client-configuration"},"TAPLE Client configuration"),(0,r.kt)("p",null,"The configuration of a TAPLE node can be done at different levels, each of which overwrites the previous one in case of conflict. The order, and consequently the list of existing options, is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default configuration."),(0,r.kt)("li",{parentName:"ul"},"Configuration by ",(0,r.kt)("strong",{parentName:"li"},".toml")," file."),(0,r.kt)("li",{parentName:"ul"},"Configuration by input parameters."),(0,r.kt)("li",{parentName:"ul"},"Configuration by environment variables.")),(0,r.kt)("h2",{id:"configuration-by-file"},"Configuration by file"),(0,r.kt)("p",null,"All TAPLE nodes can be configured using a settings.toml file that is located in the same location as the binary. This file does not have to specify all possible parameters, only those that are of interest to overwrite with respect to the default parameters."),(0,r.kt)("p",null,"Below is an example of these files with all possible parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'    httpport = 3000\n    httpaddr = "0.0.0.0"\n    # apikey = "foo"\n    # swaggerui = true\n    # devmode = false\n\n    [network]\n    p2pport = 40000\n    addr = "/ip4/0.0.0.0/tcp"\n    knownodes = []\n    [node]\n    # Possible values: ed25519, secp256k1\n    keyderivator = "Ed25519"\n    # Possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512\n    digestderivator = "Blake3_256"\n    factor = 0.25\n    timeout = 3000\n    # Possible values:\n    # "dissabled" - Disabled -> Vote process depends of the user intervention\n    # "always_yes" - AlwaysYes -> Vote YES to all event requests\n    # "always_no" - AlwaysNo -> Vote NO to all event requests\n    passvotation = "dissabled"\n\n    [database]\n    path = "./store"\n')),(0,r.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,r.kt)("p",null,"There are several environment variables that can be used to configure the operation of a TAPLE node. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Bear in mind that any configuration through these variables will overwrite the one that has been done through the previous configuration file.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_HTTPPORT"),": Port on which the REST API of the TAPLE node will be executed. Port 3000 is used by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_HTTPADDR"),": Listening address of the REST API of the TAPLE node. By default ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"0.0.0.0.0")),", which implies listening for requests from all available interfaces."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_SWAGGERUI"),": Specifies whether swagger-ui is activated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_APIKEY"),": Specifies the API KEY for the rest api server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NETWORK_P2PPORT"),": Port for the transmission and reception of TAPLE protocol messages. Default is ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"50000")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NETWORK_ADDR"),": Listening address for TAPLE protocol messages in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/0.1/discover/glossary#multiaddr"},"Multiaddr"))," format. Default, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"/ip4/0.0.0.0.0/tcp")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NETWORK_KNOWNODES"),": List of bootstrap nodes available in the network. Each item in the list must be a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/0.1/discover/glossary#multiaddr"},"Multiaddr"))," address that also specifies the PeerID of the node via the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"/p2p"))," parameter. The elements are separated from each other by ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},'"; "')),". By default no bootstrap node is specified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_SEED"),": Allows to specify a seed for the generation of the node's internal cryptographic material. Note that, once a cryptographic material is generated, the node will not admit any other and will load it from its database. This is an optional configuration parameter. If neither this nor a private key to be imported is specified, a random cryptographic material shall be generated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_SECRETKEY"),": Allows to specify a private key to import. This must be in hexadecimal format. It cannot be specified at the same time as a seed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_KEYDERIVATOR"),": Specifies the cryptographic algorithm to be used for private key generation. Supported: Ed25519 (default) and Secp256k1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_DIGESTDERIVATOR"),": Specifies the hashing algorithm to be used for identifier generation. Supported: Blake3_256 (default), Blake3_512, SHA2_256, SHA2_512, SHA3_256 and SHA3_512."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_FACTOR"),": Percentage of available nodes to send protocol messages to. Default 0.25."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_TIMEOUT"),": Timeout in milliseconds between sending the same message during the transmission of events and signatures. Default 3000."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_DEVMODE"),": Specifies whether to enable developer mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_NODE_PASSVOTATION"),": Specifies the response vote to all vote requests. It requires the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"TAPLE_NODE_DEVMODE")),' enabled. Supported:  "dissabled" (default), "always_yes" and "always_no".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TAPLE_DATABASE_PATH"),": Path in which to store the database. Default ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"/tmp/data")),".",(0,r.kt)("admonition",{parentName:"li",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We strongly recommend to change ",(0,r.kt)("strong",{parentName:"p"},"TAPLE_DATABASE_PATH")," default path to any directory outside of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"/tmp/")),". This directory is cleaned by the Linux system each time it is suspended or shut down.")))),(0,r.kt)("h2",{id:"input-parameters"},"Input parameters"),(0,r.kt)("p",null,"In addition to environment variables, a node can be configured through input parameters. These allow you to specify the same elements as the environment variables. In case of conflict, however, the latter prevail."),(0,r.kt)("p",null,"The list of input parameters is given below. The same list can be obtained through the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"--help"))," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"    Node for a TAPLE network\xa0\n\n    Usage: taple_client [OPTIONS]\xa0\n\n    Options:\n          --hp <httpport>    Port HTTP for the API REST\n          --apikey <apikey>  API KEY for the api rest server\n          --ui               Flag to activate swagger-ui\n          --ha <httpaddr>    Listening ADDR for the API REST\n      -h, --help             Print help\n      -V, --version          Print version\xa0\n\n    network:\n    \xa0\xa0\xa0\xa0\xa0 --knownnodes <knownnodes>\xa0 List of access points to use by the node. Each element is separated by ';'\n    \xa0 -a, --addr <addr>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Listening address for protocol messages\n    \xa0 -p, --p2pport <p2pport>\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Port for the node to listen for protocol messages\xa0\n\n    node:\n    \xa0 -v, --passvotation <passvotation>\xa0 To vote to response to all vote request. It requires the dev mode enabled [possible values: dissabled, always_yes, always_no]\n    \xa0\xa0\xa0\xa0\xa0 --kd <keyderivator>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Key derivator to use by the TAPLE [possible values: ed25519, secp256k1]\n    \xa0 -s, --seed <seed>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Seed to use to generate the MC\n    \xa0 -f, --factor <factor>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Replication factor to use by the node\n    \xa0 -m, --devmode\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Flag to activate the developer mode\n    \xa0\xa0\xa0\xa0\xa0 --dd <digestderivator>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Digest derivator to use by the TAPLE [possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512]\n    \xa0 -k, --secretkey <secretkey>\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Secret Key in hexadecimal to import into the node\n    \xa0 -t, --timeout <timeout>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Replication factor to use by the node\xa0\n    \n    database:\n    \xa0 -d, --databasepath <path>\xa0 Path where to store the database\n")))}c.isMDXComponent=!0}}]);