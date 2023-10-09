"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),c=r(86010),a=r(53438),i=r(39960),o=r(13919),s=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:a},r," ",a),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==c?void 0:c.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const i=(0,a.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},53271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),c=(r(67294),r(3905)),a=r(52991),i=r(53438);const o={id:"subjects",title:"Subjects",description:"Subjects",custom_edit_url:null},s=void 0,l={unversionedId:"api-rest/subjects",id:"version-0.1/api-rest/subjects",title:"Subjects",description:"Subjects",source:"@site/versioned_docs/version-0.1/api-rest/subjects.tag.mdx",sourceDirName:"api-rest",slug:"/api-rest/subjects",permalink:"/docs/0.1/api-rest/subjects",draft:!1,editUrl:null,tags:[],version:"0.1",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"subjects",title:"Subjects",description:"Subjects",custom_edit_url:null},sidebar:"learnSidebar",previous:{title:"Backups",permalink:"/docs/0.1/learn/backups"},next:{title:"Get All Subjects Data",permalink:"/docs/0.1/api-rest/get-all-subjects-data"}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);