"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(p,".").concat(h)]||u[h]||v[h]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={description:"Approval process prior to event generation"},i="Event approval process",s={unversionedId:"discover/event-approval-process",id:"version-0.2/discover/event-approval-process",title:"Event approval process",description:"Approval process prior to event generation",source:"@site/versioned_docs/version-0.2/discover/event-approval-process.md",sourceDirName:"discover",slug:"/discover/event-approval-process",permalink:"/taple-docsite/docs/0.2/discover/event-approval-process",draft:!1,tags:[],version:"0.2",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{description:"Approval process prior to event generation"},sidebar:"discoverSidebar",previous:{title:"Event evaluation process",permalink:"/taple-docsite/docs/0.2/discover/event-evaluation-process"},next:{title:"Event validation process",permalink:"/taple-docsite/docs/0.2/discover/event-validation-process"}},p={},c=[],l={toc:c};function v(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-approval-process"},"Event approval process"),(0,o.kt)("p",null,"The approval phase involves asking the approvers to vote for or against the application of an event. This process can be automated but tends to be manual. The response requires interaction with the TAPLE API if it's set to manual, so it requires a user who can interact with it and therefore generally takes longer than the other phases."),(0,o.kt)("p",null,"The approvers are defined by the governance, so they must possess it in order to carry out the evaluation, otherwise they would not have access to the contract, which in turn is stored in the state of the governance."),(0,o.kt)("p",null,"The approvers will only carry out the evaluation if the version of the governance that the subject's owner has coincides with that of the approver. If it is lower or higher, an appropriate message for each case is sent to the subject's owner."),(0,o.kt)("p",null,"The approval process consists of the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The subject owner checks whether the event request requires approval by looking at the response of the evaluators."),(0,o.kt)("li",{parentName:"ul"},"If the request requires it, an approval request is sent to the different approvers."),(0,o.kt)("li",{parentName:"ul"},"Once each approver has the request, they will be able to vote, both for and against, and will send it back to the owner of the subject."),(0,o.kt)("li",{parentName:"ul"},"Every time the owner receives a vote, he will check the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are enough positive votes for the application to be accepted."),(0,o.kt)("li",{parentName:"ul"},"There are so many negative votes that it is impossible to get the application approved."))),(0,o.kt)("li",{parentName:"ul"},"In both cases, the owner will generate an event. In the case that the vote has not been successful, the event will be generated but it will not produce changes in the state of the subject, remaining merely for informational purposes.")),(0,o.kt)("admonition",{title:"Importante",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is important to remember that the subject owner is the only one who can force an effective change on a subject. Therefore, the owner, after the approval process, could decide whether or not to include the event in the chain. This would not follow the standard behavior defined by TAPLE, but it would not break compatibility.")),(0,o.kt)("mermaid",{value:"sequenceDiagram\n    %% Comentarios pendientes a que este la invocaci\xf3n externa\n    %% actor Invocador\n    actor Owner\n    actor Evaluator\n    actor Approver 1\n    actor Approver 2\n    actor Approver 3\n    %% Invocador->>Owner: Submit an event request\n    Note over Evaluator: Evaluation phase\n    alt Need for approval detected\n      Owner->Approver 3: Transmit approval request to all approvers\n      Approver 1--\x3e>Owner: Receive\n      Approver 2--\x3e>Owner: Receive\n      Approver 3--\x3e>Owner: Not receive\n      Note over Owner: Wait\n      Approver 1->>Owner: Vote yes\n      Approver 2->>Owner: vote no\n      Note over Owner: Receive vote request\n      Owner->>Approver 3: Transmit request\n      Approver 3--\x3e>Owner: Receive\n      Note over Owner: Wait\n      Approver 3->>Owner: Vote yes\n      Note over Owner: Receive vote request\n    end\n    alt Positive quorum\n      Owner->>Owner: Generate event and update subject\n    else Negative quorum\n      Owner->>Owner: Generate event\n    end\n    Owner->Approver 3: Event goes to the validation phase"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The information of the votes cast is stored within the ",(0,o.kt)("a",{parentName:"p",href:"/taple-docsite/docs/0.2/discover/events"},"event"),".")))}v.isMDXComponent=!0}}]);