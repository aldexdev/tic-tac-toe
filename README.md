# Tres En Raya

En este proyecto se ha creado una página web completamente _responsive_, donde poder jugar al famoso juego Tres En Raya (o _Tic-Tac-toe_) contra la CPU y poder ver los resultados de las partidas ganadas, perdidas o empatadas en un ranking.

## Herramientas y entorno de desarrollo

A continuación, se exponen las herrmaientas y tecnologías usadas en la confección de la aplicación.

### Next.js

Se ha decidido utilizar para el desarrollo el lenguaje de programación Javascript acompañado del framework Next.js en su versión 14.2.4 tanto para implementar la parte del cliente como la parte del servidor. Esto se ha conseguido gracias a la existencia de la funcionalidad API Routes, que permite crear rutas a una API, crear las peticiones disponibles y poder obtener datos de ellas sin necesidad de utilizar bibliotecas o frameworks como Express.js o Axios.

### MongoDB

Como base de datos para almacenar el resultados de las distintas partidas, se ha hecho uso de MongoDB debido a su fácil uso y a su gran integración con las demás tecnologías mencionadas.

## Estructura del proyecto

El proyecto presenta la siguiente organización:

```text
TIC-TAC-TOE
    |_ __tests__
        |_ Button.test.js
        |_ play.test.js
        |_ updateRanking.test.js
    |_ src
        |_ app
            |_ page.js
            |_ layout.js
            |_ globals.css
            |_ ranking
                |_ page.js
            |_ api
                |_ play
                    |_ route.js
                |_ ranking
                    |_ route.js
        |_ components
            |_ Button.jsx
        |_ models
            |_ Ranking.js
        |_ lib
            |_ apiCalls.js
            |_ connection.js
            |_ play.js
            |_ updateRanking.js
    |_ .env.local
```

La primera carpeta que se puede encontrar es la que contiene los tests de las funciones que se especifican en los archivos.

La carpeta **src** contiene a su vez a varias carpetas y archivos, entre ellas **app**:

1. _page.js_ es el archivo que contiene el código de la página principal de la aplicación.
2. _globals.css_ es el archivo que contiene los estilos que se aplican a toda la aplicación.
3. La carpeta **ranking** contiene el código de la página "/ranking".
4. La carpeta **api** contiene las diferentes rutas de llamada al servidor que vienen, a su vez, dadas por las carpetas contenidas ("/api/play" y "/api/ranking"). Estas dos carpetas contienen el código de cada petición posible.

Continuando en **src**, se encuentra la carpeta **components**, que contiene el código del único componente utilizado en la aplicación. Por su parte, **models** contiene el modelo del documento Ranking que se guardará en la base de datos. Por último, **lib** contiene cuatro archivos con funcionalidades que se utilizan en otras partes, como llamadas a la API, conexión a la base de datos o una función para calcular la mejor jugada posible dado un tablero.

Volviendo a la raíz del directorio, se encuentra _.env.local_, archivo donde se almacenan las variables de entorno utilizadas.

## Probar el proyecto

Para poder poner a prueba la aplicación, en primer lugar, se debe clonar el repositorio:

```shell
git clone https://github.com/aldexdev/tic-tac-toe.git
```

Acto seguido se instalan las dependencias:

```shell
npm install
```

o, si es el caso:

```shell
yarn install
```

Se deben configurar las variables de entorno antes de arrancar la app:

```text
NEXT_PUBLIC_PLAY_API_URL=<URL de la ruta a la API para obtener una jugada de la CPU>
NEXT_PUBLIC_RANKING_API_URL=<URL de la ruta a la API para obtener información del ranking>
NEXT_PUBLIC_MONGODB_URI<URI de la base de datos de MongoDB>
```

> Se proporciona un archivo _.env.example_ como ejemplo para rellenar con información propia.

Finalmente, podemos ejecutar la aplicación:

```shell
npm run dev
```

o, si es el caso:

```shell
yarn dev
```

¡Ya se puede disfrutar de un Tres En Raya intentando batir a la máquina!

## Ejecución de tests

Como ya se ha mencionado, se han realizado ciertos tests de algunas de las funciones utilizadas. La configuración está creada de tal manera que sólo se debe ejecutar:

```shell
npm test
```

o, si es el caso:

```shell
yarn test
```

> Es posible que la terminal pida que el usuario presione una letra para poder visualizar el estado. Aunque se muestran en la propia consola los detalles de cada acción que se tomaría dependiendo de la tecla pulsada, si se quiere correr todos los tests y ver su estado, se debe pulsar la letra "_a_".

## Consideraciones

Se ha implementado un botón para poder jugar otra partida. Si se quisiera implementar un nuevo botón para reiniciar la partida cuando está en progreso, se utilizaría la misma lógica, pero se mostraría dicho botón en todo momento junto al de "Ver Ranking" y desaparecería cuando terminara la partida, para dejar lugar al ya implementado "Volver a Jugar".
