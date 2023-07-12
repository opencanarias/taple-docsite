# Creating the governance

Ahora que hemos podido levantar nuestro primer nodo, lo primero que debemos hacer para que sea útil es crear una [governance](../../discover/governance.md).

Para ello debemos lanzar una event request usando el API de taple-client. El endpoint que debemos usar es **/api/event-requests** y el método **POST**. Este endpoint admite diferentes configuraciones para facilitarle la vida al usuario:

- Mandar la request ya firmada
- Mandar la request sin firmar
- En eventos de tipo Create/Start permite no incluir la clave pública del sujeto y se genera una aleatoria previamente. En caso de usar esta opción no se puede incluir la firma.

En general antes de crear un sujeto habría que llamar a la api de creación de material criptográfico para generar un par de claves **/api/keys** y el método **POST**. Dicha API devuelve el valor de la public key del KeyPair para incluirlo en los eventos de Create y Transfer. La tercera opción de la lista anterior permite omitir este paso.

Con lo cual, si optamos por la tercera vía el body del post de la llamada que crea la governance se nos quedaría en:

```json
{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "name": "tutorial"
    }
  }
}
```

Al crear una governance desde 0 su configuración en su estado inicial es muy simple, por lo que para obtener los roles necesarios en las distintas fases que requieren firmas, si no están establecidos los roles y no devuelve ninguna lista de firmantes se dará por hecho que el firmante debe ser el dueño de la governance, por lo que en ete caso nos validaremos a nosotros mismos este evento. Con lo cual debería funcionar perfectamente.

La respuesta que obtenemos al lanzar la event request es la id de la propia request (un hash que se realiza a la request + la firma), si queremos saber cuál ha acabado siendo el SubjectId de la governance debemos consultar el endpoint **/api/event-requests/{id}** y el método **GET**. En la respuesta de este endpoint se nos devuelve inforamación de la request que incluye el SubjectId de la governance.

También podemos pedir la lista de sujetos en **/api/subjects** con el método **GET**. En este caso se nos devolverá una lista de los sujetos que tenemos en el nodo, en este caso solo tendremos la governance que acabamos de crear.

Al ser los dueños del sujeto se puede decir que somos testigos del mismo. El único rol que se define por defecto en el estado inicial de la governance es el que hace que todos los miembros de la governanza sean sujetos de la misma, pero en el caso de los miembros viene vacío. En el siguiente paso nos añadiremos como miembros de la governance.

El endpoint a usar es el mismo que el de la creación, pero el tipo de evento será FACT:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                    "op": "add",
                    "path": "/members/0",
                    "value": {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                    }
                }
            ]
          }
      }
    }
  }
}
```

Reemplazar {{governance_id}} por el SubjectId de la governance que hemos creado. El id de nuestro usuario lo sacamos de cuando usamos taple-keygen en el paso anterior. Es nuestro KeyIdentifier, que identifica nuestra clave pública. El método Patch es el único que contiene el contrato de la governance actualmente y simplemente aplica un json-patch a su estado. Este método hace que sea necesaria la fase de Aprobación.

Como hemos comentado anteriormente el creador será el firmante en todas las fases si no se define a nadie más, por lo que para este evento 1 nosotros seremos Evaluador, Aprobador y Validador. La evaluación y la validación funcionan automáticamente, pero la parte de aprobación requiere intervención del usuario a través de la API (siempre que no esté definida la variable de entorno que hace que se apruebe automáticamente).

Para ello debemos primero preguntar por las aprobaciones pendientes en **/api/approval-requests?status=pending** usando un **GET**. El id del json de respuesta es lo que debemos usar para aprobarla. En **/api/approval-requests/{id}** usando un **PATCH** añadiremos el id recibido para lanzar el voto. Como en nuestro caso queremos aprobarla el body debe ser:

```json
{"approvalType": "Accept"}
```
