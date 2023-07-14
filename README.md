La página web en cuestión es una revista interactiva que muestra artículos relacionados con la temática de adicciones como un estado entre la vida y la muerte. Los objetivos de la página web son proporcionar información sobre cómo se desarrollan las conductas adictivas de manera general y los diferentes tipos de adicciones que influyen hoy en día, como el alcohol, el tabaquismo, las ciberadicciones y las drogas de carácter ilegal, de manera que los usuarios puedan leer los artículos, ver imágenes relacionadas y abrir un modal con contenido ampliado cuando hacen clic en un artículo.

En relación a los aspectos técnicos, el código de la página cuenta con HTML, CSS y JavaScript para llevar a cabo su funcionalidad. Al cargar la página, se realiza una petición para obtener los datos desde un archivo JSON, que contiene el título de la revista y la información de los artículos. El código dinámicamente genera los elementos HTML necesarios para mostrar los artículos, incluyendo su título, imagen y una descripción limitada. Además, se implementa un modal que muestra el contenido completo de un artículo seleccionado.

Los objetivos técnicos del código incluyen garantizar la funcionalidad de la página web, asegurar que sea responsive y se adapte a diferentes dispositivos, optimizar los tiempos de carga, mantener un código organizado y fácil de mantener, ser compatible con diferentes navegadores.

Json

En el apartado del archivo data. Json contiene cada una de las diferentes secciones relacionadas con la información de los artículos de la revista, así como las diferentes imágenes que sirven de complemento para dicha información, de esta manera cada uno de los diferentes contenidos se organizan en base a la siguiente estructura para permitirnos dividir los diferentes artículos y el título de la revista.

titulo:"
imagen:"
contenido:"
imagen2:"
contenido2:"
imagen3:"
contenido3:"

HTML

El código HTML cuenta inicialmente con una etiqueta img que nos permite agregar el logo de la revista, seguidamente de un h1 que contine el título de la revista, el cual es Adicciones, Equilibrio Entre Vida y Muerte. Además de esto también se incorpora un div que incorpora un input, un buttom y un ul para la parte del buscador interno de la página. 

img src="imágenes/logo-revista.png" class="logo" alt="">
  h1 id="revista-título">/h1>
 div class="container mt-5">
        input type="text" id="formulario" class="form-control my-2" placeholder="buscar">
        button class="btn btn-info mb-2" id="boton">Buscar/button>
        ul id="resultado" class="contenedor">
           
        </ul>
    </div>

Seguidamente se agrega un div que alberga las tarjetas de los diferentes segmentos que se generan de manera dinámica, al igual que este se agrega un div para la parte de las ventanas modal de cada una de las tarjetas con las diferentes etiquetas como h2, p e img, para reflejar los contenidos del Json.

div id="articulos-container">/div>
div id="modal" class="modal">
div class="modal-content">
span class="close"&times/span>
h2 id="modal-título">/h2>
img id="modal-imagen1" src="" alt="" class="modal-imagen">
p id="modal-contenido">/p>
img id="modal-imagen2" src="" alt="" class="modal-imagen">
p id="modal-contenido2">/p>
img id="modal-imagen3" src="" alt="" class="modal-imagen">
p id="modal-contenido3">/p
/div>
/div>

en consiguiente se agrega un div que contine un par de etiquetas a ´para generar vínculos en forma de botones, estos vínculos cumplen con la finalidad de direccionar a los usuarios, tanto a un repositorio de imágenes a google sites como al enlace de un video de YouTube, relacionado con un cortometraje sobre las ciberadicciones, por lo dicho botones se describen como un enlace a imágenes y video.

div class="btn-container">
a href="https://sites.google.com/view/adicct/ilustraciones" class="btn-primario">Imagenes/a>
a href="https://youtu.be/8d_0XQHOh6w" class="btn-secundario">Video/a>
/div>

finalmente agregamos un campo para poder enlazar el código HTML a un documento js para poder darle funcionalidad por medio de una etiqueta script src="app.js">/script>.

CSS

En el apartado CSS definimos los aspectos esenciales de las diferentes etiquetas HTML por medio de cada una de las diferentes clases asignadas a las diferentes etiquetas, al igual que los id de ciertos campos.

Inicialmente comenzamos a definir los aspectos generales de los documentos contemplados en el body, por medio de una position relative que permite que este esté posicionado relativo a sí mismo.

Dentro de body: before definen las propiedades de este pseudo-elemento. Se 
establece una imagen de fondo repetida horizontalmente, con un tamaño de 80px y una 
opacidad de 0.7. También se aplica una rotación de 10 grados y se ajusta la posición y el tamaño.

El selector h1 aplica estilos a los elementos <h1> de la página, centrando el texto y añadiendo un padding de 20px en la parte superior e inferior.

El selector #articulos-container aplica estilos al contenedor de los artículos, utilizando flexbox para centrar y alinear los elementos en el centro. Además, se añade un padding de 20px.

El selector container define principalmente el posicionamiento de los elementos del buscador.

Los selectores form-control, btn, definen los aspectos relacionados con los aspectos de los diferentes elementos que conforman la barrra de búsqueda, desde su posición hasta las propiedades de ancho de y alto.

El selector de búsqueda define las propiedades del panel en el que se reflejan los resultados de las búsquedas filtradas, agregando un background-color y color blanco al texto del contenido. 

El selector. articulo-card aplica estilos a las tarjetas de artículo, que son elementos con la clase "articulo-card". Se establece un tamaño flexible con flex-basis y flex-grow, se añaden márgenes, un color de fondo, una sombra y una transición cuando se realiza el desplazamiento del ratón.

