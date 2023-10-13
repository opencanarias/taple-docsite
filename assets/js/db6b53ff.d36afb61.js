"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4360],{75869:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>v,toc:()=>h});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),r=s(94891),l=s(74933),u=s(47507),o=s(24310),d=s(63303),p=(s(75035),s(85162));const c={id:"get-event-request-state-data",title:"Get event request state",description:"Get event request state",sidebar_label:"Get event request state",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"Get event request state\n\nAllows to obtain the status of an event request by its identifier.",operationId:"Get Event Request State Data",parameters:[{name:"id",in:"path",description:"Event Request's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["id","state"],properties:{id:{type:"string",description:"Request identifier"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",nullable:!0,minimum:0},state:{type:"string",enum:["finished","error","processing"]},subject_id:{type:"string",description:"Subject identifier",nullable:!0},success:{type:"boolean",description:"Value that says if the request has been successful",nullable:!0}}},example:{id:"JyyWIjUa3Ui04oTSN4pJFT8FhmgPRPXzsG4_tIX8IBFg",sn:1,state:"finished",subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",success:!0}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/event-requests/{id}/state",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get event request state",description:{content:"Get event request state\n\nAllows to obtain the status of an event request by its identifier.",type:"text/plain"},url:{path:["api","event-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Event Request's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},m=void 0,v={unversionedId:"api-rest/get-event-request-state-data",id:"version-0.3/api-rest/get-event-request-state-data",title:"Get event request state",description:"Get event request state",source:"@site/versioned_docs/version-0.3/api-rest/get-event-request-state-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-event-request-state-data",permalink:"/docs/api-rest/get-event-request-state-data",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"get-event-request-state-data",title:"Get event request state",description:"Get event request state",sidebar_label:"Get event request state",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"Get event request state\n\nAllows to obtain the status of an event request by its identifier.",operationId:"Get Event Request State Data",parameters:[{name:"id",in:"path",description:"Event Request's unique id",required:!0,schema:{type:"string"}}],responses:{200:{description:"Request Data successfully retrieved",content:{"application/json":{schema:{type:"object",required:["id","state"],properties:{id:{type:"string",description:"Request identifier"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",nullable:!0,minimum:0},state:{type:"string",enum:["finished","error","processing"]},subject_id:{type:"string",description:"Subject identifier",nullable:!0},success:{type:"boolean",description:"Value that says if the request has been successful",nullable:!0}}},example:{id:"JyyWIjUa3Ui04oTSN4pJFT8FhmgPRPXzsG4_tIX8IBFg",sn:1,state:"finished",subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",success:!0}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/event-requests/{id}/state",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get event request state",description:{content:"Get event request state\n\nAllows to obtain the status of an event request by its identifier.",type:"text/plain"},url:{path:["api","event-requests",":id","state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Event Request's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get event request",permalink:"/docs/api-rest/get-event-request-data"},next:{title:"Subjects",permalink:"/docs/api-rest/subjects"}},b={},h=[{value:"Get event request state",id:"get-event-request-state",level:2}],q={toc:h};function y(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},q,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-event-request-state"},"Get event request state"),(0,i.kt)("p",null,"Get event request state"),(0,i.kt)("p",null,"Allows to obtain the status of an event request by its identifier."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Event Request's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request Data successfully retrieved")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Request identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`finished`, `error`, `processing`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"success",required:!1,schemaDescription:"Value that says if the request has been successful",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(u.Z,{responseExample:'{\n  "id": "string",\n  "sn": 0,\n  "state": "finished",\n  "subject_id": "string",\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(u.Z,{responseExample:'{\n  "id": "JyyWIjUa3Ui04oTSN4pJFT8FhmgPRPXzsG4_tIX8IBFg",\n  "sn": 1,\n  "state": "finished",\n  "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ",\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null)),(0,i.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}y.isMDXComponent=!0}}]);