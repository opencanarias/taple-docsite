"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={},o="Creating the governance",i={unversionedId:"build/minimal-network/creating-governance",id:"version-0.2/build/minimal-network/creating-governance",title:"Creating the governance",description:"Now that we have been able to launch our first node, the first thing we must do for it to be useful is to create a governance. Governances are special subjects that define the rules of the use case at hand. Without governance, there can be no subjects. Both its scheme and its smart contract are fixed and defined in Taple's code. The same goes for its structure.",source:"@site/versioned_docs/version-0.2/build/minimal-network/3-creating-governance.md",sourceDirName:"build/minimal-network",slug:"/build/minimal-network/creating-governance",permalink:"/taple-docsite/docs/0.2/build/minimal-network/creating-governance",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:3,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Running the first node",permalink:"/taple-docsite/docs/0.2/build/minimal-network/running-the-first-node"},next:{title:"Adding a second member",permalink:"/taple-docsite/docs/0.2/build/minimal-network/adding-a-second-member"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-the-governance"},"Creating the governance"),(0,r.kt)("p",null,"Now that we have been able to launch our first node, the first thing we must do for it to be useful is to create a ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/governance"},"governance"),". Governances are special subjects that define the rules of the use case at hand. Without governance, there can be no subjects. Both its ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/governance-schema-and-contract"},"scheme and its smart contract")," are fixed and defined in Taple's code. The same goes for its ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/governance-structure"},"structure"),"."),(0,r.kt)("p",null,"An interesting aspect of the Taple-client API is the different possibilities for using the event request submission endpoint. The most orthodox way would be to include the request and the signature of the request. For this, Taple-sign can be used (included in ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/client-tools"},"taple-tools"),") to sign the request. But you can also omit the signature in the body of the request and have the client sign it with our own private key. This obviously cannot be done for external invocations where the signer is not the owner of the node. Another change intended to increase simplicity for Genesis/Creation events is that the public key can be omitted from the body and the client will create one for us. In general, before creating a subject, you should call the cryptographic material creation API to generate a pair of keys ",(0,r.kt)("strong",{parentName:"p"},"/api/keys")," and the ",(0,r.kt)("strong",{parentName:"p"},"POST")," method. This API returns the value of the public key of the KeyPair to include it in the Create and Transfer events."),(0,r.kt)("p",null,"To do this, we must launch an event request using the taple-client API. The endpoint we must use is ",(0,r.kt)("strong",{parentName:"p"},"/api/event-requests")," and the method is ",(0,r.kt)("strong",{parentName:"p"},"POST"),". This endpoint supports different configurations to make life easier for the user:"),(0,r.kt)("p",null,"So, if we opt for the third way, the body of the post call that creates the governance would end up like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "Create": {\n      "governance_id": "",\n      "schema_id": "governance",\n      "namespace": "",\n      "name": "tutorial"\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent --location \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n  "request": {\n    "Create": {\n      "governance_id": "",\n      "schema_id": "governance",\n      "namespace": "",\n      "name": "tutorial"\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"The response we get when launching the event request is the id of the request itself. If we want to know what ended up being the SubjectId of the governance, we must consult the endpoint ",(0,r.kt)("strong",{parentName:"p"},"/api/event-requests/{id}")," and the method ",(0,r.kt)("strong",{parentName:"p"},"GET"),". The response to this endpoint returns information about the request that includes the SubjectId of the governance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent 'http://127.0.0.1:3000/api/event-requests/Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg/state'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg",\n    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n    "sn": 0,\n    "state": "finished",\n    "success": true\n}\n')),(0,r.kt)("p",null,"We can also ask for the list of subjects at ",(0,r.kt)("strong",{parentName:"p"},"/api/subjects")," using the ",(0,r.kt)("strong",{parentName:"p"},"GET")," method. In this case, we will get a list of the subjects we have on the node, in this case, we will only have the governance we just created."),(0,r.kt)("p",null,"Since we are the owners of the subject, it can be said that we are witnesses of it. The only role that is defined by default in the initial state of the governance is the one that makes all members of the governance witnesses of it, but in the case of the members, it comes empty. In the next step, we will add ourselves as members of the governance. This is because the initial state has no members, and to actively participate in the use case, we must add ourselves as members. Although this step is not mandatory, it depends on the use case."),(0,r.kt)("p",null,"The endpoint to use is the same as for creation, but the type of event will be FACT:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "Fact": {\n      "subject_id": "{{governance_id}}",\n      "payload": {\n          "Patch": {\n              "data": [\n                {\n                    "op": "add",\n                    "path": "/members/0",\n                    "value": {\n                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                    "name": "Tutorial1"\n                    }\n                }\n            ]\n          }\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "request": {\n        "Fact": {\n            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n            "payload": {\n                "Patch": {\n                    "data": [\n                        {\n                            "op": "add",\n                            "path": "/members/0",\n                            "value": {\n                                "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                                "name": "Tutorial1"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Replace {{governance_id}} with the SubjectId of the governance we have created. The id of our user we get from when we used taple-keygen in the previous step. It is our KeyIdentifier, which identifies our public key. The Patch method is the only one that currently contains the contract of the governance and it simply applies a json-patch to its state. This method requires the Approval phase."),(0,r.kt)("p",null,"As we mentioned earlier, the creator will be the signer in all phases if no one else is defined, so for this event 1 we will be the ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/event-evaluation-process"},"Evaluator"),", ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/event-approval-process"},"Approver"),", and ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/event-validation-process"},"Validator"),". Evaluation and validation work automatically, but the approval part requires user intervention through the API (provided the environment variable that automatically approves is not defined)."),(0,r.kt)("p",null,"For this, we must first ask for pending approvals at ",(0,r.kt)("strong",{parentName:"p"},"/api/approval-requests?status=pending")," using a ",(0,r.kt)("strong",{parentName:"p"},"GET"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent 'http://localhost:3000/api/approval-requests?status=pending'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",\n        "request": {\n            "event_request": {\n                "Fact": {\n                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n                    "payload": {\n                        "Patch": {\n                            "data": [\n                                {\n                                    "op": "add",\n                                    "path": "/members/0",\n                                    "value": {\n                                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                                        "name": "Tutorial1"\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                },\n                "signature": {\n                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                    "timestamp": 1689758738346603498,\n                    "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"\n                }\n            },\n            "sn": 1,\n            "gov_version": 0,\n            "patch": [\n                {\n                    "op": "add",\n                    "path": "/members/0",\n                    "value": {\n                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                        "name": "Tutorial1"\n                    }\n                }\n            ],\n            "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",\n            "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",\n            "signature": {\n                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",\n                "timestamp": 1689758738381216200,\n                "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"\n            }\n        },\n        "reponse": null,\n        "state": "Pending"\n    }\n]\n')),(0,r.kt)("p",null,"The id of the json response is what we must use to approve it. At ",(0,r.kt)("strong",{parentName:"p"},"/api/approval-requests/{id}")," using a ",(0,r.kt)("strong",{parentName:"p"},"PATCH"),", we will add the received id to cast the vote. As in our case, we want to approve it, the body should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"state": "RespondedAccepted"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ' \\\n--header 'Content-Type: application/json' \\\n--data '{\"state\": \"RespondedAccepted\"}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",\n    "request": {\n        "event_request": {\n            "Fact": {\n                "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n                "payload": {\n                    "Patch": {\n                        "data": [\n                            {\n                                "op": "add",\n                                "path": "/members/0",\n                                "value": {\n                                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                                    "name": "Tutorial1"\n                                }\n                            }\n                        ]\n                    }\n                }\n            },\n            "signature": {\n                "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                "timestamp": 1689758738346603498,\n                "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"\n            }\n        },\n        "sn": 1,\n        "gov_version": 0,\n        "patch": [\n            {\n                "op": "add",\n                "path": "/members/0",\n                "value": {\n                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                    "name": "Tutorial1"\n                }\n            }\n        ],\n        "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",\n        "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",\n        "signature": {\n            "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",\n            "timestamp": 1689758738381216200,\n            "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"\n        }\n    },\n    "reponse": {\n        "appr_req_hash": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",\n        "approved": true,\n        "signature": {\n            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n            "timestamp": 1689758795610296081,\n            "value": "SE34M3kRw9Uj2V_FaDq5Kz4h_8HSbkAiaH40XxpcPleLPJ_CnNbVso6L4GkdNNF2othwlDzTzk3BqyzyKlpIVDCg"\n        }\n    },\n    "state": "Responded"\n}\n')))}u.isMDXComponent=!0}}]);