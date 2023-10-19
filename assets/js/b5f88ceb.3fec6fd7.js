"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={},o="Overview",s={unversionedId:"discover/overview",id:"discover/overview",title:"Overview",description:"TAPLE is designed, not as a single application, but as a set of specifications, libraries and utilities. The aim is to enable integration and interoperability with different applications, devices and architectures.",source:"@site/docs/discover/overview.md",sourceDirName:"discover",slug:"/discover/overview",permalink:"/taple-docsite/docs/next/discover/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Use cases",permalink:"/taple-docsite/docs/next/discover/use-cases"},next:{title:"Key concepts",permalink:"/taple-docsite/docs/next/discover/key-concepts"}},c={},l=[{value:"TAPLE Node",id:"taple-node",level:2},{value:"TAPLE Core",id:"taple-core",level:2},{value:"TAPLE Client",id:"taple-client",level:2},{value:"Subjects",id:"subjects",level:2},{value:"Governances",id:"governances",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"TAPLE is designed, not as a single application, but as a set of specifications, libraries and utilities. The aim is to enable integration and interoperability with different applications, devices and architectures. "),(0,i.kt)("p",null,"The following diagram shows the usual elements of a TAPLE network. A brief description of each of them is given below so that we can obtain an overview before going into more detail."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Net overview",src:n(2786).Z,width:"949",height:"454"})),(0,i.kt)("h2",{id:"taple-node"},"TAPLE Node"),(0,i.kt)("p",null,"Running instance of a TAPLE compliant application and therefore implementing the TAPLE communication protocol, it can be part of a TAPLE network and can exchange information with other TAPLE nodes. A TAPLE node can be an standalone application running on a server, an app on a user's mobile phone, or a service on an IoT gateway."),(0,i.kt)("h2",{id:"taple-core"},"TAPLE Core"),(0,i.kt)("p",null,"Reference library that implements most of the TAPLE functionality. An application that wants to be part of a TAPLE network can make use of this library from the API it exposes. Some of its functions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creation and management of ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/subjects"},"subjects")," and their associated ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/subjects#microledger"},"microledgers")," "),(0,i.kt)("li",{parentName:"ul"},"Implementation of the ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/glossary#p2p"},"P2P")," protocol for communication between nodes."),(0,i.kt)("li",{parentName:"ul"},"Database persistence")),(0,i.kt)("p",null,"Each node is associated with an ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/identity"},"identity")," representing its owner. However, each node can participate in different use cases and, in each one, it can have different ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/roles"},"roles")," and perform different tasks. "),(0,i.kt)("h2",{id:"taple-client"},"TAPLE Client"),(0,i.kt)("p",null,"TAPLE Core is not a stand-alone application that can be run directly, but a library that has to be used from some application. TAPLE Client is the reference application to create a TAPLE Node. It is the easiest way to work with TAPLE as it is a simple console application that provides everything needed to build a node. Some of its functions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the TAPLE Core library"),(0,i.kt)("li",{parentName:"ul"},"Implements a Rest API to interact with the TAPLE network in a simple way"),(0,i.kt)("li",{parentName:"ul"},"Allows configuration by different mechanisms: configuration files, start-up parameters and environment variables")),(0,i.kt)("h2",{id:"subjects"},"Subjects"),(0,i.kt)("p",null,"TAPLE implements a ledger partitioning mechanism based on ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/subjects"},"subjects"),". Subjects are logical entities that represent an asset or process within a TAPLE network. In this way, instead of all participants having the same ledger, each participant stores only the subjects in which it is interested. "),(0,i.kt)("p",null,"Each subject consists of 2 elements: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an individual ledger, known as ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/subjects#microledger"},"microledger"),". The microledger is a structure of chained ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/events"},"events"),". Each of these events models any fact that we want to store associated with that subject, such as a modification of its properties or even its creation. "),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/subjects#subject-state"},"subject state"),", the representation of the information stored by a subject at a given instant, usually the current moment. The structure of the state of the subjects is defined through a ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/schemas"},"schema"),". Its content is updated based on the execution of ",(0,i.kt)("a",{parentName:"li",href:"/taple-docsite/docs/next/discover/smart-contracts"},"smart contracts"),", which have the event itself as input. ")),(0,i.kt)("p",null,"There is only one owner for each subject, being the only one with the effective capacity to make changes to the subject. All other participants wishing to make a change in a subject must send the owner an ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/events#event-life-cycle"},"event request"),". "),(0,i.kt)("h2",{id:"governances"},"Governances"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/governance"},"Governance")," is the definition of the rules of cooperation within the same use case. It defines the participants of the use case, the types of subjects and their structure, the smart contracts that will be in charge of modifying the states of these subjects, and the rules that define the permissions and roles of the different participants. The same node, and therefore the same identity, can act with different roles in different governance, but also within the same governance."),(0,i.kt)("p",null,"Within the TAPLE network, governance is managed as a special type of subject. Therefore, like any other subject, they have a single owner and has an associated schema an smart contract."))}d.isMDXComponent=!0},2786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/net-overview-f5727cdd5b314dc1f3faef882c12af8b.svg"}}]);