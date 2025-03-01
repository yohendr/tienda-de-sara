function agregarAlCarrito(idProducto) {
    // Recupera el carrito existente desde localStorage
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [localStorage];
  
    // Busca el producto en el array global "productos"
    const producto = productos.find(p => p.id.toString() === idProducto.toString());
    if (producto) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      const index = cart.findIndex(item => item.id === producto.id);
      if (index !== -1) {
        cart[index].cantidad += 1;
      } else {
        // Si no existe, lo agrega con cantidad 1
        cart.push({ ...producto, cantidad: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      mostrarNotificacion(`Producto ${producto.nombre} agregado al carrito`);
    }
  }
  