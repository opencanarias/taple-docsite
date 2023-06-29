# Approvals

- Explicamos el porque hace falta un nodo aprobador (básicamente sin este los invocadores externos no tendrían ningun tipo de control y podrían no ser fiables a ojos del caso de uso).
- Creamos el nodo con su material criptográfico correspondiente.
- Lo incluimos como miembro de la gobernanza y establecemos su rol.
- Modificamos el contrato para que el control de calidad requiera de su aprobación.
- Provamos a lanzar otra solicitud de evento de control de calidad, viendo que esta vez hará falta aprobarlo.