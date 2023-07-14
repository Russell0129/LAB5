fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const revistaTitulo = document.getElementById('revista-titulo');
    const articulosContainer = document.getElementById('articulos-container');
    revistaTitulo.textContent = data.titulo;

    data.articulos.forEach(articulo => {
      const articuloCard = document.createElement('div');
      articuloCard.classList.add('articulo-card');
      articuloCard.innerHTML = `
        <h3>${articulo.titulo}</h3>
        <img src="${articulo.imagen1}" alt="">
        <p>${limitarDescripcion(articulo.contenido, 30)}</p>
        <img src="${articulo.imagen2}" alt="">
        <p>${limitarDescripcion(articulo.contenido2, 10)}</p>
        <img src="${articulo.imagen3}" alt="">
        <p>${limitarDescripcion(articulo.contenido4, 10)}</p>
        <p>${limitarDescripcion(articulo.contenido5, 10)}</p>
        <p>${limitarDescripcion(articulo.contenido6, 10)}</p>
      `;
      articuloCard.addEventListener('click', () => {
        mostrarModal(articulo);
      });

      articulosContainer.appendChild(articuloCard);
    });

    const imagenes = document.querySelectorAll('.articulo-card img');
    imagenes.forEach(function (imagen) {
      imagen.style.display = 'none'; // Oculta todas las imágenes al cargar la página
    });
  })
  .catch(error => {
    console.log('Error al cargar el archivo JSON:', error);
  });

function limitarDescripcion(texto, longitud) {
  const palabras = texto.split(' ');
  if (palabras.length > longitud) {
    return palabras.slice(0, longitud).join(' ') + '...' + '<br><br>Seguir leyendo...';
  }
  return texto;
}

function mostrarModal(articulo) {
  const modal = document.getElementById('modal');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalImagen1 = document.getElementById('modal-imagen1');
  const modalContenido = document.getElementById('modal-contenido');
  const modalContenido2 = document.getElementById('modal-contenido2');
  const modalContenido3 = document.getElementById('modal-contenido3');
  const modalContenido4 = document.getElementById('modal-contenido4');
  const modalContenido5 = document.getElementById('modal-contenido5');
  const modalContenido6 = document.getElementById('modal-contenido6');
  const modalImagen2 = document.getElementById('modal-imagen2');
  const modalImagen3 = document.getElementById('modal-imagen3');
 

  modalTitulo.textContent = articulo.titulo;
  modalContenido.innerHTML = articulo.contenido.replace(/\n/g, '<br>');
  modalContenido2.innerHTML = articulo.contenido2.replace(/\n/g, '<br>');
  modalContenido3.innerHTML = articulo.contenido3.replace(/\n/g, '<br>');
  modalContenido4.innerHTML = articulo.contenido4.replace(/\n/g, '<br>');
  modalContenido5.innerHTML = articulo.contenido5.replace(/\n/g, '<br>');
  modalContenido6.innerHTML = articulo.contenido6.replace(/\n/g, '<br>');
  modalContenido.classList.add('modal-abierto');


  modal.style.display = 'block';

  modalImagen1.style.display = 'none'; // Oculta la imagen inicialmente
  modalImagen2.style.display = 'none'; // Oculta la imagen inicialmente
  modalImagen3.style.display = 'none'; // Oculta la imagen inicialmente


  modalImagen1.onload = function () {
    modalImagen1.style.display = 'block'; // Muestra la imagen cuando se carga
  };

  modalImagen1.src = articulo.imagen1;

  modalImagen2.onload = function () {
    modalImagen2.style.display = 'block'; // Muestra la imagen cuando se carga
  };
  modalImagen2.src = articulo.imagen2;
 
  modalImagen3.onload = function () {
    modalImagen3.style.display = 'block'; // Muestra la imagen cuando se carga
  };

  modalImagen3.src = articulo.imagen3;



  
  const closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.addEventListener('click', () => {
    modalContenido.classList.add('modal-cerrado');
    
  

    setTimeout(() => {
      modalContenido.classList.remove('modal-cerrado');
      modal.style.display = 'none';
    }, 300);
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      modalContenido.classList.remove('modal-abierto');
      modal.style.display = 'none';
    }
  });
}
//Barra de Busqueda

const articulos = [
  {titulo:'Procesos de Desarrollo de una Mente Aditiva.', 
  contenido: '<br>Factores de Adicción un Peligro Desconocido<Br>Procesos de Adicción.'},
  {titulo:'Sistema de recompensa cerebral un mecanismo fuera de control.', 
  contenido: '<br>Por qué nos Volvemos Dependientes<Br>Descontrol en el Cerebro'},
  {titulo:'Adicciones neurotransmisoras que generan placer.', 
  contenido: '<br>Una Incidencia Biológica<Br>Neurotransmisores involucrados en la adicción.'},
  {titulo:'Ciberadicciones una Amenaza Inadvertida.',
  contenido: '<br>Ciberadicciones, Una Falta de Control<Br>A solo un click.'},
  {titulo:'El origen de la rutina entorno a las ciberadicciones.', 
  contenido: '<br>El uso Frecuente<Br>Modalidades de Uso un factor clave'},
  {titulo:'El Abuso de las Actividades en Línea.', 
  contenido: '<br>Un Hábito Indeseado'},
  {titulo:'Prácticas Compulsivas del Alcohol.', 
  contenido: '<br>Un Medio de escape de la Realidad<Br>El Origen de los Círculos Viciosos'},
  {titulo:'Factores que Aumentan el Riesgo del Consumo del Alcohol', 
  contenido: '<br>Las Malas Relaciones<Br>Una Influencia Multifactorial'},
  {titulo:'El alcohol, un riesgo en la salud y la vida social.', 
  contenido: '<br>Efectos Desencadenados por la Dependencia<Br>Aspectos de la Salud'},
  {titulo:'Tabaquismo una Amenaza Desprevenida', 
  contenido: '<br>Un Mal de Daños Acumulados<Br>Una Enfermedad Crónica'},
  {titulo:'La persistencia del tabaco en la vida de las personas', 
  contenido: '<br>El Compuesto Toxico Adictivo.<Br>La Nicotina en el Cerebro del Consumidor'},
  {titulo:'Los efectos del tabaco desencadenados en la vida', 
  contenido: '<br>Un Alto Precio que se Paga con la vida<Br>Las consecuencias Reflejadas'},
  {titulo:'Adicto a la Verdad: La Verdad Sobre las Drogas', 
  contenido: '<br>La Controversia Hacia las Drogas.<Br>Efectos Devastadores, un Atentado a la Salud'},
  {titulo:'Más Allá del Viaje: Explorando el Mundo de las Drogas', 
  contenido: '<br>Un Falso Placer, una Verdad Ireplicable<Br>Variedad de consumo, Una Amplia Categoría'},
  {titulo:'Rompiendo Cadenas: Superando la Adicción a las Drogas', 
  contenido: '<br>Camino a la Recuperación<Br>Una Vida Plena y Libre de Adicciones'},
]


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{

  resultado.innerHTML = '';

  const texto = formulario.value.toLowerCase();

  for(let articulo of articulos){
      let titulo = articulo.titulo.toLowerCase();
      if(titulo.indexOf(texto) !== -1){
          resultado.innerHTML += `
          <li class="busqueda">${articulo.titulo} <br>- contenido: ${articulo.contenido}</li>
          
          `

      }
  }

  if(resultado.innerHTML === ''){
      resultado.innerHTML += `
          <li>Producto no encontrado...</li>
          `
  }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)




