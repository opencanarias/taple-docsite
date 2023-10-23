"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[931],{40513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>v});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),o=r(94891),p=r(74933),l=(r(47507),r(24310)),n=r(63303),d=(r(75035),r(85162));const u={id:"set-your-aprroval-for-a-request",title:"Set your Aprroval for a request",description:"",sidebar_label:"Set your Aprroval for a request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"",operationId:"Set your Aprroval for a request",parameters:[{name:"id",in:"path",description:"Request's unique id",required:!0,deprecated:!1,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{oneOf:[{type:"object",required:["approvalType"],properties:{approvalType:{type:"string",enum:["Accept"]}}},{type:"object",required:["approvalType"],properties:{approvalType:{type:"string",enum:["Reject"]}}}]}}},required:!0},responses:{200:{description:"Request successfully voted"},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"put",path:"/api/approvals{id}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{approvalType:"Accept"},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"}},sidebar_class_name:"put api-method",info_path:"docs/api-rest/client"},c=void 0,m={unversionedId:"api-rest/set-your-aprroval-for-a-request",id:"version-0.1/api-rest/set-your-aprroval-for-a-request",title:"Set your Aprroval for a request",description:"",source:"@site/versioned_docs/version-0.1/api-rest/set-your-aprroval-for-a-request.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/set-your-aprroval-for-a-request",permalink:"/taple-docsite/docs/0.1/api-rest/set-your-aprroval-for-a-request",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698048419,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{id:"set-your-aprroval-for-a-request",title:"Set your Aprroval for a request",description:"",sidebar_label:"Set your Aprroval for a request",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Approvals"],description:"",operationId:"Set your Aprroval for a request",parameters:[{name:"id",in:"path",description:"Request's unique id",required:!0,deprecated:!1,schema:{type:"string"}}],requestBody:{description:"Vote of the user for an existing request",content:{"application/json":{schema:{oneOf:[{type:"object",required:["approvalType"],properties:{approvalType:{type:"string",enum:["Accept"]}}},{type:"object",required:["approvalType"],properties:{approvalType:{type:"string",enum:["Reject"]}}}]}}},required:!0},responses:{200:{description:"Request successfully voted"},400:{description:"Bad Request"},401:{description:"Unauthorized"},404:{description:"Not Found"},500:{description:"Internal Server Error"}},deprecated:!1,security:[{api_key:[]}],method:"put",path:"/api/approvals{id}",securitySchemes:{api_key:{type:"apiKey",in:"header",name:"x-api-key"}},jsonRequestBodyExample:{approvalType:"Accept"},info:{title:"client",description:"",contact:{name:""},license:{name:""},version:"0.1.0"}},sidebar_class_name:"put api-method",info_path:"docs/api-rest/client"},sidebar:"learnSidebar",previous:{title:"Get a specific pending request for Approval",permalink:"/taple-docsite/docs/0.1/api-rest/get-a-specific-pending-request-for-approval"},next:{title:"Governances",permalink:"/taple-docsite/docs/0.1/api-rest/governances"}},y={},v=[{value:"Set your Aprroval for a request",id:"set-your-aprroval-for-a-request",level:2}],k={toc:v};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"set-your-aprroval-for-a-request"},"Set your Aprroval for a request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"Request's unique id",required:!0,deprecated:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Vote of the user for an existing request"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(n.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"approvalType",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Accept`]",defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"approvalType",required:!0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Reject`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request successfully voted")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Not Found")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);