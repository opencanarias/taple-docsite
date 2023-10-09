"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Running a Node",s={unversionedId:"build/assets-traceability/running-node",id:"build/assets-traceability/running-node",title:"Running a Node",description:"The Wine Producers Organization (hereinafter referred to as WPO) is the entity responsible for proposing the business model and, consequently, will be in charge of managing the network. To achieve this, the first step is to set up a TAPLE node representing the WPO, which will allow interaction to configure the rest of the use case.",source:"@site/docs/build/assets-traceability/running-node.md",sourceDirName:"build/assets-traceability",slug:"/build/assets-traceability/running-node",permalink:"/docs/next/build/assets-traceability/running-node",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Wine Track",permalink:"/docs/next/build/assets-traceability/use-case-definition"},next:{title:"Creating a governance",permalink:"/docs/next/build/assets-traceability/creating-governance"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Wine Producers Organization")," (hereinafter referred to as ",(0,a.kt)("strong",{parentName:"p"},"WPO"),") is the entity responsible for proposing the business model and, consequently, will be in charge of managing the network. To achieve this, the first step is to set up a TAPLE node representing the ",(0,a.kt)("strong",{parentName:"p"},"WPO"),", which will allow interaction to configure the rest of the use case."),(0,a.kt)("p",null,"Below, we will describe the steps to create the WPO node:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, make sure to download the appropriate Taple Client image from Dockerhub:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'bash title="Node: WPO"',bash:!0,title:'"Node:','WPO"':!0},"docker pull opencanarias/taple-client:0.3\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Next, we will start the node using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Node: WPO"',title:'"Node:','WPO"':!0},"docker run \\\n    -p 3000:3000 \\\n    -p 50000:50000 \\\n    -e TAPLE_HTTP=true \\\n    -e TAPLE_ID_PRIVATE_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \\\n    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \\\n    opencanarias/taple-client:0.3\n")))))}u.isMDXComponent=!0}}]);