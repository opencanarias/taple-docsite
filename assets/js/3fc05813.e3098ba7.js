"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="Governance structure",s={unversionedId:"learn/governance-structure",id:"version-0.3/learn/governance-structure",title:"Governance structure",description:"In this page we will describe the governance structure and configuration. If you want to know more about what governance visit the Governance page.",source:"@site/versioned_docs/version-0.3/learn/governance-structure.md",sourceDirName:"learn",slug:"/learn/governance-structure",permalink:"/taple-docsite/docs/learn/governance-structure",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1696859454,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"smart-contracts-programming",permalink:"/taple-docsite/docs/learn/smart-contracts-programming"},next:{title:"Governance structure",permalink:"/taple-docsite/docs/learn/governance-structure"}},l={},c=[{value:"Members",id:"members",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Roles",id:"roles",level:2},{value:"Policies",id:"policies",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"governance-structure"},"Governance structure"),(0,r.kt)("p",null,"In this page we will describe the governance structure and configuration. If you want to know more about what governance visit the ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/governance"},"Governance")," page."),(0,r.kt)("admonition",{title:"Governance example",type:"info"},(0,r.kt)("details",null,(0,r.kt)("summary",null," Click to look a full governance example. Each section will be discussed separately in the following sections. "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"members": [\n  {\n    "name": "Company1",\n    "id": "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y"\n  },\n  {\n    "name": "Company2",\n    "id": "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"\n  }\n],\n"schemas": [\n  {\n    "id": "Test",\n    "schema": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": ["temperature", "location"],\n      "properties": {\n        "temperatura": {\n          "type": "integer"\n        },\n        "localizacion": {\n          "type": "string"\n        }\n      }\n    },\n    "initial_value": {\n      "temperatura": 0,\n      "localizacion": ""\n    },\n    "contract": {\n      "raw": "dXNlIHNlcmRlOjp7U2VyaWFsaXplLCBEZXNlcmlhbGl6ZX07Cgptb2Qgc2RrOwoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgU3RhdGUgewogIHB1YiBvbmU6IHUzMiwKICBwdWIgdHdvOiB1MzIsCiAgcHViIHRocmVlOiB1MzIKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gU3RhdGVFdmVudCB7CiAgTW9kT25lIHsgZGF0YTogdTMyIH0sCiAgTW9kVHdvIHsgZGF0YTogdTMyIH0sCiAgTW9kVGhyZWUgeyBkYXRhOiB1MzIgfSwKICBNb2RBbGwgeyBvbmU6IHUzMiwgdHdvOiB1MzIsIHRocmVlOiB1MzIgfQp9CgojW25vX21hbmdsZV0KcHViIHVuc2FmZSBmbiBtYWluX2Z1bmN0aW9uKHN0YXRlX3B0cjogaTMyLCBldmVudF9wdHI6IGkzMiwgaXNfb3duZXI6IGkzMikgLT4gdTMyIHsKICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQp9CgpmbiBjb250cmFjdF9sb2dpYygKICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwKICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sCikgewogIGxldCBzdGF0ZSA9ICZtdXQgY29udHJhY3RfcmVzdWx0LmZpbmFsX3N0YXRlOwogIG1hdGNoIGNvbnRleHQuZXZlbnQgewogICAgICBTdGF0ZUV2ZW50OjpNb2RPbmUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IGRhdGE7CiAgICAgIH0sCiAgICAgIFN0YXRlRXZlbnQ6Ok1vZFR3byB7IGRhdGEgfSA9PiB7CiAgICAgICAgc3RhdGUudHdvID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kVGhyZWUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLnRocmVlID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kQWxsIHsgb25lLCB0d28sIHRocmVlIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IG9uZTsKICAgICAgICBzdGF0ZS50d28gPSB0d287CiAgICAgICAgc3RhdGUudGhyZWUgPSB0aHJlZTsKICAgICAgfQogIH0KICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7Cn0="\n    }\n  }\n],\n  "policies": [\n    {\n      "id": "Test",\n      "validate": {\n        "quorum": {\n          "PROCENTAJE": 0.5\n        }\n      },\n      "evaluate": {\n        "quorum": "MAJORITY"\n      },\n      "approve": {\n        "quorum": {\n          "FIXED": 1\n        }\n      }\n    },\n    {\n      "id": "governance",\n      "validate": {\n        "quorum": {\n          "PROCENTAJE": 0.5\n        }\n      },\n      "evaluate": {\n        "quorum": "MAJORITY"\n      },\n      "approve": {\n        "quorum": {\n          "FIXED": 1\n        }\n      }\n    }\n  ],\n  "roles": [\n    {\n      "who": "MEMBERS",\n      "namespace": "",\n      "role": "CREATOR",\n      "schema": {\n        "ID": "Test"\n      }\n    },\n    {\n      "who": "MEMBERS",\n      "namespace": "",\n      "role": "WITNESS",\n      "schema": {\n        "ID": "Test"\n      }\n    },\n    {\n      "who": "MEMBERS",\n      "namespace": "",\n      "role": "EVALUATOR",\n      "schema": "ALL"\n    },\n    {\n      "who": {\n        "NAME": "Company1"\n      },\n      "namespace": "",\n      "role": "APPROVER",\n      "schema": "ALL"\n    }\n  ]\n}\n')))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("p",null,"This property allows us to define the conditions that must be met in the different phases of generating an event that requires the participation of different members, such as approval, evaluation, and validation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),". A short, colloquial name by which the node is known in the network. It serves no functionality other than being descriptive. It does not act as a unique identifier within the governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),". Corresponds to the controller-id of the node. Acts as a unique ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/identity#identifiers"},"identifier")," within the network and corresponds to the node's cryptographic public key.")),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"Defines the list of ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/schemas"},"schemas")," that are allowed to be used in the subjects associated with governance. Each scheme includes the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),". Schema unique identifier."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"schema"),". Schema description in ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/learn/json-schema"},"JSON-Schema")," format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initial_value"),". JSON Object that represents the initial state of a newly created subject for this schema."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"contract"),". The compiled ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/smart-contracts"},"contract")," in Raw String base 64.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/learn/json-schema"},'"Creating a JSON-Schema"')," page for more information about JSON-Schema.")),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"In this section, we define who are in charge of giving their consent for the event to progress through the different phases of its life cycle (evaluation, approval, and validation), and on the other hand, it also serves to indicate who can perform certain actions (creation of subjects and external invocation)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"who"),". Indicates who the Role affects, it can be a specific id (public key), a member of the governance identified by their name, all members, both members and outsiders, or only outsiders.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),"{ID}: Public Key of the member."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NAME"),"{NAME}: Name of the member."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MEMBERS"),": All members."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ALL"),": All members and externs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOT_MEMBERS"),": All externs."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace"),". It makes the role in question only valid if it matches the namespace of the subject for which the list of signatories or permissions is being obtained. If it is not present or it's empty, it's assumed to apply universally, as if it were the wildcard *. For the time being, we are not supporting complex wildcards, but implicitly, if we set a namespace, it encompasses everything below it. For instance:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"open is equivalent to open.",(0,r.kt)("em",{parentName:"li"},", but not to open")),(0,r.kt)("li",{parentName:"ul"},"open.dev is equivalent to open.dev.",(0,r.kt)("em",{parentName:"li"},", but not to open.dev")),(0,r.kt)("li",{parentName:"ul"},"If it's empty, it equates to everything, that is, *."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"role"),". Indicates what phase it affects:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VALIDATOR"),": For the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/event-validation-process"},"validation")," phase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CREATOR"),": Indicates who can create subjects of this type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ISSUER"),": Indicates who can invoke the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/build/assets-traceability/external-invocations"},"external invocation")," of this type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WITNESS"),": Indicates who are the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/glossary#witness"},"witness")," of the subject."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"APPROVER"),": Indicates who are the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/glossary#Approver"},"approvators")," of the subject. Required for the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/event-approval-process"},"approval phase"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EVALUATOR"),": Indicates who are the evaluators of the subject. Required for the ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/event-evaluation-process"},"evaluation phase"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"schema"),". Indicates which ",(0,r.kt)("a",{parentName:"li",href:"/taple-docsite/docs/discover/schemas"},"schemas")," are affected by the Role. They can be specified by their id, all or those that are not governance.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),"{ID}: Schema unique identifier."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOT_GOVERNANCE"),": All schemas except governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ALL"),": All schemas.")))),(0,r.kt)("h2",{id:"policies"},"Policies"),(0,r.kt)("p",null,"This property defines the permissions of the users previously defined in the members section, granting them roles with respect to the ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/discover/schemas"},"schemas")," they have defined. Policies are defined independently for each scheme defined in governance."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"approve"),". Defines who the approvators are for the subjects that are created with that schema. Also, the quorum required to consider an event as approved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"evaluate"),". Defines who the evaluators are for the subjects that are created with that schema. Also, the quorum required to consider an event as evaluated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"validate"),". Defines who the validators are for the subjects that are created with that schema. Also, the quorum required to consider an event as validated.")),(0,r.kt)("p",null,"What these data define is the type of ",(0,r.kt)("strong",{parentName:"p"},"quorum")," that must be reached for the event to pass this phase. There are 4 types of quorum:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAJORITY"),": This is the simplest one, it means that the majority, that is, more than 50% of the voters must sign the petition. It always rounds up, for example, in the case where there are 4 voters, the MAJORITY quorum would be reached when 3 give their signature."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FIXED"),"{fixed}: It's pretty straightforward, it means that a fixed number of voters must sign the petition. For example, if a FIXED quorum of 3 is specified, this quorum will be reached when 3 voters have signed the petition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PERCENTAGE"),"{percentage}: This is a quorum that is calculated based on a percentage of the voters. For example, if a PERCENTAGE quorum of 0.5 is specified, this quorum will be reached when 50% of the voters have signed the petition. It always rounds up.")),(0,r.kt)("p",null,"In the event that a policy does not resolve for any member it will be returned to the governance owner. This allows, for example, that after the creation of the governance, when there are no declared members yet, the owner can evaluate, approve and validate the changes."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is necessary to specify the permissions of all the schemes that are defined, there is no default assignment. Due to this, it is also necessary to specify the permissions of the governance scheme.")))}m.isMDXComponent=!0}}]);