"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1457],{64554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),n=a(94891),p=(a(74933),a(47507)),o=a(24310),l=a(63303),m=(a(75035),a(85162));const d={id:"create-a-new-event-request",title:"Create a new Event Request",description:"",sidebar_label:"Create a new Event Request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"",operationId:"Create a new Event Request",requestBody:{description:"Event Request type and payload with the associated signature",content:{"application/json":{schema:{type:"object",required:["request"],properties:{request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"object"}}},{type:"object",properties:{JsonPatch:{type:"object"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"object"}}},{type:"object",properties:{JsonPatch:{type:"object"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"Signature of a external event request",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}}}},required:!0},responses:{202:{description:"Event Request Created",content:{"application/json":{schema:{type:"object",required:["request","request_id","timestamp"],properties:{request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},request_id:{type:"string"},sn:{type:"integer",format:"int64"},subject_id:{type:"string"},timestamp:{type:"integer",format:"int64"}}},example:{request:{Create:{governance_id:"",namespace:"",payload:{Json:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}},{"description":"Sede en Inglaterra","id":"Compa\xf1\xeda2","key":"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}'},schema_id:""}},request_id:"JpxalqMTQcDcLG3dwb8uvcrstJo6pmFEzUwhzi0nGPOA",sn:0,subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",timestamp:1671705355}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"post",path:"/api/requests",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{request:{Create:{governance_id:"string",namespace:"string",payload:{Json:{}},schema_id:"string"}},signature:{content:{event_content_hash:"string",signer:"string",timestamp:0},signature:"string"},timestamp:0},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Create a new Event Request",description:{content:"",type:"text/plain"},url:{path:["api","requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/client"},c=void 0,u={unversionedId:"api-rest/create-a-new-event-request",id:"version-0.1/api-rest/create-a-new-event-request",title:"Create a new Event Request",description:"",source:"@site/versioned_docs/version-0.1/api-rest/create-a-new-event-request.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/create-a-new-event-request",permalink:"/docs/0.1/api-rest/create-a-new-event-request",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"create-a-new-event-request",title:"Create a new Event Request",description:"",sidebar_label:"Create a new Event Request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Requests"],description:"",operationId:"Create a new Event Request",requestBody:{description:"Event Request type and payload with the associated signature",content:{"application/json":{schema:{type:"object",required:["request"],properties:{request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"object"}}},{type:"object",properties:{JsonPatch:{type:"object"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"object"}}},{type:"object",properties:{JsonPatch:{type:"object"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"Signature of a external event request",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}}}},required:!0},responses:{202:{description:"Event Request Created",content:{"application/json":{schema:{type:"object",required:["request","request_id","timestamp"],properties:{request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},request_id:{type:"string"},sn:{type:"integer",format:"int64"},subject_id:{type:"string"},timestamp:{type:"integer",format:"int64"}}},example:{request:{Create:{governance_id:"",namespace:"",payload:{Json:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}},{"description":"Sede en Inglaterra","id":"Compa\xf1\xeda2","key":"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}'},schema_id:""}},request_id:"JpxalqMTQcDcLG3dwb8uvcrstJo6pmFEzUwhzi0nGPOA",sn:0,subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",timestamp:1671705355}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"post",path:"/api/requests",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{request:{Create:{governance_id:"string",namespace:"string",payload:{Json:{}},schema_id:"string"}},signature:{content:{event_content_hash:"string",signer:"string",timestamp:0},signature:"string"},timestamp:0},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Create a new Event Request",description:{content:"",type:"text/plain"},url:{path:["api","requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Requests",permalink:"/docs/0.1/api-rest/requests"},next:{title:"Approvals",permalink:"/docs/0.1/api-rest/approvals"}},y={},v=[{value:"Create a new Event Request",id:"create-a-new-event-request",level:2}],g={toc:v};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-a-new-event-request"},"Create a new Event Request"),(0,i.kt)(n.Z,{mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Event Request type and payload with the associated signature"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Create"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"governance_id",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"namespace",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"schema_id",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"State"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"signature"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Signature of a external event request")),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"event_content_hash",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"signer",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"signature",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"202",value:"202",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Event Request Created")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"request"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Create"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"State"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"payload"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,i.kt)(o.Z,{collapsible:!1,name:"request_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"sn",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "request": {\n    "Create": {\n      "governance_id": "string",\n      "namespace": "string",\n      "payload": {\n        "Json": "string"\n      },\n      "schema_id": "string"\n    }\n  },\n  "request_id": "string",\n  "sn": 0,\n  "subject_id": "string",\n  "timestamp": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "request": {\n    "Create": {\n      "governance_id": "",\n      "namespace": "",\n      "payload": {\n        "Json": "{\\"members\\":[{\\"description\\":\\"Sede en Espa\xf1a\\",\\"id\\":\\"Compa\xf1\xeda1\\",\\"key\\":\\"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w\\",\\"tags\\":{}},{\\"description\\":\\"Sede en Inglaterra\\",\\"id\\":\\"Compa\xf1\xeda2\\",\\"key\\":\\"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU\\",\\"tags\\":{}}],\\"schemas\\":[{\\"content\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"localizacion\\":{\\"type\\":\\"string\\"},\\"temperatura\\":{\\"type\\":\\"integer\\"}},\\"required\\":[\\"temperatura\\",\\"localizacion\\"],\\"type\\":\\"object\\"},\\"id\\":\\"Prueba\\",\\"tags\\":{}}]}"\n      },\n      "schema_id": ""\n    }\n  },\n  "request_id": "JpxalqMTQcDcLG3dwb8uvcrstJo6pmFEzUwhzi0nGPOA",\n  "sn": 0,\n  "subject_id": "J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0",\n  "timestamp": 1671705355\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null)),(0,i.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}k.isMDXComponent=!0}}]);