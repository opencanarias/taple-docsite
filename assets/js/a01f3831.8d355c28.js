"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[774],{33548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>v,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),p=a(74933),o=a(47507),m=a(24310),c=a(63303),l=(a(75035),a(85162));const u={id:"get-event",title:"Get an event from a subject",description:"Get an event from a subject",sidebar_label:"Get an event from a subject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get an event from a subject\n\nAllows to obtain a specific event from a subject",operationId:"getEvent",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,schema:{type:"integer",format:"int64",minimum:0}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",properties:{EventContentResponse:{type:"object",required:["subject_id","event_request","gov_version","sn","patch","state_hash","eval_success","appr_required","approved","hash_prev_event","evaluators","approvers"],properties:{appr_required:{type:"boolean",description:"Value specifying if approval is required"},approved:{type:"boolean",description:"Value specifying if it has been approved"},approvers:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Signatures of the approvers"},eval_success:{type:"boolean",description:"Value specifying if the evaluation process has gone well"},evaluators:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Signatures of the evaluators"},event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"The version of the governance contract.",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"},subject_id:{type:"string",description:"Subject identifier"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},example:{appr_required:!1,approved:!0,approvers:[],eval_success:!0,evaluators:[],event_request:{Create:{governance_id:"",name:"Wine_Producers_Organization",namespace:"",public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864303,value:"SE-tHjb3eWcMvVIYuSBPn0EW4Q5mQs2uswS5HLl0GB0iYVEc5jcOWD78ZHRL8VlO0mtxv9KWt2EI9R9Id2Z5o8CA"}},gov_version:0,hash_prev_event:"",patch:[{op:"add",path:"/members",value:[]},{op:"add",path:"/policies",value:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}]},{op:"add",path:"/roles",value:[]},{op:"add",path:"/schemas",value:[]}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:168864303,value:"SEnTz4Nw-rX6y00yNF01o__AwyWxyG1s669AetXCfrnxCTSyf67xv8AsnccTOe4fFm-2ZIeRjubdf5FTQHZAd7BQ"},sn:0,state_hash:"JVKr8BAEs1DhpNjMZf4525IYps2Gu6m7ZBmuaNBoM_Qk",subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}/events/{sn}",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get an event from a subject",description:{content:"Get an event from a subject\n\nAllows to obtain a specific event from a subject",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},d=void 0,v={unversionedId:"api-rest/get-event",id:"api-rest/get-event",title:"Get an event from a subject",description:"Get an event from a subject",source:"@site/docs/api-rest/get-event.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-event",permalink:"/docs/next/api-rest/get-event",draft:!1,tags:[],version:"current",lastUpdatedAt:1698048071,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"get-event",title:"Get an event from a subject",description:"Get an event from a subject",sidebar_label:"Get an event from a subject",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Subjects"],description:"Get an event from a subject\n\nAllows to obtain a specific event from a subject",operationId:"getEvent",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,schema:{type:"integer",format:"int64",minimum:0}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",properties:{EventContentResponse:{type:"object",required:["subject_id","event_request","gov_version","sn","patch","state_hash","eval_success","appr_required","approved","hash_prev_event","evaluators","approvers"],properties:{appr_required:{type:"boolean",description:"Value specifying if approval is required"},approved:{type:"boolean",description:"Value specifying if it has been approved"},approvers:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Signatures of the approvers"},eval_success:{type:"boolean",description:"Value specifying if the evaluation process has gone well"},evaluators:{type:"array",items:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}},description:"Signatures of the evaluators"},event_request:{type:"object",properties:{EventRequestBody:{oneOf:[{type:"object",required:["Create"],properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","name"],properties:{governance_id:{type:"string",description:"Governance identifier"},name:{type:"string",description:"Name of subject"},namespace:{type:"string",description:"Namespace to which the subject belongs"},public_key:{type:"string",description:"Public key of the subject",nullable:!0},schema_id:{type:"string",description:"Subject schema json identifier"}}}}},{type:"object",required:["Fact"],properties:{Fact:{type:"object",required:["subject_id","payload"],properties:{payload:{description:"Changes to be applied to the subject"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["Transfer"],properties:{Transfer:{type:"object",required:["subject_id","public_key"],properties:{public_key:{type:"string",description:"Public key of the new owner"},subject_id:{type:"string",description:"Subject identifier"}}}}},{type:"object",required:["EOL"],properties:{EOL:{type:"object",required:["subject_id"],properties:{subject_id:{type:"string",description:"Subject identifier"}}}}}]},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},gov_version:{type:"integer",format:"int64",description:"The version of the governance contract.",minimum:0},hash_prev_event:{type:"string",description:"Previous event hash"},patch:{description:"Changes to be applied to the subject"},sn:{type:"integer",format:"int64",description:"Current sequence number of the subject",minimum:0},state_hash:{type:"string",description:"Hash of the state"},subject_id:{type:"string",description:"Subject identifier"}}},SignatureBody:{type:"object",required:["signer","timestamp","value"],properties:{signer:{type:"string",description:"Signature of the issuer"},timestamp:{type:"integer",format:"int64",description:"Timestamp at which the signature was made",minimum:0},value:{type:"string",description:"Signature value"}}}}},example:{appr_required:!1,approved:!0,approvers:[],eval_success:!0,evaluators:[],event_request:{Create:{governance_id:"",name:"Wine_Producers_Organization",namespace:"",public_key:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",schema_id:"governance"},signature:{signer:"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",timestamp:168864303,value:"SE-tHjb3eWcMvVIYuSBPn0EW4Q5mQs2uswS5HLl0GB0iYVEc5jcOWD78ZHRL8VlO0mtxv9KWt2EI9R9Id2Z5o8CA"}},gov_version:0,hash_prev_event:"",patch:[{op:"add",path:"/members",value:[]},{op:"add",path:"/policies",value:[{approve:{quorum:"MAJORITY"},evaluate:{quorum:"MAJORITY"},id:"governance",validate:{quorum:"MAJORITY"}}]},{op:"add",path:"/roles",value:[]},{op:"add",path:"/schemas",value:[]}],signature:{signer:"E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",timestamp:168864303,value:"SEnTz4Nw-rX6y00yNF01o__AwyWxyG1s669AetXCfrnxCTSyf67xv8AsnccTOe4fFm-2ZIeRjubdf5FTQHZAd7BQ"},sn:0,state_hash:"JVKr8BAEs1DhpNjMZf4525IYps2Gu6m7ZBmuaNBoM_Qk",subject_id:"JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"}}}},400:{description:"Bad Request"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},method:"get",path:"/api/subjects/{id}/events/{sn}",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Get an event from a subject",description:{content:"Get an event from a subject\n\nAllows to obtain a specific event from a subject",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Get events of a subject",permalink:"/docs/next/api-rest/get-events"},next:{title:"Get validation proof",permalink:"/docs/next/api-rest/get-validation"}},h={},g=[{value:"Get an event from a subject",id:"get-an-event-from-a-subject",level:2}],y={toc:g};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-an-event-from-a-subject"},"Get an event from a subject"),(0,s.kt)("p",null,"Get an event from a subject"),(0,s.kt)("p",null,"Allows to obtain a specific event from a subject"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"sn",in:"path",description:"Event sn",required:!0,schema:{type:"integer",format:"int64",minimum:0}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Subjects Data successfully retrieved")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"EventContentResponse"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"appr_required",required:!1,schemaDescription:"Value specifying if approval is required",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"approved",required:!1,schemaDescription:"Value specifying if it has been approved",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"approvers"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Signatures of the approvers")),(0,s.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"eval_success",required:!1,schemaDescription:"Value specifying if the evaluation process has gone well",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"evaluators"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Signatures of the evaluators")),(0,s.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"event_request"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"EventRequestBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Create"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:"Governance identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:"Namespace to which the subject belongs",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the subject",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:"Subject schema json identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(l.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Fact"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"payload",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(l.Z,{label:"MOD3",value:"2-item-properties",mdxType:"TabItem"},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Transfer"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"public_key",required:!1,schemaDescription:"Public key of the new owner",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(l.Z,{label:"MOD4",value:"3-item-properties",mdxType:"TabItem"},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"EOL"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"SignatureBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{collapsible:!1,name:"gov_version",required:!1,schemaDescription:"The version of the governance contract.",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"hash_prev_event",required:!1,schemaDescription:"Previous event hash",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"patch",required:!1,schemaDescription:"Changes to be applied to the subject",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:"Current sequence number of the subject",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"state_hash",required:!1,schemaDescription:"Hash of the state",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"SignatureBody"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:"Signature of the issuer",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:"Timestamp at which the signature was made",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"Signature value",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "EventContentResponse": {\n    "appr_required": true,\n    "approved": true,\n    "approvers": [\n      {\n        "signer": "string",\n        "timestamp": 0,\n        "value": "string"\n      }\n    ],\n    "eval_success": true,\n    "evaluators": [\n      {\n        "signer": "string",\n        "timestamp": 0,\n        "value": "string"\n      }\n    ],\n    "event_request": {\n      "EventRequestBody": {\n        "Create": {\n          "governance_id": "string",\n          "name": "string",\n          "namespace": "string",\n          "public_key": "string",\n          "schema_id": "string"\n        }\n      },\n      "SignatureBody": {\n        "signer": "string",\n        "timestamp": 0,\n        "value": "string"\n      }\n    },\n    "gov_version": 0,\n    "hash_prev_event": "string",\n    "sn": 0,\n    "state_hash": "string",\n    "subject_id": "string"\n  },\n  "SignatureBody": {\n    "signer": "string",\n    "timestamp": 0,\n    "value": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "appr_required": false,\n  "approved": true,\n  "approvers": [],\n  "eval_success": true,\n  "evaluators": [],\n  "event_request": {\n    "Create": {\n      "governance_id": "",\n      "name": "Wine_Producers_Organization",\n      "namespace": "",\n      "public_key": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n      "schema_id": "governance"\n    },\n    "signature": {\n      "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",\n      "timestamp": 168864303,\n      "value": "SE-tHjb3eWcMvVIYuSBPn0EW4Q5mQs2uswS5HLl0GB0iYVEc5jcOWD78ZHRL8VlO0mtxv9KWt2EI9R9Id2Z5o8CA"\n    }\n  },\n  "gov_version": 0,\n  "hash_prev_event": "",\n  "patch": [\n    {\n      "op": "add",\n      "path": "/members",\n      "value": []\n    },\n    {\n      "op": "add",\n      "path": "/policies",\n      "value": [\n        {\n          "approve": {\n            "quorum": "MAJORITY"\n          },\n          "evaluate": {\n            "quorum": "MAJORITY"\n          },\n          "id": "governance",\n          "validate": {\n            "quorum": "MAJORITY"\n          }\n        }\n      ]\n    },\n    {\n      "op": "add",\n      "path": "/roles",\n      "value": []\n    },\n    {\n      "op": "add",\n      "path": "/schemas",\n      "value": []\n    }\n  ],\n  "signature": {\n    "signer": "E0gaiDcPRVmYLUGbseHmBk2_2H-FAlSgaO6ZMOXhh4Gs",\n    "timestamp": 168864303,\n    "value": "SEnTz4Nw-rX6y00yNF01o__AwyWxyG1s669AetXCfrnxCTSyf67xv8AsnccTOe4fFm-2ZIeRjubdf5FTQHZAd7BQ"\n  },\n  "sn": 0,\n  "state_hash": "JVKr8BAEs1DhpNjMZf4525IYps2Gu6m7ZBmuaNBoM_Qk",\n  "subject_id": "JoifaSpfenD2bEPeBLvUTWh30brm4tKcvdW8exQnkGoQ"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);