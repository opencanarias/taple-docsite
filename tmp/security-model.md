# Security model
Aquí hablar de los diferentes elementos que aportan seguridad, brevemente y hacer enlace a sus respectivas secciones, como se hace en https://hyperledger-fabric.readthedocs.io/en/latest/security_model.html

identidad de participantes
subject id y propiedad
firmas en la cadena
modelo de único propietario
validación en fase 2


## Firmas 

Cada evento puede incluir una serie de firmas de los participantes  

### Firmas de sujeto 

Otorgan garantías criptográficas a la estructura del ledger. Cada evento incluido en el ledger es firmado indicando su bloque anterior.  

### Firmas de propietario 

Actualmente el propietario firma, al igual que el sujeto, todos los eventos, proporcionando, además de garantías criptográficas a la estructura, garantías de propiedad.  

Analizar la necesidad real de que el propietario tenga que firmar todos los eventos, o si por el contrario sería suficiente con firmar aquellos eventos que tengan que ver con la gobernanza. 

### Firmas de validador 

Las firmas de los validadores lo que aportan no es en sí seguridad a la estructura del ledger, sino garantías de la existencia de un único ledger para un sujeto dado entre todos los validadores.  

Actualmente se solicita la firma de todos los eventos por partes de todos los validadores, pero se propone que el propietario únicamente pida la firma a un subconjunto de validadores. A su vez, cada validador puede pedir la firma a otro subconjunto, de forma que no todos los validadores tendrán todas las firmas, pero si las suficientes para obtener garantías. Además, la elección de los validadores debe ser aleatoria o al menos rotatoria, de forma que no se creen grupos burbujas que puedan tener copias distintas del ledger entre ellos. 

Se presupone que todos los validadores desean una red segura, por lo que todos deberán implementar este proceso de rotación de validadores. Sin embargo, queda como campo posible de estudio: 