El selector. articulo-card: hover define los estilos cuando el ratón se desplaza sobre las tarjetas de artículo, aplicando una transformación de escala en cada una de las tarjetas

Los selectores. articulo-card h3, articulo-card img y .articulo-cara p aplican estilos a los elementos <h3>, <img> y <p> ajustando márgenes y tamaños.

Los selectores relacionados con el modal (. modal,. modal-contento, .close, .modal-imagen, #modal-contenido) establecen estilos para el funcionamiento del modal emergente, como su posición, apariencia, márgenes y tamaño.
El media query @media screen and (max-width: 600px) establece estilos específicos para dispositivos con un ancho de pantalla máximo de 600px. Ajusta los márgenes y el tamaño del contenido del modal y de la imagen para adaptarse mejor a pantallas más pequeñas.

El modal-content define tambien una animación con una transformación de un traslateY con un -150vph y una duración de 1 segundo aproximado.

Modal-cerrado define las animaciones que se aplican al cerrar el modal, respectivamente.
JS

La solicitud fetch se realiza a "data. json" para obtener los datos necesarios.
Se utiliza el método. then () para manejar la respuesta de la solicitud fetch. El resultado de la respuesta se convierte a JSON utilizando el método. json ().

Posteriormente accedemos a los elementos específicos del DOM utilizando document. getElementById (). Obteniendo el elemento con el id "revista-título" y el elemento con el id "articulos-container".

Utilizando textContent se asigna al título de la revista obtenido de los datos el contenido del elemento "revista-título" 

Se itera sobre el arreglo de artículos obtenidos de los datos utilizando. forEach (). Para cada artículo, se crea un nuevo elemento div utilizando document. createElement (), se le añade la clase "articulo-card" utilizando classList.add(), y se establece su contenido HTML utilizando innerHTML con los datos del artículo especificando cada uno de los contenidos del json como contenido, contenido2, contenido3, imagen, imagen2, imagen3.

Se añade un listener de evento 'click' a cada artículo para mostrar un modal utilizando la función mostrarModal ().

Seguidamente añadimos la etiqueta br para separación de parrafos removiendola por \n en cada uno de los diferentes contenidos.

El artículo creado se agrega como hijo del elemento "articulos-container" utilizando appendChild ().

Se seleccionan todas las imágenes dentro de los elementos “. articulo-card" utilizando document. querySelectorAll(), y se ocultan inicialmente estableciendo su estilo de visualización a 'none'.

En caso de producirse un error durante la solicitud fetch, se captura y se muestra un mensaje de error en la consola.

La función limitarDescripcion (texto, longitud) toma un texto y una longitud como parámetros. Divide el texto en palabras, y si la cantidad de palabras es mayor que la longitud especificada, se limita el texto a la longitud indicada y se agrega "..." y un enlace para "Seguir leyendo...". Finalmente, se retorna el texto resultante.

La función mostrarModal(articulo) toma un objeto de artículo como parámetro. Obtiene elementos específicos del DOM utilizando document. getElementById (). Luego, se asignan los datos del artículo a los elementos correspondientes, se ajustan las clases y los estilos para mostrar el modal y la imagen asociada. También se añaden listeners de eventos para cerrar el modal al hacer clic en el botón de cierre o en cualquier área fuera del contenido del modal.

Funcionalidad de la barra de búsqueda

Para desarrollar la barra de búsqueda se creó un arreglo con los datos de cada uno de los artículos mediante la propiedad de título y contenido, de tal forma que al acceder a estos se puede apreciar los subtítulos de los contenidos de cada artículo para dar una idea general a los usuarios del contenido de los artículos.

Para esto cada uno de los artículos se filtra por el buscador y sus
resultados son añadidos de forma dinámica mediante un ul con el id resultado.

La constante del formulario nos permite realizar una operación que permite que al momento de escribir y se presione buscar, pueda detectar el texto mediante el id del formulario, igualmente la constante del botón permite detectar cuando el usuario haga clic en el botón de búsqueda con el id botón.

Con la constante filtrar y la función de flecha se accede a lo que el usuario escribió. Se crea un constante texto para guardar el texto del usuario extraído del formulario y se añade una función tolowercase para pasarlo a minúsculas. 

Se crea un ciclo for para hacer un recorrido de los diferentes artículos, para esto creamos una varible local llamada artículo que proviene de articulos, de esta manera se compara lo que escribió el usuario con lo que tenemos en título. De esta forma accedemos a articulo y a su propiedad título guardándolo en una variable le título de igual forma añadimos una función tolowercase para pasarlo a minúscula.

Dentro de este ciclo hacemos una pregunta que indica que si el indexOf es distinto a -1 se realizara una operación que retorna los elementos existentes, por medio de lo que el usuario escriba.

Creamos un li para almacenar los resultados que se filtren dentro del ul con el id resultado por medio de un innnerHTML, de esta forma añadimos información dinámica añadiendo las propiedades de título y contenido del artículo.

Para concatenar los resultados nos referimos a resultado. innerHTML para que cada vez que se ejecute filtrar el inner.HTML comenzara con un estrean vacío.

Añadimos una pregunta que refleja si inner.HTML es igual estrean vacío incorporemos un li mediante un inner.HTML que indica que el producto no ha sido encontrado.

Añadimos un evento clic al botón para ejecutar añadimos una constante para filtrar.

Añadimos un evento keyup en el formulario para que cada que el usuario escriba algo se valla ejecutando la función filtrar.
