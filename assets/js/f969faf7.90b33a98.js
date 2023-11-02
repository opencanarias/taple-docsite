"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="End of life",l={unversionedId:"build/assets-traceability/eol",id:"version-0.3/build/assets-traceability/eol",title:"End of life",description:"To conclude the tutorial, let's set up one last scenario: when bottles do not meet quality standards, they must be withdrawn from the market to prevent distribution.",source:"@site/versioned_docs/version-0.3/build/assets-traceability/eol.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/eol",permalink:"/docs/build/assets-traceability/eol",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Changing policies",permalink:"/docs/build/assets-traceability/changing-policies"},next:{title:"Introduction",permalink:"/docs/build/access-control/introduction"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"end-of-life"},"End of life"),(0,a.kt)("p",null,"To conclude the tutorial, let's set up one last scenario: when bottles do not meet quality standards, they must be withdrawn from the market to prevent distribution."),(0,a.kt)("p",null,"To address this situation, Taple provides a solution: the use of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/discover/events#end-of-life-event-eol"},(0,a.kt)("strong",{parentName:"a"},"EOL"))," event. This event allows us to terminate the lifecycle of a subject in the network, preventing any future events from being issued on it."),(0,a.kt)("p",null,"To test this, we will apply it to the last bottle we created (the Spanish one). To do this, execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --location --request POST 'http://localhost:3001/api/event-requests' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"request\": {\n        \"EOL\": {\n        \"subject_id\": {{SUBJECT-ID}}\n        }\n    }\n}'\n")),(0,a.kt)("p",null,"If everything went well, when you request a list of subjects, you should see the bottle with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sn")," value of 3 and the ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," field set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --location --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "subject_id": {{SUBJECT-ID}},\n    "governance_id": {{GOVERNANCE-ID}},\n    "sn": 3,\n    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",\n    "namespace": "Spain",\n    "name": "Wine",\n    "schema_id": "Wine",\n    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",\n    "properties": {\n        "grape": "PinotNoir",\n        "harvest": 3,\n        "organic_certified": false,\n        "origin": "spain",\n        "temperature_control": {\n            "last_check": 0,\n            "temperature_ok": true\n        }\n    },\n    "active": false\n}\n')),(0,a.kt)("p",null,"Now, if you try to launch a new event on this subject, it will not be allowed. To demonstrate this, let's try to launch an ",(0,a.kt)("strong",{parentName:"p"},"EOL")," event again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: Premium Wines"',title:'"Node:',Premium:!0,'Wines"':!0},"curl --location --request POST 'http://localhost:3001/api/event-requests' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"request\": {\n        \"EOL\": {\n        \"subject_id\": {{SUBJECT-ID}}\n        }\n    }\n}'\n")),(0,a.kt)("p",null,"In this case, it will return a message indicating that an event cannot be launched on a subject that has reached the end of its lifecycle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Subject Life Ended: {{SUBJECT-ID}}\n")))}p.isMDXComponent=!0}}]);