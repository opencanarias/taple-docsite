"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=c(n),p=a,h=v["".concat(l,".").concat(p)]||v[p]||d[p]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},73385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},s="Events",o={unversionedId:"discover/events",id:"version-0.1/discover/events",title:"Events",description:"Events are the data structures that make up the microledger, i.e., the chain of events. Each event is composed of the following:",source:"@site/versioned_docs/version-0.1/discover/events.md",sourceDirName:"discover",slug:"/discover/events",permalink:"/docs/0.1/discover/events",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698048071,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Schemas",permalink:"/docs/0.1/discover/schemas"},next:{title:"Identity",permalink:"/docs/0.1/discover/identity"}},l={},c=[{value:"Event Request",id:"event-request",level:2},{value:"Signatures",id:"signatures",level:2},{value:"Issuer signature",id:"issuer-signature",level:3},{value:"Approvers signature",id:"approvers-signature",level:3},{value:"Subject signature\xa0",id:"subject-signature",level:3},{value:"Validators signature",id:"validators-signature",level:3},{value:"Event types",id:"event-types",level:2},{value:"Genesis Event",id:"genesis-event",level:3},{value:"State Event",id:"state-event",level:3},{value:"Transfer Event",id:"transfer-event",level:3},{value:"End of Life Event (EOL)",id:"end-of-life-event-eol",level:3}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"Events are the data structures that make up the microledger, i.e., the chain of events. Each event is composed of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The request that generated the event"),(0,a.kt)("li",{parentName:"ul"},"The cryptographic fingerprint of the previous event to form the chain"),(0,a.kt)("li",{parentName:"ul"},"A series of meta information related to the subject and the event"),(0,a.kt)("li",{parentName:"ul"},"A group of different signatures that are added as the event progresses in its life cycle")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microledger structure",src:n(77902).Z,width:"802",height:"286"})),(0,a.kt)("h2",{id:"event-request"},"Event Request"),(0,a.kt)("p",null,"Events are initially generated from an event request. This request contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The type of event to generate;"),(0,a.kt)("li",{parentName:"ul"},"The information to include in the microledger, for example, to modify the subject's state;"),(0,a.kt)("li",{parentName:"ul"},"The signature of the invoker, which can be the subject's owner or another participant with sufficient permissions.")),(0,a.kt)("p",null,"After generating an event request, it is sent to the subject's owner for approval and, if correct, it is converted into an event and becomes part of the subject's microledger."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.1/discover/event-life-cycle"},"Event Life Cycle")," page for more details on how an event request becomes part of the microledger.")),(0,a.kt)("h2",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"Each event includes a series of signatures that provide different guarantees."),(0,a.kt)("h3",{id:"issuer-signature"},"Issuer signature"),(0,a.kt)("p",null,"As explained, each event is generated from an event request. This request is signed by the participant who generates it, the invoker, providing assurance of who originated it. Additionally, it's the way that the network participants, at different stages of the event life cycle, can verify if the invoker had permission to make the request."),(0,a.kt)("h3",{id:"approvers-signature"},"Approvers signature"),(0,a.kt)("p",null,"Depending on the use case, governance may specify that certain event requests must be approved. This means that, for an request to be transformed into an event, it must provide a series of additional signatures that give agreement on the request's content."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In TAPLE, ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.1/discover/governance"},"governance is a real subject")," and typically its modifications require an approval phase.")),(0,a.kt)("h3",{id:"subject-signature"},"Subject signature\xa0"),(0,a.kt)("p",null,"When creating the subject, a pair of keys was created that only the owner possesses. Each event is signed with the subject's private key, providing assurance that the event was generated by the owner."),(0,a.kt)("h3",{id:"validators-signature"},"Validators signature"),(0,a.kt)("p",null,"Due to the single-owner model, the owner of a subject could attempt to manipulate the network by generating different versions of the same event and sending different versions to different participants based on their own interests. To prevent this, a series of validation signatures must be collected before an event is distributed. Governance defines who the potential validators are and how many signatures are required to be collected."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The validation signatures are not part of the chain, but give guarantees to the participants that the owner is not being malicious. It is only necessary to store the validation signatures of the last event received, and the previous ones can be deleted. ")),(0,a.kt)("h2",{id:"event-types"},"Event types"),(0,a.kt)("p",null,"Within TAPLE, there are different types of events when operating with a subject."),(0,a.kt)("h3",{id:"genesis-event"},"Genesis Event"),(0,a.kt)("p",null,"It is the starting event from which subjects are created. Each subject has a unique genesis event. In it, the subject's identifier, its owner, and the schema that will model the subject's state are defined."),(0,a.kt)("h3",{id:"state-event"},"State Event"),(0,a.kt)("p",null,"Events that modify the subject's state, that is, the data structure stored within the subject."),(0,a.kt)("h3",{id:"transfer-event"},"Transfer Event"),(0,a.kt)("p",null,"Events that allow the owner of a subject to be modified. A subject has a single owner at any given time. However, thanks to this event, that owner can be changed, transferring ownership to a new member."),(0,a.kt)("h3",{id:"end-of-life-event-eol"},"End of Life Event (EOL)"),(0,a.kt)("p",null,"End-of-life events are used when the subject has reached the end of its useful life and should no longer receive any more events, whether for functional, legal, or any other reasons. Once a subject successfully includes an end-of-life event in its microledger, the TAPLE protocol will reject any attempts to generate a new event."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Transfer and end-of-life events are currently under development and are not available in the current version.")))}d.isMDXComponent=!0},77902:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/microledger-structure-041a7c3c65f056ab8cda98f138e60640.png"}}]);