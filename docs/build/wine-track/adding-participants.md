# Adding participants

Nivel caso de uso:
  -Explicamos la necesidad de tener un participante en la red que se encargue de crear sujetos del tipo "Wine", permitiendo cualquier namespace por el momento.

Nivel Taple
  - Creamos el nodo Productor.
  - Modificamos la gobernanza para incluirlo:
    - Name: PremiumWines
    - Roles:
      - Creador de sujetos Wine para cualquier namespace (de momento).

Nivel caso de uso:
  - Presentamos a la World Food Organization (WFO) y explicamos que la seguridad de la red se basa en la firma de los validadores, permitiendo que diferentes interesados tengan representación en las decisiones. En este caso, este rol representa los intereses de los consumidores.
  - Mencionamos que la WFO actuará como evaluador y validador para todos los aspectos.
  - Además, la WFO se convertirá en aprobador de la gobernanza, lo que significa que cualquier cambio futuro requerirá su aprobación.

Nivel Taple:
  - Creamos un nuevo nodo, World Food Organization (WFO).
  - Modificamos la gobernanza para incluirlo:
    - Name: Wine Food Organization
    - Roles:
      - Aprobador, validador y evaluador de la gobernanza.
      - Testigo de todos los vinos, ya que le interesa recopilar estadísticas de consumo.