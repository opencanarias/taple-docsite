"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5979],{70483:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var a=i(87462),n=(i(67294),i(3905)),s=i(26389),r=i(94891),o=i(74933),c=i(47507),l=i(24310),p=i(63303),d=(i(75035),i(85162));const m={id:"get-validation",title:"Get validation proof",description:"Get validation proof",sidebar_label:"Get validation proof",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get validation proof\n\nAllows to obtain the validation test of the last event for a specified subject.",operationId:"getValidation",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["proof","signatures"],properties:{proof:{type:"object",required:["subject_id","schema_id","namespace","name","subject_public_key","governance_id","genesis_governance_version","sn","prev_event_hash","event_hash","governance_version"],properties:{event_hash:{type:"string",description:"Hash of the event"},genesis_governance_version:{type:"integer",format:"int64",description:"Governance version of the genesis event",minimum:0},governance_id:{type:"string",description:"Governance identifier"},governance_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},prev_event_hash:{type:"string",description:"Previous event hash"},schema_id:{type:"string",description:"Subject schema json identifier"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"},subject_public_key:{type:"string",description:"Public key of the subject"}}},signatures:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Validators' signatures"}}},example:{proof:{event_hash:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",genesis_governance_version:0,governance_id:"",governance_version:0,name:"Wine_Producers_Organization",namespace:"",prev_event_hash:"",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",subject_public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs"},signatures:[{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:1688643031,value:"SEF3qN1uKIgNfnK6YlgU7rlCvDCNHhl_tdcRBvQRyGShR8oOOw5tVk8_OUNlyaJV_HsrISeX8jAf4L3diodRZ_Dg"}]}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}/validation",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get validation proof",description:{content:"Get validation proof\n\nAllows to obtain the validation test of the last event for a specified subject.",type:"text/plain"},url:{path:["api","subjects",":id","validation"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},u=void 0,v={unversionedId:"api-rest/get-validation",id:"api-rest/get-validation",title:"Get validation proof",description:"Get validation proof",source:"@site/docs/api-rest/get-validation.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-validation",permalink:"/docs/next/api-rest/get-validation",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"get-validation",title:"Get validation proof",description:"Get validation proof",sidebar_label:"Get validation proof",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get validation proof\n\nAllows to obtain the validation test of the last event for a specified subject.",operationId:"getValidation",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["proof","signatures"],properties:{proof:{type:"object",required:["subject_id","schema_id","namespace","name","subject_public_key","governance_id","genesis_governance_version","sn","prev_event_hash","event_hash","governance_version"],properties:{event_hash:{type:"string",description:"Hash of the event"},genesis_governance_version:{type:"integer",format:"int64",description:"Governance version of the genesis event",minimum:0},governance_id:{type:"string",description:"Governance identifier"},governance_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},prev_event_hash:{type:"string",description:"Previous event hash"},schema_id:{type:"string",description:"Subject schema json identifier"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},subject_id:{type:"string",description:"Subject identifier"},subject_public_key:{type:"string",description:"Public key of the subject"}}},signatures:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Validators' signatures"}}},example:{proof:{event_hash:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",genesis_governance_version:0,governance_id:"",governance_version:0,name:"Wine_Producers_Organization",namespace:"",prev_event_hash:"",schema_id:"governance",sn:0,subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",subject_public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs"},signatures:[{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:1688643031,value:"SEF3qN1uKIgNfnK6YlgU7rlCvDCNHhl_tdcRBvQRyGShR8oOOw5tVk8_OUNlyaJV_HsrISeX8jAf4L3diodRZ_Dg"}]}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}/validation",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get validation proof",description:{content:"Get validation proof\n\nAllows to obtain the validation test of the last event for a specified subject.",type:"text/plain"},url:{path:["api","subjects",":id","validation"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get an event from a subject",permalink:"/docs/next/api-rest/get-event"},next:{title:"Others",permalink:"/docs/next/api-rest/others"}},g={},h=[{value:"Get validation proof",id:"get-validation-proof",level:2}],b={toc:h};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-validation-proof"},"Get validation proof"),(0,n.kt)("p",null,"Get validation proof"),(0,n.kt)("p",null,"Allows to obtain the validation test of the last event for a specified subject."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Subjects Data successfully retrieved")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"proof"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"event_hash",required:!1,schemaDescription:"Hash of the event",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"genesis_governance_version",required:!1,schemaDescription:"Governance version of the genesis event",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"governance_version",required:!1,schemaDescription:"Governance version",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace to which the subject belongs",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"prev_event_hash",required:!1,schemaDescription:"Previous event hash",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Subject schema json identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"subject_public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"signatures"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Validators' signatures")),(0,n.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "proof": {\n    "event_hash": "string",\n    "genesis_governance_version": 0,\n    "governance_id": "string",\n    "governance_version": 0,\n    "name": "string",\n    "namespace": "string",\n    "prev_event_hash": "string",\n    "schema_id": "string",\n    "sn": 0,\n    "subject_id": "string",\n    "subject_public_key": "string"\n  },\n  "signatures": [\n    {\n      "signer": "string",\n      "timestamp": 0,\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "proof": {\n    "event_hash": "JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",\n    "genesis_governance_version": 0,\n    "governance_id": "",\n    "governance_version": 0,\n    "name": "Wine_Producers_Organization",\n    "namespace": "",\n    "prev_event_hash": "",\n    "schema_id": "governance",\n    "sn": 0,\n    "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",\n    "subject_public_key": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs"\n  },\n  "signatures": [\n    {\n      "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n      "timestamp": 1688643031,\n      "value": "SEF3qN1uKIgNfnK6YlgU7rlCvDCNHhl_tdcRBvQRyGShR8oOOw5tVk8_OUNlyaJV_HsrISeX8jAf4L3diodRZ_Dg"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);