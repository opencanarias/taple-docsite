"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||s;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const s={},a="Issues and Workarounds",i={unversionedId:"build/issues-and-workarounds",id:"version-0.1/build/issues-and-workarounds",title:"Issues and Workarounds",description:"This page provides workarounds and answers for issues and questions that frequently come up.",source:"@site/versioned_docs/version-0.1/build/issues-and-workarounds.md",sourceDirName:"build",slug:"/build/issues-and-workarounds",permalink:"/docs/0.1/build/issues-and-workarounds",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1698914300,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Access Control",permalink:"/docs/0.1/build/uc-hotel-access-control"}},l={},p=[{value:"Error parsing resolv.conf",id:"error-parsing-resolvconf",level:2},{value:"TAPLE-Tools not found",id:"taple-tools-not-found",level:2},{value:"Permissions issues with docker",id:"permissions-issues-with-docker",level:2},{value:"Network issues with docker",id:"network-issues-with-docker",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issues-and-workarounds"},"Issues and Workarounds"),(0,r.kt)("p",null,"This page provides workarounds and answers for issues and questions that frequently come up. "),(0,r.kt)("h2",{id:"error-parsing-resolvconf"},"Error parsing resolv.conf"),(0,r.kt)("p",null,"The following error has been detected in some Ubuntu operating systems."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    thread 'main' panicked at 'DNS wont fail: Custom { kind: Other, error: \"Error parsing resolv.conf: ProtoError { kind: Msg(\\\"Malformed label: --\\\") }\" }', /app/network/src/network.rs:172:30\n")),(0,r.kt)("p",null,"Steps to resolve it:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the ",(0,r.kt)("strong",{parentName:"p"},"resolv.conf"),' file with path "',(0,r.kt)("strong",{parentName:"p"},"/etc/resolv.conf"),'" and comment out the line starting with "',(0,r.kt)("strong",{parentName:"p"},"search"),'".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if this file is a symbolic link. To do this, run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    ls -l /etc/resolv.conf\n")),(0,r.kt)("p",{parentName:"li"},'In case it is a symbolic link, you must edit the files with path "',(0,r.kt)("strong",{parentName:"p"},"/run/systemd/resolve/resolv.conf"),'" and "',(0,r.kt)("strong",{parentName:"p"},"/run/systemd/resolve/stub-resolv.conf"),'" commenting in both the line beginning with "',(0,r.kt)("strong",{parentName:"p"},"search"),'".'))),(0,r.kt)("h2",{id:"taple-tools-not-found"},"TAPLE-Tools not found"),(0,r.kt)("p",null,"The TAPLE-Tools are not found when you try to use them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    taple-keygen: command not found\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    taple-sign: command not found\n")),(0,r.kt)("p",null,"The first thing you need to check is that you have installed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/learn/taple-tools#installation"},"TAPLE-Tools"),". If the problem persists, you may not have the tools in the PATH. Possible solutions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"taple-keygen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"taple-sign")," tools to the PATH. Refer to your operating system documentation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the directory of the scripts to run them. Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    cd taple-tools/scripts\n    ./taple-keygen\n")))),(0,r.kt)("h2",{id:"permissions-issues-with-docker"},"Permissions issues with docker"),(0,r.kt)("p",null,"The following case has been detected on Linux operating systems when you run any docker command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/images/create?fromImage=opencanarias%2Ftaple-client&tag=latest": dial unix /var/run/docker.sock: connect: permission denied\n')),(0,r.kt)("p",null,"The most frequent reason is not having sufficient permissions to run docker. Possible solutions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute the docker commands with ",(0,r.kt)("strong",{parentName:"li"},"sudo"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure Docker to run as a non-root user. Refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"Docker documentation"))),(0,r.kt)("h2",{id:"network-issues-with-docker"},"Network issues with docker"),(0,r.kt)("p",null,"While following ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.1/build/quickstart"},"QuickStart tutorial")," some users reports having issues when trying to access localhost on their network. This issue happens when you try to run docker containers using ",(0,r.kt)("strong",{parentName:"p"},"Docker Desktop")," for Mac, for Windows or ",(0,r.kt)("strong",{parentName:"p"},"Docker EE")," for Windows server. This issue happens because scripts used in tutorial use the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--network=host")," and this flag is not supported outside of Linux System according to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},"official documentation"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.\n")),(0,r.kt)("p",null,"As today date, we are only giving support to execute TAPLE on Linux Operative Systems so we can't give support to issues happening in  Operative Systems not supported. Yet, we can give you some help by following some workarounds listed in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/roadmap/issues/238"},"official issue"),"."))}c.isMDXComponent=!0}}]);