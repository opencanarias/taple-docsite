"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2200],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},27355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Adding a third member",s={unversionedId:"build/minimal-network/adding-a-third-member",id:"build/minimal-network/adding-a-third-member",title:"Adding a third member",description:"Launching the third node",source:"@site/docs/build/minimal-network/5-adding-a-third-member.md",sourceDirName:"build/minimal-network",slug:"/build/minimal-network/adding-a-third-member",permalink:"/taple-docsite/docs/next/build/minimal-network/adding-a-third-member",draft:!1,tags:[],version:"current",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:5,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Adding a second member",permalink:"/taple-docsite/docs/next/build/minimal-network/adding-a-second-member"},next:{title:"Next steps",permalink:"/taple-docsite/docs/next/build/minimal-network/next-steps"}},l={},p=[{value:"Launching the third node",id:"launching-the-third-node",level:2},{value:"Modify the governance",id:"modify-the-governance",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-a-third-member"},"Adding a third member"),(0,r.kt)("h2",{id:"launching-the-third-node"},"Launching the third node"),(0,r.kt)("p",null,"To add a third member we repeat the previous steps, the first thing is to create the cryptographic material with taple-keygen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE KEY ED25519 (HEX): 984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6\nCONTROLLER ID ED25519: E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE\nPeerID: 12D3KooWS4nPvBjbftvVQa4one9dQbneK66wVSLpZNSoTopxuNr4\n")),(0,r.kt)("p",null,"To launch the docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 3002:3000 -p 50002:50000 \\\n-e TAPLE_ID_PRIVATE_KEY=984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6 \\\n-e TAPLE_HTTP=true \\\n-e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B \\\n-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \\\nopencanarias/taple-client:0.3\n")),(0,r.kt)("h2",{id:"modify-the-governance"},"Modify the governance"),(0,r.kt)("p",null,"Now we will launch the event that adds the third member to the governance, but to check the operation of the approvals we will vote yes with one node and no with the other, which will leave the event as rejected by the approval phase. It will still be added to the subject's chain, but it will not modify its state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "Fact": {\n      "subject_id": "{{governance_id}}",\n      "payload": {\n          "Patch": {\n              "data": [\n                {\n                    "op": "add",\n                    "path": "/members/2",\n                    "value": {\n                    "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                    "name": "Tutorial3"\n                    }\n                }\n            ]\n          }\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "request": {\n        "Fact": {\n            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n            "payload": {\n                "Patch": {\n                    "data": [\n                        {\n                            "op": "add",\n                            "path": "/members/2",\n                            "value": {\n                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                                "name": "Tutorial3"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"We must first ask for pending approvals at ",(0,r.kt)("strong",{parentName:"p"},"/api/approval-requests?status=pending")," using a ",(0,r.kt)("strong",{parentName:"p"},"GET"),". The id of the response json is what we must use to approve it. At ",(0,r.kt)("strong",{parentName:"p"},"/api/approval-requests/{id}")," using a ",(0,r.kt)("strong",{parentName:"p"},"PATCH")," we will add the received id to cast the vote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent 'http://localhost:3000/api/approval-requests?status=pending'\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4",\n        "request": {\n            "event_request": {\n                "Fact": {\n                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n                    "payload": {\n                        "Patch": {\n                            "data": [\n                                {\n                                    "op": "add",\n                                    "path": "/members/2",\n                                    "value": {\n                                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                                        "name": "Tutorial3"\n                                    }\n                                }\n                            ]\n                        }\n                    }\n                },\n                "signature": {\n                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                    "timestamp": 1689759413015509263,\n                    "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"\n                }\n            },\n            "sn": 4,\n            "gov_version": 3,\n            "patch": [\n                {\n                    "op": "add",\n                    "path": "/members/2",\n                    "value": {\n                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                        "name": "Tutorial3"\n                    }\n                }\n            ],\n            "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",\n            "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",\n            "signature": {\n                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",\n                "timestamp": 1689759413045110844,\n                "value": "SEu793Au3GbvoNUw8CEfAJBZj5RlspzpJdk3eJzB16u0Q7jLB04JN5WykLusqQzOyjDNquPMrs0HE5qCVEACJTBA"\n            }\n        },\n        "reponse": null,\n        "state": "Pending"\n    }\n]\n')),(0,r.kt)("p",null,"In node 1 we will approve it but in node 2 we will reject it. As the quorum is Majority, this means that both must approve it for it to be approved. So if one of the two rejects it, it will be rejected because the quorum for acceptance cannot be reached."),(0,r.kt)("p",null,"Node 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"state": "RespondedAccepted"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \\\n--header 'Content-Type: application/json' \\\n--data '{\"state\": \"RespondedAccepted\"}'\n")),(0,r.kt)("p",null,"Node 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"state": "RespondedRejected"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent --request PATCH 'http://localhost:3001/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \\\n--header 'Content-Type: application/json' \\\n--data '{\"state\": \"RespondedRejected\"}'\n")),(0,r.kt)("p",null,"We verify that the state has not been modified by looking for our subjects, however, the sn of the subject will have increased by 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n        "governance_id": "",\n        "sn": 4,\n        "public_key": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",\n        "namespace": "",\n        "name": "tutorial",\n        "schema_id": "governance",\n        "owner": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n        "creator": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n        "properties": {\n            "members": [\n                {\n                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n                    "name": "Tutorial1"\n                },\n                {\n                    "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",\n                    "name": "Tutorial2"\n                }\n            ],\n            "policies": [\n                {\n                    "approve": {\n                        "quorum": "MAJORITY"\n                    },\n                    "evaluate": {\n                        "quorum": "MAJORITY"\n                    },\n                    "id": "governance",\n                    "validate": {\n                        "quorum": "MAJORITY"\n                    }\n                }\n            ],\n            "roles": [\n                {\n                    "namespace": "",\n                    "role": "WITNESS",\n                    "schema": {\n                        "ID": "governance"\n                    },\n                    "who": "MEMBERS"\n                },\n                {\n                    "namespace": "",\n                    "role": "APPROVER",\n                    "schema": {\n                        "ID": "governance"\n                    },\n                    "who": "MEMBERS"\n                }\n            ],\n            "schemas": []\n        },\n        "active": true\n    }\n]\n')),(0,r.kt)("p",null,"We can also search for a specific event with the event api: ",(0,r.kt)("strong",{parentName:"p"},"/api/subjects/{id}/events/{sn}")," whose id is the SubjectId of the subject, the sn is the specific event that we are going to search for (if nothing is added it will return all the events of the subject) and the request is of type ",(0,r.kt)("strong",{parentName:"p"},"GET"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --silent 'http://localhost:3000/api/subjects/Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M/events/4' \\\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n    "event_request": {\n        "Fact": {\n            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",\n            "payload": {\n                "Patch": {\n                    "data": [\n                        {\n                            "op": "add",\n                            "path": "/members/2",\n                            "value": {\n                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                                "name": "Tutorial3"\n                            }\n                        }\n                    ]\n                }\n            }\n        },\n        "signature": {\n            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n            "timestamp": 1689759413015509263,\n            "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"\n        }\n    },\n    "sn": 4,\n    "gov_version": 3,\n    "patch": [\n        {\n            "op": "add",\n            "path": "/members/2",\n            "value": {\n                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",\n                "name": "Tutorial3"\n            }\n        }\n    ],\n    "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",\n    "eval_success": true,\n    "appr_required": true,\n    "approved": false,\n    "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",\n    "evaluators": [\n        {\n            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",\n            "timestamp": 1689759413042189699,\n            "value": "SE__Vz_7yc3L0qJRXTnWzGRq0FsT3EGhe67WWLHkHcF7kqWKg6nldkWnx9od7byTTV_dNG_dwW26ShFbrLu1fLAg"\n        }\n    ],\n    "approvers": [\n        {\n            "signer": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",\n            "timestamp": 1689759533754268083,\n            "value": "SEeUWADKs25krS0mxYuqLBQe8umbs39Fs5Nbp85_7X_Sa959mBmZFDFZ5FGgJu3EPK1Pm3KgDp0vmLpq0aZ7S5DQ"\n        }\n    ],\n    "signature": {\n        "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",\n        "timestamp": 1689759533772217255,\n        "value": "SEpn7Y28DrVFNKpk8qJB4_U2MQrQeJFa4UscRTg_Y1HVBrdjO-sy7J0f6-pGkLguKu2XdlQvXpNHOTeas1wkAICQ"\n    }\n}\n')),(0,r.kt)("p",null,"Now we will repeat the same request but we will vote yes with both nodes, which will approve the request and modify the state of the subject. We approve the governance in the third node and we will see how it will be updated in a short period of time."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do not forget to preauthorize the governance in the third node.")))}u.isMDXComponent=!0}}]);