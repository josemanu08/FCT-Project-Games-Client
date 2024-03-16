# EndPoint para obtener información de juego de playstation
https://www.giantbomb.com/api/search/?api_key=7832659a0f9760b77a1355f155cf78bd55c4220b&format=json&query=%22bloodborne%22&resources=game

# Organización a seguir
src/
│
├── components/
│   ├── Componente1.js
│   ├── Componente2.js
│   └── ...
│
├── pages/
│   ├── Pagina1.js
│   ├── Pagina2.js
│   └── ...
│
├── services/
│   ├── api.js                // Lógica para interactuar con APIs internas de tu aplicación
│   ├── externalApi1.js       // Funciones para interactuar con la primera API externa
│   ├── externalApi2.js       // Funciones para interactuar con la segunda API externa
│   └── apiEndpoints.js       // Archivo para almacenar URLs de las APIs externas
│
├── consts/
│   ├── apiKeys.js            // Archivo para almacenar claves de las APIs externas
│   └── apiEndpoints.js       // Archivo para almacenar URLs de las APIs externas
│
├── helpers/
│   └── helpers.js            // Funciones de ayuda
│
├── assets/
│   ├── imagenes/
│   │   └── imagen1.jpg
│   └── estilos/
│       └── styles.css
│
└── App.js
