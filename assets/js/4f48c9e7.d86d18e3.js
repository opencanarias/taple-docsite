"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2039],{87382:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>u,metadata:()=>b,toc:()=>h});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),r=i(94891),c=i(74933),o=i(47507),d=i(24310),p=i(63303),l=(i(75035),i(85162));const u={id:"get-subject-data",title:"Get subject by ID",description:"Get subject by ID",sidebar_label:"Get subject by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get subject by ID\nAllows to obtain a specific subject by means of its identifier",operationId:"Get Subject Data",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Subject Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["subject_id","governance_id","sn","public_key","namespace","name","schema_id","owner","creator","properties","active"],properties:{active:{type:"boolean",description:"Indicates if the subject is active or not"},creator:{type:"string",description:"Subject creator identifier"},governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"The name of the subject."},namespace:{type:"string",description:"Namespace of the subject"},owner:{type:"string",description:"Subject owner identifier"},properties:{description:"Current status of the subject"},public_key:{type:"string",description:"Public key of the subject"},schema_id:{type:"string",description:"Identifier of the schema used by the subject and defined in associated governance"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"}}},example:{active:!0,creator:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",governance_id:"",name:"Wine_Producers_Organization",namespace:"",owner:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",properties:{members:[],policies:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}],roles:[],schemas:[]},public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get subject by ID",description:{content:"Get subject by ID\nAllows to obtain a specific subject by means of its identifier",type:"text/plain"},url:{path:["api","subjects",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},m=void 0,b={unversionedId:"api-rest/get-subject-data",id:"version-0.3/api-rest/get-subject-data",title:"Get subject by ID",description:"Get subject by ID",source:"@site/versioned_docs/version-0.3/api-rest/get-subject-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-subject-data",permalink:"/taple-docsite/docs/api-rest/get-subject-data",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1696909591,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{id:"get-subject-data",title:"Get subject by ID",description:"Get subject by ID",sidebar_label:"Get subject by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get subject by ID\nAllows to obtain a specific subject by means of its identifier",operationId:"Get Subject Data",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Subject Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["subject_id","governance_id","sn","public_key","namespace","name","schema_id","owner","creator","properties","active"],properties:{active:{type:"boolean",description:"Indicates if the subject is active or not"},creator:{type:"string",description:"Subject creator identifier"},governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"The name of the subject."},namespace:{type:"string",description:"Namespace of the subject"},owner:{type:"string",description:"Subject owner identifier"},properties:{description:"Current status of the subject"},public_key:{type:"string",description:"Public key of the subject"},schema_id:{type:"string",description:"Identifier of the schema used by the subject and defined in associated governance"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"}}},example:{active:!0,creator:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",governance_id:"",name:"Wine_Producers_Organization",namespace:"",owner:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",properties:{members:[],policies:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}],roles:[],schemas:[]},public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get subject by ID",description:{content:"Get subject by ID\nAllows to obtain a specific subject by means of its identifier",type:"text/plain"},url:{path:["api","subjects",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get subjects",permalink:"/taple-docsite/docs/api-rest/get-all-subjects-data"},next:{title:"Get events of a subject",permalink:"/taple-docsite/docs/api-rest/get-events"}},y={},h=[{value:"Get subject by ID",id:"get-subject-by-id",level:2}],g={toc:h};function v(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-subject-by-id"},"Get subject by ID"),(0,s.kt)("p",null,"Get subject by ID\nAllows to obtain a specific subject by means of its identifier"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(c.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Subject Data successfully retrieved")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"active",required:!1,schemaDescription:"Indicates if the subject is active or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"creator",required:!1,schemaDescription:"Subject creator identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name of the subject.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"owner",required:!1,schemaDescription:"Subject owner identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"properties",required:!1,schemaDescription:"Current status of the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Identifier of the schema used by the subject and defined in associated governance",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "active": true,\n  "creator": "string",\n  "governance_id": "string",\n  "name": "string",\n  "namespace": "string",\n  "owner": "string",\n  "public_key": "string",\n  "schema_id": "string",\n  "sn": 0,\n  "subject_id": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "active": true,\n  "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n  "governance_id": "",\n  "name": "Wine_Producers_Organization",\n  "namespace": "",\n  "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n  "properties": {\n    "members": [],\n    "policies": [\n      {\n        "approve": {\n          "quorum": "MAJORITY"\n        },\n        "evaluate": {\n          "quorum": "MAJORITY"\n        },\n        "id": "governance",\n        "validate": {\n          "quorum": "MAJORITY"\n        }\n      }\n    ],\n    "roles": [],\n    "schemas": []\n  },\n  "public_key": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n  "schema_id": "governance",\n  "sn": 0,\n  "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);