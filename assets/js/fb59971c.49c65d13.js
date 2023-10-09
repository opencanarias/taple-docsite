"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4400],{4816:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),r=i(94891),o=(i(74933),i(47507)),l=i(24310),c=i(63303),p=(i(75035),i(85162));const d={id:"create-event-request",title:"Send event request",description:"Send event request",sidebar_label:"Send event request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"Send event request\n\nAllows to send an event request for a subject to the TAPLE node.\nThese requests can be of any type of event (done, creation, transfer and end of life).\nIn case of external invocation, the requests can be signed.",operationId:"createEventRequest",requestBody:{content:{"application/json":{schema:{type:"object",required:["request"],properties:{request:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},signature:{allOf:[{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}],nullable:!0}}}}},required:!0},responses:{201:{description:"Request Created Successfully",content:{"text/plain":{schema:{type:"string"},example:{request_id:"J8618wGO7hH4wRuEeL0Ob5XNI9Q73BlCNlV8cWBORq78"}}}},400:{description:"Bad Request"},409:{description:"Conflict"},500:{description:"Internal Server Error"}},method:"post",path:"/api/event-requests",security:[],jsonRequestBodyExample:{request:{Create:{governance_id:"string",name:"string",namespace:"string",public_key:"string",schema_id:"string"}},signature:{signer:"string",timestamp:0,value:"string"}},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Send event request",description:{content:"Send event request\n\nAllows to send an event request for a subject to the TAPLE node.\nThese requests can be of any type of event (done, creation, transfer and end of life).\nIn case of external invocation, the requests can be signed.",type:"text/plain"},url:{path:["api","event-requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"text/plain"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/taple-client"},u=void 0,m={unversionedId:"api-rest/create-event-request",id:"version-0.3/api-rest/create-event-request",title:"Send event request",description:"Send event request",source:"@site/versioned_docs/version-0.3/api-rest/create-event-request.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/create-event-request",permalink:"/docs/api-rest/create-event-request",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"create-event-request",title:"Send event request",description:"Send event request",sidebar_label:"Send event request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"Send event request\n\nAllows to send an event request for a subject to the TAPLE node.\nThese requests can be of any type of event (done, creation, transfer and end of life).\nIn case of external invocation, the requests can be signed.",operationId:"createEventRequest",requestBody:{content:{"application/json":{schema:{type:"object",required:["request"],properties:{request:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},signature:{allOf:[{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}],nullable:!0}}}}},required:!0},responses:{201:{description:"Request Created Successfully",content:{"text/plain":{schema:{type:"string"},example:{request_id:"J8618wGO7hH4wRuEeL0Ob5XNI9Q73BlCNlV8cWBORq78"}}}},400:{description:"Bad Request"},409:{description:"Conflict"},500:{description:"Internal Server Error"}},method:"post",path:"/api/event-requests",security:[],jsonRequestBodyExample:{request:{Create:{governance_id:"string",name:"string",namespace:"string",public_key:"string",schema_id:"string"}},signature:{signer:"string",timestamp:0,value:"string"}},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Send event request",description:{content:"Send event request\n\nAllows to send an event request for a subject to the TAPLE node.\nThese requests can be of any type of event (done, creation, transfer and end of life).\nIn case of external invocation, the requests can be signed.",type:"text/plain"},url:{path:["api","event-requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"text/plain"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Requests",permalink:"/docs/api-rest/requests"},next:{title:"Get event request",permalink:"/docs/api-rest/get-event-request-data"}},y={},b=[{value:"Send event request",id:"send-event-request",level:2}],v={toc:b};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"send-event-request"},"Send event request"),(0,a.kt)("p",null,"Send event request"),(0,a.kt)("p",null,"Allows to send an event request for a subject to the TAPLE node.\nThese requests can be of any type of event (done, creation, transfer and end of life).\nIn case of external invocation, the requests can be signed."),(0,a.kt)(r.Z,{mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"request"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"oneOf"),(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Create"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"governance_id",required:!0,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:"Name of subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"namespace",required:!0,schemaDescription:"Namespace to which the subject belongs",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"schema_id",required:!0,schemaDescription:"Subject schema json identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)(p.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Fact"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"payload",required:!0,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!0,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)(p.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Transfer"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"public_key",required:!0,schemaDescription:"Public key of the new owner",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!0,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)(p.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"EOL"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!0,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"signature"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"signer",required:!0,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!0,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!0,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request Created Successfully")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,a.kt)(c.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"string")))))),(0,a.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "request_id": "J8618wGO7hH4wRuEeL0Ob5XNI9Q73BlCNlV8cWBORq78"\n}',language:"shell",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Bad Request")),(0,a.kt)("div",null)),(0,a.kt)(p.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Conflict")),(0,a.kt)("div",null)),(0,a.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error")),(0,a.kt)("div",null)))))}f.isMDXComponent=!0}}]);