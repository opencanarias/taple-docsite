"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45490:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),i=(n(67294),n(3905));const a={toc:[]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The minimum requirements for running the tutorials are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux operating system. TAPLE has only been tested on Linux operating systems. In the future, Windows and Mac systems will be supported."),(0,i.kt)("li",{parentName:"ul"},"Internet connection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://curl.se/"},"cURL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/learn/client-tools"},"TAPLE Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git"))),(0,i.kt)("admonition",{title:"IMPORTANT",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Tutorials assume that:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Docker service has elevated privilegies. If you have any trouble with it try using ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"su")," utilities."),(0,i.kt)("li",{parentName:"ul"},"All required applications (cURL, Docker, TAPLE Tools and Git) are in the ",(0,i.kt)("inlineCode",{parentName:"li"},"$PATH")," environment variable."))))}o.isMDXComponent=!0},47128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905)),a=n(45490);const o={pagination_next:"build/minimal-network/introduction",pagination_prev:null},l="TAPLE Client First steps",p={unversionedId:"build/taple-client",id:"build/taple-client",title:"TAPLE Client First steps",description:"",source:"@site/docs/build/taple-client.md",sourceDirName:"build",slug:"/build/taple-client",permalink:"/docs/next/build/taple-client",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{pagination_next:"build/minimal-network/introduction",pagination_prev:null},sidebar:"buildSidebar",next:{title:"Introduction",permalink:"/docs/next/build/minimal-network/introduction"}},c={},s=[],u={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"taple-client-first-steps"},"TAPLE Client First steps"),(0,i.kt)(a.ZP,{mdxType:"TapleClient"}))}m.isMDXComponent=!0}}]);