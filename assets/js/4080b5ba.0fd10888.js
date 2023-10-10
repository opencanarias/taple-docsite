"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,v=u["".concat(d,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(v,r(r({ref:t},l),{},{components:n})):a.createElement(v,r({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={description:"Consolidation of the event by the validators"},r="Event validation process",s={unversionedId:"discover/event-validation-process",id:"discover/event-validation-process",title:"Event validation process",description:"Consolidation of the event by the validators",source:"@site/docs/discover/event-validation-process.md",sourceDirName:"discover",slug:"/discover/event-validation-process",permalink:"/taple-docsite/docs/next/discover/event-validation-process",draft:!1,tags:[],version:"current",lastUpdatedAt:1696909591,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{description:"Consolidation of the event by the validators"},sidebar:"discoverSidebar",previous:{title:"Event approval process",permalink:"/taple-docsite/docs/next/discover/event-approval-process"},next:{title:"What's new in TAPLE",permalink:"/taple-docsite/docs/next/discover/whats-new"}},d={},c=[{value:"Proof of validation",id:"proof-of-validation",level:2},{value:"Correct Chain",id:"correct-chain",level:2},{value:"Sequence Diagram",id:"sequence-diagram",level:2}],l={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-validation-process"},"Event validation process"),(0,o.kt)("p",null,"The validation process is the last step before achieving a valid event that can be joined to the subject's chain. The aim of this phase is to ensure the uniqueness of the subject's chain. It is based on the collection of signatures from the validators, which are defined in the governance. It does not produce a change in the event itself, as the signatures are not included in the event, but they are necessary to validate it in the eyes of the witnesses. It is noteworthy that for the uniqueness of the chain to be fully effective, the validation quorum needs to consist of the majority of validators. This is because if not, several chains could be validated with different validators for each one if the sum of the signature percentage for all quorums does not exceed 100%."),(0,o.kt)("h2",{id:"proof-of-validation"},"Proof of validation"),(0,o.kt)("p",null,"What the validators sign is called proof of validation, the event itself is not directly signed. This is done to ensure the privacy of the event's data and at the same time add additional information that allows the validation process to be safer. In turn, when the owners of the subjects send the proof to the validators, it is also signed with the subject's cryptographic material. It has this form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ValidationProof {\n    /// The identifier of the subject being validated.\n    pub subject_id: DigestIdentifier,\n    /// The identifier of the schema used to validate the subject.\n    pub schema_id: String,\n    /// The namespace of the subject being validated.\n    pub namespace: String,\n    /// The name of the subject being validated.\n    pub name: String,\n    /// The identifier of the public key of the subject being validated.\n    pub subject_public_key: KeyIdentifier,\n    /// The identifier of the governance contract associated with the subject being validated.\n    pub governance_id: DigestIdentifier,\n    /// The version of the governance contract that created the subject being validated.\n    pub genesis_governance_version: u64,\n    /// The sequence number of the subject being validated.\n    pub sn: u64,\n    /// The identifier of the previous event in the validation chain.\n    pub prev_event_hash: DigestIdentifier,\n    /// The identifier of the current event in the validation chain.\n    pub event_hash: DigestIdentifier,\n    /// The version of the governance contract used to validate the subject.\n    pub governance_version: u64,\n}\n")),(0,o.kt)("p",null,"Data such as the ",(0,o.kt)("strong",{parentName:"p"},"governance_version"),", which is used to verify that the vote should only be returned if it matches the subject's governance version for the validator, and the ",(0,o.kt)("strong",{parentName:"p"},"subject_public_key")," is the one used to validate the owner's signature of the next proof of validation that reaches the validator."),(0,o.kt)("p",null,"If the validator has the previous proof, they can validate certain aspects, such as the ",(0,o.kt)("strong",{parentName:"p"},"prev_event_hash")," of the new one matches the ",(0,o.kt)("strong",{parentName:"p"},"event_hash")," of the previous one. The validators' database will always store the last proof they signed for each subject. This allows them never to sign two proofs for the same subject_id and sn but with different other data (except for the ",(0,o.kt)("strong",{parentName:"p"},"governance_version"),"). This guarantees the uniqueness of the chain. The ability to change the ",(0,o.kt)("strong",{parentName:"p"},"governance_version")," is due to what we discussed earlier: if a validator receives a proof with a different governance version than theirs, they should not sign it. Therefore, facing updates of the governance in the middle of a validation process, the owner must restart said process, adapting the ",(0,o.kt)("strong",{parentName:"p"},"governance_version")," of the proof to the new one."),(0,o.kt)("p",null,"Another interesting point is the case where validators do not have the previous proof to validate the new one. There is no scenario where validators always have the previous proof, since even when the quorum requires 100% of the signatures, if a change in governance adds a new validator, they will not have the previous proof. This is why when a validation is requested, it should send:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ValidationEvent {\n    pub proof: ValidationProof,\n    pub subject_signature: Signature,\n    pub previous_proof: Option<ValidationProof>,\n    pub prev_event_validation_signatures: HashSet<Signature>,\n}\n")),(0,o.kt)("p",null,"The previous proof is optional because it does not exist in the case of event 0. The hashset of signatures includes all the signatures of the validators that allow the previous proof to have reached quorum. With this data, the validator can trust the previous proof sent to them if they do not previously have it."),(0,o.kt)("p",null,"The communication to request validation and to send validation is direct between the owner and the validator and is carried out asynchronously."),(0,o.kt)("h2",{id:"correct-chain"},"Correct Chain"),(0,o.kt)("p",null,"As we mentioned earlier, the validation phase focuses on achieving a unique chain, but not on whether this chain is correct. This responsibility ultimately falls on the witnesses, who are the subject's stakeholders. The validators do not need to have the subject's updated chain to validate the next proof, as the proofs are self-contained and at most require information from the previous proof. But nothing prevents a malicious owner from sending erroneous data in the proof, the validators will not realize it because they do not have the necessary context and will sign as if everything was correct. The witnesses, however, do have the updated subject, so they can detect this kind of tricks. If something like this were to happen, the witnesses are the ones responsible for reporting it and the subject would be blocked."),(0,o.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,o.kt)("mermaid",{value:"sequenceDiagram\nactor Owner as Owner\nactor Validator1 as Validator 1\nactor Validator2 as Validator 2\nactor Validator3 as Validator 3\nactor Witness as Witness\n\nOwner->>Validator1: Send ValidationEvent\nOwner->>Validator2: Send ValidationEvent\nOwner->>Validator3: Send ValidationEvent\n\nalt Governance Version Matches and Proofs are Valid\n    Validator1->>Validator1: Inspect Governance, Check Last Proof and Signatures\n    Validator2->>Validator2: Inspect Governance, Check Last Proof and Signatures\n    Validator3->>Validator3: Inspect Governance, Check Last Proof and Signatures\n    Validator1->>Owner: Return ValidationEventResponse with Validator's Signature\n    Validator2->>Owner: Return ValidationEventResponse with Validator's Signature\n    Validator3->>Owner: Return ValidationEventResponse with Validator's Signature\nelse Governance Version Mismatch or Proofs are Invalid\n    Validator1->>Owner: Send Appropriate Message (if applicable)\n    Validator2->>Owner: Send Appropriate Message (if applicable)\n    Validator3->>Owner: Send Appropriate Message (if applicable)\n    Note over Validator1,Validator3: End Process (No Response)\nend\n\nOwner->>Owner: Collect Enough Validator Signatures\nOwner->>Witness: Create Event in Ledger and Distribute"}))}h.isMDXComponent=!0}}]);