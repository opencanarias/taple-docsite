"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(a),p=o,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const s={},r="Smart Contracts in TAPLE",i={unversionedId:"learn/smart-contracts",id:"version-0.2/learn/smart-contracts",title:"Smart Contracts in TAPLE",description:"Smart contracts & schemas",source:"@site/versioned_docs/version-0.2/learn/smart-contracts.md",sourceDirName:"learn",slug:"/learn/smart-contracts",permalink:"/taple-docsite/docs/0.2/learn/smart-contracts",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1696909591,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Learn JSON Schema",permalink:"/taple-docsite/docs/0.2/learn/json-schema"},next:{title:"Smart Contracts in TAPLE",permalink:"/taple-docsite/docs/0.2/learn/smart-contracts"}},c={},l=[{value:"Smart contracts &amp; schemas",id:"smart-contracts--schemas",level:2},{value:"Inputs and outputs",id:"inputs-and-outputs",level:2},{value:"Life cycle",id:"life-cycle",level:2},{value:"Development",id:"development",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Compilation",id:"compilation",level:3},{value:"Execution",id:"execution",level:3},{value:"Rust and WASM",id:"rust-and-wasm",level:2}],h={toc:l};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts-in-taple"},"Smart Contracts in TAPLE"),(0,o.kt)("h2",{id:"smart-contracts--schemas"},"Smart contracts & schemas"),(0,o.kt)("p",null,"In TAPLE, each subject is associated to a ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/schemas"},"schema")," that determines, fundamentally, its properties. The value of these properties may change over time through the emission of events, being necessary, consequently, to establish the mechanism through which these events perform such action. In practice, this is managed through a series of rules that constitute what we call a ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/smart-contracts"},"smart contract"),"."),(0,o.kt)("p",null,"Consequently, we can say that a schema always has an associated smart contract that regulates how it evolves. The specification of both is done in governance."),(0,o.kt)("h2",{id:"inputs-and-outputs"},"Inputs and outputs"),(0,o.kt)("p",null,"Contracts, although specified in the governance, are only executed by those nodes that have evaluation capabilities and have been defined as such in the governance rules. It is important to note that TAPLE allows a node to act as ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/roles#evaluator"},"evaluator")," of a subject even if it ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"does not possess the subject's events chain")),", i.e., even if it is not ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/roles#witness"},"witness"),". This helps to reduce the load on these nodes and contributes to the overall network performance."),(0,o.kt)("p",null,"To achieve the correct execution of a contract, it receives three inputs: the current state of the subject, the event to be processed and a flag indicating whether or not the event request has been issued by the owner of the subject. Once these inputs are received, the contract must use them to generate a new valid state. Note that the logic of the latter lies entirely with the contract programmer. The contract programmer also determines which events are valid, i.e. decides the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"family of events to be used")),". Thus, the contract will only accept events from this family, rejecting all others, and which the programmer can adapt, in terms of structure and data, to the needs of his use case. As an example, suppose a subject representing an user's profile with his contact information as well as his identity; an event of the family could be one that only updates the user's telephone number. On the other hand, the flag can be used to restrict certain operations to only the owner of the subject, since the execution of the contract is performed both by the events it generates on its own and by external invocations."),(0,o.kt)("p",null,"When a contract is finished executing, it generates three outputs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success flag"),": By means of a Boolean, it indicates whether the execution of the contract has been successful, in other words, whether the event should cause a change of state of the subject. This flag will be set to false whenever an error occurs in obtaining the input data of the contract or if the logic of the contract so dictates. In other words, it can and should be explicitly stated whether or not the execution can be considered successful. This is important because these decisions depend entirely on the use case, from which TAPLE is abstracted in its entirety. Thus, for example, the programmer could determine that if, after the execution of an event, the value of one of the subject properties has exceeded a threshold, the event cannot be considered valid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Final state"),": If the event has been successfully processed and the execution of the contract has been marked as successful, then it returns the new state generated, which in practice could be the same as the previous one. This state will be validated against the schema defined in the governance to ensure the integrity of the information. If the validation is not successful, the success flag is cancelled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Approval flag"),": The contract must decide whether or not an event should be ",(0,o.kt)("a",{parentName:"li",href:"/taple-docsite/docs/0.2/discover/roles#approver"},"approved"),". Again, this will depend entirely on the use case, being the responsibility of the programmer to establish when it is necessary. Thus, approval is set as an optional but also ",(0,o.kt)("strong",{parentName:"li"},"conditional")," phase.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"TAPLE contracts work without any associated status. All the information they can work with is what they receive as input. This means that the value of variables is not retained between executions, marking an important difference with respect to smart contracts on other platforms, such as Ethereum.")),(0,o.kt)("h2",{id:"life-cycle"},"Life cycle"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"smart-contracts-life-cycle",src:a(38746).Z,width:"1081",height:"471"})),(0,o.kt)("h3",{id:"development"},"Development"),(0,o.kt)("p",null,"Contracts are defined in local Rust projects, the only language allowed for writing them. These projects, which we must define as libraries, must import the ",(0,o.kt)("strong",{parentName:"p"},"SDK")," of the contracts available in the official repositories and, in addition, must follow the indications specified in ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/smart-contracts-programming"},'"how to write a contract"'),"."),(0,o.kt)("h3",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"Once the contract has been defined, it must be included in a governance and associated to a schema so that it can be used by the nodes of a network. To this end, it is necessary to perform a governance update operation in which the contract is included in the corresponding section and coded in ",(0,o.kt)("strong",{parentName:"p"},"base64"),". If a test battery has been defined, it does not need to be included in the encoding process."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information on this process, see the following ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/build/assets-traceability/adding-schema"},"tutorial"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since the TAPLE nodes are in charge of contract compilation, it is necessary that the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"base 64"))," includes the contract in its entirety. In other words, the contract should be written entirely in a single file and encoded."),(0,o.kt)("p",{parentName:"admonition"},"This is a current limitation and other alternatives are expected to be available in the future.")),(0,o.kt)("h3",{id:"compilation"},"Compilation"),(0,o.kt)("p",null,"If the update request is successful, the governance status will change and the evaluator nodes will compile the contract as a ",(0,o.kt)("strong",{parentName:"p"},"Web Assembly")," module, serialize it and store it in their database. This is an automated and self-managed process, so no user intervention is required at any stage of the process."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently it is not possible to use any crate in smart contracts, only a selection can be used. The complete list of possible dependencies can be found in ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/learn/smart-contracts-programming"},'"how to write a contract"'),".")),(0,o.kt)("p",null,"After this step, the contract can be used."),(0,o.kt)("h3",{id:"execution"},"Execution"),(0,o.kt)("p",null,"The execution of the contract will be done in a Web Assembly ",(0,o.kt)("strong",{parentName:"p"},"Runtime"),", isolating its execution from the rest of the system. This avoids the misuse of its resources, adding a layer of security."),(0,o.kt)("h2",{id:"rust-and-wasm"},"Rust and WASM"),(0,o.kt)("p",null,"Web Assembly is used for contract execution due to its characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High performance and efficiency."),(0,o.kt)("li",{parentName:"ul"},"It offers an isolated and secure execution environment."),(0,o.kt)("li",{parentName:"ul"},"It has an active community."),(0,o.kt)("li",{parentName:"ul"},"Allows compilation from several languages, many of them with a considerable user base."),(0,o.kt)("li",{parentName:"ul"},"The modules resulting from the compilation, once optimized, are lightweight.")),(0,o.kt)("p",null,"Rust was chosen as the language for writing TAPLE contracts because of its ability to compile to Web Assembly as well as its capabilities and specifications, the same reason that motivated its choice for the development of TAPLE. Specifically, Rust is a language focused on writing secure, high-performance code, both of which contribute to the quality of the resulting Web Assembly module. In addition, the language natively has the resources to create tests, which favors the testing of contracts."))}d.isMDXComponent=!0},38746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/smart-contracts-e9d2c8d5076722fc187a536b1d8429b2.svg"}}]);