"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3669],{17141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),l=a(74933),p=a(47507),o=(a(24310),a(63303)),c=(a(75035),a(85162));const d={id:"create-keys",title:"Register KeyPair",description:"Register KeyPair",sidebar_label:"Register KeyPair",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Register KeyPair\n\nIt allows to generate a pair of cryptographic keys in the node that can then be assigned to a subject. The private key is never revealed.",operationId:"createKeys",parameters:[{name:"algorithm",in:"path",description:"Type of algorithm to use (possibilities: Ed25519, Secp256k1)",required:!0,schema:{type:"string"}}],responses:{201:{description:"Public Key of the generated keypair",content:{"text/plain":{schema:{type:"string"},example:{public_key:"ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/api/keys",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Register KeyPair",description:{content:"Register KeyPair\n\nIt allows to generate a pair of cryptographic keys in the node that can then be assigned to a subject. The private key is never revealed.",type:"text/plain"},url:{path:["api","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Type of algorithm to use (possibilities: Ed25519, Secp256k1)",type:"text/plain"},type:"any",value:"",key:"algorithm"}]},header:[{key:"Accept",value:"text/plain"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/taple-client"},y=void 0,m={unversionedId:"api-rest/create-keys",id:"api-rest/create-keys",title:"Register KeyPair",description:"Register KeyPair",source:"@site/docs/api-rest/create-keys.api.mdx",sourceDirName:"api-rest",slug:"/api-rest/create-keys",permalink:"/docs/next/api-rest/create-keys",draft:!1,tags:[],version:"current",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"create-keys",title:"Register KeyPair",description:"Register KeyPair",sidebar_label:"Register KeyPair",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Others"],description:"Register KeyPair\n\nIt allows to generate a pair of cryptographic keys in the node that can then be assigned to a subject. The private key is never revealed.",operationId:"createKeys",parameters:[{name:"algorithm",in:"path",description:"Type of algorithm to use (possibilities: Ed25519, Secp256k1)",required:!0,schema:{type:"string"}}],responses:{201:{description:"Public Key of the generated keypair",content:{"text/plain":{schema:{type:"string"},example:{public_key:"ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/api/keys",security:[],info:{title:"taple-client",description:"",contact:{name:"Open Canarias S.L.",email:"taple@opencanarias.com"},license:{name:"AGPL-3.0-only",url:"https://raw.githubusercontent.com/opencanarias/taple-client/main/LICENSE"},version:"0.3.0-dev"},postman:{name:"Register KeyPair",description:{content:"Register KeyPair\n\nIt allows to generate a pair of cryptographic keys in the node that can then be assigned to a subject. The private key is never revealed.",type:"text/plain"},url:{path:["api","keys"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Type of algorithm to use (possibilities: Ed25519, Secp256k1)",type:"text/plain"},type:"any",value:"",key:"algorithm"}]},header:[{key:"Accept",value:"text/plain"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/api-rest/taple-client"},sidebar:"learnSidebar",previous:{title:"Set subject as preauthorized",permalink:"/docs/next/api-rest/put-allowed-subject-data"},next:{title:"TAPLE Tools",permalink:"/docs/next/learn/client-tools"}},u={},k=[{value:"Register KeyPair",id:"register-keypair",level:2}],h={toc:k};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"register-keypair"},"Register KeyPair"),(0,r.kt)("p",null,"Register KeyPair"),(0,r.kt)("p",null,"It allows to generate a pair of cryptographic keys in the node that can then be assigned to a subject. The private key is never revealed."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"algorithm",in:"path",description:"Type of algorithm to use (possibilities: Ed25519, Secp256k1)",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Public Key of the generated keypair")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))))),(0,r.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "public_key": "ELZ_b-kZzdPykcYuRNC2ZZe_2lCTCUoo60GXfR4cuXMw"\n}',language:"shell",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null)))))}g.isMDXComponent=!0}}]);