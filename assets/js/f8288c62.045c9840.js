"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4341],{3905:(t,l,n)=>{n.d(l,{Zo:()=>o,kt:()=>p});var e=n(67294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function r(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function a(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var k=e.createContext({}),i=function(t){var l=e.useContext(k),n=l;return t&&(n="function"==typeof t?t(l):d(d({},l),t)),n},o=function(t){var l=i(t.components);return e.createElement(k.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},c=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,r=t.originalType,k=t.parentName,o=a(t,["components","mdxType","originalType","parentName"]),c=i(n),p=u,b=c["".concat(k,".").concat(p)]||c[p]||s[p]||r;return n?e.createElement(b,d(d({ref:l},o),{},{components:n})):e.createElement(b,d({ref:l},o))}));function p(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var r=n.length,d=new Array(r);d[0]=c;var a={};for(var k in l)hasOwnProperty.call(l,k)&&(a[k]=l[k]);a.originalType=t,a.mdxType="string"==typeof t?t:u,d[1]=a;for(var i=2;i<r;i++)d[i]=n[i];return e.createElement.apply(null,d)}return e.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99131:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>k,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var e=n(87462),u=(n(67294),n(3905));const r={},d="TAPLE Client configuration",a={unversionedId:"learn/client-config",id:"version-0.2/learn/client-config",title:"TAPLE Client configuration",description:"The configuration of a TAPLE-Cient node can be done in different ways. The supported mechanisms are listed below, from the highest to the lowest priority:",source:"@site/versioned_docs/version-0.2/learn/client-config.md",sourceDirName:"learn",slug:"/learn/client-config",permalink:"/taple-docsite/docs/0.2/learn/client-config",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696909591,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Basic usage",permalink:"/taple-docsite/docs/0.2/learn/client-usage"},next:{title:"Approvals",permalink:"/taple-docsite/docs/0.2/api-rest/approvals"}},k={},i=[{value:"General options",id:"general-options",level:2},{value:"Database path",id:"database-path",level:3},{value:"ID private key",id:"id-private-key",level:3},{value:"ID key derivator",id:"id-key-derivator",level:3},{value:"Network",id:"network",level:2},{value:"Listen address",id:"listen-address",level:3},{value:"Known node",id:"known-node",level:3},{value:"External Address",id:"external-address",level:3},{value:"API REST",id:"api-rest",level:2},{value:"Enable/disable",id:"enabledisable",level:3},{value:"Enable/disable documentation",id:"enabledisable-documentation",level:3},{value:"Port",id:"port",level:3},{value:"Address",id:"address",level:3},{value:"Smart contracts",id:"smart-contracts",level:2},{value:"Build path",id:"build-path",level:3}],o={toc:i};function s(t){let{components:l,...n}=t;return(0,u.kt)("wrapper",(0,e.Z)({},o,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"taple-client-configuration"},"TAPLE Client configuration"),(0,u.kt)("p",null,"The configuration of a TAPLE-Cient node can be done in different ways. The supported mechanisms are listed below, from the highest to the lowest priority:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Environment variables."),(0,u.kt)("li",{parentName:"ul"},"Input parameters."),(0,u.kt)("li",{parentName:"ul"},"File ",(0,u.kt)("strong",{parentName:"li"},"settings.toml"),"."),(0,u.kt)("li",{parentName:"ul"},"Default value.")),(0,u.kt)("h2",{id:"general-options"},"General options"),(0,u.kt)("h3",{id:"database-path"},"Database path"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Path where the database is stored")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_DB_PATH"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"-d"),", ",(0,u.kt)("code",null,"--db-path"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"db-path"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"Any valid writable folder path. Default to ",(0,u.kt)("code",null,"$HOME_PATH/.taple/db"),". if it does not exist or does not have write permissions, it uses ",(0,u.kt)("code",null,"tmp/.taple/db")))),(0,u.kt)("h3",{id:"id-private-key"},"ID private key"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Private key identifying the node's owner")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_ID_PRIVATE_KEY"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"-k"),", ",(0,u.kt)("code",null,"--id-private-key"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"id-private-key"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"Private keys associated with an identity in TAPLE. HEX format"))),(0,u.kt)("h3",{id:"id-key-derivator"},"ID key derivator"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"key derivative to be used by the Taple node.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_ID_KEY_DERIVATOR"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--id-key-derivator"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"id-key-derivator"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,(0,u.kt)("code",null,"ed25519 (default)"),", ",(0,u.kt)("code",null,"secp256k1")))),(0,u.kt)("h2",{id:"network"},"Network"),(0,u.kt)("h3",{id:"listen-address"},"Listen address"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Network interface on which incoming connections are listened for")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_NETWORK_LISTEN_ADDR"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"-a"),", ",(0,u.kt)("code",null,"--network.listen-addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[network]",(0,u.kt)("br",null),"listen-addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"A valid multiaddr representing a listen interface. More than 1 value can be specified. Default value: ",(0,u.kt)("code",null,"/ip4/0.0.0.0/tcp/40040")))),(0,u.kt)("h3",{id:"known-node"},"Known node"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Address of a known node at start-up")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_NETWORK_KNOWN_NODE"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--network.known-node"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[network]",(0,u.kt)("br",null),"known-node"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"A valid multiaddr. More than 1 value can be specified."))),(0,u.kt)("h3",{id:"external-address"},"External Address"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Public address known at start-up")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_NETWORK_EXTERNAL_ADDR"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--network.external-addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[network]",(0,u.kt)("br",null),"external-addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"A valid multiaddr. More than 1 value can be specified."))),(0,u.kt)("h2",{id:"api-rest"},"API REST"),(0,u.kt)("h3",{id:"enabledisable"},"Enable/disable"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Enable/disable API REST")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_HTTP"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--http"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[http]",(0,u.kt)("br",null),"http"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"Boolean value. Default: ",(0,u.kt)("code",null,"false")))),(0,u.kt)("h3",{id:"enabledisable-documentation"},"Enable/disable documentation"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Enable/disable API REST documentation")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_HTTP_DOC"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--http.doc"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[http]",(0,u.kt)("br",null),"doc"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"Boolean value. Default: ",(0,u.kt)("code",null,"false")))),(0,u.kt)("h3",{id:"port"},"Port"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"API REST port")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_HTTP_PORT"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--http.port"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[http]",(0,u.kt)("br",null),"port"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"A valid port number. Default: ",(0,u.kt)("code",null,"3000")))),(0,u.kt)("h3",{id:"address"},"Address"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Network interface on which incoming connections are listened for")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_HTTP_ADDR"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--http.addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[http]",(0,u.kt)("br",null),"addr"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"A valid network interface. Default: ",(0,u.kt)("code",null,"0.0.0.0")))),(0,u.kt)("h2",{id:"smart-contracts"},"Smart contracts"),(0,u.kt)("h3",{id:"build-path"},"Build path"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Description")),(0,u.kt)("td",null,"Path where smart contracts are compiled")),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"EnvVar")),(0,u.kt)("td",null,(0,u.kt)("code",null,"TAPLE_SC_BUILD_PATH"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Input param")),(0,u.kt)("td",null,(0,u.kt)("code",null,"--sc.build-path"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"settings.toml")),(0,u.kt)("td",null,(0,u.kt)("code",null,"[sc]",(0,u.kt)("br",null),"build-path"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("b",null,"Admited values")),(0,u.kt)("td",null,"Any valid writable folder path. Default to ",(0,u.kt)("code",null,"$HOME_PATH/.taple/sc"),". if it does not exist or does not have write permissions, it uses ",(0,u.kt)("code",null,"tmp/.taple/sc")))))}s.isMDXComponent=!0}}]);