"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5693],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={pagination_next:"build/assets-traceability/running-node"},o="Wine Track",s={unversionedId:"build/assets-traceability/use-case-definition",id:"version-0.3/build/assets-traceability/use-case-definition",title:"Wine Track",description:"Introduction",source:"@site/versioned_docs/version-0.3/build/assets-traceability/use-case-definition.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/use-case-definition",permalink:"/docs/build/assets-traceability/use-case-definition",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{pagination_next:"build/assets-traceability/running-node"},sidebar:"buildSidebar",previous:{title:"Next steps",permalink:"/docs/build/minimal-network/next-steps"},next:{title:"Running a Node",permalink:"/docs/build/assets-traceability/running-node"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use Case Description",id:"use-case-description",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wine-track"},"Wine Track"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This tutorial will cover a series of advanced Taple network concepts, in which we will learn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How to perform external invocations to methods of a smart contract."),(0,r.kt)("li",{parentName:"ol"},"How to transfer ownership of a subject to another participant."),(0,r.kt)("li",{parentName:"ol"},"How works subject segmentation by namespace works."),(0,r.kt)("li",{parentName:"ol"},"How to modify voting policies on a subject."),(0,r.kt)("li",{parentName:"ol"},"How to finalize the life cycle tracking of a subject.")),(0,r.kt)("h2",{id:"use-case-description"},"Use Case Description"),(0,r.kt)("p",null,"In this tutorial, we will implement a system for tracking the life cycle of a food product, specifically a premium high-quality wine. The objective is to certify the wine's quality to the end buyers based on certain parameters, such as organic certification and optimal temperature control."),(0,r.kt)("p",null,"To achieve this goal, the support of different participants will be necessary, each responsible for carrying out various actions required for the proper functioning of this life cycle. Among them, we can distinguish:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wine Producers Organization (WPO)"),": Responsible for formalizing the traceability use case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Premium Wines"),": Authorized personnel in charge of initiating the tracking of wine bottles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World Food Organization (WFO)"),": Administrator of the changes made to the use case and wine-type subjects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spanish Food Organization (SFO)"),": Responsible for validating changes to the wine subject."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Citizen"),": External entity to whom the ownership of a wine bottle will be transferred.")),(0,r.kt)("p",null,"Throughout this tutorial, detailed instructions and the necessary commands will be provided to carry out each step. Let's begin with the development of this use case for tracking the wine life cycle in Taple!"))}p.isMDXComponent=!0}}]);