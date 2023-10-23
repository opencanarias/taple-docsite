"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Governance",s={unversionedId:"discover/governance",id:"version-0.1/discover/governance",title:"Governance",description:"In this page we will describe the governance functionally. If you want to know how to define a governance to adapt it to your needs visit the governance configuration page.",source:"@site/versioned_docs/version-0.1/discover/governance.md",sourceDirName:"discover",slug:"/discover/governance",permalink:"/docs/0.1/discover/governance",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698048071,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Identity",permalink:"/docs/0.1/discover/identity"},next:{title:"Event life cycle",permalink:"/docs/0.1/discover/event-life-cycle"}},c={},l=[{value:"Subjects, nodes and governances",id:"subjects-nodes-and-governances",level:2},{value:"Components",id:"components",level:2},{value:"Members",id:"members",level:3},{value:"Schemas",id:"schemas",level:3},{value:"Policies",id:"policies",level:3},{value:"Governance as a subject",id:"governance-as-a-subject",level:2}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance"},"Governance"),(0,r.kt)("p",null,"In this page we will describe the governance functionally. If you want to know how to define a governance to adapt it to your needs visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/learn/operational-guides/governance-configuration"},"governance configuration")," page. "),(0,r.kt)("p",null,"A TAPLE network does not consist of a single ledger, but potentially multiple ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/discover/subjects#microledger"},"microledgers")," stored within subjects. The management of these subjects requires the definition of mechanisms to facilitate this task in batch, not individually for each one, which can be created dynamically."),(0,r.kt)("p",null,"Governance is the set of rules that define how the various participants in a TAPLE network interact with each other and their relationship with the subjects."),(0,r.kt)("p",null,"Governance is responsible for defining:\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the participants of one or more use cases;\xa0"),(0,r.kt)("li",{parentName:"ul"},"the schemes that are allowed to be used;\xa0"),(0,r.kt)("li",{parentName:"ul"},"the permissions that each participant has to operate in the network;"),(0,r.kt)("li",{parentName:"ul"},"and the roles that they will have over each subject.  ")),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"TAPLE governance is under active development. The current release does not include all planned functionality, for example, the definition of rules based on namespaces of interest. Future versions will include these capabilities.")),(0,r.kt)("h2",{id:"subjects-nodes-and-governances"},"Subjects, nodes and governances"),(0,r.kt)("p",null,"Governance defines the rules to be followed in a use case. However, a holder of a TAPLE node is not limited to participate in a single use case. For this reason, the following hierarchy of relationships appears:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A person, entity or organization owns an ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.1/discover/identity"},"identity"),"."),(0,r.kt)("li",{parentName:"ul"},"A TAPLE node is executed representing that identity."),(0,r.kt)("li",{parentName:"ul"},"An identity can be involved in several governance."),(0,r.kt)("li",{parentName:"ul"},"Each governance supports one or many use cases."),(0,r.kt)("li",{parentName:"ul"},"In each governance, the identity can have different roles, applied on different subjects."),(0,r.kt)("li",{parentName:"ul"},"Each TAPLE node can store multiple subjects."),(0,r.kt)("li",{parentName:"ul"},"Each subject is linked to a governance.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Relations",src:n(20835).Z,width:"897",height:"527"})),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"Governance is structured into the following components: members, schemas and policies"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Governance",src:n(96786).Z,width:"545",height:"345"})),(0,r.kt)("h3",{id:"members"},"Members"),(0,r.kt)("p",null,"These are the persons, entities or organizations that participate in the governance and therefore may be part of the use cases that are supported. Each member declares a unique identifier that represents the cryptographic material with which it will operate in the network."),(0,r.kt)("h3",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"Schemas are the data structures that model the information stored in the subjects. Within a governance, different schemas can be defined to support different use cases. When a subject is created, it defines which governance it is associated with and which schema it will use. "),(0,r.kt)("h3",{id:"policies"},"Policies"),(0,r.kt)("p",null,"Policies are the rules by which we define permissions and roles, i.e. who is allowed to do what things in a TAPLE network. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As we know, the owner of a subject ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/discover/subjects#ownership-model"},"is the only one who can act on it"),", and therefore has absolute freedom to modify it. Governance cannot prevent malicious owners from attempting to perform forbidden actions, but it does define the conditions under which the rest of the participants ignore, or penalize, these malicious behaviors.\xa0")),(0,r.kt)("h2",{id:"governance-as-a-subject"},"Governance as a subject"),(0,r.kt)("p",null,"Within the TAPLE network, the governance that governs it is managed as a subject, using the same protocol as the rest of the subjects for its ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/discover/event-life-cycle"},"generation, approval, validation and distribution"),". The subjects modeling governance meet the following conditions: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are created using the governance scheme. This schema does not belong to any member of the network and is defined internally in TAPLE protocol."),(0,r.kt)("li",{parentName:"ul"},"When a generic subject is created, the associated governance is specified. Conversely, when creating a subject intended to model a governance, no value is specified.")))}p.isMDXComponent=!0},96786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/governance-24a52fa207777771dff7937c333077f2.png"},20835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/relations-22d6c98983d80d068c1c5d53c117e7e3.png"}}]);