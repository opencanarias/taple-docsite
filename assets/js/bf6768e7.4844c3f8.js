"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Architecture",l={unversionedId:"learn/architecture",id:"version-0.1/learn/architecture",title:"Architecture",description:"TAPLE architecture is divided into several tools that allow us to obtain a complete functionality for our network. Among them, we can identify the following:",source:"@site/versioned_docs/version-0.1/learn/architecture.md",sourceDirName:"learn",slug:"/learn/architecture",permalink:"/docs/0.1/learn/architecture",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Learn about TAPLE",permalink:"/docs/0.1/learn/"},next:{title:"Description",permalink:"/docs/0.1/learn/taple-core"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TAPLE")," architecture is divided into several tools that allow us to obtain a complete functionality for our network. Among them, we can identify the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencanarias/taple-core"},"TAPLE Core"),": This is the core of the ",(0,a.kt)("em",{parentName:"li"},"TAPLE")," technology and contains elements such as:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Network communication protocol."),(0,a.kt)("li",{parentName:"ul"},"Information encoding methods."),(0,a.kt)("li",{parentName:"ul"},"Way of storing the information."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencanarias/taple-client"},"TAPLE Client"),": This is the simplest method to generate our own ",(0,a.kt)("em",{parentName:"li"},"TAPLE")," nodes without the need to code our own application. It puts at our disposal:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A large number of configuration variables to suit our needs."),(0,a.kt)("li",{parentName:"ul"},"A REST API that allows us to interact with the TAPLE network."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/opencanarias/taple-tools"},"TAPLE Tools"),": This is a set of utilities designed to facilitate interaction with TAPLE technology, which are divided into two:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Taple keygen"),": This is a tool that allows the generation of cryptographic material necessary for the correct functioning of TAPLE. It must be generated externally and then provided to the node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Taple Sign"),": This is a tool designed to facilitate the execution of external invocations (those that involve a change in a network subject that we do not control).")))))}u.isMDXComponent=!0}}]);