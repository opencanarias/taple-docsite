"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9222],{15913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),p=a(94891),r=a(74933),l=a(47507),o=a(24310),d=a(63303),c=(a(75035),a(85162));const m={id:"get-event-properties",title:"Get Event Properties",description:"",sidebar_label:"Get Event Properties",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Events"],description:"",operationId:"Get Event Properties",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},example:{State:{payload:{Json:'{"localizacion":"Argentina","temperatura":-3}'},subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/subjects/{id}/events/{sn}/properties",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get Event Properties",description:{content:"",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn","properties"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},y=void 0,u={unversionedId:"api-rest/get-event-properties",id:"version-0.1/api-rest/get-event-properties",title:"Get Event Properties",description:"",source:"@site/versioned_docs/version-0.1/api-rest/get-event-properties.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-event-properties",permalink:"/taple-docsite/docs/0.1/api-rest/get-event-properties",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"get-event-properties",title:"Get Event Properties",description:"",sidebar_label:"Get Event Properties",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Events"],description:"",operationId:"Get Event Properties",parameters:[{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"Subjects Data successfully retrieved",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},example:{State:{payload:{Json:'{"localizacion":"Argentina","temperatura":-3}'},subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/subjects/{id}/events/{sn}/properties",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get Event Properties",description:{content:"",type:"text/plain"},url:{path:["api","subjects",":id","events",":sn","properties"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Subject's unique id",type:"text/plain"},type:"any",value:"",key:"id"},{disabled:!1,description:{content:"(Required) Event sn",type:"text/plain"},type:"any",value:"",key:"sn"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Get the Event data of indicated Events",permalink:"/taple-docsite/docs/0.1/api-rest/get-the-event-data-of-indicated-events"},next:{title:"Requests",permalink:"/taple-docsite/docs/0.1/api-rest/requests"}},v={},k=[{value:"Get Event Properties",id:"get-event-properties",level:2}],b={toc:k};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-event-properties"},"Get Event Properties"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Subject's unique id",required:!0,deprecated:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"sn",in:"path",description:"Event sn",required:!0,deprecated:!1,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Subjects Data successfully retrieved")),(0,s.kt)("div",null,(0,s.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Create"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payload"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(o.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"State"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payload"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "Create": {\n    "governance_id": "string",\n    "namespace": "string",\n    "payload": {\n      "Json": "string"\n    },\n    "schema_id": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "State": {\n    "payload": {\n      "Json": "{\\"localizacion\\":\\"Argentina\\",\\"temperatura\\":-3}"\n    },\n    "subject_id": "JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}h.isMDXComponent=!0}}]);