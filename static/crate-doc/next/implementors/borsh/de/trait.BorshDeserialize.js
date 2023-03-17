(function() {var implementors = {
"taple_core":[["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/identifier/derive/digest/enum.DigestDerivator.html\" title=\"enum taple_core::identifier::derive::digest::DigestDerivator\">DigestDerivator</a>"],["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/identifier/derive/enum.KeyDerivator.html\" title=\"enum taple_core::identifier::derive::KeyDerivator\">KeyDerivator</a>"],["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/identifier/derive/enum.SignatureDerivator.html\" title=\"enum taple_core::identifier::derive::SignatureDerivator\">SignatureDerivator</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/identifier/derive/digest/enum.DigestDerivator.html\" title=\"enum taple_core::identifier::derive::digest::DigestDerivator\">DigestDerivator</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u8.html\">u8</a>&gt;: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u8.html\">u8</a>&gt;: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/identifier/derive/enum.KeyDerivator.html\" title=\"enum taple_core::identifier::derive::KeyDerivator\">KeyDerivator</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/identifier/struct.SignatureIdentifier.html\" title=\"struct taple_core::identifier::SignatureIdentifier\">SignatureIdentifier</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/identifier/derive/enum.SignatureDerivator.html\" title=\"enum taple_core::identifier::derive::SignatureDerivator\">SignatureDerivator</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u8.html\">u8</a>&gt;: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/enum.Acceptance.html\" title=\"enum taple_core::Acceptance\">Acceptance</a>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/struct.ApprovalResponse.html\" title=\"struct taple_core::ApprovalResponse\">ApprovalResponse</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/struct.ApprovalResponseContent.html\" title=\"struct taple_core::ApprovalResponseContent\">ApprovalResponseContent</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.SignatureIdentifier.html\" title=\"struct taple_core::identifier::SignatureIdentifier\">SignatureIdentifier</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/struct.ApprovalResponseContent.html\" title=\"struct taple_core::ApprovalResponseContent\">ApprovalResponseContent</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/enum.Acceptance.html\" title=\"enum taple_core::Acceptance\">Acceptance</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;TimeStamp: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/struct.Event.html\" title=\"struct taple_core::Event\">Event</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/event_content/struct.EventContent.html\" title=\"struct taple_core::event_content::EventContent\">EventContent</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_content/struct.Metadata.html\" title=\"struct taple_core::event_content::Metadata\">Metadata</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_content/struct.EventContent.html\" title=\"struct taple_core::event_content::EventContent\">EventContent</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/event_request/struct.EventRequest.html\" title=\"struct taple_core::event_request::EventRequest\">EventRequest</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/event_content/struct.Metadata.html\" title=\"struct taple_core::event_content::Metadata\">Metadata</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.bool.html\">bool</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/event_request/enum.RequestPayload.html\" title=\"enum taple_core::event_request::RequestPayload\">RequestPayload</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_request/struct.CreateRequest.html\" title=\"struct taple_core::event_request::CreateRequest\">CreateRequest</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/event_request/enum.RequestPayload.html\" title=\"enum taple_core::event_request::RequestPayload\">RequestPayload</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_request/struct.StateRequest.html\" title=\"struct taple_core::event_request::StateRequest\">StateRequest</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/event_request/enum.RequestPayload.html\" title=\"enum taple_core::event_request::RequestPayload\">RequestPayload</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"enum\" href=\"taple_core/event_request/enum.EventRequestType.html\" title=\"enum taple_core::event_request::EventRequestType\">EventRequestType</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/event_request/struct.CreateRequest.html\" title=\"struct taple_core::event_request::CreateRequest\">CreateRequest</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/event_request/struct.StateRequest.html\" title=\"struct taple_core::event_request::StateRequest\">StateRequest</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_request/struct.EventRequest.html\" title=\"struct taple_core::event_request::EventRequest\">EventRequest</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/event_request/enum.EventRequestType.html\" title=\"enum taple_core::event_request::EventRequestType\">EventRequestType</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;TimeStamp: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"struct\" href=\"taple_core/struct.ApprovalResponse.html\" title=\"struct taple_core::ApprovalResponse\">ApprovalResponse</a>&gt;: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/event_request/struct.RequestData.html\" title=\"struct taple_core::event_request::RequestData\">RequestData</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"taple_core/event_request/enum.EventRequestType.html\" title=\"enum taple_core::event_request::EventRequestType\">EventRequestType</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;TimeStamp: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.68.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.68.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u64.html\">u64</a>&gt;: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/signature/struct.SignatureContent.html\" title=\"struct taple_core::signature::SignatureContent\">SignatureContent</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;TimeStamp: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/signature/struct.Signature.html\" title=\"struct taple_core::signature::Signature\">Signature</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/signature/struct.SignatureContent.html\" title=\"struct taple_core::signature::SignatureContent\">SignatureContent</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.SignatureIdentifier.html\" title=\"struct taple_core::identifier::SignatureIdentifier\">SignatureIdentifier</a>: BorshDeserialize,</span>"],["impl BorshDeserialize for <a class=\"struct\" href=\"taple_core/struct.SubjectData.html\" title=\"struct taple_core::SubjectData\">SubjectData</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.DigestIdentifier.html\" title=\"struct taple_core::identifier::DigestIdentifier\">DigestIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.0/std/primitive.u64.html\">u64</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"taple_core/identifier/struct.KeyIdentifier.html\" title=\"struct taple_core::identifier::KeyIdentifier\">KeyIdentifier</a>: BorshDeserialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>: BorshDeserialize,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()