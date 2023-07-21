# Programming smart contracts

## SDK

Para el correcto desarrollo de los contratos es necesario utilizar su **SDK**, proyecto que se puede encontrar en el [repositorio](https://github.com/opencanarias/taple-sc-rust/tree/main) oficial de TAPLE. El objetivo principal del mismo es abstraer al programador de la interacción con el contexto de la máquina evaluadora subyacente, facilitando en gran medida la obtención de los datos de entrada, así como el proceso de escritura del resultado del contrato.

El proyecto SDK se puede dividir en tres secciones. Por un lado, un conjunto de funciones cuya enlazamiento se produce en tiempo de ejecución y que están dirigidas a poder interactuar con la máquina evaluadora, en concreto, para la lectura y escritura de datos a un buffer interno. Adicionalmente, también distinguimos un módulo que, empleando las funciones anteriores, se encarga de la serialización y deserialización de los datos, así como de aportar la función principal de cualquier contrato. Por último, destacamos una serie de funciones y estructuras de utilidad que pueden emplearse activamente en el código.

Muchos de los elementos anteriores son privados, por lo que el usuario nunca tendrá oportunidad de emplearlos. Debido a ello, en esta documentación nos centraremos en aquellos que sí se exponen de cara al usuario y que este podrá usar de manera activa en el desarrollo de sus contratos.

:::caution
Téngase en cuenta de que no es posible ejecutar cualquier función o utilizar cualquier tipo de dato en un entorno de Web Assembly. Deberá informarse adecuadamente sobre las posibilidades del entorno. Así, a modo de ejemplo, cualquier interacción con el sistema operativo se encuentra deshabilitada, puesto que se trata de un entorno aislado y seguro.
:::

### Estructuras auxiliares

```rust
#[derive(Serialize, Deserialize, Debug)]
pub struct Context<State, Event> {
    pub initial_state: State,
    pub event: Event,
    pub is_owner: bool,
}
```

Esta estructura contiene los tres datos de entrada de todo contrato: el estado inicial o actual del sujeto, el evento entrante y un flag que nos indica si el que solicita el evento es o no el propietario del sujeto. Nótese el uso de génericos para el estado y el evento.

```rust
#[derive(Serialize, Deserialize, Debug)]
pub struct ContractResult<State> {
    pub final_state: State,
    pub approval_required: bool,
    pub success: bool,
}
```

Contiene el resultado de la ejecución del contrato, siendo este una conjunción del estado resultante y de dos flags que indican, por un lado si la ejecución ha sido existosa según los criterios que establezca el programador (o bien si se ha producido un error en la carga de datos); y por otro, si el evento requiere o no [aprobación](../discover/roles.md#approver).


```rust
pub fn execute_contract<F, State, Event>(
    state_ptr: i32,
    event_ptr: i32,
    is_owner: i32,
    callback: F,
) -> u32
where
    State: for<'a> Deserialize<'a> + Serialize + Clone,
    Event: for<'a> Deserialize<'a> + Serialize,
    F: Fn(&Context<State, Event>, &mut ContractResult<State>);
```

Esta función es la principal del SDK y, así mismo, la más importante. En concreto se encarga de la obtención de los datos de entrada, datos que obtiene del contexto que comparte con la máquina evaluadora. La función, que inicialmente recibirá un puntero a cada uno de estos datos, será la encargada de extraerlos del contexto y de deserializarlos a las estructuras de estado y evento que espera recibir el contrato, especificables mediante genéricos. Dichos datos, una vez obtenidos, se encapsulan en la estructura de *Context* presente anteriormente y se pasan como argumentos a una función callback que gestiona la lógica del contrato, es decir, sabe qué hacer con los datos recibidos. Por último, independientemente de si la ejecución ha sido exitosa o no, la función se encargará de escribir el resultado en el contexto, para que este pueda ser utilizado por la máquina evaluadora.

```rust
pub fn apply_patch<State: for<'a> Deserialize<'a> + Serialize>(
    patch_arg: Value,
    state: &State,
) -> Result<State, i32>;
```

Se trata de la última función pública del SDK y permite actualizar un estado mediante la aplicación de un JSON-PATCH, útil en casos en los que se considere esta técnica para actualizar el estado.

## Your first smart contract

### Creación del proyecto

Ubíquese en la ruta y/o directorios deseados y cree un nuevo paquete de cargo empleando `cargo new`. El proyecto deberá tratarse de una librería. Asegúrese pues, que cuenta con un fichero `lib.rs` y no un `main.rs`. 

Acto seguido, incluya en el ***Cargo.toml*** como dependencia el SDK de los contratos y el resto de dependencias que desee de entre la siguiente lista:

-  **serde**: Versiones >=1.0.152 y <2.0.0.
-  **serde_json**: Versiones >=1.0.92 y <2.0.0.
-  **json_patch**: Versiones >=0.2 y <0.3.
-  **thiserror**: Versiones >=1.0.0 y <2.0.0.

```toml
serde = { version = "=1.0.152", features = ["derive"] }
serde_json = "=1.0.92"
json-patch = "=0.2"
thiserror = "=1.0"
# Note: Change the label to the appropriate one
taple-sc-rust = { git = "https://github.com/opencanarias/taple-sc-rust.git", tag = "0.2"}
```

A continuación se especificará cómo redactar un contrato inteligente, información que vendrá acompañada de un ejemplo básico.

### Redacción del contrato

Debido a que la compilación la realizará el nodo, **debemos escribir todo el contrato en el fichero lib.rs**.

En nuestro caso, empezaremos el contrato **especificando los paquetes que vamos a utilizar**.

```rust
use serde::{Serialize, Deserialize};

use taple_sc_rust as sdk;
```

Acto seguido, es necesario especificar la estructura de datos que representará el estado de nuestros sujetos así como la familia de eventos que recibiremos. Para este ejemplo se supondrá un caso muy sencillo, en concreto, un estado formado por tres números y una familia de eventos que permite modificar cada uno de ellos por separados o todos en su conjunto.

```rust
#[derive(Serialize, Deserialize, Clone)]
struct State {
  pub one: u32,
  pub two: u32,
  pub three: u32
}

#[derive(Serialize, Deserialize)]
enum StateEvent {
  ModOne { data: u32 },
  ModTwo { data: u32 },
  ModThree { data: u32 },
  ModAll { one: u32, two: u32, three: u32 }
}
```

:::info
La familia de eventos, por lo general, se definirá como un enumerado, aunque en la práctica nada impide que sea una estructura en caso de que así se requiera. Independientemente del caso, de emplear un enumerado, si las variantes de este reciben datos estos deben especificarse mediante una estructura anónima y no mediante la sintaxis de tupla.

Destacar, además, que los eventos de la familia pueden ser subconjuntos de los eventos reales. Así, y a modo de ejemplo, el contrato aceptaría un evento ***StateEvent::ModOne*** que incluya más datos a parte del atributo *data*. El contrato, al ejecutarse, solo se quedará con los datos necesarios, descartando todos los demás en el proceso de deserialización. Esto podría emplearse para guardar información en la cadena que no es necesaria para la lógica del contrato.

:::

:::note
Téngase en cuenta de que la implementación de los *trait Serialize y Deserialize* son obligatorios de especificar para el estado y los eventos. Adicionalmente, el primero deberá implementar también *Clone*.
:::

En siguiente lugar definimos la **función entrada del contrato**, la equivalente a la función **main**. Es importante que esta función tenga siempre el mismo nombre que la que aquí se especifica, pues se trata del identificador con la que la intentará ejecutar la máquina evaluadora, produciendo un error en caso de no encontrarla.

```rust
#[no_mangle]
pub unsafe fn main_function(state_ptr: i32, event_ptr: i32, is_owner: i32) -> u32 {
    sdk::execute_contract(state_ptr, event_ptr, is_owner, contract_logic)
}
```

Esta función debe ir siempre acompañada del atributo ***#[no_mangle]*** y sus parámetros de entrada y de salida también deben coincidir con los del ejemplo. En concreto, esta función recibirá los punteros de los datos de entrada, que luego procesará la función del SDK. Como salida se genera un nuevo puntero al resultado del contrato, cuya obtención, como mencionamos anteriormente, es responsabilidad del SDK y no del programador.

:::info
La modificación de los valores de los punteros en esta sección del código no logrará efecto alguno. Los punteros son con respecto al contexto compartido, que se corresponde con un buffer único por ejecución de contrato. Alterar los valores de los punteros no permite al programador acceder a información arbitraria ya sea de la máquina evaluadora o de otros contratos.
:::

Por último, especificamos la lógica de nuestro contrato, que puede estar definida por cuentras funciones deseemos. Preferiblemente se destacará una función principal, que será la que se ejecute como *callback* por parte de la función *execute_contract* del SDK. 

```rust
fn contract_logic(
  context: &sdk::Context<State, StateEvent>,
  contract_result: &mut sdk::ContractResult<State>,
) {
  let state = &mut contract_result.final_state;
  match context.event {
      StateEvent::ModOne { data } => {
        state.one = data;
      },
      StateEvent::ModTwo { data } => {
        state.two = data;
      },
      StateEvent::ModThree { data } => {
        state.three = data;
      },
      StateEvent::ModAll { one, two, three } => {
        state.one = one;
        state.two = two;
        state.three = three;
      }
  }
  contract_result.success = true;
  contract_result.approval_required = true;
}
```

Esta función principal recibe los datos de entrada del contrato encapsulados en una instancia de la estructura **Context** del SDK. También se recibe una referencia mutable al resultado del contrato que contiene el estado final, originalmente idéntico al estado inicial, y los flags de *aprobación requerida* y de *ejecución exitosa*. Nótese cómo, además de modificar el estado en función del evento recibido, se tiene que dar varlos a los flags anteriores. Con el primero especificaremos que el contrato acepta el evento y los cambios que este propone para el estado actual del sujeto, lo que se traducirá en el SDK generando un JSON_PATCH con las modificaciones necesarias para transicionar del estado inicial al obtenido. El segundo flag, por su parte, nos permite indicar condicionalmente si consideramos que el evento debería ser o no aprobado.

### Testing your smart contract

Al tratarse de código Rust, podemos crear una batería de tests unitarios en el propio código del contrato para comprobar su funcionamiento utilizando los recursos del propio lenguaje. También sería posible especificarlos en un fichero diferente. 

```rust
#[test]
fn contract_test() {
  let initial_state = State {
    one: 1,
    two: 2,
    three: 3
  };
  let context = sdk::Context {
    initial_state: initial_state.clone(),
    event: StateEvent::ModOne { data: 100 },
    is_owner: false
  };
  let mut result = sdk::ContractResult::new(initial_state);
  contract_logic(&context, &mut result);
  assert_eq!(result.final_state.one, 100);
  assert!(result.success);
  assert!(result.approval_required);
}
```

Como se puede comprobar, lo único que se debe realizar para crear un test válido es definir manualmente un estado inicial y un evento entrante en lugar de utilizando la función ejecutora del SDK, que solo puede ejecutarse apropiadamente por TAPLE. Una vez definidas las entradas, realizar una llamada a la función principal de la lógica del contrato debería ser suficiente.

Una vez probado el contrato, este está listo para ser enviado a TAPLE tal y como se indica en la sección de [introducción](./smart-contracts.md). Téngase en cuenta de que no es necesario enviar los test de los contratos a los nodos TAPLE, De hecho, enviarlos supondrá un mayor uso de bytes por parte del fichero codificado y, en consecuencia, al almacenarse este en la gobernanza, un mayor consumo de bytes de la misma.
