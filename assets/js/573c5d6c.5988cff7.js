"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Running the first node",l={unversionedId:"build/minimal-network/running-the-first-node",id:"version-0.3/build/minimal-network/running-the-first-node",title:"Running the first node",description:"To launch a taple node, you must execute the taple-client binary, located in the client folder of the repository. To use its Docker image, go to the page on dockerhub.",source:"@site/versioned_docs/version-0.3/build/minimal-network/2-running-the-first-node.md",sourceDirName:"build/minimal-network",slug:"/build/minimal-network/running-the-first-node",permalink:"/docs/build/minimal-network/running-the-first-node",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:2,frontMatter:{},sidebar:"buildSidebar",previous:{title:"Introduction",permalink:"/docs/build/minimal-network/introduction"},next:{title:"Creating the governance",permalink:"/docs/build/minimal-network/creating-governance"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-the-first-node"},"Running the first node"),(0,a.kt)("p",null,"To launch a taple node, you must execute the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opencanarias/taple-client"},"taple-client")," binary, located in the client folder of the repository. To use its Docker image, go to the page on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/opencanarias/taple-client"},"dockerhub"),"."),(0,a.kt)("p",null,"If we do not have the image or we do not have the latest version, download it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull opencanarias/taple-client:0.3\n")),(0,a.kt)("p",null,"We can execute it by launching:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run opencanarias/taple-client:0.3\n")),(0,a.kt)("p",null,"However, this will give us an error, as we must specify certain aspects of the configuration mandatorily."),(0,a.kt)("p",null,"The first thing we must mandatorily add to the configuration is the private key. We can generate a valid one using taple-tools, which is found in the same repository as the client in the taple-tools directory, and on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/opencanarias/taple-tools"},"dockerhub"),". Specifically, its keygen binary, which will create the necessary cryptographic material for the node. An output without extra configuration will give us a result such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE KEY ED25519 (HEX): f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a\nCONTROLLER ID ED25519: EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4\nPeerID: 12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B\n")),(0,a.kt)("p",null,"What we must add to the TAPLE_SECRET_KEY environment variable is the private key, in this case: f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a."),(0,a.kt)("admonition",{title:"IMPORTANT",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It's important to highlight that the same cryptographic scheme should be used when generating the key and adding it to the client, keygen and client use ed25519 by default.")),(0,a.kt)("p",null,"Another environment variable we must add is ",(0,a.kt)("strong",{parentName:"p"},"TAPLE_HTTP"),", which will allow us to launch the http server to be able to use the REST API. For this, you must set ",(0,a.kt)("strong",{parentName:"p"},"TAPLE_HTTP=true"),"."),(0,a.kt)("p",null,"Once we have these two variables, we will be able to launch the node with the minimum configuration (port 3000 is the default for the http service)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 3000:3000 -p 50000:50000 \\\n-e TAPLE_ID_PRIVATE_KEY=f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a \\\n-e TAPLE_HTTP=true \\\n-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \\\n-e RUST_LOG=info \\\nopencanarias/taple-client:0.3\n")))}p.isMDXComponent=!0}}]);