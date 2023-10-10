"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4227],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={},i="Running nodes",s={unversionedId:"build/tutorial-from-0/running-nodes",id:"version-0.1/build/tutorial-from-0/running-nodes",title:"Running nodes",description:"Download docker image",source:"@site/versioned_docs/version-0.1/build/tutorial-from-0/running-nodes.md",sourceDirName:"build/tutorial-from-0",slug:"/build/tutorial-from-0/running-nodes",permalink:"/taple-docsite/docs/0.1/build/tutorial-from-0/running-nodes",draft:!1,tags:[],version:"0.1",lastUpdatedAt:1696933252,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Introduction Tutorial",permalink:"/taple-docsite/docs/0.1/build/tutorial-from-0/introduction"},next:{title:"Defining the governance",permalink:"/taple-docsite/docs/0.1/build/tutorial-from-0/governance-operations"}},l={},d=[{value:"Download docker image",id:"download-docker-image",level:2},{value:"Running the first node",id:"running-the-first-node",level:2},{value:"Runing the second node",id:"runing-the-second-node",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-nodes"},"Running nodes"),(0,a.kt)("h2",{id:"download-docker-image"},"Download docker image"),(0,a.kt)("p",null,"The first step is to download the docker image hosted in ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/opencanarias/taple-client"},(0,a.kt)("strong",{parentName:"a"},"Docker Hub")),". To do this, we run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    docker pull opencanarias/taple-client\n")),(0,a.kt)("p",null,"To check that it has been downloaded correctly, execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    docker images\n")),(0,a.kt)("p",null,"Where you should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    REPOSITORY           TAG       IMAGE ID       CREATED        SIZE\n    opencanarias/taple-client   0.1    c89c1118b5aa   20 hours ago   94.4MB\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The version available in Docker Hub for this tutorial is version 0.1")),(0,a.kt)("h2",{id:"running-the-first-node"},"Running the first node"),(0,a.kt)("p",null,"Before launching any TAPLE node, we need cryptographic material to identify the node, to accomplish this, before each launch,  we need to run ",(0,a.kt)("strong",{parentName:"p"},"taple-keygen"),", getting the material we need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ taple-keygen ed25519\nkeygen\n["taple-keygen", "ed25519"]\nPRIVATE KEY ED25519 (HEX): da620c314e39bd464c0d8d8c18eba1d34d2537acbd2ec08c534a97e77fc40fd8\nCONTROLLER ID ED25519: E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\nPeerID: 12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo\n')),(0,a.kt)("p",null,"In order to raise the first node, we must make use of some environment variables which you can find explained in detail in this ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/taple-docsite/docs/0.1/learn/taple-client#environment-variables"},"section")),". Also we will use the ",(0,a.kt)("strong",{parentName:"p"},"PRIVATE KEY ED25519 (HEX)")," that we got with the keygen tool in the ",(0,a.kt)("strong",{parentName:"p"},"TAPLE_NODE_SECRETKEY")," env variable. To raise the first node, we must execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    docker run -d --rm -e TAPLE_HTTPPORT=3000 \\\n        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \\\n        -e TAPLE_NETWORK_P2PPORT=40000 \\\n        -e TAPLE_NODE_SECRETKEY=da620c314e39bd464c0d8d8c18eba1d34d2537acbd2ec08c534a97e77fc40fd8 \\\n        -e RUST_LOG=info \\\n        -p 3000:3000 \\\n        -p 40000:40000 \\\n        --name="node_0" \\\n        opencanarias/taple-client:0.1\n')),(0,a.kt)("p",null,"To check that the first node has been successfully lifted, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    docker ps\n")),(0,a.kt)("p",null,"Where you should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    CONTAINER ID   IMAGE                       COMMAND   CREATED         STATUS        PORTS                                                                                      NAMES\n    4b968e1fad34   opencanarias/taple:0.2   "taple"   4 seconds ago   Up 3 seconds   0.0.0.0:3000->3000/tcp,:::3000->3000/tcp, 0.0.0.0:40000->40000/tcp, :::40000->40000/tcp   node_0\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that this node also acts as a first.")),(0,a.kt)("p",null,"To know the address of the first node that we will use in later steps, you must execute the command ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs node_0"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    docker logs node_0\n")),(0,a.kt)("p",null,"In which an output similar to the following can be seen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    ...\n    [2022-12-23T14:20:30Z INFO  network::network] RED: "/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo"\n    ...\n')),(0,a.kt)("p",null,"Usually Docker uses the default 172.17. 0.0/16 subnet for container networking. So if you are not specifying the network you should take the address of the docker network for the known nodes env variable in orden to communicate with appropriately between TAPLEs."),(0,a.kt)("h2",{id:"runing-the-second-node"},"Runing the second node"),(0,a.kt)("p",null,"To raise a second node, we must follow the same steps as in previous ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#running-the-first-node"},"section"))," but with some small variations which are shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    docker run -d --rm -e TAPLE_HTTPPORT=3001 \\\n        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \\\n        -e TAPLE_NETWORK_P2PPORT=40001 \\\n        -e TAPLE_NODE_SECRETKEY=ff1b755a8c86f84a930f93a883805db05b8fd76480431c243708dfac9dde087d \\\n        -e RUST_LOG=info \\\n        -e TAPLE_NETWORK_KNOWNNODES=/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo \\\n        -p 3001:3001 \\\n        -p 40001:40001 \\\n        --name="node_1" \\\n        opencanarias/taple-client:0.1\n')),(0,a.kt)("p",null,"As we can see, it has been necessary to change the ports and we have also added a new integer variable called ",(0,a.kt)("strong",{parentName:"p"},"TAPLE_NETWORK_KNOWNODES")," in which we must specify the address of the bootstrap node that we previously raised in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/taple-docsite/docs/0.1/discover/glossary#multiaddr"},"Multiaddr"))," (/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo). This address is the one we have displayed in the previous step. This address can be generated from the information provided by the ",(0,a.kt)("strong",{parentName:"p"},"taple-keygen")," (through the PeerID) and then we compose the address according to our use case or we can see it as output when starting the node, as we have seen in this tutorial."))}p.isMDXComponent=!0}}]);