"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={description:"TAPLE communications over Internet"},a="Internet communications",s={unversionedId:"learn/taple-over-internet",id:"version-0.2/learn/taple-over-internet",title:"Internet communications",description:"TAPLE communications over Internet",source:"@site/versioned_docs/version-0.2/learn/taple-over-internet.md",sourceDirName:"learn",slug:"/learn/taple-over-internet",permalink:"/taple-docsite/docs/0.2/learn/taple-over-internet",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1698048419,formattedLastUpdatedAt:"Oct 23, 2023",frontMatter:{description:"TAPLE communications over Internet"},sidebar:"learnSidebar",previous:{title:"Other topics",permalink:"/taple-docsite/docs/0.2/learn/other-topics"}},c={},l=[{value:"NAT",id:"nat",level:2},{value:"Outgoing connections",id:"outgoing-connections",level:3},{value:"Incoming connections",id:"incoming-connections",level:3},{value:"Node discovery and routing",id:"node-discovery-and-routing",level:2}],d={toc:l};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internet-communications"},"Internet communications"),(0,i.kt)("p",null,"Communications between TAPLE nodes are carried out via P2P protocol. This means that there are no central nodes channelling communications. While this has great advantages, it also poses certain challenges when communications must be conducted over the Internet. When using taple over the internet, the following issues need to be addressed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#internet-communications"},"Internet communications"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nat"},"NAT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#outgoing-connections"},"Outgoing connections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#incoming-connections"},"Incoming connections")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#node-discovery-and-routing"},"Node discovery and routing"))))),(0,i.kt)("h2",{id:"nat"},"NAT"),(0,i.kt)("p",null,"Network address translation (NAT) is a method of mapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". It is mainly used to allow devices on a private network to communicate with other devices over the Internet. Specifically, this mechanism will be responsible for changing in real time the IP addresses of the packets that are sent to the network to a valid public IP known by the router. This IP, which is addressable unlike the private IPs of each device, will in turn allow others to send their own messages to the network, with the router then being responsible for redistributing the traffic if deemed necessary."),(0,i.kt)("h3",{id:"outgoing-connections"},"Outgoing connections"),(0,i.kt)("p",null,"NAT in itself is not a problem. In fact, it is a solution to the problem of the finite set of IP4 addresses, since it allows a set of devices with private addresses to communicate over the Internet by sharing the same public address. Specifically, when a packet passes through the router, the router changes its IP but also assigns it a port, keeping the relationship between the actual device and the selected port. When an external device wants to issue a response to such an outgoing packet, it must do so by specifying the IP and ports assigned by NAT, so that, on arrival at the router, the router knows how to resolve the addressing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"output-nat",src:n(69228).Z,width:"691",height:"411"})),(0,i.kt)("h3",{id:"incoming-connections"},"Incoming connections"),(0,i.kt)("p",null,"The process for incoming connections works differently, however. While NAT allows responses to outgoing messages, it is not possible for an external device to initiate the communication, i.e. it is not possible to handle incoming messages that are not responses from another device. This is because the router, upon receiving the packet, will not know how to redirect it, since it does not know on which port the device is listening. This implies the need to configure the router to redirect the traffic properly."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In TAPLE, this behavior is also required to be able to receive incoming messages.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"input-nat",src:n(63312).Z,width:"781",height:"400"})),(0,i.kt)("h2",{id:"node-discovery-and-routing"},"Node discovery and routing"),(0,i.kt)("p",null,"In TAPLE, nodes maintain a routing table that allows them to connect to others in the network. In order to enable its construction, it is necessary for the nodes in the network to know another node in the network beforehand. This is where two LIbP2P protocols come into play: Identify and Kademlia."),(0,i.kt)("p",null,"The second is the protocol that manages the routing table itself. When two nodes connect, Kademlia includes in its table the relationship that exists between the node identifier and its real address. This allows us to send packets to the nodes knowing only their identifier. Since it is also a routing protocol, it is not necessary for each node to know the entire network. In practice, each node knows a subset and the protocol is responsible for routing packets to those nodes that are not initially in the table."),(0,i.kt)("p",null,"When two nodes connect to each other, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/identify/README.md"},"Identify")," protocol acts to produce an initial exchange of information, which is necessary for subsequent communications to be successful and includes, for example, the public keys that the nodes are going to use or their known listening addresses. The latter is especially relevant because it is directly related to the NAT mechanism mentioned above. The node itself is responsible for building the Identify packet with the set of listening addresses, but it does not know its public address and TAPLE does not implement, for the moment, any mechanism to discover it. This means that the packet will consist of the set of private addresses of the node, none of them addressable by an external node, so that even though the discovery process has been completed, in practice the nodes will not be able to communicate with each other, even if the router is properly configured."),(0,i.kt)("p",null,"LibP2P offers several mechanisms to solve this problem, such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/nat/autonat/"},"AutoNAT")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/nat/hole-punching/"},"Hole Punching"),". However, in TAPLE we have chosen to modify the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Identify"))," packages to include a number of external interfaces that can be specified by the user through the node configuration itself. In order to be more precise, a user configures his router to forward traffic received on a port to a device within a private network with a TAPLE node and, through this ",(0,i.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/client-config"},"configuration")," variable called ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"External Address")),", specifies the address and port previously configured in the router. Thus, this information will be transmitted to the rest of the network nodes through the Identify protocol and they will be able to send their packets appropriately."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"smart-contracts-life-cycle",src:n(24225).Z,width:"841",height:"221"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, these external addresses can only be specified at node startup and during node execution.")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Network_address_translation"},"https://en.wikipedia.org/wiki/Network_address_translation"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},63312:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/incoming-nat-58f1b32adfc80acbb782f34e48493205.svg"},24225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nat-resolve-50b52907c0e3579f3dbc60ffa5c23a63.svg"},69228:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/output-nat-b0168708418c06baa1326beb1cbd1f0a.svg"}}]);