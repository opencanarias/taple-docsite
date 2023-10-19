"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={},o="Basic usage",s={unversionedId:"learn/core-usage",id:"learn/core-usage",title:"Basic usage",description:"TAPLE Core exposes a Taple object that represents the node to be started. To build this object you need to define a number of additional configurations and provide a database implementation that meets the needs of TAPLE Core. TAPLE Core includes an in-memory database implementation for testing but without persistence capability. TAPLE Client includes an implementation based on LevelDB.",source:"@site/docs/learn/core-usage.md",sourceDirName:"learn",slug:"/learn/core-usage",permalink:"/taple-docsite/docs/next/learn/core-usage",draft:!1,tags:[],version:"current",lastUpdatedAt:1697703292,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{},sidebar:"learnSidebar",previous:{title:"Core Architecture",permalink:"/taple-docsite/docs/next/learn/core-architecture"},next:{title:"FFI",permalink:"/taple-docsite/docs/next/learn/core-ffi"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"TAPLE Core exposes a Taple object that represents the node to be started. To build this object you need to define a number of additional configurations and provide a database implementation that meets the needs of TAPLE Core. TAPLE Core includes an in-memory database implementation for testing but without persistence capability. TAPLE Client includes an implementation based on ",(0,r.kt)("a",{parentName:"p",href:"/taple-docsite/docs/next/learn/taple-client#database"},"LevelDB"),". "),(0,r.kt)("p",null,"Once we have built our Taple object, we can interact with it through 2 mechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an asynchronous API with which to send requests to the node;"),(0,r.kt)("li",{parentName:"ul"},"and a notification channel to receive information about what happens in the node itself, for example, when an event is confirmed. ")),(0,r.kt)("p",null,"The following example shows a minimal example of an application using TAPLE Core. This application is limited to starting a single node and creating a governance subject locally. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::str::FromStr;\n\nuse taple_core::crypto;\nuse taple_core::crypto::Ed25519KeyPair;\nuse taple_core::crypto::KeyGenerator;\nuse taple_core::crypto::KeyMaterial;\nuse taple_core::get_default_settings;\nuse taple_core::request::StartRequest;\nuse taple_core::signature::Signature;\nuse taple_core::signature::Signed;\nuse taple_core::ApiModuleInterface;\nuse taple_core::Derivable;\nuse taple_core::DigestIdentifier;\nuse taple_core::EventRequest;\nuse taple_core::KeyDerivator;\nuse taple_core::KeyIdentifier;\nuse taple_core::MemoryManager;\nuse taple_core::Notification;\nuse taple_core::Taple;\n\n/**\n * Basic usage of TAPLE Core. It includes:\n * - Node inicialization with on-memory DB (only for testing purpouse)\n * - Minimal governance creation example\n */\n#[tokio::main]\nasync fn main() -> Result<(), ()> {\n    // Generate ramdom node cryptographic material and ID\n    let node_key_pair = crypto::KeyPair::Ed25519(Ed25519KeyPair::from_seed(&[]));\n    let node_identifier = KeyIdentifier::new(\n        node_key_pair.get_key_derivator(),\n        &node_key_pair.public_key_bytes(),\n    );\n\n    // Build and start up the TAPLE node\n    let mut settings = get_default_settings();\n    settings.node.secret_key = Some(hex::encode(&node_key_pair.secret_key_bytes()));\n\n    let mut taple = Taple::new(settings, MemoryManager::new());\n    let mut notifier = taple.get_notification_handler();\n    let shutdown_manager = taple.get_shutdown_manager();\n    let api = taple.get_api();\n\n    taple.start().await.expect("TAPLE started");\n\n    // Create a minimal governance\n    // Compose and sign the subject creation request\n    let new_key = api\n        .add_keys(KeyDerivator::Ed25519)\n        .await\n        .expect("Error getting server response");\n\n    let create_subject_request = EventRequest::Create(StartRequest {\n        governance_id: DigestIdentifier::default(),\n        name: "".to_string(),\n        namespace: "".to_string(),\n        schema_id: "governance".to_string(),\n        public_key: new_key,\n    });\n\n    let signed_request = Signed::<EventRequest> {\n        content: create_subject_request.clone(),\n        signature: Signature::new(&create_subject_request, node_identifier, &node_key_pair)\n            .unwrap(),\n    };\n\n    // Send the signed request to the node\n    let _request_id = api.external_request(signed_request).await.unwrap();\n\n    // Wait until notification of subject creation\n    let subject_id =\n        if let Notification::NewSubject { subject_id } = notifier.receive().await.unwrap() {\n            subject_id\n        } else {\n            panic!("Unexpected notification");\n        };\n\n    // Get the new subject data\n    let subject_id =\n        DigestIdentifier::from_str(&subject_id).expect("DigestIdentifier from str failed");\n\n    let subject = api.get_subject(subject_id.clone()).await.expect(&format!(\n        "Error getting subject content with id: {}",\n        subject_id.to_str()\n    ));\n\n    println!("{:#?}", subject);\n\n    // Shutdown the TAPLE node\n    shutdown_manager.shutdown().await;\n\n    Ok(())\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The complete example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opencanarias/taple-core"},"TAPLE Core repository"))))}p.isMDXComponent=!0}}]);