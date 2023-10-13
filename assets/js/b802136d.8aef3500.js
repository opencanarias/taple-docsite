"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(t),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return t?a.createElement(d,s(s({ref:n},p),{},{components:t})):a.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},s="Creating an event",i={unversionedId:"build/assets-traceability/creating-event",id:"build/assets-traceability/creating-event",title:"Creating an event",description:"Once we have initialized our governance to begin formalizing the use case for the wine life cycle, it's necessary to fill it and adapt it to our needs. To make these modifications, we must generate an event in the network. In Taple, there are different types of events, such as the genesis event, which is used to create the governance. However, in this case, we need to generate an event of type fact, which allows modifying the state of a subject in the network.",source:"@site/docs/build/assets-traceability/creating-event.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/creating-event",permalink:"/docs/next/build/assets-traceability/creating-event",draft:!1,tags:[],version:"current",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Creating a governance",permalink:"/docs/next/build/assets-traceability/creating-governance"},next:{title:"Adding a schema",permalink:"/docs/next/build/assets-traceability/adding-schema"}},l={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-event"},"Creating an event"),(0,r.kt)("p",null,"Once we have initialized our governance to begin formalizing the use case for the wine life cycle, it's necessary to fill it and adapt it to our needs. To make these modifications, we must generate an event in the network. In ",(0,r.kt)("em",{parentName:"p"},"Taple"),", there are different types of events, such as the ",(0,r.kt)("strong",{parentName:"p"},"genesis")," event, which is used to create the governance. However, in this case, we need to generate an event of type ",(0,r.kt)("strong",{parentName:"p"},"fact"),", which allows modifying the state of a subject in the network."),(0,r.kt)("p",null,"These ",(0,r.kt)("strong",{parentName:"p"},"fact")," events interact with the operations defined in the subject's ",(0,r.kt)("em",{parentName:"p"},"smart contract")," and act upon them. In the case of governance, its contract is special, as both its schema and contract are ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/learn/governance-schema-and-contract"},"internal to Taple"),"."),(0,r.kt)("p",null,"The governance contract exposes only one method for modification, which must be used through ",(0,r.kt)("em",{parentName:"p"},"json-patch"),"."),(0,r.kt)("p",null,"Let's start by verifying the changes we want to make in the governance properties. At the end of the previous step, our governance should look similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "members": [],\n    "roles": [\n        {\n            "namespace": "",\n            "role": "WITNESS",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": "MEMBERS"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Now, we need to include the member who created the governance, which would result in a ",(0,r.kt)("em",{parentName:"p"},"json")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "members": [\n        {\n            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n            "name": "WPO"\n        }\n    ],\n    "roles": [\n        \n        ...\n\n        {\n            "namespace": "",\n            "role": "APPROVER",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": {\n                "NAME": "WPO"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"To generate the mentioned changes, we will use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/learn/client-tools#taple-patch"},(0,r.kt)("strong",{parentName:"a"},"TAPLE-Patch"))," tool as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-patch \'{"members":[],"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"}]}\' \'{"members":[{"id":"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs","name":"WPO"}],"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WPO"}}]}\'\n')),(0,r.kt)("p",null,"The result will be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "op": "add",\n        "path": "/members/0",\n        "value": {\n        "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n        "name": "WPO"\n        }\n    },\n    {\n        "op": "add",\n        "path": "/roles/1",\n        "value": {\n        "namespace": "",\n        "role": "APPROVER",\n        "schema": {\n            "ID": "governance"\n        },\n        "who": {\n            "NAME": "WPO"\n        }\n        }\n    }\n]\n')),(0,r.kt)("p",null,"Now, it's time to call the method of the governance contract responsible for updating its properties. To do this, we will execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},'curl --request POST \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{GOVERNANCE-ID}},\n            "payload": {\n                "Patch": {\n                    "data": [\n                        {\n                            "op": "add",\n                            "path": "/members/0",\n                            "value": {\n                            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n                            "name": "WPO"\n                            }\n                        },\n                        {\n                            "op": "add",\n                            "path": "/roles/1",\n                            "value": {\n                                "namespace": "",\n                                "role": "APPROVER",\n                                "schema": {\n                                    "ID": "governance"\n                                },\n                                "who": {\n                                    "NAME": "WPO"\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the changes found within the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," list are the changes that will be made to the governance through ",(0,r.kt)("em",{parentName:"p"},"json-patch"),".")),(0,r.kt)("p",null,"At this point, we need to discuss a new concept: ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/discover/event-approval-process"},"emitting certain events requires approval"),", which is defined at the smart contract level for a subject. In the case of governance, its changes must be approved by those members whose role within the governance has been specified as an approver. If no approvers are defined, the owner of the governance assumes this role."),(0,r.kt)("p",null,"Therefore, we must check our list of pending approval requests in the system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/approval-requests?status=pending'\n")),(0,r.kt)("p",null,"The result of this operation will be a list with a single element, representing the event waiting to be approved. To approve this request to update the governance, copy the value shown in its ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field and execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIOUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,r.kt)("p",null,"Then, we check the governance again to verify the changes. The result should show an ",(0,r.kt)("inlineCode",{parentName:"p"},"sn")," field equal to 1 and the inclusion of the new member:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to look at the full governance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{GOVERNACE-ID}},\n    "governance_id": "",\n    "sn": 1,\n    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",\n    "namespace": "",\n    "name": "wine_track",\n    "schema_id": "governance",\n    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "properties": {\n        "members": [\n        {\n            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n            "name": "WPO"\n        }\n        ],\n        "policies": [\n        {\n            "approve": {\n            "quorum": "MAJORITY"\n            },\n            "evaluate": {\n            "quorum": "MAJORITY"\n            },\n            "id": "governance",\n            "validate": {\n            "quorum": "MAJORITY"\n            }\n        }\n        ],\n        "roles": [\n        {\n            "namespace": "",\n            "role": "WITNESS",\n            "schema": {\n            "ID": "governance"\n            },\n            "who": "MEMBERS"\n        },\n        {\n            "namespace": "",\n            "role": "APPROVER",\n            "schema": {\n            "ID": "governance"\n            },\n            "who": {\n            "NAME": "WPO"\n            }\n        }\n        ],\n        "schemas": []\n    },\n    "active": true\n}\n'))))}u.isMDXComponent=!0}}]);