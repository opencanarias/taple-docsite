"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={description:"JSON Schema specification and examples"},s="Learn JSON Schema",o={unversionedId:"learn/json-schema",id:"learn/json-schema",title:"Learn JSON Schema",description:"JSON Schema specification and examples",source:"@site/docs/learn/json-schema.md",sourceDirName:"learn",slug:"/learn/json-schema",permalink:"/docs/next/learn/json-schema",draft:!1,tags:[],version:"current",lastUpdatedAt:1696858823,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{description:"JSON Schema specification and examples"},sidebar:"learnSidebar",previous:{title:"TAPLE Tools",permalink:"/docs/next/learn/client-tools"},next:{title:"Smart Contracts in TAPLE",permalink:"/docs/next/learn/smart-contracts"}},l={},c=[{value:"JSON Schema specification",id:"json-schema-specification",level:2},{value:"Creating a JSON-Schema",id:"creating-a-json-schema",level:2},{value:"Starting the schema",id:"starting-the-schema",level:3},{value:"Defining the properties",id:"defining-the-properties",level:3},{value:"Going deeper with properties",id:"going-deeper-with-properties",level:3},{value:"Nesting data structures",id:"nesting-data-structures",level:3},{value:"Taking a look at data for our defined JSON Schema",id:"taking-a-look-at-data-for-our-defined-json-schema",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"learn-json-schema"},"Learn JSON Schema"),(0,i.kt)("h2",{id:"json-schema-specification"},"JSON Schema specification"),(0,i.kt)("p",null,"The JSON Schema ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html"},"specification")," is in ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/specification-links.html"},"DRAFT status in the IETF"),", however, it is widely used today and is practically considered a de facto standard."),(0,i.kt)("p",null,"JSON-Schema establishes a set of rules that model and validate a data structure. The following example defines a schema that models a simple data structure with 2 fields: id and value. It is also indicated that the id is mandatory and that no additional fields are allowed. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "additionalProperties": false,\n  "required": [\n    "id"\n  ],\n  "properties": {\n    "id": {"type":"string"},\n    "value": {"type":"integer"}\n  }\n}\n')),(0,i.kt)("admonition",{title:"Valid JSON Object",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "id_1",\n    "value": 23\n}\n'))),(0,i.kt)("admonition",{title:"Invalid JSON Objects",type:"danger"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "value": 3 // id is not defined and is mandatory\n}\n')),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "id_3",\n    "value": 3,\n    "count": 5    // additional properties are not allowed\n}\n'))),(0,i.kt)("admonition",{title:"JSON Schema online validator",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can test this behavior using this ",(0,i.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/s/oyxObQeM"},"online and interactive JSON Schema validator"),".")),(0,i.kt)("h2",{id:"creating-a-json-schema"},"Creating a JSON-Schema"),(0,i.kt)("p",null,"The following example is by no means definitive of all the value JSON Schema can provide. For this you will need to go deep into the specification itself. Learn more at ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/specification.html"},"json schema specification."),"."),(0,i.kt)("p",null,"Let's pretend we're interacting with a JSON based car registration. This registration has a car which has:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An manufacturer identifier: ",(0,i.kt)("inlineCode",{parentName:"li"},"chassisNumber")),(0,i.kt)("li",{parentName:"ul"},"Identification of country of registration: ",(0,i.kt)("inlineCode",{parentName:"li"},"licensePlate")),(0,i.kt)("li",{parentName:"ul"},"Number of kilometers driven: ",(0,i.kt)("inlineCode",{parentName:"li"},"mileage")),(0,i.kt)("li",{parentName:"ul"},"An optional set of tags: ",(0,i.kt)("inlineCode",{parentName:"li"},"tags"),".")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chassisNumber": 72837362,\n  "licensePlate": "8256HYN",\n  "mileage": 60000,\n  "tags": [ "semi-new", "red" ]\n}\n')),(0,i.kt)("p",null,"While generally straightforward, the example leaves some open questions. Here are just a few of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is ",(0,i.kt)("inlineCode",{parentName:"li"},"chassisNumber"),"?"),(0,i.kt)("li",{parentName:"ul"},"Is ",(0,i.kt)("inlineCode",{parentName:"li"},"licensePlate")," required?"),(0,i.kt)("li",{parentName:"ul"},"Can the ",(0,i.kt)("inlineCode",{parentName:"li"},"mileage")," be less than zero (0)?"),(0,i.kt)("li",{parentName:"ul"},"Are all of the ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," string values?")),(0,i.kt)("p",null,"When you're talking about a data format, you want to have metadata about what keys mean, including the valid inputs for those keys. ",(0,i.kt)("strong",{parentName:"p"},"JSON Schema")," is a proposed IETF standard how to answer those questions for data."),(0,i.kt)("h3",{id:"starting-the-schema"},"Starting the schema"),(0,i.kt)("p",null,"To start a schema definition, let's begin with a basic JSON schema."),(0,i.kt)("p",null,"We start with four properties called ",(0,i.kt)("strong",{parentName:"p"},"keywords")," which are expressed as ",(0,i.kt)("a",{parentName:"p",href:"https://www.json.org/"},"JSON")," keys."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Yes. the standard uses a JSON data document to describe data documents, most often that are also JSON data documents but could be in any number of other content types like ",(0,i.kt)("inlineCode",{parentName:"p"},"text/xml"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.1.1"},(0,i.kt)("inlineCode",{parentName:"a"},"$schema"))," keyword states that this schema is written according to a specific draft of the standard and used for a variety of reasons, primarily version control."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.2.1"},(0,i.kt)("inlineCode",{parentName:"a"},"$id"))," keyword defines a URI for the schema, and the base URI that other URI references within the schema are resolved against."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))," and ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1"},(0,i.kt)("inlineCode",{parentName:"a"},"description"))," annotation keywords are descriptive only. They do not add constraints to the data being validated. The intent of the schema is stated with these two keywords."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.1.1"},(0,i.kt)("inlineCode",{parentName:"a"},"type"))," validation keyword defines the first constraint on our JSON data and in this case it has to be a JSON Object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object"\n}\n')),(0,i.kt)("p",null,"We introduce the following pieces of terminology when we start the schema:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.1.1"},"Schema Keyword"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"$schema")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"$id"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1"},"Schema Annotations"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.1.1"},"Validation Keyword"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),".")),(0,i.kt)("h3",{id:"defining-the-properties"},"Defining the properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"chassisNumber")," is a numeric value that uniquely identifies a car. Since this is the canonical identifier for a var, it doesn't make sense to have a car without one, so it is required."),(0,i.kt)("p",null,"In JSON Schema terms, we update our schema to add:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-core.html#section-10.3.2.1"},(0,i.kt)("inlineCode",{parentName:"a"},"properties"))," validation keyword."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"chassisNumber")," key.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," schema annotation and ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," validation keyword is noted -- we covered both of these in the previous section."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.5.3"},(0,i.kt)("inlineCode",{parentName:"a"},"required"))," validation keyword listing ",(0,i.kt)("inlineCode",{parentName:"li"},"chassisNumber"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object",\n  "properties": {\n    "chassisNumber": {\n      "description": "Manufacturer\'s serial number",\n      "type": "integer"\n    }\n  },\n  "required": [ "chassisNumber" ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"licensePlate")," is a string value that acting as a secondary identifier. Since there isn't a car without a registration it also is required."),(0,i.kt)("li",{parentName:"ul"},"Since the ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," validation keyword is an array of strings we can note multiple keys as required; We now include ",(0,i.kt)("inlineCode",{parentName:"li"},"licensePlate"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object",\n  "properties": {\n    "chassisNumber": {\n      "description": "Manufacturer\'s serial number",\n      "type": "integer"\n    },\n    "licensePlate": {\n      "description": "Identification of country of registration",\n      "type": "string"\n    }\n  },\n  "required": [ "chassisNumber", "licensePlate" ]\n}\n')),(0,i.kt)("h3",{id:"going-deeper-with-properties"},"Going deeper with properties"),(0,i.kt)("p",null,"According to the car registry, they cannot have negative mileage."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"mileage")," key is added with the usual ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," schema annotation and ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," validation keywords covered previously. It is also included in the array of keys defined by the ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," validation keyword."),(0,i.kt)("li",{parentName:"ul"},"We specify that the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"mileage")," must be greater than or equal to zero using the ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.2.5"},(0,i.kt)("inlineCode",{parentName:"a"},"minimum"))," validation keyword.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object",\n  "properties": {\n    "chassisNumber": {\n      "description": "Manufacturer\'s serial number",\n      "type": "integer"\n    },\n    "licensePlate": {\n      "description": "Identification of country of registration",\n      "type": "string"\n    },\n    "mileage": {\n      "description": "Number of kilometers driven",\n      "type": "number",\n      "minimum": 0\n    }\n  },\n  "required": [ "chassisNumber", "licensePlate", "mileage" ]\n}\n')),(0,i.kt)("p",null,"Next, we come to the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," key."),(0,i.kt)("p",null,"The car registry has established the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there are tags there must be at least one tag,"),(0,i.kt)("li",{parentName:"ul"},"All tags must be unique; no duplication within a single car."),(0,i.kt)("li",{parentName:"ul"},"All tags must be text."),(0,i.kt)("li",{parentName:"ul"},"Tags are nice but they aren't required to be present.")),(0,i.kt)("p",null,"Therefore:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," key is added with the usual annotations and keywords."),(0,i.kt)("li",{parentName:"ul"},"This time the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," validation keyword is ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),"."),(0,i.kt)("li",{parentName:"ul"},"We introduce the ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-core.html#section-10.3.1.2"},(0,i.kt)("inlineCode",{parentName:"a"},"items"))," validation keyword so we can define what appears in the array. In this case: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," values via the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," validation keyword."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.4.2"},(0,i.kt)("inlineCode",{parentName:"a"},"minItems"))," validation keyword is used to make sure there is at least one item in the array."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.4.3"},(0,i.kt)("inlineCode",{parentName:"a"},"uniqueItems"))," validation keyword notes all of the items in the array must be unique relative to one another."),(0,i.kt)("li",{parentName:"ul"},"We did not add this key to the ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," validation keyword array because it is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object",\n  "properties": {\n    "chassisNumber": {\n      "description": "Manufacturer\'s serial number",\n      "type": "integer"\n    },\n    "licensePlate": {\n      "description": "Identification of country of registration",\n      "type": "string"\n    },\n    "mileage": {\n      "description": "Number of kilometers driven",\n      "type": "number",\n      "minimum": 0\n    },\n    "tags": {\n      "description": "Tags for the car",\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "minItems": 1,\n      "uniqueItems": true\n    }\n  },\n  "required": [ "chassisNumber", "licensePlate", "mileage" ]\n}\n')),(0,i.kt)("h3",{id:"nesting-data-structures"},"Nesting data structures"),(0,i.kt)("p",null,"Up until this point we've been dealing with a very flat schema -- only one level. This section demonstrates nested data structures."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"dimensions")," key is added using the concepts we've previously discovered. Since the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," validation keyword is ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," we can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," validation keyword to define a nested data structure.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We omitted the ",(0,i.kt)("inlineCode",{parentName:"li"},"description")," annotation keyword for brevity in the example. While it's usually preferable to annotate thoroughly in this case the structure and key names are fairly familiar to most developers."))),(0,i.kt)("li",{parentName:"ul"},"You will note the scope of the ",(0,i.kt)("inlineCode",{parentName:"li"},"required")," validation keyword is applicable to the dimensions key and not beyond.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://example.com/car.schema.json",\n  "title": "Car",\n  "description": "A registered car",\n  "type": "object",\n  "properties": {\n    "chassisNumber": {\n      "description": "Manufacturer\'s serial number",\n      "type": "integer"\n    },\n    "licensePlate": {\n      "description": "Identification of country of registration",\n      "type": "string"\n    },\n    "mileage": {\n      "description": "Number of kilometers driven",\n      "type": "number",\n      "minimum": 0\n    },\n    "tags": {\n      "description": "Tags for the car",\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "minItems": 1,\n      "uniqueItems": true\n    },\n    "dimensions": {\n      "type": "object",\n      "properties": {\n        "length": {\n          "type": "number"\n        },\n        "width": {\n          "type": "number"\n        },\n        "height": {\n          "type": "number"\n        }\n      },\n      "required": [ "length", "width", "height" ]\n    }\n  },\n  "required": [ "chassisNumber", "licensePlate", "mileage" ]\n}\n')),(0,i.kt)("h3",{id:"taking-a-look-at-data-for-our-defined-json-schema"},"Taking a look at data for our defined JSON Schema"),(0,i.kt)("p",null,"We've certainly expanded on the concept of a car since our earliest sample data (scroll up to the top). Let's take a look at data which matches the JSON Schema we have defined."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n  {\n    "chassisNumber": 1,\n    "licensePlate": "8256HYN",\n    "mileage": 60000,\n    "tags": [ "semi-new", "red" ],\n    "dimensions": {\n      "length": 4.005,\n      "width": 1.932,\n      "height": 1.425\n    }\n  }\n')),(0,i.kt)("admonition",{title:"Attribution",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This tutorial is based on ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},'"Getting Started Step-By-Step"')," JSON-Schema tutorial. If you want to learn more about JSON-Schema, visit the ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON-Schema website")," for the original tutorial and other resources.")))}m.isMDXComponent=!0}}]);