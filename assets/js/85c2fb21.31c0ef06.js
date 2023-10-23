"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5789],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},i="Defining the governance",s={unversionedId:"build/tutorial-from-0/governance-operations",id:"version-0.1/build/tutorial-from-0/governance-operations",title:"Defining the governance",description:"Once the two nodes are up, the first thing we need to do is to create a governance, since it is the definition of the rules by which the members of the network interact. Initially, we will create a basic governance that will include the two existing nodes and a simple schema. For more information about governance and schemas, please visit the following sections:  Governance configuration and Creating a JSON-Schema.",source:"@site/versioned_docs/version-0.1/build/tutorial-from-0/governance-operations.md",sourceDirName:"build/tutorial-from-0",slug:"/build/tutorial-from-0/governance-operations",permalink:"/docs/0.1/build/tutorial-from-0/governance-operations",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698048071,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Running nodes",permalink:"/docs/0.1/build/tutorial-from-0/running-nodes"},next:{title:"Creating subjects",permalink:"/docs/0.1/build/tutorial-from-0/subject-operations"}},l={},p=[{value:"Create a governance",id:"create-a-governance",level:2},{value:"Adding the second node to governance",id:"adding-the-second-node-to-governance",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defining-the-governance"},"Defining the governance"),(0,o.kt)("p",null,"Once the two nodes are up, the first thing we need to do is to create a governance, since it is the definition of the rules by which the members of the network interact. Initially, we will create a basic governance that will include the two existing nodes and a simple schema. For more information about governance and schemas, please visit the following sections:  ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/0.1/learn/operational-guides/governance-configuration"},"Governance configuration"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/0.1/learn/operational-guides/creating-a-json-schema"},"Creating a JSON-Schema")),"."),(0,o.kt)("h2",{id:"create-a-governance"},"Create a governance"),(0,o.kt)("p",null,"Below you can find an example of how to create a governance and schema by node_0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --silent --location --request POST \'http://localhost:3000/api/requests\' \\\n--header \'X-API-KEY;\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "Create": {\n            "governance_id": "",\n            "namespace": "",\n            "schema_id": "governance",\n            "payload": {\n                "Json": {\n                    "members": [\n                        {\n                            "id": "Company1",\n                            "tags": {},\n                            "description": "Headquarters in Spain",\n                            "key": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                        }\n                    ],\n                    "schemas": [\n                        {\n                            "id": "Test",\n                            "tags": {},\n                            "content": {\n                                "type": "object",\n                                "additionalProperties": false,\n                                "required": [\n                                    "temperature",\n                                    "location",\n                                    "batch"\n                                ],\n                                "properties": {\n                                    "temperature": {\n                                        "type": "integer"\n                                    },\n                                    "location": {\n                                        "type": "string"\n                                    },\n                                    "batch": {\n                                        "type": "object",\n                                        "additionalProperties": false,\n                                        "required": [\n                                            "weight",\n                                            "origin"\n                                        ],\n                                        "properties": {\n                                            "weight": {\n                                                "type": "number",\n                                                "minimum": 0\n                                            },\n                                            "origin": {\n                                                "type": "string"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ],\n                    "policies": [\n                        {\n                            "id": "Test",\n                            "validation": {\n                                "quorum": 0.5,\n                                "validators": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                                ]\n                            },\n                            "approval": {\n                                "quorum": 0.5,\n                                "approvers": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                                ]\n                            },\n                            "invokation": {\n                                "owner": {\n                                    "allowance": true,\n                                    "approvalRequired": true\n                                },\n                                "set": {\n                                    "allowance": false,\n                                    "approvalRequired": false,\n                                    "invokers": []\n                                },\n                                "all": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                },\n                                "external": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                }\n                            }\n                        },\n                        {\n                            "id": "governance",\n                            "validation": {\n                                "quorum": 0.5,\n                                "validators": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                                ]\n                            },\n                            "approval": {\n                                "quorum": 0.5,\n                                "approvers": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                                ]\n                            },\n                            "invokation": {\n                                "owner": {\n                                    "allowance": true,\n                                    "approvalRequired": true\n                                },\n                                "set": {\n                                    "allowance": false,\n                                    "approvalRequired": false,\n                                    "invokers": []\n                                },\n                                "all": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                },\n                                "external": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the "',(0,o.kt)("strong",{parentName:"p"},"members"),'" object, you must define the members as the name suggests. To do this, you must specify the "',(0,o.kt)("strong",{parentName:"p"},"id"),'" with which you want to identify the member, an empty object in the "',(0,o.kt)("strong",{parentName:"p"},"tags"),'" field (for now), a description about the member in the "',(0,o.kt)("strong",{parentName:"p"},"description"),'" field and finally in the "',(0,o.kt)("strong",{parentName:"p"},"key"),'" field you will contain the ',(0,o.kt)("strong",{parentName:"p"},"Controller ID")," of the node you want to associate it with. To display the ",(0,o.kt)("strong",{parentName:"p"},"Controller ID")," of the nodes, you must execute the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    docker logs node_0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the "',(0,o.kt)("strong",{parentName:"p"},"schemas"),'" object, you must define the schemas as its own indicates. To do this, you must specify the "',(0,o.kt)("strong",{parentName:"p"},"id"),'" with which you want to identify the schema, an empty object in the "',(0,o.kt)("strong",{parentName:"p"},"tags"),'" field (for now) and finally, in the "',(0,o.kt)("strong",{parentName:"p"},"content"),'" field, you must specify a valid ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://json-schema.org/"},"JSON-Schema")),". In this case, we have taken this JSON-Schema as an example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "additionalProperties": false,\n  "required": ["temperature", "location", "batch"],\n  "properties": {\n    "temperature": { "type": "integer" },\n    "location": { "type": "string" },\n    "batch": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": ["weight", "origin"],\n      "properties": {\n        "weight": { "type": "number", "minimum": 0 },\n        "origin": { "type": "string" }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",{parentName:"li"},"After executing the command, if everything went correctly, you should get a response similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "Create": {\n      "governance_id": "",\n      "schema_id": "governance",\n      "namespace": "",\n      "payload": {\n        "Json": "{\\"members\\":[{\\"description\\":\\"Headquarters in Spain\\",\\"id\\":\\"Company1\\",\\"key\\":\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"tags\\":{}}],\\"policies\\":[{\\"approval\\":{\\"approvers\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\"],\\"quorum\\":0.5},\\"id\\":\\"Test\\",\\"invokation\\":{\\"all\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"external\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"owner\\":{\\"allowance\\":true,\\"approvalRequired\\":true},\\"set\\":{\\"allowance\\":false,\\"approvalRequired\\":false,\\"invokers\\":[]}},\\"validation\\":{\\"quorum\\":0.5,\\"validators\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\"]}},{\\"approval\\":{\\"approvers\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\"],\\"quorum\\":0.5},\\"id\\":\\"governance\\",\\"invokation\\":{\\"all\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"external\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"owner\\":{\\"allowance\\":true,\\"approvalRequired\\":true},\\"set\\":{\\"allowance\\":false,\\"approvalRequired\\":false,\\"invokers\\":[]}},\\"validation\\":{\\"quorum\\":0.5,\\"validators\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\"]}}],\\"schemas\\":[{\\"content\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"batch\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"origin\\":{\\"type\\":\\"string\\"},\\"weight\\":{\\"minimum\\":0,\\"type\\":\\"number\\"}},\\"required\\":[\\"weight\\",\\"origin\\"],\\"type\\":\\"object\\"},\\"location\\":{\\"type\\":\\"string\\"},\\"temperature\\":{\\"type\\":\\"integer\\"}},\\"required\\":[\\"temperature\\",\\"location\\",\\"batch\\"],\\"type\\":\\"object\\"},\\"id\\":\\"Test\\",\\"tags\\":{}}]}"\n      }\n    }\n  },\n  "request_id": "JjCi34th9vt66TQY4AgTpjZrBRgz-DsUuo4lJHhf0qM0",\n  "timestamp": 1674042123545,\n  "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n  "sn": 0\n}\n')),(0,o.kt)("p",{parentName:"li"},"In addition, if we execute the command seen above ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs node_0"),", we can check that the node has received the governance creation information correctly, obtaining as output something similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    [2023-01-18T11:42:03Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 event 0 signed\n    [2023-01-18T11:42:03Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 created\n")))),(0,o.kt)("h2",{id:"adding-the-second-node-to-governance"},"Adding the second node to governance"),(0,o.kt)("p",null,"To add a node to the governance we must execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --silent --location --request POST \'http://localhost:3000/api/requests\' \\\n--header \'X-API-KEY;\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "request": {\n        "State": {\n            "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n            "payload": {\n                "Json": {\n                    "members": [\n                        {\n                            "id": "Company1",\n                            "tags": {},\n                            "description": "Headquarters in Spain",\n                            "key": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"\n                        },\n                        {\n                            "id": "Company2",\n                            "tags": {},\n                            "description": "Headquarters in England",\n                            "key": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                        }\n                    ],\n                    "schemas": [\n                        {\n                            "id": "Test",\n                            "tags": {},\n                            "content": {\n                                "type": "object",\n                                "additionalProperties": false,\n                                "required": [\n                                    "temperature",\n                                    "location",\n                                    "batch"\n                                ],\n                                "properties": {\n                                    "temperature": {\n                                        "type": "integer"\n                                    },\n                                    "location": {\n                                        "type": "string"\n                                    },\n                                    "batch": {\n                                        "type": "object",\n                                        "additionalProperties": false,\n                                        "required": [\n                                            "weight",\n                                            "origin"\n                                        ],\n                                        "properties": {\n                                            "weight": {\n                                                "type": "number",\n                                                "minimum": 0\n                                            },\n                                            "origin": {\n                                                "type": "string"\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ],\n                    "policies": [\n                        {\n                            "id": "Test",\n                            "validation": {\n                                "quorum": 0.5,\n                                "validators": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                                ]\n                            },\n                            "approval": {\n                                "quorum": 0.5,\n                                "approvers": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                                ]\n                            },\n                            "invokation": {\n                                "owner": {\n                                    "allowance": true,\n                                    "approvalRequired": true\n                                },\n                                "set": {\n                                    "allowance": false,\n                                    "approvalRequired": false,\n                                    "invokers": []\n                                },\n                                "all": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                },\n                                "external": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                }\n                            }\n                        },\n                        {\n                            "id": "governance",\n                            "validation": {\n                                "quorum": 0.5,\n                                "validators": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                                ]\n                            },\n                            "approval": {\n                                "quorum": 0.5,\n                                "approvers": [\n                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",\n                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"\n                                ]\n                            },\n                            "invokation": {\n                                "owner": {\n                                    "allowance": true,\n                                    "approvalRequired": true\n                                },\n                                "set": {\n                                    "allowance": false,\n                                    "approvalRequired": false,\n                                    "invokers": []\n                                },\n                                "all": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                },\n                                "external": {\n                                    "allowance": false,\n                                    "approvalRequired": false\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}\'\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Note that in the above command you must change the "',(0,o.kt)("strong",{parentName:"p"},"subject_id"),'" field with the hash identifier of your governance.'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4"\n'))),(0,o.kt)("p",null,"As we can see, we have added a new member in this case ",(0,o.kt)("strong",{parentName:"p"},"Company2"),' to which we have specified as "',(0,o.kt)("strong",{parentName:"p"},"key"),'" the ',(0,o.kt)("strong",{parentName:"p"},"Controller ID")," of the new node that we have raised (second node). To visualize the ",(0,o.kt)("strong",{parentName:"p"},"Controller ID")," of the nodes, you must execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    docker logs node_1\n")),(0,o.kt)("p",null,"If everything went correctly you will get an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "request": {\n    "State": {\n      "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n      "payload": {\n        "Json": "{\\"members\\":[{\\"description\\":\\"Headquarters in Spain\\",\\"id\\":\\"Company1\\",\\"key\\":\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"tags\\":{}},{\\"description\\":\\"Headquarters in England\\",\\"id\\":\\"Company2\\",\\"key\\":\\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\\",\\"tags\\":{}}],\\"policies\\":[{\\"approval\\":{\\"approvers\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\\"],\\"quorum\\":0.5},\\"id\\":\\"Test\\",\\"invokation\\":{\\"all\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"external\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"owner\\":{\\"allowance\\":true,\\"approvalRequired\\":true},\\"set\\":{\\"allowance\\":false,\\"approvalRequired\\":false,\\"invokers\\":[]}},\\"validation\\":{\\"quorum\\":0.5,\\"validators\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\\"]}},{\\"approval\\":{\\"approvers\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\\"],\\"quorum\\":0.5},\\"id\\":\\"governance\\",\\"invokation\\":{\\"all\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"external\\":{\\"allowance\\":false,\\"approvalRequired\\":false},\\"owner\\":{\\"allowance\\":true,\\"approvalRequired\\":true},\\"set\\":{\\"allowance\\":false,\\"approvalRequired\\":false,\\"invokers\\":[]}},\\"validation\\":{\\"quorum\\":0.5,\\"validators\\":[\\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\\",\\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\\"]}}],\\"schemas\\":[{\\"content\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"batch\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"origin\\":{\\"type\\":\\"string\\"},\\"weight\\":{\\"minimum\\":0,\\"type\\":\\"number\\"}},\\"required\\":[\\"weight\\",\\"origin\\"],\\"type\\":\\"object\\"},\\"location\\":{\\"type\\":\\"string\\"},\\"temperature\\":{\\"type\\":\\"integer\\"}},\\"required\\":[\\"temperature\\",\\"location\\",\\"batch\\"],\\"type\\":\\"object\\"},\\"id\\":\\"Test\\",\\"tags\\":{}}]}"\n      }\n    }\n  },\n  "request_id": "JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI",\n  "timestamp": 1674042802696,\n  "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",\n  "sn": null\n}\n')),(0,o.kt)("p",null,'Now, we must perform the approval process to add or deny the access of the new member to the governance. To do this, we can see how in the response we have a field "',(0,o.kt)("strong",{parentName:"p"},"request_id"),'" which contains the hash identifier of the approval request with the format shown below:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    "JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI"\n')),(0,o.kt)("p",null,"This hash identifier will be used to perform the approval system in which 50% of the members belonging to the governance must approve in favor of adding the new member. To do this, we execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    curl --silent --location --request PUT 'http://localhost:3000/api/approvals/JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI' \\\n--header 'X-API-KEY;' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"approvalType\": \"Accept\"\n}'\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that you will need to change the hash identifier of the approval request to yours.")),(0,o.kt)("p",null,'If we do not want to approve the introduction of the new member to the governance, we must change "',(0,o.kt)("strong",{parentName:"p"},"Accept"),'" in the request to "',(0,o.kt)("strong",{parentName:"p"},"Reject"),'". If the approval process was successful you will get ',(0,o.kt)("inlineCode",{parentName:"p"},"null")," as a response."),(0,o.kt)("p",null,"In this case, having only one member in the governance, your approval is the only one necessary for the introduction of the new member. As in this case we have accepted, we could visualize that the member 2 has been intruded by executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs node_1")," obtaining as output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    [2023-01-18T11:55:59Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 event 1 signed\n")))}c.isMDXComponent=!0}}]);