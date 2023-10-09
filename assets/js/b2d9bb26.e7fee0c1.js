"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Classification of participants based on their interests"},i="Roles",s={unversionedId:"discover/roles",id:"discover/roles",title:"Roles",description:"Classification of participants based on their interests",source:"@site/docs/discover/roles.md",sourceDirName:"discover",slug:"/discover/roles",permalink:"/taple-docsite/docs/next/discover/roles",draft:!1,tags:[],version:"current",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{description:"Classification of participants based on their interests"},sidebar:"discoverSidebar",previous:{title:"Identity",permalink:"/taple-docsite/docs/next/discover/identity"},next:{title:"Smart Contracts",permalink:"/taple-docsite/docs/next/discover/smart-contracts"}},c={},p=[{value:"Owner",id:"owner",level:2},{value:"Issuer",id:"issuer",level:2},{value:"Evaluator",id:"evaluator",level:2},{value:"Approver\xa0",id:"approver",level:2},{value:"Validator",id:"validator",level:2},{value:"Witness",id:"witness",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Each network participant interacts with the network based on different interests. These interests are represented in TAPLE as roles."),(0,o.kt)("h2",{id:"owner"},"Owner"),(0,o.kt)("p",null,"Subject owner participant, who owns one or several subjects. They have total control over the subject because they possess the cryptographic material with permission to modify the subject."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Subject ownership can be obtained by creating it or receiving it from the previous owner.")),(0,o.kt)("h2",{id:"issuer"},"Issuer"),(0,o.kt)("p",null,"Participant who initiates a request to modify a subject. It can be the owner of a subject or another participant with sufficient permissions. "),(0,o.kt)("p",null,"All an issuer needs to participate in the network is a pair of cryptographic keys. These keys are sufficient to sign ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/events#event-request"},"event requests")," before sending them to the subject owner. This process of sending requests to the owner is currently external to the operation of TAPLE and must be solved by the implementer of the use case."),(0,o.kt)("p",null,"In addition, an issuer can be a member of the governance or it can be completely external and anonymous as the governance can define permissions at the level of members of the governance or for external participants."),(0,o.kt)("h2",{id:"evaluator"},"Evaluator"),(0,o.kt)("p",null,"Evaluators assume a crucial role within the governance framework, being responsible for carrying out the evaluation process. This process performs the execution of a smart contract, which usually results in a change in the state of the subject."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/event-evaluation-process"},"evaluation process"))),(0,o.kt)("h2",{id:"approver"},"Approver\xa0"),(0,o.kt)("p",null,"In order for certain event requests to obtain approval and be appended to a subject's micro-logger, a series of signatures is necessary. The acquisition of these signatures is contingent upon the evaluation's outcome. During the assessment of a contract, a decision is made regarding the need for approval, which may be influenced by the roles of the requesting issuer."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/event-approval-process"},"approval process"))),(0,o.kt)("h2",{id:"validator"},"Validator"),(0,o.kt)("p",null,"Validators are nodes that ensure the uniqueness of the chain without actually possessing a copy of it. They accomplish this by providing their ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/events#validators-signature"},"signature"),". A validator receives a proof of existence of the event and signs it. In addition, it undertakes not to sign, for the same subject ID and sequence number (SN), two different versions of an event, thus guaranteeing the uniqueness of each entry in the chain."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/discover/event-validation-process"},"validation process"))),(0,o.kt)("h2",{id:"witness"},"Witness"),(0,o.kt)("p",null,"Participant interested in having a copy of the subject and the information it stores. While the existence of witnesses is not strictly necessary, it is the only means to ensure network copies of the subject beyond the owner."))}u.isMDXComponent=!0}}]);