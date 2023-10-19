"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7524],{66458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),p=(a(74933),a(47507)),o=a(24310),l=a(63303),m=(a(75035),a(85162));const c={id:"get-a-specific-pending-request-for-approval",title:"Get a specific pending request for Approval",description:"",sidebar_label:"Get a specific pending request for Approval",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"",operationId:"Get a specific pending request for Approval",responses:{200:{description:"The pending request",content:{"application/json":{schema:{type:"object",description:"Request that originated the event. It contains basically\nthe proposed change and the votes obtained related to it.",required:["request","timestamp","signature","approvals"],properties:{approvals:{type:"array",items:{type:"object",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_request_hash","approval_type","expected_sn","timestamp"],properties:{approval_type:{type:"string",enum:["Accept","Reject"]},event_request_hash:{type:"string"},expected_sn:{type:"integer",format:"int64"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}},request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}},example:{approvals:[],request:{State:{payload:{Json:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}'},subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"}},signature:{content:{event_content_hash:"JhEnzFVF1a-u-rH34cix2A_OXgcfesM6HGOyk7wdrGHk",signer:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",timestamp:1671709394},signature:"SEnUJq3Y1lbmijKzrc0kuLu-FgMTCyo5PWfDrbi_80bspghCny8Yuvifsmdqq0TjfTUS7sEwmOLir1W_1zeIVyDQ"},timestamp:1671709394}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/approvals/{id}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get a specific pending request for Approval",description:{content:"",type:"text/plain"},url:{path:["api","approvals",":id"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},d=void 0,u={unversionedId:"api-rest/get-a-specific-pending-request-for-approval",id:"version-0.1/api-rest/get-a-specific-pending-request-for-approval",title:"Get a specific pending request for Approval",description:"",source:"@site/versioned_docs/version-0.1/api-rest/get-a-specific-pending-request-for-approval.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-a-specific-pending-request-for-approval",permalink:"/taple-docsite/docs/0.1/api-rest/get-a-specific-pending-request-for-approval",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"get-a-specific-pending-request-for-approval",title:"Get a specific pending request for Approval",description:"",sidebar_label:"Get a specific pending request for Approval",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"",operationId:"Get a specific pending request for Approval",responses:{200:{description:"The pending request",content:{"application/json":{schema:{type:"object",description:"Request that originated the event. It contains basically\nthe proposed change and the votes obtained related to it.",required:["request","timestamp","signature","approvals"],properties:{approvals:{type:"array",items:{type:"object",required:["content","signature"],properties:{content:{type:"object",required:["signer","event_request_hash","approval_type","expected_sn","timestamp"],properties:{approval_type:{type:"string",enum:["Accept","Reject"]},event_request_hash:{type:"string"},expected_sn:{type:"integer",format:"int64"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}}},request:{oneOf:[{type:"object",properties:{Create:{type:"object",required:["governance_id","schema_id","namespace","payload"],properties:{governance_id:{type:"string"},namespace:{type:"string"},payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},schema_id:{type:"string"}}}}},{type:"object",properties:{State:{type:"object",required:["subject_id","payload"],properties:{payload:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]},subject_id:{type:"string"}}}}}]},signature:{type:"object",description:"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.",required:["content","signature"],properties:{content:{type:"object",description:"Defines the data used to generate the signature, as well as the signer's identifier.",required:["signer","event_content_hash","timestamp"],properties:{event_content_hash:{type:"string"},signer:{type:"string"},timestamp:{type:"integer",format:"int64"}}},signature:{type:"string"}}},timestamp:{type:"integer",format:"int64"}}},example:{approvals:[],request:{State:{payload:{Json:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}'},subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"}},signature:{content:{event_content_hash:"JhEnzFVF1a-u-rH34cix2A_OXgcfesM6HGOyk7wdrGHk",signer:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",timestamp:1671709394},signature:"SEnUJq3Y1lbmijKzrc0kuLu-FgMTCyo5PWfDrbi_80bspghCny8Yuvifsmdqq0TjfTUS7sEwmOLir1W_1zeIVyDQ"},timestamp:1671709394}}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/approvals/{id}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get a specific pending request for Approval",description:{content:"",type:"text/plain"},url:{path:["api","approvals",":id"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Get all the pending requests for Approval",permalink:"/taple-docsite/docs/0.1/api-rest/get-all-the-pending-requests-for-approval"},next:{title:"Set your Aprroval for a request",permalink:"/taple-docsite/docs/0.1/api-rest/set-your-aprroval-for-a-request"}},y={},g=[{value:"Get a specific pending request for Approval",id:"get-a-specific-pending-request-for-approval",level:2}],h={toc:g};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-a-specific-pending-request-for-approval"},"Get a specific pending request for Approval"),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The pending request")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"approvals"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"approval_type",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Accept`, `Reject`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"event_request_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"expected_sn",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"request"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Create"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"governance_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payload"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(o.Z,{collapsible:!1,name:"schema_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"State"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"payload"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(o.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"signature"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The format, in addition to the signature, includes additional\ninformation, namely the signer's identifier, the signature timestamp\nand the hash of the signed contents.")),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Defines the data used to generate the signature, as well as the signer's identifier.")),(0,s.kt)(o.Z,{collapsible:!1,name:"event_content_hash",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"signer",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!1,name:"signature",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!1,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "approvals": [\n    {\n      "content": {\n        "approval_type": "Accept",\n        "event_request_hash": "string",\n        "expected_sn": 0,\n        "signer": "string",\n        "timestamp": 0\n      },\n      "signature": "string"\n    }\n  ],\n  "request": {\n    "Create": {\n      "governance_id": "string",\n      "namespace": "string",\n      "payload": {\n        "Json": "string"\n      },\n      "schema_id": "string"\n    }\n  },\n  "signature": {\n    "content": {\n      "event_content_hash": "string",\n      "signer": "string",\n      "timestamp": 0\n    },\n    "signature": "string"\n  },\n  "timestamp": 0\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "approvals": [],\n  "request": {\n    "State": {\n      "payload": {\n        "Json": "{\\"members\\":[{\\"description\\":\\"Sede en Espa\xf1a\\",\\"id\\":\\"Compa\xf1\xeda1\\",\\"key\\":\\"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w\\",\\"tags\\":{}}],\\"schemas\\":[{\\"content\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"localizacion\\":{\\"type\\":\\"string\\"},\\"temperatura\\":{\\"type\\":\\"integer\\"}},\\"required\\":[\\"temperatura\\",\\"localizacion\\"],\\"type\\":\\"object\\"},\\"id\\":\\"Prueba\\",\\"tags\\":{}}]}"\n      },\n      "subject_id": "J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"\n    }\n  },\n  "signature": {\n    "content": {\n      "event_content_hash": "JhEnzFVF1a-u-rH34cix2A_OXgcfesM6HGOyk7wdrGHk",\n      "signer": "EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",\n      "timestamp": 1671709394\n    },\n    "signature": "SEnUJq3Y1lbmijKzrc0kuLu-FgMTCyo5PWfDrbi_80bspghCny8Yuvifsmdqq0TjfTUS7sEwmOLir1W_1zeIVyDQ"\n  },\n  "timestamp": 1671709394\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Not Found")),(0,s.kt)("div",null)),(0,s.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);