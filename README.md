# MaxxMusic - Reproductor de Música en React Native con Expo
Proyecto creado cómo proyecto final del curso Desarrollo de Aplicacion de Coderhous. Consiste en un reproductor de musica creado con React Native bajo la plataforma Expo.  
La aplicación nos permite la creación y el logueo de usuarios gracias a la implementación de Authentication de Firebase. Estos usuarios tienen la opción de reproducir la canción deseada, así como también de crear, eliminar y reproducir listas propias. Esto gracías a la implementación de Realtime Database de Firebase que guarda las mismas. 

## Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

#### Pre-requisitos 📋
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

- Deberás obtener una copia del proyecto. Puedes descargar el código desde la opción "Download ZIP" del [repositorio](https://github.com/Maxjarzy/MusicPlayer-Jarzynski), o clonarlo vía HTTPS.
- Además, necesitarás la **APK** de desarrollo, que puedes encontrar [aquí](https://expo.dev/accounts/maxjarzy/projects/MusicPlayer-Jarzynski/builds/6a35e515-9458-4cb0-919d-10982f8e9a92).

#### Instalación 🔧


##### Descarga y Descompresión (ZIP)
- Descarga el proyecto en formato ZIP.
- Descomprime el archivo en la carpeta de tu elección.
- Abre la carpeta en tu editor de código.

##### Instalación de Dependencias
- Abre una terminal en la ubicación del proyecto.
- Ejecuta el comando ***"npm install"*** para instalar las dependencias.

##### Inicio del Proyecto
- Una vez instaladas las dependencias, ejecuta ***"npx expo start --dev-client"*** para iniciar el proyecto.

##### Instalación en un Dispositivo
- Para probar la aplicación, instala la **APK** en el dispositivo deseado, ya sea un emulador o un dispositivo físico.
- Abre la aplicación y selecciona el puerto utilizado.

---

##### Clonación vía HTTPS

- Abre tu editor de código y una terminal bash.
- Navega al directorio donde desees clonar el repositorio.
- Ejecuta ***"git clone"*** seguido de la URL del repositorio.
- En la terminal, instala las dependencias con ***"npm install"***.
- Luego, inicia el proyecto con ***"npx expo start --dev-client"***.
- No olvides instalar la **APK** en el dispositivo de prueba, ya sea emulador o dispositivo físico.

## Construido con 🛠️

- `expo` (~48.0.18): Expo fué utilizada para la creación base de la aplicación, simplificando la configuración de nuestro proyecto.

- `expo-dev-client` (~2.2.1): Esta dependencia es parte de las herramientas de desarrollo de Expo y nos permite depurar y desarrollar nuestra aplicacion de manera eficiente en tiempo real.

- `expo-font` (~11.1.1): Con expo-font manejamos las fuentes que utilizamos dentro de nuesta aplicación.

- `expo-media-library` (~15.2.3): Esta nos permite acceder al sistema de archivos del dispositivo para ser utilizados dentro de la aplicación.

- `expo-image-picker` (~14.1.1): Con esta sumamos la posibilidad de seleccionar facilmente, una imagen alojada dentro del dispositivo.

- `react-native-screens` (~3.20.0): React Native Screens es una biblioteca que mejora el rendimiento de las pantallas de navegación en aplicaciones React Native.

- `react-native-safe-area-context` (4.5.0): Esta biblioteca se utilizó para gestionar áreas seguras, lo que garantiza que los elementos de la interfaz de usuario se coloquen de manera adecuada.

- `react-native-track-player` (^3.2.0): React Native Track Player nos provee la base para implementar la reproducción de medios en el dispositivo, aún en segundo plano. 

- `react-redux` (^8.1.1): Se utilizó para manejar los estados globales de la aplicación.

- `@reduxjs/toolkit` (^1.9.5): Se implementó para simplificar el manejo de los estados en redux y la implementación de servicios.

- `@react-navigation/native` (^6.1.7): Nos dió la base para implementar la navegación en nuestra aplicación.

- `@react-navigation/native-stack` (^6.9.13): Provee la capacidad de crear navegaciones por pila dentro de cada sección.

- `@react-navigation/bottom-tabs` (^6.5.8): Fué implementado para crear las pestañaz que albergar las pilas de navegación. 


## Estado del Proyecto 🚥

Este proyecto está en desarrollo y aún se encuentra en una fase temprana.

## Autor ✒️
Maximiliano Jarzynski - [LinkedIn](https://www.linkedin.com/in/maximiliano-jarzynski/) - [GitHub](https://github.com/Maxjarzy/)
