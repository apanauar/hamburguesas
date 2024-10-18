let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.getElementById('producto-contenedor').addEventListener('click', (event) => {
  if (event.target.classList.contains('agregar')) {
    agregarAlCarrito(event.target.id);
  }
});

const agregarAlCarrito = (productoId) => {
  const productoExistente = carrito.find(producto => producto.id == productoId);
  if (productoExistente) {
    incrementarCantidad(productoExistente);
  } else {
    const producto = productos.find(producto => producto.id == productoId);
  if (producto) {
    agregarNuevoProducto(producto);
  }
  }
  actualizarTotalYGuardar();
};

const incrementarCantidad = (producto) => {
  producto.cantidad++;
  document.getElementById(`cantidad${producto.id}`).textContent = `Cantidad: ${producto.cantidad}`;
};

const agregarNuevoProducto = (producto) => {
  const nuevoProducto = { ...producto, cantidad: 1 };
  carrito.push(nuevoProducto);
  mostrarProductoEnCarrito(nuevoProducto);
};

const mostrarProductoEnCarrito = (producto) => {
  const div = document.createElement('div');
  div.classList.add('productoEnCarrito');
  div.innerHTML = `
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-light boton-eliminar" value="${producto.id}">X</button>
    `;
    document.getElementById('carrito-contenedor').appendChild(div);

};

const eliminarProducto = (productoId) => {
  const productoIndex = carrito.findIndex(producto => producto.id == productoId);
  if (productoIndex >= 0) {
    if (carrito[productoIndex].cantidad > 1) {
      carrito[productoIndex].cantidad--;
    } else {
      carrito.splice(productoIndex, 1);
    }
  }

  actualizarCarrito();
};

const actualizarCarrito = () => {
  const carritoContenedor = document.getElementById('carrito-contenedor');
  carritoContenedor.innerHTML = '';
  carrito.forEach(producto => mostrarProductoEnCarrito(producto));
  actualizarTotalYGuardar();
};

const actualizarTotalYGuardar = () => {
  const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  const compraTotal = carrito.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
  document.getElementById('contador-carrito').innerText = cantidadTotal;
  document.getElementById('precioTotal').innerText = compraTotal;
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

const finalizarCompra = () => {
  Swal.fire({
    title: 'Compra Finalizada',
    text: 'Gracias por su compra. ¡Su pedido está siendo procesado!',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
  carrito = [];
  actualizarCarrito();
};


document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();
  actualizarCarrito();
});