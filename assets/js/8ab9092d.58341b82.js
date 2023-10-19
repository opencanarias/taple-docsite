"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(67294);function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,g=function(e,n){if(null==e)return{};var t,a,g={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(g[t]=e[t]);return g}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(g[t]=e[t])}return g}var l=a.createContext({}),I=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=I(e.components);return a.createElement(l.Provider,{value:n},e.children)},C={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,g=e.mdxType,i=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=I(t),c=g,A=p["".concat(l,".").concat(c)]||p[c]||C[c]||i;return t?a.createElement(A,o(o({ref:n},s),{},{components:t})):a.createElement(A,o({ref:n},s))}));function c(e,n){var t=arguments,g=n&&n.mdxType;if("string"==typeof e||g){var i=t.length,o=new Array(i);o[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:g,o[1]=r;for(var I=2;I<i;I++)o[I]=t[I];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>C,frontMatter:()=>i,metadata:()=>r,toc:()=>I});var a=t(87462),g=(t(67294),t(3905));const i={},o="Changing policies",r={unversionedId:"build/assets-traceability/changing-policies",id:"version-0.3/build/assets-traceability/changing-policies",title:"Changing policies",description:"In the previous step, we observed that the approval process for subjects in France only requires approval from WFO. However, in Spain, the procedure is different. Although both WFO and SFO have sufficient authority to approve the organic certification without the intervention of the other entity, our governance policies do not allow this. Both entities must approve a new event request for it to be considered accepted or rejected.",source:"@site/versioned_docs/version-0.3/build/assets-traceability/changing-policies.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/changing-policies",permalink:"/taple-docsite/docs/build/assets-traceability/changing-policies",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Segmentation",permalink:"/taple-docsite/docs/build/assets-traceability/segmentation"},next:{title:"End of life",permalink:"/taple-docsite/docs/build/assets-traceability/eol"}},l={},I=[],s={toc:I};function C(e){let{components:n,...t}=e;return(0,g.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"changing-policies"},"Changing policies"),(0,g.kt)("p",null,"In the previous step, we observed that the approval process for subjects in France only requires approval from ",(0,g.kt)("strong",{parentName:"p"},"WFO"),". However, in Spain, the procedure is different. Although both ",(0,g.kt)("strong",{parentName:"p"},"WFO")," and ",(0,g.kt)("strong",{parentName:"p"},"SFO")," have sufficient authority to approve the organic certification without the intervention of the other entity, our governance policies do not allow this. Both entities must approve a new event request for it to be considered accepted or rejected."),(0,g.kt)("p",null,"Therefore, in this section of the tutorial, we propose updating the governance policies so that wine-related subjects only need approval from one of the two mentioned entities."),(0,g.kt)("p",null,"Let's start by checking the current policies in the governance before making these changes:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "policies": [\n        {\n            "approve": {\n                "quorum": "MAJORITY"\n            },\n            "evaluate": {\n                "quorum": "MAJORITY"\n            },\n            "id": "governance",\n            "validate": {\n                "quorum": "MAJORITY"\n            }\n        },\n        {\n            "approve": {\n                "quorum": "MAJORITY"\n            },\n            "evaluate": {\n                "quorum": "MAJORITY"\n            },\n            "id": "Wine",\n            "validate": {\n                "quorum": "MAJORITY"\n            }\n        }\n    ]\n}\n')),(0,g.kt)("p",null,"We will make the necessary change in the policies for the ",(0,g.kt)("em",{parentName:"p"},"Wine")," subjects:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "policies": [\n        {\n            "approve": {\n                "quorum": "MAJORITY"\n            },\n            "evaluate": {\n                "quorum": "MAJORITY"\n            },\n            "id": "governance",\n            "validate": {\n                "quorum": "MAJORITY"\n            }\n        },\n        {\n            "approve": {\n                "quorum": "MAJORITY"\n            },\n            "evaluate": {\n                "quorum": "MAJORITY"\n            },\n            "id": "Wine",\n            "validate": {\n                "quorum": {\n                    "FIXED": 1\n                }\n            }\n        }\n    ]\n}\n')),(0,g.kt)("p",null,"To generate these changes, we will use our tool ",(0,g.kt)("a",{parentName:"p",href:"/taple-docsite/docs/learn/client-tools#taple-patch"},(0,g.kt)("strong",{parentName:"a"},"TAPLE-Patch"))," following this procedure:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-patch \'{"policies":[{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"governance","validate":{"quorum":"MAJORITY"}},{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"Wine","validate":{"quorum":"MAJORITY"}}]}\' \'{"policies":[{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"governance","validate":{"quorum":"MAJORITY"}},{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"Wine","validate":{"quorum":{"FIXED":1}}}]}\'\n')),(0,g.kt)("p",null,"The result obtained will be:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "op": "replace",\n        "path": "/policies/1/validate/quorum",\n        "value": {\n        "FIXED": 1\n        }\n    }\n]\n')),(0,g.kt)("p",null,"Next, we will invoke the governance contract method responsible for updating its properties:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},'curl --request POST \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{GOVERNANCE-ID}},\n            "payload": {\n                "Patch": {\n                    "data": [\n                        {\n                            "op": "replace",\n                            "path": "/policies/1/approve/quorum",\n                            "value": {\n                                "FIXED": 1\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,g.kt)("p",null,"Once we have sent the governance update request, we should receive the approval request again. To do this, run the following command:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/approval-requests?status=Pending'\n")),(0,g.kt)("p",null,"Copy the value of the ",(0,g.kt)("inlineCode",{parentName:"p"},"id")," field, but this time, approval from ",(0,g.kt)("strong",{parentName:"p"},"WFO")," will also be necessary. Therefore, we will perform the following two actions:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WFO"',title:'"Node:','WFO"':!0},"curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,g.kt)("p",null,"If everything went well, when you execute the following command, the governance ",(0,g.kt)("inlineCode",{parentName:"p"},"sn")," should be 8, and the changes made earlier should be displayed:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'\n")),(0,g.kt)("details",null,(0,g.kt)("summary",null,"Click to look at the full governance."),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{GOVERNANCE-ID}},\n    "governance_id": "",\n    "sn": 8,\n    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",\n    "namespace": "",\n    "name": "wine_track",\n    "schema_id": "governance",\n    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "properties": {\n        "members": [\n            {\n                "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n                "name": "WPO"\n            },\n            {\n                "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n                "name": "PremiumWines"\n            },\n            {\n                "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",\n                "name": "WFO"\n            },\n            {\n                "id": "EaHFQQ0ADaLuRgQsIZxYNU8BAj_cBub7MZdpoZsRf-GY",\n                "name": "SFO"\n            }\n        ],\n        "policies": [\n            {\n                "approve": {\n                    "quorum": "MAJORITY"\n                },\n                "evaluate": {\n                    "quorum": "MAJORITY"\n                },\n                "id": "governance",\n                "validate": {\n                    "quorum": "MAJORITY"\n                }\n            },\n            {\n                "approve": {\n                    "quorum": {\n                        "FIXED": 1\n                    }\n                },\n                "evaluate": {\n                    "quorum": "MAJORITY"\n                },\n                "id": "Wine",\n                "validate": {\n                    "quorum": "MAJORITY"\n                }\n            }\n        ],\n        "roles": [\n            {\n                "namespace": "",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": "MEMBERS"\n            },\n            {\n                "namespace": "",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WPO"\n                }\n            },\n            {\n                "namespace": "Spain",\n                "role": "CREATOR",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "PremiumWines"\n                }\n            },\n            {\n                "namespace": "France",\n                "role": "CREATOR",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "PremiumWines"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "VALIDATOR",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "EVALUATOR",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "Spain",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "France",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "Spain",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "France",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "Spain",\n                "role": "ISSUER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": "NOT_MEMBERS"\n            },\n            {\n                "namespace": "France",\n                "role": "ISSUER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": "NOT_MEMBERS"\n            },\n            {\n                "namespace": "Spain",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "SFO"\n                }\n            },\n            {\n                "namespace": "Spain",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "SFO"\n                }\n            }\n        ],\n        "schemas": [\n            {\n                "contract": {\n                    "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbGV0IGdyYXBlID0gbWF0Y2ggZ3JhcGUuYXNfc3RyKCkgew0KICAgICAgICAgICAgICAgICAgICAiQ2FiZXJuZXRTYXV2aWdub24iID0+IFNvbWUoR3JhcGU6OkNhYmVybmV0U2F1dmlnbm9uKSwNCiAgICAgICAgICAgICAgICAgICAgIkNoYXJkb25uYXkiID0+IFNvbWUoR3JhcGU6OkNoYXJkb25uYXkpLA0KICAgICAgICAgICAgICAgICAgICAiUGlub3ROb2lyIiA9PiBTb21lKEdyYXBlOjpQaW5vdE5vaXIpLA0KICAgICAgICAgICAgICAgICAgICBfID0+IE5vbmUsDQogICAgICAgICAgICAgICAgfTsNCiAgICAgICAgICAgICAgICBpZiBncmFwZS5pc19zb21lKCkgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS5oYXJ2ZXN0ID0gKmhhcnZlc3Q7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmdyYXBlID0gZ3JhcGU7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbiA9IG9yaWdpbi50b19zdHJpbmcoKTsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpUZW1wZXJhdHVyZUNvbnRyb2wgew0KICAgICAgICAgICAgdGVtcGVyYXR1cmUsDQogICAgICAgICAgICB0aW1lc3RhbXAsDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY29udGV4dC5pc19vd25lciAmJiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZSkgew0KICAgICAgICAgICAgICAgIGlmIGNoZWNrX3RlbXBlcmF0dXJlX2luX3JhbmdlKCp0ZW1wZXJhdHVyZSkNCiAgICAgICAgICAgICAgICAgICAgJiYgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC50ZW1wZXJhdHVyZV9vaw0KICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rID0gZmFsc2U7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wubGFzdF9jaGVjayA9ICp0aW1lc3RhbXA7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgICAgICBmZXJ0aWxpemVyc19jb250cm9sLA0KICAgICAgICAgICAgcGVzdGljaWRlc19jb250cm9sLA0KICAgICAgICAgICAgYW5hbHl0aWNzLA0KICAgICAgICAgICAgYWRkaXRpb25hbF9pbmZvLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbWF0Y2ggc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgew0KICAgICAgICAgICAgICAgICAgICBTb21lKG9yZ2FuaWNfY2VyaWZpZWQpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIG9yZ2FuaWNfY2VyaWZpZWQNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hlY2tfaXNfb3JnYW5pYygNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICphbmFseXRpY3MsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgTm9uZSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiBjaGVja19pc19vcmdhbmljKCpmZXJ0aWxpemVyc19jb250cm9sLCAqcGVzdGljaWRlc19jb250cm9sLCAqYW5hbHl0aWNzKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKHRydWUpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUoZmFsc2UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5hcHByb3ZhbF9yZXF1aXJlZCA9IHRydWU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="\n                },\n                "id": "Wine",\n                "initial_value": {\n                    "grape": null,\n                    "harvest": 0,\n                    "organic_certified": null,\n                    "origin": "",\n                    "temperature_control": {\n                        "last_check": 0,\n                        "temperature_ok": true\n                    }\n                },\n                "schema": {\n                    "additionalProperties": false,\n                    "description": "Representation of a bottle of wine",\n                    "properties": {\n                        "grape": {\n                            "description": "Type of grape",\n                            "enum": [\n                                "CabernetSauvignon",\n                                "Chardonnay",\n                                "PinotNoir",\n                                null\n                            ],\n                            "type": [\n                                "string",\n                                "null"\n                            ]\n                        },\n                        "harvest": {\n                            "description": "Harvest number",\n                            "type": "integer"\n                        },\n                        "organic_certified": {\n                            "description": "Certificate authenticating whether it is organic or not",\n                            "type": [\n                                "boolean",\n                                "null"\n                            ]\n                        },\n                        "origin": {\n                            "description": "Origin of the grape",\n                            "type": "string"\n                        },\n                        "temperature_control": {\n                            "additionalProperties": false,\n                            "description": "Values to be changed in the temperature control event",\n                            "properties": {\n                                "last_check": {\n                                    "description": "Timestamp of last check",\n                                    "type": "integer"\n                                },\n                                "temperature_ok": {\n                                    "description": "Value that corroborates whether the wine cold chain has been complied with",\n                                    "type": "boolean"\n                                }\n                            },\n                            "required": [\n                                "last_check",\n                                "temperature_ok"\n                            ],\n                            "type": "object"\n                        }\n                    },\n                    "required": [\n                        "harvest",\n                        "grape",\n                        "origin",\n                        "organic_certified",\n                        "temperature_control"\n                    ],\n                    "type": "object"\n                }\n            }\n        ]\n    },\n    "active": true\n}\n'))),(0,g.kt)("p",null,"Now, let's create a new wine bottle subject in Spain to test our change:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Create": {\n        "governance_id": {{GOVERNANCE-ID}},\n        "schema_id": "Wine",\n        "namespace": "Spain",\n        "name": "Wine"\n        }\n    }\n}\'\n')),(0,g.kt)("p",null,"When you perform this action, you will receive a ",(0,g.kt)("inlineCode",{parentName:"p"},"request-id"),", which you should copy and use in the following command:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},"curl --request GET 'http://localhost:3001/api/event-requests/{{REQUEST-ID}}/state'\n")),(0,g.kt)("p",null,"This last command will give you a response similar to the following:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": {{REQUEST-ID}},\n    "subject_id": {{SUBJECT-ID}},\n    "sn": 0,\n    "state": "finished",\n    "success": true\n}\n')),(0,g.kt)("admonition",{type:"note"},(0,g.kt)("p",{parentName:"admonition"},"Save the ",(0,g.kt)("inlineCode",{parentName:"p"},"subject_id")," of the ",(0,g.kt)("strong",{parentName:"p"},"subject"),", as you will need it for subsequent steps in the tutorial.")),(0,g.kt)("p",null,"Before we can issue a certification event, we need to initialize the bottle. To do this, execute the following command:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{SUBJECT-ID}},\n            "payload": {\n                "Init": {\n                    "harvest": 3,\n                    "grape": "PinotNoir",\n                    "origin": "spain"\n                }\n            }\n        }\n    }\n}\'\n')),(0,g.kt)("p",null,"When you query the subject, it should have a ",(0,g.kt)("inlineCode",{parentName:"p"},"sn")," value of 1 and display the previously mentioned information:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},"curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 1,\n    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",\n    "namespace": "Spain",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "PinotNoir",\n        "harvest": 3,\n        "organic_certified": null,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')),(0,g.kt)("p",null,"Now, we will test issuing the certification event. To do this, we will generate the event signature we want to issue using ",(0,g.kt)("a",{parentName:"p",href:"/taple-docsite/docs/learn/client-tools#taple-sign"},(0,g.kt)("strong",{parentName:"a"},"TAPLE-Sign")),", with the following format, replacing ",(0,g.kt)("inlineCode",{parentName:"p"},"subject_id")," with the identifier of our ",(0,g.kt)("em",{parentName:"p"},"Wine")," subject:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-sign \'f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326\' \'{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"OrganicCertification":{"fertilizers_control":false,"pesticides_control":false,"analytics":false,"additional_info":"test"}}}}\'\n')),(0,g.kt)("p",null,"The result of this execution will be included in the following request:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request POST 'http://localhost:3001/api/event-requests' \\\n--header 'Content-Type: application/json' \\\n--data-raw {{SIGN-RESULT}}\n")),(0,g.kt)("p",null,"Tras realizarla, deber\xeda aparecer la solicitud de aprobaci\xf3n a los nodos ",(0,g.kt)("strong",{parentName:"p"},"WFO")," y ",(0,g.kt)("strong",{parentName:"p"},"SFO"),". Puedes comprobarlo de la siguiente manera:\nAfter making this request, you should see the approval request to ",(0,g.kt)("strong",{parentName:"p"},"WFO")," and ",(0,g.kt)("strong",{parentName:"p"},"SFO"),". You can check it as follows:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WFO"',title:'"Node:','WFO"':!0},"curl --request GET 'http://localhost:3002/api/approval-requests?status=pending'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: SFO"',title:'"Node:','SFO"':!0},"curl --request GET 'http://localhost:3003/api/approval-requests?status=pending'\n")),(0,g.kt)("p",null,"We will try to approve it on one of the two nodes, for example, on ",(0,g.kt)("strong",{parentName:"p"},"SFO"),":"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: SFO"',title:'"Node:','SFO"':!0},"curl --request PATCH 'http://localhost:3003/api/approval-requests/{{PREVIUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,g.kt)("p",null,"If everything went well, when you launch the subject query request, it should appear with ",(0,g.kt)("inlineCode",{parentName:"p"},"sn")," 2 and the ",(0,g.kt)("inlineCode",{parentName:"p"},"organic_certified")," set to false:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 2,\n    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",\n    "namespace": "Spain",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "PinotNoir",\n        "harvest": 3,\n        "organic_certified": false,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')))}C.isMDXComponent=!0}}]);