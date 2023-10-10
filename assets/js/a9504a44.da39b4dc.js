"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2646],{27327:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var n=t(87462),i=(t(67294),t(3905)),s=t(26389),r=t(94891),l=(t(74933),t(47507)),o=t(24310),p=t(63303),c=(t(75035),t(85162));const d={id:"get-all-governances-data",title:"Get all Governances data",description:"",sidebar_label:"Get all Governances data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Governances"],description:"",operationId:"Get all Governances data",responses:{200:{description:"Subjets Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]}},example:[{governance_id:"",namespace:"",owner:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",properties:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}},{"description":"Sede en Inglaterra","id":"Compa\xf1\xeda2","key":"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}',public_key:"E2tlKVr6wA2GZKoSZi_dwIuz2TVUTCCDpOOwiE2SJbWc",schema_id:"",sn:0,subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"}]}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/governances",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get all Governances data",description:{content:"",type:"text/plain"},url:{path:["api","governances"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},m=void 0,u={unversionedId:"api-rest/get-all-governances-data",id:"version-0.1/api-rest/get-all-governances-data",title:"Get all Governances data",description:"",source:"@site/versioned_docs/version-0.1/api-rest/get-all-governances-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-all-governances-data",permalink:"/taple-docsite/docs/0.1/api-rest/get-all-governances-data",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1696909591,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{id:"get-all-governances-data",title:"Get all Governances data",description:"",sidebar_label:"Get all Governances data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Governances"],description:"",operationId:"Get all Governances data",responses:{200:{description:"Subjets Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{oneOf:[{type:"object",properties:{Json:{type:"string"}}},{type:"object",properties:{JsonPatch:{type:"string"}}}]}},example:[{governance_id:"",namespace:"",owner:"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",properties:'{"members":[{"description":"Sede en Espa\xf1a","id":"Compa\xf1\xeda1","key":"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w","tags":{}},{"description":"Sede en Inglaterra","id":"Compa\xf1\xeda2","key":"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU","tags":{}}],"schemas":[{"content":{"additionalProperties":false,"properties":{"localizacion":{"type":"string"},"temperatura":{"type":"integer"}},"required":["temperatura","localizacion"],"type":"object"},"id":"Prueba","tags":{}}]}',public_key:"E2tlKVr6wA2GZKoSZi_dwIuz2TVUTCCDpOOwiE2SJbWc",schema_id:"",sn:0,subject_id:"J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"}]}}},400:{description:"Bad Request"},401:{description:"Unauthorized"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"get",path:"/api/governances",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"},postman:{name:"Get all Governances data",description:{content:"",type:"text/plain"},url:{path:["api","governances"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Governances",permalink:"/taple-docsite/docs/0.1/api-rest/governances"},next:{title:"Get Governance Data",permalink:"/taple-docsite/docs/0.1/api-rest/get-governance-data"}},y={},v=[{value:"Get all Governances data",id:"get-all-governances-data",level:2}],g={toc:v};function k(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-all-governances-data"},"Get all Governances data"),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Subjets Data successfully retrieved")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"Json",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(o.Z,{collapsible:!1,name:"JsonPatch",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'[\n  {\n    "Json": "string"\n  },\n  {\n    "JsonPatch": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'[\n  {\n    "governance_id": "",\n    "namespace": "",\n    "owner": "EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w",\n    "properties": "{\\"members\\":[{\\"description\\":\\"Sede en Espa\xf1a\\",\\"id\\":\\"Compa\xf1\xeda1\\",\\"key\\":\\"EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w\\",\\"tags\\":{}},{\\"description\\":\\"Sede en Inglaterra\\",\\"id\\":\\"Compa\xf1\xeda2\\",\\"key\\":\\"ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU\\",\\"tags\\":{}}],\\"schemas\\":[{\\"content\\":{\\"additionalProperties\\":false,\\"properties\\":{\\"localizacion\\":{\\"type\\":\\"string\\"},\\"temperatura\\":{\\"type\\":\\"integer\\"}},\\"required\\":[\\"temperatura\\",\\"localizacion\\"],\\"type\\":\\"object\\"},\\"id\\":\\"Prueba\\",\\"tags\\":{}}]}",\n    "public_key": "E2tlKVr6wA2GZKoSZi_dwIuz2TVUTCCDpOOwiE2SJbWc",\n    "schema_id": "",\n    "sn": 0,\n    "subject_id": "J7BgD3dqZ8vO4WEH7-rpWIH-IhMqaSDnuJ3Jb8K6KvL0"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}k.isMDXComponent=!0}}]);