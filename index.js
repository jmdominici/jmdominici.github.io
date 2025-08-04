
const carrusel = document.getElementById('carrusel-image-container');
// if (carrusel) { // Check if carrusel is not null
//     console.log("Se encontro el div");
// } else {
//     console.error("Element with ID 'carrusel' not found.");
// }
const imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Array de imágenes

let imagenActual = 1;

function cambiarImagen() {
  imagenActual = (imagenActual + 1) % imagenes.length; // Cambia entre imagen1.jpg, imagen2.jpg, imagen3.jpg
//   console.log(`url('imagen${imagenActual}.png')`)
//   carrusel.style.backgroundImage = `url('/images/imagen${imagenActual}.png')`;
  carrusel.style.backgroundImage = `url('/images/carrusel/${imagenes[imagenActual]}')`;
}

// Llama a la función cada cierto intervalo de tiempo (ej. cada 3 segundos)
setInterval(cambiarImagen, 3000);

document.getElementById('anterior').addEventListener('click', () => {
  imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
  carrusel.style.backgroundImage = `url('/images/carrusel/${imagenes[imagenActual]}')`;
});

document.getElementById('siguiente').addEventListener('click', () => {
  imagenActual = (imagenActual + 1 + imagenes.length) % imagenes.length;
  console.log(`url('/images/carrusel/${imagenes[imagenActual]}')`)
  carrusel.style.backgroundImage = `url('/images/carrusel/${imagenes[imagenActual]}')`;
});



// Precargar imágenes para evitar retrasos
function precargarImagenes() {
  imagenes.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
precargarImagenes();