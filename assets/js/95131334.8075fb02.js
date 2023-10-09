"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2383],{96106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>y,toc:()=>v});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),p=a(74933),o=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const u={id:"set-your-aprroval-for-a-request",title:"Emit approval for request",description:"Emit approval for request",sidebar_label:"Emit approval for request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"Emit approval for request\n\nAllows you to issue an affirmative or negative approval for a previously received request.",operationId:"Set your Aprroval for a request",parameters:[{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{oneOf:[{type:"object",required:["state"],properties:{state:{type:"string",enum:["RespondedAccepted"]}}},{type:"object",required:["state"],properties:{state:{type:"string",enum:["RespondedRejected"]}}}]},example:{approvalType:"Accept"}}},required:!0},responses:{204:{description:"Request successfully voted",content:{"application/json":{schema:{type:"object",required:["id","request","state"],properties:{id:{type:"string",description:"Approval request identifier"},reponse:{allOf:[{type:"object",properties:{ApprovalResponseBody:{type:"object",required:["appr_req_hash","approved"],properties:{appr_req_hash:{type:"string",description:"Hash of the request for approval"},approved:{type:"boolean",description:"Value specifying if it has been approved"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}}],nullable:!0},request:{type:"object",properties:{ApprovalRequestResponse:{type:"object",required:["event_request","sn","gov_version","patch","state_hash","hash_prev_event"],properties:{event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},state:{type:"string",enum:["Pending","RespondedAccepted","RespondedRejected","Obsolete"]}}},example:{id:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",reponse:{appr_req_hash:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",approved:!0,signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864361,value:"SERUEr362pHPIcORhUnYPxnW1A_jW675_yphYIQIKaO6wytdh7xwwNTXHW6Q1fs9F6ag8VpTy2DM_5ppRT7irFDg"}},request:{event_request:{Fact:{payload:{Patch:{data:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}]}},subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:1688643580,value:"SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"}},gov_version:0,hash_prev_event:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",patch:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:1688643580,value:"SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"},sn:1,state_hash:"JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"},state:"Responded"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},409:{description:"Conflict"},500:{description:"Internal Server Error"}},method:"patch",path:"/api/approval-requests/{id}",security:[],jsonRequestBodyExample:{state:"RespondedAccepted"},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Emit approval for request",description:{content:"Emit approval for request\n\nAllows you to issue an affirmative or negative approval for a previously received request.",type:"text/plain"},url:{path:["api","approval-requests",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Approval's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/api-rest/taple-client"},c=void 0,y={unversionedId:"api-rest/set-your-aprroval-for-a-request",id:"version-0.2/api-rest/set-your-aprroval-for-a-request",title:"Emit approval for request",description:"Emit approval for request",source:"@site/versioned_docs/version-0.2/api-rest/set-your-aprroval-for-a-request.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/set-your-aprroval-for-a-request",permalink:"/taple-docsite/docs/0.2/api-rest/set-your-aprroval-for-a-request",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"set-your-aprroval-for-a-request",title:"Emit approval for request",description:"Emit approval for request",sidebar_label:"Emit approval for request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"Emit approval for request\n\nAllows you to issue an affirmative or negative approval for a previously received request.",operationId:"Set your Aprroval for a request",parameters:[{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{oneOf:[{type:"object",required:["state"],properties:{state:{type:"string",enum:["RespondedAccepted"]}}},{type:"object",required:["state"],properties:{state:{type:"string",enum:["RespondedRejected"]}}}]},example:{approvalType:"Accept"}}},required:!0},responses:{204:{description:"Request successfully voted",content:{"application/json":{schema:{type:"object",required:["id","request","state"],properties:{id:{type:"string",description:"Approval request identifier"},reponse:{allOf:[{type:"object",properties:{ApprovalResponseBody:{type:"object",required:["appr_req_hash","approved"],properties:{appr_req_hash:{type:"string",description:"Hash of the request for approval"},approved:{type:"boolean",description:"Value specifying if it has been approved"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}}],nullable:!0},request:{type:"object",properties:{ApprovalRequestResponse:{type:"object",required:["event_request","sn","gov_version","patch","state_hash","hash_prev_event"],properties:{event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},state:{type:"string",enum:["Pending","RespondedAccepted","RespondedRejected","Obsolete"]}}},example:{id:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",reponse:{appr_req_hash:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",approved:!0,signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864361,value:"SERUEr362pHPIcORhUnYPxnW1A_jW675_yphYIQIKaO6wytdh7xwwNTXHW6Q1fs9F6ag8VpTy2DM_5ppRT7irFDg"}},request:{event_request:{Fact:{payload:{Patch:{data:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}]}},subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:1688643580,value:"SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"}},gov_version:0,hash_prev_event:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",patch:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:1688643580,value:"SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"},sn:1,state_hash:"JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"},state:"Responded"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},409:{description:"Conflict"},500:{description:"Internal Server Error"}},method:"patch",path:"/api/approval-requests/{id}",security:[],jsonRequestBodyExample:{state:"RespondedAccepted"},info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Emit approval for request",description:{content:"Emit approval for request\n\nAllows you to issue an affirmative or negative approval for a previously received request.",type:"text/plain"},url:{path:["api","approval-requests",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Approval's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get approvals",permalink:"/taple-docsite/docs/0.2/api-rest/get-approval-request-data"},next:{title:"Requests",permalink:"/taple-docsite/docs/0.2/api-rest/requests"}},h={},v=[{value:"Emit approval for request",id:"emit-approval-for-request",level:2}],g={toc:v};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"emit-approval-for-request"},"Emit approval for request"),(0,s.kt)("p",null,"Emit approval for request"),(0,s.kt)("p",null,"Allows you to issue an affirmative or negative approval for a previously received request."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,s.kt)("p",null,"Vote of the user for an existing request"))),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!1,name:"state",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`RespondedAccepted`]",defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!1,name:"state",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`RespondedRejected`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request successfully voted")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Approval request identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"reponse"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"ApprovalResponseBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"appr_req_hash",required:!1,schemaDescription:"Hash of the request for approval",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"approved",required:!1,schemaDescription:"Value specifying if it has been approved",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"SignatureBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"request"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"ApprovalRequestResponse"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"event_request"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"EventRequestBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Create"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace to which the subject belongs",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Subject schema json identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Fact"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"payload",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(d.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Transfer"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the new owner",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(d.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"EOL"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"SignatureBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{collapsible:!1,name:"gov_version",required:!1,schemaDescription:"Governance version",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"hash_prev_event",required:!1,schemaDescription:"Previous event hash",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"patch",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"state_hash",required:!1,schemaDescription:"Hash of the state",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"SignatureBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{collapsible:!1,name:"state",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Pending`, `RespondedAccepted`, `RespondedRejected`, `Obsolete`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "reponse": {\n    "ApprovalResponseBody": {\n      "appr_req_hash": "string",\n      "approved": true\n    },\n    "SignatureBody": {\n      "signer": "string",\n      "timestamp": 0,\n      "value": "string"\n    }\n  },\n  "request": {\n    "ApprovalRequestResponse": {\n      "event_request": {\n        "EventRequestBody": {\n          "Create": {\n            "governance_id": "string",\n            "name": "string",\n            "namespace": "string",\n            "public_key": "string",\n            "schema_id": "string"\n          }\n        },\n        "SignatureBody": {\n          "signer": "string",\n          "timestamp": 0,\n          "value": "string"\n        }\n      },\n      "gov_version": 0,\n      "hash_prev_event": "string",\n      "sn": 0,\n      "state_hash": "string"\n    },\n    "SignatureBody": {\n      "signer": "string",\n      "timestamp": 0,\n      "value": "string"\n    }\n  },\n  "state": "Pending"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "id": "J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",\n  "reponse": {\n    "appr_req_hash": "J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",\n    "approved": true,\n    "signature": {\n      "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n      "timestamp": 168864361,\n      "value": "SERUEr362pHPIcORhUnYPxnW1A_jW675_yphYIQIKaO6wytdh7xwwNTXHW6Q1fs9F6ag8VpTy2DM_5ppRT7irFDg"\n    }\n  },\n  "request": {\n    "event_request": {\n      "Fact": {\n        "payload": {\n          "Patch": {\n            "data": [\n              {\n                "op": "add",\n                "path": "/members/0",\n                "value": {\n                  "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n                  "name": "WPO"\n                }\n              }\n            ]\n          }\n        },\n        "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"\n      },\n      "signature": {\n        "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n        "timestamp": 1688643580,\n        "value": "SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"\n      }\n    },\n    "gov_version": 0,\n    "hash_prev_event": "JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",\n    "patch": [\n      {\n        "op": "add",\n        "path": "/members/0",\n        "value": {\n          "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n          "name": "WPO"\n        }\n      }\n    ],\n    "signature": {\n      "signer": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n      "timestamp": 1688643580,\n      "value": "SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"\n    },\n    "sn": 1,\n    "state_hash": "JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"\n  },\n  "state": "Responded"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Conflict")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);