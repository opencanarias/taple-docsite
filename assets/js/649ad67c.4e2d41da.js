"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6168],{3905:(e,i,t)=>{t.d(i,{Zo:()=>I,kt:()=>Z});var a=t(67294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,a,n=function(e,i){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),d=function(e){var i=a.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):c(c({},i),e)),t},I=function(e){var i=d(e.components);return a.createElement(o.Provider,{value:i},e.children)},r={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},m=a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,I=s(e,["components","mdxType","originalType","parentName"]),m=d(t),Z=n,b=m["".concat(o,".").concat(Z)]||m[Z]||r[Z]||l;return t?a.createElement(b,c(c({ref:i},I),{},{components:t})):a.createElement(b,c({ref:i},I))}));function Z(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var s={};for(var o in i)hasOwnProperty.call(i,o)&&(s[o]=i[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var d=2;d<l;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27622:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>r,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(87462),n=(t(67294),t(3905));const l={description:"Rules of interaction between participants and subjects"},c="Governance",s={unversionedId:"discover/governance",id:"version-0.2/discover/governance",title:"Governance",description:"Rules of interaction between participants and subjects",source:"@site/versioned_docs/version-0.2/discover/governance.md",sourceDirName:"discover",slug:"/discover/governance",permalink:"/docs/0.2/discover/governance",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{description:"Rules of interaction between participants and subjects"},sidebar:"discoverSidebar",previous:{title:"Smart Contracts",permalink:"/docs/0.2/discover/smart-contracts"},next:{title:"Advanced concepts",permalink:"/docs/0.2/discover/advanced"}},o={},d=[{value:"Components",id:"components",level:2},{value:"Members",id:"members",level:3},{value:"Schemas",id:"schemas",level:3},{value:"Roles",id:"roles",level:3},{value:"Policies",id:"policies",level:3},{value:"Relationship hierarchy",id:"relationship-hierarchy",level:2},{value:"Governance as a subject",id:"governance-as-a-subject",level:2}],I={toc:d};function r(e){let{components:i,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},I,l,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"governance"},"Governance"),(0,n.kt)("p",null,"A TAPLE network does not consist of a single ledger, but potentially multiple ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/subjects#microledger"},"microledgers")," stored within subjects. The management of these subjects requires the definition of mechanisms to facilitate this task in batch, not individually for each one, which can be created dynamically."),(0,n.kt)("p",null,"Governance is the set of rules that define how the various participants in a TAPLE network interact with each other and their relationship with the subjects."),(0,n.kt)("p",null,"Governance is responsible for defining:\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the participants of one or more use cases;\xa0"),(0,n.kt)("li",{parentName:"ul"},"the data structures that model subjects;"),(0,n.kt)("li",{parentName:"ul"},"the mechanisms for modifying the status of subjects;"),(0,n.kt)("li",{parentName:"ul"},"and the permissions that each participant has to operate in the network.")),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("p",null,"Governance is structured into the following components: members, schemas, policies and roles"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Governance",src:t(38248).Z,width:"545",height:"345"})),(0,n.kt)("h3",{id:"members"},"Members"),(0,n.kt)("p",null,"These are the persons, entities or organizations that participate in the governance and therefore may be part of the use cases that are supported. Each member declares a unique identifier that represents the cryptographic material with which it will operate in the network, their ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/identity"},"identity"),"."),(0,n.kt)("h3",{id:"schemas"},"Schemas"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/schemas"},"Schemas")," are the data structures that model the information stored in the subjects. Within a governance, different schemas can be defined to support different use cases. When a subject is created, it defines which governance it is associated with and which schema it will use. Moreover, each scheme has a ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/smart-contracts"},"smart contract")," associated with it that will allow the status of the subjects to be modified. "),(0,n.kt)("h3",{id:"roles"},"Roles"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/roles"},"Roles")," represent groups of participants with some kind of common interest in a set of subjects. Roles allow us to assign permissions over these groups of subjects more easily than if we had to assign them individually to each member of the governance. "),(0,n.kt)("h3",{id:"policies"},"Policies"),(0,n.kt)("p",null,"Policies define the specific conditions under which the life cycle of an event is affected, such as the number of signatures needed to carry out the evaluation, approval and validation processes. This is called quorum."),(0,n.kt)("p",null,"The governance configuration allows the definition of ","[different types of quorum]",", more or less restrictive, depending on the need of the use case. "),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"As we know, the owner of a subject ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/subjects#ownership-model"},"is the only one who can act on it"),", and therefore has absolute freedom to modify it. Governance cannot prevent malicious owners from attempting to perform forbidden actions, but it does define the conditions under which the rest of the participants ignore, or penalize, these malicious behaviors.\xa0")),(0,n.kt)("h2",{id:"relationship-hierarchy"},"Relationship hierarchy"),(0,n.kt)("p",null,"Governance defines the rules to be followed in a use case. However, a holder of a TAPLE node is not limited to participate in a single use case. Couple this with the governance structure and you get the following hierarchy of relationships:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A governance:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"define one or many: members, policies, schemas and roles;"),(0,n.kt)("li",{parentName:"ul"},"supports one or many use cases."))),(0,n.kt)("li",{parentName:"ul"},"A participant (person, entity or organization):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"has an ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.2/discover/identity"},"identity"),", and the identity act as a member of a governance."),(0,n.kt)("li",{parentName:"ul"},"run a ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.2/discover/overview#taple-node"},"TAPLE node")," which stores many subjects;"),(0,n.kt)("li",{parentName:"ul"},"is involved in one or many use cases."))),(0,n.kt)("li",{parentName:"ul"},"A subject:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"depends on a governance;"),(0,n.kt)("li",{parentName:"ul"},"is modeled by a schema;"),(0,n.kt)("li",{parentName:"ul"},"has a namespaces")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Relations",src:t(18575).Z,width:"794",height:"563"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to know how to define a governance to adapt it to your needs visit the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/learn/governance-structure"},"governance structure")," page. ")),(0,n.kt)("h2",{id:"governance-as-a-subject"},"Governance as a subject"),(0,n.kt)("p",null,"Within the TAPLE network, the governance that governs it is managed as a subject, using the same protocol as the rest of the subjects for its ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.2/discover/events#event-life-cycle"},"generation, approval, validation and distribution"),". The subjects modeling governance meet the following conditions: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are created using the governance scheme. This schema is defined internally in TAPLE protocol."),(0,n.kt)("li",{parentName:"ul"},"When a generic subject is created, the associated governance is specified. Conversely, when creating a subject intended to model a governance, no value is specified.")))}r.isMDXComponent=!0},18575:(e,i,t)=>{t.d(i,{Z:()=>a});const a=t.p+"assets/images/governance-relations-2dcf5a6ce20c429759e547a7d555f5e4.svg"},38248:(e,i,t)=>{t.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1NDVweCIgaGVpZ2h0PSIzNDVweCIgdmlld0JveD0iLTAuNSAtMC41IDU0NSAzNDUiPjxkZWZzLz48Zz48cGF0aCBkPSJNIDQwIDEyIEwgMjcyIDEyIEwgMjcyIDE3MiBMIDEyIDE3MiBMIDEyIDQwIEMgMTIgMjQuNTQgMjQuNTQgMTIgNDAgMTIgWiIgZmlsbD0iI2ViYmM4ZCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMzAwIDE3MiBMIDUzMiAxNzIgTCA1MzIgMzMyIEwgMjcyIDMzMiBMIDI3MiAyMDAgQyAyNzIgMTg0LjU0IDI4NC41NCAxNzIgMzAwIDE3MiBaIiBmaWxsPSIjY2M2NjAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwLDQwMiwyNTIpIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSA0MCAxNzIgTCAyNzIgMTcyIEwgMjcyIDMzMiBMIDEyIDMzMiBMIDEyIDIwMCBDIDEyIDE4NC41NCAyNC41NCAxNzIgNDAgMTcyIFoiIGZpbGw9IiNmZjlkMDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MiwwKXNjYWxlKC0xLDEpdHJhbnNsYXRlKC0xNDIsMClyb3RhdGUoMTgwLDE0MiwyNTIpIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAzMDAgMTIgTCA1MzIgMTIgTCA1MzIgMTcyIEwgMjcyIDE3MiBMIDI3MiA0MCBDIDI3MiAyNC41NCAyODQuNTQgMTIgMzAwIDEyIFoiIGZpbGw9IiNmZjg1MDAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwMiwwKXNjYWxlKC0xLDEpdHJhbnNsYXRlKC00MDIsMCkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxODIiIHk9IjEyMiIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI5MCIgcng9IjEzLjUiIHJ5PSIxMy41IiBmaWxsPSIjOTk5OTk5IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxNzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxNjdweDsgbWFyZ2luLWxlZnQ6IDE4M3B4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMzMzMzMzOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPjxmb250IGNvbG9yPSIjZmZmZmZmIiBzaXplPSIxIj48YiBzdHlsZT0iZm9udC1zaXplOiAyMXB4OyI+R292ZXJuYW5jZTwvYj48L2ZvbnQ+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjI3MiIgeT0iMTcxIiBmaWxsPSIjMzMzMzMzIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdvdmVybmFuY2U8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjYyIiB5PSI1NyIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDE1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDg3cHg7IG1hcmdpbi1sZWZ0OiA2M3B4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIxcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5NZW1iZXJzPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE0MiIgeT0iOTMiIGZpbGw9IiNGRkZGRkYiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjFweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPk1lbWJlcnM8L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjM4MiIgeT0iNzIiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogODdweDsgbWFyZ2luLWxlZnQ6IDM4M3B4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjRkZGRkZGOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIxcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IGZvbnQtd2VpZ2h0OiBib2xkOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij48Zm9udCBzdHlsZT0iZm9udC1zaXplOiAyMXB4OyI+U2NoZW1hczwvZm9udD48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNDEyIiB5PSI5MyIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+U2NoZW1hczwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMTEyIiB5PSIyMzIiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjQ3cHg7IG1hcmdpbi1sZWZ0OiAxMTNweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogI0ZGRkZGRjsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAyMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyBmb250LXdlaWdodDogYm9sZDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+PGZvbnQgc3R5bGU9ImZvbnQtc2l6ZTogMjFweDsiPlBvbGljaWVzPC9mb250PjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxNDIiIHk9IjI1MyIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIyMXB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+UG9saWNpLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIzMzIiIHk9IjIxNyIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDE1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI0N3B4OyBtYXJnaW4tbGVmdDogMzMzcHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6ICNGRkZGRkY7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMjFweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPlJvbGVzPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQxMiIgeT0iMjUzIiBmaWxsPSIjRkZGRkZGIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjIxcHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5Sb2xlczwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRyYXdpby5jb20vZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+VGV4dCBpcyBub3QgU1ZHIC0gY2Fubm90IGRpc3BsYXk8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);