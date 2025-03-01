// js/carrito.js

document.addEventListener('DOMContentLoaded', function() {
  // Recupera el carrito almacenado en localStorage (o inicializa un array vacío)
  let cart = localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];

  const carritoContainer = document.getElementById('carrito-container');
  const totalElement = document.getElementById('total');

  if (cart.length === 0) {
    carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalElement.innerText = '$0.00';
  } else {
    // Crea una tabla para mostrar los productos del carrito
    const table = document.createElement('table');
    table.className = 'tabla-carrito';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody id="tabla-carrito-body"></tbody>
    `;
    carritoContainer.appendChild(table);

    const tbody = document.getElementById('tabla-carrito-body');
    let totalCompra = 0;

    // Recorre cada producto del carrito para crear una fila en la tabla
    cart.forEach((item, index) => {
      const totalItem = item.precio * item.cantidad;
      totalCompra += totalItem;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.nombre}</td>
        <td>$${item.precio.toFixed(2)}</td>
        <td>${item.cantidad}</td>
        <td>$${totalItem.toFixed(2)}</td>
        <td><button data-index="${index}" class="btn-remover">Remover</button></td>
      `;
      tbody.appendChild(row);
    });

    totalElement.innerText = `$${totalCompra.toFixed(2)}`;

    // Asigna eventos para remover productos del carrito
    const btnsRemover = document.querySelectorAll('.btn-remover');
    btnsRemover.forEach(btn => {
      btn.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload(); // Recarga la página para actualizar la visualización
      });
    });
  }
});
