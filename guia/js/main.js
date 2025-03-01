// Espera a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Array de productos (22 en total: 2 originales + 20 adicionales)
    const productos = [
      { id: 1, nombre: "Quitapelusas Philips GC026/80",  descripcion: "Elimina eficazmente las pelusas de tus prendas.",  precio: 780.00, imagen: "assets/img/producto1.jpg" },
      { id: 2, nombre: "Picadora manual de alimentos",  descripcion: "Descripción breve del producto 2.",  precio: 660.00, imagen: "assets/img/producto2.jpg" },
      { id: 3, nombre: "Producto 3",  descripcion: "Descripción breve del producto 3.",  precio: 660.00, imagen: "assets/img/producto3.jpg" },
      { id: 4, nombre: "Producto 4",  descripcion: "Descripción breve del producto 4.",  precio: 90.00,  imagen: "assets/img/producto4.jpg" },
      { id: 5, nombre: "Producto 5",  descripcion: "Descripción breve del producto 5.",  precio: 200.00, imagen: "assets/img/producto5.jpg" },
      { id: 6, nombre: "Producto 6",  descripcion: "Descripción breve del producto 6.",  precio: 80.00,  imagen: "assets/img/producto6.jpg" },
      { id: 7, nombre: "Producto 7",  descripcion: "Descripción breve del producto 7.",  precio: 110.00, imagen: "assets/img/producto7.jpg" },
      { id: 8, nombre: "Producto 8",  descripcion: "Descripción breve del producto 8.",  precio: 130.00, imagen: "assets/img/producto8.jpg" },
      { id: 9, nombre: "Producto 9",  descripcion: "Descripción breve del producto 9.",  precio: 95.00,  imagen: "assets/img/producto9.jpg" },
      { id: 10, nombre: "Producto 10", descripcion: "Descripción breve del producto 10.", precio: 140.00, imagen: "assets/img/producto10.jpg" },
      { id: 11, nombre: "Producto 11", descripcion: "Descripción breve del producto 11.", precio: 160.00, imagen: "assets/img/producto11.jpg" },
      { id: 12, nombre: "Producto 12", descripcion: "Descripción breve del producto 12.", precio: 170.00, imagen: "assets/img/producto12.jpg" },
      { id: 13, nombre: "Producto 13", descripcion: "Descripción breve del producto 13.", precio: 180.00, imagen: "assets/img/producto13.jpg" },
      { id: 14, nombre: "Producto 14", descripcion: "Descripción breve del producto 14.", precio: 190.00, imagen: "assets/img/producto14.jpg" },
      { id: 15, nombre: "Producto 15", descripcion: "Descripción breve del producto 15.", precio: 210.00, imagen: "assets/img/producto15.jpg" },
      { id: 16, nombre: "Producto 16", descripcion: "Descripción breve del producto 16.", precio: 220.00, imagen: "assets/img/producto16.jpg" },
      { id: 17, nombre: "Producto 17", descripcion: "Descripción breve del producto 17.", precio: 230.00, imagen: "assets/img/producto17.jpg" },
      { id: 18, nombre: "Producto 18", descripcion: "Descripción breve del producto 18.", precio: 240.00, imagen: "assets/img/producto18.jpg" },
      { id: 19, nombre: "Producto 19", descripcion: "Descripción breve del producto 19.", precio: 250.00, imagen: "assets/img/producto19.jpg" },
      { id: 20, nombre: "Producto 20", descripcion: "Descripción breve del producto 20.", precio: 260.00, imagen: "assets/img/producto20.jpg" },
    ];
  
    /**
     * Función para generar y renderizar los productos en el contenedor.
     */
    function generarProductos() {
      const contenedor = document.getElementById('productos-container');
      if (contenedor) {
        productos.forEach(producto => {
          const article = document.createElement('article');
          article.className = 'producto';
          article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
          `;
          contenedor.appendChild(article);
        });
      }
      // Una vez generados los productos, asigna los eventos a los botones
      asignarEventosBotones();
    }
  
    /**
     * Asigna el evento de click a cada botón "Agregar al Carrito".
     */
    function asignarEventosBotones() {
      const botones = document.querySelectorAll('.btn-agregar');
      botones.forEach(button => {
        button.addEventListener('click', function () {
          const idProducto = this.getAttribute('data-id');
          agregarAlCarrito(idProducto);
        });
      });
    }
  
    // Llamada inicial para generar los productos
    generarProductos();
  });
  
  /**
   * Función para simular la adición de un producto al carrito.
   * @param {string} idProducto - Identificador del producto.
   */
  function agregarAlCarrito(idProducto) {
    console.log(`Producto ${idProducto} agregado al carrito`);
    mostrarNotificacion(`Producto ${idProducto} agregado al carrito`);
  }
  
  /**
   * Muestra una notificación en pantalla y la remueve después de 3 segundos.
   * @param {string} mensaje - Mensaje a mostrar en la notificación.
   */
  function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.innerText = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
      notificacion.remove();
    }, 3000);
  }
  