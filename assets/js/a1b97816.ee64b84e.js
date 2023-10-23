"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8487],{90275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),n=a(94891),p=a(74933),o=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const c={id:"get-approval-request-data",title:"Get approvals",description:"Get approvals",sidebar_label:"Get approvals",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:'Get approvals\n\nAllows to obtain the list of requests for approvals received by the node.\nIt can also be used, by means of the "status" parameter, to list the requests pending approval.',operationId:"Get Approval Request Data",parameters:[{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}},{name:"status",in:"query",description:"Approval's status (possibilities: pending, obsolete, responded)",required:!1,schema:{type:"string",nullable:!0}},{name:"from",in:"query",description:"Id of initial approval",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of approvals requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Approvals Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["id","request","state"],properties:{id:{type:"string",description:"Approval request identifier"},reponse:{allOf:[{type:"object",properties:{ApprovalResponseBody:{type:"object",required:["appr_req_hash","approved"],properties:{appr_req_hash:{type:"string",description:"Hash of the request for approval"},approved:{type:"boolean",description:"Value specifying if it has been approved"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}}],nullable:!0},request:{type:"object",properties:{ApprovalRequestResponse:{type:"object",required:["event_request","sn","gov_version","patch","state_hash","hash_prev_event"],properties:{event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},state:{type:"string",enum:["Pending","RespondedAccepted","RespondedRejected","Obsolete"]}}}},example:[{id:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",reponse:null,request:{event_request:{Fact:{payload:{Patch:{data:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}]}},subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864358,value:"SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"}},gov_version:0,hash_prev_event:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",patch:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:168864358,value:"SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"},sn:1,state_hash:"JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"},state:"Pending"}]}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/api/approval-requests",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get approvals",description:{content:'Get approvals\n\nAllows to obtain the list of requests for approvals received by the node.\nIt can also be used, by means of the "status" parameter, to list the requests pending approval.',type:"text/plain"},url:{path:["api","approval-requests"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Approval's status (possibilities: pending, obsolete, responded)",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Id of initial approval",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of approvals requested",type:"text/plain"},key:"quantity",value:""}],variable:[{disabled:!1,description:{content:"(Required) Approval's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},u=void 0,y={unversionedId:"api-rest/get-approval-request-data",id:"version-0.2/api-rest/get-approval-request-data",title:"Get approvals",description:"Get approvals",source:"@site/versioned_docs/version-0.2/api-rest/get-approval-request-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-approval-request-data",permalink:"/taple-docsite/docs/0.2/api-rest/get-approval-request-data",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1698048419,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"get-approval-request-data",title:"Get approvals",description:"Get approvals",sidebar_label:"Get approvals",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:'Get approvals\n\nAllows to obtain the list of requests for approvals received by the node.\nIt can also be used, by means of the "status" parameter, to list the requests pending approval.',operationId:"Get Approval Request Data",parameters:[{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}},{name:"status",in:"query",description:"Approval's status (possibilities: pending, obsolete, responded)",required:!1,schema:{type:"string",nullable:!0}},{name:"from",in:"query",description:"Id of initial approval",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of approvals requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Approvals Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["id","request","state"],properties:{id:{type:"string",description:"Approval request identifier"},reponse:{allOf:[{type:"object",properties:{ApprovalResponseBody:{type:"object",required:["appr_req_hash","approved"],properties:{appr_req_hash:{type:"string",description:"Hash of the request for approval"},approved:{type:"boolean",description:"Value specifying if it has been approved"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}}],nullable:!0},request:{type:"object",properties:{ApprovalRequestResponse:{type:"object",required:["event_request","sn","gov_version","patch","state_hash","hash_prev_event"],properties:{event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"Governance version",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},state:{type:"string",enum:["Pending","RespondedAccepted","RespondedRejected","Obsolete"]}}}},example:[{id:"J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",reponse:null,request:{event_request:{Fact:{payload:{Patch:{data:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}]}},subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864358,value:"SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"}},gov_version:0,hash_prev_event:"JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",patch:[{op:"add",path:"/members/0",value:{id:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",name:"WPO"}}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:168864358,value:"SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"},sn:1,state_hash:"JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"},state:"Pending"}]}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/api/approval-requests",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get approvals",description:{content:'Get approvals\n\nAllows to obtain the list of requests for approvals received by the node.\nIt can also be used, by means of the "status" parameter, to list the requests pending approval.',type:"text/plain"},url:{path:["api","approval-requests"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Approval's status (possibilities: pending, obsolete, responded)",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"Id of initial approval",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of approvals requested",type:"text/plain"},key:"quantity",value:""}],variable:[{disabled:!1,description:{content:"(Required) Approval's unique id",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Approvals",permalink:"/taple-docsite/docs/0.2/api-rest/approvals"},next:{title:"Get approvals",permalink:"/taple-docsite/docs/0.2/api-rest/get-approval-request-data"}},h={},g=[{value:"Get approvals",id:"get-approvals",level:2}],v={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-approvals"},"Get approvals"),(0,i.kt)("p",null,"Get approvals"),(0,i.kt)("p",null,'Allows to obtain the list of requests for approvals received by the node.\nIt can also be used, by means of the "status" parameter, to list the requests pending approval.'),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Approval's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"Approval's status (possibilities: pending, obsolete, responded)",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"from",in:"query",description:"Id of initial approval",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"quantity",in:"query",description:"Quantity of approvals requested",required:!1,schema:{type:"integer",nullable:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Approvals Data successfully retrieved")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Approval request identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"reponse"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"ApprovalResponseBody"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"appr_req_hash",required:!1,schemaDescription:"Hash of the request for approval",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"approved",required:!1,schemaDescription:"Value specifying if it has been approved",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"SignatureBody"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"ApprovalRequestResponse"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"event_request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"EventRequestBody"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Create"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace to which the subject belongs",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Subject schema json identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Fact"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"payload",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)(d.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Transfer"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the new owner",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)(d.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"EOL"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"SignatureBody"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(l.Z,{collapsible:!1,name:"gov_version",required:!1,schemaDescription:"Governance version",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"hash_prev_event",required:!1,schemaDescription:"Previous event hash",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"patch",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"state_hash",required:!1,schemaDescription:"Hash of the state",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"SignatureBody"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(l.Z,{collapsible:!1,name:"state",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Pending`, `RespondedAccepted`, `RespondedRejected`, `Obsolete`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n    "id": "string",\n    "reponse": {\n      "ApprovalResponseBody": {\n        "appr_req_hash": "string",\n        "approved": true\n      },\n      "SignatureBody": {\n        "signer": "string",\n        "timestamp": 0,\n        "value": "string"\n      }\n    },\n    "request": {\n      "ApprovalRequestResponse": {\n        "event_request": {\n          "EventRequestBody": {\n            "Create": {\n              "governance_id": "string",\n              "name": "string",\n              "namespace": "string",\n              "public_key": "string",\n              "schema_id": "string"\n            }\n          },\n          "SignatureBody": {\n            "signer": "string",\n            "timestamp": 0,\n            "value": "string"\n          }\n        },\n        "gov_version": 0,\n        "hash_prev_event": "string",\n        "sn": 0,\n        "state_hash": "string"\n      },\n      "SignatureBody": {\n        "signer": "string",\n        "timestamp": 0,\n        "value": "string"\n      }\n    },\n    "state": "Pending"\n  }\n]',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n    "id": "J5dfpH-ahrqSo-od4jyZkubyO-XWFJSQ9maK73jKI4Ao",\n    "reponse": null,\n    "request": {\n      "event_request": {\n        "Fact": {\n          "payload": {\n            "Patch": {\n              "data": [\n                {\n                  "op": "add",\n                  "path": "/members/0",\n                  "value": {\n                    "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n                    "name": "WPO"\n                  }\n                }\n              ]\n            }\n          },\n          "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"\n        },\n        "signature": {\n          "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n          "timestamp": 168864358,\n          "value": "SE4yS1Q1Smhm3Az3r6WNFKAGd2Us69vyUA3j5q_riE6MICh_Ub2fSLxNS3Nn-g_CpppvABq6s_c8dF5kbmUir4Ag"\n        }\n      },\n      "gov_version": 0,\n      "hash_prev_event": "JLic8SLrT7tJxA9B3aLaaKaIEuV7Wouo2ogHCid6O4g8",\n      "patch": [\n        {\n          "op": "add",\n          "path": "/members/0",\n          "value": {\n            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n            "name": "WPO"\n          }\n        }\n      ],\n      "signature": {\n        "signer": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n        "timestamp": 168864358,\n        "value": "SEFyfXR6kE04gGdCtXZN-So6nNJAAe1qwnTkl0UuoFpCEEuQhwkZND77o1Y9OVuVus8mgGtyAdTi-A7_0MkDKgBw"\n      },\n      "sn": 1,\n      "state_hash": "JbDVCZxkDkZ5gLCc7Ge5X75pHHf8dA7_s8UynsnzG5o8"\n    },\n    "state": "Pending"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);