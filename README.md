# Red Social HK / Programación 4to Semestre Parcial Final
# Ingeniería de Software CIAF
# 🎯Miguel Angel Ballesteros Gallego

Este es un proyecto de una red social desarrollado como parte de un ejercicio práctico para explorar tecnologías y mejores prácticas en desarrollo web. La aplicación permite interactuar con imágenes, comentarios y reacciones, utilizando datos externos de la API de Rick and Morty.

## 🚀 Funcionalidades

- **Visualización de Tarjetas**: 
  - Muestra tarjetas con imágenes, comentarios y secciones de interacción similares a redes sociales.
  - Las imágenes provienen de servicios externos (anteriormente Pinterest).

- **Consumo de API**: 
  - Integración con la [API de Rick and Morty](https://rickandmortyapi.com/) para obtener datos de personajes.

- **Interacciones en Tarjetas**: 
  - Los usuarios pueden reaccionar, comentar y ver interacciones relacionadas con cada tarjeta.

- **Migración a React**: 
  - Reestructuración del proyecto en React utilizando componentes reutilizables y mejores prácticas.

## 🛠️ Tecnologías Usadas

### Frontend
- **React**: Framework principal para la interfaz de usuario.
- **CSS / Tailwind CSS** (o cualquier preprocesador definido): Para el diseño y estilo de los componentes.
- **Axios o Fetch**: Para realizar las solicitudes HTTP hacia la API.

### API Externa
- **Rick and Morty API**: Utilizada para obtener datos dinámicos sobre personajes.

### Herramientas de Desarrollo
- **GitHub**: Para control de versiones y colaboración.
- **Vite** (opcional): Para desarrollo rápido y eficiente con React.

## 📂 Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── Card.jsx      // Componente para representar las tarjetas
│   ├── CommentBox.jsx // Componente para gestionar comentarios
│   ├── ReactionBar.jsx // Componente para las reacciones
│   └── ...
├── services/
│   ├── api.js        // Configuración y métodos para consumir la API
│   └── ...
├── assets/           // Imágenes y recursos estáticos
└── App.jsx           // Componente principal

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
