<h1>Indice</h1>
<ol>
      <li><a href="#uno">Conversor de Imagenes en página web</a></li>
      <li><a href="#dos">Requisito</a></li>
      <li><a href="#tres">Arquitecturas Implementada</a></li>
      <li><a href="#cuatro">Librerias Implementadas</a></li>
      <li><a href="#cinco">Como acceder a la aplicación</a></li>
      <li><a href="#seis">A tener presente</a></li>
 </ol>


<h2 id="uno">Conversor de imagenes en pagina Web</h2>

El siguiente proyecto es un convertidor de imágenes diseñado ejecutado via Web, la cual se encarga de buscar una imagen desde cualquier lugar para su conversión en los siguientes formatos GIF, BMP, PNG y JPG.

<h2 id="dos">Dependencias</h2>
+ Se requiere tener instalado en el equipo NodeJs.

<h2 id="tres">Arquitecturas implementada</h2>

La arquitectura que se manejo, fue la arquitectura atómica, la cual consiste en dividir lo que más se pueda cada uno de los componentes, para independizar la lógica o funcionalidades y distribuir de manera eficiente los archivos, donde se pueda obtener un fácil acceso en cuanto a importaciones y comunicación de data. Asi mismo, para simplificar las peticiones dentro de cada uno de estos componentes, parametrizando los datos que van a ser suministrados a componentes principales por medio de containers.

<h2 id="cuatro">Librerías Implementadas</h2>

+ **ReactJs:**
Es una librería de JavaScript construida por Facebook que permite diseñar vistas simples en una página web, los componentes que se construyen dentro de él, son reutilizables y su comunicación es más óptima, ademas se uso está librería de JavaScript con el fin de agilizar los procesos lógicos y las peticiones al Back-end, y con el fin de manejar enrutamientos en cada sección/componente.

+ **Styled-components:**
Es un componente el cual permite trabajar el modulo de CSS en javascript para el manejo de los estilos de la pagina web. Además tiene la ventaja de crear clases automáticas para cada uno de los componentes.

+ **React-router-dom:**
Es una libería para gestionar rutas en aplicaciones que utilicen la libreria ReactJS.

+ **Axios:**
Se trata de una librería Javascript capaz de ejecutarse tanto en el navegador como en NodeJS, que facilita todo tipo de operaciones como cliente HTTP; con Axios puedes realizar solicitudes contra un servidor, completamente configurables, y recibir la respuesta de una manera sencilla de procesa.

<h2 id="cinco">¿Como acceder la aplicación?</h2>
1. Acceder a la dirección URL del sitio.
2. Seleccionar la imagen a convertir.
3. Seleccionar el formato al cual se desea convertir.
4. Descargas el archivo convertido.

<h2 id="seis">A tener presente</h2>

1. Si en principio desea correr el proyecto completo localmente debe primero descargar el proyecto https://github.com/edinsonAC/images-converter donde este sea el backend de la aplicación
2. Luego como se menciona arriba descagar las librerias de node en cada proyecto con el comando npm i abreviatura de install
3. Y ejecutar los comando npm start en el proyecto web con React y para el backed con node deberia iniciar el servidor con el comando npm run start
4. Por ultimo proceder a ver el proyecto corriendo.
