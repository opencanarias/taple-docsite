# Adding a schema

Hemos agregado nuestro primer miembro a la gobernanza, pero aún falta completarla, ya que no hemos definido la estructura de datos para el seguimiento de los sujetos de tipo *Wine* en este caso de uso.

Para avanzar en el tutorial, necesitamos definir una estructura de datos donde podamos almacenar la información de cada botella de vino. En Taple, esta definición se realiza mediante [*schemas*](../../discover/schemas.md), que nos permiten especificar los campos, tipos de datos y relaciones que deseamos guardar, como lo son el número de la cosecha, el tipo de uva, su origen, etc.

Antes de continuar, asegurémonos de tener claro qué información queremos guardar para cada botella de vino y luego procederemos a crear el esquema que representará esa información de manera adecuada. Esta será:

- Harvest number
- Type of grape
- Origin of the grape
- Certificate authenticating whether it is organic or not
- Values to be changed in the temperature control event:
    - Timestamp of last check
    - Value that corroborates whether the wine cold chain has been complied with

El esquema deberá ser definido en formato [*json-schema*](../../learn/json-schema.md) para que Taple sea capaz de interpretarlo, la formalización que hemos estimado oportuna para el mismo ha sido la siguiente:

```json
{
    "id": "Wine",
    "description": "Representation of a bottle of wine",
    "type": "object",
    "properties": {
        "harvest": {
            "description": "Harvest number",
            "type": "integer"
        },
        "grape": {
            "description": "Type of grape",
            "type": ["string", "null"],
            "enum": ["CabernetSauvignon", "Chardonnay", "PinotNoir", null]
        },
        "origin": {
            "description": "Origin of the grape",
            "type": "string"
        },
        "organic_certified": {
            "description": "Certificate authenticating whether it is organic or not",
            "type": ["boolean", "null"]
        },
        "temperature_control": {
            "description": "Values to be changed in the temperature control event",
            "type": "object",
            "properties": {
                "last_check": {
                    "description": "Timestamp of last check",
                    "type": "number"
                },
                "temperature_ok": {
                    "description": "Value that corroborates whether the wine cold chain has been complied with",
                    "type": "boolean"
                }
            },
            "required": [ "last_check", "temperature_ok" ],
            "additionalProperties": false
        }
    },
    "required": [ "harvest", "grape", "origin", "organic_certified", "temperature_control" ],
    "additionalProperties": false
}
```

Por lo tanto, el siguiente paso será [declarar nuestro esquema](../../learn/json-schema.md) para los sujetos de tipo "Wine" y un [contrato inteligente](../../learn/smart-contracts.md) que contendrá las operaciones que permitirán actualizar el estado de este sujeto:

Así como este `smart contract`:

