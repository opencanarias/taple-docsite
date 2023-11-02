"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3027],{31630:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>b,toc:()=>g});var a=i(87462),n=(i(67294),i(3905)),s=i(26389),r=i(94891),c=i(74933),o=i(47507),l=i(24310),u=i(63303),d=(i(75035),i(85162));const p={id:"get-all-subjects-data",title:"Get subjects",description:"Get subjects",sidebar_label:"Get subjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get subjects\n\nAllows to obtain, with pagination, the list of subjects known by the node.\nIt can also be used to obtain exclusively the governances and all the subjects belonging to a specific one.",operationId:"Get All Subjects Data",parameters:[{name:"subject_type",in:"query",description:"Type of subjects requested (possibilities: all, governances)",required:!1,schema:{type:"string",nullable:!0}},{name:"governanceid",in:"query",description:"Governance id of subjects requested",required:!1,schema:{type:"string",nullable:!0}},{name:"from",in:"query",description:"Identifier of the initial subject to be considered in pagination",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["subject_id","governance_id","sn","public_key","namespace","name","schema_id","owner","creator","properties","active"],properties:{active:{type:"boolean",description:"Indicates if the subject is active or not"},creator:{type:"string",description:"Subject creator identifier"},governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"The name of the subject."},namespace:{type:"string",description:"Namespace of the subject"},owner:{type:"string",description:"Subject owner identifier"},properties:{description:"Current status of the subject"},public_key:{type:"string",description:"Public key of the subject"},schema_id:{type:"string",description:"Identifier of the schema used by the subject and defined in associated governance"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"}}}},example:[{active:!0,creator:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",governance_id:"",name:"Wine_Producers_Organization",namespace:"",owner:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",properties:{members:[],policies:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}],roles:[],schemas:[]},public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}]}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get subjects",description:{content:"Get subjects\n\nAllows to obtain, with pagination, the list of subjects known by the node.\nIt can also be used to obtain exclusively the governances and all the subjects belonging to a specific one.",type:"text/plain"},url:{path:["api","subjects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Type of subjects requested (possibilities: all, governances)",type:"text/plain"},key:"subject_type",value:""},{disabled:!1,description:{content:"Governance id of subjects requested",type:"text/plain"},key:"governanceid",value:""},{disabled:!1,description:{content:"Identifier of the initial subject to be considered in pagination",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of subjects requested",type:"text/plain"},key:"quantity",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},m=void 0,b={unversionedId:"api-rest/get-all-subjects-data",id:"version-0.2/api-rest/get-all-subjects-data",title:"Get subjects",description:"Get subjects",source:"@site/versioned_docs/version-0.2/api-rest/get-all-subjects-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-all-subjects-data",permalink:"/docs/0.2/api-rest/get-all-subjects-data",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"get-all-subjects-data",title:"Get subjects",description:"Get subjects",sidebar_label:"Get subjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get subjects\n\nAllows to obtain, with pagination, the list of subjects known by the node.\nIt can also be used to obtain exclusively the governances and all the subjects belonging to a specific one.",operationId:"Get All Subjects Data",parameters:[{name:"subject_type",in:"query",description:"Type of subjects requested (possibilities: all, governances)",required:!1,schema:{type:"string",nullable:!0}},{name:"governanceid",in:"query",description:"Governance id of subjects requested",required:!1,schema:{type:"string",nullable:!0}},{name:"from",in:"query",description:"Identifier of the initial subject to be considered in pagination",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["subject_id","governance_id","sn","public_key","namespace","name","schema_id","owner","creator","properties","active"],properties:{active:{type:"boolean",description:"Indicates if the subject is active or not"},creator:{type:"string",description:"Subject creator identifier"},governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"The name of the subject."},namespace:{type:"string",description:"Namespace of the subject"},owner:{type:"string",description:"Subject owner identifier"},properties:{description:"Current status of the subject"},public_key:{type:"string",description:"Public key of the subject"},schema_id:{type:"string",description:"Identifier of the schema used by the subject and defined in associated governance"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"}}}},example:[{active:!0,creator:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",governance_id:"",name:"Wine_Producers_Organization",namespace:"",owner:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",properties:{members:[],policies:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}],roles:[],schemas:[]},public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}]}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get subjects",description:{content:"Get subjects\n\nAllows to obtain, with pagination, the list of subjects known by the node.\nIt can also be used to obtain exclusively the governances and all the subjects belonging to a specific one.",type:"text/plain"},url:{path:["api","subjects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Type of subjects requested (possibilities: all, governances)",type:"text/plain"},key:"subject_type",value:""},{disabled:!1,description:{content:"Governance id of subjects requested",type:"text/plain"},key:"governanceid",value:""},{disabled:!1,description:{content:"Identifier of the initial subject to be considered in pagination",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of subjects requested",type:"text/plain"},key:"quantity",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Subjects",permalink:"/docs/0.2/api-rest/subjects"},next:{title:"Get subject by ID",permalink:"/docs/0.2/api-rest/get-subject-data"}},y={},g=[{value:"Get subjects",id:"get-subjects",level:2}],h={toc:g};function v(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-subjects"},"Get subjects"),(0,n.kt)("p",null,"Get subjects"),(0,n.kt)("p",null,"Allows to obtain, with pagination, the list of subjects known by the node.\nIt can also be used to obtain exclusively the governances and all the subjects belonging to a specific one."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"subject_type",in:"query",description:"Type of subjects requested (possibilities: all, governances)",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"governanceid",in:"query",description:"Governance id of subjects requested",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"from",in:"query",description:"Identifier of the initial subject to be considered in pagination",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,n.kt)(c.Z,{className:"paramsItem",param:{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Subjects Data successfully retrieved")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(u.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"active",required:!1,schemaDescription:"Indicates if the subject is active or not",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"creator",required:!1,schemaDescription:"Subject creator identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"The name of the subject.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"owner",required:!1,schemaDescription:"Subject owner identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"properties",required:!1,schemaDescription:"Current status of the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Identifier of the schema used by the subject and defined in associated governance",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'[\n  {\n    "active": true,\n    "creator": "string",\n    "governance_id": "string",\n    "name": "string",\n    "namespace": "string",\n    "owner": "string",\n    "public_key": "string",\n    "schema_id": "string",\n    "sn": 0,\n    "subject_id": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'[\n  {\n    "active": true,\n    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "governance_id": "",\n    "name": "Wine_Producers_Organization",\n    "namespace": "",\n    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n    "properties": {\n      "members": [],\n      "policies": [\n        {\n          "approve": {\n            "quorum": "MAJORITY"\n          },\n          "evaluate": {\n            "quorum": "MAJORITY"\n          },\n          "id": "governance",\n          "validate": {\n            "quorum": "MAJORITY"\n          }\n        }\n      ],\n      "roles": [],\n      "schemas": []\n    },\n    "public_key": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n    "schema_id": "governance",\n    "sn": 0,\n    "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null)))))}v.isMDXComponent=!0}}]);