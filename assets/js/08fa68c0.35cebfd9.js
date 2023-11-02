"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5871],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),u=n,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return o?a.createElement(f,i(i({ref:t},p),{},{components:o})):a.createElement(f,i({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},27210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={},i="Under the hood",s={unversionedId:"discover/under-the-hood",id:"version-0.3/discover/under-the-hood",title:"Under the hood",description:"Rust",source:"@site/versioned_docs/version-0.3/discover/under-the-hood.md",sourceDirName:"discover",slug:"/discover/under-the-hood",permalink:"/docs/discover/under-the-hood",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"What's new in TAPLE",permalink:"/docs/discover/whats-new"},next:{title:"Glossary",permalink:"/docs/discover/glossary"}},l={},c=[{value:"Rust",id:"rust",level:2},{value:"LibP2P",id:"libp2p",level:2},{value:"Tokio",id:"tokio",level:2}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"under-the-hood"},"Under the hood"),(0,n.kt)("h2",{id:"rust"},"Rust"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," is a programming language initially developed by Graydon Hoare in 2006 while working at Mozilla, company that would later officially support the project in 2009, thus achieving its first stable version in 2014. Since then, the popularity and adoption of the language has been increasing due to its features, receiving support from significant companies in the industry such as Microsoft, Meta, Amazon and the Linux Foundation among others."),(0,n.kt)("p",null,"Rust is the main language of the TAPLE technology. Its main characteristic is the construction of secure code, it implements a series of features whose purpose is to guarantee ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memory_safety"},"memory safety"),", in addition to adding zero-cost abstractions that facilitate the use of the language without requiring complex syntaxes. Rust is able to provide these advantages without negatively affecting system performance, both from the point of view of the speed of a running process, as well as its energy consumption. In both characteristics, it maintains ",(0,n.kt)("a",{parentName:"p",href:"https://haslab.github.io/SAFER/scp21.pdf"},"performances")," equal or similar to C and C++."),(0,n.kt)("p",null,"Rust was chosen as a technology precisely because of these characteristics. From OpenCanarias, we attach great importance to the security of the developed software and its energy consumption and Rust was precisely the language that met our needs. Also, since it is a modern language, it includes certain utilities and/or features that would allow us to advance more quickly in the development of the technology."),(0,n.kt)("h2",{id:"libp2p"},"LibP2P"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"Libp2p"),' is a "stack of technologies" focused on the creation of ',(0,n.kt)("em",{parentName:"p"},"peer-to-peer")," applications. Thus, LibP2P allows your application to build nodes capable of interpreting a number of selectable protocols, which can be both message transmission and encryption among others. Libp2p goes a step further by offering the necessary tools to build any protocol from scratch or even to create ",(0,n.kt)("em",{parentName:"p"},"wrappers")," of other existing ones or simply to implement a new high-level layer for a protocol while maintaining its low-level operation. LibP2P also manages the transport layer of the node itself and offers solutions to problems known as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/NAT_traversal"},'"NAT Traversal"'),"."),(0,n.kt)("p",null,"LibP2P also places special emphasis on modularity, in such a way that each and every one of the previously mentioned elements are isolated from each other, can be modified without affecting each other and can be combined as desired, maintaining the principle of single responsibility and allowing code reuse. Once a protocol is developed for LibP2P, it can be used in any application regardless of how different they are from each other. This level of modularity allows even different protocols to be used depending on the medium to be used."),(0,n.kt)("p",null,"LibP2P was chosen for TAPLE because of its innovative approach to the creation of P2P applications through its tools and utilities that greatly facilitate development. It was also influenced by the fact that it is a technology with a background in the Web3 sector, as it was originally part of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/libp2p/"},"IPFS")," and has been used in ",(0,n.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/why-libp2p"},"Polkadot and Substrate")," as well as ",(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/es/developers/docs/networking-layer/"},"Ethereum 2.0"),"."),(0,n.kt)("h2",{id:"tokio"},"Tokio"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tokio.rs/#tk-lib-tokio"},"Tokio")," is a library for Rust aimed at facilitating the creation of ",(0,n.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/async-book/01_getting_started/01_chapter.html"},"asynchronous")," and ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch16-00-concurrency.html#:~:text=Concurrent%20programming%2C%20where%20different%20parts%20of%20a%20program%20execute%20independently"},"concurrent")," applications. It provides the necessary elements for the creation of an execution environment for task management, internally interpreted as ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Green_thread"},'"green threads"'),' (which Rust does not natively support). As well, as channels for communication between them among. It is also quite easy to use thanks to its syntax focused on "async / await" and has high scalability thanks to the reduced cost of creating and deleting tasks.'),(0,n.kt)("p",null,"Due to the previously mentioned characteristics and focusing on concurrency and scalability, Tokio is an adequate library for the needs you want to cover with TAPLE technology."))}h.isMDXComponent=!0}}]);