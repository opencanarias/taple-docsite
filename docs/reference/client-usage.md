# Basic usage

## Running a node

Explicar los parámetros básicos para ejecutar un nodo. Poner referencia a la página de configuración con todas las opciones
podemos tomar como referencia la página del tutorial antiguo de running nodes
hacer para la versión ejecutable, y despues comentar que se puede hacer con docker y que lo más fácil es usar variables de entorno. Hacer referencia ala pagina de configuración donde se explica como se traducen paŕametros de linea de comandos a variables de entorno y poner un ejemplo. 

## REST API

Explicar que el nodo puede exponer un api rest y su documentación. Para ello poner los 2 parámetros a añadir cuando levantamos el nodo y poner ejemplo. Despues añadir llamada de ejemplo al api rest, por ejemplo, a endpoint de documentación que nos tiene que devolver el openapi. Poner enlace a la página con la propia api rest. 

## Backups

To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because **TAPLE Client** is using **[LevelDB](https://github.com/google/leveldb)** as database, in which hot backups are not supported so far.

In this **[section](./client-config.md#environment-variables)**, you can find the definition of the different environment variables including `TAPLE_DATABASE_PATH` which represents the path where the database is located.