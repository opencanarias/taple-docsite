"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={pagination_next:"learn/core-usage"},i="Core Architecture",s={unversionedId:"learn/core-architecture",id:"version-0.3/learn/core-architecture",title:"Core Architecture",description:"TAPLE Core is a library that implements most of the functionality of the TAPLE protocols. The most straightforward way to develop a TAPLE-compliant application is to use this library as, for example, TAPLE Client does.",source:"@site/versioned_docs/version-0.3/learn/core-architecture.md",sourceDirName:"learn",slug:"/learn/core-architecture",permalink:"/docs/learn/core-architecture",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{pagination_next:"learn/core-usage"},sidebar:"learnSidebar",previous:{title:"Learn about TAPLE",permalink:"/docs/learn/"},next:{title:"Basic usage",permalink:"/docs/learn/core-usage"}},c={},l=[{value:"Network",id:"network",level:2},{value:"Messages",id:"messages",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Ledger",id:"ledger",level:2},{value:"Governance",id:"governance",level:2},{value:"API",id:"api",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-architecture"},"Core Architecture"),(0,o.kt)("p",null,"TAPLE Core is a library that implements most of the functionality of the TAPLE protocols. The most straightforward way to develop a TAPLE-compliant application is to use this library as, for example, ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/taple-client"},"TAPLE Client")," does."),(0,o.kt)("p",null,"Internally, it is structured in a series of layers with different responsibilities. A continuaci\xf3n se presenta una visi\xf3n simplificada a nivel de capas y bloques de la estructura de TAPLE Core. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"core-architecture",src:r(49928).Z,width:"665",height:"340"})),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)("p",null,"Layer in charge of managing network communications, i.e., the sending and receiving of information between the different nodes of the network. Internally, the implementation is based on the use of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/"},"LibP2P")," to resolve point-to-point communications. For this purpose, the following protocols are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#kad-dht"},"Kademlia"),", distributed hash table used as the foundation of peer routing functionality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/fundamentals/protocols/#identify"},"Identify"),", protocol that allows peers to exchange information about each other, most notably their public keys and known network addresses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/secure-comm/noise/"},"Noise"),", encryption scheme that allows for secure communication by combining cryptographic primitives into patterns with verifiable security properties."),(0,o.kt)("li",{parentName:"ul"},"Tell, asynchronous protocol for sending messages. Tell arose within the development of TAPLE as an alternative to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/libp2p-request-response/latest/libp2p_request_response/"},"LibP2P Request Response")," protocol that required waiting for responses.")),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"Layer in charge of managing message sending tasks. The TAPLE communications protocol handles different types of messages. Some of them require a response. Since communications are asynchronous, we do not wait for an immediate response. This is why some types of messages have to be resent periodically until the necessary conditions are satisfied. This layer is responsible for encapsulating protocol messages and managing forwarding tasks."),(0,o.kt)("h2",{id:"protocol"},"Protocol"),(0,o.kt)("p",null,"Layer in charge of managing the different types of messages of the TAPLE protocol and redirecting them to the parts of the application in charge of managing each type of message."),(0,o.kt)("h2",{id:"ledger"},"Ledger"),(0,o.kt)("p",null,"Layer in charge of managing event chains, the micro-ledgers. This layer handles the management of subjects, events, status updates, updating of outdated chains, etc. "),(0,o.kt)("h2",{id:"governance"},"Governance"),(0,o.kt)("p",null,"Module that manages the governances. Different parts of the application need to resolve conditions on the current or past state of some of the governance in which it participates. This module is in charge of managing these operations."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"Layer in charge of exposing the functionality of the TAPLE node. Subject and event queries, request issuance or approval management are some of the functionalities exposed. A notification channel is also exposed in which different events occurring within the node are published, for example the creation of subjects or events."))}u.isMDXComponent=!0},49928:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/core-architecture-98004eb9215df2b5774e2b6b3081eecb.svg"}}]);