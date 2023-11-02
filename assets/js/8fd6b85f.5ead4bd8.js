"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Creating a governance",s={unversionedId:"build/assets-traceability/creating-governance",id:"version-0.2/build/assets-traceability/creating-governance",title:"Creating a governance",description:"Once the WPO has a node in the TAPLE network, it's time to define the use case, which includes participants, interaction rules, information models, among other aspects. In the TAPLE network, this is accomplished by creating a governance, where the specific functionality of the use case is specified.",source:"@site/versioned_docs/version-0.2/build/assets-traceability/creating-governance.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/creating-governance",permalink:"/docs/0.2/build/assets-traceability/creating-governance",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Running a Node",permalink:"/docs/0.2/build/assets-traceability/running-node"},next:{title:"Creating an event",permalink:"/docs/0.2/build/assets-traceability/creating-event"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-governance"},"Creating a governance"),(0,r.kt)("p",null,"Once the ",(0,r.kt)("strong",{parentName:"p"},"WPO")," has a node in the TAPLE network, it's time to define the use case, which includes participants, interaction rules, information models, among other aspects. In the TAPLE network, this is accomplished by creating a ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.2/discover/governance"},"governance"),", where the specific functionality of the use case is specified."),(0,r.kt)("p",null,"To create a basic governance, the following steps are required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To begin, execute the following command to create a basic version of a governance:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},'curl --request POST \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "request": {\n    "Create": {\n      "governance_id": "",\n      "schema_id": "governance",\n      "namespace": "",\n      "name": "wine_track"\n    }\n  }\n}\'\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a result of the previous action, a ",(0,r.kt)("inlineCode",{parentName:"p"},"request-id")," will be returned. Copy and use it in the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'\n")),(0,r.kt)("p",{parentName:"li"},"This last command will provide a response like the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": {{REQUEST-ID}},\n  "subject_id": {{GOVERNANCE-ID}},\n  "sn": 0,\n  "state": "finished",\n  "success": true\n}\n')),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Save the ",(0,r.kt)("inlineCode",{parentName:"p"},"subject_id")," of the ",(0,r.kt)("strong",{parentName:"p"},"governance"),", as it will be needed in next steps of the tutorial."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can check the created governance using the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'\n")),(0,r.kt)("p",{parentName:"li"},"The obtained result should be similar to the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subject_id": {{GOVERNANCE-ID}},\n  "governance_id": "",\n  "sn": 0,\n  "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",\n  "namespace": "",\n  "name": "wine_track",\n  "schema_id": "governance",\n  "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n  "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n  "properties": {\n    "members": [],\n    "policies": [\n      {\n        "approve": {\n          "quorum": "MAJORITY"\n        },\n        "evaluate": {\n          "quorum": "MAJORITY"\n        },\n        "id": "governance",\n        "validate": {\n          "quorum": "MAJORITY"\n        }\n      }\n    ],\n    "roles": [\n      {\n        "namespace": "",\n        "role": "WITNESS",\n        "schema": {\n          "ID": "governance"\n        },\n        "who": "MEMBERS"\n      }\n    ],\n    "schemas": []\n  },\n  "active": true\n}\n')))))}u.isMDXComponent=!0}}]);