```rs
use taple_sc_rust as sdk;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, PartialEq)] 
enum Grape {
    CabernetSauvignon,
    Chardonnay,
    PinotNoir,
}

#[derive(Serialize, Deserialize, Clone)]
struct TemperatureControl {
    pub last_check: u32,
    pub temperature_ok: bool,
}

#[derive(Serialize, Deserialize, Clone)]
struct State {
    pub harvest: u32,
    pub grape: Option<Grape>,
    pub origin: String,
    pub organic_certified: Option<bool>,
    pub temperature_control: TemperatureControl,
}

#[derive(Serialize, Deserialize)]
enum StateEvent {
    Init {
        harvest: u32,
        grape: String,
        origin: String,
    },
    TemperatureControl {
        temperature: f32,
        timestamp: u32,
    },
    OrganicCertification {
        fertilizers_control: bool,
        pesticides_control: bool,
        analytics: bool,
        additional_info: String,
    },
}

const TEMPERATURE_RANGE: (f32, f32) = (10.0, 16.0);

#[no_mangle]
pub unsafe fn main_function(state_ptr: i32, event_ptr: i32, is_owner: i32) -> u32 {
    sdk::execute_contract(state_ptr, event_ptr, is_owner, contract_logic)
}

fn contract_logic(
    context: &sdk::Context<State, StateEvent>,
    contract_result: &mut sdk::ContractResult<State>,
) {
    let state = &mut contract_result.final_state;
    match &context.event {
        StateEvent::Init {
            harvest,
            grape,
            origin,
        } => {
            if context.is_owner && !check_subject_has_been_initiated(state) {
                let grape = match grape.as_str() {
                    "CabernetSauvignon" => Some(Grape::CabernetSauvignon),
                    "Chardonnay" => Some(Grape::Chardonnay),
                    "PinotNoir" => Some(Grape::PinotNoir),
                    _ => None,
                };
                if grape.is_some() {
                    state.harvest = *harvest;
                    state.grape = grape;
                    state.origin = origin.to_string();
                    contract_result.success = true;
                }
            }
        }
        StateEvent::TemperatureControl {
            temperature,
            timestamp,
        } => {
            if context.is_owner && check_subject_has_been_initiated(state) {
                if check_temperature_in_range(*temperature)
                    && state.temperature_control.temperature_ok
                {
                    state.temperature_control.last_check = *timestamp;
                } else {
                    state.temperature_control.temperature_ok = false;
                    state.temperature_control.last_check = *timestamp;
                }
                contract_result.success = true;
            }
        }
        StateEvent::OrganicCertification {
            fertilizers_control,
            pesticides_control,
            analytics,
            additional_info,
        } => {
            if check_subject_has_been_initiated(state) {
                match state.organic_certified {
                    Some(organic_cerified) => {
                        if organic_cerified
                            && !check_is_organic(
                                *fertilizers_control,
                                *pesticides_control,
                                *analytics,
                            )
                        {
                            state.organic_certified = Some(false);
                        }
                    }
                    None => {
                        if check_is_organic(*fertilizers_control, *pesticides_control, *analytics) {
                            state.organic_certified = Some(true);
                        } else {
                            state.organic_certified = Some(false);
                        }
                    }
                }
                contract_result.success = true;
            }
        }
    }
}

fn check_subject_has_been_initiated(state: &State) -> bool {
    let initial_grape = match state.grape {
        Some(_) => false,
        None => true,
    };
    if state.harvest == 0 && initial_grape && state.origin == format!("") {
        return false;
    }
    return true;
}

fn check_temperature_in_range(temperature: f32) -> bool {
    if temperature >= TEMPERATURE_RANGE.0 && temperature <= TEMPERATURE_RANGE.1 {
        return true;
    }
    return false;
}

fn check_is_organic(fertilizers_control: bool, pesticides_control: bool, analytics: bool) -> bool {
    if fertilizers_control && pesticides_control && analytics {
        return true;
    }
    return false;
}
```

* **Nota**: El único formato que soporta Taple para los contratos es el *Base64*, por lo que será necesario transformarlo antes de incluirlo en la gobernanza.

