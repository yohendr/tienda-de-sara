const botonesAgregar = document.querySelectorAll('.agregar-carrito');
let carrito = [];

botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
        const producto = evento.target.parentElement;
        const nombreProducto = producto.querySelector('h3').textContent;
        const precioProducto = producto.querySelector('p').textContent;

        carrito.push({ nombre: nombreProducto, precio: precioProducto });
        console.log('Producto agregado al carrito:', nombreProducto);

        // Simulando la actualización del carrito
        alert(`¡${nombreProducto} ha sido agregado al carrito!`);
    });
});
