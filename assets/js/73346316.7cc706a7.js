"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9257],{75437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>h,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),r=a(94891),o=a(74933),p=a(47507),m=a(24310),d=a(63303),l=(a(75035),a(85162));const c={id:"get-the-event-data-of-indicated-events",title:"Get the Event data of indicated Events",description:"",sidebar_label:"Get the Event data of indicated Events",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Events"],description:"",operationId:"Get the Event data of indicated Events",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",description:"Event associated to a subject.",required:["event_content","signature"],properties:{event_content:{type:"object",description:"Content of a TAPLE event",required:["subject_id","event_request","sn","previous_hash","state_hash","metadata","approved"],properties:{approved:{type:"boolean"},event_request:{type:"object",description:"Request that originated the event. It contains basically\nthe proposed change and the votes obtained related to it.",required:["request","timestamp","signature","approvals"],properties:{approvals:{type:"array",items:{type:"object",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_request_hash","approval_type","expected_sn","timestamp"],properties:{approval_type:{type:"string",enum:["Accept","Reject"]},event_request_hash:{type:"string"},expected_sn:{type:"integer",format:"int64"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}},request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}},metadata:{type:"object",description:"Metadata of a TAPLE Event",required:["namespace","governance_id","governance_version","schema_id","owner"],properties:{governance_id:{type:"string"},governance_version:{type:"integer",format:"int64"},namespace:{type:"string"},owner:{type:"string"},schema_id:{type:"string"}}},previous_hash:{type:"string"},sn:{type:"integer",format:"int64"},state_hash:{type:"string"},subject_id:{type:"string"}}},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}}},example:{event_content:{approved:!0,event_request:{approvals:[],request:{State:{payload:{Json:'{"localizacion":"Argentina","temperatura":-3}'},subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}},signature:{content:{event_content_hash:"JBmfwxOtP2gXFzyTQX0NzVw8ByiHjxcyBgaBamYoOhcA",signer:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",timestamp:1671706794},signature:"SEuYCV5T0G4Vpps859QQMzimXw8NcYailkXwh2oKtsVX82iJQzbspKR7nLllcHiKfuWRkzCWbFpQzxPBWdsuZgBA"},timestamp:1671706794},metadata:{governance_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",governance_version:0,namespace:"namespace1",owner:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",schema_id:"Prueba"},previous_hash:"JnMRtYtb2DD2cueHe4oAVMJUoqtkexwZa_n6WWFmH8eA",sn:1,state_hash:"JMqLbPz7VY1pjuj9-n0qT0UuOGH_TpQVRaVEOHSaE_5Y",subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"},signature:{content:{event_content_hash:"JYkgipgpilkVFVV_hJ0Dxvr2eHmXU6niKTmKSjMVYEZY",signer:"ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw",timestamp:1671706794},signature:"SEDcHW5nM7HPsQJyHQkAVaV5NkTuwT2fJL_T9r0HmqbgT3Wt7AMTFpjJNunlCSa-dEosItNu5P9k05vAE9064TBg"}}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/subjects/{id}/events/{sn}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get the Event data of indicated Events",description:{content:"",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},u=void 0,h={unversionedId:"api-rest/get-the-event-data-of-indicated-events",id:"version-0.1/api-rest/get-the-event-data-of-indicated-events",title:"Get the Event data of indicated Events",description:"",source:"@site/versioned_docs/version-0.1/api-rest/get-the-event-data-of-indicated-events.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-the-event-data-of-indicated-events",permalink:"/docs/0.1/api-rest/get-the-event-data-of-indicated-events",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{id:"get-the-event-data-of-indicated-events",title:"Get the Event data of indicated Events",description:"",sidebar_label:"Get the Event data of indicated Events",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Events"],description:"",operationId:"Get the Event data of indicated Events",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{type:"object",description:"Event associated to a subject.",required:["event_content","signature"],properties:{event_content:{type:"object",description:"Content of a TAPLE event",required:["subject_id","event_request","sn","previous_hash","state_hash","metadata","approved"],properties:{approved:{type:"boolean"},event_request:{type:"object",description:"Request that originated the event. It contains basically\nthe proposed change and the votes obtained related to it.",required:["request","timestamp","signature","approvals"],properties:{approvals:{type:"array",items:{type:"object",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_request_hash","approval_type","expected_sn","timestamp"],properties:{approval_type:{type:"string",enum:["Accept","Reject"]},event_request_hash:{type:"string"},expected_sn:{type:"integer",format:"int64"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}},request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}},metadata:{type:"object",description:"Metadata of a TAPLE Event",required:["namespace","governance_id","governance_version","schema_id","owner"],properties:{governance_id:{type:"string"},governance_version:{type:"integer",format:"int64"},namespace:{type:"string"},owner:{type:"string"},schema_id:{type:"string"}}},previous_hash:{type:"string"},sn:{type:"integer",format:"int64"},state_hash:{type:"string"},subject_id:{type:"string"}}},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}}},example:{event_content:{approved:!0,event_request:{approvals:[],request:{State:{payload:{Json:'{"localizacion":"Argentina","temperatura":-3}'},subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}},signature:{content:{event_content_hash:"JBmfwxOtP2gXFzyTQX0NzVw8ByiHjxcyBgaBamYoOhcA",signer:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",timestamp:1671706794},signature:"SEuYCV5T0G4Vpps859QQMzimXw8NcYailkXwh2oKtsVX82iJQzbspKR7nLllcHiKfuWRkzCWbFpQzxPBWdsuZgBA"},timestamp:1671706794},metadata:{governance_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",governance_version:0,namespace:"namespace1",owner:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",schema_id:"Prueba"},previous_hash:"JnMRtYtb2DD2cueHe4oAVMJUoqtkexwZa_n6WWFmH8eA",sn:1,state_hash:"JMqLbPz7VY1pjuj9-n0qT0UuOGH_TpQVRaVEOHSaE_5Y",subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"},signature:{content:{event_content_hash:"JYkgipgpilkVFVV_hJ0Dxvr2eHmXU6niKTmKSjMVYEZY",signer:"ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw",timestamp:1671706794},signature:"SEDcHW5nM7HPsQJyHQkAVaV5NkTuwT2fJL_T9r0HmqbgT3Wt7AMTFpjJNunlCSa-dEosItNu5P9k05vAE9064TBg"}}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/subjects/{id}/events/{sn}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get the Event data of indicated Events",description:{content:"",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Get all Events from indicated Subject",permalink:"/docs/0.1/api-rest/get-all-events-from-indicated-subject"},next:{title:"Get Event Properties",permalink:"/docs/0.1/api-rest/get-event-properties"}},y={},g=[{value:"Get the Event data of indicated Events",id:"get-the-event-data-of-indicated-events",level:2}],v={toc:g};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-the-event-data-of-indicated-events"},"Get the Event data of indicated Events"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Subjects Data successfully retrieved")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"event_content"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Content of a TAPLE event")),(0,n.kt)(m.Z,{collapsible:!1,name:"approved",required:!1,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"event_request"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Request that originated the event. It contains basically\nthe proposed change and the votes obtained related to it.")),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"approvals"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"approval_type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Accept`, `Reject`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"event_request_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"expected_sn",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"request"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Create"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"payload"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,n.kt)(l.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,n.kt)(m.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,n.kt)(l.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"State"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"payload"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("span",{className:"badge badge--info"},"oneOf"),(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(l.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,n.kt)(l.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,n.kt)(m.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,n.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"signature"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.")),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Defines the data used to generate the signature, as well as the signer's identifier.")),(0,n.kt)(m.Z,{collapsible:!1,name:"event_content_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"metadata"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Metadata of a TAPLE Event")),(0,n.kt)(m.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"governance_version",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"owner",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"previous_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"state_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"signature"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.")),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"content"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Defines the data used to generate the signature, as well as the signer's identifier.")),(0,n.kt)(m.Z,{collapsible:!1,name:"event_content_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "event_content": {\n    "approved": true,\n    "event_request": {\n      "approvals": [\n        {\n          "content": {\n            "approval_type": "Accept",\n            "event_request_hash": "string",\n            "expected_sn": 0,\n            "signer": "string",\n            "timestamp": 0\n          },\n          "signature": "string"\n        }\n      ],\n      "request": {\n        "Create": {\n          "governance_id": "string",\n          "namespace": "string",\n          "payload": {\n            "Json": "string"\n          },\n          "schema_id": "string"\n        }\n      },\n      "signature": {\n        "content": {\n          "event_content_hash": "string",\n          "signer": "string",\n          "timestamp": 0\n        },\n        "signature": "string"\n      },\n      "timestamp": 0\n    },\n    "metadata": {\n      "governance_id": "string",\n      "governance_version": 0,\n      "namespace": "string",\n      "owner": "string",\n      "schema_id": "string"\n    },\n    "previous_hash": "string",\n    "sn": 0,\n    "state_hash": "string",\n    "subject_id": "string"\n  },\n  "signature": {\n    "content": {\n      "event_content_hash": "string",\n      "signer": "string",\n      "timestamp": 0\n    },\n    "signature": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(p.Z,{responseExample:'{\n  "event_content": {\n    "approved": true,\n    "event_request": {\n      "approvals": [],\n      "request": {\n        "State": {\n          "payload": {\n            "Json": "{\\"localizacion\\":\\"Argentina\\",\\"temperatura\\":-3}"\n          },\n          "subject_id": "JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"\n        }\n      },\n      "signature": {\n        "content": {\n          "event_content_hash": "JBmfwxOtP2gXFzyTQX0NzVw8ByiHjxcyBgaBamYoOhcA",\n          "signer": "EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",\n          "timestamp": 1671706794\n        },\n        "signature": "SEuYCV5T0G4Vpps859QQMzimXw8NcYailkXwh2oKtsVX82iJQzbspKR7nLllcHiKfuWRkzCWbFpQzxPBWdsuZgBA"\n      },\n      "timestamp": 1671706794\n    },\n    "metadata": {\n      "governance_id": "J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",\n      "governance_version": 0,\n      "namespace": "namespace1",\n      "owner": "EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",\n      "schema_id": "Prueba"\n    },\n    "previous_hash": "JnMRtYtb2DD2cueHe4oAVMJUoqtkexwZa_n6WWFmH8eA",\n    "sn": 1,\n    "state_hash": "JMqLbPz7VY1pjuj9-n0qT0UuOGH_TpQVRaVEOHSaE_5Y",\n    "subject_id": "JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"\n  },\n  "signature": {\n    "content": {\n      "event_content_hash": "JYkgipgpilkVFVV_hJ0Dxvr2eHmXU6niKTmKSjMVYEZY",\n      "signer": "ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw",\n      "timestamp": 1671706794\n    },\n    "signature": "SEDcHW5nM7HPsQJyHQkAVaV5NkTuwT2fJL_T9r0HmqbgT3Wt7AMTFpjJNunlCSa-dEosItNu5P9k05vAE9064TBg"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad Request")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Not Found")),(0,n.kt)("div",null)),(0,n.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null)))))}k.isMDXComponent=!0}}]);