"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3387],{44800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),o=a(74933),l=a(47507),d=a(24310),c=a(63303),p=(a(75035),a(85162));const u={id:"get-allowed-subject-data",title:"Get authorized subjects",description:"Get authorized subjects",sidebar_label:"Get authorized subjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Get authorized subjects\n\nAllows to obtain the list of subjects that have been pre-authorized by the node, as well as the identifiers of the nodes from which to obtain them.",operationId:"Get Allowed Subject Data",parameters:[{name:"from",in:"query",description:"Id of initial subject",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Subject Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["subject_id","providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"},subject_id:{type:"string",description:"Subject identifier"}}}},example:[{providers:[],subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}]}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/api/allowed-subjects",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get authorized subjects",description:{content:"Get authorized subjects\n\nAllows to obtain the list of subjects that have been pre-authorized by the node, as well as the identifiers of the nodes from which to obtain them.",type:"text/plain"},url:{path:["api","allowed-subjects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Id of initial subject",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of subjects requested",type:"text/plain"},key:"quantity",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},m=void 0,b={unversionedId:"api-rest/get-allowed-subject-data",id:"version-0.2/api-rest/get-allowed-subject-data",title:"Get authorized subjects",description:"Get authorized subjects",source:"@site/versioned_docs/version-0.2/api-rest/get-allowed-subject-data.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/get-allowed-subject-data",permalink:"/docs/0.2/api-rest/get-allowed-subject-data",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"get-allowed-subject-data",title:"Get authorized subjects",description:"Get authorized subjects",sidebar_label:"Get authorized subjects",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Get authorized subjects\n\nAllows to obtain the list of subjects that have been pre-authorized by the node, as well as the identifiers of the nodes from which to obtain them.",operationId:"Get Allowed Subject Data",parameters:[{name:"from",in:"query",description:"Id of initial subject",required:!1,schema:{type:"string",nullable:!0}},{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}}],responses:{200:{description:"Subject Data successfully retrieved",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["subject_id","providers"],properties:{providers:{type:"array",items:{type:"string"},description:"Providers acting on a specific subject"},subject_id:{type:"string",description:"Subject identifier"}}}},example:[{providers:[],subject_id:"JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"}]}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/api/allowed-subjects",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.2.0-dev"},postman:{name:"Get authorized subjects",description:{content:"Get authorized subjects\n\nAllows to obtain the list of subjects that have been pre-authorized by the node, as well as the identifiers of the nodes from which to obtain them.",type:"text/plain"},url:{path:["api","allowed-subjects"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Id of initial subject",type:"text/plain"},key:"from",value:""},{disabled:!1,description:{content:"Quantity of subjects requested",type:"text/plain"},key:"quantity",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Others",permalink:"/docs/0.2/api-rest/others"},next:{title:"Set subject as preauthorized",permalink:"/docs/0.2/api-rest/put-allowed-subject-data"}},h={},y=[{value:"Get authorized subjects",id:"get-authorized-subjects",level:2}],j={toc:y};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-authorized-subjects"},"Get authorized subjects"),(0,s.kt)("p",null,"Get authorized subjects"),(0,s.kt)("p",null,"Allows to obtain the list of subjects that have been pre-authorized by the node, as well as the identifiers of the nodes from which to obtain them."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"from",in:"query",description:"Id of initial subject",required:!1,schema:{type:"string",nullable:!0}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"quantity",in:"query",description:"Quantity of subjects requested",required:!1,schema:{type:"integer",nullable:!0}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Subject Data successfully retrieved")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema"),(0,s.kt)("span",{style:{opacity:"0.6"}}," array")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"providers",required:!1,schemaDescription:"Providers acting on a specific subject",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"subject_id",required:!1,schemaDescription:"Subject identifier",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'[\n  {\n    "providers": [\n      "string"\n    ],\n    "subject_id": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'[\n  {\n    "providers": [],\n    "subject_id": "JKZgYhPjQdWNWWwkac0wSwqLKoOJsT0QimJmj6zjimWc"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}f.isMDXComponent=!0}}]);