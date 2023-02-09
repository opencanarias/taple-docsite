# Advanced Case of Use

Antes siquiera de comenzar a plantear el caso de uso debemos conocer qué es el Libro de Edificio y la importancia que tiene. Este se trata de un conjunto de documentos gráficos y escritos que  constituyen el archivo y registro del historial e incidencias técnicas, jurídicas y administrativas de un edificio. Una vez creado, el arquitecto de obra tiene la obligación de facilitar este escrito al Colegio de Registradores. 

La importancia del mismo está recogida en la ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación. El artículo 7 dice lo siguiente: “Existe obligación del director del proyecto a la elaboración de un Libro del Edificio que debe ser entregado al promotor. Este contiene el proyecto del edificio firmado por el técnico, además de visar y aprobar las posibles modificaciones que puedan existir”.

El objetivo que se persigue con este caso de uso es la mejora de la eficiencia de acceso a los usuarios que quieran conocer el estado de los Libros del Edificio.

La gobernanza estará compuesta por tres miembros: arquitecto, registrador y usuario externo.

## Arquitecto

Este se trata del técnico cuya misión es la de firmar el proyecto, redactar y hacer entrega del Libro del Edificio, además de las posibles modificaciones posteriores que puedan existir, siendo siempre debidamente visadas y aprobadas por el mismo.

La función que cumplirá dentro de la red será la de crear nuevos Libros del Edificio.

## Registrador

Es el agente que se encarga de dar validez a las operaciones de registrar, autorizar y consultar el Libro del Edificio que se realizan dentro de la red.

Las funciones que cumplirá dentro de la misma serán la de autorizar los accesos a la red por parte de terceros y la de registrar nuevos libros del Edificio.

## Usuario externo

Es aquella persona o entidad que tenga interés legítimo, a juicio del Registrador, por consular la información que se encuentra recogida en un determiando Libro del Edificio.

La función que cumplirá dentro de la red será la de generar peticones que recibirá el Registrador que autorizará o no, el acceso al registro de un dterminado Libro del Edificio.

Con toda esta información sería conveniente empezar a formalizar el caso del Libro del Edificio con un ejemplo muy sencillo, para ello debemos conocer que será almacenando en cada uno de estos, cada uno estará conformado por:

* IDUFIR: Número identificativo de cada libro del edificio.
* Versión: Número de versión del libro actual.
* Hash: Clave hash que identifica al documento.
* Hora de envío al sistema.
* Hora de registro en el sistema.
* Nombre del arquitecto.
* Motivo de rechazo (en caso de que exista).

Por tanto, lo que se almacenará dentro del sistema será la información relativa a un Libro del Edificio, el propio libro que es un documento en formato PDF será almacenado en un lugar seguro y accesible a todos aquellos usuarios que tengan interés legítimo, limitándose a centralizar únicamente esta información.

Además del Libro del Edificio, también sería conveniente almacenar en el sistema las solicitudes de consulta de los diferentes usuarios externos, estas estarán compuestas por lo siguiente:

* Id: Número identificativo de cada solicitud.
* Key del participante: Clave que identifica al participante.
* Nombre del participante.
* IDUFIR: Libro del Edificio que desea consultar.
* Versión: Número de versión que desea consultar.
* Motivo de la consulta.
* Estado: Estado de la solicitud actual (pendiente, aceptado o rechazado).
* Motivo de rechazo (en caso de que exista).


Por todo lo anterior, nuestro esquema de ejemplo para esta gobernanza quedaría de la siguiente manera:

``` json
{
  "request": {
    "Create": {
      "governance_id": "",
      "namespace": "",
      "schema_id": "",
      "payload": {
        "Json": {
          "members": [
            {
            "id": "Registradores",
            "tags": {},
            "description": "Compuesto por el colegio de registradores",
            "key": "EFXv0jBIr6BtoqFMR7G_JBSuozRc2jZnu5VGUH2gy6-w"
            },
            {
            "id": "Arquitectos",
            "tags": {},
            "description": "Compuesto por el colegio de arquitectos",
            "key": "ECQnl-h1vEWmu-ZlPuweR3N1x6SUImyVdPrCLmnJJMyU"
            },
            {
              "id": "Usuario externo",
              "tags": {},
              "description": "Compuesto terceras personas interesadas",
              "key": "EejcG-XG-dR991FEGR2Y3PefeKa5v0yTOXl80azRwgOk"
            }
          ],
          "schemas": [
            {
            "id": "Libro del Edificio",
            "tags": {},
            "content": {
                "type": "object",
                "additionalProperties": false,
                "required": [
                  "IDUFIR",
                  "Version",
                  "Hash",
                  "Hora_envio",
                  "Hora_registro",
                  "Nombre_arquitecto",
                  "Motivo_rechazo",
                ],
                "properties": {
                  "IDUFIR": {"type": "integer"},
                  "Version": {"type": "string" },
                  "Hash": {"type": "string"},
                  "Hora_envio": {"type": "integer" },
                  "Hora_registro": {"type": "integer" },
                  "Nombre_arquitecto": {"type": "string"},
                  "Motivo_rechazo": {"type": "string"},
                }
              }
            },
            {
              "id": "Solicitudes de consulta",
              "tags": {},
              "content": {
                "type": "object",
                "additionalProperties": false,
                "required": [
                  "Id"
                  "Key_participante",
                  "Nombre_participante",
                  "IDUFIR",
                  "Version",
                  "Motivo_consulta",
                  "Estado",
                  "Motivo_rechazo",
                ],
                "properties": {
                  "Key_participante": {"type": "string"},
                  "Nombre_participante": {"type": "string"},
                  "IDUFIR": {"type": "integer"},
                  "Version": {"type": "integer"},
                  "Motivo_consulta": {"type": "string"},
                  "Estado": {"type": "string"},
                  "Motivo_rechazo": {"type": "string"},
                }
              }
            }
          ]
        }
      }
    }
  }
}
```