# Smart Contracts in TAPLE

## Smart contracts & schemas
Explicar la relación entre smart contracts y schemas

## Entradas y salidas
Que entra en un smart contract y que sale. Explicar que esto viene del modelo de evaluadores sin estado, por eso le entra el estado inicial y el contexto

## Life cycle
Poner alguna figura y explicar el proceso que sigue un smart contract 

- Se crea el proyecto de smart contract. 
  - Se crea un proyecto localmente.
  - Se incluye el SDK
  - Se incluye la lógica del contrato
  - Se testea el contrato
- Se incluye en la gobernanza a partir de una petición
  - explicar proceso de cómo empaquetar. Poner un admonition explicando las limitaciones actuales: todo en un fichero, codificado en base64 en plano, etc. 
  - A partir de este momento cualquier evento asociado a la versión de la gobernanza asociada a este cmbio usa esta versión del contrato.
- la primera vez que se necesita se compila en WASM, se serializa y se almacena en base de datos
  - Para ello se genera un proyecto Rust en el que se incluye el contrato y se compila para el target de WASM
  - Cada vez que se necesita se ejecuta en la máquina WASM. Contar que es un entorno seguro aislado del sistema. 
  - etc. 

## Rust and WASM
un párrafo explicando que tipo de lenguaje es rust y por qué es una buena idea utilizarlo, por qué lo hemos elegido. Eficiente, rapido, bajo consumo, alto rendimiento, etc. Y su relación con WASM. El por qué es interesante WASM ...

