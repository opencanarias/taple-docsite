"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"learn/smart-contracts-programming",id:"version-0.3/learn/smart-contracts-programming",title:"smart-contracts-programming",description:"Programming smart contracts",source:"@site/versioned_docs/version-0.3/learn/smart-contracts-programming.md",sourceDirName:"learn",slug:"/learn/smart-contracts-programming",permalink:"/docs/learn/smart-contracts-programming",draft:!1,tags:[],version:"0.3",lastUpdatedAt:1697193786,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Smart Contracts in TAPLE",permalink:"/docs/learn/smart-contracts"},next:{title:"Governance structure",permalink:"/docs/learn/governance-structure"}},c={},l=[{value:"Programming smart contracts",id:"programming-smart-contracts",level:2},{value:"SDK",id:"sdk",level:2},{value:"Auxiliary structures",id:"auxiliary-structures",level:3},{value:"Your first smart contract",id:"your-first-smart-contract",level:2},{value:"Creating the project",id:"creating-the-project",level:3},{value:"Writing the contract",id:"writing-the-contract",level:3},{value:"Testing your smart contract",id:"testing-your-smart-contract",level:3}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"programming-smart-contracts"},"Programming smart contracts"),(0,r.kt)("h2",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"For the correct development of the contracts it is necessary to use its ",(0,r.kt)("strong",{parentName:"p"},"SDK"),", a project that can be found in the official TAPLE ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opencanarias/taple-sc-rust/tree/main"},"repository"),". The main objective of this project is to abstract the programmer from the interaction with the context of the underlying evaluating machine, making it much easier to obtain the input data, as well as the process of writing the result of the contract."),(0,r.kt)("p",null,"The SDK project can be divided into three sections. On the one hand, a set of functions whose binding occurs at runtime and which are aimed at being able to interact with the evaluating machine, in particular, for reading and writing data to an internal buffer. Additionally, we also distinguish a module that, using the previous functions, is in charge of the serialization and deserialization of the data, as well as of providing the main function of any contract. Finally, we highlight a number of utility functions and structures that can be actively used in the code."),(0,r.kt)("p",null,"Many of the above elements are private, so the user will never have the opportunity to use them. Therefore, in this documentation we will focus on those that are exposed to the user and that the user will be able to actively use in the development of his contracts."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that it is not possible to execute every function or use every type of data in a Web Assembly environment. You should inform yourself about the possibilities of the environment. For example, any interaction with the operating system is disabled, since it is an isolated and secure environment.")),(0,r.kt)("h3",{id:"auxiliary-structures"},"Auxiliary structures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Debug)]\npub struct Context<State, Event> {\n    pub initial_state: State,\n    pub event: Event,\n    pub is_owner: bool,\n}\n")),(0,r.kt)("p",null,"This structure contains the three input data of any contract: the initial or current state of the subject, the incoming event and a flag indicating whether or not the person requesting the event is the owner of the subject. Note the use of generics for the state and the event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Debug)]\npub struct ContractResult<State> {\n    pub final_state: State,\n    pub approval_required: bool,\n    pub success: bool,\n}\n")),(0,r.kt)("p",null,"It contains the result of the execution of the contract, being this a conjunction of the resulting state and two flags that indicate, on the one hand, if the execution has been successful according to the criteria established by the programmer (or if an error has occurred in the data loading); and on the other hand, if the event requires ",(0,r.kt)("a",{parentName:"p",href:"/docs/discover/roles#approver"},"approval")," or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn execute_contract<F, State, Event>(\n    state_ptr: i32,\n    event_ptr: i32,\n    is_owner: i32,\n    callback: F,\n) -> u32\nwhere\n    State: for<'a> Deserialize<'a> + Serialize + Clone,\n    Event: for<'a> Deserialize<'a> + Serialize,\n    F: Fn(&Context<State, Event>, &mut ContractResult<State>);\n")),(0,r.kt)("p",null,"This function is the main function of the SDK and, likewise, the most important one. Specifically, it is in charge of obtaining the input data, data that it obtains from the context that it shares with the evaluating machine. The function, which will initially receive a pointer to each of these data, will be in charge of extracting them from the context and deserializing them to the state and event structures that the contract expects to receive, which can be specified by means of generics. These data, once obtained, are encapsulated in the ",(0,r.kt)("em",{parentName:"p"},"Context")," structure present above and are passed as arguments to a callback function that manages the contract logic, i.e. it knows what to do with the data received. Finally, regardless of whether the execution has been successful or not, the function will take care of writing the result in the context, so that it can be used by the evaluating machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn apply_patch<State: for<'a> Deserialize<'a> + Serialize>(\n    patch_arg: Value,\n    state: &State,\n) -> Result<State, i32>;\n")),(0,r.kt)("p",null,"This is the latest public feature of the SDK and allows to update a state by applying a JSON-PATCH, useful in cases where this technique is considered to update the state."),(0,r.kt)("h2",{id:"your-first-smart-contract"},"Your first smart contract"),(0,r.kt)("h3",{id:"creating-the-project"},"Creating the project"),(0,r.kt)("p",null,"Locate the desired path and/or directories and create a new cargo package using ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo new"),". The project should be a library. Make sure you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.rs")," file and not a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.rs")," file. "),(0,r.kt)("p",null,"Then, include in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Cargo.toml"))," as a dependency the SDK of the contracts and the rest of the dependencies you want from the following list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"serde"),": Versions >=1.0.152 and <2.0.0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"serde_json"),": Versions >=1.0.92 and <2.0.0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"json_patch"),": Versions >=0.2 and <0.3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"thiserror"),": Versions >=1.0.0.0 and <2.0.0.0.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'serde = { version = "=1.0.152", features = ["derive"] }\nserde_json = "=1.0.92"\njson-patch = "=0.2"\nthiserror = "=1.0"\n# Note: Change the tag label to the appropriate one\ntaple-sc-rust = { git = "https://github.com/opencanarias/taple-sc-rust.git", branch = "release-0.3"}\n')),(0,r.kt)("p",null,"The following will specify how to draw up a smart contract, accompanied by a basic example."),(0,r.kt)("h3",{id:"writing-the-contract"},"Writing the contract"),(0,r.kt)("p",null,"Since the compilation will be done by the node, ",(0,r.kt)("strong",{parentName:"p"},"we must write the whole contract in the lib.rs")," file."),(0,r.kt)("p",null,"In our case, we will start the contract by ",(0,r.kt)("strong",{parentName:"p"},"specifying the packages we are going to use"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use serde::{Serialize, Deserialize};\n\nuse taple_sc_rust as sdk;\n")),(0,r.kt)("p",null,"Next, it is necessary to specify the data structure that will represent the state of our subjects as well as the family of events that we will receive. For this example we will assume a very simple case, namely, a state formed by three numbers and a family of events that allows us to modify each of them separately or all of them together."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone)]\nstruct State {\n  pub one: u32,\n  pub two: u32,\n  pub three: u32\n}\n\n#[derive(Serialize, Deserialize)]\nenum StateEvent {\n  ModOne { data: u32 },\n  ModTwo { data: u32 },\n  ModThree { data: u32 },\n  ModAll { one: u32, two: u32, three: u32 }\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The event family will generally be defined as an enumerate, although in practice nothing prevents it from being a structure if required. Regardless of the case, if an enumerate is used, if its variants receive data, these must be specified by means of an anonymous structure and not by means of the tuple syntax."),(0,r.kt)("p",{parentName:"admonition"},"It should also be noted that the events of the family can be subsets of the real events. Thus, as an example, the contract would accept a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"StateEvent::ModOne"))," event that includes more data than the ",(0,r.kt)("em",{parentName:"p"},"data")," attribute. The contract, when executed, will only keep the necessary data, discarding all other data in the deserialization process. This could be used to store information in the string that is not needed for the contract logic.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that the implementation of the ",(0,r.kt)("em",{parentName:"p"},"trait Serialize and Deserialize")," are mandatory to specify for state and events. Additionally, the former must also implement ",(0,r.kt)("em",{parentName:"p"},"Clone"),".")),(0,r.kt)("p",null,"Next we define the ",(0,r.kt)("strong",{parentName:"p"},"contract entry function"),", the equivalent of the ",(0,r.kt)("strong",{parentName:"p"},"main")," function. It is important that this function always has the same name as the one specified here, since it is the identifier with which the evaluating machine will try to execute it, producing an error if it is not found."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[no_mangle]\npub unsafe fn main_function(state_ptr: i32, event_ptr: i32, is_owner: i32) -> u32 {\n    sdk::execute_contract(state_ptr, event_ptr, is_owner, contract_logic)\n}\n")),(0,r.kt)("p",null,"This function must always be accompanied by the attribute ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"#","[no_mangle]"))," and its input and output parameters must also match those of the example. Specifically, this function will receive the pointers to the input data, which will then be processed by the SDK function. As output, a new pointer to the result of the contract is generated, which, as mentioned above, is obtained by the SDK and not by the programmer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modifying the pointer values in this section of the code will have no effect. Pointers are with respect to the shared context, which corresponds to a single buffer per contract execution. Altering the pointer values does not allow the programmer to access arbitrary information either from the evaluating machine or from other contracts.")),(0,r.kt)("p",null,"Finally, we specify the logic of our contract, which can be defined by as many functions as we wish. Preferably a main function will be highlighted, which will be the one to be executed as ",(0,r.kt)("em",{parentName:"p"},"callback")," by the ",(0,r.kt)("em",{parentName:"p"},"execute_contract")," function of the SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn contract_logic(\n  context: &sdk::Context<State, StateEvent>,\n  contract_result: &mut sdk::ContractResult<State>,\n) {\n  let state = &mut contract_result.final_state;\n  match context.event {\n      StateEvent::ModOne { data } => {\n        state.one = data;\n      },\n      StateEvent::ModTwo { data } => {\n        state.two = data;\n      },\n      StateEvent::ModThree { data } => {\n        state.three = data;\n      },\n      StateEvent::ModAll { one, two, three } => {\n        state.one = one;\n        state.two = two;\n        state.three = three;\n      }\n  }\n  contract_result.success = true;\n  contract_result.approval_required = true;\n}\n")),(0,r.kt)("p",null,"This main function receives the contract input data encapsulated in an instance of the ",(0,r.kt)("strong",{parentName:"p"},"Context")," structure of the SDK. It also receives a mutable reference to the contract result containing the final state, originally identical to the initial state, and the ",(0,r.kt)("em",{parentName:"p"},"approval required")," and ",(0,r.kt)("em",{parentName:"p"},"successful execution")," flags. Note how, in addition to modifying the state according to the received event, the previous flags have to be modified. With the first one we will specify that the contract accepts the event and the changes it proposes for the current state of the subject, which will be translated in the SDK by generating a JSON_PATCH with the necessary modifications to transition from the initial state to the obtained one. The second flag, on the other hand, allows us to conditionally indicate whether we consider that the event should be approved or not."),(0,r.kt)("h3",{id:"testing-your-smart-contract"},"Testing your smart contract"),(0,r.kt)("p",null,"Since this is Rust code, we can create a battery of unit tests in the contract code itself to check its performance using the resources of the language itself. It would also be possible to specify them in a different file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn contract_test() {\n  let initial_state = State {\n    one: 1,\n    two: 2,\n    three: 3\n  };\n  let context = sdk::Context {\n    initial_state: initial_state.clone(),\n    event: StateEvent::ModOne { data: 100 },\n    is_owner: false\n  };\n  let mut result = sdk::ContractResult::new(initial_state);\n  contract_logic(&context, &mut result);\n  assert_eq!(result.final_state.one, 100);\n  assert!(result.success);\n  assert!(result.approval_required);\n}\n")),(0,r.kt)("p",null,"As you can see, the only thing you need to do to create a valid test is to manually define an initial state and an incoming event instead of using the SDK executor function, which can only be properly executed by TAPLE. Once the inputs are defined, making a call to the main function of the contract logic should be sufficient."),(0,r.kt)("p",null,"Once the contract is tested, it is ready to be sent to TAPLE as indicated in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/smart-contracts"},"introduction")," section. Note that it is not necessary to send the contract tests to the TAPLE nodes. In fact, sending them will result in a higher byte usage of the encoded file and, consequently, as it is stored in the governance, a higher byte consumption of the governance."))}h.isMDXComponent=!0}}]);