Una vez que hayamos declarado tanto el esquema como el contrato inteligente, será necesario emitir un evento de **hecho** a la gobernanza para agregar esta nueva información. Para hacerlo, ejecutaremos lo siguiente:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": "Jic2hJi68hiN8_eU3IVIfB3jPNmnqN1b04bpDj85_iqM",
            "payload": {
                "Patch": {
                    "data": [{
                        "op": "add",
                        "path": "/schemas/0",
                        "value": {
                            "id": "Wine",
                            "schema": {
                                "description": "Representation of a bottle of wine",
                                "type": "object",
                                "properties": {
                                    "harvest": {
                                        "description": "Harvest number",
                                        "type": "integer"
                                    },
                                    "grape": {
                                        "description": "Type of grape",
                                        "type": [
                                            "string",
                                            "null"
                                        ],
                                        "enum": [
                                            "CabernetSauvignon",
                                            "Chardonnay",
                                            "PinotNoir",
                                            null
                                        ]
                                    },
                                    "origin": {
                                        "description": "Origin of the grape",
                                        "type": "string"
                                    },
                                    "organic_certified": {
                                        "description": "Certificate authenticating whether it is organic or not",
                                        "type": [
                                            "boolean",
                                            "null"
                                        ]
                                    },
                                    "temperature_control": {
                                        "description": "Values to be changed in the temperature control event",
                                        "type": "object",
                                        "properties": {
                                            "last_check": {
                                                "description": "Timestamp of last check",
                                                "type": "integer"
                                            },
                                            "temperature_ok": {
                                                "description": "Value that corroborates whether the wine cold chain has been complied with",
                                                "type": "boolean"
                                            }
                                        },
                                        "required": [
                                            "last_check",
                                            "temperature_ok"
                                        ],
                                        "additionalProperties": false
                                    }
                                },
                                "required": [
                                    "harvest",
                                    "grape",
                                    "origin",
                                    "organic_certified",
                                    "temperature_control"
                                ],
                                "additionalProperties": false
                            },
                            "initial_value": {
                                "harvest": 0,
                                "grape": null,
                                "origin": "",
                                "organic_certified": null,
                                "temperature_control": {
                                    "last_check": 0,
                                    "temperature_ok": true

                                }
                            },
                            "contract": {
                                "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7IC8vIFNvbG8gbG8gcHVlZGRlIGhhY2VyIGVsIHByb3BpZXRhcmlvw6cNCiAgICAgICAgICAgICAgICBsZXQgZ3JhcGUgPSBtYXRjaCBncmFwZS5hc19zdHIoKSB7DQogICAgICAgICAgICAgICAgICAgICJDYWJlcm5ldFNhdXZpZ25vbiIgPT4gU29tZShHcmFwZTo6Q2FiZXJuZXRTYXV2aWdub24pLA0KICAgICAgICAgICAgICAgICAgICAiQ2hhcmRvbm5heSIgPT4gU29tZShHcmFwZTo6Q2hhcmRvbm5heSksDQogICAgICAgICAgICAgICAgICAgICJQaW5vdE5vaXIiID0+IFNvbWUoR3JhcGU6OlBpbm90Tm9pciksDQogICAgICAgICAgICAgICAgICAgIF8gPT4gTm9uZSwNCiAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgIGlmIGdyYXBlLmlzX3NvbWUoKSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmhhcnZlc3QgPSAqaGFydmVzdDsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZ3JhcGUgPSBncmFwZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luID0gb3JpZ2luLnRvX3N0cmluZygpOw0KICAgICAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6OlRlbXBlcmF0dXJlQ29udHJvbCB7DQogICAgICAgICAgICB0ZW1wZXJhdHVyZSwNCiAgICAgICAgICAgIHRpbWVzdGFtcCwNCiAgICAgICAgfSA9PiB7DQogICAgICAgICAgICBpZiBjb250ZXh0LmlzX293bmVyICYmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgaWYgY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UoKnRlbXBlcmF0dXJlKQ0KICAgICAgICAgICAgICAgICAgICAmJiBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rDQogICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLmxhc3RfY2hlY2sgPSAqdGltZXN0YW1wOw0KICAgICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wudGVtcGVyYXR1cmVfb2sgPSBmYWxzZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6Ok9yZ2FuaWNDZXJ0aWZpY2F0aW9uIHsNCiAgICAgICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICBwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICBhbmFseXRpY3MsDQogICAgICAgICAgICBhZGRpdGlvbmFsX2luZm8sDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY2hlY2tfc3ViamVjdF9oYXNfYmVlbl9pbml0aWF0ZWQoc3RhdGUpIHsNCiAgICAgICAgICAgICAgICBtYXRjaCBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCB7DQogICAgICAgICAgICAgICAgICAgIFNvbWUob3JnYW5pY19jZXJpZmllZCkgPT4gew0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgb3JnYW5pY19jZXJpZmllZA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICFjaGVja19pc19vcmdhbmljKA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZmVydGlsaXplcnNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKnBlc3RpY2lkZXNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmFuYWx5dGljcywNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKGZhbHNlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICBOb25lID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNoZWNrX2lzX29yZ2FuaWMoKmZlcnRpbGl6ZXJzX2NvbnRyb2wsICpwZXN0aWNpZGVzX2NvbnRyb2wsICphbmFseXRpY3MpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUodHJ1ZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/policies/1",
                        "value": {
                            "approve": {
                                "quorum": "MAJORITY"
                            },
                            "evaluate": {
                                "quorum": "MAJORITY"
                            },
                            "id": "Wine",
                            "validate": {
                                "quorum": "MAJORITY"
                            }
                        }
                    }]
                }
            }
        }
    }
}'
```

* **Nota**: Es importante destacar que, además del esquema y el contrato, también se ha agregado un estado inicial que será utilizado en el evento de **génesis** de un sujeto.

Una vez emitido el evento, será necesario obtener la nueva solicitud de actualización. Para hacerlo, ejecutamos lo siguiente:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Compiaremos el valor del campo `id` y acepateremos la solicitud actualización de la gobernanza:

```bash
curl --silent --location --request PATCH 'http://localhost:3000/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Por último, realizaremos una consulta a la gobernanza para verificar que el cambio se ha efectuado correctamente. Si todo ha sido realizado según lo previsto, ahora debería tener `sn` 2 y tanto el esquema como el contrato deberían aparecer:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```