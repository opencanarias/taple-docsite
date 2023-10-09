"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Creating a subject",s={unversionedId:"build/assets-traceability/creating-subject",id:"version-0.2/build/assets-traceability/creating-subject",title:"Creating a subject",description:"At this point, we are capable of tracking the life cycle of our wine bottles through Wine type subjects, which are defined in our Taple network. Additionally, we have the entity Premium Wines, which will be responsible for carrying out this action.",source:"@site/versioned_docs/version-0.2/build/assets-traceability/creating-subject.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/creating-subject",permalink:"/taple-docsite/docs/0.2/build/assets-traceability/creating-subject",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Adding participants",permalink:"/taple-docsite/docs/0.2/build/assets-traceability/adding-participants"},next:{title:"External invocations",permalink:"/taple-docsite/docs/0.2/build/assets-traceability/external-invocations"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-subject"},"Creating a subject"),(0,r.kt)("p",null,"At this point, we are capable of tracking the life cycle of our wine bottles through ",(0,r.kt)("em",{parentName:"p"},"Wine")," type ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/subjects"},"subjects"),", which are defined in our Taple network. Additionally, we have the entity ",(0,r.kt)("strong",{parentName:"p"},"Premium Wines"),", which will be responsible for carrying out this action."),(0,r.kt)("p",null,"Let's start by launching a ",(0,r.kt)("strong",{parentName:"p"},"genesis")," event to create our first ",(0,r.kt)("em",{parentName:"p"},"Wine")," type subject:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Create": {\n        "governance_id": {{GOVERNANCE-ID}},\n        "schema_id": "Wine",\n        "namespace": "",\n        "name": "Wine"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Upon performing this action, we will receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"request-id"),", which we need to copy and use in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},"curl --request GET 'http://localhost:3001/api/event-requests/{{REQUEST-ID}}/state'\n")),(0,r.kt)("p",null,"The last command will provide a response like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": {{REQUEST-ID}},\n    "subject_id": {{SUBJECT-ID}},\n    "sn": 0,\n    "state": "finished",\n    "success": true\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"subject_id")," of the ",(0,r.kt)("strong",{parentName:"p"},"subject"),", as we'll need it in later steps of the tutorial.")),(0,r.kt)("p",null,"We can query the created subject using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 0,\n    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",\n    "namespace": "",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": null,\n        "harvest": 0,\n        "organic_certified": null,\n        "origin": "",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')),(0,r.kt)("p",null,"Now that we have reached this point, the first subject has been created. However, as we can see in the previous information block, it has a default initialization with the ",(0,r.kt)("em",{parentName:"p"},"body")," we defined in the ",(0,r.kt)("strong",{parentName:"p"},"genesis")," event. Therefore, our next step will be to modify the basic characteristics of the subject to represent the production of a wine bottle produced by ",(0,r.kt)("strong",{parentName:"p"},"Premium Wines"),". We'll achieve this through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," event we declared in the ",(0,r.kt)("em",{parentName:"p"},"smart contract")," of ",(0,r.kt)("em",{parentName:"p"},"Wine")," subjects."),(0,r.kt)("p",null,"The characteristics we want our bottle to have are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harvest number: 1"),(0,r.kt)("li",{parentName:"ul"},"Grape type: Cabernet Sauvignon"),(0,r.kt)("li",{parentName:"ul"},"Origin: Spain")),(0,r.kt)("p",null,"Therefore, the command we need to execute is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{SUBJECT-ID}},\n            "payload": {\n                "Init": {\n                    "harvest": 1,\n                    "grape": "CabernetSauvignon",\n                    "origin": "spain"\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"If everything has gone correctly, running the following command should update the subject with an ",(0,r.kt)("inlineCode",{parentName:"p"},"sn")," value of 1 and reflect the changes mentioned above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 1,\n    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",\n    "namespace": "",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "CabernetSauvignon",\n        "harvest": 1,\n        "organic_certified": null,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')))}u.isMDXComponent=!0}}]);