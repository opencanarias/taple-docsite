"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,v=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const s={description:"Data structures that make up the microledger"},o="Events",r={unversionedId:"discover/events",id:"version-0.3/discover/events",title:"Events",description:"Data structures that make up the microledger",source:"@site/versioned_docs/version-0.3/discover/events.md",sourceDirName:"discover",slug:"/discover/events",permalink:"/taple-docsite/docs/discover/events",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698048419,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{description:"Data structures that make up the microledger"},sidebar:"discoverSidebar",previous:{title:"Schemas",permalink:"/taple-docsite/docs/discover/schemas"},next:{title:"Identity",permalink:"/taple-docsite/docs/discover/identity"}},l={},c=[{value:"Event life cycle",id:"event-life-cycle",level:2},{value:"Event request",id:"event-request",level:3},{value:"Event evaluation",id:"event-evaluation",level:3},{value:"Event approval",id:"event-approval",level:3},{value:"Event generation",id:"event-generation",level:3},{value:"Event validation",id:"event-validation",level:3},{value:"Event distribution",id:"event-distribution",level:3},{value:"Event types",id:"event-types",level:2},{value:"Create Event",id:"create-event",level:3},{value:"Fact Event",id:"fact-event",level:3},{value:"Transfer Event",id:"transfer-event",level:3},{value:"End of Life Event (EOL)",id:"end-of-life-event-eol",level:3}],d={toc:c};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",null,"Events are the data structures that represent the facts to be traced during the life of a subject. These structures make up the micro-logger, i.e. the chain of events."),(0,i.kt)("p",null,"Each event is composed of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The request that generated the event"),(0,i.kt)("li",{parentName:"ul"},"The cryptographic fingerprint of the previous event to form the chain"),(0,i.kt)("li",{parentName:"ul"},"A series of meta information related to the subject and the event"),(0,i.kt)("li",{parentName:"ul"},"A group of different signatures that are added as the event progresses in its life cycle")),(0,i.kt)("h2",{id:"event-life-cycle"},"Event life cycle"),(0,i.kt)("p",null,"The event life cycle is composed of 6 stages, from its generation request to its distribution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Lifecycle",src:n(76907).Z,width:"1081",height:"205"})),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    actor Issuer\n    actor Owner\n    actor Evaluators\n    actor Approvers\n    actor Validators\n    actor Witnesses\n    Note over Owner: Request phase\n    Issuer->>Owner: Event request\n    Note over Owner: Evaluation phase\n    alt Is a Fact Event\n      Owner->>Evaluators: Evaluation request\n      Evaluators->>Owner: Evaluation respond\n    end\n    Note over Owner: Approval phase\n    alt Contract evaluation says that approval is required\n        Owner->>Approvers: Approval request\n        Approvers->>Owner: Approval respond\n    end\n    Note over Owner: Composition phase\n    Owner->>Owner: Event generation\n    Note over Owner: Validation phase\n    Owner->>Owner: Validation proof generation\n    Owner->>Validators: Validation request\n    Validators->>Owner: Validation response\n    Note over Owner: Distribution phase\n    Owner->>Witnesses: Event\n    Witnesses->>Owner: ACK"}),(0,i.kt)("h3",{id:"event-request"},"Event request"),(0,i.kt)("p",null,"To change the state of a subject it is necessary to add an event to its microleger. To do so, the first step is to generate an ",(0,i.kt)("strong",{parentName:"p"},"event request"),". In TAPLE ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/subjects#ownership-model"},"only the owner of the subject can generate events on the subject"),". However, these events can be generated by requests from other participants, known as ",(0,i.kt)("strong",{parentName:"p"},"issuers"),". In this way, the owner acts as the organizer of the event requests, which can be generated by himself or by other participants.  "),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Being the only one who can input events into the micro-logger, the owner has the final say on whether or not to create an event from a request, even if it is sent by another participant. In situations where assurance that the request has been recorded is necessary, additional security measures beyond those offered by TAPLE must be implemented.")),(0,i.kt)("p",null,"Event requests contain the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The type of event to generate;"),(0,i.kt)("li",{parentName:"ul"},"The information to include in the microledger, for example, to modify the subject's state;"),(0,i.kt)("li",{parentName:"ul"},"The signature of the issuer, which can be the subject's owner or another participant with sufficient permissions.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Request",src:n(39598).Z,width:"141",height:"86"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Currently the TAPLE P2P protocol does not support sending event requests to the owner of a subject, having to use other mechanisms, such as the REST API. ")),(0,i.kt)("h3",{id:"event-evaluation"},"Event evaluation"),(0,i.kt)("p",null,"In TAPLE there are different ",(0,i.kt)("a",{parentName:"p",href:"#event-types"},"event types")," and not all of them share the same life cycle. In the case of de ",(0,i.kt)("a",{parentName:"p",href:"#fact-event"},"fact events")," there are 2 additional steps: evaluation and approval. "),(0,i.kt)("p",null,"The evaluation phase corresponds to the execution of smart contracts. For this, the owner of the subject sends the following information to the evaluators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the current state of the subject, as the evaluators do not need to witness the subject, and therefore may not have its state;"),(0,i.kt)("li",{parentName:"ul"},"the metadata of the subject, such as its schema and namespace.")),(0,i.kt)("p",null,"After receiving the information the evaluator executes the contract and returns the modified subject state to the subject owner, ",(0,i.kt)("a",{parentName:"p",href:"#event-approval"},"the need or not for approval"),", and its signature. The owner must collect as many evaluator signatures as governance dictates."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Request",src:n(76238).Z,width:"321",height:"147"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Click ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/event-evaluation-process"},"here")," to learn more about the event evaluation process.")),(0,i.kt)("h3",{id:"event-approval"},"Event approval"),(0,i.kt)("p",null,"The evaluation of some contracts may determine that the outcome, even if properly executed, requires approval. This means that, in order to be accepted by the other participants, need to include a number of additional signatures from other participants, the approvers. These approvers sign for or against an event request. The rules defined in the governance indicate which signatures are necessary for an event petition to be approved and, therefore, for an event to be generated from this request. "),(0,i.kt)("p",null,"The decision whether or not to approve a request may depend on the involvement of an individual or it may depend on some IT system, such as a business intelligence process."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Approval",src:n(51704).Z,width:"511",height:"180"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In TAPLE, ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/governance"},"governance is a real subject")," and typically its modifications require an approval phase.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you want to know more details about the event approval process visit ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/event-approval-process"},"this page"),".")),(0,i.kt)("h3",{id:"event-generation"},"Event generation"),(0,i.kt)("p",null,"The next step is the effective generation of the event. The event is composed including the request, the contract evaluation, the signatures of the evaluators and approvers, the hash of the previous event and a series of metadata associated with the event. The event is signed then with the subject's cryptographic material, providing assurance that only the owner of the subject was able to generate the event."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Generation",src:n(3917).Z,width:"679",height:"302"})),(0,i.kt)("h3",{id:"event-validation"},"Event validation"),(0,i.kt)("p",null,"A generated event cannot be distributed directly. The reason is that the other participants in the network have no guarantee that the owner has not generated different versions of the event and distributed these versions according to his own interests. To avoid this, the validation phase arises. A number of network participants, the validators, provide their signature to the event, guaranteeing that a single event exists. Not all subjects require the signatures of the same validators. Governance defines which participants must provide their signatures and how many signatures are required. The number of signatures will depend on the use case and the network's trust in the members acting as validators.  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Validation",src:n(74220).Z,width:"882",height:"342"})),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Unlike the others, only the validation signatures associated with the last event of the micro-logger are stored. Previous validation signatures are deleted. The purpose of these signatures is to provide single chain guarantees, and for this reason, the signatures on the last event are sufficient to obtain these guarantees. ")),(0,i.kt)("h3",{id:"event-distribution"},"Event distribution"),(0,i.kt)("p",null,"Once there are enough validation signatures, the event is complete and can be distributed to the rest of the network participants. The owner sends the event together with the validation signatures to the witnesses. The witnesses, once the validity of the set has been verified, will incorporate the event into the microledger, and delete the validation signatures they had stored for the previous event. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Microledger structure",src:n(46969).Z,width:"741",height:"342"})),(0,i.kt)("h2",{id:"event-types"},"Event types"),(0,i.kt)("p",null,"Within TAPLE, there are different types of events when operating with a subject."),(0,i.kt)("h3",{id:"create-event"},"Create Event"),(0,i.kt)("p",null,"It is the initial event from which subjects are created. Each subject has a unique genesis event in which are defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"its associated governance"),(0,i.kt)("li",{parentName:"ul"},"its subject-id or unique identifier in the network;"),(0,i.kt)("li",{parentName:"ul"},"the public key of the cryptographic key pair associated with the subject;"),(0,i.kt)("li",{parentName:"ul"},"initial owner, i.e. its creator;"),(0,i.kt)("li",{parentName:"ul"},"the schema that models its state;"),(0,i.kt)("li",{parentName:"ul"},"its initial state;"),(0,i.kt)("li",{parentName:"ul"},"its namespace; "),(0,i.kt)("li",{parentName:"ul"},"and its name, a business identifier of the created subject.")),(0,i.kt)("admonition",{title:"Difference between subjectId and name",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is important to note that the subjectId is unique at the network level, while the name is simply an identifier at the use case level and cannot be guaranteed to be unique.")),(0,i.kt)("p",null,"It is important to note that once a subject is created, its governance, subject-id, schema, namespace, and name cannot change. On the contrary, its public key and owner can be modified by a transfer event. In addition, its state can be modified through fact events. "),(0,i.kt)("h3",{id:"fact-event"},"Fact Event"),(0,i.kt)("p",null,"Estos son los eventos que representan posibles cambios al estado del sujeto. Para ello desencadenan el proceso de evaluaci\xf3n (la ejecuci\xf3n del contrato) y, opcionalmente, el de aprobaci\xf3n."),(0,i.kt)("h3",{id:"transfer-event"},"Transfer Event"),(0,i.kt)("p",null,"These are the events that represent possible changes to the state of the subject. They trigger the evaluation process (the execution of the contract) and, optionally, the approval process."),(0,i.kt)("h3",{id:"end-of-life-event-eol"},"End of Life Event (EOL)"),(0,i.kt)("p",null,"End-of-life events are used when the subject has reached the end of its useful life and should no longer receive any more events, whether for functional, legal, or any other reasons. Once a subject successfully includes an end-of-life event in its microledger, the TAPLE protocol will reject any attempts to generate a new event."))}p.isMDXComponent=!0},51704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elc-approval-9b3c9e186c545c6e091646db9c0c222e.svg"},76238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elc-evaluation-97c2e03512daa85f5db52d76739d3fcd.svg"},3917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elc-generation-2450e12c68e0e5467cb314e987746dde.svg"},39598:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNDFweCIgaGVpZ2h0PSI4NnB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTQxIDg2Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjY1IiByeD0iOS43NSIgcnk9IjkuNzUiIGZpbGw9IiNmZmYyY2MiIHN0cm9rZT0iI2Q2YjY1NiIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMTE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNDNweDsgbWFyZ2luLWxlZnQ6IDExcHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogbm9uZTsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+PGRpdj48YnIgLz48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzAiIHk9IjQ2IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+JiN4YTs8L3RleHQ+PC9zd2l0Y2g+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDE4cHg7IG1hcmdpbi1sZWZ0OiAyNnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkV2ZW50IHJlcXVlc3Q8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzAiIHk9IjIyIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RXZlbnQgcmVxdWVzdDwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiByeD0iMyIgcnk9IjMiIGZpbGw9IiNmOGNlY2MiIHN0cm9rZT0iI2I4NTQ1MCIgcG9pbnRlci1ldmVudHM9Im5vbmUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogOThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiA2MHB4OyBtYXJnaW4tbGVmdDogMjFweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBub25lOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48ZGl2Pklzc3VlciBzaWduYXR1cmU8YnIgLz48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzAiIHk9IjY0IiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SXNzdWVyIHNpZ25hdHVyZSYjeGE7PC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyMCIgeT0iMjYiIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIHJ4PSIzIiByeT0iMyIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjNmM4ZWJmIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA5OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDM2cHg7IG1hcmdpbi1sZWZ0OiAyMXB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxkaXY+Q29udGVudDxiciAvPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI3MCIgeT0iNDAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db250ZW50JiN4YTs8L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kcmF3aW8uY29tL2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="},74220:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/elc-validation-fccbd22c7385cf7447b7145ea167995d.svg"},76907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/event-life-cycle-6175efee76170f672e9213d317b42bd1.svg"},46969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/microledger-structure-795cd258bca5990c37cefa698a90a83a.svg"}}]);