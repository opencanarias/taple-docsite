"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="What's new in TAPLE",s={unversionedId:"discover/whats-new",id:"version-0.2/discover/whats-new",title:"What's new in TAPLE",description:"New in 0.2",source:"@site/versioned_docs/version-0.2/discover/whats-new.md",sourceDirName:"discover",slug:"/discover/whats-new",permalink:"/taple-docsite/docs/0.2/discover/whats-new",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696933252,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{},sidebar:"discoverSidebar",previous:{title:"Event validation process",permalink:"/taple-docsite/docs/0.2/discover/event-validation-process"},next:{title:"Under the hood",permalink:"/taple-docsite/docs/0.2/discover/under-the-hood"}},c={},l=[{value:"New in 0.2",id:"new-in-02",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-new-in-taple"},"What's new in TAPLE"),(0,a.kt)("h2",{id:"new-in-02"},"New in 0.2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Smart contracts. Now the modifications of the state of the subjects is done through smart contracts. This allows for more advanced control over which parts of the state can be modified and who can make such modifications."),(0,a.kt)("li",{parentName:"ul"},"New event types: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Transfer. Ownership of a subject can be transferred between participants."),(0,a.kt)("li",{parentName:"ul"},"EOL. It is now possible to declare that a subject has reached the end of its life cycle, preventing new events from being included in it."))),(0,a.kt)("li",{parentName:"ul"},"New validation process. The validation process is now managed by the owner, reducing the network load and improving efficiency. "),(0,a.kt)("li",{parentName:"ul"},"Namespace segmentation. Using namespaces we can segment the participants of the use case in any of the phases of an event."),(0,a.kt)("li",{parentName:"ul"},"Different database implementations are allowed")),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for mobile devices. Soon it will be possible to use the TAPLE Core library on Android and iOS devices!")))}d.isMDXComponent=!0}}]);