"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(a),p=r,d=h["".concat(c,".").concat(p)]||h[p]||v[p]||o;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},29106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={description:"Execution of smart contracts following an event request"},s="Event evaluation process",i={unversionedId:"discover/event-evaluation-process",id:"discover/event-evaluation-process",title:"Event evaluation process",description:"Execution of smart contracts following an event request",source:"@site/docs/discover/event-evaluation-process.md",sourceDirName:"discover",slug:"/discover/event-evaluation-process",permalink:"/taple-docsite/docs/next/discover/event-evaluation-process",draft:!1,tags:[],version:"current",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{description:"Execution of smart contracts following an event request"},sidebar:"discoverSidebar",previous:{title:"Advanced concepts",permalink:"/taple-docsite/docs/next/discover/advanced"},next:{title:"Event approval process",permalink:"/taple-docsite/docs/next/discover/event-approval-process"}},c={},u=[],l={toc:u};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event-evaluation-process"},"Event evaluation process"),(0,r.kt)("p",null,"The evaluation phase consists of the owner of th subject sending an evaluation request to the evaluators, just after the issuer generated an event request with the event type and its content. Currently, evaluation is only present in Fact type events, in the other types it's skipped. These events affect a certain subject to establish a fact that may or may not modify the subject's state. A context is also sent containing the necessary information for the evaluators to execute the smart contract that contains the evaluation logic for our subject, such as previous state, whether the issuer is the owner of the subject, etc. This is the case because the evaluators do not necessarily have a copy of the subject, so they need this data, which includes everything necessary for the execution of the smart contract."),(0,r.kt)("p",null,"The evaluators are defined by the governance, so they must possess it in order to carry out the evaluation, otherwise they would not have access to the contract, which in turn is stored in the state of the governance."),(0,r.kt)("p",null,"The result of applying the event to the subject in terms of property modification is carried out by the evaluators. They have the ability to compile and execute smart contracts compiled in web assembly."),(0,r.kt)("p",null,"The Fact event request contains the necessary information to execute one of the functions of the contract (or not, in which case a failed evaluation occurs and the subject owner is notified). The response includes whether the evaluation was successful or failed, if it is necessary to go through the approval phase and the JSON patch that, when applied to the subject's state, will produce the state change, as well as the hash of the updated state."),(0,r.kt)("p",null,"The evaluators response is signed by them so that the witnesses can verify that quorum has been reached in the evaluation phase and that the correct evaluators have signed."),(0,r.kt)("p",null,"The evaluators will only carry out the evaluation if the version of the governance that the subject's owner has coincides with that of the evaluator. If it is lower or higher, an appropriate message for each case is sent to the subject's owner."),(0,r.kt)("p",null,"For issuers, when the governance to which the subject is assigned is updated, the process must be restarted from the beginning of the evaluation, whether you were still in the evaluation phase or already in the approval phase. This is because events must be evaluated/approved with the latest version of governance available."),(0,r.kt)("mermaid",{value:"sequenceDiagram\nactor Owner as Owner\nactor Evaluator1 as Evaluator 1\nactor Evaluator2 as Evaluator 2\nactor Evaluator3 as Evaluator 3\n\nOwner->>Evaluator1: Generate Evaluation Request\nOwner->>Evaluator2: Generate Evaluation Request\nOwner->>Evaluator3: Generate Evaluation Request\n\nalt Governance Access Granted and Governance Version Matches\n    Evaluator1->>Evaluator1: Check Governance and Execute Smart Contract\n    Evaluator2->>Evaluator2: Check Governance and Execute Smart Contract\n    Evaluator3->>Evaluator3: Check Governance and Execute Smart Contract\n    alt Evaluation Successful\n        Evaluator1->>Owner: Return Evaluation Response and Evaluator's Signature\n        Evaluator2->>Owner: Return Evaluation Response and Evaluator's Signature\n        Evaluator3->>Owner: Return Evaluation Response and Evaluator's Signature\n    else Evaluation Failed\n        Evaluator1->>Owner: Return Evaluation Response (with failed status) and Evaluator's Signature\n        Evaluator2->>Owner: Return Evaluation Response (with failed status) and Evaluator's Signature\n        Evaluator3->>Owner: Return Evaluation Response (with failed status) and Evaluator's Signature\n    end\nelse Governance Access Denied or Governance Version Mismatch\n    Evaluator1->>Owner: Send Appropriate Message\n    Evaluator2->>Owner: Send Appropriate Message\n    Evaluator3->>Owner: Send Appropriate Message\n    Owner->>Owner: Restart Evaluation Process\nend"}))}v.isMDXComponent=!0}}]);