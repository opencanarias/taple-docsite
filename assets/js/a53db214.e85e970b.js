"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>C,kt:()=>c});var a=t(67294);function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,g=function(e,n){if(null==e)return{};var t,a,g={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(g[t]=e[t]);return g}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(g[t]=e[t])}return g}var I=a.createContext({}),i=function(e){var n=a.useContext(I),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},C=function(e){var n=i(e.components);return a.createElement(I.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},A=a.forwardRef((function(e,n){var t=e.components,g=e.mdxType,o=e.originalType,I=e.parentName,C=l(e,["components","mdxType","originalType","parentName"]),A=i(t),c=g,p=A["".concat(I,".").concat(c)]||A[c]||s[c]||o;return t?a.createElement(p,r(r({ref:n},C),{},{components:t})):a.createElement(p,r({ref:n},C))}));function c(e,n){var t=arguments,g=n&&n.mdxType;if("string"==typeof e||g){var o=t.length,r=new Array(o);r[0]=A;var l={};for(var I in n)hasOwnProperty.call(n,I)&&(l[I]=n[I]);l.originalType=e,l.mdxType="string"==typeof e?e:g,r[1]=l;for(var i=2;i<o;i++)r[i]=t[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},26285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(87462),g=(t(67294),t(3905));const o={},r="External invocations",l={unversionedId:"build/assets-traceability/external-invocations",id:"version-0.3/build/assets-traceability/external-invocations",title:"External invocations",description:"A new need has arisen: the certification of the organic origin of wine. To carry out this task, a laboratory will need to visit our lands or vineyards and conduct a series of analyses and tests that will determine whether the wine's origin is organic or not. However, there are many companies that offer this service, and it's not efficient to incorporate all of them into the governance or require them to have their own node.",source:"@site/versioned_docs/version-0.3/build/assets-traceability/external-invocations.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/external-invocations",permalink:"/docs/build/assets-traceability/external-invocations",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Creating a subject",permalink:"/docs/build/assets-traceability/creating-subject"},next:{title:"Approvals",permalink:"/docs/build/assets-traceability/approvals"}},I={},i=[],C={toc:i};function s(e){let{components:n,...t}=e;return(0,g.kt)("wrapper",(0,a.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,g.kt)("h1",{id:"external-invocations"},"External invocations"),(0,g.kt)("p",null,"A new need has arisen: the certification of the organic origin of wine. To carry out this task, a laboratory will need to visit our lands or vineyards and conduct a series of analyses and tests that will determine whether the wine's origin is organic or not. However, there are many companies that offer this service, and it's not efficient to incorporate all of them into the governance or require them to have their own node."),(0,g.kt)("p",null,"To solve this problem, we will use a new function of Taple called ",(0,g.kt)("em",{parentName:"p"},"external invocations"),". To perform these invocations on the network, it's not necessary to have a complete node; it will be enough to have access to one of the existing nodes and have a pair of keys that allow us to sign the request to certify the invocation's identity."),(0,g.kt)("p",null,"To achieve this update, modifications will be made to the roles within the governance properties. First, let's review its current state:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "roles": [\n        {\n            "namespace": "",\n            "role": "WITNESS",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": "MEMBERS"\n        },\n        {\n            "namespace": "",\n            "role": "APPROVER",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": {\n                "NAME": "WPO"\n            }\n        },\n        {\n            "namespace": "",\n            "role": "CREATOR",\n            "schema": {\n                "ID": "Wine"\n            },\n            "who": {\n                "NAME": "PremiumWines"\n            }\n        },\n        {\n            "namespace": "",\n            "role": "APPROVER",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": {\n                "NAME": "WFO"\n            }\n        },\n        {\n            "namespace": "",\n            "role": "VALIDATOR",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": {\n                "NAME": "WFO"\n            }\n        },\n        {\n            "namespace": "",\n            "role": "EVALUATOR",\n            "schema": {\n                "ID": "governance"\n            },\n            "who": {\n                "NAME": "WFO"\n            }\n        },\n        {\n            "namespace": "",\n            "role": "WITNESS",\n            "schema": {\n                "ID": "Wine"\n            },\n            "who": {\n                "NAME": "WFO"\n            }\n        }\n    ]\n}\n')),(0,g.kt)("p",null,"The change we want to make will apply to the ",(0,g.kt)("em",{parentName:"p"},"roles")," section and will be as follows:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "roles": [\n\n        ...\n\n        {\n            "namespace": "",\n            "role": "ISSUER",\n            "schema": {\n                "ID": "Wine"\n            },\n            "who": "NOT_MEMBERS"\n        }\n    ]\n}\n')),(0,g.kt)("p",null,"We'll use our ",(0,g.kt)("a",{parentName:"p",href:"/docs/learn/client-tools#taple-patch"},(0,g.kt)("strong",{parentName:"a"},"TAPLE-Patch"))," tool to generate these changes, following the procedure below:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-patch \'{"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WPO"}},{"namespace":"","role":"CREATOR","schema":{"ID":"Wine"},"who":{"NAME":"PremiumWines"}},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"VALIDATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"EVALUATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}}]}\' \'{"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WPO"}},{"namespace":"","role":"CREATOR","schema":{"ID":"Wine"},"who":{"NAME":"PremiumWines"}},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"VALIDATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"EVALUATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"","role":"ISSUER","schema":{"ID":"Wine"},"who":"NOT_MEMBERS"}]}\'\n')),(0,g.kt)("p",null,"Once the process is completed, we'll get the following result:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "op": "add",\n        "path": "/roles/7",\n        "value": {\n            "namespace": "",\n            "role": "ISSUER",\n            "schema": {\n                "ID": "Wine"\n            },\n            "who": "NOT_MEMBERS"\n        }\n    }\n]\n')),(0,g.kt)("p",null,"Next, we'll proceed to invoke the method of the governance contract responsible for updating its properties. To do this, we'll execute the following:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},'curl --request POST \'http://localhost:3000/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{GOVERNANCE-ID}},\n            "payload": {\n                "Patch": {\n                    "data": [{\n                        "op": "add",\n                        "path": "/roles/7",\n                        "value": {\n                            "namespace": "",\n                            "role": "ISSUER",\n                            "schema": {\n                                "ID": "Wine"\n                            },\n                            "who": "NOT_MEMBERS"\n                        }\n                    }]\n                }\n            }\n        }\n    }\n}\'\n')),(0,g.kt)("p",null,"After submitting the governance update request, we need to obtain an approval request again:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request GET 'http://localhost:3000/api/approval-requests?status=Pending'\n")),(0,g.kt)("p",null,"We'll copy the value of the ",(0,g.kt)("inlineCode",{parentName:"p"},"id")," field. However, this time, approval from ",(0,g.kt)("strong",{parentName:"p"},"WFO")," is also required. Therefore, we'll perform the following two actions:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WFO"',title:'"Node:','WFO"':!0},"curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"state\": \"RespondedAccepted\"}'\n")),(0,g.kt)("p",null,"With all these actions, upon querying our governance once more, the new corresponding version should appear:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"curl --silent --request GET 'http://localhost:3002/api/subjects?subject_type=governances'\n")),(0,g.kt)("details",null,(0,g.kt)("summary",null,"Click to look at the full governance."),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{GOVERNANCE-ID}},\n    "governance_id": "",\n    "sn": 5,\n    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",\n    "namespace": "",\n    "name": "wine_track",\n    "schema_id": "governance",\n    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "properties": {\n        "members": [\n            {\n                "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n                "name": "WPO"\n            },\n            {\n                "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n                "name": "PremiumWines"\n            },\n            {\n                "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",\n                "name": "WFO"\n            }\n        ],\n        "policies": [\n            {\n                "approve": {\n                    "quorum": "MAJORITY"\n                },\n                "evaluate": {\n                    "quorum": "MAJORITY"\n                },\n                "id": "governance",\n                "validate": {\n                    "quorum": "MAJORITY"\n                }\n            },\n            {\n                "approve": {\n                    "quorum": "MAJORITY"\n                },\n                "evaluate": {\n                    "quorum": "MAJORITY"\n                },\n                "id": "Wine",\n                "validate": {\n                    "quorum": "MAJORITY"\n                }\n            }\n        ],\n        "roles": [\n            {\n                "namespace": "",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": "MEMBERS"\n            },\n            {\n                "namespace": "",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WPO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "CREATOR",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "PremiumWines"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "APPROVER",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "VALIDATOR",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "EVALUATOR",\n                "schema": {\n                    "ID": "governance"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "WITNESS",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": {\n                    "NAME": "WFO"\n                }\n            },\n            {\n                "namespace": "",\n                "role": "ISSUER",\n                "schema": {\n                    "ID": "Wine"\n                },\n                "who": "NOT_MEMBERS"\n            }\n        ],\n        "schemas": [\n            {\n                "contract": {\n                    "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7IC8vIFNvbG8gbG8gcHVlZGRlIGhhY2VyIGVsIHByb3BpZXRhcmlvw6cNCiAgICAgICAgICAgICAgICBsZXQgZ3JhcGUgPSBtYXRjaCBncmFwZS5hc19zdHIoKSB7DQogICAgICAgICAgICAgICAgICAgICJDYWJlcm5ldFNhdXZpZ25vbiIgPT4gU29tZShHcmFwZTo6Q2FiZXJuZXRTYXV2aWdub24pLA0KICAgICAgICAgICAgICAgICAgICAiQ2hhcmRvbm5heSIgPT4gU29tZShHcmFwZTo6Q2hhcmRvbm5heSksDQogICAgICAgICAgICAgICAgICAgICJQaW5vdE5vaXIiID0+IFNvbWUoR3JhcGU6OlBpbm90Tm9pciksDQogICAgICAgICAgICAgICAgICAgIF8gPT4gTm9uZSwNCiAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgIGlmIGdyYXBlLmlzX3NvbWUoKSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmhhcnZlc3QgPSAqaGFydmVzdDsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZ3JhcGUgPSBncmFwZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luID0gb3JpZ2luLnRvX3N0cmluZygpOw0KICAgICAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6OlRlbXBlcmF0dXJlQ29udHJvbCB7DQogICAgICAgICAgICB0ZW1wZXJhdHVyZSwNCiAgICAgICAgICAgIHRpbWVzdGFtcCwNCiAgICAgICAgfSA9PiB7DQogICAgICAgICAgICBpZiBjb250ZXh0LmlzX293bmVyICYmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgaWYgY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UoKnRlbXBlcmF0dXJlKQ0KICAgICAgICAgICAgICAgICAgICAmJiBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rDQogICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLmxhc3RfY2hlY2sgPSAqdGltZXN0YW1wOw0KICAgICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wudGVtcGVyYXR1cmVfb2sgPSBmYWxzZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6Ok9yZ2FuaWNDZXJ0aWZpY2F0aW9uIHsNCiAgICAgICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICBwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICBhbmFseXRpY3MsDQogICAgICAgICAgICBhZGRpdGlvbmFsX2luZm8sDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY2hlY2tfc3ViamVjdF9oYXNfYmVlbl9pbml0aWF0ZWQoc3RhdGUpIHsNCiAgICAgICAgICAgICAgICBtYXRjaCBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCB7DQogICAgICAgICAgICAgICAgICAgIFNvbWUob3JnYW5pY19jZXJpZmllZCkgPT4gew0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgb3JnYW5pY19jZXJpZmllZA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICFjaGVja19pc19vcmdhbmljKA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZmVydGlsaXplcnNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKnBlc3RpY2lkZXNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmFuYWx5dGljcywNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKGZhbHNlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICBOb25lID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNoZWNrX2lzX29yZ2FuaWMoKmZlcnRpbGl6ZXJzX2NvbnRyb2wsICpwZXN0aWNpZGVzX2NvbnRyb2wsICphbmFseXRpY3MpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUodHJ1ZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="\n                },\n                "id": "Wine",\n                "initial_value": {\n                    "grape": null,\n                    "harvest": 0,\n                    "organic_certified": null,\n                    "origin": "",\n                    "temperature_control": {\n                        "last_check": 0,\n                        "temperature_ok": true\n                    }\n                },\n                "schema": {\n                    "additionalProperties": false,\n                    "description": "Representation of a bottle of wine",\n                    "properties": {\n                        "grape": {\n                            "description": "Type of grape",\n                            "enum": [\n                                "CabernetSauvignon",\n                                "Chardonnay",\n                                "PinotNoir",\n                                null\n                            ],\n                            "type": [\n                                "string",\n                                "null"\n                            ]\n                        },\n                        "harvest": {\n                            "description": "Harvest number",\n                            "type": "integer"\n                        },\n                        "organic_certified": {\n                            "description": "Certificate authenticating whether it is organic or not",\n                            "type": [\n                                "boolean",\n                                "null"\n                            ]\n                        },\n                        "origin": {\n                            "description": "Origin of the grape",\n                            "type": "string"\n                        },\n                        "temperature_control": {\n                            "additionalProperties": false,\n                            "description": "Values to be changed in the temperature control event",\n                            "properties": {\n                                "last_check": {\n                                    "description": "Timestamp of last check",\n                                    "type": "integer"\n                                },\n                                "temperature_ok": {\n                                    "description": "Value that corroborates whether the wine cold chain has been complied with",\n                                    "type": "boolean"\n                                }\n                            },\n                            "required": [\n                                "last_check",\n                                "temperature_ok"\n                            ],\n                            "type": "object"\n                        }\n                    },\n                    "required": [\n                        "harvest",\n                        "grape",\n                        "origin",\n                        "organic_certified",\n                        "temperature_control"\n                    ],\n                    "type": "object"\n                }\n            }\n        ]\n    },\n    "active": true\n}\n'))),(0,g.kt)("p",null,"Now, we'll proceed to test the external executions. To do this, we'll generate the signature of the event we want to emit using ",(0,g.kt)("a",{parentName:"p",href:"/docs/learn/client-tools#taple-sign"},(0,g.kt)("strong",{parentName:"a"},"TAPLE-Sign"))," with the following command. Replace ",(0,g.kt)("inlineCode",{parentName:"p"},"subject_id")," with the identifier of our ",(0,g.kt)("em",{parentName:"p"},"Wine")," subject:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Another terminal"',title:'"Another','terminal"':!0},'taple-sign \'f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326\' \'{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"OrganicCertification":{"fertilizers_control":true,"pesticides_control":true,"analytics":true,"additional_info":"test"}}}}\'\n')),(0,g.kt)("p",null,"The result of this execution will be included in the following request:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},"curl --request POST 'http://localhost:3001/api/event-requests' \\\n--header 'Content-Type: application/json' \\\n--data-raw {{PREVIUS-RESULT}}\n")),(0,g.kt)("p",null,"This will give us a result similar to the following:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium wines"',title:'"Node:',Premium:!0,'wines"':!0},'curl --request POST \'http://localhost:3001/api/event-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Fact": {\n            "subject_id": {{SUBJECT-ID}},\n            "payload": {\n                "OrganicCertification": {\n                "additional_info": "test",\n                "analytics": true,\n                "fertilizers_control": true,\n                "pesticides_control": true\n                }\n            }\n        }\n    },\n    "signature": {\n        "signer": "EzzmRjc8CtjzHu3MKmuTgnmOTgrJlYZj1D2DCZ9nN7Vk",\n        "timestamp": 1689842680899014786,\n        "value": "SEE-Mx-t9xXHCy6SPllVADy3-LrWk91N6btpAPFGAqi8eie3kAF4Q0WokMtt0Z_A7gIeik7b_64R_asyTavsL4Dg"\n    }\n}\'\n')),(0,g.kt)("p",null,"If everything has gone correctly, running the following command should update the subject with an ",(0,g.kt)("inlineCode",{parentName:"p"},"sn")," value of 2 and reflect the changes mentioned above:"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'\n")),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 2,\n    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",\n    "namespace": "",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "CabernetSauvignon",\n        "harvest": 1,\n        "organic_certified": true,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": true\n}\n')))}s.isMDXComponent=!0}}]);