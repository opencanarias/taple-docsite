"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,v=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(v,o(o({ref:t},c),{},{components:a})):i.createElement(v,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={},o="Glossary",l={unversionedId:"discover/glossary",id:"version-0.2/discover/glossary",title:"Glossary",description:"A",source:"@site/versioned_docs/version-0.2/discover/glossary.md",sourceDirName:"discover",slug:"/discover/glossary",permalink:"/docs/0.2/discover/glossary",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Under the hood",permalink:"/docs/0.2/discover/under-the-hood"}},s={},d=[{value:"A",id:"a",level:2},{value:"Approver",id:"approver",level:3},{value:"B",id:"b",level:2},{value:"Bootstrap",id:"bootstrap",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"C",id:"c",level:2},{value:"Cryptography",id:"cryptography",level:3},{value:"D",id:"d",level:2},{value:"DLT",id:"dlt",level:3},{value:"E",id:"e",level:2},{value:"Edge Devices",id:"edge-devices",level:3},{value:"Event",id:"event",level:3},{value:"F",id:"f",level:2},{value:"Fog Computing",id:"fog-computing",level:3},{value:"Fog GateWay",id:"fog-gateway",level:3},{value:"G",id:"g",level:2},{value:"Governance",id:"governance",level:3},{value:"K",id:"k",level:2},{value:"Kademlia",id:"kademlia",level:3},{value:"L",id:"l",level:2},{value:"Ledger",id:"ledger",level:3},{value:"M",id:"m",level:2},{value:"Microledger",id:"microledger",level:3},{value:"Multiaddr",id:"multiaddr",level:3},{value:"N",id:"n",level:2},{value:"Node",id:"node",level:3},{value:"P",id:"p",level:2},{value:"P2P",id:"p2p",level:3},{value:"S",id:"s",level:2},{value:"Subject",id:"subject",level:3},{value:"T",id:"t",level:2},{value:"TAPLE",id:"taple",level:3},{value:"TAPLE Client",id:"taple-client",level:3},{value:"TAPLE Core",id:"taple-core",level:3},{value:"TAPLE Network",id:"taple-network",level:3},{value:"Transaction",id:"transaction",level:3},{value:"V",id:"v",level:2},{value:"Validator",id:"validator",level:3},{value:"W",id:"w",level:2},{value:"Witness",id:"witness",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"glossary"},"Glossary"),(0,n.kt)("h2",{id:"a"},"A"),(0,n.kt)("h3",{id:"approver"},"Approver"),(0,n.kt)("p",null,"Some event requests require a series of signatures to be approved and become part of a subject's microledger. This signature collection is a voting process where participants can vote in favor or against. These participants, defined in governance, are the approvers."),(0,n.kt)("h2",{id:"b"},"B"),(0,n.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,n.kt)("p",null,"It is part of the Kademlia protocol. It is the name of the node that is used for all news nodes that want to join the P2P Network to be discovered by all others."),(0,n.kt)("h3",{id:"blockchain"},"Blockchain"),(0,n.kt)("p",null,"Blockchain is a subtype of DLT, and therefore we can say that it is fundamentally a distributed, decentralized, shared, and immutable database. "),(0,n.kt)("h2",{id:"c"},"C"),(0,n.kt)("h3",{id:"cryptography"},"Cryptography"),(0,n.kt)("p",null,"It is the practice and study of techniques for secure communication in the presence of adversarial behavior."),(0,n.kt)("h2",{id:"d"},"D"),(0,n.kt)("h3",{id:"dlt"},"DLT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Immutable and tamper-resistant. It implements cryptographic security mechanisms that prevent its content from being altered, or at least, if any node tries to modify the information, it can be easily detected and blocked.\nStands for "Distributed Ledger Technology". A DLT is nothing more than a database that acts as such a ledger but also has, to a greater or lesser extent, the following characteristics:')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is distributed and decentralised."),(0,n.kt)("li",{parentName:"ul"},"Shared."),(0,n.kt)("li",{parentName:"ul"},"Immutable and tamper-resistant.")),(0,n.kt)("h2",{id:"e"},"E"),(0,n.kt)("h3",{id:"edge-devices"},"Edge Devices"),(0,n.kt)("p",null,"A device that provides an entry point into enterprise or service provider core networks."),(0,n.kt)("h3",{id:"event"},"Event"),(0,n.kt)("p",null,"The incident that occurs when the state of a subject is intended to be modified."),(0,n.kt)("h2",{id:"f"},"F"),(0,n.kt)("h3",{id:"fog-computing"},"Fog Computing"),(0,n.kt)("p",null,"It is an architecture that uses edge devices to carry out a substantial amount of computation, storage and communication locally and routed over the internet backbone."),(0,n.kt)("h3",{id:"fog-gateway"},"Fog GateWay"),(0,n.kt)("p",null,"Synonym for Edge Devices. A device that provides an entry point into enterprise or service provider core networks."),(0,n.kt)("h2",{id:"g"},"G"),(0,n.kt)("h3",{id:"governance"},"Governance"),(0,n.kt)("p",null,"Governance is a structure through which a participant or user of a system agrees to use the system. We can easily say that there are three principles that dictate governance. These principles include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Governing"),(0,n.kt)("li",{parentName:"ul"},"Rules"),(0,n.kt)("li",{parentName:"ul"},"Participants")),(0,n.kt)("h2",{id:"k"},"K"),(0,n.kt)("h3",{id:"kademlia"},"Kademlia"),(0,n.kt)("p",null,"It is a DTL that defines the structure of the network and how the information is exchanged through node lookups. The communications it's done using UDP and in the process, an overlay network of nodes identified by an ID is created. This ID is not only to useful to identify the node but also useful to determine the ",(0,n.kt)("em",{parentName:"p"},"distance")," between two nodes so the protocol can determine with whom it should communicate."),(0,n.kt)("h2",{id:"l"},"L"),(0,n.kt)("h3",{id:"ledger"},"Ledger"),(0,n.kt)("p",null,"A ledger is an accounting concept that basically defines a ledger in which information is always being added, usually in the form of transactions."),(0,n.kt)("h2",{id:"m"},"M"),(0,n.kt)("h3",{id:"microledger"},"Microledger"),(0,n.kt)("p",null,"The microledger is a set of events chained together using cryptographic mechanisms."),(0,n.kt)("h3",{id:"multiaddr"},"Multiaddr"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/multiformats/multiaddr"},"multiaddress"))," (often abbreviated multiaddr), is a convention for encoding multiple layers of addressing information into a single \u201cfuture-proof\u201d path structure. It human-readable and machine-optimized encodings of common transport and overlay protocols and allows many layers of addressing to be combined and used together."),(0,n.kt)("h2",{id:"n"},"N"),(0,n.kt)("h3",{id:"node"},"Node"),(0,n.kt)("p",null,"It is a computer connected to other computers that follows rules and shares information."),(0,n.kt)("h2",{id:"p"},"P"),(0,n.kt)("h3",{id:"p2p"},"P2P"),(0,n.kt)("p",null,"It is a distributed application architecture that partitions tasks or workloads between peers equally privileged and equipotent participants in the network that make up."),(0,n.kt)("h2",{id:"s"},"S"),(0,n.kt)("h3",{id:"subject"},"Subject"),(0,n.kt)("p",null,"Subjects are a logical entity or process that stores all the data necessary to define itself and that emits events throughout its life cycle with an order of emission determined by itself."),(0,n.kt)("h2",{id:"t"},"T"),(0,n.kt)("h3",{id:"taple"},"TAPLE"),(0,n.kt)("p",null,'Stands for "Tracking (Autonomous) of Provenance and Lifecycle Events\u200b". TAPLE is a permissioned DLT solution for traceability of assets and processes.'),(0,n.kt)("h3",{id:"taple-client"},"TAPLE Client"),(0,n.kt)("p",null,"Official client to create a TAPLE Node. It is the easiest way to work with TAPLE as it is a simple console application that provides everything needed to build a node (TAPLE Core, API Rest and different mechanisms settings)."),(0,n.kt)("h3",{id:"taple-core"},"TAPLE Core"),(0,n.kt)("p",null,"It is the library that implements most of the TAPLE functionality (creation and management of subjects and their associated microledgers, implementation of the P2P protocol for communication between nodes and database persistence). Any application that wants to be part of a TAPLE network must make use of this library from the API it exposes."),(0,n.kt)("h3",{id:"taple-network"},"TAPLE Network"),(0,n.kt)("p",null,"It is the P2P network created by all the TAPLE nodes in operation."),(0,n.kt)("h3",{id:"transaction"},"Transaction"),(0,n.kt)("p",null,"It is an agreement or communication between 2 different entities to accept a change in the state of a subject."),(0,n.kt)("h2",{id:"v"},"V"),(0,n.kt)("h3",{id:"validator"},"Validator"),(0,n.kt)("p",null,"The validator is a network participant who provides the security signature to the subject. The validator maintains a complete copy of the subjects it validates and commits to the network not to accept more than one version of the same event."),(0,n.kt)("h2",{id:"w"},"W"),(0,n.kt)("h3",{id:"witness"},"Witness"),(0,n.kt)("p",null,"Participant interested in having a copy of the subject and the information it stores."))}u.isMDXComponent=!0}}]);