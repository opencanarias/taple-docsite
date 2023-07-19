# Wine track

## Introduction

This tutorial will contain a series of advanced Taple network concepts, in which we will learn:

1. Como realizar invocaciones externas a métodos de un smart contract;
2. Como transferir la propiedad de un sujeto a otro participante;
3. Como funciona la segmentación de sujetos por namespace;
4. Como modificar las políticas de voto en un sujeto;
5. Como finalizar el seguimiento del ciclo de vida de un sujeto.

## Use case description

En este tutorial, implementaremos un sistema de seguimiento del ciclo de vida de un producto alimentario, específicamente un vino premium de alta calidad. El objetivo es certificar la calidad del vino a los compradores finales en función de ciertos parámetros, como la certificación de origen orgánico y un control de temperatura óptimo.

Para lograr este objetivo, será necesario contar con el apoyo de diferentes participantes que serán responsables de llevar a cabo las diferentes acciones necesarias para el correcto funcionamiento de este ciclo de vida. Entre ellos, podemos distinguir:

* **Wine Producers Organization (WPO)**: Responsable de formalizar el caso de uso de trazabilidad.
* **Premium Wines**: Autor encargado de iniciar el seguimiento de las botellas de vino.
* **World Food Organization (WFO)**: Administrador de los cambios realizados en el caso de uso y los sujetos de tipo vino.
* **Spanish Food Organization (SFO)**: Encargado de validar los cambios en el sujeto de vino.
* **Citizen**: EEntidad externa a la que se transferirá la propiedad de una botella de vino.

A lo largo de este tutorial, se proporcionarán instrucciones detalladas y los comandos necesarios para llevar a cabo cada paso. ¡Comencemos con el desarrollo de este caso de uso de seguimiento del ciclo de vida del vino en Taple!